import{a as m,g as ze}from"./Button-Dbum-Du3.js";import Ee from"https://cdn.jsdelivr.net/npm/react@18.3.1/+esm";var Te={},W={},q={};Object.defineProperty(q,"__esModule",{value:!0});q.default=Ue;var ae="html",oe="head",P="body",Ve=/<([a-zA-Z]+[0-9]?)/,le=/<head[^]*>/i,se=/<body[^]*>/i,M=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},X=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},ce=typeof window=="object"&&window.DOMParser;if(typeof ce=="function"){var Ge=new ce,Xe="text/html";X=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),Ge.parseFromString(e,Xe)},M=X}if(typeof document=="object"&&document.implementation){var x=document.implementation.createHTMLDocument();M=function(e,t){if(t){var r=x.documentElement.querySelector(t);return r&&(r.innerHTML=e),x}return x.documentElement.innerHTML=e,x}}var R=typeof document=="object"&&document.createElement("template"),U;R&&R.content&&(U=function(e){return R.innerHTML=e,R.content.childNodes});function Ue(e){var t,r,n=e.match(Ve),i=n&&n[1]?n[1].toLowerCase():"";switch(i){case ae:{var s=X(e);if(!le.test(e)){var f=s.querySelector(oe);(t=f==null?void 0:f.parentNode)===null||t===void 0||t.removeChild(f)}if(!se.test(e)){var f=s.querySelector(P);(r=f==null?void 0:f.parentNode)===null||r===void 0||r.removeChild(f)}return s.querySelectorAll(ae)}case oe:case P:{var l=M(e).querySelectorAll(i);return se.test(e)&&le.test(e)?l[0].parentNode.childNodes:l}default:{if(U)return U(e);var f=M(e,P).querySelector(P);return f.childNodes}}}var D={},Y={},Z={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(Z);var p={},b=m&&m.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,i){n.__proto__=i}||function(n,i){for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(n[s]=i[s])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),k=m&&m.__assign||function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},k.apply(this,arguments)};Object.defineProperty(p,"__esModule",{value:!0});p.cloneNode=p.hasChildren=p.isDocument=p.isDirective=p.isComment=p.isText=p.isCDATA=p.isTag=p.Element=p.Document=p.CDATA=p.NodeWithChildren=p.ProcessingInstruction=p.Comment=p.Text=p.DataNode=p.Node=void 0;var E=Z,K=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),J(this,t)},e}();p.Node=K;var I=function(e){b(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(K);p.DataNode=I;var _e=function(e){b(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=E.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(I);p.Text=_e;var be=function(e){b(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=E.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(I);p.Comment=be;var Se=function(e){b(t,e);function t(r,n){var i=e.call(this,n)||this;return i.name=r,i.type=E.ElementType.Directive,i}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(I);p.ProcessingInstruction=Se;var L=function(e){b(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(K);p.NodeWithChildren=L;var Ce=function(e){b(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=E.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(L);p.CDATA=Ce;var Oe=function(e){b(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=E.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(L);p.Document=Oe;var ke=function(e){b(t,e);function t(r,n,i,s){i===void 0&&(i=[]),s===void 0&&(s=r==="script"?E.ElementType.Script:r==="style"?E.ElementType.Style:E.ElementType.Tag);var f=e.call(this,i)||this;return f.name=r,f.attribs=n,f.type=s,f}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var i,s;return{name:n,value:r.attribs[n],namespace:(i=r["x-attribsNamespace"])===null||i===void 0?void 0:i[n],prefix:(s=r["x-attribsPrefix"])===null||s===void 0?void 0:s[n]}})},enumerable:!1,configurable:!0}),t}(L);p.Element=ke;function Ae(e){return(0,E.isTag)(e)}p.isTag=Ae;function we(e){return e.type===E.ElementType.CDATA}p.isCDATA=we;function Pe(e){return e.type===E.ElementType.Text}p.isText=Pe;function xe(e){return e.type===E.ElementType.Comment}p.isComment=xe;function Re(e){return e.type===E.ElementType.Directive}p.isDirective=Re;function Ne(e){return e.type===E.ElementType.Root}p.isDocument=Ne;function $e(e){return Object.prototype.hasOwnProperty.call(e,"children")}p.hasChildren=$e;function J(e,t){t===void 0&&(t=!1);var r;if(Pe(e))r=new _e(e.data);else if(xe(e))r=new be(e.data);else if(Ae(e)){var n=t?V(e.children):[],i=new ke(e.name,k({},e.attribs),n);n.forEach(function(a){return a.parent=i}),e.namespace!=null&&(i.namespace=e.namespace),e["x-attribsNamespace"]&&(i["x-attribsNamespace"]=k({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(i["x-attribsPrefix"]=k({},e["x-attribsPrefix"])),r=i}else if(we(e)){var n=t?V(e.children):[],s=new Ce(n);n.forEach(function(o){return o.parent=s}),r=s}else if(Ne(e)){var n=t?V(e.children):[],f=new Oe(n);n.forEach(function(o){return o.parent=f}),e["x-mode"]&&(f["x-mode"]=e["x-mode"]),r=f}else if(Re(e)){var l=new Se(e.name,e.data);e["x-name"]!=null&&(l["x-name"]=e["x-name"],l["x-publicId"]=e["x-publicId"],l["x-systemId"]=e["x-systemId"]),r=l}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}p.cloneNode=J;function V(e){for(var t=e.map(function(n){return J(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=m&&m.__createBinding||(Object.create?function(l,a,o,c){c===void 0&&(c=o);var d=Object.getOwnPropertyDescriptor(a,o);(!d||("get"in d?!a.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return a[o]}}),Object.defineProperty(l,c,d)}:function(l,a,o,c){c===void 0&&(c=o),l[c]=a[o]}),r=m&&m.__exportStar||function(l,a){for(var o in l)o!=="default"&&!Object.prototype.hasOwnProperty.call(a,o)&&t(a,l,o)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=Z,i=p;r(p,e);var s={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},f=function(){function l(a,o,c){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof o=="function"&&(c=o,o=s),typeof a=="object"&&(o=a,a=void 0),this.callback=a??null,this.options=o??s,this.elementCB=c??null}return l.prototype.onparserinit=function(a){this.parser=a},l.prototype.onreset=function(){this.dom=[],this.root=new i.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},l.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},l.prototype.onerror=function(a){this.handleCallback(a)},l.prototype.onclosetag=function(){this.lastNode=null;var a=this.tagStack.pop();this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(a)},l.prototype.onopentag=function(a,o){var c=this.options.xmlMode?n.ElementType.Tag:void 0,d=new i.Element(a,o,void 0,c);this.addNode(d),this.tagStack.push(d)},l.prototype.ontext=function(a){var o=this.lastNode;if(o&&o.type===n.ElementType.Text)o.data+=a,this.options.withEndIndices&&(o.endIndex=this.parser.endIndex);else{var c=new i.Text(a);this.addNode(c),this.lastNode=c}},l.prototype.oncomment=function(a){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=a;return}var o=new i.Comment(a);this.addNode(o),this.lastNode=o},l.prototype.oncommentend=function(){this.lastNode=null},l.prototype.oncdatastart=function(){var a=new i.Text(""),o=new i.CDATA([a]);this.addNode(o),a.parent=o,this.lastNode=a},l.prototype.oncdataend=function(){this.lastNode=null},l.prototype.onprocessinginstruction=function(a,o){var c=new i.ProcessingInstruction(a,o);this.addNode(c)},l.prototype.handleCallback=function(a){if(typeof this.callback=="function")this.callback(a,this.dom);else if(a)throw a},l.prototype.addNode=function(a){var o=this.tagStack[this.tagStack.length-1],c=o.children[o.children.length-1];this.options.withStartIndices&&(a.startIndex=this.parser.startIndex),this.options.withEndIndices&&(a.endIndex=this.parser.endIndex),o.children.push(a),c&&(a.prev=c,c.next=a),a.parent=o,this.lastNode=null},l}();e.DomHandler=f,e.default=f})(Y);var Me={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t,r){return t[r.toLowerCase()]=r,t},{})})(Me);Object.defineProperty(D,"__esModule",{value:!0});D.formatAttributes=De;D.formatDOM=Ie;var N=Y,We=Me;function qe(e){return We.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function De(e){for(var t={},r=0,n=e.length;r<n;r++){var i=e[r];t[i.name]=i.value}return t}function Ye(e){e=e.toLowerCase();var t=qe(e);return t||e}function Ie(e,t,r){t===void 0&&(t=null);for(var n=[],i,s=0,f=e.length;s<f;s++){var l=e[s];switch(l.nodeType){case 1:{var a=Ye(l.nodeName);i=new N.Element(a,De(l.attributes)),i.children=Ie(a==="template"?l.content.childNodes:l.childNodes,i);break}case 3:i=new N.Text(l.nodeValue);break;case 8:i=new N.Comment(l.nodeValue);break;default:continue}var o=n[s-1]||null;o&&(o.next=i),i.parent=t,i.prev=o,i.next=null,n.push(i)}return r&&(i=new N.ProcessingInstruction(r.substring(0,r.indexOf(" ")).toLowerCase(),r),i.next=n[0]||null,i.parent=t,n.unshift(i),n[1]&&(n[1].prev=n[0])),n}var Ze=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(W,"__esModule",{value:!0});W.default=et;var Ke=Ze(q),Je=D,Qe=/<(![a-zA-Z\s]+)>/;function et(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(Qe),r=t?t[1]:void 0;return(0,Je.formatDOM)((0,Ke.default)(e),null,r)}var j={},T={},F={},tt=0;F.SAME=tt;var rt=1;F.CAMELCASE=rt;F.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const Le=0,S=1,H=2,B=3,Q=4,je=5,Fe=6;function nt(e){return v.hasOwnProperty(e)?v[e]:null}function g(e,t,r,n,i,s,f){this.acceptsBooleans=t===H||t===B||t===Q,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=f}const v={},it=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];it.forEach(e=>{v[e]=new g(e,Le,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{v[e]=new g(e,S,!1,t,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{v[e]=new g(e,H,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{v[e]=new g(e,H,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{v[e]=new g(e,B,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{v[e]=new g(e,B,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{v[e]=new g(e,Q,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{v[e]=new g(e,Fe,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{v[e]=new g(e,je,!1,e.toLowerCase(),null,!1,!1)});const ee=/[\-\:]([a-z])/g,te=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const t=e.replace(ee,te);v[t]=new g(t,S,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const t=e.replace(ee,te);v[t]=new g(t,S,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const t=e.replace(ee,te);v[t]=new g(t,S,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{v[e]=new g(e,S,!1,e.toLowerCase(),null,!1,!1)});const at="xlinkHref";v[at]=new g("xlinkHref",S,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{v[e]=new g(e,S,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:ot,SAME:lt,possibleStandardNames:ue}=F,st=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",ct=st+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",ut=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+ct+"]*$")),ft=Object.keys(ue).reduce((e,t)=>{const r=ue[t];return r===lt?e[t]=t:r===ot?e[t.toLowerCase()]=t:e[t]=r,e},{});T.BOOLEAN=B;T.BOOLEANISH_STRING=H;T.NUMERIC=je;T.OVERLOADED_BOOLEAN=Q;T.POSITIVE_NUMERIC=Fe;T.RESERVED=Le;T.STRING=S;T.getPropertyInfo=nt;T.isCustomAttribute=ut;T.possibleStandardNames=ft;var re={},ne={},fe=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,dt=/\n/g,pt=/^\s*/,ht=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,mt=/^:\s*/,vt=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,gt=/^[;\s]*/,yt=/^\s+|\s+$/g,Et=`
`,de="/",pe="*",C="",Tt="comment",_t="declaration",bt=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function i(h){var u=h.match(dt);u&&(r+=u.length);var y=h.lastIndexOf(Et);n=~y?h.length-y:n+h.length}function s(){var h={line:r,column:n};return function(u){return u.position=new f(h),o(),u}}function f(h){this.start=h,this.end={line:r,column:n},this.source=t.source}f.prototype.content=e;function l(h){var u=new Error(t.source+":"+r+":"+n+": "+h);if(u.reason=h,u.filename=t.source,u.line=r,u.column=n,u.source=e,!t.silent)throw u}function a(h){var u=h.exec(e);if(u){var y=u[0];return i(y),e=e.slice(y.length),u}}function o(){a(pt)}function c(h){var u;for(h=h||[];u=d();)u!==!1&&h.push(u);return h}function d(){var h=s();if(!(de!=e.charAt(0)||pe!=e.charAt(1))){for(var u=2;C!=e.charAt(u)&&(pe!=e.charAt(u)||de!=e.charAt(u+1));)++u;if(u+=2,C===e.charAt(u-1))return l("End of comment missing");var y=e.slice(2,u-2);return n+=2,i(y),e=e.slice(u),n+=2,h({type:Tt,comment:y})}}function _(){var h=s(),u=a(ht);if(u){if(d(),!a(mt))return l("property missing ':'");var y=a(vt),Be=h({type:_t,property:he(u[0].replace(fe,C)),value:y?he(y[0].replace(fe,C)):C});return a(gt),Be}}function w(){var h=[];c(h);for(var u;u=_();)u!==!1&&(h.push(u),c(h));return h}return o(),w()};function he(e){return e?e.replace(yt,C):C}var St=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ne,"__esModule",{value:!0});var Ct=St(bt);function Ot(e,t){var r=null;if(!e||typeof e!="string")return r;var n=(0,Ct.default)(e),i=typeof t=="function";return n.forEach(function(s){if(s.type==="declaration"){var f=s.property,l=s.value;i?t(f,l,s):l&&(r=r||{},r[f]=l)}}),r}ne.default=Ot;var z={};Object.defineProperty(z,"__esModule",{value:!0});z.camelCase=void 0;var kt=/^--[a-zA-Z0-9-]+$/,At=/-([a-z])/g,wt=/^[^-]+$/,Pt=/^-(webkit|moz|ms|o|khtml)-/,xt=/^-(ms)-/,Rt=function(e){return!e||wt.test(e)||kt.test(e)},Nt=function(e,t){return t.toUpperCase()},me=function(e,t){return"".concat(t,"-")},Mt=function(e,t){return t===void 0&&(t={}),Rt(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(xt,me):e=e.replace(Pt,me),e.replace(At,Nt))};z.camelCase=Mt;var Dt=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},It=Dt(ne),Lt=z;function $(e,t){var r={};return!e||typeof e!="string"||(0,It.default)(e,function(n,i){n&&i&&(r[(0,Lt.camelCase)(n,t)]=i)}),r}$.default=$;var jt=$;(function(e){var t=m&&m.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=void 0,e.isCustomComponent=s,e.setStyleProp=l;var r=Ee,n=t(jt),i=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function s(c,d){return c.includes("-")?!i.has(c):!!(d&&typeof d.is=="string")}var f={reactCompat:!0};function l(c,d){if(typeof c=="string"){if(!c.trim()){d.style={};return}try{d.style=(0,n.default)(c,f)}catch{d.style={}}}}e.PRESERVE_CUSTOM_ATTRIBUTES=Number(r.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var a=function(c){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name)};e.canTextBeChildOfNode=a;var o=function(c){return c};e.returnFirstArg=o})(re);Object.defineProperty(j,"__esModule",{value:!0});j.default=zt;var O=T,ve=re,Ft=["checked","value"],Ht=["input","select","textarea"],Bt={reset:!0,submit:!0};function zt(e,t){e===void 0&&(e={});var r={},n=!!(e.type&&Bt[e.type]);for(var i in e){var s=e[i];if((0,O.isCustomAttribute)(i)){r[i]=s;continue}var f=i.toLowerCase(),l=ge(f);if(l){var a=(0,O.getPropertyInfo)(l);switch(Ft.includes(l)&&Ht.includes(t)&&!n&&(l=ge("default"+f)),r[l]=s,a&&a.type){case O.BOOLEAN:r[l]=!0;break;case O.OVERLOADED_BOOLEAN:s===""&&(r[l]=!0);break}continue}ve.PRESERVE_CUSTOM_ATTRIBUTES&&(r[i]=s)}return(0,ve.setStyleProp)(e.style,r),r}function ge(e){return O.possibleStandardNames[e]}var ie={},Vt=m&&m.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ie,"__esModule",{value:!0});ie.default=He;var G=Ee,Gt=Vt(j),A=re,Xt={cloneElement:G.cloneElement,createElement:G.createElement,isValidElement:G.isValidElement};function He(e,t){t===void 0&&(t={});for(var r=[],n=typeof t.replace=="function",i=t.transform||A.returnFirstArg,s=t.library||Xt,f=s.cloneElement,l=s.createElement,a=s.isValidElement,o=e.length,c=0;c<o;c++){var d=e[c];if(n){var _=t.replace(d,c);if(a(_)){o>1&&(_=f(_,{key:_.key||c})),r.push(i(_,d,c));continue}}if(d.type==="text"){var w=!d.data.trim().length;if(w&&d.parent&&!(0,A.canTextBeChildOfNode)(d.parent)||t.trim&&w)continue;r.push(i(d.data,d,c));continue}var h=d,u={};Ut(h)?((0,A.setStyleProp)(h.attribs.style,h.attribs),u=h.attribs):h.attribs&&(u=(0,Gt.default)(h.attribs,h.name));var y=void 0;switch(d.type){case"script":case"style":d.children[0]&&(u.dangerouslySetInnerHTML={__html:d.children[0].data});break;case"tag":d.name==="textarea"&&d.children[0]?u.defaultValue=d.children[0].data:d.children&&d.children.length&&(y=He(d.children,t));break;default:continue}o>1&&(u.key=c),r.push(i(l(d.name,u,y),d,c))}return r.length===1?r[0]:r}function Ut(e){return A.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&(0,A.isCustomComponent)(e.name,e.attribs)}(function(e){var t=m&&m.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0,e.default=l;var r=t(W);e.htmlToDOM=r.default;var n=t(j);e.attributesToProps=n.default;var i=t(ie);e.domToReact=i.default;var s=Y;Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return s.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return s.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return s.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return s.Text}});var f={lowerCaseAttributeNames:!1};function l(a,o){if(typeof a!="string")throw new TypeError("First argument must be a string");return a?(0,i.default)((0,r.default)(a,(o==null?void 0:o.htmlparser2)||f),o):[]}})(Te);const ye=ze(Te),qt=ye.default||ye;export{qt as p};
