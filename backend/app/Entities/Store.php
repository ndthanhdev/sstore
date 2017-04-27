<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Store extends Model {

    public $timestamps = false;
    protected $fillable = [
        'name',
        'address',
        'latitude',
        'longitude'
    ];
}