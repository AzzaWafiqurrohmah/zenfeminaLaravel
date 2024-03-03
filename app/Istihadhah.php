<?php

namespace App;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Istihadhah extends Model
{
    use HasFactory;
    protected $fillable = [
        'istihadhah_length', 'start_date', 'end_date', 'user_id'
    ];

    protected function user() :BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
