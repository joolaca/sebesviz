<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class IndexPageController extends Controller
{
    /**
    *
    */
    public function renderIndexPage(){
        return view('index_page/container');
    }
}
