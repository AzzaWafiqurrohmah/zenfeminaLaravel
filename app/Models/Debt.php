<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Debt extends Model
{
    use HasFactory;
    public $timestamps = false;

    protected $fillable = [
        'type', 'details', 'is_done', 'date', 'user_id'
    ];

    protected function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
