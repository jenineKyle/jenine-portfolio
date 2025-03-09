(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[78],{562:(e,t,i)=>{"use strict";i.d(t,{s:()=>h});var r=i(7876),o=i(2971);i(4232);var n=i(4533),a=i(9545),s=i(8791),l=i(2546),d=i(3964),c=i(3671),u=i(6971),f=i(5754);let p={gap:{type:"spacing",property:"gap"},rowGap:{type:"spacing",property:"rowGap"},columnGap:{type:"spacing",property:"columnGap"},align:{type:"identity",property:"alignItems"},justify:{type:"identity",property:"justifyContent"},wrap:{type:"identity",property:"flexWrap"},direction:{type:"identity",property:"flexDirection"}};var m={root:"m_8bffd616"};let g={},h=(0,f.v)((e,t)=>{let i=(0,a.Y)("Flex",g,e),{classNames:f,className:h,style:v,styles:y,unstyled:b,vars:x,gap:w,rowGap:j,columnGap:_,align:S,justify:C,wrap:E,direction:z,...P}=i,R=(0,s.I)({name:"Flex",classes:m,props:i,className:h,style:v,classNames:f,styles:y,unstyled:b,vars:x}),O=(0,n.xd)(),N=(0,c.C)(),D=(0,d.X)({styleProps:{gap:w,rowGap:j,columnGap:_,align:S,justify:C,wrap:E,direction:z},theme:O,data:p});return(0,r.jsxs)(r.Fragment,{children:[D.hasResponsiveStyles&&(0,r.jsx)(l.K,{selector:`.${N}`,styles:D.styles,media:D.media}),(0,r.jsx)(u.a,{ref:t,...R("root",{className:N,style:(0,o.J)(D.inlineStyles)}),...P})]})});h.classes=m,h.displayName="@mantine/core/Flex"},986:(e,t,i)=>{"use strict";i.d(t,{q:()=>o});var r=i(5950);function o(e,t){let i=e.map(e=>({value:e,px:e in t?(0,r.px)(t[e]):(0,r.px)(e)}));return i.sort((e,t)=>e.px-t.px),i}},1045:(e,t,i)=>{"use strict";i.d(t,{x:()=>N});var r=i(7876);i(4232);var o=i(1609),n=i(9545),a=i(8791),s=i(3671),l=i(6971),d=i(385);let[c,u]=(0,i(8671).F)("Grid component was not found in tree");var f=i(9241),p=i(9521),m=i(2971),g=i(986),h=i(9953),v=i(4533),y=i(2546);let b=(e,t)=>"content"===e?"auto":"auto"===e?"0rem":e?`${100/(t/e)}%`:void 0,x=(e,t,i)=>i||"auto"===e?"100%":"content"===e?"unset":b(e,t),w=(e,t)=>{if(e)return"auto"===e||t?"1":"auto"},j=(e,t)=>0===e?"0":e?`${100/(t/e)}%`:void 0;function _({span:e,order:t,offset:i,selector:o}){let n=(0,v.xd)(),a=u(),s=a.breakpoints||n.breakpoints,l=void 0===(0,h.D)(e)?12:(0,h.D)(e),d=(0,m.J)({"--col-order":h.D(t)?.toString(),"--col-flex-grow":w(l,a.grow),"--col-flex-basis":b(l,a.columns),"--col-width":"content"===l?"auto":void 0,"--col-max-width":x(l,a.columns,a.grow),"--col-offset":j((0,h.D)(i),a.columns)}),c=(0,p.H)(s).reduce((r,o)=>(r[o]||(r[o]={}),"object"==typeof t&&void 0!==t[o]&&(r[o]["--col-order"]=t[o]?.toString()),"object"==typeof e&&void 0!==e[o]&&(r[o]["--col-flex-grow"]=w(e[o],a.grow),r[o]["--col-flex-basis"]=b(e[o],a.columns),r[o]["--col-width"]="content"===e[o]?"auto":void 0,r[o]["--col-max-width"]=x(e[o],a.columns,a.grow)),"object"==typeof i&&void 0!==i[o]&&(r[o]["--col-offset"]=j(i[o],a.columns)),r),{}),f=(0,g.q)((0,p.H)(c),s).filter(e=>(0,p.H)(c[e.value]).length>0).map(e=>({query:"container"===a.type?`mantine-grid (min-width: ${s[e.value]})`:`(min-width: ${s[e.value]})`,styles:c[e.value]}));return(0,r.jsx)(y.K,{styles:d,media:"container"===a.type?void 0:f,container:"container"===a.type?f:void 0,selector:o})}var S={container:"m_8478a6da",root:"m_410352e9",inner:"m_dee7bd2f",col:"m_96bdd299"};let C={span:12},E=(0,d.P9)((e,t)=>{let{classNames:i,className:o,style:a,styles:d,vars:c,span:p,order:m,offset:g,...h}=(0,n.Y)("GridCol",C,e),v=u(),y=(0,s.C)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(_,{selector:`.${y}`,span:p,order:m,offset:g}),(0,r.jsx)(l.a,{ref:t,...v.getStyles("col",{className:(0,f.A)(o,y),style:a,classNames:i,styles:d}),...h})]})});E.classes=S,E.displayName="@mantine/core/GridCol";var z=i(6249);function P({gutter:e,selector:t,breakpoints:i,type:o}){let n=(0,v.xd)(),a=i||n.breakpoints,s=(0,m.J)({"--grid-gutter":(0,z.GY)((0,h.D)(e))}),l=(0,p.H)(a).reduce((t,i)=>(t[i]||(t[i]={}),"object"==typeof e&&void 0!==e[i]&&(t[i]["--grid-gutter"]=(0,z.GY)(e[i])),t),{}),d=(0,g.q)((0,p.H)(l),a).filter(e=>(0,p.H)(l[e.value]).length>0).map(e=>({query:"container"===o?`mantine-grid (min-width: ${a[e.value]})`:`(min-width: ${a[e.value]})`,styles:l[e.value]}));return(0,r.jsx)(y.K,{styles:s,media:"container"===o?void 0:d,container:"container"===o?d:void 0,selector:t})}let R={gutter:"md",grow:!1,columns:12},O=(0,o.V)((e,{justify:t,align:i,overflow:r})=>({root:{"--grid-justify":t,"--grid-align":i,"--grid-overflow":r}})),N=(0,d.P9)((e,t)=>{let i=(0,n.Y)("Grid",R,e),{classNames:o,className:d,style:u,styles:f,unstyled:p,vars:m,grow:g,gutter:h,columns:v,align:y,justify:b,children:x,breakpoints:w,type:j,..._}=i,C=(0,a.I)({name:"Grid",classes:S,props:i,className:d,style:u,classNames:o,styles:f,unstyled:p,vars:m,varsResolver:O}),E=(0,s.C)();return"container"===j&&w?(0,r.jsxs)(c,{value:{getStyles:C,grow:g,columns:v||12,breakpoints:w,type:j},children:[(0,r.jsx)(P,{selector:`.${E}`,...i}),(0,r.jsx)("div",{...C("container"),children:(0,r.jsx)(l.a,{ref:t,...C("root",{className:E}),..._,children:(0,r.jsx)("div",{...C("inner"),children:x})})})]}):(0,r.jsxs)(c,{value:{getStyles:C,grow:g,columns:v||12,breakpoints:w,type:j},children:[(0,r.jsx)(P,{selector:`.${E}`,...i}),(0,r.jsx)(l.a,{ref:t,...C("root",{className:E}),..._,children:(0,r.jsx)("div",{...C("inner"),children:x})})]})});N.classes=S,N.displayName="@mantine/core/Grid",N.Col=E},1342:(e,t,i)=>{"use strict";i.d(t,{c:()=>m});var r=i(7876);i(4232);var o=i(6249),n=i(1609),a=i(4453),s=i(9545),l=i(8791),d=i(6971),c=i(385),u={root:"m_3eebeb36",label:"m_9e365f20"};let f={orientation:"horizontal"},p=(0,n.V)((e,{color:t,variant:i,size:r})=>({root:{"--divider-color":t?(0,a.r)(t,e):void 0,"--divider-border-style":i,"--divider-size":(0,o.YC)(r,"divider-size")}})),m=(0,c.P9)((e,t)=>{let i=(0,s.Y)("Divider",f,e),{classNames:o,className:n,style:a,styles:c,unstyled:m,vars:g,color:h,orientation:v,label:y,labelPosition:b,mod:x,...w}=i,j=(0,l.I)({name:"Divider",classes:u,props:i,className:n,style:a,classNames:o,styles:c,unstyled:m,vars:g,varsResolver:p});return(0,r.jsx)(d.a,{ref:t,mod:[{orientation:v,"with-label":!!y},x],...j("root"),...w,role:"separator",children:y&&(0,r.jsx)(d.a,{component:"span",mod:{position:b},...j("label"),children:y})})});m.classes=u,m.displayName="@mantine/core/Divider"},2439:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return x}});let r=i(4252),o=i(8365),n=i(7876),a=o._(i(4232)),s=r._(i(8477)),l=r._(i(9836)),d=i(4915),c=i(6904),u=i(72);i(546);let f=i(8265),p=r._(i(3829)),m=i(1026),g={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,i,r,o,n,a){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let r=!1,o=!1;i.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>r,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{r=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}})}(null==r?void 0:r.current)&&r.current(e)}}))}function v(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}let y=(0,a.forwardRef)((e,t)=>{let{src:i,srcSet:r,sizes:o,height:s,width:l,decoding:d,className:c,style:u,fetchPriority:f,placeholder:p,loading:g,unoptimized:y,fill:b,onLoadRef:x,onLoadingCompleteRef:w,setBlurComplete:j,setShowAltText:_,sizesInput:S,onLoad:C,onError:E,...z}=e,P=(0,a.useCallback)(e=>{e&&(E&&(e.src=e.src),e.complete&&h(e,p,x,w,j,y,S))},[i,p,x,w,j,E,y,S]),R=(0,m.useMergedRef)(t,P);return(0,n.jsx)("img",{...z,...v(f),loading:g,width:l,height:s,decoding:d,"data-nimg":b?"fill":"1",className:c,style:u,sizes:o,srcSet:r,src:i,ref:R,onLoad:e=>{h(e.currentTarget,p,x,w,j,y,S)},onError:e=>{_(!0),"empty"!==p&&j(!0),E&&E(e)}})});function b(e){let{isAppRouter:t,imgAttributes:i}=e,r={as:"image",imageSrcSet:i.srcSet,imageSizes:i.sizes,crossOrigin:i.crossOrigin,referrerPolicy:i.referrerPolicy,...v(i.fetchPriority)};return t&&s.default.preload?(s.default.preload(i.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:i.srcSet?void 0:i.src,...r},"__nimg-"+i.src+i.srcSet+i.sizes)})}let x=(0,a.forwardRef)((e,t)=>{let i=(0,a.useContext)(f.RouterContext),r=(0,a.useContext)(u.ImageConfigContext),o=(0,a.useMemo)(()=>{var e;let t=g||r||c.imageConfigDefault,i=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),o=t.deviceSizes.sort((e,t)=>e-t),n=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:i,deviceSizes:o,qualities:n}},[r]),{onLoad:s,onLoadingComplete:l}=e,m=(0,a.useRef)(s);(0,a.useEffect)(()=>{m.current=s},[s]);let h=(0,a.useRef)(l);(0,a.useEffect)(()=>{h.current=l},[l]);let[v,x]=(0,a.useState)(!1),[w,j]=(0,a.useState)(!1),{props:_,meta:S}=(0,d.getImgProps)(e,{defaultLoader:p.default,imgConf:o,blurComplete:v,showAltText:w});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(y,{..._,unoptimized:S.unoptimized,placeholder:S.placeholder,fill:S.fill,onLoadRef:m,onLoadingCompleteRef:h,setBlurComplete:x,setShowAltText:j,sizesInput:e.sizes,ref:t}),S.priority?(0,n.jsx)(b,{isAppRouter:!i,imgAttributes:_}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var i in t)Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}(t,{default:function(){return l},getImageProps:function(){return s}});let r=i(4252),o=i(4915),n=i(2439),a=r._(i(3829));function s(e){let{props:t}=(0,o.getImgProps)(e,{defaultLoader:a.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,i]of Object.entries(t))void 0===i&&delete t[e];return{props:t}}let l=n.Image},3829:(e,t)=>{"use strict";function i(e){var t;let{config:i,src:r,width:o,quality:n}=e,a=n||(null==(t=i.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return i.path+"?url="+encodeURIComponent(r)+"&w="+o+"&q="+a+(r.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r}}),i.__next_img_default=!0;let r=i},4587:(e,t,i)=>{e.exports=i(3657)},4915:(e,t,i)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),i(546);let r=i(5284),o=i(6904);function n(e){return void 0!==e.default}function a(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var i,s;let l,d,c,{src:u,sizes:f,unoptimized:p=!1,priority:m=!1,loading:g,className:h,quality:v,width:y,height:b,fill:x=!1,style:w,overrideSrc:j,onLoad:_,onLoadingComplete:S,placeholder:C="empty",blurDataURL:E,fetchPriority:z,decoding:P="async",layout:R,objectFit:O,objectPosition:N,lazyBoundary:D,lazyRoot:I,...$}=e,{imgConf:G,showAltText:M,blurComplete:k,defaultLoader:F}=t,Y=G||o.imageConfigDefault;if("allSizes"in Y)l=Y;else{let e=[...Y.deviceSizes,...Y.imageSizes].sort((e,t)=>e-t),t=Y.deviceSizes.sort((e,t)=>e-t),r=null==(i=Y.qualities)?void 0:i.sort((e,t)=>e-t);l={...Y,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===F)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let A=$.loader||F;delete $.loader,delete $.srcSet;let H="__next_img_default"in A;if(H){if("custom"===l.loader)throw Object.defineProperty(Error('Image with src "'+u+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=A;A=t=>{let{config:i,...r}=t;return e(r)}}if(R){"fill"===R&&(x=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(w={...w,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!f&&(f=t)}let W="",q=a(y),T=a(b);if((s=u)&&"object"==typeof s&&(n(s)||void 0!==s.src)){let e=n(u)?u.default:u;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(d=e.blurWidth,c=e.blurHeight,E=E||e.blurDataURL,W=e.src,!x){if(q||T){if(q&&!T){let t=q/e.width;T=Math.round(e.height*t)}else if(!q&&T){let t=T/e.height;q=Math.round(e.width*t)}}else q=e.width,T=e.height}}let V=!m&&("lazy"===g||void 0===g);(!(u="string"==typeof u?u:W)||u.startsWith("data:")||u.startsWith("blob:"))&&(p=!0,V=!1),l.unoptimized&&(p=!0),H&&!l.dangerouslyAllowSVG&&u.split("?",1)[0].endsWith(".svg")&&(p=!0);let B=a(v),L=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:O,objectPosition:N}:{},M?{}:{color:"transparent"},w),J=k||"empty"===C?null:"blur"===C?'url("data:image/svg+xml;charset=utf-8,'+(0,r.getImageBlurSvg)({widthInt:q,heightInt:T,blurWidth:d,blurHeight:c,blurDataURL:E||"",objectFit:L.objectFit})+'")':'url("'+C+'")',X=J?{backgroundSize:L.objectFit||"cover",backgroundPosition:L.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},K=function(e){let{config:t,src:i,unoptimized:r,width:o,quality:n,sizes:a,loader:s}=e;if(r)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:r,allSizes:o}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let r;r=e.exec(i);r)t.push(parseInt(r[2]));if(t.length){let e=.01*Math.min(...t);return{widths:o.filter(t=>t>=r[0]*e),kind:"w"}}return{widths:o,kind:"w"}}return"number"!=typeof t?{widths:r,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>o.find(t=>t>=e)||o[o.length-1]))],kind:"x"}}(t,o,a),c=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,r)=>s({config:t,src:i,quality:n,width:e})+" "+("w"===d?e:r+1)+d).join(", "),src:s({config:t,src:i,quality:n,width:l[c]})}}({config:l,src:u,unoptimized:p,width:q,quality:B,sizes:f,loader:A});return{props:{...$,loading:V?"lazy":g,fetchPriority:z,width:q,height:T,decoding:P,className:h,style:{...L,...X},sizes:K.sizes,srcSet:K.srcSet,src:j||K.src},meta:{unoptimized:p,priority:m,placeholder:C,fill:x}}}},5284:(e,t)=>{"use strict";function i(e){let{widthInt:t,heightInt:i,blurWidth:r,blurHeight:o,blurDataURL:n,objectFit:a}=e,s=r?40*r:t,l=o?40*o:i,d=s&&l?"viewBox='0 0 "+s+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+d+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(d?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+n+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},8291:(e,t,i)=>{"use strict";i.d(t,{h:()=>g});var r=i(7876);i(4232);var o=i(1609),n=i(9545),a=i(8791),s=i(6971),l=i(385),d=i(3108);let c=["h1","h2","h3","h4","h5","h6"],u=["xs","sm","md","lg","xl"];var f={root:"m_8a5d1357"};let p={order:1},m=(0,o.V)((e,{order:t,size:i,lineClamp:r,textWrap:o})=>{let n=function(e,t){let i=void 0!==t?t:`h${e}`;return c.includes(i)?{fontSize:`var(--mantine-${i}-font-size)`,fontWeight:`var(--mantine-${i}-font-weight)`,lineHeight:`var(--mantine-${i}-line-height)`}:u.includes(i)?{fontSize:`var(--mantine-font-size-${i})`,fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}:{fontSize:(0,d.D)(i),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}(t,i);return{root:{"--title-fw":n.fontWeight,"--title-lh":n.lineHeight,"--title-fz":n.fontSize,"--title-line-clamp":"number"==typeof r?r.toString():void 0,"--title-text-wrap":o}}}),g=(0,l.P9)((e,t)=>{let i=(0,n.Y)("Title",p,e),{classNames:o,className:l,style:d,styles:c,unstyled:u,order:g,vars:h,size:v,variant:y,lineClamp:b,textWrap:x,mod:w,...j}=i,_=(0,a.I)({name:"Title",props:i,classes:f,className:l,style:d,classNames:o,styles:c,unstyled:u,vars:h,varsResolver:m});return[1,2,3,4,5,6].includes(g)?(0,r.jsx)(s.a,{..._("root"),component:`h${g}`,variant:y,ref:t,mod:[{order:g,"data-line-clamp":"number"==typeof b},w],size:v,...j}):null});g.classes=f,g.displayName="@mantine/core/Title"},8845:(e,t,i)=>{"use strict";i.d(t,{Z:()=>b});var r=i(7876),o=i(4232),n=i(6249),a=i(1609),s=i(9545),l=i(8791),d=i(5754),c=i(9704);let[u,f]=(0,i(8671).F)("Card component was not found in tree");var p=i(6971),m={root:"m_e615b15f",section:"m_599a2148"};let g={},h=(0,d.v)((e,t)=>{let{classNames:i,className:o,style:n,styles:a,vars:l,withBorder:d,inheritPadding:c,mod:u,...m}=(0,s.Y)("CardSection",g,e),h=f();return(0,r.jsx)(p.a,{ref:t,mod:[{"with-border":d,"inherit-padding":c},u],...h.getStyles("section",{className:o,style:n,styles:a,classNames:i}),...m})});h.classes=m,h.displayName="@mantine/core/CardSection";let v={},y=(0,a.V)((e,{padding:t})=>({root:{"--card-padding":(0,n.GY)(t)}})),b=(0,d.v)((e,t)=>{let i=(0,s.Y)("Card",v,e),{classNames:n,className:a,style:d,styles:f,unstyled:p,vars:g,children:b,padding:x,...w}=i,j=(0,l.I)({name:"Card",props:i,classes:m,className:a,style:d,classNames:n,styles:f,unstyled:p,vars:g,varsResolver:y}),_=o.Children.toArray(b),S=_.map((e,t)=>"object"==typeof e&&e&&"type"in e&&e.type===h?(0,o.cloneElement)(e,{"data-first-section":0===t||void 0,"data-last-section":t===_.length-1||void 0}):e);return(0,r.jsx)(u,{value:{getStyles:j},children:(0,r.jsx)(c.t,{ref:t,unstyled:p,...j("root"),...w,children:S})})});b.classes=m,b.displayName="@mantine/core/Card",b.Section=h},9704:(e,t,i)=>{"use strict";i.d(t,{t:()=>p});var r=i(7876);i(4232);var o=i(6249),n=i(1609),a=i(9545),s=i(8791),l=i(6971),d=i(5754),c={root:"m_1b7284a3"};let u={},f=(0,n.V)((e,{radius:t,shadow:i})=>({root:{"--paper-radius":void 0===t?void 0:(0,o.nJ)(t),"--paper-shadow":(0,o.dh)(i)}})),p=(0,d.v)((e,t)=>{let i=(0,a.Y)("Paper",u,e),{classNames:o,className:n,style:d,styles:p,unstyled:m,withBorder:g,vars:h,radius:v,shadow:y,variant:b,mod:x,...w}=i,j=(0,s.I)({name:"Paper",props:i,classes:c,className:n,style:d,classNames:o,styles:p,unstyled:m,vars:h,varsResolver:f});return(0,r.jsx)(l.a,{ref:t,mod:[{"data-with-border":g},x],...j("root"),variant:b,...w})});p.classes=c,p.displayName="@mantine/core/Paper"},9953:(e,t,i)=>{"use strict";function r(e){return"object"==typeof e&&null!==e?"base"in e?e.base:void 0:e}i.d(t,{D:()=>r})}}]);