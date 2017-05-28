<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ShoppingCart extends Model {

    protected $fillable = ['active', 'user_id'];

    public function storeProductVariant() {
        return $this
            ->belongsToMany('App\Entities\StoreProductVariant', 'shopping_cart_details')->withPivot(['quantity','price']);
    }

    public function details() {
        return $this->hasMany('App\Entities\ShoppingCartDetail');
    }

    public function user() {
        return $this->belongsTo('App\Entities\User');
    }
}