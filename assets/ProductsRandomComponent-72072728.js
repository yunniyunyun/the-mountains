import{p as u}from"./productsStore-b02ff11e.js";import{l as g}from"./loadingStore-abd78020.js";import{m as r}from"./pinia-e6b04fcb.js";import{b7 as v,aw as l,ak as a,m as n,u as i,n as t,F as _,au as x,b2 as p,aK as m,t as f,ao as b,al as y}from"./_plugin-vue_export-helper-21b08155.js";import"./sweetalert2.all-fda0963d.js";import"./_commonjsHelpers-042e6b4d.js";const S="/the-mountains/assets/random-title-d3d36ba0.png";const w=u(),k={computed:{...r(u,["randomProducts","pages"]),...r(g,["isLoading"])},mounted(){w.getAllProducts()}},e=s=>(b("data-v-44455010"),s=s(),y(),s),L=e(()=>t("div",{class:"header"},null,-1)),P={class:"container"},$=e(()=>t("div",{class:"mt-5"},null,-1)),V=e(()=>t("h1",{class:"text-light text-center mb-5 d-none"},"最新活動",-1)),C=e(()=>t("p",{class:"text-center"},[t("img",{src:S,class:"title-img",alt:"logo"})],-1)),I={class:"mb-5"},R={class:"col-md-4"},B={class:"position-relative"},N=["src"],j=e(()=>t("h4",{class:"text-center text-light",style:{"margin-top":"30%"}},"了解更多",-1)),F={class:"col-md-8 px-4"},U={class:"my-3 my-lg-4 text-truncate"},A={class:"product-description h5"},D={class:"d-flex justify-content-end"};function E(s,d,K,O,T,q){const h=l("loadingVue"),c=l("RouterLink");return a(),n(_,null,[i(h,{active:s.isLoading,"onUpdate:active":d[0]||(d[0]=o=>s.isLoading=o)},null,8,["active"]),L,t("div",P,[$,V,C,t("div",I,[(a(!0),n(_,null,x(s.randomProducts,o=>(a(),n("div",{class:"product-card row py-4 text-light mb-3 shadow position-relative p-0",key:o.id,style:{border:"1px solid rgba(255, 255, 255, 0.2)","border-radius":"10px"}},[t("div",R,[t("div",B,[t("img",{src:o.imageUrl,alt:"",style:{width:"100%","max-height":"300px","Object-fit":"cover"}},null,8,N),i(c,{to:`/product/${o.id}`,class:"more position-absolute",style:{width:"100%",height:"100%","text-decoration":"none",color:"inherit",left:"0"}},{default:p(()=>[j]),_:2},1032,["to"])])]),t("div",F,[t("h2",U,m(o.title),1),t("p",A,m(o.description),1),t("div",D,[i(c,{to:`/product/${o.id}`,class:"btn btn-outline-secondary mt-3"},{default:p(()=>[f("了解更多")]),_:2},1032,["to"])])])]))),128))])])],64)}const W=v(k,[["render",E],["__scopeId","data-v-44455010"]]);export{W as default};
