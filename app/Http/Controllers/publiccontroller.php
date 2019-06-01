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
      return view('about');
    }
    public function contact()
    {
      return view('contact');
    }
    public function contactpost()
    {

    }
}
