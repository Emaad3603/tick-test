import{D as ie,r as V,G as ue,m as re,o as r,c,h as d,u as n,a as e,e as G,n as m,t as x,f as h,g as p,b as T,F as W,d as J,af as ce,ag as me,l as pe}from"./app-06066091.js";import{E as ve,_ as be}from"./ellipsis-479b8917.js";import{b as he,u as _e,c as K,d as Q}from"./vue-flow-core-09b5630a.js";import fe from"./Menubar-fd4e5999.js";import E from"./MenubarItem-683c51fa.js";import xe from"./MenubarContent-4d16dab4.js";import ye from"./MenubarMenu-ddb5e274.js";import ge from"./MenubarTrigger-3fe0db01.js";import{F as b}from"./FormInput-a5364d31.js";import{F as Ve}from"./FormSelect-6c96738a.js";import{F as Te}from"./FormTextArea-248be5f8.js";import ke from"./FlowMedia-c420161f.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";import"./createLucideIcon-61c243d3.js";import"./index-4364f7ce.js";import"./utils-9d1e612c.js";import"./index-8e47e887.js";import"./hidden-94645dc9.js";import"./use-text-value-6338b60a.js";import"./use-outside-click-6f649936.js";import"./use-resolve-button-type-737f9372.js";const i=y=>(ce("data-v-babc70ae"),y=y(),me(),y),Le={class:"rounded-sm border border-gray-200 bg-white p-3 shadow-md"},Ee={class:"flex flex-col gap-y-2"},Se={class:"flex justify-between items-center"},Fe={class:"flex gap-x-2"},Ne=i(()=>e("img",{src:be,class:"mt-1 h-4 w-4",alt:"LLM icon"},null,-1)),Ue={class:"flex flex-col gap-y-1"},Be={key:1,class:"text-base"},Me={key:0,class:"flex items-center gap-x-2 bg-red-500 text-white rounded-md px-2 py-2"},we=pe('<span data-v-babc70ae><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" data-v-babc70ae><g fill="none" data-v-babc70ae><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" data-v-babc70ae></path><path fill="currentColor" d="m13.299 3.148l8.634 14.954a1.5 1.5 0 0 1-1.299 2.25H3.366a1.5 1.5 0 0 1-1.299-2.25l8.634-14.954c.577-1 2.02-1 2.598 0M12 15a1 1 0 1 0 0 2a1 1 0 0 0 0-2m0-7a1 1 0 0 0-.993.883L11 9v4a1 1 0 0 0 1.993.117L13 13V9a1 1 0 0 0-1-1" data-v-babc70ae></path></g></svg></span><span class="text-sm" data-v-babc70ae>Please fill all the required fields</span>',2),Re=[we],De=i(()=>e("span",{class:"text-sm text-gray-500"},"Send interactive list message to your recipients.",-1)),qe={class:"mb-4"},Ae=i(()=>e("label",{class:"text-sm mb-2"},"Header (Optional)",-1)),He={key:1,class:"mb-4"},Pe=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Header Text")],-1)),je={class:"mb-4"},$e=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Body")],-1)),ze={class:"mb-4"},Oe=i(()=>e("label",{class:"text-sm mb-2"},"Footer Text (Optional)",-1)),Ge={class:"mb-4"},We=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Button Label")],-1)),Je=i(()=>e("label",{class:"text-sm"},"Sections (Atleast one section)",-1)),Ke={class:"flex justify-between items-center mb-2"},Qe={class:"text-sm"},Xe=["onClick"],Ye={class:"mb-4"},Ze=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Title")],-1)),Ie={class:"flex justify-between items-center mb-4"},et=i(()=>e("label",{class:"text-sm"},"Rows (Atleast one row)",-1)),tt=["onClick"],at={class:"flex justify-between items-center mb-2"},lt={class:"text-sm"},st=["onClick"],ot={class:"grid grid-cols-2 gap-x-6"},dt={class:"mb-4"},nt=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" ID")],-1)),it={class:"text-sm"},ut={class:"mb-2"},rt=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Title")],-1)),ct={class:"text-sm"},mt={class:"mb-2"},pt=i(()=>e("label",{class:"text-sm mb-2"},[e("span",{class:"text-red-500"},"*"),p(" Description")],-1)),vt={class:"text-sm"},bt=ie({__name:"List-node",props:{id:{},type:{},selected:{type:Boolean},connectable:{type:[Boolean,Number,String,Function]},position:{},dimensions:{},label:{},isValidTargetPos:{type:Function},isValidSourcePos:{type:Function},parent:{},parentNodeId:{},dragging:{type:Boolean},resizing:{type:Boolean},zIndex:{},targetPosition:{},sourcePosition:{},dragHandle:{},data:{},events:{}},setup(y){var U,B,M,w,R,D,q,A,H,P,j,$,z,O;const v=y,k=V(v.data.title),X=V(v.data.uuid),C=V(!1),t=V({type:"interactive list",headerType:((B=(U=v.data.metadata)==null?void 0:U.fields)==null?void 0:B.headerType)||"none",headerText:((w=(M=v.data.metadata)==null?void 0:M.fields)==null?void 0:w.headerText)||"",headerMedia:((D=(R=v.data.metadata)==null?void 0:R.fields)==null?void 0:D.headerMedia)||[],body:((A=(q=v.data.metadata)==null?void 0:q.fields)==null?void 0:A.body)||"",footer:((P=(H=v.data.metadata)==null?void 0:H.fields)==null?void 0:P.footer)||"",buttonLabel:(($=(j=v.data.metadata)==null?void 0:j.fields)==null?void 0:$.buttonLabel)||"",sections:((O=(z=v.data.metadata)==null?void 0:z.fields)==null?void 0:O.sections)||[{rows:[{}]}]}),Y=V([{value:"none",label:"None"},{value:"text",label:"Text"},{value:"image",label:"Image"},{value:"video",label:"Video"},{value:"audio",label:"Audio"},{value:"document",label:"Document"}]),_=he(),{removeNodes:Z,nodes:I,addNodes:ee,removeEdges:S,edges:F}=_e();function N(s){F.value.filter(a=>a.sourceHandle===s).forEach(a=>S(a.id))}ue(t,s=>{_.node.data.metadata.fields={...s}},{deep:!0});function te(){t.value.sections.length<10&&t.value.sections.push({rows:[{}]})}function ae(s){t.value.sections[s].rows.length<10&&t.value.sections[s].rows.push({})}function le(s){t.value.sections.length>1&&(t.value.sections[s].rows.forEach((l,a)=>{const u="a"+s+a;N(u)}),t.value.sections.splice(s,1))}function se(s,l){t.value.sections[s].rows.length>1&&(t.value.sections[s].rows.splice(l,1),t.value.sections[s].rows=t.value.sections[s].rows.map((a,u)=>({...a,id:a.id,title:a.title||"",description:a.description||""})),N("a"+s+l))}function oe(){F.value.filter(s=>s.source===_.id||s.target===_.id).forEach(s=>S(s.id)),Z(_.id)}function de(){const{type:s,position:l,label:a,data:u}=_.node,o={id:(I.value.length+1).toString(),type:s,position:{x:l.x+100,y:l.y+100},label:a,data:u};ee(o)}const ne=re(()=>{const s=t.value.sections.some(l=>l.title?l.rows.every(a=>!a.title||!a.id):!0);return t.value.headerType!==""&&t.value.headerType==="text"&&t.value.headerText===""||t.value.headerType!==""&&t.value.headerType!=="text"&&t.value.headerType!=="none"&&t.value.headerMedia.length===0||t.value.body===""||t.value.buttonLabel===""||s});function L(s){return s.length}return(s,l)=>(r(),c("div",Le,[d(n(Q),{type:"target",position:n(K).Left},null,8,["position"]),e("div",Ee,[e("div",Se,[e("div",Fe,[Ne,e("div",Ue,[C.value?(r(),G(b,{key:0,modelValue:k.value,"onUpdate:modelValue":l[0]||(l[0]=a=>k.value=a),name:"",type:"text",class:m("col-span-4"),onBlur:l[1]||(l[1]=()=>C.value=!1)},null,8,["modelValue"])):(r(),c("h3",Be,x(k.value),1))])]),d(n(fe),{class:"border-none"},{default:h(()=>[d(n(ye),null,{default:h(()=>[d(n(ge),null,{default:h(()=>[d(n(ve))]),_:1}),d(n(xe),null,{default:h(()=>[d(n(E),{onClick:de},{default:h(()=>[p(" Duplicated ")]),_:1}),d(n(E),{onClick:oe},{default:h(()=>[p(" Delete ")]),_:1}),d(n(E),{onClick:l[2]||(l[2]=a=>C.value=!0)},{default:h(()=>[p(" Rename ")]),_:1})]),_:1})]),_:1})]),_:1})]),ne.value?(r(),c("div",Me,Re)):T("",!0),De,e("div",qe,[Ae,d(Ve,{modelValue:t.value.headerType,"onUpdate:modelValue":l[3]||(l[3]=a=>t.value.headerType=a),name:"",type:"text",optionClassName:"h-32",options:Y.value,class:m("col-span-4")},null,8,["modelValue","options"])]),t.value.headerType=="text"?(r(),c("div",He,[Pe,d(b,{modelValue:t.value.headerText,"onUpdate:modelValue":l[4]||(l[4]=a=>t.value.headerText=a),name:"",placeholder:"Enter header text",type:"text",class:m("col-span-4")},null,8,["modelValue"])])):T("",!0),t.value.headerType!="text"&&t.value.headerType!="none"?(r(),G(ke,{key:2,modelValue:t.value.headerMedia,"onUpdate:modelValue":l[5]||(l[5]=a=>t.value.headerMedia=a),type:t.value.headerType,uuid:X.value,nodeId:n(_).id},null,8,["modelValue","type","uuid","nodeId"])):T("",!0),e("div",je,[$e,d(Te,{modelValue:t.value.body,"onUpdate:modelValue":l[6]||(l[6]=a=>t.value.body=a),placeholder:"Enter the main message for this message type",name:"",type:"text",class:m("col-span-4")},null,8,["modelValue"])]),e("div",ze,[Oe,d(b,{modelValue:t.value.footer,"onUpdate:modelValue":l[7]||(l[7]=a=>t.value.footer=a),name:"",placeholder:"Enter footer text",type:"text",class:m("col-span-4")},null,8,["modelValue"])]),e("div",Ge,[We,d(b,{modelValue:t.value.buttonLabel,"onUpdate:modelValue":l[8]||(l[8]=a=>t.value.buttonLabel=a),name:"",placeholder:"Enter footer text",type:"text",class:m("col-span-4")},null,8,["modelValue"])]),e("div",{class:"flex justify-between items-center mb-4"},[Je,e("button",{onClick:te,class:"bg-slate-100 p-1 rounded-md text-sm px-2"},"Add Section")]),(r(!0),c(W,null,J(t.value.sections,(a,u)=>(r(),c("div",{key:u,class:"border rounded p-3 mb-4"},[e("div",Ke,[e("label",Qe,"Section "+x(u+1),1),u>0?(r(),c("button",{key:0,onClick:o=>le(u),class:"text-red-500 text-sm"}," Remove Section ",8,Xe)):T("",!0)]),e("div",Ye,[Ze,d(b,{modelValue:a.title,"onUpdate:modelValue":o=>a.title=o,name:"",placeholder:"Enter section title",type:"text",class:m("col-span-4")},null,8,["modelValue","onUpdate:modelValue"])]),e("div",Ie,[et,e("button",{onClick:o=>ae(u),class:"bg-slate-100 p-1 rounded-md text-sm px-2"},"Add Row",8,tt)]),(r(!0),c(W,null,J(a.rows,(o,g)=>(r(),c("div",{key:g,class:"relative border rounded p-3 bg-slate-50 mb-2"},[e("div",at,[e("label",lt,"Row "+x(g+1),1),g>0?(r(),c("button",{key:0,onClick:f=>se(u,g),class:"text-red-500 text-sm"}," Remove Row ",8,st)):T("",!0)]),e("div",ot,[e("div",dt,[nt,d(b,{modelValue:o.id,"onUpdate:modelValue":f=>o.id=f,maxLength:"200",name:"",placeholder:"Enter ID",type:"text",class:m("col-span-4")},null,8,["modelValue","onUpdate:modelValue"]),e("span",it,x(L((o==null?void 0:o.id)??""))+"/200",1)]),e("div",ut,[rt,d(b,{modelValue:o.title,"onUpdate:modelValue":f=>o.title=f,maxLength:"24",name:"",placeholder:"Enter row title",type:"text",class:m("col-span-4")},null,8,["modelValue","onUpdate:modelValue"]),e("span",ct,x(L((o==null?void 0:o.title)??""))+"/24",1)])]),e("div",mt,[pt,d(b,{modelValue:o.description,"onUpdate:modelValue":f=>o.description=f,maxLength:"72",name:"",placeholder:"Enter description",type:"text",class:m("col-span-4")},null,8,["modelValue","onUpdate:modelValue"]),e("span",vt,x(L((o==null?void 0:o.description)??""))+"/72",1)]),d(n(Q),{id:"a"+u+g,type:"source",position:n(K).Right,style:{right:"-25px"}},null,8,["id","position"])]))),128))]))),128))])]))}});const qt=Ce(bt,[["__scopeId","data-v-babc70ae"],["__file","List-node.vue"]]);export{qt as default};
