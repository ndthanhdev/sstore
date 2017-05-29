<?php
/**
 * Created by vunguyenhung on 5/20/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ShoppingCartDetail extends Model {
    public $timestamps = false;

    protected $fillable = [
        'quantity',
        'price',
        'shopping_cart_id',
        'store_product_variant_id'
    ];

    protected $table = 'shopping_cart_details';

    public function storeProductVariant() {
        return $this->belongsTo('App\Entities\StoreProductVariant');
    }
}