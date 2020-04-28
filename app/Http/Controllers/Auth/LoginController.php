<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    const INCORRECT_LOGIN_MESSAGE = 'Incorrect login credentials';
    const INVALID_TOKEN_MESSAGE = 'Invalid token';
    const EMAIL_NOT_VERIFIED_MESSAGE = 'Email not verified';

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $user = User::where('email', $credentials['email'])->first();

        if ($user) {
            if (Hash::check($credentials['password'], $user->password)) {
                return $this->getAuthenticatedUserResponse($user);
            }
        }

        return response(self::INCORRECT_LOGIN_MESSAGE, 401);
    }

    public function validateToken(Request $request)
    {
        $token = $request->input('token');
        $user = User::where('api_token', $token)->first();

        if (!$user) {
            return response(self::INVALID_TOKEN_MESSAGE, 401);
        }

        return $this->getAuthenticatedUserResponse($user);
    }

    public function showLoginForm() {
        return redirect('/');
    }

    private function emailNotVerifiedResponse() {
        return response(self::EMAIL_NOT_VERIFIED_MESSAGE, 403);
    }

    private function getAuthenticatedUserResponse(User $user)
    {
        return [
            'token' => $user->api_token,
            'name' => $user->name,
            'email' => $user->email,
            'hasVerifiedEmail' => $user->hasVerifiedEmail(),
        ];
    }
}
