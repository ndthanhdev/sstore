<?php
/**
 * Created by vunguyenhung on 5/25/17
 */

namespace App\Repositories;


use App\Entities\ShoppingCart;
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
//        return $shoppingCartIds;
        return $this->findWhereIn('shopping_cart_id', $shoppingCartIds);
    }

}