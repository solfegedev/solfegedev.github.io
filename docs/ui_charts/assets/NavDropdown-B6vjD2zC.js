import{f as En,u as j,c as O}from"./Button-Dbum-Du3.js";import*as y from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import Me,{useContext as B,useRef as M,useEffect as F,useMemo as k,useState as q,cloneElement as be,useCallback as A,forwardRef as yn,useImperativeHandle as Nn}from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";import{a as L,e as oe,A as bn,u as We,T as He,c as _e,s as _,E as Cn,f as Pe,g as Ce,h as Ge,t as Tn,o as Ue,i as Ve,l as Be,C as wn,d as On,F as Rn}from"./CloseButton-CUYUvxPi.js";import{S as ae,N as Xe,d as se,m as Te,e as jn,f as $n,q as W,g as U,c as Mn,h as Ee,i as we,u as Bn,j as In,k as Ie,D as H}from"./Dropdown-BtRWb2wP.js";import{j as d}from"./client-B8KsQLkO.js";import Sn from"https://cdn.jsdelivr.net/npm/react-dom@18.3.1/+esm";var Se={exports:{}},ye={exports:{}};(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=t;function t(r){function a(l,s,i,c,u,f){var h=c||"<<anonymous>>",p=f||i;if(s[i]==null)return l?new Error("Required "+u+" `"+p+"` was not specified "+("in `"+h+"`.")):null;for(var v=arguments.length,g=Array(v>6?v-6:0),m=6;m<v;m++)g[m-6]=arguments[m];return r.apply(void 0,[s,i,h,u,p].concat(g))}var o=a.bind(null,!1);return o.isRequired=a.bind(null,!0),o}e.exports=n.default})(ye,ye.exports);var An=ye.exports;(function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=o;var t=An,r=a(t);function a(l){return l&&l.__esModule?l:{default:l}}function o(){for(var l=arguments.length,s=Array(l),i=0;i<l;i++)s[i]=arguments[i];function c(){for(var u=arguments.length,f=Array(u),h=0;h<u;h++)f[h]=arguments[h];var p=null;return s.forEach(function(v){if(p==null){var g=v.apply(void 0,f);g!=null&&(p=g)}}),p}return(0,r.default)(c)}e.exports=n.default})(Se,Se.exports);const Ye=y.createContext(null),Ln=["as","active","eventKey"];function Dn(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function Qe({key:e,onClick:n,active:t,id:r,role:a,disabled:o}){const l=B(ae),s=B(Xe),i=B(Ye);let c=t;const u={role:a};if(s){!a&&s.role==="tablist"&&(u.role="tab");const f=s.getControllerId(e??null),h=s.getControlledId(e??null);u[se("event-key")]=e,u.id=f||r,c=t==null&&e!=null?s.activeKey===e:t,(c||!(i!=null&&i.unmountOnExit)&&!(i!=null&&i.mountOnEnter))&&(u["aria-controls"]=h)}return u.role==="tab"&&(u["aria-selected"]=c,c||(u.tabIndex=-1),o&&(u.tabIndex=-1,u["aria-disabled"]=!0)),u.onClick=L(f=>{o||(n==null||n(f),e!=null&&l&&!f.isPropagationStopped()&&l(e,f))}),[u,{isActive:c}]}const ze=y.forwardRef((e,n)=>{let{as:t=En,active:r,eventKey:a}=e,o=Dn(e,Ln);const[l,s]=Qe(Object.assign({key:Te(a,o.href),active:r},o));return l[se("active")]=s.isActive,d.jsx(t,Object.assign({},o,l,{ref:n}))});ze.displayName="NavItem";const kn=["as","onSelect","activeKey","role","onKeyDown"];function Fn(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}const Ae=()=>{},Le=se("event-key"),qe=y.forwardRef((e,n)=>{let{as:t="div",onSelect:r,activeKey:a,role:o,onKeyDown:l}=e,s=Fn(e,kn);const i=jn(),c=M(!1),u=B(ae),f=B(Ye);let h,p;f&&(o=o||"tablist",a=f.activeKey,h=f.getControlledId,p=f.getControllerId);const v=M(null),g=E=>{const b=v.current;if(!b)return null;const $=W(b,`[${Le}]:not([aria-disabled=true])`),x=b.querySelector("[aria-selected=true]");if(!x||x!==document.activeElement)return null;const w=$.indexOf(x);if(w===-1)return null;let S=w+E;return S>=$.length&&(S=0),S<0&&(S=$.length-1),$[S]},m=(E,b)=>{E!=null&&(r==null||r(E,b),u==null||u(E,b))},T=E=>{if(l==null||l(E),!f)return;let b;switch(E.key){case"ArrowLeft":case"ArrowUp":b=g(-1);break;case"ArrowRight":case"ArrowDown":b=g(1);break;default:return}b&&(E.preventDefault(),m(b.dataset[$n("EventKey")]||null,E),c.current=!0,i())};F(()=>{if(v.current&&c.current){const E=v.current.querySelector(`[${Le}][aria-selected=true]`);E==null||E.focus()}c.current=!1});const I=oe(n,v);return d.jsx(ae.Provider,{value:m,children:d.jsx(Xe.Provider,{value:{role:o,activeKey:Te(a),getControlledId:h||Ae,getControllerId:p||Ae},children:d.jsx(t,Object.assign({},s,{onKeyDown:T,ref:I,role:o}))})})});qe.displayName="Nav";const Kn=Object.assign(qe,{Item:ze}),Je=y.forwardRef(({className:e,bsPrefix:n,as:t="div",...r},a)=>(n=j(n,"nav-item"),d.jsx(t,{ref:a,className:O(e,n),...r})));Je.displayName="NavItem";const Oe=y.forwardRef(({bsPrefix:e,className:n,as:t=bn,active:r,eventKey:a,disabled:o=!1,...l},s)=>{e=j(e,"nav-link");const[i,c]=Qe({key:Te(a,l.href),active:r,disabled:o,...l});return d.jsx(t,{...l,...i,ref:s,disabled:o,className:O(n,e,o&&"disabled",c.isActive&&"active")})});Oe.displayName="NavLink";const Ze=y.forwardRef((e,n)=>{const{as:t="div",bsPrefix:r,variant:a,fill:o=!1,justify:l=!1,navbar:s,navbarScroll:i,className:c,activeKey:u,...f}=We(e,{activeKey:"onSelect"}),h=j(r,"nav");let p,v,g=!1;const m=B(U),T=B(Mn);return m?(p=m.bsPrefix,g=s??!0):T&&({cardHeaderBsPrefix:v}=T),d.jsx(Kn,{as:t,ref:n,activeKey:u,className:O(c,{[h]:!g,[`${p}-nav`]:g,[`${p}-nav-scroll`]:g&&i,[`${v}-${a}`]:!!v,[`${h}-${a}`]:!!a,[`${h}-fill`]:o,[`${h}-justified`]:l}),...f})});Ze.displayName="Nav";const $t=Object.assign(Ze,{Item:Je,Link:Oe}),en=y.forwardRef(({bsPrefix:e,className:n,as:t,...r},a)=>{e=j(e,"navbar-brand");const o=t||(r.href?"a":"span");return d.jsx(o,{...r,ref:a,className:O(n,e)})});en.displayName="NavbarBrand";function z(...e){return e.filter(n=>n!=null).reduce((n,t)=>{if(typeof t!="function")throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return n===null?t:function(...a){n.apply(this,a),t.apply(this,a)}},null)}const Wn={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function Hn(e,n){const t=`offset${e[0].toUpperCase()}${e.slice(1)}`,r=n[t],a=Wn[e];return r+parseInt(_(n,a[0]),10)+parseInt(_(n,a[1]),10)}const _n={[Cn]:"collapse",[Pe]:"collapsing",[Ce]:"collapsing",[Ge]:"collapse show"},Pn=Me.forwardRef(({onEnter:e,onEntering:n,onEntered:t,onExit:r,onExiting:a,className:o,children:l,dimension:s="height",in:i=!1,timeout:c=300,mountOnEnter:u=!1,unmountOnExit:f=!1,appear:h=!1,getDimensionValue:p=Hn,...v},g)=>{const m=typeof s=="function"?s():s,T=k(()=>z(x=>{x.style[m]="0"},e),[m,e]),I=k(()=>z(x=>{const w=`scroll${m[0].toUpperCase()}${m.slice(1)}`;x.style[m]=`${x[w]}px`},n),[m,n]),E=k(()=>z(x=>{x.style[m]=null},t),[m,t]),b=k(()=>z(x=>{x.style[m]=`${p(m,x)}px`,Tn(x)},r),[r,p,m]),$=k(()=>z(x=>{x.style[m]=null},a),[m,a]);return d.jsx(He,{ref:g,addEndListener:_e,...v,"aria-expanded":v.role?i:null,onEnter:T,onEntering:I,onEntered:E,onExit:b,onExiting:$,childRef:l.ref,in:i,timeout:c,mountOnEnter:u,unmountOnExit:f,appear:h,children:(x,w)=>Me.cloneElement(l,{...w,className:O(o,l.props.className,_n[x],m==="width"&&"collapse-horizontal")})})}),nn=y.forwardRef(({children:e,bsPrefix:n,...t},r)=>{n=j(n,"navbar-collapse");const a=B(U);return d.jsx(Pn,{in:!!(a&&a.expanded),...t,children:d.jsx("div",{ref:r,className:n,children:e})})});nn.displayName="NavbarCollapse";const tn=y.forwardRef(({bsPrefix:e,className:n,children:t,label:r="Toggle navigation",as:a="button",onClick:o,...l},s)=>{e=j(e,"navbar-toggler");const{onToggle:i,expanded:c}=B(U)||{},u=L(f=>{o&&o(f),i&&i()});return a==="button"&&(l.type="button"),d.jsx(a,{...l,ref:s,onClick:u,"aria-label":r,className:O(n,e,!c&&"collapsed"),children:t||d.jsx("span",{className:`${e}-icon`})})});tn.displayName="NavbarToggle";const Ne=new WeakMap,De=(e,n)=>{if(!e||!n)return;const t=Ne.get(n)||new Map;Ne.set(n,t);let r=t.get(e);return r||(r=n.matchMedia(e),r.refCount=0,t.set(r.media,r)),r};function Gn(e,n=typeof window>"u"?void 0:window){const t=De(e,n),[r,a]=q(()=>t?t.matches:!1);return Ee(()=>{let o=De(e,n);if(!o)return a(!1);let l=Ne.get(n);const s=()=>{a(o.matches)};return o.refCount++,o.addListener(s),s(),()=>{o.removeListener(s),o.refCount--,o.refCount<=0&&(l==null||l.delete(o.media)),o=void 0}},[e]),r}function Un(e){const n=Object.keys(e);function t(s,i){return s===i?i:s?`${s} and ${i}`:i}function r(s){return n[Math.min(n.indexOf(s)+1,n.length-1)]}function a(s){const i=r(s);let c=e[i];return typeof c=="number"?c=`${c-.2}px`:c=`calc(${c} - 0.2px)`,`(max-width: ${c})`}function o(s){let i=e[s];return typeof i=="number"&&(i=`${i}px`),`(min-width: ${i})`}function l(s,i,c){let u;typeof s=="object"?(u=s,c=i,i=!0):(i=i||!0,u={[s]:i});let f=k(()=>Object.entries(u).reduce((h,[p,v])=>((v==="up"||v===!0)&&(h=t(h,o(p))),(v==="down"||v===!0)&&(h=t(h,a(p))),h),""),[JSON.stringify(u)]);return Gn(f,c)}return l}const Vn=Un({xs:0,sm:576,md:768,lg:992,xl:1200,xxl:1400});function me(e){e===void 0&&(e=Ue());try{var n=e.activeElement;return!n||!n.nodeName?null:n}catch{return e.body}}function Xn(e){const n=M(e);return n.current=e,n}function Yn(e){const n=Xn(e);F(()=>()=>n.current(),[])}function Qn(e=document){const n=e.defaultView;return Math.abs(n.innerWidth-e.documentElement.clientWidth)}const ke=se("modal-open");class Re{constructor({ownerDocument:n,handleContainerOverflow:t=!0,isRTL:r=!1}={}){this.handleContainerOverflow=t,this.isRTL=r,this.modals=[],this.ownerDocument=n}getScrollbarWidth(){return Qn(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(n){}removeModalAttributes(n){}setContainerStyle(n){const t={overflow:"hidden"},r=this.isRTL?"paddingLeft":"paddingRight",a=this.getElement();n.style={overflow:a.style.overflow,[r]:a.style[r]},n.scrollBarWidth&&(t[r]=`${parseInt(_(a,r)||"0",10)+n.scrollBarWidth}px`),a.setAttribute(ke,""),_(a,t)}reset(){[...this.modals].forEach(n=>this.remove(n))}removeContainerStyle(n){const t=this.getElement();t.removeAttribute(ke),Object.assign(t.style,n.style)}add(n){let t=this.modals.indexOf(n);return t!==-1||(t=this.modals.length,this.modals.push(n),this.setModalAttributes(n),t!==0)||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t}remove(n){const t=this.modals.indexOf(n);t!==-1&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(n))}isTopModal(n){return!!this.modals.length&&this.modals[this.modals.length-1]===n}}const pe=(e,n)=>Ve?e==null?(n||Ue()).body:(typeof e=="function"&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;function zn(e,n){const t=we(),[r,a]=q(()=>pe(e,t==null?void 0:t.document));if(!r){const o=pe(e);o&&a(o)}return F(()=>{},[n,r]),F(()=>{const o=pe(e);o!==r&&a(o)},[e,r]),r}function qn({children:e,in:n,onExited:t,mountOnEnter:r,unmountOnExit:a}){const o=M(null),l=M(n),s=L(t);F(()=>{n?l.current=!0:s(o.current)},[n,s]);const i=oe(o,e.ref),c=be(e,{ref:i});return n?c:a||!l.current&&r?null:c}function Jn(e){return e.code==="Escape"||e.keyCode===27}function Zn(){const e=y.version.split(".");return{major:+e[0],minor:+e[1],patch:+e[2]}}const et=["onEnter","onEntering","onEntered","onExit","onExiting","onExited","addEndListener","children"];function nt(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}function tt(e){let{onEnter:n,onEntering:t,onEntered:r,onExit:a,onExiting:o,onExited:l,addEndListener:s,children:i}=e,c=nt(e,et);const{major:u}=Zn(),f=u>=19?i.props.ref:i.ref,h=M(null),p=oe(h,typeof i=="function"?null:f),v=x=>w=>{x&&h.current&&x(h.current,w)},g=A(v(n),[n]),m=A(v(t),[t]),T=A(v(r),[r]),I=A(v(a),[a]),E=A(v(o),[o]),b=A(v(l),[l]),$=A(v(s),[s]);return Object.assign({},c,{nodeRef:h},n&&{onEnter:g},t&&{onEntering:m},r&&{onEntered:T},a&&{onExit:I},o&&{onExiting:E},l&&{onExited:b},s&&{addEndListener:$},{children:typeof i=="function"?(x,w)=>i(x,Object.assign({},w,{ref:p})):be(i,{ref:p})})}const rt=["component"];function at(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}const ot=y.forwardRef((e,n)=>{let{component:t}=e,r=at(e,rt);const a=tt(r);return d.jsx(t,Object.assign({ref:n},a))});function st({in:e,onTransition:n}){const t=M(null),r=M(!0),a=L(n);return Ee(()=>{if(!t.current)return;let o=!1;return a({in:e,element:t.current,initial:r.current,isStale:()=>o}),()=>{o=!0}},[e,a]),Ee(()=>(r.current=!1,()=>{r.current=!0}),[]),t}function it({children:e,in:n,onExited:t,onEntered:r,transition:a}){const[o,l]=q(!n);n&&o&&l(!1);const s=st({in:!!n,onTransition:c=>{const u=()=>{c.isStale()||(c.in?r==null||r(c.element,c.initial):(l(!0),t==null||t(c.element)))};Promise.resolve(a(c)).then(u,f=>{throw c.in||l(!0),f})}}),i=oe(s,e.ref);return o&&!n?null:be(e,{ref:i})}function Fe(e,n,t){return e?d.jsx(ot,Object.assign({},t,{component:e})):n?d.jsx(it,Object.assign({},t,{transition:n})):d.jsx(qn,Object.assign({},t))}const lt=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];function ct(e,n){if(e==null)return{};var t={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(n.indexOf(r)>=0)continue;t[r]=e[r]}return t}let ge;function ut(e){return ge||(ge=new Re({ownerDocument:e==null?void 0:e.document})),ge}function dt(e){const n=we(),t=e||ut(n),r=M({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>t.add(r.current),remove:()=>t.remove(r.current),isTopModal:()=>t.isTopModal(r.current),setDialogRef:A(a=>{r.current.dialog=a},[]),setBackdropRef:A(a=>{r.current.backdrop=a},[])})}const rn=yn((e,n)=>{let{show:t=!1,role:r="dialog",className:a,style:o,children:l,backdrop:s=!0,keyboard:i=!0,onBackdropClick:c,onEscapeKeyDown:u,transition:f,runTransition:h,backdropTransition:p,runBackdropTransition:v,autoFocus:g=!0,enforceFocus:m=!0,restoreFocus:T=!0,restoreFocusOptions:I,renderDialog:E,renderBackdrop:b=N=>d.jsx("div",Object.assign({},N)),manager:$,container:x,onShow:w,onHide:S=()=>{},onExit:J,onExited:Z,onExiting:ie,onEnter:le,onEntering:V,onEntered:ee}=e,ne=ct(e,lt);const D=we(),K=zn(x),C=dt($),ce=Bn(),ue=In(t),[X,te]=q(!t),P=M(null);Nn(n,()=>C,[C]),Ve&&!ue&&t&&(P.current=me(D==null?void 0:D.document)),t&&X&&te(!1);const Y=L(()=>{if(C.add(),fe.current=Be(document,"keydown",gn),de.current=Be(document,"focus",()=>setTimeout(Q),!0),w&&w(),g){var N,$e;const ve=me((N=($e=C.dialog)==null?void 0:$e.ownerDocument)!=null?N:D==null?void 0:D.document);C.dialog&&ve&&!Ie(C.dialog,ve)&&(P.current=ve,C.dialog.focus())}}),R=L(()=>{if(C.remove(),fe.current==null||fe.current(),de.current==null||de.current(),T){var N;(N=P.current)==null||N.focus==null||N.focus(I),P.current=null}});F(()=>{!t||!K||Y()},[t,K,Y]),F(()=>{X&&R()},[X,R]),Yn(()=>{R()});const Q=L(()=>{if(!m||!ce()||!C.isTopModal())return;const N=me(D==null?void 0:D.document);C.dialog&&N&&!Ie(C.dialog,N)&&C.dialog.focus()}),pn=L(N=>{N.target===N.currentTarget&&(c==null||c(N),s===!0&&S())}),gn=L(N=>{i&&Jn(N)&&C.isTopModal()&&(u==null||u(N),N.defaultPrevented||S())}),de=M(),fe=M(),xn=(...N)=>{te(!0),Z==null||Z(...N)};if(!K)return null;const je=Object.assign({role:r,ref:C.setDialogRef,"aria-modal":r==="dialog"?!0:void 0},ne,{style:o,className:a,tabIndex:-1});let he=E?E(je):d.jsx("div",Object.assign({},je,{children:y.cloneElement(l,{role:"document"})}));he=Fe(f,h,{unmountOnExit:!0,mountOnEnter:!0,appear:!0,in:!!t,onExit:J,onExiting:ie,onExited:xn,onEnter:le,onEntering:V,onEntered:ee,children:he});let re=null;return s&&(re=b({ref:C.setBackdropRef,onClick:pn}),re=Fe(p,v,{in:!!t,appear:!0,mountOnEnter:!0,unmountOnExit:!0,children:re})),d.jsx(d.Fragment,{children:Sn.createPortal(d.jsxs(d.Fragment,{children:[re,he]}),K)})});rn.displayName="Modal";const ft=Object.assign(rn,{Manager:Re}),an=y.forwardRef(({className:e,bsPrefix:n,as:t="div",...r},a)=>(n=j(n,"offcanvas-body"),d.jsx(t,{ref:a,className:O(e,n),...r})));an.displayName="OffcanvasBody";const ht={[Ce]:"show",[Ge]:"show"},on=y.forwardRef(({bsPrefix:e,className:n,children:t,in:r=!1,mountOnEnter:a=!1,unmountOnExit:o=!1,appear:l=!1,...s},i)=>(e=j(e,"offcanvas"),d.jsx(He,{ref:i,addEndListener:_e,in:r,mountOnEnter:a,unmountOnExit:o,appear:l,...s,childRef:t.ref,children:(c,u)=>y.cloneElement(t,{...u,className:O(n,t.props.className,(c===Ce||c===Pe)&&`${e}-toggling`,ht[c])})})));on.displayName="OffcanvasToggling";const sn=y.createContext({onHide(){}}),vt=y.forwardRef(({closeLabel:e="Close",closeVariant:n,closeButton:t=!1,onHide:r,children:a,...o},l)=>{const s=B(sn),i=L(()=>{s==null||s.onHide(),r==null||r()});return d.jsxs("div",{ref:l,...o,children:[a,t&&d.jsx(wn,{"aria-label":e,variant:n,onClick:i})]})}),ln=y.forwardRef(({bsPrefix:e,className:n,closeLabel:t="Close",closeButton:r=!1,...a},o)=>(e=j(e,"offcanvas-header"),d.jsx(vt,{ref:o,...a,className:O(n,e),closeLabel:t,closeButton:r})));ln.displayName="OffcanvasHeader";const mt=On("h5"),cn=y.forwardRef(({className:e,bsPrefix:n,as:t=mt,...r},a)=>(n=j(n,"offcanvas-title"),d.jsx(t,{ref:a,className:O(e,n),...r})));cn.displayName="OffcanvasTitle";function pt(e,n){return e.classList?e.classList.contains(n):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+n+" ")!==-1}function gt(e,n){e.classList?e.classList.add(n):pt(e,n)||(typeof e.className=="string"?e.className=e.className+" "+n:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+n))}function Ke(e,n){return e.replace(new RegExp("(^|\\s)"+n+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function xt(e,n){e.classList?e.classList.remove(n):typeof e.className=="string"?e.className=Ke(e.className,n):e.setAttribute("class",Ke(e.className&&e.className.baseVal||"",n))}const G={FIXED_CONTENT:".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",STICKY_CONTENT:".sticky-top",NAVBAR_TOGGLER:".navbar-toggler"};class un extends Re{adjustAndStore(n,t,r){const a=t.style[n];t.dataset[n]=a,_(t,{[n]:`${parseFloat(_(t,n))+r}px`})}restore(n,t){const r=t.dataset[n];r!==void 0&&(delete t.dataset[n],_(t,{[n]:r}))}setContainerStyle(n){super.setContainerStyle(n);const t=this.getElement();if(gt(t,"modal-open"),!n.scrollBarWidth)return;const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";W(t,G.FIXED_CONTENT).forEach(o=>this.adjustAndStore(r,o,n.scrollBarWidth)),W(t,G.STICKY_CONTENT).forEach(o=>this.adjustAndStore(a,o,-n.scrollBarWidth)),W(t,G.NAVBAR_TOGGLER).forEach(o=>this.adjustAndStore(a,o,n.scrollBarWidth))}removeContainerStyle(n){super.removeContainerStyle(n);const t=this.getElement();xt(t,"modal-open");const r=this.isRTL?"paddingLeft":"paddingRight",a=this.isRTL?"marginLeft":"marginRight";W(t,G.FIXED_CONTENT).forEach(o=>this.restore(r,o)),W(t,G.STICKY_CONTENT).forEach(o=>this.restore(a,o)),W(t,G.NAVBAR_TOGGLER).forEach(o=>this.restore(a,o))}}let xe;function Et(e){return xe||(xe=new un(e)),xe}function yt(e){return d.jsx(on,{...e})}function Nt(e){return d.jsx(Rn,{...e})}const dn=y.forwardRef(({bsPrefix:e,className:n,children:t,"aria-labelledby":r,placement:a="start",responsive:o,show:l=!1,backdrop:s=!0,keyboard:i=!0,scroll:c=!1,onEscapeKeyDown:u,onShow:f,onHide:h,container:p,autoFocus:v=!0,enforceFocus:g=!0,restoreFocus:m=!0,restoreFocusOptions:T,onEntered:I,onExit:E,onExiting:b,onEnter:$,onEntering:x,onExited:w,backdropClassName:S,manager:J,renderStaticNode:Z=!1,...ie},le)=>{const V=M();e=j(e,"offcanvas");const{onToggle:ee}=B(U)||{},[ne,D]=q(!1),K=Vn(o||"xs","up");F(()=>{D(o?l&&!K:l)},[l,o,K]);const C=L(()=>{ee==null||ee(),h==null||h()}),ce=k(()=>({onHide:C}),[C]);function ue(){return J||(c?(V.current||(V.current=new un({handleContainerOverflow:!1})),V.current):Et())}const X=(R,...Q)=>{R&&(R.style.visibility="visible"),$==null||$(R,...Q)},te=(R,...Q)=>{R&&(R.style.visibility=""),w==null||w(...Q)},P=A(R=>d.jsx("div",{...R,className:O(`${e}-backdrop`,S)}),[S,e]),Y=R=>d.jsx("div",{...R,...ie,className:O(n,o?`${e}-${o}`:e,`${e}-${a}`),"aria-labelledby":r,children:t});return d.jsxs(d.Fragment,{children:[!ne&&(o||Z)&&Y({}),d.jsx(sn.Provider,{value:ce,children:d.jsx(ft,{show:ne,ref:le,backdrop:s,container:p,keyboard:i,autoFocus:v,enforceFocus:g&&!c,restoreFocus:m,restoreFocusOptions:T,onEscapeKeyDown:u,onShow:f,onHide:C,onEnter:X,onEntering:x,onEntered:I,onExit:E,onExiting:b,onExited:te,manager:ue(),transition:yt,backdropTransition:Nt,renderBackdrop:P,renderDialog:Y})})]})});dn.displayName="Offcanvas";const bt=Object.assign(dn,{Body:an,Header:ln,Title:cn}),fn=y.forwardRef((e,n)=>{const t=B(U);return d.jsx(bt,{ref:n,show:!!(t!=null&&t.expanded),...e,renderStaticNode:!0})});fn.displayName="NavbarOffcanvas";const hn=y.forwardRef(({className:e,bsPrefix:n,as:t="span",...r},a)=>(n=j(n,"navbar-text"),d.jsx(t,{ref:a,className:O(e,n),...r})));hn.displayName="NavbarText";const vn=y.forwardRef((e,n)=>{const{bsPrefix:t,expand:r=!0,variant:a="light",bg:o,fixed:l,sticky:s,className:i,as:c="nav",expanded:u,onToggle:f,onSelect:h,collapseOnSelect:p=!1,...v}=We(e,{expanded:"onToggle"}),g=j(t,"navbar"),m=A((...E)=>{h==null||h(...E),p&&u&&(f==null||f(!1))},[h,p,u,f]);v.role===void 0&&c!=="nav"&&(v.role="navigation");let T=`${g}-expand`;typeof r=="string"&&(T=`${T}-${r}`);const I=k(()=>({onToggle:()=>f==null?void 0:f(!u),bsPrefix:g,expanded:!!u,expand:r}),[g,u,r,f]);return d.jsx(U.Provider,{value:I,children:d.jsx(ae.Provider,{value:m,children:d.jsx(c,{ref:n,...v,className:O(i,g,r&&T,a&&`${g}-${a}`,o&&`bg-${o}`,s&&`sticky-${s}`,l&&`fixed-${l}`)})})})});vn.displayName="Navbar";const Mt=Object.assign(vn,{Brand:en,Collapse:nn,Offcanvas:fn,Text:hn,Toggle:tn}),mn=y.forwardRef(({id:e,title:n,children:t,bsPrefix:r,className:a,rootCloseEvent:o,menuRole:l,disabled:s,active:i,renderMenuOnMount:c,menuVariant:u,...f},h)=>{const p=j(void 0,"nav-item");return d.jsxs(H,{ref:h,...f,className:O(a,p),children:[d.jsx(H.Toggle,{id:e,eventKey:null,active:i,disabled:s,childBsPrefix:r,as:Oe,children:n}),d.jsx(H.Menu,{role:l,renderOnMount:c,rootCloseEvent:o,variant:u,children:t})]})});mn.displayName="NavDropdown";const Bt=Object.assign(mn,{Item:H.Item,ItemText:H.ItemText,Divider:H.Divider,Header:H.Header});export{Mt as N,$t as a,Bt as b,Yn as u};
