(function(){"use strict";var e={9053:function(e,n,t){var o=t(9242),r=t(3396);const a={id:"sun"};function i(e,n){const t=(0,r.up)("router-link"),o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(t,{to:"/"},{default:(0,r.w5)((()=>[(0,r.Uk)("主页")])),_:1}),(0,r.Wm)(t,{to:"/about"},{default:(0,r.w5)((()=>[(0,r.Uk)("关于")])),_:1}),(0,r.Wm)(t,{to:"/download"},{default:(0,r.w5)((()=>[(0,r.Uk)("下载")])),_:1}),(0,r.Wm)(t,{to:"/address"},{default:(0,r.w5)((()=>[(0,r.Uk)("地址")])),_:1})]),(0,r._)("div",a,[(0,r.Wm)(o)])],64)}var u=t(89);const d={},l=(0,u.Z)(d,[["render",i]]);var c=l,s=t(2483);const f={class:"home"},v=(0,r._)("br",null,null,-1);function p(e,n,t,o,a,i){const u=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.iD)("div",f,[(0,r.Uk)(" 你好，网站还在开发"),v,(0,r.Uk)(" Hello, the website is still under development。 "),(0,r.Wm)(u)])}const m=e=>((0,r.dD)("data-v-12295478"),e=e(),(0,r.Cn)(),e),h={class:"hello"},w=m((()=>(0,r._)("h1",null,"你好世界",-1))),g=[w];function b(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)("div",h,g)}var y={name:"HelloWorld",props:{msg:String}};const _=(0,u.Z)(y,[["render",b],["__scopeId","data-v-12295478"]]);var k=_,C={name:"HomeView",components:{HelloWorld:k}};const D=(0,u.Z)(C,[["render",p]]);var O=D;const S={class:"download"};function j(e,n,t,o,a,i){const u=(0,r.up)("DownloadClient"),d=(0,r.up)("DownloadApp");return(0,r.wg)(),(0,r.iD)("div",S,[(0,r.Wm)(u),(0,r.Wm)(d)])}const A=(0,r.uE)('<h1 data-v-5e9e2934>下载客户端</h1><br data-v-5e9e2934><code data-v-5e9e2934>所有的客户端都拥有optfine（高清修复）</code><br data-v-5e9e2934><code data-v-5e9e2934>带 + 号的拥有forge</code><div id="down1" data-v-5e9e2934><div id="down2" data-v-5e9e2934><a href="#/download" data-v-5e9e2934>1.19.2 客户端</a></div><div id="down2" data-v-5e9e2934><a href="#/download" data-v-5e9e2934>1.18.1 客户端</a></div><div id="down2" data-v-5e9e2934><a href="#/download" data-v-5e9e2934>1.19.2 客户端 +</a></div></div>',6);function E(e,n,t,o,r,a){return A}var W={name:"DownloadClient",props:{msg:String}};const T=(0,u.Z)(W,[["render",E],["__scopeId","data-v-5e9e2934"]]);var H=T;const N=e=>((0,r.dD)("data-v-34ce6f57"),e=e(),(0,r.Cn)(),e),x=N((()=>(0,r._)("h1",null,"下载软件",-1))),P=N((()=>(0,r._)("br",null,null,-1))),U=N((()=>(0,r._)("code",null,"带 + 号的是腐竹自己开发的（无毒）",-1))),Z=N((()=>(0,r._)("div",{id:"down1"},[(0,r._)("div",{id:"down2"},[(0,r._)("a",{href:"./public/app/内测4.7.exe"},"连点器+"),(0,r._)("code",null,"网易我的世界防封")])],-1)));function L(e,n,t,o,a,i){return(0,r.wg)(),(0,r.iD)(r.HY,null,[x,P,U,Z],64)}var B={name:"DownloadApp",props:{msg:String}};const F=(0,u.Z)(B,[["render",L],["__scopeId","data-v-34ce6f57"]]);var I=F,M={name:"DownloadView",components:{DownloadClient:H,DownloadApp:I}};const q=(0,u.Z)(M,[["render",j]]);var V=q;const Y={class:"address"},K=(0,r._)("h1",null,"服务器暂时未开放",-1),z=[K];function G(e,n){return(0,r.wg)(),(0,r.iD)("div",Y,z)}const J={},Q=(0,u.Z)(J,[["render",G]]);var R=Q;const X=[{path:"/",name:"home",component:O},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,8678))},{path:"/download",name:"download",component:V},{path:"/address",name:"address",component:R}],$=(0,s.p7)({history:(0,s.r5)(),routes:X});var ee=$,ne=t(65),te=(0,ne.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(c).use(te).use(ee).mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={exports:{}};return e[o](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,o,r,a){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],a=e[c][2];for(var u=!0,d=0;d<o.length;d++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](o[d])}))?o.splice(d--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,r,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.46cf7aff.js"}}(),function(){t.miniCssF=function(e){return"css/about.6f831e25.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="www:";t.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var u,d;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var s=l[c];if(s.getAttribute("src")==o||s.getAttribute("data-webpack")==n+a){u=s;break}}u||(d=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=o),e[o]=[r];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(v);var r=e[o];if(delete e[o],u.parentNode&&u.parentNode.removeChild(u),r&&r.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),d&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,d=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=u,a.parentNode.removeChild(a),r(d)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===n))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===n)return r}},o=function(o){return new Promise((function(r,a){var i=t.miniCssF(o),u=t.p+i;if(n(i,u))return r();e(o,u,null,r,a)}))},r={143:0};t.f.miniCss=function(e,n){var t={443:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=a);var i=t.p+t.u(n),u=new Error,d=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,r[1](u)}};t.l(i,d,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,a,i=o[0],u=o[1],d=o[2],l=0;if(i.some((function(n){return 0!==e[n]}))){for(r in u)t.o(u,r)&&(t.m[r]=u[r]);if(d)var c=d(t)}for(n&&n(o);l<i.length;l++)a=i[l],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(c)},o=self["webpackChunkwww"]=self["webpackChunkwww"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(9053)}));o=t.O(o)})();
//# sourceMappingURL=app.b90c65e8.js.map