<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class EditIndexPageController extends Controller
{
    /**
     * index oldal szerkesztő megjelenítése
     */
    public function renderEdit(){
        return view('admin/index_page/edit_container');
    }
}
