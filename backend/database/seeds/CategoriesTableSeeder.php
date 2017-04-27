<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace database\seeds;

use App\Entities\Catalog;
use App\Entities\Category;
use Faker\Factory;
use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder {
    public function run() {
        $faker = Factory::create();
        factory(Category::class, config('factory.CATEGORY_AMOUNT'))->states(['relation'])->create();

        $catalogs = Catalog::all();

        foreach ($catalogs as $catalog) {
            $ownedCategories = $catalog->categories;
            $ids = $ownedCategories->map(function ($item, $key) { return $item->id; })
                ->sort()->values()->all();
            foreach ($ownedCategories as $ownedCategory) {
                $random_parent_id = $faker->optional(0.5)->randomElement($ids);
                while ($random_parent_id === $ownedCategory->id) {
                    $random_parent_id = $faker->optional(0.5)->randomElement($ids);
                }
                $ownedCategory->update(['parent_id' => $random_parent_id]);
            }
        }
    }
}