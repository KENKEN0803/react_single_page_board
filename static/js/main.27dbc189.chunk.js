(this.webpackJsonpreact_single_page_board=this.webpackJsonpreact_single_page_board||[]).push([[0],{52:function(t,e,n){},53:function(t,e,n){},94:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(45),o=n.n(s),r=(n(52),n(9)),j=(n(53),n(11)),i=n(3),l=n(15),b=n.n(l),u=n(46),d=n(10),O=n.n(d),h=(n.p,n(0));function p(t){var e=t.content;return Object(h.jsxs)("tr",{className:"rowrow",children:[Object(h.jsx)("td",{children:e.author}),Object(h.jsx)("td",{children:Object(h.jsx)(j.b,{to:{pathname:"/modify",state:e},children:e.subject})}),Object(h.jsx)("td",{children:e.created})]})}var x=function(){var t=Object(c.useState)(1),e=Object(r.a)(t,2),n=e[0],a=e[1],s=Object(c.useState)([]),o=Object(r.a)(s,2),j=o[0],i=o[1],l=Object(c.useState)(!0),d=Object(r.a)(l,2),x=d[0],m=d[1],f="https://kenken0803.asuscomm.com:3030/getDB?id=".concat(n-1,"&start=").concat(n),g=function(){var t=Object(u.a)(b.a.mark((function t(){var e;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(f);case 2:e=t.sent,i(e),m(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){g()}),[n]),Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("table",{children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:"\uc791\uc131\uc790"}),Object(h.jsx)("td",{children:"\uc81c\ubaa9"}),Object(h.jsx)("td",{children:"\uc791\uc131\uc77c"})]})}),Object(h.jsx)("tbody",{children:x?'<img src={logo} className="App-logo" alt="LOADING..."/>"LOADING..."':j.data.map((function(t,e){return Object(h.jsx)(p,{content:t},e)}))}),Object(h.jsx)("tfoot",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){if(n<11)return!1;a(n-10)},children:"\uc774\uc804"})}),Object(h.jsxs)("td",{children:["\ud604\uc7ac \ud398\uc774\uc9c0 : ",n]}),Object(h.jsx)("td",{children:Object(h.jsx)("button",{onClick:function(){a(n+10)},children:"\ub2e4\uc74c"})})]})})]})})},m=n(2),f=n(16),g=n(17),v=n.n(g);var w=function(){var t=Object(c.useState)({author:"",email:"",subject:"",contents:"",password:""}),e=Object(r.a)(t,2),n=e[0],a=e[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"form-wrapper",children:["\uc81c\ubaa9",Object(h.jsx)("input",{className:"title-input",type:"text",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(m.a)(Object(m.a)({},n),{},{subject:c})),console.log(n.subject)}}),Object(h.jsx)("br",{}),"Email",Object(h.jsx)("input",{type:"text",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(m.a)(Object(m.a)({},n),{},{email:c})),console.log(n.email)}}),"\uc791\uc131\uc790",Object(h.jsx)("input",{type:"text",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(m.a)(Object(m.a)({},n),{},{author:c})),console.log(n.author)}}),Object(h.jsx)(f.CKEditor,{editor:v.a,data:"",onChange:function(t,e){var c=e.getData();a(Object(m.a)(Object(m.a)({},n),{},{contents:c})),console.log(n.contents)}})]}),"\ud328\uc2a4\uc6cc\ub4dc",Object(h.jsx)("input",{type:"password",onChange:function(t){var e=t.target,c=(e.name,e.value);a(Object(m.a)(Object(m.a)({},n),{},{password:c})),console.log(n.password)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){O.a.post("https://kenken0803.asuscomm.com:3030/insertDB",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"},author:n.author,email:n.email,subject:n.subject,contents:n.contents,password:n.password}).then(alert("\ub4f1\ub85d\uc644\ub8cc"))},children:"\uc804\uc1a1"})]})};var C=function(t){console.log(t);var e=Object(c.useState)({author:t.location.state.author,email:t.location.state.email,subject:t.location.state.subject,contents:t.location.state.contents,password:t.location.state.password,id:t.location.state.id}),n=Object(r.a)(e,2),a=n[0],s=n[1];return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"form-wrapper",children:[Object(h.jsx)("input",{className:"title-input",type:"text",defaultValue:t.location.state.subject,onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(m.a)(Object(m.a)({},a),{},{subject:n})),console.log(a.subject)}}),Object(h.jsx)("br",{}),"Email:",Object(h.jsx)("input",{type:"text",defaultValue:t.location.state.email,onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(m.a)(Object(m.a)({},a),{},{email:n})),console.log(a.email)}}),"\uc791\uc131\uc790:",Object(h.jsx)("input",{type:"text",defaultValue:t.location.state.author,onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(m.a)(Object(m.a)({},a),{},{author:n})),console.log(a.author)}}),Object(h.jsx)(f.CKEditor,{editor:v.a,data:t.location.state.contents,onChange:function(t,e){var n=e.getData();s(Object(m.a)(Object(m.a)({},a),{},{contents:n})),console.log(a.contents)}})]}),"\ud328\uc2a4\uc6cc\ub4dc",Object(h.jsx)("input",{type:"password",onChange:function(t){var e=t.target,n=(e.name,e.value);s(Object(m.a)(Object(m.a)({},a),{},{password:n})),console.log(a.password)}}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{onClick:function(){O.a.post("https://kenken0803.asuscomm.com:3030/deleteDB",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"},id:a.id}).then(alert("\uc0ad\uc81c\ud568"))},children:"\uc0ad\uc81c\ud558\uae30"}),Object(h.jsx)("button",{onClick:function(){O.a.post("https://kenken0803.asuscomm.com:3030/updateDB",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json;charset=utf-8"},author:a.author,email:a.email,subject:a.subject,contents:a.contents,password:a.password,id:a.id}).then(alert("\ub4f1\ub85d\uc644\ub8cc"))},children:"\uc804\uc1a1\ud558\uae30"})]})};function k(){return Object(h.jsx)("h1",{className:"header",children:"\ud5e4\ub354\uc601\uc5ed"})}function y(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(j.b,{to:"/",children:"\ub9ac\uc2a4\ud2b8"})," ",Object(h.jsx)(j.b,{to:"/writer",children:"\uae00\uc4f0\uae30"})]})}function N(){return Object(h.jsx)("h4",{className:"footer",children:"\ud48b\ud130 \uc601\uc5ed"})}var A=function(){var t=Object(c.useState)(0),e=Object(r.a)(t,2);return e[0],e[1],Object(h.jsxs)(j.a,{children:[Object(h.jsx)(k,{}),Object(h.jsx)(y,{}),Object(h.jsx)(i.a,{path:"/",exact:!0,component:x}),Object(h.jsx)(i.a,{path:"/writer",component:w}),Object(h.jsx)(i.a,{path:"/modify",component:C}),Object(h.jsx)(N,{})]})};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[94,1,2]]]);
//# sourceMappingURL=main.27dbc189.chunk.js.map