import{r as _,T as Y,q,$ as G,a0 as W,O as J,c as o,a as e,t,h,f as p,u as r,b as a,F as z,l as K,o as n,g as d,i as b,e as y,n as g,d as Q,j as E}from"./app-06066091.js";import{A as X}from"./App-53e90ba2.js";import{B as ee}from"./BillingTable-92856e78.js";import{M as te}from"./Modal-858f9f8a.js";import{F as se}from"./FormInput-a5364d31.js";import{_ as ie}from"./_plugin-vue_export-helper-c27b6911.js";import"./Sidebar-56399b82.js";import"./Menu-32707887.js";import"./ProfileModal-9fa7d7fd.js";import"./FormPhoneInput-8d88435b.js";/* empty css                      */import"./FormSelect-6c96738a.js";import"./index-8e47e887.js";import"./hidden-94645dc9.js";import"./use-text-value-6338b60a.js";import"./use-outside-click-6f649936.js";import"./use-resolve-button-type-737f9372.js";import"./transition-9e93c540.js";import"./micro-task-89dcd6af.js";import"./tabs-470b041d.js";import"./LangToggle-4117f8d3.js";import"./OrganizationModal-94b0dd29.js";import"./index-2177aed8.js";import"./MobileSidebar-c9250509.js";/* empty css              */import"./debounce-26497136.js";import"./_baseGetTag-c09aeb4c.js";import"./Table-593fb9c4.js";import"./Pagination-d90e3b69.js";import"./TableHeaderRowItem-58f056c6.js";import"./TableBodyRowItem-f7a16ee1.js";const ne={key:0,class:"fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50"},oe={class:"bg-white p-6 rounded-lg shadow-lg text-center text-sm"},ae=K('<div class="flex justify-center mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple0" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="0;svgSpinnersPulseRingsMultiple2.end" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple1" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.2s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path><path fill="black" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" transform="matrix(0 0 0 0 12 12)"><animateTransform id="svgSpinnersPulseRingsMultiple2" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="translate" values="12 12;0 0"></animateTransform><animateTransform additive="sum" attributeName="transform" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" type="scale" values="0;1"></animateTransform><animate attributeName="opacity" begin="svgSpinnersPulseRingsMultiple0.begin+0.4s" calcMode="spline" dur="1.2s" keySplines=".52,.6,.25,.99" values="1;0"></animate></path></svg></div>',1),le={class:"bg-white md:bg-inherit pt-0 px-4 md:pt-8 md:p-8 rounded-[5px] text-[#000] overflow-y-scroll"},re={class:"flex justify-between mt-8 md:mt-0"},ue={class:"text-xl mb-1"},ce={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},de=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24"},[e("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 11v5m0 5a9 9 0 1 1 0-18a9 9 0 0 1 0 18Zm.05-13v.1h-.1V8h.1Z"})],-1),pe={class:"ml-1 mt-1"},me={key:0,class:"bg-red-500 p-5 w-100 mb-4 rounded-[0.5rem] flex justify-between items-center space-x-4 text-white"},he={class:"flex items-center space-x-4"},be=e("span",null,[e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"36",height:"36",viewBox:"0 0 56 56"},[e("path",{fill:"currentColor",d:"M9.965 50.207h36.07c3.985 0 6.469-2.86 6.469-6.469c0-1.078-.281-2.18-.867-3.187L33.567 9.074c-1.22-2.133-3.352-3.281-5.555-3.281c-2.18 0-4.336 1.148-5.579 3.281l-18.07 31.5a6.253 6.253 0 0 0-.867 3.164c0 3.61 2.508 6.469 6.469 6.469m.047-3.68c-1.641 0-2.72-1.336-2.72-2.789c0-.422.071-.914.306-1.406l18.046-31.477c.516-.89 1.454-1.312 2.368-1.312c.914 0 1.804.398 2.32 1.312l18.047 31.5c.234.47.351.961.351 1.383c0 1.453-1.125 2.79-2.742 2.79Zm18-12.117c1.125 0 1.78-.656 1.804-1.875l.328-12.351c.024-1.196-.914-2.086-2.156-2.086c-1.265 0-2.156.867-2.133 2.062l.305 12.375c.023 1.196.68 1.875 1.852 1.875m0 7.617c1.359 0 2.53-1.078 2.53-2.437c0-1.383-1.148-2.438-2.53-2.438c-1.383 0-2.532 1.078-2.532 2.438c0 1.336 1.172 2.437 2.532 2.437"})])],-1),ge={key:0,class:"text-sm"},fe=e("br",null,null,-1),ve={key:1,class:"text-sm"},_e=e("br",null,null,-1),ye={class:"float-right"},xe={class:"md:flex bg-slate-100 md:bg-white shadow-sm p-5 rounded-[0.5rem] space-y-6"},we={class:"md:w-[50%]"},ke={class:"mb-5"},Me={class:"text-sm text-gray-500 tracking-[0px]"},Se={key:0,class:"text-[18px]"},$e={key:1,class:"text-[18px]"},Pe={key:0,class:"flex gap-x-3"},Ae={class:"text-sm text-gray-500 tracking-[0px]"},Ce={class:"text-sm"},Te={class:"text-sm text-gray-500 tracking-[0px]"},Ne={class:"text-sm"},Be={class:"text-sm text-gray-500 tracking-[0px]"},Ze={class:"text-sm"},Ve={key:1,class:"flex space-x-6"},Re={class:"text-sm text-gray-500 tracking-[0px]"},je={class:"text-sm"},Ie={class:"md:w-[50%]"},Le={class:"bg-slate-100 md:bg-gray-50 p-5 md:px-0 rounded-[0.5rem] mt-10 w-full"},Fe={class:"w-full"},ze={class:"mb-5"},Ee={class:"text-xl tracking-[0px]"},Oe={class:"mb-6 flex items-center text-sm leading-6 text-gray-600"},De={class:"ml-1 mt-1"},He={class:"w-100"},Ue={class:"text-2xl mb-4"},Ye={class:"text-sm"},qe={class:"text-sm mt-4 mb-2"},Ge={class:"grid grid-cols-2 gap-2"},We={class:"flex items-center"},Je=["onClick"],Ke={key:0,class:"w-4 h-4 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},Qe=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),Xe=[Qe],et=["onClick"],tt={class:"form-error text-[#b91c1c] text-xs mt-2"},st={class:"mt-6 flex"},it=["disabled"],nt={key:0,class:"flex space-x-1"},ot=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z",opacity:".5"}),e("path",{fill:"currentColor",d:"M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"},[e("animateTransform",{attributeName:"transform",dur:"1s",from:"0 12 12",repeatCount:"indefinite",to:"360 12 12",type:"rotate"})])],-1),at={key:1,class:"flex space-x-1"},lt=e("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24"},[e("path",{fill:"currentColor",d:"M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"})],-1),rt={__name:"Index",props:["subscription","rows","filters","subscriptionIsActive","subscriptionDetails","methods","isPaymentLoading","pusherSettings","organizationId","setting"],setup(f){const i=f;_(i.subscription.data);const v=_(!1),m=_(!1),u=Y({amount:null,method:null}),x=s=>{u.method=s};function w(){v.value=!0}function O(){v.value=!1}const D=async()=>{m.value=!0,u.post("/pay",{preserveScroll:!0,onFinish:()=>{m.value=!1}})};return q(()=>{i.pusherSettings.pusher_app_key!=null&&i.pusherSettings.pusher_app_cluster!=null&&(window.Pusher=G,window.Echo=new W({broadcaster:"pusher",key:i.pusherSettings.pusher_app_key,cluster:i.pusherSettings.pusher_app_cluster,encrypted:!0}),window.Echo.channel("payments.ch"+i.organizationId).listen("NewPaymentEvent",s=>{J.visit("/billing",{})}))}),(s,c)=>(n(),o(z,null,[f.isPaymentLoading?(n(),o("div",ne,[e("div",oe,[ae,e("p",null,t(s.$t("Please wait as the payment is being processed!")),1),h(r(b),{href:"billing",class:"underline"},{default:p(()=>[d(t(s.$t("Go to billing")),1)]),_:1})])])):a("",!0),h(X,null,{default:p(()=>{var k,M,S,$,P,A,C,T,N,B,Z,V,R,j,I,L,F;return[e("div",le,[e("div",re,[e("div",null,[e("h2",ue,t(s.$t("Billing and subscription")),1),e("p",ce,[de,e("span",pe,t(s.$t("View and manage your billing history")),1)])])]),f.subscriptionIsActive?a("",!0):(n(),o("div",me,[e("div",he,[be,((k=i.subscription)==null?void 0:k.status)==="trial"?(n(),o("h2",ge,[d(t(s.$t("Your trial period is over"))+" ",1),fe,d(" "+t(s.$t("Please subscribe to a plan to continue using the app"))+".",1)])):a("",!0),((M=i.subscription)==null?void 0:M.status)==="active"?(n(),o("h2",ve,[d(t(s.$t("We were unable to autorenew your subscription"))+" ",1),_e,d(" "+t(s.$t("To continue using the app, please make a payment of"))+" "+t((S=i.subscriptionDetails)==null?void 0:S.accountBalance)+".",1)])):a("",!0)]),e("div",null,[e("div",ye,[(($=i.subscription)==null?void 0:$.status)==="trial"?(n(),y(r(b),{key:0,href:"/subscription",type:"button",class:"rounded-md bg-white text-gray-600 px-3 py-2 text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},{default:p(()=>[d(t(s.$t("Subscribe")),1)]),_:1})):a("",!0),((P=i.subscription)==null?void 0:P.status)==="active"&&i.setting.enable_custom_payment==1?(n(),o("button",{key:1,onClick:c[0]||(c[0]=l=>w()),type:"button",class:"rounded-md bg-white text-gray-600 px-3 py-2 text-sm shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"},t(s.$t("Add payment")),1)):a("",!0)])])])),e("div",xe,[e("div",we,[e("div",ke,[e("h2",Me,t(s.$t("Plan details")),1),((A=i.subscription)==null?void 0:A.status)==="trial"?(n(),o("h2",Se,t(s.$t("Trial period")),1)):a("",!0),((C=i.subscription)==null?void 0:C.status)==="active"?(n(),o("h2",$e,t((N=(T=i.subscription)==null?void 0:T.plan)==null?void 0:N.name),1)):a("",!0)]),((B=i.subscription)==null?void 0:B.status)!="trial"?(n(),o("div",Pe,[e("div",null,[e("h2",Ae,t(s.$t("Start date")),1),e("span",Ce,t((Z=i.subscription)==null?void 0:Z.start_date),1)]),e("div",null,[e("h2",Te,t(s.$t("Next billing date")),1),e("span",Ne,t((V=i.subscription)==null?void 0:V.valid_until),1)]),e("div",null,[e("h2",Be,t(s.$t("Account balance")),1),e("span",Ze,t((R=i.subscriptionDetails)==null?void 0:R.accountBalance),1)])])):a("",!0),((j=i.subscription)==null?void 0:j.status)==="trial"?(n(),o("div",Ve,[e("div",null,[e("h2",Re,t(s.$t("Trial expires on")),1),e("span",je,t((I=i.subscription)==null?void 0:I.valid_until),1)])])):a("",!0)]),e("div",Ie,[e("div",{class:g(["md:float-right gap-y-2 gap-x-3",i.setting.enable_custom_payment==0?"flex":"grid grid-cols-2"])},[i.setting.enable_custom_payment==1?(n(),o("button",{key:0,onClick:c[1]||(c[1]=l=>w()),type:"button",class:"w-full capitalize rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2 col-span-2 md:col-span-1 text-center"},t(s.$t("Add payment")),1)):a("",!0),((L=i.subscription)==null?void 0:L.status)==="trial"?(n(),y(r(b),{key:1,href:"/subscription",class:"w-full rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 col-span-2 md:col-span-1 text-center"},{default:p(()=>[d(t(s.$t("Subscribe to plan")),1)]),_:1})):a("",!0),((F=i.subscription)==null?void 0:F.status)==="active"?(n(),y(r(b),{key:2,href:"/subscription",class:"w-full rounded-md bg-primary px-3 py-2 text-sm text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 col-span-2 md:col-span-1 text-center"},{default:p(()=>[d(t(s.$t("Upgrade subscription")),1)]),_:1})):a("",!0)],2)])]),e("div",Le,[e("div",Fe,[e("div",ze,[e("h2",Ee,t(s.$t("Invoices")),1),e("p",Oe,[e("span",De,t(s.$t("You can view your invoices and past billing details here")),1)])]),e("div",He,[h(ee,{rows:i.rows,filters:i.filters},null,8,["rows","filters"])])])])]),h(te,{label:s.label,isOpen:v.value},{default:p(()=>[e("form",{onSubmit:c[3]||(c[3]=E(l=>D(),["prevent"])),class:"gap-y-4"},[e("h2",Ue,t(s.$t("Add payment")),1),e("p",Ye,t(s.$t("Add your own custom amount")),1),h(se,{modelValue:r(u).amount,"onUpdate:modelValue":c[2]||(c[2]=l=>r(u).amount=l),error:r(u).errors.amount,name:"",type:"number",class:g("w-100")},null,8,["modelValue","error"]),e("h2",qe,t(s.$t("Pay via")),1),e("div",Ge,[(n(!0),o(z,null,Q(i.methods,(l,H)=>(n(),o("div",{key:H,class:""},[e("div",We,[e("label",{onClick:U=>x(l.name),for:"myCheckbox",class:"cursor-pointer"},[e("div",{class:g(["w-5 h-5 border border-gray-400 rounded-md flex items-center justify-center",r(u).method===l.name?"bg-[#000]":""])},[r(u).method===l.name?(n(),o("svg",Ke,Xe)):a("",!0)],2)],8,Je),e("span",{onClick:U=>x(l.name),class:"ml-2 text-sm cursor-pointer"},t(l.name),9,et)])]))),128))]),e("div",tt,t(r(u).errors.method),1),e("div",st,[e("button",{type:"button",onClick:E(O,["self"]),class:"inline-flex justify-center rounded-md border border-transparent bg-slate-50 px-4 py-2 text-sm text-slate-500 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mr-4"},t(s.$t("Cancel")),1),e("button",{class:g(["inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2",{"opacity-50":m.value}]),disabled:m.value},[m.value?(n(),o("span",nt,[ot,e("span",null,t(s.$t("Processing")),1)])):(n(),o("span",at,[lt,e("span",null,t(s.$t("Continue")),1)]))],10,it)])],32)]),_:1},8,["label","isOpen"])]}),_:1})],64))}},zt=ie(rt,[["__file","Index.vue"]]);export{zt as default};
