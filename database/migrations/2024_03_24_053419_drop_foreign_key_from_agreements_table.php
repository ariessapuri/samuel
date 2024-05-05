<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DropForeignKeyFromAgreementsTable extends Migration
{
    public function up()
    {
        Schema::table('agreements', function (Blueprint $table) {
            $table->dropForeign('agreements_client_id_foreign');
        });
    }

    public function down()
    {
        Schema::table('agreements', function (Blueprint $table) {
            // Re-create foreign key jika diperlukan
            // $table->foreign('client_id')->references('id')->on('clients');
        });
    }
}
