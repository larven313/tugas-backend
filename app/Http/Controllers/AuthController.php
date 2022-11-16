<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        /**
         * Fitur Register
         * Ambil input name, email dan password
         * Input datanya ke database menggunakan User Model
         */

        $input = [
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ];

        $data = [
            'message' => 'Register is successfully',
        ];

        $user = User::create($input);

        return response($data, 201);
    }

    public function login(Request $request)
    {
        /**
         * Fitur login
         * Ambil input email dan password dari user
         * Ambil email dan password dari database berdasarkan email
         * Bandingkan data input user dan data dari database
         */

        $input = [
            'email' => $request->email,
            'password' => $request->password
        ];


        if (Auth::attempt($input)) {

            $user = User::where('email', '=', $input['email'])->first();

            $token = $user->createToken('auth_token');

            $data = [
                'message' => 'Login is successfully',
                'token' => $token->plainTextToken
            ];

            return response($data, 200);
        } else {
            $data = [
                'message' => 'login is invalid'
            ];

            return response($data, 401);
        }
    }
}
