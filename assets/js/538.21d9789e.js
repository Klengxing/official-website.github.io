"use strict";(self["webpackChunkwebapp"]=self["webpackChunkwebapp"]||[]).push([[538],{1769:function(s,t,e){e.r(t),e.d(t,{default:function(){return d}});var a=function(){var s=this,t=s._self._c;return t("section",{staticClass:"product-page"},[t("HeaderComponent"),t("section",{staticClass:"container"},[t("div",{staticClass:"mt-187 po-r animated slideInUp mb-160"},[t("h1",{staticClass:"fs-58 mb-20"},[s._v("NIUNIU 官方APP下载")]),t("p",{staticClass:"fs-22 c-E9F3FD mb-100"},[s._v("多元宇宙社交，来一场破次元的相遇")]),t("div",{staticClass:"flex justify-content-center"},s._l(s.downloadList,(function(e,a){return t("div",{key:e.id,class:{"mr-120":0===a}},[t("div",{staticClass:"mb-16 download-box flex",attrs:{"data-index":a},on:{mouseover:s.mouseOver,mouseleave:s.mouseLeave}},[t("img",{directives:[{name:"show",rawName:"v-show",value:!e.isOver,expression:"!item.isOver"}],attrs:{src:e.src,alt:"",srcset:""}}),t("span",{directives:[{name:"show",rawName:"v-show",value:e.isOver,expression:"item.isOver"}],staticClass:"c-000"},[s._v("开发中")])]),t("span",{staticClass:"fs-16"},[s._v(s._s(e.title))])])})),0)]),t("h4",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mb-60 fs-38 po-r animated"},[s._v(" 多元宇宙，在此相遇 ")]),t("div",{staticClass:"flex space-between"},s._l(s.infoList,(function(e){return t("div",{directives:[{name:"animate",rawName:"v-animate",value:e.class,expression:"item.class"}],key:e.id,staticClass:"info-box animated"},[t("img",{attrs:{src:e.src,alt:"",srcset:"",width:"222",height:"222"}}),t("span",{staticClass:"fs-24 fw-b mt-60 mb-20"},[s._v(s._s(e.title))]),t("span",{staticClass:"c-fff-6"},[s._v(s._s(e.subTitle))])])})),0)]),t("FooterComponent")],1)},i=[],o=e(7230),n=e(219),r={name:"ProductPage",components:{HeaderComponent:o.Z,FooterComponent:n.Z},props:{msg:String},data(){return{imgSrc1:e(1386),imgSrc2:e(9457),infoList:[{id:1,title:"“我”有不凡",subTitle:"极具创意的世界空间，玩法多样",src:e(4755),class:"fadeInLeft"},{id:2,title:"多元世界",subTitle:"有趣的数字装扮，趣味捏脸打造好好打造另一个自己",src:e(4388),class:"zoomIn"},{id:3,title:"关于遇见",subTitle:"破次元的相遇，认识和自己更契合的ta",src:e(109),class:"fadeInRight"}],downloadList:[{id:1,isOver:!1,src:e(9627),srcCommon:e(9627),srcCode:e(603)},{id:2,isOver:!1,src:e(1447),srcCommon:e(1447),srcCode:e(603)}]}},mounted(){this.$store.state.pageTabId=4,window.scrollTo({top:0,behavior:"smooth"})},methods:{mouseOver(s){let t=s.target.dataset.index;console.log(typeof t),"string"===typeof t&&(this.downloadList[t].isOver=!0)},mouseLeave(s){let t=s.target.dataset.index;console.log(typeof t),"string"===typeof t&&(this.downloadList[t].isOver=!1)}}},c=r,l=e(1001),p=(0,l.Z)(c,a,i,!1,null,"ba070d0a",null),d=p.exports},9627:function(s,t,e){s.exports=e.p+"assets/img/android.563e4a78.svg"},1447:function(s,t,e){s.exports=e.p+"assets/img/ios.c0611362.svg"},603:function(s,t,e){s.exports=e.p+"assets/img/code.7bf67cb5.png"},1386:function(s,t,e){s.exports=e.p+"assets/img/phone-1.c02b2a57.png"},9457:function(s,t,e){s.exports=e.p+"assets/img/phone-2.8af98cc9.png"},4755:function(s,t,e){s.exports=e.p+"assets/img/product-1.2591e779.png"},4388:function(s,t,e){s.exports=e.p+"assets/img/product-2.afcd8a41.png"},109:function(s,t,e){s.exports=e.p+"assets/img/product-3.cedfc2a1.png"}}]);