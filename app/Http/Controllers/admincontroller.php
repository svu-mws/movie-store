<?php

namespace App\Http\Controllers;


use App\Http\Requests\CreatMovie;
use Illuminate\Http\Request;
use \App\movie;
use  App\comment ;
use \App\user;
use \App\producer;
use \App\actor;
use \App\type;
use \App\Movies_order;
use Auth;
 use App\Http\Resources\movie as movie1 ;

class admincontroller extends Controller
{
    //

    //
    Function dashboard()
    {
        return (new movie1(['show admin.Dashboard']))
            ->response()
            ->setStatusCode(200);
      // return view('admin.Dashboard');
    }

    Function comments()
          {
            $comments = Comment::all();
            // return View('admin.comments',compact('comments'));
              return  movie1::collection($comments);
          }
          Function movies()
          {
            $movies = Movie::all();
            // return View('admin.movies',compact('movies'));
              return  movie1::collection($movies);
          }
          Function users()
          {
            $users=User::all();
            // return View('admin.users',compact('users'));
              return  movie1::collection($users);
          }
          public function uploadnewmovie()
  {
    // return view('admin.uploadnewmovie');
      return  (new movie1(['show upload movie page']))
            ->response()
            ->setStatusCode(200);
  }
  public function uploadnewmovie1(request $request)
{
  $this->validate($request,[
'title'=>'required|string',
'description' =>'required|string',
'thumbnail' =>'required',
'price' => 'required|regex:/^[0-9]+(\.[0-9][0-9]?)?$/' ,
'prodicer_id' => 'required|regex:/^[0-9]+$/'
]);

  $movie = new movie();
  $movie->name = $request['title'];
  $movie->description = $request['description'];
  //$thumbnal = $request->file('thumbnail');
  //$filename = $thumbnal->GetClientOriginalName();
//$thumbnal->move( 'movies_images',$filename);

//$movie->thumbnail ='product_images/'.$filename;
$movie->thumbnail =$request['thumbnail'];
  $movie->price = $request['price'];

  $movie->prodicer_id = $request['prodicer_id'];
    $movie->save();

     return (new movie1(['movie has successfully uploaded']))
            ->response()
            ->setStatusCode(201);
}
public function deletemovie($id)
    {
        $movie = Movie::where('id', $id)->first()->delete();
          // return back();
          return (new movie1(['movie is successfully deleted']))
                 ->response()
                 ->setStatusCode(202);
    }
    public function editmovie($id)
      {
        $movie = Movie::where('id', $id)->first();
        movie1::withoutWrapping();
        return (new movie1($movie))
        ->response()
        ->setStatusCode(200);
        // return view('admin.editMovie',compact('movie'));
      }
      public function editmovie1(CreatMovie $request,$id)
      {
        $movie = Movie::where('id', $id)->first();
        $movie->name = $request['title'];
        $movie->description = $request['description'];
        $movie->thumbnail = $request['thumbnail'];

          $movie->save();
          movie1::withoutWrapping();
          return (new movie1($movie))
          ->response()
          ->setStatusCode(202);
          // return back()->with('success' , 'Movie is successfully updated');
      }


      Function actors()
      {
        $actors = Actor::all();
        // return View('admin.actors',compact('actors'));
        return  movie1::collection($actors)
        ->response()
          ->setStatusCode(204);
      }
      public function addnewactor()
      {
        movie1::withoutWrapping();
        return (new movie1(['show add actor page']))
        ->response()
          ->setStatusCode(204);
      }
      public function addnewactor1(request $request)
    {
      $this->validate($request,[
    'name'=>'required|string',
    'description' =>'required|string',
    'thumbnail' =>'required',

    ]);

      $actor = new actor();
      $actor->name = $request['name'];
      $actor->description = $request['description'];
      //$thumbnal = $request->file('thumbnail');
      //$filename = $thumbnal->GetClientOriginalName();
    //$thumbnal->move( 'movies_images',$filename);

    //$movie->thumbnail ='product_images/'.$filename;
    $actor->thumbnail =$request['thumbnail'];



        $actor->save();
        return (new movie1(['movie is successfully created']))
        ->response()
          ->setStatusCode(201);
        // return back()->with('success' , 'movie is successfully created');
    }
    public function deleteactor($id)
        {
            $actor = Actor::where('id', $id)->first()->delete();
            return (new movie1(['Actor is successfully deleted']))
            ->response()
              ->setStatusCode(202);
              // return back();
        }
        public function editactor($id)
          {
            $actor = Actor::where('id', $id)->first();
            movie1::withoutWrapping();

            return (new movie1($actor))
            ->response()
            ->setStatusCode(200);
            // return view('admin.editactor',compact('actor'));
          }
          public function editactor1(CreatMovie $request,$id)
          {
            $actor = actor::where('id', $id)->first();
            $actor->name = $request['name'];
            $actor->description = $request['description'];
            $actor->thumbnail = $request['thumbnail'];

              $actor->save();
              movie1::withoutWrapping();

              return (new movie1($actor))
              ->response()
              ->setStatusCode(202);
              // return back()->with('success' , 'Movie is successfully updated');
          }


