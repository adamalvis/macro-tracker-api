<?php

namespace App;

use App\User;
use Illuminate\Database\Eloquent\Model;

class Target extends Model
{
    protected $fillable = [
        'calories',
        'protein',
        'fat',
        'carbohydrates',
        'user_id',
        'is_updated',
    ];
    protected $attributes = [
        'is_updated' => false,
    ];

    public static function createDefaultTargetForUser(User $user)
    {
        return self::create([
            'calories' => 2000,
            'protein' => 100,
            'fat' => 50,
            'carbohydrates' => 50,
            'user_id' => $user->id,
        ]);
    }
}
