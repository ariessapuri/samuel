<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DependentDropdownController;
use App\Http\Controllers\AgreementController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\AttorneyController;
use App\Http\Controllers\StocklistController;
use App\Http\Controllers\SettingController;
use App\Http\Controllers\AccessController;

use Illuminate\Support\Facades\Storage;


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

Route::middleware('auth.api')->group(function () {
    Route::prefix('zone')->group(function () {
        Route::get('/province', [DependentDropdownController::class, 'provinces']);
        Route::get('/city/{id}', [DependentDropdownController::class, 'cities']);
        Route::get('/district/{id}', [DependentDropdownController::class, 'districts']);
        Route::get('/subdistrict/{id}', [DependentDropdownController::class, 'villages']);
        Route::get('/postcode/{id}', [DependentDropdownController::class, 'postcode']);
    });

    Route::prefix('agreement')->group(function () {
        Route::get('/', [AgreementController::class, 'index']);
        Route::get('/generate_agreement_value', [AgreementController::class, 'generate_agreement_value']);
        Route::get('/get_end_investment', [AgreementController::class, 'get_end_investment']);
        Route::get('/get_total_days', [AgreementController::class, 'get_total_days']);
        Route::post('/store', [AgreementController::class, 'store']);
        Route::get('/show/{id}', [AgreementController::class, 'show']);
        Route::put('/update/{id}', [AgreementController::class, 'update']);
        Route::post('/upload_attachments/{id}', [AgreementController::class, 'upload_attachments']);
        Route::post('/remove_attachment/{id}', [AgreementController::class, 'remove_attachment']);
        Route::delete('/delete/{id}', [AgreementController::class, 'destroy']);
    });

    Route::prefix('clients')->group(function () {
        Route::get('/', [ClientController::class, 'index']);
        Route::get('/getClient', [ClientController::class, 'getClient']);
        Route::get('/getClientDetail/{code}', [ClientController::class, 'getClientDetail']);
        Route::post('/store', [ClientController::class, 'store']);
        Route::get('/show/{id}', [ClientController::class, 'show']);
        Route::put('/update/{id}', [ClientController::class, 'update']);
        Route::post('/upload_attachments/{id}', [ClientController::class, 'upload_attachments']);
        Route::post('/remove_attachment/{id}', [ClientController::class, 'remove_attachment']);
        Route::delete('/delete/{id}', [ClientController::class, 'destroy']);
    });

    Route::prefix('stocklist')->group(function () {
        Route::get('/', [StocklistController::class, 'index']);
        Route::post('/store', [StocklistController::class, 'store']);
        Route::post('/uploadBulk', [StocklistController::class, 'uploadBulk']);
        Route::get('/edit/{id}', [StocklistController::class, 'edit']);
        Route::put('/update/{id}', [StocklistController::class, 'update']);
        Route::delete('/delete/{id}', [StocklistController::class, 'destroy']);
    });

    Route::prefix('users')->group(function () {
        Route::get('/', [UserController::class, 'index']);
        Route::post('/store', [UserController::class, 'store']);
        Route::get('/show/{id}', [UserController::class, 'show']);
        Route::put('/update/{id}', [UserController::class, 'update']);
        Route::put('/updatePassword/{id}', [UserController::class, 'updatePassword']);
        Route::delete('/delete/{id}', [UserController::class, 'destroy']);
    });

    Route::prefix('profile')->group(function () {
        Route::get('/', [UserController::class, 'profile']);
        Route::put('/update', [UserController::class, 'updateProfile']);
        Route::put('/updatePassword', [UserController::class, 'updatePasswordProfile']);
    });

    Route::prefix('setting')->group(function () {
        Route::get('/', [SettingController::class, 'edit']);
        Route::post('/update/', [SettingController::class, 'update']);
    });

    Route::prefix('attorney')->group(function () {
        Route::get('/', [AttorneyController::class, 'edit']);
        Route::post('/update/', [AttorneyController::class, 'update']);
    });

    Route::prefix('access')->group(function () {
        Route::get('/getAllRoles', [AccessController::class, 'getAllRoles']);
        Route::get('/allroles', [AccessController::class, 'allRoles']);
        Route::post('/addRole', [AccessController::class, 'addRole']);
        Route::delete('/deleteRole/{id}', [AccessController::class, 'deleteRole']);
        Route::get('/getAllPermissions/', [AccessController::class, 'getAllPermissions']);
        Route::get('/checkSinglePermission/{permissionName}', [AccessController::class, 'checkSinglePermission']);
        Route::get('/getAllPermissionsForCurrentUser', [AccessController::class, 'getAllPermissionsForCurrentUser']);
        Route::get('/allPermissions/', [AccessController::class, 'allPermissions']);
        Route::put('/updateRolePermissions/{roleId}', [AccessController::class, 'updateRolePermissions']);
    });
});

Route::get('/storage/uploads/{filename}', function ($filename) {
    $path = storage_path('app/uploads/' . $filename);

    if (!Storage::disk('local')->exists('uploads/' . $filename)) {
        abort(404);
    }

    return response()->file($path);
})->where('filename', '.*');

Route::get('/storage/uploads/clients/{filename}', function ($filename) {
    $path = storage_path('app/uploads/clients/' . $filename);

    if (!Storage::disk('local')->exists('uploads/clients/' . $filename)) {
        abort(404);
    }

    return response()->file($path);
})->where('filename', '.*');

Route::get('/storage/uploads/agreements/{filename}', function ($filename) {
    $path = storage_path('app/uploads/agreements/' . $filename);

    if (!Storage::disk('local')->exists('uploads/agreements/' . $filename)) {
        abort(404);
    }

    return response()->file($path);
})->where('filename', '.*');

Route::post('/login', [AuthController::class, 'login']);
Route::get('/generatepdf/{id}', [AgreementController::class, 'generatePDF']);
