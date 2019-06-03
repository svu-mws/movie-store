<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Movies_order extends Model
{
    //7
    public function order()
    {
      return $this->belongsto('Index\order');
    }
    public function movies()
    {
      return $this->belongsto('Index\movies');
    }
}
