<?php
/**
 * Created by vunguyenhung on 4/28/17
 */

namespace App\Entities;


use Illuminate\Database\Eloquent\Model;

class Review extends Model {
    protected $fillable = ['content'];

    public function interactedUsers() {
        return $this
            ->belongsToMany('App\Entities\User', 'user_review')
            ->withPivot('liked');
    }

    public function user() {
        return $this->belongsTo('App\Entities\User');
    }
}