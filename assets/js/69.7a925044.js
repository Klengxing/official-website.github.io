"use strict";(self["webpackChunkwebapp"]=self["webpackChunkwebapp"]||[]).push([[69],{6775:function(e,t,a){a.d(t,{Z:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("footer",{staticClass:"footer"},[t("div",{staticClass:"flex footer-top space-between"},[t("img",{attrs:{src:e.imgSrc,alt:"",srcset:""}}),t("div",{staticClass:"mt-18"},[t("p",{staticClass:"text-left fs-32 fw-b mb-25"},[e._v("Get in touch")]),t("p",{staticClass:"mb-16"},[e._m(0),t("span",{staticClass:"cursor-pointer",on:{click:function(t){return e.skip("useragreement")}}},[e._v("用户协议")])]),t("p",[e._m(1),t("span",{staticClass:"cursor-pointer",on:{click:function(t){return e.skip("privacy")}}},[e._v("隐私政策")])])])]),t("p",{staticClass:"footer-bottom fs-12"},[t("span",[e._v("成都纽沃德互娱科技有限公司 版权所有 © 2022")]),t("span",{staticClass:"cursor-pointer",on:{click:e.skipNo}},[e._v("蜀ICP备2022017368号")])])])},i=[function(){var e=this,t=e._self._c;return t("span",{staticClass:"mr-110"},[t("label",{staticClass:"mr-12"},[e._v("邮箱:")]),e._v("1303432@gmail.com")])},function(){var e=this,t=e._self._c;return t("span",{staticClass:"mr-110"},[t("label",{staticClass:"mr-12"},[e._v("微信:")]),e._v("1303432@gmail.com")])}],n={name:"FooterComponent",props:{msg:String},data(){return{imgSrc:a(7917)}},methods:{tabClick(e){console.log(e.target.dataset.id),this.currentId=e.target.dataset.id,e.target.dataset.url&&this.$router.push(e.target.dataset.url)},skip(e){let t=this.$router.resolve({path:`/${e}`});window.open(t.href,"_blank")},skipNo(){window.open("https://www.beian.gov.cn/portal/registerSystemInfo?","_blank")}}},o=n,r=a(1001),m=(0,r.Z)(o,s,i,!1,null,"6b5aa08a",null),c=m.exports},3424:function(e,t,a){a.d(t,{Z:function(){return c}});var s=function(){var e=this,t=e._self._c;return t("header",{staticClass:"header",class:{"header-fix":e.isFixed}},[t("ul",{staticClass:"tabList flex po-r",on:{click:e.tabClick}},e._l(e.tabList,(function(a){return t("li",{key:a.id,class:{selectedTab:e.$store.state.pageTabId==a.id},attrs:{"data-id":a.id,"data-url":a.url}},[e._v(" "+e._s(a.title)+" ")])})),0)])},i=[],n={name:"HeaderComponent",props:{msg:String},data(){return{tabList:[{id:1,title:"首页",url:"/"},{id:2,title:"NIUNIU故事",url:"/#story"},{id:3,title:"全明星计划",url:"/#about"},{id:4,title:"产品下载",url:"/product"},{id:5,title:"人才招聘",url:"/job"}],currentId:1,isFixed:!1}},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},methods:{tabClick(e){e.target.dataset.url&&this.$router.push(e.target.dataset.url)},handleScroll(){let e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;console.log(this.$router.history.current.path),"/"===this.$router.history.current.path?this.isFixed=e>880:this.isFixed=e>48}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},o=n,r=a(1001),m=(0,r.Z)(o,s,i,!1,null,"165f48ff",null),c=m.exports},1069:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("section",{staticClass:"home-page"},[t("div",{staticClass:"bg-video"},[t("video",{attrs:{src:e.videoSrc,autoplay:"",loop:"",muted:""},domProps:{muted:!0}}),t("HeaderComponent"),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"fadeIn",expression:"'fadeIn'"}],staticClass:"bg-title animated"},[t("h1",{staticClass:"mb-16 fs-72"},[e._v("NIUNIU星球")]),t("p",{staticClass:"fs-32"},[e._v("-打造全新的UGC虚拟社区-")])])],1),t("section",{staticClass:"container"},[t("div",{staticClass:"flex space-between align-center box-top mb-120",attrs:{id:"story"}},[t("p",{staticClass:"fs-18 text-left lh-30"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("NIUNIU故事一共有1099个拓荒者，")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("其中十位为地球上坐拥1.2亿的明星已加入")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("NIUNIU这趟迷人的星际旅行。")]),t("br")]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"flex animated"},[t("img",{staticClass:"mr-20",attrs:{src:e.headerSrc,width:"152",height:"160"}}),t("img",{staticClass:"mr-20",attrs:{src:e.headerSrc,width:"152",height:"160"}}),t("img",{staticClass:"mr-20",attrs:{src:e.headerSrc,width:"152",height:"160"}}),t("img",{attrs:{src:e.headerSrc,width:"152",height:"160"}})])]),t("div",{staticClass:"po-r"},[t("p",{staticClass:"mb-60 lh-30"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v(" 剩余999位为创世开拓者 每个开拓者都拥有独立的IP故事与形象")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("999位开拓者会通过NIUNIU平台预约与发售的方式与用户链接")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("触发全新的故事线 影响NIUNIU故事的发展")])]),t("p",{staticClass:"mb-60 lh-30"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("未来NIUNIU会上线NIUINIU元宇宙社交APP 完美展示NIUNIU星球全貌与生态系统")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("在这里，不仅可以创作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚穿搭化身潮人，与好友线上聚会，拍照，聊天。")])]),t("p",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"mb-60 lh-30 nodeItem"},[e._v("用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在NIUNIU星球搭建属于自己的虚拟家园。 ")]),t("p",{staticClass:"mb-120 lh-30"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("NIUNIU星球未来会拥有丰富的场景与游戏交互：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，等等")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("可以让您足不出户，拿起手机，即刻到达遥远的宇宙深处 体验NIUNIU星球。")])]),t("div",{staticClass:"left-star"}),t("div",{staticClass:"right-star"}),t("img",{staticClass:"left-quotation",attrs:{src:e.leftQuotationSrc,alt:"",srcset:""}}),t("img",{staticClass:"right-quotation",attrs:{src:e.rightQuotationSrc,alt:"",srcset:""}})]),t("h5",{staticClass:"fs-22 text-left",attrs:{id:"about"}},[e._v("产品介绍")]),t("div",{staticClass:"po-r"},[t("div",{staticClass:"flex space-between mb-186 mt-60"},[t("div",{staticClass:"flex"},[t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mr-50 animated"},[t("div",{staticClass:"img-box mb-20 img-app"}),t("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU APP")])]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"animated"},[t("div",{staticClass:"img-box mb-20 img-H5"}),t("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU H5")])])]),t("div",{staticClass:"text-left"},[t("h4",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mb-30 fs-28 mt-10 animated"},[e._v("体验")]),t("p",{staticClass:"lh-32"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("NIUNIU致力于搭建一个全新的WEB3虚拟世界社交APP 。在这里，不仅可以创")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("穿搭化身潮人，与好友线上聚会，拍照，聊天。体验")])])])]),t("div",{staticClass:"flex space-between mb-186"},[t("div",{staticClass:"text-left"},[t("h4",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mb-30 fs-28 animated"},[e._v("创建")]),t("p",{staticClass:"lh-32"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("NIUNIU虚拟世界搭建属于自己的虚拟家园。")])])]),t("div",{staticClass:"flex mt-10"},[t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mr-50 animated"},[t("div",{staticClass:"img-box mb-20 img-clothing"}),t("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 服装")])]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"animated"},[t("div",{staticClass:"img-box mb-20 img-brand"}),t("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 联名品牌")])])])]),t("div",{staticClass:"flex space-between"},[t("div",{staticClass:"flex ml-60"},[t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mr-50 animated"},[t("div",{staticClass:"img-box mb-20 img-scene"}),t("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 场景")])]),t("div",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"animated"},[t("div",{staticClass:"img-box mb-20 img-periphery"}),t("span",{staticClass:"fs-12 c-A6"},[e._v("NIUNIU 周边")])])]),t("div",{staticClass:"text-left mr-64"},[t("h4",{directives:[{name:"animate",rawName:"v-animate",value:"zoomIn",expression:"'zoomIn'"}],staticClass:"mb-30 fs-28 mt-10 animated"},[e._v("社交")]),t("p",{staticClass:"lh-32"},[t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow",expression:"'nodeItemShow'"}],staticClass:"nodeItem"},[e._v("未来用户可以通过无代码工具自行创建丰富场景建立庞大的UGC虚拟社区比")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow2",expression:"'nodeItemShow2'"}],staticClass:"nodeItem"},[e._v("如：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，")]),t("br"),t("span",{directives:[{name:"animate",rawName:"v-animate",value:"nodeItemShow3",expression:"'nodeItemShow3'"}],staticClass:"nodeItem"},[e._v("等等可以让NIUNIU用户足不出户，拿起手机，即刻到达。")])])])]),t("img",{staticClass:"vector-1",attrs:{src:e.vectorSrc1}}),t("img",{staticClass:"mark-circle",attrs:{src:e.circleSrc}}),t("img",{staticClass:"vector-2",attrs:{src:e.vectorSrc2}})])]),t("FooterComponent")],1)},i=[],n=a(3424),o=a(6775),r={name:"HomePage",components:{HeaderComponent:n.Z,FooterComponent:o.Z},props:{msg:String},data(){return{videoSrc:"https://www-niuniu-ren.oss-cn-shanghai.aliyuncs.com/assets/media/bg-video.fdf5706a.mp4",videoImgSrc:a(4850),headerSrc:a(9954),leftQuotationSrc:a(5781),rightQuotationSrc:a(2478),circleSrc:a(8835),vectorSrc1:a(9346),vectorSrc2:a(3926)}},watch:{$route(e){this.goAnchor(e.hash)}},mounted(){this.goAnchor(this.$route.hash)},methods:{goAnchor(e){"#story"===e?this.$store.state.pageTabId=2:"#about"===e&&(this.$store.state.pageTabId=3),window.scrollTo({top:e&&document.querySelector(e).offsetTop-80||0,behavior:"smooth"})}}},m=r,c=a(1001),l=(0,c.Z)(m,s,i,!1,null,"6b8f1f1e",null),d=l.exports},5781:function(e,t,a){e.exports=a.p+"assets/img/left-quotation.61f6116e.svg"},2478:function(e,t,a){e.exports=a.p+"assets/img/right-quotation.034d6694.svg"},7917:function(e,t,a){e.exports=a.p+"assets/img/footer-logo.2e5f1467.png"},9954:function(e,t,a){e.exports=a.p+"assets/img/head.c0fef64d.png"},8835:function(e,t,a){e.exports=a.p+"assets/img/mark-circle.50aa9667.png"},9346:function(e,t,a){e.exports=a.p+"assets/img/vector-1.650d11e0.png"},3926:function(e,t,a){e.exports=a.p+"assets/img/vector-2.fcbe68cb.png"},4850:function(e,t,a){e.exports=a.p+"assets/img/video.3085d94d.png"}}]);