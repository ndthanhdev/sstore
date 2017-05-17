<?php
/**
 * Created by vunguyenhung on 5/1/17
 */

namespace App\Http\Controllers;


use App\Entities\User;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class UserController extends Controller {
    private $userRepo;

    public function __construct(UserRepository $userRepository) {
        $this->userRepo = $userRepository;
    }

    public function show(Request $request, $userId) {
        return $this->userRepo->find($userId);
    }

    public function count() {
        return [
            'data' => User::count()
        ];
    }

}