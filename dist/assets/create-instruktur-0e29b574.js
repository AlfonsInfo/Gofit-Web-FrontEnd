import{_ as v,d as w,r as k,o as y,c as I,a as t,b as h,l as B,w as u,v as l,F as V,H as x,B as N,$ as e,i as T,u as H,h as S,p as U,n as $,k as D}from"./index-b7f4b6dc.js";import{c as F}from"./function-2d16a083.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const C=w({components:{HomeNavbar:x,BackButton:N},data(){return{backButtonPressed:!1}},methods:{goBack(){e&&e.close(),this.backButtonPressed=!0}},mounted(){window.onpopstate=()=>{this.goBack()}},setup(){const a=T("$http"),n=H(),m=S({nama_instruktur:"",tanggal_lahir_instruktur:"",alamat_instruktur:"",no_telp_instruktur:"",username:"",password:""}),p=o=>{console.log(o),o.preventDefault(),F("Yakin ingin menambah data instruktur ? ","question","blue","Yakin",c)};function _({nama_instruktur:o,tanggal_lahir_instruktur:d,alamat_instruktur:r,no_telp_instruktur:f,username:b,password:g}){let i=!0;return o||(e.warning("Nama instruktur harus diisi"),i=!1),d||(e.warning("Tanggal lahir instruktur harus diisi"),i=!1),r||(e.warning("Alamat instruktur harus diisi"),i=!1),f||(e.warning("No telp instruktur harus diisi"),i=!1),b||(e.warning("username harus diisi"),i=!1),g||(e.warning("username harus diisi"),i=!1),i}const c=async()=>{if(_(m))try{const d="/instruktur",r=await a.post(d,m);e.success(r.data.message),n.push({name:"instruktur"})}catch{e.warning("Gagal Menambahkan Data")}};return{router:n,instruktur:m,storeInstruktur:c,submitForm:p}}}),s=a=>(U("data-v-4cdd4abf"),a=a(),$(),a),A={class:"content text-white p-5"},M=s(()=>t("h2",null,"Tambah Instruktur",-1)),P={class:"container-fluid form-custom p-4 text-dark"},Y=s(()=>t("h3",{class:"title"},[D("Tambah Data Instruktur "),t("span",{class:"mdi mdi-account-plus"})],-1)),j=s(()=>t("hr",null,null,-1)),q={class:"mb-3"},G=s(()=>t("label",{for:"nama_member",class:"form-label"},"Nama Instruktur",-1)),L=s(()=>t("div",{id:"namaHelp",class:"form-text"},"ex : Ucup Surucup",-1)),E={class:"mb-3"},R=s(()=>t("label",{class:"form-label",for:"birthday"},"Tanggal Lahir instruktur",-1)),z=s(()=>t("div",{id:"tglLahirHelp",class:"form-text"},"Format yang digunakan : mm/dd/yyyy",-1)),J={class:"mb-3"},K=s(()=>t("label",{for:"alamat",class:"form-label"},"Alamat Instruktur",-1)),O=s(()=>t("div",{id:"alamat",class:"form-text"},"ex : Babarsari No 43 Yogyakarta",-1)),Q={class:"mb-3"},W=s(()=>t("label",{for:"notelp",class:"form-label"},"No Telp instruktur",-1)),X=s(()=>t("div",{id:"notelp",class:"form-text"},"ex : 08123456789",-1)),Z=s(()=>t("hr",null,null,-1)),tt=s(()=>t("h5",null,"Akun",-1)),st={class:"mb-3"},at=s(()=>t("label",{for:"username",class:"form-label"},"username",-1)),nt=s(()=>t("div",{id:"usernameHelp",class:"form-text"},"ex : ucup1",-1)),rt=s(()=>t("hr",null,null,-1)),et={class:"mb-3"},ot=s(()=>t("label",{for:"password",class:"form-label"},"Password Instruktur",-1)),it=s(()=>t("div",{id:"passwordHelp",class:"form-text"},"ex : 08123456789",-1)),ut=s(()=>t("hr",null,null,-1)),lt={class:"d-flex justify-content-between"},dt=s(()=>t("button",{type:"submit",class:"btn btn-primary"},"Submit",-1)),mt=s(()=>t("hr",null,null,-1));function ct(a,n,m,p,_,c){const o=k("home-navbar"),d=k("back-button");return y(),I(V,null,[t("header",null,[h(o,{message:"Gofit -  Tambah Data Instruktur"})]),t("main",null,[t("div",A,[M,t("div",P,[Y,j,t("form",{onSubmit:n[6]||(n[6]=B(r=>a.submitForm(r),["prevent"]))},[t("div",q,[G,u(t("input",{type:"teal","onUpdate:modelValue":n[0]||(n[0]=r=>a.instruktur.nama_instruktur=r),class:"form-control",id:"nama_instruktur","aria-describedby":"emailHelp"},null,512),[[l,a.instruktur.nama_instruktur]]),L]),t("div",E,[R,u(t("input",{class:"form-text","onUpdate:modelValue":n[1]||(n[1]=r=>a.instruktur.tanggal_lahir_instruktur=r),type:"date",id:"birthday"},null,512),[[l,a.instruktur.tanggal_lahir_instruktur]]),z]),t("div",J,[K,u(t("input",{type:"text","onUpdate:modelValue":n[2]||(n[2]=r=>a.instruktur.alamat_instruktur=r),class:"form-control",id:"alamat"},null,512),[[l,a.instruktur.alamat_instruktur]]),O]),t("div",Q,[W,u(t("input",{type:"text","onUpdate:modelValue":n[3]||(n[3]=r=>a.instruktur.no_telp_instruktur=r),class:"form-control",id:"notelp"},null,512),[[l,a.instruktur.no_telp_instruktur]]),X]),Z,tt,t("div",st,[at,u(t("input",{type:"text","onUpdate:modelValue":n[4]||(n[4]=r=>a.instruktur.username=r),class:"form-control",id:"username"},null,512),[[l,a.instruktur.username]]),nt]),rt,t("div",et,[ot,u(t("input",{type:"password","onUpdate:modelValue":n[5]||(n[5]=r=>a.instruktur.password=r),class:"form-control",id:"password"},null,512),[[l,a.instruktur.password]]),it]),ut,t("div",lt,[h(d,{className:"btn btn-dark",onClick:a.goBack},null,8,["onClick"]),dt])],32),mt])])])],64)}const wt=v(C,[["render",ct],["__scopeId","data-v-4cdd4abf"]]);export{wt as default};
