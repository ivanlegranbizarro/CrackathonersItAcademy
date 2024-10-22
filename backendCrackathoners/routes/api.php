<?php

use App\Http\Controllers\StreetMarketController;
use Illuminate\Support\Facades\Route;

Route::apiResource('street_market', StreetMarketController::class)->only(['index', 'show']);
