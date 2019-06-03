<?php

namespace Index\Http\Controllers;


use Index\Http\Requests\CreatMovie;
use Illuminate\Http\Request;
use \Index\movie;
use  Index\comment ;
use \Index\user;
use \Index\producer;
use \Index\actor;
use \Index\type;
use \Index\Movies_order;
use Auth;

class admincontroller extends Controller
{
    //

    //
    Function dashboard()
    {
      return view('admin.Dashboard');
    }

    Function comments()
          {
            $comments = Comment::all();
            return View('admin.comments',compact('comments'));
          }
          Function movies()
          {
            $movies = Movie::all();
            return View('admin.movies',compact('movies'));
          }
          Function users()
          {
            $users=User::all();
            return View('admin.users',compact('users'));
          }
          public function uploadnewmovie()
  {
    return view('admin.uploadnewmovie');
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
    return back()->with('success' , 'movie is successfully created');
}
public function deletemovie($id)
    {
        $movie = Movie::where('id', $id)->first()->delete();
          return back();
    }
    public function editmovie($id)
      {
        $movie = Movie::where('id', $id)->first();
        return view('admin.editMovie',compact('movie'));
      }
      public function editmovie1(CreatMovie $request,$id)
      {
        $movie = Movie::where('id', $id)->first();
        $movie->name = $request['title'];
        $movie->description = $request['description'];
        $movie->thumbnail = $request['thumbnail'];

          $movie->save();
          return back()->with('success' , 'Movie is successfully updated');
      }


      Function actors()
      {
        $actors = Actor::all();
        return View('admin.actors',compact('actors'));
      }
      public function addnewactor(request $request)
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
        return back()->with('success' , 'movie is successfully created');
    }
    public function deleteactor($id)
        {
            $actor = Actor::where('id', $id)->first()->delete();
              return back();
        }
        public function editactor($id)
          {
            $actor = Actor::where('id', $id)->first();
            return view('admin.editactor',compact('actor'));
          }
          public function editactor1(CreatMovie $request,$id)
          {
            $actor = actor::where('id', $id)->first();
            $actor->name = $request['name'];
            $actor->description = $request['description'];
            $actor->thumbnail = $request['thumbnail'];

              $actor->save();
              return back()->with('success' , 'Movie is successfully updated');
          }


          Function producers()
          {
            $producers = producer::all();
            return View('admin.producers',compact('producers'));
          }
          public function addnewproducer(request $request)
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
            return back()->with('success' , 'movie is successfully created');
        }
        public function deleteproducer($id)
            {
                $producer = Producer::where('id', $id)->first()->delete();
                  return back();
            }
            public function editproducer($id)
              {
                $producer = producer::where('id', $id)->first();
                return view('admin.editproducer',compact('producer'));
              }
              public function editproducer1(CreatMovie $request,$id)
              {
                $producer = producer::where('id', $id)->first();
                $producer->name = $request['name'];

                $producer->thumbnail = $request['thumbnail'];

                  $actor->save();
                  return back()->with('success' , 'Movie is successfully updated');
              }

              Function moviestypes()
              {
                $moviestypes = Type::all();
                return View('admin.moviestypes',compact('moviestypes'));
              }
              public function addnewmoviestype(request $request)
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




                $producer->save();
                return back()->with('success' , 'movie is successfully created');
            }
            public function deletemoviestype($id)
                {
                    $moviestypes = Type::where('id', $id)->first()->delete();
                      return back();
                }
                public function editmoviestype($id)
                  {
                    $moviestypes = Type::where('id', $id)->first();
                    return view('admin.editmoviestype',compact('moviestypes'));
                  }
                  public function editmoviestype1(CreatMovie $request,$id)
                  {
                    $moviestypes = Type::where('id', $id)->first();
                    $moviestypes->name = $request['name'];
                      $actor->save();
                      return back()->with('success' , 'Movie is successfully updated');
                  }

public function reports()
{
  return view('admin.report') ;
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

return view('admin.generatedreport',compact('Downloaded_movies'));
}
}
