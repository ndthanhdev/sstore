<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class StoreProductVariant extends Model {
    public $timestamps = false;
    protected $fillable = [
        'in_stock',
        'price'
    ];
    protected $table = 'store_product_variant';

    public function productVariant() {
        return $this->belongsTo('App\Entities\ProductVariant');
    }

    public function device() {
        return $this->hasOne('App\Entities\Device');
    }
}