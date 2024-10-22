<?php

namespace Tests\Feature\Controller;

use App\Http\Controllers\StreetMarketController;
use App\Models\StreetMarket;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class UpdateStreetMarketTest extends TestCase
{
    use DatabaseTransactions;

    protected array $data;
    protected StreetMarket $streetMarket;

    protected function setUp(): void
    {
        parent::setUp();

        $this->streetMarket = StreetMarket::factory()->create();
        $this->data = [
            'name' => 'Updated Market',
            'date_creation' => '2023-01-01',
            'address' => '456 Updated St',
            'address_number' => 'B',
            'neighborhood' => 'New Town',
            'district' => 'City Center',
            'zip_code' => '54321',
            'town' => 'New Metropolis',
            'coord_x' => "500",
            'coord_y' => "600",
            'phone' => '0987654321',
            'schedule' => 'https://www.updated-schedule.com',
            'type' => 'market',
        ];
    }

    public function testCanCallMethodUpdate(): void
    {
        $this->assertTrue(method_exists(StreetMarketController::class, 'update'));
    }

    public function testUpdateReturns200WhenStreetMarketIsUpdated(): void
    {
        $response = $this->putJson(route('street_market.update', $this->streetMarket->id), $this->data);

        $response->assertStatus(200);
        $this->assertDatabaseHas('street_market', [
            'id' => $this->streetMarket->id,
            'name' => 'Updated Market',
        ]);
    }

    public function testUpdateReturns422WhenNameIsNotUnique(): void
    {
        $existingMarket = StreetMarket::factory()->create(['name' => 'Duplicate Market']);

        $response = $this->putJson(route('street_market.update', $this->streetMarket->id), [
            'name' => $existingMarket->name,
        ]);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['name']);
    }

    public function testUpdateReturns422WhenDataFormatIsInvalid(): void
    {
        $invalidData = [
            'date_creation' => 'invalid-date',
            'coord_x' => 7878,
            'coord_y' => 9090,
            'schedule' => 'not-a-valid-url',
        ];

        $response = $this->putJson(route('street_market.update', $this->streetMarket->id), $invalidData);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['date_creation', 'coord_x', 'coord_y', 'schedule']);
    }

    public function testUpdateReturns422WhenTypeIsInvalid(): void
    {
        $invalidData = [
            'type' => 'invalid-type',
        ];

        $response = $this->putJson(route('street_market.update', $this->streetMarket->id), $invalidData);

        $response->assertStatus(422)
                 ->assertJsonValidationErrors(['type']);
    }

    public function testUpdateAllowsNullableFields(): void
    {
        $dataWithNulls = [
            'phone' => null,
            'schedule' => null,
        ];

        $response = $this->putJson(route('street_market.update', $this->streetMarket->id), $dataWithNulls);

        $response->assertStatus(200);
        $this->assertDatabaseHas('street_market', [
            'id' => $this->streetMarket->id,
            'phone' => null,
            'schedule' => null,
        ]);
    }

    public function testUpdateDoesNotExposeSensitiveFields(): void
    {
        $response = $this->putJson(route('street_market.update', $this->streetMarket->id), $this->data);

        $response->assertStatus(200)
                 ->assertJsonMissing([
                     'id',
                 ]);
    }
}
