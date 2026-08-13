<?php

namespace App\Domains\Shared\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class SlugRule implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! is_string($value)) {
            $fail('The :attribute must be a valid string.');
            return;
        }

        // Allow letters, numbers, and hyphens (URL-friendly slug)
        if (! preg_match('/^[a-z0-9]+(?:-[a-z0-9]+)*$/i', $value)) {
            $fail('The :attribute must contain only letters, numbers, and hyphens.');
        }
    }
}
