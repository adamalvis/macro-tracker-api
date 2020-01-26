<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Target;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $validData = $request->validate([
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::create([
            'name' => $validData['name'],
            'email' => $validData['email'],
            'password' => Hash::make($validData['password']),
            'api_token' => Str::random(80),
        ]);

        // create default target for user
        Target::createDefaultTargetForUser($user);

        return $user;
    }
}
