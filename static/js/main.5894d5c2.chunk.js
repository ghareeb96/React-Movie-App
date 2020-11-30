(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{38:function(e,t,a){e.exports=a.p+"static/media/static-bg.253549d8.jpg"},42:function(e,t,a){e.exports=a.p+"static/media/1.7376801f.jpg"},48:function(e,t,a){e.exports=a(93)},53:function(e,t,a){},54:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(24),r=a.n(l),i=(a(53),a(14)),s=a(5),o=(a(54),a(38)),m=a.n(o),u=a(112),d=a(114),f=a(115),p=a(116),v=function(){return Object(n.useEffect)((function(){null===localStorage.getItem("favourites")&&localStorage.setItem("favourites",JSON.stringify([])),null===localStorage.getItem("watchlist")&&localStorage.setItem("watchlist",JSON.stringify([]))})),c.a.createElement("header",null,c.a.createElement("div",{className:"static-bg"},c.a.createElement("img",{src:m.a,alt:""})),c.a.createElement("nav",null,c.a.createElement("div",{className:"logo-container"},c.a.createElement(i.b,{className:"links",to:"/React-Movie-App/"},c.a.createElement("div",{className:"logo"},c.a.createElement("h1",null,c.a.createElement("span",null,"My"),"Mdb"))),c.a.createElement("div",{className:"logo-slogan"},c.a.createElement("p",null,"Discover something new to Watch"))),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/Search"},c.a.createElement("i",null,c.a.createElement(u.a,{className:"icon"})),"\xa0 Search")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/TopRated"},c.a.createElement("i",null,c.a.createElement(d.a,{className:"icon"})),"\xa0 Top Rated")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/WatchList"},c.a.createElement("i",null,c.a.createElement(f.a,{className:"icon"})),"\xa0 Watch List")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/Favourites"},c.a.createElement("i",null,c.a.createElement(p.a,{className:"icon"})),"\xa0 Favourites")))))},E=a(2),h=(a(60),a(61),a(62),function(e){return c.a.createElement("div",{className:"item ".concat(e.type),id:"".concat(e.item.id)},c.a.createElement("div",{className:"img"},e.item.poster_path?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.item.poster_path),alt:"poster"}):c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.item.profile_path),alt:"poster"}),c.a.createElement("div",{className:"popup"},c.a.createElement("h2",null,e.item.name?e.item.original_name?e.item.original_name:e.item.name:e.item.original_title))),c.a.createElement(i.b,{to:"/".concat(e.item.first_air_date?"TVShows":e.item.known_for_department?"Persons":"Movies","/").concat(e.item.id)},c.a.createElement("button",{className:"details-btn"},"More Details")))}),g=function(e){return c.a.createElement("div",{className:"items-container"},e.items.filter((function(e){return e.poster_path||e.profile_path})).filter((function(e){return"ja"!==e.original_language})).map((function(t){return c.a.createElement(h,{item:t,type:"".concat(t.first_air_date?"tvShow":t.known_for_department?"person":"movie"),key:"".concat(t.id," ").concat(t.name?t.name:t.title," "),detailsId:e.detailsId})})),c.a.createElement("div",{className:"scroll-handler",id:"".concat("movie"===e.scroll_type?"movie":"tv"),style:{top:window.scrollY-94+"px"}}))},b=a(17),N=a(42),O=a.n(N),j=function(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],l=t[1],r="137436a3a883e2b94597a24e32d9d6b8",i=Object(n.useState)([]),s=Object(E.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)([]),d=Object(E.a)(u,2),f=d[0],p=d[1],v=Object(n.useState)([]),h=Object(E.a)(v,2),N=h[0],j=h[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(r)).then((function(e){return e.json()})).then((function(e){return m(e.results)})),fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(r)).then((function(e){return e.json()})).then((function(e){return p(e.results)})),fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(r)).then((function(e){return e.json()})).then((function(e){return j(e.results)})).then(l(!1))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"background"},c.a.createElement("img",{src:O.a,alt:""}),c.a.createElement("div",{className:"slogan"},c.a.createElement("h2",null,"MyMdb"),c.a.createElement("h4",null,"Discover, Search and Make Your Watchlist"))),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Popular Movies")),c.a.createElement("div",null,c.a.createElement(g,{items:o}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Popular TV Shows")),c.a.createElement("div",null,c.a.createElement(g,{items:f}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Trending This Week")),c.a.createElement("div",null,c.a.createElement(g,{items:N})))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:a}))},S=(a(85),function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("watchlist")).map((function(e){fetch("https://api.themoviedb.org/3/".concat(e.type,"/").concat(e.id,"?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return l((function(t){return t.concat(e)}))}))}))}),[]),c.a.createElement("div",{className:"watchlist"},0===a.length?"":c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Watchlist")),c.a.createElement("div",null,c.a.createElement(g,{items:a}))))}),y=(a(86),function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("favourites")).map((function(e){fetch("https://api.themoviedb.org/3/".concat(e.type,"/").concat(e.id,"?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return l((function(t){return t.concat(e)}))}))}))}),[]),c.a.createElement("div",{className:"favourites"},0===a.length?"":c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Favourites")),c.a.createElement("div",null,c.a.createElement(g,{items:a}))))}),_=(a(87),a(117)),k=a(118),w=a(120),I=a(119),J=a(43),C=a.n(J),F=Object(_.a)((function(e){return{root:{padding:"0.6rem 1.5rem",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1,fontSize:"2rem"},iconButton:{padding:10},searchIcon:{fontSize:"2rem"}}})),T=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],l=t[1],r=Object(n.useState)(""),i=Object(E.a)(r,2),s=i[0],o=i[1],m=Object(n.useState)(1),u=Object(E.a)(m,2),d=u[0],f=u[1],p=F();return Object(n.useEffect)((function(){1!==d&&fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(s,"&page=").concat(d)).then((function(e){return e.json()})).then((function(e){l((function(t){return t.concat(e.results)}))}))}),[d]),c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search-form"},c.a.createElement(k.a,{component:"form",className:p.root},c.a.createElement(w.a,{className:p.input,placeholder:"Search here ...",value:s,onChange:function(e){o(e.target.value)},autoFocus:!0}),c.a.createElement(I.a,{type:"submit",className:p.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(s)).then((function(e){return e.json()})).then((function(e){l(e.results),f(1),console.log(e.results)}))}},c.a.createElement(C.a,{className:p.searchIcon})))),0!==a.length?c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement(g,{items:a,scroll_type:"movie"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#movie",onClick:function(){return f(d+1)}},"Load More"))):"")},M=(a(89),function(){var e="137436a3a883e2b94597a24e32d9d6b8",t=Object(n.useState)(1),a=Object(E.a)(t,2),l=a[0],r=a[1],i=Object(n.useState)(1),s=Object(E.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(!0),d=Object(E.a)(u,2),f=d[0],p=d[1],v=Object(n.useState)([]),h=Object(E.a)(v,2),N=h[0],O=h[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(e,"&page=").concat(l)).then((function(e){return e.json()})).then((function(e){O((function(t){return t.concat(e.results)}))}))}),[l]);var j=Object(n.useState)([]),S=Object(E.a)(j,2),y=S[0],_=S[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(e,"&page=").concat(o)).then((function(e){return e.json()})).then((function(e){_((function(t){return t.concat(e.results)}))})).then(p(!1))}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"top-rated"},c.a.createElement("div",{className:"container",id:"movieContainer"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Top Rated Movies")),c.a.createElement("div",null,c.a.createElement(g,{items:N,scroll_type:"movie"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#movie",onClick:function(){return r(l+1)}},"Load More"))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{id:"tvContainer",className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Top Rated TV Shows")),c.a.createElement("div",null,c.a.createElement(g,{items:y,scroll_type:"tv"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#tv",onClick:function(){return m(o+1)}},"Load More")))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:f}))}),x=a(8),W=(a(90),"137436a3a883e2b94597a24e32d9d6b8"),A=function(e){var t=e.match,a=Object(n.useState)({}),l=Object(E.a)(a,2),r=l[0],i=l[1],s=Object(n.useState)([]),o=Object(E.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)([]),N=Object(E.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)([]),y=Object(E.a)(S,2),_=y[0],k=y[1],w=Object(n.useState)([]),I=Object(E.a)(w,2),J=I[0],C=I[1],F=Object(n.useState)(t.params.id),T=Object(E.a)(F,2),M=T[0],A=T[1],L=Object(n.useState)(!0),P=Object(E.a)(L,2),R=(P[0],P[1]);Object(n.useEffect)((function(){A(t.params.id)}),[t.params.id]);var B=!1;J.map((function(e){e.id===t.params.id&&(B=!0)}));var D=!1;_.map((function(e){e.id===t.params.id&&(D=!0)}));return Object(n.useEffect)((function(){null===localStorage.getItem("favourites")?k([]):k(JSON.parse(localStorage.getItem("favourites"))),null===localStorage.getItem("watchlist")?C([]):C(JSON.parse(localStorage.getItem("watchlist"))),fetch("https://api.themoviedb.org/3/movie/".concat(M,"?api_key=").concat(W)).then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(M,"/credits?api_key=").concat(W)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/movie/".concat(M,"/similar?api_key=").concat(W)).then((function(e){return e.json()})).then((function(e){return v(e.results)})),fetch("https://api.themoviedb.org/3/movie/".concat(M,"/recommendations?api_key=").concat(W)).then((function(e){return e.json()})).then((function(e){return j(e.results)})).then(R(!1))}),[M]),Object(n.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(_))}),[_]),Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(J))}),[J]),r.genres?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"movie-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.backdrop_path)})),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:B?"watch-list done":"watch-list",onClick:function(){0===J.length?C((function(e){return[].concat(Object(x.a)(e),[{id:t.params.id,type:"movie"}])})):0===J.filter((function(e){return e.id===t.params.id})).length?(C([].concat(Object(x.a)(J),[{id:t.params.id,type:"movie"}])),localStorage.setItem("watchlist",JSON.stringify(J))):(C((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("watchlist",JSON.stringify(J)))}},B?"In Your Watchlist":"Add To Watchlist"),c.a.createElement("button",{className:D?"favourite done":"favourite",onClick:function(){0===_.length?k((function(e){return[].concat(Object(x.a)(e),[{id:t.params.id,type:"movie"}])})):0===_.filter((function(e){return e.id===t.params.id})).length?(k([].concat(Object(x.a)(_),[{id:t.params.id,type:"movie"}])),localStorage.setItem("favourites",JSON.stringify(_))):(k((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("favourites",JSON.stringify(_)))}},D?"Favourite":"Add To Favourite"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(r.original_title,"  (").concat(r.release_date.slice(0,4),")"))),""!==r.tagline?c.a.createElement("div",{className:"tagline"},c.a.createElement("h2",null,'"',r.tagline,'"'),'"'):"",c.a.createElement("div",{className:"genres"},c.a.createElement("ul",null,r.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),r.overview?c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"left"},c.a.createElement("h2",null,"Overview")),c.a.createElement("div",{className:"right"},c.a.createElement("p",null,r.overview))):"",0===m.length?"":c.a.createElement("div",{className:"cast"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Cast")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:m}))),0===p.length?"":c.a.createElement("div",{className:"similar"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Similar")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:p}))),0===O.length?"":c.a.createElement("div",{className:"recommends"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Recommendations")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:O})))))))):c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",time:2e3})},L=(a(91),a(44)),P=a.n(L),R="137436a3a883e2b94597a24e32d9d6b8",B=function(e){var t=e.match,a=Object(n.useState)({}),l=Object(E.a)(a,2),r=l[0],i=l[1],s=Object(n.useState)([]),o=Object(E.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)({}),N=Object(E.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)([]),y=Object(E.a)(S,2),_=y[0],k=y[1],w=Object(n.useState)([]),I=Object(E.a)(w,2),J=I[0],C=I[1],F=Object(n.useState)([]),T=Object(E.a)(F,2),M=T[0],W=T[1],A=Object(n.useState)(t.params.id),L=Object(E.a)(A,2),B=L[0],D=L[1],V=Object(n.useState)(!0),Y=Object(E.a)(V,2),q=Y[0],z=Y[1];Object(n.useEffect)((function(){D(t.params.id)}),[t.params.id]);var $=!1;M.map((function(e){e.id===t.params.id&&($=!0)}));var G=!1;J.map((function(e){e.id===t.params.id&&(G=!0)}));var H=function(e){fetch("https://api.themoviedb.org/3/tv/".concat(B,"/season/").concat(e,"?api_key=").concat(R)).then((function(e){return e.json()})).then((function(e){return j({season:e,modal:!0})}))},K=!0;return Object(n.useEffect)((function(){K?K=!1:H()}),[O]),Object(n.useEffect)((function(){null===localStorage.getItem("favourites")?C([]):C(JSON.parse(localStorage.getItem("favourites"))),null===localStorage.getItem("watchlist")?W([]):W(JSON.parse(localStorage.getItem("watchlist"))),fetch("https://api.themoviedb.org/3/tv/".concat(B,"?api_key=").concat(R)).then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("https://api.themoviedb.org/3/tv/".concat(B,"/credits?api_key=").concat(R)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/tv/".concat(B,"/similar?api_key=").concat(R)).then((function(e){return e.json()})).then((function(e){return v(e.results)})),fetch("https://api.themoviedb.org/3/tv/".concat(B,"/recommendations?api_key=").concat(R)).then((function(e){return e.json()})).then((function(e){return k(e.results)})).then(z(!1))}),[B]),Object(n.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(J))}),[J]),Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(M))}),[M]),r.seasons?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tv-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.backdrop_path)})),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.poster_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:$?"watch-list done":"watch-list",onClick:function(){0===M.length?W((function(e){return[].concat(Object(x.a)(e),[{id:t.params.id,type:"tv"}])})):0===M.filter((function(e){return e.id===t.params.id})).length?(W([].concat(Object(x.a)(M),[{id:t.params.id,type:"tv"}])),localStorage.setItem("watchlist",JSON.stringify(M))):(W((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("watchlist",JSON.stringify(M)))}},$?"In Your Watchlist":"Add To Watchlist"),c.a.createElement("button",{className:G?"favourite done":"favourite",onClick:function(){0===J.length?C((function(e){return[].concat(Object(x.a)(e),[{id:t.params.id,type:"tv"}])})):0===J.filter((function(e){return e.id===t.params.id})).length?(C([].concat(Object(x.a)(J),[{id:t.params.id,type:"tv"}])),localStorage.setItem("favourites",JSON.stringify(J))):(C((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("favourites",JSON.stringify(J)))}},G?"Favourite":"Add To Favourite"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(r.original_name,"  (").concat(r.first_air_date.slice(0,4)," - ").concat(r.last_air_date.slice(0,4),")"))),c.a.createElement("div",{className:"genres"},c.a.createElement("ul",null,r.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),r.overview?c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"left"},c.a.createElement("h2",null,"Overview")),c.a.createElement("div",{className:"right"},c.a.createElement("p",null,r.overview))):"",0===m.length?"":c.a.createElement("div",{className:"cast"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Cast")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:m}))),0===r.seasons.length?"":c.a.createElement("div",{className:"seasons"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Seasons")),c.a.createElement("div",{className:"body"},r.seasons.filter((function(e){return e.poster_path||e.profile_path})).map((function(e){return c.a.createElement("div",{className:"season",key:e.id,onClick:function(){return H(e.season_number)}},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"poster"}),c.a.createElement("div",{className:"popup"},c.a.createElement("h2",null,e.name))))})))),c.a.createElement("div",{className:"modal-container ".concat(O.modal?"open":"close"),onClick:function(e){return e.target.classList.contains("open")?j({modal:!1}):""}},O.season?c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"close-btn",onClick:function(){return j({modal:!1})}},c.a.createElement(P.a,{className:"close-icon"})),c.a.createElement("div",{className:"modal-details"},c.a.createElement("div",{className:"season-title"},c.a.createElement("h1",null,O.season.name)),c.a.createElement("div",{className:"middle"},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(O.season.poster_path),alt:""})),c.a.createElement("div",{className:"episodes"},c.a.createElement("h1",null,"Episodes"),c.a.createElement("ul",null,O.season.episodes.map((function(e,t){return c.a.createElement("li",null,"".concat(t+1," : ").concat(e.name))}))))),O.season.overview?c.a.createElement("div",{className:"season-overview"},c.a.createElement("p",null,O.season.overview)):"")):""),0===p.length?"":c.a.createElement("div",{className:"similar"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Similar")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:p}))),0===_.length?"":c.a.createElement("div",{className:"recommends"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Recommendations")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:_}))))))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:q,time:2e3})):c.a.createElement("div",{className:"tv-details"})},D=(a(92),"137436a3a883e2b94597a24e32d9d6b8"),V=function(e){var t=e.match,a=Object(n.useState)({}),l=Object(E.a)(a,2),r=l[0],i=l[1],s=Object(n.useState)([]),o=Object(E.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)([]),N=Object(E.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)(t.params.id),y=Object(E.a)(S,2),_=y[0],k=y[1],w=Object(n.useState)(!0),I=Object(E.a)(w,2),J=I[0],C=I[1];Object(n.useEffect)((function(){k(t.params.id)}),[t.params.id]);var F=!1;O.map((function(e){e.id===t.params.id&&(F=!0)}));return Object(n.useEffect)((function(){null===localStorage.getItem("favourites")?j([]):j(JSON.parse(localStorage.getItem("favourites"))),fetch("https://api.themoviedb.org/3/person/".concat(_,"?api_key=").concat(D)).then((function(e){return e.json()})).then((function(e){return i(e)})).then(C(!1)),fetch("https://api.themoviedb.org/3/person/".concat(_,"/combined_credits?api_key=").concat(D)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/person/popular?api_key=".concat(D)).then((function(e){return e.json()})).then((function(e){return v(e.results)}))}),[_]),Object(n.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(O))}),[O]),m?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"person-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"}),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(r.profile_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:F?"favourite done":"favourite",onClick:function(){0===O.length?j((function(e){return[].concat(Object(x.a)(e),[{id:t.params.id,type:"person"}])})):0===O.filter((function(e){return e.id===t.params.id})).length?(j([].concat(Object(x.a)(O),[{id:t.params.id,type:"person"}])),localStorage.setItem("favourites",JSON.stringify(O))):(j((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("favourites",JSON.stringify(O)))}},F?"Favourite":"Add To Favourite"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,r.name)),c.a.createElement("div",{className:"credits"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Credits")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:m}))),c.a.createElement("div",{className:"popular"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Popular Persons")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:p}))))))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:J,time:2e3})):c.a.createElement("div",{className:"person-details"})},Y=function(){return c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement(v,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/React-Movie-App/"},c.a.createElement(j,null)),c.a.createElement(s.a,{exact:!0,path:"/Favourites"},c.a.createElement(y,null)),c.a.createElement(s.a,{exact:!0,path:"/WatchList"},c.a.createElement(S,null)),c.a.createElement(s.a,{exact:!0,path:"/Search"},c.a.createElement(T,null)),c.a.createElement(s.a,{exact:!0,path:"/TopRated"},c.a.createElement(M,null)),c.a.createElement(s.a,{exact:!0,path:"/Movies/:id",component:A}),c.a.createElement(s.a,{exact:!0,path:"/TVShows/:id",component:B}),c.a.createElement(s.a,{exact:!0,path:"/Persons/:id",component:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[48,1,2]]]);
//# sourceMappingURL=main.5894d5c2.chunk.js.map