(this["webpackJsonpcurrency-field"]=this["webpackJsonpcurrency-field"]||[]).push([[0],{42:function(e,t,a){e.exports=a.p+"static/media/arrow_left.48bd8f7d.svg"},43:function(e,t,a){e.exports=a.p+"static/media/arrow_right.845e73a4.svg"},51:function(e,t,a){e.exports=a(64)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),l=(a(56),a(21)),i=[{monthlyPayment:29900,term:6,noAutoPay:{id:1},apr:1,note:"This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 6 months"},{monthlyPayment:39900,term:12,noAutoPay:{apr:.17,monthlyPayment:150},apr:1,note:"This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 12 months"},{monthlyPayment:49900,term:18,noAutoPay:{id:1},apr:1,note:"This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 18 months"},{monthlyPayment:59900,term:6,noAutoPay:{apr:.17,monthlyPayment:150},apr:1,note:"This is a 24 months, 26% APR plan, with a 0% APR benefit if paid in full within 12 months"}],m=a(97),s=a(100),u=a(102),d=a(31),h=a.n(d),p=a(103),f=a(104),v=a(106),E=Object(m.a)({root:{maxWidth:345},media:{height:140},switchBase:{padding:1,"&$checked":{"& + $track":{backgroundColor:"#52d869"}}}});function y(e){var t=e.card,a=e.index,c=e.activeIndex,o=Object(n.useState)(!1),i=Object(l.a)(o,2),m=i[0],d=i[1],y=E(),b=Object(n.useMemo)((function(){return m?t.noAutoPay.monthlyPayment:t.monthlyPayment}),[m,t]),g=Object(n.useMemo)((function(){return m?t.noAutoPay.apr:t.apr}),[m,t]),P=Object(n.useMemo)((function(){var e=t.noAutoPay;return e.monthlyPayment&&e.apr}),[t]);return r.a.createElement("div",{className:a>=c&&a<=c+2?"active":"slide"},r.a.createElement(s.a,{className:y.root},r.a.createElement(u.a,null,r.a.createElement("div",{className:"Rectangle"},r.a.createElement("div",{className:"summaryBlock"},r.a.createElement("p",{className:"summary"},r.a.createElement(h.a,null),b),r.a.createElement("p",{className:"summary-description"},"per month"))),r.a.createElement(p.a,null,r.a.createElement("div",{className:"cardInner"},r.a.createElement("p",{className:"subtitle"},"for"),r.a.createElement("p",{className:"title"},t.term," months"),r.a.createElement("p",{className:"subtitle"},"APR"),r.a.createElement("p",{className:"title"},g,"%"),r.a.createElement("p",{className:"note"},t.note)))),r.a.createElement("div",{className:"controlBlock"},r.a.createElement("div",{className:"switchBlock"},r.a.createElement(v.a,{size:"small",color:"primary",onClick:function(){d(!m)},inputProps:{"aria-label":"secondary checkbox"},disabled:!P}),r.a.createElement("span",null,"AutoPay via Bank Account")),r.a.createElement(f.a,{className:"chooseBtn",color:"primary",variant:"contained",onClick:function(){return function(e){console.log(e)}(t.note)}},"CHOOSE"))))}var b=a(42),g=a.n(b),P=function(e){var t=e.goToPrevSlide,a=e.activeIndex;return r.a.createElement("div",{className:"backArrow"},r.a.createElement(f.a,{color:"primary",onClick:t,variant:"outlined",disabled:!a},r.a.createElement("img",{src:g.a,className:"Arrow",alt:"arrow"})))},w=a(43),N=a.n(w),A=function(e){var t=e.goToNextSlide,a=e.activeIndex,n=e.cardsLength;return r.a.createElement("div",{className:"backArrow"},r.a.createElement(f.a,{onClick:t,variant:"outlined",disabled:a>=n-3},r.a.createElement("img",{src:N.a,className:"Arrow",alt:"arrow"})))};a(62);var k=function(e){var t=Object(n.useState)(0),a=Object(l.a)(t,2),c=a[0],o=a[1],m=Object(n.useState)(i.length),s=Object(l.a)(m,1)[0];return r.a.createElement("div",{className:"cardList"},r.a.createElement(P,{goToPrevSlide:function(){c&&o(c-1)},activeIndex:c}),i.map((function(e,t){return r.a.createElement(y,{card:e,key:t,index:t,activeIndex:c})})),r.a.createElement(A,{goToNextSlide:function(){c<s-3&&o(c+1)},activeIndex:c,cardsLength:s}))},x=(a(63),a(105));function O(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=function(e){var t=e.match(/\./g),a="."===e[e.length-1];if(!(t&&t.length>1)){if(e&&t&&t.length&&a)return c(e);var n=+e.replace(/[^\d.]/g,"");c(function(e){return(new Intl.NumberFormat).format(e)}(n))}};return r.a.createElement("div",{className:"costFieldWrapper"},r.a.createElement("div",{className:"cost-form"},r.a.createElement(x.a,{id:"cost-input",label:"Treatment Cost *",type:"text",variant:"outlined",value:a,onChange:function(e){return o(e.target.value)}}),r.a.createElement(h.a,null)))}var j=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(O,null),r.a.createElement(k,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.bbc8c034.chunk.js.map