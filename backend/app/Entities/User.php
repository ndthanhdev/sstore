<?php
/**
 * Created by vunguyenhung on 4/26/17
 */

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

class User extends Model {

    protected $fillable = [
        'full_name',
        'dob',
        'tel',
        'address',
        'email',
        'gender',
        'avatar'
    ];

    public function activeCart() {
        return $this->hasMany('App\Entities\ShoppingCart')
            ->where('active', true)
            ->withCount('details AS item');
    }

    public function interactedReviews() {
        return $this
            ->belongsToMany('App\Entities\Review', 'user_review')
            ->withPivot('liked');
    }
}