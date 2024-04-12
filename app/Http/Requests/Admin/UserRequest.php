<?php

namespace App\Http\Requests\Admin;

use App\Exceptions\Api\FailedValidation;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'username' => 'required|string',
            'email' => 'required|email',
            'password' => 'required|size:8'
        ];

        if($this->getMethod() != 'POST')
            $rules['password'] = 'nullable|size8';

        return $rules;
    }

    protected function failedValidation(Validator $validator)
    {
        return throw new FailedValidation($validator->errors());
    }
}
