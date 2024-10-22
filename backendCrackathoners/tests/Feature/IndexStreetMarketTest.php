<?php

namespace Tests\Feature;

use App\Http\Controllers\StreetMarketController;
use App\Models\StreetMarket;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class IndexStreetMarketTest extends TestCase
{
    use DatabaseTransactions;

    protected function setUp(): void
    {
        parent::setUp();
        StreetMarket::factory()->count(3)->create();
    }

    public function testCanInstantiateStreetMarketController()
    {
        $this->assertInstanceOf(StreetMarketController::class, new StreetMarketController());
    }

    public function testCanGetAllStreetMarkets()
    {
        $response = $this->getJson(route('street_market.index'));

        $response->assertStatus(200);
    }

    public function testIndexReturnsCorrectStructure(): void
    {
        $response = $this->getJson(route('street_market.index'));

        $response->assertStatus(200)
                 ->assertJsonStructure([
                    '*' => [
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
                    ]
                 ]);
    }

    public function testIndexReturnsCorrectData(): void
    {
        StreetMarket::factory()->create([
            'name' => 'Test Market',
            'type' => 'market',
        ]);

        $response = $this->getJson(route('street_market.index'));

        $response->assertStatus(200)
                 ->assertJsonFragment([
                    'name' => 'Test Market',
                    'type' => 'market',
                 ]);
    }

    public function testIndexDoesNotExposeSensitiveFields(): void
    {
        $response = $this->getJson(route('street_market.index'));

        $response->assertStatus(200)
                 ->assertJsonMissing([
                    'id',
                 ]);
    }

}
