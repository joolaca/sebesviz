<?php

use Illuminate\Database\Seeder;
use Backpack\CRUD\CrudTrait;
use Illuminate\Database\Eloquent\Model;


class IndexPageSeeder extends Seeder
{

    protected $table = 'index_page';
    protected $primaryKey = 'id';
    public $timestamps = false;

    protected $fillable = ['id','name','location','description','title','base64_image','href','sequence'];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('index_page')->insert([
            'name'     => 'Header',
            'location'     => 'header',
        ]);
    }
}
