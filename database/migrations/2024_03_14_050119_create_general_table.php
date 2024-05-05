<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeneralTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('general', function (Blueprint $table) {
            $table->id();
            $table->string('company_name');
            $table->string('company_logo')->nullable();
            $table->string('company_phone')->nullable();
            $table->string('company_website_address')->nullable();
            $table->string('company_email')->nullable();
            $table->string('company_fax')->nullable();
            $table->decimal('buying_fee', 10, 2)->default(0.00);
            $table->decimal('selling_fee', 10, 2)->default(0.00);
            $table->decimal('profit_target_min', 10, 2)->default(0.00);
            $table->decimal('profit_target_max', 10, 2)->default(0.00);
            $table->text('address')->nullable();
            $table->string('updated_by')->nullable();
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
        Schema::dropIfExists('general');
    }
}
