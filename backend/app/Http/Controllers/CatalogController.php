<?php
/**
 * Created by vunguyenhung on 5/12/17
 */

namespace App\Http\Controllers;


use App\Repositories\CatalogRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class CatalogController extends Controller {

    private $catalogRepository;

    public function __construct(CatalogRepository $catalogRepository) {
        $this->catalogRepository = $catalogRepository;
    }

    public function index() {
        return $this->catalogRepository->all();
    }

    public function categories(Request $request, $catalogId) {
        return $this->catalogRepository->parentCategories($catalogId);
    }

    public function products(Request $request, $catalogId) {
        $storeId = 1;
        return $this->catalogRepository->products($catalogId, $storeId);
    }

}