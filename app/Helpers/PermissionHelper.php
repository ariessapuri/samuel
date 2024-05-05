<?php

use Illuminate\Support\Facades\Auth;
// use Exception;

function checkPermission($permission_name)
{
    /*try {
        $user = Auth::guard('api')->user();

        if ($user === null) {
            throw new Exception('User is not authenticated.');
        }

        if ($user->hasPermissionTo($permission_name)) {
            return true;
        } else {
            return response()->json(['message' => 'Permission denied'], 403);
        }

    } catch (Exception $e) {
        return response()->json(['error' => $e->getMessage(), 'status' => 'no_permission'], 500);
    }*/
}
