<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('street_market', function (Blueprint $table) {
            $table->renameColumn('coord_x', 'coord_lat');
            $table->renameColumn('coord_y', 'coord_lon');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('street_market', function (Blueprint $table) {
            $table->renameColumn('coord_lat', 'coord_x');
            $table->renameColumn('coord_lon', 'coord_y');
        });
    }
};
