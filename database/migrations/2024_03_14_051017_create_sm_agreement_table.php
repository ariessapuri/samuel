<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('agreements', function (Blueprint $table) {
            $table->id();
            $table->string('doc_no');
            $table->date('date');
            $table->unsignedBigInteger('client_id');
            $table->string('type');
            $table->decimal('investment_value', 15, 2);
            $table->decimal('profit_guarantee', 15, 2);
            $table->decimal('share_profit_investor_percentage', 15, 2);
            $table->decimal('share_profit_guarantor_percentage', 15, 2);
            $table->decimal('realized_gain', 15, 2);
            $table->decimal('share_profit_investor_value', 15, 2);
            $table->decimal('share_profit_guarantor_value', 15, 2);
            $table->integer('investment_period');
            $table->date('start_investment_date');
            $table->integer('total_days');
            $table->date('end_investment_date');
            $table->decimal('referral_fee_1', 15, 2);
            $table->decimal('referral_fee_2', 15, 2);
            $table->json('attorney')->nullable();
            $table->decimal('buying_fee', 10, 2);
            $table->decimal('selling_fee', 10, 2);
            $table->boolean('include_client_attachment');
            $table->boolean('include_attorney_attachment');
            $table->json('attachments')->nullable();
            $table->timestamps();
            $table->softDeletes();
            $table->string('created_by')->nullable();
            $table->string('updated_by')->nullable();
            $table->string('deleted_by')->nullable();

            $table->foreign('client_id')->references('id')->on('clients')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('agreement');
    }
};
