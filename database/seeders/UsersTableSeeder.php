<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Spatie\Permission\Models\Role;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $superAdminRole = Role::firstOrCreate(['name' => 'superadmin']);

        $user = User::create([
            'name' => 'Aries',
            'username' => 'SuperAdmin',
            'position' => 'superadmin',
            'email' => 'superadmin@example.com',
            'password' => bcrypt('thepassword'),
            'created_by' => 'SuperAdmin',
            'updated_by' => 'SuperAdmin'
        ]);

        $user->assignRole('superadmin');

        $user = User::create([
            'name' => 'admin',
            'username' => 'admin',
            'position' => 'admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('thepassword'),
            'created_by' => 'SuperAdmin',
            'updated_by' => 'SuperAdmin'
        ]);

        $user->assignRole('admin');

        $user = User::create([
            'name' => 'user',
            'username' => 'user',
            'position' => 'user',
            'email' => 'user@example.com',
            'password' => bcrypt('thepassword'),
            'created_by' => 'SuperAdmin',
            'updated_by' => 'SuperAdmin'
        ]);

        $user->assignRole('user');
    }
}
