<?php

namespace App\Http\Middleware;

use Closure;
use App\User;

class CookieAuth
{
    const TOKEN_COOKIE_NAME = 'macro-tracker-auth-token';

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->cookie(self::TOKEN_COOKIE_NAME);
        $user = User::where('api_token', $token)->first();

        if (!$user) {
            return redirect('/');
        }

        $request->setUserResolver(function () use ($user) {
            return $user;
        });

        return $next($request);
    }
}
