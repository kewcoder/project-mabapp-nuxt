(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{206:function(t,e,l){var content=l(211);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(74).default)("32abb0ec",content,!0,{sourceMap:!1})},207:function(t,e,l){"use strict";l.r(e);l(100),l(59),l(24),l(25),l(13);var r={parseQuestDate:function(t){var e=new Date(t),l=new Date,r=Math.round((l-e)/6e4);if(0==r)if((o=Math.round((l-e)/1e3))<10)var n="baru saja";else if(o<20)n="20 detik";else n="30 detik";else if(1==r){var o;if(30==(o=Math.round((l-e)/1e3)))n="30 detik";else if(o<60)n="< 1 menit";else n="1 menit"}else if(r<45)n=r+" menit";else if(r>44&&r<60)n="< 1 jam";else if(r<1440){var d=Math.round(r/60);if(1==d)n=" 1 jam";else n=d+" jam"}else if(r>1439&&r<2880)n="1 hari";else n=Math.round(r/1440)+" hari";return n}},n={props:["data","bigtext","active","hideBalasan"],data:function(){return{btnFollow:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",btnFollowed:"flex relative ml-auto py-1 px-3 rounded-tl-xl rounded-br-xl bg-primary text-xs text-secondary",followTemp:!1}},methods:{followQuest:function(t){var e=this;this.$axios.get("/quest/follow/"+t).then((function(t){e.followTemp=!0}))},parseQuestDate:function(data){return r.parseQuestDate(data)},textToArray:function(text){return text.toString().split(" ")},cekSumber:function(t){return t.search("spotify")>0?"spotify":t.search("youtube")>0?"youtube":void 0},imgPreview:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),l="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t)){var r=t.split("/");l="https://img.youtube.com/vi/".concat(r[4],"/mqdefault.jpg")}else l="";return l}return""}}},o=(l(210),l(9)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2 relative cursor-pointer border-b border-theme_primary_light overflow-hidden"},[l("div",{staticClass:"shadow-sm rounded-xl bg-theme_primary hover:bg-theme_primary_dark p-3 ",class:t.active?"bg-theme_primary_dark":""},[t.data.group_id&&!t.data.quest_id?l("nuxt-link",{staticClass:"text-primary p-1 px-4 bg-theme_primary_dark rounded-xl text-xs",attrs:{to:"/"+t.data.group.username}},[t._v("\n                                      \n                                     #"+t._s(t.data.group.username)+"\n\n                                  ")]):t._e(),t._v(" "),t.hideBalasan?t._e():l("span",[t.data.quest_id?l("nuxt-link",{staticClass:"p-1 px-4 text-xs ",attrs:{to:t.data.group.username}},[t._v("\n                             \n                                     Membalas \n                                     \n                                     "),l("nuxt-link",{staticClass:"bg-theme_primary_dark text-primary rounded-xl p-1 px-2",attrs:{to:"/quest/"+t.data.quest_id}},[l("b",[t._v(" @"+t._s(t.data.membalas_user))]),t._v("\n                                         : "+t._s(t.data.quest.text.substring(0,20))+" ..\n                                         \n                                      ")])],1):t._e()],1),t._v(" "),l("div",{staticClass:"flex pt-2"},[l("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.data.user.avatar,alt:"Event 1"}}),t._v(" "),l("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.data.user.username}},[l("span",{staticClass:"font-bold text-lg"},[t._v(t._s(t.data.user.name))]),t._v(" "),l("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.data.user.username))])]),t._v(" "),l("span",{staticClass:"text-xs ml-auto text-primary_light"},[t._v("\n                                      "+t._s(t.parseQuestDate(t.data.created_at))+"\n                                      ")])],1),t._v(" "),l("div",{staticClass:"w-auto flex "},[l("div",{staticClass:"flex flex-wrap items-start pl-8"},[t.data.audio?l("div",{staticClass:"py-2 w-full media-preview",on:{click:function(e){return t.$store.commit("setMediaPlayer",t.data.audio)}}},["youtube"==t.cekSumber(t.data.audio)?l("div",[l("img",{staticClass:"absolute play-button-youtube",attrs:{src:"/youtube.png",alt:"logo"}}),t._v(" "),l("img",{staticClass:"w-full rounded-xl",attrs:{src:t.imgPreview(t.data.audio),alt:"Preview"}})]):t._e(),t._v(" "),"spotify"==t.cekSumber(t.data.audio)?l("div",{staticClass:"bg-primary justify-beetween text-secondary w-full flex rounded-xl p-3 px-4 h-auto"},[l("svg",{staticClass:"bi bi-play",attrs:{width:"2em",height:"2em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}})]),t._v(" "),l("span",{staticClass:"p-1 px-2 font-bold"},[t._v("Play Podcast")])]):t._e()]):t._e(),t._v(" "),l("nuxt-link",{staticClass:"w-full pb-4 text-xl",class:t.bigtext?"text-3xl":"",attrs:{to:"/quest/"+t.data.id}},t._l(t.textToArray(t.data.text),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)})),0),t._v(" "),l("div",{staticClass:"flex text-right "},[l("nuxt-link",{staticClass:"text-xs lg:text-lg text-primary ",attrs:{to:"/quest/"+t.data.id}},[t._v("\n                                      "+t._s(t.data.total_qna)+" Balasan\n                                      ")]),t._v(" "),l("div",{staticClass:"flex mx-3"},[l("button",{staticClass:"flex relative ml-auto py-1 px-5 mx-2 rounded-tl-xl rounded-br-xl bg-theme_primary_light text-xs text-primary",on:{click:function(e){return t.$emit("balas",t.data)}}},[l("svg",{staticClass:"bi bi-plus-circle mt-1 mr-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v("\n                                                  Balas\n                                              ")]),t._v(" "),l("div",{class:t.data.followed||t.followTemp?t.btnFollowed:t.btnFollow,on:{click:function(e){return t.followQuest(t.data.id)}}},[l("svg",{staticClass:"bi bi-heart-fill mr-1 mt-1",attrs:{width:"12px",height:"12px",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"}})]),t._v(" "),t.data.followed?l("span",[t._v("\n                                                          "+t._s(t.data.total_follower)+"\n                                                      ")]):l("span",[t._v("\n                                                          "+t._s(t.followTemp?parseInt(t.data.total_follower)+1:t.data.total_follower)+"\n                                                      ")]),t._v(" "),t.data.followed?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",[t.followTemp?l("span",{staticClass:"px-1"},[t._v("Disukai")]):l("span",{staticClass:"px-1"},[t._v("Suka")])])])])],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports},208:function(t,e,l){"use strict";l.r(e);l(59),l(24),l(25),l(13),l(100);var r={scrollToTop:!0,layout:"app",middleware:"auth",props:["quest"],data:function(){return{media:"",text:""}},methods:{cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtube")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),l="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))l="https://www.youtube.com/embed/"+t.split("/")[3];else l="";return l}return""},kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.quest.group_id,quest_id:this.quest.id,text:this.text,audio:this.getUrl(this.media)}).then((function(e){t.text="",t.media="",t.$emit("kirim")}))}}},n=l(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2"},[l("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen"},[l("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){return t.$emit("batal")}}}),t._v(" "),l("div",{staticClass:"w-full p-4 lg:w-3/4 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[l("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm bg-theme_primary_dark rounded-lg"},[l("div",{staticClass:"pl-5 flex flex-wrap items-start"},[l("div",{staticClass:"flex"},[l("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Event 1"}}),t._v(" "),l("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.quest.user.username}},[l("span",{staticClass:"font-bold"},[t._v(t._s(t.quest.user.name))]),t._v(" "),l("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.quest.user.username))])])],1),t._v(" "),l("span",{staticClass:"w-full  mb-4 mt-2"},t._l(t.textToArray(t.quest.text),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)})),0)]),t._v(" "),l("b",{staticClass:"px-4 font-bold"},[t._v("Membalas :")]),t._v(" "),t.media||t.text?l("div",{staticClass:"px-4"},t._l(t.textToArray(t.text),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)})),0):t._e()]),t._v(" "),l("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm rounded-lg"},[l("label",{staticClass:"mx-2 text-xs"},[t._v("Opsional*")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.media,expression:"media"}],staticClass:"mx-2  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Podcast -  Spotify / Youtube",type:"text"},domProps:{value:t.media},on:{input:function(e){e.target.composing||(t.media=e.target.value)}}}),t._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{maxlength:"255",placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){return t.$emit("batal")}}},[t._v("\n                  Batalkan\n                ")])])])])])}),[],!1,null,null,null);e.default=component.exports},210:function(t,e,l){"use strict";var r=l(206);l.n(r).a},211:function(t,e,l){(e=l(73)(!1)).push([t.i,".videoWrapper iframe{width:100%;min-height:100px;border-radius:10px}.play-button-youtube{width:14%;top:40%;left:43%;opacity:.8}.media-preview{position:relative}.media-preview:hover .play-button-youtube{opacity:1}",""]),t.exports=e},216:function(t,e,l){"use strict";l.r(e);l(100);var r={layout:"no-header",middleware:"auth",props:["id","editprofile"],data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",profile:"",quest:"",search:"",filter:"Quest Only",balas_quest:"",page:1,loadMore:!1,last_page:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?this.loadMore=!1:t.loadMoregetData())}))},fetch:function(){var t=this;console.log(this.id),this.$axios.$get("/profile/"+this.id).then((function(data){t.profile=data,t.getData()}))},methods:{loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.$get("/profile/quest/"+this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(e){e.data.length>0?t.quest.data=t.quest.data.concat(e.data):t.last_page=!0,t.loadMore=!1}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/profile/quest/"+this.profile.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(data){console.log(data),t.quest=data}))}}},n=l(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.profile?l("div",{staticClass:"w-full"},[l("section",[l("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl "},[l("div",{staticClass:"w-full font-bold flex  "},[l("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.profile.avatar,alt:t.profile.name}}),t._v(" "),l("div",{staticClass:"w-full pl-5 flex flex-wrap items-start "},[l("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[t._v("\n            "+t._s(t.profile.name)+"\n            "),l("br"),t._v(" "),l("small",{staticClass:"text-lg text-primary"},[t._v("@"+t._s(t.profile.username))]),t._v(" "),t.profile.followed?l("div",{staticClass:"float-right text-sm"},[t.profile.followed?l("span",{staticClass:"cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                              Diikuti\n                          ")]):l("div",[t.followTemp?t._e():l("span",{staticClass:"cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary",on:{click:function(e){return t.followGroup(t.profile.id)}}},[t._v("\n                                        Ikuti\n                                    ")]),t._v(" "),t.followTemp?l("span",{staticClass:"fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                                      Diikuti\n                                  ")]):t._e()])]):t._e(),t._v(" "),t.editprofile?l("div",{staticClass:"float-right text-sm -mt-6"},[l("span",{staticClass:"mb-2 text-center cursor-pointer bg-theme_primary_dark  px-4 py-1 rounded-full text-primary",on:{click:function(e){return t.$store.commit("toggleSetting",!0)}}},[t._v("\n                              Pengaturan\n                       ")]),t._v(" "),l("div",{staticClass:"w-full pt-3 text-right"},[l("router-link",{staticClass:"mb-2 text-center cursor-pointer bg-theme_primary_dark px-4 py-1 rounded-full text-primary",attrs:{to:"/edit/profile"}},[t._v("\n                                  Edit Profile\n                          ")])],1)]):t._e()])])])])]),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),l("div",{staticClass:"p-2 flex flex-row mt-2",staticStyle:{"overflow-x":"scroll"}},[l("div",{class:"Quest Only"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest Only",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest Saja\n    ")]),t._v(" "),l("div",{class:"Quest & Balasan"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest & Balasan",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest & Balasan\n    ")]),t._v(" "),l("div",{class:"Media"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Media",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Media\n    ")])]),t._v(" "),l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest.data,(function(e){return l("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n      Memuat ...\n    ")]):t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{BalasQuest:l(208).default,CardPost:l(207).default})},219:function(t,e,l){"use strict";l.r(e);l(100);var r={layout:"no-header",middleware:"auth",data:function(){return{filterClassActive:"cursor-pointer relative mx-1 px-6 bg-primary text-secondary rounded-xl flex text-sm items-center justify-center p-2",filterClass:"cursor-pointer relative mx-1 px-6 bg-theme_primary_dark rounded-xl flex text-sm items-center justify-center p-2",group:"",quest:"",search:"",filter:"Quest Only",balas_quest:"",page:1,loadMore:!1,last_page:!1}},mounted:function(){var t=this;window.addEventListener("scroll",(function(){document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight&&(t.last_page?this.loadMore=!1:t.loadMoregetData())}))},fetch:function(){var t=this;this.$axios.$get("/group/"+this.$route.params.url).then((function(data){t.group=data,t.getData()}))},methods:{loadMoregetData:function(){var t=this;this.loadMore=!0,this.page=this.page+1,this.$axios.$get("/group/quest/"+this.group.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(e){e.data.length>0?t.quest.data=t.quest.data.concat(e.data):t.last_page=!0,t.loadMore=!1}))},newQuest:function(){this.balas_quest="",this.getData()},balasQuest:function(data){this.balas_quest=data},getData:function(){var t=this;this.last_page=!1,this.page=1,this.$axios.$get("/group/quest/"+this.group.id+"?filter="+this.filter+"&search="+this.search+"&page="+this.page).then((function(data){console.log(data),t.quest=data}))}}},n=l(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.group?l("div",{staticClass:"w-full"},[l("section",[l("div",{staticClass:"w-full flex flex-wrap bg-theme_primary p-2 pt-6 rounded-xl "},[l("div",{staticClass:"w-full font-bold flex "},[l("img",{staticClass:"w-16 h-16  rounded-full",attrs:{src:t.group.avatar,alt:t.group.name}}),t._v(" "),l("div",{staticClass:"w-full pl-5 mt-1 flex flex-wrap items-start "},[l("div",{staticClass:"w-full text-xl lg:text-2xl mb-2"},[t._v("\n            "+t._s(t.group.name)+"\n            "),l("br"),t._v(" "),l("small",[t._v("#"+t._s(t.group.username))]),t._v(" "),t.group.followed?l("div",{staticClass:"float-right text-sm"},[t.group.followed?l("span",{staticClass:"cursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                              Diikuti\n                          ")]):l("div",[t.followTemp?t._e():l("span",{staticClass:"cursor-pointer bg-primary px-4 py-1 rounded-full text-secondary",on:{click:function(e){return t.followGroup(t.group.id)}}},[t._v("\n                                        Ikuti\n                                    ")]),t._v(" "),t.followTemp?l("span",{staticClass:"fursor-pointer bg-secondary text-primary px-4 py-1 rounded-full"},[t._v("\n                                      Diikuti\n                                  ")]):t._e()])]):t._e()])])])])]),t._v(" "),l("new-quest",{attrs:{group:t.group},on:{kirim:t.newQuest}}),t._v(" "),t.balas_quest?l("balas-quest",{attrs:{quest:t.balas_quest},on:{kirim:t.newQuest,batal:function(e){t.balas_quest=!1}}}):t._e(),t._v(" "),l("div",{staticClass:"p-2 flex flex-row mt-2",staticStyle:{"overflow-x":"scroll"}},[l("div",{class:"Quest Only"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest Only",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest Saja\n    ")]),t._v(" "),l("div",{class:"Quest & Balasan"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Quest & Balasan",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Quest & Balasan\n    ")]),t._v(" "),l("div",{class:"Media"==t.filter?t.filterClassActive:t.filterClass,on:{click:function(e){t.filter="Media",t.getData()}}},[l("div",{staticClass:"-mt-1 -ml-1 h-6 w-6 absolute top-0 left-0 rounded-full shadow-lg bg-primary mr-3"}),t._v("\n        Media\n    ")])]),t._v(" "),l("section",{staticClass:"w-full rounded-xl pb-20 flex flex-wrap"},[t._l(t.quest.data,(function(e){return l("card-post",{key:e.id,attrs:{data:e},on:{balas:t.balasQuest}})})),t._v(" "),t.loadMore?l("span",{staticClass:"p-4 text-center w-full"},[t._v("\n      Memuat ...\n    ")]):t._e()],2)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NewQuest:l(220).default,BalasQuest:l(208).default,CardPost:l(207).default})},220:function(t,e,l){"use strict";l.r(e);l(59),l(24),l(25),l(13),l(100);var r={scrollToTop:!0,layout:"app",middleware:"auth",props:["group"],data:function(){return{modal_quest:!1,media:"",text:""}},methods:{createNew:function(){this.modal_quest=!0},cekSumber:function(t){if(t){if(t.search("spotify")>0)return"spotify";if(t.search("youtu.be")>0)return"youtube"}},textToArray:function(text){return text.toString().split(" ")},getUrl:function(t){if(t){if("spotify"==this.cekSumber(t))var e=t.split("/"),l="https://open.spotify.com/embed-podcast/"+e[3]+"/"+e[4].split("?")[0];else if("youtube"==this.cekSumber(t))l="https://www.youtube.com/embed/"+t.split("/")[3];else l="";return l}return""},kirim:function(){var t=this;this.$axios.$post("/quest",{group_id:this.group.id,text:this.text,audio:this.getUrl(this.media),quest_id:""}).then((function(e){t.modal_quest=!1,t.text="",t.media="",t.$emit("kirim")}))}}},n=l(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"w-full p-2"},[l("div",{class:t.$store.state.topMenu?"":"hidden"},[l("button",{staticClass:" bg-primary text-secondary p-3 right-0 rounded-full fixed bottom-0 mr-5 z-30 mb-16 lg:mr-20 flex lg:px-5 ",on:{click:t.createNew}},[l("svg",{staticClass:"bi bi-plus-circle",attrs:{width:"1.5em",height:"1.5em",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg"}},[l("path",{attrs:{"fill-rule":"evenodd",d:"M8 3.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H4a.5.5 0 0 1 0-1h3.5V4a.5.5 0 0 1 .5-.5z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M7.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0V8z"}}),t._v(" "),l("path",{attrs:{"fill-rule":"evenodd",d:"M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}})]),t._v(" "),l("span",{staticClass:"hidden lg:block px-2"},[t._v(" Buat Quest")])])]),t._v(" "),t.modal_quest?l("section",{staticClass:"w-full bg-transparent flex flex-wrap justify-center content-center z-30 fixed top-0 right-0 h-screen overflow-scroll"},[t.modal_quest?l("div",{staticClass:"w-full  flex flex-wrap justify-center content-center bg-theme_primary_dark opacity-50 z-40 fixed top-0 right-0 h-screen ",on:{click:function(e){t.modal_quest=!1}}}):t._e(),t._v(" "),l("div",{staticClass:"w-full p-4 lg:w-3/4 flex flex-wrap justify-center z-50 content-center bg-theme_primary rounded-xl"},[l("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm bg-theme_primary_dark rounded-lg"},[l("div",{staticClass:"flex"},[l("img",{staticClass:"w-10 h-10 rounded-full",attrs:{src:t.$store.state.user.avatar,alt:"Event 1"}}),t._v(" "),l("nuxt-link",{staticClass:"p-2",attrs:{to:"/@"+t.$store.state.user.username}},[l("span",{staticClass:"font-bold"},[t._v(t._s(t.$store.state.user.name))]),t._v(" "),l("span",{staticClass:"text-primary text-xs"},[t._v("@"+t._s(t.$store.state.user.username))])])],1),t._v(" "),l("br"),t._v(" "),t.media?l("div",{staticClass:"w-full pb-4 videoWrapper"},["spotify"==t.cekSumber(t.media)?l("iframe",{attrs:{src:t.getUrl(t.media),width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}}):t._e(),t._v(" "),"youtube"==t.cekSumber(t.media)?l("iframe",{attrs:{width:"560",height:"315",src:t.getUrl(t.media),frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}}):t._e()]):t._e(),t._v(" "),t._l(t.textToArray(t.text),(function(e,i){return l("span",{key:i},["@"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e}},[t._v(" "+t._s(e)+" ")]):"#"==e.slice(0,1)?l("nuxt-link",{staticClass:"text-primary",attrs:{to:"/"+e.substring(1)}},[t._v(" "+t._s(e)+" ")]):l("span",[t._v(" "+t._s(e)+" ")])],1)}))],2),t._v(" "),l("div",{staticClass:"w-full lg:w-1/2 p-4 shadow-sm rounded-lg"},[l("label",{staticClass:"mx-2 text-xs"},[t._v("Opsional*")]),t._v(" "),l("input",{directives:[{name:"model",rawName:"v-model",value:t.media,expression:"media"}],staticClass:"mx-2  p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{placeholder:"Link Podcast -  Spotify / Youtube",type:"text"},domProps:{value:t.media},on:{input:function(e){e.target.composing||(t.media=e.target.value)}}}),t._v(" "),l("textarea",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"mx-2 mt-5 p-3 bg-theme_primary_dark w-full rounded-lg",attrs:{maxlength:"255",placeholder:"Katakan sesuatu ..."},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}}),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 bg-primary hover:bg-primary_dark text-white shadow-sm",on:{click:t.kirim}},[t._v("\n                  Kirim\n                ")]),t._v(" "),l("button",{staticClass:"mx-2 py-2 w-full rounded-lg mt-2 shadow-sm hover:bg-theme_primary_dark",on:{click:function(e){t.modal_quest=!1}}},[t._v("\n                  Batalkan\n                ")])])])]):t._e()])}),[],!1,null,null,null);e.default=component.exports},234:function(t,e,l){"use strict";l.r(e);l(38),l(39);var r={layout:"no-header",middleware:"auth",data:function(){return{page:!1,forpage:""}},created:function(){this.$route.params.url.includes("@")?(this.page=!0,this.forpage="user"):(this.page=!0,this.forpage="group")}},n=l(9),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",["group"==t.forpage?l("detail-group",{attrs:{id:t.$route.params.url}}):t._e(),t._v(" "),"user"==t.forpage?l("detail-user",{attrs:{id:t.$route.params.url}}):t._e(),t._v(" "),t.page?t._e():l("div",[t._v("\n        404\n    ")])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DetailGroup:l(219).default,DetailUser:l(216).default})}}]);