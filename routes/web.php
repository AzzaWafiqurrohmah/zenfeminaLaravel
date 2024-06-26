<?php

use App\Models\Cycle;
use App\Models\Debt;
use App\Models\User;
use App\Notifications\BaseNotification;
use Carbon\Carbon;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Admin\AuthController;
use App\Http\Controllers\Admin\UserController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\EducationController;
use App\Http\Controllers\Admin\CategoryController;
use App\Http\Controllers\Admin\ProfileController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Route::controller(AuthController::class)->middleware('guest')->group(function() {
    Route::get('/', 'index')->name('login');
    Route::post('/store', 'store');
});

Route::middleware(['auth', 'role:admin'])->group(function (){

    //signOut
    Route::get('signOut', [AuthController::class, 'signOut'])->name('signOut');

    //dashboard
    Route::resource('dashboard', DashboardController::class)
        ->only('index');

    //user
    Route::prefix('users')
        ->name('users.')
        ->controller(UserController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('store', 'store')->name('store');
            Route::match(['PUT', 'PATCH'], '{user}/update', 'update')->name('update');

            Route::get('datatables', 'datatables')->name('datatables');
            Route::get('{user}', 'show')->name('show');

            Route::delete('{user}', 'destroy')->name('destroy');
        });

    //education
    Route::prefix('educations')->name('educations.')->controller(EducationController::class)->group(function () {
        Route::get('/create', 'create')->name('create');
        Route::post('/store', 'store')->name('store');
        Route::delete('{education}', 'destroy')->name('destroy');
        Route::get('/{education}/edit', 'edit')->name('edit');
        Route::put('/{education}/update', 'update')->name('update');
        Route::get('/', 'index')->name('index');
        Route::get('search', 'search')->name('search');
        Route::get('education', 'education')->name('education');
    });

    //category
    Route::prefix('categories')
        ->name('categories.')
        ->controller(CategoryController::class)->group(function () {
            Route::get('/', 'index')->name('index');
            Route::post('store', 'store')->name('store');
            Route::match(['PUT', 'PATCH'], '{category}/update', 'update')->name('update');

            Route::get('datatables', 'datatables')->name('datatables');
            Route::get('{category}', 'show')->name('show');

            Route::delete('{category}', 'destroy')->name('destroy');
        });

    // Profile password update routes
    Route::prefix('profiles')
        ->name('profiles.')
        ->controller(ProfileController::class)
        ->group(function () {
            Route::get('/', 'index')->name('index');
            Route::put('/{user}/update', 'update')->name('update');
            Route::put('/{user}/updatePassword', 'updatePassword')->name('updatePassword');
    });

//    Route::resource('profile', ProfileController::class)->except(['show']);
});

Route::get('notificationEx', function (){
   $user = \App\Models\User::find(3);
   $user->notify(new \App\Notifications\BaseNotification('Pengingat siklus', 'Siklus anda akan segera dimulai'));
});
