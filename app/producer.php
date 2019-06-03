<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class producer extends Model
{
    //
    public function movies()
    {
      return $this->hasmany('Index\movie','movie_id');
    }
}
