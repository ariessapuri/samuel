<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

class UserController extends Controller
{
    public function index()
    {
        $status = false;
        $logged_in_user = Auth::guard('api')->user();

        if (!$logged_in_user->hasPermissionTo('listUser')) {
            return response()->json(['status' => $status]);
        }

        if ($logged_in_user->hasRole('SuperAdmin')) {
            $users = User::with('roles')->get()->map(function ($user) {
                $user['access'] = $user->roles->pluck('name')->unique()->implode(',');
                unset($user['roles']);
                return $user;
            });
        } else {
            $users = User::with('roles')
                ->whereDoesntHave('roles', function ($query) {
                    $query->where('name', 'SuperAdmin');
                })
                ->get()
                ->map(function ($user) {
                    $user['access'] = $user->roles->pluck('name')->unique()->implode(',');
                    unset($user['roles']);
                    return $user;
                });
        }

        return response()->json($users);
    }

    public function show($id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('addUser')) {
            return response()->json(['status' => $status]);
        }

        $user = User::findOrFail($id);
        if ($user) {
            $user->updated_at_formatted = Carbon::parse($user->updated_at)->format('d/m/Y H:i:s');
            $user->created_at_formatted = Carbon::parse($user->created_at)->format('d/m/Y H:i:s');
        }
        $roles = $user->getRoleNames();
        $user->role = $roles;
        return response()->json($user);
    }

    public function store(Request $request)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('addUser')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'username' => 'required|string|max:255|unique:users',
            'role' => 'required|string|',
            'position' => 'nullable|string|max:255',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required'
        ]);

        $user = new User();
        $user->name = $validatedData['name'];
        $user->email = $validatedData['email'];
        $user->username = $validatedData['username'];
        $user->position = $validatedData['position'];
        $user->password = Hash::make($validatedData['password']);
        $user->created_by = $logged_in_user->username;
        $user->save();

        $user->assignRole($validatedData['role']);

        return response()->json(['user_id' => $user->id], 201);
    }

    public function update(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('editUser')) {
            return response()->json(['status' => $status]);
        }

        $user = User::findOrFail($id);

        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users,email,' . $id,
            'role' => 'required|string',
            'position' => 'nullable|string|max:255',
        ]);

        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'position' => $request->position,
            'updated_by' => $logged_in_user->username,
        ]);

        $user->syncRoles([]);

        $user->assignRole($request->role);

        return response()->json(['message' => 'User updated successfully'], 200);
    }

    public function updatePassword(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('editUser')) {
            return response()->json(['status' => $status]);
        }

        $user = User::findOrFail($id);

        $validatedData = $request->validate([
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required'
        ]);

        $user->password = Hash::make($validatedData['password']);
        $user->updated_by = $logged_in_user->username;

        $user->save();

        return response()->json(['message' => 'User password updated successfully'], 200);
    }

    public function profile(Request $request)
    {
        $user = Auth::guard('api')->user();

        if ($user) {
            return response()->json($user);
        } else {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }
    }

    public function UpdateProfile(Request $request)
    {
        $request->validate([
            'id' => 'required',
            'name' => 'required',
            'position' => 'nullable|string|max:255',
        ]);

        $user = User::findOrFail($request->id);

        if ($user) {
            $user->name = $request->name;
            $user->position = $request->position;
            $user->updated_by = $user->username;

            $user->save();

            return response()->json(['message' => 'User updated successfully'], 200);
        } else {
            return response()->json(['error' => 'Unauthenticated'], 401);
        }
    }

    public function updatePasswordProfile(Request $request)
    {
        $validatedData = $request->validate([
            'id' => 'required',
            'old_password' => 'required',
            'password' => 'required|string|min:8|confirmed',
            'password_confirmation' => 'required'
        ]);

        $user = User::findOrFail($request->id);

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['message' => 'Old password is incorrect'], 400);
        }

        if ($request->password !== $request->password_confirmation) {
            return response()->json(['message' => 'Password confirmation does not match'], 400);
        }

        $user->password = Hash::make($request->password);
        $user->updated_by = $user->username;
        $user->save();

        return response()->json(['message' => 'Password updated successfully'], 200);
    }

    public function destroy($id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('deleteUser')) {
            return response()->json(['status' => $status]);
        }

        $user = User::findOrFail($id);
        $user->deleted_by = $logged_in_user->username;
        $user->save();

        $user->delete();

        return response()->json(null, 204);
    }
}
