import{j as e,B as o,L as r,z as a,I as l}from"./index-C2kK4JMF.js";import{h as i}from"./index-BlCkg56n.js";import{T as c}from"./index-CYvEWN75.js";import"./index-CcGDCaL_.js";const m=[{id:"Topic",align:"left",label:"Lesson",component:({row:t})=>{var n,s;return e.jsx(e.Fragment,{children:t.lesson?e.jsx(o,{variant:"text",component:r,to:(n=t.lesson)==null?void 0:n.to,children:(s=t.lesson)==null?void 0:s.text}):"-"})}},{id:"date",align:"left",label:"Date",component:({row:t})=>e.jsx(e.Fragment,{children:e.jsx("p",{children:i(t.createdAt).format("DD-MMM-YYYY [at] hh:mm a")})})},{id:"score",align:"left",label:"Score",component:({row:t})=>e.jsxs(e.Fragment,{children:[t.currectCount,"/",t.totalCount]})}],u=()=>{const t=a(l);return e.jsxs("div",{children:[e.jsx("h1",{className:"page-title",children:"Score"}),e.jsx(c,{columns:m,data:t})]})};export{u as default};
