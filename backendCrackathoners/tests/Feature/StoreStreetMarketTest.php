<?php
namespace Tests\Feature\Controller;

use App\Http\Controllers\StreetMarketController;
use Tests\TestCase;
use Illuminate\Foundation\Testing\DatabaseTransactions;

class StoreStreetMarketTest extends TestCase
{
    use DatabaseTransactions;

    protected array $data = [
        'name' => 'New Market',
        'date_creation' => '2024-01-01',
        'address' => '123 Market St',
        'address_number' => 'A',
        'neighborhood' => 'Downtown',
        'district' => 'City Center',
        'zip_code' => '12345',
        'town' => 'Metropolis',
        'coord_lat' => "40.7128",
        'coord_lon' => "-74.0060",
        'phone' => '1234567890',
        'schedule' => 'https://www.prueba.com',
        'type' => 'market',
    ];

    protected function setUp(): void
    {
        parent::setUp();
    }

    public function testCanCallMethodStore(): void
    {
        $this->assertTrue(method_exists(StreetMarketController::class, 'store'));
    }

    public function testStoreReturns201WhenStreetMarketIsCreated(): void
    {

        $response = $this->postJson(route('street_market.store'), $this->data);

        $response->assertStatus(201)
                ->assertJson(['message' => 'Street Market created successfully']);

        $this->assertDatabaseHas('street_market', [
            'name' => 'New Market',
        ]);
    }

    public function testStoreReturns422WhenRequiredFieldsAreMissing(): void
    {
        $data = [
            'date_creation' => '2024-01-01',
            'address' => '123 Market St',
        ];

        $response = $this->postJson(route('street_market.store'), $data);

        $response->assertStatus(422);
    }

    public function testStoreReturns422WhenDataFormatIsInvalid(): void
    {
        $data = [
            'name' => 'New Market',
            'date_creation' => 'invalid-date',
            'address' => '123 Market St',
        ];

        $response = $this->postJson(route('street_market.store'), $data);

        $response->assertStatus(422);
    }


    public function testStoreDoesNotExposeSensitiveFields(): void
    {
        $response = $this->postJson(route('street_market.store'), $this->data);

        $response->assertStatus(201)
                 ->assertJsonMissing([
                     'id',
                 ]);
    }
}
