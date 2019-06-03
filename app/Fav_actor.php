<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Fav_actor extends Model
{
    //
    public function actor()
    {
      return $this->belongsto('Index\actor');
    };
    public function user()
    {
      return $this->belongsto('Index\User');
    };
}
