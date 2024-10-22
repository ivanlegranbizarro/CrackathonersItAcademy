<?php

namespace Database\Seeders;

use App\Models\User;
use Database\Factories\StreetMarketFactory;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        StreetMarketFactory::new()->count(10)->create();

    }
}
