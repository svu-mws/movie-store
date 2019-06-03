<?php

namespace Index;

use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
  protected $table = 'typess';
  public function order()
  {
    return $this->hasmany('Index\movie_type','type_id');
  }

    //
}
