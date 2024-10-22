<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStreetMarketRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['sometimes', 'string', 'max:255', 'unique:street_market,name'],
            'date_creation' => ['sometimes', 'date'],
            'address' => ['sometimes', 'string', 'max:255'],
            'address_number' => ['sometimes', 'string', 'max:255'],
            'neighborhood' => ['sometimes', 'string', 'max:255'],
            'district' => ['sometimes', 'string', 'max:255'],
            'zip_code' => ['sometimes', 'string', 'max:255'],
            'town' => ['sometimes', 'string', 'max:255'],
            'coord_x' => ['sometimes', 'string', 'max:255'],
            'coord_y' => ['sometimes', 'string', 'max:255'],
            'phone' => ['nullable', 'string', 'max:255'],
            'schedule' => ['nullable', 'url', 'max:255'],
            'type' => ['sometimes', 'in:market,fair'],
        ];
    }
}
