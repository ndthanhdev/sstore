<?php
/**
 * Created by vunguyenhung on 4/27/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Category extends Model {
    public $timestamps = false;
    protected $fillable = [
        'name',
        'description'
    ];

    public function parent() {
        return $this->belongsTo('App\Entities\Category');
    }

    public function childs() {
        return $this->hasMany('App\Entities\Category');
    }
}