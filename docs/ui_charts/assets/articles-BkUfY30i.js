import{j as t,c}from"./client-B8KsQLkO.js";import{C as l}from"./CookieConsentWrapper-CRJKL-6e.js";import m,{useRef as d,useState as p,useEffect as u}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{g as h}from"./store-C6W4SrBE.js";import{B as x}from"./Button-AoLKMrJK.js";import{F as a}from"./Form-COHTRsdv.js";import f from"https://cdn.jsdelivr.net/npm/react-markdown@9.0.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./index-C-QDmpkE.js";import"./ElementChildren-AZvnq_HE.js";const j=()=>{const e=h().get("article");return t.jsx("main",{children:e?t.jsx(g,{name:e}):t.jsx(w,{})})},w=()=>{const r=d(null),e=i=>{var n;const o=(n=r.current)==null?void 0:n.value;i.preventDefault(),window.location.href=window.location.pathname+"?article="+o};return t.jsxs(a,{style:{maxWidth:"50rem",margin:"auto"},children:[t.jsxs(a.Group,{className:"mb-3",controlId:"formBasicEmail",children:[t.jsx(a.Label,{children:"Article"}),t.jsx(a.Control,{type:"email",placeholder:"Enter article slug",ref:r})]}),t.jsx(x,{variant:"primary",type:"submit",onClick:e,children:"Submit"})]})},g=({name:r})=>{const[e,i]=p();return u(()=>{(async function(){const o=`./articles/${r}.md`,n=await fetch(o);n.ok||i("**ERROR**: This article does not exist");const s=await n.text();i(s)})()},[]),t.jsxs(t.Fragment,{children:[t.jsx("a",{href:"#",onClick:o=>{o.preventDefault(),window.location.href=window.location.pathname},children:"🔙 Back to menu"}),t.jsx("div",{className:"x-shadow",children:t.jsx(f,{children:e})})]})};c.createRoot(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(l,{children:t.jsx(j,{})})}));