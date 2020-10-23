(this.webpackJsonpmidterm=this.webpackJsonpmidterm||[]).push([[0],{35:function(e,t,a){e.exports=a(77)},40:function(e,t,a){},41:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(33),o=a.n(l),r=(a(40),a(9)),i=a(1),s=(a(41),a(3)),u=a(13),m=a.n(u),d=a(14);var g=function(){return c.a.createElement("div",{className:"Loading"},c.a.createElement("div",{className:"LoadingRing"},c.a.createElement("div",{className:"LoadingMask"})),c.a.createElement("h3",{className:"centered"},"Loading..."))};var h=function(e){var t=e.name,a=e.changeCountry;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"Title"},c.a.createElement(r.b,{to:"./",onClick:function(){a("")}},c.a.createElement("h1",null,"COVID ",c.a.createElement("span",null,"|")," Headline")),c.a.createElement("nav",null,c.a.createElement(r.b,{to:"./?country=US",onClick:function(){a("US")}},"US"),c.a.createElement(r.b,{to:"./?country=GB",onClick:function(){a("GB")}},"UK"),c.a.createElement(r.b,{to:"./?country=CN",onClick:function(){a("CN")}},"China"),c.a.createElement(r.b,{to:"./?country=RU",onClick:function(){a("RU")}},"Russia"),c.a.createElement(r.b,{to:"./?country=JP",onClick:function(){a("JP")}},"Japan"))),t?c.a.createElement("h2",{className:"Subtitle"},"Latest COVID\u201119 Statistics and Top Headlines in"," ",c.a.createElement("span",null,t)):c.a.createElement("h2",{className:"Subtitle"},"Latest COVID\u201119 Statistics and Top Headlines"))};var f=function(e){var t=e.data,a=e.locale;if(t){var n=t.latest_data.deaths/t.latest_data.confirmed,l=t.latest_data.recovered/t.latest_data.confirmed,o=1-n-l;return c.a.createElement("section",{className:"Stats"},c.a.createElement("div",{className:"NumberRow"},c.a.createElement("div",null,c.a.createElement("h4",null,"Cases"),c.a.createElement("p",{className:"Total"},t.latest_data.confirmed.toLocaleString(a)," Total"),t.today.confirmed||t.today.deaths?c.a.createElement("p",{className:"Today"},"+",t.today.confirmed.toLocaleString(a)," Today"):null),c.a.createElement("div",null,c.a.createElement("h4",null,"Deaths"),c.a.createElement("p",{className:"Total"},t.latest_data.deaths.toLocaleString(a)," Total"),t.today.confirmed||t.today.deaths?c.a.createElement("p",{className:"Today"},"+",t.today.deaths.toLocaleString(a)," Today"):null)),c.a.createElement("div",{className:"PercentageRow"},c.a.createElement("div",null,c.a.createElement("h4",null,"Active"),c.a.createElement("p",null,o.toLocaleString(a,{style:"percent",maximumFractionDigits:2}))),c.a.createElement("div",null,c.a.createElement("h4",null,"Fatality"),c.a.createElement("p",null,n.toLocaleString(a,{style:"percent",maximumFractionDigits:2}))),c.a.createElement("div",null,c.a.createElement("h4",null,"Recovered"),c.a.createElement("p",null,l.toLocaleString(a,{style:"percent",maximumFractionDigits:2})))),c.a.createElement("p",{className:"UpdatedAt"},"Last updated at"," ",c.a.createElement("span",null,new Date(t.updated_at).toLocaleString(a,{year:"numeric",month:"numeric",day:"numeric",hour:"numeric",minute:"numeric",timeZoneName:"short"}))))}return null};var E=function(e){var t=e.data,a=e.locale;return t?c.a.createElement("a",{href:t.url,className:"Article"},c.a.createElement("div",{className:"ArticleInfo".concat(t.urlToImage?"":" no-image")},c.a.createElement("h4",null,t.title),t.description&&!t.description.includes("\ufffd")?c.a.createElement("p",null,t.description):null,c.a.createElement("p",{className:"ArticleDate"},new Date(t.publishedAt).toLocaleDateString(a,{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric"}))),t.urlToImage?c.a.createElement(c.a.Fragment,null,c.a.createElement("img",{className:"ArticleImg",src:t.urlToImage,alt:t.title,onLoad:function(e){e.target.parentNode.lastChild.style.backgroundImage||(e.target.parentNode.firstChild.classList.add("no-image"),e.target.parentNode.lastChild.style.display="none",e.target.style.display="none")},onError:function(e){e.target.parentNode.firstChild.classList.add("no-image"),e.target.parentNode.lastChild.style.display="none",e.target.style.display="none"}}),c.a.createElement("div",{className:"ArticleImgContainer",style:{backgroundImage:"url(".concat(t.urlToImage,")")}})):null):null};var p=function(){var e=Object(i.f)(),t=Object(n.useState)(new URLSearchParams(e.location.search).get("country")||""),a=Object(s.a)(t,2),l=a[0],o=a[1],r=Object(n.useState)(null),u=Object(s.a)(r,2),p=u[0],y=u[1],b=Object(n.useState)(!1),v=Object(s.a)(b,2),S=v[0],N=v[1],O=Object(n.useState)(null),C=Object(s.a)(O,2),j=C[0],L=C[1],w=Object(n.useState)(null),T=Object(s.a)(w,2),U=T[0],k=T[1],A=Object(n.useState)([]),F=Object(s.a)(A,2),I=F[0],R=F[1],D=Object(n.useState)(!1),P=Object(s.a)(D,2),_=P[0],B=P[1],J=Object(n.useState)(!1),x=Object(s.a)(J,2),H=x[0],M=x[1],G=Object(n.useState)(!1),K=Object(s.a)(G,2),V=K[0],W=K[1],z=Object(n.useState)(!1),Y=Object(s.a)(z,2),Z=Y[0],$=Y[1],q=Object(n.useState)(!1),Q=Object(s.a)(q,2),X=Q[0],ee=Q[1],te=Object(n.useState)(null),ae=Object(s.a)(te,2),ne=ae[0],ce=ae[1],le=Object(n.useState)(!1),oe=Object(s.a)(le,2),re=oe[0],ie=oe[1];function se(){var e=d.getCountryByAlpha2(l.toUpperCase());return e&&e.languages&&e.languages[0]||void 0}return Object(n.useEffect)((function(){function e(){L((function(e){return e&&new Date-e>=18e5?null:e}))}document.addEventListener("scroll",(function(){document.documentElement.scrollHeight-document.documentElement.clientHeight-document.documentElement.scrollTop<5&&(console.log("load!"),M(!0)),e()})),document.addEventListener("mousemove",(function(){e()})),document.addEventListener("visibilitychange",(function(){document.hidden||(console.log("visibility not hidden!"),e())})),window.addEventListener("focus",(function(){console.log("window focus!"),e()}))}),[]),Object(n.useEffect)((function(){if(y(null),N(!1),L(null),k(null),R([]),B(!1),M(!1),W(!1),$(!1),ee(!1),ce(null),ie(!1),!l){var t=new URLSearchParams(e.location.search).get("country");if(t)return void o(t);m.a.get("https://ipapi.co/json").then((function(e){console.log(e.data.country_code),o(e.data.country_code)})).catch((function(e){console.log(e),o("US")}))}}),[l,e]),Object(n.useEffect)((function(){l&&!j&&(clearTimeout(U),m.a.get("https://corona-api.com/countries/".concat(l)).then((function(e){var t=e.data.data;console.log(t),delete t.timeline,y(t);var a=Math.log2(t.latest_data.deaths/t.population*1e6+1),n=Math.max(140-13.5*a,0);document.documentElement.style.setProperty("--light-accent-color","hsl(".concat(n,", 76%, 60%)")),document.documentElement.style.setProperty("--dark-accent-color","hsl(".concat(n,", 66%, 45%)"))})).catch((function(e){console.warn(e),p||(document.documentElement.style.setProperty("--light-accent-color","#eee"),document.documentElement.style.setProperty("--dark-accent-color","black"))})).finally((function(){N(!0),L(new Date),k(setTimeout((function(){console.log("auto-refresh"),L(null)}),18e5))})))}),[l,e,j]),Object(n.useEffect)((function(){if(l&&(H||I.length<1)&&!Z&&!V){W(!0),M(!1);var e=Math.ceil(I.length/20)+1;console.log(e),m.a.get("https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=".concat(l,"&pageSize=").concat(20,"&page=").concat(e,"&apiKey=").concat("53829b214ce547fcb3d42c19d97038f2"),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){console.log(e.data.articles),(e.data.articles.length<20||e.data.totalResults<=I.length+e.data.articles.length)&&$(!0),R(I.concat(e.data.articles))})).catch((function(e){console.warn(e),$(!0)})).finally((function(){B(!0),W(!1)}))}else M(!1)}),[l,e,H]),Object(n.useEffect)((function(){setTimeout((function(){S&&_&&document.body.classList.add("Loaded"),ie(S&&_)}),0)}),[S,_]),Object(n.useEffect)((function(){if(re){var e=!p&&l&&!["US","GB","CN","RU","JP"].includes(l.toUpperCase())&&re;e&&null===ne&&ce(5),ee(e)}}),[p,l,re,ne]),Object(n.useEffect)((function(){X&&5===ne&&(setTimeout((function(){setInterval((function(){ce((function(e){return e>1?e-1:1}))}),1e3)}),500),setTimeout((function(){document.body.classList.remove("Loaded"),setTimeout((function(){e.push("./"),o("")}),1e3)}),5e3))}),[X,ne,e]),c.a.createElement(c.a.Fragment,null,c.a.createElement(g,null),re?c.a.createElement(c.a.Fragment,null,c.a.createElement(h,{name:p?l&&d.getCountryNameByAlpha2(l.toUpperCase())||p.name:"",changeCountry:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";document.body.classList.remove("Loaded"),setTimeout((function(){e.push(t?"./?country=".concat(t):"./"),o("")}),1e3)}}),c.a.createElement("main",null,p?c.a.createElement(c.a.Fragment,null,c.a.createElement(f,{data:p,locale:void 0}),c.a.createElement("section",{className:"Articles"},I.map((function(e,t){return c.a.createElement(E,{key:t,data:e,locale:se()})})),I.length>0&&Z?c.a.createElement("h3",{className:"centered AllLoaded"},"All Top Headlines Loaded"):I.length>0&&V?c.a.createElement("h3",{className:"centered AllLoaded"},"Loading More Headlines\u2026"):null)):X?c.a.createElement("h3",{className:"centered"},"No Statistics Found For"," ",l&&d.getCountryNameByAlpha2(l.toUpperCase())||l.toUpperCase(),". Redirecting in ",ne," Seconds."):c.a.createElement("h3",{className:"centered"},"No Statistics Found For"," ",["United States","United Kingdom","China","Russian Federation","Japan"][["US","GB","CN","RU","JP"].indexOf(l.toUpperCase())]||l,". Please Check Your Connection."))):null)};var y=function(){return c.a.createElement(r.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/"},c.a.createElement(p,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.6032d00e.chunk.js.map