"use strict";(self["webpackChunkwebapp"]=self["webpackChunkwebapp"]||[]).push([[642],{5718:function(t,e,s){s.r(e),s.d(e,{default:function(){return l}});var a=function(){var t=this,e=t._self._c;return e("section",{staticClass:"product-page"},[e("HeaderComponent"),e("section",{staticClass:"app-container"},[e("div",{staticClass:"download-info"},[e("h1",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"fs-28 mb-12 level animated"},[t._v("NIUNIU 官方APP下载")]),e("p",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"mb-35 level animated"},[t._v("多元宇宙社交，来一场破次元的相遇")]),e("button",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"download-btn fs-16 fw-b animated",on:{click:t.download}},[t._v("立即下载")])]),e("h4",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],staticClass:"mb-40 fs-28 animated"},[t._v("多元宇宙，在此相遇")]),t._l(t.infoList,(function(s){return e("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeInUp",expression:"'fadeInUp'"}],key:s.id,staticClass:"info-box mb-50 animated"},[e("img",{attrs:{src:s.src,alt:"",srcset:"",width:"240",height:"240"}}),e("span",{staticClass:"fs-28 fw-b mt-40 mb-20"},[t._v(t._s(s.title))]),e("span",{staticClass:"c-fff-6"},[t._v(t._s(s.subTitle))])])}))],2),e("footer-component")],1)},i=[],n=s(9412),o=(s(3373),s(4927)),d=s(9618),r={name:"ProductPage",components:{HeaderComponent:o.Z,FooterComponent:d.Z},props:{msg:String},data(){return{imgSrc1:s(1386),imgSrc2:s(9457),infoList:[{id:1,title:"“我”有不凡",subTitle:"极具创意的世界空间，玩法多样",src:s(4755)},{id:2,title:"多元世界",subTitle:"有趣的数字装扮，趣味捏脸打造好好打造另一个自己",src:s(4388)},{id:3,title:"关于遇见",subTitle:"破次元的相遇，认识和自己更契合的ta",src:s(109)}],downloadList:[{id:1,title:"Android下载",titleCommon:"Android下载",titleCode:"扫码下载",src:s(9627),srcCommon:s(9627),srcCode:s(603)},{id:2,title:"iOS下载",titleCommon:"iOS下载",titleCode:"扫码下载",src:s(1447),srcCommon:s(1447),srcCode:s(603)}]}},mounted(){window.scrollTo({top:0,behavior:"smooth"})},methods:{mouseOver(t){let e=t.target.dataset.index;"string"===typeof e&&(this.downloadList[e].title=this.downloadList[e].titleCode,this.downloadList[e].src=this.downloadList[e].srcCode)},mouseLeave(t){let e=t.target.dataset.index;"string"===typeof e&&(this.downloadList[e].title=this.downloadList[e].titleCommon,this.downloadList[e].src=this.downloadList[e].srcCommon)},download(){(0,n.Z)("开发中")}}},c=r,p=s(1001),m=(0,p.Z)(c,a,i,!1,null,"c19f2156",null),l=m.exports},9627:function(t,e,s){t.exports=s.p+"assets/img/android.563e4a78.svg"},1447:function(t,e,s){t.exports=s.p+"assets/img/ios.c0611362.svg"},603:function(t,e,s){t.exports=s.p+"assets/img/code.7bf67cb5.png"},1386:function(t,e,s){t.exports=s.p+"assets/img/phone-1.c02b2a57.png"},9457:function(t,e,s){t.exports=s.p+"assets/img/phone-2.8af98cc9.png"},4755:function(t,e,s){t.exports=s.p+"assets/img/product-1.2591e779.png"},4388:function(t,e,s){t.exports=s.p+"assets/img/product-2.afcd8a41.png"},109:function(t,e,s){t.exports=s.p+"assets/img/product-3.cedfc2a1.png"}}]);