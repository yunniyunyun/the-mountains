import{b as x}from"./vue-router-d7550456.js";import{p as A}from"./PaginationVue-d0044a15.js";import{b7 as L,aw as c,ak as a,m as i,u as l,n as t,F as r,au as g,b2 as P,aK as d,ao as y,al as V}from"./_plugin-vue_export-helper-21b08155.js";import"./runtime-dom.esm-bundler-ff2db17e.js";const{VITE_APP_URL:w,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/the-mountains/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{isLoading:!1,articles:[],page:{}}},components:{RouterLink:x,pagination:A},methods:{getArticles(o=1){this.$http.get(`${w}/api/${b}/articles/?page=${o}`).then(s=>{this.isLoading=!1,this.articles=s.data.articles,this.page=s.data.pagination}).catch(s=>{this.isLoading=!1,console.dir(s)})}},mounted(){this.isLoading=!0,this.getArticles()}},_=o=>(y("data-v-24211950"),o=o(),V(),o),E=_(()=>t("div",{class:"header"},null,-1)),I={class:"container"},R=_(()=>t("div",{class:"mt-5"},null,-1)),T={class:"row row-cols-md-3 row-cols-lg-5 my-3 g-4"},S={class:"card position-relative"},U=_(()=>t("h4",{class:"text-center text-light",style:{"margin-top":"60px"}},"查看更多",-1)),B=["src"],C={class:"card-body d-flex flex-column"},D={class:"card-title mb-auto"},$={class:"mt-1"},F={class:"mt-2 mb-2",style:{"font-size":"14px"}};function H(o,s,N,O,n,p){const u=c("loadingVue"),h=c("RouterLink"),m=c("pagination");return a(),i(r,null,[l(u,{active:n.isLoading,"onUpdate:active":s[0]||(s[0]=e=>n.isLoading=e)},null,8,["active"]),E,t("div",I,[R,t("div",T,[(a(!0),i(r,null,g(n.articles,e=>(a(),i("div",{class:"col card-group",key:e.id},[t("div",S,[l(h,{to:`/article/${e.id}`,class:"more position-absolute",style:{width:"100%",height:"100%","text-decoration":"none",color:"inherit"}},{default:P(()=>[U]),_:2},1032,["to"]),t("img",{src:e.imageUrl,class:"card-img-top",alt:"...",style:{height:"150px"}},null,8,B),t("div",C,[t("h5",D,d(e.title),1),t("div",$,[(a(!0),i(r,null,g(e.tag,(v,f)=>(a(),i("span",{class:"badge bg-primary me-1",key:f+"tag"},d(v),1))),128))]),t("p",F,d(e.description),1)])])]))),128))]),l(m,{pages:n.page,"get-products":p.getArticles,onChangePage:p.getArticles},null,8,["pages","get-products","onChangePage"])])],64)}const q=L(k,[["render",H],["__scopeId","data-v-24211950"]]);export{q as default};
