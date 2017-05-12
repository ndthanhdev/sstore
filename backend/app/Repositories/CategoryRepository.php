<?php
/**
 * Created by vunguyenhung on 5/12/17
 */

namespace App\Repositories;


use App\Entities\Category;
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

    public function childCategories($parentCategoryId) {
        return Category::where('parent_id', $parentCategoryId)->get();
    }
}