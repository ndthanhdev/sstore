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

class CategoryRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;


    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\\Entities\\Category';
    }

    public function show($categoryId) {
        //find current category
        $foundCategory = Category::with(['catalog', 'parent', 'child'])->findOrFail($categoryId);


        //initialize parent array
        $parentCategories = [];

        // get its first parent
        $currentParentCategory = $foundCategory->parent;

        while ($currentParentCategory != null) {
            array_push($parentCategories, $currentParentCategory);
            $currentParentCategory = Category::with(['parent'])->find($currentParentCategory->id)->parent;
        }

        return [
            'id' => $foundCategory->id,
            'name' => $foundCategory->name,
            'description' => $foundCategory->description,
            'icon' => $foundCategory->icon,
            'catalog' => $foundCategory->catalog,
            'child' => $foundCategory->child,
            'parents' => array_reverse($parentCategories)
        ];
    }

    public function childCategories($parentCategoryId) {
        return Category::where('parent_id', $parentCategoryId)->get();
    }

    public function products($categoryId, $storeId) {
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
            ->where('category_id', $categoryId)
            ->paginate(6);
    }

}