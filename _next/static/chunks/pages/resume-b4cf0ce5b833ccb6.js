(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[937],{1718:(e,t,o)=>{"use strict";o.d(t,{k:()=>O});var n=o(7876),r=o(9848),a=o(4232),i=o(6249),l=o(1609),s=o(9545),c=o(8791),d=o(6971),u=o(5754),p=o(3108);function m({style:e,size:t=16,...o}){return(0,n.jsx)("svg",{viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{...e,width:(0,p.D)(t),height:(0,p.D)(t),display:"block"},...o,children:(0,n.jsx)("path",{d:"M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}m.displayName="@mantine/core/AccordionChevron";var h=o(7385),f=o(4533),v=o(385),g=o(8477),b=o(7984),y=o(5962);function x(e){return e?.current?e.current.scrollHeight:"auto"}let w="undefined"!=typeof window&&window.requestAnimationFrame,j={transitionDuration:200,transitionTimingFunction:"ease",animateOpacity:!0},N=(0,v.P9)((e,t)=>{let{children:o,in:r,transitionDuration:i,transitionTimingFunction:l,style:c,onTransitionEnd:u,animateOpacity:p,...m}=(0,s.Y)("Collapse",j,e),v=(0,f.xd)(),N=(0,h.I)(),C=v.respectReducedMotion&&N?0:i,S=function({transitionDuration:e,transitionTimingFunction:t="ease",onTransitionEnd:o=()=>{},opened:n}){let r=(0,a.useRef)(null),i={display:"none",height:0,overflow:"hidden"},[l,s]=(0,a.useState)(n?{}:i),c=e=>{(0,g.flushSync)(()=>s(e))},d=e=>{c(t=>({...t,...e}))};function u(o){let n=e||function(e){if(!e||"string"==typeof e)return 0;let t=e/36;return Math.round((4+15*t**.25+t/5)*10)}(o);return{transition:`height ${n}ms ${t}, opacity ${n}ms ${t}`}}(0,b.C)(()=>{"function"==typeof w&&(n?w(()=>{d({willChange:"height",display:"block",overflow:"hidden"}),w(()=>{let e=x(r);d({...u(e),height:e})})}):w(()=>{let e=x(r);d({...u(e),willChange:"height",height:e}),w(()=>d({height:0,overflow:"hidden"}))}))},[n]);let p=e=>{if(e.target===r.current&&"height"===e.propertyName){if(n){let e=x(r);e===l.height?c({}):d({height:e}),o()}else 0===l.height&&(c(i),o())}};return function({style:e={},refKey:t="ref",...o}={}){let a=o[t];return{"aria-hidden":!n,...o,[t]:(0,y.Px)(r,a),onTransitionEnd:p,style:{boxSizing:"border-box",...e,...l}}}}({opened:r,transitionDuration:C,transitionTimingFunction:l,onTransitionEnd:u});return 0===C?r?(0,n.jsx)(d.a,{...m,children:o}):null:(0,n.jsx)(d.a,{...S({style:{opacity:r||!p?1:0,transition:p?`opacity ${C}ms ${l}`:"none",...function e(t,o){return Array.isArray(t)?[...t].reduce((t,n)=>({...t,...e(n,o)}),{}):"function"==typeof t?t(o):null==t?{}:t}(c,v)},ref:t,...m}),children:o})});N.displayName="@mantine/core/Collapse";var C=o(958),S={root:"m_f0824112",description:"m_57492dcc",section:"m_690090b5",label:"m_1f6ac4c4",body:"m_f07af9d2",children:"m_e17b862f",chevron:"m_1fd8a00b"};let _={},k=(0,l.V)((e,{variant:t,color:o,childrenOffset:n,autoContrast:r})=>{let a=e.variantColorResolver({color:o||e.primaryColor,theme:e,variant:t||"light",autoContrast:r});return{root:{"--nl-bg":o||t?a.background:void 0,"--nl-hover":o||t?a.hover:void 0,"--nl-color":o||t?a.color:void 0},children:{"--nl-offset":(0,i.GY)(n)}}}),O=(0,u.v)((e,t)=>{let o=(0,s.Y)("NavLink",_,e),{classNames:a,className:i,style:l,styles:u,unstyled:p,vars:h,opened:f,defaultOpened:v,onChange:g,children:b,onClick:y,active:x,disabled:w,leftSection:j,rightSection:O,label:P,description:E,disableRightSectionRotation:D,noWrap:z,childrenOffset:B,onKeyDown:L,autoContrast:R,mod:Y,...A}=o,$=(0,c.I)({name:"NavLink",props:o,classes:S,className:i,style:l,classNames:a,styles:u,unstyled:p,vars:h,varsResolver:k}),[G,M]=(0,r.Z)({value:f,defaultValue:v,finalValue:!1,onChange:g}),I=!!b;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(C.N,{...$("root"),component:"a",ref:t,onClick:e=>{y?.(e),I&&(e.preventDefault(),M(!G))},onKeyDown:e=>{L?.(e),"Space"===e.nativeEvent.code&&I&&(e.preventDefault(),M(!G))},unstyled:p,mod:[{disabled:w,active:x,expanded:G},Y],...A,children:[j&&(0,n.jsx)(d.a,{component:"span",...$("section"),mod:{position:"left"},children:j}),(0,n.jsxs)(d.a,{...$("body"),mod:{"no-wrap":z},children:[(0,n.jsx)(d.a,{component:"span",...$("label"),children:P}),(0,n.jsx)(d.a,{component:"span",mod:{active:x},...$("description"),children:E})]}),(I||O)&&(0,n.jsx)(d.a,{...$("section"),component:"span",mod:{rotate:G&&!D,position:"right"},children:I?O||(0,n.jsx)(m,{...$("chevron")}):O})]}),I&&(0,n.jsx)(N,{in:G,...$("collapse"),children:(0,n.jsx)("div",{...$("children"),children:b})})]})});O.classes=S,O.displayName="@mantine/core/NavLink"},3620:(e,t,o)=>{"use strict";o.d(t,{k5:()=>d});var n=o(4232),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(r),i=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e}).apply(this,arguments)}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach(function(t){var n,r,a;n=e,r=t,a=o[t],(r=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var n=o.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(r))in n?Object.defineProperty(n,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[r]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}function d(e){return t=>n.createElement(u,l({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,o)=>n.createElement(t.tag,c({key:o},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var o,{attr:r,size:a,title:s}=e,d=function(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;o[n]=e[n]}return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],!(t.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}(e,i),u=a||t.size||"1em";return t.className&&(o=t.className),e.className&&(o=(o?o+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,d,{className:o,style:c(c({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&n.createElement("title",null,s),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(r)}},4092:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>R});var n=o(7876),r=o(8230),a=o.n(r),i=o(3679),l=o(4188),s=o(9704),c=o(9021),d=o(1718),u=o(6971),p=o(8291),m=o(5050),h=o(3108);o(4232);var f=o(6249),v=o(1609),g=o(9545),b=o(8791),y=o(5754),x=o(8755),w=o(6185),j=o(958),N=o(385),C={root:"m_77c9d27d",inner:"m_80f1301b",label:"m_811560b9",section:"m_a74036a",loader:"m_a25b86ee",group:"m_80d6d844",groupSection:"m_70be2a01"};let S={orientation:"horizontal"},_=(0,v.V)((e,{borderWidth:t})=>({group:{"--button-border-width":(0,h.D)(t)}})),k=(0,N.P9)((e,t)=>{let o=(0,g.Y)("ButtonGroup",S,e),{className:r,style:a,classNames:i,styles:l,unstyled:s,orientation:c,vars:d,borderWidth:p,variant:m,mod:h,...f}=(0,g.Y)("ButtonGroup",S,e),v=(0,b.I)({name:"ButtonGroup",props:o,classes:C,className:r,style:a,classNames:i,styles:l,unstyled:s,vars:d,varsResolver:_,rootSelector:"group"});return(0,n.jsx)(u.a,{...v("group"),ref:t,variant:m,mod:[{"data-orientation":c},h],role:"group",...f})});k.classes=C,k.displayName="@mantine/core/ButtonGroup";let O={},P=(0,v.V)((e,{radius:t,color:o,gradient:n,variant:r,autoContrast:a,size:i})=>{let l=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:r||"filled",autoContrast:a});return{groupSection:{"--section-height":(0,f.YC)(i,"section-height"),"--section-padding-x":(0,f.YC)(i,"section-padding-x"),"--section-fz":i?.includes("compact")?(0,f.ny)(i.replace("compact-","")):(0,f.ny)(i),"--section-radius":void 0===t?void 0:(0,f.nJ)(t),"--section-bg":o||r?l.background:void 0,"--section-color":l.color,"--section-bd":o||r?l.border:void 0}}}),E=(0,N.P9)((e,t)=>{let o=(0,g.Y)("ButtonGroupSection",O,e),{className:r,style:a,classNames:i,styles:l,unstyled:s,vars:c,variant:d,gradient:p,radius:m,autoContrast:h,...f}=(0,g.Y)("ButtonGroupSection",O,e),v=(0,b.I)({name:"ButtonGroupSection",props:o,classes:C,className:r,style:a,classNames:i,styles:l,unstyled:s,vars:c,varsResolver:P,rootSelector:"groupSection"});return(0,n.jsx)(u.a,{...v("groupSection"),ref:t,variant:d,...f})});E.classes=C,E.displayName="@mantine/core/ButtonGroupSection";let D={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${(0,h.D)(1)}))`},out:{opacity:0,transform:"translate(-50%, -200%)"},common:{transformOrigin:"center"},transitionProperty:"transform, opacity"},z={},B=(0,v.V)((e,{radius:t,color:o,gradient:n,variant:r,size:a,justify:i,autoContrast:l})=>{let s=e.variantColorResolver({color:o||e.primaryColor,theme:e,gradient:n,variant:r||"filled",autoContrast:l});return{root:{"--button-justify":i,"--button-height":(0,f.YC)(a,"button-height"),"--button-padding-x":(0,f.YC)(a,"button-padding-x"),"--button-fz":a?.includes("compact")?(0,f.ny)(a.replace("compact-","")):(0,f.ny)(a),"--button-radius":void 0===t?void 0:(0,f.nJ)(t),"--button-bg":o||r?s.background:void 0,"--button-hover":o||r?s.hover:void 0,"--button-color":s.color,"--button-bd":o||r?s.border:void 0,"--button-hover-color":o||r?s.hoverColor:void 0}}}),L=(0,y.v)((e,t)=>{let o=(0,g.Y)("Button",z,e),{style:r,vars:a,className:i,color:l,disabled:s,children:c,leftSection:d,rightSection:p,fullWidth:m,variant:h,radius:f,loading:v,loaderProps:y,gradient:N,classNames:S,styles:_,unstyled:k,"data-disabled":O,autoContrast:P,mod:E,...L}=o,R=(0,b.I)({name:"Button",props:o,classes:C,className:i,style:r,classNames:S,styles:_,unstyled:k,vars:a,varsResolver:B}),Y=!!d,A=!!p;return(0,n.jsxs)(j.N,{ref:t,...R("root",{active:!s&&!v&&!O}),unstyled:k,variant:h,disabled:s||v,mod:[{disabled:s||O,loading:v,block:m,"with-left-section":Y,"with-right-section":A},E],...L,children:[(0,n.jsx)(w.e,{mounted:!!v,transition:D,duration:150,children:e=>(0,n.jsx)(u.a,{component:"span",...R("loader",{style:e}),"aria-hidden":!0,children:(0,n.jsx)(x.a,{color:"var(--button-color)",size:"calc(var(--button-height) / 1.8)",...y})})}),(0,n.jsxs)("span",{...R("inner"),children:[d&&(0,n.jsx)(u.a,{component:"span",...R("section"),mod:{position:"left"},children:d}),(0,n.jsx)(u.a,{component:"span",mod:{loading:v},...R("label"),children:c}),p&&(0,n.jsx)(u.a,{component:"span",...R("section"),mod:{position:"right"},children:p})]})]})});L.classes=C,L.displayName="@mantine/core/Button",L.Group=k,L.GroupSection=E;let R=()=>(0,n.jsxs)(l.Y,{align:"flex-start",className:"bg-gradient-to-br from-blue-50 to-gray-100 shadow-lg border border-gray-300",style:{width:"100%",display:"flex",gap:"20px",padding:"20px"},children:[(0,n.jsx)(s.t,{shadow:"sm",radius:"md",p:"lg",withBorder:!0,className:"sticky top-0 bg-white hidden lg:block",style:{width:"250px",minHeight:"90vh",maxHeight:"90vh",overflowY:"auto",borderRadius:"12px"},children:(0,n.jsx)(c.B,{gap:"md",children:["Profile","Skills","Education","Work Experience","Volunteer Experience","Certifications"].map(e=>(0,n.jsx)(d.k,{label:e,component:a(),href:"#".concat(e.toLowerCase().replace(/ /g,"-")),className:"hover:bg-gray-200 rounded-md"},e))})}),(0,n.jsxs)(u.a,{style:{flex:1,backgroundColor:"white",borderRadius:"12px",padding:"24px",boxShadow:"0 2px 10px rgba(0,0,0,0.1)",overflowY:"auto",maxHeight:"90vh"},children:[(0,n.jsxs)(u.a,{className:"relative text-center",children:[(0,n.jsx)(p.h,{order:1,children:"Jenine Gutierrez"}),(0,n.jsx)(m.E,{size:"lg",color:"dimmed",children:"Diagnostic Medical Sonography Student"}),(0,n.jsx)(L,{component:"a",href:"/resume.pdf",download:"Jenine_Gutierrez_Resume.pdf",rightSection:(0,n.jsx)(i.WCW,{}),className:"absolute top-4 right-4",color:"orange",children:"Download PDF"})]}),[{id:"profile",title:"Profile",content:"A dedicated student working towards a diploma in General Diagnostic Medical Sonography..."},{id:"skills",title:"Skills",content:["Navigates challenging situations with a positive attitude","Prioritizes workflow schedule","Absorbs new knowledge and skills actively","Outstanding interpersonal and communication abilities"]},{id:"education",title:"Education",content:["Canadian National Institute of Health","General Diagnostic Medical Sonography (May 2024 - Present)","Anticipated graduation in December 2025","Acquiring skills in infectious disease control and prevention"]},{id:"work-experience",title:"Work Experience",content:["Brooke Radiology, Burnaby, BC - Clerk","January 2023 - December 2023","Ensured a seamless patient experience with check-ins and record management"]},{id:"volunteer-experience",title:"Volunteer Experience",content:["Royal Columbian Hospital (70 hours)","March 2023 - December 2023","Served as the first point of contact for patients and visitors"]},{id:"certifications",title:"Certifications & Memberships",content:["IPAC Modules","Standard First Aid + BLS","Student member of Sonography Canada, OAMRS, and ARDMS"]}].map(e=>(0,n.jsxs)(u.a,{id:e.id,className:"pt-10",children:[(0,n.jsx)(p.h,{order:2,children:e.title}),Array.isArray(e.content)?(0,n.jsx)("ul",{className:"mt-2 list-disc pl-6 text-gray-700",children:e.content.map((e,t)=>(0,n.jsx)("li",{children:e},t))}):(0,n.jsx)(m.E,{className:"mt-2 text-lg text-gray-700",children:e.content})]},e.id))]})]})},8291:(e,t,o)=>{"use strict";o.d(t,{h:()=>f});var n=o(7876);o(4232);var r=o(1609),a=o(9545),i=o(8791),l=o(6971),s=o(385),c=o(3108);let d=["h1","h2","h3","h4","h5","h6"],u=["xs","sm","md","lg","xl"];var p={root:"m_8a5d1357"};let m={order:1},h=(0,r.V)((e,{order:t,size:o,lineClamp:n,textWrap:r})=>{let a=function(e,t){let o=void 0!==t?t:`h${e}`;return d.includes(o)?{fontSize:`var(--mantine-${o}-font-size)`,fontWeight:`var(--mantine-${o}-font-weight)`,lineHeight:`var(--mantine-${o}-line-height)`}:u.includes(o)?{fontSize:`var(--mantine-font-size-${o})`,fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}:{fontSize:(0,c.D)(o),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,o);return{root:{"--title-fw":a.fontWeight,"--title-lh":a.lineHeight,"--title-fz":a.fontSize,"--title-line-clamp":"number"==typeof n?n.toString():void 0,"--title-text-wrap":r}}}),f=(0,s.P9)((e,t)=>{let o=(0,a.Y)("Title",m,e),{classNames:r,className:s,style:c,styles:d,unstyled:u,order:f,vars:v,size:g,variant:b,lineClamp:y,textWrap:x,mod:w,...j}=o,N=(0,i.I)({name:"Title",props:o,classes:p,className:s,style:c,classNames:r,styles:d,unstyled:u,vars:v,varsResolver:h});return[1,2,3,4,5,6].includes(f)?(0,n.jsx)(l.a,{...N("root"),component:`h${f}`,variant:b,ref:t,mod:[{order:f,"data-line-clamp":"number"==typeof y},w],size:g,...j}):null});f.classes=p,f.displayName="@mantine/core/Title"},8755:(e,t,o)=>{"use strict";o.d(t,{a:()=>x});var n=o(7876),r=o(4232),a=o(6249),i=o(1609),l=o(4453),s=o(9545),c=o(8791),d=o(6971),u=o(385),p=o(9241),m={root:"m_5ae2e3c",barsLoader:"m_7a2bd4cd",bar:"m_870bb79","bars-loader-animation":"m_5d2b3b9d",dotsLoader:"m_4e3f22d7",dot:"m_870c4af","loader-dots-animation":"m_aac34a1",ovalLoader:"m_b34414df","oval-loader-animation":"m_f8e89c4b"};let h=(0,r.forwardRef)(({className:e,...t},o)=>(0,n.jsxs)(d.a,{component:"span",className:(0,p.A)(m.barsLoader,e),...t,ref:o,children:[(0,n.jsx)("span",{className:m.bar}),(0,n.jsx)("span",{className:m.bar}),(0,n.jsx)("span",{className:m.bar})]}));h.displayName="@mantine/core/Bars";let f=(0,r.forwardRef)(({className:e,...t},o)=>(0,n.jsxs)(d.a,{component:"span",className:(0,p.A)(m.dotsLoader,e),...t,ref:o,children:[(0,n.jsx)("span",{className:m.dot}),(0,n.jsx)("span",{className:m.dot}),(0,n.jsx)("span",{className:m.dot})]}));f.displayName="@mantine/core/Dots";let v=(0,r.forwardRef)(({className:e,...t},o)=>(0,n.jsx)(d.a,{component:"span",className:(0,p.A)(m.ovalLoader,e),...t,ref:o}));v.displayName="@mantine/core/Oval";let g={bars:h,oval:v,dots:f},b={loaders:g,type:"oval"},y=(0,i.V)((e,{size:t,color:o})=>({root:{"--loader-size":(0,a.YC)(t,"loader-size"),"--loader-color":o?(0,l.r)(o,e):void 0}})),x=(0,u.P9)((e,t)=>{let o=(0,s.Y)("Loader",b,e),{size:r,color:a,type:i,vars:l,className:u,style:p,classNames:h,styles:f,unstyled:v,loaders:g,variant:x,children:w,...j}=o,N=(0,c.I)({name:"Loader",props:o,classes:m,className:u,style:p,classNames:h,styles:f,unstyled:v,vars:l,varsResolver:y});return w?(0,n.jsx)(d.a,{...N("root"),ref:t,...j,children:w}):(0,n.jsx)(d.a,{...N("root"),ref:t,component:g[i],variant:x,size:r,...j})});x.defaultLoaders=g,x.classes=m,x.displayName="@mantine/core/Loader"},8774:(e,t,o)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/resume",function(){return o(4092)}])},9704:(e,t,o)=>{"use strict";o.d(t,{t:()=>m});var n=o(7876);o(4232);var r=o(6249),a=o(1609),i=o(9545),l=o(8791),s=o(6971),c=o(5754),d={root:"m_1b7284a3"};let u={},p=(0,a.V)((e,{radius:t,shadow:o})=>({root:{"--paper-radius":void 0===t?void 0:(0,r.nJ)(t),"--paper-shadow":(0,r.dh)(o)}})),m=(0,c.v)((e,t)=>{let o=(0,i.Y)("Paper",u,e),{classNames:r,className:a,style:c,styles:m,unstyled:h,withBorder:f,vars:v,radius:g,shadow:b,variant:y,mod:x,...w}=o,j=(0,l.I)({name:"Paper",props:o,classes:d,className:a,style:c,classNames:r,styles:m,unstyled:h,vars:v,varsResolver:p});return(0,n.jsx)(s.a,{ref:t,mod:[{"data-with-border":f},x],...j("root"),variant:y,...w})});m.classes=d,m.displayName="@mantine/core/Paper"}},e=>{var t=t=>e(e.s=t);e.O(0,[938,636,593,792],()=>t(8774)),_N_E=e.O()}]);