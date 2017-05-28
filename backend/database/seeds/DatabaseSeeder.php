<?php

use database\seeds\AccountsTableSeeder;
use database\seeds\CatalogsTableSeeder;
use database\seeds\CategoriesTableSeeder;
use database\seeds\CustomAttributesTableSeeder;
use database\seeds\DevicesTableSeeder;
use database\seeds\InvoicesTableSeeder;
use database\seeds\OrdersTableSeeder;
use database\seeds\ProductsTableSeeder;
use database\seeds\ProductTypeAttributesTableSeeder;
use database\seeds\ProductTypeAttributeValuesTableSeeder;
use database\seeds\ProductTypesTableSeeder;
use database\seeds\ProductVariantsTableSeeder;
use database\seeds\ProductVariationValuesTableSeeder;
use database\seeds\ReviewsTableSeeder;
use database\seeds\ShoppingCartDetailsTableSeeder;
use database\seeds\ShoppingCartsTableSeeder;
use database\seeds\StoreProductVariantTableSeeder;
use database\seeds\StoresTableSeeder;
use database\seeds\UserReviewTableSeeder;
use database\seeds\UsersTableSeeder;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(AccountsTableSeeder::class);
        $this->call(StoresTableSeeder::class);
        $this->call(ProductTypesTableSeeder::class);
        $this->call(ProductTypeAttributesTableSeeder::class);
        $this->call(CatalogsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
        $this->call(ProductTypeAttributeValuesTableSeeder::class);
        $this->call(CustomAttributesTableSeeder::class);
        $this->call(ProductVariantsTableSeeder::class);
        $this->call(StoreProductVariantTableSeeder::class);
        $this->call(DevicesTableSeeder::class);
        $this->call(ProductVariationValuesTableSeeder::class);
        $this->call(ReviewsTableSeeder::class);
        $this->call(UserReviewTableSeeder::class);
        $this->call(ShoppingCartsTableSeeder::class);
        $this->call(ShoppingCartDetailsTableSeeder::class);
        $this->call(OrdersTableSeeder::class);
        $this->call(InvoicesTableSeeder::class);
    }
}
