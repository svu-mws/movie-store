@extends('master.master')
@section('content')

    <!-- Page Header -->
    <header class="masthead" style="background-image: url({{asset('/assets/img/home-bg.jpg')}})">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Laravel Blog</h1>
              <span class="subheading">Personal Blog Powered By Laravel </span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          @foreach($allmovies as $movie)
            <div class="movie-preview">
              <a href="{{route('movie',$movie->id)}}"><img scr="{{$movie->thumbnail}}"></a>

              <a href="{{route('movie',$movie->id)}}">

                <h2 class="movie-title">

                  {{$movie->name }}
                </h2>

              </a>
              <p> price is {{$movie->price}}$</p>
          
            </div>
            <hr>
          @endforeach

          <!-- Pager -->
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older movies &rarr;></a>
          </div>
        </div>
      </div>
    </div>

    <hr>
    @endsection
