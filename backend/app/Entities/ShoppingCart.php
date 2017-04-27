<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ShoppingCart extends Model {

    protected $fillable = ['active'];

    public function details() {
        return $this
            ->belongsToMany('App\Entities\Product', 'shopping_cart_details')
            ->withPivot('quantity');
    }
}