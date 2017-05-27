<?php
/**
 * Created by vunguyenhung on 5/25/17
 */

namespace App\Repositories;


use App\Entities\Order;
use App\Entities\ShoppingCart;
use Carbon\Carbon;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class OrderRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\\Entities\\Order';
    }


    public function index($userId) {
        $shoppingCartIds = ShoppingCart::where('user_id', $userId)
            ->get()
            ->map(function ($shoppingCart) { return $shoppingCart->id; })
            ->all();
        return Order::whereIn('shopping_cart_id', $shoppingCartIds)
            ->orderBy('created_at', 'desc')
            ->paginate(10);
    }


    public function show($orderId) {
        return $this->with([
            'shoppingCart',
            'shoppingCart.user',
            'shoppingCart.details.storeProductVariant.product',
            'shoppingCart.details.storeProductVariant.productVariant',
            'shoppingCart.details.storeProductVariant.productVariant.variationValues'
        ])->find($orderId);
    }

    public function store($cartId) {
        return $this->create([
            'code' => 'SSORD' . Carbon::now()->timestamp,
            'state' => 0,
            'shopping_cart_id' => $cartId
        ]);
    }
}