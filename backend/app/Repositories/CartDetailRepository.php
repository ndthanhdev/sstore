<?php
/**
 * Created by vunguyenhung on 5/21/17
 */

namespace App\Repositories;


use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class CartDetailRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;


    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\\Entities\\ShoppingCartDetail';
    }


    public function show($cartDetailId) {
        return $this->with([
            'storeProductVariant.product',
            'storeProductVariant.productVariant',
            'storeProductVariant.productVariant.variationValues'
        ])->find($cartDetailId);
    }

}