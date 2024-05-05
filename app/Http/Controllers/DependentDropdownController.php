<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DependentDropdownController extends Controller
{
    public function provinces()
    {
        return \Indonesia::allProvinces();
    }

    public function cities(Request $request)
    {
        return \Indonesia::findProvince($request->id, ['cities'])->cities->pluck('name', 'id');
    }

    public function districts(Request $request)
    {
        return \Indonesia::findCity($request->id, ['districts'])->districts->pluck('name', 'id');
    }

    public function villages(Request $request)
    {
        return \Indonesia::findDistrict($request->id, ['villages'])->villages->pluck('name', 'id');
    }

    public function postcode(Request $request)
    {

        try {
            $meta = DB::table('indonesia_villages')
                ->select('meta')
                ->where('id', $request->id)
                ->first();

            if ($meta) {
                $metaArray = json_decode($meta->meta, true);

                // Mendapatkan nilai "pos" dari array
                $pos = $metaArray['pos'] ?? null;

                return response()->json(['pos' => $pos], 200);
            } else {
                return response()->json(['error' => 'Data not found'], 404);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
