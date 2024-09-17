var N=Object.defineProperty;var P=(t,s,o)=>s in t?N(t,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[s]=o;var I=(t,s,o)=>P(t,typeof s!="symbol"?s+"":s,o);import{j as e,c as L}from"./client-B8KsQLkO.js";import{C as v}from"./CookieConsentWrapper-DBLm3LwE.js";import B,{useState as _,useRef as M,useEffect as $}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{I as F}from"./LinkItem-BtPWDdnA.js";import{i as G}from"./all-BSES4dDh.js";import{D as j}from"./dates-CuBDtlM6.js";import{p as E}from"./index-CelBjTPE.js";import{A as W}from"./Alert-CVO57zo1.js";import{C as k,B as u,D as U}from"./DropdownButton-B32QvKfC.js";import{D as H}from"./Dropdown-B2rYS5Iw.js";import{F as S}from"./Form-5wlro-Ns.js";import{B as q}from"./Button-Dbum-Du3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./CloseButton-CUYUvxPi.js";import"./ElementChildren-AZvnq_HE.js";const g={ICONS:"#0f766e",BG_CARD:"white",BG_CARD_APPLIED:"#dcfce7",BG_LONG_DESCRIPTION:"#f0fdfa",BG_LONG_DESCRIPTION_BUTTON:"#0f766e",NOTES:"#312e81",DATE_INITAL:"#15803d",DATE_UPDATED:"#854d0e"},h=({className:t,style:s,...o})=>e.jsx("i",{className:t,style:{color:g.ICONS,marginLeft:".5rem",marginRight:".2rem",...s},...o}),A=864e5,z=({initialDate:t,repostedDate:s,appliedTs:o})=>{const a={weekday:"short",day:"2-digit",month:"short",year:"numeric"},i={...a,hour:"2-digit",minute:"2-digit"},n=new Date().getTime(),r=n-new Date(t).getTime(),d=r/A,f=j(r);let p=d>3?a:i;const y=new Date(t).toLocaleDateString("en-GB",p),w=n-new Date(s).getTime(),x=j(w),D=w/A;p=D>3?a:i;const l=new Date(s).toLocaleDateString("en-GB",p);let c;if(o){const b=n-o*1e3,T=j(b);p=b/A>3?a:i;const R=new Date(s).toLocaleDateString("en-GB",p);c=e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"fa-solid fa-calendar-days"})," App ",e.jsx("b",{children:T})," ago (on"," ",R,")"]})}const m=d-D<1?e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"fa-solid fa-calendar-days"})," Created"," ",e.jsx("b",{style:{color:g.DATE_INITAL},children:x})," ago (on ",l,")"]}):e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"fa-solid fa-calendar-days"})," Created"," ",e.jsx("b",{style:{color:g.DATE_INITAL},children:f})," ago (on ",y,")."," ",e.jsx(h,{className:"fa-solid fa-calendar-days"})," Reposted"," ",e.jsx("b",{style:{color:g.DATE_UPDATED},children:x})," ago (on ",l,")"]});return e.jsxs("p",{children:[m,c]})},Y=({longDescription:t})=>{const s="4rem",o="hidden",[a,i]=_(!1),n=M(null);let r;return a?(r="fa-solid fa-minimize",n.current&&(n.current.style.removeProperty("max-height"),n.current.style.removeProperty("overflow-y"))):(r="fa-solid fa-maximize",n.current&&(n.current.style.maxHeight=s,n.current.style.overflowY=o)),e.jsxs("div",{style:{backgroundColor:g.BG_LONG_DESCRIPTION,padding:"0.3rem 1rem"},children:[e.jsx(h,{className:r,onClick:()=>i(!a),style:{fontSize:"1.4rem"}}),e.jsx("div",{ref:n,style:{overflowY:o,maxHeight:s},children:t})]})},J=({item:t,index:s})=>{const o=t.applied_timestamp?g.BG_CARD_APPLIED:g.BG_CARD,a=E(t.short_description_html),i=E(t.long_description_html),n=new Date(t.updated_on),r=j(new Date().getTime()-n.getTime()),d=new Date(t.created_on),f=j(new Date().getTime()-d.getTime());return e.jsx(k,{className:"x-shadow",style:{width:G?"90vw":"100vw"},children:e.jsxs(k.Body,{style:{background:o,borderRadius:"1rem"},children:[t.notes&&e.jsx(W,{variant:"warning",dismissible:!0,style:{padding:0,margin:"0.4rem auto",maxWidth:"80vw"},children:e.jsx("ul",{style:{margin:0},children:t.notes.map((p,y)=>e.jsx("li",{children:p},y))})}),e.jsxs(k.Title,{children:[s," ",e.jsx("a",{href:"https://www.cwjobs.co.uk"+t.url,target:"_blank",rel:"noreferrer",children:t.job_title})]}),e.jsxs("p",{children:[t.company_logo_url&&e.jsx(F,{src:t.company_logo_url,alt:t.company_name,title:t.company_name,style:{maxHeight:"2rem",maxWidth:"60rem",marginRight:"1rem"}}),t.company_name]}),e.jsx(z,{initialDate:t.date_created,repostedDate:t.date_posted,appliedTs:t.applied_timestamp}),e.jsxs("p",{children:[e.jsx(h,{className:"fa-solid fa-money-bill-wave"})," ",t.salary,t.work_type&&t.work_type!=="Contract"&&e.jsx(X,{workType:t.work_type})]}),e.jsxs("p",{children:[e.jsx(h,{className:"fa-solid fa-location-dot"})," ",t.location,t.post_code&&`, ${t.post_code}`,t.work_from_home&&`, WFH: ${t.work_from_home}`]}),e.jsxs("p",{children:[e.jsx(h,{className:"fa-solid fa-circle-info"})," ",a]}),e.jsx(Y,{longDescription:i}),e.jsxs("p",{style:{fontSize:"0.7rem"},children:[t.id," was"," ",e.jsx("span",{style:{color:t.online_status==="online"?"green":"red"},children:t.online_status})," ","when refreshed ",e.jsx("b",{children:r})," ago. First seen ",e.jsx("b",{children:f})," ago."]})]})})},X=({workType:t})=>e.jsxs(e.Fragment,{children:[e.jsx(h,{className:"fa-solid fa-file-contract"}),t]}),O=({selectedPage:t,setSelectedPage:s,numPages:o})=>{const a=Array.from({length:o},(r,d)=>1+d),i=new URL(window.location.href),n=r=>{s(r),i.searchParams.set("page",r.toString()),history.pushState({},"",i)};return e.jsxs(u,{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"},children:[e.jsx(u.First,{disabled:t===1,onClick:()=>n(1)}),e.jsx(u.Prev,{disabled:t===1,onClick:()=>n(t-1)}),a.map(r=>e.jsx(u.Item,{active:t===r,onClick:()=>n(r),children:r},r)),e.jsx(u.Next,{disabled:t===o,onClick:()=>n(t+1)}),e.jsx(u.Last,{disabled:t===o,onClick:()=>n(o)})]})},Q=({limitPerPage:t,setLimitPerPage:s,setSelectedPage:o})=>{const a=[10,25,50,1e3];return e.jsx(U,{title:`${t} per page`,children:a.map((i,n)=>e.jsx(H.Item,{active:i===t,onClick:()=>{s(i),o(1)},children:i},n))})},V=({sortedByRepost:t,setSortedByRepost:s})=>e.jsx(S,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:e.jsx(S.Check,{type:"switch",label:t?"sorted by repost":"sorted by initial creation",checked:t,onChange:()=>s(!t)})}),K=({onlyApplied:t,setOnlyApplied:s,setSelectedPage:o})=>e.jsx(S,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:e.jsx(S.Check,{type:"switch",label:t?"only App":"all (App or not)",checked:t,onChange:()=>{s(!t),o(1)}})}),Z=({updatedDateIso:t,nextIterationDateIso:s,numItems:o})=>{const a=new Date(t),i=j(new Date().getTime()-a.getTime()),n=a.toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),d=new Date(s).getTime()-new Date().getTime(),f=j(d);return e.jsxs("p",{children:["Updated ",e.jsx("b",{style:{color:g.DATE_INITAL},children:i})," ago (on ",n,")",e.jsx("br",{}),"Next update in ",e.jsx("b",{style:{color:g.DATE_UPDATED},children:f}),e.jsx("br",{}),e.jsx("b",{children:o})," items from"," ",e.jsx("a",{href:"https://www.cwjobs.co.uk/jobs/contract/python-or-c%23-or-perl-or-sdet-or-test-or-qa-or-automation-or-dsp-or-raspberry?sort=2&action=facet_selected%3bage%3b1&postedWithin=1",children:"search"})]})},ee=()=>e.jsx("div",{style:{margin:"1rem auto"},children:se().map((t,s)=>e.jsx(q,{variant:"dark",type:"submit",href:t.link,target:"_blank",style:{backgroundColor:"#4792fb",padding:"0 0.8rem",margin:"0 0.4rem"},children:t.name},s))}),te="python C# C++ perl typescript matlab FastAPI Django SDET QA test automation playwright selenium cucumber specflow gherkin DSP raspberry".split(" "),C=te.map(encodeURIComponent),oe=["Delivery Driver","Furniture Installer","Electrician","Mechanic","Civil Engineering","Electrical Inspector","MOT Tester","Heating Engineer"],se=()=>{const t="%2C",s=C.join("-or-"),o=C.join("+or+"),a=C.join("%20OR%20"),i="Python SDET React TypeScript FastAPI Django".split(" ").join(t),n=("%28"+C.join(" OR ")+"%29"+oe.map(d=>` -"${encodeURIComponent(d)}"`).join("")).replaceAll(" ","+");return[{name:"CWjobs",link:`https://www.cwjobs.co.uk/jobs/contract/${s}?sort=2&action=sort_publish`},{name:"TotalJobs",link:`https://www.totaljobs.com/jobs/contract/${s}?sort=2&action=sort_publish`},{name:"jobsite",link:`https://www.jobsite.co.uk/jobs/contract/${s}?sort=2&action=sort_publish`},{name:"Indeed",link:`https://uk.indeed.com/jobs?q=${n}&sc=0kf%3Ajt%28contract%29%3B&fromage=7&sort=date`},{name:"Monster",link:`https://www.monster.co.uk/jobs/search?q=${o}&where=&page=1&et=CONTRACT&recency=last+week&so=m.h.s`},{name:"LinkedIn",link:`https://www.linkedin.com/jobs/search/?f_JT=C&f_WT=2${t}3&geoId=101165590&refresh=true&sortBy=DD&keywords=${a}&f_TPR=r${7*24*3600}`},{name:"IT Jobs Watch",link:`https://www.itjobswatch.co.uk/contract.aspx?sortby=6&orderby=0&ql=${i}`}]},ne=()=>{const[t,s]=_(null),[o,a]=_(null),[i,n]=_(!1),[r,d]=_(!1),[f,p]=_(25);$(()=>{(async()=>{try{const c="https://webapp1-90494.web.app/data/report_all.json";console.log(`Fetch data from server: ${c}`);const m=await fetch(c,{mode:"cors"});if(!m.ok){const T=m.status===404?"404: This link seems wrong, check you have the correct one":`Failed to get data: response status=${m.status} body=${m.body}`;throw new Error(T)}const b=await m.json();a(b)}catch(c){const m={__error:`Exception: ${c}`};a(m)}})(),s(parseInt(new re().getPage()))},[]);const y=l=>"__error"in l;if(o===null||t===null)return e.jsx("main",{children:"loading..."});if(y(o))return e.jsx("main",{style:{color:"red"},children:o.__error});const w=i?o.items.filter(l=>"applied_timestamp"in l):o.items,x=w.length;o.pagination.limit_per_page=f,o.pagination.total_pages=Math.ceil(x/o.pagination.limit_per_page),o.pagination.offset=(t-1)*o.pagination.limit_per_page;const D=w.sort(r?(l,c)=>c.date_posted.localeCompare(l.date_posted):(l,c)=>c.date_created.localeCompare(l.date_created)).slice(o.pagination.offset,Math.min(o.pagination.offset+o.pagination.limit_per_page,x));return e.jsxs("main",{children:[e.jsx(Z,{updatedDateIso:o.updated_on,nextIterationDateIso:o.date_next_iteration,numItems:x}),e.jsx(ee,{}),e.jsx(K,{onlyApplied:i,setOnlyApplied:n,setSelectedPage:s}),e.jsx(V,{sortedByRepost:r,setSortedByRepost:d}),e.jsx(Q,{limitPerPage:f,setLimitPerPage:p,setSelectedPage:s}),e.jsx(O,{selectedPage:t,setSelectedPage:s,numPages:o.pagination.total_pages}),D.map((l,c)=>e.jsx(J,{index:o.pagination.offset+1+c,item:l},c)),e.jsx(O,{selectedPage:t,setSelectedPage:s,numPages:o.pagination.total_pages})]})};class re{constructor(){I(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getPage(){return this.searchParams.get("page")??"1"}}L.createRoot(document.getElementById("root")).render(e.jsx(B.StrictMode,{children:e.jsx(v,{children:e.jsx(ne,{})})}));
