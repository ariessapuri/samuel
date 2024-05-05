<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('code')->unique();
            $table->date('register_date')->nullable();
            $table->string('title')->nullable();
            $table->string('name')->nullable();
            $table->string('email')->nullable();
            $table->string('phone')->nullable();
            $table->string('id_type')->nullable();
            $table->string('id_number')->nullable();
            $table->string('nationality')->nullable();
            $table->json('address')->nullable();
            $table->string('gender')->nullable();
            $table->string('personal_bank_name')->nullable();
            $table->string('personal_beneficiary_name')->nullable();
            $table->string('personal_account_number')->nullable();
            $table->string('personal_branch')->nullable();
            $table->string('rdn_bank_name')->nullable();
            $table->string('rdn_beneficiary_name')->nullable();
            $table->string('rdn_account_number')->nullable();
            $table->string('rdn_branch')->nullable();
            $table->json('attachments')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clients');
    }
}
