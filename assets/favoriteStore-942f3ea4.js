import{i as n}from"./index-00515f93.js";import{S as a}from"./sweetalert2.all-6e9d9825.js";import{p as c}from"./productsStore-c2dd6523.js";import{l as d}from"./loadingStore-44f701ee.js";const{loadingTrue:v,loadingFalse:g}=d(),u=n("favoriteStore",{state:()=>({favorite:[]}),actions:{addToFavorite(e){v();const t=localStorage.getItem("favorite");t&&(this.favorite=JSON.parse(t)),this.favorite.find(o=>o.productId===e)||this.favorite.push({id:new Date().getTime(),date:new Date().getTime()/1e3,productId:e});const i=JSON.stringify(this.favorite);localStorage.setItem("favorite",i),a.fire({background:"#E69597",color:"#FFFFFF",width:350,position:"top-end",showConfirmButton:!1,timer:1e3,title:"已收藏"}),g()},removeFavoriteItem(e){let t=localStorage.getItem("favorite");t&&(this.favorite=JSON.parse(t));const r=this.favorite.findIndex(o=>o.id===e);this.favorite.splice(r,1);const i=JSON.stringify(this.favorite);localStorage.setItem("favorite",i),t=localStorage.getItem("favorite"),t&&(this.favorite=JSON.parse(t)),a.fire({background:"#b47978",color:"#FFFFFF",width:350,position:"top-end",showConfirmButton:!1,timer:1e3,title:"已移除收藏"})}},getters:{favoriteList:({favorite:e})=>{const t=localStorage.getItem("favorite");t&&(e=JSON.parse(t));const{products:r}=c();return{favoriteList:e.map(o=>{const s=r.find(f=>f.id===o.productId);return{...o,product:s}})}},favoriteIDs:({favorite:e})=>{const t=localStorage.getItem("favorite");t&&(e=JSON.parse(t));const r=e.map(o=>o.productId),i=e.map(o=>o.id);return{product:r,favorite:i}}}});export{u as f};
