<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateIndexPageTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('index_page', function (Blueprint $table) {
            $table->increments('id');
            $table->text('name');
            $table->text('location');
            $table->text('description')->nullable();
            $table->text('title')->nullable();
            $table->binary('base64_image')->nullable();
            $table->text('href')->nullable();
            $table->integer('sequence')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('index_page');
    }
}
