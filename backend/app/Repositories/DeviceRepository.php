<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;

/**
 * Created by vunguyenhung on 4/26/17
 */
class DeviceRepository extends BaseRepository {

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\\Entities\\Device';
    }
}