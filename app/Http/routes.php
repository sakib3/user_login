<?php

/*
|--------------------------------------------------------------------------
| Routes File
|--------------------------------------------------------------------------
|
| Here is where you will register all of the routes in an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('index');
});




/*
|--------------------------------------------------------------------------
| Api Routes
|--------------------------------------------------------------------------

+--------+----------+------------------+------------------------+----------------------------------------------------------+------------+
| Domain | Method   | URI              | Name                   | Action                                                   | Middleware |
+--------+----------+------------------+------------------------+----------------------------------------------------------+------------+
|        | POST     | api/authenticate |                        | App\Http\Controllers\AuthenticateController@authenticate |            |
|        | GET|HEAD | api/authenticate | api.authenticate.index | App\Http\Controllers\AuthenticateController@index        |            |
+--------+----------+------------------+------------------------+----------------------------------------------------------+------------+*/


Route::group(['prefix' => 'api'], function () {
    Route::resource('authenticate', 'AuthenticateController',['only' => ['index']]);
    Route::post('authenticate/create', 'AuthenticateController@register');
    Route::post('authenticate', 'AuthenticateController@authenticate');
});


/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| This route group applies the "web" middleware group to every route
| it contains. The "web" middleware group is defined in your HTTP
| kernel and includes session state, CSRF protection, and more.
|
*/

Route::group(['middleware' => ['web']], function () {
    //
});
