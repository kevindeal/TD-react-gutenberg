import"./js/vue2.Bk-dUoBE.js";import{x as c,o as T,c as w,a as y,t as h,C as p,m as f,D as v,d as E,X as b}from"./js/vue.esm-bundler.DqIKZLqK.js";import{l as B}from"./js/index.lXclSKws.js";import{a as k,l as A}from"./js/index.DieinYpm.js";import{l as C}from"./js/index.3BJ3ZnWB.js";import{l,c as I,z as u,a as N,C as q}from"./js/links.B5TFMKzz.js";import{e as D}from"./js/elemLoaded.COgXIo-H.js";import{s as L}from"./js/metabox.ybNnf_0m.js";import{C as V}from"./js/Tooltip.Gayc6MvE.js";import{_ as x}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{a as F}from"./js/toString.CIsv73bz.js";import{b as M,a as Q}from"./js/_basePickBy.BN1C8JOT.js";import{g as U}from"./js/_getAllKeysIn.C8xuX9K7.js";import"./js/translations.Buvln_cw.js";import"./js/default-i18n.Bd0Z306Z.js";import"./js/constants.DpuIWwJ9.js";import"./js/Caret.CE8P-qnG.js";import"./js/helpers.DP3P5pIH.js";import"./js/_baseIsEqual.CTTGesSX.js";import"./js/_getTag.D-zq_rBl.js";import"./js/get.088UmxOw.js";import"./js/_baseSet.yXAnnvqj.js";function z(t,e){if(t==null)return{};var o=F(U(t),function(r){return[r]});return e=M(e),Q(t,o,function(r,n){return e(r,n[0])})}const g={getTerms:async t=>{const{apiFetch:e}=window.wp,{addQueryArgs:o}=window.wp.url,r=m(t);return await e({path:o(`/wp/v2/${r.restBase}`,{per_page:-1,orderby:"count",order:"desc",_fields:"id,name"})})},getSelectedTerms:t=>{const e=m(t);return window.wp.data.select("core/editor").getEditedPostAttribute(e.restBase)||[]}},S={getTerms:async t=>{var n;const e=[],o=m(t);return(((n=document.getElementById(`${o.name}checklist`))==null?void 0:n.querySelectorAll("li"))||[]).forEach(s=>{const a=s.querySelector("input").value,i=s.querySelector("label").innerText;e.push({id:parseInt(a,10),name:i.trim()})}),new Promise(s=>{s(e)})},getSelectedTerms:t=>{var n;const e=[],o=m(t);return(((n=document.getElementById(`${o.name}checklist`))==null?void 0:n.querySelectorAll("input:checked"))||[]).forEach(s=>{e.push(parseInt(s.value,10))}),e}},d=()=>{var o;return l(),(((o=I().aioseo.postData)==null?void 0:o.taxonomies)||[]).filter(r=>r.primaryTermSupport===!0)},H=t=>d().some(e=>t===e.name),m=t=>{const e=d().filter(o=>t===o.name);return e.length?e[0]:{}},O=t=>u()?g.getTerms(t):S.getTerms(t),R=t=>u()?g.getSelectedTerms(t):S.getSelectedTerms(t),K={setup(){return{postEditorStore:N()}},components:{CoreTooltip:V,SvgCircleQuestionMark:k},data(){return{term:null,terms:[],selectedTerms:[]}},props:{taxonomy:String},watch:{terms(t){if(!this.term&&t&&this.postEditorStore.currentPost.primary_term[this.taxonomy]){const e=t.find(o=>o.value===this.postEditorStore.currentPost.primary_term[this.taxonomy]);this.setPrimaryTerm(e)}},selectedTerms(t,e){if(e.length<t.length){const o=t.filter(r=>!e.includes(r))[0];this.terms.some(r=>r.value===o)||this.updateTerms()}this.term&&this.term.value&&!t.includes(this.term.value)&&this.setPrimaryTerm(null)}},computed:{taxonomyName(){return m(this.taxonomy).singular},toolTipText(){return this.$t.sprintf(this.$t.__("%1$s allows you to choose a primary %2$s for your posts. This feature works hand in hand with our powerful Breadcrumbs template to give you full navigational control to help improve your search rankings.",this.$tdPro),"AIOSEO Pro",this.taxonomyName)},labelString(){return this.$t.sprintf(this.$t.__("Select Primary %1$s",this.$tdPro),this.taxonomyName)},options(){return this.terms.filter(t=>this.selectedTerms.includes(t.value))}},methods:{setPrimaryTerm(t){this.term=t,window.aioseoBus.$emit("standalone-update-post",{primary_term:z({...this.postEditorStore.currentPost.primary_term,[this.taxonomy]:t&&t.value?t.value:null})})},updateTerms(){O(this.taxonomy).then(t=>{this.terms=[],t.forEach(e=>{this.terms.push({value:e.id,label:e.name})})})},updateSelectedTerms(){this.selectedTerms=R(this.taxonomy)}},mounted(){this.updateTerms(),this.updateSelectedTerms(),window.aioseoBus.$on("updateSelectedTerms",this.updateSelectedTerms)},beforeUnmount(){window.aioseoBus.$off("updateSelectedTerms",this.updateSelectedTerms)}},X={key:0,class:"aioseo-primary-term-select"},G={class:"aioseo-primary-term-select__title"},J={class:"aioseo-primary-term-select__title-text"};function W(t,e,o,r,n,s){const a=c("svg-circle-question-mark"),i=c("core-tooltip"),P=c("base-select");return 1<this.selectedTerms.length?(T(),w("div",X,[y("div",G,[y("span",J,h(s.labelString),1),p(i,{offset:"-200px,0"},{tooltip:f(()=>[v(h(s.toolTipText),1)]),default:f(()=>[p(a)]),_:1})]),p(P,{size:"medium",options:s.options,modelValue:n.term,"onUpdate:modelValue":e[0]||(e[0]=$=>s.setPrimaryTerm($))},null,8,["options","modelValue"])])):E("",!0)}const Y=x(K,[["render",W]]),Z={components:{PrimaryTerm:Y},props:{taxonomy:String}},j={class:"aioseo-app aioseo-primary-term"};function tt(t,e,o,r,n,s){const a=c("primary-term");return T(),w("div",j,[p(a,{taxonomy:o.taxonomy},null,8,["taxonomy"])])}const et=x(Z,[["render",tt]]);if(u()&&window.wp){const{createElement:t,Fragment:e}=window.wp.element,{addFilter:o}=window.wp.hooks,{createHigherOrderComponent:r}=window.wp.compose,{subscribe:n}=window.wp.data;o("editor.PostTaxonomyType","aioseo/primary-term",r(s=>a=>{const{slug:i}=a;return H(i)?t(e,{},t(s,a),t("div",{id:`aioseo-primary-term-${i}`},t("div",{className:"aioseo-primary-term-app",taxonomy:i}))):t(s,a)},"withInspectorControls")),n(()=>{window.aioseoBus.$emit("updateSelectedTerms")})}q()&&(l(),d().forEach(t=>{const e=document.querySelector(`#${t.name}div .inside`);if(!e)return;const o=document.createElement("div");o.setAttribute("id",`aioseo-primary-term-${t.name}`),o.setAttribute("class","aioseo-primary-term-app"),o.setAttribute("taxonomy",t.name),e.append(o),function(r){r(`#${t.name}checklist`).on("change",'input[type="checkbox"]',()=>{window.aioseoBus.$emit("updateSelectedTerms")}),r(`#${t.name}checklist`).on("wpListAddEnd",()=>{window.aioseoBus.$emit("updateSelectedTerms")})}(window.jQuery)}));const _=t=>{if(!t)return;const e=t.getAttribute("taxonomy");let o=b({...et,name:"Standalone/PrimaryTerm"},{taxonomy:e});o=B(o),o=A(o),o=C(o),l(o),o.mount(t)};if(L()&&window.aioseo&&window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"){const t=document.getElementsByClassName("aioseo-primary-term-app");Array.prototype.forEach.call(t,e=>_(e)),D(".aioseo-primary-term-app","aioseoPrimaryTerm"),document.addEventListener("animationstart",function(e){e.animationName==="aioseoPrimaryTerm"&&_(e.target)},{passive:!0})}