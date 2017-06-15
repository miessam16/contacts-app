<?php

namespace App\Http\Controllers;

use App\Contact;
use App\Http\Requests\ContactRequest;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //Require login to use this controller
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        return view('home', ['contacts'=> \request()->user()->contacts]);
    }

    /**
     * Add Contact to the database
     * Store the image into storage/app/img/ directory
     * @param ContactRequest $request
     * @param Contact $contactModel
     * @return view of the contact card
     */


    public function addContact (ContactRequest $request, Contact $contactModel){

        //save file to storage/app/img/
        $imgName = uniqid('img_').'.'
            .$request->file('image')->extension();
        $request->file('image')->storePubliclyAs('public/images/',$imgName);
        //create and return the new contact
        $request['image_url'] = $imgName;
        $request['user_id'] = $request->user()->id;
        return view('contact')->with(['contact'=>
            $contactModel->create($request->except('_token','image'))]);
    }

    public function deleteContact($id, Contact $contactModel){

        $contactModel->findOrFail($id)->delete();

        return ['success'=>true];
    }
}
