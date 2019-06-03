<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Criterion extends Model
{
  protected $table = 'criteria';
    //
  
    public function user()
    {
      return $this->belongsto('Index\User');
    };
}
