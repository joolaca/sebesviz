var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');
});



if (mix.inProduction) {


    mix.styles([ // page assets css
        'resources/assets/touche/css/isotope.css',

    ], 'public/css/assets.css')
    ;

    mix.scripts([ //page assets js
        'resources/assets/touche/js/jquery.1.11.1.js',
    ], 'public/js/assets.js');
}
