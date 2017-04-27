<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Product extends Model {
    protected $fillable = [
        'name',
        'barcode',
        'description',
        'img_url'
    ];

    public function productTypeAttributeValues() {
        return $this
            ->belongsToMany('App\Entities\ProductTypeAttribute', 'product_type_attribute_values')
            ->withPivot('value');
    }
}