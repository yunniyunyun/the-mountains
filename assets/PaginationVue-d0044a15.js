import{n}from"./runtime-dom.esm-bundler-ff2db17e.js";import{b7 as c,ak as i,m as r,n as a,a4 as o,F as g,au as d,aK as _}from"./_plugin-vue_export-helper-21b08155.js";const p={props:["pages","getProducts"]},u={"aria-label":"Page navigation example"},m={class:"pagination"},h=a("span",{"aria-hidden":"true"},"«",-1),k=[h],f=["onClick"],v=a("span",{"aria-hidden":"true"},"»",-1),b=[v];function x(l,s,e,C,P,B){return i(),r("nav",u,[a("ul",m,[a("li",{class:o(["page-item",{disabled:!e.pages.has_pre}])},[a("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=n(t=>e.getProducts(e.pages.current_page-1),["prevent"]))},k)],2),(i(!0),r(g,null,d(e.pages.total_pages,t=>(i(),r("li",{class:o(["page-item",{active:t===e.pages.current_page}]),key:t+"page"},[a("a",{class:"page-link",href:"#",onClick:n(y=>l.$emit("change-page",t),["prevent"])},_(t),9,f)],2))),128)),a("li",{class:o(["page-item",{disabled:!e.pages.has_next}])},[a("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[1]||(s[1]=n(t=>e.getProducts(e.pages.current_page+1),["prevent"]))},b)],2)])])}const w=c(p,[["render",x]]);export{w as p};
