import{j as e,c as d}from"./client-B8KsQLkO.js";import l,{useState as u,useEffect as g}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import h from"https://cdn.jsdelivr.net/npm/moment@2.30.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";const y=()=>e.jsx(e.Fragment,{children:e.jsx(x,{})}),x=()=>{const[t,r]=u(new Date);g(()=>{const o=()=>{if(document.visibilityState==="visible"){const i=new Date;console.log("Update time 'now': ",i),r(i)}};return document.addEventListener("visibilitychange",o),()=>{document.removeEventListener("visibilitychange",o)}},[]);const s=t.toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit",weekday:"long",day:"numeric",month:"long",year:"numeric",timeZoneName:"short"}),c=t.toLocaleDateString("en-GB",{year:"2-digit"}),a=h(t).isoWeek();let n=t.getDay();n===0&&(n=7);const m=`${c}${a}.${n}`;return e.jsxs("div",{className:"x-shadow",style:{textAlign:"center"},children:[e.jsx("p",{children:s}),e.jsx("p",{style:{fontSize:"2rem"},children:m})]})};d.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(y,{})}));