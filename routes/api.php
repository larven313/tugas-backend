<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PatientController;
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

// route yang ada di dalam middleware harus login terlebih dahulu untuk bisa diakses
Route::middleware(['auth:sanctum'])->group(function () {

    // PATIENTS ROUTE
    Route::get('/patients', [PatientController::class, 'index']);
    Route::post('/patients', [PatientController::class, 'store']);
    Route::get('/patients{id}', [PatientController::class, 'show']);
    Route::put('/patients{id}', [PatientController::class, 'update']);
    Route::delete('/patients{id}', [PatientController::class, 'destroy']);

    Route::get('/patients/search/{name}', [PatientController::class, 'search']);
    Route::get('/patients/status/positive', [PatientController::class, 'positive']);
    Route::get('/patients/status/recovered', [PatientController::class, 'recovered']);
    Route::get('/patients/status/dead', [PatientController::class, 'dead']);
});

// Endpoint Register dan Login
// nama     : admin
// email    : admin@gmail.com
// password : admin
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
