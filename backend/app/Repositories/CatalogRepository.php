<?php
/**
 * Created by vunguyenhung on 5/12/17
 */

namespace App\Repositories;


use App\Entities\Category;
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

    }

}