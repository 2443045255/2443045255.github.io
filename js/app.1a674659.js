(function(){"use strict";var n={7632:function(n,e,t){var o=t(9242),r=t(3396);const u={id:"sun"};function i(n,e,t,o,i,a){const c=(0,r.up)("router-link"),d=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r._)("nav",null,[(0,r.Wm)(c,{to:"/home",onclick:"sunreload()"},{default:(0,r.w5)((()=>[(0,r.Uk)("主页")])),_:1}),(0,r.Wm)(c,{to:"/about",onclick:"sunreload()"},{default:(0,r.w5)((()=>[(0,r.Uk)("关于")])),_:1}),(0,r.Wm)(c,{to:"/download",onclick:"sunreload()"},{default:(0,r.w5)((()=>[(0,r.Uk)("下载")])),_:1}),(0,r.Wm)(c,{to:"/address",onclick:"sunreload()"},{default:(0,r.w5)((()=>[(0,r.Uk)("地址")])),_:1})]),(0,r._)("div",u,[(0,r.Wm)(d)])],64)}var a={mounted(){let n=document.createElement("script");n.type="text/javascript",n.src="js/body.js",document.body.appendChild(n)}},c=t(89);const d=(0,c.Z)(a,[["render",i]]);var s=d,f=t(2483);const l={class:"home",id:"home"};function p(n,e){return(0,r.wg)(),(0,r.iD)("div",l)}const v={},m=(0,c.Z)(v,[["render",p]]);var h=m;const b={class:"download",id:"download"};function w(n,e){return(0,r.wg)(),(0,r.iD)("div",b)}const g={},y=(0,c.Z)(g,[["render",w]]);var k=y;const j={class:"address",id:"address"};function O(n,e){return(0,r.wg)(),(0,r.iD)("div",j)}const _={},T=(0,c.Z)(_,[["render",O]]);var C=T;const E=[{path:"/home",name:"home",component:h},{path:"/about",name:"about",component:()=>t.e(443).then(t.bind(t,9173))},{path:"/download",name:"download",component:k},{path:"/address",name:"address",component:C}],P=(0,f.p7)({history:(0,f.r5)(),routes:E});var x=P,S=t(65),W=(0,S.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.ri)(s).use(W).use(x).mount("#app")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var u=e[o]={exports:{}};return n[o](u,u.exports,t),u.exports}t.m=n,function(){var n=[];t.O=function(e,o,r,u){if(!o){var i=1/0;for(s=0;s<n.length;s++){o=n[s][0],r=n[s][1],u=n[s][2];for(var a=!0,c=0;c<o.length;c++)(!1&u||i>=u)&&Object.keys(t.O).every((function(n){return t.O[n](o[c])}))?o.splice(c--,1):(a=!1,u<i&&(i=u));if(a){n.splice(s--,1);var d=r();void 0!==d&&(e=d)}}return e}u=u||0;for(var s=n.length;s>0&&n[s-1][2]>u;s--)n[s]=n[s-1];n[s]=[o,r,u]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})}}(),function(){t.f={},t.e=function(n){return Promise.all(Object.keys(t.f).reduce((function(e,o){return t.f[o](n,e),e}),[]))}}(),function(){t.u=function(n){return"js/about.2c3e3be9.js"}}(),function(){t.miniCssF=function(n){}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={},e="www:";t.l=function(o,r,u,i){if(n[o])n[o].push(r);else{var a,c;if(void 0!==u)for(var d=document.getElementsByTagName("script"),s=0;s<d.length;s++){var f=d[s];if(f.getAttribute("src")==o||f.getAttribute("data-webpack")==e+u){a=f;break}}a||(c=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,t.nc&&a.setAttribute("nonce",t.nc),a.setAttribute("data-webpack",e+u),a.src=o),n[o]=[r];var l=function(e,t){a.onerror=a.onload=null,clearTimeout(p);var r=n[o];if(delete n[o],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((function(n){return n(t)})),e)return e(t)},p=setTimeout(l.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=l.bind(null,a.onerror),a.onload=l.bind(null,a.onload),c&&document.head.appendChild(a)}}}(),function(){t.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){var n={143:0};t.f.j=function(e,o){var r=t.o(n,e)?n[e]:void 0;if(0!==r)if(r)o.push(r[2]);else{var u=new Promise((function(t,o){r=n[e]=[t,o]}));o.push(r[2]=u);var i=t.p+t.u(e),a=new Error,c=function(o){if(t.o(n,e)&&(r=n[e],0!==r&&(n[e]=void 0),r)){var u=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;a.message="Loading chunk "+e+" failed.\n("+u+": "+i+")",a.name="ChunkLoadError",a.type=u,a.request=i,r[1](a)}};t.l(i,c,"chunk-"+e,e)}},t.O.j=function(e){return 0===n[e]};var e=function(e,o){var r,u,i=o[0],a=o[1],c=o[2],d=0;if(i.some((function(e){return 0!==n[e]}))){for(r in a)t.o(a,r)&&(t.m[r]=a[r]);if(c)var s=c(t)}for(e&&e(o);d<i.length;d++)u=i[d],t.o(n,u)&&n[u]&&n[u][0](),n[u]=0;return t.O(s)},o=self["webpackChunkwww"]=self["webpackChunkwww"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(7632)}));o=t.O(o)})();
//# sourceMappingURL=app.1a674659.js.map