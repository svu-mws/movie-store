<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class movie extends Model
{
    //
    public  function comments()
    {
      return $this->hasmany('Index\comment');
    }
    public  function types()
    {
      return $this->hasmany('Index\movie_type');
    }
    public  function rates()
    {
      return $this->hasmany('Index\Movie_rate');
    }

}
