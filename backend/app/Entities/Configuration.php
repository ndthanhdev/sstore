<?php
/**
 * Created by vunguyenhung on 4/26/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Configuration extends Model {

    protected $fillable = [
        'key',
        'value'
    ];
}