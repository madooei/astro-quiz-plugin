import{r as U,j as S}from"./chunks/jsx-runtime.3ddac631.js";import"./chunks/index.b237b2cb.js";var P={};(function p(h,m,M,w){var L=!!(h.Worker&&h.Blob&&h.Promise&&h.OffscreenCanvas&&h.OffscreenCanvasRenderingContext2D&&h.HTMLCanvasElement&&h.HTMLCanvasElement.prototype.transferControlToOffscreen&&h.URL&&h.URL.createObjectURL);function O(){}function I(r){var e=m.exports.Promise,a=e!==void 0?e:h.Promise;return typeof a=="function"?new a(r):(r(O,O),null)}var T=function(){var r=Math.floor(16.666666666666668),e,a,n={},o=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(i){var t=Math.random();return n[t]=requestAnimationFrame(function l(u){o===u||o+r-1<u?(o=u,delete n[t],i()):n[t]=requestAnimationFrame(l)}),t},a=function(i){n[i]&&cancelAnimationFrame(n[i])}):(e=function(i){return setTimeout(i,r)},a=function(i){return clearTimeout(i)}),{frame:e,cancel:a}}(),V=function(){var r,e,a={};function n(o){function i(t,l){o.postMessage({options:t||{},callback:l})}o.init=function(l){var u=l.transferControlToOffscreen();o.postMessage({canvas:u},[u])},o.fire=function(l,u,v){if(e)return i(l,null),e;var d=Math.random().toString(36).slice(2);return e=I(function(b){function f(s){s.data.callback===d&&(delete a[d],o.removeEventListener("message",f),e=null,v(),b())}o.addEventListener("message",f),i(l,d),a[d]=f.bind(null,{data:{callback:d}})}),e},o.reset=function(){o.postMessage({reset:!0});for(var l in a)a[l](),delete a[l]}}return function(){if(r)return r;if(!M&&L){var o=["var CONFETTI, SIZE = {}, module = {};","("+p.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([o])))}catch(i){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("\u{1F38A} Could not load worker",i),null}n(r)}return r}}(),Z={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function _(r,e){return e?e(r):r}function q(r){return r!=null}function c(r,e,a){return _(r&&q(r[e])?r[e]:Z[e],a)}function X(r){return r<0?0:Math.floor(r)}function Y(r,e){return Math.floor(Math.random()*(e-r))+r}function k(r){return parseInt(r,16)}function H(r){return r.map(Q)}function Q(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:k(e.substring(0,2)),g:k(e.substring(2,4)),b:k(e.substring(4,6))}}function G(r){var e=c(r,"origin",Object);return e.x=c(e,"x",Number),e.y=c(e,"y",Number),e}function J(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function K(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function $(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function ee(r,e,a,n,o,i,t,l,u){r.save(),r.translate(e,a),r.rotate(i),r.scale(n,o),r.arc(0,0,1,t,l,u),r.restore()}function re(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar}}function ne(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.wobble+=e.wobbleSpeed,e.velocity*=e.decay,e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble);var a=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,o=e.y+e.random*e.tiltSin,i=e.wobbleX+e.random*e.tiltCos,t=e.wobbleY+e.random*e.tiltSin;return r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),e.shape==="circle"?r.ellipse?r.ellipse(e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(t-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):ee(r,e.x,e.y,Math.abs(i-n)*e.ovalScalar,Math.abs(t-o)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):(r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(o)),r.lineTo(Math.floor(i),Math.floor(t)),r.lineTo(Math.floor(n),Math.floor(e.wobbleY))),r.closePath(),r.fill(),e.tick<e.totalTicks}function te(r,e,a,n,o){var i=e.slice(),t=r.getContext("2d"),l,u,v=I(function(d){function b(){l=u=null,t.clearRect(0,0,n.width,n.height),o(),d()}function f(){M&&!(n.width===w.width&&n.height===w.height)&&(n.width=r.width=w.width,n.height=r.height=w.height),!n.width&&!n.height&&(a(r),n.width=r.width,n.height=r.height),t.clearRect(0,0,n.width,n.height),i=i.filter(function(s){return ne(t,s)}),i.length?l=T.frame(f):b()}l=T.frame(f),u=b});return{addFettis:function(d){return i=i.concat(d),v},canvas:r,promise:v,reset:function(){l&&T.cancel(l),u&&u()}}}function W(r,e){var a=!r,n=!!c(e||{},"resize"),o=c(e,"disableForReducedMotion",Boolean),i=L&&!!c(e||{},"useWorker"),t=i?V():null,l=a?J:K,u=r&&t?!!r.__confetti_initialized:!1,v=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,d;function b(s,R,E){for(var y=c(s,"particleCount",X),x=c(s,"angle",Number),C=c(s,"spread",Number),g=c(s,"startVelocity",Number),ae=c(s,"decay",Number),ie=c(s,"gravity",Number),oe=c(s,"drift",Number),z=c(s,"colors",H),le=c(s,"ticks",Number),D=c(s,"shapes"),se=c(s,"scalar"),j=G(s),B=y,N=[],ce=r.width*j.x,ue=r.height*j.y;B--;)N.push(re({x:ce,y:ue,angle:x,spread:C,startVelocity:g,color:z[B%z.length],shape:D[Y(0,D.length)],ticks:le,decay:ae,gravity:ie,drift:oe,scalar:se}));return d?d.addFettis(N):(d=te(r,N,l,R,E),d.promise)}function f(s){var R=o||c(s,"disableForReducedMotion",Boolean),E=c(s,"zIndex",Number);if(R&&v)return I(function(g){g()});a&&d?r=d.canvas:a&&!r&&(r=$(E),document.body.appendChild(r)),n&&!u&&l(r);var y={width:r.width,height:r.height};t&&!u&&t.init(r),u=!0,t&&(r.__confetti_initialized=!0);function x(){if(t){var g={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};l(g),t.postMessage({resize:{width:g.width,height:g.height}});return}y.width=y.height=null}function C(){d=null,n&&h.removeEventListener("resize",x),a&&r&&(document.body.removeChild(r),r=null,u=!1)}return n&&h.addEventListener("resize",x,!1),t?t.fire(s,y,C):b(s,y,C)}return f.reset=function(){t&&t.reset(),d&&d.reset()},f}var F;function A(){return F||(F=W(null,{useWorker:!0,resize:!0})),F}m.exports=function(){return A().apply(this,arguments)},m.exports.reset=function(){A().reset()},m.exports.create=W})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),P,!1);var de=P.exports;P.exports.create;function he({label:p,handleOnClick:h}){const m=U(`
    my-4 
    py-1 
    px-10 
    bg-purple-500 
    text-white 
    font-semibold 
    rounded-lg 
    shadow-md 
    hover:bg-purple-700 
    focus:outline-none 
    focus:ring-2 
    focus:ring-purple-400 
    focus:ring-opacity-75
  `);return S.exports.jsx("button",{className:m,onClick:h,children:p})}function ge({children:p}){const h=M=>{M.preventDefault(),de()},m=U(`
    relative 
    bg-white 
    px-6 
    py-8 
    shadow-xl 
    ring-1 
    ring-gray-900/5 
    mx-auto 
    lg:max-w-xl 
    sm:max-w-lg 
    sm:rounded-lg 
    sm:px-10
  `);return S.exports.jsxs("div",{className:m,children:[S.exports.jsx("div",{children:p}),S.exports.jsx(he,{label:"Submit",handleOnClick:h})]})}export{ge as default};