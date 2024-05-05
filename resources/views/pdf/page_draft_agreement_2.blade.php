<div class="content page_draft_agreement">
	<style>
	.page_draft_agreement {
		font-size:10.5pt; 
	}
	.page_draft_agreement .bank_detail {
		margin-left:30px;
	}
	.page_draft_agreement table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 20px;
	}
	.page_draft_agreement table tr {
		padding-bottom: 20px;
	}

	.page_draft_agreement td {
		vertical-align: top;
		padding-bottom:10px;
	}

	.page_draft_agreement .label {
		text-align: left;
		width: 28%;
	}

	.page_draft_agreement .separator {
		text-align: center;
		width: 5%;
	}

	.page_draft_agreement .value {
		text-align: left;
		width: 67%;
	}
	
	.page_draft_agreement .bottom-wrapper {
		margin-top:40px;
	}
	
	.page_draft_agreement table.bottom {
		width: 100%;
		border-collapse: collapse;
	}

	.page_draft_agreement table.bottom  td {
		padding-bottom: 50px;
		text-align: left;
		vertical-align: top;
	}
	.page_draft_agreement ul {
		padding:0;
		padding-left:10px;
		margin:0;
	}
	.page_draft_agreement ul li {
		margin-bottom:5px;
	}
	.page_draft_agreement .as {
		margin-top:110px;
		border-top:1ppx solid #000;
	}
	.page_draft_agreement .col1 {
		width: 40%;
	}

	.page_draft_agreement .col2 {
		width: 20%;
	}

	.page_draft_agreement .col3 {
		width: 40%;
	}
	</style>
	<div class="logo">
		<img src="{{ $logo }}">
	</div>
    <p>Jakarta, 28 Februari 2024<br>
	No. 192/INV/FEB/24</p>

	<p>
		<span class="bold">Kepada YTH</span>:<br>
		<span class="bold">{{ $client_title_name }}</span><br>
		Apt The Royal Springhill Residences, Tower Marygold Unit 09-C, Kemayoran,<br>
		Jl. Benyamin Suaeb Blok D7, Pademangan Timur, Jakarta Utara.
	</p>

	<p><span class="bold underline">Perihal: Kesepakatan Kuasa Jual Beli Saham Full-Discretionary</span></p>

	<p>Dengan Hormat,</p>

	<p>Dengan ini {{ $company_name }} ("SI"), sebagai Advisor untuk Full-Discretionary Investment dengan kondisi berikut:</p>
	
	<table>
		<tr>
			<td class="label">Investor (Pemberi Kuasa)</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_name }}<br>(dengan kode klien di PT Samuel Sekuritas Indonesia: {{ $client_code }}).</td>
		</tr>
		<tr>
			<td class="label">Penerima Kuasa</td>
			<td class="separator">:</td>
			<td class="value">{{ $attorney_name }}<br>(untuk melakukan transaksi jual beli saham dengan wewenang penuh / full discretionary).</td>
		</tr>
		<tr>
			<td class="label">Nilai Investasi (Principal)</td>
			<td class="separator">:</td>
			<td class="value">Sampai dengan Rp {{ $investment_value }} - ({{ $investment_value_text }}).</td>
		</tr>
		<tr>
			<td class="label">Advisor</td>
			<td class="separator">:</td>
			<td class="value">{{ $company_name }}.</td>
		</tr>
		<tr>
			<td class="label">Broker dan Kustodian</td>
			<td class="separator">:</td>
			<td class="value">PT Samuel Sekuritas Indonesia.<br>Broker Fee: Pada setiap transaksi jual beli di pasar dikenakan fee beli {{ $buying_fee }} nett dan fee jual {{ $selling_fee }} nett.</td>
		</tr>
		<tr>
			<td class="label">Pembagian Keuntungan</td>
			<td class="separator">:</td>
			<td class="value">Investor {{ $share_profit_investor_percentage }} dan Advisor {{ $share_profit_guarantor_percentage }} yang dibagi pada akhir periode atau yang disepakati bersama.</td>
		</tr>
		<tr>
			<td class="label">Target Keuntungan</td>
			<td class="separator">:</td>
			<td class="value">Indikasi {{ $profit_guarantee }} untuk Investor.</td>
		</tr>
		<tr>
			<td class="label">Periode Investasi</td>
			<td class="separator">:</td>
			<td class="value">{{ $investment_period }} (sejak dana diterima).</td>
		</tr>
		<tr>
			<td class="label">Pre-Termination</td>
			<td class="separator">:</td>
			<td class="value">Diperbolehkan setelah 6 bulan (tanpa penalty), dengan pemberitahuan 15 hari sebelumnya.<br>Jika diterminasi, maka Investor akan menerima nilai investasi dalam bentuk tunai dan/atau saham-saham.</td>
		</tr>
		<tr>
			<td class="label">Tujuan Investasi</td>
			<td class="separator">:</td>
			<td class="value">
				<ul>
					<li>Investasi dilakukan pada instrumen-instrumen pasar modal dalam bentuk saham-saham yang terdaftar di PT Bursa Efek Indonesia, dengan wewenang penuh untuk bertindak atas nama Investor (Full-Discretionary untuk jual dan beli saham).</li>
					<li>Apabila dana tidak dipakai untuk pembelian saham, maka SI mempunyai wewenang penuh untuk menempatkan dana Investor di instrumen fixed income (callable money market instrument) atas nama Investor, sepanjang investor telah memberikan persetujuan tertulis atas rencana penempatan dana tersebut.</li>
				</ul>
			</td>
		</tr>
	</table>
	
	<div class="footerbottom" style="border-top:1px solid #000; text-align:center; font-size:11px;margin-top:-10px;">
		<div class="company"><span class="bold">{{ $company_name }}</span></div>
		<div class="company_address">{{ $company_address }}</div>
		<div class="company_contact"><span class="tel">Telp. Hunting : {{ $company_phone }}</span> | <span class="fax">Fax : {{ $company_fax }}</span></div>
		<div class="company_web">{{ $company_website_address }}</div>
	</div>
	
	<div class="page-break"></div>
	
	<table>
		<tr>
			<td class="label">Pajak</td>
			<td class="separator">:</td>
			<td class="value">Final. Keuntungan atas jual saham di PT Bursa Efek Indonesia (IDX) merupakan pajak final.</td>
		</tr>
		<tr>
			<td class="label">Lain-Lain</td>
			<td class="separator">:</td>
			<td class="value">
				<ul>
					<li>Penerima Kuasa & Advisor tidak menanggung kerugian yang terjadi atas penurunan nilai investasi (principal).</li>
					<li>Seluruh kerugian yang terjadi menjadi tanggung jawab Pemberi Kuasa dan Pemberi Kuasa tidak dapat menuntut kerugian yang terjadi atas penurunan nilai investasi.</li>
					<li>Hak atas dividen, rights, waran atas saham-saham yang diperoleh selama berlakunya periode investasi adalah menjadi hak sepenuhnya untuk Investor.</li>
					<li>Pembagian keuntungan dapat dilakukan kapan saja sesuai kesepakatan Pemberi Kuasa dan Advisor.</li>
					<li>Kuasa dari Investor kepada Penerima Kuasa dapat diakhiri dengan surat tertulis dari Investor.</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td class="label">Risiko</td>
			<td class="separator">:</td>
			<td class="value">Investor mengerti akan risiko kerugian atas penurunan investasi dan likuiditas di pasar modal.</td>
		</tr>
		<tr>
			<td class="label">Rekening Investasi</td>
			<td class="separator">:</td>
			<td class="value">
				Nilai Investasi ditransfer ke RDN Investor sebagai berikut:<br>
				<div class="bank_detail">
					Bank: {{ $rdn_bank_name }}<br>
					Nama Rekening: {{ $client_name }}<br>
					No. Rekening: {{ $rdn_account_number }}
				</div>
			</td>
		</tr>
		<tr>
			<td class="label">Dokumentasi</td>
			<td class="separator">:</td>
			<td class="value">
				<ul>
					<li>Surat kuasa transaksi jual beli saham.</li>
					<li>Surat kuasa penempatan dana investor di callable money market atas nama Investor.</li>
				</ul>
			</td>
		</tr>
	</table>

	<p>Untuk itu kami mohon agar surat ini ditandatangani sebagai tanda setuju atas kondisi dan persyaratan tercantum.</p>

	<p>Atas perhatiannya kami ucapkan terima kasih.</p>
	
	<div class="bottom-wrapper">
		<table class="bottom">
			<tr>
				<td class="col1">
					<div class="headline">Hormat Kami, <br>Penerima Kuasa<br>{{ $company_name }}</div>
					<div class="as">{{ $attorney_name }}<br>{{ $attorney_position }}</div>
				</td>
				<td class="col2">
					<div class="headline">&nbsp;</div>
					<div>&nbsp;</div>
				</td>
				<td class="col3">
					<div class="headline">Menyetujui,<br>Pemberi Kuasa,<br>&nbsp;</div>
					<div class="as">{{ $client_name }}</div>
				</td>
			</tr>
		</table>
	</div>
	
	<div class="footerbottom" style="border-top:1px solid #000; text-align:center; font-size:11px; margin-top:110px;">
		<div class="company"><span class="bold">{{ $company_name }}</span></div>
		<div class="company_address">{{ $company_address }}</div>
		<div class="company_contact"><span class="tel">Telp. Hunting : {{ $company_phone }}</span> | <span class="fax">Fax : {{ $company_fax }}</span></div>
		<div class="company_web">{{ $company_website_address }}</div>
	</div>
</div>
	
<div class="page-break"></div>