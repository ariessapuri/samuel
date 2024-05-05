<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attorney extends Model
{
    use HasFactory;

    protected $table = 'attorneys';

    protected $fillable = [
        'title', 'name', 'position', 'gender', 'phone', 'email', 'id_type', 'id_number', 'nationality', 'address',
        'attachments', 'updated_by'
    ];

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }
}
