(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{242:function(t,e,l){"use strict";l.r(e);var o={props:["name"],data:function(){return{activeClass:"mx-1 px-5 py-2  text-primary rounded-full font-bold",nonActiveClass:"px-5 mx-1 py-2  border-primary  font-bold"}}},n=l(11),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mb-12 w-full"},[l("div",{staticClass:"text-sm flex fixed top-0 z-50 bg-theme_primary w-full mx-auto pt-2",staticStyle:{"max-width":"600px"}},[l("nuxt-link",{class:t.$route.path=="/"+t.name?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name}},[t._v("\r\n            "+t._s(t.$t("Followed"))+"\r\n            ")]),t._v(" "),l("nuxt-link",{class:t.$route.path=="/"+t.name+"/explore"?t.activeClass:t.nonActiveClass,attrs:{to:"/"+t.name+"/explore"}},[t._v("\r\n            "+t._s(t.$t("Explore"))+"\r\n            ")]),t._v(" "),l("nuxt-link",{staticClass:"px-5 mx-1 ml-auto py-2 font-bold",attrs:{to:"/search"}},[l("svg",{staticClass:"bi bi-search",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"}})])])],1)])}),[],!1,null,null,null);e.default=component.exports},268:function(t,e,l){"use strict";l.r(e);l(107);var o=l(240),n={components:{InfiniteLoading:l.n(o).a},layout:"no-header",middleware:"auth",scrollToTop:!1,data:function(){return{quest:"",search:"",balas_quest:"",page:1}},created:function(){this.$store.state.user.gender?this.$store.state.data_quest_following?(this.quest=this.$store.state.data_quest_following.data,this.page=this.$store.state.data_quest_following.page):this.getData():this.$router.push("/edit/profile")},methods:{loadMoregetData:function(t){var e=this;this.page=this.page+1,this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then((function(l){l.total>0?(e.lastPage=!1,e.quest=e.quest.concat(l.data),e.$store.commit("setDataQuestFollowing",{data:e.quest,page:e.page}),t.loaded()):t.complete()}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.lastPage=!1,this.page=1,this.$axios.$get("/quest/home?search="+this.search+"&page="+this.page).then((function(e){t.quest=e.data,t.$store.commit("setDataQuestFollowing",{data:t.quest,page:t.page}),0==t.quest.length&&t.$router.push("/explore")}))}}},r=l(11),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full"},[l("subheader",{attrs:{name:"feed"}}),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.$store.state.data_quest_following.data,(function(e){return l("card-post",{key:e.id,attrs:{data:e},on:{click:function(e){return t.$store.commit("set_scroll_home",t.document.documentElement.scrollTop)},balas:t.balasQuest}})})),t._v(" "),l("infinite-loading",{on:{infinite:t.loadMoregetData}},[l("div",{attrs:{slot:"no-more"},slot:"no-more"}),t._v(" "),l("div",{attrs:{slot:"no-results"},slot:"no-results"})])],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Subheader:l(242).default,BalasQuest:l(244).default,CardPost:l(243).default})}}]);