var M=Object.defineProperty;var v=(e,s,o)=>s in e?M(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o;var A=(e,s,o)=>v(e,typeof s!="symbol"?s+"":s,o);import{j as t,c as $}from"./client-B8KsQLkO.js";import{C as B}from"./CookieConsentWrapper-DBLm3LwE.js";import F,{useState as x,useRef as G,useEffect as W}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{i as U}from"./all-BSES4dDh.js";import{p as E}from"./index-CelBjTPE.js";import{A as H}from"./Alert-CVO57zo1.js";import{C as k,B as u,D as q}from"./DropdownButton-B32QvKfC.js";import{D as z}from"./Dropdown-B2rYS5Iw.js";import{F as C}from"./Form-5wlro-Ns.js";import{B as Y}from"./Button-Dbum-Du3.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./CloseButton-CUYUvxPi.js";import"./ElementChildren-AZvnq_HE.js";const J=1e3,N=6e4,O=36e5,R=864e5,j=(e,s=!1)=>{if(e>=R)return`${(e/R).toFixed(1)} days`;const o=Math.floor(e/O);e-=o*O;const r=Math.floor(e/N);e-=r*N;const a=Math.floor(e/J);let n="";return o>0&&(n+=`${o}h`),n+=`${String(r).padStart(2,"0")}m`,s&&(n+=`${String(a).padStart(2,"0")}s`),n},g={ICONS:"#0f766e",BG_CARD:"white",BG_CARD_APPLIED:"#dcfce7",BG_LONG_DESCRIPTION:"#f0fdfa",BG_LONG_DESCRIPTION_BUTTON:"#0f766e",NOTES:"#312e81",DATE_INITAL:"#15803d",DATE_UPDATED:"#854d0e"},h=({className:e,style:s,...o})=>t.jsx("i",{className:e,style:{color:g.ICONS,marginLeft:".5rem",marginRight:".2rem",...s},...o}),I=864e5,X=({initialDate:e,repostedDate:s,appliedTs:o})=>{const r={weekday:"short",day:"2-digit",month:"short",year:"numeric"},a={...r,hour:"2-digit",minute:"2-digit"},n=new Date().getTime(),i=n-new Date(e).getTime(),d=i/I,f=j(i);let p=d>3?r:a;const y=new Date(e).toLocaleDateString("en-GB",p),w=n-new Date(s).getTime(),_=j(w),D=w/I;p=D>3?r:a;const l=new Date(s).toLocaleDateString("en-GB",p);let c;if(o){const S=n-o*1e3,T=j(S);p=S/I>3?r:a;const L=new Date(s).toLocaleDateString("en-GB",p);c=t.jsxs(t.Fragment,{children:[t.jsx(h,{className:"fa-solid fa-calendar-days"})," App ",t.jsx("b",{children:T})," ago (on"," ",L,")"]})}const m=d-D<1?t.jsxs(t.Fragment,{children:[t.jsx(h,{className:"fa-solid fa-calendar-days"})," Created"," ",t.jsx("b",{style:{color:g.DATE_INITAL},children:_})," ago (on ",l,")"]}):t.jsxs(t.Fragment,{children:[t.jsx(h,{className:"fa-solid fa-calendar-days"})," Created"," ",t.jsx("b",{style:{color:g.DATE_INITAL},children:f})," ago (on ",y,")."," ",t.jsx(h,{className:"fa-solid fa-calendar-days"})," Reposted"," ",t.jsx("b",{style:{color:g.DATE_UPDATED},children:_})," ago (on ",l,")"]});return t.jsxs("p",{children:[m,c]})},Q=({longDescription:e})=>{const s="4rem",o="hidden",[r,a]=x(!1),n=G(null);let i;return r?(i="fa-solid fa-minimize",n.current&&(n.current.style.removeProperty("max-height"),n.current.style.removeProperty("overflow-y"))):(i="fa-solid fa-maximize",n.current&&(n.current.style.maxHeight=s,n.current.style.overflowY=o)),t.jsxs("div",{style:{backgroundColor:g.BG_LONG_DESCRIPTION,padding:"0.3rem 1rem"},children:[t.jsx(h,{className:i,onClick:()=>a(!r),style:{fontSize:"1.4rem"}}),t.jsx("div",{ref:n,style:{overflowY:o,maxHeight:s},children:e})]})},V=({item:e,index:s})=>{const o=e.applied_timestamp?g.BG_CARD_APPLIED:g.BG_CARD,r=E(e.short_description_html),a=E(e.long_description_html),n=new Date(e.updated_on),i=j(new Date().getTime()-n.getTime()),d=new Date(e.created_on),f=j(new Date().getTime()-d.getTime());return t.jsx(k,{className:"x-shadow",style:{width:U?"90vw":"100vw"},children:t.jsxs(k.Body,{style:{background:o,borderRadius:"1rem"},children:[e.notes&&t.jsx(H,{variant:"warning",dismissible:!0,style:{padding:0,margin:"0.4rem auto",maxWidth:"80vw"},children:t.jsx("ul",{style:{margin:0},children:e.notes.map((p,y)=>t.jsx("li",{children:p},y))})}),t.jsxs(k.Title,{children:[s," ",t.jsx("a",{href:"https://www.cwjobs.co.uk"+e.url,target:"_blank",children:e.job_title})]}),t.jsxs("p",{children:[e.company_logo_url&&t.jsx("img",{src:e.company_logo_url,loading:"lazy",referrerPolicy:"no-referrer",alt:e.company_name,title:e.company_name,style:{maxHeight:"2rem",maxWidth:"60rem",marginRight:"1rem"}}),e.company_name]}),t.jsx(X,{initialDate:e.date_created,repostedDate:e.date_posted,appliedTs:e.applied_timestamp}),t.jsxs("p",{children:[t.jsx(h,{className:"fa-solid fa-money-bill-wave"})," ",e.salary,e.work_type&&e.work_type!=="Contract"&&t.jsx(K,{workType:e.work_type})]}),t.jsxs("p",{children:[t.jsx(h,{className:"fa-solid fa-location-dot"})," ",e.location,e.post_code&&`, ${e.post_code}`,e.work_from_home&&`, WFH: ${e.work_from_home}`]}),t.jsxs("p",{children:[t.jsx(h,{className:"fa-solid fa-circle-info"})," ",r]}),t.jsx(Q,{longDescription:a}),t.jsxs("p",{style:{fontSize:"0.7rem"},children:[e.id," was"," ",t.jsx("span",{style:{color:e.online_status==="online"?"green":"red"},children:e.online_status})," ","when refreshed ",t.jsx("b",{children:i})," ago. First seen ",t.jsx("b",{children:f})," ago."]})]})})},K=({workType:e})=>t.jsxs(t.Fragment,{children:[t.jsx(h,{className:"fa-solid fa-file-contract"}),e]}),P=({selectedPage:e,setSelectedPage:s,numPages:o})=>{const r=Array.from({length:o},(i,d)=>1+d),a=new URL(window.location.href),n=i=>{s(i),a.searchParams.set("page",i.toString()),history.pushState({},"",a)};return t.jsxs(u,{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"},children:[t.jsx(u.First,{disabled:e===1,onClick:()=>n(1)}),t.jsx(u.Prev,{disabled:e===1,onClick:()=>n(e-1)}),r.map(i=>t.jsx(u.Item,{active:e===i,onClick:()=>n(i),children:i},i)),t.jsx(u.Next,{disabled:e===o,onClick:()=>n(e+1)}),t.jsx(u.Last,{disabled:e===o,onClick:()=>n(o)})]})},Z=({limitPerPage:e,setLimitPerPage:s,setSelectedPage:o})=>{const r=[10,25,50,1e3];return t.jsx(q,{title:`${e} per page`,children:r.map((a,n)=>t.jsx(z.Item,{active:a===e,onClick:()=>{s(a),o(1)},children:a},n))})},ee=({sortedByRepost:e,setSortedByRepost:s})=>t.jsx(C,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:t.jsx(C.Check,{type:"switch",label:e?"sorted by repost":"sorted by initial creation",checked:e,onChange:()=>s(!e)})}),te=({onlyApplied:e,setOnlyApplied:s,setSelectedPage:o})=>t.jsx(C,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:t.jsx(C.Check,{type:"switch",label:e?"only App":"all (App or not)",checked:e,onChange:()=>{s(!e),o(1)}})}),oe=({updatedDateIso:e,nextIterationDateIso:s,numItems:o})=>{const r=new Date(e),a=j(new Date().getTime()-r.getTime()),n=r.toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),d=new Date(s).getTime()-new Date().getTime(),f=j(d);return t.jsxs("p",{children:["Updated ",t.jsx("b",{style:{color:g.DATE_INITAL},children:a})," ago (on ",n,")",t.jsx("br",{}),"Next update in ",t.jsx("b",{style:{color:g.DATE_UPDATED},children:f}),t.jsx("br",{}),t.jsx("b",{children:o})," items from"," ",t.jsx("a",{href:"https://www.cwjobs.co.uk/jobs/contract/python-or-c%23-or-perl-or-sdet-or-test-or-qa-or-automation-or-dsp-or-raspberry?sort=2&action=facet_selected%3bage%3b1&postedWithin=1",children:"search"})]})},se=()=>t.jsx("div",{style:{margin:"1rem auto"},children:ae().map((e,s)=>t.jsx(Y,{variant:"dark",type:"submit",href:e.link,target:"_blank",style:{backgroundColor:"#4792fb",padding:"0 0.8rem",margin:"0 0.4rem"},children:e.name},s))}),ne="python C# C++ perl typescript matlab FastAPI Django SDET QA test automation playwright selenium cucumber specflow gherkin DSP raspberry".split(" "),b=ne.map(encodeURIComponent),re=["Delivery Driver","Furniture Installer","Electrician","Mechanic","Civil Engineering","Electrical Inspector","MOT Tester","Heating Engineer"],ae=()=>{const e="%2C",s=b.join("-or-"),o=b.join("+or+"),r=b.join("%20OR%20"),a="Python SDET React TypeScript FastAPI Django".split(" ").join(e),n=("%28"+b.join(" OR ")+"%29"+re.map(d=>` -"${encodeURIComponent(d)}"`).join("")).replaceAll(" ","+");return[{name:"CWjobs",link:`https://www.cwjobs.co.uk/jobs/contract/${s}?sort=2&action=sort_publish`},{name:"TotalJobs",link:`https://www.totaljobs.com/jobs/contract/${s}?sort=2&action=sort_publish`},{name:"jobsite",link:`https://www.jobsite.co.uk/jobs/contract/${s}?sort=2&action=sort_publish`},{name:"Indeed",link:`https://uk.indeed.com/jobs?q=${n}&sc=0kf%3Ajt%28contract%29%3B&fromage=7&sort=date`},{name:"Monster",link:`https://www.monster.co.uk/jobs/search?q=${o}&where=&page=1&et=CONTRACT&recency=last+week&so=m.h.s`},{name:"LinkedIn",link:`https://www.linkedin.com/jobs/search/?f_JT=C&f_WT=2${e}3&geoId=101165590&refresh=true&sortBy=DD&keywords=${r}&f_TPR=r${7*24*3600}`},{name:"IT Jobs Watch",link:`https://www.itjobswatch.co.uk/contract.aspx?sortby=6&orderby=0&ql=${a}`}]},ie=()=>{const[e,s]=x(null),[o,r]=x(null),[a,n]=x(!1),[i,d]=x(!1),[f,p]=x(25);W(()=>{(async()=>{try{const c="https://webapp1-90494.web.app/data/report_all.json";console.log(`Fetch data from server: ${c}`);const m=await fetch(c,{mode:"cors"});if(!m.ok){const T=m.status===404?"404: This link seems wrong, check you have the correct one":`Failed to get data: response status=${m.status} body=${m.body}`;throw new Error(T)}const S=await m.json();r(S)}catch(c){const m={__error:`Exception: ${c}`};r(m)}})(),s(parseInt(new ce().getPage()))},[]);const y=l=>"__error"in l;if(o===null||e===null)return t.jsx("main",{children:"loading..."});if(y(o))return t.jsx("main",{style:{color:"red"},children:o.__error});const w=a?o.items.filter(l=>"applied_timestamp"in l):o.items,_=w.length;o.pagination.limit_per_page=f,o.pagination.total_pages=Math.ceil(_/o.pagination.limit_per_page),o.pagination.offset=(e-1)*o.pagination.limit_per_page;const D=w.sort(i?(l,c)=>c.date_posted.localeCompare(l.date_posted):(l,c)=>c.date_created.localeCompare(l.date_created)).slice(o.pagination.offset,Math.min(o.pagination.offset+o.pagination.limit_per_page,_));return t.jsxs("main",{children:[t.jsx(oe,{updatedDateIso:o.updated_on,nextIterationDateIso:o.date_next_iteration,numItems:_}),t.jsx(se,{}),t.jsx(te,{onlyApplied:a,setOnlyApplied:n,setSelectedPage:s}),t.jsx(ee,{sortedByRepost:i,setSortedByRepost:d}),t.jsx(Z,{limitPerPage:f,setLimitPerPage:p,setSelectedPage:s}),t.jsx(P,{selectedPage:e,setSelectedPage:s,numPages:o.pagination.total_pages}),D.map((l,c)=>t.jsx(V,{index:o.pagination.offset+1+c,item:l},c)),t.jsx(P,{selectedPage:e,setSelectedPage:s,numPages:o.pagination.total_pages})]})};class ce{constructor(){A(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getPage(){return this.searchParams.get("page")??"1"}}$.createRoot(document.getElementById("root")).render(t.jsx(F.StrictMode,{children:t.jsx(B,{children:t.jsx(ie,{})})}));
