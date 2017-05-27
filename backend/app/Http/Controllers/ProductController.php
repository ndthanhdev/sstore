<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Http\Controllers;


use App\Repositories\ProductRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class ProductController extends Controller {

    private $productRepo;

    public function __construct(ProductRepository $productRepository) {
        $this->productRepo = $productRepository;
    }

//    public function index() {
//        return $this->productRepo->with(['variants', 'variants.variationValues'])->paginate(10); // 10 product per page
//    }

    public function show(Request $request, $productId) {
        $storeId = $request->input('storeId');
        return $this->productRepo->show($productId, $storeId);
    }
}