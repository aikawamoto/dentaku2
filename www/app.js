(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var u=e[n];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}return function(e,n,u){return n&&t(e.prototype,n),u&&t(e,u),e}}(),o=c(n(0)),l=(c(n(1)),n(18)),a=n(2);function c(t){return t&&t.__esModule?t:{default:t}}n(22);var r=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={count:0,value:0,op:""},n.countUp=n.countUp.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),u(e,[{key:"alertPopup",value:function(){a.notification.alert("入力できないよ")}},{key:"renderToolbar",value:function(){return o.default.createElement(l.Toolbar,null,o.default.createElement("div",{className:"center"},"電卓アプリ"))}},{key:"render",value:function(){var t=this;return o.default.createElement(l.Page,{renderToolbar:this.renderToolbar},o.default.createElement(l.Row,null,o.default.createElement(l.Col,{className:"box"},this.state.count)),o.default.createElement(l.Row,null,o.default.createElement(l.Col,null," "),o.default.createElement(l.Col,null," "),o.default.createElement(l.Col,null," "),o.default.createElement(l.Col,{className:"btn--yellow",Button:!0,onClick:function(){return t.s()}},"AC")),o.default.createElement(l.Row,null,o.default.createElement(l.Col,{className:"btn--7 ",Button:!0,onClick:function(){return t.countUp(7)}},"7"),o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.countUp(8)}},"8"),o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.countUp(9)}},"9"),o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.waru()}},"÷")),o.default.createElement(l.Row,null,o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.countUp(4)}},"4"),o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.countUp(5)}},"5"),o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.countUp(6)}},"6"),o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.kake()}},"×")),o.default.createElement(l.Row,null,o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.countUp(1)}},"1"),o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.countUp(2)}},"2"),o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.countUp(3)}},"3"),o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.hiku()}},"-")),o.default.createElement(l.Row,null,o.default.createElement(l.Col,{className:"box"}," "),o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.countUp(0)}},"0"),o.default.createElement(l.Col,{className:"btn--8",Button:!0,onClick:function(){return t.equal()}},"="),o.default.createElement(l.Col,{className:"btn--7",Button:!0,onClick:function(){return t.plus()}},"+")))}},{key:"countUp",value:function(t){var e=this.state;e.count=10*this.state.count+t,this.setState(e)}},{key:"s",value:function(){this.setState({count:0,p:0})}},{key:"plus",value:function(){var t=this.state;t.op="+",t.value=this.state.count,t.count=0,this.setState(t)}},{key:"hiku",value:function(){var t=this.state;t.op="-",t.value=this.state.count,t.count=0,this.setState(t)}},{key:"kake",value:function(){var t=this.state;t.op="×",t.value=this.state.count,t.count=0,this.setState(t)}},{key:"waru",value:function(){var t=this.state;t.op="÷",t.value=this.state.count,t.count=0,this.setState(t)}},{key:"equal",value:function(){var t=this.state;"+"==t.op?t.count+=t.value:"-"==t.op?t.count=t.value-t.count:"×"==t.op?t.count*=t.value:"÷"==t.op&&(t.count=t.value/t.count),t.op="",this.setState(t)}}]),e}(o.default.Component);e.default=r},22:function(t,e,n){},7:function(t,e,n){t.exports=n(8)},8:function(t,e,n){"use strict";n(9);var u=n(11),o=r(n(0)),l=r(n(1)),a=r(n(2)),c=r(n(17));function r(t){return t&&t.__esModule?t:{default:t}}n(23),n(24),a.default.platform.isIPhoneX()&&(document.documentElement.setAttribute("onsflag-iphonex-portrait",""),document.documentElement.setAttribute("onsflag-iphonex-landscape",""));var i=document.getElementById("app");l.default.render(o.default.createElement(u.AppContainer,null,o.default.createElement(c.default,null)),i)}},[[7,1,2]]]);