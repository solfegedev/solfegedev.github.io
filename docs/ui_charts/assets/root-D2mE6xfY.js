import{j as e,c}from"./client-B8KsQLkO.js";import a from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import m from"https://cdn.jsdelivr.net/npm/moment@2.30.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";const d=()=>e.jsx(e.Fragment,{children:e.jsx(l,{})}),l=()=>{const t=new Date,r=t.toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit",weekday:"long",day:"numeric",month:"long",year:"numeric",timeZoneName:"short"}),n=t.toLocaleDateString("en-GB",{year:"2-digit"}),i=m(t).isoWeek();let o=t.getDay();o===0&&(o=7);const s=`${n}${i}.${o}`;return e.jsxs("div",{className:"x-shadow",style:{textAlign:"center"},children:[e.jsx("p",{children:r}),e.jsx("p",{style:{fontSize:"2rem"},children:s})]})};c.createRoot(document.getElementById("root")).render(e.jsx(a.StrictMode,{children:e.jsx(d,{})}));
