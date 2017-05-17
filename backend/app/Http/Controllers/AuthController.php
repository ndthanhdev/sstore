<?php
/**
 * Created by vunguyenhung on 5/17/17
 */

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller;
use Tymon\JWTAuth\JWTAuth;

class AuthController extends Controller {

    protected $jwt;

    /**
     * AuthController constructor.
     * @param $jwt
     */
    public function __construct(JWTAuth $jwt) {
        $this->jwt = $jwt;
    }

    public function login(Request $request) {

        if (!$token = $this->jwt->attempt($request->only('username', 'password'))) {
            return response()->json(['msg' => config('msg.LOGIN_FAILURE')], 401);
        }
        $user = Auth::user();

        $response = [
            'msg' => config('msg.LOGIN_SUCCESS'),
            'data' => ['token' => $token],
            'link' => [
                'IP' => $request->ip(),
                'name' => 'VIEW_USER',
                'method' => 'GET',
                'authentication' => true,
                'authorization' => 'USER'
            ]
        ];
        return response()->json($response, 200);
    }
}