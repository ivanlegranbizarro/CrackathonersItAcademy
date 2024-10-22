<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\File;
use Carbon\Carbon;

class StreetMarketFactory extends Factory
{
    /**
     * @var array
     */
    protected static $marketData = null;

    /**
     * @var int
     */
    protected static $currentIndex = 0;

    /**
     * Initialize the market data from JSON file
     */
    protected function initializeMarketData()
    {
        if (static::$marketData === null) {
            $jsonPath = public_path('api/data/fires_mercats_final.json');
            $jsonContent = File::get($jsonPath);
            static::$marketData = json_decode($jsonContent, true);

            // Si el JSON es un objeto único, conviértelo en array
            if (!is_array(static::$marketData)) {
                static::$marketData = [static::$marketData];
            }
        }
    }

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $this->initializeMarketData();

        // Si no hay más datos, reinicia el índice
        if (static::$currentIndex >= count(static::$marketData)) {
            static::$currentIndex = 0;
        }

        $market = static::$marketData[static::$currentIndex];
        static::$currentIndex++;

        return [
            'name' => $market['name'] ?? null,
            'date_creation' => isset($market['date_creation']) ? Carbon::createFromTimestampMs($market['date_creation'])->format('Y-m-d') : null,
            'address' => $market['address'] ?? null,
            'address_number' => $market['address_number'] ?? null,
            'neighborhood' => $market['neighborhood'] ?? null,
            'district' => $market['district'] ?? null,
            'zip_code' => $market['zip_code'] ?? null,
            'town' => $market['town'] ?? null,
            'coord_lat' => $market['coord_lat'] ?? null,
            'coord_lon' => $market['coord_lon'] ?? null,
            'phone' => $market['phone'] ?? null,
            'schedule' => $market['schedule'] ?? null,
            'type' => stripos($market['name'], 'mercat') !== false ? 'market' : 'fair',
        ];
    }
}
