(this["webpackJsonpfashion-chatbot"]=this["webpackJsonpfashion-chatbot"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var s=n(1),a=n.n(s),i=n(6),c=n.n(i),o=(n(13),n.p,n(14),n(3)),r={botname:"fashionBot",initialMessages:[Object(o.createChatBotMessage)("Hello!~")]},h=n(8),u=n(5),g=n(4),b=function t(e,n,s){var a=this;Object(g.a)(this,t),this.greet=function(){var t=a.createChatBotMessage("Hello friend.");a.addMessageToState(t)},this.addMessageToState=function(t){a.setState((function(e){return Object(u.a)(Object(u.a)({},e),{},{messages:[].concat(Object(h.a)(e.messages),[t])})}))},this.createChatBotMessage=e,this.setState=n,this.createClientMessage=s},d=n(7),f=function(){function t(e,n){Object(g.a)(this,t),this.actionProvider=e,this.state=n}return Object(d.a)(t,[{key:"parse",value:function(t){console.log(t),t.toLowerCase().includes("hello")&&this.actionProvider.greet()}}]),t}(),l=n(0);var j=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("div",{children:Object(l.jsx)(o.Chatbot,{config:r,actionProvider:b,messageParser:f})})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,22)).then((function(e){var n=e.getCLS,s=e.getFID,a=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),s(t),a(t),i(t),c(t)}))};c.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root")),O()}},[[21,1,2]]]);
//# sourceMappingURL=main.56b70053.chunk.js.map