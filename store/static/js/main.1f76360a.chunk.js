(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var r=a(0),c=a.n(r),n=a(2),i=a.n(n),l=a(4),m=a(3);var o=function(){return c.a.createElement("div",{className:"logo"},c.a.createElement("img",{src:"http://intocode.ru/d/react-project-1/build/static/media/full-word.4e6c5b59.svg",alt:""}))};var u=function(){return c.a.createElement("div",{className:"menu"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"\u041e\u0434\u0435\u0436\u0434\u0430")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"\u0414\u0435\u0442\u044f\u043c")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"\u041a\u043d\u0438\u0433\u0438")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"\u041a\u043e\u043c\u043f\u044c\u044e\u0442\u0435\u0440\u044b")),c.a.createElement("li",null,c.a.createElement("a",{href:"#"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))))};var d=function(e){var t=e.products.filter(function(e){return e.bought});return c.a.createElement("div",{className:"checkout"},c.a.createElement("a",{href:"#"},c.a.createElement("img",{src:"http://intocode.ru/d/react-project-1/build/static/media/shopping-cart-solid.8bf1af37.svg",alt:""}),c.a.createElement("span",{className:"counter"},t.length)))};var g=function(e){var t=e.getBuy,a=e.id,r=e.bought;return c.a.createElement("div",{className:"card-button"},c.a.createElement("button",{className:"btn",onClick:function(){return t(a)},disabled:r},r?"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"))};var s=function(e){var t=e.product,a=e.getBuy,r=t.name,n=t.id,i=t.image,l=t.rating,m=t.price,o=t.bought;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-image"},c.a.createElement("img",{src:i,alt:""})),c.a.createElement("div",{className:"card-info"},c.a.createElement("div",{className:"card-name"},r),c.a.createElement("div",{className:"card-rating"},"*".repeat(l)),c.a.createElement("div",{className:"card-price"},m," \u20bd"),c.a.createElement(g,{getBuy:a,id:n,bought:o})))};var p=function(){return c.a.createElement("a",{href:"#",className:"logout"},"\u0412\u044b\u0445\u043e\u0434")};var E=function(e){var t=e.products,a=e.getBuy;return c.a.createElement("div",{className:"content"},t.map(function(e){return c.a.createElement(s,{product:e,getBuy:a})}))};var h=function(){var e=Object(r.useState)([{id:1,name:"MacBook",price:1e5,bought:!1,rating:5,image:"http://intocode.ru/d/react-project-1/images/1.jpg"},{id:2,name:"Galaxy",price:35999,bought:!1,rating:4,image:"http://intocode.ru/d/react-project-1/images/2.jpg"},{id:3,name:"\u0421\u043a\u0443\u0442\u0435\u0440",price:65500,bought:!1,rating:5,image:"http://intocode.ru/d/react-project-1/images/3.jpg"},{id:4,name:"\u041c\u043e\u043d\u0438\u0442\u043e\u0440 Samsung",price:12e3,bought:!1,rating:3,image:"http://intocode.ru/d/react-project-1/images/4.jpg"},{id:5,name:"\u0420\u0435\u0441\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u043d\u0430\u044f \u043c\u0430\u0441\u043a\u0430",price:500,bought:!1,rating:5,image:"http://intocode.ru/d/react-project-1/images/5.jpg"},{id:6,name:"\u0421\u0442\u0438\u0440\u0430\u043b\u044c\u043d\u0430\u044f \u043c\u0430\u0448\u0438\u043d\u0430",price:1e5,bought:!1,rating:3,image:"http://intocode.ru/d/react-project-1/images/6.jpg"},{id:7,name:"\u0411\u0435\u043b\u044b\u0439 \u0445\u043e\u043b\u043e\u0434\u0438\u043b\u044c\u043d\u0438\u043a",price:43100,bought:!1,rating:5,image:"http://intocode.ru/d/react-project-1/images/7.jpg"},{id:8,name:"\u041a\u043e\u043b\u043e\u043d\u043a\u0430",price:3e3,bought:!1,rating:4,image:"http://intocode.ru/d/react-project-1/images/8.jpg"},{id:9,name:"\u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438",price:1500,bought:!1,rating:5,image:"http://intocode.ru/d/react-project-1/images/9.jpg"}]),t=Object(m.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"header"},c.a.createElement(o,null)," ",c.a.createElement(u,null)," ",c.a.createElement(d,{products:a})," ",c.a.createElement(p,null)),c.a.createElement(E,{products:a,getBuy:function(e){n(a.map(function(t){return t.id==e?Object(l.a)({},t,{bought:!0}):t}))}}))};i.a.render(c.a.createElement(h,null),document.getElementById("root"))},5:function(e,t,a){e.exports=a(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.1f76360a.chunk.js.map