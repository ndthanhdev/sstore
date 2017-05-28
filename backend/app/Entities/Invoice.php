<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Invoice extends Model {
    protected $fillable = [
        'order_id'
    ];
}