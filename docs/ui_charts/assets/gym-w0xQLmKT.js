import{j as e,c as y}from"./client-B8KsQLkO.js";import{C as b}from"./CookieConsentWrapper-DBLm3LwE.js";import S,{useState as h,useEffect as w}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{i as v}from"./all-BSES4dDh.js";import{N as d,a as N,b as p}from"./NavDropdown-BHMHKMX3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./Button-Dbum-Du3.js";import"./CloseButton-CUYUvxPi.js";import"./Dropdown-B2rYS5Iw.js";const D=24*36e5,k=async({id:t,numDays:s})=>{const l=`https://api.eu.membr.com/api/public/gyms/${t}/bookings`,n=new Date;n.setHours(5),n.setMinutes(0),n.setSeconds(0);const r=new Date(n.getTime()+s*D);r.setHours(23),console.log(`Fetch API for slots from ${n} to ${r}`);const a={page:"1",page_size:"100",from_date:n.toISOString(),to_date:r.toISOString(),locale:"en_GB"};return fetch(l+"?"+new URLSearchParams(a).toString()).then(i=>i.json()).then(i=>(console.log("API response: ",i),i))},g={Chesterfield:1548,"Sheffield South":1554,"Sheffield North":1555,Mansfield:1587,Rotherham:1550,Luton:2788},C=({dateStr:t})=>{const s=new Date(t).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"short",year:"numeric"});return e.jsx("div",{className:"x-delimiter",children:s})},R=({selectedGymName:t,setGymName:s})=>{const[l,n]=h(!0),r=a=>{n(a)};return e.jsxs(d,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:r,expanded:l,children:[e.jsx(d.Brand,{children:"JD Gyms"}),e.jsx(d.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(d.Collapse,{id:"basic-navbar-nav",children:e.jsx(N,{className:"ms-auto me-auto",children:e.jsx(p,{title:t,onSelect:a=>{s(a)},children:Object.keys(g).map((a,i)=>e.jsx(p.Item,{active:a===t,eventKey:a,children:a},i))})})})]})},I=({name:t})=>{const s=t.toLowerCase().replace(/^jd\s+/,"");return s==="spin"?e.jsx("i",{className:"fa-solid fa-person-biking",style:{marginRight:"0.5rem",color:"#0284c7"}}):s==="hiit"?e.jsx("i",{className:"fa-solid fa-temperature-arrow-up",style:{marginRight:"0.5rem",color:"#dc2626"}}):s==="burn"?e.jsx("i",{className:"fa-solid fa-fire",style:{marginRight:"0.5rem",color:"#f97316"}}):s==="yoga"?e.jsx("i",{className:"fa-brands fa-y-combinator",style:{marginRight:"0.5rem",color:"#e879f9"}}):s==="les mills body balance"?e.jsx("i",{className:"fa-solid fa-scale-balanced",style:{marginRight:"0.5rem",color:"#047857"}}):s==="les mills body pump"?e.jsx("i",{className:"fa-solid fa-pump-soap",style:{marginRight:"0.5rem",color:"#1e3a8a"}}):s==="body conditioning"?e.jsx("i",{className:"fa-solid fa-dumbbell",style:{marginRight:"0.5rem",color:"#a8a29e"}}):s==="abs"?e.jsx("i",{className:"fa-brands fa-angular",style:{marginRight:"0.5rem",color:"#fde047"}}):s==="pilates"?e.jsx("i",{className:"fa-brands fa-product-hunt",style:{marginRight:"0.5rem",color:"#1e3a8a"}}):null},T=({evt:t,now:s})=>{const l=new Date(t.events.dateStart).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),n={backgroundColor:"#ffa8a8"},a=(new Date(t.events.dateStart).getTime()-s.getTime())/6e4,i={};let c=null;return a<-t.events.eventTime?i.backgroundImage="repeating-linear-gradient(-45deg, #bbb 0 1px, #eee 1px 0.8rem)":a<0?(i.backgroundColor="#ff7",c=e.jsxs("span",{children:[-a.toFixed(0),"m ago"]})):a<3*60&&(c=e.jsxs("span",{style:{color:"#f00"},children:["in ",a.toFixed(0),"m"]})),e.jsxs("div",{style:{...i,marginTop:"0.5rem"},children:[e.jsxs("div",{className:"x-flex-container",style:{fontWeight:"bold",color:"#1e293b"},children:[e.jsx("div",{className:"x-flex-left",children:l}),e.jsxs("div",{className:"x-flex-right",children:[e.jsxs("span",{style:{fontSize:"1.2rem"},children:[e.jsx(I,{name:t.events.name}),t.events.name]})," ","(",t.events.eventTime," min)"]})]}),e.jsxs("div",{className:"x-flex-container",children:[e.jsx("div",{className:"x-flex-left",style:{fontSize:"0.7rem"},children:c}),e.jsxs("div",{className:"x-flex-right x-caption",children:[e.jsx("b",{children:t.remainingPlaces})," places",t.remainingPlaces!==t.places&&` left (out of ${t.places} total)`," with"," ",e.jsx("em",{children:e.jsx("b",{children:t.staff.user.fullName})})," ","(",e.jsx("em",{children:t.location.name}),")"]})]}),t.costInc>0&&e.jsxs("p",{style:n,children:["price incl: £",t.costInc]}),t.costExc>0&&e.jsxs("p",{style:n,children:["price excl: £",t.costExc]}),!t.public&&e.jsx("p",{style:n,children:"private class"})]})},E=()=>{const[t,s]=h(),[l,n]=h(new Date),[r,a]=h(Object.keys(g).at(0));if(w(()=>{(async function(){const o=await k({id:g[r],numDays:7});s(o)})();const m=()=>{if(document.visibilityState==="visible"){const o=new Date;console.log("Update time 'now': ",o),n(o)}};return document.addEventListener("visibilitychange",m),()=>{document.removeEventListener("visibilitychange",m)}},[r]),!t)return e.jsx("main",{children:"Loading..."});const i=t.data.sort((m,o)=>m.events.dateStart>o.events.dateStart?1:-1),c=[];let x="";i.forEach((m,o)=>{const f=m.events.dateStart.substring(0,10);f!==x&&c.push(e.jsx(C,{dateStr:f},`${o}-delimiter`)),x=f,c.push(e.jsx(T,{evt:m,now:l},o))});const u=l.toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit",weekday:"long",day:"numeric",month:"short",year:"numeric"}),j=r.toLowerCase().replaceAll(" ","-");return e.jsxs(e.Fragment,{children:[e.jsx(R,{selectedGymName:r,setGymName:a}),e.jsxs("main",{children:[e.jsxs("p",{style:{marginBottom:"1rem"},children:[e.jsxs("a",{href:`https://www.jdgyms.co.uk/gym/${j}/`,target:"_blank",children:["JD ",r]}),","," ",e.jsx("a",{href:`https://bookings.widgets.eu.membr.com/calendar/gym/${g[r]}?primaryColor=%236ABD45&showProfilePicture=0&theme=light`,target:"_blank",children:"JD Calendar"}),","," ",e.jsx("a",{href:`https://www.google.co.uk/maps/dir/Brushfield+Park,+6-8+Woodleigh+Cl,+Chesterfield+S40+4XW/JD+Gyms+${r.replaceAll(" ","+")}/data=!3m1!1e3!4m2!4m1!3e0!5m1!1e1`,target:"_blank",children:"Traffic"})]}),e.jsx("p",{style:{fontFamily:"monospace",color:"#0c4a6e"},children:u}),e.jsx("div",{style:{backgroundColor:"#fff",width:v?"45rem":"100vw",margin:"auto"},children:c})]})]})};y.createRoot(document.getElementById("root")).render(e.jsx(S.StrictMode,{children:e.jsx(b,{children:e.jsx(E,{})})}));
