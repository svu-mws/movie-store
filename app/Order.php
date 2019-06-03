<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    //
    public function movies_order()
    {
      return $this->hasmany('Index\movies_order','order_id');
    };
    public function customer()
    {
      return $this->belongsto('Index\User','order_id');
    }

}
