import{c as l}from"./Button-AoLKMrJK.js";import*as t from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{useCallback as b}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{t as y,T as N,b as w,E as C,c as T}from"./TransitionWrapper-BXzvZz4x.js";import{j as c}from"./client-B8KsQLkO.js";import{P as p}from"./Dropdown-BB7KTRUo.js";function P(s){return s.code==="Escape"||s.keyCode===27}function j(){const s=t.version.split(".");return{major:+s[0],minor:+s[1],patch:+s[2]}}const x={[C]:"show",[T]:"show"},g=t.forwardRef(({className:s,children:e,transitionClasses:r={},onEnter:a,...n},m)=>{const u={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...n},d=b((o,i)=>{y(o),a==null||a(o,i)},[a]),{major:E}=j(),R=E>=19?e.props.ref:e.ref;return c.jsx(N,{ref:m,addEndListener:w,...u,onEnter:d,childRef:R,children:(o,i)=>t.cloneElement(e,{...i,className:l("fade",s,e.props.className,x[o],r[o])})})});g.displayName="Fade";const h={"aria-label":p.string,onClick:p.func,variant:p.oneOf(["white"])},f=t.forwardRef(({className:s,variant:e,"aria-label":r="Close",...a},n)=>c.jsx("button",{ref:n,type:"button",className:l("btn-close",e&&`btn-close-${e}`,s),"aria-label":r,...a}));f.displayName="CloseButton";f.propTypes=h;export{f as C,g as F,j as g,P as i};
