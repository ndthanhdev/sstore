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

    public function customAttributeValues() {
        return $this->hasMany('App\Entities\CustomAttribute');
    }

    public function productType() {
        return $this
            ->belongsTo('App\Entities\ProductType');
    }

    public function variants() {
        return $this
            ->belongsToMany('App\Entities\ProductVariant', 'store_product_variant')
            ->withPivot(['price', 'in_stock', 'store_id']);
    }

    public function defaultVariant() {
        return $this
            ->belongsToMany('App\Entities\ProductVariant', 'store_product_variant')
            ->withPivot(['price', 'in_stock', 'store_id'])
            ->where('default', true);
    }


    public function stores() {
        return $this
            ->belongsToMany('App\Entities\Store', 'store_product_variant')
            ->withPivot(['price', 'in_stock', 'store_id']);
    }

    public function reviews() {
        return $this->hasMany('App\Entities\Review');
    }

    public function reviews_1_rating() {
        return $this->hasMany('App\Entities\Review')->where('rating', 1);
    }

    public function reviews_2_rating() {
        return $this->hasMany('App\Entities\Review')->where('rating', 2);
    }

    public function reviews_3_rating() {
        return $this->hasMany('App\Entities\Review')->where('rating', 3);
    }

    public function reviews_4_rating() {
        return $this->hasMany('App\Entities\Review')->where('rating', 4);
    }

    public function reviews_5_rating() {
        return $this->hasMany('App\Entities\Review')->where('rating', 5);
    }

}