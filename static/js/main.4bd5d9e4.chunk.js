(this["webpackJsonpchat-client"]=this["webpackJsonpchat-client"]||[]).push([[0],{114:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),a=n.n(r),s=n(20),i=n.n(s),o=(n(77),n(7));n(78);function l(e,t){var n="chatapp-"+e,c=Object(r.useState)((function(){var e=localStorage.getItem(n);return null!==e?JSON.parse(e):"function"===typeof t?t():t})),a=Object(o.a)(c,2),s=a[0],i=a[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(s))}),[n,s]),[s,i]}var j=n(124),u=n(122),d=n(117),b=n(120),O=n(125),f=n(23),x=n(21),h=a.a.createContext({contacts:[],createContact:function(){}});function v(){return Object(r.useContext)(h)}var m=function(e){var t=e.children,n=l("contacts",[]),r=Object(o.a)(n,2),a=r[0],s=r[1];return Object(c.jsx)(h.Provider,{value:{contacts:a,createContact:function(e,t){s((function(n){return[].concat(Object(x.a)(n),[{id:e,name:t}])}))}},children:t})},p=n(70),g=a.a.createContext({}),C=function(e){var t=e.id,n=e.children,a=Object(r.useState)(),s=Object(o.a)(a,2),i=s[0],l=s[1];return Object(r.useEffect)((function(){var e=Object(p.io)("https://chati-server-socketio.herokuapp.com",{query:{id:t}});return l(e),function(){e.close()}}),[t]),Object(c.jsx)(g.Provider,{value:i,children:n})},y=a.a.createContext({});function N(){return Object(r.useContext)(y)}var S=function(e){var t=e.id,n=e.children,a=l("conversations",[]),s=Object(o.a)(a,2),i=s[0],j=s[1],u=v().contacts,d=Object(r.useState)(0),b=Object(o.a)(d,2),O=b[0],h=b[1],m=Object(r.useContext)(g);var p=Object(r.useCallback)((function(e){var t=e.recipients,n=e.text,c=e.sender;j((function(e){var r=!1,a={sender:c,text:n},s=e.map((function(e){return n=e.recipients,c=t,n.length===c.length&&(n.sort(),c.sort(),n.every((function(e,t){return e===c[t]})))?(r=!0,Object(f.a)(Object(f.a)({},e),{},{messages:[].concat(Object(x.a)(e.messages),[a])})):e;var n,c}));return r?s:[].concat(Object(x.a)(e),[{recipients:t,messages:[a]}])}))}),[j]);Object(r.useEffect)((function(){if(null!=m)return m.on("receive-message",p),function(){m.off("receive-message")}}),[m,p]);var C=i.map((function(e,n){var c=e.recipients.map((function(e){var t=u.find((function(t){return t.id===e.id})),n=t&&t.name||e;return{id:e,name:n}})),r=e.messages.map((function(e){var n=u.find((function(t){return t.id===e.sender})),c=n&&n.name||e.sender,r=t===e.sender;return Object(f.a)(Object(f.a)({},e),{},{senderName:c,fromMe:r})})),a=n===O;return Object(f.a)(Object(f.a)({},e),{},{messages:r,recipients:c,selected:a})})),N={conversations:C,selectedConversation:C[O],selectConversationIndex:h,createConversation:function(e){j((function(t){return[].concat(Object(x.a)(t),[{recipients:e,messages:[]}])}))},sendMessage:function(e,n){m.emit("send-message",{recipients:e,text:n}),p({recipients:e,text:n,sender:t})}};return Object(c.jsx)(y.Provider,{value:N,children:n})};var I=function(){var e=N(),t=e.conversations,n=e.selectConversationIndex;return Object(c.jsx)(O.a,{variant:"flush",children:t.map((function(e,t){return Object(c.jsx)(O.a.Item,{action:!0,onClick:function(){return n(t)},active:e.selected,children:e.recipients.map((function(e){return e.name})).join(", ")},t)}))})},k=function(){var e=v().contacts;return Object(c.jsx)(O.a,{variant:"flush",children:e.map((function(e){return Object(c.jsx)(O.a.Item,{children:e.name},e.id)}))})},w=n(121),M=function(e){var t=e.closeModal,n=Object(r.useState)([]),a=Object(o.a)(n,2),s=a[0],i=a[1],l=v().contacts,j=N().createConversation;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a.Header,{closeButton:!0,children:"Create Contact"}),Object(c.jsx)(b.a.Body,{children:Object(c.jsxs)(w.a,{onSubmit:function(e){e.preventDefault(),j(s),t()},children:[l.map((function(e){return Object(c.jsx)(w.a.Group,{controlId:e.id,children:Object(c.jsx)(w.a.Check,{type:"checkbox",label:e.name,checked:s.includes(e.id),onChange:function(){return t=e.id,void i((function(e){return e.includes(t)?e.filter((function(e){return t!==e})):[].concat(Object(x.a)(e),[t])}));var t}})},e.id)})),Object(c.jsx)(d.a,{type:"submit",children:"Create"})]})})]})},L=function(e){var t=e.closeModal,n=Object(r.useRef)(null),a=Object(r.useRef)(null),s=v().createContact;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b.a.Header,{closeButton:!0,children:"Create Contact"}),Object(c.jsx)(b.a.Body,{children:Object(c.jsxs)(w.a,{onSubmit:function(e){var c,r;e.preventDefault(),s(null===(c=n.current)||void 0===c?void 0:c.value,null===(r=a.current)||void 0===r?void 0:r.value),t()},children:[Object(c.jsxs)(w.a.Group,{children:[Object(c.jsx)(w.a.Label,{children:"Id"}),Object(c.jsx)(w.a.Control,{type:"text",ref:n,required:!0})]}),Object(c.jsxs)(w.a.Group,{children:[Object(c.jsx)(w.a.Label,{children:"Name"}),Object(c.jsx)(w.a.Control,{type:"text",ref:a,required:!0})]}),Object(c.jsx)(d.a,{type:"submit",children:"Create"})]})})]})},F="conversations",P="contacts",B=function(e){var t=e.id,n=Object(r.useState)(F),a=Object(o.a)(n,2),s=a[0],i=a[1],l=s===F,O=Object(r.useState)(!1),f=Object(o.a)(O,2),x=f[0],h=f[1],v=function(){h(!1)};return Object(c.jsxs)("div",{style:{width:"250px"},className:"d-flex flex-column",children:[Object(c.jsxs)(j.a.Container,{activeKey:s,onSelect:i,children:[Object(c.jsxs)(u.a,{variant:"tabs",className:"justify-content-center",children:[Object(c.jsx)(u.a.Item,{children:Object(c.jsx)(u.a.Link,{eventKey:F,children:"Conversations"})}),Object(c.jsx)(u.a.Item,{children:Object(c.jsx)(u.a.Link,{eventKey:P,children:"Contacts"})})]}),Object(c.jsxs)(j.a.Content,{className:"border-right overflow-auto flex-grow-1",children:[Object(c.jsx)(j.a.Pane,{eventKey:F,children:Object(c.jsx)(I,{})}),Object(c.jsx)(j.a.Pane,{eventKey:P,children:Object(c.jsx)(k,{})})]}),Object(c.jsxs)("div",{className:"p-2 border-top border-right small",children:["Your id: ",Object(c.jsx)("span",{className:"text-muted",children:t})]}),Object(c.jsxs)(d.a,{onClick:function(){return h(!0)},className:"rounded-0",children:["New ",l?"Conversation":"Contact"]})]}),Object(c.jsx)(b.a,{show:x,onHide:v,children:l?Object(c.jsx)(M,{closeModal:v}):Object(c.jsx)(L,{closeModal:v})})]})},D=n(118),q=function(){var e=N(),t=e.sendMessage,n=e.selectedConversation,a=Object(r.useCallback)((function(e){e&&e.scrollIntoView({smooth:!0})}),[]),s=Object(r.useState)(""),i=Object(o.a)(s,2),l=i[0],j=i[1];return Object(c.jsxs)("div",{className:"d-flex flex-column flex-grow-1",children:[Object(c.jsx)("div",{className:"flex-grow-1 overflow-auto",children:Object(c.jsx)("div",{className:"d-flex flex-column align-items-lg-start justify-content-end px-3",children:n.messages.map((function(e,t){var r=n.messages.length-1===t;return Object(c.jsxs)("div",{ref:r?a:null,className:"my-1 d-flex flex-column ".concat(e.fromMe?"align-self-end align-items-end":"align-items-start"),children:[Object(c.jsx)("div",{className:"rounded px-2 py-1 ".concat(e.fromMe?"bg-primary text-white":"border"),children:e.text}),Object(c.jsx)("div",{className:"text-muted small ".concat(e.fromMe?"text-right":""),children:e.fromMe?"You":e.senderName})]},t)}))})}),Object(c.jsx)(w.a,{onSubmit:function(e){e.preventDefault(),t(n.recipients.map((function(e){return e.id})),l),j("")},children:Object(c.jsx)(w.a.Group,{className:"m-2",children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)(w.a.Control,{as:"textarea",required:!0,value:l,onChange:function(e){return j(e.target.value)},style:{height:"75px",resize:"none"}}),Object(c.jsx)(D.a.Append,{children:Object(c.jsx)(d.a,{type:"submit",children:"Send"})})]})})})]})},E=function(e){var t=e.id,n=N().selectedConversation;return Object(c.jsxs)("div",{className:"d-flex",style:{height:"100vh"},children:[Object(c.jsx)(B,{id:t}),n&&Object(c.jsx)(q,{})]})},G=n(119),K=n(123),J=function(e){var t=e.onIdSubmit,n=Object(r.useRef)(null);return Object(c.jsx)(G.a,{className:"align-items-center d-flex",style:{height:"100vh"},children:Object(c.jsxs)(w.a,{onSubmit:function(e){var c;e.preventDefault(),t(null===(c=n.current)||void 0===c?void 0:c.value)},className:"w-100",children:[Object(c.jsxs)(w.a.Group,{children:[Object(c.jsx)(w.a.Label,{children:"Enter your ID"}),Object(c.jsx)(w.a.Control,{type:"text",ref:n,required:!0})]}),Object(c.jsx)(d.a,{type:"submit",className:"mr-2",children:"Login"}),Object(c.jsx)(d.a,{variant:"secondary",onClick:function(){t(Object(K.a)())},children:"Create A New Id"})]})})};var H=function(){var e=l("id"),t=Object(o.a)(e,2),n=t[0],r=t[1],a=Object(c.jsx)(C,{id:n,children:Object(c.jsx)(m,{children:Object(c.jsx)(S,{id:n,children:Object(c.jsx)(E,{id:n})})})});return Object(c.jsx)(c.Fragment,{children:n?a:Object(c.jsx)(J,{onIdSubmit:r})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,126)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};n(113);i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root")),R()},77:function(e,t,n){},78:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.4bd5d9e4.chunk.js.map