import{r as _}from"./index.b237b2cb.js";function x(t){return t.replace(/\n|\r/g," ").replace(/ {2,}/g," ")}var i={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a=_.exports,c=Symbol.for("react.element"),u=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,y=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(t,e,l){var r,o={},p=null,s=null;l!==void 0&&(p=""+l),e.key!==void 0&&(p=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)m.call(e,r)&&!d.hasOwnProperty(r)&&(o[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)o[r]===void 0&&(o[r]=e[r]);return{$$typeof:c,type:t,key:p,ref:s,props:o,_owner:y.current}}n.Fragment=u;n.jsx=f;n.jsxs=f;i.exports=n;export{i as j,x as r};
