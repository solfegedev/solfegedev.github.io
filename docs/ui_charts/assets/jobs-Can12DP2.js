var B=Object.defineProperty;var v=(e,s,o)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o;var I=(e,s,o)=>v(e,typeof s!="symbol"?s+"":s,o);import{j as t,c as M}from"./client-B8KsQLkO.js";import{C as G}from"./CookieConsentWrapper-DBLm3LwE.js";import U,{createContext as F,useState as x,useRef as W,useContext as y,useEffect as $}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{A as H,I as q}from"./LinkItem-BaiItiHv.js";import{i as z}from"./all-BSES4dDh.js";import{a as g,D as _}from"./dates-Bl3diZEm.js";import{p as R}from"./index-CelBjTPE.js";import{A as J}from"./Alert-CVO57zo1.js";import{C as D,B as h,D as Y}from"./DropdownButton-B32QvKfC.js";import{D as X}from"./Dropdown-B2rYS5Iw.js";import{F as w}from"./Form-5wlro-Ns.js";import{B as K}from"./Button-Dbum-Du3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./CloseButton-CUYUvxPi.js";import"./ElementChildren-AZvnq_HE.js";const j=F(null),Q=({children:e})=>{const[s,o]=x(!1),[a,r]=x(!1),[n,d]=x(25),[i,c]=x(1),l={onlyApplied:s,setOnlyApplied:o,sortedByRepost:a,setSortedByRepost:r,limitPerPage:n,setLimitPerPage:d,selectedPage:i,setSelectedPage:c};return t.jsx(j.Provider,{value:l,children:e})},m={ICONS:"#0f766e",BG_CARD:"white",BG_CARD_APPLIED:"#dcfce7",BG_LONG_DESCRIPTION:"#f0fdfa",BG_LONG_DESCRIPTION_BUTTON:"#0f766e",NOTES:"#312e81",DATE_INITAL:"#15803d",DATE_UPDATED:"#854d0e"},p=({className:e,style:s,...o})=>t.jsx("i",{className:e,style:{color:m.ICONS,marginLeft:".5rem",marginRight:".2rem",...s},...o}),V=({initialDate:e,repostedDate:s,appliedTs:o})=>{const a={weekday:"short",day:"2-digit",month:"short",year:"numeric"},r={...a,hour:"2-digit",minute:"2-digit"},n=new Date().getTime(),d=n-new Date(e).getTime(),i=d/_,c=g(d);let l=i>3?a:r;const f=new Date(e).toLocaleDateString("en-GB",l),u=n-new Date(s).getTime(),b=g(u),A=u/_;l=A>3?a:r;const k=new Date(s).toLocaleDateString("en-GB",l);let T;if(o){const C=n-o*1e3,O=g(C);l=C/_>3?a:r;const N=new Date(s).toLocaleDateString("en-GB",l);T=t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-calendar-days"})," App ",t.jsx("b",{children:O})," ago (on"," ",N,")"]})}const L=i-A<1?t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-calendar-days"})," Created"," ",t.jsx("b",{style:{color:m.DATE_INITAL},children:b})," ago (on ",k,")"]}):t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-calendar-days"})," Created"," ",t.jsx("b",{style:{color:m.DATE_INITAL},children:c})," ago (on ",f,")."," ",t.jsx(p,{className:"fa-solid fa-calendar-days"})," Reposted"," ",t.jsx("b",{style:{color:m.DATE_UPDATED},children:b})," ago (on ",k,")"]});return t.jsxs("p",{children:[L,T]})},Z=({longDescription:e})=>{const s="4rem",o="hidden",[a,r]=x(!1),n=W(null);let d;return a?(d="fa-solid fa-minimize",n.current&&(n.current.style.removeProperty("max-height"),n.current.style.removeProperty("overflow-y"))):(d="fa-solid fa-maximize",n.current&&(n.current.style.maxHeight=s,n.current.style.overflowY=o)),t.jsxs("div",{style:{backgroundColor:m.BG_LONG_DESCRIPTION,padding:"0.3rem 1rem"},children:[t.jsx(p,{className:d,onClick:()=>r(!a),style:{fontSize:"1.4rem"}}),t.jsx("div",{ref:n,style:{overflowY:o,maxHeight:s},children:e})]})},ee=({item:e,index:s})=>{const o=e.applied_timestamp?m.BG_CARD_APPLIED:m.BG_CARD,a=R(e.short_description_html),r=R(e.long_description_html),n=new Date(e.updated_on),d=g(new Date().getTime()-n.getTime()),i=new Date(e.created_on),c=g(new Date().getTime()-i.getTime());return t.jsx(D,{className:"x-shadow",style:{width:z?"90vw":"100vw"},children:t.jsxs(D.Body,{style:{background:o,borderRadius:"1rem"},children:[e.notes&&t.jsx(J,{variant:"warning",dismissible:!0,style:{padding:0,margin:"0.4rem auto",maxWidth:"80vw"},children:t.jsx("ul",{style:{margin:0},children:e.notes.map((l,f)=>t.jsx("li",{children:l},f))})}),t.jsxs(D.Title,{children:[s," ",t.jsx(H,{href:"https://www.cwjobs.co.uk"+e.url,children:e.job_title})]}),t.jsxs("p",{children:[e.company_logo_url&&t.jsx(q,{src:e.company_logo_url,alt:e.company_name,title:e.company_name,style:{maxHeight:"2rem",maxWidth:"60rem",marginRight:"1rem"}}),e.company_name]}),t.jsx(V,{initialDate:e.date_created,repostedDate:e.date_posted,appliedTs:e.applied_timestamp}),t.jsxs("p",{children:[t.jsx(p,{className:"fa-solid fa-money-bill-wave"})," ",e.salary,e.work_type&&e.work_type!=="Contract"&&t.jsx(te,{workType:e.work_type})]}),t.jsxs("p",{children:[t.jsx(p,{className:"fa-solid fa-location-dot"})," ",e.location,e.post_code&&`, ${e.post_code}`,e.work_from_home&&`, WFH: ${e.work_from_home}`]}),t.jsxs("p",{children:[t.jsx(p,{className:"fa-solid fa-circle-info"})," ",a]}),t.jsx(Z,{longDescription:r}),t.jsxs("p",{style:{fontSize:"0.7rem"},children:[e.id," was"," ",t.jsx("span",{style:{color:e.online_status==="online"?"green":"red"},children:e.online_status})," ","when refreshed ",t.jsx("b",{children:d})," ago. First seen ",t.jsx("b",{children:c})," ago."]})]})})},te=({workType:e})=>t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-file-contract"}),e]}),E=({numPages:e})=>{const s=y(j),o=Array.from({length:e},(n,d)=>1+d),a=new URL(window.location.href),r=n=>{s.setSelectedPage(n),a.searchParams.set("page",n.toString()),history.pushState({},"",a)};return t.jsxs(h,{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"},children:[t.jsx(h.First,{disabled:s.selectedPage===1,onClick:()=>r(1)}),t.jsx(h.Prev,{disabled:s.selectedPage===1,onClick:()=>r(s.selectedPage-1)}),o.map(n=>t.jsx(h.Item,{active:s.selectedPage===n,onClick:()=>r(n),children:n},n)),t.jsx(h.Next,{disabled:s.selectedPage===e,onClick:()=>r(s.selectedPage+1)}),t.jsx(h.Last,{disabled:s.selectedPage===e,onClick:()=>r(e)})]})},se=()=>{const e=y(j),s=[10,25,50,1e3];return t.jsx(Y,{title:`${e.limitPerPage} per page`,children:s.map((o,a)=>t.jsx(X.Item,{active:o===e.limitPerPage,onClick:()=>{e.setLimitPerPage(o),e.setSelectedPage(1)},children:o},a))})},oe=()=>{const e=y(j);return t.jsx(w,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:t.jsx(w.Check,{type:"switch",label:e.sortedByRepost?"sorted by repost":"sorted by initial creation",checked:e.sortedByRepost,onChange:()=>e.setSortedByRepost(!e.sortedByRepost)})})},ne=()=>{const e=y(j);return t.jsx(w,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:t.jsx(w.Check,{type:"switch",label:e.onlyApplied?"only App":"all (App or not)",checked:e.onlyApplied,onChange:()=>{e.setOnlyApplied(!e.onlyApplied),e.setSelectedPage(1)}})})},ae=({updatedDateIso:e,nextIterationDateIso:s,numItems:o})=>{const a=new Date(e),r=g(new Date().getTime()-a.getTime()),n=a.toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),i=new Date(s).getTime()-new Date().getTime(),c=g(i);return t.jsxs("p",{children:["Updated ",t.jsx("b",{style:{color:m.DATE_INITAL},children:r})," ago (on ",n,")",t.jsx("br",{}),"Next update in ",t.jsx("b",{style:{color:m.DATE_UPDATED},children:c}),t.jsx("br",{}),t.jsx("b",{children:o})," items from"," ",t.jsx("a",{href:"https://www.cwjobs.co.uk/jobs/contract/python-or-c%23-or-perl-or-sdet-or-test-or-qa-or-automation-or-dsp-or-raspberry?sort=2&action=facet_selected%3bage%3b1&postedWithin=1",children:"search"})]})},re=()=>t.jsx("div",{style:{margin:"1rem auto"},children:ce().map((e,s)=>t.jsx(K,{variant:"dark",type:"submit",href:e.link,target:"_blank",rel:"noreferrer",style:{backgroundColor:"#4792fb",padding:"0 0.8rem",margin:"0 0.4rem"},children:e.name},s))}),P=["python","typescript","SDET","playwright","selenium","cucumber","specflow","gherkin"],S=[...P,"C#","C++","perl","matlab","FastAPI","Django","QA","test","automation","DSP","raspberry"],ie=["Delivery Driver","Furniture Installer","Electrician","Mechanic","Civil Engineering","Electrical Inspector","MOT Tester","Heating Engineer"],ce=()=>{const e=S.map(encodeURIComponent).join("-or-"),s=new URLSearchParams({sc:"0kf:jt(contract);",fromage:"7",sort:"date",q:"("+P.join(" OR ")+")"+ie.map(i=>` -"${i}"`).join("")}).toString(),o=new URLSearchParams({f_JT:"C",geoId:"101165590",refresh:"true",sortBy:"DD",keywords:S.join(" OR "),f_TPR:`r${7*24*3600}`}).toString(),a=new URLSearchParams({q:S.join(" OR "),page:"1",et:"CONTRACT",recency:"last week",so:"m.h.s"}).toString(),r=new URLSearchParams({locId:"2",locT:"N","sc.locationSeoString":"United Kingdom","sc.occupationParam":P.join(" ")}).toString(),n=new URLSearchParams({sortby:"12",orderby:"0",ql:"Python,SDET,React,TypeScript,Next.js,FastAPI,Django"}).toString();return[{name:"CWjobs",link:`https://www.cwjobs.co.uk/jobs/contract/${e}?sort=2&action=sort_publish`},{name:"TotalJobs",link:`https://www.totaljobs.com/jobs/contract/${e}?sort=2&action=sort_publish`},{name:"jobsite",link:`https://www.jobsite.co.uk/jobs/contract/${e}?sort=2&action=sort_publish`},{name:"Indeed",link:"https://uk.indeed.com/jobs?"+s},{name:"LinkedIn",link:"https://www.linkedin.com/jobs/search/?"+o},{name:"Glassdoor",link:"https://www.glassdoor.co.uk/Job/jobs.htm?"+r},{name:"Monster",link:"https://www.monster.co.uk/jobs/search?"+a},{name:"IT Jobs Watch",link:"https://www.itjobswatch.co.uk/contract.aspx?"+n}]},le=()=>{const[e,s]=x(null),o=y(j);$(()=>{(async()=>{try{const c="https://webapp1-90494.web.app/data/report_all.json";console.log(`Fetch data from server: ${c}`);const l=await fetch(c,{mode:"cors"});if(!l.ok){const u=l.status===404?"404: This link seems wrong, check you have the correct one":`Failed to get data: response status=${l.status} body=${l.body}`;throw new Error(u)}const f=await l.json();s(f)}catch(c){const l={__error:`Exception: ${c}`};s(l)}})(),o.setSelectedPage(parseInt(new de().getPage()))},[]);const a=i=>"__error"in i;if(e===null||o.selectedPage===null)return t.jsx("main",{children:"loading..."});if(a(e))return t.jsx("main",{style:{color:"red"},children:e.__error});const r=o.onlyApplied?e.items.filter(i=>"applied_timestamp"in i):e.items,n=r.length;e.pagination.limit_per_page=o.limitPerPage,e.pagination.total_pages=Math.ceil(n/e.pagination.limit_per_page),e.pagination.offset=(o.selectedPage-1)*e.pagination.limit_per_page;const d=r.sort(o.sortedByRepost?(i,c)=>c.date_posted.localeCompare(i.date_posted):(i,c)=>c.date_created.localeCompare(i.date_created)).slice(e.pagination.offset,Math.min(e.pagination.offset+e.pagination.limit_per_page,n));return t.jsxs("main",{children:[t.jsx(ae,{updatedDateIso:e.updated_on,nextIterationDateIso:e.date_next_iteration,numItems:n}),t.jsx(re,{}),t.jsx(ne,{}),t.jsx(oe,{}),t.jsx(se,{}),t.jsx(E,{numPages:e.pagination.total_pages}),d.map((i,c)=>t.jsx(ee,{index:e.pagination.offset+1+c,item:i},c)),t.jsx(E,{numPages:e.pagination.total_pages})]})};class de{constructor(){I(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getPage(){return this.searchParams.get("page")??"1"}}M.createRoot(document.getElementById("root")).render(t.jsx(U.StrictMode,{children:t.jsx(G,{children:t.jsx(Q,{children:t.jsx(le,{})})})}));