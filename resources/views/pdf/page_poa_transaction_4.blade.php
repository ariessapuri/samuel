<div class="content page_poa_transaction">
	<div class="content-wrapper">
		<div class="top center">
			<div class="logo">
				<img src="{{ $logo }}">
			</div>
			<div class="title-wrapper">
				<div class="title-id">SURAT KUASA</div>
				<div class="title-en">POWER OF ATTORNEY</div>
			</div>
		</div>
		<style>
		.page_poa_transaction p {
			font-size:11px;
			text-aling:justify;
		}
		.page_poa_transaction .title-wrapper {
			margin:20px 0 30px 0;
		}
		.page_poa_transaction .title-id {
			font-size:16px;
			font-weight:bold;
		}
		.page_poa_transaction .title-en {
			font-size:16px;
			font-weight:300;
			font-style:italic;
		}
		.page_poa_transaction .left { font-weight: bold; padding-right:10px; }
		.page_poa_transaction .right { font-style: italic; padding-left:10px; }
		
		.page_poa_transaction .left-field {float:left; width:5%;}
		.page_poa_transaction .right-field {float:left; width:98%;}
			
		.page_poa_transaction .left,
		.page_poa_transaction .right {
			width: 50%;
			box-sizing: border-box;
			float: left;
		}
		.page_poa_transaction .clear {clear:both;}
		
		.page_poa_transaction .title {
			font-size: 1.2em;
			font-weight: bold;
			text-align: center;
			margin-bottom: 20px;
		}
		
		.page_poa_transaction p {
			text-align: justify;
		}
		.horizontal-line {
			border-bottom: 1px solid #333;
			display: block;
			height: 20px;
		}
		.page_poa_transaction .less-margin .left {
			margin-left:5%;
		}
		.page_poa_transaction .less-margin .right {
			margin-left:-5%;
		}
		.page_poa_transaction p .name_address {
			font-size:11px;
		}
		.page_poa_transaction .less-margin .left, .page_poa_transaction .less-margin .right {
			margin-top:-25px;
		}
		.page_poa_transaction .address {
			margin-top:-20px;
		}
		.page_poa_transaction .box-border { 
			width:80%; 
			text-align:center;
			border:1px solid #333;
			padding:5px;
			margin:0 auto;
			font-style:normal;
			font-weight:600;
		}
		.page_poa_transaction .sign {
			margin:80px 0 570px 0;
		}
		.page_poa_transaction .sign .name {
			border-bottom:1px solid #333;
			max-width:50%;
			margin:0 auto;
		}
		.page_poa_transaction .sign .space {
			margin:50px 0;
		}
		.page_poa_transaction .borderbottom {
			border-bottom:1px solid #333;
			width:150px;
			height:5px;
			display:block
		}
		.page_poa_transaction .borderbottom2 {
			border-bottom:1px solid #333;
			width:150px;
			height:25px;
			display:inline-block
		}
		.page_poa_transaction .borderbottom3 {
			border-bottom:1px solid #333;
			width:120px;
			height:25px;
			display:inline-block
		}
		.page_poa_transaction {
			font-size:11.5px;
			text-aling:justify;
		}
		.page_poa_transaction .title-wrapper {
			margin:20px 0 30px 0;
		}
		.page_poa_transaction .title-id {
			font-size:16px;
			font-weight:bold;
		}
		.page_poa_transaction .title-en {
			font-size:16px;
			font-weight:300;
			font-style:italic;
		}
		.page_poa_transaction .left { font-weight: bold; padding-right:10px; }
		.page_poa_transaction .right { font-style: italic; padding-left:10px; }
		
		.page_poa_transaction .left-field {float:left; width:5%;}
		.page_poa_transaction .right-field {float:left; width:98%;}
			
		.page_poa_transaction .left,
		.page_poa_transaction .right {
			width: 50%;
			box-sizing: border-box;
			float: left;
		}
		.page_poa_transaction .clear {clear:both;}
		
		.page_poa_transaction .title {
			font-size: 1.2em;
			font-weight: bold;
			text-align: center;
			margin-bottom: 20px;
		}
		
		.page_poa_transaction p {
			text-align: justify;
		}
		.horizontal-line {
			border-bottom: 1px solid #333;
			display: block;
			height: 20px;
		}
		.page_poa_transaction .less-margin .left {
			margin-left:5%;
		}
		.page_poa_transaction .less-margin .right {
			margin-left:-5%;
		}
		.page_poa_transaction .less-margin .left, .page_poa_transaction .less-margin .right {
			margin-top:-25px;
		}
		.address {
			margin-top:-20px;
		}
		.box-border { 
			width:80%; 
			text-align:center;
			border:1px solid #000;
			padding:5px;
			margin:0 auto;
			font-style:normal;
			font-weight:600;
		}
		.page_poa_transaction .sign {
			margin:80px 0 120px 0;
		}
		.page_poa_transaction .sign .name {
			border-bottom:1px solid #333;
			max-width:50%;
			margin:0 auto;
		}
		.page_poa_transaction .sign .space {
			margin:50px 0;
		}
		.borderbottom {
			border-bottom:1px solid #333;
			width:150px;
			height:5px;
			display:block
		}
		.borderbottom2 {
			border-bottom:1px solid #333;
			width:150px;
			height:25px;
			display:inline-block
		}
		.borderbottom3 {
			border-bottom:1px solid #333;
			width:120px;
			height:25px;
			display:inline-block
		}
		</style>
		
		<div class="container">
			<div class="left">
				<p>Yang bertanda-tangan di bawah ini:</p>
			</div>
			
			<div class="right">
				<p>We, the undersigned below:</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left-field">
				<p>1. </p>
			</div>
			
			<div class="right-field">
				<p>
					<span class="horizontal-line name_address">{{ $client_name }}</span>
				</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container less-margin">
			<div class="left">
				<p>beralamat di</p>
			</div>
			
			<div class="right">
				<p>having [his/her] address at</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container address">
			<div class="left-field">
				<p></p>
			</div>
			
			<div class="right-field">
				<p>
					<span class="horizontal-line name_address">{{ $client_address }}</span>
				</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container less-margin">
			<div class="left">
				<p>selanjutnya disebut sebagai “Pemberi Kuasa”</p>
			</div>
			
			<div class="right">
				<p>hereinafter referred to as “the Principal”;</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left-field">
				<p>2. </p>
			</div>
			
			<div class="right-field">
				<p>
					<span class="horizontal-line name_address">{{ $attorney_name }}</span>
				</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container less-margin">
			<div class="left">
				<p>beralamat di</p>
			</div>
			
			<div class="right">
				<p>having [his/her] address at</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container address">
			<div class="left-field">
				<p></p>
			</div>
			
			<div class="right-field">
				<p>
					<span class="horizontal-line name_address">{{ $attorney_address }}</span>
				</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container less-margin">
			<div class="left">
				<p>Selanjutnya disebut sebagai “PenerimaKuasa”</p>
			</div>
			
			<div class="right">
				<p>Hereinafter referred to as“the Attorney”;</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left">
				<p>Seluruh istilah yang digunakan dalam surat kuasa ini, kecuali ditentukan lain, mengacu pada istilah yang digunakan dalam Perjanjian Pembukaan Rekening Efek (selanjutnya disebut “Perjanjian Pembukaan Rekening Efek”) yang ditandatangani oleh Pemberi Kuasa dan PT Samuel Sekuritas Indonesia, suatu perseroan yang didirikan berdasarkan hukum negara Republik Indonesia, berkedudukan di Jakarta, Indonesia (selanjutnya disebut “SSI”) pada tanggal</p>
			</div>
			
			<div class="right">
				<p>Words and phrases used herein shall have the same meanings and constructions as in the Account Agreement (hereinafter referred to as <span class="bold">“The Account Agreement”</span>), signed by the Principal and PT Samuel Sekuritas Indonesia, a company duly established and existing under the laws of the Republic of Indonesia, having its registered office in Jakarta, Indonesia (hereinafter referred to as “SSI”) on</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left">
				<p><span class="borderbottom"></span></p>
			</div>
			
			<div class="right">
				<p><span class="borderbottom"></span></p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left">
				<p>Pemberi Kuasa dengan ini memberikan kuasa kepada Penerima Kuasa dengan hak subsitusi:</p>
			</div>
			
			<div class="right">
				<p>The Principal here by empowers the Attorney with the right of substitution:</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left">
				<div class="box-border">KHUSUS</div>
			</div>
			
			<div class="right">
				<div class="box-border">ESPECIALLY</div>
			</div>	
			<div class="clear"></div>
		</div>
		
		<div class="container">
			<div class="left">
				<p>untuk dan atas nama Pemberi Kuasa melaksanakan semua hak dan kewajiban yang dapat atau wajib dilaksanakan oleh Pemberi Kuasa berdasarkan Perjanjian Pembukaan Rekening Efek dengan cara dan pada saat yang dipandang baik oleh Penerima Kuasa, termasuk tetapi tidak terbatas pada:<br>
				a.	memberi atau menarik perintah untuk melakukan atau tidak melakukan suatu transaksi, baik transaksi efek maupun transaksi lainnya, sehubungan dengan setiap rekening yang dibuka olehatau atas nama Pemberi Kuasa di SSI;<br>
				b.	meminta dan menerima laporan dari SSI dan/atau menguji kesesuaian saldo Rekening Pemberi Kuasa dalam pembukuan SSI dengan efek Pemberi Kuasa dalam sub-rekening efek;<br>
				c.	dalam hal REKENING BERSAMA, untuk membeli, menjual atau dengan cara lain bertransaksi saham, obligasi, dan efek lainnya; untuk menerima atas nama REKENING BERSAMA, instruksi, pemberitahuan, konfirmasi, laporan, rekening koran dan komunikasi dalam segala bentuk, efek; untuk membuat perjanjian atas nama REKENING BERSAMA sehubungan dengan hal yang telah disebutkan; untuk mengakhiri atau mengubah atau menyampingkan segala ketentuan yang terdapat dalam perjanjian atas nama Rekening Bersama tersebut; dan secara umum untuk berhubungan dengan SSI atas nama REKENING BERSAMA;
				</p>
			</div>
			
			<div class="right">
				<p>to representand act for and on behalf of the Principal to do all rights and obligations which can or are required to be performed by the Principal pursuant to the Account Agreementon the terms and at the time, deemed good by the Attorney, including but not limited:<br>
				a.	to place and withdraw orders relating to the execution or non execution of securities transactions or any other transactions with regard to any Accounts, being opened by and on behalf of the Principal with SSI;<br>
				b.	to request for and receive reports from SSI and/or to examine the conformity of the balances of the Principal in SSI’s record with those stated in the sub-account of the Principal;<br>
				c.	with regard to JOINT ACCOUNT, to buy, sell and otherwise deal in stocks, bonds, and other investments; to receive on behalf of the JOINT ACCOUNT demands, notices, confirmations, reports, statements of Account and communications of every kind; to receive on behalf of the JOINT ACCOUNT, securities; to make agreements on behalf of the JOINTACCOUNT relating to any of the foregoing matters, and to terminate or modify same or waive any of the provisions thereof; and generally to deal with SSI on behalf of the JOINT ACCOUNT;
				</p>
			</div>	
			<div class="clear"></div>
		</div>
		<div class="container contact-detail" style="margin-top:5px; color:#333;">
			<div class="center">
				<div class="company">PT SAMUEL SEKURITAS INDONESIA</div>
				<div class="company_address">Member of Indonesia Stock Exchange</div>
				<div class="company_address">Menara Imperium, 21st Floor, Jl. HR. Rasuna Said Kav. 1, Jakarta 12980, Indonesia</div>
				<div class="company_contact"><span class="tel">Tel.+(62.21)28548100</span> <span class="fax">Fax.+(62.21)83701618</span>|<span class="web">www.e-samuel.com</span></div>
			</div>
		</div>
	</div>
