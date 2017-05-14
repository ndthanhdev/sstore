<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Repositories;


use App\Entities\Product;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class ProductRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\\Entities\\Product';
    }


    public function show($productId, $storeId) {
        return Product::with([
            'variants' => function ($query) use ($storeId) { $query->where('store_id', $storeId); },
            'variants.variationValues',
            'reviews.user',
            'productType',
            'productTypeAttributeValues',
            'customAttributeValues'])
            ->findOrFail($productId);
    }

}