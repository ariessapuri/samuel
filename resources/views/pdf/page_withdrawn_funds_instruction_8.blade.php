<div class="content withdrawn_funds_instruction">
	<div class="center bold title-id">INSTRUKSI PENARIKAN DANA</div>
	<style>
		.content.withdrawn_funds_instruction {
			font-size:14px;
			text-align:justify;
		}
		.content.withdrawn_funds_instruction .title-id {
			font-size:17px;
		}
		.content.withdrawn_funds_instruction .title-en {
			font-size:16px;
		}
		.withdrawn_funds_instruction .col1 {
			width: 40%;
		}

		.withdrawn_funds_instruction .col2 {
			width: 20%;
		}

		.withdrawn_funds_instruction .col3 {
			width: 40%;
		}
		.withdrawn_funds_instruction table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 0px;
		margin-left:20px;
	}
	.withdrawn_funds_instruction table tr {
		padding-bottom: 20px;
	}

	.withdrawn_funds_instruction td {
		vertical-align: top;
		padding-bottom:10px;
	}

	.withdrawn_funds_instruction .label {
		text-align: left;
		width: 28%;
	}

	.withdrawn_funds_instruction .separator {
		text-align: center;
		width: 5%;
	}

	.withdrawn_funds_instruction .value {
		text-align: left;
		width: 67%;
	}
	
	.withdrawn_funds_instruction .bottom-wrapper {
		margin-top:40px;
	}
	.withdrawn_funds_instruction .nbsp {
		padding:40px 0;
	}
	.withdrawn_funds_instruction .note {
		position:absolute;
		bottom:0;
	}
	</style>
	<br><br>
	<p>
		Kepada Yth,
	</p>
	<p>
		<span class="bold">PT Samuel Sekuritas Indonesia</span><br>
		Menara Imperium Lantai 21<br>
		Jl. HR. Rasuna Said Kav 1,<br>
		Jakarta 12980, Indonesia<br><br>
		UP : AO _______________ & Finance Division
	</p>
	<p>Dengan Hormat,</p>
	<p>Bersama ini saya : </p>
	
	<table>
		<tr>
			<td class="label">
				<span class="bold">Nama</span>
			</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_name }}</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">Kode Nasabah</span>
			</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_code }}</td>
		</tr>
	</table>
	<p>
		Memberikan instruksi ke PT Samuel Sekuritas Indonesia (- selanjutnya disebut “SSI“) untuk menarik dana dari Rekening Dana Nasabah saya di Bank _____________ pada tanggal  _____________________ dan mentransfer ke rekening saya, dengan rincian dibawah ini:
	</p>
	<table>
		<tr>
			<td class="label">
				<span class="bold">Nama Penerima</span>
			</td>
			<td class="separator">:</td>
			<td class="value">Kim Dohoon</td>
			
			<td class="label">
				<span class="bold">Bank</span>
			</td>
			<td class="separator">:</td>
			<td class="value">________________</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">Nomor Rekening</span>
			</td>
			<td class="separator">:</td>
			<td class="value">________________</td>
			
			<td class="label">
				<span class="bold">Cabang</span>
			</td>
			<td class="separator">:</td>
			<td class="value">________________</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">Sebesar</span>
			</td>
			<td class="separator">:</td>
			<td class="value">________________</td>
			
			<td class="label">
				<span class="bold">Biaya Transfer</span>
			</td>
			<td class="separator">:</td>
			<td class="value">________________</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">Terbilang</span>
			</td>
			<td class="separator">:</td>
			<td class="value" colspan="4">_____________________________________________________________________</td>
		</tr>
		<tr>
			<td class="value" colspan="6">___________________________________________________________________________________</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">Keterangan</span>
			</td>
			<td class="separator">:</td>
			<td class="value" colspan="4">_____________________________________________________________________</td>
		</tr>
	</table>
	
	<p>
		Dengan instruksi ini, saya membebaskan SSI dari segala macam bentuk tanggung jawab, kerugian, kewajiban, gugatan, maupun tuntutan apapun yang dapat merugikan SSI yang timbul akibat instruksi ini. 
	</p>
	<p>
		Demikian instruksi ini saya buat agar dapat dijalankan. Terima kasih.
	</p>
	
	<p style="margin-top:20px;">
		Hormat saya
	</p>
	<p>JAKARTA,</p>
	<p style="margin-top:70px;">
		___________________________<br><br>
		{{ $client_name }}</p>
	</p>
</div>
<!--<div class="page-break"></div>-->