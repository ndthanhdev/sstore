<?php

use database\seeds\AccountsTableSeeder;
use database\seeds\CatalogsTableSeeder;
use database\seeds\DevicesTableSeeder;
use database\seeds\ProductTypeAttributesTableSeeder;
use database\seeds\ProductTypesTableSeeder;
use database\seeds\StoresTableSeeder;
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
        $this->call(DevicesTableSeeder::class);
        $this->call(ProductTypesTableSeeder::class);
        $this->call(ProductTypeAttributesTableSeeder::class);
        $this->call(CatalogsTableSeeder::class);
    }
}
