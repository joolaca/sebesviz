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
    // mix.sass('app.scss');
//C:\laca\project\sebesviz\resources\assets\Green\css\bootstrap.css



    //cls; npm run prod
    if (elixir.config.production) {
        mix.styles([
            './resources/assets/touche/css/bootstrap.css',
            './resources/assets/touche/fonts/font-awesome/css/font-awesome.css',
            './resources/assets/touche/css/style.css',
            './resources/assets/touche/css/nivo-lightbox/nivo-lightbox.css',
            './resources/assets/touche/css/nivo-lightbox/default.css',


        ], 'public/css/assets.css');

        mix.scripts([
            './resources/assets/touche/js/jquery.1.11.1.js',
            './resources/assets/touche/js/bootstrap.js',
            './resources/assets/touche/js/nivo-lightbox.js',
            './resources/assets/touche/js/jquery.isotope.js',
            './resources/assets/touche/js/jqBootstrapValidation.js',
            './resources/assets/touche/js/SmoothScroll.js',
            './resources/assets/touche/js/main.js',

        ], 'public/js/assets.js');

    }
    //



});

