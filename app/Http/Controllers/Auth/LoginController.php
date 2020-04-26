<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
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

        return response('Incorrect login credentials', 401);
    }

    public function validateToken(Request $request)
    {
        $token = $request->input('token');
        $user = User::where('api_token', $token)->first();

        if (!$user) {
            return response('Invalid token', 401);
        }

        return $this->getAuthenticatedUserResponse($user);
    }

    private function getAuthenticatedUserResponse(User $user)
    {
        return [
            'token' => $user->api_token,
            'name' => $user->name,
            'email' => $user->email,
        ];
    }
}
