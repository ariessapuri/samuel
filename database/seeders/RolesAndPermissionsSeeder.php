<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // create permission
        Permission::create(['name' => 'listAgreement']);
        Permission::create(['name' => 'addAgreement']);
        Permission::create(['name' => 'editAgreement']);
        Permission::create(['name' => 'printAgreement']);
        Permission::create(['name' => 'deleteAgreement']);

        Permission::create(['name' => 'listClient']);
        Permission::create(['name' => 'addClient']);
        Permission::create(['name' => 'editClient']);
        Permission::create(['name' => 'deleteClient']);

        Permission::create(['name' => 'listUser']);
        Permission::create(['name' => 'addUser']);
        Permission::create(['name' => 'editUser']);
        Permission::create(['name' => 'deleteUser']);

        Permission::create(['name' => 'rolePage']);
        Permission::create(['name' => 'permissionPage']);

        Permission::create(['name' => 'GeneralSettingPage']);
        Permission::create(['name' => 'attorneyPage']);



        // create role
        $superadminRole = Role::create(['name' => 'superadmin']);
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        // assign permission to role
        // super admin role
        $superadminRole->givePermissionTo('listAgreement');
        $superadminRole->givePermissionTo('addAgreement');
        $superadminRole->givePermissionTo('editAgreement');
        $superadminRole->givePermissionTo('printAgreement');
        $superadminRole->givePermissionTo('deleteAgreement');

        $superadminRole->givePermissionTo('listClient');
        $superadminRole->givePermissionTo('addClient');
        $superadminRole->givePermissionTo('editClient');
        $superadminRole->givePermissionTo('deleteClient');

        $superadminRole->givePermissionTo('listUser');
        $superadminRole->givePermissionTo('addUser');
        $superadminRole->givePermissionTo('editUser');
        $superadminRole->givePermissionTo('deleteUser');

        $superadminRole->givePermissionTo('rolePage');
        $superadminRole->givePermissionTo('permissionPage');

        $superadminRole->givePermissionTo('GeneralSettingPage');
        $superadminRole->givePermissionTo('attorneyPage');


        // admin role
        $adminRole->givePermissionTo('listAgreement');
        $adminRole->givePermissionTo('addAgreement');
        $adminRole->givePermissionTo('editAgreement');
        $adminRole->givePermissionTo('printAgreement');
        $adminRole->givePermissionTo('deleteAgreement');

        $adminRole->givePermissionTo('listClient');
        $adminRole->givePermissionTo('addClient');
        $adminRole->givePermissionTo('editClient');
        $adminRole->givePermissionTo('deleteClient');

        $adminRole->givePermissionTo('listUser');
        $adminRole->givePermissionTo('addUser');
        $adminRole->givePermissionTo('editUser');
        $adminRole->givePermissionTo('deleteUser');

        $adminRole->givePermissionTo('rolePage');
        $adminRole->givePermissionTo('permissionPage');

        $adminRole->givePermissionTo('GeneralSettingPage');
        $adminRole->givePermissionTo('attorneyPage');

        // user role
        $userRole->givePermissionTo('listAgreement');
        $userRole->givePermissionTo('addAgreement');
        $userRole->givePermissionTo('editAgreement');

        $userRole->givePermissionTo('listClient');
        $userRole->givePermissionTo('addClient');
        $userRole->givePermissionTo('editClient');

        $userRole->givePermissionTo('attorneyPage');

        $userRole->givePermissionTo('addUser');
        $userRole->givePermissionTo('editUser');
    }
}
