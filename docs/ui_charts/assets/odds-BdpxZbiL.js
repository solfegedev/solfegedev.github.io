var F=Object.defineProperty;var L=(t,n,a)=>n in t?F(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a;var R=(t,n,a)=>L(t,typeof n!="symbol"?n+"":n,a);import{j as e,c as W}from"./client-B8KsQLkO.js";import{C as O}from"./CookieConsentWrapper-BX3Mx7Xo.js";import*as _ from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import z,{cloneElement as U,useState as w,useRef as Y,useEffect as $}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{c as G}from"./clipboard-nCoCNLhi.js";import{A as H}from"./Comps-BT2nj_kh.js";import{B as y}from"./Badge-5hhE3xTi.js";import{u as K,c as A,B as J}from"./Button-Dbum-Du3.js";import{m as q}from"./ElementChildren-AZvnq_HE.js";import{T as Q}from"./Table-D95Yq_LC.js";import{N as M,a as X,b as N}from"./NavDropdown-B6vjD2zC.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./CloseButton-CUYUvxPi.js";import"./Dropdown-BtRWb2wP.js";const E=1e3;function V(t,n,a){const r=(t-n)/(a-n)*100;return Math.round(r*E)/E}function B({min:t,now:n,max:a,label:r,visuallyHidden:o,striped:s,animated:c,className:x,style:h,variant:m,bsPrefix:u,...d},f){return e.jsx("div",{ref:f,...d,role:"progressbar",className:A(x,`${u}-bar`,{[`bg-${m}`]:m,[`${u}-bar-animated`]:c,[`${u}-bar-striped`]:c||s}),style:{width:`${V(n,t,a)}%`,...h},"aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":a,children:o?e.jsx("span",{className:"visually-hidden",children:r}):r})}const v=_.forwardRef(({isChild:t=!1,...n},a)=>{const r={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(r.bsPrefix=K(r.bsPrefix,"progress"),t)return B(r,a);const{min:o,now:s,max:c,label:x,visuallyHidden:h,striped:m,animated:u,bsPrefix:d,variant:f,className:I,children:i,...l}=r;return e.jsx("div",{ref:a,...l,className:A(I,d),children:i?q(i,g=>U(g,{isChild:!0})):B({min:o,now:s,max:c,label:x,visuallyHidden:h,striped:m,animated:u,bsPrefix:d,variant:f},a)})});v.displayName="ProgressBar";const k=[{section:"Politics USA"},{name:"Winning Party (5 Nov 2024)",marketID:"1.178176964"},{name:"President (5 Nov 2024)",marketID:"1.176878927"},{name:"Popular vote (5 Nov 2024)",marketID:"1.178165812"},{name:"Joe Biden impeached before election (5 Nov 2024)",marketID:"1.218257169"},{name:"Senate Election (5 Nov 2024)",marketID:"1.225479090"},{section:"Politics UK"},{name:"Next leader - Conservative (2 Nov 2024)",marketID:"1.205526560"},{name:"Next leader - Labour",marketID:"1.170273835"},{name:"Next leader - Lib Dem",marketID:"1.179233218"},{name:"Scotish referendum year (Jan 2025)",marketID:"1.166577732"},{section:"Football"},{name:"Next England Manager",marketID:"1.230779778"},{name:"Premier league Winner (25 May 2025)",marketID:"1.229393468"},{name:"Premier league Top 2 (25 May 2025)",marketID:"1.229394015"},{name:"Premier league Top 4 (25 May 2025)",marketID:"1.229606213"},{name:"Premier league Top 6 (25 May 2025)",marketID:"1.229393514"},{name:"Premier league relegation (25 May 2025)",marketID:"1.229393513"},{name:"Championship Winner (3 May 2025)",marketID:"1.229569552"},{name:"Championship Promotion (3 May 2025)",marketID:"1.229570516"},{name:"League 1 Winner ( 2025)",marketID:"1.229617221"},{name:"League 2 Winner ( 2025)",marketID:"1.229617391"},{name:"UEFA: Champions league Winner (31 May 2025)",marketID:"1.232067673"},{name:"UEFA: Europa League - Winner 2024/25 (21 May 2025)",marketID:"1.232484770"},{name:"Ballon d'Or Winner (28 Oct 2024)",marketID:"1.224804770"},{name:"World Cup (19 July 2026)",marketID:"1.207848678"},{name:"Man City v Arsenal (16:30 on 22 Sep 2024)",marketID:"1.232494601"},{section:"F1"},{name:"F1 - 2024 Driver (8 Dec 2024)",marketID:"1.221826202"},{name:"F1 - 2024 Constructor (8 Dec 2024)",marketID:"1.221826203"},{section:"Misc"},{name:"BBC Sports Personality of the Year (21 Dec 2024)",marketID:"1.222864253"},{name:"Rugby Six Nations Winner (15 Mar 2025)",marketID:"1.226293611"},{name:"Eurovision winner (17 May 2025)",marketID:"1.231775910"}];class S{constructor(){R(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getMarketID(){const n=this.searchParams.get("marketid")??localStorage.getItem("odds_marketid")??k[1].marketID;return localStorage.setItem("odds_marketid",n),n}}const Z=async t=>{const n="https://ero.betfair.com/www/sports/exchange/readonly/v1/bymarket",a={rollupLimit:"10",rollupModel:"STAKE",currencyCode:"GBP",locale:"en_GB",marketIds:t,types:["MARKET_STATE","MARKET_DESCRIPTION","RUNNER_DESCRIPTION","RUNNER_EXCHANGE_PRICES_BEST","RUNNER_STATE"].join(",")};return fetch(n+"?"+new URLSearchParams(a).toString()).then(r=>r.json()).then(r=>{const o=r.eventTypes[0].eventNodes[0].marketNodes[0];return console.log(o),o})},ee=t=>new Date(t).toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),te=()=>{const[t,n]=w(!0),a=new S().getMarketID(),r=k.filter(s=>"marketID"in s&&s.marketID===a).pop()??{name:"???",marketID:a};if(!r)return null;const o=s=>{n(s)};return e.jsxs(M,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:o,expanded:t,children:[e.jsx(M.Brand,{children:"Odds"}),e.jsx(M.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(M.Collapse,{id:"basic-navbar-nav",children:e.jsx(X,{className:"ms-auto me-auto",children:e.jsx(N,{title:r.name,active:!0,children:e.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:k.map((s,c)=>"section"in s?e.jsx(ne,{divider:s},c):e.jsx(ae,{market:s,isActive:s.marketID===a},c))})})})})]})},ne=({divider:t})=>e.jsxs(e.Fragment,{children:[e.jsx(N.Divider,{}),e.jsx("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"1.2rem",marginTop:"0.2rem",marginBottom:0},children:t.section})]}),ae=({market:t,isActive:n})=>{const a=Y(null);$(()=>{var o;if(n){const s=a.current,c=s.parentElement,x=((o=c.querySelector(".dropdown-item"))==null?void 0:o.offsetTop)||0;console.log(`Move selected element to target Y=${x}`);const h=s.offsetTop;c.scrollTop=Math.max(0,h-x)}});const r=o=>{const s=new S().searchParams;return s.set("marketid",o),"?"+s.toString()};return e.jsx(N.Item,{ref:a,href:r(t.marketID),style:{padding:"0 1rem"},active:n,children:t.name})},re=()=>{const t=new S().getMarketID(),n=k.filter(a=>"marketID"in a&&a.marketID===t).pop()??{name:"???",marketID:t};return se(e.jsx(ie,{market:n}))},se=t=>e.jsxs(e.Fragment,{children:[e.jsx(te,{}),e.jsx("main",{children:t})]}),ie=({market:t})=>{const[n,a]=w(null);if($(()=>{(async function(){const s=await Z(t.marketID);a(s)})()},[t.marketID]),n===null)return e.jsx("p",{children:"Loading..."});const r=n.runners.filter(s=>s.state.status==="WINNER").map(s=>s.description.runnerName);r.sort();const o="https://www.betfair.com/exchange/plus/politics/market/"+t.marketID;return e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:"1.5rem"},children:e.jsx(H,{href:o,children:n.description.marketName})}),n.state.status!=="OPEN"&&e.jsx("h3",{children:e.jsx(y,{bg:"danger",pill:!0,children:n.state.status})}),r.length>0&&e.jsxs("p",{children:[e.jsx("strong",{children:r.length})," won: ",e.jsx("strong",{children:r.join(", ")})]}),n.state.numberOfActiveRunners>0&&e.jsxs(e.Fragment,{children:[n.state.inplay&&e.jsx("h3",{children:e.jsx(y,{bg:"warning",pill:!0,children:"currently in play"})}),e.jsx(oe,{marketData:n,winners:r})," "]})]})},oe=({marketData:t,winners:n})=>{const a=t.runners.map(i=>le(i)).filter(i=>!i.isDiscarded),r=Math.log10(t.runners.map(i=>{var j,p,P,T;const l=((p=(j=i.exchange.availableToBack)==null?void 0:j.at(0))==null?void 0:p.size)??0,g=((T=(P=i.exchange.availableToLay)==null?void 0:P.at(0))==null?void 0:T.size)??0;return l===0||g===0?0:l+g}).reduce((i,l)=>i+l,0));a.length===2&&ce(a[0],a[1]),a.sort((i,l)=>l.valueMinPct-i.valueMinPct);const o=a.filter(i=>i.isDisplayed),s=a.filter(i=>!i.isDisplayed),c=b(a.map(i=>i.valueMinPct)),x=b(a.map(i=>i.valueMidPct)),h=b(a.map(i=>i.valueMaxPct)),m=100*c/h,u=Math.max(...o.map(i=>i.valueMaxPct)),d=t.runners.filter(i=>i.state.status==="WINNER").length,f=t.runners.filter(i=>i.state.status==="LOSER").length,I=()=>{const i=n.map(p=>`-   done : ${p}`),l=o.map(p=>`-${p.valueMidPct.toFixed(1).padStart(6)}% : ${p.name}`),g=i.concat(l).join(`
`),j=`
${t.description.marketName}:
${g}

`;G(j)};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-secondary",children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{children:"Mid %"}),e.jsx("th",{children:"Probability"}),e.jsx("th",{children:"Confidence"})]})}),e.jsxs("tbody",{children:[e.jsx(me,{totalMinPct:c,totalMidPct:x,totalMaxPct:h,totalSpeardPct:m,numPossibleNewWinners:t.state.numberOfWinners}),n.map((i,l)=>e.jsx(C,{index:l+1,name:i},l)),o.map((i,l)=>e.jsx(de,{stat:i,index:l+n.length+1,maxval:u},l))]})]}),e.jsxs("p",{children:["Overall Confidence:"," ",e.jsxs(y,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:[m.toFixed(2),"%"]})," ","with availability:"," ",e.jsx(y,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:r.toFixed(1)})]}),e.jsxs("p",{children:[e.jsx("strong",{children:d})," Won +"," ",e.jsx("strong",{children:t.state.numberOfActiveRunners})," Active +"," ",e.jsx("strong",{children:f})," Lost = ",e.jsx("strong",{children:t.state.numberOfRunners})," ","Total"]}),t.description.bettingType!=="ODDS"&&e.jsxs("p",{children:["betting type: ",e.jsx("strong",{children:ee(t.description.bettingType)})]}),e.jsx("p",{children:e.jsx(J,{variant:"dark",onClick:I,children:"Copy to clipboard"})}),s.length>0&&e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[s.length," other active but improbable option",s.length>1&&"s",":"]}),e.jsx("p",{className:"x-shadow",style:{margin:"auto",padding:"1rem",maxHeight:"10rem",overflowY:"scroll"},children:s.map((i,l)=>`${o.length+l+1+d}: ${i.name}`).join(", ")})]}),!t.isMarketDataDelayed&&e.jsx("p",{children:"Data NOT delayed"})]})},le=t=>{var h,m;const n=(h=t.exchange.availableToBack)!=null&&h.length?t.exchange.availableToBack[0]:{price:1,size:1},a=(m=t.exchange.availableToLay)!=null&&m.length?t.exchange.availableToLay[0]:{price:2e3,size:1},r=a.size/(a.size+n.size),o=100/a.price,s=100/n.price,c=D(o,s,r),x=100*(n.price/a.price);return{name:t.description.runnerName==="The Draw"?"draw":t.description.runnerName,valueMinPct:o,valueMidPct:c,valueMaxPct:s,valueSpreadPct:x,biasTowardsBack:r,isDiscarded:n.price===1&&a.price===2e3,isDisplayed:o>=.5}},ce=(t,n)=>{t.valueMaxPct>100-n.valueMinPct?t.valueMaxPct=100-n.valueMinPct:n.valueMinPct=100-t.valueMaxPct,t.valueMinPct<100-n.valueMaxPct?t.valueMinPct=100-n.valueMaxPct:n.valueMaxPct=100-t.valueMinPct,t.valueMidPct=D(t.valueMinPct,t.valueMaxPct,t.biasTowardsBack),n.valueMidPct=D(n.valueMinPct,n.valueMaxPct,n.biasTowardsBack);const a=100/(t.valueMidPct+n.valueMidPct);t.valueMidPct*=a,n.valueMidPct*=a},D=(t,n,a)=>{const r=Math.log(t),o=Math.log(n),s=r+(o-r)*a;return Math.exp(s)},b=t=>{let n=0;return t.forEach(a=>{n+=a}),n},de=({stat:t,index:n,maxval:a})=>{const r=e.jsxs(v,{style:{borderRadius:"3px",backgroundColor:"#fff"},children:[e.jsx(v,{variant:"success",now:t.valueMinPct,max:a}),e.jsx(v,{variant:"info",now:t.valueMaxPct-t.valueMinPct,max:a})]});return e.jsx(C,{index:n,name:t.name,bar:r,stat:t})},C=({index:t,name:n,bar:a,stat:r})=>{const[o,s]=w([]),c=r?{}:{fontWeight:"bold",color:"#198754"},x=r?`${r.valueMidPct.toFixed(1)}%`:"-",h=()=>{if(o.length!==0){s([]);return}const m=[],u=d=>d%1===0?`£${d}`:`£${d.toFixed(2)}`;if(r){if(r.valueMaxPct){const d=100/r.valueMaxPct;m.push(`Buy at ${r.valueMaxPct.toFixed(1)}%: ${u(1)} now, for ${u(d)} return (${u(d-1)} profit)`)}if(r.valueMinPct){const d=100/r.valueMinPct;m.push(`Sell at ${r.valueMinPct.toFixed(1)}%: ${u(d-1)} now, for ${u(d)} return (${u(1)} profit)`)}}s(m)};return e.jsxs("tr",{children:[e.jsx("td",{width:"5%",style:{textAlign:"right",paddingRight:"1rem"},children:t}),e.jsx("td",{width:"35%",style:{...c,textAlign:"left"},children:n}),e.jsx("td",{width:"5%",style:{textAlign:r?"right":"center",fontWeight:"bold",paddingRight:"1rem"},children:x}),e.jsx("td",{width:"35%",children:a}),e.jsx("td",{width:"20%",onClick:h,children:r!=null&&r.valueSpreadPct&&o.length===0?e.jsx(v,{style:{borderRadius:"3px"},variant:"dark",now:r.valueSpreadPct,label:`${r.valueMinPct.toFixed(1)}% to ${r.valueMaxPct.toFixed(1)}%`}):o.length>0&&e.jsx("ul",{style:{textAlign:"left",margin:"0",fontSize:"0.7rem"},children:o.map((m,u)=>e.jsx("li",{children:m},u))})})]})},me=({totalMinPct:t,totalMidPct:n,totalMaxPct:a,totalSpeardPct:r,numPossibleNewWinners:o})=>{const s=o<2?"":`${o} spots left`;return e.jsxs("tr",{className:"table-light",children:[e.jsx("td",{width:"5%"}),e.jsx("td",{width:"35%",style:{textAlign:"left"},children:"TOTAL"}),e.jsxs("td",{width:"5%",style:{fontWeight:"bold",textAlign:"right",paddingRight:"1rem"},children:[n.toFixed(1),"%"]}),e.jsx("td",{width:"35%",children:s}),e.jsx("td",{width:"20%",children:e.jsx(v,{style:{borderRadius:"3px"},variant:"dark",now:r,label:`${t.toFixed(1)}% to ${a.toFixed(1)}%`})})]})};W.createRoot(document.getElementById("root")).render(e.jsx(z.StrictMode,{children:e.jsx(O,{children:e.jsx(re,{})})}));
