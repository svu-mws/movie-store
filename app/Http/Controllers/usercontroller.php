<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use  App\comment ;
use Auth;
use App\movie_rate;
class usercontroller extends Controller
{
    //
    public function  __construct()
  {
     $this->middleware('auth');
  }
  public function dashboard()
  {
    $chart = new chart;
      return view('user.dashboard');
  }
  public function comments()
  {
    return view('user.comments');
  }
  public function profile()
  {
    return view('user.profile');
  }
   public function editprofile(UserUpdate $request)
   {
     $user=Auth::user();
     $user->name = $request['Name'];
     $user->email = $request['Email'];
     if ($request['password'] != "")
     {


        if(!(Hash::check($request['password'],Auth::user()->password)))
        {
          // $password = Hash::make('secret');

          return redirect()->back()->with('error',"your current password dose not match with your provided.");

        }
        if (strcmp($request['password'],$request['new password'])==0 )
        {
          return redirect()->back()->with('error',"your new password connot be same as current password");
        }
        $validation = $request->validate([
          'password' => 'required',
          'new password' => 'requied|string|min:6|confirmed'

        ]);

        return redirect()->back()->with('error',"your current password dose not match with your provided.");

        $user->password = bcrypt($request['new password']);
        // $user->save();
        return redirect()->back()->with('success','password changed successfully');

     }
     $user->save();
     return back();
    }
    public function deletecomment($commentid)
    {

        $comment = comment::where('id', $commentid)->where('User_id',Auth::id())->delete();

        return back();
    }
    public function addcomment(request $request,$movie_id)
    {
      $newcomment = new comment();
       $newcomment->description = $request->comment ;
        $newcomment->user_id = Auth::user()->id ;
        $newcomment->movie_id =$movie_id;
        $newcomment->save();
        return back();

    }
    public function addrate(request $request,$movie_id)
    {
      $newrate = new movie_rate();
       $newrate->rate = $request->rate ;
        $newrate->user_id = Auth::user()->id ;
        $newrate->movie_id =$movie_id;
        $newrate->save();
        return back();

    }
public function download_movie($movie_id)
{
    $movie = movie::find($movie_id);
    $haveit = Movies_order::where('movie_id', $movie_id)->where('User_id',Auth::id())
if ($haveit != null)
{
  return view('user.downloadlink');
}
    return view('user.buymovie',compact('movie'))


}
public function buymovie(request $request,$movie_id)
{
  $this->validate($request,[
'card_owner'=>'required',
'card_number' =>'required|number',
'expireddate' =>'required',
'VCC' => 'required|regex:/^[0-9][0-9][0-9]$/'
]);

$validcard = card::where(card_owner,$request->card_owner)->where('card_number',$request->card_number)->where('expireddate',$request->card_number)->where('VCC',$request->VCC);
if ($validcard != null)
{
  $order = new order();
  $movies_order = new movies_order();
    return view('user.downloadlink');
}
else {
  return back()->with('faild' , 'try another card');
}
}

}
