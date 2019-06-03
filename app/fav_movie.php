<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class fav_movie extends Model
{
    //
    protected $table = 'fav_movies';
    public function movie()
    {
      return $this->belongsto('Index\movie');
    };
    public function user()
    {
      return $this->belongsto('Index\User');
    };
}
