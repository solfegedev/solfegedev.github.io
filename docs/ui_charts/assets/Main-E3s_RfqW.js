var F=Object.defineProperty;var L=(e,n,r)=>n in e?F(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var R=(e,n,r)=>L(e,typeof n!="symbol"?n+"":n,r);import{j as t}from"./client-B8KsQLkO.js";import*as g from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{cloneElement as O,useState as E,useRef as W,useEffect as C}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{u as N,a as y,B as _}from"./index-CRJBsK6O.js";import{N as k,a as U,b as w}from"./NavDropdown-BVRSCMm0.js";const j=g.forwardRef(({bsPrefix:e,bg:n="primary",pill:r=!1,text:a,className:i,as:s="span",...c},m)=>{const d=N(e,"badge");return t.jsx(s,{ref:m,...c,className:y(i,d,r&&"rounded-pill",a&&`text-${a}`,n&&`bg-${n}`)})});j.displayName="Badge";function z(e,n){let r=0;return g.Children.map(e,a=>g.isValidElement(a)?n(a,r++):a)}function de(e,n){return g.Children.toArray(e).some(r=>g.isValidElement(r)&&r.type===n)}const S=1e3;function G(e,n,r){const a=(e-n)/(r-n)*100;return Math.round(a*S)/S}function $({min:e,now:n,max:r,label:a,visuallyHidden:i,striped:s,animated:c,className:m,style:d,variant:h,bsPrefix:p,...u},x){return t.jsx("div",{ref:x,...u,role:"progressbar",className:y(m,`${p}-bar`,{[`bg-${h}`]:h,[`${p}-bar-animated`]:c,[`${p}-bar-striped`]:c||s}),style:{width:`${G(n,e,r)}%`,...d},"aria-valuenow":n,"aria-valuemin":e,"aria-valuemax":r,children:i?t.jsx("span",{className:"visually-hidden",children:a}):a})}const v=g.forwardRef(({isChild:e=!1,...n},r)=>{const a={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(a.bsPrefix=N(a.bsPrefix,"progress"),e)return $(a,r);const{min:i,now:s,max:c,label:m,visuallyHidden:d,striped:h,animated:p,bsPrefix:u,variant:x,className:o,children:l,...M}=a;return t.jsx("div",{ref:r,...M,className:y(o,u),children:l?z(l,b=>O(b,{isChild:!0})):$({min:i,now:s,max:c,label:m,visuallyHidden:d,striped:h,animated:p,bsPrefix:u,variant:x},r)})});v.displayName="ProgressBar";const Y=g.forwardRef(({bsPrefix:e,className:n,striped:r,bordered:a,borderless:i,hover:s,size:c,variant:m,responsive:d,...h},p)=>{const u=N(e,"table"),x=y(n,u,m&&`${u}-${m}`,c&&`${u}-${c}`,r&&`${u}-${typeof r=="string"?`striped-${r}`:"striped"}`,a&&`${u}-bordered`,i&&`${u}-borderless`,s&&`${u}-hover`),o=t.jsx("table",{...h,className:x,ref:p});if(d){let l=`${u}-responsive`;return typeof d=="string"&&(l=`${l}-${d}`),t.jsx("div",{className:l,children:o})}return o}),P=[{section:"Politics USA"},{name:"Winning Party (5 Nov 2024)",marketID:"1.178176964"},{name:"President (5 Nov 2024)",marketID:"1.176878927"},{name:"Popular vote (5 Nov 2024)",marketID:"1.178165812"},{name:"Joe Biden impeached before election (5 Nov 2024)",marketID:"1.218257169"},{name:"Senate Election (5 Nov 2024)",marketID:"1.225479090"},{section:"Politics UK"},{name:"Next leader - Conservative",marketID:"1.205526560"},{name:"Next leader - Labour",marketID:"1.170273835"},{name:"Next leader - Lib Dem",marketID:"1.179233218"},{name:"Scotish referendum year (Jan 2025)",marketID:"1.166577732"},{section:"Football"},{name:"Next England Manager",marketID:"1.230779778"},{name:"Premiership Winner (25 May 2025)",marketID:"1.229393468"},{name:"Premiership Top 2 (25 May 2025)",marketID:"1.229394015"},{name:"Premiership Top 4 (25 May 2025)",marketID:"1.229606213"},{name:"Premiership Top 6 (25 May 2025)",marketID:"1.229393514"},{name:"Premiership relegation (25 May 2025)",marketID:"1.229393513"},{name:"Championship Promotion (Jun 2025)",marketID:"1.229570516"},{name:"Champions league Winner (31 May 2025)",marketID:"1.232067673"},{name:"Ballon d'Or Winner (28 Oct 2024)",marketID:"1.224804770"},{name:"World Cup (19 July 2026)",marketID:"1.207848678"},{name:"Rugby Six Nations Winner (15 Mar 2025)",marketID:"1.226293611"},{section:"F1"},{name:"F1 - 2024 Driver (8 Dec 2024)",marketID:"1.221826202"},{name:"F1 - 2024 Constructor (8 Dec 2024)",marketID:"1.221826203"},{section:"Misc"},{name:"BBC Sports Personality of the Year (21 Dec 2024)",marketID:"1.222864253"}];class T{constructor(){R(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getMarketID(){return this.searchParams.get("marketid")??P[1].marketID}}const H=async e=>{const n="https://ero.betfair.com/www/sports/exchange/readonly/v1/bymarket",r={rollupLimit:"10",rollupModel:"STAKE",currencyCode:"GBP",locale:"en_GB",marketIds:e,types:["MARKET_STATE","MARKET_DESCRIPTION","RUNNER_DESCRIPTION","RUNNER_EXCHANGE_PRICES_BEST","RUNNER_STATE"].join(",")};return fetch(n+"?"+new URLSearchParams(r).toString()).then(a=>a.json()).then(a=>{const i=a.eventTypes[0].eventNodes[0].marketNodes[0];return console.log(i),i})},J=e=>{const n=document.createElement("textarea");n.textContent=e,document.body.appendChild(n),n.select();try{return document.execCommand("copy")}catch(r){console.warn("Copy to clipboard failed.",r)}finally{document.body.removeChild(n)}},K=e=>new Date(e).toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),V=()=>{const[e,n]=E(!0),r=new T().getMarketID(),a=P.filter(s=>"marketID"in s&&s.marketID===r).pop()??{name:"???",marketID:r};if(!a)return null;const i=s=>{n(s)};return t.jsxs(k,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:i,expanded:e,children:[t.jsx(k.Toggle,{"aria-controls":"basic-navbar-nav"}),t.jsx(k.Collapse,{id:"basic-navbar-nav",children:t.jsx(U,{className:"ms-auto me-auto",children:t.jsx(w,{title:a.name,children:t.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:P.map((s,c)=>"section"in s?t.jsx(q,{divider:s},c):t.jsx(Q,{market:s,isActive:s.marketID===r},c))})})})})]})},q=({divider:e})=>t.jsxs(t.Fragment,{children:[t.jsx(w.Divider,{}),t.jsx("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"1.2rem",marginTop:"0.2rem",marginBottom:0},children:e.section})]}),Q=({market:e,isActive:n})=>{const r=W(null);C(()=>{var i;if(n){const s=r.current,c=s.parentElement,m=((i=c.querySelector(".dropdown-item"))==null?void 0:i.offsetTop)||0;console.log(`Move selected element to target Y=${m}`);const d=s.offsetTop;c.scrollTop=Math.max(0,d-m)}});const a=i=>{const s=new T().searchParams;return s.set("marketid",i),"?"+s.toString()};return t.jsx(w.Item,{ref:r,href:a(e.marketID),style:{padding:"0 1rem"},active:n,children:e.name})},me=()=>{document.title="Odds";const e=new T().getMarketID(),n=P.filter(r=>"marketID"in r&&r.marketID===e).pop()??{name:"???",marketID:e};return X(t.jsx(Z,{market:n}))},X=e=>t.jsxs(t.Fragment,{children:[t.jsx(V,{}),t.jsx("main",{children:e})]}),Z=({market:e})=>{const[n,r]=E(null);if(C(()=>{(async function(){const s=await H(e.marketID);r(s)})()},[e.marketID]),n===null)return t.jsx("p",{children:"Loading..."});const a=n.runners.filter(s=>s.state.status==="WINNER").map(s=>s.description.runnerName);a.sort();const i="https://www.betfair.com/exchange/plus/politics/market/"+e.marketID;return t.jsxs(t.Fragment,{children:[t.jsx("p",{style:{fontSize:"1.5rem"},children:t.jsx("a",{href:i,target:"_blank",children:n.description.marketName})}),n.state.status!=="OPEN"&&t.jsx("h3",{children:t.jsx(j,{bg:"danger",pill:!0,children:n.state.status})}),a.length>0&&t.jsxs("p",{children:[t.jsx("strong",{children:a.length})," won: ",t.jsx("strong",{children:a.join(", ")})]}),n.state.numberOfActiveRunners>0&&t.jsxs(t.Fragment,{children:[n.state.inplay&&t.jsx("h3",{children:t.jsx(j,{bg:"warning",pill:!0,children:"currently in play"})}),t.jsx(ee,{marketData:n,winners:a})," "]})]})},ee=({marketData:e,winners:n})=>{const r=e.runners.map(o=>te(o)).filter(o=>!o.isDiscarded);r.length===2&&ne(r[0],r[1]),r.sort((o,l)=>l.valueMinPct-o.valueMinPct);const a=r.filter(o=>o.isDisplayed),i=r.filter(o=>!o.isDisplayed),s=I(r.map(o=>o.valueMinPct)),c=I(r.map(o=>o.valueMidPct)),m=I(r.map(o=>o.valueMaxPct)),d=100*s/m,h=Math.max(...a.map(o=>o.valueMaxPct)),p=e.runners.filter(o=>o.state.status==="WINNER").length,u=e.runners.filter(o=>o.state.status==="LOSER").length,x=()=>{const o=n.map(f=>`-   done : ${f}`),l=a.map(f=>`-${f.valueMinPct.toFixed(1).padStart(6)}% : ${f.name}`),M=o.concat(l).join(`
`),b=`
${e.description.marketName}:
${M}

`;J(b)};return t.jsxs(t.Fragment,{children:[t.jsxs(Y,{responsive:!0,children:[t.jsx("thead",{children:t.jsxs("tr",{className:"table-secondary",children:[t.jsx("th",{}),t.jsx("th",{}),t.jsx("th",{children:"Mid %"}),t.jsx("th",{children:"Probability"}),t.jsx("th",{children:"Confidence"})]})}),t.jsxs("tbody",{children:[t.jsx(ae,{totalMinPct:s,totalMidPct:c,totalMaxPct:m,totalSpeardPct:d,numPossibleNewWinners:e.state.numberOfWinners}),n.map((o,l)=>t.jsx(B,{index:l+1,name:o},l)),a.map((o,l)=>t.jsx(re,{stat:o,index:l+n.length+1,maxval:h},l))]})]}),t.jsxs("p",{children:["Overall Confidence:"," ",t.jsxs(j,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:[d.toFixed(2),"%"]})]}),t.jsxs("p",{children:[t.jsx("strong",{children:p})," Won +"," ",t.jsx("strong",{children:e.state.numberOfActiveRunners})," Active +"," ",t.jsx("strong",{children:u})," Lost = ",t.jsx("strong",{children:e.state.numberOfRunners})," ","Total"]}),e.description.bettingType!=="ODDS"&&t.jsxs("p",{children:["betting type: ",t.jsx("strong",{children:K(e.description.bettingType)})]}),t.jsx("p",{children:t.jsx(_,{variant:"dark",onClick:x,children:"Copy to clipboard"})}),i.length>0&&t.jsxs("p",{children:[i.length," other active option",i.length>1&&"s"," (very improbable):"," ",i.map((o,l)=>`${a.length+l+1+p}: ${o.name}`).join(", ")]}),!e.isMarketDataDelayed&&t.jsx("p",{children:"Data NOT delayed"})]})},te=e=>{var d,h;const n=(d=e.exchange.availableToBack)!=null&&d.length?e.exchange.availableToBack[0]:{price:1,size:1},r=(h=e.exchange.availableToLay)!=null&&h.length?e.exchange.availableToLay[0]:{price:2e3,size:1},a=r.size/(r.size+n.size),i=100/r.price,s=100/n.price,c=D(i,s,a),m=100*(n.price/r.price);return{name:e.description.runnerName==="The Draw"?"draw":e.description.runnerName,valueMinPct:i,valueMidPct:c,valueMaxPct:s,valueSpreadPct:m,biasTowardsBack:a,isDiscarded:n.price===1&&r.price===2e3,isDisplayed:i>=.5}},ne=(e,n)=>{e.valueMaxPct>100-n.valueMinPct?e.valueMaxPct=100-n.valueMinPct:n.valueMinPct=100-e.valueMaxPct,e.valueMinPct<100-n.valueMaxPct?e.valueMinPct=100-n.valueMaxPct:n.valueMaxPct=100-e.valueMinPct,e.valueMidPct=D(e.valueMinPct,e.valueMaxPct,e.biasTowardsBack),n.valueMidPct=D(n.valueMinPct,n.valueMaxPct,n.biasTowardsBack);const r=100/(e.valueMidPct+n.valueMidPct);e.valueMidPct*=r,n.valueMidPct*=r},D=(e,n,r)=>{const a=Math.log(e),i=Math.log(n),s=a+(i-a)*r;return Math.exp(s)},I=e=>{let n=0;return e.forEach(r=>{n+=r}),n},re=({stat:e,index:n,maxval:r})=>{const a=t.jsxs(v,{style:{borderRadius:"3px",backgroundColor:"#fff"},children:[t.jsx(v,{variant:"success",now:e.valueMinPct,max:r}),t.jsx(v,{variant:"info",now:e.valueMaxPct-e.valueMinPct,max:r})]});return t.jsx(B,{index:n,name:e.name,bar:a,stat:e})},B=({index:e,name:n,bar:r,stat:a})=>{const i=a?{}:{fontWeight:"bold",color:"#198754"},s=a?`${a.valueMidPct.toFixed(1)}%`:"-";return t.jsxs("tr",{children:[t.jsx("td",{width:"5%",style:{textAlign:"right",paddingRight:"1rem"},children:e}),t.jsx("td",{width:"35%",style:{...i,textAlign:"left"},children:n}),t.jsx("td",{width:"5%",style:{textAlign:a?"right":"center",fontWeight:"bold",paddingRight:"1rem"},children:s}),t.jsx("td",{width:"35%",children:r}),t.jsx("td",{width:"20%",children:(a==null?void 0:a.valueSpreadPct)&&t.jsx(v,{style:{borderRadius:"3px"},variant:"dark",now:a.valueSpreadPct,label:`${a.valueMinPct.toFixed(1)}% to ${a.valueMaxPct.toFixed(1)}%`})})]})},ae=({totalMinPct:e,totalMidPct:n,totalMaxPct:r,totalSpeardPct:a,numPossibleNewWinners:i})=>{const s=i<2?"":`${i} spots left`;return t.jsxs("tr",{className:"table-light",children:[t.jsx("td",{width:"5%"}),t.jsx("td",{width:"35%",style:{textAlign:"left"},children:"TOTAL"}),t.jsxs("td",{width:"5%",style:{fontWeight:"bold",textAlign:"right",paddingRight:"1rem"},children:[n.toFixed(1),"%"]}),t.jsx("td",{width:"35%",children:s}),t.jsx("td",{width:"20%",children:t.jsx(v,{style:{borderRadius:"3px"},variant:"dark",now:a,label:`${e.toFixed(1)}% to ${r.toFixed(1)}%`})})]})};export{me as M,de as h};
