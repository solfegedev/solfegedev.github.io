import{j as e,c as N}from"./client-B8KsQLkO.js";import{H as D,i as w,C as R}from"./CookieConsentWrapper-BX3Mx7Xo.js";import k,{useState as u,useEffect as T}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{A as j}from"./Comps-BT2nj_kh.js";import{g as C}from"./googleMap-BAji2fQs.js";import{D as v,a as y}from"./dates-CXaDObX2.js";import{N as h,a as I,b}from"./NavDropdown-B6vjD2zC.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./Button-Dbum-Du3.js";import"./CloseButton-CUYUvxPi.js";import"./Dropdown-BtRWb2wP.js";const L=async({id:s,numDays:a})=>{const c=`https://api.eu.membr.com/api/public/gyms/${s}/bookings`,r=new Date;r.setHours(5),r.setMinutes(0),r.setSeconds(0);const n=new Date(r.getTime()+a*v);n.setHours(23),console.log(`Fetch API for slots from ${r} to ${n}`);const t={page:"1",page_size:"100",from_date:r.toISOString(),to_date:n.toISOString(),locale:"en_GB"};return fetch(c+"?"+new URLSearchParams(t).toString()).then(o=>o.json()).then(o=>(console.log("API response: ",o),{data:o.data.map(i=>{const g={public:i.public,location:i.location.name,staff:i.staff.user.fullName,time:i.events.eventTime,dateStart:i.events.dateStart,name:i.events.name,placesReserved:i.attendancesNumber,placesRemaining:i.remainingPlaces,placesTotal:i.places};return(i.costInc>0||i.costExc)&&(g.cost=`cost incl/excl: £${i.costInc} / £${i.costExc}`),g})}))},x={Chesterfield:1548,"Sheffield South":1554,"Sheffield North":1555,Mansfield:1587,Rotherham:1550,Luton:2788},A=({dateStr:s})=>{const a=new Date(s).toLocaleDateString("en-GB",{weekday:"long",day:"numeric",month:"short",year:"numeric"});return e.jsx("div",{className:"x-delimiter",children:a})},_=({selectedGymName:s,setGymName:a})=>{const[c,r]=u(!0),n=t=>{r(t)};return e.jsxs(h,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:n,expanded:c,children:[e.jsx(h.Brand,{children:"JD Gyms"}),e.jsx(h.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(h.Collapse,{id:"basic-navbar-nav",children:e.jsx(I,{className:"ms-auto me-auto",children:e.jsx(b,{title:s,onSelect:t=>{a(t)},active:!0,children:Object.keys(x).map((t,o)=>e.jsx(b.Item,{active:t===s,eventKey:t,children:t},o))})})})]})},$=({name:s})=>{const a=s.toLowerCase().replace(/^jd\s+/,"").replace("les mills ","").replace(" - ladies only","");return a==="spin"?e.jsx("i",{className:"fa-solid fa-person-biking",style:{marginRight:"0.5rem",color:"#0284c7"}}):a==="hiit"?e.jsx("i",{className:"fa-solid fa-temperature-arrow-up",style:{marginRight:"0.5rem",color:"#dc2626"}}):a==="burn"?e.jsx("i",{className:"fa-solid fa-fire",style:{marginRight:"0.5rem",color:"#f97316"}}):a==="yoga"?e.jsx("i",{className:"fa-brands fa-y-combinator",style:{marginRight:"0.5rem",color:"#e879f9"}}):a==="body balance"?e.jsx("i",{className:"fa-solid fa-scale-balanced",style:{marginRight:"0.5rem",color:"#047857"}}):a==="body pump"?e.jsx("i",{className:"fa-solid fa-pump-soap",style:{marginRight:"0.5rem",color:"#1e3a8a"}}):a==="body conditioning"?e.jsx("i",{className:"fa-solid fa-dumbbell",style:{marginRight:"0.5rem",color:"#a8a29e"}}):a==="abs"?e.jsx("i",{className:"fa-brands fa-angular",style:{marginRight:"0.5rem",color:"#fde047"}}):a==="pilates"?e.jsx("i",{className:"fa-brands fa-product-hunt",style:{marginRight:"0.5rem",color:"#1e3a8a"}}):a==="lbt"?e.jsx("i",{className:"fa-solid fa-drumstick-bite",style:{marginRight:"0.5rem",color:"#a56f07"}}):a.includes("combat")||a==="body attack"?e.jsx("i",{className:"fa-solid fa-user-ninja",style:{marginRight:"0.5rem",color:"#ad0808"}}):a==="step"?e.jsx("i",{className:"fa-solid fa-stairs",style:{marginRight:"0.5rem",color:"#9f9e9c"}}):a==="x-fit"?e.jsx("i",{className:"fa-solid fa-xmark",style:{marginRight:"0.5rem",color:"#0e7b0e"}}):a==="circuits"?e.jsx("i",{className:"fa-solid fa-flag-checkered",style:{marginRight:"0.5rem",color:"#000"}}):a==="zumba"?e.jsx("span",{children:"💃"}):a.includes("induction")?e.jsx("i",{className:"fa-solid fa-baby",style:{marginRight:"0.5rem",color:"#a56f07"}}):null},G=({evt:s,now:a})=>{const c=new Date(s.dateStart).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}),r={backgroundColor:"#ffa8a8"},t=new Date(s.dateStart).getTime()-a.getTime(),o=t/6e4,m={};let d=null;return o<-s.time?m.backgroundImage="repeating-linear-gradient(-45deg, #bbb 0 1px, #eee 1px 0.8rem)":o<0?(m.backgroundColor="#ffffb6",d=e.jsxs("span",{children:[y(-t)," ago"]})):o<3*60&&(d=e.jsxs("span",{style:{color:"#f00"},children:["in ",y(t)]})),e.jsxs("div",{style:{...m,marginTop:"0.5rem"},children:[e.jsxs("div",{className:"x-flex-container",style:{fontWeight:"bold",color:"#1e293b"},children:[e.jsx("div",{className:"x-flex-left",children:c}),e.jsxs("div",{className:"x-flex-right",children:[e.jsxs("span",{style:{fontSize:"1.2rem"},children:[e.jsx($,{name:s.name}),s.name]})," ","(",s.time," min)"]})]}),e.jsxs("div",{className:"x-flex-container",children:[e.jsx("div",{className:"x-flex-left",style:{fontSize:"0.7rem"},children:d}),e.jsxs("div",{className:"x-flex-right x-caption",children:[e.jsxs("p",{children:[e.jsx("b",{children:s.location})," - ",e.jsx("em",{children:s.staff})]}),e.jsxs("p",{children:[e.jsx("b",{children:s.placesRemaining})," places"," ",s.placesRemaining!==s.placesTotal&&` left (out of ${s.placesTotal} total)`]})]})]}),s.cost&&e.jsx("p",{style:r,children:s.cost}),!s.public&&e.jsx("p",{style:r,children:"private class"})]})},B=()=>{const[s,a]=u(),[c,r]=u(new Date),[n,t]=u(Object.keys(x).at(0));if(T(()=>{(async function(){const l=await L({id:x[n],numDays:7});a(l)})();const f=()=>{if(document.visibilityState==="visible"){const l=new Date;console.log("Update time 'now': ",l),r(l)}};return document.addEventListener("visibilitychange",f),()=>{document.removeEventListener("visibilitychange",f)}},[n]),!s)return e.jsx("main",{children:"Loading..."});const o=s.data.sort((f,l)=>f.dateStart>l.dateStart?1:-1),m=[];let d="";o.forEach((f,l)=>{const p=f.dateStart.substring(0,10);p!==d&&m.push(e.jsx(A,{dateStr:p},`${l}-delimiter`)),d=p,m.push(e.jsx(G,{evt:f,now:c},l))});const i=c.toLocaleDateString("en-GB",{hour:"2-digit",minute:"2-digit",weekday:"long",day:"numeric",month:"short",year:"numeric"}),g=n.toLowerCase().replaceAll(" ","-"),S=C({origin:D.join(","),destination:`JD+Gyms+${n.replaceAll(" ","+")}`,isSatellite:!0,hasTraffic:!0});return e.jsxs(e.Fragment,{children:[e.jsx(_,{selectedGymName:n,setGymName:t}),e.jsxs("main",{children:[e.jsxs("div",{id:"x-gym-links",style:{margin:"0 auto 1rem",textDecoration:"none",display:"flex",justifyContent:"center",gap:"1rem"},children:[e.jsxs(j,{href:`https://www.jdgyms.co.uk/gym/${g}/`,children:["JD ",n]}),e.jsx(j,{href:`https://bookings.widgets.eu.membr.com/calendar/gym/${x[n]}?primaryColor=%236ABD45&showProfilePicture=0&theme=light`,children:"JD Calendar"}),e.jsx(j,{href:S,children:"Traffic"})]}),e.jsx("p",{style:{fontFamily:"monospace",color:"#0c4a6e"},children:i}),e.jsx("div",{style:{backgroundColor:"#fff",width:w?"45rem":"100vw",margin:"auto"},children:m})]})]})};N.createRoot(document.getElementById("root")).render(e.jsx(k.StrictMode,{children:e.jsx(R,{children:e.jsx(B,{})})}));
