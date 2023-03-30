import{c as b}from"./cartStore-631a9f84.js";import{l as C}from"./loadingStore-abd78020.js";import{m as y,b as k}from"./pinia-e6b04fcb.js";import{k as g}from"./runtime-dom.esm-bundler-ff2db17e.js";import{b7 as w,aw as f,ak as l,m as a,u,n as t,F as i,au as r,l as q,aK as n,b2 as _,t as c,b4 as v,ao as V,al as S}from"./_plugin-vue_export-helper-21b08155.js";import"./sweetalert2.all-fda0963d.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-add73b1a.js";import"./vue-router-d7550456.js";const I="/the-mountains/assets/cart-empty-title-132fa523.png";const j=b(),U={data(){return{products:[],loadingItem:""}},computed:{...y(b,["cart"]),...y(C,["isLoading"])},methods:{...k(b,["deleteCart","updateCart","getCarts","deleteCarts"])},mounted(){j.getCarts()}},d=o=>(V("data-v-001f77f1"),o=o(),S(),o),L=d(()=>t("div",{class:"header"},null,-1)),B={class:"container mb-5"},$=d(()=>t("div",{class:"d-none d-md-flex justify-content-center text-secondary",style:{"margin-top":"60px"}},[t("div",{class:"position-relative m-4",style:{width:"60%"}},[t("div",{class:"progress",style:{height:"4px"}},[t("div",{class:"progress-bar",role:"progressbar",style:{width:"33%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"})]),t("button",{type:"button",class:"position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill",style:{width:"2rem",height:"2rem"}},[t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-caret-right-fill",viewBox:"0 0 16 16"},[t("path",{d:"m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"})])]),t("h5",{class:"position-absolute",style:{top:"-26px",left:"calc((33% - 5rem)/2)",color:"#1FBA82"}},"1.確認內容"),t("button",{type:"button",class:"position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem",left:"33%","pointer-events":"none"}}),t("h5",{class:"position-absolute",style:{top:"-26px",left:"calc(32% + (33% - 5rem)/2)"}},"2.填寫資料"),t("button",{type:"button",class:"position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem",left:"66%","pointer-events":"none"}}),t("h5",{class:"position-absolute",style:{top:"-26px",left:"calc(65% + (33% - 5rem)/2)"}},"3.訂單完成"),t("button",{type:"button",class:"position-absolute top-0 translate-middle btn btn-sm btn-secondary rounded-pill",style:{width:"2rem",height:"2rem",left:"99%","pointer-events":"none"}})])],-1)),A=d(()=>t("h2",{class:"mt-5 text-light text-center mb-3"},"購物車內容",-1)),N={class:"text-end"},F={class:"d-none d-sm-block"},D={class:"table align-middle text-light"},R=d(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",null,"單價"),t("th",{style:{width:"150px"}},"數量"),t("th")])],-1)),z=["disabled","onClick"],E=d(()=>t("i",{class:"fas fa-spinner fa-pulse"},null,-1)),K={class:"d-md-flex"},M=["src","alt"],T={class:"input-group input-group-sm"},G=["onUpdate:modelValue","disabled","onChange"],H=["value"],J=["value"],O={class:"text-end"},P=d(()=>t("small",{class:"text-success"},"小計：",-1)),Q=d(()=>t("td",null,null,-1)),W=d(()=>t("td",{colspan:"3",class:"text-end"},"總計",-1)),X={class:"text-end"},Y=d(()=>t("td",null,null,-1)),Z=d(()=>t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1)),tt={class:"text-end text-success"},et={class:"d-sm-none text-light p-3"},st={class:"bg-dark text-light",style:{width:"100%"}},ot=["src"],nt={class:"d-flex flex-column p-3 justify-content-center"},lt={class:"mb-2"},at={class:"mb-2 text-end d-flex justify-content-between align-items-star"},dt={class:"input-group input-group-sm",style:{width:"120px"}},it=["onUpdate:modelValue","disabled","onChange"],rt=["value"],ct=["value"],ut={class:"mb-0 h5"},pt=d(()=>t("small",{class:"text-success"},"小計：",-1)),ht={class:"mt-3 text-end"},_t={class:"mt-3 text-end text-success"},mt={class:"d-flex justify-content-end mt-4"},bt=d(()=>t("p",{class:"text-center"},[t("img",{src:I,class:"title-img",alt:"logo"})],-1)),yt={class:"d-flex justify-content-center",style:{"margin-top":"-24px"}};function gt(o,p,ft,vt,m,xt){const x=f("loadingVue"),h=f("RouterLink");return l(),a(i,null,[u(x,{active:o.isLoading,"onUpdate:active":p[0]||(p[0]=e=>o.isLoading=e)},null,8,["active"]),L,t("div",B,[$,Array.isArray(o.cart.carts)&&o.cart.carts.length?(l(),a(i,{key:0},[A,t("div",N,[t("button",{class:"btn btn-outline-danger",type:"button",onClick:p[1]||(p[1]=(...e)=>o.deleteCarts&&o.deleteCarts(...e))},"清空購物車")]),t("div",F,[t("table",D,[R,t("tbody",null,[o.cart.carts?(l(!0),a(i,{key:0},r(o.cart.carts,e=>(l(),a("tr",{key:e.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",disabled:e.id===m.loadingItem,onClick:s=>o.deleteCart(e)},[E,c(" x ")],8,z)]),t("td",null,[t("div",K,[u(h,{to:`/product/${e.product.id}`},{default:_(()=>[t("img",{src:e.product.imageUrl,class:"table-image me-3",alt:e.product.title},null,8,M)]),_:2},1032,["to"]),t("p",null,n(e.product.title),1)])]),t("td",null,n(e.product.price),1),t("td",null,[t("div",T,[v(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s=>e.qty=s,disabled:e.id===m.loadingItem,onChange:s=>o.updateCart(e)},[e.qty<=10?(l(),a(i,{key:0},r(10,s=>t("option",{value:s,key:`${s}qty`},n(s),9,H)),64)):(l(!0),a(i,{key:1},r(e.qty,s=>(l(),a("option",{value:s,key:s+"qty"},n(s),9,J))),128))],40,G),[[g,e.qty]])])]),t("td",O,[P,c(" "+n(e.final_total),1)])]))),128)):q("",!0)]),t("tfoot",null,[t("tr",null,[Q,W,t("td",X,n(o.cart.total),1)]),t("tr",null,[Y,Z,t("td",tt,n(o.cart.final_total),1)])])])]),t("div",et,[(l(!0),a(i,null,r(o.cart.carts,e=>(l(),a("div",{class:"d-flex justify-content-center align-items-center mb-3",key:e.id},[t("div",st,[t("div",null,[t("img",{src:e.product.imageUrl,alt:"...",style:{width:"100%",height:"160px","object-fit":"cover"}},null,8,ot)]),t("div",nt,[t("h5",lt,n(e.product.title),1),t("p",null,"單價: "+n(e.product.price),1),t("div",at,[t("div",dt,[v(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":s=>e.qty=s,disabled:e.id===m.loadingItem,onChange:s=>o.updateCart(e)},[e.qty<=10?(l(),a(i,{key:0},r(10,s=>t("option",{value:s,key:`${s}qty`},n(s),9,rt)),64)):(l(!0),a(i,{key:1},r(e.qty,s=>(l(),a("option",{value:s,key:s+"qty"},n(s),9,ct))),128))],40,it),[[g,e.qty]])]),t("p",ut,[pt,c(" "+n(e.final_total),1)])])])])]))),128)),t("h5",ht,"總計: "+n(o.cart.total),1),t("h5",_t,"折扣價: "+n(o.cart.final_total),1)]),t("div",mt,[u(h,{to:"/products",class:"btn btn-outline-primary me-2"},{default:_(()=>[c("繼續購物")]),_:1}),u(h,{to:"/checkout",class:"btn btn-primary"},{default:_(()=>[c("下一步 | 填寫資料")]),_:1})])],64)):(l(),a(i,{key:1},[bt,t("div",yt,[u(h,{to:"/products",class:"btn btn-primary me-2 btn-lg"},{default:_(()=>[c("挑行程")]),_:1})])],64))])],64)}const Lt=w(U,[["render",gt],["__scopeId","data-v-001f77f1"]]);export{Lt as default};
