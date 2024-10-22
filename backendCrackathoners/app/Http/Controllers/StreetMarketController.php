<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStreetMarketRequest;
use App\Http\Requests\UpdateStreetMarketRequest;
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

    public function store(StoreStreetMarketRequest $request): JsonResponse
    {
        $data = $request->validated();
        $streetMarket = StreetMarket::create($data);
        return response()->json("message: Street Market created successfully", 200);
    }

    public function show(StreetMarket $streetMarket)
    {
        return response()->json($streetMarket);
    }

    public function edit(StreetMarket $streetMarket)
    {
        //
    }

    public function update(UpdateStreetMarketRequest $request, StreetMarket $streetMarket): JsonResponse
    {
        $data = $request->validated();
        $streetMarket->update($data);
        return response()->json("message: Street Market updated successfully", 200);
    }

    public function destroy(StreetMarket $streetMarket) : JsonResponse
    {
        $streetMarket->delete();
        return response()->json(null, 204);

    }
}
