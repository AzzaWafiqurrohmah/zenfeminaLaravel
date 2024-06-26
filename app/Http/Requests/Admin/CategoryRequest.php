<?php

namespace App\Http\Requests\Admin;

use App\Exceptions\Api\FailedValidation;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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

        $rules = [
            'name' => 'required'
        ];

        if($this->getMethod() == 'POST')
            $rules['name'] = 'required|unique:categories,name';

        return $rules;
    }

    public function messages()
    {
        return [
            'required' => 'Kolom :attribute harap diisi',
            'unique' => 'Kategori ini sudah tersedia'
        ];
    }

    protected function failedValidation(Validator $validator)
    {
        return throw new FailedValidation($validator->errors());
    }
}
