import{useRef as c,useMemo as m}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{u as a}from"./Dropdown-BB7KTRUo.js";import{u as f}from"./useWillUnmount-CzXZtEdY.js";const n=2**31-1;function i(o,e,t){const u=t-Date.now();o.current=u<=n?setTimeout(e,u):setTimeout(()=>i(o,e,t),n)}function D(){const o=a(),e=c();return f(()=>clearTimeout(e.current)),m(()=>{const t=()=>clearTimeout(e.current);function u(s,r=0){o()&&(t(),r<=n?e.current=setTimeout(s,r):i(e,s,Date.now()+r))}return{set:u,clear:t,handleRef:e}},[])}export{D as u};
