"use strict";(self["webpackChunkwebapp"]=self["webpackChunkwebapp"]||[]).push([[393],{8238:function(e,t,a){a.d(t,{Z:function(){return l}});var s=function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"footer-top"},[t("img",{attrs:{src:e.imgSrc,alt:"",srcset:""}}),t("div",{staticClass:"mt-18"},[t("div",{staticClass:"hover-div"},[t("p",{staticClass:"mb-16 flex space-between fs-18 align-center",on:{click:function(t){return e.showSub("contact")}}},[t("span",[e._v("联系我们")]),t("span",{staticClass:"arrow",class:e.contact?"arrow-rotate":"arrow-rotate-back"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.contact,expression:"contact"}],staticClass:"text-left"},[e._m(0),e._m(1)])]),t("div",{staticClass:"hover-div"},[t("p",{staticClass:"mb-16 flex space-between fs-18 align-center",on:{click:function(t){return e.showSub("agreement")}}},[t("span",[e._v("法律与合规")]),t("span",{staticClass:"arrow",class:e.agreement?"arrow-rotate":"arrow-rotate-back"})]),t("div",{directives:[{name:"show",rawName:"v-show",value:e.agreement,expression:"agreement"}],staticClass:"text-left"},[t("p",{staticClass:"mb-16",on:{click:function(t){return e.skip("useragreement")}}},[e._v("用户协议")]),t("p",{staticClass:"mb-16",on:{click:function(t){return e.skip("privacy")}}},[e._v("隐私政策")])])])])]),t("p",{staticClass:"footer-bottom fs-12"},[t("span",[e._v("成都纽沃德互娱科技有限公司 版权所有 © 2022")]),t("br"),t("span",{on:{click:e.skipNo}},[e._v("蜀ICP备2022017368号")]),t("br")])])},i=[function(){var e=this,t=e._self._c;return t("p",{staticClass:"mb-16"},[t("label",[e._v("邮箱：")]),t("span",[e._v("1303432@gmail.com")])])},function(){var e=this,t=e._self._c;return t("p",{staticClass:"mb-16"},[t("label",[e._v("微信：")]),t("span",[e._v("1303432@gmail.com")])])}],n={name:"AppFooterComponent",props:{msg:String},data(){return{imgSrc:a(7917),contact:!1,agreement:!1}},methods:{tabClick(e){console.log(e.target.dataset.id),this.currentId=e.target.dataset.id,e.target.dataset.url&&this.$router.push(e.target.dataset.url)},skip(e){let t=this.$router.resolve({path:`/${e}`});window.open(t.href,"_blank")},showSub(e){this[e]=!this[e]},skipNo(){window.open("https://www.beian.gov.cn/portal/registerSystemInfo?","_blank")}}},r=n,o=a(1001),c=(0,o.Z)(r,s,i,!1,null,"345e58cc",null),l=c.exports},6656:function(e,t,a){a.d(t,{Z:function(){return f}});var s=function(){var e=this,t=e._self._c;return t("section",[t("header",{directives:[{name:"show",rawName:"v-show",value:!e.isOpen,expression:"!isOpen"}],staticClass:"header flex space-between align-center"},[t("img",{attrs:{src:e.logoSrc,alt:"",width:"79",height:"18"}}),t("img",{attrs:{src:e.tabSrc,alt:"",width:"16",height:"14"},on:{click:e.open}})]),t("transition",{attrs:{name:"fade"}},[t("left-component",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],on:{close:e.close}})],1)],1)},i=[],n=function(){var e=this,t=e._self._c;return t("section",{staticClass:"tab-page"},[t("header",{staticClass:"header flex space-between align-center"},[t("img",{attrs:{src:e.logoSrc,alt:"",width:"79",height:"18"}}),t("img",{attrs:{src:e.closeSrc,alt:"",width:"32",height:"32"},on:{click:e.close}})]),t("ul",{staticClass:"tabList",on:{click:e.tabClick}},e._l(e.tabList,(function(a){return t("li",{key:a.id,attrs:{"data-id":a.id,"data-url":a.url}},[e._v(" "+e._s(a.title)+" ")])})),0)])},r=[],o={name:"AppLeftComponent",props:{msg:String},data(){return{logoSrc:a(9149),closeSrc:a(4014),tabList:[{id:1,title:"首页",url:"/app"},{id:2,title:"NIUNIU故事",url:"/app#story"},{id:3,title:"全明星计划",url:"/app#about"},{id:4,title:"产品下载",url:"/app/product"},{id:5,title:"人才招聘",url:"/app/job"}]}},mounted(){},methods:{close(){this.$emit("close",!1)},tabClick(e){e.target.dataset.url&&this.$router.push(e.target.dataset.url),this.$emit("close",!1)},handleScroll(){let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=e>48}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},c=o,l=a(1001),m=(0,l.Z)(c,n,r,!1,null,"335351bc",null),p=m.exports,d={name:"AppHeaderComponent",components:{LeftComponent:p},data(){return{logoSrc:a(9149),tabSrc:a(1993),isOpen:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},methods:{open(){this.isOpen=!0},close(e){this.isOpen=e},tabClick(e){e.target.dataset.url&&this.$router.push(e.target.dataset.url)},handleScroll(){let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=e>48}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},u=d,h=(0,l.Z)(u,s,i,!1,null,"4e41dd50",null),f=h.exports},4393:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var s=function(){var e=this,t=e._self._c;return t("section",{staticClass:"home-page"},[t("header-component"),t("div",{staticClass:"bg-video mb-20"},[t("img",{attrs:{src:e.videoImgSrc,alt:"",srcset:""}}),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeIn",expression:"'animate__fadeIn'"}],staticClass:"bg-title animate__animated"},[t("h1",{staticClass:"mb-6 fs-30"},[e._v("NIUNIU星球")]),t("p",{staticClass:"fs-14"},[e._v("-打造全新的UGC虚拟社区-")])])]),t("section",{staticClass:"app-container"},[t("div",{staticClass:"box-top mb-40",attrs:{id:"story"}},[t("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeInUp",expression:"'animate__fadeInUp'"}],staticClass:"fs-16 lh-30 animate__animated"},[e._v(" NIUNIU故事一共有1099个拓荒者，其中十位为地球上坐拥1.2亿的明星已加入 NIUNIU这趟迷人的星际旅行。 ")]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"flex space-between flex-wrap animate__animated"},[t("img",{attrs:{src:e.headerSrc,width:"152",height:"160"}}),t("img",{attrs:{src:e.headerSrc,width:"152",height:"160"}}),t("img",{attrs:{src:e.headerSrc,width:"152",height:"160"}}),t("img",{attrs:{src:e.headerSrc,width:"152",height:"160"}})])]),t("div",{staticClass:"po-r fs-16 mt-40",attrs:{id:"about"}},[t("p",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeInUp",expression:"'animate__fadeInUp'"}],staticClass:"mb-60 lh-36 animate__animated"},[e._v(" 剩余999位为创世开拓者 每个开拓者都拥有独立的IP故事与形象 999位开拓者会通过NIUNIU平台预约与发售的方式与用户链接 触发全新的故事线 影响NIUNIU故事的发展 ")]),t("p",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeInUp",expression:"'animate__fadeInUp'"}],staticClass:"mb-60 lh-36 animate__animated"},[e._v(" 未来NIUNIU会上线NIUINIU元宇宙社交APP 完美展示NIUNIU星球全貌与生态系统 在这里，不仅可以创作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚穿搭化身潮人，与好友线上聚会，拍照，聊天。 ")]),t("p",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeInUp",expression:"'animate__fadeInUp'"}],staticClass:"mb-60 lh-36 animate__animated"},[e._v(" 用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在NIUNIU星球搭建属于自己的虚拟家园。 ")]),t("p",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeInUp",expression:"'animate__fadeInUp'"}],staticClass:"mb-120 lh-36 animate__animated"},[e._v(" NIUNIU星球未来会拥有丰富的场景与游戏交互：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，等等 可以让您足不出户，拿起手机，即刻到达遥远的宇宙深处 体验NIUNIU星球。 ")])])]),t("footer-component")],1)},i=[],n=a(6656),r=a(8238),o={name:"HomePage",components:{HeaderComponent:n.Z,FooterComponent:r.Z},props:{msg:String},data(){return{videoSrc:a(6098),videoImgSrc:a(7626),headerSrc:a(9954)}},watch:{$route(e){this.goAnchor(e.hash)}},mounted(){this.goAnchor(this.$route.hash)},methods:{goAnchor(e){console.log(e),window.scrollTo({top:e&&document.querySelector(e).offsetTop-60||0,behavior:"smooth"})}}},c=o,l=a(1001),m=(0,l.Z)(c,s,i,!1,null,"8e448a64",null),p=m.exports},4014:function(e,t,a){e.exports=a.p+"img/close.0ef4005b.svg"},1993:function(e,t,a){e.exports=a.p+"img/tab.c2e10d38.svg"},9149:function(e){e.exports="data:image/png;base64,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"},7626:function(e,t,a){e.exports=a.p+"img/video.aea21c2c.png"},7917:function(e,t,a){e.exports=a.p+"img/footer-logo.2e5f1467.png"},9954:function(e,t,a){e.exports=a.p+"img/head.c0fef64d.png"},6098:function(e,t,a){e.exports=a.p+"media/bg-video.fdf5706a.mp4"}}]);
//# sourceMappingURL=393.4109d387.js.map