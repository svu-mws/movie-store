@extends('master.master')
@section('content')

    <!-- Page Header -->
    <header class="masthead" style="background-image: url({{asset('/assets/img/post-bg.jpg')}})">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="post-heading">
              <h1>{{$movie->name}}</h1>

            ////////////////
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Post Content -->
    <article>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
          {!!nl2br($movie->description)!!}
          </div>
        </div>
          <h2> movie rate is : {{$movie->rates()->avg('rate')}} </h2>

        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">

          <img src="{{asset('moviesPhotos/'.$movie->thumbnail)}}">
          </div>
        </div>
<div class="addrate">
  <form id="add_rate"  method="POST" action="{{route('addrate',$movie->id)}}" >
    @csrf
    <input type="number" name="rate">
  </form>
  <button type="button" onclick="document.getElementById('add_rate').submit()">add rate</button>

</div>
<div class="download_movie">
  <form id="download_movie" method="post" action={{"route('download_movie')}}">
      @csrf
  </form>
  <button type="button" onclick="document.getElementById(download_movie).submit()">download movie</button>
</div>
      <div class="comments">
      <hr>
        <h2>comments</h2>
        @foreach($movie->comments as $comment)
        <p>


          {{nl2br($comment->description)}}
        </p>
      </br>

        @endforeach
    </hr>

    <form id="addcomment_id" method="POST" action="{{Route('addcomment',$movie->id)}}">
      @csrf
        <textarea name="comment" placeholder="add comment" ></textarea>

    </form>
    <button type="button" class="btn btn-danger" onclick="document.getElementById('addcomment_id').submit()">add comment</button>

      </div>
      </div>
    </article>

    <hr>

@endsection
