<?php
/**
 * Created by vunguyenhung on 5/12/17
 */

namespace App\Http\Controllers;


use App\Repositories\CategoryRepository;
use Illuminate\Http\Request;
use Laravel\Lumen\Routing\Controller;

class CategoryController extends Controller {

    private $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) {
        $this->categoryRepository = $categoryRepository;
    }

    public function childCategories(Request $request, $parentCategoryId) {
        return $this->categoryRepository->childCategories($parentCategoryId);
    }

    public function products(Request $request, $categoryId) {
        $data = $request->all();
        return $this->categoryRepository->products($categoryId, $data['storeId']);
    }

    public function show(Request $request, $categoryId){
        return $this->categoryRepository->show($categoryId);
    }

}