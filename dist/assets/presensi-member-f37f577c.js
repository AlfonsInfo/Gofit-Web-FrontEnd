import{_ as r,H as c,M as m,r as s,o as _,c as d,a as e,b as o,F as i}from"./index-b7f4b6dc.js";import{c as p}from"./staticData-af98f043.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const l={data(){return{menuPresensi:p}},methods:{changeClass(){document.body.classList.replace("body-center","body-normalflow")}},mounted(){this.changeClass()},components:{HomeNavbar:c,MenuCard:m}},u={class:""},f={class:"pegawai-mo p-5"},h={class:"row row-cols-2 row-cols-md-12"};function b(v,g,w,y,a,M){const n=s("home-navbar"),t=s("menu-card");return _(),d(i,null,[e("header",null,[o(n,{message:"Menu Presensi Gofit"})]),e("main",u,[e("div",f,[e("div",h,[o(t,{data:a.menuPresensi},null,8,["data"])])])])],64)}const H=r(l,[["render",b],["__scopeId","data-v-24eee4f8"]]);export{H as default};