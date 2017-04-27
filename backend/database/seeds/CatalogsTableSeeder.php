<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;


use App\Entities\Catalog;
use Illuminate\Database\Seeder;

class CatalogsTableSeeder extends Seeder {
    public function run() {
        factory(Catalog::class, config('factory.CATALOG_AMOUNT'))->create();
    }
}