import*as t from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{useCallback as R}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{c}from"./Button-AoLKMrJK.js";import{j as p}from"./client-B8KsQLkO.js";import{t as y,T as b,a as w,E as C,c as j}from"./TransitionWrapper-BMbdxB92.js";import{P as l}from"./Dropdown-Ccmojf5N.js";const L=s=>t.forwardRef((e,a)=>p.jsx("div",{...e,ref:a,className:c(e.className,s)}));function P(s){return s.code==="Escape"||s.keyCode===27}function x(){const s=t.version.split(".");return{major:+s[0],minor:+s[1],patch:+s[2]}}const T={[C]:"show",[j]:"show"},h=t.forwardRef(({className:s,children:e,transitionClasses:a={},onEnter:o,...n},m)=>{const d={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...n},u=R((r,i)=>{y(r),o==null||o(r,i)},[o]),{major:E}=x(),N=E>=19?e.props.ref:e.ref;return p.jsx(b,{ref:m,addEndListener:w,...d,onEnter:u,childRef:N,children:(r,i)=>t.cloneElement(e,{...i,className:c("fade",s,e.props.className,T[r],a[r])})})});h.displayName="Fade";const g={"aria-label":l.string,onClick:l.func,variant:l.oneOf(["white"])},f=t.forwardRef(({className:s,variant:e,"aria-label":a="Close",...o},n)=>p.jsx("button",{ref:n,type:"button",className:c("btn-close",e&&`btn-close-${e}`,s),"aria-label":a,...o}));f.displayName="CloseButton";f.propTypes=g;export{f as C,h as F,L as d,x as g,P as i};