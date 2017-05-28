<?php
/**
 * Created by vunguyenhung on 5/21/17
 */

namespace App\Http\Controllers;


use App\Entities\ShoppingCartDetail;
use App\Repositories\CartDetailRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class CartDetailController extends Controller {

    private $cartDetailRepository;

    public function __construct(CartDetailRepository $cartRepository) {
        $this->cartDetailRepository = $cartRepository;
    }


    public function show(Request $request, $cartId, $cartDetailId) {
        return $this->cartDetailRepository->show($cartDetailId);
    }


    // DELETE /carts/16/details/1
    public function delete(Request $request, $cartId, $cartDetailId) {
        $this->cartDetailRepository->delete($cartDetailId);

        $response = [
            'msg' => config('msg.SHOPPING_CART_UPDATED'),
            'link' => [
                'name' => 'VIEW_SHOPPING_CART',
                'url' => route('carts/{id}.GET', ['id' => $cartId,]),
                'method' => 'GET'
            ]
        ];

        return response()->json($response, 200);
    }


    public function store(Request $request, $cartID) {
        $data = $request->all();

        $createdShoppingCartDetail = ShoppingCartDetail::create([
            'quantity' => $data['quantity'],
            'shopping_cart_id' => $cartID,
            'store_product_variant_id' => $data['store_product_variant_id']
        ]);

        $response = [
            'msg' => config('msg.SHOPPING_CART_UPDATED'),
            'link' => [
                'name' => 'VIEW_SHOPPING_CART_DETAIL',
                'url' => route('carts/{cartId}/details/{detailId}.GET', [
                    'cartId' => $cartID,
                    'detailId' => $createdShoppingCartDetail->id
                ]),
                'method' => 'GET'
            ]
        ];

        return response()->json($response, 201);
    }

}