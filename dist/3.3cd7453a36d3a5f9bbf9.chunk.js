webpackJsonp([3],{229:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e(37);o.default={created:function(){var t=this;this.$http({url:s.a.ip+"/DeltaRobot/robotinfo/query.action",method:"POST",data:{},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){t.robotName=o.body.robotInfo.robotName,t.robotDetail=o.body.robotInfo.robotDetail,t.unknowReply=o.body.robotInfo.unknowReply},function(t){console.log(t)})},data:function(){return{robotName:"",robotDetail:"",unknowReply:"",error:""}},methods:{saveRobotInfo:function(){var t=this;return console.log(this.robotName,this.robotDetail,this.robotDetail),this.robotName?this.robotDetail?this.robotDetail?void this.$http({url:s.a.ip+"/DeltaRobot/robotinfo/edit.action?robotName="+this.robotName+"&robotDetail="+this.robotDetail+"&unknowReply="+this.unknowReply,method:"POST",data:{},headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(function(o){t.error=o.body.error,o.body.error||alert("修改机器人配置成功")},function(t){console.log(t)}):void alert("未知说辞不能为空"):void alert("简介不能为空"):void alert("昵称不能为空")}}}},246:function(t,o){},251:function(t,o){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANCSURBVGhD7Zmtj9RAGMZXIBCIE5Bte5vsCQQCgUDgQCARJxAIBAKx4v4IxAnEiZMIEgQIxAkEkoQTCMQlGAQCQQIJkGmvM91NluRIyjuzz+5129l2Znbb3ZD+kkfMtO8z77Tb+dpOS0tLS6P043jLY3zgR8kLPxTv/TB56Yd8D5c3G5+JfUo6rZIXcoaQ9dON4x2pIOR36Umf6RKu0E9YNQc96SeaRIzkheKdz5Ldbjze6fHxVap7Nr0my2iiPvq/Rx4lMZ42aiuK/QSrArfT9MLkPv4FVfVAb+B7PjFnMX4E2znUm6LrKK6W7VDcKiSyIvXT9CKaUQTR8IGsR3F1+JH7d2AsllxDc/TWk11Zh+JqMB02VyJ0JmD8UJZVAqtgmw3vFBqrWfJnpgYSxt8ijeUpNsSPi3X1SH6TSGM5yCyeGTP+1+LtnEzmFn5Acd80142ENJYjiEc3MqYnubJW8h6EFwhYMtDFlAmhyzFbVjBx1B+NvHwjc6K3hbBSzic6QzH+EaFuyI9tYiTUZFVoICcVZMiVNL2k81gkhLkhO0ArULU8qFrwBafingqygLzf6Ly0ovkEYfZMfyrUCbVMKJMKcEDnpRf/hRA3TD5u2hiFuN0and8iIcQNneG6hJTsodfZ2KRnIqRlx2zE2iDJkQ7pmUOB57P5hkjuHpGeGf043dIZrVtIzxw5CumMForxz11af9UtpGeONtlS8TOEbg60/n+lT7ZcCN8cdEkayXEJ0WUx/WyqJResCKnGdiGXF2yM8cPhns5HJ4SY4UXieTY4XzbQEFaVyD25Jl4vxjnCzMgbyLpuKB7l66skh29luAAaHA50cYtU5VcgG0xD8B9UO3038tBAnrLL03bp0Y2G150GEia+qiRsyBoEER+guuMnyeXstSaFFOwoM6An09yZFtTj3O3wOmuCqjloR/che0+d8uLkPpq1J2uEqgJNdMY7FQ/RnBtZs7KRotbz38y5rzNypJoaVv3tZTUPmIjxH7BeHs3MHmePK6mjNz0mXmfvsToJ0YnxkdXywxTjvUiUPEaIAgfOxvMEPZRDhNaL7FAQiqf0xI4nEvtlR6E6ejQJTvcSjfwP2NLS8r/S6fwDKAXhF/jFfLEAAAAASUVORK5CYII="},252:function(t,o,e){t.exports=e.p+"10fba61ed395924283decf7100eb221e.png"},262:function(t,o,e){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"settings"},[s("div",{staticClass:"settings-header"},[s("span",[t._v("机器人设置")]),t._v(" "),s("div",{staticClass:"settings-header-switch"},[s("span",[t._v("APP")]),t._v(" "),[s("i-switch",{attrs:{size:"large"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],t._v(" "),s("img",{attrs:{src:e(252)}}),t._v(" "),[s("i-switch",{attrs:{size:"large"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])],t._v(" "),s("img",{attrs:{src:e(251)}}),t._v(" "),[s("i-switch",{attrs:{size:"large"}},[s("span",{attrs:{slot:"open"},slot:"open"},[t._v("开启")]),t._v(" "),s("span",{attrs:{slot:"close"},slot:"close"},[t._v("关闭")])])]],2)]),t._v(" "),s("div",{staticClass:"settings-body"},[s("div",{staticClass:"settings-body-content"},[s("div",{staticClass:"list"},[s("div",{staticClass:"list-header"},[t._v("昵称")]),t._v(" "),s("div",{staticClass:"list-content"},[[s("Input",{staticStyle:{width:"800px"},attrs:{placeholder:"This robots Name...",autofocus:!0},model:{value:t.robotName,callback:function(o){t.robotName=o},expression:"robotName"}})]],2)]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"list-header"},[t._v("简介")]),t._v(" "),s("div",{staticClass:"list-content"},[[s("Input",{staticStyle:{width:"800px"},attrs:{placeholder:"This robots brief..."},model:{value:t.robotDetail,callback:function(o){t.robotDetail=o},expression:"robotDetail"}})]],2)]),t._v(" "),s("div",{staticClass:"list"},[s("div",{staticClass:"list-header"},[t._v("未知说辞")]),t._v(" "),s("div",{staticClass:"list-content"},[[s("Input",{staticStyle:{width:"800px"},attrs:{placeholder:"This robots position..."},model:{value:t.unknowReply,callback:function(o){t.unknowReply=o},expression:"unknowReply"}})]],2)])]),t._v(" "),[s("Button",{attrs:{type:"primary",shape:"circle",icon:"ios-search",size:"large"},on:{click:t.saveRobotInfo}},[t._v("保存")])]],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0},28:function(t,o,e){e(246);var s=e(9)(e(229),e(262),"data-v-991767f8",null);s.options.__file="F:\\Delta\\iview-project-2.0 (1)\\iview-project-2.0 (1)\\iview-project-2.0\\src\\views\\robotConfigure.vue",s.esModule&&Object.keys(s.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] robotConfigure.vue: functional components are not supported with templates, they should use render functions."),t.exports=s.exports},37:function(t,o,e){"use strict";o.a={ip:"http://localhost:8888"}}});