</div>
<div class="page-break"></div>
<div class="content page_poa_transaction">
	<div class="content-wrapper">
		<div class="container header2">
			<div class="left">
				<img class="logo" src="{{ $logo }}">
			</div>
			<div class="right">
				<p class="text-right">
					<span class="bold">Surat Kuasa</span><br>
					<span class="italic">The Attorney</span>
				</p>
			</div>
			<div class="clear"></div>
		</div>
		<div class="container">
			<div class="left">
				<p>
				d.	membayar kepada SSI berdasarkan permintaan SSI, seluruh pengeluaran, biaya dan kerugian karena kegagalan Pemberi Kuasa untuk menyerahkan efek yang telah dijual dalam keadaan laik, secara tepat waktu atau gagal menyetorkan total harga pembelian dari efek yang dibeli oleh Pemberi Kuasa;<br>
				e.	membayar kepada SSI, komisi dan biaya lainnya untuk jasa SSI sehubungan dengan pelaksanaan suatu transaksi; seluruh biaya yang dikenakan atau dapat dibayarkan kepada bank kustodian sehubungan dengan Rekening Pemberi Kuasa dan efek, serta biaya atas jasa-jasa lain yang diwajibkan oleh hukum;<br>
				f.	mengajukan keberatan untuk suatu konfirmasi atas suatu transaksi dan rekening koran atas Rekening Pemberi Kuasa (jika diperlukan);<br>
				g.	menyetorkan sejumlah uang tunai atau memberikan suatu jaminan ke dalam Rekening Pemberi kuasa apabila diminta oleh SSI;<br>
				h.	melakukan segala sesuatu yang penting dan berguna bagi terlaksananya kuasa ini.<br><br>
				PEMBERI KUASA dengan ini meratifikasi dan mengakui segala tindakan yang dilakukan oleh Penerima Kuasa berdasarkan Surat Kuasa ini.<br>
				PEMBERI KUASA dengan ini menyatakan bahwa secara sadar telah membaca, mengerti, dan menyetujui surat kuasa ini.<br>
				SURAT KUASA ini menjadi efektif sejak tanggal penandatangannya dan berlaku terus menerus selama SSI belum menerima surat pencabutan kembali Surat Kuasa ini dari Pemberi Kuasa. Surat Kuasa ini juga merupakan bagian yang tidak terpisahkan dengan Perjanjian Pembukaan Rekening Efek.<br>
				SURAT KUASA ini dibuat dan tunduk pada hukum Negara Republik Indonesia serta ditanda-tangani di Jakarta, pada hari <span class="borderbottom3"></span>,tanggal <span class="borderbottom3"></span>.

				</p>
			</div>
			
			<div class="right">
				<p>
				d.	to pay to SSI, upon demand, all costs, expenses and losses incurred by SSI in connection to the Principal’s failure to timely deliver securities sold in good deliverable form or to timely deposit the total purchase price of securities purchased by the Principal;<br><br><br>
				e.	to pay to SSI, commissions and other fees for all services rendered by SSI in connection with the execution of transactions; fees charged and payable to custodian banks in relation to the Principal’s Account and securities; fees for any services that are required by law;<br><br>
				f.	to object the confirmations of transactions and statements of the Principal’s Account (if needed);<br><br>
				g.	to deposit cash or collateral in the Principal’s Account at the demand of SSI;<br><br>
				h.	to do all other things which are important and useful for the exercise of the above powers granted herein.<br><br>
				<span class="bold">THE PRINCIPAL</span> hereby ratifies and confirms whatever things that the Attorney does in exercising powers granted under this Power of Attorney.<br>
				<span class="bold">THE PRINCIPAL</span> hereby declare and fully aware that have read, understood, and agreed to this Power of Attorney.<br>
				<span class="bold">THIS POWER OF ATTORNEY</span> shall be valid and effective upon its execution and will continue to be valid for so long SSI has notreceived the notice of revocation of this Power of Attorney from the Principal. This Power of Attorney constitutes an integral and inseparable part of the Account Agreement.<br>
				<span class="bold">THIS POWER OF ATTORNEY</span> is governed by and shall be construed in accordance with the laws of the Republic of Indonesia and being signed in Jakarta, on	<span class="borderbottom2"></span>.
				</p>
			</div>	
			<div class="clear"></div>
		</div>
		
		<div class="container sign">
			<div class="left">
				<div class="center signature">
					<div class="bold">PEMBERI KUASA</div>
					<div class="italic">THE PRINCIPAL</div>
					<div class="space">&nbsp;</div>
					<div class="name">KIM DOHOON</div>
					<div class="bold">(TTD/Nama Langkap)</div>
					<div class="italic">(Signature/Full Name)</div>
				</div>
			</div>
			
			<div class="right">
				<div class="center signature">
					<div class="bold">PENERIMA KUASA</div>
					<div class="italic">THE ATTORNEY</div>
					<div class="space">&nbsp;</div>
					<div class="name font-normal">Eunice M. Satyono</div>
					<div class="bold">(TTD/Nama Langkap)</div>
					<div class="italic">(Signature/Full Name)</div>
				</div>
			</div>	
			<div class="clear"></div>
		</div>
		
		<div class="container contact-detail" style="padding-top:30px; color:#333;">
			<div class="center">
				<div class="company">PT SAMUEL SEKURITAS INDONESIA</div>
				<div class="company_address">Member of Indonesia Stock Exchange</div>
				<div class="company_address">Menara Imperium, 21st Floor, Jl. HR. Rasuna Said Kav. 1, Jakarta 12980, Indonesia</div>
				<div class="company_contact"><span class="tel">Tel.+(62.21)28548100</span> <span class="fax">Fax.+(62.21)83701618</span>|<span class="web">www.e-samuel.com</span></div>
			</div>
		</div>
	</div>
</div>
<div class="page-break"></div>