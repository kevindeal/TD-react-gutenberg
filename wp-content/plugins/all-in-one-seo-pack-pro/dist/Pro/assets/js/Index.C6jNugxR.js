import{e as V,f as G,c as z,N as R,h as w,u as j,o as J}from"./links.B5TFMKzz.js";import{l as Q}from"./license.CjnEojon.js";import{a as Z}from"./allowed.Cwwt8WiO.js";/* empty css             */import{g as tt,r as et}from"./params.B3T1WKlC.js";import{a as st}from"./Ellipse.nLnX5H0E.js";import{S as q,d as it,B as F,c as x,e as Y,C as ot}from"./Caret.CE8P-qnG.js";import{C as nt,G as rt}from"./Header.JjOkyD9E.js";import{C as at,a as ct}from"./LicenseKeyBar.CYHTaFTB.js";import{S as lt}from"./LogoGear.8AAnR2nD.js";import{x as u,o as n,c as l,a as s,C as d,l as p,d as f,G as v,F as C,K as L,t as a,H as A,m,D as k,v as K,q as O,T as E}from"./vue.esm-bundler.DqIKZLqK.js";import{_ as b}from"./_plugin-vue_export-helper.BN1snXvA.js";import{S as dt}from"./Logo.OekohoeO.js";import{S as ut}from"./Support.BwN8Esgn.js";import{C as ft}from"./Tabs.Davub5Fw.js";import{_ as H}from"./default-i18n.Bd0Z306Z.js";import{l as ht}from"./helpers.DP3P5pIH.js";import{U as _t}from"./Url.DRihn4Q-.js";import{D as mt}from"./Date.D_-me9H4.js";import{S as gt}from"./Exclamation.BWU5OCVZ.js";import{S as pt}from"./Gear.CG2jqT3t.js";import{T as B}from"./Slide.Qz9BWVTI.js";const U="all-in-one-seo-pack",vt=()=>({strings:{notifications:H("Notifications",U),newNotifications:H("New Notifications",U),activeNotifications:H("Active Notifications",U)}}),yt={setup(){return{settingsStore:V()}},components:{SvgAioseoLogoGear:lt,SvgClose:q},data(){return{strings:{boldText:this.$t.sprintf("<strong>%1$s %2$s</strong>","All in One SEO",this.$t.__("Free",this.$td)),url:this.$links.utmUrl("lite-upgrade-bar"),linkText:this.$t.sprintf(this.$t.__("upgrading to %1$s",this.$td),"Pro")}}},computed:{link(){return this.$t.sprintf('<strong><a href="%1$s" target="_blank" class="text-white">%2$s</a> <a href="%1$s" target="_blank" class="text-white upgrade-arrow">&rarr;</a></strong>',this.strings.url,this.strings.linkText)},upgradeText(){return this.$t.sprintf(this.$t.__("You're using %1$s. To unlock more features, consider %2$s",this.$td),this.strings.boldText,this.link)}},methods:{processHideUpgradeBar(){document.body.classList.remove("aioseo-has-bar"),this.settingsStore.hideUpgradeBar()}},mounted(){document.body.classList.add("aioseo-has-bar")}},kt={class:"aioseo-upgrade-bar"},bt={class:"upgrade-text"},St=["innerHTML"];function $t(t,e,r,c,i,o){const h=u("svg-aioseo-logo-gear"),g=u("svg-close");return n(),l("div",kt,[s("div",bt,[d(h),s("div",{innerHTML:o.upgradeText},null,8,St)]),d(g,{onClick:o.processHideUpgradeBar},null,8,["onClick"])])}const Ct=b(yt,[["render",$t]]),Nt={},wt={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-description"},Dt=s("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Lt=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z",fill:"currentColor"},null,-1),Tt=[Dt,Lt];function Pt(t,e){return n(),l("svg",wt,Tt)}const At=b(Nt,[["render",Pt]]),Bt={},Mt={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",class:"aioseo-folder-open"},It=s("path",{d:"M0 0h24v24H0V0z",fill:"none"},null,-1),Ht=s("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z",fill:"currentColor"},null,-1),Ut=[It,Ht];function Ot(t,e){return n(),l("svg",Mt,Ut)}const Et=b(Bt,[["render",Ot]]),zt={setup(){return{licenseStore:G(),rootStore:z(),helpPanelStore:R(),settingsStore:V()}},components:{CoreApiBar:at,CoreLicenseKeyBar:ct,CoreUpgradeBar:Ct,SvgAioseoLogo:dt,SvgClose:q,SvgDescription:At,SvgFolderOpen:Et,SvgSupport:ut},data(){return{searchItem:null,strings:{close:this.$t.__("Close",this.$td),search:this.$t.__("Search",this.$td),viewAll:this.$t.__("View All",this.$td),docs:this.$t.__("Docs",this.$td),viewDocumentation:this.$t.__("View Documentation",this.$td),browseDocumentation:this.$t.sprintf(this.$t.__("Browse documentation, reference material, and tutorials for %1$s.",this.$td),"AIOSEO"),viewAllDocumentation:this.$t.__("View All Documentation",this.$td),getSupport:this.$t.__("Get Support",this.$td),submitTicket:this.$t.__("Submit a ticket and our world class support team will be in touch soon.",this.$td),submitSupportTicket:this.$t.__("Submit a Support Ticket",this.$td),upgradeToPro:this.$t.__("Upgrade to Pro",this.$td)}}},computed:{filteredDocs(){return this.searchItem!==""?Object.values(this.helpPanelStore.docs).filter(t=>this.searchItem!==null?t.title.toLowerCase().includes(this.searchItem.toLowerCase()):null):null}},methods:{inputSearch:function(t){it(()=>{this.searchItem=t},1e3)},toggleSection:function(t){t.target.parentNode.parentNode.classList.toggle("opened")},toggleDocs:function(t){t.target.previousSibling.classList.toggle("opened"),t.target.style.display="none"},toggleModal(){document.getElementById("aioseo-help-modal").classList.toggle("visible"),document.body.classList.toggle("modal-open")},getCategoryDocs(t){return Object.values(this.helpPanelStore.docs).filter(e=>e.categories.flat().includes(t)?e:null)}}},qt={id:"aioseo-help-modal",class:"aioseo-help"},xt={class:"aioseo-help-header"},Vt={class:"logo"},Gt=["href"],Rt=["title"],jt={class:"help-content"},Ft={id:"aioseo-help-search"},Yt={id:"aioseo-help-result"},Kt={class:"aioseo-help-docs"},Wt={class:"icon"},Xt=["href"],Jt={id:"aioseo-help-categories"},Qt={class:"aioseo-help-categories-toggle"},Zt={class:"folder-open"},te={class:"title"},ee=s("span",{class:"dashicons dashicons-arrow-right-alt2"},null,-1),se={class:"aioseo-help-docs"},ie={class:"icon"},oe=["href"],ne={class:"aioseo-help-additional-docs"},re={class:"icon"},ae=["href"],ce={id:"aioseo-help-footer"},le={class:"aioseo-help-footer-block"},de=["href"],ue={class:"aioseo-help-footer-block"},fe=["href"];function he(t,e,r,c,i,o){const h=u("core-upgrade-bar"),g=u("core-license-key-bar"),_=u("core-api-bar"),y=u("svg-aioseo-logo"),T=u("svg-close"),M=u("base-input"),D=u("svg-description"),W=u("svg-folder-open"),P=u("base-button"),X=u("svg-support");return n(),l("div",qt,[!t.$isPro&&c.settingsStore.settings.showUpgradeBar&&c.rootStore.pong?(n(),p(h,{key:0})):f("",!0),t.$isPro&&c.licenseStore.isUnlicensed&&c.rootStore.pong?(n(),p(g,{key:1})):f("",!0),c.rootStore.pong?f("",!0):(n(),p(_,{key:2})),s("div",xt,[s("div",Vt,[c.licenseStore.isUnlicensed?(n(),l("a",{key:0,href:t.$links.utmUrl("header-logo"),target:"_blank"},[d(y,{id:"aioseo-help-logo"})],8,Gt)):f("",!0),c.licenseStore.isUnlicensed?f("",!0):(n(),p(y,{key:1,id:"aioseo-help-logo"}))]),s("div",{id:"aioseo-help-close",title:i.strings.close,onClick:e[0]||(e[0]=v((...S)=>o.toggleModal&&o.toggleModal(...S),["stop"]))},[d(T)],8,Rt)]),s("div",jt,[s("div",Ft,[d(M,{type:"text",size:"medium",placeholder:i.strings.search,"onUpdate:modelValue":e[1]||(e[1]=S=>o.inputSearch(S))},null,8,["placeholder"])]),s("div",Yt,[s("ul",Kt,[(n(!0),l(C,null,L(o.filteredDocs,(S,N)=>(n(),l("li",{key:N},[s("span",Wt,[d(D)]),s("a",{href:t.$links.utmUrl("help-panel-doc","",S.url),rel:"noopener noreferrer",target:"_blank"},a(S.title),9,Xt)]))),128))])]),s("div",Jt,[s("ul",Qt,[(n(!0),l(C,null,L(c.helpPanelStore.categories,(S,N)=>(n(),l("li",{key:N,class:A(["aioseo-help-category",{opened:N==="getting-started"}])},[s("header",{onClick:e[2]||(e[2]=v($=>o.toggleSection($),["stop"]))},[s("span",Zt,[d(W)]),s("span",te,a(S),1),ee]),s("ul",se,[(n(!0),l(C,null,L(o.getCategoryDocs(N).slice(0,5),($,I)=>(n(),l("li",{key:I},[s("span",ie,[d(D)]),s("a",{href:t.$links.utmUrl("help-panel-doc","",$.url),rel:"noopener noreferrer",target:"_blank"},a($.title),9,oe)]))),128)),s("div",ne,[(n(!0),l(C,null,L(o.getCategoryDocs(N).slice(5,o.getCategoryDocs(N).length),($,I)=>(n(),l("li",{key:I},[s("span",re,[d(D)]),s("a",{href:t.$links.utmUrl("help-panel-doc","",$.url),rel:"noopener noreferrer",target:"_blank"},a($.title),9,ae)]))),128))]),o.getCategoryDocs(N).length>=5?(n(),p(P,{key:0,class:"aioseo-help-docs-viewall gray medium",onClick:e[3]||(e[3]=v($=>o.toggleDocs($),["stop"]))},{default:m(()=>[k(a(i.strings.viewAll)+" "+a(S)+" "+a(i.strings.docs),1)]),_:2},1024)):f("",!0)])],2))),128))])]),s("div",ce,[s("div",le,[s("a",{href:t.$links.utmUrl("help-panel-all-docs","","https://aioseo.com/docs/"),rel:"noopener noreferrer",target:"_blank"},[d(D),s("h3",null,a(i.strings.viewDocumentation),1),s("p",null,a(i.strings.browseDocumentation),1),d(P,{class:"aioseo-help-docs-viewall gray small"},{default:m(()=>[k(a(i.strings.viewAllDocumentation),1)]),_:1})],8,de)]),s("div",ue,[s("a",{href:!t.$isPro||!c.licenseStore.license.isActive?t.$links.getUpsellUrl("help-panel","get-support","liteUpgrade"):t.$links.utmUrl("help-panel-support","","https://aioseo.com/account/support/"),rel:"noopener noreferrer",target:"_blank"},[d(X),s("h3",null,a(i.strings.getSupport),1),s("p",null,a(i.strings.submitTicket),1),t.$isPro&&c.licenseStore.license.isActive?(n(),p(P,{key:0,class:"aioseo-help-docs-support blue small"},{default:m(()=>[k(a(i.strings.submitSupportTicket),1)]),_:1})):f("",!0),!t.$isPro||!c.licenseStore.license.isActive?(n(),p(P,{key:1,class:"aioseo-help-docs-support green small"},{default:m(()=>[k(a(i.strings.upgradeToPro),1)]),_:1})):f("",!0)],8,fe)])])])])}const _e=b(zt,[["render",he]]),me={computed:{notificationsCount(){const t=w();return this.dismissed?t.dismissedNotificationsCount:t.activeNotificationsCount},notifications(){const t=w();return this.dismissed?t.dismissedNotifications:t.activeNotifications},notificationTitle(){return this.dismissed?this.strings.notifications:this.strings.newNotifications}}},ge=""+window.__aioseoDynamicImportPreload__("images/dannie-detective.C0gjJQEP.png"),pe={setup(){return{notificationsStore:w()}},emits:["dismissed-notification"],components:{BaseButton:F,SvgCircleCheck:x,SvgCircleClose:Y,SvgCircleExclamation:gt,SvgGear:pt,TransitionSlide:B},mixins:[_t,mt],props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td)}}},computed:{getIcon(){switch(this.notification.type){case"warning":return"svg-circle-exclamation";case"error":return"svg-circle-close";case"info":return"svg-gear";case"success":default:return"svg-circle-check"}},getDate(){return this.dateSqlToLocalRelative(this.notification.start)}},methods:{processDismissNotification(){this.active=!1,this.notificationsStore.dismissNotifications([this.notification.slug]),this.$emit("dismissed-notification")}}},ve={class:"icon"},ye={class:"body"},ke={class:"title"},be={class:"date"},Se=["innerHTML"],$e={class:"actions"};function Ce(t,e,r,c,i,o){const h=u("base-button"),g=u("transition-slide");return n(),p(g,{class:"aioseo-notification",active:i.active},{default:m(()=>[s("div",null,[s("div",ve,[(n(),p(K(o.getIcon),{class:A(r.notification.type)},null,8,["class"]))]),s("div",ye,[s("div",ke,[s("div",null,a(r.notification.title),1),s("div",be,a(o.getDate),1)]),s("div",{class:"notification-content",innerHTML:r.notification.content},null,8,Se),s("div",$e,[r.notification.button1_label&&r.notification.button1_action?(n(),p(h,{key:0,size:"small",type:"gray",tag:t.getTagType(r.notification.button1_action),href:t.getHref(r.notification.button1_action),target:t.getTarget(r.notification.button1_action),onClick:e[0]||(e[0]=_=>t.processButtonClick(r.notification.button1_action,1)),loading:t.button1Loading},{default:m(()=>[k(a(r.notification.button1_label),1)]),_:1},8,["tag","href","target","loading"])):f("",!0),r.notification.button2_label&&r.notification.button2_action?(n(),p(h,{key:1,size:"small",type:"gray",tag:t.getTagType(r.notification.button2_action),href:t.getHref(r.notification.button2_action),target:t.getTarget(r.notification.button2_action),onClick:e[1]||(e[1]=_=>t.processButtonClick(r.notification.button2_action,2)),loading:t.button2Loading},{default:m(()=>[k(a(r.notification.button2_label),1)]),_:1},8,["tag","href","target","loading"])):f("",!0),r.notification.dismissed?f("",!0):(n(),l("a",{key:2,href:"#",class:"dismiss",onClick:e[2]||(e[2]=v((..._)=>o.processDismissNotification&&o.processDismissNotification(..._),["stop","prevent"]))},a(i.strings.dismiss),1))])])])]),_:1},8,["active"])}const Ne=b(pe,[["render",Ce]]),we={setup(){return{licenseStore:G(),notificationsStore:w(),optionsStore:j(),rootStore:z()}},emits:["dismissed-notification"],components:{SvgCircleCheck:x,TransitionSlide:B},props:{notification:{type:Object,required:!0}},data(){return{step:1,active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td),yesILoveIt:this.$t.__("Yes, I love it!",this.$td),notReally:this.$t.__("Not Really...",this.$td),okYouDeserveIt:this.$t.__("Ok, you deserve it",this.$td),nopeMaybeLater:this.$t.__("Nope, maybe later",this.$td),giveFeedback:this.$t.__("Give feedback",this.$td),noThanks:this.$t.__("No thanks",this.$td)}}},computed:{title(){switch(this.step){case 2:return this.$t.__("That's Awesome!",this.$td);case 3:return this.$t.__("Help us improve",this.$td);default:return this.$t.sprintf(this.$t.__("Are you enjoying %1$s?",this.$td),"AIOSEO")}},content(){switch(this.step){case 2:return this.$t.__("Could you please do us a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",this.$td);case 3:return this.$t.sprintf(this.$t.__("We're sorry to hear you aren't enjoying %1$s. We would love a chance to improve. Could you take a minute and let us know what we can do better?",this.$td),"All in One SEO");default:return""}},feedbackUrl(){const t=this.optionsStore.options.general&&this.licenseStore.licenseKey?this.licenseStore.licenseKey:"",e=this.$isPro?"pro":"lite";return this.$links.utmUrl("notification-review-notice",this.rootStore.aioseo.version,"https://aioseo.com/plugin-feedback/?wpf7528_24="+encodeURIComponent(this.rootStore.aioseo.urls.home)+"&wpf7528_26="+t+"&wpf7528_27="+e+"&wpf7528_28="+this.rootStore.aioseo.version)}},methods:{processDismissNotification(t=!1){this.active=!1,this.notificationsStore.dismissNotifications([this.notification.slug+(t?"-delay":"")]),this.$emit("dismissed-notification")}}},De={class:"icon"},Le={class:"body"},Te={class:"title"},Pe=["innerHTML"],Ae={class:"actions"};function Be(t,e,r,c,i,o){const h=u("svg-circle-check"),g=u("base-button"),_=u("transition-slide");return n(),p(_,{class:"aioseo-notification",active:i.active},{default:m(()=>[s("div",null,[s("div",De,[d(h,{class:"success"})]),s("div",Le,[s("div",Te,[s("div",null,a(o.title),1)]),s("div",{class:"notification-content",innerHTML:o.content},null,8,Pe),s("div",Ae,[i.step===1?(n(),l(C,{key:0},[d(g,{size:"small",type:"blue",onClick:e[0]||(e[0]=v(y=>i.step=2,["stop"]))},{default:m(()=>[k(a(i.strings.yesILoveIt),1)]),_:1}),d(g,{size:"small",type:"gray",onClick:e[1]||(e[1]=v(y=>i.step=3,["stop"]))},{default:m(()=>[k(a(i.strings.notReally),1)]),_:1})],64)):f("",!0),i.step===2?(n(),l(C,{key:1},[d(g,{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer",onClick:e[2]||(e[2]=y=>o.processDismissNotification(!1))},{default:m(()=>[k(a(i.strings.okYouDeserveIt),1)]),_:1}),d(g,{size:"small",type:"gray",onClick:e[3]||(e[3]=v(y=>o.processDismissNotification(!0),["stop","prevent"]))},{default:m(()=>[k(a(i.strings.nopeMaybeLater),1)]),_:1})],64)):f("",!0),i.step===3?(n(),l(C,{key:2},[d(g,{tag:"a",href:o.feedbackUrl,size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer",onClick:e[4]||(e[4]=y=>o.processDismissNotification(!1))},{default:m(()=>[k(a(i.strings.giveFeedback),1)]),_:1},8,["href"]),d(g,{size:"small",type:"gray",onClick:e[5]||(e[5]=v(y=>o.processDismissNotification(!1),["stop","prevent"]))},{default:m(()=>[k(a(i.strings.noThanks),1)]),_:1})],64)):f("",!0),r.notification.dismissed?f("",!0):(n(),l("a",{key:3,class:"dismiss",href:"#",onClick:e[6]||(e[6]=v(y=>o.processDismissNotification(!1),["stop","prevent"]))},a(i.strings.dismiss),1))])])])]),_:1},8,["active"])}const Me=b(we,[["render",Be]]),Ie={setup(){return{notificationsStore:w()}},emits:["dismissed-notification"],components:{BaseButton:F,SvgCircleCheck:x,TransitionSlide:B},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{dismiss:this.$t.__("Dismiss",this.$td),yesILoveIt:this.$t.__("Yes, I love it!",this.$td),notReally:this.$t.__("Not Really...",this.$td),okYouDeserveIt:this.$t.__("Ok, you deserve it",this.$td),nopeMaybeLater:this.$t.__("Nope, maybe later",this.$td),giveFeedback:this.$t.__("Give feedback",this.$td),noThanks:this.$t.__("No thanks",this.$td)}}},computed:{title(){return this.$t.sprintf(this.$t.__("Are you enjoying %1$s?",this.$td),"AIOSEO")},content(){return this.$t.sprintf(this.$t.__("Hey, we noticed you have been using %1$s for some time - that’s awesome! Could you please do us a BIG favor and give it a 5-star rating on WordPress to help us spread the word and boost our motivation?",this.$td),"<strong>All in One SEO</strong>")}},methods:{processDismissNotification(t=!1){this.active=!1,this.notificationsStore.dismissNotifications([this.notification.slug+(t?"-delay":"")]),this.$emit("dismissed-notification")}}},He={class:"icon"},Ue={class:"body"},Oe={class:"title"},Ee=["innerHTML"],ze={class:"actions"};function qe(t,e,r,c,i,o){const h=u("svg-circle-check"),g=u("base-button"),_=u("transition-slide");return n(),p(_,{class:"aioseo-notification",active:i.active},{default:m(()=>[s("div",null,[s("div",He,[d(h,{class:"success"})]),s("div",Ue,[s("div",Oe,[s("div",null,a(o.title),1)]),s("div",{class:"notification-content",innerHTML:o.content},null,8,Ee),s("div",ze,[d(g,{tag:"a",href:"https://wordpress.org/support/plugin/all-in-one-seo-pack/reviews/?filter=5#new-post",size:"small",type:"blue",target:"_blank",rel:"noopener noreferrer",onClick:e[0]||(e[0]=y=>o.processDismissNotification(!1))},{default:m(()=>[k(a(i.strings.okYouDeserveIt),1)]),_:1}),d(g,{size:"small",type:"gray",onClick:e[1]||(e[1]=v(y=>o.processDismissNotification(!0),["stop","prevent"]))},{default:m(()=>[k(a(i.strings.nopeMaybeLater),1)]),_:1}),r.notification.dismissed?f("",!0):(n(),l("a",{key:0,class:"dismiss",href:"#",onClick:e[2]||(e[2]=v(y=>o.processDismissNotification(!1),["stop","prevent"]))},a(i.strings.dismiss),1))])])])]),_:1},8,["active"])}const xe=b(Ie,[["render",qe]]),Ve={components:{SvgCircleClose:Y,TransitionSlide:B},props:{notification:{type:Object,required:!0}},data(){return{active:!0,strings:{title:this.$t.sprintf(this.$t.__("%1$s Addons Not Configured Properly",this.$td),"AIOSEO"),learnMore:this.$t.__("Learn More",this.$td),upgrade:this.$t.__("Upgrade",this.$td)}}},computed:{content(){let t="<ul>";return this.notification.addons.forEach(e=>{t+="<li><strong>AIOSEO - "+e.name+"</strong></li>"}),t+="</ul>",this.notification.message+t}}},Ge={class:"icon"},Re={class:"body"},je={class:"title"},Fe=["innerHTML"],Ye={class:"actions"};function Ke(t,e,r,c,i,o){const h=u("svg-circle-close"),g=u("base-button"),_=u("transition-slide");return n(),p(_,{class:"aioseo-notification",active:i.active},{default:m(()=>[s("div",null,[s("div",Ge,[d(h,{class:"error"})]),s("div",Re,[s("div",je,[s("div",null,a(i.strings.title),1)]),s("div",{class:"notification-content",innerHTML:o.content},null,8,Fe),s("div",Ye,[d(g,{size:"small",type:"green",tag:"a",href:t.$links.utmUrl("notification-unlicensed-addons"),target:"_blank"},{default:m(()=>[k(a(i.strings.upgrade),1)]),_:1},8,["href"])])])])]),_:1},8,["active"])}const We=b(Ve,[["render",Ke]]),Xe={emits:["toggle-dismissed","dismissed-notification"],components:{CoreNotification:Ne,NotificationsReview:Me,NotificationsReview2:xe,NotificationsUnlicensedAddons:We},props:{dismissedCount:{type:Number,required:!0},notifications:{type:Array,required:!0}},data(){return{dannieDetectiveImg:ge,strings:{greatScott:this.$t.__("Great Scott! Where'd they all go?",this.$td),noNewNotifications:this.$t.__("You have no new notifications.",this.$td),seeDismissed:this.$t.__("See Dismissed Notifications",this.$td)}}},methods:{getAssetUrl:ht}},Je={class:"aioseo-notification-cards"},Qe={key:"no-notifications"},Ze={class:"no-notifications"},ts=["src"],es={class:"great-scott"},ss={class:"no-new-notifications"};function is(t,e,r,c,i,o){return n(),l("div",Je,[r.notifications.length?(n(!0),l(C,{key:0},L(r.notifications,h=>(n(),p(K(h.component?h.component:"core-notification"),{key:h.slug,notification:h,ref_for:!0,ref:"notification",onDismissedNotification:e[0]||(e[0]=g=>t.$emit("dismissed-notification"))},null,40,["notification"]))),128)):f("",!0),r.notifications.length?f("",!0):(n(),l("div",Qe,[O(t.$slots,"no-notifications",{},()=>[s("div",Ze,[s("img",{alt:"Dannie the Detective",src:o.getAssetUrl(i.dannieDetectiveImg)},null,8,ts),s("div",es,a(i.strings.greatScott),1),s("div",ss,a(i.strings.noNewNotifications),1),r.dismissedCount?(n(),l("a",{key:0,href:"#",class:"dismiss",onClick:e[1]||(e[1]=v(h=>t.$emit("toggle-dismissed"),["stop","prevent"]))},a(i.strings.seeDismissed),1)):f("",!0)])])]))])}const os=b(Xe,[["render",is]]),ns={setup(){const t=w(),{strings:e}=vt();return{notificationsStore:t,composableStrings:e}},components:{CoreNotificationCards:os,SvgClose:q},mixins:[me],data(){return{dismissed:!1,maxNotifications:Number.MAX_SAFE_INTEGER,currentPage:0,totalPages:1,strings:J(this.composableStrings,{dismissedNotifications:this.$t.__("Dismissed Notifications",this.$td),dismissAll:this.$t.__("Dismiss All",this.$td)})}},watch:{"notificationsStore.showNotifications"(t){t?(this.currentPage=0,this.setMaxNotifications(),this.addBodyClass()):this.removeBodyClass()},dismissed(){this.setMaxNotifications()},notifications(){this.setMaxNotifications()}},computed:{filteredNotifications(){return[...this.notifications].splice(this.currentPage===0?0:this.currentPage*this.maxNotifications,this.maxNotifications)},pages(){const t=[];for(let e=0;e<this.totalPages;e++)t.push({number:e+1});return t}},methods:{escapeListener(t){t.key==="Escape"&&this.notificationsStore.showNotifications&&this.notificationsStore.toggleNotifications()},addBodyClass(){document.body.classList.add("aioseo-show-notifications")},removeBodyClass(){document.body.classList.remove("aioseo-show-notifications")},documentClick(t){if(!this.notificationsStore.showNotifications)return;const e=t&&t.target?t.target:null,r=document.querySelector("#wp-admin-bar-aioseo-notifications");if(r&&(r===e||r.contains(e)))return;const c=document.querySelector("#toplevel_page_aioseo .wp-first-item"),i=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");if(c&&c.contains(i)&&(c===e||c.contains(e)))return;const o=this.$refs["aioseo-notifications"];o&&(o===e||o.contains(e))||this.notificationsStore.toggleNotifications()},notificationsLinkClick(t){t.preventDefault(),this.notificationsStore.toggleNotifications()},processDismissAllNotifications(){const t=[];this.notifications.forEach(e=>{t.push(e.slug)}),this.notificationsStore.dismissNotifications(t).then(()=>{this.setMaxNotifications()})},setMaxNotifications(){const t=this.currentPage;this.currentPage=0,this.totalPages=1,this.maxNotifications=Number.MAX_SAFE_INTEGER,this.$nextTick(async()=>{const e=[],r=document.querySelectorAll(".notification-menu .aioseo-notification");r&&r.forEach(i=>{let o=i.offsetHeight;const h=window.getComputedStyle?getComputedStyle(i,null):i.currentStyle,g=parseInt(h.marginTop)||0,_=parseInt(h.marginBottom)||0;o+=g+_,e.push(o)});const c=document.querySelector(".notification-menu .aioseo-notification-cards");if(c){let i=0,o=0;for(let h=0;h<e.length&&(o+=e[h],!(o>c.offsetHeight));h++)i++;this.maxNotifications=i||1,this.totalPages=Math.ceil(e.length/i)}this.currentPage=t>this.totalPages-1?this.totalPages-1:t})}},mounted(){document.addEventListener("keydown",this.escapeListener),document.addEventListener("mousedown",this.documentClick);const t=document.querySelector("#wp-admin-bar-aioseo-notifications .ab-item");t&&t.addEventListener("mousedown",this.notificationsLinkClick);const e=document.querySelector("#toplevel_page_aioseo .wp-first-item"),r=document.querySelector("#toplevel_page_aioseo .wp-first-item .aioseo-menu-notification-indicator");e&&r&&e.addEventListener("mousedown",this.notificationsLinkClick)}},rs={class:"aioseo-notifications",ref:"aioseo-notifications"},as={key:0,class:"notification-menu"},cs={class:"notification-header"},ls={class:"new-notifications"},ds={class:"dismissed-notifications"},us={class:"notification-footer"},fs={class:"pagination"},hs=["onClick"],_s={key:0,class:"dismiss-all"};function ms(t,e,r,c,i,o){const h=u("svg-close"),g=u("core-notification-cards");return n(),l("div",rs,[d(E,{name:"notifications-slide"},{default:m(()=>[c.notificationsStore.showNotifications?(n(),l("div",as,[s("div",cs,[s("span",ls,"("+a(t.notificationsCount)+") "+a(t.notificationTitle),1),s("div",ds,[!i.dismissed&&c.notificationsStore.dismissedNotificationsCount?(n(),l("a",{key:0,href:"#",onClick:e[0]||(e[0]=v(_=>i.dismissed=!0,["stop","prevent"]))},a(i.strings.dismissedNotifications),1)):f("",!0),i.dismissed&&c.notificationsStore.dismissedNotificationsCount?(n(),l("a",{key:1,href:"#",onClick:e[1]||(e[1]=v(_=>i.dismissed=!1,["stop","prevent"]))},a(i.strings.activeNotifications),1)):f("",!0)]),s("div",{onClick:e[2]||(e[2]=v((..._)=>c.notificationsStore.toggleNotifications&&c.notificationsStore.toggleNotifications(..._),["stop"]))},[d(h)])]),d(g,{class:"notification-cards",notifications:o.filteredNotifications,dismissedCount:c.notificationsStore.dismissedNotificationsCount,onToggleDismissed:e[3]||(e[3]=_=>i.dismissed=!i.dismissed)},null,8,["notifications","dismissedCount"]),s("div",us,[s("div",fs,[i.totalPages>1?(n(!0),l(C,{key:0},L(o.pages,(_,y)=>(n(),l("div",{class:A(["page-number",{active:_.number===1+i.currentPage}]),key:y,onClick:v(T=>i.currentPage=_.number-1,["stop"])},a(_.number),11,hs))),128)):f("",!0)]),i.dismissed?f("",!0):(n(),l("div",_s,[t.notifications.length?(n(),l("a",{key:0,href:"#",class:"dismiss",onClick:e[4]||(e[4]=v((..._)=>o.processDismissAllNotifications&&o.processDismissAllNotifications(..._),["stop","prevent"]))},a(i.strings.dismissAll),1)):f("",!0)]))])])):f("",!0)]),_:1}),d(E,{name:"notifications-fade"},{default:m(()=>[c.notificationsStore.showNotifications?(n(),l("div",{key:0,onClick:e[5]||(e[5]=(..._)=>c.notificationsStore.toggleNotifications&&c.notificationsStore.toggleNotifications(..._)),class:"overlay"})):f("",!0)]),_:1})],512)}const gs=b(ns,[["render",ms]]),ps={setup(){return{helpPanelStore:R(),notificationsStore:w(),rootStore:z(),optionsStore:j()}},components:{CoreAlert:ot,CoreHeader:nt,CoreHelp:_e,CoreMainTabs:ft,CoreNotifications:gs,GridContainer:rt},mixins:[st],props:{pageName:{type:String,required:!0},showTabs:{type:Boolean,default(){return!0}},showSaveButton:{type:Boolean,default(){return!0}},excludeTabs:{type:Array,default(){return[]}},containerClasses:{type:Array,default(){return[]}}},data(){return{tabsKey:0,strings:{saveChanges:this.$t.__("Save Changes",this.$td)}}},watch:{excludeTabs(){this.tabsKey+=1}},computed:{tabs(){return this.$router.options.routes.filter(t=>t.name&&t.meta&&t.meta.name).filter(t=>Z(t.meta.access)).filter(t=>!t.meta.license||Q.hasMinimumLevel(t.meta.license)).filter(t=>!(t.meta.display==="lite"&&this.$isPro||t.meta.display==="pro"&&!this.$isPro)).filter(t=>!this.excludeTabs.includes(t.name)).map(t=>({slug:t.name,name:t.meta.name,url:{name:t.name},access:t.meta.access,pro:!!t.meta.pro}))},shouldShowSaveButton(){if(this.$route&&this.$route.name){const t=this.$router.options.routes.find(e=>e.name===this.$route.name);if(t&&t.meta&&t.meta.hideSaveButton)return!1}return this.showSaveButton},errorSaving(){const t=this.$isPro?"https://aioseo.com/plugin/pro-support":"https://aioseo.com/plugin/lite-support";return this.$t.sprintf(this.$t.__("Oops! It looks like an error occurred while saving the changes. Please try again or %1$scontact our support team%2$s.",this.$td),'<a href="'+this.$links.utmUrl("error-saving",this.rootStore.aioseo.page,t)+'" target="_blank">',"</a>")}},mounted(){tt().notifications&&(this.notificationsStore.showNotifications||this.notificationsStore.toggleNotifications(),setTimeout(()=>{et("notifications")},500)),this.notificationsStore.force&&this.notificationsStore.active.length&&(this.notificationsStore.force=!1,this.notificationsStore.toggleNotifications())}},vs={class:"aioseo-main"},ys=["innerHTML"],ks={key:2,class:"save-changes"};function bs(t,e,r,c,i,o){const h=u("core-notifications"),g=u("core-header"),_=u("core-alert"),y=u("core-main-tabs"),T=u("base-button"),M=u("grid-container"),D=u("core-help");return n(),l("div",null,[d(h),s("div",vs,[d(g,{"page-name":r.pageName},null,8,["page-name"]),d(M,{class:A(r.containerClasses)},{default:m(()=>[c.optionsStore.saveError?(n(),p(_,{key:0,type:"red"},{default:m(()=>[s("div",{innerHTML:o.errorSaving},null,8,ys)]),_:1})):f("",!0),r.showTabs?(n(),p(y,{key:i.tabsKey,tabs:o.tabs,showSaveButton:o.shouldShowSaveButton},{extra:m(()=>[O(t.$slots,"extra")]),_:3},8,["tabs","showSaveButton"])):f("",!0),d(E,{name:"route-fade",mode:"out-in"},{default:m(()=>[O(t.$slots,"default")]),_:3}),o.shouldShowSaveButton?(n(),l("div",ks,[d(T,{type:"blue",size:"medium",loading:c.rootStore.loading,onClick:t.processSaveChanges},{default:m(()=>[k(a(i.strings.saveChanges),1)]),_:1},8,["loading","onClick"])])):f("",!0)]),_:3},8,["class"])]),c.helpPanelStore.docs&&Object.keys(c.helpPanelStore.docs).length?(n(),p(D,{key:0})):f("",!0)])}const Rs=b(ps,[["render",bs]]);export{Rs as C,me as N,os as a,vt as u};