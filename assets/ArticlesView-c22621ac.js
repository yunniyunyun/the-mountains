import{b as x}from"./vue-router-d7550456.js";import{p as A}from"./FrontPaginationVue-95eda64e.js";import{b7 as P,aw as c,ak as a,m as i,u as l,n as t,F as r,au as g,b2 as y,aK as d,ao as L,al as w}from"./_plugin-vue_export-helper-21b08155.js";import"./runtime-dom.esm-bundler-ff2db17e.js";const{VITE_APP_URL:V,VITE_APP_PATH:b}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/the-mountains/",MODE:"production",DEV:!1,PROD:!0},k={data(){return{isLoading:!1,articles:[],page:{}}},components:{RouterLink:x,pagination:A},methods:{getArticles(e=1){this.$http.get(`${V}/api/${b}/articles/?page=${e}`).then(o=>{this.isLoading=!1,this.articles=o.data.articles,this.page=o.data.pagination}).catch(o=>{this.isLoading=!1,console.dir(o)})}},mounted(){this.isLoading=!0,this.getArticles()}},_=e=>(L("data-v-3fc6002e"),e=e(),w(),e),E=_(()=>t("div",{class:"header"},null,-1)),I={class:"container"},R=_(()=>t("div",{class:"mt-5"},null,-1)),T={class:"row row-cols-sm-2 row-cols-md-3 row-cols-lg-5 my-3 g-4"},S={class:"card position-relative"},B=_(()=>t("h4",{class:"text-center text-light",style:{"margin-top":"60px"}},"查看更多",-1)),C=["src"],D={class:"card-body d-flex flex-column"},U={class:"card-title mb-auto"},$={class:"mt-1"},F={class:"mt-2 mb-2",style:{"font-size":"14px"}};function H(e,o,N,O,n,p){const h=c("loadingVue"),u=c("RouterLink"),m=c("pagination");return a(),i(r,null,[l(h,{active:n.isLoading},null,8,["active"]),E,t("div",I,[R,t("div",T,[(a(!0),i(r,null,g(n.articles,s=>(a(),i("div",{class:"col card-group",key:s.id},[t("div",S,[l(u,{to:`/article/${s.id}`,class:"more position-absolute",style:{width:"100%",height:"100%","text-decoration":"none",color:"inherit"}},{default:y(()=>[B]),_:2},1032,["to"]),t("img",{src:s.imageUrl,class:"card-img-top",alt:"...",style:{height:"150px"}},null,8,C),t("div",D,[t("h5",U,d(s.title),1),t("div",$,[(a(!0),i(r,null,g(s.tag,(f,v)=>(a(),i("span",{class:"badge bg-primary me-1",key:v+"tag"},d(f),1))),128))]),t("p",F,d(s.description),1)])])]))),128))]),l(m,{pages:n.page,"get-products":p.getArticles,onChangePage:p.getArticles},null,8,["pages","get-products","onChangePage"])])],64)}const q=P(k,[["render",H],["__scopeId","data-v-3fc6002e"]]);export{q as default};
