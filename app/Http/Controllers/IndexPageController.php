<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexPageController extends Controller
{
    /**
    * Fő oldal megjelenítője
    */
    public function renderIndexPage(){

        return view('index_page/container');
    }



}
