<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Attorney;

class AttorneyTableSeeder extends Seeder
{
    public function run()
    {
        $attorneyData = [
            'title' => 'Bapak',
            'name' => 'John Doe',
            'position' => 'Direktur',
            'gender' => 'Male',
            'phone' => '123456789',
            'email' => 'example@example.com',
            'id_type' => 'Passport',
            'id_number' => 'AB123456',
            'nationality' => 'WNI',
            'address' => json_encode([
                'province' => 'DKI Jakarta',
                'city' => 'Jakarta pusat',
                'district' => 'Sawah Besar',
                'subdistrict' => 'Gunung Sahari Utara',
                'postcode' => '10720',
                'street_address' => 'Jalan Industri Raya'
            ]),
            'attachments' => '["uploads\/1714199361_samuel_logo.jpg"]',
            'updated_by' => 'SuperAdmin'
        ];

        $attorney = Attorney::create($attorneyData);
    }
}
