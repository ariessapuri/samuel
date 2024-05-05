<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attachment extends Model
{
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
        'endorsee_id',
    ];

    public function endorsee()
    {
        return $this->belongsTo(Endorsee::class);
    }

    public function agreement()
    {
        return $this->belongsTo(Agreement::class);
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
