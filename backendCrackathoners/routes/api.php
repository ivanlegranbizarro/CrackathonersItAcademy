<?php

use App\Models\StreetMarket;
use Illuminate\Support\Facades\Route;

Route::apiResource('streetmarket', StreetMarket::class)->only(['index', 'show']);
