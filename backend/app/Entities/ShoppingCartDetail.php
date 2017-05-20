<?php
/**
 * Created by vunguyenhung on 5/20/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ShoppingCartDetail extends Model {
    public $timestamps = false;

    protected $fillable = ['quantity'];

    protected $table = 'shopping_cart_details';

    public function productVariant() {
        return $this->belongsTo('App\Entities\StoreProductVariant');
    }

}