<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStreetMarketRequest;
use App\Http\Requests\UpdateStreetMarketRequest;
use App\Models\StreetMarket;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class StreetMarketController extends Controller
{
    /**
     * Obtiene una lista de todos los mercados callejeros.
     *
     * Escenarios:
     * - 200: Si la solicitud se procesa correctamente y se devuelven los mercados.
     *   Ejemplo de respuesta:
     *   [
     *       { "id": 1, "name": "Mercado Central", "address": "Av. Principal 123", ... },
     *       { "id": 2, "name": "Feria de Artesanos", "address": "Calle Secundaria 456", ... }
     *   ]
     * - 500: Si ocurre un error interno en el servidor al recuperar los datos.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Error interno del servidor."
     *   }
     *
     * @return JsonResponse
     */
    public function index() : JsonResponse
    {
        $streetMarkets = StreetMarket::all();
        return response()->json($streetMarkets);
    }

    /**
     * Almacena un nuevo mercado callejero en la base de datos.
     *
     * Escenarios:
     * - 200: Si el mercado se crea exitosamente.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Street Market created successfully"
     *   }
     * - 422: Si la validación del request falla (por ejemplo, si falta el campo 'name').
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Validation failed",
     *       "errors": {
     *           "name": ["El campo name es obligatorio."]
     *       }
     *   }
     * - 500: Si ocurre un error interno al intentar crear el mercado.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Error interno del servidor."
     *   }
     *
     * @param StoreStreetMarketRequest $request
     * @return JsonResponse
     */
    public function store(StoreStreetMarketRequest $request): JsonResponse
    {
        $data = $request->validated();
        StreetMarket::create($data);
        return response()->json(['message' => 'Street Market created successfully'], 201);
    }

    /**
     * Muestra un mercado callejero específico.
     *
     * Escenarios:
     * - 200: Si el mercado existe y se devuelve correctamente.
     *   Ejemplo de respuesta:
     *   {
     *       "id": 1,
     *       "name": "Mercado Central",
     *       "address": "Av. Principal 123",
     *       ...
     *   }
     * - 404: Si el mercado no se encuentra.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Street Market not found"
     *   }
     * - 500: Si ocurre un error interno al intentar recuperar el mercado.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Error interno del servidor."
     *   }
     *
     * @param StreetMarket $streetMarket
     * @return JsonResponse
     */
    public function show(StreetMarket $streetMarket)
    {
        return response()->json($streetMarket);
    }

    /**
     * Actualiza un mercado callejero existente en la base de datos.
     *
     * Escenarios:
     * - 200: Si el mercado se actualiza exitosamente.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Street Market updated successfully"
     *   }
     * - 404: Si el mercado no se encuentra.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Street Market not found"
     *   }
     * - 422: Si la validación del request falla (por ejemplo, si el campo 'name' no es válido).
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Validation failed",
     *       "errors": {
     *           "name": ["El campo name es obligatorio."]
     *       }
     *   }
     * - 500: Si ocurre un error interno al intentar actualizar el mercado.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Error interno del servidor."
     *   }
     *
     * @param UpdateStreetMarketRequest $request
     * @param StreetMarket $streetMarket
     * @return JsonResponse
     */
    public function update(UpdateStreetMarketRequest $request, StreetMarket $streetMarket): JsonResponse
    {
        $data = $request->validated();
        $streetMarket->update($data);
        return response()->json(["message" => " Street Market updated successfully"], 200);
    }

    /**
     * Elimina un mercado callejero específico de la base de datos.
     *
     * Escenarios:
     * - 204: Si el mercado se elimina exitosamente (sin contenido que devolver).
     * - 404: Si el mercado no se encuentra.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Street Market not found"
     *   }
     * - 500: Si ocurre un error interno al intentar eliminar el mercado.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Error interno del servidor."
     *   }
     *
     * @param StreetMarket $streetMarket
     * @return JsonResponse
     */
    public function destroy(StreetMarket $streetMarket) : JsonResponse
    {
        $streetMarket->delete();
        return response()->json(null, 204);
    }

    /**
     * Importa datos de mercados callejeros desde un archivo JSON.
     *
     * Escenarios:
     * - 200: Si los datos se importan correctamente.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Dades importades correctament"
     *   }
     * - 422: Si la validación del archivo falla (por ejemplo, si no se proporciona un archivo).
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Validation failed",
     *       "errors": {
     *           "file": ["El archivo es obligatorio."]
     *       }
     *   }
     * - 500: Si ocurre un error interno al intentar leer o procesar el archivo.
     *   Ejemplo de respuesta:
     *   {
     *       "message": "Error interno del servidor."
     *   }
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function importData(Request $request) {
        $request->validate(['file' => 'required|file|mimes:json']);

        $jsonContent = file_get_contents($request->file('file')->getRealPath());
        $streetMarketData = json_decode($jsonContent, true);

        foreach ($streetMarketData as $streetMarket) {
            StreetMarket::create($streetMarket);
        }

        return response()->json(['message' => 'Dades importades correctament'], 200);
    }
}
