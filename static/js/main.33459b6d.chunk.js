(this.webpackJsonpcaculator=this.webpackJsonpcaculator||[]).push([[0],{169:function(e,t,a){e.exports=a(607)},174:function(e,t,a){},175:function(e,t,a){},176:function(e,t,a){},177:function(e,t,a){},178:function(e,t,a){},607:function(e,t,a){"use strict";a.r(t);var n=a(3),l=a.n(n),r=a(162),c=a.n(r),i=a(163),u=a(164),o=a(167),s=a(165),d=a(168),m=(a(174),a(175),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"input"},e.value))}),h=(a(176),function(e){var t=e.children,a="x"===t||"+"===t||"-"===t||"/"===t?"warpper-button opeartor":"warpper-button";return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:a,onClick:function(){return e.handleClick(e.children)}},e.children))}),p=(a(177),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"clear",onClick:function(){return e.handleClear()}},"Clear"))}),E=(a(178),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:"remove",onClick:function(){return e.handleRemove()}},"\u2190"))}),v=a(166),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).addToValueInput=function(e){a.setState({input:a.state.input+e})},a.hanldeMul=function(e){a.setState({input:a.state.input+e.replace("x","*")})},a.hanldeResult=function(){var e=v.eval(a.state.input);a.setState({input:e})},a.clearCaculator=function(){a.setState({input:""})},a.removeOperator=function(){var e=a.state.input;e=e.substring(0,e.length-1),a.setState({input:e})},a.powerTwo=function(){var e=a.state.input;e=Math.pow(e,2),a.setState({input:e})},a.powerN=function(e){a.setState({input:a.state.input+e.replace("x^n","^")})},a.squareRootTwo=function(){var e=a.state.input;e=Math.sqrt(e),a.setState({input:e})},a.pi=function(){var e=a.state.input;e=Math.PI,a.setState({input:e})},a.state={input:""},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"App-wrapper"},l.a.createElement("div",{className:"App-main"},l.a.createElement("div",{className:"row"},l.a.createElement(m,{value:this.state.input})),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToValueInput},"7"),l.a.createElement(h,{handleClick:this.addToValueInput},"8"),l.a.createElement(h,{handleClick:this.addToValueInput},"9"),l.a.createElement(h,{handleClick:this.powerTwo},"x^2"),l.a.createElement(h,{handleClick:this.hanldeMul},"x")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToValueInput},"4"),l.a.createElement(h,{handleClick:this.addToValueInput},"5"),l.a.createElement(h,{handleClick:this.addToValueInput},"6"),l.a.createElement(h,{handleClick:this.powerN},"x^n"),l.a.createElement(h,{handleClick:this.addToValueInput},"-")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToValueInput},"1"),l.a.createElement(h,{handleClick:this.addToValueInput},"2"),l.a.createElement(h,{handleClick:this.addToValueInput},"3"),l.a.createElement(h,{handleClick:this.squareRootTwo},"\u221a"),l.a.createElement(h,{handleClick:this.addToValueInput},"+")),l.a.createElement("div",{className:"row"},l.a.createElement(h,{handleClick:this.addToValueInput},"0"),l.a.createElement(h,{handleClick:this.addToValueInput},"."),l.a.createElement(h,{handleClick:this.pi},"\u03a0"),l.a.createElement(h,{handleClick:function(){return e.hanldeResult()}},"="),l.a.createElement(h,{handleClick:this.addToValueInput},"/")),l.a.createElement("div",{className:"row"},l.a.createElement(p,{handleClear:function(){return e.clearCaculator()}}),l.a.createElement(E,{handleRemove:function(){return e.removeOperator()}})))))}}]),t}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[169,1,2]]]);
//# sourceMappingURL=main.33459b6d.chunk.js.map