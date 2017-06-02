<?php
/**
 * Created by vunguyenhung on 5/21/17
 */

namespace App\Http\Controllers;


use App\Entities\ShoppingCartDetail;
use App\Repositories\CartDetailRepository;
use App\Repositories\CartRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class CartDetailController extends Controller {

    private $cartDetailRepository;

    private $cartRepository;

    public function __construct(CartDetailRepository $cartDetailRepository,
                                CartRepository $cartRepository) {
        $this->cartDetailRepository = $cartDetailRepository;
        $this->cartRepository = $cartRepository;
    }


    public function show(Request $request, $cartId, $cartDetailId) {
        return $this->cartDetailRepository->show($cartDetailId);
    }

// PATCH /carts/16/details/1
    public function update(Request $request, $cartId, $cartDetailId) {
        $data = $request->all();
        $this->cartDetailRepository->update(['quantity' => $data['quantity']], $cartDetailId);

        return [
            'msg' => config('msg.SHOPPING_CART_UPDATED'),
            'link' => [
                'name' => 'VIEW_SHOPPING_CART',
                'url' => route('carts/{id}.GET', ['id' => $cartId,]),
                'method' => 'GET'
            ]
        ];
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

        $response = null;

        $details = $this->cartRepository->find($cartID)->details;

        foreach ($details as $detail) {
            if ($detail->store_product_variant_id === $data['store_product_variant_id']) {
                $this->cartDetailRepository->update(['quantity' => $detail->quantity + $data['quantity']], $detail->id);
                $response = [
                    'msg' => config('msg.SHOPPING_CART_UPDATED'),
                    'link' => [
                        'name' => 'VIEW_SHOPPING_CART',
                        'url' => route('carts/{id}.GET', ['id' => $cartID]),
                        'method' => 'GET'
                    ]
                ];
            }
        }

        // loop cart Details as detail
        // if data['store_product_variant_id'] == detail->store_product_variant_id
        // combine their quality
        // return

        if (!$response) {
            ShoppingCartDetail::create([
                'quantity' => $data['quantity'],
                'price' => $data['price'],
                'shopping_cart_id' => $cartID,
                'store_product_variant_id' => $data['store_product_variant_id']
            ]);
            $response = [
                'msg' => config('msg.SHOPPING_CART_UPDATED'),
                'link' => [
                    'name' => 'VIEW_SHOPPING_CART',
                    'url' => route('carts/{id}.GET', ['id' => $cartID]),
                    'method' => 'GET'
                ]
            ];
        }

        return response()->json($response, 201);

    }

}