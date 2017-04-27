<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class StoreProduct extends Model {
    public $timestamps = false;
    protected $fillable = [
        'in_stock_default',
        'price_default'
    ];
}