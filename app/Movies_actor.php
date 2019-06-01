<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movies_actor extends Model
{
    //
    public function order()
    {
      return $this->belongsto('App\actor');
    };
    public function movies()
    {
      return $this->belongsto('App\movie');
    };
}
