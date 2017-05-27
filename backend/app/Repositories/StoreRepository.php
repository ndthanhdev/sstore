<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Repositories;


use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class StoreRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;


    public function model() {
        return 'App\\Entities\\Store';
    }

    public function primary() {
        return $this->findWhere(['primary' => true])->first();
    }
}