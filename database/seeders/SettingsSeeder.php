<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $jayParsedAry = [
            "city" => "KOTA ADM. JAKARTA SELATAN",
            "district" => "SETIA BUDI",
            "postcode" => "10720",
            "province" => "DKI JAKARTA",
            "subdistrict" => "GUNTUR",
            "street_address" => "Menara Imperium, 21st Floor, Jl. HR. Rasuna Said Kav. 1, Jakarta , Indonesia"
        ];

        Setting::create([
            'company_name' => 'PT Samuel International',
            'company_logo' => '["uploads\/1714199361_samuel_logo.jpg"]',
            'company_phone' => '+62 21 2854 8100',
            'company_website_address' => 'www.e-samuel.com',
            'company_email' => 'info@mycompany.com',
            'company_fax' => '+62 21 8370 1618',
            'buying_fee' => 2.5,
            'selling_fee' => 3.0,
            'profit_target_min' => 15.0,
            'profit_target_max' => 16.0,
            'address' => json_encode($jayParsedAry),
            'updated_by' => 'SuperAdmin'
        ]);
    }
}
