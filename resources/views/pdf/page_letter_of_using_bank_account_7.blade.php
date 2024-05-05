<div class="content letter_of_using_bank_account">
	<div class="center bold title-id">SURAT PERNYATAAN PENGGUNAAN DATA REKENING BANK</div>
	<div class="center italic title-en">STATEMENT LETTER OF USING BANK ACCOUNT DATA</div>
	<style>
		.content.letter_of_using_bank_account {
			font-size:13px;
			text-align:justify;
		}
		.content.letter_of_using_bank_account .title-id {
			font-size:17px;
		}
		.content.letter_of_using_bank_account .title-en {
			font-size:16px;
		}
		.letter_of_using_bank_account .col1 {
			width: 40%;
		}

		.letter_of_using_bank_account .col2 {
			width: 20%;
		}

		.letter_of_using_bank_account .col3 {
			width: 40%;
		}
		.letter_of_using_bank_account table {
		width: 100%;
		border-collapse: collapse;
		margin-bottom: 20px;
	}
	.letter_of_using_bank_account table tr {
		padding-bottom: 20px;
	}

	.letter_of_using_bank_account td {
		vertical-align: top;
		padding-bottom:10px;
	}

	.letter_of_using_bank_account .label {
		text-align: left;
		width: 28%;
	}

	.letter_of_using_bank_account .separator {
		text-align: center;
		width: 5%;
	}

	.letter_of_using_bank_account .value {
		text-align: left;
		width: 67%;
	}
	
	.letter_of_using_bank_account .bottom-wrapper {
		margin-top:40px;
	}
	.letter_of_using_bank_account .nbsp {
		padding:40px 0;
	}
	.letter_of_using_bank_account .note {
		position:absolute;
		bottom:0;
	}
	</style>
	<br><br>
	<p>
		Kepada Yth,<br>
		<span class="italic">To:</span>
	</p>
	<p>
		<span class="bold">PT Samuel Sekuritas Indonesia</span><br>
		Menara Imperium Lantai 21<br>
		Jl. HR. Rasuna Said Kav 1,<br>
		Jakarta 12980, Indonesia<br><br>
		UP : Direksi & AO __________________<br>
		Attn: Directors & AO __________________
	</p>
	<p>
		Dengan Hormat,<br>
		<span class="italic">With respect,</span>
	</p>
	<p>
		Saya yang bertandatangan di bawah ini:<br>
		<span class="italic">I, the undersigned below:</span><br><br>
	</p>
	<br>
	<table>
		<tr>
			<td class="label">
				<span class="bold">Nama</span><br>
				<span class="bold italic">Name</span>
			</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_name }}</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">No. Identitas</span><br>
				<span class="bold italic">Identity Number</span>
			</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_id_number }}</td>
		</tr>
		<tr>
			<td class="label">
				<span class="bold">Alamat</span><br>
				<span class="bold italic">Address</span>
			</td>
			<td class="separator">:</td>
			<td class="value">{{ $client_address }}</td>
		</tr>
	</table>
	<br>
	<p>
		Dengan surat ini menyatakan kepada PT Samuel Sekuritas Indonesia (- selanjutnya disebut “SSI”) bahwa saya adalah pemilik sah rekening efek yang berada di SSI dengan kode nasabah {{ $client_code }}. Saya menyatakan bahwa saya menggunakan Rekening Bank dengan rincian dibawah ini:
	</p>
	<p class="italic">
		Through this letter I declare to PT Samuel Sekuritas Indonesia (- hereinafter referred to as “SSI”) that I am the rightful owner of a securities account at SSI with client code {{ $client_code }}, I certify that I am using bank account with the details are as follows:
	</p>
	<table class="table_2">
		<tr>
			<td class="label">
				<span class="">Nama Bank</span><br>
				<span class="italic">Name of Bank</span>
			</td>
			<td class="separator">:</td>
			<td class="value">____________________________________________</td>
		</tr>
		<tr>
			<td class="label">
				<span class="">Nomor Rekening</span><br>
				<span class="italic">Account Number</span>
			</td>
			<td class="separator">:</td>
			<td class="value">____________________________________________</td>
		</tr>
		<tr>
			<td class="label">
				<span class="">Atas Nama</span><br>
				<span class="italic">On Behalf of</span>
			</td>
			<td class="separator">:</td>
			<td class="value">____________________________________________</td>
		</tr>
	</table>
	<br>
	<p>
		Oleh karena hal tersebut saya menerima tanggung jawab atas penggunaan Rekening Bank tersebut diatas beserta segala akibat hukum untuk melakukan segala transaksi efek dengan SSI bila di kemudian hari terjadi suatu resiko akibat dari pernyataan ini. Berdasarkan pernyataan ini, saya membebaskan SSI dari segala macam bentuk tanggung jawab, kerugian, kewajiban, gugatan maupun tuntutan apapun yang dapat merugikan SSI yang timbul akibat surat pernyataan ini di kemudian hari. Surat Pernyataan ini mengikat dan merupakan bagian yang tidak terpisahkan dari Formulir Pembukaan Rekening Efek serta Perjanjian Rekening Efek. 
	</p>
	
	<div class="page-break"></div>
	
	<p class="italic">
		Therefore, I accept and fully responsible for the use of the bank account mentioned above with all legal consequences to conduct any securities transactions with SSI if in the future there is a risk resulting from this statement. I hereby indemnify SSI from any kind of liability, obligation, action, or claim. This Statement Letter binds and is an integral part of the Securities Opening Account Form and the Securities Opening Account Agreement.
	</p>
	
	<p>
		Demikian surat pernyataan ini dibuat untuk dijalankan sebagaimana mestinya. Terima Kasih.<br>
		<span class="italic">This statement letter is made to done properly. Thank you.</span>
	</p>
	
	<p>
		Hormat saya,<br>
		Sincerely yours,<br>
	</p>

	<div class="bottom-wrapper">
		<table class="bottom">
			<tr>
				<td class="col1">
					<div>Jakarta, _______________, 2024</div>
					<div class="nbsp">Meterai Rp10.000,-</div>
				</td>
				
				<td class="col2"></td>
				
				<td class="col3">
					<div>
						Menyetujui,*<br>
						<span class="italic">Approval by.</span>
					</div>
					<div class="nbsp">&nbsp;</div>
				</td>
			</tr>
		</table>
		<table class="bottom">
			<tr>
				<td class="col1">
					<div>
						_______________________________<br>
						<span class="bold">{{ $client_name }}</span><br>
						<span class="italic">(Sign & Full Name)</span>
					</div>
				</td>
				
				<td class="col2"></td>
				
				<td class="col3">
					<div>
						_______________________________<br>
						<span class="bold">{{ $attorney_name }}</span><br>
						<span class="italic">(Sign & Full Name)</span>
					</div>
				</td>
			</tr>
		</table>
	</div>
	<div class="note">
		<span class="bold">NB : * </span> Diisi oleh pihak yang meminjamkan rekening bank.<br>
		<span class="italic">* Filled out by the party lending the bank account data</span>
	</div>
</div>
<div class="page-break"></div>