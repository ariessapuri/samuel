<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Agreement extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'type',
        'doc_no',
        'date',
        'client_code',
        'investment_value',
        'profit_guarantee',
        'share_profit_investor_percentage',
        'share_profit_guarantor_percentage',
        'realized_gain',
        'share_profit_investor_value',
        'share_profit_guarantor_value',
        'total_days',
        'investment_period',
        'start_investment_date',
        'end_investment_date',
        'referral_fee_1',
        'referral_fee_2',
        'endorsee',
        'buying_fee',
        'selling_fee',
        'include_client_attachment',
        'include_attorney_attachment',
        'attachments',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class, 'client_id', 'id');
    }
}
