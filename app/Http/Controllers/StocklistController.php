<?php

namespace App\Http\Controllers;

use App\Models\Stocklist;
use Illuminate\Http\Request;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class StocklistController extends Controller
{
    public function index()
    {
        $stocklist = Stocklist::get();

        return $stocklist;
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'code' => 'required|string|max:10|unique:stock_list,code',
            'name' => 'required|string|max:255'
        ]);

        $stocklist = new Stocklist();
        $stocklist->code = strtoupper($validatedData['code']);
        $stocklist->name = strtoupper($validatedData['name']);
        $stocklist->save();

        return response()->json(['id' => $stocklist->id], 201);
    }

    public function edit(Request $request, Stocklist $stocklist)
    {
        $stocklist = Stocklist::findOrFail($request->id);
        return response()->json($stocklist);
    }

    public function update(Request $request, Stocklist $stocklist)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255'
        ]);

        $stocklist = Stocklist::find($request->id);
        $stocklist->name = strtoupper($validatedData['name']);

        $stocklist->save();

        return response()->json(['message' => 'Stocklist updated successfully'], 200);
    }

    public function uploadBulk(Request $request)
    {
        $request->validate([
            'file' => 'required|mimes:xlsx,csv|max:2048',
        ]);

        $file = $request->file('file');

        $extension = $file->getClientOriginalExtension();

        if (!in_array($extension, ['xlsx', 'csv'])) {
            return response()->json(['message' => 'Only (XLSX) or CSV file allowed'], 422);
        }

        $data = Excel::toArray([], $file);
        $rows = array_slice($data[0], 1);
        $rowCount = 0;
        $errorMessages = [];

        foreach ($rows as $row) {
            $rowCount++;

            if (empty($row[0])) {
                $errorMessages[] = "Code is required on row $rowCount";
                continue;
            }

            $codeValue = $row[0];
            if (Stocklist::where('code', $codeValue)->exists()) {
                $errorMessages[] = "Duplicate code value '$codeValue' found on row $rowCount";
            }

            if (empty($row[1])) {
                $errorMessages[] = "Name is required on row $rowCount";
            }
        }

        if (!empty($errorMessages)) {
            return response()->json(['message' => implode("; ", $errorMessages)], 422);
        }

        foreach ($rows as $row) {
            Stocklist::create([
                'code' => $row[0],
                'name' => $row[1],
            ]);
        }

        return response()->json(['message' => 'File uploaded, ' . count($rows) . ' row created'], 200);
    }

    public function destroy(Stocklist $stocklist)
    {
        //
    }
}
