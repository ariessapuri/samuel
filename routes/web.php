<?php

use App\Http\Controllers\AppController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Support\Facades\Storage;

Route::get('/storage/uploads/{path}', function ($path) {
    // Dapatkan path lengkap ke file dari direktori uploads
    $filePath = storage_path('app/uploads/' . $path);

    // Periksa apakah file ada
    if (file_exists($filePath)) {
        // Kembalikan respons dengan file
        return response()->file($filePath);
    }

    // Jika file tidak ditemukan, kembalikan respons dengan status 404
    return response()->json(['message' => 'File not found.'], 404);
})->where('path', '.*');


Route::middleware('api')->group(function () {
    Route::get('/api/{any}', [AppController::class, 'index'])->where('any', '.*');
});

Route::get('/{any}', [AppController::class, 'index'])->where('any', '.*');
