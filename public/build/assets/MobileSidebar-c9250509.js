import{r as l,c as s,a as e,t as h,e as g,f as v,u as w,b,h as p,n as _,F as y,o as i,i as x}from"./app-06066091.js";import k from"./Menu-32707887.js";import{P as z}from"./ProfileModal-9fa7d7fd.js";import{_ as M}from"./_plugin-vue_export-helper-c27b6911.js";import"./Modal-858f9f8a.js";import"./transition-9e93c540.js";import"./hidden-94645dc9.js";import"./use-outside-click-6f649936.js";import"./micro-task-89dcd6af.js";import"./LangToggle-4117f8d3.js";import"./OrganizationModal-94b0dd29.js";import"./FormInput-a5364d31.js";import"./FormPhoneInput-8d88435b.js";/* empty css                      */import"./FormSelect-6c96738a.js";import"./index-8e47e887.js";import"./use-text-value-6338b60a.js";import"./use-resolve-button-type-737f9372.js";import"./tabs-470b041d.js";const B={key:0,class:"sticky top-0 z-10 w-full bg-white border-b px-4 py-4 flex items-center justify-between md:hidden"},C=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 17h8m-8-5h14M5 7h8"})],-1),S=[C],O={class:"text-xl font-semibold"},V=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 20 20"},[e("path",{fill:"currentColor",d:"M10 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-4-2a.5.5 0 0 0-1 0V6H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V7h1.5a.5.5 0 0 0 0-1H6zm6 .5h-1.207a5.466 5.466 0 0 0-.393-1H12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1.257c.307.253.642.474 1 .657v.6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1M6 16a2 2 0 0 1-1.732-1H12a3 3 0 0 0 3-3V6.268A2 2 0 0 1 16 8v4a4 4 0 0 1-4 4zm2 2a2 2 0 0 1-1.732-1H12a5 5 0 0 0 5-5V8.268A2 2 0 0 1 18 10v2a6 6 0 0 1-6 6z"})],-1),H=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"2em",height:"2em",viewBox:"0 0 24 24"},[e("g",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"1.5"},[e("path",{d:"M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2"}),e("path",{d:"M4.271 18.346S6.5 15.5 12 15.5s7.73 2.846 7.73 2.846M12 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6"})])],-1),j=[H],q={class:"flex flex-col h-full w-full bg-white"},$={__name:"MobileSidebar",props:{title:{type:String},displayTopBar:{type:Boolean,default:!0},displayCreateBtn:{type:Boolean},user:{type:Object,required:!0},config:{type:Array,required:!0},organization:{type:Object,required:!0},organizations:{type:Object,required:!0}},setup(u){const t=u,r=l(!1),a=l(!1),d=()=>{r.value=!1};function m(){a.value=!0,r.value=!1}const f=()=>{a.value=!1};return(c,o)=>(i(),s(y,null,[t.displayTopBar===!0?(i(),s("div",B,[e("div",null,[e("span",{onClick:o[0]||(o[0]=n=>r.value=!0)},S)]),e("h3",O,h(t.title),1),e("div",null,[t.displayCreateBtn?(i(),g(w(x),{key:0,href:c.$page.url+"/create"},{default:v(()=>[V]),_:1},8,["href"])):(i(),s("span",{key:1,onClick:m},j))])])):b("",!0),e("aside",{class:_(["transform top-0 left-0 w-full bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30",r.value?"translate-x-0":"-translate-x-full"])},[e("aside",q,[p(k,{isSidebarOpen:r.value,config:t.config,user:t.user,organization:t.organization,organizations:t.organizations,onCloseSidebar:o[1]||(o[1]=n=>d())},null,8,["isSidebarOpen","config","user","organization","organizations"])])],2),p(z,{user:t.user,organization:t.organization,isOpen:a.value,role:"user",onClose:o[2]||(o[2]=n=>f())},null,8,["user","organization","isOpen"])],64))}},ee=M($,[["__file","MobileSidebar.vue"]]);export{ee as default};
