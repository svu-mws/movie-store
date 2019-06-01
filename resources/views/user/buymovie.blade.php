
@extends('layouts.admin')
@section('title')
  User comments
@endsection
@section('content')
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
</div>
<div class="paymetn">
  <form id="payment" action="{{route('buymovie',$movie->id)}}" method="POST" >
    @csrf
    <input type="text" name="card_owner" placeholder="Card Owner">
      <input type="number" name="card_number" placeholder="cardnumber">
      <input type="date" name="expireddate" placeholder="expired date">
      <input type="number" name="VCC" placeholder="security code">


  </form>
<button class="btn btn_primary" type="button" onclick="document.getElementById(payment).submit()" >pay</button>
</div>
@endsection
