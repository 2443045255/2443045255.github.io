(function(){"use strict";var e={2465:function(e,n,t){var r=t(9242),o=t(3396);const a={id:"sun"};function i(e,n){const t=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",null,[(0,o.Wm)(t,{to:"/"},{default:(0,o.w5)((()=>[(0,o.Uk)("主页")])),_:1}),(0,o.Wm)(t,{to:"/about"},{default:(0,o.w5)((()=>[(0,o.Uk)("关于")])),_:1}),(0,o.Wm)(t,{to:"/download"},{default:(0,o.w5)((()=>[(0,o.Uk)("下载")])),_:1}),(0,o.Wm)(t,{to:"/address"},{default:(0,o.w5)((()=>[(0,o.Uk)("地址")])),_:1})]),(0,o._)("div",a,[(0,o.Wm)(r)])],64)}var u=t(89);const d={},c=(0,u.Z)(d,[["render",i]]);var l=c,f=t(2483);const s={class:"home"},v=(0,o._)("br",null,null,-1);function p(e,n,t,r,a,i){const u=(0,o.up)("HelloWorld");return(0,o.wg)(),(0,o.iD)("div",s,[(0,o.Uk)(" 你好，网站还在开发"),v,(0,o.Uk)(" Hello, the website is still under development。 "),(0,o.Wm)(u)])}const m=e=>((0,o.dD)("data-v-12295478"),e=e(),(0,o.Cn)(),e),h={class:"hello"},w=m((()=>(0,o._)("h1",null,"你好世界",-1))),g=[w];function b(e,n,t,r,a,i){return(0,o.wg)(),(0,o.iD)("div",h,g)}var y={name:"HelloWorld",props:{msg:String}};const k=(0,u.Z)(y,[["render",b],["__scopeId","data-v-12295478"]]);var _=k,O={name:"HomeView",components:{HelloWorld:_}};const C=(0,u.Z)(O,[["render",p]]);var j=C;const E={class:"download"},S=(0,o.uE)('<h1 data-v-a28c77a6>下载客户端</h1><code data-v-a28c77a6>所有的客户端都拥有optfine（高清修复）</code><br data-v-a28c77a6><code data-v-a28c77a6>带 + 号的拥有forge</code><div id="down1" data-v-a28c77a6><div id="down2" data-v-a28c77a6><a href="#/download" data-v-a28c77a6>1.19.2 客户端</a></div><div id="down2" data-v-a28c77a6><a href="#/download" data-v-a28c77a6>1.18.1 客户端</a></div><div id="down2" data-v-a28c77a6><a href="#/download" data-v-a28c77a6>1.19.2 客户端 +</a></div></div>',5),T=[S];function A(e,n){return(0,o.wg)(),(0,o.iD)("div",E,T)}const W={},D=(0,u.Z)(W,[["render",A],["__scopeId","data-v-a28c77a6"]]);var N=D;const H={class:"address"},P=(0,o._)("h1",null,"服务器暂时未开放",-1),U=[P];function x(e,n){return(0,o.wg)(),(0,o.iD)("div",H,U)}const L={},Z=(0,u.Z)(L,[["render",x]]);var B=Z;const F=[{path:"/",name:"home",component:j},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,8678))},{path:"/download",name:"download",component:N},{path:"/address",name:"address",component:B}],M=(0,f.p7)({history:(0,f.r5)(),routes:F});var I=M,q=t(65),K=(0,q.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,r.ri)(l).use(K).use(I).mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,d=0;d<r.length;d++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[d])}))?r.splice(d--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/about.46cf7aff.js"}}(),function(){t.miniCssF=function(e){return"css/about.6f831e25.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="www:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,d;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==n+a){u=f;break}}u||(d=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var s=function(n,t){u.onerror=u.onload=null,clearTimeout(v);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},v=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),d&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.href||n,d=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=i,d.request=u,a.parentNode.removeChild(a),o(d)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={443:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,d=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,d,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],d=r[2],c=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(d)var l=d(t)}for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkwww"]=self["webpackChunkwww"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(2465)}));r=t.O(r)})();
//# sourceMappingURL=app.ccca9040.js.map