<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreetMarket extends Model
{

    protected $guarded = ['id'];

    /** @use HasFactory<\Database\Factories\StreetMarketFactory> */
    use HasFactory;
}
