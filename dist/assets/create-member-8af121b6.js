import{_ as v,d as g,r as h,o as y,c as w,a as e,b as k,l as M,w as i,v as b,m as x,F as N,H as V,B,$ as l,u as D,i as T,h as A,p as C,n as H,k as S}from"./index-b7f4b6dc.js";import{c as $}from"./function-2d16a083.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const U=g({components:{HomeNavbar:V,BackButton:B},methods:{goBack(){l&&this.toast.goAway(0)}},mounted(){window.onpopstate=()=>{this.goBack()}},setup(){const a=D(),s=T("$http"),n=A({nama_member:"",tgl_lahir_member:"",no_telp_member:"",membership:!1,alamat_member:""}),_=t=>{console.log(t),t.preventDefault(),u(n)&&$("Yakin ingin menambahkan data member? ","question","blue","Yakin",r)};function u({nama_member:t,tgl_lahir_member:c,no_telp_member:d}){let m=!0;return console.log(t,c,d),t||(l.warning("Nama member harus diisi"),m=!1),c||(l.warning("Tanggal lahir member harus diisi"),m=!1),d||(l.warning("No telp member harus diisi"),m=!1),m}function f({membership:t}){return!!t}function p(){console.log("transaksiAktivasi")}const r=async()=>{const t=u(n),c=f(n);if(t)try{const d="/member",m=await s.post(d,n);c&&p(),l.success(m.data.message),a.push({name:"member"})}catch{l.warning("Gagal Menambahkan Data")}};return{router:a,member:n,storeMember:r,submitForm:_}}}),o=a=>(C("data-v-57c22c0b"),a=a(),H(),a),F={class:"content text-white p-5"},I=o(()=>e("h2",null,"Tambah member",-1)),j={class:"container-fluid form-custom p-4 text-dark"},q=o(()=>e("h3",{class:"title"},[S("Tambah Data Member "),e("span",{class:"mdi mdi-account-plus"})],-1)),G=o(()=>e("hr",null,null,-1)),Y={class:"mb-3"},E=o(()=>e("label",{for:"nama_member",class:"form-label"},"Nama Member",-1)),L=o(()=>e("div",{id:"namaHelp",class:"form-text"},"ex : Ucup Surucup",-1)),R={class:"mb-3"},z=o(()=>e("label",{class:"form-label",for:"birthday"},"Tanggal Lahir Member",-1)),J=o(()=>e("div",{id:"namaHelp",class:"form-text"},"Format yang digunakan : mm/dd/yyyy",-1)),K={class:"mb-3"},O=o(()=>e("label",{for:"notelp",class:"form-label"},"No Telp Member",-1)),P=o(()=>e("div",{id:"namaHelp",class:"form-text"},"ex : 08123456789",-1)),Q={class:"mb-3"},W=o(()=>e("label",{for:"alamat",class:"form-label"},"Alamat Member",-1)),X=o(()=>e("div",{id:"namaHelp",class:"form-text"},"ex : 08123456789",-1)),Z={class:"form-check mb-3"},ee=o(()=>e("label",{class:"form-check-label",for:"flexCheckDefault"}," Daftar Membership langsung ? ",-1)),te={class:"d-flex justify-content-between"},ae=o(()=>e("button",{type:"submit",class:"btn btn-primary"},"Submit",-1)),se=o(()=>e("hr",null,null,-1));function oe(a,s,n,_,u,f){const p=h("home-navbar"),r=h("back-button");return y(),w(N,null,[e("header",null,[k(p,{message:"Gofit -  Tambah Data Member"})]),e("main",null,[e("div",F,[I,e("div",j,[q,G,e("form",{onSubmit:s[5]||(s[5]=M(t=>a.submitForm(t),["prevent"]))},[e("div",Y,[E,i(e("input",{type:"teal","onUpdate:modelValue":s[0]||(s[0]=t=>a.member.nama_member=t),class:"form-control",id:"nama_member","aria-describedby":"emailHelp"},null,512),[[b,a.member.nama_member]]),L]),e("div",R,[z,i(e("input",{class:"form-text","onUpdate:modelValue":s[1]||(s[1]=t=>a.member.tgl_lahir_member=t),type:"date",id:"birthday"},null,512),[[b,a.member.tgl_lahir_member]]),J]),e("div",K,[O,i(e("input",{type:"text","onUpdate:modelValue":s[2]||(s[2]=t=>a.member.no_telp_member=t),class:"form-control",id:"notelp"},null,512),[[b,a.member.no_telp_member]]),P]),e("div",Q,[W,i(e("input",{type:"text","onUpdate:modelValue":s[3]||(s[3]=t=>a.member.alamat_member=t),class:"form-control",id:"alamat"},null,512),[[b,a.member.alamat_member]]),X]),e("div",Z,[i(e("input",{class:"form-check-input","onUpdate:modelValue":s[4]||(s[4]=t=>a.member.membership=t),type:"checkbox",value:"",id:"flexCheckDefault"},null,512),[[x,a.member.membership]]),ee]),e("div",te,[k(r,{className:"btn btn-dark",onClick:a.goBack},null,8,["onClick"]),ae])],32),se])])])],64)}const ue=v(U,[["render",oe],["__scopeId","data-v-57c22c0b"]]);export{ue as default};