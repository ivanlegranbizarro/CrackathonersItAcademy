<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    
    public function up(): void
    {
        Schema::create('street_market', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->date('date_creation');
            $table->string('address');
            $table->string('address_number');
            $table->string('neighborhood');
            $table->string('district');
            $table->string('zip_code');
            $table->string('town');
            $table->string('coord_x');
            $table->string('coord_y');
            $table->string('phone')->nullable();
            $table->string('schedule');
            $table->enum('type',['market', 'fair']);
            $table->timestamps();
        });
    }

    
    public function down(): void
    {
        Schema::dropIfExists('street_market');
    }
};
