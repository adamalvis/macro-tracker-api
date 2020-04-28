<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Target;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Auth\Events\Registered;

class RegisterController extends Controller
{
    const EMAIL_VERIFIED_MESSAGE = 'Email is already verified';
    const EMAIL_VERIFICATION_RESENT_MESSAGE = 'Email verification resent';

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

        // publish Registered event
        event(new Registered($user));

        return response([
            'name' => $user->name,
            'email' => $user->email,
            'token' => $user->api_token,
        ], 200);
    }

    public function resendEmailVerification(Request $request) {
        if ($request->user()->hasVerifiedEmail()) {
            return response(self::EMAIL_VERIFIED_MESSAGE, 400);
        }

        $request->user()->sendEmailVerificationNotification();

        return response(self::EMAIL_VERIFICATION_RESENT_MESSAGE, 200);
    }
}
