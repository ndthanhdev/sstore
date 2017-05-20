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

    //"quantity": 5,
    //"shopping_cart_id": 16,
    //"store_product_variant_id": 44,

    public function store(Request $request) {
        $data = $request->all();

        $createdShoppingCartDetail = ShoppingCartDetail::create([
            'quantity' => $data['quantity'],
            'shopping_cart_id' => $data['shopping_cart_id'],
            'store_product_variant_id' => $data['store_product_variant_id']
        ]);

        $response = [
            'msg' => config('msg.SHOPPING_CART_UPDATED'),
//            'id' => $createdShoppingCartDetail->id,
            'link' => [
                'name' => 'VIEW_SHOPPING_CART_DETAIL',
                'url' => route('carts/{cartId}/details/{detailId}.GET', [
                    'cartId' => $data['shopping_cart_id'],
                    'detailId' => $createdShoppingCartDetail->id
                ]),
                'method' => 'GET'
            ]
        ];

        return response()->json($response, 201);
    }

}