<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Setting extends Model
{
    use HasFactory;

    protected $fillable = [
        'company_name', 'company_logo', 'company_phone', 'company_website_address', 'company_email', 'company_fax', 'buying_fee', 'selling_fee',
        'profit_target_min', 'profit_target_max',
        'address', 'updated_by'
    ];

    protected $table = 'general';
}
