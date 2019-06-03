<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Fav_producer extends Model
{
    //
    public function producer()
    {
      return $this->belongsto('Index\Producer');
    };
    public function user()
    {
      return $this->belongsto('Index\User');
    };
}
