import{r as h,T as S,m as U,q as Z,R as F,c as n,a as e,h as d,f as k,u as a,t as l,g as V,b as C,j as $,n as u,o as i,i as A}from"./app-06066091.js";import{F as p}from"./FormInput-a5364d31.js";import{u as I,a as D}from"./ReCaptcha-55f58cbf.js";import{_ as R}from"./_plugin-vue_export-helper-c27b6911.js";const z={class:"flex h-screen justify-center"},E={class:"flex justify-center items-center"},L={key:0,class:"w-[25em]"},P={class:"flex justify-center mb-5"},G=["src","alt"],H={key:1,class:"text-2xl mb-2"},q={class:"text-2xl text-center"},K={key:0},O={key:1},Y={key:0,class:"text-center text-sm text-slate-500 mt-5"},J={class:"mt-5 grid grid-cols-2 space-x-4"},Q={class:""},W={class:""},X={class:"mt-5"},ee={class:"mt-5 grid grid-cols-2 space-x-4"},te={class:""},se={class:""},oe={key:0,class:"form-error text-[#b91c1c] text-xs"},ae={class:"mt-6"},re={key:0,type:"submit",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full"},ne={key:1,type:"button",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full flex justify-center"},ie=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1),le=[ie],me={class:"mt-10"},de={key:0,type:"submit",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full"},ce={key:1,type:"button",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full flex justify-center"},ue=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1),pe=[ue],fe={key:1,class:"w-[25em]"},_e={class:"text-2xl text-center"},he={class:"mt-10 text-center"},ye={__name:"Invite",props:["flash","config","organization","companyConfig","invite","user"],setup(T){var w,v,x,g;const r=T,j=h((w=r.invite)==null?void 0:w.expire_at),M=h(new Date().toISOString()),f=h(!1),t=S({first_name:(v=r.user)==null?void 0:v.first_name,last_name:(x=r.user)==null?void 0:x.last_name,email:(g=r.invite)==null?void 0:g.email,password:null,password_confirmation:null,code:r.code,recaptcha_response:null}),c=s=>{const o=r.config.find(_=>_.key===s);return o?o.value:""};r.user&&delete t.password;const B=U(()=>{const s=new Date(j.value),o=new Date(M.value);return s<o}),y=async()=>{if(f.value=!0,c("recaptcha_active")==="1"){const s=await N();t.recaptcha_response=s}t.post("",{onSuccess:()=>t.reset(),onFinish:()=>{f.value=!1}})},N=()=>new Promise(s=>{grecaptcha.ready(()=>{grecaptcha.execute(c("recaptcha_site_key"),{action:"submit"}).then(o=>{s(o)})})});return Z(()=>{c("recaptcha_active")==="1"&&I(c("recaptcha_site_key"))}),F(()=>{D(c("recaptcha_site_key"))}),(s,o)=>{var _,b;return i(),n("div",z,[e("div",E,[B.value?(i(),n("div",fe,[e("h1",_e,l(s.$t("This invite link has expired. Contact the account owner to send you another link")),1),e("div",he,[d(a(A),{href:"/login",type:"button",class:"rounded-md bg-primary px-3 py-3 text-sm text-white shadow-sm w-full"},{default:k(()=>[V(l(s.$t("Go to login")),1)]),_:1})])])):(i(),n("div",L,[e("div",P,[d(a(A),{href:"/"},{default:k(()=>[r.companyConfig.logo?(i(),n("img",{key:0,class:"max-w-[180px]",src:"/media/"+r.companyConfig.logo,alt:r.companyConfig.company_name},null,8,G)):(i(),n("h4",H,l(r.companyConfig.company_name),1))]),_:1})]),e("h3",q,[r.user?(i(),n("span",K,l(s.$t("Hi"))+" "+l((_=r.user)==null?void 0:_.first_name),1)):(i(),n("span",O,l(s.$t("Hi")),1)),V(", "+l(s.$t("You have been invited to join"))+" "+l((b=r==null?void 0:r.organization)==null?void 0:b.name),1)]),r.user?C("",!0):(i(),n("div",Y,l(s.$t("Get started by entering your details below")),1)),r.user?(i(),n("form",{key:2,onSubmit:o[6]||(o[6]=$(m=>y(),["prevent"]))},[e("div",me,[f.value?(i(),n("button",ce,pe)):(i(),n("button",de,l(s.$t("Proceed to join")),1))])],32)):(i(),n("form",{key:1,onSubmit:o[5]||(o[5]=$(m=>y(),["prevent"])),class:"mt-5"},[e("div",J,[e("div",Q,[d(p,{modelValue:a(t).first_name,"onUpdate:modelValue":o[0]||(o[0]=m=>a(t).first_name=m),name:s.$t("First name"),type:"text",error:a(t).errors.first_name,class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","name","error"])]),e("div",W,[d(p,{modelValue:a(t).last_name,"onUpdate:modelValue":o[1]||(o[1]=m=>a(t).last_name=m),name:s.$t("Last name"),type:"text",error:a(t).errors.last_name,class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","name","error"])])]),e("div",X,[d(p,{modelValue:a(t).email,"onUpdate:modelValue":o[2]||(o[2]=m=>a(t).email=m),name:s.$t("Email"),type:"email",disabled:!0,error:a(t).errors.email,class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","name","error"])]),e("div",ee,[e("div",te,[d(p,{modelValue:a(t).password,"onUpdate:modelValue":o[3]||(o[3]=m=>a(t).password=m),name:s.$t("Password"),type:"password",error:a(t).errors.password,class:u("w-full"),labelClass:"mb-0"},null,8,["modelValue","name","error"])]),e("div",se,[d(p,{modelValue:a(t).password_confirmation,"onUpdate:modelValue":o[4]||(o[4]=m=>a(t).password_confirmation=m),name:s.$t("Confirm password"),type:"password",error:a(t).errors.password_confirmation,class:u("w-full")},null,8,["modelValue","name","error"])])]),a(t).errors.recaptcha_response?(i(),n("div",oe,l(a(t).errors.recaptcha_response),1)):C("",!0),e("div",ae,[f.value?(i(),n("button",ne,le)):(i(),n("button",re,l(s.$t("Create account")),1))])],32))]))])])}}},be=R(ye,[["__file","Invite.vue"]]);export{be as default};
