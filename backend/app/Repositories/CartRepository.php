<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Repositories;


use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class CartRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;


    public function model() {
        return 'App\\Entities\\ShoppingCart';
    }

    public function show($cartId, $storeId) {
        return $this->with(['details.productVariant.variationValues'])->find($cartId);
    }

}