<?php
/**
 * Created by vunguyenhung on 5/18/17
 */

namespace App\Http\Controllers;


use App\Repositories\StoreRepository;
use Laravel\Lumen\Routing\Controller;

class StoreController extends Controller {

    private $storeRepository;

    public function __construct(StoreRepository $storeRepository) {
        $this->storeRepository = $storeRepository;
    }


    public function primary() {
        return $this->storeRepository->primary();
    }
}