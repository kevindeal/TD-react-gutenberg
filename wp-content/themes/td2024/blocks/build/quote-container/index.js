(()=>{var e,t={648:(e,t,l)=>{"use strict";const r=window.wp.blocks,n=window.React;var a=l(942),o=l.n(a);window.wp.i18n;const i=window.wp.blockEditor,c=window.wp.components,u=window.wp.data,m=JSON.parse('{"UU":"td/quote-container"}');(0,r.registerBlockType)(m.UU,{edit:function({attributes:e,setAttributes:t,clientId:l}){console.log("Container",e);const{colorVariant:r,sliderSpeed:a,title:o,overrideBackground:m,backgroundHorizontalAlign:d,backgroundVerticalAlign:s,backgroundAlignmentPair:p,backgroundFitMode:g,backgroundMedia:b}=e,{getBlockOrder:v}=wp.data.select("core/block-editor"),E=v(l);t({numberOfQuotes:E.length});const{replaceInnerBlocks:y}=(0,u.useDispatch)("core/block-editor"),k=(0,u.useSelect)((e=>e(i.store).getBlock(l).innerBlocks),[l]);let x;return console.log("color variant:",r),"GRADIENT1"===r?x="bg-cardGradient1":"GRADIENT2"===r?x="bg-cardGradient2":"DARK"===r?x="bg-primaryBlue-100 text-white":"LIGHT"===r&&(x="quote-light"),b&&(x+=" bg-cardGradient2"),console.log("wrapperClasses:",x),(0,n.createElement)("div",{...(0,i.useBlockProps)()},(0,n.createElement)(i.InspectorControls,{key:"setting"},(0,n.createElement)("div",{class:"block-editor-block-card"},(0,n.createElement)(c.Panel,null,(0,n.createElement)(c.PanelBody,null,(0,n.createElement)(c.PanelRow,null,(0,n.createElement)(c.__experimentalToggleGroupControl,{label:"Color Variant",value:r,onChange:e=>{t({colorVariant:e});for(let t of k)console.log("Quote Contents",t),t.attributes.colorVariant=e;y(l,k)},isBlock:!0},(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"DARK",label:"Dark"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"LIGHT",label:"Light"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"GRADIENT1",label:"Gradient 1"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"GRADIENT2",label:"Gradient 2"})))),(0,n.createElement)(c.PanelBody,{title:"Slider Settings"},(0,n.createElement)(c.PanelRow,null,(0,n.createElement)(c.__experimentalNumberControl,{label:"Slider Speed (ms ['900' = 9 seconds])",value:a,onChange:e=>t({sliderSpeed:e}),min:0,step:100})),(0,n.createElement)(c.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(c.ToggleControl,{label:"Override Background with Media File?",checked:m,onChange:e=>{t({overrideBackground:e})}}))),m?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(c.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(i.MediaUpload,{value:""!==b.title?b:null,onSelect:e=>{console.log("Media Uploaded",e),t({backgroundMedia:{...e}})},multiple:!1,render:({open:e})=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("p",{style:{marginBottom:"5px"}},""!==b.title?"(Currently Selected: "+b.title+", "+b.mime+", "+b.filesizeHumanReadable+")":"No Image Uploaded"),(0,n.createElement)("button",{className:"components-button is-primary",onClick:e},""!==b.title?"Change Media":"Upload or Select Media"))}))),(0,n.createElement)(c.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(c.__experimentalToggleGroupControl,{label:"Background Vertical Alignment",value:s,onChange:e=>{t({backgroundVerticalAlign:e,backgroundAlignmentPair:`${d} ${e}`})},isBlock:!0},(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"top",label:"Top"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"center",label:"Center"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"bottom",label:"Bottom"})))),(0,n.createElement)(c.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(c.__experimentalToggleGroupControl,{label:"Background Horizontal Alignment",value:d,onChange:e=>{t({backgroundHorizontalAlign:e,backgroundAlignmentPair:`${e} ${s} `})},isBlock:!0},(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"left",label:"Left"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"center",label:"Center"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"right",label:"Right"})))),(0,n.createElement)(c.PanelRow,null,(0,n.createElement)("div",{style:{width:"100%"}},(0,n.createElement)(c.__experimentalToggleGroupControl,{label:"Background Fit Mode",value:g,onChange:e=>{t({backgroundFitMode:e})},isBlock:!0},(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"contain",label:"Contain"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"cover",label:"Cover"}),(0,n.createElement)(c.__experimentalToggleGroupControlOption,{value:"fill",label:"Fill"}))))):(0,n.createElement)(n.Fragment,null))))),(0,n.createElement)("div",{className:`${x}`},m?(0,n.createElement)(n.Fragment,null,"video"==b.type?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0,className:`absolute object-${g} ${"center"==d?"inset-x-auto":`${d}-0`} ${"center"==s?"inset-y-auto":`${s}-0`} w-[100%]  ${"contain"==g?"h-auto":"h-full"}`,width:"100%"},(0,n.createElement)("source",{src:b.url,type:b.mime}))):(0,n.createElement)("img",{className:`element-background-image wp-image-${b.id} object-${g} absolute ${"center"==d?"inset-x-auto":`${d}-0`} ${"center"==s?"inset-y-auto":`${s}-0`} w-[100%] ${"contain"==g?"h-auto":"h-full"}`,style:{objectPosition:`${p}`},src:b.url,alt:b.alt})):(0,n.createElement)(n.Fragment,null),(0,n.createElement)(i.InnerBlocks,{template:[["td/quotes"]],allowedBlocks:["td/quotes"]})))},save:function({attributes:e}){const{numberOfQuotes:t,colorVariant:l,sliderSpeed:r,overrideBackground:a,backgroundHorizontalAlign:c,backgroundVerticalAlign:u,backgroundAlignmentPair:m,backgroundFitMode:d,backgroundMedia:s}=e,p=i.useBlockProps.save({className:o()({"py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical quote-dark bg-primaryBlue-100 text-white":"DARK"===l,"py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical quote-light":"LIGHT"===l,"py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical bg-cardGradient1":"GRADIENT1"===l,"py-sm-vertical md:py-md-vertical lg:py-lg-vertical xl:py-xl-vertical bg-cardGradient2":"GRADIENT2"===l})});return(0,n.createElement)("div",{...p,"data-slider-speed":r},a?(0,n.createElement)(n.Fragment,null,"video"==s.type?(0,n.createElement)(n.Fragment,null,(0,n.createElement)("video",{muted:!0,autoPlay:!0,playsInline:!0,loop:!0,className:`absolute object-fill max-h-full object-${d} ${"center"==c?"inset-x-auto":`${c}-0`} ${"center"==u?"inset-y-auto":`${u}-0`} w-[100%]  ${"contain"==d?"h-auto":"h-full"}`,width:"100%"},(0,n.createElement)("source",{src:s.url,type:s.mime}))):(0,n.createElement)("img",{className:`element-background-image wp-image-${s.id} max-h-full object-${d} absolute ${"center"==c?"inset-x-auto":`${c}-0`} ${"center"==u?"inset-y-auto":`${u}-0`} w-[100%] ${"contain"==d?"h-auto":"h-full"}`,style:{objectPosition:`${m}`},src:s.url,alt:s.alt})):(0,n.createElement)(n.Fragment,null),(0,n.createElement)("div",{className:"quote-outer container mx-auto pb-[35px] py-[20px]"},(0,n.createElement)("div",{className:"quote-container","data-slider-speed":r},(0,n.createElement)(i.InnerBlocks.Content,null))),t>1&&(0,n.createElement)("div",{className:"container mx-auto arrows-box__wrapper xmd:px-[110px]"},(0,n.createElement)("div",{className:"arrows-box relative mt-[15px] md:mt-[30px]"})))}})},942:(e,t)=>{var l;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var l=arguments[t];l&&(e=o(e,a(l)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var l in e)r.call(e,l)&&e[l]&&(t=o(t,l));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(l=function(){return n}.apply(t,[]))||(e.exports=l)}()}},l={};function r(e){var n=l[e];if(void 0!==n)return n.exports;var a=l[e]={exports:{}};return t[e](a,a.exports,r),a.exports}r.m=t,e=[],r.O=(t,l,n,a)=>{if(!l){var o=1/0;for(m=0;m<e.length;m++){for(var[l,n,a]=e[m],i=!0,c=0;c<l.length;c++)(!1&a||o>=a)&&Object.keys(r.O).every((e=>r.O[e](l[c])))?l.splice(c--,1):(i=!1,a<o&&(o=a));if(i){e.splice(m--,1);var u=n();void 0!==u&&(t=u)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[l,n,a]},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var l in t)r.o(t,l)&&!r.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={302:0,458:0};r.O.j=t=>0===e[t];var t=(t,l)=>{var n,a,[o,i,c]=l,u=0;if(o.some((t=>0!==e[t]))){for(n in i)r.o(i,n)&&(r.m[n]=i[n]);if(c)var m=c(r)}for(t&&t(l);u<o.length;u++)a=o[u],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(m)},l=globalThis.webpackChunkmultiple_blocks=globalThis.webpackChunkmultiple_blocks||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))})();var n=r.O(void 0,[458],(()=>r(648)));n=r.O(n)})();