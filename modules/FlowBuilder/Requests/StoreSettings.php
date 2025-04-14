<?php

namespace Modules\FlowBuilder\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSettings extends FormRequest
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
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        $rules = [
            'settings.flow_builder' => 'required',
        ];

        return $rules;
    }

    public function messages(): array
    {
        return [
            'settings.flow_builder.required' => __('This field is required.'),
        ];
    }
}
