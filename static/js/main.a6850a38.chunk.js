(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{22:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(2),c=n.n(a),s=n(15),i=n.n(s),o=n(4),u=n.n(o),l=n(6),j=n(3),d=n(8),b=(n(22),n(7)),p=n(5),f=function(e){var t=e.currentSong,n=e.isPlaying,a=e.setIsPlaying,c=e.audioRef,s=e.setSongInfo,i=e.songInfo,o=e.songs,d=e.setCurrentSong,f=e.setSongs,h=function(e){var n=o.map((function(e){return e.id===t.id?Object(j.a)(Object(j.a)({},e),{},{active:!0}):Object(j.a)(Object(j.a)({},e),{},{active:!1})}));f(n)},g=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},O=function(){var e=Object(l.a)(u.a.mark((function e(r){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.findIndex((function(e){return e.id===t.id})),"skip-forward"!==r){e.next=5;break}return e.next=4,d(o[(a+1)%o.length]);case 4:h(o[(a+1)%o.length]);case 5:if("skip-back"!==r){e.next=15;break}if((a-1)%o.length!==-1){e.next=12;break}return e.next=9,d(o[o.length-1]);case 9:return h(o[a-1]),n&&c.current.play(),e.abrupt("return");case 12:return e.next=14,d(o[(a-1)%o.length]);case 14:h(o[(a-1)%o.length]);case 15:n&&c.current.play();case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(r.jsxs)("div",{className:"player",children:[Object(r.jsxs)("div",{className:"time-control",children:[Object(r.jsx)("p",{children:g(i.currentTime)}),Object(r.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(t.color[0],", ").concat(t.color[1],")")},className:"track",children:[Object(r.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){c.current.currentTime=e.target.value,s(Object(j.a)(Object(j.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(r.jsx)("div",{style:m,className:"animate-track"})]}),Object(r.jsx)("p",{children:i.duration?g(i.duration):"0:00"})]}),Object(r.jsxs)("div",{className:"play-control",children:[Object(r.jsx)(b.a,{onClick:function(){return O("skip-back")},className:"skip-back",size:"2x",icon:p.a}),Object(r.jsx)(b.a,{onClick:function(){n?(c.current.pause(),a(!n)):(c.current.play(),a(!n))},className:"play",size:"2x",icon:n?p.d:p.e}),Object(r.jsx)(b.a,{onClick:function(){return O("skip-forward")},className:"skip-forward",size:"2x",icon:p.b})]})]})},h=function(e){var t=e.currentSong;return Object(r.jsxs)("div",{className:"song-container",children:[Object(r.jsx)("img",{alt:t.name,src:t.cover}),Object(r.jsx)("h2",{children:t.name}),Object(r.jsx)("h3",{children:t.artist})]})},g=function(e){var t=e.song,n=e.songs,a=e.setCurrentSong,c=e.id,s=e.audioRef,i=e.isPlaying,o=e.setSongs,d=function(){var e=Object(l.a)(u.a.mark((function e(){var t,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.filter((function(e){return e.id===c})),e.next=3,a(t[0]);case 3:r=n.map((function(e){return e.id===c?Object(j.a)(Object(j.a)({},e),{},{active:!0}):Object(j.a)(Object(j.a)({},e),{},{active:!1})})),o(r),i&&s.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsxs)("div",{onClick:d,className:"library-song ".concat(t.active?"selected":""),children:[Object(r.jsx)("img",{alt:t.name,src:t.cover}),Object(r.jsxs)("div",{className:"song-description",children:[Object(r.jsx)("h3",{children:t.name}),Object(r.jsx)("h4",{children:t.artist})]})]})},O=function(e){var t=e.songs,n=e.setCurrentSong,a=e.audioRef,c=e.isPlaying,s=e.setSongs,i=e.libraryStatus;return Object(r.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(r.jsx)("h2",{children:"Library"}),Object(r.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(r.jsx)(g,{song:e,songs:t,setCurrentSong:n,id:e.id,audioRef:a,isPlaying:c,setSongs:s},e.id)}))})]})},m=function(e){var t=e.libraryStatus,n=e.setLibraryStatus;return Object(r.jsxs)("nav",{children:[Object(r.jsx)("h1",{children:"Musics"}),Object(r.jsxs)("button",{onClick:function(){return n(!t)},children:["Library",Object(r.jsx)(b.a,{icon:p.c})]})]})},v=n(9);var x=function(){return[{name:"There and Back",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:"Shopan",id:Object(v.v4)(),active:!0,color:["#C8B1C5","#275564"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10311"},{name:"You and I",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:"melodiesinfonie",id:Object(v.v4)(),active:!1,color:["#C8B1C5","#275564"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10339"},{name:"Frozen Time",cover:"https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",artist:"Kendall Milles",id:Object(v.v4)(),active:!1,color:["#C8B1C5","#275564"],audio:"https://mp3.chillhop.com/serve.php/?mp3=10329"}]};var y=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(x()),n=Object(d.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(c[0]),o=Object(d.a)(i,2),b=o[0],p=o[1],g=Object(a.useState)(!1),v=Object(d.a)(g,2),y=v[0],S=v[1],k=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),C=Object(d.a)(k,2),w=C[0],N=C[1],P=Object(a.useState)(!1),I=Object(d.a)(P,2),T=I[0],M=I[1],R=function(e){var t=e.target.currentTime,n=e.target.duration,r=Math.round(t),a=Math.round(n),c=Math.round(r/a*100);console.log(c),N(Object(j.a)(Object(j.a)({},w),{},{currentTime:t,duration:n,animationPercentage:c}))},B=function(){var t=Object(l.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.findIndex((function(e){return e.id===b.id})),t.next=3,p(c[(n+1)%c.length]);case 3:y&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"App ".concat(T?"library-active":""),children:[Object(r.jsx)(m,{libraryStatus:T,setLibraryStatus:M}),Object(r.jsx)(h,{currentSong:b}),Object(r.jsx)(f,{audioRef:e,isPlaying:y,setIsPlaying:S,currentSong:b,setSongInfo:N,songInfo:w,songs:c,setCurrentSong:p,setSongs:s}),Object(r.jsx)(O,{songs:c,setCurrentSong:p,audioRef:e,isPlaying:y,setSongs:s,libraryStatus:T}),Object(r.jsx)("audio",{onTimeUpdate:R,onLoadedMetadata:R,ref:e,src:b.audio,onEnded:B})]})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.a6850a38.chunk.js.map