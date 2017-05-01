<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ProductVariant extends Model {
    public $timestamps = false;
    protected $fillable = [
        'default'
    ];

    public function variationValues() {
        return $this->hasMany('App\Entities\ProductVariationValue');
    }
}