(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{30:function(e,a,t){},35:function(e,a,t){e.exports=t.p+"static/media/static-bg.253549d8.jpg"},43:function(e,a,t){e.exports=t(65)},48:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){var n={"./0.jpg":51,"./1.jpg":52,"./2.jpg":53};function c(e){var a=r(e);return t(a)}function r(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=r,e.exports=c,c.id=50},51:function(e,a,t){e.exports=t.p+"static/media/0.aa2aa993.jpg"},52:function(e,a,t){e.exports=t.p+"static/media/1.0af8103e.jpg"},53:function(e,a,t){e.exports=t.p+"static/media/2.578047fd.jpg"},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},64:function(e,a,t){},65:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(18),l=t.n(r),i=t(17),s=(t(48),t(19)),o=t(3),m=(t(49),t(35)),u=t.n(m),h=t(84),E=t(86),d=t(87),v=t(88),p=function(){var e=Object(n.useState)(Math.floor(3*Math.random())),a=Object(i.a)(e,1)[0];return c.a.createElement("header",null,c.a.createElement("div",{className:"bg",id:"header"},c.a.createElement("img",{src:t(50)("./".concat(a,".jpg")),alt:"Background"})),c.a.createElement("div",{className:"static-bg"},c.a.createElement("img",{src:u.a,alt:""})),c.a.createElement("nav",null,c.a.createElement("div",{className:"logo-container"},c.a.createElement("div",{className:"logo"},c.a.createElement("h1",null,c.a.createElement("span",null,"My"),"Mdb"))),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.b,{className:"links",to:"/"},c.a.createElement("i",null,c.a.createElement(h.a,{className:"icon"})),"\xa0 Home")),c.a.createElement("li",null,c.a.createElement(s.b,{className:"links",to:"/watchList"},c.a.createElement("i",null,c.a.createElement(E.a,{className:"icon"})),"\xa0 Watch List")),c.a.createElement("li",null,c.a.createElement(s.b,{className:"links",to:"/watchedList"},c.a.createElement("i",null,c.a.createElement(d.a,{className:"icon"})),"\xa0 Watched")))),c.a.createElement("a",{href:"#header"},c.a.createElement("div",{className:"back-to-top"}," ",c.a.createElement(v.a,{className:"icon"})," ")),c.a.createElement("div",{className:"divider"}))},f=(t(30),t(89)),g=t(90),N=t(93),b=t(91),w=t(37),x=t.n(w),j=Object(f.a)((function(e){return{root:{padding:"0.6rem 1.5rem",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1,fontSize:"2rem"},iconButton:{padding:10},searchIcon:{fontSize:"2rem"}}})),k=function(e){var a=j();return c.a.createElement("div",{className:"search-form",id:"search-form"},c.a.createElement(g.a,{component:"form",className:a.root},c.a.createElement(N.a,{className:a.input,placeholder:"Search For Movie ...",value:e.searchText,onChange:function(a){e.setSearchText(a.target.value)}}),c.a.createElement(b.a,{type:"button",className:a.iconButton,"aria-label":"search",onClick:function(){return a=e.searchText,void fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(a)).then((function(e){return e.json()})).then((function(a){e.setMovies(a.results)}));var a}},c.a.createElement(x.a,{className:a.searchIcon}))))},M=(t(61),t(62),function(e){return c.a.createElement("div",{className:"movie"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster),alt:"poster"})))}),S=function(e){return c.a.createElement("div",{className:"movies-container"},e.movies.filter((function(e){return e.poster_path})).map((function(e){return c.a.createElement(M,{poster:e.poster_path,key:e.id})})))},y=t(92),O=function(e){return c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"slogan"},c.a.createElement("div",null,c.a.createElement("h3",null,"Search Your Favourite Movie"),c.a.createElement("h3",null,"Make your own Watchlist")),c.a.createElement("div",{className:"btn"},c.a.createElement(y.a,{className:"start-btn",size:"large",variant:"contained",href:"#search-form"},"Start Now"))),c.a.createElement(k,{searchText:e.searchText,setSearchText:e.setSearchText,movies:e.movies,setMovies:e.setMovies}),c.a.createElement(S,{movies:e.movies}))},T=(t(63),function(){return c.a.createElement("div",{className:"watch-list"},c.a.createElement("div",{className:"slogan"},c.a.createElement("h1",null,"Watchlist")))}),L=(t(64),function(){return c.a.createElement("div",{className:"watched-list"},c.a.createElement("div",{className:"slogan"},c.a.createElement("h1",null,"Watched List")))}),W=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],r=a[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),u=m[0],h=m[1];return c.a.createElement(s.a,null,c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement(o.c,null,c.a.createElement(o.a,{path:"/",exact:!0},c.a.createElement(O,{searchText:t,setSearchText:r,movies:u,setMovies:h})),c.a.createElement(o.a,{path:"/watchedList"},c.a.createElement(L,null)),c.a.createElement(o.a,{path:"/watchList"},c.a.createElement(T,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[43,1,2]]]);
//# sourceMappingURL=main.281273c8.chunk.js.map