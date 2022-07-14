import{r as i}from"./chunks/index.b237b2cb.js";import{r as s,j as e}from"./chunks/jsx-runtime.3ddac631.js";function a(){return e.exports.jsx("path",{d:"m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9",fill:"none"})}function x({selected:t}){const r=s(`
    h-6 
    w-6 
    flex-none 
    fill-purple-100 
    stroke-purple-500 
    stroke-2
  `);return e.exports.jsxs("svg",{className:r,strokeLinecap:"round",strokeLinejoin:"round",children:[e.exports.jsx("circle",{cx:"12",cy:"12",r:"11"}),t&&e.exports.jsx(a,{})]})}function d({children:t}){const[r,o]=i.exports.useState(!1),n=l=>{l.preventDefault(),o(p=>!p)},c=s(`
    flex 
    items-center 
    border-1 
    mb-2 
    py-2 
    px-3 
    cursor-pointer 
    hover:bg-purple-50 
    ${r?"bg-purple-50":"bg-white"}
  `);return e.exports.jsxs("div",{className:c,onClick:n,children:[e.exports.jsx(x,{selected:r}),e.exports.jsx("div",{className:"ml-4",children:t})]})}export{d as default};