          Function producers()
          {
            $producers = producer::all();
            return movie1::collection($producers);
            // return View('admin.producers',compact('producers'));
          }
          public function addnewproducer()
        {
          return new movie1(['show add new producer page']);
        }
          public function addnewproducer1(request $request)
        {
          $this->validate($request,[
        'name'=>'required|string',

        'thumbnail' =>'required',

        ]);

          $producer = new producer();
          $producer->name = $request['name'];

          //$thumbnal = $request->file('thumbnail');
          //$filename = $thumbnal->GetClientOriginalName();
        //$thumbnal->move( 'movies_images',$filename);

        //$movie->thumbnail ='product_images/'.$filename;
        $producer->thumbnail =$request['thumbnail'];



            $producer->save();
            movie1::withoutWrapping();

            return (new movie1($producer))
            ->response()
            ->setStatusCode(201);
            // return back()->with('success' , 'movie is successfully created');
        }
        public function deleteproducer($id)
            {
                $producer = Producer::where('id', $id)->first()->delete();
                return (new movie1(['producer has been deleted successfully']))
                ->response()
                ->setStatusCode(202);
                  // return back();
            }
            public function editproducer($id)
              {
                $producer = producer::where('id', $id)->first();
                movie1::withoutWrapping();

                return (new movie1($producer))
                ->response()
                ->setStatusCode(202);
                // return view('admin.editproducer',compact('producer'));
              }
              public function editproducer1(CreatMovie $request,$id)
              {
                $producer = producer::where('id', $id)->first();
                $producer->name = $request['name'];

                $producer->thumbnail = $request['thumbnail'];

                  $actor->save();
                  movie1::withoutWrapping();
                  return (new movie1($actor))
                  ->response()
                  ->setStatusCode(202);
                  // return back()->with('success' , 'Movie is successfully updated');
              }

              Function moviestypes()
              {
                $moviestypes = Type::all();
                return  movie1::collection($moviestypes);
                // return View('admin.moviestypes',compact('moviestypes'));
              }
              public function addnewmoviestype()
              {
                return (new movie1(['show add type page']))
                ->response()
                ->setStatusCode(200);
              }
              public function addnewmoviestype1(request $request)
            {
              $this->validate($request,[
            'name'=>'required|string',



            ]);

              $moviestypes = new Type();
              $moviestypes->name = $request['name'];

              //$thumbnal = $request->file('thumbnail');
              //$filename = $thumbnal->GetClientOriginalName();
            //$thumbnal->move( 'movies_images',$filename);

            //$movie->thumbnail ='product_images/'.$filename;




                $moviestypes->save();
                movie1::withoutWrapping();

                return (new movie1($moviestypes))
                ->response()
                ->setStatusCode(201);
                // return back()->with('success' , 'movie is successfully created');
            }
            public function deletemoviestype($id)
                {
                    $moviestypes = Type::where('id', $id)->first()->delete();
                    movie1::withoutWrapping();
                      return (new movie1(['']))
                      ->response()
                      ->setStatusCode(202);
                }
                public function editmoviestype($id)
                  {
                    $moviestypes = Type::where('id', $id)->first();
                    movie1::withoutWrapping();
                    return (new movie1($moviestypes))
                    ->response()
                    ->setStatusCode(202);
                    // return view('admin.editmoviestype',compact('moviestypes'));
                  }
                  public function editmoviestype1(CreatMovie $request,$id)
                  {
                    $moviestypes = Type::where('id', $id)->first();
                    $moviestypes->name = $request['name'];
                      $actor->save();
                      movie1::withoutWrapping();
                      return (new movie1($moviestypes))
                      ->response()
                      ->setStatusCode(202);
                      // return back()->with('success' , 'Movie is successfully updated');
                  }

public function reports()
{
  return new movie1('[show report page]');
  // return view('admin.report') ;
}
public function reports1(request $request)
{
  $this->validate($request,[
'start_date'=>'required|date',

'end_date' =>'required|date'


]);
  $startdate = $request['start_date'];
    $enddate = $request['end_date'];

    $Downloaded_movies = Movies_order::whereBetween('created_at', [$startdate, $enddate])->get();

// return view('admin.generatedreport',compact('Downloaded_movies'));
return movie1::collection($Downloaded_movies);
}
}
