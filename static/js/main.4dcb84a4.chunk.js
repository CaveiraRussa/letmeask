(this.webpackJsonpletmeask=this.webpackJsonpletmeask||[]).push([[0],{24:function(e,t,a){},34:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),s=a(26),c=a.n(s),i=a(15),o=a(5),u=a(11),l=a.n(u),d=a(14),j=a(18),p=a.p+"static/media/illustration.ae7276f0.svg",b=a.p+"static/media/logo.a88331cb.svg",m=(a(24),a(28)),h=(a(34),a(4));function f(e){return Object(h.jsx)("button",Object(m.a)({className:"button"},e))}var x=a(17);a(36),a(38);x.a.initializeApp({apiKey:"AIzaSyB-66Yst368dUehTSqIbicuPHm1A369cd0",authDomain:"letmeask-9a476.firebaseapp.com",databaseURL:"https://letmeask-9a476-default-rtdb.firebaseio.com",projectId:"letmeask-9a476",storageBucket:"letmeask-9a476.appspot.com",messagingSenderId:"894008968669",appId:"1:894008968669:web:cc8ceee20343690ffbe234"});var O=x.a.auth(),v=x.a.database(),g=Object(n.createContext)({});function k(e){var t=Object(n.useState)(),a=Object(j.a)(t,2),r=a[0],s=a[1];function c(){return(c=Object(d.a)(l.a.mark((function e(){var t,a,n,r,c,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new x.a.auth.GoogleAuthProvider,e.next=3,O.signInWithPopup(t);case 3:if(!(a=e.sent).user){e.next=9;break}if(n=a.user,r=n.displayName,c=n.photoURL,i=n.uid,r&&c){e.next=8;break}throw new Error("Missing information from Google Account.");case 8:s({id:i,name:r,avatar:c});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){var e=O.onAuthStateChanged((function(e){if(e){var t=e.displayName,a=e.photoURL,n=e.uid;if(!t||!a)throw new Error("Missing information from Google Account.");s({id:n,name:t,avatar:a})}}));return function(){e()}}),[]),Object(h.jsx)(g.Provider,{value:{user:r,signInWithGoogle:function(){return c.apply(this,arguments)}},children:e.children})}function w(){return Object(n.useContext)(g)}function y(){var e=w().user,t=Object(n.useState)(""),a=Object(j.a)(t,2),r=a[0],s=a[1];function c(){return(c=Object(d.a)(l.a.mark((function t(a){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),""!==r.trim()){t.next=3;break}return t.abrupt("return");case 3:return n=v.ref("rooms"),t.next=6,n.push({title:r,authorId:null===e||void 0===e?void 0:e.id});case 6:t.sent;case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"page-auth",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("img",{src:p,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(h.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(h.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)("img",{src:b,alt:"Letmeask"}),Object(h.jsx)("h2",{children:"Criar uma nova sala"}),Object(h.jsxs)("form",{onSubmit:function(e){return c.apply(this,arguments)},children:[Object(h.jsx)("input",{type:"text",placeholder:"Nome da sala",onChange:function(e){return s(e.target.value)},value:r}),Object(h.jsx)(f,{type:"submit",children:"Criar sala"})]}),Object(h.jsxs)("p",{children:["Quer entrar em uma sala existente? ",Object(h.jsx)(i.b,{to:"/",children:"clique aqui"})]})]})})]})}var I=a.p+"static/media/google-icon.df15d8e5.svg";function C(){var e=Object(o.e)(),t=w(),a=t.user,n=t.signInWithGoogle;function r(){return(r=Object(d.a)(l.a.mark((function t(){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a){t.next=3;break}return t.next=3,n();case 3:e.push("/rooms/new");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(h.jsxs)("div",{id:"page-auth",children:[Object(h.jsxs)("aside",{children:[Object(h.jsx)("img",{src:p,alt:"Ilustra\xe7\xe3o simbolizando perguntas e respostas"}),Object(h.jsx)("strong",{children:"Crie salas de Q&A ao-vivo"}),Object(h.jsx)("p",{children:"Tire as d\xfavidas da sua audi\xeancia em tempo-real"})]}),Object(h.jsx)("main",{children:Object(h.jsxs)("div",{className:"main-content",children:[Object(h.jsx)("img",{src:b,alt:"Letmeask"}),Object(h.jsxs)("button",{onClick:function(){return r.apply(this,arguments)},className:"create-room",children:[Object(h.jsx)("img",{src:I,alt:"Logo do Google"}),"Crie sua sala com o Google"]}),Object(h.jsx)("div",{className:"separator",children:"ou entre em uma sala"}),Object(h.jsxs)("form",{children:[Object(h.jsx)("input",{type:"text",placeholder:"Digite o c\xf3digo da sala"}),Object(h.jsx)(f,{type:"submit",children:"Entrar na sala"})]})]})})]})}var A=function(){return Object(h.jsx)(k,{children:Object(h.jsxs)(i.a,{children:[Object(h.jsx)(o.a,{path:"/",exact:!0,component:C}),Object(h.jsx)(o.a,{path:"/rooms/new",component:y})]})})};a(46);c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(A,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.4dcb84a4.chunk.js.map