<?php

namespace App\Http\Controllers;

use App\Models\Attorney;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

class AttorneyController extends Controller
{
    public function edit(Attorney $attorney)
    {
        $attorney = Attorney::get()->first();
        if ($attorney) {
            $attorney->updated_at_formatted = Carbon::parse($attorney->updated_at)->format('d/m/Y H:i:s');
        }
        $attachmentUrls = [];

        $attachments = json_decode($attorney->attachments, true);
        if ($attachments) {
            foreach ($attachments as $attachment) {
                $attachmentUrls[] = asset('storage/' . $attachment);
            }
        }

        return response()->json([
            'data' => $attorney,
            'attachment_urls' => $attachmentUrls,
        ]);
    }

    public function update(Request $request)
    {
        $user = Auth::guard('api')->user();
        $status = false;

        if (!$user->hasPermissionTo('attorneyPage')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'title' => 'required',
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'id_type' => 'required',
            'id_number' => 'required',
            'nationality' => 'required',
        ]);

        $uploadedFiles = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('uploads', $fileName);
                $uploadedFiles[] = $path;
            }
        }

        $attorney = Attorney::find(1);
        $attorney->title = $request->input('title');
        $attorney->name = $request->input('name');
        $attorney->position = $request->input('position');
        $attorney->email = $request->input('email');
        $attorney->phone = $request->input('phone');
        $attorney->id_type = $request->input('id_type');
        $attorney->id_number = $request->input('id_number');
        $attorney->nationality = $request->input('nationality');
        $attorney->updated_by = $user->username;

        $province = $request->input('province');
        $city = $request->input('city');
        $district = $request->input('district');
        $subdistrict = $request->input('subdistrict');
        $address = $request->input('address');
        $postcode = $request->input('postcode');

        $addressData = [
            'province' => $province,
            'city' => $city,
            'district' => $district,
            'subdistrict' => $subdistrict,
            'postcode' => $postcode,
            'street_address' => $address
        ];

        $attorney->address = json_encode($addressData);

        if (empty($uploadedFiles)) {
            $previousAttachments = json_decode($attorney->attachments, true);
            if (!empty($previousAttachments)) {
                foreach ($previousAttachments as $previousFile) {
                    Storage::delete($previousFile);
                }
            }
            $attorney->attachments = null;
        } else {
            $attorney->attachments = json_encode($uploadedFiles);
        }

        $attorney->save();
        $attorney->touch();

        return response()->json(['message' => 'Attorney updated successfully'], 200);
    }
}
