(this.webpackJsonpsolarsystem=this.webpackJsonpsolarsystem||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(2),i=a.n(n),r=a(5),s=a.n(r),u=(a(10),a(0)),c=a.p+"static/media/sun.4b569137.jpeg",d=a.p+"static/media/mercury.8f80953b.jpeg",o=a.p+"static/media/venus.b2e12742.jpeg",p=a.p+"static/media/earth.981cc3e3.jpeg",h=a.p+"static/media/mars.33960f5a.jpeg",m=a.p+"static/media/jupiter.3e84533e.jpeg",g=a.p+"static/media/saturn.3b074d8e.jpeg",j=a.p+"static/media/uranus.428ad3f9.jpeg",f=a.p+"static/media/neptune.6dd11266.jpeg",l=a.p+"static/media/pluto.8f80953b.jpeg",w=a.p+"static/media/stars.9704bf44.jpeg",P=(a(11),a(3));var x=function(){return Object(n.useEffect)((function(){var e=document.querySelector("#render-area"),t=new u.i({canvas:e,antialias:!0}),a=new u.d(75,2,.1,1e3);a.position.set(0,0,150),a.up.set(0,0,1),a.lookAt(0,0,0);var n=new u.g,i=new u.e;function r(e){var t=e.radius,a=e.texture,r=new u.f(t,24,24),s=new u.c({map:n.load(a)}),c=new u.b(r,s);return c.position.set(0,0,0),i.add(c),c}i.background=n.load(w);var s=r({radius:10,texture:c}),P=r({radius:1,texture:d}),x=new u.a(0,-10,20,30,0,2*Math.PI),I=r({radius:1.5,texture:o}),M=new u.a(0,-15,30,45,Math.PI/2,5*Math.PI/2,!0),b=r({radius:1.5,texture:p}),v=new u.a(0,-20,40,60,Math.PI,3*Math.PI),y=r({radius:1,texture:h}),F=new u.a(0,-15,50,75,3*Math.PI/2,7*Math.PI/2),O=r({radius:2.5,texture:m}),k=new u.a(0,-15,60,90,0,2*Math.PI),A=r({radius:2.5,texture:g}),E=new u.a(0,-15,70,105,Math.PI/2,5*Math.PI/2),S=r({radius:2,texture:j}),q=new u.a(0,-15,80,120,Math.PI,3*Math.PI),z=r({radius:2,texture:f}),C=new u.a(0,-15,90,135,3*Math.PI/2,7*Math.PI/2),B=r({radius:1,texture:l}),H=new u.a(0,-15,100,150,0,2*Math.PI);function J(e,t,a,n){var i=new u.h;t.getPointAt(a*n%1,i),e.position.set(i.x,i.y,0),e.rotation.z=a}requestAnimationFrame((function e(n){if(n*=.001,function(e){var t=e.domElement,a=t.clientWidth,n=t.clientHeight,i=a!==t.width||n!==t.height;return i&&e.setSize(a,n,!1),i}(t)){var r=t.domElement;a.aspect=r.clientWidth/r.clientHeight,a.updateProjectionMatrix()}s.rotation.z=n,J(P,x,n,.5),J(I,M,n,1/4),J(b,v,n,1/8),J(y,F,n,1/16),J(O,k,n,1/32),J(A,E,n,1/64),J(S,q,n,1/96),J(z,C,n,1/128),J(B,H,n,1/160),t.render(i,a),requestAnimationFrame(e)}))}),[]),Object(P.jsx)("div",{className:"app-container",children:Object(P.jsx)("canvas",{id:"render-area"})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(P.jsx)(i.a.StrictMode,{children:Object(P.jsx)(x,{})}),document.getElementById("root")),I()}},[[14,1,2]]]);
//# sourceMappingURL=main.6af2cacf.chunk.js.map