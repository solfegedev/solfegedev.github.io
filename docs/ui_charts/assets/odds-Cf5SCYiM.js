var F=Object.defineProperty;var L=(t,n,r)=>n in t?F(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var R=(t,n,r)=>L(t,typeof n!="symbol"?n+"":n,r);import{j as e,c as W}from"./client-B8KsQLkO.js";import{C as O}from"./CookieConsentWrapper-BX3Mx7Xo.js";import*as _ from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import z,{cloneElement as U,useState as w,useRef as G,useEffect as B}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{A as Y}from"./LinkItem-KKG5ywFW.js";import{B as y}from"./Badge-5hhE3xTi.js";import{u as H,c as $,B as K}from"./Button-Dbum-Du3.js";import{m as J}from"./ElementChildren-AZvnq_HE.js";import{T as q}from"./Table-D95Yq_LC.js";import{N as M,a as Q,b as N}from"./NavDropdown-B6vjD2zC.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./CloseButton-CUYUvxPi.js";import"./Dropdown-BtRWb2wP.js";const E=1e3;function X(t,n,r){const a=(t-n)/(r-n)*100;return Math.round(a*E)/E}function C({min:t,now:n,max:r,label:a,visuallyHidden:o,striped:s,animated:l,className:p,style:h,variant:m,bsPrefix:u,...d},f){return e.jsx("div",{ref:f,...d,role:"progressbar",className:$(p,`${u}-bar`,{[`bg-${m}`]:m,[`${u}-bar-animated`]:l,[`${u}-bar-striped`]:l||s}),style:{width:`${X(n,t,r)}%`,...h},"aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":r,children:o?e.jsx("span",{className:"visually-hidden",children:a}):a})}const v=_.forwardRef(({isChild:t=!1,...n},r)=>{const a={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(a.bsPrefix=H(a.bsPrefix,"progress"),t)return C(a,r);const{min:o,now:s,max:l,label:p,visuallyHidden:h,striped:m,animated:u,bsPrefix:d,variant:f,className:I,children:i,...c}=a;return e.jsx("div",{ref:r,...c,className:$(I,d),children:i?J(i,g=>U(g,{isChild:!0})):C({min:o,now:s,max:l,label:p,visuallyHidden:h,striped:m,animated:u,bsPrefix:d,variant:f},r)})});v.displayName="ProgressBar";const k=[{section:"Politics USA"},{name:"Winning Party (5 Nov 2024)",marketID:"1.178176964"},{name:"President (5 Nov 2024)",marketID:"1.176878927"},{name:"Popular vote (5 Nov 2024)",marketID:"1.178165812"},{name:"Joe Biden impeached before election (5 Nov 2024)",marketID:"1.218257169"},{name:"Senate Election (5 Nov 2024)",marketID:"1.225479090"},{section:"Politics UK"},{name:"Next leader - Conservative (2 Nov 2024)",marketID:"1.205526560"},{name:"Next leader - Labour",marketID:"1.170273835"},{name:"Next leader - Lib Dem",marketID:"1.179233218"},{name:"Scotish referendum year (Jan 2025)",marketID:"1.166577732"},{section:"Football"},{name:"Next England Manager",marketID:"1.230779778"},{name:"Premiership Winner (25 May 2025)",marketID:"1.229393468"},{name:"Premiership Top 2 (25 May 2025)",marketID:"1.229394015"},{name:"Premiership Top 4 (25 May 2025)",marketID:"1.229606213"},{name:"Premiership Top 6 (25 May 2025)",marketID:"1.229393514"},{name:"Premiership relegation (25 May 2025)",marketID:"1.229393513"},{name:"Championship Winner (3 May 2025)",marketID:"1.229569552"},{name:"Championship Promotion (3 May 2025)",marketID:"1.229570516"},{name:"Champions league Winner (31 May 2025)",marketID:"1.232067673"},{name:"Ballon d'Or Winner (28 Oct 2024)",marketID:"1.224804770"},{name:"World Cup (19 July 2026)",marketID:"1.207848678"},{name:"Man City v Arsenal (16:30 on 22 Sep 2024)",marketID:"1.232494601"},{section:"F1"},{name:"F1 - 2024 Driver (8 Dec 2024)",marketID:"1.221826202"},{name:"F1 - 2024 Constructor (8 Dec 2024)",marketID:"1.221826203"},{section:"Misc"},{name:"BBC Sports Personality of the Year (21 Dec 2024)",marketID:"1.222864253"},{name:"Rugby Six Nations Winner (15 Mar 2025)",marketID:"1.226293611"},{name:"Eurovision winner (17 May 2025)",marketID:"1.231775910"}];class S{constructor(){R(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getMarketID(){const n=this.searchParams.get("marketid")??localStorage.getItem("odds_marketid")??k[1].marketID;return localStorage.setItem("odds_marketid",n),n}}const V=async t=>{const n="https://ero.betfair.com/www/sports/exchange/readonly/v1/bymarket",r={rollupLimit:"10",rollupModel:"STAKE",currencyCode:"GBP",locale:"en_GB",marketIds:t,types:["MARKET_STATE","MARKET_DESCRIPTION","RUNNER_DESCRIPTION","RUNNER_EXCHANGE_PRICES_BEST","RUNNER_STATE"].join(",")};return fetch(n+"?"+new URLSearchParams(r).toString()).then(a=>a.json()).then(a=>{const o=a.eventTypes[0].eventNodes[0].marketNodes[0];return console.log(o),o})},Z=t=>{const n=document.createElement("textarea");n.textContent=t,document.body.appendChild(n),n.select();try{return document.execCommand("copy")}catch(r){console.warn("Copy to clipboard failed.",r)}finally{document.body.removeChild(n)}},ee=t=>new Date(t).toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),te=()=>{const[t,n]=w(!0),r=new S().getMarketID(),a=k.filter(s=>"marketID"in s&&s.marketID===r).pop()??{name:"???",marketID:r};if(!a)return null;const o=s=>{n(s)};return e.jsxs(M,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:o,expanded:t,children:[e.jsx(M.Brand,{children:"Odds"}),e.jsx(M.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(M.Collapse,{id:"basic-navbar-nav",children:e.jsx(Q,{className:"ms-auto me-auto",children:e.jsx(N,{title:a.name,active:!0,children:e.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:k.map((s,l)=>"section"in s?e.jsx(ne,{divider:s},l):e.jsx(re,{market:s,isActive:s.marketID===r},l))})})})})]})},ne=({divider:t})=>e.jsxs(e.Fragment,{children:[e.jsx(N.Divider,{}),e.jsx("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"1.2rem",marginTop:"0.2rem",marginBottom:0},children:t.section})]}),re=({market:t,isActive:n})=>{const r=G(null);B(()=>{var o;if(n){const s=r.current,l=s.parentElement,p=((o=l.querySelector(".dropdown-item"))==null?void 0:o.offsetTop)||0;console.log(`Move selected element to target Y=${p}`);const h=s.offsetTop;l.scrollTop=Math.max(0,h-p)}});const a=o=>{const s=new S().searchParams;return s.set("marketid",o),"?"+s.toString()};return e.jsx(N.Item,{ref:r,href:a(t.marketID),style:{padding:"0 1rem"},active:n,children:t.name})},ae=()=>{const t=new S().getMarketID(),n=k.filter(r=>"marketID"in r&&r.marketID===t).pop()??{name:"???",marketID:t};return se(e.jsx(ie,{market:n}))},se=t=>e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx("main",{children:t})]}),ie=({market:t})=>{const[n,r]=w(null);if(B(()=>{(async function(){const s=await V(t.marketID);r(s)})()},[t.marketID]),n===null)return e.jsx("p",{children:"Loading..."});const a=n.runners.filter(s=>s.state.status==="WINNER").map(s=>s.description.runnerName);a.sort();const o="https://www.betfair.com/exchange/plus/politics/market/"+t.marketID;return e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:"1.5rem"},children:e.jsx(Y,{href:o,children:n.description.marketName})}),n.state.status!=="OPEN"&&e.jsx("h3",{children:e.jsx(y,{bg:"danger",pill:!0,children:n.state.status})}),a.length>0&&e.jsxs("p",{children:[e.jsx("strong",{children:a.length})," won: ",e.jsx("strong",{children:a.join(", ")})]}),n.state.numberOfActiveRunners>0&&e.jsxs(e.Fragment,{children:[n.state.inplay&&e.jsx("h3",{children:e.jsx(y,{bg:"warning",pill:!0,children:"currently in play"})}),e.jsx(oe,{marketData:n,winners:a})," "]})]})},oe=({marketData:t,winners:n})=>{const r=t.runners.map(i=>ce(i)).filter(i=>!i.isDiscarded),a=Math.log10(t.runners.map(i=>{var j,x,P,T;const c=((x=(j=i.exchange.availableToBack)==null?void 0:j.at(0))==null?void 0:x.size)??0,g=((T=(P=i.exchange.availableToLay)==null?void 0:P.at(0))==null?void 0:T.size)??0;return c===0||g===0?0:c+g}).reduce((i,c)=>i+c,0));r.length===2&&le(r[0],r[1]),r.sort((i,c)=>c.valueMinPct-i.valueMinPct);const o=r.filter(i=>i.isDisplayed),s=r.filter(i=>!i.isDisplayed),l=b(r.map(i=>i.valueMinPct)),p=b(r.map(i=>i.valueMidPct)),h=b(r.map(i=>i.valueMaxPct)),m=100*l/h,u=Math.max(...o.map(i=>i.valueMaxPct)),d=t.runners.filter(i=>i.state.status==="WINNER").length,f=t.runners.filter(i=>i.state.status==="LOSER").length,I=()=>{const i=n.map(x=>`-   done : ${x}`),c=o.map(x=>`-${x.valueMidPct.toFixed(1).padStart(6)}% : ${x.name}`),g=i.concat(c).join(`
`),j=`
${t.description.marketName}:
${g}

`;Z(j)};return e.jsxs(e.Fragment,{children:[e.jsxs(q,{responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-secondary",children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{children:"Mid %"}),e.jsx("th",{children:"Probability"}),e.jsx("th",{children:"Confidence"})]})}),e.jsxs("tbody",{children:[e.jsx(me,{totalMinPct:l,totalMidPct:p,totalMaxPct:h,totalSpeardPct:m,numPossibleNewWinners:t.state.numberOfWinners}),n.map((i,c)=>e.jsx(A,{index:c+1,name:i},c)),o.map((i,c)=>e.jsx(de,{stat:i,index:c+n.length+1,maxval:u},c))]})]}),e.jsxs("p",{children:["Overall Confidence:"," ",e.jsxs(y,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:[m.toFixed(2),"%"]})," ","with availability:"," ",e.jsx(y,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:a.toFixed(1)})]}),e.jsxs("p",{children:[e.jsx("strong",{children:d})," Won +"," ",e.jsx("strong",{children:t.state.numberOfActiveRunners})," Active +"," ",e.jsx("strong",{children:f})," Lost = ",e.jsx("strong",{children:t.state.numberOfRunners})," ","Total"]}),t.description.bettingType!=="ODDS"&&e.jsxs("p",{children:["betting type: ",e.jsx("strong",{children:ee(t.description.bettingType)})]}),e.jsx("p",{children:e.jsx(K,{variant:"dark",onClick:I,children:"Copy to clipboard"})}),s.length>0&&e.jsxs("p",{children:[s.length," other active option",s.length>1&&"s"," (very improbable):"," ",s.map((i,c)=>`${o.length+c+1+d}: ${i.name}`).join(", ")]}),!t.isMarketDataDelayed&&e.jsx("p",{children:"Data NOT delayed"})]})},ce=t=>{var h,m;const n=(h=t.exchange.availableToBack)!=null&&h.length?t.exchange.availableToBack[0]:{price:1,size:1},r=(m=t.exchange.availableToLay)!=null&&m.length?t.exchange.availableToLay[0]:{price:2e3,size:1},a=r.size/(r.size+n.size),o=100/r.price,s=100/n.price,l=D(o,s,a),p=100*(n.price/r.price);return{name:t.description.runnerName==="The Draw"?"draw":t.description.runnerName,valueMinPct:o,valueMidPct:l,valueMaxPct:s,valueSpreadPct:p,biasTowardsBack:a,isDiscarded:n.price===1&&r.price===2e3,isDisplayed:o>=.5}},le=(t,n)=>{t.valueMaxPct>100-n.valueMinPct?t.valueMaxPct=100-n.valueMinPct:n.valueMinPct=100-t.valueMaxPct,t.valueMinPct<100-n.valueMaxPct?t.valueMinPct=100-n.valueMaxPct:n.valueMaxPct=100-t.valueMinPct,t.valueMidPct=D(t.valueMinPct,t.valueMaxPct,t.biasTowardsBack),n.valueMidPct=D(n.valueMinPct,n.valueMaxPct,n.biasTowardsBack);const r=100/(t.valueMidPct+n.valueMidPct);t.valueMidPct*=r,n.valueMidPct*=r},D=(t,n,r)=>{const a=Math.log(t),o=Math.log(n),s=a+(o-a)*r;return Math.exp(s)},b=t=>{let n=0;return t.forEach(r=>{n+=r}),n},de=({stat:t,index:n,maxval:r})=>{const a=e.jsxs(v,{style:{borderRadius:"3px",backgroundColor:"#fff"},children:[e.jsx(v,{variant:"success",now:t.valueMinPct,max:r}),e.jsx(v,{variant:"info",now:t.valueMaxPct-t.valueMinPct,max:r})]});return e.jsx(A,{index:n,name:t.name,bar:a,stat:t})},A=({index:t,name:n,bar:r,stat:a})=>{const[o,s]=w([]),l=a?{}:{fontWeight:"bold",color:"#198754"},p=a?`${a.valueMidPct.toFixed(1)}%`:"-",h=()=>{if(o.length!==0){s([]);return}const m=[],u=d=>d%1===0?`£${d}`:`£${d.toFixed(2)}`;if(a){if(a.valueMaxPct){const d=100/a.valueMaxPct;m.push(`Buy at ${a.valueMaxPct.toFixed(1)}%: ${u(1)} now (for ${u(d)} return = ${u(d-1)} profit)`)}if(a.valueMinPct){const d=100/a.valueMinPct;m.push(`Sell at ${a.valueMinPct.toFixed(1)}%: ${u(d-1)} now (for ${u(d)} return = ${u(1)} profit)`)}}s(m)};return e.jsxs("tr",{children:[e.jsx("td",{width:"5%",style:{textAlign:"right",paddingRight:"1rem"},children:t}),e.jsx("td",{width:"35%",style:{...l,textAlign:"left"},children:n}),e.jsx("td",{width:"5%",style:{textAlign:a?"right":"center",fontWeight:"bold",paddingRight:"1rem"},children:p}),e.jsx("td",{width:"35%",children:r}),e.jsx("td",{width:"20%",onClick:h,children:a!=null&&a.valueSpreadPct&&o.length===0?e.jsx(v,{style:{borderRadius:"3px"},variant:"dark",now:a.valueSpreadPct,label:`${a.valueMinPct.toFixed(1)}% to ${a.valueMaxPct.toFixed(1)}%`}):e.jsx(e.Fragment,{children:o.map((m,u)=>e.jsx("p",{style:{margin:"0",fontSize:"0.7rem"},children:m},u))})})]})},me=({totalMinPct:t,totalMidPct:n,totalMaxPct:r,totalSpeardPct:a,numPossibleNewWinners:o})=>{const s=o<2?"":`${o} spots left`;return e.jsxs("tr",{className:"table-light",children:[e.jsx("td",{width:"5%"}),e.jsx("td",{width:"35%",style:{textAlign:"left"},children:"TOTAL"}),e.jsxs("td",{width:"5%",style:{fontWeight:"bold",textAlign:"right",paddingRight:"1rem"},children:[n.toFixed(1),"%"]}),e.jsx("td",{width:"35%",children:s}),e.jsx("td",{width:"20%",children:e.jsx(v,{style:{borderRadius:"3px"},variant:"dark",now:a,label:`${t.toFixed(1)}% to ${r.toFixed(1)}%`})})]})};W.createRoot(document.getElementById("root")).render(e.jsx(z.StrictMode,{children:e.jsx(O,{children:e.jsx(ae,{})})}));
