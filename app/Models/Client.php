<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Client extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        'code',
        'register_date',
        'title',
        'name',
        'email',
        'phone',
        'id_type',
        'id_number',
        'nationality',
        'address',
        'gender',
        'personal_bank_name',
        'personal_beneficiary_name',
        'personal_account_number',
        'personal_branch',
        'rdn_bank_name',
        'rdn_beneficiary_name',
        'rdn_account_number',
        'rdn_branch',
        'attachments',
        'created_by',
        'updated_by',
        'deleted_by'
    ];

    protected $dates = ['register_date', 'deleted_at'];

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
}
