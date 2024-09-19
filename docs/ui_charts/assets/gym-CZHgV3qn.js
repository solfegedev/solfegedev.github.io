import{j as e,c as w}from"./client-B8KsQLkO.js";import{C as N}from"./CookieConsentWrapper-DBLm3LwE.js";import D,{useState as u,useEffect as k}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{i as R}from"./all-BSES4dDh.js";import{g as T}from"./googleMap-BLnsUTZx.js";import{A as j}from"./LinkItem-BaiItiHv.js";import{D as C,a as y}from"./dates-Bl3diZEm.js";import{N as g,a as I,b}from"./NavDropdown-BHMHKMX3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./Button-Dbum-Du3.js";import"./CloseButton-CUYUvxPi.js";import"./Dropdown-B2rYS5Iw.js";const v=async({id:t,numDays:s})=>{const c=`https://api.eu.membr.com/api/public/gyms/${t}/bookings`,o=new Date;o.setHours(5),o.setMinutes(0),o.setSeconds(0);const r=new Date(o.getTime()+s*C);r.setHours(23),console.log(`Fetch API for slots from ${o} to ${r}`);const a={page:"1",page_size:"100",from_date:o.toISOString(),to_date:r.toISOString(),locale:"en_GB"};return fetch(c+"?"+new URLSearchParams(a).toString()).then(i=>i.json()).then(i=>(console.log("API response: ",i),{data:i.data.map(n=>{const h={public:n.public,location:n.location.name,staff:n.staff.user.fullName,time:n.events.eventTime,dateStart:n.events.dateStart,name:n.events.name,placesReserved:n.attendancesNumber,placesRemaining:n.remainingPlaces,placesTotal:n.places};return(n.costInc>0||n.costExc)&&(h.cost=`cost incl/excl: £${n.costInc} / £${n.costExc}`),h})}))},x={Chesterfield:1548,"Sheffield South":1554,"Sheffield North":1555,Mansfield:1587,Rotherham:1550,Luton:2788},L=({dateStr:t})=>{const s=new Date(t).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"short",year:"numeric"});return e.jsx("div",{className:"x-delimiter",children:s})},A=({selectedGymName:t,setGymName:s})=>{const[c,o]=u(!0),r=a=>{o(a)};return e.jsxs(g,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:r,expanded:c,children:[e.jsx(g.Brand,{children:"JD Gyms"}),e.jsx(g.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(g.Collapse,{id:"basic-navbar-nav",children:e.jsx(I,{className:"ms-auto me-auto",children:e.jsx(b,{title:t,onSelect:a=>{s(a)},children:Object.keys(x).map((a,i)=>e.jsx(b.Item,{active:a===t,eventKey:a,children:a},i))})})})]})},B=({name:t})=>{const s=t.toLowerCase().replace(/^jd\s+/,"");return s==="spin"?e.jsx("i",{className:"fa-solid fa-person-biking",style:{marginRight:"0.5rem",color:"#0284c7"}}):s==="hiit"?e.jsx("i",{className:"fa-solid fa-temperature-arrow-up",style:{marginRight:"0.5rem",color:"#dc2626"}}):s==="burn"?e.jsx("i",{className:"fa-solid fa-fire",style:{marginRight:"0.5rem",color:"#f97316"}}):s==="yoga"?e.jsx("i",{className:"fa-brands fa-y-combinator",style:{marginRight:"0.5rem",color:"#e879f9"}}):s==="les mills body balance"?e.jsx("i",{className:"fa-solid fa-scale-balanced",style:{marginRight:"0.5rem",color:"#047857"}}):s==="les mills body pump"?e.jsx("i",{className:"fa-solid fa-pump-soap",style:{marginRight:"0.5rem",color:"#1e3a8a"}}):s==="body conditioning"?e.jsx("i",{className:"fa-solid fa-dumbbell",style:{marginRight:"0.5rem",color:"#a8a29e"}}):s==="abs"?e.jsx("i",{className:"fa-brands fa-angular",style:{marginRight:"0.5rem",color:"#fde047"}}):s==="pilates"?e.jsx("i",{className:"fa-brands fa-product-hunt",style:{marginRight:"0.5rem",color:"#1e3a8a"}}):null},$=({evt:t,now:s})=>{const c=new Date(t.dateStart).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),o={backgroundColor:"#ffa8a8"},a=new Date(t.dateStart).getTime()-s.getTime(),i=a/6e4,m={};let d=null;return i<-t.time?m.backgroundImage="repeating-linear-gradient(-45deg, #bbb 0 1px, #eee 1px 0.8rem)":i<0?(m.backgroundColor="#ff7",d=e.jsxs("span",{children:[y(-a)," ago"]})):i<3*60&&(d=e.jsxs("span",{style:{color:"#f00"},children:["in ",y(a)]})),e.jsxs("div",{style:{...m,marginTop:"0.5rem"},children:[e.jsxs("div",{className:"x-flex-container",style:{fontWeight:"bold",color:"#1e293b"},children:[e.jsx("div",{className:"x-flex-left",children:c}),e.jsxs("div",{className:"x-flex-right",children:[e.jsxs("span",{style:{fontSize:"1.2rem"},children:[e.jsx(B,{name:t.name}),t.name]})," ","(",t.time," min)"]})]}),e.jsxs("div",{className:"x-flex-container",children:[e.jsx("div",{className:"x-flex-left",style:{fontSize:"0.7rem"},children:d}),e.jsxs("div",{className:"x-flex-right x-caption",children:[e.jsx("b",{children:t.placesRemaining})," places",t.placesRemaining!==t.placesTotal&&` left (out of ${t.placesTotal} total)`," ","with"," ",e.jsx("em",{children:e.jsx("b",{children:t.staff})})," ","(",e.jsx("em",{children:t.location}),")"]})]}),t.cost&&e.jsx("p",{style:o,children:t.cost}),!t.public&&e.jsx("p",{style:o,children:"private class"})]})},G=()=>{const[t,s]=u(),[c,o]=u(new Date),[r,a]=u(Object.keys(x).at(0));if(k(()=>{(async function(){const l=await v({id:x[r],numDays:7});s(l)})();const f=()=>{if(document.visibilityState==="visible"){const l=new Date;console.log("Update time 'now': ",l),o(l)}};return document.addEventListener("visibilitychange",f),()=>{document.removeEventListener("visibilitychange",f)}},[r]),!t)return e.jsx("main",{children:"Loading..."});const i=t.data.sort((f,l)=>f.dateStart>l.dateStart?1:-1),m=[];let d="";i.forEach((f,l)=>{const p=f.dateStart.substring(0,10);p!==d&&m.push(e.jsx(L,{dateStr:p},`${l}-delimiter`)),d=p,m.push(e.jsx($,{evt:f,now:c},l))});const n=c.toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit",weekday:"long",day:"numeric",month:"short",year:"numeric"}),h=r.toLowerCase().replaceAll(" ","-"),S=T({origin:"Brushfield+Park,+6-8+Woodleigh+Cl,+Chesterfield+S40+4XW",destination:`JD+Gyms+${r.replaceAll(" ","+")}`,isSatellite:!0,hasTraffic:!0});return e.jsxs(e.Fragment,{children:[e.jsx(A,{selectedGymName:r,setGymName:a}),e.jsxs("main",{children:[e.jsxs("p",{style:{marginBottom:"1rem"},children:[e.jsxs(j,{href:`https://www.jdgyms.co.uk/gym/${h}/`,children:["JD ",r]}),","," ",e.jsx(j,{href:`https://bookings.widgets.eu.membr.com/calendar/gym/${x[r]}?primaryColor=%236ABD45&showProfilePicture=0&theme=light`,children:"JD Calendar"}),", ",e.jsx(j,{href:S,children:"Traffic"})]}),e.jsx("p",{style:{fontFamily:"monospace",color:"#0c4a6e"},children:n}),e.jsx("div",{style:{backgroundColor:"#fff",width:R?"45rem":"100vw",margin:"auto"},children:m})]})]})};w.createRoot(document.getElementById("root")).render(e.jsx(D.StrictMode,{children:e.jsx(N,{children:e.jsx(G,{})})}));
