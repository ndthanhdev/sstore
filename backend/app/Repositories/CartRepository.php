<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Repositories;


use Illuminate\Support\Facades\Auth;
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
            'details.storeProductVariant.product',
            'details.storeProductVariant.productVariant',
            'details.storeProductVariant.productVariant.variationValues'
        ])->find($cartId);
    }

    public function getActiveCart() {
        $account = Auth::user();

        return $this->withCount('details AS product')->findWhere([
            'user_id' => $account->user_id,
            'active' => true
        ])->first();

    }

}