<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class movie_type extends Model
{

  protected $table = 'Movies_types';
    //
    public function types()
    {
      return $this->belongsto('Index\type');
    };
    public function movies()
    {
      return $this->belongsto('Index\movie');
    };
}
