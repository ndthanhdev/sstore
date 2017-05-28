<?php
/**
 * Created by vunguyenhung on 5/27/17
 */

namespace App\Repositories;


use Prettus\Repository\Contracts\CacheableInterface;
use Prettus\Repository\Eloquent\BaseRepository;
use Prettus\Repository\Traits\CacheableRepository;

class InvoiceRepository extends BaseRepository implements CacheableInterface {
    use CacheableRepository;


    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\Entities\Invoice';
    }


    public function store($orderId) {
        return $this->create([
            'order_id' => $orderId
        ]);
    }
}