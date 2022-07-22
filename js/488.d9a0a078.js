"use strict";(self["webpackChunkwebapp"]=self["webpackChunkwebapp"]||[]).push([[488],{6775:function(e,a,t){t.d(a,{Z:function(){return c}});var s=function(){var e=this,a=e._self._c;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"flex footer-top space-between"},[a("img",{attrs:{src:e.imgSrc,alt:"",srcset:""}}),a("div",{staticClass:"mt-18"},[a("p",{staticClass:"text-left fs-32 fw-b mb-25"},[e._v("Get in touch")]),a("p",{staticClass:"mb-16"},[e._m(0),a("span",{staticClass:"cursor-pointer",on:{click:function(a){return e.skip("useragreement")}}},[e._v("用户协议")])]),a("p",[e._m(1),a("span",{staticClass:"cursor-pointer",on:{click:function(a){return e.skip("privacy")}}},[e._v("隐私政策")])])])]),a("p",{staticClass:"footer-bottom fs-12"},[a("span",[e._v("成都纽沃德互娱科技有限公司 版权所有 © 2022")]),a("span",{staticClass:"cursor-pointer",on:{click:e.skipNo}},[e._v("蜀ICP备2022017368号")])])])},i=[function(){var e=this,a=e._self._c;return a("span",{staticClass:"mr-110"},[a("label",{staticClass:"mr-12"},[e._v("邮箱:")]),e._v("1303432@gmail.com")])},function(){var e=this,a=e._self._c;return a("span",{staticClass:"mr-110"},[a("label",{staticClass:"mr-12"},[e._v("微信:")]),e._v("1303432@gmail.com")])}],n={name:"FooterComponent",props:{msg:String},data(){return{imgSrc:t(7917)}},methods:{tabClick(e){console.log(e.target.dataset.id),this.currentId=e.target.dataset.id,e.target.dataset.url&&this.$router.push(e.target.dataset.url)},skip(e){let a=this.$router.resolve({path:`/${e}`});window.open(a.href,"_blank")},skipNo(){window.open("https://www.beian.gov.cn/portal/registerSystemInfo?","_blank")}}},o=n,m=t(1001),r=(0,m.Z)(o,s,i,!1,null,"6b5aa08a",null),c=r.exports},4302:function(e,a,t){t.d(a,{Z:function(){return c}});var s=function(){var e=this,a=e._self._c;return a("header",{staticClass:"header",class:{"header-fix":e.isFixed}},[a("ul",{staticClass:"tabList flex po-r",on:{click:e.tabClick}},e._l(e.tabList,(function(t){return a("li",{key:t.id,class:{selectedTab:e.$store.state.pageTabId==t.id},attrs:{"data-id":t.id,"data-url":t.url}},[e._v(" "+e._s(t.title)+" ")])})),0)])},i=[],n={name:"HeaderComponent",props:{msg:String},data(){return{tabList:[{id:1,title:"首页",url:"/"},{id:2,title:"NIUNIU故事",url:"/#story"},{id:3,title:"全明星计划",url:"/#about"},{id:4,title:"产品下载",url:"/product"},{id:5,title:"人才招聘",url:"/job"}],currentId:1,isFixed:!1}},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},methods:{tabClick(e){e.target.dataset.url&&this.$router.push(e.target.dataset.url)},handleScroll(){let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=e>48}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},o=n,m=t(1001),r=(0,m.Z)(o,s,i,!1,null,"ca2e0fde",null),c=r.exports},2488:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var s=function(){var e=this,a=e._self._c;return a("section",{staticClass:"home-page"},[a("div",{staticClass:"bg-video"},[a("img",{attrs:{src:e.videoImgSrc,alt:"",srcset:""}}),a("HeaderComponent"),a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__fadeIn",expression:"'animate__fadeIn'"}],staticClass:"bg-title animate__animated"},[a("h1",{staticClass:"mb-16 fs-72"},[e._v("NIUNIU星球")]),a("p",{staticClass:"fs-32"},[e._v("-打造全新的UGC虚拟社区-")])])],1),a("section",{staticClass:"container"},[a("div",{staticClass:"flex space-between align-center box-top mb-120",attrs:{id:"story"}},[a("p",{staticClass:"fs-18 text-left lh-30"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("NIUNIU故事一共有1099个拓荒者，")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("其中十位为地球上坐拥1.2亿的明星已加入")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("NIUNIU这趟迷人的星际旅行。")]),a("br")]),a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"flex animate__animated"},[a("img",{staticClass:"mr-20",attrs:{src:e.headerSrc,width:"152",height:"160"}}),a("img",{staticClass:"mr-20",attrs:{src:e.headerSrc,width:"152",height:"160"}}),a("img",{staticClass:"mr-20",attrs:{src:e.headerSrc,width:"152",height:"160"}}),a("img",{attrs:{src:e.headerSrc,width:"152",height:"160"}})])]),a("div",{staticClass:"po-r"},[a("p",{staticClass:"mb-60 lh-30"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v(" 剩余999位为创世开拓者 每个开拓者都拥有独立的IP故事与形象")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("999位开拓者会通过NIUNIU平台预约与发售的方式与用户链接")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("触发全新的故事线 影响NIUNIU故事的发展")])]),a("p",{staticClass:"mb-60 lh-30"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("未来NIUNIU会上线NIUINIU元宇宙社交APP 完美展示NIUNIU星球全貌与生态系统")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("在这里，不仅可以创作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚穿搭化身潮人，与好友线上聚会，拍照，聊天。")])]),a("p",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"mb-60 lh-30 nodeItem"},[e._v("用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在NIUNIU星球搭建属于自己的虚拟家园。 ")]),a("p",{staticClass:"mb-120 lh-30"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("NIUNIU星球未来会拥有丰富的场景与游戏交互：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，等等")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("可以让您足不出户，拿起手机，即刻到达遥远的宇宙深处 体验NIUNIU星球。")])]),a("div",{staticClass:"left-star"}),a("div",{staticClass:"right-star"}),a("img",{staticClass:"left-quotation",attrs:{src:e.leftQuotationSrc,alt:"",srcset:""}}),a("img",{staticClass:"right-quotation",attrs:{src:e.rightQuotationSrc,alt:"",srcset:""}})]),a("h5",{staticClass:"fs-22 text-left",attrs:{id:"about"}},[e._v("产品介绍")]),a("div",{staticClass:"po-r"},[a("div",{staticClass:"flex space-between mb-186 mt-60"},[a("div",{staticClass:"flex"},[a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"mr-50 animate__animated"},[a("div",{staticClass:"img-box mb-20 img-app"}),a("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU APP")])]),a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"animate__animated"},[a("div",{staticClass:"img-box mb-20 img-H5"}),a("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU H5")])])]),a("div",{staticClass:"text-left"},[a("h4",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"mb-30 fs-28 mt-10 animate__animated"},[e._v("体验")]),a("p",{staticClass:"lh-32"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("NIUNIU致力于搭建一个全新的WEB3虚拟世界社交APP 。在这里，不仅可以创")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("穿搭化身潮人，与好友线上聚会，拍照，聊天。体验")])])])]),a("div",{staticClass:"flex space-between mb-186"},[a("div",{staticClass:"text-left"},[a("h4",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"mb-30 fs-28 animate__animated"},[e._v("创建")]),a("p",{staticClass:"lh-32"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("NIUNIU虚拟世界搭建属于自己的虚拟家园。")])])]),a("div",{staticClass:"flex mt-10"},[a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"mr-50 animate__animated"},[a("div",{staticClass:"img-box mb-20 img-clothing"}),a("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 服装")])]),a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"animate__animated"},[a("div",{staticClass:"img-box mb-20 img-brand"}),a("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 联名品牌")])])])]),a("div",{staticClass:"flex space-between"},[a("div",{staticClass:"flex ml-60"},[a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"mr-50 animate__animated"},[a("div",{staticClass:"img-box mb-20 img-scene"}),a("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 场景")])]),a("div",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"animate__animated"},[a("div",{staticClass:"img-box mb-20 img-periphery"}),a("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 周边")])])]),a("div",{staticClass:"text-left mr-64"},[a("h4",{directives:[{name:"animate",rawName:"v-animate",value:"animate__zoomIn",expression:"'animate__zoomIn'"}],staticClass:"mb-30 fs-28 mt-10 animate__animated"},[e._v("社交")]),a("p",{staticClass:"lh-32"},[a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("未来用户可以通过无代码工具自行创建丰富场景建立庞大的UGC虚拟社区比")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("如：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，")]),a("br"),a("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("等等可以让NIUNIU用户足不出户，拿起手机，即刻到达。")])])])]),a("img",{staticClass:"vector-1",attrs:{src:e.vectorSrc1}}),a("img",{staticClass:"mark-circle",attrs:{src:e.circleSrc}}),a("img",{staticClass:"vector-2",attrs:{src:e.vectorSrc2}})])]),a("FooterComponent")],1)},i=[],n=t(4302),o=t(6775),m={name:"HomePage",components:{HeaderComponent:n.Z,FooterComponent:o.Z},props:{msg:String},data(){return{videoSrc:t(6098),videoImgSrc:t(4850),headerSrc:t(9954),leftQuotationSrc:t(5781),rightQuotationSrc:t(2478),circleSrc:t(8835),vectorSrc1:t(9346),vectorSrc2:t(3926)}},watch:{$route(e){this.goAnchor(e.hash)}},mounted(){this.goAnchor(this.$route.hash)},methods:{goAnchor(e){"#story"===e?this.$store.state.pageTabId=2:"#about"===e&&(this.$store.state.pageTabId=3),window.scrollTo({top:e&&document.querySelector(e).offsetTop-80||0,behavior:"smooth"})}}},r=m,c=t(1001),l=(0,c.Z)(r,s,i,!1,null,"4771097b",null),d=l.exports},5781:function(e,a,t){e.exports=t.p+"img/left-quotation.61f6116e.svg"},2478:function(e,a,t){e.exports=t.p+"img/right-quotation.034d6694.svg"},7917:function(e,a,t){e.exports=t.p+"img/footer-logo.2e5f1467.png"},9954:function(e,a,t){e.exports=t.p+"img/head.c0fef64d.png"},8835:function(e,a,t){e.exports=t.p+"img/mark-circle.50aa9667.png"},9346:function(e,a,t){e.exports=t.p+"img/vector-1.650d11e0.png"},3926:function(e,a,t){e.exports=t.p+"img/vector-2.fcbe68cb.png"},4850:function(e,a,t){e.exports=t.p+"img/video.3085d94d.png"},6098:function(e,a,t){e.exports=t.p+"media/bg-video.fdf5706a.mp4"}}]);
//# sourceMappingURL=488.d9a0a078.js.map