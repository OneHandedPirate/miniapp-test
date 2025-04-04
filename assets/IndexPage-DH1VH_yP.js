import{Q as l}from"./QBtn-Dy02OgM8.js";import{c as _,a as f,h as k,g,z as C,r as c,A as t,t as u,x as d,u as m,y as i,B as p,C as h}from"./index-BUa_G_Bv.js";import{h as q}from"./render-dChl5Uk-.js";import{Q as b}from"./QPage-BQeFBHUx.js";import"./dom-F6i8FS88.js";const Q=_({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(a,{slots:e}){const o=f(()=>`q-card__section q-card__section--${a.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>k(a.tag,{class:o.value},q(e.default))}}),D={dark:{type:Boolean,default:null}};function M(a,e){return f(()=>a.dark===null?e.dark.isActive:a.dark)}const S=_({name:"QCard",props:{...D,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(a,{slots:e}){const{proxy:{$q:o}}=g(),n=M(a,o),r=f(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(a.bordered===!0?" q-card--bordered":"")+(a.square===!0?" q-card--square no-border-radius":"")+(a.flat===!0?" q-card--flat no-shadow":""));return()=>k(a.tag,{class:r.value},q(e.default))}}),A={class:"text-h5"},I={class:"text-h6"},z={style:{"max-width":"300px","word-wrap":"break-word","white-space":"pre-wrap"}},j=C({__name:"IndexPage",setup(a){const e=c(""),o=c(!1),n=c(""),r=c("");e.value=t?.initDataUnsafe?.user?.first_name||"Гость",n.value=`${t?.initDataUnsafe?.user?.id||"Не определен"}`,r.value=t.initData;const v=()=>{t.MainButton.setText("Закрыть"),t.MainButton.onClick(()=>{x()}),t.MainButton.show(),o.value=!0},w=()=>{t.MainButton.hide(),o.value=!1},y=()=>{t.showAlert("Бу! Испугался? Не бойся.")},B=()=>{t.showScanQrPopup({text:"Наведите на QR-код"},s=>{s.startsWith("http")?window.open(s,"_blank"):t.showAlert(s)})},x=()=>{t.close()};return(s,P)=>(d(),u(b,{padding:""},{default:m(()=>[i(S,{class:"flex column justify-center items-center",style:{"min-height":"96vh"}},{default:m(()=>[i(Q,{class:"text-center flex column"},{default:m(()=>[p("div",A,"Привет, "+h(e.value)+"!",1),p("div",I,"Твой ТГ ID: "+h(n.value),1),p("div",z,"Init Data: "+h(r.value),1),o.value?(d(),u(l,{key:1,label:"Скрыть MainButton",color:"primary",onClick:w,class:"q-mx-auto q-my-md",rounded:""})):(d(),u(l,{key:0,label:"Показать MainButton",color:"primary",onClick:v,class:"q-mx-auto q-my-md",rounded:""})),i(l,{label:"Show alert",color:"primary",onClick:y,class:"q-mx-auto q-my-md",rounded:""}),i(l,{label:"Открыть QR-сканер",color:"primary",onClick:B,class:"q-mx-auto q-my-md",rounded:""})]),_:1})]),_:1})]),_:1}))}});export{j as default};
