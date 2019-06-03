<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Movies_actor extends Model
{
    //
    public function order()
    {
      return $this->belongsto('Index\actor');
    };
    public function movies()
    {
      return $this->belongsto('Index\movie');
    };
}
