import{d as _,s as l,y as v,X as w,R as g,o as c,c as d,j as a,k as x,aP as k,aQ as B,e as y,F as D,_ as b,I as N,a as P}from"./chunks/framework.C6LRJMwc.js";import{d as f,i as R}from"./chunks/constants.CfAgSHS3.js";const V={class:"die-control"},E={class:"die-wrapper"},S=_({__name:"DiceBox",setup(m){const r=l(""),i=l(null),n=l(null);v(async()=>{var o;const{default:e}=await w(async()=>{const{default:s}=await import("./chunks/dice-box-threejs.es.CIb3H_lk.js");return{default:s}},[]),t=new e("#die",{theme_customColorset:{background:"#55d12f",foreground:"#ffffff",material:"plastic"},light_intensity:1,gravity_multiplier:500,baseScale:h(),strength:2});t.initialize().then(()=>{g(()=>{t.roll(u(r.value))})}).catch(s=>console.error(s)),(o=i.value)==null||o.addEventListener("click",()=>{t.roll(u(r.value))})});const p=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,u=e=>`1d${f}@${e||p(1,f)}`;function h(){return n.value?n.value.getBoundingClientRect().width/4:void 0}return(e,t)=>(c(),d(D,null,[a("div",V,[x(R)?y("",!0):k((c(),d("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=o=>r.value=o),class:"rig-input",placeholder:"Gewünschtes Ergebnis",type:"text"},null,512)),[[B,r.value]]),a("button",{class:"roll-button",ref_key:"rollBtn",ref:i}," Würfeln ",512)]),a("div",E,[a("div",{id:"die",ref_key:"die",ref:n},null,512)])],64))}}),T=b(S,[["__scopeId","data-v-f92ae83d"]]),C=a("h1",{id:"wurfel",tabindex:"-1"},[P("Würfel "),a("a",{class:"header-anchor",href:"#wurfel","aria-label":'Permalink to "Würfel"'},"​")],-1),$=JSON.parse('{"title":"Würfel","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"wiki/wuerfel.md","filePath":"wiki/wuerfel.md"}'),I={name:"wiki/wuerfel.md"},z=_({...I,setup(m){return(r,i)=>(c(),d("div",null,[C,N(T)]))}});export{$ as __pageData,z as default};