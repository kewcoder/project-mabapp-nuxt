(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{727:function(t,e,n){"use strict";n.r(e);n(18),n(15);var l=n(3),r=(n(66),n(2)),o=n(278),d=n.n(o);n(279);r.a.use(d.a);var m={layout:"no-header",middleware:"auth",data:function(){return{avatar:{},d:"",errMessges:""}},created:function(){var t=this;this.$axios.$get("/group/"+this.$route.params.url).then((function(data){data?(console.log(data),t.d=data):t.$router.push(t.localePath("/groups"))}))},methods:{updateToString:function(t){"username"==t&&(this.d.username=this.d.username.replace(/[^a-zA-Z0-9]/g,"_"))},onInit:function(){this.avatar.addClipPlugin((function(t,e,n,l,r){t.beginPath(),t.arc(e+l/2,n+r/2,l/2,0,2*Math.PI,!0),t.closePath()}))},save:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.d.avatar=t.avatar.generateDataUrl("image/jpeg",.8),""!=t.d.name&&""!=t.d.desc&&""!=t.d.type&&t.$axios.post("/group/edit/"+t.d.id,t.d).then((function(e){e.data.info?t.errMessges="Username Telah digunakan":t.$router.push(t.localePath("/".concat(t.d.username)))}));case 2:case"end":return e.stop()}}),e)})))()}}},c=n(11),component=Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full bg-theme_primary"},[n("section",{staticClass:"w-full shadow-sm rounded-xl mb-20"},[n("div",{staticClass:"shadow-sm rounded-xl px-5 pb-5"},[n("div",{staticClass:"flex flex-wrap"},[n("div",{staticClass:"w-full  px-5 flex flex-wrap"},[n("div",{staticClass:"flex w-full"},[n("croppa",{staticClass:"shadow-sm rounded-lg",attrs:{width:100,"prevent-white-space":"",height:100,placeholder:"100x100px","initial-image":t.d.avatar,quality:1},on:{init:t.onInit},model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}}),t._v(" "),n("div",{staticClass:"w-full p-5 flex flex-wrap"},[n("label",{staticClass:"text-left  pl-2 w-full mb-3",attrs:{for:"usernama"}},[t._v("TagName")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.username,expression:"d.username"}],staticClass:"w-full\n                                  shadow-sm bg-theme_primary_light\n                                  py-2 px-4 \n                                  rounded-lg mb-3\n                                  ",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.d.username},on:{keyup:function(e){return t.updateToString("username")},input:function(e){e.target.composing||t.$set(t.d,"username",e.target.value)}}})])],1),t._v(" "),n("div",{staticClass:"w-full flex flex-wrap"},[n("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"nama"}},[t._v("Nama")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.name,expression:"d.name"}],staticClass:"w-full\n                          shadow-sm bg-theme_primary_light\n                          py-2 px-4 \n                          rounded-lg mb-3\n                          ",attrs:{type:"text",placeholder:"Nama"},domProps:{value:t.d.name},on:{input:function(e){e.target.composing||t.$set(t.d,"name",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"w-full flex flex-wrap"},[n("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"instagram"}},[t._v("Instagram")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.instagram,expression:"d.instagram"}],staticClass:"w-full\n                          shadow-sm bg-theme_primary_light\n                          py-2 px-4 \n                          rounded-lg mb-3\n                          ",attrs:{type:"text",placeholder:"Instagram"},domProps:{value:t.d.instagram},on:{input:function(e){e.target.composing||t.$set(t.d,"instagram",e.target.value)}}})]),t._v(" "),n("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"type"}},[t._v("Type")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:t.d.type,expression:"d.type"}],staticClass:"w-full\n                      shadow-sm bg-theme_primary_light\n                      py-2 px-4 \n                      rounded-lg mb-3\n                      ",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.d,"type",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"Ormawa"}},[t._v("Ormawa")]),t._v(" "),n("option",{attrs:{value:"UKM"}},[t._v("UKM")]),t._v(" "),n("option",{attrs:{value:"StartUp"}},[t._v("StartUp")]),t._v(" "),n("option",{attrs:{value:"Komunitas"}},[t._v("Komunitas")]),t._v(" "),n("option",{attrs:{value:"Lainnya"}},[t._v("Lainnya")])]),t._v(" "),n("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"email"}},[t._v("Descriptions")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.d.desc,expression:"d.desc"}],staticClass:"w-full\n                          shadow-sm bg-theme_primary_light\n                          py-2 px-4 \n                          rounded-lg mb-3\n                          ",attrs:{placeholder:"Descriptions"},domProps:{value:t.d.desc},on:{input:function(e){e.target.composing||t.$set(t.d,"desc",e.target.value)}}}),t._v(" "),n("div",{staticClass:"w-full flex flex-wrap"},[n("label",{staticClass:"text-left  pl-2 w-full my-3",attrs:{for:"admin"}},[t._v("Admin* (Masukkan Username Akun)")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.d.admin,expression:"d.admin"}],staticClass:"w-full\n                            shadow-sm bg-theme_primary_light\n                            py-2 px-4 \n                            rounded-lg mb-3\n                            ",attrs:{type:"text",placeholder:"Admin"},domProps:{value:t.d.admin},on:{input:function(e){e.target.composing||t.$set(t.d,"admin",e.target.value)}}})]),t._v(" "),n("span",{staticClass:"w-full text-danger font-bold text-center"},[t._v("\n                          "+t._s(t.errMessges)+"\n                        ")]),t._v(" "),n("button",{staticClass:"w-full  py-2 px-4 bg-primary_dark text-white hover:opacity-75 rounded-lg mt-5",on:{click:t.save}},[n("i",{staticClass:"fa fa-plus"}),t._v("\n                          Simpan Perubahan\n                      ")]),t._v(" "),n("div",{staticClass:"w-full text-center py-2 px-4 bg-theme_primary_light hover:opacity-75 rounded-lg mt-5",on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"fa fa-plus"}),t._v("\n                          Batal\n                      ")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);