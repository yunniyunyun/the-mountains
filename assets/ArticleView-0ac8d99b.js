import{n as _}from"./runtime-dom.esm-bundler-ff2db17e.js";import{b7 as A,aw as m,ak as i,m as l,u as x,n as e,F as p,au as g,aK as r,l as y,b2 as k,t as B,ao as L,al as P}from"./_plugin-vue_export-helper-21b08155.js";const{VITE_APP_URL:f,VITE_APP_PATH:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/the-mountains/",MODE:"production",DEV:!1,PROD:!0},V={data(){return{isLoading:!1,article:{},preArticle:{},nextArticle:{}}},methods:{getArticle(){this.isLoading=!0;const{id:n}=this.$route.params;this.$http.get(`${f}/api/${v}/article/${n}`).then(s=>{this.article=s.data.article,this.getArticles(),this.isLoading=!1})},getArticles(){this.$http.get(`${f}/api/${v}/articles`).then(n=>{const s=n.data.articles,c=s.findIndex(u=>u.id===this.article.id);s[c-1]?this.preArticle=s[c-1]:this.preArticle={},s[c+1]?this.nextArticle=s[c+1]:this.nextArticle={}}).catch(n=>{console.dir(n)})},changePage(n){this.$router.push(`/article/${n}`)}},watch:{$route:"getArticle"},mounted(){this.isLoading=!0,this.getArticle()}},d=n=>(L("data-v-58a44625"),n=n(),P(),n),H=d(()=>e("div",{class:"header"},null,-1)),z={class:"container"},j={class:"mt-5 mb-3 d-flex flex-column justify-content-center align-items-center text-light",style:{border:"2px solid #373737","box-shadow":"8px 8px 20px rgba(0, 0, 0, 0.16)",background:"#373737"}},I=["src"],T={class:"mt-3"},E={class:"mt-3 mb-4"},M={class:"mb-3"},C={style:{color:"#438f73"}},U=["innerHTML"],R={class:"d-none d-lg-block"},S={class:"d-flex justify-content-between mb-3"},D=d(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#BAB8B8",class:"bi bi-arrow-left-circle me-2 icon",viewBox:"0 0 16 16"},[e("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})],-1)),N=d(()=>e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#BAB8B8",class:"bi bi-arrow-left-circle-fill me-2 icon-hover",viewBox:"0 0 16 16"},[e("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"})],-1)),F={class:"d-flex bg-dark text-light article-content",style:{"border-radius":"10px"}},O=["src"],X={class:"d-flex flex-column p-3 justify-content-center",style:{width:"240px"}},K={class:"mb-2"},q={class:"mt-1"},G={key:1},J={class:"d-flex bg-dark text-light article-content",style:{"border-radius":"10px"}},Q={class:"d-flex flex-column p-3 justify-content-center",style:{width:"240px"}},W={class:"mb-2"},Y={class:"mt-1"},Z=["src"],$={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#BAB8B8",class:"bi bi-arrow-left-circle ms-2 icon",viewBox:"0 0 16 16",style:{transform:"scaleX(-1)"}},ee=d(()=>e("path",{"fill-rule":"evenodd",d:"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"},null,-1)),te=[ee],se={xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"#BAB8B8",class:"bi bi-arrow-left-circle-fill ms-2 icon-hover",viewBox:"0 0 16 16",style:{transform:"scaleX(-1)"}},ie=d(()=>e("path",{d:"M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"},null,-1)),le=[ie],ne={key:3},oe={class:"d-flex justify-content-between mb-3 d-lg-none"},re={key:1},ce={class:"d-flex justify-content-center mb-5"};function ae(n,s,c,u,t,h){const b=m("loadingVue"),w=m("RouterLink");return i(),l(p,null,[x(b,{active:t.isLoading,"onUpdate:active":s[0]||(s[0]=o=>t.isLoading=o)},null,8,["active"]),H,e("div",z,[e("div",j,[e("img",{src:t.article.imageUrl,class:"img-fluid",alt:"",style:{width:"100%",height:"500px","object-fit":"cover"}},null,8,I),e("div",T,[(i(!0),l(p,null,g(t.article.tag,(o,a)=>(i(),l("span",{class:"badge bg-primary me-1",style:{"font-size":"14px"},key:a+"tag"},r(o),1))),128))]),e("h1",E,r(t.article.title),1),e("span",M,r(t.article.description),1),e("p",C,r(n.$filters.date(t.article.create_at)),1),e("p",{innerHTML:t.article.content,class:"p-5 container content",style:{"word-break":"break-all",overflow:"hidden"}},null,8,U)]),e("div",R,[e("div",S,[t.preArticle.id?(i(),l("a",{key:0,href:"#",class:"d-flex justify-content-center align-items-center changePage",onClick:s[1]||(s[1]=_(o=>h.changePage(t.preArticle.id),["prevent"])),style:{"text-decoration":"none",color:"inherit"}},[D,N,e("div",F,[e("img",{src:t.preArticle.imageUrl,alt:"...",style:{"border-radius":"10px 0px 0px 10px"}},null,8,O),e("div",X,[e("h5",K,r(t.preArticle.title),1),e("div",q,[(i(!0),l(p,null,g(t.preArticle.tag,(o,a)=>(i(),l("span",{class:"badge bg-primary me-1",key:a+"tag"},r(o),1))),128))])])])])):(i(),l("div",G)),t.nextArticle.id?(i(),l("a",{key:2,href:"#",class:"d-flex justify-content-center align-items-center changePage",onClick:s[2]||(s[2]=_(o=>h.changePage(t.nextArticle.id),["prevent"])),style:{"text-decoration":"none",color:"inherit"}},[e("div",J,[e("div",Q,[e("h5",W,r(t.nextArticle.title),1),e("div",Y,[(i(!0),l(p,null,g(t.nextArticle.tag,(o,a)=>(i(),l("span",{class:"badge bg-primary me-1",key:a+"tag"},r(o),1))),128))])]),e("img",{src:t.nextArticle.imageUrl,alt:"...",style:{"border-radius":"0px 10px 10px 0px"}},null,8,Z)]),(i(),l("svg",$,te)),(i(),l("svg",se,le))])):(i(),l("div",ne))])]),e("div",oe,[t.preArticle.id?(i(),l("a",{key:0,href:"#",class:"btn btn-outline-secondary",onClick:s[3]||(s[3]=_(o=>h.changePage(t.preArticle.id),["prevent"]))},"前一篇")):(i(),l("div",re)),t.nextArticle.id?(i(),l("a",{key:2,href:"#",class:"btn btn-outline-secondary",onClick:s[4]||(s[4]=_(o=>h.changePage(t.nextArticle.id),["prevent"]))},"後一篇")):y("",!0)]),e("div",ce,[x(w,{to:"/articles",class:"btn btn-outline-secondary",href:"#"},{default:k(()=>[B("回文章分享")]),_:1})])])],64)}const _e=A(V,[["render",ae],["__scopeId","data-v-58a44625"]]);export{_e as default};