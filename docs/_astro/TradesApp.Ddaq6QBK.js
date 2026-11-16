import{a as e}from"./rolldown-runtime.BWaJ3C7D.js";import{t}from"./react.BA5QM5Sm.js";import{t as n}from"./jsx-runtime.CAVSUwWZ.js";import{t as r}from"./external-link.BSO3Ni-t.js";import{n as i,t as a}from"./phone.8JS1yGu_.js";import{t as o}from"./search.Cyv4Jr9i.js";import{r as s}from"./js-yaml.Cluk36bs.js";import{t as c}from"./lib.ClpTd3Zn.js";import{c as l,d as u,f as d,i as f,l as p,n as m,o as h,r as g,t as _,u as v}from"./schemas.CdY4H3Rw.js";var y=e(t(),1),b=[`cleaner`,`decorator`,`electrician`,`handyman`,`locksmith`,`plumber`],x={cleaner:`Cleaner`,decorator:`Decorator`,electrician:`Electrician`,handyman:`Handyman`,locksmith:`Locksmith`,plumber:`Plumber`},S=`---
name: "Bright Spark Electrics"
category: "electrician"
recommended_by:
  - "Resident, Flat 21"
email: "bookings@brightspark.example"
website: "https://brightspark.example"
area: "Borough-wide"
last_used_year: 2026
verified_date: "2026-07-06"
---

Replaced light fittings and checked a tripping circuit.
`,C=`---
name: "Clear View Cleaning"
category: "cleaner"
recommended_by:
  - "Resident, Flat 8"
phone: "07123 100100"
email: "hello@clearview.example"
area: "Local"
last_used_year: 2026
verified_date: "2026-07-06"
---

Helpful for end-of-tenancy and communal hallway cleaning.
`,w=`---
name: "Fix It Local"
category: "handyman"
recommended_by:
  - "Resident, Flat 14"
  - "Resident, Flat 18"
phone: "07123 300300"
area: "Local"
last_used_year: 2026
verified_date: "2026-07-06"
---

Small repairs, shelves, curtain rails, and door adjustments.
`,T=`---
name: "Fresh Coat Decorating"
category: "decorator"
recommended_by:
  - "Resident, Flat 3"
phone: "07123 200200"
website: "https://freshcoat.example"
area: "Local"
last_used_year: 2025
verified_date: "2026-07-06"
---

Painted bedrooms neatly and protected flooring well.
`,E=`---
name: "Key Safe Locksmiths"
category: "locksmith"
recommended_by:
  - "Resident, Flat 5"
phone: "07123 400400"
website: "https://keysafe.example"
area: "Local"
last_used_year: 2025
verified_date: "2026-07-06"
---

Changed a flat door lock after keys were lost.
`,D=`---
name: "Rapid Pipe Plumbing"
category: "plumber"
recommended_by:
  - "Resident, Flat 12"
phone: "07123 500500"
email: "help@rapidpipe.example"
area: "Local"
last_used_year: 2026
verified_date: "2026-07-06"
---

Fixed a leaking kitchen tap and checked low water pressure.
`;function O(e){return d(_,e)}var k=v().trim().min(1),A=l(e=>e===``?void 0:e,k.optional()),j=l(e=>e===``?void 0:e,f().optional()),M=l(e=>e===``?void 0:e,u().optional()),N=l(e=>e===``?void 0:e,O().optional()),P=p({name:k,category:m(b),recommended_by:g(k).min(1),phone:A,email:j,website:M,area:A,last_used_year:h().int().min(1e3).max(9999).optional(),verified_date:N}),F=/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/,I=(e,t)=>{let n=t.issues[0];if(!n)return Error(`${e}: invalid frontmatter`);if(n.code===`unrecognized_keys`)return Error(`${e}: unknown frontmatter key ${n.keys[0]}`);let r=n.path.join(`.`);return Error(r===`name`?`${e}: ${n.message.includes(`undefined`)?`name is required`:`name must be a non-empty string`}`:r===`category`?`${e}: ${n.message.includes(`undefined`)?`category is required`:`category must be one of ${b.join(`, `)}`}`:r===`recommended_by`?`${e}: ${n.message.includes(`undefined`)?`recommended_by is required`:n.code===`too_small`?`recommended_by must contain at least one item`:`recommended_by must be a non-empty string array`}`:r===`last_used_year`?`${e}: ${n.code===`invalid_type`?`last_used_year must be a number`:`last_used_year must be a four-digit year`}`:r===`email`?`${e}: email must be valid`:r===`website`?`${e}: website must start with http:// or https://`:r===`verified_date`?`${e}: verified_date must match YYYY-MM-DD`:`${e}: ${n.message}`)},L=class e{data;constructor(e){this.data=e}static parse(t,n){let r=P.safeParse(n);if(!r.success)throw I(t,r.error);return new e(r.data)}get name(){return this.data.name}get category(){return this.data.category}get recommendedBy(){return this.data.recommended_by}get phone(){return this.data.phone}get lastUsedYear(){return this.data.last_used_year}toTradeFields(e=``){return{name:this.data.name,category:this.data.category,recommendedBy:this.data.recommended_by,...this.data.phone?{phone:this.data.phone}:{},...this.data.email?{email:this.data.email}:{},...this.data.website?{website:this.data.website}:{},...this.data.area?{area:this.data.area}:{},...this.data.last_used_year===void 0?{}:{lastUsedYear:this.data.last_used_year},...this.data.verified_date?{verifiedDate:this.data.verified_date}:{},notes:e}}},R=(e,t)=>{let n=t.match(F);if(!n)throw Error(`${e}: frontmatter is required`);let r=s(n[1]);if(!r||typeof r!=`object`||Array.isArray(r))throw Error(`${e}: frontmatter must be an object`);return{frontmatter:L.parse(e,r),notes:n[2].trim()}},z=(e,t)=>{let{frontmatter:n,notes:r}=R(e,t);return{slug:e.replace(/^.*\//,``).replace(/\.md$/,``),...n.toTradeFields(r)}},B=(e=>[...e].sort((e,t)=>x[e.category].localeCompare(x[t.category])||e.name.localeCompare(t.name)))(Object.entries(Object.assign({"./data/bright-spark-electrics.md":S,"./data/clear-view-cleaning.md":C,"./data/fix-it-local.md":w,"./data/fresh-coat-decorating.md":T,"./data/key-safe-locksmiths.md":E,"./data/rapid-pipe-plumbing.md":D})).map(([e,t])=>z(e,String(t)))),V=n(),H=`min-h-10 rounded-md border px-3 py-2 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600`,U=`inline-flex min-h-10 items-center gap-2 rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600`,W=e=>[e.name,x[e.category],e.area??``,e.recommendedBy.join(` `),e.notes].join(` `).toLowerCase(),G=({activeCategory:e,onChange:t})=>(0,V.jsx)(`div`,{className:`flex flex-wrap gap-2`,"aria-label":`Trade categories`,"data-testid":`trades-category-filter-root`,children:[`all`,...b].map(n=>{let r=e===n,i=n===`all`?`All`:x[n];return(0,V.jsx)(`button`,{type:`button`,className:`${H} ${r?`border-emerald-700 bg-emerald-700 text-white`:`border-slate-300 bg-white text-slate-800 hover:bg-slate-100`}`,"aria-pressed":r,onClick:()=>t(n),"data-testid":`trades-category-filter-button-button-${n}`,children:i},n)})}),K=({value:e,onChange:t})=>(0,V.jsxs)(`label`,{className:`relative block w-full md:max-w-sm`,"data-testid":`trades-search-box-root`,children:[(0,V.jsx)(`span`,{className:`sr-only`,children:`Search trades`}),(0,V.jsx)(o,{className:`pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-slate-500`,"aria-hidden":`true`}),(0,V.jsx)(`input`,{type:`search`,role:`searchbox`,"aria-label":`Search trades`,value:e,onChange:e=>t(e.target.value),placeholder:`Search name, area, notes`,className:`min-h-11 w-full rounded-md border border-slate-300 bg-white py-2 pr-3 pl-10 text-base text-slate-900 transition outline-none placeholder:text-slate-500 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20`,"data-testid":`trades-search-box-input-search-trades`})]}),q=({trade:e})=>(0,V.jsxs)(`article`,{className:`rounded-lg border border-slate-200 bg-white p-4 shadow-sm`,"data-testid":`trades-trade-card-root`,children:[(0,V.jsxs)(`div`,{className:`flex flex-col gap-3 md:flex-row md:items-start md:justify-between`,children:[(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`p`,{className:`text-sm font-semibold tracking-normal text-emerald-700 uppercase`,children:x[e.category]}),(0,V.jsx)(`h2`,{className:`mt-1 text-xl font-semibold text-slate-950`,children:e.name})]}),(0,V.jsxs)(`p`,{className:`rounded-md bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700`,children:[e.recommendedBy.length,` recommendation`,e.recommendedBy.length===1?``:`s`]})]}),(0,V.jsxs)(`dl`,{className:`mt-4 grid gap-2 text-sm text-slate-700 md:grid-cols-2`,children:[e.area&&(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{className:`font-semibold text-slate-900`,children:`Area`}),(0,V.jsx)(`dd`,{children:e.area})]}),e.lastUsedYear&&(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{className:`font-semibold text-slate-900`,children:`Last used`}),(0,V.jsx)(`dd`,{children:e.lastUsedYear})]}),e.verifiedDate&&(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{className:`font-semibold text-slate-900`,children:`Verified`}),(0,V.jsx)(`dd`,{children:e.verifiedDate})]}),(0,V.jsxs)(`div`,{children:[(0,V.jsx)(`dt`,{className:`font-semibold text-slate-900`,children:`Recommended by`}),(0,V.jsx)(`dd`,{children:e.recommendedBy.join(`, `)})]})]}),e.notes&&(0,V.jsx)(`div`,{className:`prose prose-sm mt-4 max-w-none text-slate-700`,children:(0,V.jsx)(c,{children:e.notes})}),(0,V.jsxs)(`div`,{className:`mt-4 flex flex-wrap gap-2`,children:[e.phone&&(0,V.jsxs)(`a`,{className:U,href:`tel:${e.phone.replace(/\s+/g,``)}`,"aria-label":`Call ${e.name}`,"data-testid":`trades-trade-card-link-call`,children:[(0,V.jsx)(a,{className:`size-4`,"aria-hidden":`true`}),`Call`]}),e.email&&(0,V.jsxs)(`a`,{className:U,href:`mailto:${e.email}`,"aria-label":`Email ${e.name}`,"data-testid":`trades-trade-card-link-email`,children:[(0,V.jsx)(i,{className:`size-4`,"aria-hidden":`true`}),`Email`]}),e.website&&(0,V.jsxs)(`a`,{className:U,href:e.website,target:`_blank`,rel:`noreferrer`,"aria-label":`Open ${e.name} website`,"data-testid":`trades-trade-card-link-website`,children:[(0,V.jsx)(r,{className:`size-4`,"aria-hidden":`true`}),`Website`]})]})]}),J=({onClear:e})=>(0,V.jsxs)(`div`,{className:`rounded-lg border border-dashed border-slate-300 bg-white p-6 text-center`,"data-testid":`trades-empty-state-root`,children:[(0,V.jsx)(`p`,{className:`text-base font-medium text-slate-900`,children:`No tradespeople match current filters.`}),(0,V.jsx)(`button`,{type:`button`,className:`${H} mt-4 border-emerald-700 bg-emerald-700 text-white`,onClick:e,"data-testid":`trades-empty-state-button-clear-filters`,children:`Clear filters`})]}),Y=({trades:e=B})=>{let[t,n]=(0,y.useState)(`all`),[r,i]=(0,y.useState)(``),a=(0,y.useMemo)(()=>{let n=r.trim().toLowerCase();return e.filter(e=>{let r=t===`all`||e.category===t,i=n===``||W(e).includes(n);return r&&i})},[t,r,e]);return(0,V.jsx)(`main`,{className:`min-h-screen bg-slate-50 px-4 py-6 text-slate-950 md:px-8`,"data-testid":`trades-trades-app-root`,children:(0,V.jsxs)(`div`,{className:`mx-auto max-w-6xl`,children:[(0,V.jsxs)(`header`,{className:`flex flex-col gap-3 border-b border-slate-200 pb-5`,"data-testid":`trades-trades-app-header-header`,children:[(0,V.jsx)(`p`,{className:`text-sm font-semibold tracking-normal text-emerald-700 uppercase`,children:`Building directory`}),(0,V.jsx)(`h1`,{className:`text-3xl font-semibold tracking-normal text-slate-950 md:text-4xl`,children:`Trades`}),(0,V.jsx)(`p`,{className:`max-w-3xl text-sm text-slate-700`,children:`Resident-supplied recommendations for tradespeople who have worked in the building. Verify insurance, qualifications, and pricing yourself before booking.`})]}),(0,V.jsxs)(`section`,{className:`mt-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between`,"aria-label":`Directory filters`,children:[(0,V.jsx)(G,{activeCategory:t,onChange:n}),(0,V.jsx)(K,{value:r,onChange:i})]}),(0,V.jsxs)(`p`,{className:`mt-4 text-sm font-medium text-slate-700`,children:[a.length,` of `,e.length,` shown`]}),(0,V.jsx)(`section`,{className:`mt-4 grid gap-4 md:grid-cols-2`,"aria-label":`Recommended tradespeople`,children:a.map(e=>(0,V.jsx)(q,{trade:e},e.slug))}),a.length===0&&(0,V.jsx)(J,{onClear:()=>{n(`all`),i(``)}})]})})},X=()=>(0,V.jsx)(Y,{});export{X as TradesApp,X as default};