<?php

namespace Database\Seeders;

use App\Models\StreetMarket;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\File;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $filePath = public_path('api/data/fires_mercats_final.json');
        $jsonContent = File::get($filePath);
        $marketsData = json_decode($jsonContent, true);

        // Verificar si hay un error de decodificación
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \Exception('Error al decodificar el JSON: ' . json_last_error_msg());
        }

        // Contar cuántos elementos hay en el JSON
        $count = count($marketsData);

        // Sembrar tantos registros como elementos hay en el JSON
        StreetMarket::factory()->count($count)->create();
    }
}