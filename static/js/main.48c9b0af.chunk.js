(this["webpackJsonptiktok-clone"]=this["webpackJsonptiktok-clone"]||[]).push([[0],{24:function(e,t,n){},37:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(5),r=n(0),i=n(13),s=n.n(i),a=(n(37),n(23)),u=n.n(a),o=n(26),l=n(9),d=(n(24),n(63)),j=n(29),b=n.n(j),p=n(28),f=n.n(p);var O=function(e){var t=e.source,n=Object(r.useState)(!1),i=Object(l.a)(n,2),s=i[0],a=i[1],u=Object(r.useState)(),o=Object(l.a)(u,2),j=o[0],p=o[1],O=Object(r.useState)(!1),h=Object(l.a)(O,2),v=h[0],x=h[1];console.log(v);var g=Object(r.useRef)(),m=Object(r.useRef)(!1),y=Object(r.useRef)(!1),w=Object(r.useRef)(),k=(Object(r.useRef)(null),function(e,t){var n=Object(r.useState)(e),c=Object(l.a)(n,2),i=c[0],s=c[1];return Object(r.useEffect)((function(){var n=setTimeout((function(){s(e)}),t);return function(){clearTimeout(n)}}),[e,t]),i}(function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){var t=new IntersectionObserver((function(e){var t=Object(l.a)(e,1)[0];i(t.isIntersecting)}));return e.current&&t.observe(e.current),function(){t.unobserve(e.current)}}),[]),c}(w),500));return Object(r.useEffect)((function(){!0===k&&!0===v&&(m.current.currentTime=g.current.currentTime,g.current.play(),m.current.play(),y.current.style.display="none")})),Object(c.jsxs)("div",{id:"video-container",ref:w,children:[Object(c.jsx)("img",{ref:y,id:"play-btn",src:"./play.png",alt:"play"}),Object(c.jsx)("h1",{id:"logo",children:" F"}),Object(c.jsxs)("div",{id:"ld",children:[Object(c.jsx)(d.a,{id:"icons",onClick:function(){!1===s?(a(!0),p(1)):(a(!1),p(""),console.log(s))},children:s?Object(c.jsx)(f.a,{style:{fontSize:"40px"}}):Object(c.jsx)(b.a,{style:{fontSize:"40px"}})}),Object(c.jsx)("span",{id:"like-count",children:j})]}),k?Object(c.jsx)("video",{ref:g,onClick:function(){!1===g.current.paused&&!1===m.current.paused?(g.current.pause(),m.current.pause(),y.current.style.display="block"):(g.current.play(),m.current.play(),y.current.style.display="none")},width:"450",height:"900",src:t.substring(0,32)+"DASH_480.mp4?source=fallback",type:"video/mp4",preload:"auto",onCanPlayThrough:function(e){x(!0)},playsinline:!0}):Object(c.jsx)("div",{children:"Loading..."}),k?Object(c.jsx)("audio",{ref:m,children:Object(c.jsx)("source",{src:t&&t.slice(0,37)+"audio.mp4"})}):console.log("audio element is loading")]})},h=n(62),v=n(61);n(44);h.a.use([v.a]);var x=function(){var e=Object(r.useState)(null),t=Object(l.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)([{video:[],author:[],title:[]}]),a=Object(l.a)(s,2),d=a[0],j=a[1];return Object(r.useEffect)((function(){new h.a(".swiper-container",{loop:!0,spaceBetween:830,direction:"vertical",slidesPerView:1,speed:100,preloadImages:!0,observer:!0,observeParents:!0,watchSlidesVisibility:!0,watchSlidesProgress:!0})}),[]),Object(r.useEffect)((function(){function e(){return(e=Object(o.a)(u.a.mark((function e(){var t,n,c,r,s,a,o;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.reddit.com/r/tiktokcringe/.json?limit=100");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,c=[],r=[],s=[],a=n.data.children;try{for(o=7;o<a.length;o++)null!==a[o].data.media&&a[o].data.secure_media.reddit_video.bitrate_kbps<2500&&a[o].data.secure_media.reddit_video.duration<45&&(c.push(a[o].data.media),r.push(a[o].data.author),s.push(a[o].data.title));j([{video:c,author:r,title:s}]),i(!0)}catch(u){console.log(u)}case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{id:"video-scroll",children:d.map((function(e){var t=e.video,r=e.author,i=e.title;return Object(c.jsx)("div",{className:"swiper-container",children:Object(c.jsx)("div",{className:"swiper-wrapper",children:t.map((function(e,t){return Object(c.jsxs)("div",{className:"swiper-slide",children:[n?Object(c.jsx)(O,{className:"lazy",source:e.reddit_video.fallback_url}):Object(c.jsx)("p",{children:"Loading..."}),Object(c.jsxs)("p",{id:"author",children:["@",r[t]]}),Object(c.jsxs)("p",{id:"title",children:[i[t].length<30?i[t]:i[t].substring(0,30)+"..."," "]})]})}))})})}))})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,64)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};s.a.render(Object(c.jsx)(x,{}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.48c9b0af.chunk.js.map