import{_ as D,d as v,r as m,o as i,c as l,a as e,b,w as y,z as f,F as p,q as g,t as r,H as T,B as C,u as L,g as w,p as Y,n as M}from"./index-b7f4b6dc.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const A=v({components:{HomeNavbar:T,BackButton:C},data(){return{router:L(),dataLaporan:w([]),countInit:0,currentDate:null,test:"mantap",selectedYear:null,months:["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"],YearList:[],chart:null,table:null}},methods:{DataTableFeatures(){$(document).ready(()=>{this.getMonthName(this.selectedYear);var t=this.currentDate;const a=this.$refs.chartContainer;console.log(a),this.table=$("#example").DataTable({dom:"pfrtip",paging:!1,ordering:!1,buttons:[{extend:"print",text:"Print",title:"",message:`<strong>Gofit</strong>
                                </br>
                                <p>Jl CentralPark No. 10 Yogyakarta</p>
                                </br>
                                <strong><u>Laporan Aktivitas Kelas Bulanan</u></strong>
                                </br>
                                <p><u>Tahun: 2023</u></p>
                                <p>Tanggal Cetak : ${t} </p>
                                <div id="chartContainer">${a.innerHTML}</div>`}]}),this.table.on("draw",()=>{this.updateChart()});let n=document.getElementById("chartContainer");n||(n=document.createElement("div"),n.id="chartContainer",a.parentNode.insertBefore(n,a.nextSibling)),this.chart=Highcharts.chart(a,{chart:{type:"column"},title:{text:"Grafik Pendapatan Perbulan"},xAxis:{categories:this.chartCategories(this.table),labels:{rotation:0}},yAxis:{title:{text:"Pendapatan(M = Million)"}},plotOptions:{bar:{dataLabels:{enabled:!0,inside:!0,align:"center",verticalAlign:"bottom",style:{fontSize:"10px"}}}},series:[{data:this.chartData(this.table)}]})}),console.log(this.table)},chartCategories(t){const a=[];return t.column(0).data().each(n=>{a.push(n)}),a},chartData(t){const a=[];return t.column(3).data().each(n=>{a.push(parseFloat(n))}),a},async getDataTahunan(t,a=null){const n=this.YearList[a-1],u="/laporanpendapatantahunan",c=a!=null?{year:n}:{};this.currentDate=this.getCurrentDateTime();const h=await this.$http.get(u,{params:c});this.dataLaporan=h.data.data,this.countInit==0?(this.DataTableFeatures(),this.countInit++):(this.uppdateTableData(),this.updateChart())},uppdateTableData(){const t=Object.entries(this.dataLaporan).map(([a,n])=>Object.values(n));this.table.clear().rows.add(t).draw(),console.log(this.table.data())},updateChart(){const t=this.chartData(this.table),a=this.chartCategories(this.table);this.chart.xAxis[0].setCategories(a),this.chart.series[0].setData(t)},getCurrentDateTime(){const t=new Date,a=t.getDate(),n=t.getMonth()+1,u=t.getFullYear();return this.addLeadingZero(a)+"/"+this.addLeadingZero(n)+"/"+u},addLeadingZero(t){return(t<10?"0":"")+t},getMonth(){return new Date().getMonth()+1},cetakData(){window.print()},getMonthName(t){return["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][t-1]},printData(){const t=$("#example").html(),a=`
                <strong>Gofit</strong>
                    </br>
                    <p>Jl CentralPark No. 10 Yogyakarta</p>
                    </br>
                    <strong><u>Laporan Aktivitas Kelas Bulanan</u></strong>
                    </br>
                    <p><u>Bulan : ${this.getMonthName(this.selectedMonth)} Tahun: 2023</u></p>
                    <p>Tanggal Cetak : ${this.currentDate} </p>
                    <table>${t}</table>
                    <div id="container">${$("#container").html()}</div>
                `,n=window.open("","","width=800,height=600");n.document.open(),n.document.write(`
                <html>
                <head>
                    <title>Cetak Laporan</title>
                    <style>
                    /* Gaya khusus untuk mencetak */
                    @media print {
                        /* Gaya untuk menyembunyikan elemen yang tidak perlu dicetak */
                
                        #container, #example {
                        visibility: visible;
                        }
                        /* Gaya khusus lainnya sesuai kebutuhan Anda */
                    }
                    </style>
                </head>
                <body>
                    ${a}
                </body>
                </html>
                `),n.document.close(),setTimeout(()=>{n.print(),n.close()},500)},getYearList(){const t=new Date().getFullYear();for(var a=t-4;a<=t;a++)this.YearList.push(a)}},async mounted(){this.selectedYear=this.getMonth(),await this.getDataTahunan("Berhasil Mengambil Data  Laporan Tahunan Gym",this.selectedYear),console.log(this.selectedYear),this.getYearList(),console.log(this.YearList)},computed:{totalRowCount(){return this.dataLaporan.reduce((t,a)=>t+a.total_pendapatan,0)}}}),o=t=>(Y("data-v-fe448d8d"),t=t(),M(),t),B={class:"container mt-5"},N=o(()=>e("label",{for:"bulan"},"Pilih Tahun:",-1)),x=["value"],F=o(()=>e("div",{class:"text-dark table-custom mt-5 ms-5 me-5 p-2 d-inline-block"},null,-1)),P={class:"content bg-white text-dark table-custom m-5 mt-2"},S={class:"container-fluid p-4"},G=o(()=>e("h3",null,"Tabel Laporan Tahunan",-1)),I={id:"example",class:"#example table table-striped filters",style:{width:"100%"}},J=o(()=>e("thead",null,[e("tr",null,[e("th",null,"Bulan"),e("th",null,"Aktivasi"),e("th",null,"Deposit"),e("th",null,"Total")])],-1)),O=o(()=>e("td",null,[e("strong",null,"TOTAL")],-1)),H=o(()=>e("td",null,null,-1)),E=o(()=>e("td",null,null,-1)),K={id:"container",ref:"chartContainer"},R={class:"row"};function V(t,a,n,u,c,h){const _=m("home-navbar"),k=m("back-button");return i(),l(p,null,[e("header",null,[b(_,{message:"Gofit - Laporan Pendapatan Bulanan / Tahun"})]),e("main",null,[e("div",B,[N,y(e("select",{id:"bulan","onUpdate:modelValue":a[0]||(a[0]=s=>t.selectedYear=s)},[(i(!0),l(p,null,g(t.YearList,(s,d)=>(i(),l("option",{key:d,value:d+1},r(s),9,x))),128))],512),[[f,t.selectedYear]]),e("button",{class:"btn btn-primary m-2",onClick:a[1]||(a[1]=s=>t.getDataTahunan("Ambil Kembali Data",t.selectedYear))},"Ambil Data")]),F,e("div",P,[e("div",S,[G,e("button",{class:"btn btn-primary m-3",onClick:a[2]||(a[2]=(...s)=>t.printData&&t.printData(...s))},"Cetak Laporan"),e("table",I,[J,e("tbody",null,[(i(!0),l(p,null,g(t.dataLaporan,(s,d)=>(i(),l("tr",{key:d},[e("td",null,r(s.nama_bulan),1),e("td",null,r(s.total_pendapatan_aktivasi),1),e("td",null,r(s.total_pendapatan_deposit),1),e("td",null,r(s.total_pendapatan),1)]))),128)),e("tr",null,[O,H,E,e("td",null,r(t.totalRowCount),1)])])]),e("div",K,null,512),e("div",R,[b(k,{class:"col-md-3",className:"btn btn-dark"})])])])])],64)}const X=D(A,[["render",V],["__scopeId","data-v-fe448d8d"]]);export{X as default};
