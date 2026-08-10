<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class WebsiteView extends Model
{
    protected $fillable = [
        'website_id',
        'ip_address',
        'user_agent',
    ];

    public function website(): BelongsTo
    {
        return $this->belongsTo(Website::class);
    }
}
