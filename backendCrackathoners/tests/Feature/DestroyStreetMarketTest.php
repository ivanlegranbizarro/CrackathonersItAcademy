<?php

namespace Tests\Feature\Controller;

use App\Models\StreetMarket;
use Illuminate\Foundation\Testing\DatabaseTransactions;
use Tests\TestCase;

class DestroyStreetMarketTest extends TestCase
{
    use DatabaseTransactions;

    protected StreetMarket $streetMarket;

    protected function setUp(): void
    {
        parent::setUp();
        $this->streetMarket = StreetMarket::factory()->create();
    }

    public function testCanCallMethodDestroy(): void
    {
        $this->assertTrue(method_exists(\App\Http\Controllers\StreetMarketController::class, 'destroy'));
    }

    public function testDestroyReturns204WhenStreetMarketIsDeleted(): void
    {
        $response = $this->deleteJson(route('street_market.destroy', $this->streetMarket->id));

        $response->assertStatus(204);

        $this->assertDatabaseMissing('street_market', [
            'id' => $this->streetMarket->id,
        ]);
    }

    public function testDestroyReturns404WhenStreetMarketDoesNotExist(): void
    {
        $invalidId = 999999;

        $response = $this->deleteJson(route('street_market.destroy', $invalidId));

        $response->assertStatus(404);
    }
}
