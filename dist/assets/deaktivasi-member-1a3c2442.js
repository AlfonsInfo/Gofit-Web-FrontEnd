import{_ as g,d as k,r as m,o as i,c as l,a as t,b as h,F as p,q as y,H as x,B as I,u as D,g as w,$ as b,t as r,p as M,n as B}from"./index-b7f4b6dc.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const T=k({components:{HomeNavbar:x,BackButton:I},data(){return{router:D(),members:w([]),countInit:0}},methods:{DataTablesFeatures(){$(document).ready(function(){$("#example thead tr").clone(!0).addClass("filters").appendTo("#example thead"),$("#example").DataTable({columnDefs:[{width:"10%",targets:0},{width:"10%",targets:1},{width:"10%",targets:2}],orderCellsTop:!0,fixedHeader:!0,initComplete:function(){var e=this.api();e.columns([0,1,2,3]).eq(0).each(function(a){var s=$(".filters th").eq($(e.column(a).header()).index()),u=$(s).text();$(s).html('<input type="text" placeholder="'+u+'" />'),$("input",$(".filters th").eq($(e.column(a).header()).index())).off("keyup change").on("change",function(o){$(this).attr("title",$(this).val());var d="({search})";this.selectionStart,e.column(a).search(this.value!=""?d.replace("{search}","((("+this.value+")))"):"",this.value!="",this.value=="").draw()}).on("keyup",function(o){o.stopPropagation(),$(this).trigger("change"),$(this).focus()[0].setSelectionRange(cursorPosition,cursorPosition)})})}})})},async getAllMemberKadeluarsa(e){const a="http://localhost:8000/api/showmemberdeaktif",s=await this.$http.get(a);this.members=s.data.data,console.log(this.members),this.countInit==0&&(this.DataTablesFeatures(),this.countInit++,b.success(e))},async deaktivasi(e){const a="http://localhost:8000/api/deaktivasimember",s=await this.$http.get(a);this.members=s.data.data,console.log(this.members),this.countInit==0&&(this.DataTablesFeatures(),this.countInit++,b.success(e))}},mounted(){this.getAllMemberKadeluarsa("Berhasil Mengambil Data Ijin Instruktur")}}),c=e=>(M("data-v-790ebca8"),e=e(),B(),e),q={class:"text-dark table-custom mt-5 ms-5 me-5 p-2 d-inline-block"},C={class:"content bg-white text-dark table-custom m-5 mt-2"},S={class:"container-fluid p-4"},F=c(()=>t("h3",null,"Member Kadeluarsa",-1)),N={id:"example",class:"#example table table-striped filters",style:{width:"100%"}},K=c(()=>t("thead",null,[t("tr",null,[t("th",null,"ID Ijin"),t("th",null,"Nama Member"),t("th",null,"Tanggal Kadeluarsa")])],-1)),H=c(()=>t("td",null,null,-1)),P={class:"row"};function j(e,a,s,u,o,d){const _=m("home-navbar"),v=m("back-button");return i(),l(p,null,[t("header",null,[h(_,{message:"Gofit - Deaktivasi Member"})]),t("main",null,[t("div",q,[t("button",{class:"btn btn-primary",onClick:a[0]||(a[0]=(...n)=>e.deaktivasi&&e.deaktivasi(...n))},"Deaktivasi Member")]),t("div",C,[t("div",S,[F,t("table",N,[K,t("tbody",null,[(i(!0),l(p,null,y(e.members,(n,f)=>(i(),l("tr",{key:f},[t("td",null,r(n.id_member),1),t("td",null,r(n.nama_member),1),t("td",null,r(n.tgl_kadeluarsa_aktivasi),1),H]))),128))])]),t("div",P,[h(v,{class:"col-md-3",className:"btn btn-dark"})])])])])],64)}const J=g(T,[["render",j],["__scopeId","data-v-790ebca8"]]);export{J as default};