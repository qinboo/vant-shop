(function(t){function e(e){for(var n,i,s=e[0],c=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var l=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"043f":function(t,e,a){},"04d9":function(t,e,a){},"1a5f":function(t,e,a){"use strict";a("e0e5")},"22d0":function(t,e,a){},2395:function(t,e,a){},"42af":function(t,e,a){"use strict";a("ecc2")},"4ee0":function(t,e,a){"use strict";a("8a7a")},5156:function(t,e,a){"use strict";a("b4e9")},5278:function(t,e,a){"use strict";a("043f")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4"),a("a9e3"),a("b680");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view"),a("MyTabbar",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.showTabbar,expression:"$route.meta.showTabbar"}]})],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-tabbar",{attrs:{"active-color":"darkred","inactive-color":"#666"},model:{value:t.active,callback:function(e){t.active=e},expression:"active"}},[a("van-tabbar-item",{attrs:{to:"/home",icon:"home-o"}},[t._v("首页")]),a("van-tabbar-item",{attrs:{to:"/topic",icon:"label-o"}},[t._v("专题")]),a("van-tabbar-item",{attrs:{to:"/category",icon:"apps-o"}},[t._v("分类")]),a("van-tabbar-item",{attrs:{to:"/cart",icon:"cart-o"}},[t._v("购物车")]),a("van-tabbar-item",{attrs:{to:"/user",icon:"user-o"}},[t._v("我的")])],1)],1)},s=[],c={computed:{active:{active:{get:function(){switch(this.$route.path){case"/home":return 0;case"/topic":return 1;case"/category":return 2;case"/cart":return 3;case"/user":return 4;default:break}},set:function(){}}}}},u=c,l=a("2877"),d=Object(l["a"])(u,i,s,!1,null,"6141f894",null),p=d.exports,f={components:{MyTabbar:p}},h=f,v=(a("7c55"),Object(l["a"])(h,r,o,!1,null,null,null)),g=v.exports,m=a("8c4f"),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("van-search",{attrs:{placeholder:"商品搜索，共239款好物",disabled:"",background:"fff",shape:"around"},on:{click:t.goTopup},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),a("van-swipe",{attrs:{autoplay:3e3,"indicator-color":"darkred"}},t._l(t.banner,(function(t){return a("van-swipe-item",{key:t.id},[a("img",{staticStyle:{display:"block"},attrs:{src:t.image_url,width:"100%"}})])})),1),a("van-grid",{attrs:{"column-num":5}},t._l(t.channel,(function(t){return a("van-grid-item",{key:t.id,attrs:{icon:t.icon_url,text:t.name}})})),1),a("div",{staticClass:"title"},[t._v("品牌制造商直供")]),a("ul",{staticClass:"brand"},t._l(t.brandList,(function(e){return a("li",{key:e.id},[a("img",{attrs:{src:e.pic_url,alt:""}}),a("h4",[t._v(t._s(e.name))]),a("div",[t._v(t._s(t._f("filterMoney")(e.floor_price)))])])})),0),a("div",{staticClass:"title"},[t._v("专题精选")]),a("div",{staticClass:"mytopic"},[a("van-swipe",{attrs:{loop:!1,width:330,"show-indicators":!1}},t._l(t.topicList,(function(e){return a("van-swipe-item",{key:e.id},[a("img",{staticStyle:{display:"block"},attrs:{src:e.item_pic_url,width:"100%",height:"200"}}),a("div",[t._v(" "+t._s(e.title)+" "),a("span",[t._v(t._s(t._f("filterMoney")(e.price_info)))])]),a("p",[t._v(t._s(e.subtitle))])])})),1)],1)],1)},y=[],_=a("1da1"),k=(a("96cf"),a("d3b7"),a("bc3a")),w=a.n(k),C=w.a.create({baseURL:"http://kumanxuan1.f3322.net:8001",timeout:5e3});C.interceptors.request.use((function(t){var e=localStorage.getItem("token");return e&&(t.headers["X-Nideshop-Token"]=e),t}),(function(t){return Promise.reject(t)})),C.interceptors.response.use((function(t){return t.data}),(function(t){return Promise.reject(t)}));var x=C,L=function(){return x.get("/index/index")},S=function(){return x.get("/search/index")},$=function(t){return x.get("/goods/list",{params:t})},T=function(t){return x.get("/search/helper",{params:t})},O=function(){return x.get("/search/clearhistory")},j=function(t){return x.post("/auth/loginByWeb",t)},P=function(t){return x.get("/goods/detail",{params:t})},E=function(t){return x.get("/goods/related",{params:t})},I=function(){return x.get("/cart/goodscount")},M=function(t){return x.post("/cart/add",t)},R=function(){return x.get("/cart/index")},V=function(t){return x.post("/cart/checked",t)},A=function(t){return x.post("/cart/update",t)},K=function(t){return x.post("/cart/delete",t)},N=function(t){return x.get("/topic/list",{params:t})},D=function(){return x.get("/catalog/index")},H=function(t){return x.get("/catalog/current",{params:t})},F={components:{},data:function(){return{searchVal:"",banner:[],channel:[],brandList:[],topicList:[]}},created:function(){this.getHomeData()},methods:{getHomeData:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,L();case 2:a=e.sent,0==a.errno&&(n=a.data,r=n.banner,o=n.channel,i=n.brandList,s=n.topicList,t.banner=r,t.channel=o,t.brandList=i,t.topicList=s);case 4:case"end":return e.stop()}}),e)})))()},goTopup:function(){this.$router.push("/popup")}},mounted:function(){}},q=F,z=(a("e36f"),Object(l["a"])(q,b,y,!1,null,"d0e7ba86",null)),G=z.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"popup"},[a("van-search",{attrs:{placeholder:t.iptPlaceholder,"show-action":""},on:{cancel:t.onCancel,search:t.onSearch,input:t.onInput,focus:t.onInput},model:{value:t.iptVal,callback:function(e){t.iptVal=e},expression:"iptVal"}}),1==t.blockShow?a("HistoryHot",{attrs:{historyKeywordList:t.historyKeywordList,hotKeywordList:t.hotKeywordList},on:{tagClick:t.tagClick}}):2==t.blockShow?a("MyList",{attrs:{listArr:t.listArr},on:{cellClick:t.tagClick}}):a("MyProduct",{attrs:{filterCategory:t.filterCategory,goodsList:t.goodsList},on:{categoryChange:t.categoryChange,priceChange:t.priceChange}})],1)},B=[],W=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isShowHistory?a("div",{staticClass:"history"},[a("div",{staticClass:"top"},[a("h4",[t._v("历史记录")]),a("van-icon",{attrs:{name:"delete"},on:{click:t.clearFn}})],1),a("div",{staticClass:"down"},t._l(t.historyKeywordList,(function(e,n){return a("van-tag",{key:n,attrs:{type:"default",plain:""},on:{click:function(a){return t.tagClick(e)}}},[t._v(t._s(e))])})),1)]):t._e(),a("div",{staticClass:"history"},[t._m(0),a("div",{staticClass:"down"},t._l(t.hotKeywordList,(function(e,n){return a("van-tag",{key:n,attrs:{type:"default",plain:""}},[t._v(t._s(e.keyword))])})),1)])])}),U=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top"},[a("h4",[t._v("热门搜索")])])}],X={props:{historyKeywordList:Array,hotKeywordList:Array},data:function(){return{isShowHistory:!0}},methods:{clearFn:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:a=e.sent,0==a.errno&&(t.$toast.success("成功"),setTimeout((function(){t.isShowHistory=!1}),2e3));case 4:case"end":return e.stop()}}),e)})))()},tagClick:function(t){this.$emit("tagClick",t)}}},Q=X,Y=(a("5156"),Object(l["a"])(Q,W,U,!1,null,"74e4208a",null)),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"}},t._l(t.listArr,(function(e){return a("van-cell",{key:e,attrs:{title:e},on:{click:function(a){return t.cellClick(e)}}})})),1)},et=[],at={props:{listArr:Array},data:function(){return{finished:!0}},methods:{cellClick:function(t){this.$emit("cellClick",t)}},mounted:function(){}},nt=at,rt=Object(l["a"])(nt,tt,et,!1,null,"152ecfa8",null),ot=rt.exports,it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-dropdown-menu",[a("van-dropdown-item",{attrs:{title:"综合",disabled:""}}),a("van-dropdown-item",{attrs:{title:"价格",options:t.priceArr},on:{change:t.priceChange},model:{value:t.priceVal,callback:function(e){t.priceVal=e},expression:"priceVal"}}),a("van-dropdown-item",{attrs:{title:"分类",options:t.filterCategory},on:{change:t.categoryChange},model:{value:t.categoryVal,callback:function(e){t.categoryVal=e},expression:"categoryVal"}})],1),0==t.goodsList.length?a("van-empty",{attrs:{description:"您搜索的产品不存在",image:"search"}}):t._e(),a("product",{attrs:{goodsList:t.goodsList}})],1)},st=[],ct=(a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",t._l(t.goodsList,(function(e){return a("li",{key:e.id,on:{click:function(a){return t.goToDetail(e.id)}}},[a("img",{staticStyle:{display:"block"},attrs:{src:e.list_pic_url,width:"100%",alt:""}}),a("div",{staticClass:"van-ellipsis"},[t._v(t._s(e.name))]),a("div",{staticClass:"price"},[t._v(t._s(t._f("filterMoney")(e.retail_price)))])])})),0)}),ut=[],lt={props:{goodsList:Array},data:function(){return{}},methods:{goToDetail:function(t){this.$router.push("/detail?id="+t)}}},dt=lt,pt=(a("1a5f"),Object(l["a"])(dt,ct,ut,!1,null,"344980fa",null)),ft=pt.exports,ht={components:{product:ft},props:{filterCategory:Array,goodsList:Array},data:function(){return{priceVal:"",categoryVal:1005e3,priceArr:[{text:"价格由高到低",value:"desc"},{text:"价格由低到高",value:"asc"}]}},mounted:function(){var t=this;this.filterCategory.map((function(e){e.checked&&(t.categoryVal=e.value)}))},methods:{categoryChange:function(t){this.$emit("categoryChange",t)},priceChange:function(t){this.$emit("priceChange",t)}}},vt=ht,gt=Object(l["a"])(vt,it,st,!1,null,"2c009baf",null),mt=gt.exports,bt={components:{HistoryHot:Z,MyList:ot,MyProduct:mt},data:function(){return{iptVal:"",iptPlaceholder:"",blockShow:1,historyKeywordList:[],hotKeywordList:[],filterCategory:[],listArr:[],categoryId:0,goodsList:[],order:"desc",sort:"id"}},created:function(){this.getPopupData()},methods:{tagClick:function(t){this.iptVal=t,this.onSearch()},categoryChange:function(t){this.categoryId=t,this.onSearch()},priceChange:function(t){this.order=t,this.sort="price",this.onSearch()},getPopupData:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,S();case 2:a=e.sent,0===a.errno&&(n=a.data,r=n.defaultKeyword,o=n.historyKeywordList,i=n.hotKeywordList,t.iptPlaceholder=r.keyword,t.historyKeywordList=o,t.hotKeywordList=i);case 4:case"end":return e.stop()}}),e)})))()},onCancel:function(){this.$router.go(-1)},onSearch:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,$({keyword:t.iptVal,categoryId:t.categoryId,order:t.order,sort:t.sort,page:1,size:20});case 2:a=e.sent,0==a.errno&&(t.blockShow=3,n=a.data,r=n.filterCategory,o=n.goodsList,i=JSON.parse(JSON.stringify(r).replace(/name/g,"text").replace(/id/g,"value")),t.filterCategory=i,t.goodsList=o);case 4:case"end":return e.stop()}}),e)})))()},onInput:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.blockShow=2,e.next=3,T({keyword:t.iptVal});case 3:a=e.sent,0==a.errno&&(t.listArr=a.data);case 5:case"end":return e.stop()}}),e)})))()}}},yt=bt,_t=(a("df54"),Object(l["a"])(yt,J,B,!1,null,"2bca0da6",null)),kt=_t.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("ul",{staticClass:"topic"},t._l(t.topicList,(function(e){return a("li",{key:e.id},[a("img",{attrs:{src:e.scene_pic_url,alt:""}}),a("div",{staticClass:"info"},[a("h4",[t._v(t._s(e.title))]),a("p",{staticClass:"desc"},[t._v(t._s(e.subtitle))]),a("p",{staticClass:"price"},[t._v(t._s(t._f("filterMoney")(e.price_info))+"起")])])])})),0),a("div",{staticClass:"changePage"},[a("van-button",{staticClass:"prev",attrs:{type:"default",disabled:t.isPrev},on:{click:t.prevPage}},[t._v("上一页")]),a("van-button",{staticClass:"next",attrs:{type:"default",disabled:t.isNext},on:{click:t.nextPage}},[t._v("下一页")])],1)])},Ct=[],xt={components:{},data:function(){return{page:1,currentPage:0,totalPges:0,topicList:[]}},computed:{isPrev:function(){return 1===this.currentPage},isNext:function(){return this.currentPage==this.totalPges}},created:function(){this.getTopicData(this.page)},methods:{getTopicData:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,N({page:t,size:10});case 2:n=a.sent,0==n.errno&&(e.currentPage=n.data.currentPage,e.topicList=n.data.data,e.totalPges=n.data.totalPages);case 4:case"end":return a.stop()}}),a)})))()},prevPage:function(){this.page<=1||(this.page--,this.getTopicData(this.page))},nextPage:function(){this.page>=this.totalPges||(this.page++,this.getTopicData(this.page))}}},Lt=xt,St=(a("c224"),Object(l["a"])(Lt,wt,Ct,!1,null,"f6952b74",null)),$t=St.exports,Tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("van-search",{attrs:{disabled:"",shape:"around",background:"#fff",placeholder:"请输入搜索关键词"},model:{value:t.searchVal,callback:function(e){t.searchVal=e},expression:"searchVal"}}),a("van-sidebar",{on:{change:t.onChange},model:{value:t.activeKey,callback:function(e){t.activeKey=e},expression:"activeKey"}},t._l(t.categoryList,(function(t){return a("van-sidebar-item",{key:t.id,attrs:{title:t.name}})})),1),a("div",{staticClass:"content"},[a("div",{ref:"bg",staticClass:"desc",style:{backgroundImage:"url("+t.currentCategory.banner_url+")"}},[a("h4",[t._v(t._s(t.currentCategory.front_desc))])]),a("div",{staticClass:"goodsList"},[a("div",{staticClass:"title"},[a("span",[t._v(t._s(t.currentCategory.name))])]),a("van-grid",{attrs:{"column-num":"3"}},t._l(t.currentCategory.subCategoryList,(function(e){return a("van-grid-item",{key:e.id},[a("img",{attrs:{src:e.wap_banner_url,alt:""}}),a("span",[t._v(t._s(e.name))])])})),1)],1)])],1)},Ot=[],jt=(a("159b"),{components:{},data:function(){return{searchVal:"",activeKey:0,categoryList:[],categoryId:[],currentCategory:[]}},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:a=e.sent,0==a.errno&&(t.categoryList=a.data.categoryList,t.currentCategory=a.data.currentCategory,a.data.categoryList.forEach((function(e){t.categoryId.push(e.id)})),console.log(t.currentCategory));case 4:case"end":return e.stop()}}),e)})))()},methods:{onChange:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=e.categoryId[t],a.next=3,H({id:n});case 3:r=a.sent,0===r.errno&&(e.currentCategory=r.data.currentCategory);case 5:case"end":return a.stop()}}),a)})))()}}}),Pt=jt,Et=(a("4ee0"),Object(l["a"])(Pt,Tt,Ot,!1,null,"a8972f5e",null)),It=Et.exports,Mt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Tips"),a("van-checkbox-group",{attrs:{disabled:t.isEditing},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}},t._l(t.cartList,(function(e){return a("van-checkbox",{key:e.id,staticClass:"chx",attrs:{name:e.id},on:{click:function(a){return t.goodClick(e)}}},[a("van-swipe-cell",{scopedSlots:t._u([{key:"right",fn:function(){return[a("van-button",{staticClass:"delete-button",attrs:{type:"danger",text:"删除",square:""},on:{click:function(a){return t.delGoodBtn(e.product_id)}}})]},proxy:!0}],null,!0)},[a("van-card",{attrs:{num:e.number,price:e.retail_price.toFixed(2),title:e.goods_name,thumb:e.list_pic_url}}),a("van-stepper",{directives:[{name:"show",rawName:"v-show",value:t.isEditing,expression:"isEditing"}],on:{change:function(a){return t.stepperChange(e)}},model:{value:e.number,callback:function(a){t.$set(e,"number",a)},expression:"item.number"}})],1)],1)})),1),a("van-submit-bar",{attrs:{price:100*t.cartTotal.checkedGoodsAmount,"button-text":"提交订单"},on:{submit:t.onSubmit},scopedSlots:t._u([{key:"tip",fn:function(){return[t._v(" 累计共"),a("span",[t._v(t._s(t.cartTotal.checkedGoodsCount))]),t._v("件商品, 可点击 "),a("van-button",{attrs:{type:t.isEditing?"danger":"primary",size:"mini"},on:{click:t.editBtn}},[t._v(" "+t._s(t.isEditing?"完成编辑":"编辑")+" ")]),t._v(" 按钮进行商品数量修改 ")]},proxy:!0}])},[a("van-checkbox",{attrs:{disabled:t.isEditing},model:{value:t.checkedAll,callback:function(e){t.checkedAll=e},expression:"checkedAll"}},[t._v("全选")])],1)],1)},Rt=[],Vt=(a("a15b"),a("25f0"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-row",{staticClass:"tips",staticStyle:{"text-align":"center"}},[a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"checked",color:"darkred"}}),t._v(" 30天无忧退货 ")],1),a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"checked",color:"darkred"}}),t._v(" 48小时快速退费 ")],1),a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"checked",color:"darkred"}}),t._v(" 满88元免邮费 ")],1)],1)}),At=[],Kt={components:{},data:function(){return{}},computed:{},watch:{},methods:{},mounted:function(){}},Nt=Kt,Dt=(a("c65c"),Object(l["a"])(Nt,Vt,At,!1,null,"22abb06c",null)),Ht=Dt.exports,Ft={components:{Tips:Ht},data:function(){return{result:[],cartList:[],cartTotal:{},isEditing:!1}},computed:{checkedAll:{get:function(){return this.result.length==this.cartList.length},set:function(t){var e=this,a=[];this.cartList.map((function(t){a.push(t.product_id)})),V({isChecked:t?1:0,productIds:a.join()}).then((function(t){0==t.errno&&e.totalFn(t.data)}))}}},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,R();case 2:a=e.sent,0==a.errno&&t.totalFn(a.data);case 4:case"end":return e.stop()}}),e)})))()},methods:{onSubmit:function(){},goodClick:function(t){var e=this;this.isEditing||V({isChecked:0==t.checked?1:0,productIds:t.product_id}).then((function(t){0==t.errno&&e.totalFn(t.data)}))},editBtn:function(){this.isEditing=!this.isEditing},totalFn:function(t){var e=this;this.cartList=t.cartList,this.cartTotal=t.cartTotal,this.result=[],this.cartList.map((function(t){1==t.checked&&e.result.push(t.id)}))},stepperChange:function(t){var e=this;A({goodsId:t.goods_id,id:t.id,number:t.number,productId:t.product_id}).then((function(t){0==t.errno&&e.totalFn(t.data)}))},delGoodBtn:function(t){var e=this;K({productIds:t.toString()}).then((function(t){0==t.errno&&e.totalFn(t.data)}))}}},qt=Ft,zt=(a("5278"),Object(l["a"])(qt,Mt,Rt,!1,null,"5f14075b",null)),Gt=zt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-row",{on:{click:t.openModal}},[a("van-col",{attrs:{span:"6"}},[a("img",{attrs:{src:t.avatarSrc}})]),a("van-col",{attrs:{span:"10"}},[t._v(" "+t._s(t.nickName)+" ")]),a("van-col",{attrs:{span:"8"}},[a("van-icon",{attrs:{name:"cross"},on:{click:function(e){return e.stopPropagation(),t.logout(e)}}})],1)],1),a("van-grid",{attrs:{"column-num":3,square:""}},[a("van-grid-item",{attrs:{icon:"label-o",text:"我的订单"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"bill-o",text:"优惠券"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"goods-collect-o",text:"礼品卡"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"location-o",text:"我的收藏"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"flag-o",text:"我的足迹"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"user-o",text:"会员福利"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"aim-o",text:"地址管理"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"warn-o",text:"账号安全"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"service-o",text:"联系客服"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"question-o",text:"帮助中心"},on:{click:t.iconClick}}),a("van-grid-item",{attrs:{icon:"smile-comment-o",text:"意见反馈"},on:{click:t.iconClick}})],1),t.showModal?a("div",{staticClass:"login_modal"},[a("section",{on:{click:t.closeModal}}),a("van-form",{on:{submit:t.onSubmit}},[a("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"请输入用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),a("div",{staticStyle:{margin:"16px"}},[a("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v("提交")])],1)],1)],1):t._e()],1)},Bt=[],Wt={components:{},data:function(){return{avatarSrc:"../assets/avatar.png",nickName:"点击登录",username:"admin",password:"123456",showModal:!1}},created:function(){var t=localStorage.getItem("token");if(t){var e=localStorage.getItem("userInfo"),a=JSON.parse(e);this.avatarSrc=a.avatar,this.nickName=a.username}},methods:{iconClick:function(){this.$toast("敬请期待")},openModal:function(){var t=localStorage.getItem("token");t||(this.showModal=!0)},closeModal:function(){this.showModal=!1},onSubmit:function(t){var e=this;return Object(_["a"])(regeneratorRuntime.mark((function a(){var n,r,o,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,j({username:t["用户名"],pwd:t["密码"]});case 2:n=a.sent,0==n.errno&&(r=n.data,o=r.token,i=r.userInfo,localStorage.setItem("token",o),localStorage.setItem("userInfo",JSON.stringify(i)),e.$toast.success("登录成功"),e.avatarSrc=i.avatar,e.nickName=i.username,setTimeout((function(){e.closeModal()}),1e3));case 4:case"end":return a.stop()}}),a)})))()},logout:function(){var t=this;this.$dialog.confirm({title:"退出登录确认",message:"你确认要退出账号么"}).then((function(){var e=localStorage.getItem("token");e&&(localStorage.clear(),t.$router.go(0))})).catch((function(){}))}}},Ut=Wt,Xt=(a("42af"),Object(l["a"])(Ut,Jt,Bt,!1,null,"609a41bf",null)),Qt=Xt.exports,Yt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("van-swipe",{staticClass:"my-swiper",attrs:{"indicator-color":"derkred"}},t._l(t.gallery,(function(t){return a("van-swipe-item",{key:t.id},[a("img",{staticStyle:{display:"block"},attrs:{src:t.img_url,width:"100%",alt:""}})])})),1),a("Tips"),a("div",{staticClass:"info"},[a("h3",[t._v(t._s(t.info.name))]),a("p",[t._v(t._s(t.info.goods_brief))]),a("div",[t._v(t._s(t._f("filterMoney")(t.info.retail_price)))])]),a("van-cell",{staticClass:"showSku",attrs:{title:"展示弹出层","is-link":""},on:{click:function(e){t.show=!0}}}),a("div",{staticClass:"attribute"},[a("h4",[t._v("商品参数")]),a("ul",t._l(t.attribute,(function(e,n){return a("li",{key:n},[a("span",[t._v(t._s(e.name))]),a("section",{staticClass:"van-ellipsis"},[t._v(" "+t._s(e.value)+" ")])])})),0)]),a("div",{ref:"box",staticClass:"box"}),t._m(0),a("ul",{staticClass:"issue"},t._l(t.issue,(function(e){return a("li",{key:e.id},[a("h3",[t._v(t._s(e.question))]),a("p",[t._v(t._s(e.answer))])])})),0),t._m(1),a("Product",{attrs:{goodsList:t.goodsList}}),a("van-sku",{ref:"sku",attrs:{sku:t.sku,goods:t.goods,"hide-stock":t.sku.hide_stock},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),a("MyGoodsActions",{attrs:{badge:t.badge},on:{addToCartData:t.addToCartData}})],1)},Zt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("常见问题")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"title"},[a("span",[t._v("大家都在看")])])}],te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("van-goods-action",[a("van-goods-action-icon",{attrs:{icon:t.isSave?"star":"star-o",text:t.isSave?"已收藏":"未收藏",color:t.isSave?"darkred":"#666"},on:{click:function(e){t.isSave=!t.isSave}}}),a("van-goods-action-icon",{attrs:{icon:"cart-o",text:"购物车",badge:t.badge}}),a("van-goods-action-button",{attrs:{type:"danger",text:"立即购买"},on:{click:t.byNow}}),a("van-goods-action-button",{attrs:{type:"warning",text:"加入购物车"},on:{click:t.addToCart}})],1)},ee=[],ae={props:{badge:Number},data:function(){return{isSave:!1}},methods:{addToCart:function(){this.$emit("addToCartData")},byNow:function(){this.$toast("该功能暂未开放")}}},ne=ae,re=Object(l["a"])(ne,te,ee,!1,null,"a05a59a4",null),oe=re.exports,ie={components:{Product:mt,Tips:Ht,MyGoodsActions:oe},data:function(){return{gallery:[],productList:[],info:{},attribute:[],goodsList:[],issue:[],show:!1,sku:{tree:[],hide_stock:!1,price:"",stock_num:""},goods:{picture:""},badge:0}},created:function(){var t=this;return Object(_["a"])(regeneratorRuntime.mark((function e(){var a,n,r,o,i,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,P({id:t.$route.query.id});case 2:a=e.sent,0==a.errno&&(n=a.data,r=n.gallery,o=n.productList,i=n.info,s=n.attribute,c=n.issue,t.gallery=r,t.productList=o,t.info=i,t.attribute=s,t.issue=c,t.$refs.box.innerHTML=i.goods_desc,t.goods.picture=i.list_pic_url,t.sku.stock_num=i.goods_number,t.sku.price=i.retail_price.toFixed(2)),E({id:t.$route.query.id}).then((function(e){0==e.errno&&(t.goodsList=e.data.goodsList)})),I().then((function(e){0==e.errno&&(t.badge=e.data.cartTotal.goodsCount)}));case 6:case"end":return e.stop()}}),e)})))()},methods:{addToCartData:function(){var t=this;if(this.show){var e=localStorage.getItem("token");e?M({goodsId:this.$route.query.id,productId:this.productList[0].id,number:this.$refs.sku.getSkuData().selectedNum}).then((function(e){0==e.errno&&(t.badge=e.data.cartTotal.goodsCount,t.$toast.loading("添加成功"),setTimeout((function(){t.$router.push("/cart")}),2e3))})):(this.$toast("请选登录"),this.$router.push("/user"))}else this.show=!0}}},se=ie,ce=(a("f705"),Object(l["a"])(se,Yt,Zt,!1,null,"f33359c8",null)),ue=ce.exports;n["a"].use(m["a"]);var le=m["a"].prototype.push;m["a"].prototype.push=function(t,e,a){return e||a?le.call(this,t,e,a):le.call(this,t).catch((function(t){return t}))};var de=[{path:"/",redirect:"/home"},{path:"/home",name:"Home",component:G,meta:{showTabbar:!0,active:0}},{path:"/topic",component:$t,meta:{showTabbar:!0,active:1}},{path:"/category",component:It,meta:{showTabbar:!0,active:2}},{path:"/cart",component:Gt,meta:{showTabbar:!0,active:3}},{path:"/user",component:Qt,meta:{showTabbar:!0,active:4}},{path:"/popup",component:kt},{path:"/detail",component:ue}],pe=new m["a"]({routes:de});pe.beforeEach((function(t,e,a){var r=localStorage.getItem("token");"/cart"!=t.path||r?a():(n["a"].prototype.$toast("请选登录"),setTimeout((function(){a("/user")}),1e3))}));var fe=pe,he=a("2f62");n["a"].use(he["a"]);var ve=new he["a"].Store({state:{},mutations:{},actions:{},modules:{}}),ge=(a("fa6d"),a("4056"),a("44bf")),me=(a("a39e"),a("241e")),be=(a("570a"),a("1d36")),ye=(a("be39"),a("efa0")),_e=(a("9cb7"),a("66fd")),ke=(a("f06a"),a("20fb")),we=(a("3c32"),a("417e")),Ce=(a("a909"),a("3acc")),xe=(a("ef6f"),a("82a8")),Le=(a("591c"),a("7713")),Se=(a("93ac"),a("bb33")),$e=(a("e415"),a("2b5e")),Te=(a("e17f"),a("2241")),Oe=(a("be7f"),a("565f")),je=(a("38d5"),a("772a")),Pe=(a("4d48"),a("d1e1")),Ee=(a("81e6"),a("9ffb")),Ie=(a("a52c"),a("2ed4")),Me=(a("537a"),a("ac28")),Re=(a("91d5"),a("f0ca")),Ve=(a("61ae"),a("d314")),Ae=(a("09d3"),a("2d6d")),Ke=(a("c194"),a("7744")),Ne=(a("2994"),a("2bdd")),De=(a("e7e5"),a("d399")),He=(a("5f1a"),a("a3e2")),Fe=(a("c3a6"),a("ad06")),qe=(a("0ec5"),a("21ab")),ze=(a("3df5"),a("2830")),Ge=(a("4467"),a("c36e")),Je=(a("4b0a"),a("2bb1")),Be=(a("7844"),a("5596")),We=(a("5852"),a("d961")),Ue=(a("66b9"),a("b650"));n["a"].use(Ue["a"]),n["a"].use(We["a"]),n["a"].use(Be["a"]),n["a"].use(Je["a"]),n["a"].use(Ge["a"]),n["a"].use(ze["a"]),n["a"].use(qe["a"]),n["a"].use(Fe["a"]),n["a"].use(He["a"]),n["a"].use(De["a"]),n["a"].use(Ne["a"]),n["a"].use(Ke["a"]),n["a"].use(Ae["a"]),n["a"].use(Ve["a"]),n["a"].use(Re["a"]),n["a"].use(Me["a"]),n["a"].use(Ie["a"]),n["a"].use(Ee["a"]),n["a"].use(Pe["a"]),n["a"].use(je["a"]),n["a"].use(Oe["a"]),n["a"].use(Te["a"]),n["a"].use($e["a"]),n["a"].use(Se["a"]),n["a"].use(Le["a"]),n["a"].use(xe["a"]),n["a"].use(Ce["a"]),n["a"].use(we["a"]),n["a"].use(ke["a"]),n["a"].use(_e["a"]),n["a"].use(ye["a"]),n["a"].use(be["a"]),n["a"].use(me["a"]),n["a"].use(ge["a"]);a("bb76");n["a"].filter("filterMoney",(function(t){var e=Number(t);return"￥"+e.toFixed(2)+"元"})),n["a"].config.productionTip=!1,new n["a"]({router:fe,store:ve,render:function(t){return t(g)}}).$mount("#app")},"69ad":function(t,e,a){},"7c55":function(t,e,a){"use strict";a("2395")},"8a7a":function(t,e,a){},b4e9:function(t,e,a){},bb76:function(t,e){(function(t,e){var a=e.documentElement,n=t.devicePixelRatio||1;function r(){e.body?e.body.style.fontSize=12*n+"px":e.addEventListener("DOMContentLoaded",r)}function o(){var t=a.clientWidth/20;a.style.fontSize=t+"px"}if(r(),o(),t.addEventListener("resize",o),t.addEventListener("pageshow",(function(t){t.persisted&&o()})),n>=2){var i=e.createElement("body"),s=e.createElement("div");s.style.border=".5px solid transparent",i.appendChild(s),a.appendChild(i),1===s.offsetHeight&&a.classList.add("hairlines"),a.removeChild(i)}})(window,document)},c224:function(t,e,a){"use strict";a("04d9")},c65c:function(t,e,a){"use strict";a("fc5f")},ce39:function(t,e,a){},df54:function(t,e,a){"use strict";a("69ad")},e0e5:function(t,e,a){},e36f:function(t,e,a){"use strict";a("ce39")},ecc2:function(t,e,a){},f705:function(t,e,a){"use strict";a("22d0")},fc5f:function(t,e,a){}});
//# sourceMappingURL=app.57c71380.js.map