var F=Object.defineProperty;var L=(t,n,r)=>n in t?F(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var w=(t,n,r)=>L(t,typeof n!="symbol"?n+"":n,r);import{j as e,c as W}from"./client-B8KsQLkO.js";import*as S from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import O,{cloneElement as _,useState as E,useRef as U,useEffect as $}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{B as b}from"./Badge-5hhE3xTi.js";import{u as B,c as I,B as z}from"./Button-Dbum-Du3.js";import{m as G}from"./ElementChildren-AZvnq_HE.js";import{N as y,a as Y,b as D}from"./NavDropdown-DDqM1zy4.js";/* empty css              */import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"./Dropdown-DDJnZx1C.js";import"./divWithClassName-BBk2K8Sw.js";const T=1e3;function H(t,n,r){const a=(t-n)/(r-n)*100;return Math.round(a*T)/T}function R({min:t,now:n,max:r,label:a,visuallyHidden:o,striped:s,animated:l,className:u,style:d,variant:h,bsPrefix:p,...m},x){return e.jsx("div",{ref:x,...m,role:"progressbar",className:I(u,`${p}-bar`,{[`bg-${h}`]:h,[`${p}-bar-animated`]:l,[`${p}-bar-striped`]:l||s}),style:{width:`${H(n,t,r)}%`,...d},"aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":r,children:o?e.jsx("span",{className:"visually-hidden",children:a}):a})}const g=S.forwardRef(({isChild:t=!1,...n},r)=>{const a={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(a.bsPrefix=B(a.bsPrefix,"progress"),t)return R(a,r);const{min:o,now:s,max:l,label:u,visuallyHidden:d,striped:h,animated:p,bsPrefix:m,variant:x,className:i,children:c,...j}=a;return e.jsx("div",{ref:r,...j,className:I(i,m),children:c?G(c,P=>_(P,{isChild:!0})):R({min:o,now:s,max:l,label:u,visuallyHidden:d,striped:h,animated:p,bsPrefix:m,variant:x},r)})});g.displayName="ProgressBar";const J=S.forwardRef(({bsPrefix:t,className:n,striped:r,bordered:a,borderless:o,hover:s,size:l,variant:u,responsive:d,...h},p)=>{const m=B(t,"table"),x=I(n,m,u&&`${m}-${u}`,l&&`${m}-${l}`,r&&`${m}-${typeof r=="string"?`striped-${r}`:"striped"}`,a&&`${m}-bordered`,o&&`${m}-borderless`,s&&`${m}-hover`),i=e.jsx("table",{...h,className:x,ref:p});if(d){let c=`${m}-responsive`;return typeof d=="string"&&(c=`${c}-${d}`),e.jsx("div",{className:c,children:i})}return i}),f=[{section:"Politics USA"},{name:"Winning Party (5 Nov 2024)",marketID:"1.178176964"},{name:"President (5 Nov 2024)",marketID:"1.176878927"},{name:"Popular vote (5 Nov 2024)",marketID:"1.178165812"},{name:"Joe Biden impeached before election (5 Nov 2024)",marketID:"1.218257169"},{name:"Senate Election (5 Nov 2024)",marketID:"1.225479090"},{section:"Politics UK"},{name:"Next leader - Conservative",marketID:"1.205526560"},{name:"Next leader - Labour",marketID:"1.170273835"},{name:"Next leader - Lib Dem",marketID:"1.179233218"},{name:"Scotish referendum year (Jan 2025)",marketID:"1.166577732"},{section:"Football"},{name:"Next England Manager",marketID:"1.230779778"},{name:"Premiership Winner (25 May 2025)",marketID:"1.229393468"},{name:"Premiership Top 2 (25 May 2025)",marketID:"1.229394015"},{name:"Premiership Top 4 (25 May 2025)",marketID:"1.229606213"},{name:"Premiership Top 6 (25 May 2025)",marketID:"1.229393514"},{name:"Premiership relegation (25 May 2025)",marketID:"1.229393513"},{name:"Championship Promotion (Jun 2025)",marketID:"1.229570516"},{name:"Champions league Winner (31 May 2025)",marketID:"1.232067673"},{name:"Ballon d'Or Winner (28 Oct 2024)",marketID:"1.224804770"},{name:"World Cup (19 July 2026)",marketID:"1.207848678"},{name:"Rugby Six Nations Winner (15 Mar 2025)",marketID:"1.226293611"},{section:"F1"},{name:"F1 - 2024 Driver (8 Dec 2024)",marketID:"1.221826202"},{name:"F1 - 2024 Constructor (8 Dec 2024)",marketID:"1.221826203"},{section:"Misc"},{name:"BBC Sports Personality of the Year (21 Dec 2024)",marketID:"1.222864253"}];class N{constructor(){w(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getMarketID(){return this.searchParams.get("marketid")??f[1].marketID}}const K=async t=>{const n="https://ero.betfair.com/www/sports/exchange/readonly/v1/bymarket",r={rollupLimit:"10",rollupModel:"STAKE",currencyCode:"GBP",locale:"en_GB",marketIds:t,types:["MARKET_STATE","MARKET_DESCRIPTION","RUNNER_DESCRIPTION","RUNNER_EXCHANGE_PRICES_BEST","RUNNER_STATE"].join(",")};return fetch(n+"?"+new URLSearchParams(r).toString()).then(a=>a.json()).then(a=>{const o=a.eventTypes[0].eventNodes[0].marketNodes[0];return console.log(o),o})},q=t=>{const n=document.createElement("textarea");n.textContent=t,document.body.appendChild(n),n.select();try{return document.execCommand("copy")}catch(r){console.warn("Copy to clipboard failed.",r)}finally{document.body.removeChild(n)}},Q=t=>new Date(t).toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),X=()=>{const[t,n]=E(!0),r=new N().getMarketID(),a=f.filter(s=>"marketID"in s&&s.marketID===r).pop()??{name:"???",marketID:r};if(!a)return null;const o=s=>{n(s)};return e.jsxs(y,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:o,expanded:t,children:[e.jsx(y.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(y.Collapse,{id:"basic-navbar-nav",children:e.jsx(Y,{className:"ms-auto me-auto",children:e.jsx(D,{title:a.name,children:e.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:f.map((s,l)=>"section"in s?e.jsx(V,{divider:s},l):e.jsx(Z,{market:s,isActive:s.marketID===r},l))})})})})]})},V=({divider:t})=>e.jsxs(e.Fragment,{children:[e.jsx(D.Divider,{}),e.jsx("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"1.2rem",marginTop:"0.2rem",marginBottom:0},children:t.section})]}),Z=({market:t,isActive:n})=>{const r=U(null);$(()=>{var o;if(n){const s=r.current,l=s.parentElement,u=((o=l.querySelector(".dropdown-item"))==null?void 0:o.offsetTop)||0;console.log(`Move selected element to target Y=${u}`);const d=s.offsetTop;l.scrollTop=Math.max(0,d-u)}});const a=o=>{const s=new N().searchParams;return s.set("marketid",o),"?"+s.toString()};return e.jsx(D.Item,{ref:r,href:a(t.marketID),style:{padding:"0 1rem"},active:n,children:t.name})},ee=()=>{document.title="Odds";const t=new N().getMarketID(),n=f.filter(r=>"marketID"in r&&r.marketID===t).pop()??{name:"???",marketID:t};return te(e.jsx(ne,{market:n}))},te=t=>e.jsxs(e.Fragment,{children:[e.jsx(X,{}),e.jsx("main",{children:t})]}),ne=({market:t})=>{const[n,r]=E(null);if($(()=>{(async function(){const s=await K(t.marketID);r(s)})()},[t.marketID]),n===null)return e.jsx("p",{children:"Loading..."});const a=n.runners.filter(s=>s.state.status==="WINNER").map(s=>s.description.runnerName);a.sort();const o="https://www.betfair.com/exchange/plus/politics/market/"+t.marketID;return e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:"1.5rem"},children:e.jsx("a",{href:o,target:"_blank",children:n.description.marketName})}),n.state.status!=="OPEN"&&e.jsx("h3",{children:e.jsx(b,{bg:"danger",pill:!0,children:n.state.status})}),a.length>0&&e.jsxs("p",{children:[e.jsx("strong",{children:a.length})," won: ",e.jsx("strong",{children:a.join(", ")})]}),n.state.numberOfActiveRunners>0&&e.jsxs(e.Fragment,{children:[n.state.inplay&&e.jsx("h3",{children:e.jsx(b,{bg:"warning",pill:!0,children:"currently in play"})}),e.jsx(re,{marketData:n,winners:a})," "]})]})},re=({marketData:t,winners:n})=>{const r=t.runners.map(i=>ae(i)).filter(i=>!i.isDiscarded);r.length===2&&se(r[0],r[1]),r.sort((i,c)=>c.valueMinPct-i.valueMinPct);const a=r.filter(i=>i.isDisplayed),o=r.filter(i=>!i.isDisplayed),s=M(r.map(i=>i.valueMinPct)),l=M(r.map(i=>i.valueMidPct)),u=M(r.map(i=>i.valueMaxPct)),d=100*s/u,h=Math.max(...a.map(i=>i.valueMaxPct)),p=t.runners.filter(i=>i.state.status==="WINNER").length,m=t.runners.filter(i=>i.state.status==="LOSER").length,x=()=>{const i=n.map(v=>`-   done : ${v}`),c=a.map(v=>`-${v.valueMinPct.toFixed(1).padStart(6)}% : ${v.name}`),j=i.concat(c).join(`
`),P=`
${t.description.marketName}:
${j}

`;q(P)};return e.jsxs(e.Fragment,{children:[e.jsxs(J,{responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-secondary",children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{children:"Mid %"}),e.jsx("th",{children:"Probability"}),e.jsx("th",{children:"Confidence"})]})}),e.jsxs("tbody",{children:[e.jsx(oe,{totalMinPct:s,totalMidPct:l,totalMaxPct:u,totalSpeardPct:d,numPossibleNewWinners:t.state.numberOfWinners}),n.map((i,c)=>e.jsx(C,{index:c+1,name:i},c)),a.map((i,c)=>e.jsx(ie,{stat:i,index:c+n.length+1,maxval:h},c))]})]}),e.jsxs("p",{children:["Overall Confidence:"," ",e.jsxs(b,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:[d.toFixed(2),"%"]})]}),e.jsxs("p",{children:[e.jsx("strong",{children:p})," Won +"," ",e.jsx("strong",{children:t.state.numberOfActiveRunners})," Active +"," ",e.jsx("strong",{children:m})," Lost = ",e.jsx("strong",{children:t.state.numberOfRunners})," ","Total"]}),t.description.bettingType!=="ODDS"&&e.jsxs("p",{children:["betting type: ",e.jsx("strong",{children:Q(t.description.bettingType)})]}),e.jsx("p",{children:e.jsx(z,{variant:"dark",onClick:x,children:"Copy to clipboard"})}),o.length>0&&e.jsxs("p",{children:[o.length," other active option",o.length>1&&"s"," (very improbable):"," ",o.map((i,c)=>`${a.length+c+1+p}: ${i.name}`).join(", ")]}),!t.isMarketDataDelayed&&e.jsx("p",{children:"Data NOT delayed"})]})},ae=t=>{var d,h;const n=(d=t.exchange.availableToBack)!=null&&d.length?t.exchange.availableToBack[0]:{price:1,size:1},r=(h=t.exchange.availableToLay)!=null&&h.length?t.exchange.availableToLay[0]:{price:2e3,size:1},a=r.size/(r.size+n.size),o=100/r.price,s=100/n.price,l=k(o,s,a),u=100*(n.price/r.price);return{name:t.description.runnerName==="The Draw"?"draw":t.description.runnerName,valueMinPct:o,valueMidPct:l,valueMaxPct:s,valueSpreadPct:u,biasTowardsBack:a,isDiscarded:n.price===1&&r.price===2e3,isDisplayed:o>=.5}},se=(t,n)=>{t.valueMaxPct>100-n.valueMinPct?t.valueMaxPct=100-n.valueMinPct:n.valueMinPct=100-t.valueMaxPct,t.valueMinPct<100-n.valueMaxPct?t.valueMinPct=100-n.valueMaxPct:n.valueMaxPct=100-t.valueMinPct,t.valueMidPct=k(t.valueMinPct,t.valueMaxPct,t.biasTowardsBack),n.valueMidPct=k(n.valueMinPct,n.valueMaxPct,n.biasTowardsBack);const r=100/(t.valueMidPct+n.valueMidPct);t.valueMidPct*=r,n.valueMidPct*=r},k=(t,n,r)=>{const a=Math.log(t),o=Math.log(n),s=a+(o-a)*r;return Math.exp(s)},M=t=>{let n=0;return t.forEach(r=>{n+=r}),n},ie=({stat:t,index:n,maxval:r})=>{const a=e.jsxs(g,{style:{borderRadius:"3px",backgroundColor:"#fff"},children:[e.jsx(g,{variant:"success",now:t.valueMinPct,max:r}),e.jsx(g,{variant:"info",now:t.valueMaxPct-t.valueMinPct,max:r})]});return e.jsx(C,{index:n,name:t.name,bar:a,stat:t})},C=({index:t,name:n,bar:r,stat:a})=>{const o=a?{}:{fontWeight:"bold",color:"#198754"},s=a?`${a.valueMidPct.toFixed(1)}%`:"-";return e.jsxs("tr",{children:[e.jsx("td",{width:"5%",style:{textAlign:"right",paddingRight:"1rem"},children:t}),e.jsx("td",{width:"35%",style:{...o,textAlign:"left"},children:n}),e.jsx("td",{width:"5%",style:{textAlign:a?"right":"center",fontWeight:"bold",paddingRight:"1rem"},children:s}),e.jsx("td",{width:"35%",children:r}),e.jsx("td",{width:"20%",children:(a==null?void 0:a.valueSpreadPct)&&e.jsx(g,{style:{borderRadius:"3px"},variant:"dark",now:a.valueSpreadPct,label:`${a.valueMinPct.toFixed(1)}% to ${a.valueMaxPct.toFixed(1)}%`})})]})},oe=({totalMinPct:t,totalMidPct:n,totalMaxPct:r,totalSpeardPct:a,numPossibleNewWinners:o})=>{const s=o<2?"":`${o} spots left`;return e.jsxs("tr",{className:"table-light",children:[e.jsx("td",{width:"5%"}),e.jsx("td",{width:"35%",style:{textAlign:"left"},children:"TOTAL"}),e.jsxs("td",{width:"5%",style:{fontWeight:"bold",textAlign:"right",paddingRight:"1rem"},children:[n.toFixed(1),"%"]}),e.jsx("td",{width:"35%",children:s}),e.jsx("td",{width:"20%",children:e.jsx(g,{style:{borderRadius:"3px"},variant:"dark",now:a,label:`${t.toFixed(1)}% to ${r.toFixed(1)}%`})})]})};W.createRoot(document.getElementById("root")).render(e.jsx(O.StrictMode,{children:e.jsx(ee,{})}));
