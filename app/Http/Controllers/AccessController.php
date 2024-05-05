<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Support\Facades\Auth;

class AccessController extends Controller
{
    public function getAllRoles()
    {
        $roles = Role::all();
        return response()->json($roles);
    }

    public function getAllPermissions()
    {
        $permissions = Permission::all();
        return response()->json($permissions);
    }

    public function allRoles()
    {
        $roles = Role::with('permissions')->get();
        return response()->json($roles);
    }

    public function allPermissions()
    {
        $permissions = Permission::all();
        return response()->json($permissions);
    }

    public function addRole(Request $request)
    {
        $user = Auth::guard('api')->user();
        $status = false;

        if (!$user->hasPermissionTo('rolePage')) {
            return response()->json(['status' => $status]);
        }

        try {
            $newRoleName = $request->input('new_role');

            $role = Role::create(['name' => $newRoleName]);

            return response()->json([
                'success' => true,
                'message' => 'Role added successfully',
                'role' => $role
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to add role'
            ], 500);
        }
    }

    public function deleteRole($id)
    {
        $user = Auth::guard('api')->user();
        $status = false;

        if (!$user->hasPermissionTo('rolePage')) {
            return response()->json(['status' => $status]);
        }

        try {
            $role = Role::findOrFail($id);
            $role->delete();

            return response()->json([
                'success' => true,
                'message' => 'Role deleted successfully',
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Failed to delete role'
            ], 500);
        }
    }

    public function updateRolePermissions(Request $request, $roleId)
    {
        $user = Auth::guard('api')->user();
        $status = false;

        if (!$user->hasPermissionTo('permissionPage')) {
            return response()->json(['status' => $status]);
        }

        $role = Role::findOrFail($roleId);
        $role->syncPermissions($request->permissions);
        return response()->json([
            'success' => true,
            'message' => 'Role permissions updated successfully',
        ], 200);
    }

    function checkSinglePermission($permission_name)
    {
        $status = false;
        $user = Auth::guard('api')->user();

        if ($user === null) {
            $status = false;
        }

        if ($user->hasPermissionTo($permission_name)) {
            $status = true;
        } else {
            $status = false;
        }

        return response()->json(['status' => $status], 200);
    }

    public function getAllPermissionsForCurrentUser()
    {
        $user = Auth::guard('api')->user();

        $permissions = $user->getAllPermissions();

        return response()->json(['data' => $permissions], 200);
    }
}
