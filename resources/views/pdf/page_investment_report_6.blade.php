<div class="content page_investment_report rotate-90">
	<div class="content-wrapper">
		<div class="top">
			<div class="logo">
				<img src="{{ $logo }}">
			</div>
		</div>
		<div class="title center">
			<h3>CONTOH PERHITUNGAN KEUNTUNGAN (PROTECTED INVESTMENT)<br>Untuk Periode 1 Tahun</h3>
			<p>Tanggal: {{ date('d F Y', strtotime($start_investment_date)) }}</p>
		</div>
		<style>
		.page_investment_report table td {
			border:1px solid #333;
		}
		.page_investment_report table {
			border-collapse: collapse;
		}
		.page_investment_report td {
			padding:10px;
		}
		.page_investment_report .head {
			text-align:center;
		}
		.page_investment_report .foot {
			padding-top:20px;
		}
		.page_investment_report .foot td {
			padding:20px 10px 10px 10px;
		}
		.page_investment_report .title {
			margin-top:20px;
		}
		.page_investment_report {
			width:130%;
			transform: rotate(270deg);
			transform-origin: top left;
			position: absolute;
			top: 100%;
			left: 0;
			margin-top: 0;
			margin-left: 0;
		}

		</style>
		<table style="width:100%;">
			<tr class="head">
				<td colspan="2">Tanggal Periode</td>
				<td>Tenor</td>
				<td>Nilai</td>
				<td><span class="italic">Realiazed Gain</span> Saham</td>
				<td colspan="2">Keuntungan Aktual</td>
			</tr>
			<tr class="head">
				<td rowspan="4" style="vertical-align:top;">Awal</td>
				<td rowspan="4" style="vertical-align:top;" >Akhir</td>
				<td rowspan="4" style="vertical-align:top;" >Hari</td>
				<td rowspan="4" style="vertical-align:top;">Investasi (Principal)</td>
				<td>(tidak termasuk dividend)</td>
				<td>Profit Sharing</td>
				<td>Profit Sharing</td>
			</tr>
			<tr class="head">
				<td rowspan="3" style="vertical-align:middle;">Rp</td>
				<td style="border-bottom:none;">Investor</td>
				<td style="border-bottom:none;">Guarantor</td>
			</tr>
			<tr class="head">
				<td style="border-bottom:none;border-top:none;">{{ $share_profit_investor_percentage }}</td>
				<td style="border-bottom:none;border-top:none;">{{ $share_profit_guarantor_percentage }}</td>
			</tr>
			<tr class="head">
				<td style="border-top:none;">(a)</td>
				<td style="border-top:none;">(b)</td>
			</tr>
			<tr class="body">
				<td class="center">{{ date('d-M-Y', strtotime($start_investment_date)) }}</td>
				<td class="center">{{ date('d-M-Y', strtotime($end_investment_date)) }}</td>
				<td class="text-right">{{ $total_days }}</td>
				<td class="text-right">{{ $investment_value }}</td>
				<td class="text-right">{{ $realized_gain }}</td>
				<td class="text-right">{{ $share_profit_investor_value }}</td>
				<td class="text-right">{{ $share_profit_guarantor_value }}</td>
			</tr>
			<tr class="foot">
				<td colspan="3" class="text-right bold">Total Investasi</td>
				<td class="text-right bold">{{ $investment_value }}</td>
				<td class="text-right"><span class="bold">Total Keuntungan</span><br>1-Year Actual Return</td>
				<td class="text-right" style="border-right:none;"><span class="bold">{{ $share_profit_investor_value }}</span><br>{{ $profit_guarantee }}</td>
				<td style="border-left:none;"></td>
			</tr>
		</table>
	</div>
</div>
<div class="page-break"></div>