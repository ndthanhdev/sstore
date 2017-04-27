<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Order extends Model {
    protected $fillable = [
        'code',
        'rating',
        'comment',
        'state'
    ];
}