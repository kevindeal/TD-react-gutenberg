(()=>{var e,t={37:(e,t,l)=>{"use strict";const a=window.wp.blocks,n=window.React;l(942);const o=window.wp.i18n,i=window.wp.blockEditor,r=window.wp.data,s=window.wp.components,c=window.wp.element,d=JSON.parse('{"UU":"td/table-container"}');(0,a.registerBlockType)(d.UU,{edit:function({clientId:e,attributes:t,setAttributes:l,className:d}){const b=(0,i.useBlockProps)(),{replaceInnerBlocks:p}=(0,r.useDispatch)("core/block-editor"),m=(0,r.useSelect)((t=>t(i.store).getBlock(e).innerBlocks),[e]);(0,c.useEffect)((()=>{l({blockId:e})}),[e]);const{blockId:u,colorVariant:g,vSplit:h,layout:y,heading:E,displayTitleOnMobile:T,displayTitleOnTablet:f,displayTitleOnDesktop:v,subheading:x,displaySubheadOnMobile:C,displaySubheadOnTablet:w,displaySubheadOnDesktop:k,subtitle:O,displaySubtitleOnMobile:S,displaySubtitleOnTablet:N,displaySubtitleOnDesktop:P,ctaText:R,ctaUrl:_,displayCTAOnMobile:B,displayCTAOnTablet:D,displayCTAOnDesktop:H,tableNumColumns:$,tableNumRows:A,displayHeaders:V,tableHeaders:M}=t;console.log("Current Table Headers",M);const I=(e,t,l)=>`${l?"flex":"hidden"} ${t?"md:flex":"md:hidden"} ${e?"lg:flex":"lg:hidden"}`;return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.InspectorControls,{group:"styles"},(0,n.createElement)(s.Panel,null,(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Visual Settings","tabbed-content"),style:{width:"100%"},initialOpen:!0},(0,n.createElement)(s.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(s.__experimentalToggleGroupControl,{label:"Color Variant",value:g,onChange:t=>{l({colorVariant:t});for(let e of m)console.log("Tab Contents",e),e.attributes.colorVariant=t;p(e,m)},isBlock:!0},(0,n.createElement)(s.__experimentalToggleGroupControlOption,{value:"DARK",label:"Dark"}),(0,n.createElement)(s.__experimentalToggleGroupControlOption,{value:"LIGHT",label:"Light"}))))),(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Heading Settings","tabbed-content"),style:{width:"100%"},initialOpen:!0},(0,n.createElement)(s.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(s.ToggleControl,{label:"Visible on Desktop?",checked:v,onChange:e=>{l({displayTitleOnDesktop:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Tablet?",checked:f,onChange:e=>{l({displayTitleOnTablet:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Mobile?",checked:T,onChange:e=>{l({displayTitleOnMobile:e})}})))),(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Subheading Settings","tabbed-content"),style:{width:"100%"},initialOpen:!0},(0,n.createElement)(s.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(s.ToggleControl,{label:"Visible on Desktop?",checked:k,onChange:e=>{l({displaySubheadOnDesktop:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Tablet?",checked:w,onChange:e=>{l({displaySubheadOnTablet:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Mobile?",checked:C,onChange:e=>{l({displaySubheadOnMobile:e})}})))),(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Table Title Settings","tabbed-content"),style:{width:"100%"},initialOpen:!0},(0,n.createElement)(s.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(s.ToggleControl,{label:"Visible on Desktop?",checked:P,onChange:e=>{l({displaySubtitleOnDesktop:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Tablet?",checked:N,onChange:e=>{l({displaySubtitleOnTablet:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Mobile?",checked:S,onChange:e=>{l({displaySubtitleOnMobile:e})}})))),(0,n.createElement)(s.PanelBody,{title:(0,o.__)("CTA Settings","tabbed-content"),style:{width:"100%"},initialOpen:!0},(0,n.createElement)(s.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(s.ToggleControl,{label:"Visible on Desktop?",checked:H,onChange:e=>{l({displayCTAOnDesktop:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Tablet?",checked:D,onChange:e=>{l({displayCTAOnTablet:e})}}),(0,n.createElement)(s.ToggleControl,{label:"Visible on Mobile?",checked:B,onChange:e=>{l({displayCTAOnMobile:e})}})))))),(0,n.createElement)(i.InspectorControls,null,(0,n.createElement)(s.Panel,null,(0,n.createElement)(s.PanelBody,{title:(0,o.__)("Key Values","content-container"),style:{width:"100%"},initialOpen:!0},(0,n.createElement)(s.PanelRow,{style:{width:"100%"}},(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(s.RadioControl,{label:"Which table variant?",selected:y,options:[{label:"Colored",value:"colored"},{label:"Bordered Only",value:"bordered"},{label:"Borderless",value:"borderless"}],onChange:t=>{l({layout:t});for(let e of m)console.log("Tab Contents",e.attributes.layout,t),e.attributes.layout=t;p(e,m)}}))),(0,n.createElement)(s.PanelRow,null,(0,n.createElement)(s.ToggleControl,{label:"Display Table Headers?",checked:V,onChange:e=>{l({displayHeaders:e})}})),(0,n.createElement)(s.PanelRow,null,(0,n.createElement)(s.Button,{icon:"plus-alt",isPrimary:!0,text:"Add Column",onClick:()=>{let t=[...M];t.push("Heading "+(M.length+1)),l({tableHeaders:t});for(let e of m)e.attributes.tableHeaders=t;p(e,m)}}),(0,n.createElement)(s.Button,{icon:"minus",isPrimary:!0,text:"Remove Column",onClick:()=>{let t=[...M];t.pop(),l({tableHeaders:t});for(let e of m)e.attributes.tableHeaders=t;p(e,m)}})),(0,n.createElement)(s.PanelRow,null,(0,n.createElement)(s.Button,{icon:"plus-alt",isPrimary:!0,text:"Add Row",onClick:()=>{let t=[...m],l=(0,a.createBlocksFromInnerBlocksTemplate)([["td/table-row",{tableHeaders:M}]]);t.push(l[0]),p(e,t)}}),(0,n.createElement)(s.Button,{icon:"minus",isPrimary:!0,text:"Remove Row",onClick:()=>{let t=[...m];t.pop(),p(e,t)}}))))),(0,n.createElement)("div",{...b},(0,n.createElement)("div",{className:"table-outer-wrapper p-4 md:px-[110px] md:py-[60px] "+("DARK"==g?"bg-primaryBlue-100 text-white":"")},(0,n.createElement)("div",{className:`td-alert-heading flex-1 flex-col ${I(v,f,T)} md:mb-[60px]`},(0,n.createElement)(i.RichText,{tagName:"h2",className:`relative title font-header pb-4 text-5xl leading-5 ${I(v,f,T)}`,value:E,onChange:e=>{l({heading:e})},placeholder:(0,o.__)("Heading Text Here","gutenpride")}),(0,n.createElement)(i.RichText,{tagName:"h3",className:`relative title font-display pb-4 text-l leading-6 ${I(k,w,C)}`,value:x,onChange:e=>{l({subheading:e})},placeholder:(0,o.__)("Subheading Text Here","gutenpride")})),(0,n.createElement)("div",{className:"table-title"},(0,n.createElement)(i.RichText,{tagName:"h4",className:`relative title font-display font-medium mb-4 md:mb-[36px] pb-4 text-3xl leading-6 ${I(P,N,S)}`,value:O,onChange:e=>{l({subtitle:e})},placeholder:(0,o.__)("Table Title Text Here","gutenpride")})),(0,n.createElement)("div",{className:""},(0,n.createElement)("table",{className:`td-table  ${"DARK"==g?"table-dark":""} ${y} ${V?"":"headerless"} border-separate w-full`,cellPadding:0,cellSpacing:0,border:0},V&&(0,n.createElement)("thead",{cellPadding:0,cellSpacing:0},(0,n.createElement)("tr",{cellPadding:0,cellSpacing:0},(0,n.createElement)(n.Fragment,null,M.map(((t,a)=>(console.log("Key and value",a,t),(0,n.createElement)("th",{className:"px-10 py-7 text-left"},(0,n.createElement)(i.RichText,{tagName:"h3",className:"relative title font-display font-bold text-xl",value:t,onChange:t=>{((t,a)=>{console.log("Table heading changed",a,t,M);let n=[...M];M[a]&&n[a]&&(n[a]=t),l({tableHeaders:n});for(let e of m)e.attributes.tableHeaders=n;p(e,m)})(t,a)},placeholder:(0,o.__)("Heading Text Here","gutenpride")})))))))),(0,n.createElement)("tbody",{cellPadding:0,cellSpacing:0,...(0,i.useInnerBlocksProps)({},{allowedBlocks:["td/table-row"],template:[["td/table-row"],["td/table-row"],["td/table-row"]]})}))),(0,n.createElement)("div",{className:`cta-wrapper  ${I(H,D,B)}`},(0,n.createElement)(i.RichText,{tagName:"p",className:"btn-secondary",onChange:e=>{l({ctaText:e})},value:R,placeholder:"Button text here"}),(0,n.createElement)(i.URLInput,{value:_,onChange:e=>{l({ctaUrl:e})}})))))},save:function({attributes:e,clientId:t}){const l=i.useBlockProps.save({className:"w-full"}),{blockId:a,colorVariant:o,vSplit:r,layout:s,heading:c,displayTitleOnMobile:d,displayTitleOnTablet:b,displayTitleOnDesktop:p,subheading:m,displaySubheadOnMobile:u,displaySubheadOnTablet:g,displaySubheadOnDesktop:h,subtitle:y,displaySubtitleOnMobile:E,displaySubtitleOnTablet:T,displaySubtitleOnDesktop:f,ctaText:v,ctaUrl:x,displayCTAOnMobile:C,displayCTAOnTablet:w,displayCTAOnDesktop:k,tableNumColumns:O,tableNumRows:S,displayHeaders:N,tableHeaders:P}=e,R=(l.className,(e,t,l)=>`${l?"flex":"hidden"} ${t?"md:flex":"md:hidden"} ${e?"lg:flex":"lg:hidden"}`);return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{id:`td-table-${a}`,...l},(0,n.createElement)("div",{className:"table-outer-wrapper w-full p-4 md:px-[110px] md:py-[60px] "+("DARK"==o?"bg-primaryBlue-100 text-white":"")},c&&(0,n.createElement)("div",{className:`td-alert-heading flex-1 flex-col mb-4 md:mb-[60px] ${R(p,b,d)}`},(0,n.createElement)("h2",{className:`relative title font-header font-light pb-4 text-5xl leading-5 mb-2.5 ${R(p,b,d)}`},c),(0,n.createElement)("h3",{className:`relative title font-display font-normal pb-4 text-l leading-6 ${R(h,g,u)}`},m)),y&&(0,n.createElement)("div",{className:"table-title "},(0,n.createElement)("h4",{className:`relative title font-display font-medium mb-4 md:mb-[36px] pb-4 text-3xl leading-6 ${R(f,T,E)}`},y)),(0,n.createElement)("div",{className:""},(0,n.createElement)("table",{className:`td-table  ${"DARK"==o?"table-dark":""} ${s} ${N?"":"headerless"} border-separate w-full`,cellPadding:0,cellSpacing:0,border:0},N&&(0,n.createElement)("thead",{cellPadding:0,cellSpacing:0},(0,n.createElement)("tr",{cellPadding:0,cellSpacing:0},(0,n.createElement)(n.Fragment,null,P.map(((e,t)=>(0,n.createElement)("th",{className:"px-10 py-7 text-left"},(0,n.createElement)("h3",{className:"relative title font-display font-bold text-xl"},e))))))),(0,n.createElement)("tbody",{cellPadding:0,cellSpacing:0,...i.useInnerBlocksProps.save()}))),v&&x&&(0,n.createElement)("div",{className:"cta-holder"},(0,n.createElement)(i.RichText.Content,{tagName:"a",className:"btn-secondary font-display text-l font-medium text-blue-100 inline-flex",href:x,value:v})))))}})},942:(e,t)=>{var l;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=i(e,o(l)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)a.call(e,l)&&e[l]&&(t=i(t,l));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function a(e){var n=l[e];if(void 0!==n)return n.exports;var o=l[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,l,n,o)=>{if(!l){var i=1/0;for(d=0;d<e.length;d++){for(var[l,n,o]=e[d],r=!0,s=0;s<l.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](l[s])))?l.splice(s--,1):(r=!1,o<i&&(i=o));if(r){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[l,n,o]},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={174:0,226:0};a.O.j=t=>0===e[t];var t=(t,l)=>{var n,o,[i,r,s]=l,c=0;if(i.some((t=>0!==e[t]))){for(n in r)a.o(r,n)&&(a.m[n]=r[n]);if(s)var d=s(a)}for(t&&t(l);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},l=globalThis.webpackChunkmultiple_blocks=globalThis.webpackChunkmultiple_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=a.O(void 0,[226],(()=>a(37)));n=a.O(n)})();