import{j as s,c as ms}from"./client-B8KsQLkO.js";import{a as js,C as gs}from"./CookieConsentWrapper-BX3Mx7Xo.js";import*as V from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import _s,{useRef as T,useEffect as L,useMemo as Ue,useState as w,useCallback as z,useImperativeHandle as vs}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{g as ne,s as ys,a as Pe}from"./store-C6W4SrBE.js";import{c as ws}from"./clipboard-nCoCNLhi.js";import{u as Ns,a as Te,A as M,I as he,D as Ss,b as le}from"./Comps-CK47dn9n.js";import{D as xe}from"./dates-ZEyg73w4.js";import{B as se}from"./Badge-DBrHxsHR.js";import{u as Cs,b as ks,a as Le}from"./useMergedRefs-BEcJmFAT.js";import{u as $s,N as ie,a as Is,b as Me}from"./NavDropdown-0dASVYjy.js";import{u as re,c as Z,b as bs,d as Ds,e as As}from"./ThemeProvider-DUEYKiOx.js";import{f as Es,m as Re}from"./ElementChildren-AZvnq_HE.js";import{t as zs,T as Fs,a as Ps}from"./TransitionWrapper-BMbdxB92.js";import{g as We,a as Ts}from"./googleMap-BAji2fQs.js";import Ls from"https://cdn.jsdelivr.net/npm/proj4@2.12.1/+esm";import{C as Ms,B as de}from"./Pagination-CTAszPnG.js";import{C as Be,F as H}from"./Form-Bb9p2o3R.js";import{C as pe}from"./CloseButton-BhSrBPCf.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";import"./Button-BQhh39PT.js";import"./Nav-DL_WA_ME.js";import"./CardHeaderContext-Dz0GHBZ8.js";function Rs(e,t){const n=T(!0);L(()=>{if(n.current){n.current=!1;return}return e()},t)}const ye=2**31-1;function Ge(e,t,n){const r=n-Date.now();e.current=r<=ye?setTimeout(t,r):setTimeout(()=>Ge(e,t,n),ye)}function Bs(){const e=Ns(),t=T();return $s(()=>clearTimeout(t.current)),Ue(()=>{const n=()=>clearTimeout(t.current);function r(o,l=0){e()&&(n(),l<=ye?t.current=setTimeout(o,l):Ge(t,o,Date.now()+l))}return{set:r,clear:n,handleRef:t}},[])}const qe=V.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=re(t,"carousel-caption"),s.jsx(n,{ref:o,className:Z(e,t),...r})));qe.displayName="CarouselCaption";const Ke=V.forwardRef(({as:e="div",bsPrefix:t,className:n,...r},o)=>{const l=Z(n,re(t,"carousel-item"));return s.jsx(e,{ref:o,...r,className:l})});Ke.displayName="CarouselItem";const Os=40;function Vs(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Je=V.forwardRef(({defaultActiveIndex:e=0,...t},n)=>{const{as:r="div",bsPrefix:o,slide:l=!0,fade:d=!1,controls:h=!0,indicators:a=!0,indicatorLabels:p=[],activeIndex:u,onSelect:i,onSlide:f,onSlid:y,interval:N=5e3,keyboard:I=!0,onKeyDown:_,pause:C="hover",onMouseOver:S,onMouseOut:v,wrap:g=!0,touch:P=!0,onTouchStart:R,onTouchMove:j,onTouchEnd:G,prevIcon:q=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:K="Previous",nextIcon:J=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:X="Next",variant:fe,className:$,children:me,...ts}=Cs({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),A=re(o,"carousel"),Y=bs(),Q=T(null),[Ce,ke]=w("next"),[ns,ae]=w(!1),[ee,$e]=w(!1),[k,rs]=w(u||0);L(()=>{!ee&&u!==k&&(Q.current?ke(Q.current):ke((u||0)>k?"next":"prev"),l&&$e(!0),rs(u||0))},[u,ee,k,l]),L(()=>{Q.current&&(Q.current=null)});let B=0,Ie;Es(me,(c,x)=>{++B,x===u&&(Ie=c.props.interval)});const be=ks(Ie),b=z(c=>{if(ee)return;let x=k-1;if(x<0){if(!g)return;x=B-1}Q.current="prev",i==null||i(x,c)},[ee,k,i,g,B]),D=Le(c=>{if(ee)return;let x=k+1;if(x>=B){if(!g)return;x=0}Q.current="next",i==null||i(x,c)}),je=T();vs(n,()=>({element:je.current,prev:b,next:D}));const De=Le(()=>{!document.hidden&&Vs(je.current)&&(Y?b():D())}),O=Ce==="next"?"start":"end";Rs(()=>{l||(f==null||f(k,O),y==null||y(k,O))},[k]);const os=`${A}-item-${Ce}`,as=`${A}-item-${O}`,cs=z(c=>{zs(c),f==null||f(k,O)},[f,k,O]),ls=z(()=>{$e(!1),y==null||y(k,O)},[y,k,O]),is=z(c=>{if(I&&!/input|textarea/i.test(c.target.tagName))switch(c.key){case"ArrowLeft":c.preventDefault(),Y?D(c):b(c);return;case"ArrowRight":c.preventDefault(),Y?b(c):D(c);return}_==null||_(c)},[I,_,b,D,Y]),ds=z(c=>{C==="hover"&&ae(!0),S==null||S(c)},[C,S]),ps=z(c=>{ae(!1),v==null||v(c)},[v]),Ae=T(0),ce=T(0),Ee=Bs(),us=z(c=>{Ae.current=c.touches[0].clientX,ce.current=0,C==="hover"&&ae(!0),R==null||R(c)},[C,R]),hs=z(c=>{c.touches&&c.touches.length>1?ce.current=0:ce.current=c.touches[0].clientX-Ae.current,j==null||j(c)},[j]),xs=z(c=>{if(P){const x=ce.current;Math.abs(x)>Os&&(x>0?b(c):D(c))}C==="hover"&&Ee.set(()=>{ae(!1)},N||void 0),G==null||G(c)},[P,C,b,D,Ee,N,G]),ze=N!=null&&!ns&&!ee,ge=T();L(()=>{var c,x;if(!ze)return;const E=Y?b:D;return ge.current=window.setInterval(document.visibilityState?De:E,(c=(x=be.current)!=null?x:N)!=null?c:void 0),()=>{ge.current!==null&&clearInterval(ge.current)}},[ze,b,D,be,N,De,Y]);const Fe=Ue(()=>a&&Array.from({length:B},(c,x)=>E=>{i==null||i(x,E)}),[a,B,i]);return s.jsxs(r,{ref:je,...ts,onKeyDown:is,onMouseOver:ds,onMouseOut:ps,onTouchStart:us,onTouchMove:hs,onTouchEnd:xs,className:Z($,A,l&&"slide",d&&`${A}-fade`,fe&&`${A}-${fe}`),children:[a&&s.jsx("div",{className:`${A}-indicators`,children:Re(me,(c,x)=>s.jsx("button",{type:"button","data-bs-target":"","aria-label":p!=null&&p.length?p[x]:`Slide ${x+1}`,className:x===k?"active":void 0,onClick:Fe?Fe[x]:void 0,"aria-current":x===k},x))}),s.jsx("div",{className:`${A}-inner`,children:Re(me,(c,x)=>{const E=x===k;return l?s.jsx(Fs,{in:E,onEnter:E?cs:void 0,onEntered:E?ls:void 0,addEndListener:Ps,children:(te,fs)=>V.cloneElement(c,{...fs,className:Z(c.props.className,E&&te!=="entered"&&os,(te==="entered"||te==="exiting")&&"active",(te==="entering"||te==="exiting")&&as)})}):V.cloneElement(c,{className:Z(c.props.className,E&&"active")})})}),h&&s.jsxs(s.Fragment,{children:[(g||u!==0)&&s.jsxs(Te,{className:`${A}-control-prev`,onClick:b,children:[q,K&&s.jsx("span",{className:"visually-hidden",children:K})]}),(g||u!==B-1)&&s.jsxs(Te,{className:`${A}-control-next`,onClick:D,children:[J,X&&s.jsx("span",{className:"visually-hidden",children:X})]})]})]})});Je.displayName="Carousel";const _e=Object.assign(Je,{Caption:qe,Item:Ke});let Ne=new Date;const ue=e=>{const t=new Date(e),n={day:"numeric",month:"short",year:"numeric"},r=Ne.valueOf()-t.valueOf();return r<14*xe&&(n.weekday="long"),r<2*xe&&(n.hour="numeric",n.minute="numeric"),t.toLocaleDateString("en-GB",n)},Zs=e=>{const t=new Date(e),n={day:"numeric",month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",n)},Xe=e=>{const t=new Date(e),n={month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",n)},ve=e=>{const t=new Date(e);return((Ne.valueOf()-t.valueOf())/xe).toLocaleString("en-GB",{maximumFractionDigits:1})},Oe=(e,t=!1)=>{if(e===void 0)return"";const n=new Date(e),r=Ne.valueOf()-n.valueOf();let o=(t?-r:r)/6e4;const l=o<0?"-":"";o=Math.abs(o);const d=Math.floor(o/60),a=Math.floor(o%60).toLocaleString("en-GB",{minimumIntegerDigits:2});return`${l}${d}h${a}m`},U=e=>new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",maximumFractionDigits:0}).format(e),Hs=(e,t)=>s.jsxs(s.Fragment,{children:[e,", ",t]}),F=(e,t)=>s.jsxs(s.Fragment,{children:[e," ◆ ",t]}),m=({icon:e,text:t,url:n=""})=>{const r=n?s.jsx(M,{href:n,children:t}):t;return s.jsxs("span",{className:"x-nowrap",children:[e," ",r]})},oe=({isLink:e=!1,style:t={}})=>s.jsx(Se,{src:"img/properties/r.ico",isLink:e,style:t}),W=({isLink:e=!1,style:t={}})=>s.jsx(Se,{src:"img/properties/z.ico",isLink:e,style:t}),Ye=({isLink:e=!1,style:t={}})=>s.jsx(Se,{src:"img/properties/o.ico",isLink:e,style:t}),Se=({isLink:e=!1,style:t={},src:n})=>(t.width=e?"1.4rem":"1rem",s.jsx(he,{loading:"lazy",referrerPolicy:"no-referrer",crossOrigin:"anonymous",src:n,style:t,alt:"z Property"})),Us=({item:e})=>{const t=[s.jsx(Ws,{item:e},"1")];return e.zoopla_advert_id&&t.push(s.jsx(Qe,{item:e},"2")),e.zoopla_uprn&&t.push(s.jsx(Gs,{item:e},"3")),e.epcs&&t.push(s.jsx(qs,{item:e},"4")),s.jsxs("p",{children:[s.jsx("strong",{children:"Links:"})," ",t.reduce(F)]})},Qe=({item:e})=>{const n=`https://www.zoopla.co.uk/${e.channel==="rent"?"to-rent":"for-sale"}/details/${e.zoopla_advert_id}/`;return s.jsx(m,{icon:s.jsx(W,{}),url:n,text:"Advert"})},Ws=({item:e})=>{const t=`https://www.rightmove.co.uk/properties/${e.id}#/?channel=${e.channel}`;return s.jsx(m,{icon:s.jsx(oe,{}),url:t,text:"Advert"})},Gs=({item:e})=>{const t=`https://www.zoopla.co.uk/property/uprn/${e.zoopla_uprn}/`;return s.jsx(m,{icon:s.jsx(W,{}),url:t,text:"Estimate"})},qs=({item:e})=>s.jsxs(s.Fragment,{children:[s.jsx(oe,{})," ",e.epcs.map((t,n)=>s.jsx(M,{href:t.url,children:t.caption},n)).reduce(Hs)]}),Ks=({item:e})=>{const t=(e.floorplans??[]).map(r=>({url:r.url})).reverse(),n=(e.images??[]).concat(t);return s.jsxs(s.Fragment,{children:[n.length===0?s.jsx("p",{className:"x-noImageProvided",children:"No images provided"}):s.jsx(Js,{imagesAndFloorplans:n}),s.jsx(Ys,{item:e}),s.jsx(Xs,{item:e})]})},Js=({imagesAndFloorplans:e})=>s.jsxs(_e,{interval:xe,defaultActiveIndex:0,children:[e.map((t,n)=>s.jsxs(_e.Item,{children:[s.jsx(he,{className:"d-block",src:t.url,alt:t.caption?"caption: "+t.caption:void 0}),s.jsx(_e.Caption,{style:{display:"flex",justifyContent:"center"},children:s.jsxs("p",{children:[s.jsx("strong",{children:`${n+1}/${e.length} `}),t.caption||""]})})]},n)),e.length===0&&s.jsx(he,{className:"d-block",alt:"No images provided"})]}),Xs=({item:e})=>e.zoopla_est||e.zoopla_peak||e.zoopla_rent_estimate?s.jsxs(s.Fragment,{children:[e.zoopla_est&&s.jsx(Qs,{item:e}),e.zoopla_peak&&s.jsx(et,{item:e}),e.zoopla_rent_estimate&&s.jsx(st,{item:e})]}):e.zoopla_advert_id?s.jsx("p",{className:"x-caption-2",children:s.jsx(Qe,{item:e})}):null,Ys=({item:e})=>{const t=`https://www.rightmove.co.uk/properties/${e.id}#/media?channel=${e.channel}`,n=r=>{const o=["",`  "${e.id}": {`,'    "zoopla_advert_id": null, "zoopla_uprn": null,',`    "__address_r": "${e.address}",`,'    "notes": null, "size_sqm": null, "coordinates": null},',""];ws(o.join(`
`))};return s.jsxs("p",{className:"x-caption-1",children:[s.jsx("span",{className:"x-loop-index",onClick:n,children:e.loopIndex}),e.sold_let&&s.jsx(se,{text:"dark",bg:"warning",className:"x-badge",children:e.sold_let}),e.is_new&&s.jsx(se,{text:"light",bg:"success",className:"x-badge",children:"NEW"}),s.jsx(M,{href:t,style:{textDecoration:"none"},children:U(e.price)})]})},Qs=({item:e})=>{const t=`https://www.zoopla.co.uk/property/uprn/${e.zoopla_uprn}/`;return e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_rent_estimate)})," on"," ",s.jsxs(M,{href:t,className:"x-manual-all-link",children:[U(e.zoopla_rent_estimate),"pm ",s.jsx(W,{style:{verticalAlign:"unset"}})]})]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_est*1e3)})," on"," ",s.jsxs(M,{href:t,className:"x-manual-all-link",children:[U(e.zoopla_est*1e3)," ",s.jsx(W,{style:{verticalAlign:"unset"}})]}),e.zoopla_estimate_date&&s.jsxs("span",{children:[" in ",Xe(e.zoopla_estimate_date)]})]})},et=({item:e})=>e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:U(e.zoopla_est*1e3)}),e.zoopla_estimate_date&&s.jsxs("span",{children:[" in ",Xe(e.zoopla_estimate_date)]})]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_peak*1e3)})," on"," ",s.jsx("span",{className:"x-manual-all",children:U(e.zoopla_peak*1e3)})," peak of"," ",s.jsx("span",{className:"x-manual-all",children:e.zoopla_peak_date})]}),st=({item:e})=>e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:Ve(e.price/e.zoopla_est/1e3)})," rental yield"]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:Ve(e.zoopla_rent_estimate/e.price)})," ","rental yield at ",U(e.zoopla_rent_estimate),"pm"]}),we=(e,t)=>new Intl.NumberFormat("en-GB",{style:"percent",signDisplay:"exceptZero",minimumFractionDigits:1,maximumFractionDigits:1}).format((e-t)/t),Ve=e=>new Intl.NumberFormat("en-GB",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format((1+e)**12-1),tt=({item:e})=>{const t=e.coordinates.join(","),n=e.closest&&e.closest.coords?e.closest.coords.join(","):"",r=[s.jsx(nt,{coordsCsv:t,closeCoordsCsv:n},"1"),s.jsx(rt,{coordsCsv:t,closeCoordsCsv:n},"2"),s.jsx(ot,{coordsCsv:t},"3"),s.jsx(at,{coordsCsv:t},"4"),s.jsx(ct,{coords:e.coordinates},"5"),s.jsx(lt,{coords:e.coordinates},"6"),s.jsx(it,{coords:e.coordinates,postcode:e.address_postcode},"7"),s.jsx(dt,{coords:e.coordinates},"8"),s.jsx(pt,{coords:e.coordinates},"9")];return s.jsxs("p",{children:[s.jsx("strong",{children:"Maps:"})," ",r.reduce(F)]})},nt=({coordsCsv:e,closeCoordsCsv:t})=>{const r=We({...t?{origin:t,destination:e}:{origin:e},centreZoom:"15z"}),o=s.jsx("i",{className:"fa-solid fa-map-location",style:{color:"#b01010"}});return s.jsx(m,{icon:o,url:r,text:"Map"})},rt=({coordsCsv:e,closeCoordsCsv:t})=>{const r=We({...t?{origin:t,destination:e}:{origin:e},centreZoom:"2696m",isSatellite:!0});return s.jsx(m,{icon:"🛰",url:r,text:"Satellite"})},ot=({coordsCsv:e})=>{const t=`https://earth.google.com/web/@${e},132a,25d,35y,0h,0t,0r`;return s.jsx(m,{icon:"🌍",url:t,text:"Earth"})},at=({coordsCsv:e})=>{const t=Ts({originCsv:e}),n=s.jsx("i",{className:"fa-solid fa-street-view",style:{color:"#b08800"}});return s.jsx(m,{icon:n,url:t,text:"StreetView"})},ct=({coords:e})=>{const n=`https://open.xploria.co.uk/app/know-your-place?map=${e.slice(0).reverse().join("*")}*18&view=elcAu7IT4`;return s.jsx(m,{icon:"💰",url:n,text:"Standards"})},lt=({coords:e})=>{const n=`https://open.xploria.co.uk/app/know-your-place?map=${e.slice(0).reverse().join("*")}*18&view=elcAu7IT4&theme=w0fDyvnN_`,r=s.jsx("i",{className:"fa-solid fa-handcuffs",style:{color:"#808080"}});return s.jsx(m,{icon:r,url:n,text:"Crime"})},it=({coords:e,postcode:t})=>{const n="EPSG:4326",r="+proj=tmerc +lat_0=49 +lon_0=-2 +k=0.9996012717 +x_0=400000 +y_0=-100000 +ellps=airy +datum=OSGB36 +units=m +no_defs",[o,l]=Ls(n,r,[e[1],e[0]]).map(Math.round),d=10,h=o-d,a=o+d,p=l-d,u=l+d,i=`https://flood-map-for-planning.service.gov.uk/flood-zone-results?polygon=[[${h},${p}],[${h},${u}],[${a},${u}],[${a},${p}],[${h},${p}]]&center=[${o},${l}]&location=`+t.replaceAll(" ","%20");return s.jsx(m,{icon:"🌊",url:i,text:"Flood Zone"})},dt=({coords:e})=>{const t=e.join("%2C"),n=`https://en-gb.topographic-map.com/map/?center=${t}&zoom=16&popup=${t}`,r=s.jsx("i",{className:"fa-solid fa-mountain-sun",style:{color:"#6fcdf9"}});return s.jsx(m,{icon:r,url:n,text:"Elevation"})},pt=({coords:e})=>{const n=`https://www.cyclosm.org/#map=17/${e.join("/")}/cyclosm`,r=s.jsx("i",{className:"fa-solid fa-person-biking",style:{color:"#b01010"}});return s.jsx(m,{icon:r,url:n,text:"Cycling"})},ut=({item:e})=>{const t=[s.jsx(mt,{item:e},"1"),s.jsx(jt,{item:e},"2"),s.jsx(ht,{item:e},"3"),s.jsx(xt,{item:e},"4"),s.jsx(gt,{item:e},"5"),s.jsx(ft,{item:e},"6")];return s.jsxs("p",{children:[s.jsx("strong",{children:"In Street:"})," ",t.reduce(F)]})},ht=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.address_postcode.toUpperCase().replace(" ","%20"),r=`https://www.zoopla.co.uk/house-prices/${t}/?q=${n}&sortOrder=address&sortDirection=asc`;return s.jsx(m,{icon:s.jsx(W,{}),url:r,text:"Estimate / Sold Prices"})},xt=({item:e})=>{const n=`https://www.rightmove.co.uk/house-prices/${e.address_postcode.toLowerCase().replace(" ","-")}.html`;return s.jsx(m,{icon:s.jsx(oe,{}),url:n,text:"Sold Prices"})},ft=({item:e})=>{const n=`https://www.crime-statistics.co.uk/postcode/${e.address_postcode.toUpperCase().replace(" ","%20")}`,r=s.jsx("i",{className:"fa-solid fa-handcuffs",style:{color:"#808080"}});return s.jsx(m,{icon:r,url:n,text:"Crimes"})},mt=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.address_postcode.replace(" ","+"),r=e.channel==="rent"?`https://www.zoopla.co.uk/to-rent/property/${t}/?radius=0&q=${n}&search_source=to-rent&results_sort=newest_listings&include_rented=true`:`https://www.zoopla.co.uk/for-sale/property/${t}/?radius=0&q=${n}&search_source=for-sale&results_sort=newest_listings&is_auction=false&is_retirement_home=false&is_shared_ownership=false&include_sold=true`;return s.jsx(m,{icon:s.jsx(W,{}),url:r,text:"Adverts"})},jt=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.channel==="rent"?`https://www.onthemarket.com/to-rent/property/${t}/?let-agreed=true&radius=0.25&shared=false&student=false&view=grid`:`https://www.onthemarket.com/for-sale/property/${t}/?auction=false&radius=0.25&retirement=false&shared-ownership=false&under-offer=true&view=grid`;return s.jsx(m,{icon:s.jsx(Ye,{}),url:n,text:"Adverts"})},gt=({item:e})=>{const t=s.jsx("i",{className:"fa-solid fa-leaf",style:{color:"#659748"}}),r=`https://find-energy-certificate.service.gov.uk/find-a-certificate/search-by-postcode?postcode=${e.address_postcode.replace(" ","+")}`;return s.jsx(m,{icon:t,url:r,text:"EPCs"})},_t=({item:e})=>s.jsxs("div",{className:"x-card-right",children:[e.notes&&s.jsxs("p",{className:"x-manual-all",children:["Extra Notes: ",e.notes]}),s.jsx(vt,{item:e}),e.let_info&&s.jsx(bt,{let_info:e.let_info}),e.previous_prices&&s.jsx(yt,{prices:e.previous_prices}),s.jsx(wt,{item:e}),s.jsx(Nt,{item:e}),s.jsx(St,{item:e}),s.jsx(tt,{item:e}),s.jsx(Us,{item:e}),e.brochures&&s.jsx(Ct,{brochures:e.brochures}),e.key_features&&s.jsx($t,{features:e.key_features}),s.jsx(ut,{item:e}),s.jsx("p",{children:e.summary}),e.agency&&s.jsx(It,{agency:e.agency,id:e.id})]}),vt=({item:e})=>e.date_updated?s.jsxs("p",{children:[s.jsx("span",{className:"x-update-reason-updated",children:"Reduced"})," ",s.jsx("span",{className:"x-update-reason-updated x-date-relative","data-convert":"days","data-date":e.date_updated,children:ve(e.date_updated)})," ","days ago (on ",s.jsx("strong",{children:ue(e.date_updated)}),"). First added"," ",s.jsx("span",{className:"x-first-added x-date-relative","data-convert":"days","data-date":e.date_added,children:ve(e.date_added)})," ","days ago (on ",s.jsx("strong",{children:ue(e.date_added)}),")."]}):s.jsxs("p",{children:[s.jsx("span",{className:"x-update-reason-new",children:"New"})," ",s.jsx("span",{className:"x-update-reason-new x-date-relative","data-convert":"days","data-date":e.date_added,children:ve(e.date_added)})," ","days ago (on ",s.jsx("strong",{children:ue(e.date_added)}),")."]}),yt=({prices:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Previous prices:"})," ",e.map((t,n)=>s.jsxs("span",{children:[U(t.price)," on ",Zs(t.date)]},n)).reduce(F)]}),wt=({item:e})=>{const t=s.jsx("span",{className:"x-size-sqm",children:e.size_sqm}),n=[];return e.size_sqm&&n.push(s.jsx(m,{icon:t,text:"m²"},"1")),n.push(s.jsx(m,{icon:"🛏",text:`${e.bedrooms}`},"2")),e.bathrooms!==void 0&&n.push(s.jsx(m,{icon:"🛀",text:`${e.bathrooms}`},"3")),n.push(s.jsx(m,{icon:e.property_group_icon,text:e.property_group},"4")),s.jsx("p",{children:n.reduce(F)})},Nt=({item:e})=>{let t="";return e.address_street_num&&(t=/\d\w?$/i.test(e.address_street_num)?" ":", "),s.jsxs("p",{children:[e.address_street_num&&s.jsx("span",{className:"x-manual-all",children:e.address_street_num}),s.jsx("strong",{children:t+e.address+", "}),s.jsx("strong",{className:"x-postcode",children:e.address_postcode})]})},St=({item:e})=>s.jsxs("p",{children:[s.jsx("span",{className:"x-distance-miles",children:e.closest.miles.toFixed(2)})," miles to"," ",s.jsx("span",{className:"x-known-place",children:e.closest.place})]}),Ct=({brochures:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Brochures:"})," ",e.map((t,n)=>s.jsx(kt,{brochure:t},n)).reduce(F)]}),kt=({brochure:e})=>{const n=e.url.replace(/\?.*/,"").replace(/\/+$/,"").toLowerCase().endsWith(".pdf")?s.jsx("i",{className:"fa-solid fa-file-lines",style:{color:"#dc3545"}}):s.jsx("i",{className:"fa-solid fa-link",style:{color:"#808080"}});return s.jsx(m,{icon:n,url:e.url,text:e.caption})},$t=({features:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Other:"})," ",e.map((t,n)=>s.jsx("span",{children:t},n)).reduce(F)]}),It=({agency:e,id:t})=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"end"},children:[s.jsx(he,{src:e.url,title:e.caption,alt:e.caption,style:{maxHeight:"3rem",maxWidth:"6rem"}}),s.jsx("span",{style:{fontSize:"0.6rem",marginLeft:"1rem"},children:t})]}),bt=({let_info:e})=>{const t=[];return e.date_available&&t.push(`Available ${e.date_available}`),e.furnish&&t.push(e.furnish),e.min_duration&&t.push(`${e.min_duration} months`),t.length===0?s.jsx(s.Fragment,{}):s.jsxs("p",{children:[s.jsx("strong",{children:"Let:"})," ",t.map((n,r)=>s.jsx("span",{children:n},r)).reduce(F)]})},es=V.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},l)=>{const d=re(e,"container"),h=typeof t=="string"?`-${t}`:"-fluid";return s.jsx(n,{ref:l,...o,className:Z(r,t?`${d}${h}`:d)})});es.displayName="Container";const ss=V.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const l=re(e,"row"),d=Ds(),h=As(),a=`${l}-cols`,p=[];return d.forEach(u=>{const i=r[u];delete r[u];let f;i!=null&&typeof i=="object"?{cols:f}=i:f=i;const y=u!==h?`-${u}`:"";f!=null&&p.push(`${a}${y}-${f}`)}),s.jsx(n,{ref:o,...r,className:Z(t,l,...p)})});ss.displayName="Row";const Dt=({item:e})=>s.jsx(Ms,{className:"x-card","data-miles":e.closest.miles,"data-isflat":e.property_group_icon==="🏢",children:s.jsx(es,{fluid:!0,children:s.jsxs(ss,{children:[s.jsx(Be,{sm:"5",style:{padding:0},children:s.jsx(Ks,{item:e})}),s.jsx(Be,{sm:"7",style:{padding:"1rem",margin:"0"},children:s.jsx(_t,{item:e})})]})})}),Ze={chesterfield:"Chesterfield",chesterfield_ashgate:"Chesterfield Ashgate",chesterfield_rent:"Chesterfield rent",herts:"Herts",herts_s:"Herts_s",hitchin_johnsonpl:"Hitchin Johnson Place",hitchin_rent:"Hitchin rent",basingstoke:"Basingstoke",london:"London"},At=()=>{var h;const[e,t]=w(!0),n=new URLSearchParams(window.location.search),r=((h=n.get("data"))==null?void 0:h.replace("properties_",""))??"chesterfield_ashgate",o=n.get("nav")==="all"?["chesterfield","chesterfield_ashgate","chesterfield_rent","herts","herts_s","hitchin_johnsonpl","hitchin_rent","basingstoke","london"]:["chesterfield","chesterfield_ashgate","chesterfield_rent","herts","hitchin_johnsonpl","hitchin_rent","basingstoke"],l=a=>{t(a)},d=a=>{const p=new URLSearchParams;p.set("data",`properties_${a}`);const u=new URLSearchParams(window.location.search);return["stc","nav"].forEach(i=>{const f=u.get(i);f&&p.set(i,f)}),"?"+p.toString()};return s.jsxs(ie,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:l,expanded:e,children:[s.jsx(ie.Brand,{children:"Properties"}),s.jsx(ie.Toggle,{"aria-controls":"basic-navbar-nav"}),s.jsx(ie.Collapse,{id:"basic-navbar-nav",children:s.jsx(Is,{className:"ms-auto me-auto",children:s.jsx(Me,{title:Ze[r],active:!0,children:o.map((a,p)=>s.jsx(Me.Item,{href:d(a),active:a===r,children:Ze[a]},p))})})})]})},Et=({items:e,setItemsDisplayed:t,PAGE_LENGTH:n})=>{const[r,o]=w(parseInt(ne().get("page")??"1")),l=Math.ceil(e.length/n),d=h=>{const a=h.target.closest("a.page-link");if(!a)return;let p;a.innerText.includes("First")?p=1:a.innerText.includes("Previous")?p=Math.max(1,r-1):a.innerText.includes("Next")?p=Math.min(l,r+1):a.innerText.includes("Last")?p=l:p=parseInt(a.innerText),console.log(`Page change from: ${r} to: ${p}`),o(p),ys("page",p.toString()),document.querySelector("#x-scroll-anchor").scrollIntoView()};return L(()=>{const h=[];for(let a=0;a<e.length;++a)if(Math.floor(a/n)+1===r){const p=e[a];if(p.loopIndex=`${a+1} / ${e.length}`,h.push(p),h.length===n)break}t(h),console.log("itemsDisplayed",h.length)},[r,e,t,n]),s.jsxs(de,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"1rem"},onClick:d,children:[l>0&&s.jsx(de.Prev,{disabled:r===1,style:{width:"4rem"}}),[...Array(l).keys()].map(h=>s.jsx(de.Item,{active:h+1===r,children:h+1},h)),l>0&&s.jsx(de.Next,{disabled:r===l,style:{width:"4rem"}})]})},zt=e=>s.jsx("i",{className:"fa-solid fa-spinner fa-spin",...e}),He=({checkState:e,label:t})=>{const[n,r]=e;return s.jsxs(H,{children:[s.jsx(H.Check,{type:"switch",onChange:o=>r(o.target.checked),checked:n}),s.jsx("p",{children:t})]})},Ft=({checkState:e,labelBefore:t,labelAfter:n,maxWidth:r="3rem",textState:o})=>{const[l,d]=e,[h,a]=o,p=i=>{a(i.target.value),d(!1)},u=i=>{i.key==="Enter"?(d(!0),i.preventDefault()):d(!1)};return s.jsxs(H,{children:[s.jsx(H.Check,{type:"switch",onChange:i=>d(i.target.checked),checked:l}),s.jsx("p",{children:t}),s.jsx(H.Control,{value:h,onChange:p,style:{maxWidth:r},onKeyDown:u}),n&&s.jsx("p",{children:n})]})},Pt=({label:e,maxWidth:t,addrState:n,priceState:r,agencyState:o,idState:l})=>{const[d,h]=w(""),[a,p]=n,[u,i]=r,[f,y]=o,[N,I]=l,_=(v,g="")=>{g=g.trim(),v==="address"?p(g):v==="price"?i(g):v==="agency"?y(g):v==="id"&&I(g)},C=v=>{h(v.target.value)},S=v=>{v.key==="Enter"&&(v.preventDefault(),_("address",d))};return s.jsxs(s.Fragment,{children:[s.jsxs(H,{children:[e&&s.jsx("p",{children:e}),s.jsx(H.Control,{value:d,onChange:C,style:{maxWidth:t},onKeyDown:S}),s.jsxs(Ss,{title:"Search",variant:"success",id:"x-btn-search",onSelect:v=>_(v,d),children:[s.jsx(le.Item,{eventKey:"address",children:"in Address"}),s.jsx(le.Item,{eventKey:"price",children:"in Price"}),s.jsx(le.Item,{eventKey:"agency",children:"in Agency"}),s.jsx(le.Item,{eventKey:"id",children:"in ID"})]})]}),a&&s.jsxs(se,{pill:!0,bg:"primary",children:[s.jsx(pe,{onClick:()=>_("address"),variant:"white"}),s.jsx("span",{children:a})]}),u&&s.jsxs(se,{pill:!0,bg:"info",text:"dark",children:[s.jsx(pe,{onClick:()=>_("price")}),s.jsx("span",{children:u})]}),f&&s.jsxs(se,{pill:!0,bg:"light",text:"dark",children:[s.jsx(pe,{onClick:()=>_("agency")}),s.jsx("span",{children:f})]}),N&&s.jsxs(se,{pill:!0,bg:"dark",children:[s.jsx(pe,{onClick:()=>_("id"),variant:"white"}),s.jsx("span",{children:N})]})]})},Tt=({data:e,setItemsSelectable:t,PAGE_LENGTH:n})=>{const r=ne(),[o,l]=w(r.get("stc")==="1"),[d,h]=w(r.get("address")??""),[a,p]=w(r.get("agency")??""),[u,i]=w(r.get("noFlat")==="1"),[f,y]=w(!1),[N,I]=w("0.3"),[_,C]=w(""),[S,v]=w(""),g=j=>j.toLowerCase().replaceAll(" ","");L(()=>{const j=ne();o?j.set("stc","1"):j.delete("stc"),u?j.set("noFlat","1"):j.delete("noFlat"),d!==""?j.set("address",d):j.delete("address"),a!==""?j.set("agency",a):j.delete("agency"),Pe(j)},[o,u,d,a]),L(()=>{const j=parseFloat(N),G=g(d);let q,K;a==="z"?(q="",K=!0):(q=g(a),K=!1);const J=[];e.items.forEach($=>{o&&$.sold_let||u&&$.property_group_icon==="🏢"||f&&$.closest&&j&&$.closest.miles>j||G&&!g(($.address_street_num||"")+$.address+$.address_postcode).includes(G)||_&&!$.price.toString().includes(_)||K&&($.zoopla_advert_id||$.zoopla_uprn)||S&&!$.id.toString().includes(S)||q&&!g($.agency.caption).includes(q)||J.push($)}),t(J),console.log("itemsSelectable",J.length);const X=ne();parseInt(X.get("page")??"1")>Math.ceil(J.length/n)&&(X.set("page","1"),Pe(X))},[o,u,f,d,_,a,S]);const P=e.items.filter(j=>j.sold_let).length,R=e.items.filter(j=>j.property_group_icon==="🏢").length;return s.jsxs(s.Fragment,{children:[s.jsx(Lt,{data:e}),s.jsx(Mt,{searches:e.searches,title:e.title}),s.jsx(He,{checkState:[o,l],label:`Exclude the ${P} STCs`}),s.jsx(He,{checkState:[u,i],label:`Exclude the ${R} flats`}),s.jsx(Ft,{checkState:[f,y],labelBefore:"Exclude further than",labelAfter:"miles",maxWidth:"3rem",textState:[N,I]}),s.jsx(Pt,{maxWidth:"8rem",addrState:[d,h],priceState:[_,C],agencyState:[a,p],idState:[S,v]})]})},Lt=({data:e})=>s.jsxs("p",{children:[s.jsxs("span",{className:"x-nowrap",children:["Updated"," ",s.jsx("span",{id:"x-updated-relative",className:"x-date-relative","data-convert":"hours","data-date":e.updated_on,children:Oe(e.updated_on)})," ","ago"]})," ",s.jsxs("span",{className:"x-nowrap",children:["(on ",s.jsx("span",{children:ue(e.updated_on)}),")"]})," ",s.jsx("br",{}),"Next check starts in:"," ",s.jsx("span",{id:"x-nexton-relative",className:"x-date-relative","data-convert":"hours-negative","data-date":e.next_on,children:Oe(e.next_on,!0)})]}),Mt=({searches:e,title:t})=>s.jsxs("p",{children:[t,". Based on ",s.jsx(oe,{style:{verticalAlign:"baseline"}})," searches only:",s.jsx("br",{}),e&&e.map((n,r)=>s.jsx(Rt,{search:n},r)).reduce(F)]}),Rt=({search:e})=>s.jsxs("span",{className:"x-nowrap",children:[s.jsx(M,{href:e.url_r,children:s.jsx(oe,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx(M,{href:e.url_z,children:s.jsx(W,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx(M,{href:e.url_o,children:s.jsx(Ye,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx("strong",{children:e.name})]}),Bt=()=>{const e=ne(),t=e.get("data")??"properties_chesterfield_ashgate",n=parseInt(e.get("page")??"1"),r=T(null),[o,l]=w({__loading:!0}),[d,h]=w([]),[a,p]=w([]),u=10;if(L(()=>{let i=!0;return(async()=>{try{const y=localStorage.getItem("location"),N=y===t?localStorage.getItem("next_on"):null,I=y===t?localStorage.getItem("last_attempt"):null,_=new Date().valueOf();let C,S;I&&_-new Date(I).valueOf()<4e3?(S="FORCE RELOAD due to 2 attempts within 4s",C="reload"):N?new Date(N).valueOf()>_?(S="Keep CACHED data",C="force-cache"):(S="RELOADING as cache data expired",C="reload"):(S="LOAD first time",C="reload"),console.log(`Cache Loading info = ${S}`),r.current&&(r.current.innerText=S);const v=`https://raw.githubusercontent.com/solfegedev/solfegedev.github.io/main/data/${t}.json`;console.log(`Fetch data from server: ${v}`);const g=await fetch(v,{cache:C});if(!g.ok){const R=g.status===404?"This link seems wrong, check you have the correct one":`Failed to get data for: ${t}`;throw new Error(R)}const P=await g.json();localStorage.setItem("location",t),localStorage.setItem("next_on",new Date(P.next_on).toISOString()),localStorage.setItem("last_attempt",new Date().toISOString()),console.log(P),i&&l(P)}catch(y){i&&l({__error:`${y}`})}})().catch(console.error),()=>{i=!1}},[t]),o.favicon){const i=document.querySelector("link[rel='icon']");i.href=`img/properties/${o.favicon}`}if(document.title=o.region,o.__loading)return s.jsxs("main",{children:[s.jsx(zt,{id:"x-spinner"}),s.jsx("p",{id:"x-spinner-info",ref:r})]});if(o.__error)return s.jsx("main",{style:{color:"red"},children:o.__error});{const i=(n-1)*u+1,f=d.length,y=Math.min(f,i+u-1),N=s.jsx(Et,{items:d,setItemsDisplayed:p,PAGE_LENGTH:u});return s.jsxs(s.Fragment,{children:[s.jsx(At,{}),s.jsxs("main",{children:[s.jsx(Tt,{data:o,setItemsSelectable:h,PAGE_LENGTH:u}),s.jsxs("div",{id:"x-scroll-anchor",children:[N,f===0?s.jsx("p",{children:s.jsx("strong",{children:"No matching results"})}):s.jsxs("p",{children:["Page ",s.jsx("strong",{children:n}),": properties ",s.jsx("strong",{children:i})," -",s.jsx("strong",{children:y})," out of ",s.jsx("strong",{children:f})]}),a&&a.map((I,_)=>s.jsx(Dt,{item:I},_))]}),N]})]})}};ms.createRoot(document.getElementById("root")).render(s.jsx(_s.StrictMode,{children:s.jsx(gs,{children:s.jsx(Bt,{})})}));
