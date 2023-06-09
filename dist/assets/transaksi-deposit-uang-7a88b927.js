import{_ as T,d as w,r as y,o as d,c as u,a as t,b as v,l as D,w as p,v as _,F as h,q as g,z as M,t as i,H as S,g as b,S as k,$ as m,E as U,p as F,n as P,k as N}from"./index-b7f4b6dc.js";import"https://code.jquery.com/jquery-3.5.1.js";import"https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js";import"https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/dataTables.buttons.min.js";import"https://cdn.datatables.net/buttons/2.3.6/js/buttons.print.min.js";import"https://code.highcharts.com/highcharts.js";const $=w({components:{HomeNavbar:S},data(){return{FormTransactionUang:{id_pegawai:this.getDataPegawai().id_pegawai,id_member:"",NoStruk:"",nominal_deposit:0,id_promo:""},promos:null,allMember:null,PromoMessage:"Dapatkan Promo Menarik!!!",selectedPromo:null,member:b({}),hasilTransaksi:b({transaksi_deposit_reguler:{no_struk:""},transaksi_member:{},member_sebelum:{},member_sesudah:{}}),newMember:null}},methods:{async submitForm(){(await k.fire({title:"Apakah Anda yakin ingin melakukan transaksi ini?",showCancelButton:!0,confirmButtonColor:"#28a745",confirmButtonText:"Lanjutkan",cancelButtonText:"Batal"})).isConfirmed&&this.depositMoneyTransaction()},async depositMoneyTransaction(){try{this.getMember(this.FormTransactionUang);const e="/transaksideposituang",a=await this.$http.post(e,this.FormTransactionUang);this.hasilTransaksi=a.data.data,this.requestNewestMember(this.FormTransactionUang.id_member),console.log(this.newMember),this.generateStrukDepositUang(),m.success(a.data.message),k.fire({title:"Transaksi Berhasil!",icon:"success",timer:2e3,timerProgressBar:!0,showConfirmButton:!1}),this.generateTransactionData(),this.requestNewestMember(this.FormTransactionUang.id_member)}catch{m.warning("Transaksi Gagal, Cek Data Transaksi !!")}},async updateDepositBalance(e){try{const a=`/updatedepositbalanceuang/${this.FormTransactionUang.id_member}`,s=await this.$http.put(a,{total_deposit:e});m.success(s.data.message)}catch{m.warning("gagal update")}},async generateTransactionData(){const a=(await this.$http.get("/transaksiaktivasi")).data+1,s=new Date,l=s.getFullYear().toString().substr(-2),r=("0"+(s.getMonth()+1)).slice(-2);this.FormTransactionUang.NoStruk=l+"."+r+"."+a},generateStrukDepositUang(){window.jspPDF=window.jspdf.jsPDF;var e=document.querySelector("#pdfContent2");e.style.display="block",e.style.fontSize="5px",e.style.lineHeight="1.2",e.style.margin="0",e.style.padding="0",new U({orientation:"l",unit:"mm",format:["300","100"]}).html(e,{callback:function(s){s.save("file.pdf"),e.style.display="none"},x:10,y:10})},async getPromo(){const e=await this.$http.get("/promo");this.promos=e.data.promo},updateSelectedPromo(){let e=this.availablePromo(),a=this.nearestPromo(),[s,{nama_promo:l="-",bonus_promo:r="-"}]=a;m.clear(),e&&e.id_promo!=null?this.FormTransactionUang.id_promo=e.id_promo:this.FormTransactionUang.id_promo=0,s!=1/0&&(this.PromoMessage=`Transaksi kurang ${s} untuk mendapatkan promo ${l||"yang tersedia"} dengan bonus deposit ${r}!!!`,m.info(`Tambah ${s} untuk mendapatkan bonus ${r}`,{queue:!0,duration:2e3})),s==1/0&&(this.PromoMessage="Selamat Anda berhasil Mendapatkan promo Menarik!!",m.success("Selamat Anda, Berhasil mendapatkan promo paling menarik!!",{queue:!0,duration:2e3}))},getDataPegawai(){let e=localStorage.getItem("pegawaiData");return JSON.parse(e)},availablePromo(){let e=this.promos,a=null;return e=e.filter(s=>s.jenis_promo==="promo_reguler"),e.forEach(s=>{s.minimal_deposit<=this.FormTransactionUang.nominal_deposit&&(a===null||s.minimal_deposit>a.minimal_deposit)&&(a=s)}),a},nearestPromo(){let e=this.promos,a=null,s=null,l=1/0;return e=e.filter(r=>r.jenis_promo==="promo_reguler"),e.forEach(r=>{s=r.minimal_deposit-this.FormTransactionUang.nominal_deposit,s>0&&l>s&&(l=s,a=r)}),a!=null?[l,a]:[l,{nama_promo:"-",bonus_promo:"-"}]},async getAllMember(){const e="/member",a=await this.$http.get(e);this.allMember=a.data.data,console.log(this.allMember)},getMember({id_member:e}){this.member=this.allMember.filter(a=>a.id_member==e)[0]},async requestNewestMember(e){console.log(e);const a=`/member/${e}`,s=await this.$http.get(a);this.newMember=s.data.data[0]}},mounted(){this.generateTransactionData(),this.getPromo(),this.getAllMember()}}),o=e=>(F("data-v-286ccab0"),e=e(),P(),e),B={class:"content text-white p-5 mt-5"},I=o(()=>t("h2",null,null,-1)),q={class:"container-fluid form-custom p-4 text-dark",ref:"sectionForm"},C=o(()=>t("div",{class:"d-flex justify-content-between"},[t("h3",{class:"title"},[N("Transaksi Deposit Uang"),t("span",{class:"mdi mdi-cash-multiple ms-2"})])],-1)),j=o(()=>t("hr",null,null,-1)),V={class:"mb-3"},A=o(()=>t("label",{for:"no-transaksi",class:"form-label"},"No Struk",-1)),H=o(()=>t("div",{class:"mb-3"},[t("label",{for:"jenis-transaksi",class:"form-label"},"Jenis Transaksi"),t("input",{type:"text",value:"transaksi-deposit-reguler",class:"form-control",id:"jenis-transaksi",disabled:""})],-1)),L={class:"mb-3"},E=o(()=>t("label",{for:"exampleDataList",class:"form-label"},"ID Member",-1)),O={id:"datalistOptions"},R=["value"],G={class:"mb-3"},J=o(()=>t("label",{for:"nominal-deposit",class:"form-label"},"Nominal Deposit",-1)),z={class:"mb-3"},K=o(()=>t("label",{for:"promo",class:"form-label"},"Promo",-1)),Y=o(()=>t("option",{value:"null"},"Default Value",-1)),x=["value"],Q={id:"promoHelp",class:"form-text"},W=o(()=>t("button",{type:"submit",class:"btn btn-primary"},"Submit",-1)),X=o(()=>t("hr",null,null,-1)),Z={class:"container-fluid form-custom p-4 text-dark mt-5",ref:"sectionTable"},tt={class:"bg light"},et={width:"600px",id:"pdfContent2",style:{display:"none",margin:"500px"},class:"text-dark"},at={width:"600px",class:"p-1"},st={class:"border border-dark"},ot=o(()=>t("td",{style:{width:"50%"}},[t("strong",null,"Gofit")],-1)),nt=o(()=>t("td",null,[t("p",null,"Jl Centralpark No 10 Yogyakarta")],-1)),it=o(()=>t("tr",null,null,-1)),rt={style:{width:"80%"}},lt=o(()=>t("td",null,[t("strong",null,"Member")],-1)),mt=o(()=>t("td",null,":",-1)),dt=o(()=>t("td",null,"Nominal Deposit",-1)),ut=o(()=>t("td",null,":",-1)),pt=o(()=>t("td",null,"Bonus Deposit",-1)),ct=o(()=>t("td",null,":",-1)),_t=o(()=>t("td",null,"Sisa Deposit",-1)),ht=o(()=>t("td",null,":",-1)),gt=o(()=>t("td",null,"Total Deposit",-1)),bt=o(()=>t("td",null,":",-1)),kt=o(()=>t("td",null,null,-1));function ft(e,a,s,l,r,Tt){const f=y("home-navbar");return d(),u(h,null,[t("header",null,[v(f,{message:"Gofit - Transaksi Deposit Uang"})]),t("main",null,[t("div",B,[I,t("div",q,[C,j,t("form",{onSubmit:a[5]||(a[5]=D(n=>e.submitForm(n),["prevent"]))},[t("div",V,[A,p(t("input",{type:"text","onUpdate:modelValue":a[0]||(a[0]=n=>e.FormTransactionUang.NoStruk=n),class:"form-control",id:"no-transaksi",disabled:""},null,512),[[_,e.FormTransactionUang.NoStruk]])]),H,t("div",L,[E,p(t("input",{class:"form-control",list:"datalistOptions",id:"exampleDataList","onUpdate:modelValue":a[1]||(a[1]=n=>e.FormTransactionUang.id_member=n),placeholder:"Ketik untuk mencari id member"},null,512),[[_,e.FormTransactionUang.id_member]]),t("datalist",O,[(d(!0),u(h,null,g(e.allMember,(n,c)=>(d(),u("option",{key:c,value:n.id_member},i(n.id_member),9,R))),128))])]),t("div",G,[J,p(t("input",{type:"text","onUpdate:modelValue":a[2]||(a[2]=n=>e.FormTransactionUang.nominal_deposit=n),onInput:a[3]||(a[3]=(...n)=>e.updateSelectedPromo&&e.updateSelectedPromo(...n)),class:"form-control",id:"nominal-deposit"},null,544),[[_,e.FormTransactionUang.nominal_deposit]])]),t("div",z,[K,p(t("select",{"onUpdate:modelValue":a[4]||(a[4]=n=>e.FormTransactionUang.id_promo=n),class:"form-select",disabled:""},[Y,(d(!0),u(h,null,g(e.promos,(n,c)=>(d(),u("option",{key:c,value:n.id_promo},i(n.nama_promo),9,x))),128))],512),[[M,e.FormTransactionUang.id_promo]]),t("div",Q,i(e.PromoMessage),1)]),W],32),X],512),t("div",null,[t("div",Z,null,512)])])]),t("div",tt,[t("div",et,[t("div",at,[t("table",st,[t("tr",null,[ot,t("td",null," No Struk : "+i(e.hasilTransaksi.transaksi_deposit_reguler.no_struk),1)]),nt,t("td",null," Tanggal : "+i(e.hasilTransaksi.transaksi_deposit_reguler.tanggal_deposit),1),it,t("tr",null,[t("td",null,[t("table",null,[t("tr",rt,[lt,mt,t("td",null,i(e.hasilTransaksi.transaksi_member.id_member)+"/"+i(e.member.nama_member),1)]),t("tr",null,[dt,ut,t("td",null,"Rp."+i(e.hasilTransaksi.transaksi_deposit_reguler.nominal_deposit),1)]),t("tr",null,[pt,ct,t("td",null,"Rp. "+i(e.hasilTransaksi.transaksi_deposit_reguler.nominal_total-e.hasilTransaksi.transaksi_deposit_reguler.nominal_deposit),1)]),t("tr",null,[_t,ht,t("td",null,"Rp. "+i(e.hasilTransaksi.member_sebelum.total_deposit_uang),1)]),t("tr",null,[gt,bt,t("td",null,i(parseInt(e.hasilTransaksi.member_sesudah.total_deposit_uang)),1)])])])]),t("tr",null,[kt,t("td",null,"Kasir : "+i(e.getDataPegawai().id_pegawai)+"/"+i(e.getDataPegawai().nama_pegawai),1)])])])])])],64)}const Ft=T($,[["render",ft],["__scopeId","data-v-286ccab0"]]);export{Ft as default};