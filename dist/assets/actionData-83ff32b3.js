import{_ as x,B as A,r as p,o as r,c as i,a as s,t as g,l as b,s as k,F as o,q as m,k as _,b as v,e as C,p as I,n as B}from"./index-b7f4b6dc.js";const N={components:{BackButton:A},name:"table-data",props:["context","data","actions","column","fields","create","hiddenClass"],data(){return{itemsPerPage:10,currentPage:1}},methods:{createLink(e,t){return t==null?`/${e}`:`/${e}/${t}`},createPathName(e,t){return t.link==null?`${e}`:`${e}-${t.link}`},eventAction(e){console.log(e)},prevPage(){this.currentPage>1&&(this.currentPage-=1)},nextPage(){this.currentPage<this.totalPages&&(this.currentPage+=1),console.log(this.currentPage)},getField(e,t){let n=e;for(let u=0;u<t.length;u++)n=n[t[u]];return n},getToggle(e){return e.aksi==="Hapus"||e.aksi==="Reset Password"?"modal":null},getTarget(e){return e.aksi==="Hapus"||e.aksi==="Reset Password"?"#staticBackdrop":null}},computed:{totalPages(){return Math.ceil(this.data.length/this.itemsPerPage)},displayedItems(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.data.slice(e,t)}}},T=e=>(I("data-v-a1e4ee1f"),e=e(),B(),e),D={class:"container-fluid table-custom p-4"},F={class:"table table-striped table-bordered table-hover mt-4"},R={class:"table table-dark"},S=T(()=>s("th",null,"Aksi",-1)),V={class:"d-flex justify-content-between"},H={class:"pagination pagination-dark"},q=["onClick"];function L(e,t,n,u,d,l){const y=p("router-link"),w=p("back-button");return r(),i("div",D,[s("button",{type:"button",onClick:t[0]||(t[0]=b((...a)=>n.create&&n.create(...a),["prevent"])),class:k(["btn btn-outline-dark",n.hiddenClass])},g("Tambah "+n.context),3),s("table",F,[s("thead",R,[s("tr",null,[(r(!0),i(o,null,m(n.column,(a,h)=>(r(),i("th",{key:h},g(a),1))),128)),S])]),s("tbody",null,[(r(!0),i(o,null,m(l.displayedItems,(a,h)=>(r(),i("tr",{key:h},[(r(!0),i(o,null,m(n.fields,(c,f)=>(r(),i("td",{key:f},[Array.isArray(c)?(r(),i(o,{key:0},[_(g(l.getField(a,c)),1)],64)):(r(),i(o,{key:1},[_(g(a[c]),1)],64))]))),128)),s("td",null,[(r(!0),i(o,null,m(n.actions,(c,f)=>(r(),i("span",{key:f,class:"mx-2"},[v(y,{onClick:z=>c.functionAction(a),to:{name:l.createPathName(n.context,c,a),query:{...a}},class:k(c.kelas)},{default:C(()=>[_(g(c.aksi),1)]),_:2},1032,["onClick","to","class"])]))),128))])]))),128))])]),s("nav",V,[s("ul",H,[s("li",{class:k(["page-item",{disabled:d.currentPage===1}])},[s("a",{class:"page-link",href:"#",onClick:t[1]||(t[1]=b((...a)=>l.prevPage&&l.prevPage(...a),["prevent"]))},"Previous")],2),(r(!0),i(o,null,m(l.totalPages,a=>(r(),i("li",{class:k(["page-item",{active:a===d.currentPage}]),key:a},[s("a",{class:"page-link",href:"#",onClick:b(h=>d.currentPage=a,["prevent"])},g(a),9,q)],2))),128)),s("li",{class:k(["page-item",{disabled:d.currentPage===l.totalPages}])},[s("a",{class:"page-link",href:"#",onClick:t[2]||(t[2]=b((...a)=>l.nextPage&&l.nextPage(...a),["prevent"]))},"Next")],2)]),v(w,{className:"btn btn-dark"})])])}const G=x(N,[["render",L],["__scopeId","data-v-a1e4ee1f"]]);class P{constructor(t,n,u,d){this.aksi=t,this.kelas=n,this.link=u,this.functionAction=d}}const J=(e,t)=>{e.push({name:t})},M=e=>{e()},U=e=>{e()},j=e=>{e()},K=new P("Detail","mdi mdi-eye btn btn-primary",void 0,M),O=new P("Ubah","mdi mdi-update btn btn-warning","ubah"),Q=new P("Hapus","mdi mdi-delete btn btn-danger",void 0,U),W=new P("Reset Password","mdi mdi-lock btn btn-danger","reset-password",j);export{K as A,G as T,Q as a,J as b,O as c,W as d};