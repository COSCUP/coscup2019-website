(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{513:function(t,e,o){var content=o(522);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("77ea598c",content,!0,{sourceMap:!1})},514:function(t,e,o){var content=o(524);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("6e0cb133",content,!0,{sourceMap:!1})},516:function(t,e,o){"use strict";o(113);var n,r=o(44),c=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return c(e,t),e}(r.Vue),f=(o(521),o(8)),component=Object(f.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"card"},[this._t("default")],2)},[],!1,null,"b006d4d6",null);e.a=component.exports},517:function(t,e,o){var n=o(12),r=o(45),c=o(25),l=o(518),f="["+l+"]",d=RegExp("^"+f+f+"*"),h=RegExp(f+f+"*$"),y=function(t,e,o){var r={},f=c(function(){return!!l[t]()||"​"!="​"[t]()}),d=r[t]=f?e(v):l[t];o&&(r[o]=d),n(n.P+n.F*f,"String",r)},v=y.trim=function(t,e){return t=String(r(t)),1&e&&(t=t.replace(d,"")),2&e&&(t=t.replace(h,"")),t};t.exports=y},518:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},519:function(t,e,o){"use strict";var n=o(11),r=o(39),c=o(46),l=o(167),f=o(92),d=o(25),h=o(66).f,y=o(93).f,v=o(22).f,m=o(517).trim,_=n.Number,x=_,w=_.prototype,O="Number"==c(o(114)(w)),N="trim"in String.prototype,j=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var o,n,r,c=(e=N?e.trim():m(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(o=e.charCodeAt(2))||120===o)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+e}for(var code,l=e.slice(2),i=0,d=l.length;i<d;i++)if((code=l.charCodeAt(i))<48||code>r)return NaN;return parseInt(l,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof _&&(O?d(function(){w.valueOf.call(o)}):"Number"!=c(o))?l(new x(j(e)),o,_):j(e)};for(var C,P=o(18)?h(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;P.length>I;I++)r(x,C=P[I])&&!r(_,C)&&v(_,C,y(x,C));_.prototype=w,w.constructor=_,o(26)(n,"Number",_)}},520:function(t,e,o){"use strict";o(519),o(51),o(17),o(10);var n,r=o(24),c=(o(113),o(44)),l=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),f=function(t,e,o,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,o,l):n(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l},d=function(t,e){var o="function"==typeof Symbol&&t[Symbol.iterator];if(!o)return t;var n,r,i=o.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(n=i.next()).done;)c.push(n.value)}catch(t){r={error:t}}finally{try{n&&!n.done&&(o=i.return)&&o.call(i)}finally{if(r)throw r.error}}return c},h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),Object.defineProperty(e.prototype,"cssRatio",{get:function(){var t=this.$props.ratio,e=d(t.split(":"),2),o=e[0],n=e[1];return 100*Number(void 0===n?1:n)/Number(o)+"%"},enumerable:!0,configurable:!0}),e=f([Object(c.Component)({inheritAttrs:!1,props:{ratio:{type:String,required:!0}}})],e)}(c.Vue),y=(o(523),o(8)),component=Object(y.a)(h,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"ratio-box",style:{"--ratio":this.cssRatio}},[e("div",this._b({staticClass:"content"},"div",this.$attrs,!1),[this._t("default")],2)])},[],!1,null,"aea6bdd8",null);e.a=component.exports},521:function(t,e,o){"use strict";var n=o(513);o.n(n).a},522:function(t,e,o){(t.exports=o(20)(!1)).push([t.i,".card[data-v-b006d4d6]{background-color:hsla(0,0%,100%,.9);box-shadow:0 4px 48px rgba(0,0,0,.1);margin:0 1em 2em;padding:2em}",""])},523:function(t,e,o){"use strict";var n=o(514);o.n(n).a},524:function(t,e,o){(t.exports=o(20)(!1)).push([t.i,'.ratio-box[data-v-aea6bdd8]{width:100%;position:relative}.ratio-box[data-v-aea6bdd8]:before{content:"";display:block;padding-top:100%;padding-top:var(--ratio)}.ratio-box>.content[data-v-aea6bdd8]{position:absolute;top:0;left:0;bottom:0;right:0}',""])},528:function(t,e,o){var content=o(539);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(21).default)("3cb62170",content,!0,{sourceMap:!1})},538:function(t,e,o){"use strict";var n=o(528);o.n(n).a},539:function(t,e,o){(t.exports=o(20)(!1)).push([t.i,"main.cohosts[data-v-7c0180c6]{width:100%;display:flex;flex-direction:column;align-items:center;padding-top:2em}main.cohosts div.cohosts[data-v-7c0180c6]{display:flex;flex-wrap:nowrap;flex-direction:column}.cohosts .cohost[data-v-7c0180c6]{display:flex;flex-direction:column;padding:0;margin:.5em 0}.cohosts .cohost .description[data-v-7c0180c6]{flex-basis:80%;padding:0}.cohosts .cohost .description h1[data-v-7c0180c6]{font-size:1.2em}.cohosts .cohost .logo[data-v-7c0180c6]{flex-basis:20%}.cohosts .cohost .logo img[data-v-7c0180c6]{max-height:100%;max-width:100%;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0}@media (min-width:840px){.cohosts .cohost[data-v-7c0180c6]{flex-direction:row;padding:1em;transition:box-shadow .3s cubic-bezier(.4,0,.2,1),transform .3s cubic-bezier(.4,0,.2,1)}.cohosts .cohost[data-v-7c0180c6]:hover{box-shadow:0 2px 24px rgba(0,0,0,.1);transform:translateY(-2px)}.cohosts .cohost .description[data-v-7c0180c6]{padding:0 1em}}",""])},563:function(t,e,o){"use strict";o.r(e);o(51),o(17),o(10),o(7);var n,r=o(24),c=(o(113),o(44)),l=o(65),f=o(117),d=o(516),h=o(520),y=(n=function(t,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,b){t.__proto__=b}||function(t,b){for(var p in b)b.hasOwnProperty(p)&&(t[p]=b[p])})(t,b)},function(t,b){function e(){this.constructor=t}n(t,b),t.prototype=null===b?Object.create(b):(e.prototype=b.prototype,new e)}),v=function(t,e,o,desc){var n,c=arguments.length,l=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,o):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(r.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(c<3?n(l):c>3?n(e,o,l):n(e,o))||l);return c>3&&l&&Object.defineProperty(e,o,l),l},m=function(t,e,o,n){return new(o||(o=Promise))(function(r,c){function l(t){try{d(n.next(t))}catch(t){c(t)}}function f(t){try{d(n.throw(t))}catch(t){c(t)}}function d(t){t.done?r(t.value):new o(function(e){e(t.value)}).then(l,f)}d((n=n.apply(t,e||[])).next())})},_=function(t,body){var e,o,n,g,r={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return g={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(g[Symbol.iterator]=function(){return this}),g;function c(c){return function(l){return function(c){if(e)throw new TypeError("Generator is already executing.");for(;r;)try{if(e=1,o&&(n=2&c[0]?o.return:c[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,c[1])).done)return n;switch(o=0,n&&(c=[2&c[0],n.value]),c[0]){case 0:case 1:n=c;break;case 4:return r.label++,{value:c[1],done:!1};case 5:r.label++,o=c[1],c=[0];continue;case 7:c=r.ops.pop(),r.trys.pop();continue;default:if(!(n=(n=r.trys).length>0&&n[n.length-1])&&(6===c[0]||2===c[0])){r=0;continue}if(3===c[0]&&(!n||c[1]>n[0]&&c[1]<n[3])){r.label=c[1];break}if(6===c[0]&&r.label<n[1]){r.label=n[1],n=c;break}if(n&&r.label<n[2]){r.label=n[2],r.ops.push(c);break}n[2]&&r.ops.pop(),r.trys.pop();continue}c=body.call(t,r)}catch(t){c=[6,t],o=0}finally{e=n=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}},x=Object(l.namespace)(f.name,l.Getter),w=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),e.prototype.mounted=function(){this.$store.dispatch("clientsFirstFetch",this.$options.fetch)},Object.defineProperty(e.prototype,"title",{get:function(){return this.$t("pages.cohosts")+" | COSCUP 2019 | Conference for Open Source Coders, Users, and Promoters"},enumerable:!0,configurable:!0}),e.prototype.head=function(){return{title:this.title,meta:[{hid:"og:description",property:"og:description",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:url",property:"og:url",content:"https://coscup.org/2019"+this.$route.path}]}},e.prototype.fetch=function(t){var e=t.store.dispatch;return m(this,void 0,void 0,function(){return _(this,function(t){switch(t.label){case 0:return[4,e(f.name+"/fetchData")];case 1:return t.sent(),[2]}})})},e.prototype.getParagraphs=function(article){return article.split(/\r\n?|\n\r?/g)},v([x("byLevel")],e.prototype,"cohostsByLevel",void 0),e=v([Object(c.Component)({components:{Card:d.a,RatioBox:h.a}})],e)}(c.Vue),O=(o(538),o(8)),component=Object(O.a)(w,function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"cohosts"},t._l(t.cohostsByLevel,function(e){return o("Card",{key:e.title,staticClass:"level container"},[o("h1",[t._v(t._s(e.title))]),t._v(" "),o("div",{staticClass:"cohosts"},t._l(e.cohosts,function(e){return o("div",{key:e.name,staticClass:"cohost"},[o("a",{staticClass:"logo",attrs:{href:e.link,title:e.name,target:"_blank"}},[o("RatioBox",{staticStyle:{"text-align":"center"},attrs:{ratio:"1:1"}},[o("img",{attrs:{src:e.image,alt:""}})])],1),t._v(" "),o("div",{staticClass:"description"},[o("h1",[o("a",{attrs:{href:e.link,title:e.name,target:"_blank"}},[t._v(t._s(e.name))])]),t._v(" "),o("article",t._l(t.getParagraphs(e.intro),function(e,n){return o("p",{key:n},[t._v("\n              "+t._s(e)+"\n            ")])}),0)])])}),0)])}),1)},[],!1,null,"7c0180c6",null);e.default=component.exports}}]);