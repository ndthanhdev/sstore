<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Http\Controllers;


use App\Repositories\ProductRepository;
use Laravel\Lumen\Routing\Controller;

class ProductController extends Controller {

    private $productRepo;

    public function __construct(ProductRepository $productRepository) {
        $this->productRepo = $productRepository;
    }

    public function index() {
        return $this->productRepo->with(['stores' => function ($query) {
            $query->where('primary', true);
        }])->paginate(10); // 10 product per page
    }

    public function featuredProducts() {

    }
}