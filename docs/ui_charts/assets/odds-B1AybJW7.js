var L=Object.defineProperty;var O=(t,n,r)=>n in t?L(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r;var S=(t,n,r)=>O(t,typeof n!="symbol"?n+"":n,r);import{j as e,c as _}from"./client-B8KsQLkO.js";import{C as z}from"./CookieConsentWrapper-CRJKL-6e.js";import*as C from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import U,{cloneElement as G,useState as B,useRef as Y,useEffect as A}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{B as M}from"./Badge-D46Cu9qn.js";import{u as F,c as N,B as H}from"./Button-20q6oNEn.js";import{m as K}from"./ElementChildren-AZvnq_HE.js";import{N as k,a as J,b as w}from"./NavDropdown-C8VDN9yD.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dropdown-BFpiP_Qs.js";const E=1e3;function q(t,n,r){const a=(t-n)/(r-n)*100;return Math.round(a*E)/E}function $({min:t,now:n,max:r,label:a,visuallyHidden:o,striped:s,animated:c,className:h,style:m,variant:u,bsPrefix:p,...d},x){return e.jsx("div",{ref:x,...d,role:"progressbar",className:N(h,`${p}-bar`,{[`bg-${u}`]:u,[`${p}-bar-animated`]:c,[`${p}-bar-striped`]:c||s}),style:{width:`${q(n,t,r)}%`,...m},"aria-valuenow":n,"aria-valuemin":t,"aria-valuemax":r,children:o?e.jsx("span",{className:"visually-hidden",children:a}):a})}const j=C.forwardRef(({isChild:t=!1,...n},r)=>{const a={min:0,max:100,animated:!1,visuallyHidden:!1,striped:!1,...n};if(a.bsPrefix=F(a.bsPrefix,"progress"),t)return $(a,r);const{min:o,now:s,max:c,label:h,visuallyHidden:m,striped:u,animated:p,bsPrefix:d,variant:x,className:v,children:i,...l}=a;return e.jsx("div",{ref:r,...l,className:N(v,d),children:i?K(i,f=>G(f,{isChild:!0})):$({min:o,now:s,max:c,label:h,visuallyHidden:m,striped:u,animated:p,bsPrefix:d,variant:x},r)})});j.displayName="ProgressBar";const Q=C.forwardRef(({bsPrefix:t,className:n,striped:r,bordered:a,borderless:o,hover:s,size:c,variant:h,responsive:m,...u},p)=>{const d=F(t,"table"),x=N(n,d,h&&`${d}-${h}`,c&&`${d}-${c}`,r&&`${d}-${typeof r=="string"?`striped-${r}`:"striped"}`,a&&`${d}-bordered`,o&&`${d}-borderless`,s&&`${d}-hover`),v=e.jsx("table",{...u,className:x,ref:p});if(m){let i=`${d}-responsive`;return typeof m=="string"&&(i=`${i}-${m}`),e.jsx("div",{className:i,children:v})}return v}),b=[{section:"Politics USA"},{name:"Winning Party (5 Nov 2024)",marketID:"1.178176964"},{name:"President (5 Nov 2024)",marketID:"1.176878927"},{name:"Popular vote (5 Nov 2024)",marketID:"1.178165812"},{name:"Joe Biden impeached before election (5 Nov 2024)",marketID:"1.218257169"},{name:"Senate Election (5 Nov 2024)",marketID:"1.225479090"},{section:"Politics UK"},{name:"Next leader - Conservative (2 Nov 2024)",marketID:"1.205526560"},{name:"Next leader - Labour",marketID:"1.170273835"},{name:"Next leader - Lib Dem",marketID:"1.179233218"},{name:"Scotish referendum year (Jan 2025)",marketID:"1.166577732"},{section:"Football"},{name:"Next England Manager",marketID:"1.230779778"},{name:"Premiership Winner (25 May 2025)",marketID:"1.229393468"},{name:"Premiership Top 2 (25 May 2025)",marketID:"1.229394015"},{name:"Premiership Top 4 (25 May 2025)",marketID:"1.229606213"},{name:"Premiership Top 6 (25 May 2025)",marketID:"1.229393514"},{name:"Premiership relegation (25 May 2025)",marketID:"1.229393513"},{name:"Championship Winner (3 May 2025)",marketID:"1.229569552"},{name:"Championship Promotion (3 May 2025)",marketID:"1.229570516"},{name:"Champions league Winner (31 May 2025)",marketID:"1.232067673"},{name:"Ballon d'Or Winner (28 Oct 2024)",marketID:"1.224804770"},{name:"World Cup (19 July 2026)",marketID:"1.207848678"},{section:"F1"},{name:"F1 - 2024 Driver (8 Dec 2024)",marketID:"1.221826202"},{name:"F1 - 2024 Constructor (8 Dec 2024)",marketID:"1.221826203"},{section:"Misc"},{name:"BBC Sports Personality of the Year (21 Dec 2024)",marketID:"1.222864253"},{name:"Rugby Six Nations Winner (15 Mar 2025)",marketID:"1.226293611"}];class T{constructor(){S(this,"searchParams");this.searchParams=new URLSearchParams(window.location.search)}getMarketID(){return this.searchParams.get("marketid")??b[1].marketID}}const X=async t=>{const n="https://ero.betfair.com/www/sports/exchange/readonly/v1/bymarket",r={rollupLimit:"10",rollupModel:"STAKE",currencyCode:"GBP",locale:"en_GB",marketIds:t,types:["MARKET_STATE","MARKET_DESCRIPTION","RUNNER_DESCRIPTION","RUNNER_EXCHANGE_PRICES_BEST","RUNNER_STATE"].join(",")};return fetch(n+"?"+new URLSearchParams(r).toString()).then(a=>a.json()).then(a=>{const o=a.eventTypes[0].eventNodes[0].marketNodes[0];return console.log(o),o})},V=t=>{const n=document.createElement("textarea");n.textContent=t,document.body.appendChild(n),n.select();try{return document.execCommand("copy")}catch(r){console.warn("Copy to clipboard failed.",r)}finally{document.body.removeChild(n)}},Z=t=>new Date(t).toLocaleString("en-GB",{year:"numeric",month:"short",day:"2-digit",weekday:"long",hour:"2-digit",minute:"2-digit"}),ee=()=>{const[t,n]=B(!0),r=new T().getMarketID(),a=b.filter(s=>"marketID"in s&&s.marketID===r).pop()??{name:"???",marketID:r};if(!a)return null;const o=s=>{n(s)};return e.jsxs(k,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:o,expanded:t,children:[e.jsx(k.Toggle,{"aria-controls":"basic-navbar-nav"}),e.jsx(k.Collapse,{id:"basic-navbar-nav",children:e.jsx(J,{className:"ms-auto me-auto",children:e.jsx(w,{title:a.name,children:e.jsx("div",{style:{maxHeight:"50vh",overflowY:"auto"},children:b.map((s,c)=>"section"in s?e.jsx(te,{divider:s},c):e.jsx(ne,{market:s,isActive:s.marketID===r},c))})})})})]})},te=({divider:t})=>e.jsxs(e.Fragment,{children:[e.jsx(w.Divider,{}),e.jsx("p",{style:{textAlign:"center",fontWeight:"bold",fontSize:"1.2rem",marginTop:"0.2rem",marginBottom:0},children:t.section})]}),ne=({market:t,isActive:n})=>{const r=Y(null);A(()=>{var o;if(n){const s=r.current,c=s.parentElement,h=((o=c.querySelector(".dropdown-item"))==null?void 0:o.offsetTop)||0;console.log(`Move selected element to target Y=${h}`);const m=s.offsetTop;c.scrollTop=Math.max(0,m-h)}});const a=o=>{const s=new T().searchParams;return s.set("marketid",o),"?"+s.toString()};return e.jsx(w.Item,{ref:r,href:a(t.marketID),style:{padding:"0 1rem"},active:n,children:t.name})},re=()=>{const t=new T().getMarketID(),n=b.filter(r=>"marketID"in r&&r.marketID===t).pop()??{name:"???",marketID:t};return ae(e.jsx(se,{market:n}))},ae=t=>e.jsxs(e.Fragment,{children:[e.jsx(ee,{}),e.jsx("main",{children:t})]}),se=({market:t})=>{const[n,r]=B(null);if(A(()=>{(async function(){const s=await X(t.marketID);r(s)})()},[t.marketID]),n===null)return e.jsx("p",{children:"Loading..."});const a=n.runners.filter(s=>s.state.status==="WINNER").map(s=>s.description.runnerName);a.sort();const o="https://www.betfair.com/exchange/plus/market/"+t.marketID;return e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:"1.5rem"},children:e.jsx("a",{href:o,target:"_blank",children:n.description.marketName})}),n.state.status!=="OPEN"&&e.jsx("h3",{children:e.jsx(M,{bg:"danger",pill:!0,children:n.state.status})}),a.length>0&&e.jsxs("p",{children:[e.jsx("strong",{children:a.length})," won: ",e.jsx("strong",{children:a.join(", ")})]}),n.state.numberOfActiveRunners>0&&e.jsxs(e.Fragment,{children:[n.state.inplay&&e.jsx("h3",{children:e.jsx(M,{bg:"warning",pill:!0,children:"currently in play"})}),e.jsx(ie,{marketData:n,winners:a})," "]})]})},ie=({marketData:t,winners:n})=>{const r=t.runners.map(i=>oe(i)).filter(i=>!i.isDiscarded),a=Math.log10(t.runners.map(i=>{var P,g,y,R;const l=((g=(P=i.exchange.availableToBack)==null?void 0:P.at(0))==null?void 0:g.size)??0,f=((R=(y=i.exchange.availableToLay)==null?void 0:y.at(0))==null?void 0:R.size)??0;return l===0||f===0?0:l+f}).reduce((i,l)=>i+l,0));r.length===2&&ce(r[0],r[1]),r.sort((i,l)=>l.valueMinPct-i.valueMinPct);const o=r.filter(i=>i.isDisplayed),s=r.filter(i=>!i.isDisplayed),c=I(r.map(i=>i.valueMinPct)),h=I(r.map(i=>i.valueMidPct)),m=I(r.map(i=>i.valueMaxPct)),u=100*c/m,p=Math.max(...o.map(i=>i.valueMaxPct)),d=t.runners.filter(i=>i.state.status==="WINNER").length,x=t.runners.filter(i=>i.state.status==="LOSER").length,v=()=>{const i=n.map(g=>`-   done : ${g}`),l=o.map(g=>`-${g.valueMinPct.toFixed(1).padStart(6)}% : ${g.name}`),f=i.concat(l).join(`
`),P=`
${t.description.marketName}:
${f}

`;V(P)};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{responsive:!0,children:[e.jsx("thead",{children:e.jsxs("tr",{className:"table-secondary",children:[e.jsx("th",{}),e.jsx("th",{}),e.jsx("th",{children:"Mid %"}),e.jsx("th",{children:"Probability"}),e.jsx("th",{children:"Confidence"})]})}),e.jsxs("tbody",{children:[e.jsx(de,{totalMinPct:c,totalMidPct:h,totalMaxPct:m,totalSpeardPct:u,numPossibleNewWinners:t.state.numberOfWinners}),n.map((i,l)=>e.jsx(W,{index:l+1,name:i},l)),o.map((i,l)=>e.jsx(le,{stat:i,index:l+n.length+1,maxval:p},l))]})]}),e.jsxs("p",{children:["Overall Confidence:"," ",e.jsxs(M,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:[u.toFixed(2),"%"]})," ","with availability:"," ",e.jsx(M,{bg:"info",text:"dark",pill:!0,style:{fontSize:"1rem"},children:a.toFixed(1)})]}),e.jsxs("p",{children:[e.jsx("strong",{children:d})," Won +"," ",e.jsx("strong",{children:t.state.numberOfActiveRunners})," Active +"," ",e.jsx("strong",{children:x})," Lost = ",e.jsx("strong",{children:t.state.numberOfRunners})," ","Total"]}),t.description.bettingType!=="ODDS"&&e.jsxs("p",{children:["betting type: ",e.jsx("strong",{children:Z(t.description.bettingType)})]}),e.jsx("p",{children:e.jsx(H,{variant:"dark",onClick:v,children:"Copy to clipboard"})}),s.length>0&&e.jsxs("p",{children:[s.length," other active option",s.length>1&&"s"," (very improbable):"," ",s.map((i,l)=>`${o.length+l+1+d}: ${i.name}`).join(", ")]}),!t.isMarketDataDelayed&&e.jsx("p",{children:"Data NOT delayed"})]})},oe=t=>{var m,u;const n=(m=t.exchange.availableToBack)!=null&&m.length?t.exchange.availableToBack[0]:{price:1,size:1},r=(u=t.exchange.availableToLay)!=null&&u.length?t.exchange.availableToLay[0]:{price:2e3,size:1},a=r.size/(r.size+n.size),o=100/r.price,s=100/n.price,c=D(o,s,a),h=100*(n.price/r.price);return{name:t.description.runnerName==="The Draw"?"draw":t.description.runnerName,valueMinPct:o,valueMidPct:c,valueMaxPct:s,valueSpreadPct:h,biasTowardsBack:a,isDiscarded:n.price===1&&r.price===2e3,isDisplayed:o>=.5}},ce=(t,n)=>{t.valueMaxPct>100-n.valueMinPct?t.valueMaxPct=100-n.valueMinPct:n.valueMinPct=100-t.valueMaxPct,t.valueMinPct<100-n.valueMaxPct?t.valueMinPct=100-n.valueMaxPct:n.valueMaxPct=100-t.valueMinPct,t.valueMidPct=D(t.valueMinPct,t.valueMaxPct,t.biasTowardsBack),n.valueMidPct=D(n.valueMinPct,n.valueMaxPct,n.biasTowardsBack);const r=100/(t.valueMidPct+n.valueMidPct);t.valueMidPct*=r,n.valueMidPct*=r},D=(t,n,r)=>{const a=Math.log(t),o=Math.log(n),s=a+(o-a)*r;return Math.exp(s)},I=t=>{let n=0;return t.forEach(r=>{n+=r}),n},le=({stat:t,index:n,maxval:r})=>{const a=e.jsxs(j,{style:{borderRadius:"3px",backgroundColor:"#fff"},children:[e.jsx(j,{variant:"success",now:t.valueMinPct,max:r}),e.jsx(j,{variant:"info",now:t.valueMaxPct-t.valueMinPct,max:r})]});return e.jsx(W,{index:n,name:t.name,bar:a,stat:t})},W=({index:t,name:n,bar:r,stat:a})=>{const o=a?{}:{fontWeight:"bold",color:"#198754"},s=a?`${a.valueMidPct.toFixed(1)}%`:"-";return e.jsxs("tr",{children:[e.jsx("td",{width:"5%",style:{textAlign:"right",paddingRight:"1rem"},children:t}),e.jsx("td",{width:"35%",style:{...o,textAlign:"left"},children:n}),e.jsx("td",{width:"5%",style:{textAlign:a?"right":"center",fontWeight:"bold",paddingRight:"1rem"},children:s}),e.jsx("td",{width:"35%",children:r}),e.jsx("td",{width:"20%",children:(a==null?void 0:a.valueSpreadPct)&&e.jsx(j,{style:{borderRadius:"3px"},variant:"dark",now:a.valueSpreadPct,label:`${a.valueMinPct.toFixed(1)}% to ${a.valueMaxPct.toFixed(1)}%`})})]})},de=({totalMinPct:t,totalMidPct:n,totalMaxPct:r,totalSpeardPct:a,numPossibleNewWinners:o})=>{const s=o<2?"":`${o} spots left`;return e.jsxs("tr",{className:"table-light",children:[e.jsx("td",{width:"5%"}),e.jsx("td",{width:"35%",style:{textAlign:"left"},children:"TOTAL"}),e.jsxs("td",{width:"5%",style:{fontWeight:"bold",textAlign:"right",paddingRight:"1rem"},children:[n.toFixed(1),"%"]}),e.jsx("td",{width:"35%",children:s}),e.jsx("td",{width:"20%",children:e.jsx(j,{style:{borderRadius:"3px"},variant:"dark",now:a,label:`${t.toFixed(1)}% to ${r.toFixed(1)}%`})})]})};_.createRoot(document.getElementById("root")).render(e.jsx(U.StrictMode,{children:e.jsx(z,{children:e.jsx(re,{})})}));