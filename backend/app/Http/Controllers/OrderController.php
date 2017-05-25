<?php
/**
 * Created by vunguyenhung on 5/25/17
 */

namespace App\Http\Controllers;


use App\Repositories\OrderRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Lumen\Routing\Controller;

class OrderController extends Controller {

    private $orderRepository;

    public function __construct(OrderRepository $orderRepository) {
        $this->orderRepository = $orderRepository;
    }


    public function index() {
        $loggedInUser = Auth::user();

        return $this->orderRepository->index($loggedInUser->id);
    }

    public function show(Request $request, $orderId) {
        return $this->orderRepository->show($orderId);
    }

}