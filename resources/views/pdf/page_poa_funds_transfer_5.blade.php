<div class="content page_poa_transfer_dana">
	<h2 class="center">SURAT KUASA</h2>

	<p>Saya yang bertanda tangan dibawah ini : </p>
	<table>
		<tr>
			<td class="label">Nama</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_name }}</td>
		</tr>
		<tr>
			<td class="label">No. {{ $client_id_type }}</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_id_number }}</td>
		</tr>
		<tr>
			<td class="label">Alamat</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_address }}</td>
		</tr>
	</table>
	
	<p>Pemilik rekening di PT Samuel Sekuritas Indonesia atas nama Kim Dohoon (code client : {{ $client_code }}).</p>

	<p class="ddefault25">Selanjutnya disebut <strong>”Pemberi Kuasa”</strong></p>
 
	<p>Dalam hal ini memberikan kuasa kepada</p>
	
	<table>
		<tr>
			<td class="label">Nama</td>
			<td class="separator">:</td>
			<td class="value">{{ $attorney_name }}</td>
		</tr>
		<tr>
			<td class="label">No. {{ $attorney_id_type }}</td>
			<td class="separator">:</td>
			<td class="value">{{ $attorney_id_number }}</td>
		</tr>
		<tr>
			<td class="label">Alamat</td>
			<td class="separator">:</td>
			<td class="value">{{ $attorney_address }}</td>
		</tr>
	</table>

	<p class="default25">Selanjutnya disebut <strong>”Penerima Kuasa”</strong></p>

	<p>----------------------------------------------KHUSUS--------------------------------------------------</p>

	<p>Untuk dan atas nama serta mewakili Pemberi Kuasa untuk melakukan tindakan yang berhubungan dengan rekening dana nasabah & rekening efek atas nama Pemberi Kuasa di {{ $company_name }}, yang meliputi: </p>

	<p class="default25">Penarikan dana atas nama Pemberi Kuasa untuk penempatan di instrument fixed income <i>(callable money market instrument)</i> atas nama Pemberi Kuasa.</p>

	<p>Surat Kuasa ini dibuat dan ditandatangani dengan sebenarnya tanpa paksaan dan untuk digunakan sebagaimana mestinya. Surat Kuasa ini tetap berlaku efektif dan sah hingga Pemberi Kuasa mencabut dan menyatakan Surat Kuasa ini tidak berlaku lagi.</p>
	
	
	<p>Jakarta, </p>

	<div class="bottom-wrapper">
		<table class="bottom">
			<tr>
				<td class="col1">
					<div class="headline">Pemberi Kuasa,</div>
					<div class="nbsp">materai</div>
					<div>({{ $client_name }})</div>
				</td>
				<td class="col2">
					<div class="headline">&nbsp;</div>
					<div class="nbsp">&nbsp;</div>
					<div>&nbsp;</div>
				</td>
				<td class="col3">
					<div class="headline">Penerima Kuasa,</div>
					<div class="nbsp">&nbsp;</div>
					<div>({{ $attorney_name }})</div>
				</td>
			</tr>
		</table>
	</div>
</div>
<div class="page-break"></div>