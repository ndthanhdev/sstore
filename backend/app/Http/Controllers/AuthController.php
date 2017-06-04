<?php
/**
 * Created by vunguyenhung on 5/17/17
 */

namespace App\Http\Controllers;


use App\Entities\Account;
use App\Entities\ShoppingCart;
use App\Entities\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
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
                'url' => route('users/{id}.GET', ['id' => $user->id]),
                'name' => 'VIEW_USER',
                'method' => 'GET',
                'authentication' => true,
                'authorization' => 'USER'
            ]
        ];
        return response()->json($response, 200);
    }


    public function register(Request $request) {

        $userInfo = $request->all();


        DB::transaction(function () use ($userInfo, $request) {
            $createdUser = User::create([
                'full_name' => $userInfo['full_name'],
                'dob' => $userInfo['dob'],
                'tel' => $userInfo['tel'],
                'address' => $userInfo['address'],
                'email' => $userInfo['email'],
                'avatar' => $userInfo['avatar'],
                'gender' => $userInfo['gender']
            ]);


            Account::create([
                'username' => $userInfo['username'],
                'password' => Hash::make($userInfo['password']),
                'role' => 0,
                'IP' => $request->ip(),
                'user_id' => $createdUser->id,
                'last_login' => Carbon::now()
            ]);

            ShoppingCart::create([
                'active' => true,
                'user_id' => $createdUser->id
            ]);
        });

        $response = [
            'msg' => config('msg.REGISTER_SUCCESS'),
            'link' => [
                'name' => 'LOGIN',
                'url' => route('auth.LOGIN'),
                'method' => 'POST',
                'params' => ['username', 'password'],
            ]
        ];

        return response()->json($response, 201);
    }

}