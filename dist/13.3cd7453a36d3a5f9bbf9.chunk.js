webpackJsonp([13],{224:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{1:"1",index:"1-1",state:"setting"}},methods:{clickFn:function(t,e){this.$router.push(t),this.index=e},changeState:function(t,e){this.state=t,this.indexes=e}}}},24:function(t,e,n){n(240);var a=n(9)(n(224),n(256),"data-v-1d1d3c08",null);a.options.__file="F:\\Delta\\iview-project-2.0 (1)\\iview-project-2.0 (1)\\iview-project-2.0\\src\\views\\index2.vue",a.esModule&&Object.keys(a.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] index2.vue: functional components are not supported with templates, they should use render functions."),t.exports=a.exports},240:function(t,e){},256:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout"},[n("Menu",{attrs:{mode:"horizontal",theme:"dark","active-name":1}}),t._v(" "),n("Menu",{attrs:{mode:"horizontal","active-name":t.index}},[n("div",{directives:[{name:"show",rawName:"v-show",value:"setting"==t.state,expression:"state == 'setting'"}],staticClass:"layout-assistant"},[n("MenuItem",{attrs:{name:"1-1"}},[n("span",{on:{click:function(e){t.clickFn("/manager","1-1")}}},[t._v("机器人配置")])]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[n("span",{on:{click:function(e){t.clickFn("/autoReply","1-2")}}},[t._v("自动回复")])]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("span",{on:{click:function(e){t.clickFn("/greetings","1-3")}}},[t._v("寒暄库")])]),t._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[n("span",{on:{click:function(e){t.clickFn("/professionalKnowledge","1-4")}}},[t._v("业务知识库")])])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"manager"==t.state,expression:"state == 'manager'"}],staticClass:"layout-assistant"},[n("MenuItem",{attrs:{name:"2-1"}},[n("span",{on:{click:function(e){t.clickFn("/intelligentLearning","2-1")}}},[t._v("智能学习")])]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[n("span",{on:{click:function(e){t.clickFn("/unknownLearning","2-2")}}},[t._v("未知学习")])])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"message"==t.state,expression:"state == 'message'"}],staticClass:"layout-assistant"},[n("MenuItem",{attrs:{name:"3-1"}},[n("span",{on:{click:function(e){t.clickFn("/messageTable","3-1")}}},[t._v("数据统计")])])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:"hot"==t.state,expression:"state == 'hot'"}],staticClass:"layout-assistant"},[n("MenuItem",{attrs:{name:"4-1"}},[n("span",{on:{click:function(e){t.clickFn("/hotQuestion","4-1")}}},[t._v("问题统计")])])],1)]),t._v(" "),n("div",{staticClass:"layout-content"},[n("Row",[n("Col",{attrs:{span:"5"}},[n("Menu",{attrs:{"active-name":t.index,width:"auto","open-names":1}},[n("Submenu",{attrs:{name:"1"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-navigate"}}),t._v(" "),n("span",{on:{click:function(e){t.changeState("setting","1")}}},[t._v("智能机器人")])],1),t._v(" "),n("MenuItem",{attrs:{name:"1-1"}},[n("span",{on:{click:function(e){t.clickFn("/manager","1-1")}}},[t._v("机器人配置")])]),t._v(" "),n("MenuItem",{attrs:{name:"1-2"}},[n("span",{on:{click:function(e){t.clickFn("/autoReply","1-2")}}},[t._v("自动回复")])]),t._v(" "),n("MenuItem",{attrs:{name:"1-3"}},[n("span",{on:{click:function(e){t.clickFn("/greetings","1-3")}}},[t._v("寒暄库")])]),t._v(" "),n("MenuItem",{attrs:{name:"1-4"}},[n("span",{on:{click:function(e){t.clickFn("/professionalKnowledge","1-4")}}},[t._v("业务知识库")])])],2),t._v(" "),n("Submenu",{attrs:{name:"2"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-keypad"}}),t._v(" "),n("span",{on:{click:function(e){t.changeState("manager","2")}}},[t._v("管理员操作")])],1),t._v(" "),n("MenuItem",{attrs:{name:"2-1"}},[n("span",{on:{click:function(e){t.clickFn("/intelligentLearning","2-1")}}},[t._v("智能学习")])]),t._v(" "),n("MenuItem",{attrs:{name:"2-2"}},[n("span",{on:{click:function(e){t.clickFn("/unknownLearning","2-1")}}},[t._v("未知学习")])])],2),t._v(" "),n("Submenu",{attrs:{name:"3"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-analytics"}}),t._v(" "),n("span",{on:{click:function(e){t.changeState("message","3")}}},[t._v("消息报表")])],1),t._v(" "),n("MenuItem",{attrs:{name:"3-1"}},[n("span",{on:{click:function(e){t.clickFn("/messageTable","3-1")}}},[t._v("数据统计")])])],2),t._v(" "),n("Submenu",{attrs:{name:"4"}},[n("template",{slot:"title"},[n("Icon",{attrs:{type:"ios-hotmessage"}}),t._v(" "),n("span",{on:{click:function(e){t.changeState("hot","4")}}},[t._v("热点问题")])],1),t._v(" "),n("MenuItem",{attrs:{name:"4-1"}},[n("span",{on:{click:function(e){t.clickFn("/hotQuestion","4-1")}}},[t._v("问题统计")])])],2)],1)],1),t._v(" "),n("Col",{attrs:{span:"19"}},[n("div",{staticClass:"layout-content-main"},[n("keep-alive",[n("router-view")],1)],1)])],1)],1),t._v(" "),n("div",{staticClass:"layout-copy"},[t._v("\n        2017-2018 © 409工作室\n    ")])],1)},staticRenderFns:[]},t.exports.render._withStripped=!0}});