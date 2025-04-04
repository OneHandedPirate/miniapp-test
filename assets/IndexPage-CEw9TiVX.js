import{a as d,c as T,h as g,t as be,P as je,u as Re,v as ae,x as N,y as le,z as Ve,A as W,B as ge,C as _e,D as ie,E as Ne,F as ye,r as p,g as D,G as Fe,w as L,H as Ue,I as Ke,J as Se,K as Ye,T as Xe,f as Ge,L as Qe,M as pe,N as We,O as Je,Q as Ze,R as I,k as oe,q as re,m as E,s as A,S as ue,U as se}from"./index-1QREDI12.js";import{a as we,Q as et,s as xe,b as ce}from"./QResizeObserver-DQRAfxUz.js";import{a as tt,h as U,b as nt}from"./render-VfCoHxXA.js";import{u as ze,a as at,v as lt,Q as Ce,b as J}from"./QBtn-rsFTz5U0.js";import{Q as it}from"./QPage-BTYstgFh.js";import"./dom-BjiwrUun.js";const K={dark:{type:Boolean,default:null}};function Y(e,a){return d(()=>e.dark===null?a.dark.isActive:e.dark)}const ot=T({props:["store","barStyle","verticalBarStyle","horizontalBarStyle"],setup(e){return()=>[g("div",{class:e.store.scroll.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:e.store.onVerticalMousedown}),g("div",{class:e.store.scroll.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:e.store.onHorizontalMousedown}),be(g("div",{ref:e.store.scroll.vertical.ref,class:e.store.scroll.vertical.thumbClass.value,style:e.store.scroll.vertical.style.value,"aria-hidden":"true"}),e.store.thumbVertDir),be(g("div",{ref:e.store.scroll.horizontal.ref,class:e.store.scroll.horizontal.thumbClass.value,style:e.store.scroll.horizontal.style.value,"aria-hidden":"true"}),e.store.thumbHorizDir)]}}),qe={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},rt=Object.keys(qe);qe.all=!0;function Be(e){const a={};for(const o of rt)e[o]===!0&&(a[o]=!0);return Object.keys(a).length===0?qe:(a.horizontal===!0?a.left=a.right=!0:a.left===!0&&a.right===!0&&(a.horizontal=!0),a.vertical===!0?a.up=a.down=!0:a.up===!0&&a.down===!0&&(a.vertical=!0),a.horizontal===!0&&a.vertical===!0&&(a.all=!0),a)}const ut=["INPUT","TEXTAREA"];function ke(e,a){return a.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof a.handler=="function"&&ut.includes(e.target.nodeName.toUpperCase())===!1&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(a.uid)===-1)}function st(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),je.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}function de(e,a,o){const s=ge(e);let t,l=s.left-a.event.x,i=s.top-a.event.y,n=Math.abs(l),u=Math.abs(i);const c=a.direction;c.horizontal===!0&&c.vertical!==!0?t=l<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=i<0?"up":"down":c.up===!0&&i<0?(t="up",n>u&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.down===!0&&i>0?(t="down",n>u&&(c.left===!0&&l<0?t="left":c.right===!0&&l>0&&(t="right"))):c.left===!0&&l<0?(t="left",n<u&&(c.up===!0&&i<0?t="up":c.down===!0&&i>0&&(t="down"))):c.right===!0&&l>0&&(t="right",n<u&&(c.up===!0&&i<0?t="up":c.down===!0&&i>0&&(t="down")));let m=!1;if(t===void 0&&o===!1){if(a.event.isFirst===!0||a.event.lastDir===void 0)return{};t=a.event.lastDir,m=!0,t==="left"||t==="right"?(s.left-=l,n=0,l=0):(s.top-=i,u=0,i=0)}return{synthetic:m,payload:{evt:e,touch:a.event.mouse!==!0,mouse:a.event.mouse===!0,position:s,direction:t,isFirst:a.event.isFirst,isFinal:o===!0,duration:Date.now()-a.event.time,distance:{x:n,y:u},offset:{x:l,y:i},delta:{x:s.left-a.event.lastX,y:s.top-a.event.lastY}}}}let ct=0;const Ie=Re({name:"touch-pan",beforeMount(e,{value:a,modifiers:o}){if(o.mouse!==!0&&N.has.touch!==!0)return;function s(l,i){o.mouse===!0&&i===!0?ye(l):(o.stop===!0&&ie(l),o.prevent===!0&&_e(l))}const t={uid:"qvtp_"+ct++,handler:a,modifiers:o,direction:Be(o),noop:Ve,mouseStart(l){ke(l,t)&&Ne(l)&&(W(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(l,!0))},touchStart(l){if(ke(l,t)){const i=l.target;W(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(l)}},start(l,i){if(N.is.firefox===!0&&le(e,!0),t.lastEvt=l,i===!0||o.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=l.type.indexOf("mouse")!==-1?new MouseEvent(l.type,l):new TouchEvent(l.type,l);l.defaultPrevented===!0&&_e(c),l.cancelBubble===!0&&ie(c),Object.assign(c,{qKeyEvent:l.qKeyEvent,qClickOutside:l.qClickOutside,qAnchorHandled:l.qAnchorHandled,qClonedBy:l.qClonedBy===void 0?[t.uid]:l.qClonedBy.concat(t.uid)}),t.initialEvent={target:l.target,event:c}}ie(l)}const{left:n,top:u}=ge(l);t.event={x:n,y:u,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:n,lastY:u}},move(l){if(t.event===void 0)return;const i=ge(l),n=i.left-t.event.x,u=i.top-t.event.y;if(n===0&&u===0)return;t.lastEvt=l;const c=t.event.mouse===!0,m=()=>{s(l,c);let _;o.preserveCursor!==!0&&o.preservecursor!==!0&&(_=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),st(),t.styleCleanup=x=>{if(t.styleCleanup=void 0,_!==void 0&&(document.documentElement.style.cursor=_),document.body.classList.remove("non-selectable"),c===!0){const f=()=>{document.body.classList.remove("no-pointer-events--children")};x!==void 0?setTimeout(()=>{f(),x()},50):f()}else x!==void 0&&x()}};if(t.event.detected===!0){t.event.isFirst!==!0&&s(l,t.event.mouse);const{payload:_,synthetic:x}=de(l,t,!1);_!==void 0&&(t.handler(_)===!1?t.end(l):(t.styleCleanup===void 0&&t.event.isFirst===!0&&m(),t.event.lastX=_.position.left,t.event.lastY=_.position.top,t.event.lastDir=x===!0?void 0:_.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){m(),t.event.detected=!0,t.move(l);return}const S=Math.abs(n),y=Math.abs(u);S!==y&&(t.direction.horizontal===!0&&S>y||t.direction.vertical===!0&&S<y||t.direction.up===!0&&S<y&&u<0||t.direction.down===!0&&S<y&&u>0||t.direction.left===!0&&S>y&&n<0||t.direction.right===!0&&S>y&&n>0?(t.event.detected=!0,t.move(l)):t.end(l,!0))},end(l,i){if(t.event!==void 0){if(ae(t,"temp"),N.is.firefox===!0&&le(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(de(l===void 0?t.lastEvt:l,t).payload);const{payload:n}=de(l===void 0?t.lastEvt:l,t,!0),u=()=>{t.handler(n)};t.styleCleanup!==void 0?t.styleCleanup(u):u()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,o.mouse===!0){const l=o.mouseCapture===!0||o.mousecapture===!0?"Capture":"";W(t,"main",[[e,"mousedown","mouseStart",`passive${l}`]])}N.has.touch===!0&&W(t,"main",[[e,"touchstart","touchStart",`passive${o.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,a){const o=e.__qtouchpan;o!==void 0&&(a.oldValue!==a.value&&(typeof value!="function"&&o.end(),o.handler=a.value),o.direction=Be(a.modifiers))},beforeUnmount(e){const a=e.__qtouchpan;a!==void 0&&(a.event!==void 0&&a.end(),ae(a,"main"),ae(a,"temp"),N.is.firefox===!0&&le(e,!1),a.styleCleanup!==void 0&&a.styleCleanup(),delete e.__qtouchpan)}});function F(e,a,o){return o<=a?a:Math.min(o,Math.max(a,e))}const Te=["vertical","horizontal"],ve={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},Me={prevent:!0,mouse:!0,mouseAllDir:!0},Oe=e=>e>=250?50:Math.ceil(e/5),dt=T({name:"QScrollArea",props:{...K,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],verticalOffset:{type:Array,default:[0,0]},horizontalOffset:{type:Array,default:[0,0]},contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:a,emit:o}){const s=p(!1),t=p(!1),l=p(!1),i={vertical:p(0),horizontal:p(0)},n={vertical:{ref:p(null),position:p(0),size:p(0)},horizontal:{ref:p(null),position:p(0),size:p(0)}},{proxy:u}=D(),c=Y(e,u.$q);let m=null,S;const y=p(null),_=d(()=>"q-scrollarea"+(c.value===!0?" q-scrollarea--dark":""));Object.assign(i,{verticalInner:d(()=>i.vertical.value-e.verticalOffset[0]-e.verticalOffset[1]),horizontalInner:d(()=>i.horizontal.value-e.horizontalOffset[0]-e.horizontalOffset[1])}),n.vertical.percentage=d(()=>{const r=n.vertical.size.value-i.vertical.value;if(r<=0)return 0;const v=F(n.vertical.position.value/r,0,1);return Math.round(v*1e4)/1e4}),n.vertical.thumbHidden=d(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||n.vertical.size.value<=i.vertical.value+1),n.vertical.thumbStart=d(()=>e.verticalOffset[0]+n.vertical.percentage.value*(i.verticalInner.value-n.vertical.thumbSize.value)),n.vertical.thumbSize=d(()=>Math.round(F(i.verticalInner.value*i.verticalInner.value/n.vertical.size.value,Oe(i.verticalInner.value),i.verticalInner.value))),n.vertical.style=d(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${n.vertical.thumbStart.value}px`,height:`${n.vertical.thumbSize.value}px`,right:`${e.horizontalOffset[1]}px`})),n.vertical.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(n.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),n.vertical.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(n.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),n.horizontal.percentage=d(()=>{const r=n.horizontal.size.value-i.horizontal.value;if(r<=0)return 0;const v=F(Math.abs(n.horizontal.position.value)/r,0,1);return Math.round(v*1e4)/1e4}),n.horizontal.thumbHidden=d(()=>(e.visible===null?l.value:e.visible)!==!0&&s.value===!1&&t.value===!1||n.horizontal.size.value<=i.horizontal.value+1),n.horizontal.thumbStart=d(()=>e.horizontalOffset[0]+n.horizontal.percentage.value*(i.horizontalInner.value-n.horizontal.thumbSize.value)),n.horizontal.thumbSize=d(()=>Math.round(F(i.horizontalInner.value*i.horizontalInner.value/n.horizontal.size.value,Oe(i.horizontalInner.value),i.horizontalInner.value))),n.horizontal.style=d(()=>({...e.thumbStyle,...e.horizontalThumbStyle,[u.$q.lang.rtl===!0?"right":"left"]:`${n.horizontal.thumbStart.value}px`,width:`${n.horizontal.thumbSize.value}px`,bottom:`${e.verticalOffset[1]}px`})),n.horizontal.thumbClass=d(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(n.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),n.horizontal.barClass=d(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(n.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const x=d(()=>n.vertical.thumbHidden.value===!0&&n.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle);function f(){const r={};return Te.forEach(v=>{const q=n[v];Object.assign(r,{[v+"Position"]:q.position.value,[v+"Percentage"]:q.percentage.value,[v+"Size"]:q.size.value,[v+"ContainerSize"]:i[v].value,[v+"ContainerInnerSize"]:i[v+"Inner"].value})}),r}const w=Fe(()=>{const r=f();r.ref=u,o("scroll",r)},0);function C(r,v,q){if(Te.includes(r)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(r==="vertical"?xe:ce)(y.value,v,q)}function b({height:r,width:v}){let q=!1;i.vertical.value!==r&&(i.vertical.value=r,q=!0),i.horizontal.value!==v&&(i.horizontal.value=v,q=!0),q===!0&&H()}function z({position:r}){let v=!1;n.vertical.position.value!==r.top&&(n.vertical.position.value=r.top,v=!0),n.horizontal.position.value!==r.left&&(n.horizontal.position.value=r.left,v=!0),v===!0&&H()}function P({height:r,width:v}){n.horizontal.size.value!==v&&(n.horizontal.size.value=v,H()),n.vertical.size.value!==r&&(n.vertical.size.value=r,H())}function j(r,v){const q=n[v];if(r.isFirst===!0){if(q.thumbHidden.value===!0)return;S=q.position.value,t.value=!0}else if(t.value!==!0)return;r.isFinal===!0&&(t.value=!1);const h=ve[v],k=(q.size.value-i[v].value)/(i[v+"Inner"].value-q.thumbSize.value),O=r.distance[h.dist],V=S+(r.direction===h.dir?1:-1)*O*k;R(V,v)}function X(r,v){const q=n[v];if(q.thumbHidden.value!==!0){const h=v==="vertical"?e.verticalOffset[0]:e.horizontalOffset[0],k=r[ve[v].offset]-h,O=q.thumbStart.value-h;if(k<O||k>O+q.thumbSize.value){const V=k-q.thumbSize.value/2,De=F(V/(i[v+"Inner"].value-q.thumbSize.value),0,1);R(De*Math.max(0,q.size.value-i[v].value),v)}q.ref.value!==null&&q.ref.value.dispatchEvent(new MouseEvent(r.type,r))}}function H(){s.value=!0,m!==null&&clearTimeout(m),m=setTimeout(()=>{m=null,s.value=!1},e.delay),e.onScroll!==void 0&&w()}function R(r,v){y.value[ve[v].scroll]=r}let M=null;function te(){M!==null&&clearTimeout(M),M=setTimeout(()=>{M=null,l.value=!0},u.$q.platform.is.ios?50:0)}function G(){M!==null&&(clearTimeout(M),M=null),l.value=!1}let Q=null;L(()=>u.$q.lang.rtl,r=>{y.value!==null&&ce(y.value,Math.abs(n.horizontal.position.value)*(r===!0?-1:1))}),Ue(()=>{Q={top:n.vertical.position.value,left:n.horizontal.position.value}}),Ke(()=>{if(Q===null)return;const r=y.value;r!==null&&(ce(r,Q.left),xe(r,Q.top))}),Se(w.cancel),Object.assign(u,{getScrollTarget:()=>y.value,getScroll:f,getScrollPosition:()=>({top:n.vertical.position.value,left:n.horizontal.position.value}),getScrollPercentage:()=>({top:n.vertical.percentage.value,left:n.horizontal.percentage.value}),setScrollPosition:C,setScrollPercentage(r,v,q){C(r,v*(n[r].size.value-i[r].value)*(r==="horizontal"&&u.$q.lang.rtl===!0?-1:1),q)}});const ne={scroll:n,thumbVertDir:[[Ie,r=>{j(r,"vertical")},void 0,{vertical:!0,...Me}]],thumbHorizDir:[[Ie,r=>{j(r,"horizontal")},void 0,{horizontal:!0,...Me}]],onVerticalMousedown(r){X(r,"vertical")},onHorizontalMousedown(r){X(r,"horizontal")}};return()=>g("div",{class:_.value,onMouseenter:te,onMouseleave:G},[g("div",{ref:y,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[g("div",{class:"q-scrollarea__content absolute",style:x.value},tt(a.default,[g(we,{debounce:0,onResize:P})])),g(et,{axis:"both",onScroll:z})]),g(we,{debounce:0,onResize:b}),g(ot,{store:ne,barStyle:e.barStyle,verticalBarStyle:e.verticalBarStyle,horizontalBarStyle:e.horizontalBarStyle})])}}),Ae=T({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const o=d(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>g(e.tag,{class:o.value},U(a.default))}}),Ee=T({name:"QCard",props:{...K,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:a}){const{proxy:{$q:o}}=D(),s=Y(e,o),t=d(()=>"q-card"+(s.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>g(e.tag,{class:t.value},U(a.default))}}),vt=T({name:"QItem",props:{...K,...ze,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:a,emit:o}){const{proxy:{$q:s}}=D(),t=Y(e,s),{hasLink:l,linkAttrs:i,linkClass:n,linkTag:u,navigateOnClick:c}=at(),m=p(null),S=p(null),y=d(()=>e.clickable===!0||l.value===!0||e.tag==="label"),_=d(()=>e.disable!==!0&&y.value===!0),x=d(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(t.value===!0?" q-item--dark":"")+(l.value===!0&&e.active===null?n.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(_.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),f=d(()=>e.insetLevel===void 0?null:{["padding"+(s.lang.rtl===!0?"Right":"Left")]:16+e.insetLevel*56+"px"});function w(z){_.value===!0&&(S.value!==null&&(z.qKeyEvent!==!0&&document.activeElement===m.value?S.value.focus():document.activeElement===S.value&&m.value.focus()),c(z))}function C(z){if(_.value===!0&&Ye(z,[13,32])===!0){ye(z),z.qKeyEvent=!0;const P=new MouseEvent("click",z);P.qKeyEvent=!0,m.value.dispatchEvent(P)}o("keyup",z)}function b(){const z=nt(a.default,[]);return _.value===!0&&z.unshift(g("div",{class:"q-focus-helper",tabindex:-1,ref:S})),z}return()=>{const z={ref:m,class:x.value,style:f.value,role:"listitem",onClick:w,onKeyup:C};return _.value===!0?(z.tabindex=e.tabindex||"0",Object.assign(z,i.value)):y.value===!0&&(z["aria-disabled"]="true"),g(u.value,z,b())}}}),fe=T({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:a}){const o=d(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>g("div",{class:o.value},U(a.default))}}),$e=T({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:a}){const o=d(()=>parseInt(e.lines,10)),s=d(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(o.value===1?" ellipsis":"")),t=d(()=>e.lines!==void 0&&o.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":o.value}:null);return()=>g("div",{style:t.value,class:s.value},U(a.default))}}),ft=T({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:a,emit:o}){let s=!1,t,l,i=null,n=null,u,c;function m(){t&&t(),t=null,s=!1,i!==null&&(clearTimeout(i),i=null),n!==null&&(clearTimeout(n),n=null),l!==void 0&&l.removeEventListener("transitionend",u),u=null}function S(f,w,C){w!==void 0&&(f.style.height=`${w}px`),f.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,s=!0,t=C}function y(f,w){f.style.overflowY=null,f.style.height=null,f.style.transition=null,m(),w!==c&&o(w)}function _(f,w){let C=0;l=f,s===!0?(m(),C=f.offsetHeight===f.scrollHeight?0:void 0):(c="hide",f.style.overflowY="hidden"),S(f,C,w),i=setTimeout(()=>{i=null,f.style.height=`${f.scrollHeight}px`,u=b=>{n=null,(Object(b)!==b||b.target===f)&&y(f,"show")},f.addEventListener("transitionend",u),n=setTimeout(u,e.duration*1.1)},100)}function x(f,w){let C;l=f,s===!0?m():(c="show",f.style.overflowY="hidden",C=f.scrollHeight),S(f,C,w),i=setTimeout(()=>{i=null,f.style.height=0,u=b=>{n=null,(Object(b)!==b||b.target===f)&&y(f,"hide")},f.addEventListener("transitionend",u),n=setTimeout(u,e.duration*1.1)},100)}return Se(()=>{s===!0&&m()}),()=>g(Xe,{css:!1,appear:e.appear,onEnter:_,onLeave:x},a.default)}}),ht={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},he={xs:2,sm:4,md:8,lg:16,xl:24},Le=T({name:"QSeparator",props:{...K,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const a=D(),o=Y(e,a.proxy.$q),s=d(()=>e.vertical===!0?"vertical":"horizontal"),t=d(()=>` q-separator--${s.value}`),l=d(()=>e.inset!==!1?`${t.value}-${ht[e.inset]}`:""),i=d(()=>`q-separator${t.value}${l.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),n=d(()=>{const u={};if(e.size!==void 0&&(u[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const c=e.spaced===!0?`${he.md}px`:e.spaced in he?`${he[e.spaced]}px`:e.spaced,m=e.vertical===!0?["Left","Right"]:["Top","Bottom"];u[`margin${m[0]}`]=u[`margin${m[1]}`]=c}return u});return()=>g("hr",{class:i.value,style:n.value,"aria-orientation":s.value})}});let me,Z=0;const B=new Array(256);for(let e=0;e<256;e++)B[e]=(e+256).toString(16).substring(1);const mt=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return a=>{const o=new Uint8Array(a);return e.getRandomValues(o),o}}return a=>{const o=[];for(let s=a;s>0;s--)o.push(Math.floor(Math.random()*256));return o}})(),Pe=4096;function ee(){(me===void 0||Z+16>Pe)&&(Z=0,me=mt(Pe));const e=Array.prototype.slice.call(me,Z,Z+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,B[e[0]]+B[e[1]]+B[e[2]]+B[e[3]]+"-"+B[e[4]]+B[e[5]]+"-"+B[e[6]]+B[e[7]]+"-"+B[e[8]]+B[e[9]]+"-"+B[e[10]]+B[e[11]]+B[e[12]]+B[e[13]]+B[e[14]]+B[e[15]]}function bt(e){return e??null}function He(e,a){return e??(a===!0?`f_${ee()}`:null)}function gt({getValue:e,required:a=!0}={}){if(Ge.value===!0){const o=e!==void 0?p(bt(e())):p(null);return a===!0&&o.value===null&&Qe(()=>{o.value=`f_${ee()}`}),e!==void 0&&L(e,s=>{o.value=He(s,a)}),o}return e!==void 0?d(()=>He(e(),a)):p(`f_${ee()}`)}const yt={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},St=["beforeShow","show","beforeHide","hide"];function zt({showing:e,canShow:a,hideOnRouteChange:o,handleShow:s,handleHide:t,processOnMount:l}){const i=D(),{props:n,emit:u,proxy:c}=i;let m;function S(b){e.value===!0?x(b):y(b)}function y(b){if(n.disable===!0||b!==void 0&&b.qAnchorHandled===!0||a!==void 0&&a(b)!==!0)return;const z=n["onUpdate:modelValue"]!==void 0;z===!0&&(u("update:modelValue",!0),m=b,pe(()=>{m===b&&(m=void 0)})),(n.modelValue===null||z===!1)&&_(b)}function _(b){e.value!==!0&&(e.value=!0,u("beforeShow",b),s!==void 0?s(b):u("show",b))}function x(b){if(n.disable===!0)return;const z=n["onUpdate:modelValue"]!==void 0;z===!0&&(u("update:modelValue",!1),m=b,pe(()=>{m===b&&(m=void 0)})),(n.modelValue===null||z===!1)&&f(b)}function f(b){e.value!==!1&&(e.value=!1,u("beforeHide",b),t!==void 0?t(b):u("hide",b))}function w(b){n.disable===!0&&b===!0?n["onUpdate:modelValue"]!==void 0&&u("update:modelValue",!1):b===!0!==e.value&&(b===!0?_:f)(m)}L(()=>n.modelValue,w),o!==void 0&&lt(i)===!0&&L(()=>c.$route.fullPath,()=>{o.value===!0&&e.value===!0&&x()}),l===!0&&Qe(()=>{w(n.modelValue)});const C={show:y,hide:x,toggle:S};return Object.assign(c,C),C}const $=We({}),qt=Object.keys(ze),_t=T({name:"QExpansionItem",props:{...ze,...yt,...K,icon:String,label:String,labelLines:[Number,String],caption:String,captionLines:[Number,String],dense:Boolean,toggleAriaLabel:String,expandIcon:String,expandedIcon:String,expandIconClass:[Array,String,Object],duration:{},headerInsetLevel:Number,contentInsetLevel:Number,expandSeparator:Boolean,defaultOpened:Boolean,hideExpandIcon:Boolean,expandIconToggle:Boolean,switchToggleSide:Boolean,denseToggle:Boolean,group:String,popup:Boolean,headerStyle:[Array,String,Object],headerClass:[Array,String,Object]},emits:[...St,"click","afterShow","afterHide"],setup(e,{slots:a,emit:o}){const{proxy:{$q:s}}=D(),t=Y(e,s),l=p(e.modelValue!==null?e.modelValue:e.defaultOpened),i=p(null),n=gt(),{show:u,hide:c,toggle:m}=zt({showing:l});let S,y;const _=d(()=>`q-expansion-item q-item-type q-expansion-item--${l.value===!0?"expanded":"collapsed"} q-expansion-item--${e.popup===!0?"popup":"standard"}`),x=d(()=>e.contentInsetLevel===void 0?null:{["padding"+(s.lang.rtl===!0?"Right":"Left")]:e.contentInsetLevel*56+"px"}),f=d(()=>e.disable!==!0&&(e.href!==void 0||e.to!==void 0&&e.to!==null&&e.to!=="")),w=d(()=>{const h={};return qt.forEach(k=>{h[k]=e[k]}),h}),C=d(()=>f.value===!0||e.expandIconToggle!==!0),b=d(()=>e.expandedIcon!==void 0&&l.value===!0?e.expandedIcon:e.expandIcon||s.iconSet.expansionItem[e.denseToggle===!0?"denseIcon":"icon"]),z=d(()=>e.disable!==!0&&(f.value===!0||e.expandIconToggle===!0)),P=d(()=>({expanded:l.value===!0,detailsId:n.value,toggle:m,show:u,hide:c})),j=d(()=>{const h=e.toggleAriaLabel!==void 0?e.toggleAriaLabel:s.lang.label[l.value===!0?"collapse":"expand"](e.label);return{role:"button","aria-expanded":l.value===!0?"true":"false","aria-controls":n.value,"aria-label":h}});L(()=>e.group,h=>{y!==void 0&&y(),h!==void 0&&G()});function X(h){f.value!==!0&&m(h),o("click",h)}function H(h){h.keyCode===13&&R(h,!0)}function R(h,k){k!==!0&&i.value!==null&&i.value.focus(),m(h),ye(h)}function M(){o("afterShow")}function te(){o("afterHide")}function G(){S===void 0&&(S=ee()),l.value===!0&&($[e.group]=S);const h=L(l,O=>{O===!0?$[e.group]=S:$[e.group]===S&&delete $[e.group]}),k=L(()=>$[e.group],(O,V)=>{V===S&&O!==void 0&&O!==S&&c()});y=()=>{h(),k(),$[e.group]===S&&delete $[e.group],y=void 0}}function Q(){const h={class:[`q-focusable relative-position cursor-pointer${e.denseToggle===!0&&e.switchToggleSide===!0?" items-end":""}`,e.expandIconClass],side:e.switchToggleSide!==!0,avatar:e.switchToggleSide},k=[g(Ce,{class:"q-expansion-item__toggle-icon"+(e.expandedIcon===void 0&&l.value===!0?" q-expansion-item__toggle-icon--rotated":""),name:b.value})];return z.value===!0&&(Object.assign(h,{tabindex:0,...j.value,onClick:R,onKeyup:H}),k.unshift(g("div",{ref:i,class:"q-expansion-item__toggle-focus q-icon q-focus-helper q-focus-helper--rounded",tabindex:-1}))),g(fe,h,()=>k)}function ne(){let h;return a.header!==void 0?h=[].concat(a.header(P.value)):(h=[g(fe,()=>[g($e,{lines:e.labelLines},()=>e.label||""),e.caption?g($e,{lines:e.captionLines,caption:!0},()=>e.caption):null])],e.icon&&h[e.switchToggleSide===!0?"push":"unshift"](g(fe,{side:e.switchToggleSide===!0,avatar:e.switchToggleSide!==!0},()=>g(Ce,{name:e.icon})))),e.disable!==!0&&e.hideExpandIcon!==!0&&h[e.switchToggleSide===!0?"unshift":"push"](Q()),h}function r(){const h={ref:"item",style:e.headerStyle,class:e.headerClass,dark:t.value,disable:e.disable,dense:e.dense,insetLevel:e.headerInsetLevel};return C.value===!0&&(h.clickable=!0,h.onClick=X,Object.assign(h,f.value===!0?w.value:j.value)),g(vt,h,ne)}function v(){return be(g("div",{key:"e-content",class:"q-expansion-item__content relative-position",style:x.value,id:n.value},U(a.default)),[[Je,l.value]])}function q(){const h=[r(),g(ft,{duration:e.duration,onShow:M,onHide:te},v)];return e.expandSeparator===!0&&h.push(g(Le,{class:"q-expansion-item__border q-expansion-item__border--top absolute-top",dark:t.value}),g(Le,{class:"q-expansion-item__border q-expansion-item__border--bottom absolute-bottom",dark:t.value})),h}return e.group!==void 0&&G(),Se(()=>{y!==void 0&&y()}),()=>g("div",{class:_.value},[g("div",{class:"q-expansion-item__container relative-position"},q())])}}),pt={class:"text-h5"},wt={class:"text-h6"},Mt=Ze({__name:"IndexPage",setup(e){const a=p(""),o=p(!1),s=p(""),t=p("");a.value=I?.initDataUnsafe?.user?.first_name||"Гость",s.value=`${I?.initDataUnsafe?.user?.id||"Не определен"}`,t.value=I.initData;const l=()=>{I.MainButton.setText("Закрыть"),I.MainButton.onClick(()=>{c()}),I.MainButton.show(),o.value=!0},i=()=>{I.MainButton.hide(),o.value=!1},n=()=>{I.showAlert("Бу! Испугался? Не бойся.")},u=()=>{I.showScanQrPopup({text:"Наведите на QR-код"},m=>{m.startsWith("http")?window.open(m,"_blank"):I.showAlert(m)})},c=()=>{I.close()};return(m,S)=>(re(),oe(it,{padding:""},{default:E(()=>[A(Ee,{class:"flex column justify-center items-center",style:{"min-height":"96vh"}},{default:E(()=>[A(Ae,{class:"text-center flex column"},{default:E(()=>[ue("div",pt,"Привет, "+se(a.value)+"!",1),ue("div",wt,"Твой ТГ ID: "+se(s.value),1),A(_t,{"expand-separator":"",icon:"visibility",label:"Показать Init Data"},{default:E(()=>[A(Ee,null,{default:E(()=>[A(Ae,null,{default:E(()=>[A(dt,{style:{"max-width":"300px"}},{default:E(()=>[ue("pre",null,se(t.value),1)]),_:1})]),_:1})]),_:1})]),_:1}),o.value?(re(),oe(J,{key:1,label:"Скрыть MainButton",color:"primary",onClick:i,class:"q-mx-auto q-my-md",rounded:""})):(re(),oe(J,{key:0,label:"Показать MainButton",color:"primary",onClick:l,class:"q-mx-auto q-my-md",rounded:""})),A(J,{label:"Show alert",color:"primary",onClick:n,class:"q-mx-auto q-my-md",rounded:""}),A(J,{label:"Открыть QR-сканер",color:"primary",onClick:u,class:"q-mx-auto q-my-md",rounded:""})]),_:1})]),_:1})]),_:1}))}});export{Mt as default};
