import{T as v,r as b,q as w,e as _,f as p,o as n,a as e,t as l,h as a,g as x,u as r,i as y,j as C,n as m,c as u}from"./app-06066091.js";import{A as V}from"./App-53e90ba2.js";import{F as k}from"./FormInput-a5364d31.js";import{F as j}from"./FormSelect-6c96738a.js";import{F as A}from"./FormTextArea-248be5f8.js";import"./index-8e47e887.js";import{_ as $}from"./_plugin-vue_export-helper-c27b6911.js";import"./Sidebar-56399b82.js";import"./Menu-32707887.js";import"./Modal-858f9f8a.js";import"./transition-9e93c540.js";import"./hidden-94645dc9.js";import"./use-outside-click-6f649936.js";import"./micro-task-89dcd6af.js";import"./ProfileModal-9fa7d7fd.js";import"./FormPhoneInput-8d88435b.js";/* empty css                      */import"./tabs-470b041d.js";import"./use-resolve-button-type-737f9372.js";import"./LangToggle-4117f8d3.js";import"./OrganizationModal-94b0dd29.js";import"./use-text-value-6338b60a.js";import"./index-2177aed8.js";import"./MobileSidebar-c9250509.js";/* empty css              */const B={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},F={class:"md:flex justify-between hidden"},M={class:"text-xl mb-1"},Z={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},L=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),S={class:"ml-1 mt-1"},N=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},[e("path",{fill:"currentColor","fill-rule":"evenodd",d:"M5.841 5.28a.75.75 0 0 0-1.06-1.06L1.53 7.47L1 8l.53.53l3.25 3.25a.75.75 0 0 0 1.061-1.06l-1.97-1.97H24.25a.75.75 0 0 0 0-1.5H3.871l1.97-1.97Z","clip-rule":"evenodd"})],-1),T={class:"mt-5 mb-5 grid grid-cols-2 space-x-4"},D={class:""},H={class:""},U={class:""},q={class:"flex justify-end py-2"},z={type:"submit",class:"self-end flex items-center space-x-4 rounded-md bg-black px-3 py-2 text-sm text-white shadow-sm hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},E={key:0},I={key:1,xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},O=e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),R=e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),G=[O,R],J={__name:"Create",props:["categories"],setup(c){const f=c,s=v({subject:null,category:null,message:null}),d=b([]),h=t=>t.map(o=>({value:o.id,label:o.name})),g=()=>{s.post("/support")};return w(()=>{d.value=h(f.categories)}),(t,o)=>(n(),_(V,null,{default:p(()=>[e("div",B,[e("div",F,[e("div",null,[e("h2",M,l(t.$t("Create ticket")),1),e("p",Z,[L,e("span",S,l(t.$t("Have an issue? Describe it in detail below")),1)])]),e("div",null,[a(r(y),{href:"/support",class:"flex items-center space-x-4 rounded-md bg-indigo-600 px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[N,x(" "+l(t.$t("Back")),1)]),_:1})])]),e("form",{onSubmit:o[3]||(o[3]=C(i=>g(),["prevent"])),class:"bg-white md:border py-5 md:px-5 rounded-[0.5rem]"},[e("div",T,[e("div",D,[a(k,{modelValue:r(s).subject,"onUpdate:modelValue":o[0]||(o[0]=i=>r(s).subject=i),name:t.$t("Subject"),type:"text",error:r(s).errors.subject,class:m("w-full"),labelClass:"mb-0"},null,8,["modelValue","name","error"])]),e("div",H,[a(j,{modelValue:r(s).category,"onUpdate:modelValue":o[1]||(o[1]=i=>r(s).category=i),name:t.$t("Category"),options:d.value,error:r(s).errors.category,class:m("w-full"),placeholder:t.$t("Select category")},null,8,["modelValue","name","options","error","placeholder"])])]),e("div",U,[a(A,{modelValue:r(s).message,"onUpdate:modelValue":o[2]||(o[2]=i=>r(s).message=i),name:t.$t("Description"),type:"text",showLabel:!0,error:r(s).errors.message,textAreaRows:5,class:m("sm:col-span-6 mb-10")},null,8,["modelValue","name","error"])]),e("div",q,[e("button",z,[t.isLoading?(n(),u("svg",I,G)):(n(),u("span",E,l(t.$t("Create ticket")),1))])])],32)])]),_:1}))}},we=$(J,[["__file","Create.vue"]]);export{we as default};
