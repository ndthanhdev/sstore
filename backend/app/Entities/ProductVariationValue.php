<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class ProductVariationValue extends Model {
    public $timestamps = false;
    protected $fillable = [
        'name',
        'value'
    ];

    public function variant() {
        return $this->belongsTo('App\Entities\ProductVariant');
    }
}