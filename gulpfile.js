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
    mix
    //.sass('app.scss')

    //enable php unit test
    .phpUnit()
    
    .copy(
      'vendor/bower_components/jquery/dist/jquery.min.js',
      'public/js/vendor/jquery.js'
    )
    .copy(
      'vendor/bower_components/angular/angular.min.js',
      'public/js/vendor/angular.js'
    )
    .copy(
      'vendor/bower_components/satellizer/satellizer.min.js',
      'public/js/vendor/satellizer.js'
    )
    .copy(
      'vendor/bower_components/bootstrap/dist/css/bootstrap.min.css',
      'public/css/vendor/bootstrap.css'
    );
});
