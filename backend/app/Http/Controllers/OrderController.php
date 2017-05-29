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
        $loggedInAccount = Auth::user();

        return $this->orderRepository->index($loggedInAccount->user->id);
    }

    public function show(Request $request, $orderId) {
        return $this->orderRepository->show($orderId);
    }


    public function store(Request $request) {
        $data = $request->all();
        $createdOrder = $this->orderRepository->store($data['cartId']);

        $response = [
            'id' => $createdOrder->id,
            'msg' => config('msg.ORDER_CREATED'),
            'link' => [
                'name' => 'VIEW_ORDER',
                'url' => route('orders/{id}.GET', [
                    'id' => $createdOrder->id,
                ]),
                'method' => 'GET'
            ]
        ];

        return $response;
    }

    public function deliveryOnStore(Request $request, $orderId) {
        $this->orderRepository->update(['state' => 1], $orderId);

        return [
            'msg' => config('msg.ORDER_UPDATED'),
            'link' => [
                'name' => 'VIEW_ORDER',
                'url' => route('orders/{id}.GET', [
                    'id' => $orderId,
                ]),
                'method' => 'GET'
            ]
        ];
    }


    public function deliveryOnline(Request $request, $orderId) {
        $data = $request->input();

        $this->orderRepository->update([
            'state' => 1,
            'address' => $data['address'],
            'latitude' => $data['latitude'],
            'longitude' => $data['longitude'],
            'tel' => $data['tel']
        ], $orderId);

        return [
            'msg' => config('msg.ORDER_UPDATED'),
            'link' => [
                'name' => 'VIEW_ORDER',
                'url' => route('orders/{id}.GET', [
                    'id' => $orderId,
                ]),
                'method' => 'GET'
            ]
        ];
    }


    public function done(Request $request, $orderId) {
        $this->orderRepository->update(['state' => 2], $orderId);

        return [
            'msg' => config('msg.ORDER_UPDATED'),
            'link' => [
                'name' => 'VIEW_ORDER',
                'url' => route('orders/{id}.GET', [
                    'id' => $orderId,
                ]),
                'method' => 'GET'
            ]
        ];
    }

}

