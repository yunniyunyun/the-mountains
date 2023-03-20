import{S as m}from"./sweetalert2.all-fda0963d.js";import{M as k}from"./bootstrap.esm-434bcbc7.js";import{p as C}from"./PaginationVue-d0044a15.js";import{D as I}from"./DeleteModal-2c95341f.js";import{C as D}from"./ckeditor-f83367a1.js";import{l as r,n as T,v as y}from"./runtime-dom.esm-bundler-ff2db17e.js";import{b7 as A,aw as f,ak as i,m as n,u as P,n as t,F as v,au as w,b4 as d,l as U,aK as _}from"./_plugin-vue_export-helper-21b08155.js";import"./_commonjsHelpers-042e6b4d.js";const{VITE_APP_URL:p,VITE_APP_PATH:g}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/the-mountains/",MODE:"production",DEV:!1,PROD:!0},E={data(){return{uploalImageUrl:"",isLoading:!1,isNew:!1,products:[],tempProduct:{create_at:new Date().getTime()/1e3,unit:"人",tag:[]},productModal:"",delProductModal:"",page:{},editor:D,editorData:"<p>Hello world!!</p>",editorConfig:{dataProcessor:{writer:{enter:"<br>"}}},create_at:new Date().getTime()/1e3,Images:""}},methods:{checkLogin(){const l=`${p}/api/user/check`;this.$http.post(l).then(()=>{this.getData()}).catch(e=>{m.fire({icon:"error",title:e.response.data.message}),window.location="login.html"})},getData(l=1){this.isLoading=!0;const e=`${p}/api/${g}/admin/products/?page=${l}`;this.$http.get(e).then(u=>{this.products=u.data.products,this.page=u.data.pagination,this.isLoading=!1}).catch(u=>{this.isLoading=!1,m.fire({icon:"error",title:u.response.data.message})})},updateItem(){this.isLoading=!0;let l=`${p}/api/${g}/admin/product`;this.isNew?this.$http.post(l,{data:this.tempProduct}).then(e=>{this.productModal.hide(),m.fire({icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),this.getData(),this.isLoading=!1}).catch(e=>{this.isLoading=!1,m.fire({icon:"error",title:e.response.data.message})}):(l=`${p}/api/${g}/admin/product/${this.tempProduct.id}`,this.$http.put(l,{data:this.tempProduct}).then(e=>{this.productModal.hide(),m.fire({icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),this.getData(),this.isLoading=!1}).catch(e=>{this.isLoading=!1,m.fire({icon:"error",title:e.response.data.message})}))},deleteItem(){this.isLoading=!0;const l=`${p}/api/${g}/admin/product/${this.tempProduct.id}`;this.$http.delete(l).then(e=>{this.delProductModal.hide(),m.fire({icon:"success",title:e.data.message,showConfirmButton:!1,timer:1500}),this.getData(),this.isLoading=!1}).catch(e=>{this.isLoading=!1,m.fire({icon:"error",title:e.response.data.message})})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")},openModal(l,e){this.tempProduct={...e},l==="new"?(this.tempProduct={create_at:new Date().getTime()/1e3,unit:"人",tag:[]},this.isNew=!0,this.productModal.show()):l==="edit"?(this.isNew=!1,this.productModal.show()):l==="delete"&&(this.isNew=!1,this.delProductModal.show())},uploadFile(){this.Images=this.$refs.file.files[0]},uploadImage(){this.isLoading=!0;const l=new FormData;l.append("file",this.Images);const e={"Content-Type":"multipart/form-data"},u=`${p}/api/${g}/admin/upload`;this.$http.post(u,l,{headers:e}).then(h=>{console.log(h.data),this.uploalImageUrl=h.data.imageUrl,this.isLoading=!1,this.$refs.form.resetForm()}).catch(h=>{this.isLoading=!1,m.fire({icon:"error",title:h.data.message}),this.$refs.form.resetForm()})}},watch:{tempProduct(){const l=new Date(this.tempProduct.create_at*1e3).toISOString().split("T");[this.create_at]=l,this.tempProduct.tag||(this.tempProduct.tag=[])},create_at(){this.tempProduct.create_at=Math.floor(new Date(this.create_at)/1e3)}},components:{pagination:C,DeleteProductModal:I},mounted(){this.isLoading=!0,this.productModal=new k(document.getElementById("productModal"),{keyboard:!1}),this.delProductModal=new k(document.getElementById("delModal"),{keyboard:!1});const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,this.checkLogin()}},B={class:"container"},N={class:"mt-4 d-flex justify-content-between align-items-end"},F=t("h2",{class:"mt-4"},"產品列表",-1),S={class:"table mt-4"},R=t("thead",null,[t("tr",null,[t("th",{width:"100"}," 分類 "),t("th",{width:"100"}," 等級 "),t("th",null,"產品名稱"),t("th",{width:"100"}," 原價 "),t("th",{width:"100"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),H={class:"badge bg-primary"},O={class:"text-end"},j={class:"text-end"},z={key:0,class:"text-success"},K={key:1},Z={class:"btn-group"},q=["onClick"],G=["onClick"],J={id:"productModal",ref:"productModal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Q={class:"modal-dialog modal-xl modal-dialog-scrollable"},W={class:"modal-content border-0"},X={class:"modal-header bg-dark text-white"},Y={id:"productModalLabel",class:"modal-title"},$={key:0},tt={key:1},et=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),ot={class:"modal-body"},st={class:"row"},lt={class:"col-sm-4"},it={class:"mb-3"},nt=t("label",{for:"create_at",class:"form-label"},"建立日期",-1),dt={class:"mb-3"},at={class:"mb-2"},rt={enctype:"multipart/form-data",method:"post",class:"row me-1",onSubmit:"uploadImage"},ct={class:"mb-3"},mt=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),ut=["src"],pt=t("h3",{class:"mb-3"},"多圖新增",-1),ht={key:0},_t={class:"mb-3"},gt=t("label",{for:"imageUrl",class:"form-label"},"圖片網址",-1),bt=["onUpdate:modelValue"],ft=["src"],Pt={key:0},vt={key:1},yt={key:1},wt={class:"col-sm-8"},kt={class:"mb-3"},Ut=t("label",{for:"title",class:"form-label"},"標題",-1),xt={class:"mb-3"},Mt=t("label",{for:"tag",class:"form-label"},"標籤",-1),Lt={key:0,class:"row gx-1 mb-3"},Vt={class:"input-group input-group-sm"},Ct=["onUpdate:modelValue"],It=["onClick"],Dt=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-x-lg",viewBox:"0 0 16 16"},[t("path",{d:"M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"})],-1),Tt=[Dt],At={key:0,class:"col-md-2 mb-1"},Et={class:"row"},Bt={class:"mb-3 col-md-4"},Nt=t("label",{for:"category",class:"form-label"},"分類",-1),Ft={class:"mb-3 col-md-4"},St=t("label",{for:"level",class:"form-label"},"等級",-1),Rt={class:"mb-3 col-md-4"},Ht=t("label",{for:"price",class:"form-label"},"單位",-1),Ot={class:"row"},jt={class:"mb-3 col-md-4"},zt=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Kt={class:"mb-3 col-md-4"},Zt=t("label",{for:"price",class:"form-label"},"售價",-1),qt={class:"mb-3 col-md-4"},Gt=t("label",{class:"form-label"},null,-1),Jt={class:"form-check"},Qt=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Wt={class:"form-check"},Xt=t("label",{class:"form-check-label",for:"is_hot"},"熱門活動",-1),Yt={class:"form-check"},$t=t("label",{class:"form-check-label",for:"is_home"},"首頁推薦",-1),te=t("hr",null,null,-1),ee={class:"mb-3"},oe=t("label",{for:"description",class:"form-label"},"產品描述",-1),se={class:"mb-3"},le=t("label",{for:"content",class:"form-label"},"說明內容",-1),ie={class:"modal-footer"},ne=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function de(l,e,u,h,o,a){const x=f("loadingVue"),M=f("pagination"),L=f("ckeditor"),V=f("DeleteProductModal");return i(),n(v,null,[P(x,{active:o.isLoading,"onUpdate:active":e[0]||(e[0]=s=>o.isLoading=s)},null,8,["active"]),t("div",B,[t("div",N,[F,t("div",null,[t("button",{class:"btn btn-primary",onClick:e[1]||(e[1]=s=>a.openModal("new",{}))}," 建立新的產品 ")])]),t("table",S,[R,t("tbody",null,[(i(!0),n(v,null,w(o.products,s=>(i(),n("tr",{key:s.id},[t("td",null,[t("div",H,_(s.category),1)]),t("td",null,_(s.level),1),t("td",null,_(s.title),1),t("td",O,_(s.origin_price),1),t("td",j,_(s.price),1),t("td",null,[s.is_enabled?(i(),n("span",z,"啟用")):(i(),n("span",K,"未啟用"))]),t("td",null,[t("div",Z,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:c=>a.openModal("edit",s)}," 編輯 ",8,q),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:c=>a.openModal("delete",s)}," 刪除 ",8,G)])])]))),128))])])]),P(M,{pages:o.page,"get-products":a.getData,onChangePage:a.getData},null,8,["pages","get-products","onChangePage"]),t("div",J,[t("div",Q,[t("div",W,[t("div",X,[t("h5",Y,[o.isNew?(i(),n("span",$,"新增產品")):(i(),n("span",tt,"編輯產品"))]),et]),t("div",ot,[t("div",st,[t("div",lt,[t("div",it,[nt,d(t("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":e[2]||(e[2]=s=>o.create_at=s)},null,512),[[r,o.create_at]])]),t("div",dt,[t("div",at,[t("form",rt,[t("input",{type:"file",name:"file-to-upload",class:"col-8",onChange:e[3]||(e[3]=(...s)=>a.uploadFile&&a.uploadFile(...s)),ref:"file"},null,544),t("input",{type:"submit",value:"Upload",onClick:e[4]||(e[4]=T((...s)=>a.uploadImage&&a.uploadImage(...s),["prevent"])),class:"btn btn-outline-primary col-4"})]),d(t("input",{type:"text","onUpdate:modelValue":e[5]||(e[5]=s=>o.uploalImageUrl=s),class:"form-control",placeholder:"圖片連結"},null,512),[[r,o.uploalImageUrl]])]),t("div",ct,[mt,d(t("input",{type:"text","onUpdate:modelValue":e[6]||(e[6]=s=>o.tempProduct.imageUrl=s),class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[r,o.tempProduct.imageUrl]])]),t("img",{class:"img-fluid",src:o.tempProduct.imageUrl,alt:""},null,8,ut)]),pt,o.tempProduct.imagesUrl?(i(),n("div",ht,[(i(!0),n(v,null,w(o.tempProduct.imagesUrl,(s,c)=>(i(),n("div",{class:"mb-1",key:c},[t("div",_t,[gt,d(t("input",{"onUpdate:modelValue":b=>o.tempProduct.imagesUrl[c]=b,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,bt),[[r,o.tempProduct.imagesUrl[c]]])]),t("img",{class:"img-fluid",src:s},null,8,ft)]))),128)),!o.tempProduct.imagesUrl.length||o.tempProduct.imagesUrl[o.tempProduct.imagesUrl.length-1]?(i(),n("div",Pt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[7]||(e[7]=s=>o.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(i(),n("div",vt,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[8]||(e[8]=s=>o.tempProduct.imagesUrl.pop(""))}," 刪除圖片 ")]))])):(i(),n("div",yt,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[9]||(e[9]=(...s)=>a.createImages&&a.createImages(...s))}," 新增圖片 ")]))]),t("div",wt,[t("div",kt,[Ut,d(t("input",{id:"title","onUpdate:modelValue":e[10]||(e[10]=s=>o.tempProduct.title=s),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[r,o.tempProduct.title]])]),t("div",xt,[Mt,o.tempProduct.tag?(i(),n("div",Lt,[(i(!0),n(v,null,w(o.tempProduct.tag,(s,c)=>(i(),n("div",{class:"col-md-2 mb-1",key:c},[t("div",Vt,[d(t("input",{type:"text",class:"form-control form-control",id:"tag","onUpdate:modelValue":b=>o.tempProduct.tag[c]=b,placeholder:"請輸入標籤"},null,8,Ct),[[r,o.tempProduct.tag[c]]]),t("button",{type:"button",class:"btn btn-outline-danger",onClick:b=>o.tempProduct.tag.splice(c,1)},Tt,8,It)])]))),128)),o.tempProduct.tag[o.tempProduct.tag.length-1]||!o.tempProduct.tag.length?(i(),n("div",At,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",type:"button",onClick:e[11]||(e[11]=s=>o.tempProduct.tag.push(""))}," 新增標籤 ")])):U("",!0)])):U("",!0)]),t("div",Et,[t("div",Bt,[Nt,d(t("input",{id:"category","onUpdate:modelValue":e[12]||(e[12]=s=>o.tempProduct.category=s),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[r,o.tempProduct.category]])]),t("div",Ft,[St,d(t("input",{id:"level","onUpdate:modelValue":e[13]||(e[13]=s=>o.tempProduct.level=s),type:"text",class:"form-control",placeholder:"請輸入等級"},null,512),[[r,o.tempProduct.level]])]),t("div",Rt,[Ht,d(t("input",{id:"unit","onUpdate:modelValue":e[14]||(e[14]=s=>o.tempProduct.unit=s),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[r,o.tempProduct.unit]])])]),t("div",Ot,[t("div",jt,[zt,d(t("input",{id:"origin_price","onUpdate:modelValue":e[15]||(e[15]=s=>o.tempProduct.origin_price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[r,o.tempProduct.origin_price]])]),t("div",Kt,[Zt,d(t("input",{id:"price","onUpdate:modelValue":e[16]||(e[16]=s=>o.tempProduct.price=s),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[r,o.tempProduct.price]])]),t("div",qt,[Gt,t("div",Jt,[d(t("input",{id:"is_enabled","onUpdate:modelValue":e[17]||(e[17]=s=>o.tempProduct.is_enabled=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[y,o.tempProduct.is_enabled]]),Qt]),t("div",Wt,[d(t("input",{id:"is_hot","onUpdate:modelValue":e[18]||(e[18]=s=>o.tempProduct.is_hot=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[y,o.tempProduct.is_hot]]),Xt]),t("div",Yt,[d(t("input",{id:"is_home","onUpdate:modelValue":e[19]||(e[19]=s=>o.tempProduct.is_home=s),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[y,o.tempProduct.is_home]]),$t])])]),te,t("div",ee,[oe,d(t("textarea",{id:"description","onUpdate:modelValue":e[20]||(e[20]=s=>o.tempProduct.description=s),type:"text",class:"form-control",placeholder:"請輸入產品描述",rows:"5"},`\r
                    `,512),[[r,o.tempProduct.description]])]),t("div",se,[le,P(L,{editor:o.editor,config:o.editorConfig,modelValue:o.tempProduct.content,"onUpdate:modelValue":e[21]||(e[21]=s=>o.tempProduct.content=s)},null,8,["editor","config","modelValue"])])])])]),t("div",ie,[ne,t("button",{type:"button",class:"btn btn-primary",onClick:e[22]||(e[22]=(...s)=>a.updateItem&&a.updateItem(...s))}," 確認 ")])])])],512),P(V,{item:o.tempProduct,"delete-item":a.deleteItem},null,8,["item","delete-item"])],64)}const ge=A(E,[["render",de]]);export{ge as default};
