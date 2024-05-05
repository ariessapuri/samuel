<?php

namespace App\Http\Controllers;

use App\Models\Agreement;
use App\Models\Attorney;
use App\Models\Client;
use App\Models\Setting;
use Illuminate\Http\Request;
use Dompdf\Dompdf;
use Dompdf\Options;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\View;
use DateTime;
use Exception;
use App\Helpers\NumberToWords;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Carbon;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class AgreementController extends Controller
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

        if (!$user->hasPermissionTo('listAgreement')) {
            return response()->json(['status' => $status]);
        }

        $agreements = Agreement::with('client')->orderBy('id', 'desc')->get();
        return response()->json($agreements);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $logged_in_user = Auth::guard('api')->user();

        $status = false;

        if (!$logged_in_user->hasPermissionTo('addAgreement')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'type'                              => 'required|string',
            'date'                              => 'required|date',
            'client_code'                       => 'required|string',
            'investment_value'                  => 'required|string',
            'profit_guarantee'                  => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'share_profit_investor_percentage'  => 'required|numeric',
            'share_profit_guarantor_percentage' => 'required|numeric',
            'realized_gain'                     => 'required|string',
            'share_profit_investor_value'       => 'required|string',
            'share_profit_guarantor_value'      => 'required|string',
            'total_days'                        => 'required|integer',
            'investment_period'                 => 'required|integer',
            'start_investment_date'             => 'required|date',
            'end_investment_date'               => 'required|date',
            'attorney_id'                       => 'required|integer',
            'buying_fee'                        => 'required|numeric',
            'selling_fee'                       => 'required|numeric',
            'referral_fee_1'                    => 'nullable|numeric',
            'referral_fee_2'                    => 'nullable|numeric',
            'include_client_attachment'         => 'required|numeric|in:0,1',
            'include_attorney_attachment'       => 'required|numeric|in:0,1'
        ]);

        $attorney_id = $validatedData['attorney_id'];
        $attorneyData = Attorney::find($attorney_id);
        $attorney_json = $attorneyData->toJson();

        $lastAgreement = Agreement::orderBy('doc_no', 'desc')->first();
        $lastDocNo = $lastAgreement ? $lastAgreement->doc_no : 0;
        $lastDocNo = intval($lastDocNo);
        $newDocNo = $lastDocNo + 1;
        $formattedDocNo = str_pad($newDocNo, 3, '0', STR_PAD_LEFT);
        $month = strtoupper(date('M'));
        $year = date('y');
        $DocNo = "{$formattedDocNo}/INV/{$month}/{$year}";
        $client = Client::where('code', $validatedData['client_code'])->first();

        $client_id = $client ? $client->id : null;

        $uploadedFiles = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('uploads/agreements', $fileName);
                $uploadedFiles[] = $path;
            }
        }

        $agreement = new Agreement();
        $agreement->type = $validatedData['type'];
        $agreement->doc_no = $DocNo;
        $agreement->date = $validatedData['date'];
        $agreement->client_id = $client_id;
        $agreement->investment_value = $this->remove_comma_value($validatedData['investment_value']);
        $agreement->profit_guarantee = $validatedData['profit_guarantee'];
        $agreement->share_profit_investor_percentage = $validatedData['share_profit_investor_percentage'];
        $agreement->share_profit_guarantor_percentage = $validatedData['share_profit_guarantor_percentage'];
        $agreement->realized_gain = $this->remove_comma_value($validatedData['realized_gain']);
        $agreement->share_profit_investor_value = $this->remove_comma_value($validatedData['share_profit_investor_value']);
        $agreement->share_profit_guarantor_value = $this->remove_comma_value($validatedData['share_profit_guarantor_value']);
        $agreement->total_days = $validatedData['total_days'];
        $agreement->investment_period = $validatedData['investment_period'];
        $agreement->start_investment_date = $validatedData['start_investment_date'];
        $agreement->end_investment_date = $validatedData['end_investment_date'];
        $agreement->referral_fee_1 = $validatedData['referral_fee_1'];
        $agreement->referral_fee_2 = $validatedData['referral_fee_2'];
        $agreement->attorney = $attorney_json;
        $agreement->buying_fee = $validatedData['buying_fee'];
        $agreement->selling_fee = $validatedData['selling_fee'];
        $agreement->include_client_attachment = $validatedData['include_client_attachment'];
        $agreement->include_attorney_attachment = $validatedData['include_attorney_attachment'];
        $agreement->created_by = $logged_in_user->username;

        $agreement->attachments = json_encode($uploadedFiles);

        $agreement->save();
        $agreement->touch();

        return response()->json(['id' => $agreement->id], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Agreement  $agreement
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $status = false;
        $user = Auth::guard('api')->user();

        if (!$user->hasPermissionTo('addAgreement')) {
            return response()->json(['status' => $status]);
        }

        $agreement = Agreement::with('client')->where('id', $id)->first();

        if ($agreement) {
            $agreement->updated_at_formatted = Carbon::parse($agreement->updated_at)->format('d/m/Y H:i:s');
            $agreement->created_at_formatted = Carbon::parse($agreement->created_at)->format('d/m/Y H:i:s');

            $agreement->investment_value = number_format($agreement->investment_value);
            $agreement->realized_gain = number_format($agreement->realized_gain);
            $agreement->share_profit_investor_value = number_format($agreement->share_profit_investor_value);
            $agreement->share_profit_guarantor_value = number_format($agreement->share_profit_guarantor_value);
        }

        $attachmentUrls = [];

        if (!empty($agreement->attachments)) {
            $attachments = json_decode($agreement->attachments, true);
            if ($attachments) {
                foreach ($attachments as $attachment) {
                    $attachmentUrls[] = asset('storage/' . $attachment);
                }
            }
        }

        return response()->json([
            'data' => $agreement,
            'attachment_urls' => $attachmentUrls,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Agreement  $agreement
     * @return \Illuminate\Http\Response
     */
    public function edit(Agreement $agreement)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Agreement  $agreement
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();
        $status = false;

        if (!$logged_in_user->hasPermissionTo('editAgreement')) {
            return response()->json(['status' => $status]);
        }

        $validatedData = $request->validate([
            'type'                              => 'required|string',
            'date'                              => 'required|date',
            'client_code'                       => 'required|string',
            'investment_value'                  => 'required|string',
            'profit_guarantee'                  => 'required|regex:/^\d+(\.\d{1,2})?$/',
            'share_profit_investor_percentage'  => 'required|numeric',
            'share_profit_guarantor_percentage' => 'required|numeric',
            'realized_gain'                     => 'required|string',
            'share_profit_investor_value'       => 'required|string',
            'share_profit_guarantor_value'      => 'required|string',
            'total_days'                        => 'required|integer',
            'investment_period'                 => 'required|integer',
            'start_investment_date'             => 'required|date',
            'end_investment_date'               => 'required|date',
            'attorney_id'                       => 'required|integer',
            'buying_fee'                        => 'required|numeric',
            'selling_fee'                       => 'required|numeric',
            'referral_fee_1'                    => 'nullable|numeric',
            'referral_fee_2'                    => 'nullable|numeric',
            'include_client_attachment'         => 'required|numeric|in:0,1',
            'include_attorney_attachment'       => 'required|numeric|in:0,1'
        ]);

        $attorney_id = $validatedData['attorney_id'];
        $attorneyData = Attorney::find($attorney_id);
        $attorney_json = $attorneyData->toJson();

        $lastAgreement = Agreement::orderBy('doc_no', 'desc')->first();
        $lastDocNo = $lastAgreement ? $lastAgreement->doc_no : 0;
        $lastDocNo = intval($lastDocNo);
        $newDocNo = $lastDocNo + 1;
        $formattedDocNo = str_pad($newDocNo, 3, '0', STR_PAD_LEFT);
        $month = strtoupper(date('M'));
        $year = date('y');
        $DocNo = "{$formattedDocNo}/INV/{$month}/{$year}";
        $client = Client::where('code', $validatedData['client_code'])->first();

        $client_id = $client ? $client->id : null;

        $uploadedFiles = [];
        if ($request->hasFile('files')) {
            foreach ($request->file('files') as $file) {
                $fileName = time() . '_' . $file->getClientOriginalName();
                $path = $file->storeAs('uploads/agreements', $fileName);
                $uploadedFiles[] = $path;
            }
        }

        $agreement = Agreement::find($id);
        $agreement->type = $validatedData['type'];
        $agreement->doc_no = $DocNo;
        $agreement->date = $validatedData['date'];
        $agreement->client_id = $client_id;
        $agreement->investment_value = $this->remove_comma_value($validatedData['investment_value']);
        $agreement->profit_guarantee = $validatedData['profit_guarantee'];
        $agreement->share_profit_investor_percentage = $validatedData['share_profit_investor_percentage'];
        $agreement->share_profit_guarantor_percentage = $validatedData['share_profit_guarantor_percentage'];
        $agreement->realized_gain = $this->remove_comma_value($validatedData['realized_gain']);
        $agreement->share_profit_investor_value = $this->remove_comma_value($validatedData['share_profit_investor_value']);
        $agreement->share_profit_guarantor_value = $this->remove_comma_value($validatedData['share_profit_guarantor_value']);
        $agreement->total_days = $validatedData['total_days'];
        $agreement->investment_period = $validatedData['investment_period'];
        $agreement->start_investment_date = $validatedData['start_investment_date'];
        $agreement->end_investment_date = $validatedData['end_investment_date'];
        $agreement->referral_fee_1 = $validatedData['referral_fee_1'];
        $agreement->referral_fee_2 = $validatedData['referral_fee_2'];
        $agreement->attorney = $attorney_json;
        $agreement->buying_fee = $validatedData['buying_fee'];
        $agreement->selling_fee = $validatedData['selling_fee'];
        $agreement->include_client_attachment = $validatedData['include_client_attachment'];
        $agreement->include_attorney_attachment = $validatedData['include_attorney_attachment'];
        $agreement->updated_by = $logged_in_user->username;

        $agreement->attachments = json_encode($uploadedFiles);

        $agreement->save();
        $agreement->touch();

        return response()->json(['message' => 'Agreement updated successfully'], 200);
    }

    public function upload_attachments(Request $request, $id)
    {
        $logged_in_user = Auth::guard('api')->user();
        $status = false;

        if (!$logged_in_user->hasPermissionTo('editAgreement')) {
            return response()->json(['status' => $status]);
        }

        $directory = storage_path('app/uploads/agreements');
        $agreement = Agreement::findOrFail($id);

        $the_attachment = array();
        if (!empty($agreement->attachments)) {
            $the_attachment = json_decode($agreement->attachments);
        }

        if ($request->hasFile('file')) {
            $uploadedFiles = [];

            foreach ($request->file('file') as $file) {
                $newFileName = time() . '_' . $file->getClientOriginalName();

                $path = $file->storeAs('uploads/agreements', $newFileName);

                $uploadedFiles[] = $newFileName;
                array_push($the_attachment, $path);
            }

            $agreement->attachments = json_encode($the_attachment);
            $agreement->save();

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

        if (!$logged_in_user->hasPermissionTo('editAgreement')) {
            return response()->json(['status' => $status]);
        }

        $agreement = Agreement::findOrFail($id);

        $current_attachments = json_decode($agreement->attachments);
        if ($request->has('url')) {
            $url = $request->input('url');
            $fileName = basename($url);
        } else if ($request->has('fileName')) {
            $fileName = $request->input('fileName');
        }

        if (!empty($fileName)) {
            $path = 'uploads/agreements/' . $fileName;
            $current_attachments = array_filter($current_attachments, function ($attachment) use ($path) {
                return $attachment !== $path;
            });

            $current_attachments = json_encode($current_attachments);

            $agreement->attachments = $current_attachments;
            $agreement->save();

            Storage::delete('uploads/agreements/' . $fileName);

            return response()->json(['success' => true, 'message' => 'File removed successfully']);
        }

        return response()->json(['success' => false, 'message' => 'Failed to removed file']);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Agreement  $agreement
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $logged_in_user = Auth::guard('api')->user();
        $status = false;

        if (!$logged_in_user->hasPermissionTo('deleteAgreement')) {
            return response()->json(['status' => $status]);
        }

        $item = Agreement::findOrFail($id);

        $item->deleted_by = $logged_in_user->username;
        $item->save();

        $item->delete();

        return response()->json(['message' => 'Agreement deleted successfully'], 200);
    }

    public function remove_comma_value($value)
    {
        $value = preg_replace("/\D/", "", $value);
        $value = (int) $value;

        return $value;
    }

    public function generate_agreement_value(Request $request)
    {
        $nominal = $this->remove_comma_value($request->query('nominal'));
        $investor_percentage = $request->query('investor_percentage');

        $setting = Setting::find(1);
        $profit_target_min = intval($setting->profit_target_min) / 100;
        $profit_target_max = intval($setting->profit_target_max) / 100;

        $lower_bound = $nominal * $profit_target_min;
        $upper_bound = $nominal * $profit_target_max;

        if ($nominal >= 1000000000) {
            do {
                $random_value = mt_rand($lower_bound * 1000, $upper_bound * 1000) / 1000;
                $profit_sharing_investor = floor($random_value / 1000000) * 1000000;
            } while ($profit_sharing_investor < 1000000);
        } else {
            do {
                $random_value = mt_rand($lower_bound * 1000, $upper_bound * 1000) / 1000;
                $profit_sharing_investor = floor($random_value / 100000) * 100000;
            } while ($profit_sharing_investor < 100000);
        }

        $random_percent = ($profit_sharing_investor / $nominal) * 100;
        $total = ($profit_sharing_investor / $investor_percentage) * 100;
        $guarantor_percentage = 100 - $investor_percentage;

        $profit_sharing_guarantor = ($total * ($guarantor_percentage / 100));
        $profit_sharing_guarantor = floor($profit_sharing_guarantor / 1000000) * 1000000;

        $realized_gain = $profit_sharing_investor + $profit_sharing_guarantor;

        $is_decimal = fmod($investor_percentage, 1) != 0;

        $profit_guarantor_percentage = 100 - $investor_percentage;

        if ($is_decimal) {
            $profit_guarantor_percentage_formatted = number_format($profit_guarantor_percentage, 2);
        } else {
            $profit_guarantor_percentage_formatted = (int) $profit_guarantor_percentage;
        }

        $result = [
            'random_value' => $random_value,
            'random_percent' => round($random_percent, 2),
            'profit_sharing_investor' => number_format($profit_sharing_investor),
            'profit_sharing_guarantor' => number_format($profit_sharing_guarantor),
            'realized_gain' => number_format($realized_gain),
            'profit_investor_percentage' => $investor_percentage,
            'profit_guarantor_percentage' => $profit_guarantor_percentage_formatted,
            'buying_fee' => $setting->buying_fee,
            'selling_fee' => $setting->selling_fee
        ];

        return response()->json($result);
    }

    public function get_total_days(Request $request)
    {
        $start_date = $request->query('start_investment_date');
        $next_date = $request->query('end_investment_date');

        $start_date = new DateTime($start_date);
        $end_date = new DateTime($next_date);
        $days_diff = $start_date->diff($end_date)->days;

        return response()->json([
            'days_difference' => $days_diff,
        ]);
    }

    public function get_end_investment(Request $request)
    {
        $investment_period = (int) $request->query('investment_period', 1);
        $start_investment_date = $request->query('start_investment_date', date('Y-m-d'));

        try {
            $original_start_date = new DateTime($start_investment_date); // Simpan tanggal asli
            $start_date = clone $original_start_date; // Buat salinan untuk dimodifikasi
        } catch (Exception $e) {
            return response()->json(['error' => 'Invalid start date format'], 400);
        }

        $start_date->modify("+{$investment_period} month");
        $next_date = $start_date->format('Y-m-d');

        $response = Http::withoutVerifying()->get(
            'https://api-harilibur.vercel.app/api',
            ['query' => ['month' => $start_date->format('n'), 'year' => $start_date->format('Y')]]
        );

        if ($response->successful()) {
            $holidays = json_decode($response->body(), true);
            $holiday_dates = array_map(fn ($holiday) => $holiday['holiday_date'], $holidays);

            while (in_array($next_date, $holiday_dates) || $this->is_weekend($start_date)) {
                $start_date->modify($start_date->format('N') == 6 ? '+2 days' : '+1 day');
                $next_date = $start_date->format('Y-m-d'); // Perbarui `next_date`
            }

            $end_date = new DateTime($next_date);
            $days_diff = $original_start_date->diff($end_date)->days;

            return response()->json([
                'end_investment_date' => $next_date,
                'days_difference' => $days_diff,
            ]);
        } else {
            return response()->json(['error' => 'Could not fetch holidays'], 500);
        }
    }

    private function is_weekend(DateTime $date)
    {
        return in_array($date->format('N'), [6, 7]); // True jika Sabtu atau Minggu
    }

    private function convertMonthsToYearsAndMonths($totalMonths)
    {
        $years = intdiv($totalMonths, 12);
        $months = $totalMonths % 12;

        $result = '';
        if ($years > 0) {
            $result .= $years . ' tahun';
        }

        if ($months > 0) {
            if ($result !== '') {
                $result .= ' ';
            }
            $result .= $months . ' bulan';
        }

        return $result;
    }


    public function generatePDF($id)
    {
        $agreement = Agreement::with('client')->find($id);
        $attorney = json_decode($agreement->attorney);
        $setting = Setting::find(1);
        $logo = json_decode($setting->company_logo);
        $baseUrl = env('APP_URL') . '/public/storage/';
        $investment_value_no_comma = str_replace(',', '', $agreement->investment_value);

        // agreement_attachment
        $agreement_attachment = [];
        if ($agreement->attachments) {
            $attachments = json_decode($agreement->attachments);
            if (!empty($attachments)) {
                foreach ($attachments as $item) {
                    $path = $baseUrl . $item;

                    array_push($agreement_attachment, $path);
                }
            }
        }

        // attorney_attachment
        $attorney_attachment = [];
        if ($attorney->attachments) {
            $attachments = json_decode($attorney->attachments);
            if (!empty($attachments)) {
                foreach ($attachments as $item) {
                    $path = $baseUrl . $item;

                    array_push($attorney_attachment, $path);
                }
            }
        }

        // client_attachment
        $client_attachment = [];
        if ($agreement->client->attachments) {
            $attachments = json_decode($agreement->client->attachments);
            if (!empty($attachments)) {
                foreach ($attachments as $item) {
                    $path = $baseUrl . $item;

                    array_push($client_attachment, $path);
                }
            }
        }

        $logo_url = $baseUrl . $logo[0];
        $client_title_name = $agreement->client->title . ' ' . $agreement->client->name;
        $attorney_title_name = $attorney->title . ' ' . $attorney->name;
        $company_name = $setting->company_name;
        $comp_address = json_decode($setting->address);
        $company_address = $comp_address->street_address . ', ' . $comp_address->province . ' ' . $comp_address->postcode . ', INDONESIA';

        $c_address = json_decode($agreement->client->address);
        $client_address = $c_address->street_address . ', ' . $c_address->subdistrict . ', ' . $c_address->district . ', ' . $c_address->city . ', ' . $c_address->province . ' ' . $c_address->postcode;

        $a_address = json_decode($attorney->address);
        $attorney_address = $a_address->street_address . ', ' . $a_address->subdistrict . ', ' . $a_address->district . ', ' . $a_address->city . ', ' . $a_address->province . ' ' . $a_address->postcode;

        $header = View::make('pdf.header')->render();

        $dataPage1 = [
            'client_title_name' => $client_title_name,
            'attorney_title_name' => $attorney_title_name,
            'company_name' => $company_name
        ];

        $dataPage2 = [
            'client_code' => $agreement->client->code,
            'client_name' => $agreement->client->name,
            'client_title_name' => $client_title_name,
            'rdn_bank_name' => $agreement->client->rdn_bank_name,
            'rdn_account_number' => $agreement->client->rdn_account_number,
            'attorney_name' => $attorney->name,
            'attorney_title_name' => $attorney_title_name,
            'attorney_position' => $attorney->position ?? '',
            'company_name' => $company_name,
            'buying_fee' => floatval($agreement->buying_fee) . '%',
            'selling_fee' => floatval($agreement->selling_fee) . '%',
            'share_profit_investor_percentage' => floatval($agreement->share_profit_investor_percentage) . '%',
            'share_profit_guarantor_percentage' => floatval($agreement->share_profit_guarantor_percentage) . '%',
            'profit_guarantee' => round($agreement->profit_guarantee) . '%pa',
            'investment_value' => number_format(str_replace(',', '.', $agreement->investment_value), 0, ',', '.'),
            'investment_value_text' => NumberToWords::convert($investment_value_no_comma) . ' Rupiah',
            'investment_period' => $this->convertMonthsToYearsAndMonths($agreement->investment_period),
            'company_address' => $company_address,
            'company_phone' => $setting->company_phone,
            'company_website_address' => $setting->company_website_address,
            'company_fax' => $setting->company_fax,
            'logo' => $logo_url
        ];

        $dataPage3 = [
            'client_name' => $agreement->client->name,
            'attorney_name' => $attorney->name,
            'attorney_position' => $attorney->position ?? '',
            'company_name' => $company_name,
            'logo' => $logo_url
        ];

        $dataPage4 = [
            'client_name' => $agreement->client->name,
            'client_address' => $client_address,
            'attorney_name' => $attorney->name,
            'attorney_address' => $attorney_address,
            'logo' => $logo_url
        ];

        $dataPage5 = [
            'client_code' => $agreement->client->code,
            'client_id_type' => $agreement->client->id_type,
            'client_id_number' => $agreement->client->id_number,
            'client_name' => $agreement->client->name,
            'attorney_name' => $attorney->name,
            'attorney_id_type' => $attorney->id_type,
            'attorney_id_number' => $attorney->id_number,
            'client_address' => $client_address,
            'attorney_address' => $attorney_address,
            'company_name' => $company_name,
            'company_address' => $company_address,
            'company_phone' => $setting->company_phone,
            'company_website_address' => $setting->company_website_address,
            'company_fax' => $setting->company_fax,
            'logo' => $logo_url
        ];

        $dataPage6 = [
            'start_investment_date' => $agreement->start_investment_date,
            'end_investment_date' => $agreement->end_investment_date,
            'total_days' => $agreement->total_days,
            'share_profit_investor_percentage' => floatval($agreement->share_profit_investor_percentage) . '%',
            'share_profit_guarantor_percentage' => floatval($agreement->share_profit_guarantor_percentage) . '%',
            'profit_guarantee' => round($agreement->profit_guarantee) . '%',
            'investment_value' => number_format(str_replace(',', '.', $agreement->investment_value), 0, ',', '.'),
            'share_profit_guarantor_value' => number_format(str_replace(',', '.', $agreement->share_profit_guarantor_value), 0, ',', '.'),
            'share_profit_investor_value' => number_format(str_replace(',', '.', $agreement->share_profit_investor_value), 0, ',', '.'),
            'realized_gain' => number_format(str_replace(',', '.', $agreement->realized_gain), 0, ',', '.'),
            'investment_period' => $this->convertMonthsToYearsAndMonths($agreement->investment_period),
            'logo' => $logo_url
        ];

        $dataPage7 = [
            'client_code' => $agreement->client->code,
            'client_id_number' => $agreement->client->id_number,
            'client_name' => $agreement->client->name,
            'client_address' => $client_address,
            'attorney_name' => $attorney->name,
            'logo' => $logo_url
        ];

        $dataPage8 = [
            'client_code' => $agreement->client->code,
            'client_name' => $agreement->client->name,
            'client_personal_bank_name' => $agreement->personal_bank_name,
            'client_personal_account_number' => $agreement->personal_account_number,
            'logo' => $logo_url
        ];

        $dataPage9 = [
            'client_name' => 'test',
            'logo' => $logo_url
        ];

        $page1 = View::make('pdf.page_document_full_discretionary_investment_1', $dataPage1)->render();
        $page2 = View::make('pdf.page_draft_agreement_2', $dataPage2)->render();
        $page3 = View::make('pdf.page_stocklist_attachment_3', $dataPage3)->render();
        $page4 = View::make('pdf.page_poa_transaction_4', $dataPage4)->render();
        $page5 = View::make('pdf.page_poa_funds_transfer_5', $dataPage5)->render();
        $page6 = View::make('pdf.page_investment_report_6', $dataPage6)->render();
        $page7 = View::make('pdf.page_letter_of_using_bank_account_7', $dataPage7)->render();
        $page8 = View::make('pdf.page_withdrawn_funds_instruction_8', $dataPage8)->render();
        //$page9 = View::make('pdf.page_ao_letter_transmigration_9', $dataPage9)->render();

        $footer = View::make('pdf.header')->render();

        $html = $header . $page1 .  $page2 . $page3 . $page4 . $page5 . $page6 . $page7 . $page8;

        if (!empty($agreement_attachment)) {
            $agreement_attachment_var = [
                'agreement_attachment' => $agreement_attachment
            ];

            $agreement_attachment_page = View::make('pdf.agreement_attachment_page', $agreement_attachment_var)->render();

            $html .=  $agreement_attachment_page;
        }

        if (!empty($attorney_attachment)) {
            $attorney_attachment_var = [
                'attorney_attachment' => $attorney_attachment
            ];

            $attorney_attachment_page = View::make('pdf.attorney_attachment_page', $attorney_attachment_var)->render();

            $html .=  $attorney_attachment_page;
        }

        if (!empty($client_attachment)) {
            $client_attachment_var = [
                'client_attachment' => $client_attachment
            ];

            $client_attachment_page = View::make('pdf.client_attachment_page', $client_attachment_var)->render();

            $html .=  $client_attachment_page;
        }

        $html .=  $footer;

        $options = new Options();
        $options->set('isHtml5ParserEnabled', true);
        $options->set('isPhpEnabled', true);

        $options->set('isRemoteEnabled', true);

        $dompdf = new Dompdf();

        $dompdf->loadHtml($html);
        $dompdf->setPaper('a4');
        $dompdf->setOptions($options);
        $dompdf->render();

        return $dompdf->stream($agreement->doc_no . '.pdf', ['Attachment' => 0]);
    }
}
