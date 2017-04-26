<?php
/**
 * Created by vunguyenhung on 4/26/17
 */

namespace app\Repositories;


use Prettus\Repository\Eloquent\BaseRepository;

class ConfigurationRepository extends BaseRepository {

    /**
     * Specify Model class name
     *
     * @return string
     */
    public function model() {
        return 'App\\Entities\\Configuration';
    }
}