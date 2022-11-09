<?php

use App\Http\Controllers\AnimalController;
// import student controller
use App\Http\Controllers\StudentController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// ANIMALS ROUTE

// method get
Route::get('/animals', [AnimalController::class, 'index']);

// method post
Route::post('/animals', [AnimalController::class, 'store']);

// method put
Route::put('/animals/{id}', [AnimalController::class, 'update']);

// method delete
Route::delete('/animals/{id}', [AnimalController::class, 'destroy']);

// STUDENTS ROUTE

// method get
Route::get('/students', [StudentController::class, 'index']);

// method post
Route::post('/students', [StudentController::class, 'store']);

// method put
Route::put('/students/{id}', [StudentController::class, 'update']);

// method destroy
Route::delete('/students/{id}', [StudentController::class, 'destroy']);

// method show
Route::get('/students/{id}', [StudentController::class, 'show']);
