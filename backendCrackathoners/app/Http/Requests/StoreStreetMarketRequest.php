<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreStreetMarketRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255', 'unique:street_market,name'],
            'date_creation' => ['required', 'date'],
            'address' => ['required', 'string', 'max:255'],
            'address_number' => ['required', 'string', 'max:255'],
            'neighborhood' => ['required', 'string', 'max:255'],
            'district' => ['required', 'string', 'max:255'],
            'zip_code' => ['required', 'string', 'max:255'],
            'town' => ['required', 'string', 'max:255'],
            'coord_x' => ['required', 'integer', 'max:255'],
            'coord_y' => ['required', 'integer', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'schedule' => ['nullable', 'url', 'max:255'],
            'type' => ['required', 'enum:market,fair'],
        ];
    }
}
