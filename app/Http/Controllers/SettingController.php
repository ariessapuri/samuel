<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

class SettingController extends Controller
{

    public function edit(Setting $setting)
    {
        $setting = Setting::get()->first();

        if ($setting) {
            $setting->updated_at_formatted = Carbon::parse($setting->updated_at)->format('d/m/Y H:i:s');
        }

        $attachmentUrls = [];

        $attachments = json_decode($setting->attachments, true);
        if ($attachments) {
            foreach ($attachments as $attachment) {
                $attachmentUrls[] = asset('storage/' . $attachment);
            }
        }

        return response()->json([
            'data' => $setting,
            'attachment_urls' => $attachmentUrls,
        ]);
    }

    public function update(Request $request, Setting $setting)
    {
        $user = Auth::guard('api')->user();
        $status = false;

        if (!$user->hasPermissionTo('GeneralSettingPage')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'company_name' => 'required',
            'company_email' => 'required|email',
            'company_phone' => 'required',
            'company_website_address' => 'required',
            'company_fax' => 'required',
            'buying_fee' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],
            'selling_fee' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],
            'profit_target_min' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],
            'profit_target_max' => ['required', 'regex:/^\d+(\.\d{1,2})?$/'],
        ]);

        $uploadedFiles = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('uploads', $fileName);
                $uploadedFiles[] = $path;
            }
        }

        $setting = Setting::find(1);

        $current_logo = json_decode($setting->company_logo);
        $setting->company_name = $request->input('company_name');
        $setting->company_email = $request->input('company_email');
        $setting->company_phone = $request->input('company_phone');
        $setting->company_website_address = $request->input('company_website_address');
        $setting->company_fax = $request->input('company_fax');
        $setting->buying_fee = $request->input('buying_fee');
        $setting->selling_fee = $request->input('selling_fee');
        $setting->profit_target_min = $request->input('profit_target_min');
        $setting->profit_target_max = $request->input('profit_target_max');
        $setting->updated_by = $user->username;

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

        $setting->address = json_encode($addressData);

        if (empty($uploadedFiles)) {
            $previousAttachments = json_decode($setting->attachments, true);
            if (!empty($previousAttachments)) {
                foreach ($previousAttachments as $previousFile) {
                    Storage::delete($previousFile);
                }
            }
            $setting->company_logo = json_encode($current_logo);
        } else {
            $setting->company_logo = json_encode($uploadedFiles);
        }

        $setting->save();
        $setting->touch();

        return response()->json(['message' => 'Setting updated successfully'], 200);
    }
}
