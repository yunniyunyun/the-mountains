import{g as l,h as a}from"./index-d7f509c9.js";import{S as d}from"./sweetalert2.all-e66135d4.js";const c=l("loadingStore",{state:()=>({isLoading:!1}),actions:{loadingTrue(){this.isLoading=!0},loadingFalse(){this.isLoading=!1}}}),{VITE_APP_URL:i,VITE_APP_PATH:o}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"winter_",BASE_URL:"/vue-hw-7/",MODE:"production",DEV:!1,PROD:!0},{loadingTrue:e,loadingFalse:s}=c(),F=l("cartStore",{state:()=>({cart:[]}),actions:{addToCart(t,r=1){e();const n={product_id:t,qty:r};a.post(`${i}/api/${o}/cart`,{data:n}).then(h=>{this.getCarts(),d.fire({background:"#0A603C",color:"#FFFFFF",width:350,position:"top-end",showConfirmButton:!1,timer:1e3,title:"加入購物車"}),s()})},getCarts(){e(),a.get(`${i}/api/${o}/cart`).then(t=>{this.isLoading=!1,this.cart=t.data.data,s()})},updateCart(t){e();const r={product_id:t.id,qty:t.qty};this.loadingItem=t.id,a.put(`${i}/api/${o}/cart/${t.id}`,{data:r}).then(n=>{this.getCarts(),this.loadingItem="",d.fire({background:"#0A603C",color:"#FFFFFF",width:350,position:"top-end",showConfirmButton:!1,timer:1e3,title:"購物車已更新"}),s()})},deleteCart(t){e(),this.loadingItem=t.id,a.delete(`${i}/api/${o}/cart/${t.id}`).then(r=>{this.getCarts(),this.loadingItem="",d.fire({background:"#b47978",color:"#FFFFFF",width:350,position:"top-end",showConfirmButton:!1,timer:1e3,title:"已刪除"}),s()})},deleteCarts(){e(),a.delete(`${i}/api/${o}/carts`).then(t=>{this.getCarts(),this.loadingItem="",s()})}}});export{F as c,c as l};
