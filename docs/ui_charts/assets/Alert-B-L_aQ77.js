import{u as i,c as m}from"./Button-AoLKMrJK.js";import*as d from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{a as R,u as L}from"./useMergedRefs-C5QQzXz6.js";import{d as $}from"./divWithClassName-CAovPfu4.js";import{j as n}from"./client-B8KsQLkO.js";import{A as b}from"./Dropdown-BB7KTRUo.js";import{C as E,F as N}from"./CloseButton-BMmjgt8k.js";const C=$("h4");C.displayName="DivStyledAsH4";const j=d.forwardRef(({className:a,bsPrefix:e,as:r=C,...s},t)=>(e=i(e,"alert-heading"),n.jsx(r,{ref:t,className:m(a,e),...s})));j.displayName="AlertHeading";const x=d.forwardRef(({className:a,bsPrefix:e,as:r=b,...s},t)=>(e=i(e,"alert-link"),n.jsx(r,{ref:t,className:m(a,e),...s})));x.displayName="AlertLink";const v=d.forwardRef((a,e)=>{const{bsPrefix:r,show:s=!0,closeLabel:t="Close alert",closeVariant:y,className:k,children:g,variant:c="primary",onClose:f,dismissible:u,transition:p=N,...A}=R(a,{show:"onClose"}),o=i(r,"alert"),w=L(H=>{f&&f(!1,H)}),l=p===!0?N:p,h=n.jsxs("div",{role:"alert",...l?void 0:A,ref:e,className:m(k,o,c&&`${o}-${c}`,u&&`${o}-dismissible`),children:[u&&n.jsx(E,{onClick:w,"aria-label":t,variant:y}),g]});return l?n.jsx(l,{unmountOnExit:!0,...A,ref:void 0,in:s,children:h}):s?h:null});v.displayName="Alert";const U=Object.assign(v,{Link:x,Heading:j});export{U as A};
