<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\movie ;
 use App\Http\Resources\movie as movie1 ;
use App\movie_rate;
class publiccontroller extends Controller
{
    //

      public function index()
  {
    $allmovies = movie::paginate(10);
    return movie1::collection($allmovies);
    // return view('welcome',compact('allmovies'));
  }
  public function singlmovie($id)
    {

      $movie = movie::find($id);
movie1::withoutWrapping();
return new movie1($movie);

      // return view('movies',compact('movie'),compact('rate'));
    }
    public function about()
    {
      return new movie1(['show about page']);
    }
    public function contact()
    {
      return new movie1(['show contact page']);
    }
    public function contactpost()
    {
      return new movie1([]);
    }
  public function  MovieNameSeachByletter($letter)
  {
    $Allmovies = movie::all();
    $moviesStartWithLetter =[];
    foreach ($Allmovies as $movie)
      if ($movie->name[0] ==   $letter)
      {
        array_push($moviesStartWithLetter,$movie);
      }
    endforeach
    return movie1::collection($moviesStartWithLetter);
  }
  public function  actorSeachByletter($letter)
  {
    $Allactors = actor::all();
    $actorsStartWithLetter =[];
    foreach ($Allactors as $actor)
      if ($actor->name[0] ==   $letter)
      {
        array_push($actorsStartWithLetter,$actor);
      }
    endforeach
    return movie1::collection($actorsStartWithLetter);
  }
  public function  producerSeachByletter($letter)
  {
    $AllProducers = producer::all();
    $ProducersStartWithLetter =[];
    foreach ($AllProducers as $producer)
      if ($producer->name[0] ==   $letter)
      {
        array_push($actorsStartWithLetter,$actor);
      }
    endforeach
    return movie1::collection($ProducersStartWithLetter);
  }
}
