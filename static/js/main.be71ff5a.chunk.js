(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a.p+"static/media/static-bg.253549d8.jpg"},37:function(e,t,a){e.exports=a(60)},42:function(e,t,a){},43:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(19),r=a.n(l),i=(a(42),a(13)),s=a(4),m=(a(43),a(32)),o=a.n(m),u=a(79),d=a(81),p=a(82),E=a(83),h=function(){return c.a.createElement("header",null,c.a.createElement("div",{className:"static-bg"},c.a.createElement("img",{src:o.a,alt:""})),c.a.createElement("nav",null,c.a.createElement("div",{className:"logo-container"},c.a.createElement(i.b,{className:"links",to:"/"},c.a.createElement("div",{className:"logo"},c.a.createElement("h1",null,c.a.createElement("span",null,"My"),"Mdb"))),c.a.createElement("div",{className:"logo-slogan"},c.a.createElement("p",null,"Discover something new to Watch"))),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/search"},c.a.createElement("i",null,c.a.createElement(u.a,{className:"icon"})),"\xa0 Search")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/topRated"},c.a.createElement("i",null,c.a.createElement(d.a,{className:"icon"})),"\xa0 Top Rated")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/watchList"},c.a.createElement("i",null,c.a.createElement(p.a,{className:"icon"})),"\xa0 Watch List")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/watchedList"},c.a.createElement("i",null,c.a.createElement(E.a,{className:"icon"})),"\xa0 Watched")))))},v=a(3),f=(a(49),a(50),a(51),function(e){return c.a.createElement("div",{className:"movie",id:"".concat(e.movie.id)},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path),alt:"poster"})),c.a.createElement(i.b,{to:"/".concat(e.movie.first_air_date?"TVDetails":"movieDetails","/").concat(e.movie.id)},c.a.createElement("button",{className:"details-btn"},"More Details")))}),N=function(e){return c.a.createElement("div",{className:"movies-container"},e.movies.filter((function(e){return e.poster_path})).filter((function(e){return"ja"!==e.original_language})).map((function(e){return c.a.createElement(f,{movie:e,key:e.id})})),c.a.createElement("div",{className:"scroll-handler",id:"".concat("movie"===e.type?"movie":"tv")}))},b=function(){var e="137436a3a883e2b94597a24e32d9d6b8",t=Object(n.useState)([]),a=Object(v.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)([]),s=Object(v.a)(i,2),m=s[0],o=s[1],u=Object(n.useState)([]),d=Object(v.a)(u,2),p=d[0],E=d[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(e)).then((function(e){return e.json()})).then((function(e){return r(e.results)})),fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(e)).then((function(e){return e.json()})).then((function(e){return o(e.results)})),fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(e)).then((function(e){return e.json()})).then((function(e){return E(e.results)}))}),[]),c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"slogan"},c.a.createElement("h2",null,"Welcome To MyMdb"),c.a.createElement("h2",null,"Discover, Search and Make Your Watchlist")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Popular Movies")),c.a.createElement("div",{className:"items-container"},c.a.createElement(N,{movies:l}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Popular TV Shows")),c.a.createElement("div",{className:"items-container"},c.a.createElement(N,{movies:m}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Trending This Week")),c.a.createElement("div",{className:"items-container"},c.a.createElement(N,{movies:p}))))},g=(a(52),function(){return c.a.createElement("div",{className:"watch-list"},c.a.createElement("div",{className:"slogan"},c.a.createElement("h1",null,"Watchlist")))}),j=(a(53),function(){return c.a.createElement("div",{className:"watched-list"},c.a.createElement("div",{className:"slogan"},c.a.createElement("h1",null,"Watched List")))}),w=(a(54),a(84)),y=a(85),O=a(87),_=a(86),k=a(33),S=a.n(k),T=Object(w.a)((function(e){return{root:{padding:"0.6rem 1.5rem",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1,fontSize:"2rem"},iconButton:{padding:10},searchIcon:{fontSize:"2rem"}}})),W=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(v.a)(r,2),s=i[0],m=i[1],o=Object(n.useState)(1),u=Object(v.a)(o,2),d=u[0],p=u[1],E=T();return Object(n.useEffect)((function(){1!==d&&(fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(s,"&page=").concat(d)).then((function(e){return e.json()})).then((function(e){l((function(t){return t.concat(e.results)}))})),window.initialScrollTop=0,console.log(window))}),[d]),c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search-form"},c.a.createElement(y.a,{component:"form",className:E.root},c.a.createElement(O.a,{className:E.input,placeholder:"Search for Anything ...",value:s,onChange:function(e){m(e.target.value)}}),c.a.createElement(_.a,{type:"button",className:E.iconButton,"aria-label":"search",onClick:function(){fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(s)).then((function(e){return e.json()})).then((function(e){l(e.results),p(1)}))}},c.a.createElement(S.a,{className:E.searchIcon})))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"items-container"},c.a.createElement(N,{movies:a,type:"movie"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#movie",onClick:function(){return p(d+1)}},"Load More"))))},M=(a(57),function(){var e="137436a3a883e2b94597a24e32d9d6b8",t=Object(n.useState)([]),a=Object(v.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)([]),s=Object(v.a)(i,2),m=s[0],o=s[1],u=Object(n.useState)(1),d=Object(v.a)(u,2),p=d[0],E=d[1],h=Object(n.useState)(1),f=Object(v.a)(h,2),b=f[0],g=f[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(e,"&page=").concat(p)).then((function(e){return e.json()})).then((function(e){r((function(t){return t.concat(e.results)}))}))}),[p]),Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(e,"&page=").concat(b)).then((function(e){return e.json()})).then((function(e){o((function(t){return t.concat(e.results)}))}))}),[b]),c.a.createElement("div",{className:"top-rated"},c.a.createElement("div",{className:"container",id:"movieContainer"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Top Rated Movies")),c.a.createElement("div",{className:"items-container"},c.a.createElement(N,{movies:l,type:"movie"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#movie",onClick:function(){return E(p+1)}},"Load More"))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{id:"tvContainer",className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Top Rated TV Shows")),c.a.createElement("div",{className:"items-container"},c.a.createElement(N,{movies:m,type:"tv"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#tv",onClick:function(){return g(b+1)}},"Load More"))))}),L=(a(58),function(e){var t=e.match,a=Object(n.useState)({}),l=Object(v.a)(a,2),r=l[0],i=l[1],s=Object(n.useState)([]),m=Object(v.a)(s,2),o=m[0],u=m[1],d=Object(n.useState)([]),p=Object(v.a)(d,2),E=p[0],h=p[1],f=Object(n.useState)([]),N=Object(v.a)(f,2),b=N[0],g=N[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"/credits?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"/similar?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return h(e.results)})),fetch("https://api.themoviedb.org/3/movie/".concat(t.params.id,"/recommendations?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return g(e.results)}))}),[]),r.genres?c.a.createElement("div",{className:"movie-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.backdrop_path)})),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:"watch-list"},"Add To Watchlist"),c.a.createElement("button",{className:"watched-list"},"Add To Watchedlist"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(r.title,"  (").concat(r.release_date.slice(0,4),")"))),""!==r.tagline?c.a.createElement("div",{className:"tagline"},c.a.createElement("h2",null,'"',r.tagline,'"'),'"'):"",c.a.createElement("div",{className:"genres"},c.a.createElement("ul",null,r.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"left"},c.a.createElement("h2",null,"Overview")),c.a.createElement("div",{className:"right"},c.a.createElement("p",null,r.overview))),c.a.createElement("div",{className:"cast"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Cast")),c.a.createElement("div",{className:"body"},o.filter((function(e,t){return null!==e.profile_path&&t<12})).map((function(e){return c.a.createElement("div",{key:e.id,className:"profile-container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"Profile"}),c.a.createElement("div",{className:"name"},c.a.createElement("p",null,e.name)))})))),0===E.length?"":c.a.createElement("div",{className:"similar"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Similar")),c.a.createElement("div",{className:"body"},E.filter((function(e,t){return null!==e.poster_path&&t<10})).map((function(e){return c.a.createElement("div",{key:e.id,className:"container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Poster"}),c.a.createElement("div",{className:"pop-up"},c.a.createElement("p",null,e.title)))})))),0===b.length?"":c.a.createElement("div",{className:"recommends"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Recommendations")),c.a.createElement("div",{className:"body"},b.filter((function(e,t){return null!==e.poster_path&&t<10})).map((function(e){return c.a.createElement("div",{key:e.id,className:"container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Poster"}),c.a.createElement("div",{className:"pop-up"},c.a.createElement("p",null,e.title)))})))))))):c.a.createElement("div",{className:"movie-details"})}),C=(a(59),"137436a3a883e2b94597a24e32d9d6b8"),P=function(e){var t=e.match,a=Object(n.useState)({}),l=Object(v.a)(a,2),r=l[0],i=l[1],s=Object(n.useState)([]),m=Object(v.a)(s,2),o=m[0],u=m[1],d=Object(n.useState)([]),p=Object(v.a)(d,2),E=p[0],h=p[1],f=Object(n.useState)([]),N=Object(v.a)(f,2),b=N[0],g=N[1];return console.log(r),Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/".concat(t.params.id,"?api_key=").concat(C)).then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("https://api.themoviedb.org/3/tv/".concat(t.params.id,"/credits?api_key=").concat(C)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/tv/".concat(t.params.id,"/similar?api_key=").concat(C)).then((function(e){return e.json()})).then((function(e){return h(e.results)})),fetch("https://api.themoviedb.org/3/tv/".concat(t.params.id,"/recommendations?api_key=").concat(C)).then((function(e){return e.json()})).then((function(e){return g(e.results)}))}),[]),r.genres?c.a.createElement("div",{className:"tv-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.backdrop_path)})),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:"watch-list"},"Add To Watchlist"),c.a.createElement("button",{className:"watched-list"},"Add To Watchedlist"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(r.name,"  (").concat(r.first_air_date.slice(0,4)," - ").concat(r.last_air_date.slice(0,4),")"))),c.a.createElement("div",{className:"genres"},c.a.createElement("ul",null,r.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"left"},c.a.createElement("h2",null,"Overview")),c.a.createElement("div",{className:"right"},c.a.createElement("p",null,r.overview))),c.a.createElement("div",{className:"cast"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Cast")),c.a.createElement("div",{className:"body"},o.filter((function(e,t){return null!==e.profile_path&&t<14})).map((function(e){return c.a.createElement("div",{key:e.id,className:"profile-container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.profile_path),alt:"Profile"}),c.a.createElement("div",{className:"name"},c.a.createElement("p",null,e.name)))})))),0===r.seasons.length?"":c.a.createElement("div",{className:"seasons"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Seasons")),c.a.createElement("div",{className:"body"},r.seasons.filter((function(e){return null!==e.poster_path})).map((function(e){return c.a.createElement("div",{key:e.id,className:"container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Poster"}),c.a.createElement("div",{className:"pop-up"},c.a.createElement("p",null,e.name)))})))),0===E.length?"":c.a.createElement("div",{className:"similar"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Similar")),c.a.createElement("div",{className:"body"},E.filter((function(e,t){return null!==e.poster_path&&t<10})).map((function(e){return c.a.createElement("div",{key:e.id,className:"container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Poster"}),c.a.createElement("div",{className:"pop-up"},c.a.createElement("p",null,e.name)))})))),0===b.length?"":c.a.createElement("div",{className:"recommends"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Recommendations")),c.a.createElement("div",{className:"body"},b.filter((function(e,t){return null!==e.poster_path&&t<10})).map((function(e){return c.a.createElement("div",{key:e.id,className:"container"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"Poster"}),c.a.createElement("div",{className:"pop-up"},c.a.createElement("p",null,e.name)))})))))))):c.a.createElement("div",{className:"movie-details"})},D=function(){return c.a.createElement(i.a,null,c.a.createElement("div",null,c.a.createElement(h,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{path:"/",exact:!0},c.a.createElement(b,null)),c.a.createElement(s.a,{path:"/watchedList"},c.a.createElement(j,null)),c.a.createElement(s.a,{path:"/watchList"},c.a.createElement(g,null)),c.a.createElement(s.a,{path:"/search"},c.a.createElement(W,null)),c.a.createElement(s.a,{path:"/topRated"},c.a.createElement(M,null)),c.a.createElement(s.a,{path:"/movieDetails/:id",component:L,exact:!0}),c.a.createElement(s.a,{path:"/TVDetails/:id",component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.be71ff5a.chunk.js.map