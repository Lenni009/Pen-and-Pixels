function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,aK as p,aL as u,aM as l,aN as c,aO as f,aP as d,aQ as m,aR as h,aS as A,aT as g,Y as P,d as _,u as v,l as y,z as C,aU as E,aV as R,aW as w,aa as S}from"./chunks/framework.B8M63FyP.js";import{t as T}from"./chunks/theme.CLH6jrGp.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const s=i(T),b=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return y(()=>{C(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&E(),R(),w(),s.setup&&s.setup(),()=>S(s.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=O(),a=L();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function L(){return h(b)}function O(){let e=o,a;return A(t=>{let n=g(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};