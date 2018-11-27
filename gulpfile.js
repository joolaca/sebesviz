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
            './resources/assets/Green/css/isotope.css',
            './resources/assets/Green/js/fancybox/jquery.fancybox.css',
            './resources/assets/Green/css/bootstrap.css',
            './resources/assets/Green/css/bootstrap-theme.css',
            './resources/assets/Green/css/responsive-slider.css',
            './resources/assets/Green/css/animate.css',
            './resources/assets/Green/css/style.css',
            './resources/assets/Green/css/font-awesome.min.css',
            './resources/assets/Green/skin/default.css',


        ], 'public/css/assets.css');

        mix.scripts([
            './resources/assets/Green/js/modernizr-2.6.2-respond-1.1.0.min.js',
            './resources/assets/Green/js/jquery.js',
            './resources/assets/Green/js/jquery.easing.1.3.js',
            './resources/assets/Green/js/bootstrap.min.js',
            './resources/assets/Green/js/jquery.isotope.min.js',
            './resources/assets/Green/js/jquery.nicescroll.min.js',
            './resources/assets/Green/js/fancybox/jquery.fancybox.pack.js',
            './resources/assets/Green/js/skrollr.min.js',
            './resources/assets/Green/js/jquery.scrollTo.js',
            './resources/assets/Green/js/jquery.localScroll.js',
            './resources/assets/Green/js/stellar.js',
            './resources/assets/Green/js/responsive-slider.js',
            './resources/assets/Green/js/jquery.appear.js',
            './resources/assets/Green/js/grid.js',
            './resources/assets/Green/js/main.js',
            './resources/assets/Green/js/wow.min.js',

        ], 'public/js/assets.js');

    }
    //



});

