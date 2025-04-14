import{o as _,c as b,J as h,t as i,b as x,r as S,T as F,G as C,m as U,a as u,h as l,f as m,g as p,u as n,n as E}from"./app-06066091.js";import{F as V}from"./FormInput-a5364d31.js";import{F as T}from"./FormTextArea-248be5f8.js";import{F as B}from"./FormSelect-6c96738a.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const D={class:"block text-sm font-medium text-gray-700 mb-1"},q={__name:"Label",props:{required:{type:Boolean,default:!1}},setup(s){return(d,o)=>(_(),b("label",D,[h(d.$slots,"default")]))}},f=g(q,[["__file","Label.vue"]]),w={key:0,class:"mt-1 text-sm text-red-600"},L={__name:"Error",props:{error:{type:String,default:""}},setup(s){return(d,o)=>s.error?(_(),b("p",w,i(s.error),1)):x("",!0)}},v=g(L,[["__file","Error.vue"]]),N=["value","placeholder"],P={__name:"Date",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup(s){return(d,o)=>(_(),b("input",{type:"date",value:s.modelValue,onInput:o[0]||(o[0]=$=>d.$emit("update:modelValue",$.target.value)),placeholder:s.placeholder,class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,40,N))}},I=g(P,[["__file","Date.vue"]]),j=["value","placeholder"],A={__name:"Time",props:{modelValue:{type:String,default:""},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup(s){return(d,o)=>(_(),b("input",{type:"time",value:s.modelValue,onInput:o[0]||(o[0]=$=>d.$emit("update:modelValue",$.target.value)),placeholder:s.placeholder,class:"block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"},null,40,j))}},z=g(A,[["__file","Time.vue"]]),G={__name:"Cancel",emits:["click"],setup(s){return(d,o)=>(_(),b("button",{type:"button",onClick:o[0]||(o[0]=$=>d.$emit("click")),class:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150"},i(d.$t("Cancel")),1))}},J=g(G,[["__file","Cancel.vue"]]),M=["disabled"],O={__name:"PrimaryButton",props:{disabled:{type:Boolean,default:!1}},setup(s){return(d,o)=>(_(),b("button",{class:"inline-flex items-center px-4 py-2 bg-primary border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-secondary focus:bg-secondary active:bg-secondary focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150",disabled:s.disabled},[h(d.$slots,"default")],8,M))}},H=g(O,[["__file","PrimaryButton.vue"]]),K={class:"mb-4"},Q={class:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"},R={class:"mb-4"},W={class:"mb-4"},X={class:"mb-4"},Y={class:"text-sm text-gray-500 mt-1"},Z={class:"mb-4"},ee={class:"mb-4"},te={class:"flex justify-end mt-6"},le={__name:"EventForm",props:{event:{type:Object,default:()=>({id:null,event_name:"",event_date:"",event_time:"",location:"",description:"",ticket_prefix:"",max_attendees:"",status:"draft"})},submitUrl:{type:String,required:!0},method:{type:String,default:"post"}},emits:["submit","cancel"],setup(s,{emit:d}){const o=s,$=d,y=S(!1),t=F({id:o.event.id,event_name:o.event.event_name,event_date:o.event.event_date,event_time:o.event.event_time,location:o.event.location,description:o.event.description,ticket_prefix:o.event.ticket_prefix,max_attendees:o.event.max_attendees,status:o.event.status||"draft"});C(()=>o.event,e=>{t.id=e.id,t.event_name=e.event_name,t.event_date=e.event_date,t.event_time=e.event_time,t.location=e.location,t.description=e.description,t.ticket_prefix=e.ticket_prefix,t.max_attendees=e.max_attendees,t.status=e.status||"draft"},{deep:!0});const c=U(()=>t.errors),k=()=>{y.value=!0,t[o.method](o.submitUrl,{onSuccess:()=>{y.value=!1,$("submit")},onError:()=>{y.value=!1}})};return(e,r)=>(_(),b("div",{class:E(["w-full",y.value?"opacity-75":""])},[u("div",K,[l(f,{required:""},{default:m(()=>[p(i(e.$t("Event Name")),1)]),_:1}),l(V,{modelValue:n(t).event_name,"onUpdate:modelValue":r[0]||(r[0]=a=>n(t).event_name=a),placeholder:e.$t("Enter event name")},null,8,["modelValue","placeholder"]),l(v,{error:c.value.event_name},null,8,["error"])]),u("div",Q,[u("div",null,[l(f,{required:""},{default:m(()=>[p(i(e.$t("Event Date")),1)]),_:1}),l(I,{modelValue:n(t).event_date,"onUpdate:modelValue":r[1]||(r[1]=a=>n(t).event_date=a),placeholder:e.$t("Select date")},null,8,["modelValue","placeholder"]),l(v,{error:c.value.event_date},null,8,["error"])]),u("div",null,[l(f,{required:""},{default:m(()=>[p(i(e.$t("Event Time")),1)]),_:1}),l(z,{modelValue:n(t).event_time,"onUpdate:modelValue":r[2]||(r[2]=a=>n(t).event_time=a),placeholder:e.$t("Select time")},null,8,["modelValue","placeholder"]),l(v,{error:c.value.event_time},null,8,["error"])])]),u("div",R,[l(f,{required:""},{default:m(()=>[p(i(e.$t("Location")),1)]),_:1}),l(V,{modelValue:n(t).location,"onUpdate:modelValue":r[3]||(r[3]=a=>n(t).location=a),placeholder:e.$t("Enter event location")},null,8,["modelValue","placeholder"]),l(v,{error:c.value.location},null,8,["error"])]),u("div",W,[l(f,null,{default:m(()=>[p(i(e.$t("Description")),1)]),_:1}),l(T,{modelValue:n(t).description,"onUpdate:modelValue":r[4]||(r[4]=a=>n(t).description=a),placeholder:e.$t("Enter event description"),rows:"3"},null,8,["modelValue","placeholder"]),l(v,{error:c.value.description},null,8,["error"])]),u("div",X,[l(f,null,{default:m(()=>[p(i(e.$t("Ticket Prefix")),1)]),_:1}),l(V,{modelValue:n(t).ticket_prefix,"onUpdate:modelValue":r[5]||(r[5]=a=>n(t).ticket_prefix=a),placeholder:e.$t("e.g. EVT2024")},null,8,["modelValue","placeholder"]),u("p",Y,i(e.$t("Used for generating unique ticket numbers")),1),l(v,{error:c.value.ticket_prefix},null,8,["error"])]),u("div",Z,[l(f,null,{default:m(()=>[p(i(e.$t("Maximum Attendees")),1)]),_:1}),l(V,{modelValue:n(t).max_attendees,"onUpdate:modelValue":r[6]||(r[6]=a=>n(t).max_attendees=a),type:"number",placeholder:e.$t("Leave empty for unlimited")},null,8,["modelValue","placeholder"]),l(v,{error:c.value.max_attendees},null,8,["error"])]),u("div",ee,[l(f,null,{default:m(()=>[p(i(e.$t("Event Status")),1)]),_:1}),l(B,{modelValue:n(t).status,"onUpdate:modelValue":r[7]||(r[7]=a=>n(t).status=a),options:[{value:"draft",label:e.$t("Draft")},{value:"published",label:e.$t("Published")},{value:"cancelled",label:e.$t("Cancelled")}]},null,8,["modelValue","options"]),l(v,{error:c.value.status},null,8,["error"])]),u("div",te,[l(J,{onClick:r[8]||(r[8]=a=>e.$emit("cancel"))}),l(H,{type:"button",onClick:k,disabled:y.value,class:"ml-2"},{default:m(()=>[p(i(y.value?e.$t("Saving..."):e.$t("Save Event")),1)]),_:1},8,["disabled"])])],2))}},de=g(le,[["__file","EventForm.vue"]]);export{de as E};
