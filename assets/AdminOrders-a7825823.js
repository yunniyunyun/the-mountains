import{S as c}from"./sweetalert2.all-fda0963d.js";import{M as O}from"./bootstrap.esm-434bcbc7.js";import{p as C}from"./PaginationVue-d0044a15.js";import{b7 as k,ak as n,m as i,n as e,t as M,aK as o,s as A,aw as b,u as g,F as f,au as y,l as V,b4 as v}from"./_plugin-vue_export-helper-21b08155.js";import{l as P,v as w}from"./runtime-dom.esm-bundler-ff2db17e.js";import"./_commonjsHelpers-042e6b4d.js";const D={props:["tempOrder","deleteOrder"]},E={id:"delOrderModal",ref:"delOrderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},B={class:"modal-dialog"},I={class:"modal-content border-0"},T=e("div",{class:"modal-header bg-danger text-white"},[e("h5",{id:"delOrderModalLabel",class:"modal-title"},[e("span",null,"刪除訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},S={class:"fw-bold"},N=e("strong",{class:"text-danger"},null,-1),R={class:"modal-footer"},j=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function q(l,t,a,u,d,r){return n(),i("div",E,[e("div",B,[e("div",I,[T,e("div",U,[M(" 是否刪除 "),e("span",S,o(a.tempOrder.create_at),1),N,M(" 訂單(刪除後將無法恢復)。 ")]),e("div",R,[j,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...m)=>a.deleteOrder&&a.deleteOrder(...m))}," 確認刪除 ")])])])],512)}const F=k(D,[["render",q]]),H={props:["deleteItem"]},z={id:"delAllModal",ref:"delAllModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delAllModalLabel","aria-hidden":"true"},K={class:"modal-dialog"},G={class:"modal-content border-0"},J=A('<div class="modal-header bg-danger text-white"><h5 id="delAllModalLabel" class="modal-title"><span>刪除全部訂單</span></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body"> 是否刪除 <strong class="text-danger">全部訂單</strong>(刪除後將無法恢復)。 </div>',2),Q={class:"modal-footer"},W=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function X(l,t,a,u,d,r){return n(),i("div",z,[e("div",K,[e("div",G,[J,e("div",Q,[W,e("button",{type:"button",class:"btn btn-danger",onClick:t[0]||(t[0]=(...m)=>a.deleteItem&&a.deleteItem(...m))}," 確認刪除 ")])])])],512)}const Y=k(H,[["render",X]]),{VITE_APP_URL:_,VITE_APP_PATH:p}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/the-mountains/",MODE:"production",DEV:!1,PROD:!0},Z={data(){return{isLoading:!1,orders:[],page:{},tempOrder:"",orderModal:"",delOrderModal:"",delAllModal:""}},methods:{checkLogin(){const l=`${_}/api/user/check`;this.$http.post(l).then(()=>{this.getOrder()}).catch(t=>{c.fire({icon:"error",title:t.response.data.message}),window.location="login.html"})},getOrder(l=1){this.isLoading=!0;const t=`${_}/api/${p}/admin/orders/?page=${l}`;this.$http.get(t).then(a=>{this.isLoading=!1,this.orders=a.data.orders,this.page=a.data.pagination}).catch(a=>{this.isLoading=!1,c.fire({icon:"error",title:a.response.data.message})})},updatePaid(l){this.isLoading=!0;const t=`${_}/api/${p}/admin/order/${l.id}`,a={is_paid:l.is_paid};this.$http.put(t,{data:a}).then(u=>{c.fire({icon:"success",title:u.data.message,showConfirmButton:!1,timer:1500}),this.getOrder(),this.isLoading=!1}).catch(u=>{this.isLoading=!1,c.fire({icon:"error",title:u.response.data.message})})},updateOrder(){this.isLoading=!0;const l=`${_}/api/${p}/admin/order/${this.tempOrder.id}`;this.$http.put(l,{data:this.tempOrder}).then(t=>{this.orderModal.hide(),c.fire({icon:"success",title:t.data.message,showConfirmButton:!1,timer:1500}),this.getOrder(),this.isLoading=!1}).catch(t=>{this.isLoading=!1,c.fire({icon:"error",title:t.response.data.message})})},deleteOrders(){this.isLoading=!0;const l=`${_}/api/${p}/admin/orders/all`;this.$http.delete(l).then(t=>{this.delAllModal.hide(),c.fire({icon:"success",title:t.data.message,showConfirmButton:!1,timer:1500}),this.getOrder(),this.isLoading=!1}).catch(t=>{this.isLoading=!1,c.fire({icon:"error",title:t.response.data.message})})},deleteOrder(){this.isLoading=!0;const l=`${_}/api/${p}/admin/order/${this.tempOrder.id}`;this.$http.delete(l).then(t=>{this.delOrderModal.hide(),c.fire({icon:"success",title:t.data.message,showConfirmButton:!1,timer:1500}),this.getOrder(),this.isLoading=!1}).catch(t=>{this.isLoading=!1,c.fire({icon:"error",title:t.response.data.message})})},openModal(l,t){l==="edit"?(this.tempOrder={...t},this.orderModal.show()):l==="delete"?(this.tempOrder={...t},this.delOrderModal.show()):l==="deleteAll"&&this.delAllModal.show()}},components:{pagination:C,DeleteOrderModal:F,DeleteAllModal:Y},mounted(){this.isLoading=!0,this.orderModal=new O(document.getElementById("orderModal"),{keyboard:!1}),this.delOrderModal=new O(document.getElementById("delOrderModal"),{keyboard:!1}),this.delAllModal=new O(document.getElementById("delAllModal"),{keyboard:!1});const l=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=l,this.checkLogin()}},ee={class:"container"},te={class:"mt-4 d-flex justify-content-between align-items-end"},se=e("h2",{class:"mt-4"},"訂單列表",-1),le={class:"table mt-4"},de=e("thead",null,[e("tr",null,[e("th",{width:"150"}," 訂單時間 "),e("th",{width:"220"}," Email "),e("th",{width:"120"}," 電話 "),e("th",null," 品項 "),e("th",{width:"100"}," 訂單金額 "),e("th",{width:"120"}," 訂單狀態 "),e("th",{width:"120"}," 編輯 ")])],-1),oe={class:"form-check form-switch"},ne=["id","onUpdate:modelValue","onChange"],ie=["for"],ae={key:0,class:"text-success"},re={key:1},ce={class:"btn-group"},he=["onClick"],ue=["onClick"],_e={id:"orderModal",ref:"orderModal",class:"modal fade",tabindex:"-1","aria-labelledby":"orderModalLabel","aria-hidden":"true"},me={class:"modal-dialog modal-xl modal-dialog-scrollable"},pe={class:"modal-content border-0"},be=e("div",{class:"modal-header bg-dark text-white"},[e("h5",{id:"orderModalLabel",class:"modal-title"},[e("span",null,"編輯訂單")]),e("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),ge={class:"modal-body"},fe={class:"row"},Oe={class:"col-sm-4"},ye={class:"mb-3"},ve=e("h4",null,"訂購人資訊",-1),ke={class:"table"},Me={key:0},we=e("th",{style:{width:"100px"}},"姓名",-1),Le=e("th",null,"Email",-1),xe=e("th",null,"電話",-1),$e=e("th",null,"地址",-1),Ce={class:"col-sm-8"},Ae=e("h4",null,"訂單資訊",-1),Ve={class:"table"},Pe=e("th",{style:{width:"100px"}},"訂單編號",-1),De=e("th",null,"訂購時間",-1),Ee=e("th",null,"付款時間",-1),Be={key:0},Ie={key:1},Te=e("th",null,"付款狀態",-1),Ue={key:0,class:"text-success"},Se={key:1,class:"text-muted"},Ne=e("th",null,"總金額",-1),Re=e("h4",null,"訂單內容",-1),je={class:"table"},qe=e("thead",null,[e("tr",null,[e("th"),e("th",null,"名稱"),e("th",null,"數量"),e("th",null,"小計")])],-1),Fe=["src"],He={class:"text-end"},ze=e("h4",null,"留言",-1),Ke={class:"d-flex justify-content-end mt-2"},Ge={class:"form-check"},Je={class:"form-check-label",for:"flexCheckDefault"},Qe={key:0},We={key:1},Xe={class:"modal-footer"},Ye=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ze(l,t,a,u,d,r){const m=b("loadingVue"),L=b("pagination"),x=b("DeleteOrderModal"),$=b("DeleteAllModal");return n(),i(f,null,[g(m,{active:d.isLoading,"onUpdate:active":t[0]||(t[0]=s=>d.isLoading=s)},null,8,["active"]),e("div",ee,[e("div",te,[se,e("div",null,[e("button",{class:"btn btn-outline-danger",onClick:t[1]||(t[1]=s=>r.openModal("deleteAll",{}))}," 刪除全部訂單 ")])])]),e("table",le,[de,e("tbody",null,[(n(!0),i(f,null,y(d.orders,s=>(n(),i("tr",{key:s.id},[e("td",null,o(l.$filters.date(s.create_at)),1),e("td",null,o(s.user.email),1),e("td",null,o(s.user.tel),1),e("td",null,[(n(!0),i(f,null,y(s.products,h=>(n(),i("div",{key:h.id},o(h.product.title)+" ( 數量: "+o(h.qty)+" ) ",1))),128))]),e("td",null,o(s.total),1),e("td",null,[e("div",oe,[v(e("input",{class:"form-check-input",type:"checkbox",id:`paidSwitch${s.id}`,"onUpdate:modelValue":h=>s.is_paid=h,onChange:h=>r.updatePaid(s)},null,40,ne),[[w,s.is_paid]]),e("label",{class:"form-check-label",for:`paidSwitch${s.id}`},[s.is_paid?(n(),i("span",ae,"已付款")):(n(),i("span",re,"未付款"))],8,ie)])]),e("td",null,[e("div",ce,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:h=>r.openModal("edit",s)}," 編輯 ",8,he),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:h=>r.openModal("delete",s)}," 刪除 ",8,ue)])])]))),128))])]),g(L,{pages:d.page,"get-products":r.getOrder,onChangePage:r.getOrder},null,8,["pages","get-products","onChangePage"]),e("div",_e,[e("div",me,[e("div",pe,[be,e("div",ge,[e("div",fe,[e("div",Oe,[e("div",ye,[ve,e("table",ke,[d.tempOrder.user?(n(),i("tbody",Me,[e("tr",null,[we,e("td",null,o(d.tempOrder.user.name),1)]),e("tr",null,[Le,e("td",null,o(d.tempOrder.user.email),1)]),e("tr",null,[xe,e("td",null,o(d.tempOrder.user.tel),1)]),e("tr",null,[$e,e("td",null,o(d.tempOrder.user.address),1)])])):V("",!0)])])]),e("div",Ce,[Ae,e("table",Ve,[e("tbody",null,[e("tr",null,[Pe,e("td",null,o(d.tempOrder.id),1)]),e("tr",null,[De,e("td",null,o(l.$filters.date(d.tempOrder.create_at)),1)]),e("tr",null,[Ee,e("td",null,[d.tempOrder.paid_date?(n(),i("span",Be,o(l.$filters.date(d.tempOrder.paid_date)),1)):(n(),i("span",Ie))])]),e("tr",null,[Te,e("td",null,[d.tempOrder.is_paid?(n(),i("strong",Ue,"已付款")):(n(),i("span",Se,"尚未付款"))])]),e("tr",null,[Ne,e("td",null,o(d.tempOrder.total),1)])])]),Re,e("table",je,[qe,e("tbody",null,[(n(!0),i(f,null,y(d.tempOrder.products,s=>(n(),i("tr",{key:s.id},[e("th",null,[e("img",{src:s.product.imageUrl,class:"img-fluid",alt:"",style:{height:"120px"}},null,8,Fe)]),e("th",null,o(s.product.title),1),e("td",null,o(s.qty)+" "+o(s.product.unit),1),e("td",He,o(s.final_total),1)]))),128))])]),ze,e("div",null,[v(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":t[2]||(t[2]=s=>d.tempOrder.message=s)},null,512),[[P,d.tempOrder.message]])]),e("div",Ke,[e("div",Ge,[v(e("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":t[3]||(t[3]=s=>d.tempOrder.is_paid=s)},null,512),[[w,d.tempOrder.is_paid]]),e("label",Je,[d.tempOrder.is_paid?(n(),i("span",Qe,"已付款")):(n(),i("span",We,"未付款"))])])])])])]),e("div",Xe,[Ye,e("button",{type:"button",class:"btn btn-primary",onClick:t[4]||(t[4]=(...s)=>r.updateOrder&&r.updateOrder(...s))}," 修改訂單 ")])])])],512),g(x,{"temp-order":d.tempOrder,"delete-order":r.deleteOrder},null,8,["temp-order","delete-order"]),g($,{"delete-item":r.deleteOrders},null,8,["delete-item"])],64)}const nt=k(Z,[["render",Ze]]);export{nt as default};
