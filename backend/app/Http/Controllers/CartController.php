<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Http\Controllers;


use App\Repositories\CartRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller;

class CartController extends Controller {

    private $cartRepository;

    public function __construct(CartRepository $cartRepository) {
        $this->cartRepository = $cartRepository;
    }

    public function show(Request $request, $cartId) {
        return $this->cartRepository->show($cartId);
    }

    public function getActiveCart() {
        $account = Auth::user();
        return $this->cartRepository->getActiveCart($account->user_id);
    }

    public function setToInActive() {
        $loggedInAccount = Auth::user();
        $activeCart = $this->cartRepository->getActiveCart($loggedInAccount->user_id);

        $this->cartRepository->update([
            'active' => false
        ], $activeCart->id);

        $response = [
            'msg' => config('msg.SHOPPING_CART_UPDATED'),
            'link' => [
                'name' => 'VIEW_SHOPPING_CART',
                'url' => route('carts/{id}.GET', [
                    'id' => $activeCart->id,
                ]),
                'method' => 'GET'
            ]
        ];
        return $response;
    }

    public function store() {
        $loggedInAccount = Auth::user();

        $createdCart = $this->cartRepository->create([
            'user_id' => $loggedInAccount->user_id,
            'active' => true
        ]);

        $response = [
            'msg' => config('msg.SHOPPING_CART_CREATED'),
            'link' => [
                'name' => 'VIEW_SHOPPING_CART',
                'url' => route('carts/{id}.GET', [
                    'id' => $createdCart->id,
                ]),
                'method' => 'GET'
            ]
        ];
        return $response;
    }

}