import{_ as v,h as y,$ as u,E as f,H as w,r as S,o as r,c as m,a as t,b as B,l as x,w as d,v as c,F as g,q as b,t as l,z as F,x as T,A as M,p as R,n as C}from"./index-b7f4b6dc.js";import{c as j,C as k}from"./function-2d16a083.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const K={data(){return{pegawai:{},allMember:null,allKelas:null,promos:null,jenisTransaksi:["Transaksi Aktivasi","Transaksi Deposit Reguler","Transaksi Deposit Paket"],FormData:{tanggalTransaksi:"",pegawai:{},idMember:"",jenisTransaksi:null,nominalTransaksi:"",kelas:null,totalBiaya:"",id_promo:null,totalBayar:0,kembalian:0},dataTodayTransaction:null,dataTransaksiAktivasi:null,inputNominalToggle:!0,inputKelasToggle:!0,inputJenisToggle:!0,bayarButtonToggle:!0,prefixQuantity:"Rp",showToggle:"aktivasi",FormPrint:y({id_member:"",no_struk_transaksi:"",tanggal_aktivasi:"",nama_member:"",masa_aktif:"",id_pegawai:"",nama_pegawai:"",deposit:"",bonus_deposit:"",sisa_deposit:"",total_deposit:"",tanggal_depo_reguler:"",bonus_promo:"",nominal_uang:"",nominal_deposit_kelas:"",tanggal_kadeluarsa_paket:"",jenis_kelas:"",harga_kelas:"",harga_total:""})}},methods:{changeClass(){document.body.classList.replace("body-center","body-normalflow")},getCurrentDate(){let a=new Date;this.FormData.tanggalTransaksi=`${a.getDate()} - ${a.getMonth()+1} - ${a.getFullYear()}`},getDataPegawai(){let a=localStorage.getItem("pegawaiData");this.FormData.pegawai=JSON.parse(a)},async getAllMember(){console.log("masuk sini");const a="/member",o=await this.$http.get(a);this.allMember=o.data.data},async getAllKelas(){const a="/kelas",o=await this.$http.get(a);this.allKelas=o.data.kelas},async getPromo(){const a=await this.$http.get("/promo");this.promos=a.data.promo},availablePromo(a,o){let n=this.promos,p=null;return n=n.filter(s=>s.jenis_promo===a),n.forEach(s=>{s.minimal_deposit<=o&&(p===null||s.minimal_deposit>p.minimal_deposit)&&(p=s)}),p},cleanForm(){this.FormData.nominalTransaksi="",this.FormData.kelas=null,this.FormData.totalBiaya="",this.FormData.id_promo=null},countKembalian(){this.FormData.kembalian=this.FormData.totalBayar-this.FormData.totalBiaya},cekTotalBayarValid(){return this.FormData.totalBayar.length==null?(u.warning("Total Pembayaran diinputkan!"),!1):this.FormData.totalBayar<this.FormData.totalBiaya?(u.warning("Total Pembayaran tidak boleh kurang dari biaya total !"),!1):!0},cekTransaksiDepoRegulerValid(){return this.FormData.jenisTransaksi=="Transaksi Deposit Reguler"?this.FormData.totalBiaya>=5e5?!0:(u.info("Minimal Transaksi Deposit Reguler 500000"),!1):!0},submitForm(){event.preventDefault(),this.cekTransaksiDepoRegulerValid()&&this.cekTotalBayarValid()&&j(`Lakukan ${this.FormData.jenisTransaksi} ?`,"question","blue","Ya",this.prosesTransaksi)},async TransaksiAktivasi(){try{const a={id_pegawai:this.FormData.pegawai.id_pegawai,id_member:this.FormData.idMember};console.log("data",a);const o=await this.$http.post("/aktivasi",a);console.log("response",o),this.cetakStrukAktivasi(o.data.data,"langsung"),u.success("Transaksi Berhasil")}catch{u.warning("Aktivasi Gagal")}},async DepoReguler(){try{const a={id_pegawai:this.FormData.pegawai.id_pegawai,id_member:this.FormData.idMember,nominal_deposit:this.FormData.nominalTransaksi,id_promo:this.FormData.id_promo},o="/transaksideposituang",n=await this.$http.post(o,a);this.cetakStrukDepoReguler(n.data.data,"langsung"),u.success(n.data.message)}catch{u.warning("Transaksi Deposit Reguler Gagal!")}},async DepoPaket(){try{const a={id_pegawai:this.FormData.pegawai.id_pegawai,id_member:this.FormData.idMember,id_promo:this.FormData.id_promo,id_kelas:this.FormData.kelas.id_kelas,nominal_uang:this.FormData.totalBiaya,nominal_deposit_kelas:this.FormData.nominalTransaksi};console.log(a);const o="/transaksidepositpaket",n=await this.$http.post(o,a);this.cetakStrukDepoPaket(n.data.data,"langsung"),u.success(n.data.message)}catch(a){a.response.data.message!=null||a.response.data.message!=null?u.warning(a.response.data.message):u.warning("Transaksi Deposit Paket Gagal!")}},async prosesTransaksi(){this.FormData.jenisTransaksi=="Transaksi Aktivasi"?(console.log("Proses Aktivasi"),await this.TransaksiAktivasi()):this.FormData.jenisTransaksi=="Transaksi Deposit Reguler"?await this.DepoReguler():this.FormData.jenisTransaksi=="Transaksi Deposit Paket"?(await this.DepoPaket(),console.log("Proses Depo Paket")):console.log("Jenis Transaksi Tidak Ada"),this.getTodayTransaction(),this.FormData.idMember="",this.cleanForm()},async getTodayTransaction(){const a="/transaksihariini",o=await this.$http.get(a);this.dataTodayTransaction=o.data.data},setDataCetakAktivasi(a){console.log("data di fungsi cetka",a);try{this.FormPrint.no_struk_transaksi=a.transaksi_aktivasi.no_struk,this.FormPrint.id_member=a.transaksi_member.id_member,this.FormPrint.id_pegawai=this.FormData.pegawai.id_pegawai,this.FormPrint.tanggal_aktivasi=k.dateTimeSlash(a.transaksi_aktivasi.tanggal_aktivasi,"/"),this.FormPrint.masa_aktif=k.reverseDate(a.transaksi_aktivasi.tanggal_kadeluarsa,"/"),this.FormPrint.nama_member=a.member.nama_member,this.FormPrint.nama_pegawai=this.FormData.pegawai.nama_pegawai,console.log("data",this.FormPrint)}catch(o){console.log(o)}},setDataCetakPaket(a){console.log("data di fungsi cetak paket",a);try{this.FormPrint.id_pegawai=this.FormData.pegawai.id_pegawai,this.FormPrint.nama_pegawai=this.FormData.pegawai.nama_pegawai,this.FormPrint.id_member=a.member.id_member,this.FormPrint.nama_member=a.member.nama_member,this.FormPrint.no_struk_transaksi=a.transaksi_deposit_paket.no_struk_transaksi,this.FormPrint.tanggal_depo_paket=k.dateTimeSlash(a.transaksi_deposit_paket.tanggal_kadeluarsa,"/","T"),this.FormPrint.nominal_uang=a.transaksi_deposit_paket.nominal_uang,this.FormPrint.nominal_deposit_kelas=a.transaksi_deposit_paket.nominal_deposit_kelas,this.FormPrint.tanggal_kadeluarsa_paket=k.reverseDate(a.transaksi_deposit_paket.tanggal_kadeluarsa,"/","T"),this.FormPrint.jenis_kelas=a.kelas.jenis_kelas,this.FormPrint.harga_kelas=a.kelas.harga_kelas,this.FormPrint.harga_total=parseFloat(this.FormPrint.harga_kelas)*parseFloat(this.FormPrint.nominal_deposit_kelas),this.FormPrint.bonus_promo=a.promo.bonus_promo}catch(o){console.log(o)}},setDataCetakReguler(a){console.log("data di fungsi cetak reguler",a);try{this.FormPrint.no_struk_transaksi=a.transaksi_deposit_reguler.no_struk,this.FormPrint.id_member=a.transaksi_member.id_member,this.FormPrint.id_pegawai=this.FormData.pegawai.id_pegawai,this.FormPrint.nama_member=a.member_sebelum.nama_member,this.FormPrint.nama_pegawai=this.FormData.pegawai.nama_pegawai,this.FormPrint.sisa_deposit=a.member_sebelum.sisa_deposit,this.FormPrint.nominal_deposit=a.transaksi_deposit_reguler.sisa_deposit,this.FormPrint.nominal_total=a.transaksi_deposit_reguler.nominal_total,this.FormPrint.bonus_promo=a.promo.bonus_promo,this.FormPrint.tanggal_depo_reguler=k.dateTimeSlash(a.transaksi_deposit_reguler.created_at,"/","T"),console.log("data",this.FormPrint)}catch(o){console.log(o)}},cetakStrukAktivasi(a,o){o=="table"?(this.FormPrint.id_member=a.id_member,this.FormPrint.no_struk_transaksi=a.no_struk_transaksi,this.FormPrint.tanggal_aktivasi=k.dateTimeSlash(a.aktivasi.tanggal_aktivasi,"/"),console.log(this.FormPrint.tanggal_aktivasi),this.FormPrint.nama_member=a.member.nama_member,this.FormPrint.tanggal_struk=a.created_at,this.FormPrint.masa_aktif=a.aktivasi.tanggal_kadeluarsa,this.FormPrint.id_pegawai=a.id_pegawai,this.FormPrint.nama_pegawai=a.pegawai.nama_pegawai):(console.log("masuk di else cetakStrukAktivasi"),this.setDataCetakAktivasi(a)),this.templatePDF("#pdfContent",["250","100"])},cetakStrukDepoReguler(a,o){o=="table"?(console.log(a.deposit_uang),this.FormPrint.id_member=a.id_member,this.FormPrint.no_struk_transaksi=a.no_struk_transaksi,this.FormPrint.nama_member=a.member.nama_member,this.FormPrint.id_pegawai=a.id_pegawai,this.FormPrint.nama_pegawai=a.pegawai.nama_pegawai,this.FormPrint.sisa_deposit=a.deposit_uang.sisa_deposit,this.FormPrint.nominal_deposit=a.deposit_uang.nominal_deposit,this.FormPrint.nominal_total=a.deposit_uang.nominal_total,this.FormPrint.bonus_promo=a.deposit_uang.promo.bonus_promo,this.FormPrint.tanggal_depo_reguler=k.dateTimeSlash(a.deposit_uang.created_at,"/","T"),console.log(this.FormPrint)):this.setDataCetakReguler(a),this.templatePDF("#ContentDepoReguler",["300","100"])},cetakStrukDepoPaket(a,o){console.log(a),o=="table"?(this.FormPrint.id_pegawai=a.id_pegawai,this.FormPrint.nama_pegawai=a.pegawai.nama_pegawai,this.FormPrint.id_member=a.id_member,this.FormPrint.no_struk_transaksi=a.no_struk_transaksi,this.FormPrint.tanggal_depo_paket=k.dateTimeSlash(a.deposit_kelas_paket.created_at,"/","T"),this.FormPrint.nama_member=a.member.nama_member,this.FormPrint.nominal_uang=a.deposit_kelas_paket.nominal_uang,this.FormPrint.nominal_deposit_kelas=a.deposit_kelas_paket.nominal_deposit_kelas,this.FormPrint.tanggal_kadeluarsa_paket=a.deposit_kelas_paket.tanggal_kadeluarsa,this.FormPrint.jenis_kelas=a.deposit_kelas_paket.kelas.jenis_kelas,this.FormPrint.harga_kelas=a.deposit_kelas_paket.kelas.harga_kelas,this.FormPrint.harga_total=parseFloat(this.FormPrint.harga_kelas)*parseFloat(this.FormPrint.nominal_deposit_kelas),this.FormPrint.bonus_promo=a.deposit_kelas_paket.promo.bonus_promo,console.log(this.FormPrint)):this.setDataCetakPaket(a),this.templatePDF("#ContentDepoPaket",["300","100"])},templatePDF(a,o){var n=document.querySelector(a);n.style.display="block",n.style.fontSize="5px",n.style.lineHeight="1.2",n.style.margin="0",n.style.padding="0",new f({orientation:"l",unit:"mm",format:o}).html(n,{callback:function(s){s.save("file.pdf"),n.style.display="none"},x:10,y:10})}},mounted(){this.changeClass(),this.getCurrentDate(),this.getDataPegawai(),this.getAllMember(),this.getAllKelas(),console.log(k),this.getPromo(),this.getTodayTransaction()},computed:{filterDepoUang(){return this.dataTodayTransaction!=null?this.dataTodayTransaction.filter(a=>a.deposit_uang!=null):null},filterAktivasi(){return this.dataTodayTransaction!=null?this.dataTodayTransaction.filter(a=>a.aktivasi!=null):null},filterDepoKelas(){return this.dataTodayTransaction!=null?this.dataTodayTransaction.filter(a=>a.deposit_kelas_paket!=null):null}},watch:{"FormData.idMember":function(a){a.length!=0?this.inputJenisToggle=!1:(this.inputJenisToggle=!0,this.inputKelasToggle=!0,this.inputNominalToggle=!0)},"FormData.jenisTransaksi":function(a){this.cleanForm(),a==="Transaksi Deposit Paket"?(this.FormData.nominalTransaksi=5,this.inputKelasToggle=!1,this.inputNominalToggle=!1,this.prefixQuantity="Jumlah Sesi : "):a==="Transaksi Deposit Reguler"?(this.inputKelasToggle=!0,this.inputNominalToggle=!1,this.prefixQuantity="Rp : "):a==="Transaksi Aktivasi"?(this.FormData.totalBiaya=3e6,this.inputKelasToggle=!0,this.inputNominalToggle=!0):(this.inputKelasToggle=!0,this.inputNominalToggle=!0)},"FormData.nominalTransaksi":function(a){let o="",n=null,p=()=>{n=this.availablePromo(o,a),n!=null?this.FormData.id_promo=this.availablePromo(o,a).id_promo:this.FormData.id_promo=null};this.FormData.jenisTransaksi=="Transaksi Deposit Reguler"?(o="promo_reguler",this.FormData.totalBiaya=this.FormData.nominalTransaksi,p()):this.FormData.jenisTransaksi=="Transaksi Deposit Paket"&&(o="promo_paket",p())},"FormData.totalBayar":function(){this.countKembalian()},FormData:{handler(a){a.jenisTransaksi=="Transaksi Deposit Paket"&&(a.kelas!=null&&a.nominalTransaksi.length!=0?(console.log("disini woy"),this.FormData.totalBiaya=a.kelas.harga_kelas*a.nominalTransaksi):this.FormData.totalBiaya=0),a.idMember.length!=0&&(a.totalBiaya!=0||a.totalBiaya==null)?this.bayarButtonToggle=!1:this.bayarButtonToggle=!0},deep:!0}},components:{HomeNavbar:w}},i=a=>(R("data-v-503dc274"),a=a(),C(),a),A={class:""},N={class:"pegawai-mo p-5"},V={class:"bg-white text-dark p-4 border rounded"},U=M('<div class="row align-items-start" data-v-503dc274><h2 data-v-503dc274>Transaksi </h2><div class="price-list col" data-v-503dc274><p data-v-503dc274><strong data-v-503dc274>Daftar Harga</strong></p><ol data-v-503dc274><li data-v-503dc274>Aktivasi : Rp 3.000.000</li><li data-v-503dc274>Kelas : Rp 150.000/sesi hingga - Rp 200.000/sesi</li></ol></div><div class="promo-list col" data-v-503dc274><p data-v-503dc274><strong data-v-503dc274>Promo Deposit Reguler</strong></p><ol data-v-503dc274><li data-v-503dc274>Setiap pembelian deposit reguler Rp 3.000.000 dapatkan bonus deposit reguler Rp 300.000</li></ol></div><div class="col" data-v-503dc274><p data-v-503dc274><strong data-v-503dc274>Promo Deposit Paket</strong></p><ol data-v-503dc274><li data-v-503dc274>Setiap pembelian deposit kelas paket 5 dapatkan bonus 1 kelas (masa aktif 1 bulan)</li><li data-v-503dc274>Setiap pembelian deposit kelas paket 10 dapatkan bonus 3 kelas (masa aktif 3 bulan)</li></ol></div></div><hr data-v-503dc274>',2),J={class:"row align-items-start"},I=i(()=>t("h4",null,"Menu Transaksi",-1)),G={class:"col"},H={class:"col-md-11 m-3"},L=i(()=>t("label",{for:"tanggal-transaksi",class:"form-label"},"Tanggal Transaksi",-1)),Y={class:"col-md-11 m-3"},q=i(()=>t("label",{for:"no-transaksi",class:"form-label"},"Kasir",-1)),Q=["value"],E={class:"col-md-11 m-3"},O=i(()=>t("label",{for:"exampleDataList",class:"form-label"},"ID Member",-1)),z={id:"datalistOptions"},W=["value"],X={class:"m-3"},Z=i(()=>t("h4",null,"Ringkasan Transaksi",-1)),$={class:"row"},tt=i(()=>t("div",{class:"col-md-4"},[t("p",null,"Member"),t("p",null,"Jenis Transaksi"),t("p",null,"Total Biaya")],-1)),at=i(()=>t("div",{class:"col-md-1"},[t("p",null,":"),t("p",null,":"),t("p",null,":")],-1)),st={class:"col"},et={class:"col"},it={class:"col-md-11 m-3"},lt=i(()=>t("label",{class:"form-label"},"Jenis Transaksi",-1)),ot=["disabled"],nt=i(()=>t("option",{value:"null"},"Pilih Transaksi",-1)),rt=["value"],mt={class:"row"},_t={class:"col-md-5 m-3"},dt=i(()=>t("label",{for:"no-transaksi",class:"form-label"},"Nominal Transaksi",-1)),ut={class:"input-group"},pt={class:"input-group-prepend"},kt={class:"input-group-text"},gt=["disabled"],ht=["disabled"],ct=i(()=>t("option",{value:5},"5",-1)),bt=i(()=>t("option",{value:10},"10",-1)),Ft=[ct,bt],Tt={class:"col-md-5 m-3"},Pt=i(()=>t("label",{for:"no-transaksi",class:"form-label"},"Pilihan Kelas",-1)),Dt=["disabled"],vt=i(()=>t("option",{value:"null"},"Pilih Kelas",-1)),yt=["value"],ft={class:"col-md-11 m-3"},wt=i(()=>t("label",{for:"promo",class:"form-label"},"Promo",-1)),St=i(()=>t("option",{value:"null"},"Pilih Promo",-1)),Bt=["value"],xt={class:"col-md-11 m-3"},Mt=i(()=>t("label",{for:"no-transaksi",class:"form-label"},"Total Biaya",-1)),Rt={class:"input-group"},Ct=i(()=>t("div",{class:"input-group-prepend"},[t("span",{class:"input-group-text"},"Rp")],-1)),jt={class:"col-md-11 m-3"},Kt=i(()=>t("label",{for:"total-bayar",class:"form-label"},"Total Bayar",-1)),At={class:"col-md-11 m-3"},Nt=i(()=>t("label",{for:"no-transaksi",class:"form-label"},"Kembalian",-1)),Vt={class:"row"},Ut=i(()=>t("div",{class:"col-md-8"},null,-1)),Jt={class:"col"},It=i(()=>t("button",{class:"btn btn-danger m-2",type:"button"},"Cancel",-1)),Gt=["disabled"],Ht=i(()=>t("option",{value:"aktivasi"},"aktivasi",-1)),Lt=i(()=>t("option",{value:"uang"},"deposit reguler",-1)),Yt=i(()=>t("option",{value:"kelas"},"deposit paket",-1)),qt=[Ht,Lt,Yt],Qt={class:"mt-3 p-4 border rounded text-dark bg-white"},Et=i(()=>t("h3",null,"Transaksi Hari ini",-1)),Ot={key:0,id:"example",class:"#example table table-striped filters"},zt=i(()=>t("thead",null,[t("tr",null,[t("th",null,"No Struk"),t("th",null,"Jenis Transaksi"),t("th",null,"Pegawai"),t("th",null,"Member"),t("th",null,"Tanggal Aktivasi"),t("th",null,"Tanggal Kadeluarsa"),t("th",null,"Aksi")])],-1)),Wt=["onClick"],Xt={key:1,id:"example",class:"#example table table-striped filters"},Zt=i(()=>t("thead",null,[t("tr",null,[t("th",null,"No Struk"),t("th",null,"Jenis Transaksi"),t("th",null,"Pegawai"),t("th",null,"Member"),t("th",null,"Waktu Deposit"),t("th",null,"Nominal Deposit"),t("th",null,"Promo"),t("th",null,"Saldo(New)")])],-1)),$t=["onClick"],ta={key:2,id:"example",class:"#example table table-striped filters"},aa=i(()=>t("thead",null,[t("tr",null,[t("th",null,"No Struk"),t("th",null,"Jenis Transaksi"),t("th",null,"Pegawai"),t("th",null,"Member"),t("th",null,"Tanggal Deposit"),t("th",null,"Nominal Uang"),t("th",null,"Kuota Sesi(Kelas)"),t("th",null,"Promo"),t("th",null,"Aksi")])],-1)),sa=["onClick"],ea={width:"600px",id:"pdfContent",style:{display:"none"},class:"text-dark"},ia={style:{border:"1px solid black"}},la=i(()=>t("td",{style:{width:"65%"}},[t("p",null,[t("strong",null,"GoFit")]),t("p",null,"Jl. Centralpark No. 10 Yogyakarta")],-1)),oa=i(()=>t("td",null,[t("p",null,"No Struk")],-1)),na=i(()=>t("td",null,":",-1)),ra=i(()=>t("td",null,[t("p",null,"Tanggal")],-1)),ma=i(()=>t("td",null,[t("p",null,":")],-1)),_a=i(()=>t("tr",{style:{height:"1mm"}},null,-1)),da=i(()=>t("td",{style:{width:"50%"}},[t("strong",null,"Member")],-1)),ua=i(()=>t("td",null,[t("strong",null,":")],-1)),pa=i(()=>t("tr",null,[t("td",null,"Aktivasi Tahunan"),t("td",null,":"),t("td",null,"Rp.3000.000,-")],-1)),ka=i(()=>t("td",null,"Masa Aktif Member",-1)),ga=i(()=>t("td",null,":",-1)),ha=i(()=>t("td",null,null,-1)),ca={width:"600px",id:"ContentDepoReguler",style:{display:"none"},class:"text-dark"},ba={width:"600px",class:"p-1"},Fa={class:"border border-dark"},Ta=i(()=>t("td",{style:{width:"50%"}},[t("strong",null,"Gofit")],-1)),Pa=i(()=>t("td",null,[t("p",null,"Jl Centralpark No 10 Yogyakarta")],-1)),Da=i(()=>t("tr",null,null,-1)),va={style:{width:"80%"}},ya=i(()=>t("td",null,[t("strong",null,"Member")],-1)),fa=i(()=>t("td",null,":",-1)),wa=i(()=>t("td",null,"Nominal Deposit",-1)),Sa=i(()=>t("td",null,":",-1)),Ba=i(()=>t("td",null,"Bonus Deposit",-1)),xa=i(()=>t("td",null,":",-1)),Ma=i(()=>t("td",null,"Sisa Deposit",-1)),Ra=i(()=>t("td",null,":",-1)),Ca=i(()=>t("td",null,"Total Deposit",-1)),ja=i(()=>t("td",null,":",-1)),Ka=i(()=>t("td",null,null,-1)),Aa={width:"600px",id:"ContentDepoPaket",style:{display:"none"},class:"text-dark"},Na={width:"600px",class:"p-1"},Va={class:"border border-dark"},Ua=i(()=>t("td",{style:{width:"50%"}},[t("strong",null,"Gofit")],-1)),Ja=i(()=>t("td",null,[t("p",null,"Jl Centralpark No 10 Yogyakarta")],-1)),Ia=i(()=>t("tr",null,null,-1)),Ga={style:{width:"80%"}},Ha=i(()=>t("td",null,[t("strong",null,"Member")],-1)),La=i(()=>t("td",null,":",-1)),Ya=i(()=>t("td",null,":",-1)),qa=i(()=>t("td",null,"Jenis Kelas",-1)),Qa=i(()=>t("td",null,":",-1)),Ea=i(()=>t("td",null,":",-1)),Oa=i(()=>t("td",null,"Masa Berlaku sampai dengan",-1)),za=i(()=>t("td",null,":",-1)),Wa=i(()=>t("td",null,null,-1));function Xa(a,o,n,p,s,h){const D=S("home-navbar");return r(),m(g,null,[t("header",null,[B(D,{message:"Transaksi Member"})]),t("main",A,[t("div",N,[t("div",V,[U,t("form",{onSubmit:o[11]||(o[11]=x(e=>h.submitForm(e),["prevent"]))},[t("div",J,[I,t("div",G,[t("div",H,[L,d(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>s.FormData.tanggalTransaksi=e),class:"form-control",id:"tanggal-transaksi",disabled:""},null,512),[[c,s.FormData.tanggalTransaksi]])]),t("div",Y,[q,t("input",{type:"text",value:s.FormData.pegawai.id_pegawai+" - "+s.FormData.pegawai.nama_pegawai,class:"form-control",disabled:""},null,8,Q)]),t("div",E,[O,d(t("input",{class:"form-control",list:"datalistOptions",id:"exampleDataList","onUpdate:modelValue":o[1]||(o[1]=e=>s.FormData.idMember=e),placeholder:"Ketik untuk mencari id member"},null,512),[[c,s.FormData.idMember]]),t("datalist",z,[(r(!0),m(g,null,b(s.allMember,(e,_)=>(r(),m("option",{key:_,value:e.id_member},l(e.id_member+" - "+e.nama_member),9,W))),128))])]),t("div",X,[Z,t("div",$,[tt,at,t("div",st,[t("p",null,l(s.FormData.idMember),1),t("p",null,l(s.FormData.jenisTransaksi),1),t("p",null,l(s.FormData.totalBiaya),1)])])])]),t("div",et,[t("div",it,[lt,d(t("select",{class:"form-select","onUpdate:modelValue":o[2]||(o[2]=e=>s.FormData.jenisTransaksi=e),disabled:s.inputJenisToggle},[nt,(r(!0),m(g,null,b(s.jenisTransaksi,(e,_)=>(r(),m("option",{key:_,value:e},l(e),9,rt))),128))],8,ot),[[F,s.FormData.jenisTransaksi]])]),t("div",mt,[t("div",_t,[dt,t("div",ut,[t("div",pt,[t("span",kt,l(s.prefixQuantity),1)]),s.FormData.jenisTransaksi=="Transaksi Deposit Reguler"?d((r(),m("input",{key:0,type:"text",class:"form-control","onUpdate:modelValue":o[3]||(o[3]=e=>s.FormData.nominalTransaksi=e),id:"no-transaksi",disabled:s.inputNominalToggle},null,8,gt)),[[c,s.FormData.nominalTransaksi]]):s.FormData.jenisTransaksi=="Transaksi Deposit Paket"?d((r(),m("select",{key:1,class:"form-control","onUpdate:modelValue":o[4]||(o[4]=e=>s.FormData.nominalTransaksi=e),id:"no-transaksi",disabled:s.inputNominalToggle},Ft,8,ht)),[[F,s.FormData.nominalTransaksi]]):d((r(),m("input",{key:2,type:"text",class:"form-control","onUpdate:modelValue":o[5]||(o[5]=e=>s.FormData.totalBiaya=e),id:"no-transaksi",disabled:""},null,512)),[[c,s.FormData.totalBiaya]])])]),t("div",Tt,[Pt,d(t("select",{class:"form-select","onUpdate:modelValue":o[6]||(o[6]=e=>s.FormData.kelas=e),disabled:s.inputKelasToggle},[vt,(r(!0),m(g,null,b(s.allKelas,(e,_)=>(r(),m("option",{key:_,value:e},l(e.jenis_kelas),9,yt))),128))],8,Dt),[[F,s.FormData.kelas]])])]),t("div",ft,[wt,d(t("select",{class:"form-select","onUpdate:modelValue":o[7]||(o[7]=e=>s.FormData.id_promo=e),disabled:""},[St,(r(!0),m(g,null,b(s.promos,(e,_)=>(r(),m("option",{key:_,value:e.id_promo},l(e.jenis_promo==="promo_reguler"?e.nama_promo+` (Bonus ${e.bonus_promo})`:e.nama_promo+` (Bonus ${e.bonus_promo} sesi, masa berlaku ${e.masa_berlaku} bulan)`),9,Bt))),128))],512),[[F,s.FormData.id_promo]])]),t("div",xt,[Mt,t("div",Rt,[Ct,d(t("input",{type:"text","onUpdate:modelValue":o[8]||(o[8]=e=>s.FormData.totalBiaya=e),class:"form-control",id:"no-transaksi",disabled:""},null,512),[[c,s.FormData.totalBiaya]])])]),t("div",jt,[Kt,d(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[9]||(o[9]=e=>s.FormData.totalBayar=e),id:"total-bayar"},null,512),[[c,s.FormData.totalBayar]])]),t("div",At,[Nt,d(t("input",{type:"text",class:"form-control","onUpdate:modelValue":o[10]||(o[10]=e=>s.FormData.kembalian=e),id:"no-transaksi",disabled:""},null,512),[[c,s.FormData.kembalian]])]),t("div",Vt,[Ut,t("div",Jt,[It,t("button",{class:"btn btn-primary m-2",disabled:s.bayarButtonToggle},"Bayar",8,Gt)])])])])],32)]),d(t("select",{class:"btn btn-primary mt-3","onUpdate:modelValue":o[12]||(o[12]=e=>s.showToggle=e)},qt,512),[[F,s.showToggle]]),t("div",Qt,[Et,s.showToggle=="aktivasi"?(r(),m("table",Ot,[zt,t("tbody",null,[(r(!0),m(g,null,b(h.filterAktivasi,(e,_)=>(r(),m("tr",{key:_},[t("td",null,l(e.no_struk_transaksi),1),t("td",null,l(e.jenis_transaksi),1),t("td",null,l(e.id_pegawai),1),t("td",null,l(e.id_member),1),t("td",null,l(e.aktivasi.tanggal_aktivasi!=null?e.aktivasi.tanggal_aktivasi.split(" ")[0]:""),1),t("td",null,l(e.aktivasi.tanggal_kadeluarsa!=null?e.aktivasi.tanggal_kadeluarsa.split(" ")[0]:" "),1),t("td",null,[t("button",{class:"btn btn-primary",onClick:P=>h.cetakStrukAktivasi(e,"table")},"Cetak Struk",8,Wt)])]))),128))])])):T("",!0),s.showToggle=="uang"?(r(),m("table",Xt,[Zt,t("tbody",null,[(r(!0),m(g,null,b(h.filterDepoUang,(e,_)=>(r(),m("tr",{key:_},[t("td",null,l(e.no_struk_transaksi),1),t("td",null,l(e.jenis_transaksi),1),t("td",null,l(e.id_pegawai),1),t("td",null,l(e.id_member),1),t("td",null,l(e.deposit_uang.tanggal_deposit),1),t("td",null,l(e.deposit_uang.nominal_deposit),1),t("td",null,l(e.deposit_uang.promo.nama_promo),1),t("td",null,[t("button",{class:"btn btn-primary",onClick:P=>h.cetakStrukDepoReguler(e)},"Cetak Struk",8,$t)])]))),128))])])):T("",!0),s.showToggle=="kelas"?(r(),m("table",ta,[aa,t("tbody",null,[(r(!0),m(g,null,b(h.filterDepoKelas,(e,_)=>(r(),m("tr",{key:_},[t("td",null,l(e.no_struk_transaksi),1),t("td",null,l(e.jenis_transaksi),1),t("td",null,l(e.id_pegawai),1),t("td",null,l(e.id_member),1),t("td",null,l(e.deposit_kelas_paket.tanggal_deposit),1),t("td",null,l(e.deposit_kelas_paket.nominal_uang),1),t("td",null,l(e.deposit_kelas_paket.nominal_deposit_kelas)+" ("+l(e.deposit_kelas_paket.kelas.jenis_kelas)+" )",1),t("td",null,"+"+l(e.deposit_kelas_paket.promo.bonus_promo)+" ("+l(e.deposit_kelas_paket.promo.nama_promo)+")",1),t("td",null,[t("button",{class:"btn btn-primary",onClick:P=>h.cetakStrukDepoPaket(e,"table")},"Cetak Struk",8,sa)])]))),128))])])):T("",!0)])]),t("div",ea,[t("table",ia,[t("tr",null,[la,t("td",null,[t("tr",null,[oa,na,t("td",null,l(s.FormPrint.no_struk_transaksi),1)]),t("tr",null,[ra,ma,t("td",null,l(s.FormPrint.tanggal_aktivasi),1)])])]),_a,t("tr",null,[t("table",null,[t("tr",null,[da,ua,t("td",null,l(s.FormPrint.id_member)+" / "+l(s.FormPrint.nama_member),1)]),pa,t("tr",null,[ka,ga,t("td",null,l(s.FormPrint.masa_aktif),1)])])]),t("tr",null,[ha,t("td",null,[t("tr",null,"Kasir : "+l(s.FormPrint.id_pegawai)+" / "+l(s.FormPrint.nama_pegawai),1)])])])]),t("div",ca,[t("div",ba,[t("table",Fa,[t("tr",null,[Ta,t("td",null," No Struk : "+l(s.FormPrint.no_struk_transaksi),1)]),Pa,t("td",null," Tanggal : "+l(s.FormPrint.tanggal_depo_reguler),1),Da,t("tr",null,[t("td",null,[t("table",null,[t("tr",va,[ya,fa,t("td",null,l(s.FormPrint.id_member)+"/"+l(s.FormPrint.nama_member),1)]),t("tr",null,[wa,Sa,t("td",null,"Rp. "+l(s.FormPrint.nominal_deposit),1)]),t("tr",null,[Ba,xa,t("td",null,"Rp. "+l(s.FormPrint.bonus_promo),1)]),t("tr",null,[Ma,Ra,t("td",null,"Rp. "+l(s.FormPrint.nominal_total),1)]),t("tr",null,[Ca,ja,t("td",null,l(s.FormPrint.nominal_total),1)])])])]),t("tr",null,[Ka,t("td",null,"Kasir : "+l(s.FormPrint.id_pegawai)+" / "+l(s.FormPrint.nama_pegawai),1)])])])]),t("div",Aa,[t("div",Na,[t("table",Va,[t("tr",null,[Ua,t("td",null," No Struk : "+l(s.FormPrint.no_struk_transaksi),1)]),Ja,t("td",null,"Tanggal : "+l(s.FormPrint.tanggal_depo_paket),1),Ia,t("tr",null,[t("td",null,[t("table",null,[t("tr",Ga,[Ha,La,t("td",null,l(s.FormPrint.id_member)+"/"+l(s.FormPrint.nama_member),1)]),t("tr",null,[t("td",null," Deposit Bayar ("+l(s.FormPrint.nominal_deposit_kelas)+" gratis "+l(s.FormPrint.bonus_promo)+")",1),Ya,t("td",null,"Rp."+l(s.FormPrint.nominal_uang),1)]),t("tr",null,[qa,Qa,t("td",null,l(s.FormPrint.jenis_kelas),1)]),t("tr",null,[t("td",null,"Total Deposit "+l(s.FormPrint.jenis_kelas),1),Ea,t("td",null,l(parseInt(s.FormPrint.nominal_deposit_kelas)+parseInt(s.FormPrint.bonus_promo)),1)]),t("tr",null,[Oa,za,t("td",null,l(s.FormPrint.tanggal_kadeluarsa_paket),1)])])])]),t("tr",null,[Wa,t("td",null,"Kasir : "+l(s.FormPrint.id_pegawai)+" / "+l(s.FormPrint.nama_pegawai),1)])])])])])],64)}const os=v(K,[["render",Xa],["__scopeId","data-v-503dc274"]]);export{os as default};
