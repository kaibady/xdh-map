(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{1080:function(e,t,n){"use strict";var a=n(503);n.n(a).a},1120:function(e,t,n){"use strict";n.r(t);var a=n(146),l=Object(a.M)({className:"Style",fill:{className:"Fill",color:"rgba(0,0,0,.3)"},stroke:{className:"Stroke",color:"red",width:2}}),i={components:{XdhMap:a.c,XdhMapDrawPanel:a.h,XdhPlacement:a.XdhPlacement},data:function(){return{map:null,center:[113,23],plot:null,types:[],buttonList:[{type:"Point",name:"坐标"},{type:"Polyline",name:"警戒线"},{type:"Circle",name:"范围"},{type:"ClosedCurve",name:"聚集区域"},{type:"Polygon",name:"geo"},{type:"GatheringPlace",name:"集结地"},{type:"DoubleArrow",name:"包抄路径"},{type:"AttackArrow",name:"进攻方向"},{type:"RectFlag",name:"敌军"},{type:"TriangleFlag",name:"我军"},{type:"CurveFlag",name:"友军"}],isDraw:!1}},methods:{mapReady:function(e){this.map=e},panelInited:function(e){this.plot=e},dblClickHandle:function(e){var t=this.$refs.map.getFeatureAtPixel(e.pixel);this.$refs.drawPanel.editFeature(t)},drawType:function(e){this.$refs.drawPanel.draw(e)},resetClick:function(){this.$refs.drawPanel.resetClickHandle()},deleteClick:function(){this.$refs.drawPanel.deleteClickHandle()},finishClick:function(){this.$refs.drawPanel.finishClickHandle()},clearClick:function(){this.$refs.drawPanel.clearClickHandle()},getClick:function(){var e=this.$refs.drawPanel.getClickHandle();console.log(e)},drawEndHandle:function(e){"Circle"===e.getProperties().plotType&&e.setStyle(l)}}},o=(n(1080),n(16)),c=Object(o.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{height:"700px"}},[n("xdh-map",{ref:"map",attrs:{type:"Baidu",id:"map3",zoom:9,center:e.center},on:{ready:e.mapReady,dblclick:e.dblClickHandle}},[n("xdh-map-draw-panel",{ref:"drawPanel",attrs:{placement:"center-bottom",width:8,types:e.types,"use-tools":!1,"use-style":!1},on:{"on-draw-end":e.drawEndHandle}},[n("div",{staticClass:"draw-type",attrs:{slot:"type-buttons"},slot:"type-buttons"},e._l(e.buttonList,function(t,a){return n("button",{key:"btn_"+a,on:{click:function(n){return e.drawType(t.type)}}},[e._v(e._s(t.name))])}),0),e._v(" "),n("div",{staticClass:"tools-warp",attrs:{slot:"tool-buttons"},slot:"tool-buttons"},[n("button",{on:{click:e.resetClick}},[e._v("重置")]),e._v(" "),n("button",{on:{click:e.deleteClick}},[e._v("删除")]),e._v(" "),n("button",{on:{click:e.finishClick}},[e._v("完结")]),e._v(" "),n("button",{on:{click:e.clearClick}},[e._v("清空")]),e._v(" "),n("button",{on:{click:e.getClick}},[e._v("获取")])])])],1)],1)},[],!1,null,"3277c47b",null);t.default=c.exports},503:function(e,t,n){}}]);