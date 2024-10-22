<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StreetMarket extends Model
{
    use HasFactory;

    protected $guarded = ['id'];
    protected $table = 'street_market';
}
