<?php

use Illuminate\Http\Request;

Route::group(['prefix' => 'auth'], function ($router) {

    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('me', 'AuthController@me');
    Route::post('/register', 'AuthController@register');

});

Route::group(['prefix'=> 'user'], function(){
	Route::resource('/books', 'BookController');
});