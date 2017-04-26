<?php

namespace App\Http\Controllers;

use App\Repositories\DeviceRepository;
use Laravel\Lumen\Routing\Controller;

class DeviceController extends Controller {

    protected $deviceRepo;

    public function __construct(DeviceRepository $deviceRepo) {
        $this->deviceRepo = $deviceRepo;
    }

    public function index() {
        return $this->deviceRepo->all();
    }
}
