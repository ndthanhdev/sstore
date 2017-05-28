<?php
/**
 * Created by vunguyenhung on 5/12/17
 */

namespace App\Repositories;


use App\Entities\Category;
use App\Entities\Product;
use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class CatalogRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;

    public function model() {
        return 'App\\Entities\\Catalog';
    }

    public function parentCategories($catalogId) {
        return Category::whereNull('parent_id')->where('catalog_id', $catalogId)->get();
    }

    public function products($catalogId, $storeId) {
        $categoryIds = Category::where('catalog_id', $catalogId)->get(['id'])->map(function ($item) { return $item->id; });
        return Product::with([
            'defaultVariant.stores' => function ($query) use ($storeId) { $query->where('store_id', $storeId); },
            'defaultVariant.variationValues'])
            ->withCount([
                'reviews_1_rating',
                'reviews_2_rating',
                'reviews_3_rating',
                'reviews_4_rating',
                'reviews_5_rating',
            ])
            ->whereIn('category_id', $categoryIds)
            ->paginate(6);


    }

}