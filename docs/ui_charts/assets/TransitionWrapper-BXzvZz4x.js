import{_ as W,o as A,l as _,e as H}from"./useMergedRefs-C5QQzXz6.js";import x,{useRef as V,useCallback as h}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import S from"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";import{j as $}from"./client-B8KsQLkO.js";function D(e,o){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},D(e,o)}function Y(e,o){e.prototype=Object.create(o.prototype),e.prototype.constructor=e,D(e,o)}const k={disabled:!1},w=x.createContext(null);var Z=function(o){return o.scrollTop},b="unmounted",E="exited",v="entering",g="entered",R="exiting",f=function(e){Y(o,e);function o(r,n){var t;t=e.call(this,r,n)||this;var s=n,a=s&&!s.isMounting?r.enter:r.appear,u;return t.appearStatus=null,r.in?a?(u=E,t.appearStatus=v):u=g:r.unmountOnExit||r.mountOnEnter?u=b:u=E,t.state={status:u},t.nextCallback=null,t}o.getDerivedStateFromProps=function(n,t){var s=n.in;return s&&t.status===b?{status:E}:null};var i=o.prototype;return i.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},i.componentDidUpdate=function(n){var t=null;if(n!==this.props){var s=this.state.status;this.props.in?s!==v&&s!==g&&(t=v):(s===v||s===g)&&(t=R)}this.updateStatus(!1,t)},i.componentWillUnmount=function(){this.cancelNextCallback()},i.getTimeouts=function(){var n=this.props.timeout,t,s,a;return t=s=a=n,n!=null&&typeof n!="number"&&(t=n.exit,s=n.enter,a=n.appear!==void 0?n.appear:s),{exit:t,enter:s,appear:a}},i.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this);s&&Z(s)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===E&&this.setState({status:b})},i.performEnter=function(n){var t=this,s=this.props.enter,a=this.context?this.context.isMounting:n,u=this.props.nodeRef?[a]:[S.findDOMNode(this),a],l=u[0],c=u[1],p=this.getTimeouts(),C=a?p.appear:p.enter;if(!n&&!s||k.disabled){this.safeSetState({status:g},function(){t.props.onEntered(l)});return}this.props.onEnter(l,c),this.safeSetState({status:v},function(){t.props.onEntering(l,c),t.onTransitionEnd(C,function(){t.safeSetState({status:g},function(){t.props.onEntered(l,c)})})})},i.performExit=function(){var n=this,t=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:S.findDOMNode(this);if(!t||k.disabled){this.safeSetState({status:E},function(){n.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:R},function(){n.props.onExiting(a),n.onTransitionEnd(s.exit,function(){n.safeSetState({status:E},function(){n.props.onExited(a)})})})},i.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},i.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},i.setNextCallback=function(n){var t=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,t.nextCallback=null,n(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},i.onTransitionEnd=function(n,t){this.setNextCallback(t);var s=this.props.nodeRef?this.props.nodeRef.current:S.findDOMNode(this),a=n==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var u=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],l=u[0],c=u[1];this.props.addEndListener(l,c)}n!=null&&setTimeout(this.nextCallback,n)},i.render=function(){var n=this.state.status;if(n===b)return null;var t=this.props,s=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var a=W(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return x.createElement(w.Provider,{value:null},typeof s=="function"?s(n,a):x.cloneElement(x.Children.only(s),a))},o}(x.Component);f.contextType=w;f.propTypes={};function T(){}f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:T,onEntering:T,onEntered:T,onExit:T,onExiting:T,onExited:T};f.UNMOUNTED=b;f.EXITED=E;f.ENTERING=v;f.ENTERED=g;f.EXITING=R;function z(e){var o=A(e);return o&&o.defaultView||window}function B(e,o){return z(e).getComputedStyle(e,o)}var q=/([A-Z])/g;function J(e){return e.replace(q,"-$1").toLowerCase()}var K=/^ms-/;function N(e){return J(e).replace(K,"-ms-")}var Q=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function tt(e){return!!(e&&Q.test(e))}function P(e,o){var i="",r="";if(typeof o=="string")return e.style.getPropertyValue(N(o))||B(e).getPropertyValue(N(o));Object.keys(o).forEach(function(n){var t=o[n];!t&&t!==0?e.style.removeProperty(N(n)):tt(n)?r+=n+"("+t+") ":i+=N(n)+": "+t+";"}),r&&(i+="transform: "+r+";"),e.style.cssText+=";"+i}function et(e,o,i,r){if(r===void 0&&(r=!0),e){var n=document.createEvent("HTMLEvents");n.initEvent(o,i,r),e.dispatchEvent(n)}}function nt(e){var o=P(e,"transitionDuration")||"",i=o.indexOf("ms")===-1?1e3:1;return parseFloat(o)*i}function rt(e,o,i){i===void 0&&(i=5);var r=!1,n=setTimeout(function(){r||et(e,"transitionend",!0)},o+i),t=_(e,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(n),t()}}function it(e,o,i,r){i==null&&(i=nt(e)||0);var n=rt(e,i,r),t=_(e,"transitionend",o);return function(){n(),t()}}function M(e,o){const i=P(e,o)||"",r=i.indexOf("ms")===-1?1e3:1;return parseFloat(i)*r}function lt(e,o){const i=M(e,"transitionDuration"),r=M(e,"transitionDelay"),n=it(e,t=>{t.target===e&&(n(),o(t))},i+r)}function ct(e){e.offsetHeight}function ot(e){return e&&"setState"in e?S.findDOMNode(e):e??null}const pt=x.forwardRef(({onEnter:e,onEntering:o,onEntered:i,onExit:r,onExiting:n,onExited:t,addEndListener:s,children:a,childRef:u,...l},c)=>{const p=V(null),C=H(p,u),y=m=>{C(ot(m))},d=m=>O=>{m&&p.current&&m(p.current,O)},L=h(d(e),[e]),I=h(d(o),[o]),U=h(d(i),[i]),j=h(d(r),[r]),G=h(d(n),[n]),X=h(d(t),[t]),F=h(d(s),[s]);return $.jsx(f,{ref:c,...l,onEnter:L,onEntered:U,onEntering:I,onExit:j,onExited:X,onExiting:G,addEndListener:F,nodeRef:p,children:typeof a=="function"?(m,O)=>a(m,{...O,ref:y}):x.cloneElement(a,{ref:y})})});export{v as E,pt as T,R as a,lt as b,g as c,E as d,P as s,ct as t};