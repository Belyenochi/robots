webpackJsonp([14],[,,,,function(t,e,n){"use strict";var o={};o.title=function(t){t=t?t+" - Home":"iView project",window.document.title=t},e.a=o},function(t,e,n){"use strict";var o=[{path:"/",meta:{title:""},component:function(t){return n.e(0).then(function(){var e=[n(10)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/manager",meta:{title:""},component:function(t){return n.e(13).then(function(){var e=[n(24)];t.apply(null,e)}.bind(this)).catch(n.oe)},children:[{path:"/",component:function(t){return n.e(3).then(function(){var e=[n(28)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/autoReply",component:function(t){return n.e(11).then(function(){var e=[n(21)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/greetings",component:function(t){return n.e(10).then(function(){var e=[n(22)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/professionalKnowledge",component:function(t){return n.e(7).then(function(){var e=[n(27)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/intelligentLearning",component:function(t){return n.e(8).then(function(){var e=[n(25)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/unknownLearning",component:function(t){return n.e(6).then(function(){var e=[n(29)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/messageTable",component:function(t){return n.e(1).then(function(){var e=[n(26)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/hotQuestion",component:function(t){return n.e(9).then(function(){var e=[n(23)];t.apply(null,e)}.bind(this)).catch(n.oe)}}]},{path:"/login",meta:{title:""},component:function(t){return n.e(0).then(function(){var e=[n(10)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/userIndex",meta:{title:""},component:function(t){return n.e(12).then(function(){var e=[n(32)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/userChatBues",meta:{title:""},component:function(t){return n.e(5).then(function(){var e=[n(30)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/userChatGreet",meta:{title:""},component:function(t){return n.e(4).then(function(){var e=[n(31)];t.apply(null,e)}.bind(this)).catch(n.oe)}},{path:"/RandomChart",meta:{title:""},component:function(t){return n.e(2).then(function(){var e=[n(20)];t.apply(null,e)}.bind(this)).catch(n.oe)}}];e.a=o},function(t,e){},function(t,e,n){n(14);var o=n(9)(n(11),n(15),"data-v-059f85ca",null);o.options.__file="F:\\Delta\\iview-project-2.0 (1)\\iview-project-2.0 (1)\\iview-project-2.0\\src\\app.vue",o.esModule&&Object.keys(o.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] app.vue: functional components are not supported with templates, they should use render functions."),t.exports=o.exports},function(t,e,n){"use strict";function o(t){this.state=at,this.value=void 0,this.deferred=[];var e=this;try{t(function(t){e.resolve(t)},function(t){e.reject(t)})}catch(t){e.reject(t)}}function r(t,e){t instanceof Promise?this.promise=t:this.promise=new Promise(t.bind(e)),this.context=e}function i(t){var e=t.config,n=t.nextTick;ft=n,mt=e.debug||!e.silent}function u(t){"undefined"!=typeof console&&mt&&console.warn("[VueResource warn]: "+t)}function a(t){"undefined"!=typeof console&&console.error(t)}function s(t,e){return ft(t,e)}function c(t){return t?t.replace(/^\s*|\s*$/g,""):""}function f(t,e){return t&&void 0===e?t.replace(/\s+$/,""):t&&e?t.replace(new RegExp("["+e+"]+$"),""):t}function p(t){return t?t.toLowerCase():""}function h(t){return t?t.toUpperCase():""}function l(t){return"string"==typeof t}function d(t){return"function"==typeof t}function m(t){return null!==t&&"object"==typeof t}function v(t){return m(t)&&Object.getPrototypeOf(t)==Object.prototype}function y(t){return"undefined"!=typeof Blob&&t instanceof Blob}function b(t){return"undefined"!=typeof FormData&&t instanceof FormData}function g(t,e,n){var o=r.resolve(t);return arguments.length<2?o:o.then(e,n)}function w(t,e,n){return n=n||{},d(n)&&(n=n.call(e)),x(t.bind({$vm:e,$options:n}),t,{$options:n})}function j(t,e){var n,o;if(yt(t))for(n=0;n<t.length;n++)e.call(t[n],t[n],n);else if(m(t))for(o in t)ht.call(t,o)&&e.call(t[o],t[o],o);return t}function x(t){return dt.call(arguments,1).forEach(function(e){O(t,e,!0)}),t}function T(t){return dt.call(arguments,1).forEach(function(e){for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function E(t){return dt.call(arguments,1).forEach(function(e){O(t,e)}),t}function O(t,e,n){for(var o in e)n&&(v(e[o])||yt(e[o]))?(v(e[o])&&!v(t[o])&&(t[o]={}),yt(e[o])&&!yt(t[o])&&(t[o]=[]),O(t[o],e[o],n)):void 0!==e[o]&&(t[o]=e[o])}function P(t,e){var n=e(t);return l(t.root)&&!/^(https?:)?\//.test(n)&&(n=f(t.root,"/")+"/"+n),n}function C(t,e){var n=Object.keys(I.options.params),o={},r=e(t);return j(t.params,function(t,e){-1===n.indexOf(e)&&(o[e]=t)}),o=I.params(o),o&&(r+=(-1==r.indexOf("?")?"?":"&")+o),r}function $(t,e,n){var o=R(t),r=o.expand(e);return n&&n.push.apply(n,o.vars),r}function R(t){var e=["+","#",".","/",";","?","&"],n=[];return{vars:n,expand:function(o){return t.replace(/\{([^{}]+)\}|([^{}]+)/g,function(t,r,i){if(r){var u=null,a=[];if(-1!==e.indexOf(r.charAt(0))&&(u=r.charAt(0),r=r.substr(1)),r.split(/,/g).forEach(function(t){var e=/([^:*]*)(?::(\d+)|(\*))?/.exec(t);a.push.apply(a,U(o,u,e[1],e[2]||e[3])),n.push(e[1])}),u&&"+"!==u){var s=",";return"?"===u?s="&":"#"!==u&&(s=u),(0!==a.length?u:"")+a.join(s)}return a.join(",")}return S(i)})}}}function U(t,e,n,o){var r=t[n],i=[];if(A(r)&&""!==r)if("string"==typeof r||"number"==typeof r||"boolean"==typeof r)r=r.toString(),o&&"*"!==o&&(r=r.substring(0,parseInt(o,10))),i.push(L(e,r,k(e)?n:null));else if("*"===o)Array.isArray(r)?r.filter(A).forEach(function(t){i.push(L(e,t,k(e)?n:null))}):Object.keys(r).forEach(function(t){A(r[t])&&i.push(L(e,r[t],t))});else{var u=[];Array.isArray(r)?r.filter(A).forEach(function(t){u.push(L(e,t))}):Object.keys(r).forEach(function(t){A(r[t])&&(u.push(encodeURIComponent(t)),u.push(L(e,r[t].toString())))}),k(e)?i.push(encodeURIComponent(n)+"="+u.join(",")):0!==u.length&&i.push(u.join(","))}else";"===e?i.push(encodeURIComponent(n)):""!==r||"&"!==e&&"?"!==e?""===r&&i.push(""):i.push(encodeURIComponent(n)+"=");return i}function A(t){return void 0!==t&&null!==t}function k(t){return";"===t||"&"===t||"?"===t}function L(t,e,n){return e="+"===t||"#"===t?S(e):encodeURIComponent(e),n?encodeURIComponent(n)+"="+e:e}function S(t){return t.split(/(%[0-9A-Fa-f]{2})/g).map(function(t){return/%[0-9A-Fa-f]/.test(t)||(t=encodeURI(t)),t}).join("")}function _(t){var e=[],n=$(t.url,t.params,e);return e.forEach(function(e){delete t.params[e]}),n}function I(t,e){var n,o=this||{},r=t;return l(t)&&(r={url:t,params:e}),r=x({},I.options,o.$options,r),I.transforms.forEach(function(t){l(t)&&(t=I.transform[t]),d(t)&&(n=M(t,n,o.$vm))}),n(r)}function M(t,e,n){return function(o){return t.call(n,o,e)}}function B(t,e,n){var o,r=yt(e),i=v(e);j(e,function(e,u){o=m(e)||yt(e),n&&(u=n+"["+(i||o?u:"")+"]"),!n&&r?t.add(e.name,e.value):o?B(t,e,u):t.add(u,e)})}function H(t){return new r(function(e){var n=new XDomainRequest,o=function(o){var r=o.type,i=0;"load"===r?i=200:"error"===r&&(i=500),e(t.respondWith(n.responseText,{status:i}))};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl()),t.timeout&&(n.timeout=t.timeout),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.onprogress=function(){},n.send(t.getBody())})}function q(t){if(vt){var e=I.parse(location.href),n=I.parse(t.getUrl());n.protocol===e.protocol&&n.host===e.host||(t.crossOrigin=!0,t.emulateHTTP=!1,gt||(t.client=H))}}function F(t){b(t.body)?t.headers.delete("Content-Type"):m(t.body)&&t.emulateJSON&&(t.body=I.params(t.body),t.headers.set("Content-Type","application/x-www-form-urlencoded"))}function D(t){var e=t.headers.get("Content-Type")||"";return m(t.body)&&0===e.indexOf("application/json")&&(t.body=JSON.stringify(t.body)),function(t){return t.bodyText?g(t.text(),function(e){if(0===(t.headers.get("Content-Type")||"").indexOf("application/json")||J(e))try{t.body=JSON.parse(e)}catch(e){t.body=null}else t.body=e;return t}):t}}function J(t){var e=t.match(/^\s*(\[|\{)/),n={"[":/]\s*$/,"{":/}\s*$/};return e&&n[e[1]].test(t)}function N(t){return new r(function(e){var n,o,r=t.jsonp||"callback",i=t.jsonpCallback||"_jsonp"+Math.random().toString(36).substr(2),u=null;n=function(n){var r=n.type,a=0;"load"===r&&null!==u?a=200:"error"===r&&(a=500),a&&window[i]&&(delete window[i],document.body.removeChild(o)),e(t.respondWith(u,{status:a}))},window[i]=function(t){u=JSON.stringify(t)},t.abort=function(){n({type:"abort"})},t.params[r]=i,t.timeout&&setTimeout(t.abort,t.timeout),o=document.createElement("script"),o.src=t.getUrl(),o.type="text/javascript",o.async=!0,o.onload=n,o.onerror=n,document.body.appendChild(o)})}function W(t){"JSONP"==t.method&&(t.client=N)}function X(t){d(t.before)&&t.before.call(this,t)}function G(t){t.emulateHTTP&&/^(PUT|PATCH|DELETE)$/i.test(t.method)&&(t.headers.set("X-HTTP-Method-Override",t.method),t.method="POST")}function V(t){j(bt({},ot.headers.common,t.crossOrigin?{}:ot.headers.custom,ot.headers[p(t.method)]),function(e,n){t.headers.has(n)||t.headers.set(n,e)})}function z(t){return new r(function(e){var n=new XMLHttpRequest,o=function(o){var r=t.respondWith("response"in n?n.response:n.responseText,{status:1223===n.status?204:n.status,statusText:1223===n.status?"No Content":c(n.statusText)});j(c(n.getAllResponseHeaders()).split("\n"),function(t){r.headers.append(t.slice(0,t.indexOf(":")),t.slice(t.indexOf(":")+1))}),e(r)};t.abort=function(){return n.abort()},n.open(t.method,t.getUrl(),!0),t.timeout&&(n.timeout=t.timeout),t.responseType&&"responseType"in n&&(n.responseType=t.responseType),(t.withCredentials||t.credentials)&&(n.withCredentials=!0),t.crossOrigin||t.headers.set("X-Requested-With","XMLHttpRequest"),d(t.progress)&&"GET"===t.method&&n.addEventListener("progress",t.progress),d(t.downloadProgress)&&n.addEventListener("progress",t.downloadProgress),d(t.progress)&&/^(POST|PUT)$/i.test(t.method)&&n.upload.addEventListener("progress",t.progress),d(t.uploadProgress)&&n.upload&&n.upload.addEventListener("progress",t.uploadProgress),t.headers.forEach(function(t,e){n.setRequestHeader(e,t)}),n.onload=o,n.onabort=o,n.onerror=o,n.ontimeout=o,n.send(t.getBody())})}function K(t){var e=n(19);return new r(function(n){var o,r=t.getUrl(),i=t.getBody(),u=t.method,a={};t.headers.forEach(function(t,e){a[e]=t}),e(r,{body:i,method:u,headers:a}).then(o=function(e){var o=t.respondWith(e.body,{status:e.statusCode,statusText:c(e.statusMessage)});j(e.headers,function(t,e){o.headers.set(e,t)}),n(o)},function(t){return o(t.response)})})}function Q(t){function e(e){for(;n.length;){var i=n.pop();if(d(i)){var a=void 0,s=void 0;if(a=i.call(t,e,function(t){return s=t})||s,m(a))return new r(function(e,n){o.forEach(function(e){a=g(a,function(n){return e.call(t,n)||n},n)}),g(a,e,n)},t);d(a)&&o.unshift(a)}else u("Invalid interceptor of type "+typeof i+", must be a function")}}var n=[Y],o=[];return m(t)||(t=null),e.use=function(t){n.push(t)},e}function Y(t){return(t.client||(vt?z:K))(t)}function Z(t,e){return Object.keys(t).reduce(function(t,n){return p(e)===p(n)?n:t},null)}function tt(t){if(/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t))throw new TypeError("Invalid character in header field name");return c(t)}function et(t){return new r(function(e){var n=new FileReader;n.readAsText(t),n.onload=function(){e(n.result)}})}function nt(t){return 0===t.type.indexOf("text")||-1!==t.type.indexOf("json")}function ot(t){var e=this||{},n=Q(e.$vm);return T(t||{},e.$options,ot.options),ot.interceptors.forEach(function(t){l(t)&&(t=ot.interceptor[t]),d(t)&&n.use(t)}),n(new xt(t)).then(function(t){return t.ok?t:r.reject(t)},function(t){return t instanceof Error&&a(t),r.reject(t)})}function rt(t,e,n,o){var r=this||{},i={};return n=bt({},rt.actions,n),j(n,function(n,u){n=x({url:t,params:bt({},e)},o,n),i[u]=function(){return(r.$http||ot)(it(n,arguments))}}),i}function it(t,e){var n,o=bt({},t),r={};switch(e.length){case 2:r=e[0],n=e[1];break;case 1:/^(POST|PUT|PATCH)$/i.test(o.method)?n=e[0]:r=e[0];break;case 0:break;default:throw"Expected up to 2 arguments [params, body], got "+e.length+" arguments"}return o.body=n,o.params=bt({},o.params,r),o}function ut(t){ut.installed||(i(t),t.url=I,t.http=ot,t.resource=rt,t.Promise=r,Object.defineProperties(t.prototype,{$url:{get:function(){return w(t.url,this,this.$options.url)}},$http:{get:function(){return w(t.http,this,this.$options.http)}},$resource:{get:function(){return t.resource.bind(this)}},$promise:{get:function(){var e=this;return function(n){return new t.Promise(n,e)}}}}))}/*!
 * vue-resource v1.5.1
 * https://github.com/pagekit/vue-resource
 * Released under the MIT License.
 */
var at=2;o.reject=function(t){return new o(function(e,n){n(t)})},o.resolve=function(t){return new o(function(e,n){e(t)})},o.all=function(t){return new o(function(e,n){var r=0,i=[];0===t.length&&e(i);for(var u=0;u<t.length;u+=1)o.resolve(t[u]).then(function(n){return function(o){i[n]=o,(r+=1)===t.length&&e(i)}}(u),n)})},o.race=function(t){return new o(function(e,n){for(var r=0;r<t.length;r+=1)o.resolve(t[r]).then(e,n)})};var st=o.prototype;st.resolve=function(t){var e=this;if(e.state===at){if(t===e)throw new TypeError("Promise settled with itself.");var n=!1;try{var o=t&&t.then;if(null!==t&&"object"==typeof t&&"function"==typeof o)return void o.call(t,function(t){n||e.resolve(t),n=!0},function(t){n||e.reject(t),n=!0})}catch(t){return void(n||e.reject(t))}e.state=0,e.value=t,e.notify()}},st.reject=function(t){var e=this;if(e.state===at){if(t===e)throw new TypeError("Promise settled with itself.");e.state=1,e.value=t,e.notify()}},st.notify=function(){var t=this;s(function(){if(t.state!==at)for(;t.deferred.length;){var e=t.deferred.shift(),n=e[0],o=e[1],r=e[2],i=e[3];try{0===t.state?r("function"==typeof n?n.call(void 0,t.value):t.value):1===t.state&&("function"==typeof o?r(o.call(void 0,t.value)):i(t.value))}catch(t){i(t)}}})},st.then=function(t,e){var n=this;return new o(function(o,r){n.deferred.push([t,e,o,r]),n.notify()})},st.catch=function(t){return this.then(void 0,t)},"undefined"==typeof Promise&&(window.Promise=o),r.all=function(t,e){return new r(Promise.all(t),e)},r.resolve=function(t,e){return new r(Promise.resolve(t),e)},r.reject=function(t,e){return new r(Promise.reject(t),e)},r.race=function(t,e){return new r(Promise.race(t),e)};var ct=r.prototype;ct.bind=function(t){return this.context=t,this},ct.then=function(t,e){return t&&t.bind&&this.context&&(t=t.bind(this.context)),e&&e.bind&&this.context&&(e=e.bind(this.context)),new r(this.promise.then(t,e),this.context)},ct.catch=function(t){return t&&t.bind&&this.context&&(t=t.bind(this.context)),new r(this.promise.catch(t),this.context)},ct.finally=function(t){return this.then(function(e){return t.call(this),e},function(e){return t.call(this),Promise.reject(e)})};var ft,pt={},ht=pt.hasOwnProperty,lt=[],dt=lt.slice,mt=!1,vt="undefined"!=typeof window,yt=Array.isArray,bt=Object.assign||E;I.options={url:"",root:null,params:{}},I.transform={template:_,query:C,root:P},I.transforms=["template","query","root"],I.params=function(t){var e=[],n=encodeURIComponent;return e.add=function(t,e){d(e)&&(e=e()),null===e&&(e=""),this.push(n(t)+"="+n(e))},B(e,t),e.join("&").replace(/%20/g,"+")},I.parse=function(t){var e=document.createElement("a");return document.documentMode&&(e.href=t,t=e.href),e.href=t,{href:e.href,protocol:e.protocol?e.protocol.replace(/:$/,""):"",port:e.port,host:e.host,hostname:e.hostname,pathname:"/"===e.pathname.charAt(0)?e.pathname:"/"+e.pathname,search:e.search?e.search.replace(/^\?/,""):"",hash:e.hash?e.hash.replace(/^#/,""):""}};var gt=vt&&"withCredentials"in new XMLHttpRequest,wt=function(t){var e=this;this.map={},j(t,function(t,n){return e.append(n,t)})};wt.prototype.has=function(t){return null!==Z(this.map,t)},wt.prototype.get=function(t){var e=this.map[Z(this.map,t)];return e?e.join():null},wt.prototype.getAll=function(t){return this.map[Z(this.map,t)]||[]},wt.prototype.set=function(t,e){this.map[tt(Z(this.map,t)||t)]=[c(e)]},wt.prototype.append=function(t,e){var n=this.map[Z(this.map,t)];n?n.push(c(e)):this.set(t,e)},wt.prototype.delete=function(t){delete this.map[Z(this.map,t)]},wt.prototype.deleteAll=function(){this.map={}},wt.prototype.forEach=function(t,e){var n=this;j(this.map,function(o,r){j(o,function(o){return t.call(e,o,r,n)})})};var jt=function(t,e){var n=e.url,o=e.headers,r=e.status,i=e.statusText;this.url=n,this.ok=r>=200&&r<300,this.status=r||0,this.statusText=i||"",this.headers=new wt(o),this.body=t,l(t)?this.bodyText=t:y(t)&&(this.bodyBlob=t,nt(t)&&(this.bodyText=et(t)))};jt.prototype.blob=function(){return g(this.bodyBlob)},jt.prototype.text=function(){return g(this.bodyText)},jt.prototype.json=function(){return g(this.text(),function(t){return JSON.parse(t)})},Object.defineProperty(jt.prototype,"data",{get:function(){return this.body},set:function(t){this.body=t}});var xt=function(t){this.body=null,this.params={},bt(this,t,{method:h(t.method||"GET")}),this.headers instanceof wt||(this.headers=new wt(this.headers))};xt.prototype.getUrl=function(){return I(this)},xt.prototype.getBody=function(){return this.body},xt.prototype.respondWith=function(t,e){return new jt(t,bt(e||{},{url:this.getUrl()}))};var Tt={Accept:"application/json, text/plain, */*"},Et={"Content-Type":"application/json;charset=utf-8"};ot.options={},ot.headers={put:Et,post:Et,patch:Et,delete:Et,common:Tt,custom:{}},ot.interceptor={before:X,method:G,jsonp:W,json:D,form:F,header:V,cors:q},ot.interceptors=["before","method","jsonp","json","form","header","cors"],["get","delete","head","jsonp"].forEach(function(t){ot[t]=function(e,n){return this(bt(n||{},{url:e,method:t}))}}),["post","put","patch"].forEach(function(t){ot[t]=function(e,n,o){return this(bt(o||{},{url:e,method:t,body:n}))}}),rt.actions={get:{method:"GET"},save:{method:"POST"},query:{method:"GET"},update:{method:"PUT"},remove:{method:"DELETE"},delete:{method:"DELETE"}},"undefined"!=typeof window&&window.Vue&&window.Vue.use(ut),e.a=ut},function(t,e){t.exports=function(t,e,n,o){var r,i=t=t||{},u=typeof t.default;"object"!==u&&"function"!==u||(r=t,i=t.default);var a="function"==typeof i?i.options:i;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),n&&(a._scopeId=n),o){var s=Object.create(a.computed||null);Object.keys(o).forEach(function(t){var e=o[t];s[t]=function(){return e}}),a.computed=s}return{esModule:r,exports:i,options:a}}},,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},mounted:function(){},beforeDestroy:function(){},methods:{}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=n(1),i=n.n(r),u=n(2),a=n(5),s=n(4),c=n(7),f=n.n(c),p=n(8),h=n(6);n.n(h);o.default.use(u.a),o.default.use(i.a),o.default.use(p.a);var l={mode:"hash",routes:a.a,base:"./"},d=new u.a(l);d.beforeEach(function(t,e,n){i.a.LoadingBar.start(),s.a.title(t.meta.title),n()}),d.afterEach(function(t,e,n){i.a.LoadingBar.finish(),window.scrollTo(0,0)}),new o.default({el:"#app",router:d,render:function(t){return t(f.a)}})},,function(t,e){},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("router-view")],1)},staticRenderFns:[]},t.exports.render._withStripped=!0},,,,function(t,e){}],[12]);