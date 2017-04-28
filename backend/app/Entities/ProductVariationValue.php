<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ProductVariationValue extends Model {
    public $timestamps = false;
    protected $fillable = [
        'in_stock',
        'price'
    ];

    public function storeProduct() {
        return $this->belongsTo('App\Entities\StoreProduct');
    }
}