<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Repositories;


use App\Entities\ShoppingCart;
use Illuminate\Support\Facades\DB;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class CartRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;


    public function model() {
        return 'App\\Entities\\ShoppingCart';
    }

    public function show($cartId) {
        return $this->with([
            'details.storeProductVariant.device',
            'details.storeProductVariant.productVariant.product',
            'details.storeProductVariant.productVariant.variationValues'
        ])->find($cartId);
    }

    public function store($userId) {
        $activeCart = $this->getActiveCart($userId);
        $this->setToInactive($activeCart);

        return ShoppingCart::create([
            'user_id' => $userId,
            'active' => true
        ]);
    }

    public function getActiveCart($userId) {
        return ShoppingCart::where('user_id', $userId)
            ->where('active', true)
            ->leftJoin('shopping_cart_details', 'shopping_carts.id', '=', 'shopping_cart_details.shopping_cart_id')
            ->select('shopping_carts.id', DB::raw('SUM(shopping_cart_details.quantity) as item_count'))
            ->groupBy('shopping_carts.id')
            ->first();
    }
}