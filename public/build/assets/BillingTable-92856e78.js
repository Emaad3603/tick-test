import{r as g,O as x,o as n,c as m,a,w as B,v as N,u as v,b as y,h as e,f as t,g as l,t as r,F as T,d as S,e as z,n as V,l as M}from"./app-06066091.js";import{d as O}from"./debounce-26497136.js";/* empty css              */import{T as R}from"./Table-593fb9c4.js";import{T as $,a as j,b as c}from"./TableHeaderRowItem-58f056c6.js";import{T as D,a as L,b as d}from"./TableBodyRowItem-f7a16ee1.js";import{_ as H}from"./_plugin-vue_export-helper-c27b6911.js";const I={class:"flex justify-between"},F={class:"bg-white flex items-center shadow-sm h-10 w-full md:w-80 rounded-[0.5rem] mb-6 text-sm"},q=a("span",{class:"pl-3"},[a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[a("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"m15 15l6 6m-11-4a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"})])],-1),A=["placeholder"],E=a("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[a("path",{fill:"currentColor",d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm3.7 12.3c.4.4.4 1 0 1.4c-.4.4-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0c-.4-.4-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4c.4-.4 1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0c.4.4.4 1 0 1.4L13.4 12l2.3 2.3z"})],-1),U=[E],Z={key:1,class:"pr-2"},G=M('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></animateTransform><animate attributeName="opacity" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></animateTransform><animate attributeName="opacity" begin="0.2s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle><circle cx="12" cy="3.5" r="1.5" fill="currentColor" opacity="0"><animateTransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></animateTransform><animate attributeName="opacity" begin="0.4s" dur="0.6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;1;0"></animate></circle></svg>',1),J=[G],K=a("span",{class:"float-right"},null,-1),P={__name:"BillingTable",props:{rows:{type:Object,required:!0},filters:{type:Object},uuid:{type:String}},emits:["update:modelValue","callback"],setup(p,{emit:Q}){const h=p,o=g({search:h.filters.search}),f=g(!1),C=()=>{o.value.search=null,w()},k=i=>i===h.rows.data.length-1,b=O(()=>{f.value=!0,w()},1e3),w=()=>{x.visit(window.location.pathname,{method:"get",data:o.value})};return(i,u)=>(n(),m(T,null,[a("div",I,[a("div",F,[q,B(a("input",{onInput:u[0]||(u[0]=(...s)=>v(b)&&v(b)(...s)),"onUpdate:modelValue":u[1]||(u[1]=s=>o.value.search=s),type:"text",class:"outline-none px-4 w-full bg-inherit",placeholder:i.$t("Search billing logs")},null,40,A),[[N,o.value.search]]),f.value===!1&&o.value.search?(n(),m("button",{key:0,onClick:C,type:"button",class:"pr-2"},U)):y("",!0),f.value?(n(),m("span",Z,J)):y("",!0)])]),e(R,{rows:p.rows},{default:t(()=>[e($,null,{default:t(()=>[e(j,null,{default:t(()=>[e(c,{position:"first"},{default:t(()=>[l(r(i.$t("Date")),1)]),_:1}),e(c,{position:"first",class:"hidden sm:table-cell"},{default:t(()=>[l(r(i.$t("Organization")),1)]),_:1}),e(c,{class:"hidden sm:table-cell"},{default:t(()=>[l(r(i.$t("Description")),1)]),_:1}),e(c,{class:"hidden sm:table-cell"},{default:t(()=>[l(r(i.$t("Amount")),1)]),_:1}),e(c,{position:"last"})]),_:1})]),_:1}),e(D,null,{default:t(()=>[(n(!0),m(T,null,S(p.rows.data,(s,_)=>(n(),z(L,{key:_,class:V(k(_)?"":"border-b")},{default:t(()=>[e(d,{position:"first",class:"hidden sm:table-cell"},{default:t(()=>[l(r(s.created_at),1)]),_:2},1024),e(d,{position:"first",class:"capitalize"},{default:t(()=>[l(r(s.organization.name),1)]),_:2},1024),e(d,{class:"hidden sm:table-cell capitalize"},{default:t(()=>[l(r(s.description),1)]),_:2},1024),e(d,{class:""},{default:t(()=>[l(r(s.amount),1)]),_:2},1024),e(d,{class:"hidden sm:table-cell"},{default:t(()=>[K]),_:1})]),_:2},1032,["class"]))),128))]),_:1})]),_:1},8,["rows"])],64))}},le=H(P,[["__file","BillingTable.vue"]]);export{le as B};
