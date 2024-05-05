<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;
use Carbon\Carbon;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            $credentials = $request->only('username_or_email', 'password');

            $field = filter_var($credentials['username_or_email'], FILTER_VALIDATE_EMAIL) ? 'email' : 'username';

            $credentials[$field] = $credentials['username_or_email'];
            unset($credentials['username_or_email']);

            if (Auth::attempt($credentials)) {
                $user = Auth::user();

                $user->last_login_at = Carbon::now();
                $user->save();

                $token = $user->createToken('MyApp')->accessToken;

                return response()->json(['token' => $token], 200);
            } else {
                throw ValidationException::withMessages([
                    'username_or_email' => 'Invalid username/email or password.',
                ]);
            }
        } catch (ValidationException $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        } catch (\Exception $e) {
            //return response()->json(['message' => 'Invalid username/email or password.'], 500);
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
}
