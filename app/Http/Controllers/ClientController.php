<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $status = false;
        $user = Auth::guard('api')->user();

        if (!$user->hasPermissionTo('listClient')) {
            return response()->json(['status' => $status]);
        }

        $clients = Client::all();

        return response()->json($clients);
    }

    public function getClient()
    {

        $clients = Client::select('code', 'name')->orderBy('name', 'asc')->get();

        $clients = $clients->map(function ($client) {
            $client->code_name = $client->code . ' - ' . $client->name;
            return $client;
        });

        return response()->json($clients);
    }

    public function getClientDetail(Request $request)
    {

        $client_data = Client::where('code', $request->code)->first();

        return response()->json($client_data);
    }

    public function store(Request $request)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('addClient')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'code'                      => 'required|string|unique:clients',
            'register_date'             => 'required|date',
            'title'                     => 'required|string',
            'name'                      => 'required|string',
            'email'                     => 'required|string',
            'phone'                     => 'required|string',
            'id_type'                   => 'required|string',
            'id_number'                 => 'required|string',
            'nationality'               => 'required|string',
            'province'                  => 'required|string',
            'city'                      => 'required|string',
            'district'                  => 'required|string',
            'subdistrict'               => 'required|string',
            'postcode'                  => 'required|string',
            'address'                   => 'required|string',
            'personal_bank_name'        => 'required|string',
            'personal_beneficiary_name' => 'required|string',
            'personal_account_number'   => 'required|string',
            'personal_branch'           => 'required|string',
            'rdn_bank_name'             => 'required|string',
            'rdn_beneficiary_name'      => 'required|string',
            'rdn_account_number'        => 'required|string',
            'rdn_branch'                => 'required|string',
        ]);

        $province = $validatedData['province'];
        $city = $validatedData['city'];
        $district = $validatedData['district'];
        $subdistrict = $validatedData['subdistrict'];
        $postcode = $validatedData['postcode'];
        $address = $validatedData['address'];

        $addressData = [
            'province' => $province,
            'city' => $city,
            'district' => $district,
            'subdistrict' => $subdistrict,
            'postcode' => $postcode,
            'street_address' => $address
        ];

        if ($validatedData['title'] == 'Bapak') $gender = 'Male';
        else $gender = 'Female';

        $uploadedFiles = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('uploads/clients', $fileName);
                $uploadedFiles[] = $path;
            }
        }

        $client = new Client();
        $client->code = $validatedData['code'];
        $client->register_date = $validatedData['register_date'];
        $client->title = $validatedData['title'];
        $client->name = $validatedData['name'];
        $client->email = $validatedData['email'];
        $client->phone = $validatedData['phone'];
        $client->id_type = $validatedData['id_type'];
        $client->id_number = $validatedData['id_number'];
        $client->nationality = $validatedData['nationality'];
        $client->address = json_encode($addressData);
        $client->gender = $gender;
        $client->personal_bank_name = $validatedData['personal_bank_name'];
        $client->personal_beneficiary_name = $validatedData['personal_beneficiary_name'];
        $client->personal_account_number = $validatedData['personal_account_number'];
        $client->personal_branch = $validatedData['personal_branch'];
        $client->rdn_bank_name = $validatedData['rdn_bank_name'];
        $client->rdn_beneficiary_name = $validatedData['rdn_beneficiary_name'];
        $client->rdn_account_number = $validatedData['rdn_account_number'];
        $client->rdn_branch = $validatedData['rdn_branch'];
        $client->created_by = $logged_in_user->username;

        $client->attachments = json_encode($uploadedFiles);

        $client->save();
        $client->touch();

        return response()->json(['id' => $client->id], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('addClient')) {
            return response()->json(['status' => $status]);
        }

        $status = false;

        if (!$logged_in_user->hasPermissionTo('addClient')) {
            return response()->json(['status' => $status]);
        }


        $client = Client::findOrFail($id);

        if ($client) {
            $client->updated_at_formatted = Carbon::parse($client->updated_at)->format('d/m/Y H:i:s');
            $client->created_at_formatted = Carbon::parse($client->created_at)->format('d/m/Y H:i:s');
            $client->register_date_formatted = Carbon::parse($client->register_date)->format('Y-m-d');
        }

        $attachmentUrls = [];

        if (!empty($client->attachments)) {
            $attachments = json_decode($client->attachments, true);
            if ($attachments) {
                foreach ($attachments as $attachment) {
                    $attachmentUrls[] = asset('storage/' . $attachment);
                }
            }
        }

        return response()->json([
            'data' => $client,
            'attachment_urls' => $attachmentUrls,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function edit(Client $client)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('editClient')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'register_date'             => 'required|date',
            'title'                     => 'required|string',
            'name'                      => 'required|string',
            'email'                     => 'required|string',
            'phone'                     => 'required|string',
            'id_type'                   => 'required|string',
            'id_number'                 => 'required|string',
            'nationality'               => 'required|string',
            'province'                  => 'required|string',
            'city'                      => 'required|string',
            'district'                  => 'required|string',
            'subdistrict'               => 'required|string',
            'postcode'                  => 'required|string',
            'address'                   => 'required|string',
            'personal_bank_name'        => 'required|string',
            'personal_beneficiary_name' => 'required|string',
            'personal_account_number'   => 'required|string',
            'personal_branch'           => 'required|string',
            'rdn_bank_name'             => 'required|string',
            'rdn_beneficiary_name'      => 'required|string',
            'rdn_account_number'        => 'required|string',
            'rdn_branch'                => 'required|string',
        ]);

        $province = $validatedData['province'];
        $city = $validatedData['city'];
        $district = $validatedData['district'];
        $subdistrict = $validatedData['subdistrict'];
        $postcode = $validatedData['postcode'];
        $address = $validatedData['address'];

        $addressData = [
            'province' => $province,
            'city' => $city,
            'district' => $district,
            'subdistrict' => $subdistrict,
            'postcode' => $postcode,
            'street_address' => $address
        ];

        if ($validatedData['title'] == 'Bapak') $gender = 'Male';
        else $gender = 'Female';

        $client = Client::find($id);

        $client->register_date = $validatedData['register_date'];
        $client->title = $validatedData['title'];
        $client->name = $validatedData['name'];
        $client->email = $validatedData['email'];
        $client->phone = $validatedData['phone'];
        $client->id_type = $validatedData['id_type'];
        $client->id_number = $validatedData['id_number'];
        $client->nationality = $validatedData['nationality'];
        $client->address = json_encode($addressData);
        $client->gender = $gender;
        $client->personal_bank_name = $validatedData['personal_bank_name'];
        $client->personal_beneficiary_name = $validatedData['personal_beneficiary_name'];
        $client->personal_account_number = $validatedData['personal_account_number'];
        $client->personal_branch = $validatedData['personal_branch'];
        $client->rdn_bank_name = $validatedData['rdn_bank_name'];
        $client->rdn_beneficiary_name = $validatedData['rdn_beneficiary_name'];
        $client->rdn_account_number = $validatedData['rdn_account_number'];
        $client->rdn_branch = $validatedData['rdn_branch'];
        $client->updated_by = $logged_in_user->username;

        $client->save();
        $client->touch();

        return response()->json(['message' => 'Client updated successfully'], 200);
    }

    public function upload_attachments(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('editClient')) {
            return response()->json(['status' => $status]);
        }

        $client = Client::findOrFail($id);
        $the_attachment = array();
        if (!empty($client->attachments)) {
            $the_attachment = json_decode($client->attachments);
        }

        if ($request->hasFile('file')) {
            $uploadedFiles = [];

            foreach ($request->file('file') as $file) {
                $newFileName = time() . '_' . $file->getClientOriginalName();

                $path = $file->storeAs('uploads/clients', $newFileName);

                //$uploadedFiles[] = $newFileName;
                array_push($the_attachment, $path);
            }

            $client->attachments = json_encode($the_attachment);
            $client->save();

            return response()->json([
                'message' => 'File berhasil di-upload',
                'files' => $newFileName
            ], 200);
        } else {
            return response()->json([
                'error' => 'Tidak ada file yang di-upload'
            ], 400);
        }
    }

    public function remove_attachment(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('editClient')) {
            return response()->json(['status' => $status]);
        }

        $client = Client::findOrFail($id);

        $current_attachments = json_decode($client->attachments);
        if ($request->has('url')) {
            $url = $request->input('url');
            $fileName = basename($url);
        } else if ($request->has('fileName')) {
            $fileName = $request->input('fileName');
        }

        if (!empty($fileName)) {
            $path = 'uploads/clients/' . $fileName;
            $current_attachments = array_filter($current_attachments, function ($attachment) use ($path) {
                return $attachment !== $path;
            });

            $current_attachments = json_encode($current_attachments);

            $client->attachments = $current_attachments;
            $client->save();

            Storage::delete('uploads/clients/' . $fileName);

            return response()->json(['success' => true, 'message' => 'File removed successfully']);
        }

        return response()->json(['success' => false, 'message' => 'Failed to removed file']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $logged_in_user = Auth::guard('api')->user();
        $status = false;

        if (!$logged_in_user->hasPermissionTo('deleteClient')) {
            return response()->json(['status' => $status]);
        }

        $item = Client::findOrFail($id);

        $item->deleted_by = $logged_in_user->username;
        $item->save();

        $item->delete();

        return response()->json(['message' => 'Client deleted successfully'], 200);
    }
}
