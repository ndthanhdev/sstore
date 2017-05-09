<?php
/**
 * Created by vunguyenhung on 4/26/17
 */

namespace App\Http\Controllers;


use App\Repositories\ConfigurationRepository;
use Laravel\Lumen\Routing\Controller;

class ConfigurationController extends Controller {

    protected $configRepo;

    public function __construct(ConfigurationRepository $configRepo) {
        $this->configRepo = $configRepo;
    }

    public function index() {
        return $this->configRepo->all();
    }

}

