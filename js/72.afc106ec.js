"use strict";(self["webpackChunkwebapp"]=self["webpackChunkwebapp"]||[]).push([[72],{1439:function(t,s,a){a.d(s,{Z:function(){return n}});var i=function(){var t=this,s=t._self._c;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"flex footer-top space-between"},[s("img",{attrs:{src:t.imgSrc,alt:"",srcset:""}}),t._m(0)]),t._m(1)])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"mt-16"},[s("p",{staticClass:"text-left fs-32 fw-b mb-28"},[t._v("Get in touch")]),s("p",{staticClass:"mb-24"},[s("span",{staticClass:"mr-138"},[s("label",{staticClass:"mr-16"},[t._v("邮箱:")]),t._v("1303432@gmail.com")]),s("span",[t._v("用户协议")])]),s("p",[s("span",{staticClass:"mr-138"},[s("label",{staticClass:"mr-16"},[t._v("微信:")]),t._v("1303432@gmail.com")]),s("span",[t._v("隐私政策")])])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"footer-bottom fs-12"},[s("span",[t._v("成都纽沃德互娱科技有限公司 版权所有 © 2022")]),s("span",[t._v("蜀ICP备1231231312312号-1")]),s("span",[t._v("川网文【1231】231231号")])])}],r={name:"FooterComponent",props:{msg:String},data(){return{imgSrc:a(7917)}},methods:{tabClick(t){console.log(t.target.dataset.id),this.currentId=t.target.dataset.id,t.target.dataset.url&&this.$router.push(t.target.dataset.url)}}},c=r,l=a(1001),o=(0,l.Z)(c,i,e,!1,null,"5ceb1d5c",null),n=o.exports},4233:function(t,s,a){a.d(s,{Z:function(){return n}});var i=function(){var t=this,s=t._self._c;return s("header",{staticClass:"header",class:{"header-fix":t.isFixed}},[s("ul",{staticClass:"tabList flex po-r",on:{click:t.tabClick}},t._l(t.tabList,(function(a){return s("li",{key:a.id,class:{selectedTab:t.$store.state.pageTabId==a.id},attrs:{"data-id":a.id,"data-url":a.url}},[t._v(" "+t._s(a.title)+" ")])})),0)])},e=[],r={name:"HeaderComponent",props:{msg:String},data(){return{tabList:[{id:1,title:"首页",url:"/"},{id:2,title:"NIUNIU故事",url:"/#story"},{id:3,title:"全明星计划",url:"/#about"},{id:4,title:"产品下载",url:"/product"},{id:5,title:"人才招聘",url:"/job"}],currentId:1,isFixed:!1}},mounted(){window.addEventListener("scroll",this.handleScroll),this.handleScroll()},methods:{tabClick(t){t.target.dataset.url&&this.$router.push(t.target.dataset.url)},handleScroll(){let t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.isFixed=t>48}},beforeDestroy(){window.removeEventListener("scroll",this.handleScroll)}},c=r,l=a(1001),o=(0,l.Z)(c,i,e,!1,null,"8c1c2e50",null),n=o.exports},4072:function(t,s,a){a.r(s),a.d(s,{default:function(){return m}});var i=function(){var t=this,s=t._self._c;return s("section",{staticClass:"home-page"},[s("div",{staticClass:"bg-video"},[s("img",{attrs:{src:t.videoImgSrc,alt:"",srcset:""}}),s("HeaderComponent"),t._m(0)],1),s("section",{staticClass:"container"},[s("div",{staticClass:"flex space-between align-center box-top mb-120",attrs:{id:"story"}},[t._m(1),s("div",{staticClass:"flex"},[s("img",{staticClass:"mr-20",attrs:{src:t.headerSrc,width:"152",height:"160"}}),s("img",{staticClass:"mr-20",attrs:{src:t.headerSrc,width:"152",height:"160"}}),s("img",{staticClass:"mr-20",attrs:{src:t.headerSrc,width:"152",height:"160"}}),s("img",{attrs:{src:t.headerSrc,width:"152",height:"160"}})])]),s("div",{staticClass:"po-r"},[t._m(2),t._m(3),s("p",{staticClass:"mb-60 lh-30"},[t._v("用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在NIUNIU星球搭建属于自己的虚拟家园。")]),t._m(4),s("div",{staticClass:"left-star"}),s("div",{staticClass:"right-star"}),s("img",{staticClass:"left-quotation",attrs:{src:t.leftQuotationSrc,alt:"",srcset:""}}),s("img",{staticClass:"right-quotation",attrs:{src:t.rightQuotationSrc,alt:"",srcset:""}})]),s("h5",{staticClass:"fs-22 text-left",attrs:{id:"about"}},[t._v("产品介绍")]),s("div",{staticClass:"po-r"},[t._m(5),t._m(6),t._m(7),s("img",{staticClass:"vector-1",attrs:{src:t.vectorSrc1}}),s("img",{staticClass:"mark-circle",attrs:{src:t.circleSrc}}),s("img",{staticClass:"vector-2",attrs:{src:t.vectorSrc2}})])]),s("FooterComponent")],1)},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"bg-title"},[s("h1",{staticClass:"mb-16 fs-72"},[t._v("NIUNIU星球")]),s("p",{staticClass:"fs-32"},[t._v("-打造全新的UGC虚拟社区-")])])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"fs-18 text-left lh-30"},[t._v(" NIUNIU故事一共有1099个拓荒者，"),s("br"),t._v(" 其中十位为地球上坐拥1.2亿的明星已加入"),s("br"),t._v(" NIUNIU这趟迷人的星际旅行。"),s("br")])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-60 lh-30"},[t._v("剩余999位为创世开拓者 每个开拓者都拥有独立的IP故事与形象"),s("br"),t._v(" 999位开拓者会通过NIUNIU平台预约与发售的方式与用户链接"),s("br"),t._v(" 触发全新的故事线 影响NIUNIU故事的发展")])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-60 lh-30"},[t._v("未来NIUNIU会上线NIUINIU元宇宙社交APP 完美展示NIUNIU星球全貌与生态系统"),s("br"),t._v(" 在这里，不仅可以创作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚穿搭化身潮人，与好友线上聚会，拍照，聊天。")])},function(){var t=this,s=t._self._c;return s("p",{staticClass:"mb-120 lh-30"},[t._v("NIUNIU星球未来会拥有丰富的场景与游戏交互：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，等等"),s("br"),t._v(" 可以让您足不出户，拿起手机，即刻到达遥远的宇宙深处 体验NIUNIU星球。")])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex space-between mb-186 mt-60"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"mr-50"},[s("div",{staticClass:"img-box mb-20"}),s("span",{staticClass:"fs-12 c-A6"},[t._v("NIUNIU APP")])]),s("div",[s("div",{staticClass:"img-box mb-20"}),s("span",{staticClass:"fs-12 c-A6"},[t._v("NIUNIU H5")])])]),s("div",{staticClass:"text-left"},[s("h4",{staticClass:"mb-30 fs-28 mt-10"},[t._v("体验")]),s("p",{staticClass:"lh-32"},[t._v("NIUNIU致力于搭建一个全新的WEB3虚拟世界社交APP 。在这里，不仅可以创"),s("br"),t._v(" 作出属于自己的3D虚拟形象身份，购买与收藏数字艺术品。还可以化妆，时尚"),s("br"),t._v(" 穿搭化身潮人，与好友线上聚会，拍照，聊天。体验")])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex space-between mb-186"},[s("div",{staticClass:"text-left"},[s("h4",{staticClass:"mb-30 fs-28"},[t._v("创建")]),s("p",{staticClass:"lh-32"},[t._v("用户在APP里可创建个人主页通过文字，图片分享个人生活，也可在"),s("br"),t._v(" NIUNIU虚拟世界搭建属于自己的虚拟家园。")])]),s("div",{staticClass:"flex mt-10"},[s("div",{staticClass:"mr-50"},[s("div",{staticClass:"img-box mb-20"}),s("span",{staticClass:"fs-12 c-A6"},[t._v("NIUNIU 服装")])]),s("div",[s("div",{staticClass:"img-box mb-20"}),s("span",{staticClass:"fs-12 c-A6"},[t._v("NIUNIU 联名品牌")])])])])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"flex space-between"},[s("div",{staticClass:"flex ml-110"},[s("div",{staticClass:"mr-50"},[s("div",{staticClass:"img-box mb-20"}),s("span",{staticClass:"fs-12 c-A6"},[t._v("NIUNIU 场景")])]),s("div",[s("div",{staticClass:"img-box mb-20"}),s("span",{staticClass:"fs-12 c-A6"},[t._v("NIUNIU 周边")])])]),s("div",{staticClass:"text-left mr-95"},[s("h4",{staticClass:"mb-30 fs-28 mt-10"},[t._v("社交")]),s("p",{staticClass:"lh-32"},[t._v("未来用户可以通过无代码工具自行创建丰富场景建立庞大的UGC虚拟社区比"),s("br"),t._v(" 如：数字艺术馆，游乐场，咖啡厅，时尚买手店，农场，滑雪场，舞蹈教室，"),s("br"),t._v(" 等等可以让NIUNIU用户足不出户，拿起手机，即刻到达。")])])])}],r=a(4233),c=a(1439),l={name:"HomePage",components:{HeaderComponent:r.Z,FooterComponent:c.Z},props:{msg:String},data(){return{videoSrc:a(6098),videoImgSrc:a(4850),headerSrc:a(9954),leftQuotationSrc:a(5781),rightQuotationSrc:a(2478),circleSrc:a(8835),vectorSrc1:a(9346),vectorSrc2:a(3926)}},watch:{$route(t){this.goAnchor(t.hash)}},mounted(){this.goAnchor(this.$route.hash)},methods:{goAnchor(t){"#story"===t?this.$store.state.pageTabId=2:"#about"===t&&(this.$store.state.pageTabId=3),window.scrollTo({top:t&&document.querySelector(t).offsetTop-80||0,behavior:"smooth"})}}},o=l,n=a(1001),d=(0,n.Z)(o,i,e,!1,null,"5bcf4910",null),m=d.exports},5781:function(t,s,a){t.exports=a.p+"img/left-quotation.61f6116e.svg"},2478:function(t,s,a){t.exports=a.p+"img/right-quotation.034d6694.svg"},7917:function(t,s,a){t.exports=a.p+"img/footer-logo.3fb6f9d0.png"},9954:function(t,s,a){t.exports=a.p+"img/head.c0fef64d.png"},8835:function(t,s,a){t.exports=a.p+"img/mark-circle.50aa9667.png"},9346:function(t,s,a){t.exports=a.p+"img/vector-1.3432c2de.png"},3926:function(t,s,a){t.exports=a.p+"img/vector-2.1fc8ec67.png"},4850:function(t,s,a){t.exports=a.p+"img/video.3085d94d.png"},6098:function(t,s,a){t.exports=a.p+"media/bg-video.fdf5706a.mp4"}}]);
//# sourceMappingURL=72.afc106ec.js.map