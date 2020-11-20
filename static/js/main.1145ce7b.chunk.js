(this["webpackJsonpreact-movie-app"]=this["webpackJsonpreact-movie-app"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/static-bg.253549d8.jpg"},45:function(e,t,a){e.exports=a(91)},50:function(e,t,a){},51:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),l=a.n(r),i=(a(50),a(11)),s=a(5),o=(a(51),a(37)),m=a.n(o),u=a(110),d=a(112),f=a(113),p=a(114),v=function(){return Object(n.useEffect)((function(){null===localStorage.getItem("favourites")&&localStorage.setItem("favourites",JSON.stringify([])),null===localStorage.getItem("watchlist")&&localStorage.setItem("watchlist",JSON.stringify([]))})),c.a.createElement("header",null,c.a.createElement("div",{className:"static-bg"},c.a.createElement("img",{src:m.a,alt:""})),c.a.createElement("nav",null,c.a.createElement("div",{className:"logo-container"},c.a.createElement(i.b,{className:"links",to:"/React-Movie-App/"},c.a.createElement("div",{className:"logo"},c.a.createElement("h1",null,c.a.createElement("span",null,"My"),"Mdb"))),c.a.createElement("div",{className:"logo-slogan"},c.a.createElement("p",null,"Discover something new to Watch"))),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/Search"},c.a.createElement("i",null,c.a.createElement(u.a,{className:"icon"})),"\xa0 Search")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/TopRated"},c.a.createElement("i",null,c.a.createElement(d.a,{className:"icon"})),"\xa0 Top Rated")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/WatchList"},c.a.createElement("i",null,c.a.createElement(f.a,{className:"icon"})),"\xa0 Watch List")),c.a.createElement("li",null,c.a.createElement(i.b,{className:"links",to:"/Favourites"},c.a.createElement("i",null,c.a.createElement(p.a,{className:"icon"})),"\xa0 Favourites")))))},E=a(2),h=(a(57),a(58),a(59),function(e){return c.a.createElement("div",{className:"item ".concat(e.type),id:"".concat(e.item.id)},c.a.createElement("div",{className:"img"},e.item.poster_path?c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.item.poster_path),alt:"poster"}):c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.item.profile_path),alt:"poster"}),c.a.createElement("div",{className:"popup"},c.a.createElement("h2",null,e.item.name?e.item.original_name?e.item.original_name:e.item.name:e.item.original_title))),c.a.createElement(i.b,{to:"/".concat(e.item.first_air_date?"TVShows":e.item.known_for_department?"Persons":"Movies","/").concat(e.item.id)},c.a.createElement("button",{className:"details-btn"},"More Details")))}),g=function(e){return c.a.createElement("div",{className:"items-container"},e.items.filter((function(e){return e.poster_path||e.profile_path})).filter((function(e){return"ja"!==e.original_language})).map((function(t){return c.a.createElement(h,{item:t,type:"".concat(t.first_air_date?"tvShow":t.known_for_department?"person":"movie"),key:"".concat(t.id," ").concat(t.name?t.name:t.title," "),detailsId:e.detailsId})})),c.a.createElement("div",{className:"scroll-handler",id:"".concat("movie"===e.scroll_type?"movie":"tv"),style:{top:window.scrollY-94+"px"}}))},b=a(17),N=function(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],r=t[1],l="137436a3a883e2b94597a24e32d9d6b8",i=Object(n.useState)([]),s=Object(E.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)([]),d=Object(E.a)(u,2),f=d[0],p=d[1],v=Object(n.useState)([]),h=Object(E.a)(v,2),N=h[0],O=h[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(l)).then((function(e){return e.json()})).then((function(e){return m(e.results)})),fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(l)).then((function(e){return e.json()})).then((function(e){return p(e.results)})),fetch("https://api.themoviedb.org/3/trending/all/week?api_key=".concat(l)).then((function(e){return e.json()})).then((function(e){return O(e.results)})).then(r(!1))}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"home-page"},c.a.createElement("div",{className:"slogan"},c.a.createElement("h2",null,"Welcome To MyMdb"),c.a.createElement("h2",null,"Discover, Search and Make Your Watchlist")),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Popular Movies")),c.a.createElement("div",null,c.a.createElement(g,{items:o}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Popular TV Shows")),c.a.createElement("div",null,c.a.createElement(g,{items:f}))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Trending This Week")),c.a.createElement("div",null,c.a.createElement(g,{items:N})))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:a}))},O=(a(82),function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("watchlist")).map((function(e){fetch("https://api.themoviedb.org/3/".concat(e.type,"/").concat(e.id,"?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e)}))}))}))}),[]),c.a.createElement("div",{className:"watchlist"},0===a.length?"":c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Watchlist")),c.a.createElement("div",null,c.a.createElement(g,{items:a}))))}),j=(a(83),function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){JSON.parse(localStorage.getItem("favourites")).map((function(e){fetch("https://api.themoviedb.org/3/".concat(e.type,"/").concat(e.id,"?api_key=").concat("137436a3a883e2b94597a24e32d9d6b8")).then((function(e){return e.json()})).then((function(e){return r((function(t){return t.concat(e)}))}))}))}),[]),c.a.createElement("div",{className:"favourites"},0===a.length?"":c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Favourites")),c.a.createElement("div",null,c.a.createElement(g,{items:a}))))}),S=(a(84),a(115)),y=a(116),_=a(118),w=a(117),k=a(41),I=a.n(k),J=Object(S.a)((function(e){return{root:{padding:"0.6rem 1.5rem",display:"flex",alignItems:"center",width:"100%"},input:{marginLeft:e.spacing(1),flex:1,fontSize:"2rem"},iconButton:{padding:10},searchIcon:{fontSize:"2rem"}}})),C=function(){var e=Object(n.useState)([]),t=Object(E.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(E.a)(l,2),s=i[0],o=i[1],m=Object(n.useState)(1),u=Object(E.a)(m,2),d=u[0],f=u[1],p=J();return Object(n.useEffect)((function(){1!==d&&fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(s,"&page=").concat(d)).then((function(e){return e.json()})).then((function(e){r((function(t){return t.concat(e.results)}))}))}),[d]),c.a.createElement("div",{className:"search"},c.a.createElement("div",{className:"search-form"},c.a.createElement(y.a,{component:"form",className:p.root},c.a.createElement(_.a,{className:p.input,placeholder:"Search for Anything ...",value:s,onChange:function(e){o(e.target.value)},autoFocus:!0}),c.a.createElement(w.a,{type:"submit",className:p.iconButton,"aria-label":"search",onClick:function(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/multi?api_key=".concat("137436a3a883e2b94597a24e32d9d6b8","&query=").concat(s)).then((function(e){return e.json()})).then((function(e){r(e.results),f(1),console.log(e.results)}))}},c.a.createElement(I.a,{className:p.searchIcon})))),0!==a.length?c.a.createElement("div",{className:"container"},c.a.createElement("div",null,c.a.createElement(g,{items:a,scroll_type:"movie"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#movie",onClick:function(){return f(d+1)}},"Load More"))):"")},T=(a(87),function(){var e="137436a3a883e2b94597a24e32d9d6b8",t=Object(n.useState)(1),a=Object(E.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(1),s=Object(E.a)(i,2),o=s[0],m=s[1],u=Object(n.useState)(!0),d=Object(E.a)(u,2),f=d[0],p=d[1],v=Object(n.useState)([]),h=Object(E.a)(v,2),N=h[0],O=h[1];Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(e,"&page=").concat(r)).then((function(e){return e.json()})).then((function(e){O((function(t){return t.concat(e.results)}))}))}),[r]);var j=Object(n.useState)([]),S=Object(E.a)(j,2),y=S[0],_=S[1];return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=".concat(e,"&page=").concat(o)).then((function(e){return e.json()})).then((function(e){_((function(t){return t.concat(e.results)}))})).then(p(!1))}),[o]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"top-rated"},c.a.createElement("div",{className:"container",id:"movieContainer"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Top Rated Movies")),c.a.createElement("div",null,c.a.createElement(g,{items:N,scroll_type:"movie"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#movie",onClick:function(){return l(r+1)}},"Load More"))),c.a.createElement("div",{className:"divider"}),c.a.createElement("div",{id:"tvContainer",className:"container"},c.a.createElement("div",{className:"legend"},c.a.createElement("h3",null,"Top Rated TV Shows")),c.a.createElement("div",null,c.a.createElement(g,{items:y,scroll_type:"tv"})),c.a.createElement("div",{className:"more"},c.a.createElement("a",{href:"#tv",onClick:function(){return m(o+1)}},"Load More")))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:f}))}),F=a(8),M=(a(88),"137436a3a883e2b94597a24e32d9d6b8"),W=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(E.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)([]),o=Object(E.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)([]),N=Object(E.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)([]),y=Object(E.a)(S,2),_=y[0],w=y[1],k=Object(n.useState)([]),I=Object(E.a)(k,2),J=I[0],C=I[1],T=Object(n.useState)(t.params.id),W=Object(E.a)(T,2),x=W[0],A=W[1],L=Object(n.useState)(!0),P=Object(E.a)(L,2),R=(P[0],P[1]);Object(n.useEffect)((function(){A(t.params.id)}),[t.params.id]);var B=!1;J.map((function(e){e.id===t.params.id&&(B=!0)}));var D=!1;_.map((function(e){e.id===t.params.id&&(D=!0)}));return Object(n.useEffect)((function(){null===localStorage.getItem("favourites")?w([]):w(JSON.parse(localStorage.getItem("favourites"))),null===localStorage.getItem("watchlist")?C([]):C(JSON.parse(localStorage.getItem("watchlist"))),fetch("https://api.themoviedb.org/3/movie/".concat(x,"?api_key=").concat(M)).then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("https://api.themoviedb.org/3/movie/".concat(x,"/credits?api_key=").concat(M)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/movie/".concat(x,"/similar?api_key=").concat(M)).then((function(e){return e.json()})).then((function(e){return v(e.results)})),fetch("https://api.themoviedb.org/3/movie/".concat(x,"/recommendations?api_key=").concat(M)).then((function(e){return e.json()})).then((function(e){return j(e.results)})).then(R(!1))}),[x]),Object(n.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(_))}),[_]),Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(J))}),[J]),l.genres?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"movie-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.backdrop_path)})),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.poster_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:B?"watch-list done":"watch-list",onClick:function(){0===J.length?C((function(e){return[].concat(Object(F.a)(e),[{id:t.params.id,type:"movie"}])})):0===J.filter((function(e){return e.id===t.params.id})).length?(C([].concat(Object(F.a)(J),[{id:t.params.id,type:"movie"}])),localStorage.setItem("watchlist",JSON.stringify(J))):(C((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("watchlist",JSON.stringify(J)))}},B?"In Your Watchlist":"Add To Watchlist"),c.a.createElement("button",{className:D?"favourite done":"favourite",onClick:function(){0===_.length?w((function(e){return[].concat(Object(F.a)(e),[{id:t.params.id,type:"movie"}])})):0===_.filter((function(e){return e.id===t.params.id})).length?(w([].concat(Object(F.a)(_),[{id:t.params.id,type:"movie"}])),localStorage.setItem("favourites",JSON.stringify(_))):(w((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("favourites",JSON.stringify(_)))}},D?"Favourite":"Add To Favourite"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(l.original_title,"  (").concat(l.release_date.slice(0,4),")"))),""!==l.tagline?c.a.createElement("div",{className:"tagline"},c.a.createElement("h2",null,'"',l.tagline,'"'),'"'):"",c.a.createElement("div",{className:"genres"},c.a.createElement("ul",null,l.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),l.overview?c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"left"},c.a.createElement("h2",null,"Overview")),c.a.createElement("div",{className:"right"},c.a.createElement("p",null,l.overview))):"",0===m.length?"":c.a.createElement("div",{className:"cast"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Cast")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:m}))),0===p.length?"":c.a.createElement("div",{className:"similar"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Similar")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:p}))),0===O.length?"":c.a.createElement("div",{className:"recommends"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Recommendations")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:O})))))))):c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",time:2e3})},x=(a(89),"137436a3a883e2b94597a24e32d9d6b8"),A=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(E.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)([]),o=Object(E.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)({}),N=Object(E.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)([]),y=Object(E.a)(S,2),_=y[0],w=y[1],k=Object(n.useState)([]),I=Object(E.a)(k,2),J=I[0],C=I[1],T=Object(n.useState)([]),M=Object(E.a)(T,2),W=M[0],A=M[1],L=Object(n.useState)(t.params.id),P=Object(E.a)(L,2),R=P[0],B=P[1],D=Object(n.useState)(!0),V=Object(E.a)(D,2),Y=V[0],q=V[1];Object(n.useEffect)((function(){B(t.params.id)}),[t.params.id]);var z=!1;W.map((function(e){e.id===t.params.id&&(z=!0)}));var $=!1;J.map((function(e){e.id===t.params.id&&($=!0)}));var G=function(e){fetch("https://api.themoviedb.org/3/tv/".concat(R,"/season/").concat(e,"?api_key=").concat(x)).then((function(e){return e.json()})).then((function(e){return j({season:e,modal:!0})}))},H=!0;return Object(n.useEffect)((function(){H?H=!1:G()}),[O]),Object(n.useEffect)((function(){null===localStorage.getItem("favourites")?C([]):C(JSON.parse(localStorage.getItem("favourites"))),null===localStorage.getItem("watchlist")?A([]):A(JSON.parse(localStorage.getItem("watchlist"))),fetch("https://api.themoviedb.org/3/tv/".concat(R,"?api_key=").concat(x)).then((function(e){return e.json()})).then((function(e){return i(e)})),fetch("https://api.themoviedb.org/3/tv/".concat(R,"/credits?api_key=").concat(x)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/tv/".concat(R,"/similar?api_key=").concat(x)).then((function(e){return e.json()})).then((function(e){return v(e.results)})),fetch("https://api.themoviedb.org/3/tv/".concat(R,"/recommendations?api_key=").concat(x)).then((function(e){return e.json()})).then((function(e){return w(e.results)})).then(q(!1))}),[R]),Object(n.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(J))}),[J]),Object(n.useEffect)((function(){localStorage.setItem("watchlist",JSON.stringify(W))}),[W]),l.seasons?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"tv-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.backdrop_path)})),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.poster_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:z?"watch-list done":"watch-list",onClick:function(){0===W.length?A((function(e){return[].concat(Object(F.a)(e),[{id:t.params.id,type:"tv"}])})):0===W.filter((function(e){return e.id===t.params.id})).length?(A([].concat(Object(F.a)(W),[{id:t.params.id,type:"tv"}])),localStorage.setItem("watchlist",JSON.stringify(W))):(A((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("watchlist",JSON.stringify(W)))}},z?"In Your Watchlist":"Add To Watchlist"),c.a.createElement("button",{className:$?"favourite done":"favourite",onClick:function(){0===J.length?C((function(e){return[].concat(Object(F.a)(e),[{id:t.params.id,type:"tv"}])})):0===J.filter((function(e){return e.id===t.params.id})).length?(C([].concat(Object(F.a)(J),[{id:t.params.id,type:"tv"}])),localStorage.setItem("favourites",JSON.stringify(J))):(C((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("favourites",JSON.stringify(J)))}},$?"Favourite":"Add To Favourite"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"".concat(l.original_name,"  (").concat(l.first_air_date.slice(0,4)," - ").concat(l.last_air_date.slice(0,4),")"))),c.a.createElement("div",{className:"genres"},c.a.createElement("ul",null,l.genres.map((function(e){return c.a.createElement("li",{key:e.id},e.name)})))),l.overview?c.a.createElement("div",{className:"overview"},c.a.createElement("div",{className:"left"},c.a.createElement("h2",null,"Overview")),c.a.createElement("div",{className:"right"},c.a.createElement("p",null,l.overview))):"",0===m.length?"":c.a.createElement("div",{className:"cast"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Cast")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:m}))),0===l.seasons.length?"":c.a.createElement("div",{className:"seasons"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Seasons")),c.a.createElement("div",{className:"body"},l.seasons.filter((function(e){return e.poster_path||e.profile_path})).map((function(e){return c.a.createElement("div",{className:"season",key:e.id,onClick:function(){return G(e.season_number)}},c.a.createElement("div",{className:"img"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(e.poster_path),alt:"poster"}),c.a.createElement("div",{className:"popup"},c.a.createElement("h2",null,e.name))))})))),c.a.createElement("div",{className:"modal-container ".concat(O.modal?"open":"close")},O.season?c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"close-btn",onClick:function(){return j({modal:!1})}},"\u2715"),c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(O.season.poster_path),alt:""}),c.a.createElement("div",{className:"modal-details"},c.a.createElement("div",{className:"season-title"},c.a.createElement("h1",null,O.season.name)),c.a.createElement("div",{className:"episodes"},c.a.createElement("h1",null,"Episodes"),c.a.createElement("ul",null,O.season.episodes.map((function(e,t){return c.a.createElement("li",null,"".concat(t+1," : ").concat(e.name))})))),O.season.overview?c.a.createElement("div",{className:"season-overview"},c.a.createElement("p",null,O.season.overview)):"")):""),0===p.length?"":c.a.createElement("div",{className:"similar"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Similar")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:p}))),0===_.length?"":c.a.createElement("div",{className:"recommends"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Recommendations")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:_}))))))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:Y,time:2e3})):c.a.createElement("div",{className:"tv-details"})},L=(a(90),"137436a3a883e2b94597a24e32d9d6b8"),P=function(e){var t=e.match,a=Object(n.useState)({}),r=Object(E.a)(a,2),l=r[0],i=r[1],s=Object(n.useState)([]),o=Object(E.a)(s,2),m=o[0],u=o[1],d=Object(n.useState)([]),f=Object(E.a)(d,2),p=f[0],v=f[1],h=Object(n.useState)([]),N=Object(E.a)(h,2),O=N[0],j=N[1],S=Object(n.useState)(t.params.id),y=Object(E.a)(S,2),_=y[0],w=y[1],k=Object(n.useState)(!0),I=Object(E.a)(k,2),J=I[0],C=I[1];Object(n.useEffect)((function(){w(t.params.id)}),[t.params.id]);var T=!1;O.map((function(e){e.id===t.params.id&&(T=!0)}));return Object(n.useEffect)((function(){null===localStorage.getItem("favourites")?j([]):j(JSON.parse(localStorage.getItem("favourites"))),fetch("https://api.themoviedb.org/3/person/".concat(_,"?api_key=").concat(L)).then((function(e){return e.json()})).then((function(e){return i(e)})).then(C(!1)),fetch("https://api.themoviedb.org/3/person/".concat(_,"/combined_credits?api_key=").concat(L)).then((function(e){return e.json()})).then((function(e){return u(e.cast)})),fetch("https://api.themoviedb.org/3/person/popular?api_key=".concat(L)).then((function(e){return e.json()})).then((function(e){return v(e.results)}))}),[_]),Object(n.useEffect)((function(){localStorage.setItem("favourites",JSON.stringify(O))}),[O]),m?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"person-details"},c.a.createElement("div",{className:"details"},c.a.createElement("div",{className:"bg-img"}),c.a.createElement("div",{className:"left-section"},c.a.createElement("div",{className:"poster"},c.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500".concat(l.profile_path),alt:""})),c.a.createElement("div",{className:"btns"},c.a.createElement("button",{className:T?"favourite done":"favourite",onClick:function(){0===O.length?j((function(e){return[].concat(Object(F.a)(e),[{id:t.params.id,type:"person"}])})):0===O.filter((function(e){return e.id===t.params.id})).length?(j([].concat(Object(F.a)(O),[{id:t.params.id,type:"person"}])),localStorage.setItem("favourites",JSON.stringify(O))):(j((function(e){return e.filter((function(e){return e.id!==t.params.id}))})),localStorage.setItem("favourites",JSON.stringify(O)))}},T?"Favourite":"Add To Favourite"))),c.a.createElement("div",{className:"right-section"},c.a.createElement("div",{className:"right-details"},c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,l.name)),c.a.createElement("div",{className:"credits"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Credits")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:m}))),c.a.createElement("div",{className:"popular"},c.a.createElement("div",{className:"top"},c.a.createElement("h2",null,"Popular Persons")),c.a.createElement("div",{className:"body"},c.a.createElement(g,{items:p}))))))),c.a.createElement(b.Planets,{color:"#fdc325",background:"#011A27",customLoading:J,time:2e3})):c.a.createElement("div",{className:"person-details"})},R=function(){return c.a.createElement("div",null,c.a.createElement(i.a,null,c.a.createElement(v,null),c.a.createElement(s.c,null,c.a.createElement(s.a,{exact:!0,path:"/React-Movie-App/"},c.a.createElement(N,null)),c.a.createElement(s.a,{exact:!0,path:"/Favourites"},c.a.createElement(j,null)),c.a.createElement(s.a,{exact:!0,path:"/WatchList"},c.a.createElement(O,null)),c.a.createElement(s.a,{exact:!0,path:"/Search"},c.a.createElement(C,null)),c.a.createElement(s.a,{exact:!0,path:"/TopRated"},c.a.createElement(T,null)),c.a.createElement(s.a,{exact:!0,path:"/Movies/:id",component:W}),c.a.createElement(s.a,{exact:!0,path:"/TVShows/:id",component:A}),c.a.createElement(s.a,{exact:!0,path:"/Persons/:id",component:P}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.1145ce7b.chunk.js.map