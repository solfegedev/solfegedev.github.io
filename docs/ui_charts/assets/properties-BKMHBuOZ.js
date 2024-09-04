import{j as s,c as hs}from"./client-B8KsQLkO.js";import{C as xs}from"./CookieConsentWrapper-CRJKL-6e.js";import*as O from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import fs,{useRef as T,useEffect as L,useMemo as He,useState as v,useCallback as E,useImperativeHandle as ms}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{g as te,s as js,a as Ee}from"./store-C6W4SrBE.js";import{B as ee}from"./Badge-D46Cu9qn.js";import{b as gs,u as _s,c as ws,a as Fe,t as ys,T as vs,e as Ns,A as Pe,D as ce,C as le}from"./Dropdown-BFpiP_Qs.js";import{u as Ss,N as fe,a as Cs,b as Te}from"./NavDropdown-C8VDN9yD.js";import{u as ne,c as V,a as ks,b as bs,d as Is}from"./Button-20q6oNEn.js";import{f as $s,m as Le}from"./ElementChildren-AZvnq_HE.js";import{C as Ds,a as Me,B as ie,F as H,D as zs}from"./Form-C0sMV8xW.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./_commonjsHelpers-Cpj98o6Y.js";const ge=24*3600*1e3;let ye=new Date;const de=e=>{const t=new Date(e),n={day:"numeric",month:"short",year:"numeric"},r=ye.valueOf()-t.valueOf();return r<14*ge&&(n.weekday="long"),r<2*ge&&(n.hour="numeric",n.minute="numeric"),t.toLocaleDateString("en-GB",n)},As=e=>{const t=new Date(e),n={day:"numeric",month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",n)},Ue=e=>{const t=new Date(e),n={month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",n)},me=e=>{const t=new Date(e);return((ye.valueOf()-t.valueOf())/ge).toLocaleString("en-GB",{maximumFractionDigits:1})},Re=(e,t=!1)=>{if(e===void 0)return"";const n=new Date(e),r=ye.valueOf()-n.valueOf();let a=(t?-r:r)/6e4;const l=a<0?"-":"";a=Math.abs(a);const p=Math.floor(a/60),o=Math.floor(a%60).toLocaleString("en-GB",{minimumIntegerDigits:2});return`${l}${p}h${o}m`},U=e=>new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",maximumFractionDigits:0}).format(e),Es=(e,t)=>s.jsxs(s.Fragment,{children:[e,", ",t]}),F=(e,t)=>s.jsxs(s.Fragment,{children:[e," ◆ ",t]}),m=({icon:e,text:t,url:n=""})=>{const r=n?s.jsx("a",{rel:"noreferrer",target:"_blank",href:n,children:t}):t;return s.jsxs("span",{className:"x-nowrap",children:[e," ",r]})},re=({isLink:e=!1,style:t={}})=>s.jsx(ve,{src:"img/properties/r.ico",isLink:e,style:t}),W=({isLink:e=!1,style:t={}})=>s.jsx(ve,{src:"img/properties/z.ico",isLink:e,style:t}),We=({isLink:e=!1,style:t={}})=>s.jsx(ve,{src:"img/properties/o.ico",isLink:e,style:t}),ve=({isLink:e=!1,style:t={},src:n})=>(t.width=e?"1.4rem":"1rem",s.jsx("img",{loading:"lazy",referrerPolicy:"no-referrer",crossOrigin:"anonymous",src:n,style:t,alt:"z Property"})),Fs=({item:e})=>{const t=[s.jsx(Ps,{item:e},"1")];return e.zoopla_advert_id&&t.push(s.jsx(Ze,{item:e},"2")),e.zoopla_uprn&&t.push(s.jsx(Ts,{item:e},"3")),e.epcs&&t.push(s.jsx(Ls,{item:e},"4")),s.jsxs("p",{children:[s.jsx("strong",{children:"Links:"})," ",t.reduce(F)]})},Ze=({item:e})=>{const n=`https://www.zoopla.co.uk/${e.channel==="rent"?"to-rent":"for-sale"}/details/${e.zoopla_advert_id}/`;return s.jsx(m,{icon:s.jsx(W,{}),url:n,text:"Advert"})},Ps=({item:e})=>{const t=`https://www.rightmove.co.uk/properties/${e.id}#/?channel=${e.channel}`;return s.jsx(m,{icon:s.jsx(re,{}),url:t,text:"Advert"})},Ts=({item:e})=>{const t=`https://www.zoopla.co.uk/property/uprn/${e.zoopla_uprn}/`;return s.jsx(m,{icon:s.jsx(W,{}),url:t,text:"Estimate"})},Ls=({item:e})=>s.jsxs(s.Fragment,{children:[s.jsx(re,{})," ",e.epcs.map((t,n)=>s.jsx("a",{rel:"noreferrer",target:"_blank",href:t.url,children:t.caption},n)).reduce(Es)]});function Ms(e,t){const n=T(!0);L(()=>{if(n.current){n.current=!1;return}return e()},t)}const _e=2**31-1;function Je(e,t,n){const r=n-Date.now();e.current=r<=_e?setTimeout(t,r):setTimeout(()=>Je(e,t,n),_e)}function Rs(){const e=gs(),t=T();return Ss(()=>clearTimeout(t.current)),He(()=>{const n=()=>clearTimeout(t.current);function r(a,l=0){e()&&(n(),l<=_e?t.current=setTimeout(a,l):Je(t,a,Date.now()+l))}return{set:r,clear:n,handleRef:t}},[])}const qe=O.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},a)=>(t=ne(t,"carousel-caption"),s.jsx(n,{ref:a,className:V(e,t),...r})));qe.displayName="CarouselCaption";const Ke=O.forwardRef(({as:e="div",bsPrefix:t,className:n,...r},a)=>{const l=V(n,ne(t,"carousel-item"));return s.jsx(e,{ref:a,...r,className:l})});Ke.displayName="CarouselItem";const Bs=40;function Os(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Ge=O.forwardRef(({defaultActiveIndex:e=0,...t},n)=>{const{as:r="div",bsPrefix:a,slide:l=!0,fade:p=!1,controls:h=!0,indicators:o=!0,indicatorLabels:d=[],activeIndex:u,onSelect:i,onSlide:f,onSlid:y,interval:N=5e3,keyboard:I=!0,onKeyDown:_,pause:C="hover",onMouseOver:S,onMouseOut:w,wrap:g=!0,touch:P=!0,onTouchStart:M,onTouchMove:j,onTouchEnd:Z,prevIcon:J=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:q="Previous",nextIcon:K=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:G="Next",variant:pe,className:b,children:ue,...Qe}=_s({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),z=ne(a,"carousel"),X=ks(),Y=T(null),[Ne,Se]=v("next"),[es,ae]=v(!1),[Q,Ce]=v(!1),[k,ss]=v(u||0);L(()=>{!Q&&u!==k&&(Y.current?Se(Y.current):Se((u||0)>k?"next":"prev"),l&&Ce(!0),ss(u||0))},[u,Q,k,l]),L(()=>{Y.current&&(Y.current=null)});let R=0,ke;$s(ue,(c,x)=>{++R,x===u&&(ke=c.props.interval)});const be=ws(ke),$=E(c=>{if(Q)return;let x=k-1;if(x<0){if(!g)return;x=R-1}Y.current="prev",i==null||i(x,c)},[Q,k,i,g,R]),D=Fe(c=>{if(Q)return;let x=k+1;if(x>=R){if(!g)return;x=0}Y.current="next",i==null||i(x,c)}),he=T();ms(n,()=>({element:he.current,prev:$,next:D}));const Ie=Fe(()=>{!document.hidden&&Os(he.current)&&(X?$():D())}),B=Ne==="next"?"start":"end";Ms(()=>{l||(f==null||f(k,B),y==null||y(k,B))},[k]);const ts=`${z}-item-${Ne}`,ns=`${z}-item-${B}`,rs=E(c=>{ys(c),f==null||f(k,B)},[f,k,B]),as=E(()=>{Ce(!1),y==null||y(k,B)},[y,k,B]),os=E(c=>{if(I&&!/input|textarea/i.test(c.target.tagName))switch(c.key){case"ArrowLeft":c.preventDefault(),X?D(c):$(c);return;case"ArrowRight":c.preventDefault(),X?$(c):D(c);return}_==null||_(c)},[I,_,$,D,X]),cs=E(c=>{C==="hover"&&ae(!0),S==null||S(c)},[C,S]),ls=E(c=>{ae(!1),w==null||w(c)},[w]),$e=T(0),oe=T(0),De=Rs(),is=E(c=>{$e.current=c.touches[0].clientX,oe.current=0,C==="hover"&&ae(!0),M==null||M(c)},[C,M]),ds=E(c=>{c.touches&&c.touches.length>1?oe.current=0:oe.current=c.touches[0].clientX-$e.current,j==null||j(c)},[j]),ps=E(c=>{if(P){const x=oe.current;Math.abs(x)>Bs&&(x>0?$(c):D(c))}C==="hover"&&De.set(()=>{ae(!1)},N||void 0),Z==null||Z(c)},[P,C,$,D,De,N,Z]),ze=N!=null&&!es&&!Q,xe=T();L(()=>{var c,x;if(!ze)return;const A=X?$:D;return xe.current=window.setInterval(document.visibilityState?Ie:A,(c=(x=be.current)!=null?x:N)!=null?c:void 0),()=>{xe.current!==null&&clearInterval(xe.current)}},[ze,$,D,be,N,Ie,X]);const Ae=He(()=>o&&Array.from({length:R},(c,x)=>A=>{i==null||i(x,A)}),[o,R,i]);return s.jsxs(r,{ref:he,...Qe,onKeyDown:os,onMouseOver:cs,onMouseOut:ls,onTouchStart:is,onTouchMove:ds,onTouchEnd:ps,className:V(b,z,l&&"slide",p&&`${z}-fade`,pe&&`${z}-${pe}`),children:[o&&s.jsx("div",{className:`${z}-indicators`,children:Le(ue,(c,x)=>s.jsx("button",{type:"button","data-bs-target":"","aria-label":d!=null&&d.length?d[x]:`Slide ${x+1}`,className:x===k?"active":void 0,onClick:Ae?Ae[x]:void 0,"aria-current":x===k},x))}),s.jsx("div",{className:`${z}-inner`,children:Le(ue,(c,x)=>{const A=x===k;return l?s.jsx(vs,{in:A,onEnter:A?rs:void 0,onEntered:A?as:void 0,addEndListener:Ns,children:(se,us)=>O.cloneElement(c,{...us,className:V(c.props.className,A&&se!=="entered"&&ts,(se==="entered"||se==="exiting")&&"active",(se==="entering"||se==="exiting")&&ns)})}):O.cloneElement(c,{className:V(c.props.className,A&&"active")})})}),h&&s.jsxs(s.Fragment,{children:[(g||u!==0)&&s.jsxs(Pe,{className:`${z}-control-prev`,onClick:$,children:[J,q&&s.jsx("span",{className:"visually-hidden",children:q})]}),(g||u!==R-1)&&s.jsxs(Pe,{className:`${z}-control-next`,onClick:D,children:[K,G&&s.jsx("span",{className:"visually-hidden",children:G})]})]})]})});Ge.displayName="Carousel";const je=Object.assign(Ge,{Caption:qe,Item:Ke}),Vs=({item:e})=>{const t=(e.floorplans??[]).map(r=>({url:r.url})).reverse(),n=(e.images??[]).concat(t);return s.jsxs(s.Fragment,{children:[n.length===0?s.jsx("p",{className:"x-noImageProvided",children:"No images provided"}):s.jsx(Hs,{imagesAndFloorplans:n}),s.jsx(Ws,{item:e}),s.jsx(Us,{item:e})]})},Hs=({imagesAndFloorplans:e})=>s.jsxs(je,{interval:864e5,defaultActiveIndex:0,children:[e.map((t,n)=>s.jsxs(je.Item,{children:[s.jsx("img",{loading:"lazy",referrerPolicy:"no-referrer",className:"d-block",src:t.url,alt:t.caption?"caption: "+t.caption:void 0}),s.jsx(je.Caption,{style:{display:"flex",justifyContent:"center"},children:s.jsxs("p",{children:[s.jsx("strong",{children:`${n+1}/${e.length} `}),t.caption||""]})})]},n)),e.length===0&&s.jsx("img",{className:"d-block",alt:"No images provided"})]}),Us=({item:e})=>e.zoopla_est||e.zoopla_peak||e.zoopla_rent_estimate?s.jsxs(s.Fragment,{children:[e.zoopla_est&&s.jsx(Zs,{item:e}),e.zoopla_peak&&s.jsx(Js,{item:e}),e.zoopla_rent_estimate&&s.jsx(qs,{item:e})]}):e.zoopla_advert_id?s.jsx("p",{className:"x-caption-2",children:s.jsx(Ze,{item:e})}):null,Ws=({item:e})=>{const t=`https://www.rightmove.co.uk/properties/${e.id}#/media?channel=${e.channel}`,n=r=>{const a=["",`  "${e.id}": {`,'    "zoopla_advert_id": null, "zoopla_uprn": null,',`    "__address_r": "${e.address}",`,'    "notes": null, "size_sqm": null, "coordinates": null},',""];navigator.clipboard.writeText(a.join(`
`))};return s.jsxs("p",{className:"x-caption-1",children:[s.jsx("span",{className:"x-loop-index",onClick:n,children:e.loopIndex}),e.sold_let&&s.jsx(ee,{text:"dark",bg:"warning",className:"x-badge",children:e.sold_let}),e.is_new&&s.jsx(ee,{text:"light",bg:"success",className:"x-badge",children:"NEW"}),s.jsx("a",{rel:"noreferrer",target:"_blank",href:t,style:{textDecoration:"none"},children:U(e.price)})]})},Zs=({item:e})=>{const t=`https://www.zoopla.co.uk/property/uprn/${e.zoopla_uprn}/`;return e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_rent_estimate)})," on"," ",s.jsxs("a",{rel:"noreferrer",target:"_blank",href:t,className:"x-manual-all",children:[U(e.zoopla_rent_estimate),"pm ",s.jsx(W,{style:{verticalAlign:"unset"}})]})]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_est*1e3)})," on"," ",s.jsxs("a",{rel:"noreferrer",target:"_blank",href:t,className:"x-manual-all",children:[U(e.zoopla_est*1e3)," ",s.jsx(W,{style:{verticalAlign:"unset"}})]}),e.zoopla_estimate_date&&s.jsxs("span",{children:[" in ",Ue(e.zoopla_estimate_date)]})]})},Js=({item:e})=>e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:U(e.zoopla_est*1e3)}),e.zoopla_estimate_date&&s.jsxs("span",{children:[" in ",Ue(e.zoopla_estimate_date)]})]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_peak*1e3)})," on"," ",s.jsx("span",{className:"x-manual-all",children:U(e.zoopla_peak*1e3)})," peak of"," ",s.jsx("span",{className:"x-manual-all",children:e.zoopla_peak_date})]}),qs=({item:e})=>e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:Be(e.price/e.zoopla_est/1e3)})," rental yield"]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:Be(e.zoopla_rent_estimate/e.price)})," ","rental yield at ",U(e.zoopla_rent_estimate),"pm"]}),we=(e,t)=>new Intl.NumberFormat("en-GB",{style:"percent",signDisplay:"exceptZero",minimumFractionDigits:1,maximumFractionDigits:1}).format((e-t)/t),Be=e=>new Intl.NumberFormat("en-GB",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format((1+e)**12-1),Ks=({item:e})=>{const t=e.coordinates.join(","),n=e.closest&&e.closest.coords?e.closest.coords.join(","):"",r=[s.jsx(Gs,{coordsCsv:t,closeCoordsCsv:n},"1"),s.jsx(Xs,{coordsCsv:t,closeCoordsCsv:n},"2"),s.jsx(Ys,{coordsCsv:t},"3"),s.jsx(Qs,{coordsCsv:t},"4"),s.jsx(et,{coords:e.coordinates},"5"),s.jsx(st,{coords:e.coordinates},"6"),s.jsx(tt,{coords:e.coordinates},"7"),s.jsx(nt,{coords:e.coordinates},"8"),s.jsx(rt,{coords:e.coordinates},"9")];return s.jsxs("p",{children:[s.jsx("strong",{children:"Maps:"})," ",r.reduce(F)]})},Gs=({coordsCsv:e,closeCoordsCsv:t})=>{const n=t?`https://www.google.com/maps/dir/${t}/${e}/@15z/data=!4m2!4m1!3e2`:`https://www.google.com/maps/place/${e}/@15z/data=!5m1!1e2`,r=s.jsx("i",{className:"fa-solid fa-map-location",style:{color:"#b01010"}});return s.jsx(m,{icon:r,url:n,text:"Map"})},Xs=({coordsCsv:e,closeCoordsCsv:t})=>{const n=t?`https://www.google.com/maps/dir/${t}/${e}/@2696m/data=!3m1!1e3!4m2!4m1!3e2`:`https://www.google.com/maps/place/${e}/@2696m/data=!3m1!1e3!5m1!1e2`;return s.jsx(m,{icon:"🛰",url:n,text:"Satellite"})},Ys=({coordsCsv:e})=>{const t=`https://earth.google.com/web/@${e},132a,25d,35y,0h,0t,0r`;return s.jsx(m,{icon:"🌍",url:t,text:"Earth"})},Qs=({coordsCsv:e})=>{const t=`https://www.google.com/maps/@${e},3a,90y,70t/data=!3m1!1e1`,n=s.jsx("i",{className:"fa-solid fa-street-view",style:{color:"#b08800"}});return s.jsx(m,{icon:n,url:t,text:"StreetView"})},et=({coords:e})=>{const n=`https://open.xploria.co.uk/app/know-your-place?map=${e.slice(0).reverse().join("*")}*18&view=elcAu7IT4`;return s.jsx(m,{icon:"💰",url:n,text:"Standards"})},st=({coords:e})=>{const n=`https://open.xploria.co.uk/app/know-your-place?map=${e.slice(0).reverse().join("*")}*18&view=elcAu7IT4&theme=w0fDyvnN_`,r=s.jsx("i",{className:"fa-solid fa-handcuffs",style:{color:"#808080"}});return s.jsx(m,{icon:r,url:n,text:"Crime"})},tt=({coords:e})=>{const n=`https://parallel.co.uk/rofrs/#16/${e.join("/")}`;return s.jsx(m,{icon:"🌊",url:n,text:"Flood"})},nt=({coords:e})=>{const t=e.join("%2C"),n=`https://en-gb.topographic-map.com/map/?center=${t}&zoom=16&popup=${t}`,r=s.jsx("i",{className:"fa-solid fa-mountain-sun",style:{color:"#6fcdf9"}});return s.jsx(m,{icon:r,url:n,text:"Elevation"})},rt=({coords:e})=>{const n=`https://www.cyclosm.org/#map=17/${e.join("/")}/cyclosm`,r=s.jsx("i",{className:"fa-solid fa-person-biking",style:{color:"#b01010"}});return s.jsx(m,{icon:r,url:n,text:"Cycling"})},at=({item:e})=>{const t=[s.jsx(it,{item:e},"1"),s.jsx(dt,{item:e},"2"),s.jsx(ot,{item:e},"3"),s.jsx(ct,{item:e},"4"),s.jsx(pt,{item:e},"5"),s.jsx(lt,{item:e},"6")];return s.jsxs("p",{children:[s.jsx("strong",{children:"In Street:"})," ",t.reduce(F)]})},ot=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.address_postcode.toUpperCase().replace(" ","%20"),r=`https://www.zoopla.co.uk/house-prices/${t}/?q=${n}&sortOrder=address&sortDirection=asc`;return s.jsx(m,{icon:s.jsx(W,{}),url:r,text:"Estimate / Sold Prices"})},ct=({item:e})=>{const n=`https://www.rightmove.co.uk/house-prices/${e.address_postcode.toLowerCase().replace(" ","-")}.html`;return s.jsx(m,{icon:s.jsx(re,{}),url:n,text:"Sold Prices"})},lt=({item:e})=>{const n=`https://www.crime-statistics.co.uk/postcode/${e.address_postcode.toUpperCase().replace(" ","%20")}`,r=s.jsx("i",{className:"fa-solid fa-handcuffs",style:{color:"#808080"}});return s.jsx(m,{icon:r,url:n,text:"Crimes"})},it=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.address_postcode.replace(" ","+"),r=e.channel==="rent"?`https://www.zoopla.co.uk/to-rent/property/${t}/?radius=0&q=${n}&search_source=to-rent&results_sort=newest_listings&include_rented=true`:`https://www.zoopla.co.uk/for-sale/property/${t}/?radius=0&q=${n}&search_source=for-sale&results_sort=newest_listings&is_auction=false&is_retirement_home=false&is_shared_ownership=false&include_sold=true`;return s.jsx(m,{icon:s.jsx(W,{}),url:r,text:"Adverts"})},dt=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.channel==="rent"?`https://www.onthemarket.com/to-rent/property/${t}/?let-agreed=true&radius=0.25&shared=false&student=false&view=grid`:`https://www.onthemarket.com/for-sale/property/${t}/?auction=false&radius=0.25&retirement=false&shared-ownership=false&under-offer=true&view=grid`;return s.jsx(m,{icon:s.jsx(We,{}),url:n,text:"Adverts"})},pt=({item:e})=>{const t=s.jsx("i",{className:"fa-solid fa-leaf",style:{color:"#659748"}}),r=`https://find-energy-certificate.service.gov.uk/find-a-certificate/search-by-postcode?postcode=${e.address_postcode.replace(" ","+")}`;return s.jsx(m,{icon:t,url:r,text:"EPCs"})},ut=({item:e})=>s.jsxs("div",{className:"x-card-right",children:[e.notes&&s.jsxs("p",{className:"x-manual-all",children:["Extra Notes: ",e.notes]}),s.jsx(ht,{item:e}),e.let_info&&s.jsx(vt,{let_info:e.let_info}),e.previous_prices&&s.jsx(xt,{prices:e.previous_prices}),s.jsx(ft,{item:e}),s.jsx(mt,{item:e}),s.jsx(jt,{item:e}),s.jsx(Ks,{item:e}),s.jsx(Fs,{item:e}),e.brochures&&s.jsx(gt,{brochures:e.brochures}),e.key_features&&s.jsx(wt,{features:e.key_features}),s.jsx(at,{item:e}),s.jsx("p",{children:e.summary}),e.agency&&s.jsx(yt,{agency:e.agency,id:e.id})]}),ht=({item:e})=>e.date_updated?s.jsxs("p",{children:[s.jsx("span",{className:"x-update-reason-updated",children:"Reduced"})," ",s.jsx("span",{className:"x-update-reason-updated x-date-relative","data-convert":"days","data-date":e.date_updated,children:me(e.date_updated)})," ","days ago (on ",s.jsx("strong",{children:de(e.date_updated)}),"). First added"," ",s.jsx("span",{className:"x-first-added x-date-relative","data-convert":"days","data-date":e.date_added,children:me(e.date_added)})," ","days ago (on ",s.jsx("strong",{children:de(e.date_added)}),")."]}):s.jsxs("p",{children:[s.jsx("span",{className:"x-update-reason-new",children:"New"})," ",s.jsx("span",{className:"x-update-reason-new x-date-relative","data-convert":"days","data-date":e.date_added,children:me(e.date_added)})," ","days ago (on ",s.jsx("strong",{children:de(e.date_added)}),")."]}),xt=({prices:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Previous prices:"})," ",e.map((t,n)=>s.jsxs("span",{children:[U(t.price)," on ",As(t.date)]},n)).reduce(F)]}),ft=({item:e})=>{const t=s.jsx("span",{className:"x-size-sqm",children:e.size_sqm}),n=[];return e.size_sqm&&n.push(s.jsx(m,{icon:t,text:"m²"},"1")),n.push(s.jsx(m,{icon:"🛏",text:`${e.bedrooms}`},"2")),e.bathrooms!==void 0&&n.push(s.jsx(m,{icon:"🛀",text:`${e.bathrooms}`},"3")),n.push(s.jsx(m,{icon:e.property_group_icon,text:e.property_group},"4")),s.jsx("p",{children:n.reduce(F)})},mt=({item:e})=>{let t="";return e.address_street_num&&(t=/\d\w?$/i.test(e.address_street_num)?" ":", "),s.jsxs("p",{children:[e.address_street_num&&s.jsx("span",{className:"x-manual-all",children:e.address_street_num}),s.jsx("strong",{children:t+e.address+", "}),s.jsx("strong",{className:"x-postcode",children:e.address_postcode})]})},jt=({item:e})=>s.jsxs("p",{children:[s.jsx("span",{className:"x-distance-miles",children:e.closest.miles.toFixed(2)})," miles to"," ",s.jsx("span",{className:"x-known-place",children:e.closest.place})]}),gt=({brochures:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Brochures:"})," ",e.map((t,n)=>s.jsx(_t,{brochure:t},n)).reduce(F)]}),_t=({brochure:e})=>{const n=e.url.replace(/\?.*/,"").replace(/\/+$/,"").toLowerCase().endsWith(".pdf")?s.jsx("i",{className:"fa-solid fa-file-lines",style:{color:"#dc3545"}}):s.jsx("i",{className:"fa-solid fa-link",style:{color:"#808080"}});return s.jsx(m,{icon:n,url:e.url,text:e.caption})},wt=({features:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Other:"})," ",e.map((t,n)=>s.jsx("span",{children:t},n)).reduce(F)]}),yt=({agency:e,id:t})=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"end"},children:[s.jsx("img",{loading:"lazy",referrerPolicy:"no-referrer",src:e.url,title:e.caption,alt:e.caption,style:{maxHeight:"3rem",maxWidth:"6rem"}}),s.jsx("span",{style:{fontSize:"0.6rem",marginLeft:"1rem"},children:t})]}),vt=({let_info:e})=>{const t=[];return e.date_available&&t.push(`Available ${e.date_available}`),e.furnish&&t.push(e.furnish),e.min_duration&&t.push(`${e.min_duration} months`),t.length===0?s.jsx(s.Fragment,{}):s.jsxs("p",{children:[s.jsx("strong",{children:"Let:"})," ",t.map((n,r)=>s.jsx("span",{children:n},r)).reduce(F)]})},Xe=O.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...a},l)=>{const p=ne(e,"container"),h=typeof t=="string"?`-${t}`:"-fluid";return s.jsx(n,{ref:l,...a,className:V(r,t?`${p}${h}`:p)})});Xe.displayName="Container";const Ye=O.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},a)=>{const l=ne(e,"row"),p=bs(),h=Is(),o=`${l}-cols`,d=[];return p.forEach(u=>{const i=r[u];delete r[u];let f;i!=null&&typeof i=="object"?{cols:f}=i:f=i;const y=u!==h?`-${u}`:"";f!=null&&d.push(`${o}${y}-${f}`)}),s.jsx(n,{ref:a,...r,className:V(t,l,...d)})});Ye.displayName="Row";const Nt=({item:e})=>s.jsx(Ds,{className:"x-card","data-miles":e.closest.miles,"data-isflat":e.property_group_icon==="🏢",children:s.jsx(Xe,{fluid:!0,children:s.jsxs(Ye,{children:[s.jsx(Me,{sm:"5",style:{padding:0},children:s.jsx(Vs,{item:e})}),s.jsx(Me,{sm:"7",style:{padding:"1rem",margin:"0"},children:s.jsx(ut,{item:e})})]})})}),Oe={chesterfield:"Chesterfield",chesterfield_ashgate:"Chesterfield Ashgate",chesterfield_rent:"Chesterfield rent",herts:"Herts",herts_s:"Herts_s",hitchin_johnsonpl:"Hitchin Johnson Place",hitchin_rent:"Hitchin rent",basingstoke:"Basingstoke",london:"London"},St=()=>{var h;const[e,t]=v(!0),n=new URLSearchParams(window.location.search),r=((h=n.get("data"))==null?void 0:h.replace("properties_",""))??"chesterfield_ashgate",a=n.get("nav")==="all"?["chesterfield","chesterfield_ashgate","chesterfield_rent","herts","herts_s","hitchin_johnsonpl","hitchin_rent","basingstoke","london"]:["chesterfield","chesterfield_ashgate","chesterfield_rent","herts","hitchin_johnsonpl","hitchin_rent","basingstoke"],l=o=>{t(o)},p=o=>{const d=new URLSearchParams;d.set("data",`properties_${o}`);const u=new URLSearchParams(window.location.search);return["stc","nav"].forEach(i=>{const f=u.get(i);f&&d.set(i,f)}),"?"+d.toString()};return s.jsxs(fe,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:l,expanded:e,children:[s.jsx(fe.Toggle,{"aria-controls":"basic-navbar-nav"}),s.jsx(fe.Collapse,{id:"basic-navbar-nav",children:s.jsx(Cs,{className:"ms-auto me-auto",children:s.jsx(Te,{title:Oe[r],children:a.map((o,d)=>s.jsx(Te.Item,{href:p(o),active:o===r,children:Oe[o]},d))})})})]})},Ct=({items:e,setItemsDisplayed:t,PAGE_LENGTH:n})=>{const[r,a]=v(parseInt(te().get("page")??"1")),l=Math.ceil(e.length/n),p=h=>{const o=h.target.closest("a.page-link");if(!o)return;let d;o.innerText.includes("First")?d=1:o.innerText.includes("Previous")?d=Math.max(1,r-1):o.innerText.includes("Next")?d=Math.min(l,r+1):o.innerText.includes("Last")?d=l:d=parseInt(o.innerText),console.log(`Page change from: ${r} to: ${d}`),a(d),js("page",d.toString()),document.querySelector("#x-scroll-anchor").scrollIntoView()};return L(()=>{const h=[];for(let o=0;o<e.length;++o)if(Math.floor(o/n)+1===r){const d=e[o];if(d.loopIndex=`${o+1} / ${e.length}`,h.push(d),h.length===n)break}t(h),console.log("itemsDisplayed",h.length)},[r,e,t,n]),s.jsxs(ie,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"1rem"},onClick:p,children:[l>0&&s.jsx(ie.Prev,{disabled:r===1,style:{width:"4rem"}}),[...Array(l).keys()].map(h=>s.jsx(ie.Item,{active:h+1===r,children:h+1},h)),l>0&&s.jsx(ie.Next,{disabled:r===l,style:{width:"4rem"}})]})},kt=e=>s.jsx("i",{className:"fa-solid fa-spinner fa-spin",...e}),Ve=({checkState:e,label:t})=>{const[n,r]=e;return s.jsxs(H,{children:[s.jsx(H.Check,{type:"switch",onChange:a=>r(a.target.checked),checked:n}),s.jsx("p",{children:t})]})},bt=({checkState:e,labelBefore:t,labelAfter:n,maxWidth:r="3rem",textState:a})=>{const[l,p]=e,[h,o]=a,d=i=>{o(i.target.value),p(!1)},u=i=>{i.key==="Enter"?(p(!0),i.preventDefault()):p(!1)};return s.jsxs(H,{children:[s.jsx(H.Check,{type:"switch",onChange:i=>p(i.target.checked),checked:l}),s.jsx("p",{children:t}),s.jsx(H.Control,{value:h,onChange:d,style:{maxWidth:r},onKeyDown:u}),n&&s.jsx("p",{children:n})]})},It=({label:e,maxWidth:t,addrState:n,priceState:r,agencyState:a,idState:l})=>{const[p,h]=v(""),[o,d]=n,[u,i]=r,[f,y]=a,[N,I]=l,_=(w,g="")=>{g=g.trim(),w==="address"?d(g):w==="price"?i(g):w==="agency"?y(g):w==="id"&&I(g)},C=w=>{h(w.target.value)},S=w=>{w.key==="Enter"&&(w.preventDefault(),_("address",p))};return s.jsxs(s.Fragment,{children:[s.jsxs(H,{children:[e&&s.jsx("p",{children:e}),s.jsx(H.Control,{value:p,onChange:C,style:{maxWidth:t},onKeyDown:S}),s.jsxs(zs,{title:"Search",variant:"success",id:"x-btn-search",onSelect:w=>_(w,p),children:[s.jsx(ce.Item,{eventKey:"address",children:"in Address"}),s.jsx(ce.Item,{eventKey:"price",children:"in Price"}),s.jsx(ce.Item,{eventKey:"agency",children:"in Agency"}),s.jsx(ce.Item,{eventKey:"id",children:"in ID"})]})]}),o&&s.jsxs(ee,{pill:!0,bg:"primary",children:[s.jsx(le,{onClick:()=>_("address"),variant:"white"}),s.jsx("span",{children:o})]}),u&&s.jsxs(ee,{pill:!0,bg:"info",text:"dark",children:[s.jsx(le,{onClick:()=>_("price")}),s.jsx("span",{children:u})]}),f&&s.jsxs(ee,{pill:!0,bg:"light",text:"dark",children:[s.jsx(le,{onClick:()=>_("agency")}),s.jsx("span",{children:f})]}),N&&s.jsxs(ee,{pill:!0,bg:"dark",children:[s.jsx(le,{onClick:()=>_("id"),variant:"white"}),s.jsx("span",{children:N})]})]})},$t=({data:e,setItemsSelectable:t,PAGE_LENGTH:n})=>{const r=te(),[a,l]=v(r.get("stc")==="1"),[p,h]=v(r.get("address")??""),[o,d]=v(r.get("agency")??""),[u,i]=v(r.get("noFlat")==="1"),[f,y]=v(!1),[N,I]=v("0.3"),[_,C]=v(""),[S,w]=v(""),g=j=>j.toLowerCase().replaceAll(" ","");L(()=>{const j=te();a?j.set("stc","1"):j.delete("stc"),u?j.set("noFlat","1"):j.delete("noFlat"),p!==""?j.set("address",p):j.delete("address"),o!==""?j.set("agency",o):j.delete("agency"),Ee(j)},[a,u,p,o]),L(()=>{const j=parseFloat(N),Z=g(p);let J,q;o==="z"?(J="",q=!0):(J=g(o),q=!1);const K=[];e.items.forEach(b=>{a&&b.sold_let||u&&b.property_group_icon==="🏢"||f&&b.closest&&j&&b.closest.miles>j||Z&&!g((b.address_street_num||"")+b.address+b.address_postcode).includes(Z)||_&&!b.price.toString().includes(_)||q&&(b.zoopla_advert_id||b.zoopla_uprn)||S&&!b.id.toString().includes(S)||J&&!g(b.agency.caption).includes(J)||K.push(b)}),t(K),console.log("itemsSelectable",K.length);const G=te();parseInt(G.get("page")??"1")>Math.ceil(K.length/n)&&(G.set("page","1"),Ee(G))},[a,u,f,p,_,o,S]);const P=e.items.filter(j=>j.sold_let).length,M=e.items.filter(j=>j.property_group_icon==="🏢").length;return s.jsxs(s.Fragment,{children:[s.jsx(Dt,{data:e}),s.jsx(zt,{searches:e.searches,title:e.title}),s.jsx(Ve,{checkState:[a,l],label:`Exclude the ${P} STCs`}),s.jsx(Ve,{checkState:[u,i],label:`Exclude the ${M} flats`}),s.jsx(bt,{checkState:[f,y],labelBefore:"Exclude further than",labelAfter:"miles",maxWidth:"3rem",textState:[N,I]}),s.jsx(It,{maxWidth:"8rem",addrState:[p,h],priceState:[_,C],agencyState:[o,d],idState:[S,w]})]})},Dt=({data:e})=>s.jsxs("p",{children:[s.jsxs("span",{className:"x-nowrap",children:["Updated"," ",s.jsx("span",{id:"x-updated-relative",className:"x-date-relative","data-convert":"hours","data-date":e.updated_on,children:Re(e.updated_on)})," ","ago"]})," ",s.jsxs("span",{className:"x-nowrap",children:["(on ",s.jsx("span",{children:de(e.updated_on)}),")"]})," ",s.jsx("br",{}),"Next check starts in:"," ",s.jsx("span",{id:"x-nexton-relative",className:"x-date-relative","data-convert":"hours-negative","data-date":e.next_on,children:Re(e.next_on,!0)})]}),zt=({searches:e,title:t})=>s.jsxs("p",{children:[t,". Based on ",s.jsx(re,{style:{verticalAlign:"baseline"}})," searches only:",s.jsx("br",{}),e&&e.map((n,r)=>s.jsx(At,{search:n},r)).reduce(F)]}),At=({search:e})=>s.jsxs("span",{className:"x-nowrap",children:[s.jsx("a",{rel:"noreferrer",target:"_blank",href:e.url_r,children:s.jsx(re,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx("a",{rel:"noreferrer",target:"_blank",href:e.url_z,children:s.jsx(W,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx("a",{rel:"noreferrer",target:"_blank",href:e.url_o,children:s.jsx(We,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx("strong",{children:e.name})]}),Et=()=>{const e=te(),t=e.get("data")??"properties_chesterfield_ashgate",n=parseInt(e.get("page")??"1"),r=T(null),[a,l]=v({__loading:!0}),[p,h]=v([]),[o,d]=v([]),u=10;if(L(()=>{let i=!0;return(async()=>{try{const y=localStorage.getItem("location"),N=y===t?localStorage.getItem("next_on"):null,I=y===t?localStorage.getItem("last_attempt"):null,_=new Date().valueOf();let C,S;I&&_-new Date(I).valueOf()<4e3?(S="FORCE RELOAD due to 2 attempts within 4s",C="reload"):N?new Date(N).valueOf()>_?(S="Keep CACHED data",C="force-cache"):(S="RELOADING as cache data expired",C="reload"):(S="LOAD first time",C="reload"),console.log(`Cache Loading info = ${S}`),r.current&&(r.current.innerText=S);const w=`https://raw.githubusercontent.com/solfegedev/solfegedev.github.io/main/data/${t}.json`;console.log(`Fetch data from server: ${w}`);const g=await fetch(w,{cache:C});if(!g.ok){const M=g.status===404?"This link seems wrong, check you have the correct one":`Failed to get data for: ${t}`;throw new Error(M)}const P=await g.json();localStorage.setItem("location",t),localStorage.setItem("next_on",new Date(P.next_on).toISOString()),localStorage.setItem("last_attempt",new Date().toISOString()),console.log(P),i&&l(P)}catch(y){i&&l({__error:`${y}`})}})().catch(console.error),()=>{i=!1}},[t]),a.favicon){const i=document.querySelector("link[rel='icon']");i.href=`img/properties/${a.favicon}`}if(document.title=a.region,a.__loading)return s.jsxs("main",{children:[s.jsx(kt,{id:"x-spinner"}),s.jsx("p",{id:"x-spinner-info",ref:r})]});if(a.__error)return s.jsx("main",{style:{color:"red"},children:a.__error});{const i=(n-1)*u+1,f=p.length,y=Math.min(f,i+u-1),N=s.jsx(Ct,{items:p,setItemsDisplayed:d,PAGE_LENGTH:u});return s.jsxs(s.Fragment,{children:[s.jsx(St,{}),s.jsxs("main",{children:[s.jsx($t,{data:a,setItemsSelectable:h,PAGE_LENGTH:u}),s.jsxs("div",{id:"x-scroll-anchor",children:[N,f===0?s.jsx("p",{children:s.jsx("strong",{children:"No matching results"})}):s.jsxs("p",{children:["Page ",s.jsx("strong",{children:n}),": properties ",s.jsx("strong",{children:i})," -",s.jsx("strong",{children:y})," out of ",s.jsx("strong",{children:f})]}),o&&o.map((I,_)=>s.jsx(Nt,{item:I},_))]}),N]})]})}};hs.createRoot(document.getElementById("root")).render(s.jsx(fs.StrictMode,{children:s.jsx(xs,{children:s.jsx(Et,{})})}));
