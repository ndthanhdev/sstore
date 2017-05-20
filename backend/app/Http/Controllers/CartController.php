<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Http\Controllers;


use App\Repositories\CartRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class CartController extends Controller {

    private $cartRepository;

    public function __construct(CartRepository $cartRepository) {
        $this->cartRepository = $cartRepository;
    }

    public function show(Request $request, $cartId) {
        return $this->cartRepository->show($cartId);
    }

}