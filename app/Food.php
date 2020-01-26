<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    const CATEGORIES = [
        0 => 'BREAKFAST',
        1 => 'LUNCH',
        2 => 'DINNER',
        3 => 'SNACK',
    ];

    const VALIDATION_RULES = [
        'name' => 'required',
        'calories' => 'required|integer',
        'protein' => 'required|integer',
        'fat' => 'required|integer',
        'carbohydrates' => 'required|integer',
        'category' => 'required|integer',
    ];

    protected $fillable = [
        'name',
        'calories',
        'protein',
        'fat',
        'carbohydrates',
        'category',
        'user_id',
        'logged_on',
    ];

    protected $appends = ['category_name'];

    protected $casts = [
        'logged_on' => 'datetime:Y-m-d',
    ];

    public function getCategoryNameAttribute()
    {
        return self::CATEGORIES[$this->category];
    }
}
