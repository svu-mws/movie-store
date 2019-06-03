<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Channel extends Model
{
    //
    public  function user()
    {
      return $this->belongsto('Index\User','user_id');
    }
}
