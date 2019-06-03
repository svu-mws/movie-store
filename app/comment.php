<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class comment extends Model
{
    //

    public function user()
    {
      return $this->belongsto('Index\User');
    }
}
