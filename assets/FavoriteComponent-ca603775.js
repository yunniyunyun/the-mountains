import{p as b}from"./productsStore-c2dd6523.js";import{c as x}from"./cartStore-01d32aea.js";import{l as k}from"./loadingStore-44f701ee.js";import{f as _}from"./favoriteStore-942f3ea4.js";import{_ as F,m as p,B as m,r as h,o as s,c as i,b as v,a as t,F as u,C as L,g as C,t as a,w as S,f as $,p as w,h as I}from"./index-00515f93.js";import"./sweetalert2.all-6e9d9825.js";const B="/the-mountains/assets/favorite-title-9b287c3a.png";const V=b(),N={computed:{...p(k,["isLoading"]),...p(_,["favoriteList","favorite"])},methods:{...m(x,["addToCart"]),...m(_,["removeFavoriteItem"])},mounted(){V.getAllProducts()}},n=e=>(w("data-v-66486205"),e=e(),I(),e),T=n(()=>t("div",{class:"header"},null,-1)),U={class:"container"},A=n(()=>t("div",{class:"mt-5"},null,-1)),P=n(()=>t("h1",{class:"text-light text-center mb-5 d-none"},"收藏項目",-1)),R=n(()=>t("p",{class:"text-center"},[t("img",{src:B,class:"title-img",alt:"logo"})],-1)),j={key:0,class:"mb-5"},D={key:0},E={class:"col-md-3"},q={class:"position-relative"},z={class:"p-0 mb-0 d-lg-none text-secondary"},G=["src"],H=n(()=>t("h4",{class:"text-center text-light",style:{"margin-top":"30%"}},"了解更多",-1)),J={class:"col-md-6 col-lg-7 px-4"},K={class:"my-3 my-lg-4 text-truncate"},M={class:"product-description h5"},O={class:"d-flex justify-content-end mt-3"},Q={class:"h5"},W={class:"h4",style:{color:"#F7B2B7"}},X={class:"col-md-3 col-lg-2 d-flex d-md-block align-items-center"},Y={class:"p-3 d-none d-lg-block"},Z=["onClick"],tt=["onClick"],et={key:1,class:"text-center text-light"},ot=n(()=>t("p",null,"目前無收藏項目",-1)),st=[ot];function it(e,d,nt,at,dt,ct){var c,l,r;const g=h("loadingVue"),f=h("RouterLink");return s(),i(u,null,[v(g,{active:e.isLoading,"onUpdate:active":d[0]||(d[0]=o=>e.isLoading=o)},null,8,["active"]),T,t("div",U,[A,P,R,((c=e.favoriteList)==null?void 0:c.favoriteList.length)>0?(s(),i("div",j,[(r=(l=e.favoriteList.favoriteList[0])==null?void 0:l.product)!=null&&r.imageUrl?(s(),i("div",D,[(s(!0),i(u,null,L(e.favoriteList.favoriteList,o=>(s(),i("div",{class:"row py-4 text-light",key:o.id,style:{"border-bottom":"1px solid #FFFFFF"}},[t("div",E,[t("div",q,[t("p",z,a(e.$filters.date(o.date))+" 收藏",1),t("img",{src:o.product.imageUrl,alt:"",style:{width:"100%"}},null,8,G),v(f,{to:`/product/${o.productId}`,class:"more position-absolute",style:{width:"100%",height:"100%","text-decoration":"none",color:"inherit",left:"0"}},{default:S(()=>[H]),_:2},1032,["to"])])]),t("div",J,[t("h4",K,a(o.product.title),1),t("p",M,a(o.product.description),1),t("div",O,[t("p",Q,[$(" 優惠價: "),t("span",W,a(o.product.price),1)])])]),t("div",X,[t("p",Y,a(e.$filters.date(o.date))+" 加入收藏",1),t("button",{type:"button",class:"ms-md-2 btn btn-primary",style:{width:"160px",height:"38px"},onClick:y=>e.addToCart(o.product.id)},"加入購物車",8,Z),t("button",{type:"button",class:"ms-3 ms-md-2 btn btn-outline-danger mt-md-3",style:{width:"160px",height:"38px"},onClick:y=>e.removeFavoriteItem(o.id)},"移除收藏",8,tt)])]))),128))])):C("",!0)])):(s(),i("div",et,st))])],64)}const vt=F(N,[["render",it],["__scopeId","data-v-66486205"]]);export{vt as default};
