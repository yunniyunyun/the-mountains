import{c as E,a as h}from"./vue-router-d7550456.js";const l="modulepreload",d=function(p){return"/the-mountains/"+p},m={},t=function(c,i,s){if(!i||i.length===0)return c();const a=document.getElementsByTagName("link");return Promise.all(i.map(o=>{if(o=d(o),o in m)return;m[o]=!0;const r=o.endsWith(".css"),u=r?'[rel="stylesheet"]':"";if(!!s)for(let _=a.length-1;_>=0;_--){const n=a[_];if(n.href===o&&(!r||n.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${u}`))return;const e=document.createElement("link");if(e.rel=r?"stylesheet":l,r||(e.as="script",e.crossOrigin=""),e.href=o,document.head.appendChild(e),r)return new Promise((_,n)=>{e.addEventListener("load",_),e.addEventListener("error",()=>n(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>c())},v=[{path:"/",component:()=>t(()=>import("./FrontLayout-735ab0c1.js"),["assets/FrontLayout-735ab0c1.js","assets/vue-router-d7550456.js","assets/_plugin-vue_export-helper-21b08155.js","assets/pinia-e6b04fcb.js","assets/cartStore-17d0af91.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/FrontLayout-5c54fcdb.css"]),children:[{path:"",name:"Home",component:()=>t(()=>import("./HomeView-739578e3.js"),["assets/HomeView-739578e3.js","assets/productsStore-85409935.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/favoriteStore-b30e9eba.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/HomeView-7b3385a4.css"])},{path:"home",component:()=>t(()=>import("./HomeView-739578e3.js"),["assets/HomeView-739578e3.js","assets/productsStore-85409935.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/favoriteStore-b30e9eba.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/HomeView-7b3385a4.css"])},{path:"about",name:"About",component:()=>t(()=>import("./AboutView-787c5115.js"),["assets/AboutView-787c5115.js","assets/_plugin-vue_export-helper-21b08155.js"])},{path:"hots",component:()=>t(()=>import("./ProductsHotComponent-3a9fe984.js"),["assets/ProductsHotComponent-3a9fe984.js","assets/cartStore-17d0af91.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/productsStore-85409935.js","assets/ProductsHotComponent-9365e87c.css"])},{path:"latestEvents",component:()=>t(()=>import("./ProductsLatestComponent-1dcfed66.js"),["assets/ProductsLatestComponent-1dcfed66.js","assets/productsStore-85409935.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/ProductsLatestComponent-9de0dd60.css"])},{path:"products",component:()=>t(()=>import("./ProductsComponent-e237c70b.js"),["assets/ProductsComponent-e237c70b.js","assets/cartStore-17d0af91.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/PaginationVue-d0044a15.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/productsStore-85409935.js","assets/ProductsComponent-743715a6.css"])},{path:"product/:id",component:()=>t(()=>import("./ProductView-40961867.js"),["assets/ProductView-40961867.js","assets/cartStore-17d0af91.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/favoriteStore-b30e9eba.js","assets/productsStore-85409935.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/ProductView-d7058021.css"])},{path:"cart",component:()=>t(()=>import("./CartComponent-c6ef0cd1.js"),["assets/CartComponent-c6ef0cd1.js","assets/cartStore-17d0af91.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/CartComponent-7f239a8c.css"])},{path:"checkout",component:()=>t(()=>import("./CartCheckComponent-7464aa6c.js"),["assets/CartCheckComponent-7464aa6c.js","assets/cartStore-17d0af91.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/orderStore-8c3ca1af.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/vue-router-d7550456.js","assets/CartCheckComponent-af62c89f.css"])},{path:"order",component:()=>t(()=>import("./CartOrderComponent-67c07c73.js"),["assets/CartOrderComponent-67c07c73.js","assets/loadingStore-abd78020.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/orderStore-8c3ca1af.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/vue-router-d7550456.js","assets/CartOrderComponent-ee2bd35d.css"])},{path:"orders",component:()=>t(()=>import("./OrderComponent-23f6985c.js"),["assets/OrderComponent-23f6985c.js","assets/loadingStore-abd78020.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/orderStore-8c3ca1af.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/vue-router-d7550456.js","assets/OrderComponent-535cc5fb.css"])},{path:"login",component:()=>t(()=>import("./LoginView-c8fa989c.js"),["assets/LoginView-c8fa989c.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/_plugin-vue_export-helper-21b08155.js"])},{path:"articles",component:()=>t(()=>import("./ArticlesView-e652c34d.js"),["assets/ArticlesView-e652c34d.js","assets/vue-router-d7550456.js","assets/_plugin-vue_export-helper-21b08155.js","assets/PaginationVue-d0044a15.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/ArticlesView-11594444.css"])},{path:"article/:id",component:()=>t(()=>import("./ArticleView-ff55f712.js"),["assets/ArticleView-ff55f712.js","assets/_plugin-vue_export-helper-21b08155.js","assets/ArticleView-651f99a1.css"])},{path:"favorite",component:()=>t(()=>import("./FavoriteComponent-dea4503e.js"),["assets/FavoriteComponent-dea4503e.js","assets/productsStore-85409935.js","assets/pinia-e6b04fcb.js","assets/_plugin-vue_export-helper-21b08155.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/loadingStore-abd78020.js","assets/cartStore-17d0af91.js","assets/favoriteStore-b30e9eba.js","assets/FavoriteComponent-dc101bc1.css"])}]},{path:"/admin",component:()=>t(()=>import("./DashboardView-aebdc4a3.js"),["assets/DashboardView-aebdc4a3.js","assets/vue-router-d7550456.js","assets/_plugin-vue_export-helper-21b08155.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/DashboardView-acf9d8d9.css"]),children:[{path:"products",component:()=>t(()=>import("./AdminProducts-38c6ec66.js"),["assets/AdminProducts-38c6ec66.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/bootstrap.esm-434bcbc7.js","assets/PaginationVue-d0044a15.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/_plugin-vue_export-helper-21b08155.js","assets/DeleteModal-2c95341f.js","assets/ckeditor-f83367a1.js","assets/AdminProducts-40feaa3b.css"])},{path:"orders",component:()=>t(()=>import("./AdminOrders-a7825823.js"),["assets/AdminOrders-a7825823.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/bootstrap.esm-434bcbc7.js","assets/PaginationVue-d0044a15.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/_plugin-vue_export-helper-21b08155.js"])},{path:"coupons",component:()=>t(()=>import("./AdminCoupons-99224883.js"),["assets/AdminCoupons-99224883.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/bootstrap.esm-434bcbc7.js","assets/PaginationVue-d0044a15.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/_plugin-vue_export-helper-21b08155.js","assets/DeleteModal-2c95341f.js"])},{path:"article",component:()=>t(()=>import("./AdminArticle-851186f5.js"),["assets/AdminArticle-851186f5.js","assets/sweetalert2.all-fda0963d.js","assets/_commonjsHelpers-042e6b4d.js","assets/bootstrap.esm-434bcbc7.js","assets/PaginationVue-d0044a15.js","assets/runtime-dom.esm-bundler-ff2db17e.js","assets/_plugin-vue_export-helper-21b08155.js","assets/DeleteModal-2c95341f.js","assets/ckeditor-f83367a1.js","assets/AdminProducts-40feaa3b.css"])}]},{path:"/:pathMatch(.*)*",redirect:{name:"Home"}}],P=E({history:h(),linkActiveClass:"active",routes:v});export{P as r};
