import*as i from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{useCallback as b}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{c as u,f as E,g as R}from"./Button-DJ9PSMWy.js";import{j as c}from"./client-B8KsQLkO.js";import{a as w,t as g,T as N,c as v,E as x,g as O}from"./TransitionWrapper-B9iolcvB.js";const U=e=>i.forwardRef((o,r)=>c.jsx("div",{...o,ref:r,className:u(o.className,e)})),P=["onKeyDown"];function j(e,o){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(o.indexOf(t)>=0)continue;r[t]=e[t]}return r}function C(e){return!e||e.trim()==="#"}const _=i.forwardRef((e,o)=>{let{onKeyDown:r}=e,t=j(e,P);const[a]=E(Object.assign({tagName:"a"},t)),l=w(p=>{a.onKeyDown(p),r==null||r(p)});return C(t.href)||t.role==="button"?c.jsx("a",Object.assign({ref:o},t,a,{onKeyDown:l})):c.jsx("a",Object.assign({ref:o},t,{onKeyDown:r}))});_.displayName="Anchor";var y={exports:{}},D="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",S=D,F=S;function d(){}function h(){}h.resetWarningCache=d;var W=function(){function e(t,a,l,p,m,s){if(s!==F){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}e.isRequired=e;function o(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:o,element:e,elementType:e,instanceOf:o,node:e,objectOf:o,oneOf:o,oneOfType:o,shape:o,exact:o,checkPropTypes:h,resetWarningCache:d};return r.PropTypes=r,r};y.exports=W();var k=y.exports;const f=R(k),K={[x]:"show",[O]:"show"},B=i.forwardRef(({className:e,children:o,transitionClasses:r={},onEnter:t,...a},l)=>{const p={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,...a},m=b((s,n)=>{g(s),t==null||t(s,n)},[t]);return c.jsx(N,{ref:l,addEndListener:v,...p,onEnter:m,childRef:o.ref,children:(s,n)=>i.cloneElement(o,{...n,className:u("fade",e,o.props.className,K[s],r[s])})})});B.displayName="Fade";const I={"aria-label":f.string,onClick:f.func,variant:f.oneOf(["white"])},T=i.forwardRef(({className:e,variant:o,"aria-label":r="Close",...t},a)=>c.jsx("button",{ref:a,type:"button",className:u("btn-close",o&&`btn-close-${o}`,e),"aria-label":r,...t}));T.displayName="CloseButton";T.propTypes=I;export{_ as A,T as C,B as F,f as P,U as d};
