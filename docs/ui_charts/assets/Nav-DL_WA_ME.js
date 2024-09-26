import{c as G,B as M}from"./ThemeProvider-DUEYKiOx.js";import{T as W,a as X,s as S,d as z,b as V,E as Y,c as H,t as J}from"./TransitionWrapper-BMbdxB92.js";import*as T from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import D,{useMemo as I,useContext as w,useRef as $,useEffect as Q}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{j as N}from"./client-B8KsQLkO.js";import{S as j,N as B,d as A,a as Z,m as _,f as k,e as ee,g as te,q as ne}from"./useMergedRefs-BEcJmFAT.js";function b(...e){return e.filter(t=>t!=null).reduce((t,n)=>{if(typeof n!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return t===null?n:function(...s){t.apply(this,s),n.apply(this,s)}},null)}const oe={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function re(e,t){const n=`offset${e[0].toUpperCase()}${e.slice(1)}`,o=t[n],s=oe[e];return o+parseInt(S(t,s[0]),10)+parseInt(S(t,s[1]),10)}const le={[z]:"collapse",[V]:"collapsing",[Y]:"collapsing",[H]:"collapse show"},xe=D.forwardRef(({onEnter:e,onEntering:t,onEntered:n,onExit:o,onExiting:s,className:c,children:p,dimension:u="height",in:m=!1,timeout:v=300,mountOnEnter:a=!1,unmountOnExit:d=!1,appear:h=!1,getDimensionValue:C=re,...x},R)=>{const l=typeof u=="function"?u():u,O=I(()=>b(r=>{r.style[l]="0"},e),[l,e]),K=I(()=>b(r=>{const E=`scroll${l[0].toUpperCase()}${l.slice(1)}`;r.style[l]=`${r[E]}px`},t),[l,t]),i=I(()=>b(r=>{r.style[l]=null},n),[l,n]),f=I(()=>b(r=>{r.style[l]=`${C(l,r)}px`,J(r)},o),[o,C,l]),g=I(()=>b(r=>{r.style[l]=null},s),[l,s]);return N.jsx(W,{ref:R,addEndListener:X,...x,"aria-expanded":x.role?m:null,onEnter:O,onEntering:K,onEntered:i,onExit:f,onExiting:g,childRef:p.ref,in:m,timeout:v,mountOnEnter:a,unmountOnExit:d,appear:h,children:(r,E)=>D.cloneElement(p,{...E,className:G(c,p.props.className,le[r],l==="width"&&"collapse-horizontal")})})}),U=T.createContext(null),se=["as","active","eventKey"];function ae(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}function ie({key:e,onClick:t,active:n,id:o,role:s,disabled:c}){const p=w(j),u=w(B),m=w(U);let v=n;const a={role:s};if(u){!s&&u.role==="tablist"&&(a.role="tab");const d=u.getControllerId(e??null),h=u.getControlledId(e??null);a[A("event-key")]=e,a.id=d||o,v=n==null&&e!=null?u.activeKey===e:n,(v||!(m!=null&&m.unmountOnExit)&&!(m!=null&&m.mountOnEnter))&&(a["aria-controls"]=h)}return a.role==="tab"&&(a["aria-selected"]=v,v||(a.tabIndex=-1),c&&(a.tabIndex=-1,a["aria-disabled"]=!0)),a.onClick=Z(d=>{c||(t==null||t(d),e!=null&&p&&!d.isPropagationStopped()&&p(e,d))}),[a,{isActive:v}]}const q=T.forwardRef((e,t)=>{let{as:n=M,active:o,eventKey:s}=e,c=ae(e,se);const[p,u]=ie(Object.assign({key:_(s,c.href),active:o},c));return p[A("active")]=u.isActive,N.jsx(n,Object.assign({},c,p,{ref:t}))});q.displayName="NavItem";const ce=["as","onSelect","activeKey","role","onKeyDown"];function ue(e,t){if(e==null)return{};var n={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;n[o]=e[o]}return n}const L=()=>{},P=A("event-key"),F=T.forwardRef((e,t)=>{let{as:n="div",onSelect:o,activeKey:s,role:c,onKeyDown:p}=e,u=ue(e,ce);const m=k(),v=$(!1),a=w(j),d=w(U);let h,C;d&&(c=c||"tablist",s=d.activeKey,h=d.getControlledId,C=d.getControllerId);const x=$(null),R=i=>{const f=x.current;if(!f)return null;const g=ne(f,`[${P}]:not([aria-disabled=true])`),r=f.querySelector("[aria-selected=true]");if(!r||r!==document.activeElement)return null;const E=g.indexOf(r);if(E===-1)return null;let y=E+i;return y>=g.length&&(y=0),y<0&&(y=g.length-1),g[y]},l=(i,f)=>{i!=null&&(o==null||o(i,f),a==null||a(i,f))},O=i=>{if(p==null||p(i),!d)return;let f;switch(i.key){case"ArrowLeft":case"ArrowUp":f=R(-1);break;case"ArrowRight":case"ArrowDown":f=R(1);break;default:return}f&&(i.preventDefault(),l(f.dataset[te("EventKey")]||null,i),v.current=!0,m())};Q(()=>{if(x.current&&v.current){const i=x.current.querySelector(`[${P}][aria-selected=true]`);i==null||i.focus()}v.current=!1});const K=ee(t,x);return N.jsx(j.Provider,{value:l,children:N.jsx(B.Provider,{value:{role:c,activeKey:_(s),getControlledId:h||L,getControllerId:C||L},children:N.jsx(n,Object.assign({},u,{onKeyDown:O,ref:K,role:c}))})})});F.displayName="Nav";const he=Object.assign(F,{Item:q});export{he as B,xe as C,ie as u};
