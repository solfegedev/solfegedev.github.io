import{j as e,c}from"./client-B8KsQLkO.js";import{C as m}from"./CookieConsentWrapper-DBLm3LwE.js";import l,{useEffect as y}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{D as x}from"./dates-Bl3diZEm.js";import p from"https://cdn.jsdelivr.net/npm/moment@2.30.1/+esm";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";const d={startDate:"2024-09-16",numWeeks:35,events:{"2024-09-22":"Maja Airport","2024-09-26":"Silvia London","2024-09-28":"Wanja London","2024-10-06":"Maja Airport","2024-10-15":"Bday","2024-12-21":"Ferry","2024-12-25":"BHOL: Xmas","2024-12-26":"BHOL: Boxing - Ferry","2025-01-01":"BHOL: New Year","2025-02-07":"Bday","2025-04-18":"BHOL: Easter","2025-04-21":"BHOL: Easter","2025-05-05":"BHOL","2025-05-26":"BHOL: Spring","2025-08-25":"BHOL: Summer"}};function f(){const r=new Date(new Date().toISOString().substring(0,10)),i=[{weekNo:"",days:[]}];let a=new Date(d.startDate);for(let t=0;t<d.numWeeks;t++){const o={weekNo:p(a).isoWeek().toString().padStart(2,"0"),days:[]};for(let s=0;s<7;s++)o.days.push(a),a=new Date(a.getTime()+x);i.push(o)}return y(()=>{Object.entries(d.events).forEach(t=>{const[n,o]=t,s=document.querySelector(`[data-iso="${n}"]`);s&&(s.innerHTML=o,o.startsWith("BHOL")&&s.parentElement.classList.add("x-weekend"))})},[]),e.jsx("main",{children:e.jsx("div",{className:"x-container",children:i.map((t,n)=>e.jsxs("div",{className:"x-week",children:[e.jsx("div",{className:"x-week-no",children:t.weekNo},`${n}-no`),t.weekNo===""?["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map((o,s)=>e.jsx("div",{className:"x-day",style:{justifyContent:"center"},children:o},`${n}-${s}`)):t.days.map((o,s)=>e.jsx(u,{dt:o,today:r},`${n}-${s}`))]},n))})})}const u=({dt:r,today:i})=>{const a=r.getDate(),t=r.toISOString().substring(0,10),n="x-day"+(a===1?" x-day-first":"")+(a<=7?" x-day-first-week":"")+([0,6].includes(r.getDay())?" x-weekend":"")+(r.getTime()===i.getTime()?" x-today":"")+(r.getTime()<i.getTime()?" x-past":"");return e.jsxs("div",{className:n,children:[a===1?e.jsx("div",{className:"x-day-number",style:{color:"#f00",fontSize:"0.7em"},children:r.toLocaleDateString(void 0,{month:"short"})}):e.jsx("div",{className:"x-day-number",children:a}),e.jsx("div",{className:"x-day-description","data-iso":t})]})};c.createRoot(document.getElementById("root")).render(e.jsx(l.StrictMode,{children:e.jsx(m,{children:e.jsx(f,{})})}));