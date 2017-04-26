<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;


/**
 * Created by vunguyenhung on 4/26/17
 */
class Device extends Model {

    protected $fillable = [
        'name',
        'macAddress'
    ];
}