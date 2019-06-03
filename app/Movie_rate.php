<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Movie_rate extends Model
{
    protected $table = 'movies_rates';
    //
    public  function movie()
    {
      return $this->belongsto('Index\movie');
    }
}
