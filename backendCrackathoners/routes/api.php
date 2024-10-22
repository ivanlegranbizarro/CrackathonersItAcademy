<?php

use App\Models\StreetMarket;
use Illuminate\Support\Facades\Route;

Route::apiResource('streetmakert', StreetMarket::class)->only(['index', 'show']);
