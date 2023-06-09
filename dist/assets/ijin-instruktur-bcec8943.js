import{_ as x,d as C,r as g,o as r,c as l,a as t,b as d,F as h,q as f,H as B,B as P,u as w,g as b,$ as m,t as i,x as j,p as T,n as D}from"./index-b7f4b6dc.js";import{c as I}from"./function-2d16a083.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const q=C({components:{HomeNavbar:B,BackButton:P},data(){return{router:w(),ijininstrukturforconfirm:b([]),ijinInstruktur:b([]),countInit:0,countInit2:0}},methods:{DataTablesFeatures(){$(document).ready(function(){$("#example thead tr").clone(!0).addClass("filters").appendTo("#example thead"),$("#example").DataTable({columnDefs:[{width:"10%",targets:0},{width:"10%",targets:1},{width:"10%",targets:2}],orderCellsTop:!0,fixedHeader:!0,initComplete:function(){var n=this.api();n.columns([0,1,2,3]).eq(0).each(function(a){var s=$(".filters th").eq($(n.column(a).header()).index()),p=$(s).text();$(s).html('<input type="text" placeholder="'+p+'" />'),$("input",$(".filters th").eq($(n.column(a).header()).index())).off("keyup change").on("change",function(o){$(this).attr("title",$(this).val());var _="({search})";this.selectionStart,n.column(a).search(this.value!=""?_.replace("{search}","((("+this.value+")))"):"",this.value!="",this.value=="").draw()}).on("keyup",function(o){o.stopPropagation(),$(this).trigger("change"),$(this).focus()[0].setSelectionRange(cursorPosition,cursorPosition)})})}})})},TableAll(){$(document).ready(function(){$("#example2 thead tr").clone(!0).addClass("filters"),$("#example2").DataTable({columnDefs:[{width:"10%",targets:0},{width:"10%",targets:1},{width:"10%",targets:2}],orderCellsTop:!0,fixedHeader:!0,initComplete:function(){}})})},confirm(n){I("Yakin ingin mengijinkan instruktur ? ","question","blue","Yakin",this.confirmPermit,n)},deny(n){I("Yakin ingin menolak perijinan instruktur ? ","question","blue","Yakin",this.denyPermit,n)},async confirmPermit(n){console.log(n);const a=`/ijininstruktur/${n}`,s=await this.$http.put(a,{status_ijin:"Perijinan dikonfirmasi"});m.success("Berhasil Konfirmasi Ijin Instruktur"),this.getBeforeConfirm(),console.log(s)},async denyPermit(n){console.log(n);const a=`/ijininstruktur/${n}`,s=await this.$http.put(a,{status_ijin:"Perijinan ditolak"});m.success("Berhasil Konfirmasi Ijin Instruktur"),this.getBeforeConfirm(),console.log(s)},async getBeforeConfirm(n){const a="http://localhost:8000/api/ijininstrukturforconfirm",s=await this.$http.get(a);this.ijininstrukturforconfirm=s.data.data,this.countInit==0&&(this.DataTablesFeatures(),this.countInit++,m.success(n))},async getAllPermit(){const n="http://localhost:8000/api/ijininstruktur",a=await this.$http.get(n);this.ijinInstruktur=a.data.data,this.countInit2==0&&(this.TableAll(),this.countInit2++)}},mounted(){this.getBeforeConfirm("Berhasil Mengambil Data Ijin Instruktur"),this.getAllPermit()}}),u=n=>(T("data-v-6163b27d"),n=n(),D(),n),S=u(()=>t("div",{class:"text-dark table-custom mt-5 ms-5 me-5 p-2 d-inline-block"},null,-1)),H={class:"content bg-white text-dark table-custom m-5 mt-2"},N={class:"container-fluid p-4"},A=u(()=>t("h3",null,"Tabel Data Ijin Instruktur Belum Dikonfirmasi",-1)),F={id:"example",class:"#example table table-striped filters",style:{width:"100%"}},Y=u(()=>t("thead",null,[t("tr",null,[t("th",null,"Tanggal Pengajuan"),t("th",null,"Jadwal Harian"),t("th",null,"Instruktur Ijin"),t("th",null,"Instruktur Pengganti"),t("th",null,"Status Ijin"),t("th",null,"Aksi")])],-1)),V=["onClick"],J=["onClick"],K={class:"row"},R={class:"content bg-white text-dark table-custom m-5 mt-2"},E={class:"container-fluid p-4"},G=u(()=>t("h3",null,"Tabel Data Ijin",-1)),L={id:"example2",class:"#example2 table table-striped filters",style:{width:"100%"}},M=u(()=>t("thead",null,[t("tr",null,[t("th",null,"Tanggal Pengajuan"),t("th",null,"Jadwal Harian"),t("th",null,"Instruktur Ijin"),t("th",null,"Instruktur Pengganti"),t("th",null,"Status Ijin")])],-1)),O={class:"row"};function z(n,a,s,p,o,_){const v=g("home-navbar"),k=g("back-button");return r(),l(h,null,[t("header",null,[d(v,{message:"Gofit - Olah Ijin Instruktur"})]),t("main",null,[S,t("div",H,[t("div",N,[A,t("table",F,[Y,t("tbody",null,[(r(!0),l(h,null,f(n.ijininstrukturforconfirm,(e,c)=>(r(),l("tr",{key:c},[t("td",null,i(e.tanggal_pengajuan),1),t("td",null,i(e.jadwal_harian.tanggal_jadwal_harian),1),t("td",null,i(e.instruktur.nama_instruktur),1),t("td",null,i(e.instruktur_pengganti.nama_instruktur),1),t("td",null,i(e.status_ijin),1),t("td",null,[e.status_ijin=="Belum dikonfirmasi"?(r(),l("button",{key:0,onClick:y=>n.confirm(e.id_ijin),class:"btn btn-success mx-2"},"👍",8,V)):j("",!0),e.status_ijin=="Belum dikonfirmasi"?(r(),l("button",{key:1,onClick:y=>n.deny(e.id_ijin),class:"btn btn-danger"},"🙅‍♂️",8,J)):j("",!0)])]))),128))])]),t("div",K,[d(k,{class:"col-md-3",className:"btn btn-dark"})])])]),t("div",R,[t("div",E,[G,t("table",L,[M,t("tbody",null,[(r(!0),l(h,null,f(n.ijinInstruktur,(e,c)=>(r(),l("tr",{key:c},[t("td",null,i(e.tanggal_pengajuan),1),t("td",null,i(e.jadwal_harian.tanggal_jadwal_harian),1),t("td",null,i(e.instruktur.nama_instruktur),1),t("td",null,i(e.instruktur_pengganti.nama_instruktur),1),t("td",null,i(e.status_ijin),1)]))),128))])]),t("div",O,[d(k,{class:"col-md-3",className:"btn btn-dark"})])])])])],64)}const at=x(q,[["render",z],["__scopeId","data-v-6163b27d"]]);export{at as default};
