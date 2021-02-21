<?php
/**
 * Created by PhpStorm.
 * User: Manuk Minasyan
 * Date: 01/02/2019
 * Time: 22:46
 */

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLaravelRoutePermissionManagerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create(config('laravel-permission-manager.database.route_permission_table'), function (Blueprint $table) {
            $table->increments('id');

            $table->unsignedBigInteger('route_id');
            $table->unsignedBigInteger('ability_id');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists(config('laravel-permission-manager.database.route_permission_table'));
    }
}