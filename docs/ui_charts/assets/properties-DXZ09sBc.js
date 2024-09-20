import{j as s,c as js}from"./client-B8KsQLkO.js";import{C as ms}from"./CookieConsentWrapper-DBLm3LwE.js";import*as V from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import gs,{useRef as T,useEffect as L,useMemo as We,useState as w,useCallback as z,useImperativeHandle as _s}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{g as ne,s as vs,a as Pe}from"./store-C6W4SrBE.js";import{D as he}from"./dates-CXaDObX2.js";import{A as M,I as xe}from"./LinkItem-BaiItiHv.js";import{B as se}from"./Badge-5hhE3xTi.js";import{u as ys,b as ws,a as Te,t as Ns,T as Ss,c as Cs,A as Le,C as le}from"./CloseButton-CUYUvxPi.js";import{u as ks,D as ie}from"./Dropdown-B2rYS5Iw.js";import{u as Is,N as de,a as bs,b as Me}from"./NavDropdown-BHMHKMX3.js";import{u as re,c as H,b as $s,d as Ds,e as As}from"./Button-Dbum-Du3.js";import{f as Es,m as Re}from"./ElementChildren-AZvnq_HE.js";import{g as Ze,a as zs}from"./googleMap-BAji2fQs.js";import{C as Fs,B as ue,D as Ps}from"./DropdownButton-B32QvKfC.js";import{C as Be,F as U}from"./Form-5wlro-Ns.js";import"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import"https://cdn.jsdelivr.net/npm/vanilla-cookieconsent@3.0.1/+esm";function Ts(e,t){const n=T(!0);L(()=>{if(n.current){n.current=!1;return}return e()},t)}const ye=2**31-1;function Je(e,t,n){const r=n-Date.now();e.current=r<=ye?setTimeout(t,r):setTimeout(()=>Je(e,t,n),ye)}function Ls(){const e=ks(),t=T();return Is(()=>clearTimeout(t.current)),We(()=>{const n=()=>clearTimeout(t.current);function r(o,l=0){e()&&(n(),l<=ye?t.current=setTimeout(o,l):Je(t,o,Date.now()+l))}return{set:r,clear:n,handleRef:t}},[])}const qe=V.forwardRef(({className:e,bsPrefix:t,as:n="div",...r},o)=>(t=re(t,"carousel-caption"),s.jsx(n,{ref:o,className:H(e,t),...r})));qe.displayName="CarouselCaption";const Ge=V.forwardRef(({as:e="div",bsPrefix:t,className:n,...r},o)=>{const l=H(n,re(t,"carousel-item"));return s.jsx(e,{ref:o,...r,className:l})});Ge.displayName="CarouselItem";const Ms=40;function Rs(e){if(!e||!e.style||!e.parentNode||!e.parentNode.style)return!1;const t=getComputedStyle(e);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(e.parentNode).display!=="none"}const Ke=V.forwardRef(({defaultActiveIndex:e=0,...t},n)=>{const{as:r="div",bsPrefix:o,slide:l=!0,fade:u=!1,controls:h=!0,indicators:a=!0,indicatorLabels:d=[],activeIndex:p,onSelect:i,onSlide:f,onSlid:y,interval:N=5e3,keyboard:b=!0,onKeyDown:_,pause:C="hover",onMouseOver:S,onMouseOut:v,wrap:g=!0,touch:P=!0,onTouchStart:R,onTouchMove:m,onTouchEnd:J,prevIcon:q=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:G="Previous",nextIcon:K=s.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:X="Next",variant:fe,className:I,children:je,...ts}=ys({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),A=re(o,"carousel"),Y=$s(),Q=T(null),[Ce,ke]=w("next"),[ns,ae]=w(!1),[ee,Ie]=w(!1),[k,rs]=w(p||0);L(()=>{!ee&&p!==k&&(Q.current?ke(Q.current):ke((p||0)>k?"next":"prev"),l&&Ie(!0),rs(p||0))},[p,ee,k,l]),L(()=>{Q.current&&(Q.current=null)});let B=0,be;Es(je,(c,x)=>{++B,x===p&&(be=c.props.interval)});const $e=ws(be),$=z(c=>{if(ee)return;let x=k-1;if(x<0){if(!g)return;x=B-1}Q.current="prev",i==null||i(x,c)},[ee,k,i,g,B]),D=Te(c=>{if(ee)return;let x=k+1;if(x>=B){if(!g)return;x=0}Q.current="next",i==null||i(x,c)}),me=T();_s(n,()=>({element:me.current,prev:$,next:D}));const De=Te(()=>{!document.hidden&&Rs(me.current)&&(Y?$():D())}),O=Ce==="next"?"start":"end";Ts(()=>{l||(f==null||f(k,O),y==null||y(k,O))},[k]);const os=`${A}-item-${Ce}`,as=`${A}-item-${O}`,cs=z(c=>{Ns(c),f==null||f(k,O)},[f,k,O]),ls=z(()=>{Ie(!1),y==null||y(k,O)},[y,k,O]),is=z(c=>{if(b&&!/input|textarea/i.test(c.target.tagName))switch(c.key){case"ArrowLeft":c.preventDefault(),Y?D(c):$(c);return;case"ArrowRight":c.preventDefault(),Y?$(c):D(c);return}_==null||_(c)},[b,_,$,D,Y]),ds=z(c=>{C==="hover"&&ae(!0),S==null||S(c)},[C,S]),us=z(c=>{ae(!1),v==null||v(c)},[v]),Ae=T(0),ce=T(0),Ee=Ls(),ps=z(c=>{Ae.current=c.touches[0].clientX,ce.current=0,C==="hover"&&ae(!0),R==null||R(c)},[C,R]),hs=z(c=>{c.touches&&c.touches.length>1?ce.current=0:ce.current=c.touches[0].clientX-Ae.current,m==null||m(c)},[m]),xs=z(c=>{if(P){const x=ce.current;Math.abs(x)>Ms&&(x>0?$(c):D(c))}C==="hover"&&Ee.set(()=>{ae(!1)},N||void 0),J==null||J(c)},[P,C,$,D,Ee,N,J]),ze=N!=null&&!ns&&!ee,ge=T();L(()=>{var c,x;if(!ze)return;const E=Y?$:D;return ge.current=window.setInterval(document.visibilityState?De:E,(c=(x=$e.current)!=null?x:N)!=null?c:void 0),()=>{ge.current!==null&&clearInterval(ge.current)}},[ze,$,D,$e,N,De,Y]);const Fe=We(()=>a&&Array.from({length:B},(c,x)=>E=>{i==null||i(x,E)}),[a,B,i]);return s.jsxs(r,{ref:me,...ts,onKeyDown:is,onMouseOver:ds,onMouseOut:us,onTouchStart:ps,onTouchMove:hs,onTouchEnd:xs,className:H(I,A,l&&"slide",u&&`${A}-fade`,fe&&`${A}-${fe}`),children:[a&&s.jsx("div",{className:`${A}-indicators`,children:Re(je,(c,x)=>s.jsx("button",{type:"button","data-bs-target":"","aria-label":d!=null&&d.length?d[x]:`Slide ${x+1}`,className:x===k?"active":void 0,onClick:Fe?Fe[x]:void 0,"aria-current":x===k},x))}),s.jsx("div",{className:`${A}-inner`,children:Re(je,(c,x)=>{const E=x===k;return l?s.jsx(Ss,{in:E,onEnter:E?cs:void 0,onEntered:E?ls:void 0,addEndListener:Cs,children:(te,fs)=>V.cloneElement(c,{...fs,className:H(c.props.className,E&&te!=="entered"&&os,(te==="entered"||te==="exiting")&&"active",(te==="entering"||te==="exiting")&&as)})}):V.cloneElement(c,{className:H(c.props.className,E&&"active")})})}),h&&s.jsxs(s.Fragment,{children:[(g||p!==0)&&s.jsxs(Le,{className:`${A}-control-prev`,onClick:$,children:[q,G&&s.jsx("span",{className:"visually-hidden",children:G})]}),(g||p!==B-1)&&s.jsxs(Le,{className:`${A}-control-next`,onClick:D,children:[K,X&&s.jsx("span",{className:"visually-hidden",children:X})]})]})]})});Ke.displayName="Carousel";const _e=Object.assign(Ke,{Caption:qe,Item:Ge});let Ne=new Date;const pe=e=>{const t=new Date(e),n={day:"numeric",month:"short",year:"numeric"},r=Ne.valueOf()-t.valueOf();return r<14*he&&(n.weekday="long"),r<2*he&&(n.hour="numeric",n.minute="numeric"),t.toLocaleDateString("en-GB",n)},Bs=e=>{const t=new Date(e),n={day:"numeric",month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",n)},Xe=e=>{const t=new Date(e),n={month:"short",year:"numeric"};return t.toLocaleDateString("en-GB",n)},ve=e=>{const t=new Date(e);return((Ne.valueOf()-t.valueOf())/he).toLocaleString("en-GB",{maximumFractionDigits:1})},Oe=(e,t=!1)=>{if(e===void 0)return"";const n=new Date(e),r=Ne.valueOf()-n.valueOf();let o=(t?-r:r)/6e4;const l=o<0?"-":"";o=Math.abs(o);const u=Math.floor(o/60),a=Math.floor(o%60).toLocaleString("en-GB",{minimumIntegerDigits:2});return`${l}${u}h${a}m`},W=e=>new Intl.NumberFormat("en-GB",{style:"currency",currency:"GBP",maximumFractionDigits:0}).format(e),Os=(e,t)=>s.jsxs(s.Fragment,{children:[e,", ",t]}),F=(e,t)=>s.jsxs(s.Fragment,{children:[e," ◆ ",t]}),j=({icon:e,text:t,url:n=""})=>{const r=n?s.jsx(M,{href:n,children:t}):t;return s.jsxs("span",{className:"x-nowrap",children:[e," ",r]})},oe=({isLink:e=!1,style:t={}})=>s.jsx(Se,{src:"img/properties/r.ico",isLink:e,style:t}),Z=({isLink:e=!1,style:t={}})=>s.jsx(Se,{src:"img/properties/z.ico",isLink:e,style:t}),Ye=({isLink:e=!1,style:t={}})=>s.jsx(Se,{src:"img/properties/o.ico",isLink:e,style:t}),Se=({isLink:e=!1,style:t={},src:n})=>(t.width=e?"1.4rem":"1rem",s.jsx(xe,{loading:"lazy",referrerPolicy:"no-referrer",crossOrigin:"anonymous",src:n,style:t,alt:"z Property"})),Vs=({item:e})=>{const t=[s.jsx(Hs,{item:e},"1")];return e.zoopla_advert_id&&t.push(s.jsx(Qe,{item:e},"2")),e.zoopla_uprn&&t.push(s.jsx(Us,{item:e},"3")),e.epcs&&t.push(s.jsx(Ws,{item:e},"4")),s.jsxs("p",{children:[s.jsx("strong",{children:"Links:"})," ",t.reduce(F)]})},Qe=({item:e})=>{const n=`https://www.zoopla.co.uk/${e.channel==="rent"?"to-rent":"for-sale"}/details/${e.zoopla_advert_id}/`;return s.jsx(j,{icon:s.jsx(Z,{}),url:n,text:"Advert"})},Hs=({item:e})=>{const t=`https://www.rightmove.co.uk/properties/${e.id}#/?channel=${e.channel}`;return s.jsx(j,{icon:s.jsx(oe,{}),url:t,text:"Advert"})},Us=({item:e})=>{const t=`https://www.zoopla.co.uk/property/uprn/${e.zoopla_uprn}/`;return s.jsx(j,{icon:s.jsx(Z,{}),url:t,text:"Estimate"})},Ws=({item:e})=>s.jsxs(s.Fragment,{children:[s.jsx(oe,{})," ",e.epcs.map((t,n)=>s.jsx(M,{href:t.url,children:t.caption},n)).reduce(Os)]}),Zs=({item:e})=>{const t=(e.floorplans??[]).map(r=>({url:r.url})).reverse(),n=(e.images??[]).concat(t);return s.jsxs(s.Fragment,{children:[n.length===0?s.jsx("p",{className:"x-noImageProvided",children:"No images provided"}):s.jsx(Js,{imagesAndFloorplans:n}),s.jsx(Gs,{item:e}),s.jsx(qs,{item:e})]})},Js=({imagesAndFloorplans:e})=>s.jsxs(_e,{interval:he,defaultActiveIndex:0,children:[e.map((t,n)=>s.jsxs(_e.Item,{children:[s.jsx(xe,{className:"d-block",src:t.url,alt:t.caption?"caption: "+t.caption:void 0}),s.jsx(_e.Caption,{style:{display:"flex",justifyContent:"center"},children:s.jsxs("p",{children:[s.jsx("strong",{children:`${n+1}/${e.length} `}),t.caption||""]})})]},n)),e.length===0&&s.jsx(xe,{className:"d-block",alt:"No images provided"})]}),qs=({item:e})=>e.zoopla_est||e.zoopla_peak||e.zoopla_rent_estimate?s.jsxs(s.Fragment,{children:[e.zoopla_est&&s.jsx(Ks,{item:e}),e.zoopla_peak&&s.jsx(Xs,{item:e}),e.zoopla_rent_estimate&&s.jsx(Ys,{item:e})]}):e.zoopla_advert_id?s.jsx("p",{className:"x-caption-2",children:s.jsx(Qe,{item:e})}):null,Gs=({item:e})=>{const t=`https://www.rightmove.co.uk/properties/${e.id}#/media?channel=${e.channel}`,n=r=>{const o=["",`  "${e.id}": {`,'    "zoopla_advert_id": null, "zoopla_uprn": null,',`    "__address_r": "${e.address}",`,'    "notes": null, "size_sqm": null, "coordinates": null},',""];navigator.clipboard.writeText(o.join(`
`))};return s.jsxs("p",{className:"x-caption-1",children:[s.jsx("span",{className:"x-loop-index",onClick:n,children:e.loopIndex}),e.sold_let&&s.jsx(se,{text:"dark",bg:"warning",className:"x-badge",children:e.sold_let}),e.is_new&&s.jsx(se,{text:"light",bg:"success",className:"x-badge",children:"NEW"}),s.jsx(M,{href:t,style:{textDecoration:"none"},children:W(e.price)})]})},Ks=({item:e})=>{const t=`https://www.zoopla.co.uk/property/uprn/${e.zoopla_uprn}/`;return e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_rent_estimate)})," on"," ",s.jsxs(M,{href:t,className:"x-manual-all",children:[W(e.zoopla_rent_estimate),"pm ",s.jsx(Z,{style:{verticalAlign:"unset"}})]})]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_est*1e3)})," on"," ",s.jsxs(M,{href:t,className:"x-manual-all",children:[W(e.zoopla_est*1e3)," ",s.jsx(Z,{style:{verticalAlign:"unset"}})]}),e.zoopla_estimate_date&&s.jsxs("span",{children:[" in ",Xe(e.zoopla_estimate_date)]})]})},Xs=({item:e})=>e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:W(e.zoopla_est*1e3)}),e.zoopla_estimate_date&&s.jsxs("span",{children:[" in ",Xe(e.zoopla_estimate_date)]})]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:we(e.price,e.zoopla_peak*1e3)})," on"," ",s.jsx("span",{className:"x-manual-all",children:W(e.zoopla_peak*1e3)})," peak of"," ",s.jsx("span",{className:"x-manual-all",children:e.zoopla_peak_date})]}),Ys=({item:e})=>e.channel==="rent"?s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:Ve(e.price/e.zoopla_est/1e3)})," rental yield"]}):s.jsxs("p",{className:"x-caption-2",children:[s.jsx("span",{className:"x-manual-all",children:Ve(e.zoopla_rent_estimate/e.price)})," ","rental yield at ",W(e.zoopla_rent_estimate),"pm"]}),we=(e,t)=>new Intl.NumberFormat("en-GB",{style:"percent",signDisplay:"exceptZero",minimumFractionDigits:1,maximumFractionDigits:1}).format((e-t)/t),Ve=e=>new Intl.NumberFormat("en-GB",{style:"percent",minimumFractionDigits:2,maximumFractionDigits:2}).format((1+e)**12-1),Qs=({item:e})=>{const t=e.coordinates.join(","),n=e.closest&&e.closest.coords?e.closest.coords.join(","):"",r=[s.jsx(et,{coordsCsv:t,closeCoordsCsv:n},"1"),s.jsx(st,{coordsCsv:t,closeCoordsCsv:n},"2"),s.jsx(tt,{coordsCsv:t},"3"),s.jsx(nt,{coordsCsv:t},"4"),s.jsx(rt,{coords:e.coordinates},"5"),s.jsx(ot,{coords:e.coordinates},"6"),s.jsx(at,{coords:e.coordinates},"7"),s.jsx(ct,{coords:e.coordinates},"8"),s.jsx(lt,{coords:e.coordinates},"9")];return s.jsxs("p",{children:[s.jsx("strong",{children:"Maps:"})," ",r.reduce(F)]})},et=({coordsCsv:e,closeCoordsCsv:t})=>{const r=Ze({...t?{origin:t,destination:e}:{origin:e},centreZoom:"15z"}),o=s.jsx("i",{className:"fa-solid fa-map-location",style:{color:"#b01010"}});return s.jsx(j,{icon:o,url:r,text:"Map"})},st=({coordsCsv:e,closeCoordsCsv:t})=>{const r=Ze({...t?{origin:t,destination:e}:{origin:e},centreZoom:"2696m",isSatellite:!0});return s.jsx(j,{icon:"🛰",url:r,text:"Satellite"})},tt=({coordsCsv:e})=>{const t=`https://earth.google.com/web/@${e},132a,25d,35y,0h,0t,0r`;return s.jsx(j,{icon:"🌍",url:t,text:"Earth"})},nt=({coordsCsv:e})=>{const t=zs({originCsv:e}),n=s.jsx("i",{className:"fa-solid fa-street-view",style:{color:"#b08800"}});return s.jsx(j,{icon:n,url:t,text:"StreetView"})},rt=({coords:e})=>{const n=`https://open.xploria.co.uk/app/know-your-place?map=${e.slice(0).reverse().join("*")}*18&view=elcAu7IT4`;return s.jsx(j,{icon:"💰",url:n,text:"Standards"})},ot=({coords:e})=>{const n=`https://open.xploria.co.uk/app/know-your-place?map=${e.slice(0).reverse().join("*")}*18&view=elcAu7IT4&theme=w0fDyvnN_`,r=s.jsx("i",{className:"fa-solid fa-handcuffs",style:{color:"#808080"}});return s.jsx(j,{icon:r,url:n,text:"Crime"})},at=({coords:e})=>{const n=`https://parallel.co.uk/rofrs/#16/${e.join("/")}`;return s.jsx(j,{icon:"🌊",url:n,text:"Flood"})},ct=({coords:e})=>{const t=e.join("%2C"),n=`https://en-gb.topographic-map.com/map/?center=${t}&zoom=16&popup=${t}`,r=s.jsx("i",{className:"fa-solid fa-mountain-sun",style:{color:"#6fcdf9"}});return s.jsx(j,{icon:r,url:n,text:"Elevation"})},lt=({coords:e})=>{const n=`https://www.cyclosm.org/#map=17/${e.join("/")}/cyclosm`,r=s.jsx("i",{className:"fa-solid fa-person-biking",style:{color:"#b01010"}});return s.jsx(j,{icon:r,url:n,text:"Cycling"})},it=({item:e})=>{const t=[s.jsx(ht,{item:e},"1"),s.jsx(xt,{item:e},"2"),s.jsx(dt,{item:e},"3"),s.jsx(ut,{item:e},"4"),s.jsx(ft,{item:e},"5"),s.jsx(pt,{item:e},"6")];return s.jsxs("p",{children:[s.jsx("strong",{children:"In Street:"})," ",t.reduce(F)]})},dt=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.address_postcode.toUpperCase().replace(" ","%20"),r=`https://www.zoopla.co.uk/house-prices/${t}/?q=${n}&sortOrder=address&sortDirection=asc`;return s.jsx(j,{icon:s.jsx(Z,{}),url:r,text:"Estimate / Sold Prices"})},ut=({item:e})=>{const n=`https://www.rightmove.co.uk/house-prices/${e.address_postcode.toLowerCase().replace(" ","-")}.html`;return s.jsx(j,{icon:s.jsx(oe,{}),url:n,text:"Sold Prices"})},pt=({item:e})=>{const n=`https://www.crime-statistics.co.uk/postcode/${e.address_postcode.toUpperCase().replace(" ","%20")}`,r=s.jsx("i",{className:"fa-solid fa-handcuffs",style:{color:"#808080"}});return s.jsx(j,{icon:r,url:n,text:"Crimes"})},ht=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.address_postcode.replace(" ","+"),r=e.channel==="rent"?`https://www.zoopla.co.uk/to-rent/property/${t}/?radius=0&q=${n}&search_source=to-rent&results_sort=newest_listings&include_rented=true`:`https://www.zoopla.co.uk/for-sale/property/${t}/?radius=0&q=${n}&search_source=for-sale&results_sort=newest_listings&is_auction=false&is_retirement_home=false&is_shared_ownership=false&include_sold=true`;return s.jsx(j,{icon:s.jsx(Z,{}),url:r,text:"Adverts"})},xt=({item:e})=>{const t=e.address_postcode.toLowerCase().replace(" ","-"),n=e.channel==="rent"?`https://www.onthemarket.com/to-rent/property/${t}/?let-agreed=true&radius=0.25&shared=false&student=false&view=grid`:`https://www.onthemarket.com/for-sale/property/${t}/?auction=false&radius=0.25&retirement=false&shared-ownership=false&under-offer=true&view=grid`;return s.jsx(j,{icon:s.jsx(Ye,{}),url:n,text:"Adverts"})},ft=({item:e})=>{const t=s.jsx("i",{className:"fa-solid fa-leaf",style:{color:"#659748"}}),r=`https://find-energy-certificate.service.gov.uk/find-a-certificate/search-by-postcode?postcode=${e.address_postcode.replace(" ","+")}`;return s.jsx(j,{icon:t,url:r,text:"EPCs"})},jt=({item:e})=>s.jsxs("div",{className:"x-card-right",children:[e.notes&&s.jsxs("p",{className:"x-manual-all",children:["Extra Notes: ",e.notes]}),s.jsx(mt,{item:e}),e.let_info&&s.jsx(kt,{let_info:e.let_info}),e.previous_prices&&s.jsx(gt,{prices:e.previous_prices}),s.jsx(_t,{item:e}),s.jsx(vt,{item:e}),s.jsx(yt,{item:e}),s.jsx(Qs,{item:e}),s.jsx(Vs,{item:e}),e.brochures&&s.jsx(wt,{brochures:e.brochures}),e.key_features&&s.jsx(St,{features:e.key_features}),s.jsx(it,{item:e}),s.jsx("p",{children:e.summary}),e.agency&&s.jsx(Ct,{agency:e.agency,id:e.id})]}),mt=({item:e})=>e.date_updated?s.jsxs("p",{children:[s.jsx("span",{className:"x-update-reason-updated",children:"Reduced"})," ",s.jsx("span",{className:"x-update-reason-updated x-date-relative","data-convert":"days","data-date":e.date_updated,children:ve(e.date_updated)})," ","days ago (on ",s.jsx("strong",{children:pe(e.date_updated)}),"). First added"," ",s.jsx("span",{className:"x-first-added x-date-relative","data-convert":"days","data-date":e.date_added,children:ve(e.date_added)})," ","days ago (on ",s.jsx("strong",{children:pe(e.date_added)}),")."]}):s.jsxs("p",{children:[s.jsx("span",{className:"x-update-reason-new",children:"New"})," ",s.jsx("span",{className:"x-update-reason-new x-date-relative","data-convert":"days","data-date":e.date_added,children:ve(e.date_added)})," ","days ago (on ",s.jsx("strong",{children:pe(e.date_added)}),")."]}),gt=({prices:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Previous prices:"})," ",e.map((t,n)=>s.jsxs("span",{children:[W(t.price)," on ",Bs(t.date)]},n)).reduce(F)]}),_t=({item:e})=>{const t=s.jsx("span",{className:"x-size-sqm",children:e.size_sqm}),n=[];return e.size_sqm&&n.push(s.jsx(j,{icon:t,text:"m²"},"1")),n.push(s.jsx(j,{icon:"🛏",text:`${e.bedrooms}`},"2")),e.bathrooms!==void 0&&n.push(s.jsx(j,{icon:"🛀",text:`${e.bathrooms}`},"3")),n.push(s.jsx(j,{icon:e.property_group_icon,text:e.property_group},"4")),s.jsx("p",{children:n.reduce(F)})},vt=({item:e})=>{let t="";return e.address_street_num&&(t=/\d\w?$/i.test(e.address_street_num)?" ":", "),s.jsxs("p",{children:[e.address_street_num&&s.jsx("span",{className:"x-manual-all",children:e.address_street_num}),s.jsx("strong",{children:t+e.address+", "}),s.jsx("strong",{className:"x-postcode",children:e.address_postcode})]})},yt=({item:e})=>s.jsxs("p",{children:[s.jsx("span",{className:"x-distance-miles",children:e.closest.miles.toFixed(2)})," miles to"," ",s.jsx("span",{className:"x-known-place",children:e.closest.place})]}),wt=({brochures:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Brochures:"})," ",e.map((t,n)=>s.jsx(Nt,{brochure:t},n)).reduce(F)]}),Nt=({brochure:e})=>{const n=e.url.replace(/\?.*/,"").replace(/\/+$/,"").toLowerCase().endsWith(".pdf")?s.jsx("i",{className:"fa-solid fa-file-lines",style:{color:"#dc3545"}}):s.jsx("i",{className:"fa-solid fa-link",style:{color:"#808080"}});return s.jsx(j,{icon:n,url:e.url,text:e.caption})},St=({features:e})=>s.jsxs("p",{children:[s.jsx("strong",{children:"Other:"})," ",e.map((t,n)=>s.jsx("span",{children:t},n)).reduce(F)]}),Ct=({agency:e,id:t})=>s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"end"},children:[s.jsx(xe,{src:e.url,title:e.caption,alt:e.caption,style:{maxHeight:"3rem",maxWidth:"6rem"}}),s.jsx("span",{style:{fontSize:"0.6rem",marginLeft:"1rem"},children:t})]}),kt=({let_info:e})=>{const t=[];return e.date_available&&t.push(`Available ${e.date_available}`),e.furnish&&t.push(e.furnish),e.min_duration&&t.push(`${e.min_duration} months`),t.length===0?s.jsx(s.Fragment,{}):s.jsxs("p",{children:[s.jsx("strong",{children:"Let:"})," ",t.map((n,r)=>s.jsx("span",{children:n},r)).reduce(F)]})},es=V.forwardRef(({bsPrefix:e,fluid:t=!1,as:n="div",className:r,...o},l)=>{const u=re(e,"container"),h=typeof t=="string"?`-${t}`:"-fluid";return s.jsx(n,{ref:l,...o,className:H(r,t?`${u}${h}`:u)})});es.displayName="Container";const ss=V.forwardRef(({bsPrefix:e,className:t,as:n="div",...r},o)=>{const l=re(e,"row"),u=Ds(),h=As(),a=`${l}-cols`,d=[];return u.forEach(p=>{const i=r[p];delete r[p];let f;i!=null&&typeof i=="object"?{cols:f}=i:f=i;const y=p!==h?`-${p}`:"";f!=null&&d.push(`${a}${y}-${f}`)}),s.jsx(n,{ref:o,...r,className:H(t,l,...d)})});ss.displayName="Row";const It=({item:e})=>s.jsx(Fs,{className:"x-card","data-miles":e.closest.miles,"data-isflat":e.property_group_icon==="🏢",children:s.jsx(es,{fluid:!0,children:s.jsxs(ss,{children:[s.jsx(Be,{sm:"5",style:{padding:0},children:s.jsx(Zs,{item:e})}),s.jsx(Be,{sm:"7",style:{padding:"1rem",margin:"0"},children:s.jsx(jt,{item:e})})]})})}),He={chesterfield:"Chesterfield",chesterfield_ashgate:"Chesterfield Ashgate",chesterfield_rent:"Chesterfield rent",herts:"Herts",herts_s:"Herts_s",hitchin_johnsonpl:"Hitchin Johnson Place",hitchin_rent:"Hitchin rent",basingstoke:"Basingstoke",london:"London"},bt=()=>{var h;const[e,t]=w(!0),n=new URLSearchParams(window.location.search),r=((h=n.get("data"))==null?void 0:h.replace("properties_",""))??"chesterfield_ashgate",o=n.get("nav")==="all"?["chesterfield","chesterfield_ashgate","chesterfield_rent","herts","herts_s","hitchin_johnsonpl","hitchin_rent","basingstoke","london"]:["chesterfield","chesterfield_ashgate","chesterfield_rent","herts","hitchin_johnsonpl","hitchin_rent","basingstoke"],l=a=>{t(a)},u=a=>{const d=new URLSearchParams;d.set("data",`properties_${a}`);const p=new URLSearchParams(window.location.search);return["stc","nav"].forEach(i=>{const f=p.get(i);f&&d.set(i,f)}),"?"+d.toString()};return s.jsxs(de,{id:"x-navbar",expand:"sm",variant:"dark",onToggle:l,expanded:e,children:[s.jsx(de.Brand,{children:"Properties"}),s.jsx(de.Toggle,{"aria-controls":"basic-navbar-nav"}),s.jsx(de.Collapse,{id:"basic-navbar-nav",children:s.jsx(bs,{className:"ms-auto me-auto",children:s.jsx(Me,{title:He[r],children:o.map((a,d)=>s.jsx(Me.Item,{href:u(a),active:a===r,children:He[a]},d))})})})]})},$t=({items:e,setItemsDisplayed:t,PAGE_LENGTH:n})=>{const[r,o]=w(parseInt(ne().get("page")??"1")),l=Math.ceil(e.length/n),u=h=>{const a=h.target.closest("a.page-link");if(!a)return;let d;a.innerText.includes("First")?d=1:a.innerText.includes("Previous")?d=Math.max(1,r-1):a.innerText.includes("Next")?d=Math.min(l,r+1):a.innerText.includes("Last")?d=l:d=parseInt(a.innerText),console.log(`Page change from: ${r} to: ${d}`),o(d),vs("page",d.toString()),document.querySelector("#x-scroll-anchor").scrollIntoView()};return L(()=>{const h=[];for(let a=0;a<e.length;++a)if(Math.floor(a/n)+1===r){const d=e[a];if(d.loopIndex=`${a+1} / ${e.length}`,h.push(d),h.length===n)break}t(h),console.log("itemsDisplayed",h.length)},[r,e,t,n]),s.jsxs(ue,{style:{display:"flex",justifyContent:"center",flexWrap:"wrap",marginTop:"1rem"},onClick:u,children:[l>0&&s.jsx(ue.Prev,{disabled:r===1,style:{width:"4rem"}}),[...Array(l).keys()].map(h=>s.jsx(ue.Item,{active:h+1===r,children:h+1},h)),l>0&&s.jsx(ue.Next,{disabled:r===l,style:{width:"4rem"}})]})},Dt=e=>s.jsx("i",{className:"fa-solid fa-spinner fa-spin",...e}),Ue=({checkState:e,label:t})=>{const[n,r]=e;return s.jsxs(U,{children:[s.jsx(U.Check,{type:"switch",onChange:o=>r(o.target.checked),checked:n}),s.jsx("p",{children:t})]})},At=({checkState:e,labelBefore:t,labelAfter:n,maxWidth:r="3rem",textState:o})=>{const[l,u]=e,[h,a]=o,d=i=>{a(i.target.value),u(!1)},p=i=>{i.key==="Enter"?(u(!0),i.preventDefault()):u(!1)};return s.jsxs(U,{children:[s.jsx(U.Check,{type:"switch",onChange:i=>u(i.target.checked),checked:l}),s.jsx("p",{children:t}),s.jsx(U.Control,{value:h,onChange:d,style:{maxWidth:r},onKeyDown:p}),n&&s.jsx("p",{children:n})]})},Et=({label:e,maxWidth:t,addrState:n,priceState:r,agencyState:o,idState:l})=>{const[u,h]=w(""),[a,d]=n,[p,i]=r,[f,y]=o,[N,b]=l,_=(v,g="")=>{g=g.trim(),v==="address"?d(g):v==="price"?i(g):v==="agency"?y(g):v==="id"&&b(g)},C=v=>{h(v.target.value)},S=v=>{v.key==="Enter"&&(v.preventDefault(),_("address",u))};return s.jsxs(s.Fragment,{children:[s.jsxs(U,{children:[e&&s.jsx("p",{children:e}),s.jsx(U.Control,{value:u,onChange:C,style:{maxWidth:t},onKeyDown:S}),s.jsxs(Ps,{title:"Search",variant:"success",id:"x-btn-search",onSelect:v=>_(v,u),children:[s.jsx(ie.Item,{eventKey:"address",children:"in Address"}),s.jsx(ie.Item,{eventKey:"price",children:"in Price"}),s.jsx(ie.Item,{eventKey:"agency",children:"in Agency"}),s.jsx(ie.Item,{eventKey:"id",children:"in ID"})]})]}),a&&s.jsxs(se,{pill:!0,bg:"primary",children:[s.jsx(le,{onClick:()=>_("address"),variant:"white"}),s.jsx("span",{children:a})]}),p&&s.jsxs(se,{pill:!0,bg:"info",text:"dark",children:[s.jsx(le,{onClick:()=>_("price")}),s.jsx("span",{children:p})]}),f&&s.jsxs(se,{pill:!0,bg:"light",text:"dark",children:[s.jsx(le,{onClick:()=>_("agency")}),s.jsx("span",{children:f})]}),N&&s.jsxs(se,{pill:!0,bg:"dark",children:[s.jsx(le,{onClick:()=>_("id"),variant:"white"}),s.jsx("span",{children:N})]})]})},zt=({data:e,setItemsSelectable:t,PAGE_LENGTH:n})=>{const r=ne(),[o,l]=w(r.get("stc")==="1"),[u,h]=w(r.get("address")??""),[a,d]=w(r.get("agency")??""),[p,i]=w(r.get("noFlat")==="1"),[f,y]=w(!1),[N,b]=w("0.3"),[_,C]=w(""),[S,v]=w(""),g=m=>m.toLowerCase().replaceAll(" ","");L(()=>{const m=ne();o?m.set("stc","1"):m.delete("stc"),p?m.set("noFlat","1"):m.delete("noFlat"),u!==""?m.set("address",u):m.delete("address"),a!==""?m.set("agency",a):m.delete("agency"),Pe(m)},[o,p,u,a]),L(()=>{const m=parseFloat(N),J=g(u);let q,G;a==="z"?(q="",G=!0):(q=g(a),G=!1);const K=[];e.items.forEach(I=>{o&&I.sold_let||p&&I.property_group_icon==="🏢"||f&&I.closest&&m&&I.closest.miles>m||J&&!g((I.address_street_num||"")+I.address+I.address_postcode).includes(J)||_&&!I.price.toString().includes(_)||G&&(I.zoopla_advert_id||I.zoopla_uprn)||S&&!I.id.toString().includes(S)||q&&!g(I.agency.caption).includes(q)||K.push(I)}),t(K),console.log("itemsSelectable",K.length);const X=ne();parseInt(X.get("page")??"1")>Math.ceil(K.length/n)&&(X.set("page","1"),Pe(X))},[o,p,f,u,_,a,S]);const P=e.items.filter(m=>m.sold_let).length,R=e.items.filter(m=>m.property_group_icon==="🏢").length;return s.jsxs(s.Fragment,{children:[s.jsx(Ft,{data:e}),s.jsx(Pt,{searches:e.searches,title:e.title}),s.jsx(Ue,{checkState:[o,l],label:`Exclude the ${P} STCs`}),s.jsx(Ue,{checkState:[p,i],label:`Exclude the ${R} flats`}),s.jsx(At,{checkState:[f,y],labelBefore:"Exclude further than",labelAfter:"miles",maxWidth:"3rem",textState:[N,b]}),s.jsx(Et,{maxWidth:"8rem",addrState:[u,h],priceState:[_,C],agencyState:[a,d],idState:[S,v]})]})},Ft=({data:e})=>s.jsxs("p",{children:[s.jsxs("span",{className:"x-nowrap",children:["Updated"," ",s.jsx("span",{id:"x-updated-relative",className:"x-date-relative","data-convert":"hours","data-date":e.updated_on,children:Oe(e.updated_on)})," ","ago"]})," ",s.jsxs("span",{className:"x-nowrap",children:["(on ",s.jsx("span",{children:pe(e.updated_on)}),")"]})," ",s.jsx("br",{}),"Next check starts in:"," ",s.jsx("span",{id:"x-nexton-relative",className:"x-date-relative","data-convert":"hours-negative","data-date":e.next_on,children:Oe(e.next_on,!0)})]}),Pt=({searches:e,title:t})=>s.jsxs("p",{children:[t,". Based on ",s.jsx(oe,{style:{verticalAlign:"baseline"}})," searches only:",s.jsx("br",{}),e&&e.map((n,r)=>s.jsx(Tt,{search:n},r)).reduce(F)]}),Tt=({search:e})=>s.jsxs("span",{className:"x-nowrap",children:[s.jsx(M,{href:e.url_r,children:s.jsx(oe,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx(M,{href:e.url_z,children:s.jsx(Z,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx(M,{href:e.url_o,children:s.jsx(Ye,{isLink:!0,style:{verticalAlign:"sub"}})})," ",s.jsx("strong",{children:e.name})]}),Lt=()=>{const e=ne(),t=e.get("data")??"properties_chesterfield_ashgate",n=parseInt(e.get("page")??"1"),r=T(null),[o,l]=w({__loading:!0}),[u,h]=w([]),[a,d]=w([]),p=10;if(L(()=>{let i=!0;return(async()=>{try{const y=localStorage.getItem("location"),N=y===t?localStorage.getItem("next_on"):null,b=y===t?localStorage.getItem("last_attempt"):null,_=new Date().valueOf();let C,S;b&&_-new Date(b).valueOf()<4e3?(S="FORCE RELOAD due to 2 attempts within 4s",C="reload"):N?new Date(N).valueOf()>_?(S="Keep CACHED data",C="force-cache"):(S="RELOADING as cache data expired",C="reload"):(S="LOAD first time",C="reload"),console.log(`Cache Loading info = ${S}`),r.current&&(r.current.innerText=S);const v=`https://raw.githubusercontent.com/solfegedev/solfegedev.github.io/main/data/${t}.json`;console.log(`Fetch data from server: ${v}`);const g=await fetch(v,{cache:C});if(!g.ok){const R=g.status===404?"This link seems wrong, check you have the correct one":`Failed to get data for: ${t}`;throw new Error(R)}const P=await g.json();localStorage.setItem("location",t),localStorage.setItem("next_on",new Date(P.next_on).toISOString()),localStorage.setItem("last_attempt",new Date().toISOString()),console.log(P),i&&l(P)}catch(y){i&&l({__error:`${y}`})}})().catch(console.error),()=>{i=!1}},[t]),o.favicon){const i=document.querySelector("link[rel='icon']");i.href=`img/properties/${o.favicon}`}if(document.title=o.region,o.__loading)return s.jsxs("main",{children:[s.jsx(Dt,{id:"x-spinner"}),s.jsx("p",{id:"x-spinner-info",ref:r})]});if(o.__error)return s.jsx("main",{style:{color:"red"},children:o.__error});{const i=(n-1)*p+1,f=u.length,y=Math.min(f,i+p-1),N=s.jsx($t,{items:u,setItemsDisplayed:d,PAGE_LENGTH:p});return s.jsxs(s.Fragment,{children:[s.jsx(bt,{}),s.jsxs("main",{children:[s.jsx(zt,{data:o,setItemsSelectable:h,PAGE_LENGTH:p}),s.jsxs("div",{id:"x-scroll-anchor",children:[N,f===0?s.jsx("p",{children:s.jsx("strong",{children:"No matching results"})}):s.jsxs("p",{children:["Page ",s.jsx("strong",{children:n}),": properties ",s.jsx("strong",{children:i})," -",s.jsx("strong",{children:y})," out of ",s.jsx("strong",{children:f})]}),a&&a.map((b,_)=>s.jsx(It,{item:b},_))]}),N]})]})}};js.createRoot(document.getElementById("root")).render(s.jsx(gs.StrictMode,{children:s.jsx(ms,{children:s.jsx(Lt,{})})}));