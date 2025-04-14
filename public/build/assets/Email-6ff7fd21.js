import{r as k,T as h,e as x,f as $,o as d,a as t,t as u,h as a,u as o,n as i,c as p,b as _,j as C}from"./app-06066091.js";import M from"./App-d2aece6e.js";import{F as m}from"./FormInput-a5364d31.js";import{F as U}from"./FormSelect-6c96738a.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";import"./App-3a5d1971.js";import"./Sidebar-53ff02b1.js";import"./Menu-18e4a0b3.js";import"./ProfileModal-9fa7d7fd.js";import"./FormPhoneInput-8d88435b.js";/* empty css                      */import"./transition-9e93c540.js";import"./hidden-94645dc9.js";import"./use-outside-click-6f649936.js";import"./micro-task-89dcd6af.js";import"./tabs-470b041d.js";import"./use-resolve-button-type-737f9372.js";import"./LangToggle-4117f8d3.js";import"./MobileSidebar-c90c1661.js";import"./index-2177aed8.js";/* empty css              */import"./Sidebar-86915732.js";import"./index-8e47e887.js";import"./use-text-value-6338b60a.js";const A={class:"text-xl mb-1"},j={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},B=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[t("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),E={class:"ml-1 mt-1"},F={class:"space-y-12"},N={class:"pb-12"},Z={class:"pb-10"},L={class:"grid gap-6 grid-cols-2 pb-6 md:w-2/3"},P={key:0,class:"grid gap-6 grid-cols-2 pb-10 md:w-2/3"},R={key:1,class:"grid gap-6 grid-cols-2 pb-6 md:w-2/3"},T={key:2,class:"grid gap-6 grid-cols-2 pb-6 md:w-2/3"},W={class:"grid gap-6 grid-cols-2 pb-3 md:w-2/3"},q={class:"grid grid-cols-2 pb-6 border-b md:w-2/3"},z={class:"relative flex gap-x-3 mt-4 col-span-2"},O={class:"flex items-center"},D=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),H=[D],I={class:"relative flex gap-x-3 mt-4 col-span-2"},J={class:"flex items-center"},K=t("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),G=[K],Q={class:"mt-1 flex items-center justify-end gap-x-6 md:w-2/3 pt-2"},X={type:"button",class:"text-sm leading-6 text-gray-900"},Y=["disabled"],ee={key:0,xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},oe=t("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"},null,-1),re=t("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[t("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})],-1),se=[oe,re],te={key:1},le={__name:"Email",props:{config:{type:Object,required:!0}},setup(y){const w=y,c=l=>{const r=w.config.find(s=>s.key===l);return r?r.value:""},n=l=>{const r=JSON.parse(c("mail_config"));return r!==null&&typeof r=="object"&&!Array.isArray(r)?r[l]??null:null},f=k(!1),e=h({mail_config:{driver:n("driver")??void 0,from_address:n("from_address")??void 0,from_name:n("from_name")??void 0,reply_to_name:n("reply_to_name")??void 0,reply_to_address:n("reply_to_address")??void 0,mg_domain:n("mg_domain")??void 0,mg_secret:n("mg_secret")??void 0,ses_key:n("ses_key")??void 0,ses_secret:n("ses_secret")??void 0,ses_region:n("ses_region")??void 0,port:n("port")??void 0,host:n("host")??void 0,username:n("username")??void 0,password:n("password")??void 0,mail_config:n("password")??void 0},smtp_email_active:c("smtp_email_active")==="1",verify_email:c("verify_email")==="1"}),V=[{label:"SMTP",value:"smtp"},{label:"Mailgun",value:"mailgun"},{label:"Amazon SES",value:"ses"}],g=()=>{e.smtp_email_active=!e.smtp_email_active},v=()=>{e.verify_email=!e.verify_email},b=async()=>{e.put("/admin/settings?type=email",{preserveScroll:!0})};return(l,r)=>(d(),x(M,null,{default:$(()=>[t("div",null,[t("h2",A,u(l.$t("Mailer settings")),1),t("p",j,[B,t("span",E,u(l.$t("Configure email accounts")),1)])]),t("form",{onSubmit:r[18]||(r[18]=C(s=>b(),["prevent"]))},[t("div",F,[t("div",N,[t("div",Z,[t("div",L,[a(U,{modelValue:o(e).mail_config.driver,"onUpdate:modelValue":r[0]||(r[0]=s=>o(e).mail_config.driver=s),name:l.$t("Method"),type:"text",options:V,class:i("col-span-2")},null,8,["modelValue","name"])]),o(e).mail_config.driver==="mailgun"?(d(),p("div",P,[a(m,{modelValue:o(e).mail_config.mg_domain,"onUpdate:modelValue":r[1]||(r[1]=s=>o(e).mail_config.mg_domain=s),error:o(e).errors["mail_config.mg_domain"],name:l.$t("Mailgun domain"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:o(e).mail_config.mg_secret,"onUpdate:modelValue":r[2]||(r[2]=s=>o(e).mail_config.mg_secret=s),error:o(e).errors["mail_config.mg_secret"],name:l.$t("Mailgun secret"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"])])):o(e).mail_config.driver==="ses"?(d(),p("div",R,[a(m,{modelValue:o(e).mail_config.ses_key,"onUpdate:modelValue":r[3]||(r[3]=s=>o(e).mail_config.ses_key=s),error:o(e).errors["mail_config.ses_key"],name:l.$t("AWS access key id"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:o(e).mail_config.ses_secret,"onUpdate:modelValue":r[4]||(r[4]=s=>o(e).mail_config.ses_secret=s),error:o(e).errors["mail_config.ses_secret"],name:l.$t("AWS secret access key"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:o(e).mail_config.ses_region,"onUpdate:modelValue":r[5]||(r[5]=s=>o(e).mail_config.ses_region=s),error:o(e).errors["mail_config.ses_region"],name:l.$t("AWS default region"),type:"text",class:i("col-span-2")},null,8,["modelValue","error","name"])])):o(e).mail_config.driver==="smtp"?(d(),p("div",T,[a(m,{modelValue:o(e).mail_config.host,"onUpdate:modelValue":r[6]||(r[6]=s=>o(e).mail_config.host=s),error:o(e).errors["mail_config.host"],name:l.$t("Host"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:o(e).mail_config.port,"onUpdate:modelValue":r[7]||(r[7]=s=>o(e).mail_config.port=s),error:o(e).errors["mail_config.port"],name:l.$t("Port"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:o(e).mail_config.username,"onUpdate:modelValue":r[8]||(r[8]=s=>o(e).mail_config.username=s),error:o(e).errors["mail_config.username"],name:l.$t("Username"),type:"text",class:i("col-span-1")},null,8,["modelValue","error","name"]),a(m,{modelValue:o(e).mail_config.password,"onUpdate:modelValue":r[9]||(r[9]=s=>o(e).mail_config.password=s),error:o(e).errors["mail_config.password"],name:l.$t("Password"),type:"password",class:i("col-span-1")},null,8,["modelValue","error","name"])])):_("",!0),t("div",W,[a(m,{modelValue:o(e).mail_config.from_name,"onUpdate:modelValue":r[10]||(r[10]=s=>o(e).mail_config.from_name=s),name:l.$t("Mail from name"),error:o(e).errors["mail_config.from_name"],type:"text",class:i("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:o(e).mail_config.from_address,"onUpdate:modelValue":r[11]||(r[11]=s=>o(e).mail_config.from_address=s),name:l.$t("Mail from address"),error:o(e).errors["mail_config.from_address"],type:"email",class:i("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:o(e).mail_config.reply_to_name,"onUpdate:modelValue":r[12]||(r[12]=s=>o(e).mail_config.reply_to_name=s),name:l.$t("Reply to name"),error:o(e).errors["mail_config.reply_to_name"],type:"text",class:i("col-span-1")},null,8,["modelValue","name","error"]),a(m,{modelValue:o(e).mail_config.reply_to_address,"onUpdate:modelValue":r[13]||(r[13]=s=>o(e).mail_config.reply_to_address=s),name:l.$t("Reply to address"),error:o(e).errors["mail_config.reply_to_address"],type:"email",class:i("col-span-1")},null,8,["modelValue","name","error"])]),t("div",q,[t("div",z,[t("div",O,[t("label",{onClick:r[14]||(r[14]=s=>g()),for:"myCheckbox",class:"cursor-pointer"},[t("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",o(e).smtp_email_active?"bg-[#000]":""])},[o(e).smtp_email_active?(d(),p("svg",{key:0,class:i(["w-4 h-4",o(e).smtp_email_active?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},H,2)):_("",!0)],2)]),t("span",{onClick:r[15]||(r[15]=s=>g()),class:"ml-2 text-[14px] cursor-pointer"},u(l.$t("Activate email")),1)])]),t("div",I,[t("div",J,[t("label",{onClick:r[16]||(r[16]=s=>v()),for:"myCheckbox",class:"cursor-pointer"},[t("div",{class:i(["w-4 h-4 border border-gray-400 rounded-md flex items-center justify-center",{"bg-[#000]":o(e).verify_email}])},[o(e).verify_email?(d(),p("svg",{key:0,class:i(["w-4 h-4",o(e).verify_email?"text-white":""]),fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},G,2)):_("",!0)],2)]),t("span",{onClick:r[17]||(r[17]=s=>v()),class:"ml-2 text-[14px] cursor-pointer"},u(l.$t("Require email verification for new accounts")),1)])])]),t("div",Q,[t("button",X,u(l.$t("Cancel")),1),t("button",{class:i(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":f.value}]),disabled:f.value},[f.value?(d(),p("svg",ee,se)):(d(),p("span",te,u(l.$t("Save")),1))],10,Y)])])])])],32)]),_:1}))}},Ae=S(le,[["__file","Email.vue"]]);export{Ae as default};
