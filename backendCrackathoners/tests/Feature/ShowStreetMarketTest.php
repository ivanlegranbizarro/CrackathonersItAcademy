<?php

namespace Tests\Feature\Controller;

use App\Models\StreetMarket;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ShowStreetMarketTest extends TestCase
{
    use RefreshDatabase;

    protected StreetMarket $streetMarket;

    protected function setUp(): void
    {
        parent::setUp();
        $this->streetMarket = StreetMarket::factory()->create();
    }


    public function testShowReturns200WhenStreetMarketExists(): void
    {
        $response = $this->getJson(route('street_market.show', $this->streetMarket->id));

        $response->assertStatus(200);
    }

    public function testShowReturns404WhenStreetMarketDoesNotExist(): void
    {
        $nonExistentId = 999;

        $response = $this->getJson(route('street_market.show', $nonExistentId));

        $response->assertStatus(404);
    }

    public function testShowReturnsCorrectStructure(): void
    {
        $response = $this->getJson(route('street_market.show', $this->streetMarket->id));

        $response->assertStatus(200)
                 ->assertJsonStructure([
                    'id',
                    'name',
                    'date_creation',
                    'address',
                    'address_number',
                    'neighborhood',
                    'district',
                    'zip_code',
                    'town',
                    'coord_lat',
                    'coord_lon',
                    'phone',
                    'schedule',
                    'type',
                    'created_at',
                    'updated_at',
                 ]);
    }

    public function testShowReturnsCorrectData(): void
    {
        $response = $this->getJson(route('street_market.show', $this->streetMarket->id));

        $response->assertStatus(200)
                 ->assertJsonFragment([
                    'name' => $this->streetMarket->name,
                    'type' => $this->streetMarket->type,
                 ]);
    }

    public function testShowDoesNotExposeSensitiveFields(): void
    {
        $response = $this->getJson(route('street_market.show', $this->streetMarket->id));

        $response->assertStatus(200)
                 ->assertJsonMissing([
                    'id',
                 ]);
    }

    public function testShowReturns404ForInvalidIdFormat(): void
    {
        $invalidId = 'abc';

        $response = $this->getJson(route('street_market.show', $invalidId));

        $response->assertStatus(404);
    }
}
