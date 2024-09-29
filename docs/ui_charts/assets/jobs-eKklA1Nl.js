var B=Object.defineProperty;var v=(e,s,o)=>s in e?B(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o;var I=(e,s,o)=>v(e,typeof s!="symbol"?s+"":s,o);import{j as t,c as M}from"./client-B8KsQLkO.js";import{i as G,C as F}from"./CookieConsentWrapper-BX3Mx7Xo.js";import U,{createContext as W,useState as x,useRef as $,useContext as _,useEffect as H}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{A as Y,I as q,P as z}from"./Comps-Dnc7BUTO.js";import{g as J}from"./store-ZXNLDa3M.js";import{a as g,D as w,b as V}from"./dates-ZEyg73w4.js";import{p as R}from"./index-Cc73R9S4.js";import{A as X}from"./Alert-D3B4nhSa.js";import{C as D,B as h}from"./Pagination-BOoHJ7U-.js";import{F as f}from"./Form-D9HkiQhX.js";import{B as K}from"./Button-AoLKMrJK.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./Dropdown-Ccmojf5N.js";import"./useMergedRefs-BEcJmFAT.js";import"./CloseButton-Dzo1iBth.js";import"./TransitionWrapper-BMbdxB92.js";import"./CardHeaderContext-Dz0GHBZ8.js";import"./ElementChildren-AZvnq_HE.js";const y=W(null),Q=({children:e})=>{const[s,o]=x(!1),[i,r]=x(!1),[a,d]=x(25),[n,c]=x(1),l={onlyApplied:s,setOnlyApplied:o,sortedByRepost:i,setSortedByRepost:r,limitPerPage:a,setLimitPerPage:d,selectedPage:n,setSelectedPage:c};return t.jsx(y.Provider,{value:l,children:e})},m={ICONS:"#0f766e",BG_CARD:"white",BG_CARD_APPLIED:"#dcfce7",BG_LONG_DESCRIPTION:"#f0fdfa",BG_LONG_DESCRIPTION_BUTTON:"#0f766e",NOTES:"#312e81",DATE_INITAL:"#15803d",DATE_UPDATED:"#854d0e"},p=({className:e,style:s,...o})=>t.jsx("i",{className:e,style:{color:m.ICONS,marginLeft:".5rem",marginRight:".2rem",...s},...o}),Z=({initialDate:e,repostedDate:s,appliedTs:o})=>{const i={weekday:"short",day:"2-digit",month:"short",year:"numeric"},r={...i,hour:"2-digit",minute:"2-digit"},a=new Date().getTime(),d=a-new Date(e).getTime(),n=d/w,c=g(d);let l=n>3?i:r;const j=new Date(e).toLocaleDateString("en-GB",l),u=a-new Date(s).getTime(),P=g(u),A=u/w;l=A>3?i:r;const k=new Date(s).toLocaleDateString("en-GB",l);let C;if(o){const T=a-o*1e3,N=g(T);l=T/w>3?i:r;const O=new Date(s).toLocaleDateString("en-GB",l);C=t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-calendar-days"})," App ",t.jsx("b",{children:N})," ago (on"," ",O,")"]})}const L=n-A<1?t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-calendar-days"})," Created"," ",t.jsx("b",{style:{color:m.DATE_INITAL},children:P})," ago (on ",k,")"]}):t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-calendar-days"})," Created"," ",t.jsx("b",{style:{color:m.DATE_INITAL},children:c})," ago (on ",j,")."," ",t.jsx(p,{className:"fa-solid fa-calendar-days"})," Reposted"," ",t.jsx("b",{style:{color:m.DATE_UPDATED},children:P})," ago (on ",k,")"]});return t.jsxs("p",{children:[L,C]})},ee=({longDescription:e})=>{const s="4rem",o="hidden",[i,r]=x(!1),a=$(null);let d;return i?(d="fa-solid fa-minimize",a.current&&(a.current.style.removeProperty("max-height"),a.current.style.removeProperty("overflow-y"))):(d="fa-solid fa-maximize",a.current&&(a.current.style.maxHeight=s,a.current.style.overflowY=o)),t.jsxs("div",{style:{backgroundColor:m.BG_LONG_DESCRIPTION,padding:"0.3rem 1rem"},children:[t.jsx(p,{className:d,onClick:()=>r(!i),style:{fontSize:"1.4rem"}}),t.jsx("div",{ref:a,style:{overflowY:o,maxHeight:s},children:e})]})},te=({item:e,index:s})=>{const o=e.applied_timestamp?m.BG_CARD_APPLIED:m.BG_CARD,i=R(e.short_description_html),r=R(e.long_description_html),a=new Date(e.updated_on),d=g(new Date().getTime()-a.getTime()),n=new Date(e.created_on),c=g(new Date().getTime()-n.getTime());return t.jsx(D,{className:"x-shadow",style:{width:G?"90vw":"100vw"},children:t.jsxs(D.Body,{style:{background:o,borderRadius:"1rem"},children:[e.notes&&t.jsx(X,{variant:"warning",dismissible:!0,style:{padding:0,margin:"0.4rem auto",maxWidth:"80vw"},children:t.jsx("ul",{style:{margin:0},children:e.notes.map((l,j)=>t.jsx("li",{children:l},j))})}),t.jsxs(D.Title,{children:[s," ",t.jsx(Y,{href:"https://www.cwjobs.co.uk"+e.url,children:e.job_title})]}),t.jsxs("p",{children:[e.company_logo_url&&t.jsx(q,{src:e.company_logo_url,alt:e.company_name,title:e.company_name,style:{maxHeight:"2rem",maxWidth:"60rem",marginRight:"1rem"}}),e.company_name]}),t.jsx(Z,{initialDate:e.date_created,repostedDate:e.date_posted,appliedTs:e.applied_timestamp}),t.jsxs("p",{children:[t.jsx(p,{className:"fa-solid fa-money-bill-wave"})," ",e.salary,e.work_type&&e.work_type!=="Contract"&&t.jsx(se,{workType:e.work_type})]}),t.jsxs("p",{children:[t.jsx(p,{className:"fa-solid fa-location-dot"})," ",e.location,e.post_code&&`, ${e.post_code}`,e.work_from_home&&`, WFH: ${e.work_from_home}`]}),t.jsxs("p",{children:[t.jsx(p,{className:"fa-solid fa-circle-info"})," ",i]}),t.jsx(ee,{longDescription:r}),t.jsxs("p",{style:{fontSize:"0.7rem"},children:[e.id," was"," ",t.jsx("span",{style:{color:e.online_status==="online"?"green":"red"},children:e.online_status})," ","when refreshed ",t.jsx("b",{children:d})," ago. First seen ",t.jsx("b",{children:c})," ago."]})]})})},se=({workType:e})=>t.jsxs(t.Fragment,{children:[t.jsx(p,{className:"fa-solid fa-file-contract"}),e]}),E=({numPages:e})=>{const s=_(y),o=Array.from({length:e},(a,d)=>1+d),i=new URL(window.location.href),r=a=>{s.setSelectedPage(a),i.searchParams.set("page",a.toString()),history.pushState({},"",i)};return t.jsxs(h,{style:{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:"1rem"},children:[t.jsx(h.First,{disabled:s.selectedPage===1,onClick:()=>r(1)}),t.jsx(h.Prev,{disabled:s.selectedPage===1,onClick:()=>r(s.selectedPage-1)}),o.map(a=>t.jsx(h.Item,{active:s.selectedPage===a,onClick:()=>r(a),children:a},a)),t.jsx(h.Next,{disabled:s.selectedPage===e,onClick:()=>r(s.selectedPage+1)}),t.jsx(h.Last,{disabled:s.selectedPage===e,onClick:()=>r(e)})]})},oe=()=>{const e=_(y);return t.jsx(f,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:t.jsx(f.Check,{type:"switch",label:e.sortedByRepost?"sorted by repost":"sorted by initial creation",checked:e.sortedByRepost,onChange:()=>e.setSortedByRepost(!e.sortedByRepost)})})},ae=()=>{const e=_(y);return t.jsx(f,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:t.jsx(f.Check,{type:"switch",label:e.onlyApplied?"only App":"all (App or not)",checked:e.onlyApplied,onChange:()=>{e.setOnlyApplied(!e.onlyApplied),e.setSelectedPage(1)}})})},ne=({updatedDateIso:e,nextIterationDateIso:s,numItems:o})=>{const i=new Date(e),r=g(new Date().getTime()-i.getTime()),a=i.toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"}),n=new Date(s).getTime()-new Date().getTime(),c=g(n);return t.jsxs("p",{children:["Updated ",t.jsx("b",{style:{color:m.DATE_INITAL},children:r})," ago (on ",a,")",t.jsx("br",{}),"Next update in ",t.jsx("b",{style:{color:m.DATE_UPDATED},children:c}),t.jsx("br",{}),t.jsx("b",{children:o})," items from"," ",t.jsx("a",{href:"https://www.cwjobs.co.uk/jobs/contract/python-or-c%23-or-perl-or-sdet-or-test-or-qa-or-automation-or-dsp-or-raspberry?sort=2&action=facet_selected%3bage%3b1&postedWithin=1",children:"search"})]})},re=()=>t.jsx("div",{style:{margin:"1rem auto"},children:ce().map((e,s)=>t.jsx(K,{variant:"dark",type:"submit",href:e.link,target:"_blank",rel:"noreferrer",style:{backgroundColor:"#4792fb",padding:"0 0.8rem",margin:"0 0.4rem"},children:e.name},s))}),b=["python","typescript","SDET","playwright","selenium","cucumber","specflow","gherkin"],S=[...b,"C#","C++","perl","matlab","FastAPI","Django","QA","test","automation","DSP","raspberry"],ie=["Delivery Driver","Furniture Installer","Electrician","Mechanic","Civil Engineering","Electrical Inspector","MOT Tester","Heating Engineer"],ce=()=>{const e=S.map(encodeURIComponent).join("-or-"),s=new URLSearchParams({sc:"0kf:jt(contract);",fromage:"7",sort:"date",q:"("+b.join(" OR ")+")"+ie.map(n=>` -"${n}"`).join("")}).toString(),o=new URLSearchParams({f_JT:"C",geoId:"101165590",refresh:"true",sortBy:"DD",keywords:S.join(" OR "),f_TPR:`r${7*V}`}).toString(),i=new URLSearchParams({q:S.join(" OR "),page:"1",et:"CONTRACT",recency:"last week",so:"m.h.s"}).toString(),r=new URLSearchParams({locId:"2",locT:"N","sc.locationSeoString":"United Kingdom","sc.occupationParam":b.join(" ")}).toString(),a=new URLSearchParams({sortby:"12",orderby:"0",ql:"Python,SDET,React,TypeScript,Next.js,FastAPI,Django,Playwright,Robot Framework,Selenium,Cypress"}).toString();return[{name:"CWjobs",link:`https://www.cwjobs.co.uk/jobs/contract/${e}?sort=2&action=sort_publish`},{name:"TotalJobs",link:`https://www.totaljobs.com/jobs/contract/${e}?sort=2&action=sort_publish`},{name:"jobsite",link:`https://www.jobsite.co.uk/jobs/contract/${e}?sort=2&action=sort_publish`},{name:"Indeed",link:"https://uk.indeed.com/jobs?"+s},{name:"LinkedIn",link:"https://www.linkedin.com/jobs/search/?"+o},{name:"Glassdoor",link:"https://www.glassdoor.co.uk/Job/jobs.htm?"+r},{name:"Monster",link:"https://www.monster.co.uk/jobs/search?"+i},{name:"IT Jobs Watch",link:"https://www.itjobswatch.co.uk/contract.aspx?"+a}]},le=()=>{const[e,s]=x(null),o=_(y);H(()=>{(async()=>{try{const c="https://webapp1-90494.web.app/data/report_all.json";console.log(`Fetch data from server: ${c}`);const l=await fetch(c,{mode:"cors"});if(!l.ok){const u=l.status===404?"404: This link seems wrong, check you have the correct one":`Failed to get data: response status=${l.status} body=${l.body}`;throw new Error(u)}const j=await l.json();s(j)}catch(c){const l={__error:`Exception: ${c}`};s(l)}})(),o.setSelectedPage(parseInt(new de().getPage()))},[]);const i=n=>"__error"in n;if(e===null||o.selectedPage===null)return t.jsx("main",{children:"loading..."});if(i(e))return t.jsx("main",{style:{color:"red"},children:e.__error});const r=o.onlyApplied?e.items.filter(n=>"applied_timestamp"in n):e.items,a=r.length;e.pagination.limit_per_page=o.limitPerPage,e.pagination.total_pages=Math.ceil(a/e.pagination.limit_per_page),e.pagination.offset=(o.selectedPage-1)*e.pagination.limit_per_page;const d=r.sort(o.sortedByRepost?(n,c)=>c.date_posted.localeCompare(n.date_posted):(n,c)=>c.date_created.localeCompare(n.date_created)).slice(e.pagination.offset,Math.min(e.pagination.offset+e.pagination.limit_per_page,a));return t.jsxs("main",{children:[t.jsx(ne,{updatedDateIso:e.updated_on,nextIterationDateIso:e.date_next_iteration,numItems:a}),t.jsx(re,{}),t.jsx(ae,{}),t.jsx(oe,{}),t.jsx(z,{name:"per page",values:[10,25,50,1e3],selectedValue:o.limitPerPage,onNewValue:n=>{o.setLimitPerPage(n),o.setSelectedPage(1)}}),t.jsx(E,{numPages:e.pagination.total_pages}),d.map((n,c)=>t.jsx(te,{index:e.pagination.offset+1+c,item:n},c)),t.jsx(E,{numPages:e.pagination.total_pages})]})};class de{constructor(){I(this,"searchParams");this.searchParams=J()}getPage(){return this.searchParams.get("page")??"1"}}M.createRoot(document.getElementById("root")).render(t.jsx(U.StrictMode,{children:t.jsx(F,{children:t.jsx(Q,{children:t.jsx(le,{})})})}));
