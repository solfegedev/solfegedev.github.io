import{j as t,c}from"./client-B8KsQLkO.js";import{C as l}from"./CookieConsentWrapper-CRJKL-6e.js";import m,{useRef as d,useState as u,useEffect as p}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{g as f}from"./store-C6W4SrBE.js";import{A as h}from"./Alert-CVO57zo1.js";import{B as x}from"./Button-Dbum-Du3.js";import{F as s}from"./Form-5wlro-Ns.js";import j from"https://cdn.jsdelivr.net/npm/react-markdown@9.0.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./CloseButton-CUYUvxPi.js";import"./ElementChildren-AZvnq_HE.js";const w=()=>{const e=f().get("article");return t.jsx("main",{style:{maxWidth:"50rem",margin:"auto"},children:e?t.jsx(v,{name:e}):t.jsx(g,{})})},g=()=>{const o=d(null),e=i=>{var r;const n=(r=o.current)==null?void 0:r.value;i.preventDefault(),window.location.href=window.location.pathname+"?article="+n};return t.jsxs(s,{children:[t.jsxs(s.Group,{className:"mb-3",controlId:"formBasicEmail",children:[t.jsx(s.Label,{children:"Article"}),t.jsx(s.Control,{type:"email",placeholder:"Enter article slug",ref:o})]}),t.jsx(x,{variant:"primary",type:"submit",onClick:e,children:"Submit"})]})},v=({name:o})=>{const[e,i]=u();return p(()=>{(async function(){const n=`./articles/${o}.md`,r=await fetch(n);if(console.log(r.status),!r.ok)i(r.status);else{const a=await r.text();i(a)}})()},[]),e===void 0?t.jsx("p",{children:"Loading..."}):typeof e=="number"?t.jsxs(h,{variant:"danger",children:["The document '",o,"' does not exist: ",e]}):t.jsxs(t.Fragment,{children:[t.jsx("a",{href:"#",onClick:n=>{n.preventDefault(),window.location.href=window.location.pathname},children:"🔙 Back to menu"}),t.jsx("div",{className:"x-shadow",children:t.jsx(j,{children:e})})]})};c.createRoot(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(l,{children:t.jsx(w,{})})}));
