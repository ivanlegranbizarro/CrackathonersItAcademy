<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\StreetMarket>
 */
class StreetMarketFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->name(),
            'date_creation' => fake()->date(),
            'address' => fake()->address(),
            'address_number' => fake()->buildingNumber(),
            'neighborhood' => fake()->city(),
            'district' => fake()->city(),
            'zip_code' => fake()->postcode(),
            'town' => fake()->city(),
            'coord_x' => fake()->latitude(),
            'coord_y' => fake()->longitude(),
            'phone' => fake()->phoneNumber(),
            'schedule' => fake()->url(),
            'type' => fake()->randomElement(['market', 'fair']),
        ];
    }
}
