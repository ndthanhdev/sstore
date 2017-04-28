<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Account extends Model {

    public $timestamps = false;
    protected $fillable = [
        'username',
        'password',
        'IP',
        'last_login',
        'role'
    ];

    public function user() {
        return $this->belongsTo('App\Entities\User');
    }
}