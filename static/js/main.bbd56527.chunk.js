(this["webpackJsonptiktok-clone"]=this["webpackJsonptiktok-clone"]||[]).push([[0],{24:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),i=n(13),s=n.n(i),a=(n(37),n(23)),u=n.n(a),o=n(26),l=n(10),d=(n(24),n(63)),j=n(29),p=n.n(j),b=n(28),f=n.n(b);var O=function(e){var t=e.source,n=Object(r.useState)(!1),i=Object(l.a)(n,2),s=i[0],a=(i[1],Object(r.useState)(!1)),u=Object(l.a)(a,2),o=u[0],j=u[1],b=Object(r.useState)(),O=Object(l.a)(b,2),h=O[0],v=O[1],x=Object(r.useRef)(null),g=Object(r.useRef)(null),m=Object(r.useRef)(!1),y=Object(r.useRef)(),w=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0px",n=Object(r.useState)(!1),c=Object(l.a)(n,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){var n=new IntersectionObserver((function(e){var t=Object(l.a)(e,1)[0];s(t.isIntersecting)}),{rootMargin:t});return e.current&&n.observe(e.current),function(){n.unobserve(e.current)}}),[]),i}(y,"100px");return console.log(s),Object(r.useEffect)((function(){!0===w?(x.current.play(),g.current.play(),x.current.currentTime=0,g.current.currentTime=0,m.current.style.display="none"):(x.current.pause(),g.current.pause(),x.current.currentTime=0,g.current.currentTime=0)})),Object(c.jsxs)("div",{id:"video-container",ref:y,children:[Object(c.jsx)("img",{ref:m,id:"play-btn",src:"./play.png",alt:"play"}),Object(c.jsx)("h1",{id:"logo",children:" F"}),Object(c.jsxs)("div",{id:"ld",children:[Object(c.jsx)(d.a,{id:"icons",onClick:function(){!1===o?(j(!0),v(1)):(j(!1),v(""),console.log(o))},children:o?Object(c.jsx)(f.a,{style:{fontSize:"40px"}}):Object(c.jsx)(p.a,{style:{fontSize:"40px"}})}),Object(c.jsx)("span",{id:"like-count",children:h})]}),t?Object(c.jsx)("video",{ref:x,onClick:function(){!1===x.current.paused&&!1===g.current.paused?(x.current.pause(),g.current.pause(),m.current.style.display="block"):(x.current.play(),g.current.play(),m.current.style.display="none")},src:t,type:"video/mp4"}):Object(c.jsx)("div",{children:"Loading..."}),t?Object(c.jsx)("audio",{ref:g,children:Object(c.jsx)("source",{src:t&&t.slice(0,37)+"audio.mp4"})}):console.log("audio element is loading")]})},h=n(62),v=n(61);n(44);h.a.use([v.a]);var x=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)([{video:[],author:[],title:[]}]),a=Object(l.a)(s,2),d=a[0],j=a[1];return Object(r.useEffect)((function(){new h.a(".swiper-container",{loop:!0,spaceBetween:830,direction:"vertical",slidesPerView:1,speed:100,preloadImages:!0,observer:!0,observeParents:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0})}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t,n,c,r,s,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/tiktokcringe/.json");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=[],r=[],s=[],a=n.data.children;try{for(o=5;o<a.length;o++)null!==a[o].data.media&&c.push(a[o].data.media),r.push(a[o].data.author),s.push(a[o].data.title);j([{video:c,author:r,title:s}]),i(!0)}catch(u){console.log(u)}case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{id:"video-scroll",children:d.map((function(e){var t=e.video,r=e.author,i=e.title;return Object(c.jsx)("div",{className:"swiper-container",children:Object(c.jsx)("div",{className:"swiper-wrapper",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"swiper-slide",children:[n?Object(c.jsx)(O,{className:"lazy",source:e.reddit_video.fallback_url}):Object(c.jsx)("p",{children:"Loading..."}),Object(c.jsxs)("p",{id:"author",children:["@",r[t]]}),Object(c.jsxs)("p",{id:"title",children:[i[t].length<50?i[t]:i[t].substring(0,50)+"..."," "]})]})}))})})}))})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(c.jsx)(x,{}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.bbd56527.chunk.js.map