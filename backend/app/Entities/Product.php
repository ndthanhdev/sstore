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

    public function variants() {
        return $this
            ->belongsToMany('App\Entities\ProductVariant', 'store_product_variant')
            ->withPivot(['price', 'in_stock', 'store_id']);
    }

    public function stores() {
        return $this
            ->belongsToMany('App\Entities\Store', 'store_product_variant')
            ->withPivot(['price', 'in_stock', 'store_id']);
    }
}