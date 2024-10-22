<?php

namespace App\Http\Controllers;

use App\Models\StreetMarket;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StreetMarketController extends Controller
{
    public function index() : JsonResponse
    {
        $streetMarkets = StreetMarket::all();
        return response()->json ($streetMarkets);
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function show(StreetMarket $streetMarket)
    {
        //
    }

    public function edit(StreetMarket $streetMarket)
    {
        //
    }

    public function update(Request $request, StreetMarket $streetMarket)
    {
        //
    }

    public function destroy(StreetMarket $streetMarket)
    {
        //
    }
}
