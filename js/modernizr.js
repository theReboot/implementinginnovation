/*! modernizr 3.0.0-alpha.3 (Custom Build) | MIT *
 * http://v3.modernizr.com/download/#-cssvhunit-svg !*/
!function(e,n){function t(e){var n=d.className,t=Modernizr._config.classPrefix||"";if(Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),d.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,s,i,a,f;for(var d in l){if(e=[],n=l[d],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)a=e[i],f=a.split("."),1===f.length?Modernizr[f[0]]=s:(!Modernizr[f[0]]||Modernizr[f[0]]instanceof Boolean||(Modernizr[f[0]]=new Boolean(Modernizr[f[0]])),Modernizr[f[0]][f[1]]=s),r.push((s?"":"no-")+f.join("-"))}}function i(){var e=n.body;return e||(e=c("body"),e.fake=!0),e}function a(e,n,t,o){var s,a,r,l,f="modernizr",u=c("div"),p=i();if(parseInt(t,10))for(;t--;)r=c("div"),r.id=o?o[t]:f+(t+1),u.appendChild(r);return s=["&#173;",'<style id="s',f,'">',e,"</style>"].join(""),u.id=f,(p.fake?p:u).innerHTML+=s,p.appendChild(u),p.fake&&(p.style.background="",p.style.overflow="hidden",l=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),a=n(u,e),p.fake?(p.parentNode.removeChild(p),d.style.overflow=l,d.offsetHeight):u.parentNode.removeChild(u),!!a}var r=[],l=[],f={_version:"3.0.0-alpha.3",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){l.push({name:e,fn:n,options:t})},addAsyncTest:function(e){l.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=f,Modernizr=new Modernizr,Modernizr.addTest("svg",!!n.createElementNS&&!!n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var d=n.documentElement,c=function(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):n.createElement.apply(n,arguments)},u=f.testStyles=a;u("#modernizr { height: 50vh; }",function(n){var t=parseInt(e.innerHeight/2,10),o=parseInt((e.getComputedStyle?getComputedStyle(n,null):n.currentStyle).height,10);Modernizr.addTest("cssvhunit",o==t)}),s(),t(r),delete f.addTest,delete f.addAsyncTest;for(var p=0;p<Modernizr._q.length;p++)Modernizr._q[p]();e.Modernizr=Modernizr}(window,document);