(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function r0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Jp={exports:{}},yl={},em={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ra=Symbol.for("react.element"),s0=Symbol.for("react.portal"),a0=Symbol.for("react.fragment"),o0=Symbol.for("react.strict_mode"),l0=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),f0=Symbol.for("react.suspense"),h0=Symbol.for("react.memo"),p0=Symbol.for("react.lazy"),gf=Symbol.iterator;function m0(t){return t===null||typeof t!="object"?null:(t=gf&&t[gf]||t["@@iterator"],typeof t=="function"?t:null)}var tm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},nm=Object.assign,im={};function Cs(t,e,n){this.props=t,this.context=e,this.refs=im,this.updater=n||tm}Cs.prototype.isReactComponent={};Cs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Cs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function rm(){}rm.prototype=Cs.prototype;function rd(t,e,n){this.props=t,this.context=e,this.refs=im,this.updater=n||tm}var sd=rd.prototype=new rm;sd.constructor=rd;nm(sd,Cs.prototype);sd.isPureReactComponent=!0;var xf=Array.isArray,sm=Object.prototype.hasOwnProperty,ad={current:null},am={key:!0,ref:!0,__self:!0,__source:!0};function om(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)sm.call(e,i)&&!am.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Ra,type:t,key:s,ref:a,props:r,_owner:ad.current}}function g0(t,e){return{$$typeof:Ra,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function od(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ra}function x0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var vf=/\/+/g;function Wl(t,e){return typeof t=="object"&&t!==null&&t.key!=null?x0(""+t.key):e.toString(36)}function No(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ra:case s0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Wl(a,0):i,xf(r)?(n="",t!=null&&(n=t.replace(vf,"$&/")+"/"),No(r,e,n,"",function(u){return u})):r!=null&&(od(r)&&(r=g0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(vf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",xf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Wl(s,o);a+=No(s,e,n,l,r)}else if(l=m0(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Wl(s,o++),a+=No(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ga(t,e,n){if(t==null)return t;var i=[],r=0;return No(t,i,"","",function(s){return e.call(n,s,r++)}),i}function v0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Po={transition:null},_0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Po,ReactCurrentOwner:ad};function lm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!od(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Cs;We.Fragment=a0;We.Profiler=l0;We.PureComponent=rd;We.StrictMode=o0;We.Suspense=f0;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_0;We.act=lm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=nm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=ad.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)sm.call(e,l)&&!am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Ra,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:u0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:c0,_context:t},t.Consumer=t};We.createElement=om;We.createFactory=function(t){var e=om.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:d0,render:t}};We.isValidElement=od;We.lazy=function(t){return{$$typeof:p0,_payload:{_status:-1,_result:t},_init:v0}};We.memo=function(t,e){return{$$typeof:h0,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Po.transition;Po.transition={};try{t()}finally{Po.transition=e}};We.unstable_act=lm;We.useCallback=function(t,e){return qt.current.useCallback(t,e)};We.useContext=function(t){return qt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};We.useEffect=function(t,e){return qt.current.useEffect(t,e)};We.useId=function(){return qt.current.useId()};We.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return qt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};We.useRef=function(t){return qt.current.useRef(t)};We.useState=function(t){return qt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return qt.current.useTransition()};We.version="18.3.1";em.exports=We;var Ee=em.exports;const y0=r0(Ee);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S0=Ee,M0=Symbol.for("react.element"),b0=Symbol.for("react.fragment"),E0=Object.prototype.hasOwnProperty,w0=S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T0={key:!0,ref:!0,__self:!0,__source:!0};function cm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)E0.call(e,i)&&!T0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:M0,type:t,key:s,ref:a,props:r,_owner:w0.current}}yl.Fragment=b0;yl.jsx=cm;yl.jsxs=cm;Jp.exports=yl;var c=Jp.exports,Kc={},um={exports:{}},mn={},dm={exports:{}},fm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,B){var C=D.length;D.push(B);e:for(;0<C;){var A=C-1>>>1,$=D[A];if(0<r($,B))D[A]=B,D[C]=$,C=A;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var B=D[0],C=D.pop();if(C!==B){D[0]=C;e:for(var A=0,$=D.length,se=$>>>1;A<se;){var F=2*(A+1)-1,X=D[F],Q=F+1,ie=D[Q];if(0>r(X,C))Q<$&&0>r(ie,X)?(D[A]=ie,D[Q]=C,A=Q):(D[A]=X,D[F]=C,A=F);else if(Q<$&&0>r(ie,C))D[A]=ie,D[Q]=C,A=Q;else break e}}return B}function r(D,B){var C=D.sortIndex-B.sortIndex;return C!==0?C:D.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],u=[],f=1,h=null,p=3,g=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=D)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function M(D){if(_=!1,x(D),!y)if(n(l)!==null)y=!0,q(R);else{var B=n(u);B!==null&&J(M,B.startTime-D)}}function R(D,B){y=!1,_&&(_=!1,d(L),L=-1),g=!0;var C=p;try{for(x(B),h=n(l);h!==null&&(!(h.expirationTime>B)||D&&!N());){var A=h.callback;if(typeof A=="function"){h.callback=null,p=h.priorityLevel;var $=A(h.expirationTime<=B);B=t.unstable_now(),typeof $=="function"?h.callback=$:h===n(l)&&i(l),x(B)}else i(l);h=n(l)}if(h!==null)var se=!0;else{var F=n(u);F!==null&&J(M,F.startTime-B),se=!1}return se}finally{h=null,p=C,g=!1}}var E=!1,T=null,L=-1,V=5,S=-1;function N(){return!(t.unstable_now()-S<V)}function ee(){if(T!==null){var D=t.unstable_now();S=D;var B=!0;try{B=T(!0,D)}finally{B?te():(E=!1,T=null)}}else E=!1}var te;if(typeof v=="function")te=function(){v(ee)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,K=U.port2;U.port1.onmessage=ee,te=function(){K.postMessage(null)}}else te=function(){m(ee,0)};function q(D){T=D,E||(E=!0,te())}function J(D,B){L=m(function(){D(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){y||g||(y=!0,q(R))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(p){case 1:case 2:case 3:var B=3;break;default:B=p}var C=p;p=B;try{return D()}finally{p=C}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,B){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var C=p;p=D;try{return B()}finally{p=C}},t.unstable_scheduleCallback=function(D,B,C){var A=t.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?A+C:A):C=A,D){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=C+$,D={id:f++,callback:B,priorityLevel:D,startTime:C,expirationTime:$,sortIndex:-1},C>A?(D.sortIndex=C,e(u,D),n(l)===null&&D===n(u)&&(_?(d(L),L=-1):_=!0,J(M,C-A))):(D.sortIndex=$,e(l,D),y||g||(y=!0,q(R))),D},t.unstable_shouldYield=N,t.unstable_wrapCallback=function(D){var B=p;return function(){var C=p;p=B;try{return D.apply(this,arguments)}finally{p=C}}}})(fm);dm.exports=fm;var A0=dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C0=Ee,pn=A0;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hm=new Set,ca={};function Ar(t,e){xs(t,e),xs(t+"Capture",e)}function xs(t,e){for(ca[t]=e,t=0;t<e.length;t++)hm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=Object.prototype.hasOwnProperty,R0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_f={},yf={};function N0(t){return Zc.call(yf,t)?!0:Zc.call(_f,t)?!1:R0.test(t)?yf[t]=!0:(_f[t]=!0,!1)}function P0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function L0(t,e,n,i){if(e===null||typeof e>"u"||P0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var ld=/[\-:]([a-z])/g;function cd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ld,cd);Dt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ld,cd);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ld,cd);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function ud(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(L0(e,n,r,i)&&(n=null),i||r===null?N0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var xi=C0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),dd=Symbol.for("react.strict_mode"),Qc=Symbol.for("react.profiler"),pm=Symbol.for("react.provider"),mm=Symbol.for("react.context"),fd=Symbol.for("react.forward_ref"),Jc=Symbol.for("react.suspense"),eu=Symbol.for("react.suspense_list"),hd=Symbol.for("react.memo"),wi=Symbol.for("react.lazy"),gm=Symbol.for("react.offscreen"),Sf=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=Sf&&t[Sf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,Xl;function $s(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var ql=!1;function $l(t,e){if(!t||ql)return"";ql=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{ql=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?$s(t):""}function D0(t){switch(t.tag){case 5:return $s(t.type);case 16:return $s("Lazy");case 13:return $s("Suspense");case 19:return $s("SuspenseList");case 0:case 2:case 15:return t=$l(t.type,!1),t;case 11:return t=$l(t.type.render,!1),t;case 1:return t=$l(t.type,!0),t;default:return""}}function tu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case $r:return"Portal";case Qc:return"Profiler";case dd:return"StrictMode";case Jc:return"Suspense";case eu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case mm:return(t.displayName||"Context")+".Consumer";case pm:return(t._context.displayName||"Context")+".Provider";case fd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case hd:return e=t.displayName||null,e!==null?e:tu(t.type)||"Memo";case wi:e=t._payload,t=t._init;try{return tu(t(e))}catch{}}return null}function U0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tu(e);case 8:return e===dd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function I0(t){var e=xm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=I0(t))}function vm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Go(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nu(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _m(t,e){e=e.checked,e!=null&&ud(t,"checked",e,!1)}function iu(t,e){_m(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ru(t,e.type,n):e.hasOwnProperty("defaultValue")&&ru(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ru(t,e,n){(e!=="number"||Go(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ys=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function su(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ef(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ys(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function ym(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,Mm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ua(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(t){k0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Js[e]=Js[t]})});function bm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Js.hasOwnProperty(t)&&Js[t]?(""+e).trim():e+"px"}function Em(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=bm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var F0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ou(t,e){if(e){if(F0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cu=null;function pd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uu=null,cs=null,us=null;function Tf(t){if(t=La(t)){if(typeof uu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=wl(e),uu(t.stateNode,t.type,e))}}function wm(t){cs?us?us.push(t):us=[t]:cs=t}function Tm(){if(cs){var t=cs,e=us;if(us=cs=null,Tf(t),e)for(t=0;t<e.length;t++)Tf(e[t])}}function Am(t,e){return t(e)}function Cm(){}var Yl=!1;function Rm(t,e,n){if(Yl)return t(e,n);Yl=!0;try{return Am(t,e,n)}finally{Yl=!1,(cs!==null||us!==null)&&(Cm(),Tm())}}function da(t,e){var n=t.stateNode;if(n===null)return null;var i=wl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var du=!1;if(fi)try{var Is={};Object.defineProperty(Is,"passive",{get:function(){du=!0}}),window.addEventListener("test",Is,Is),window.removeEventListener("test",Is,Is)}catch{du=!1}function O0(t,e,n,i,r,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var ea=!1,Vo=null,Wo=!1,fu=null,z0={onError:function(t){ea=!0,Vo=t}};function B0(t,e,n,i,r,s,a,o,l){ea=!1,Vo=null,O0.apply(z0,arguments)}function j0(t,e,n,i,r,s,a,o,l){if(B0.apply(this,arguments),ea){if(ea){var u=Vo;ea=!1,Vo=null}else throw Error(re(198));Wo||(Wo=!0,fu=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Nm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Af(t){if(Cr(t)!==t)throw Error(re(188))}function H0(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Af(r),t;if(s===i)return Af(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function Pm(t){return t=H0(t),t!==null?Lm(t):null}function Lm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lm(t);if(e!==null)return e;t=t.sibling}return null}var Dm=pn.unstable_scheduleCallback,Cf=pn.unstable_cancelCallback,G0=pn.unstable_shouldYield,V0=pn.unstable_requestPaint,xt=pn.unstable_now,W0=pn.unstable_getCurrentPriorityLevel,md=pn.unstable_ImmediatePriority,Um=pn.unstable_UserBlockingPriority,Xo=pn.unstable_NormalPriority,X0=pn.unstable_LowPriority,Im=pn.unstable_IdlePriority,Sl=null,$n=null;function q0(t){if($n&&typeof $n.onCommitFiberRoot=="function")try{$n.onCommitFiberRoot(Sl,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:K0,$0=Math.log,Y0=Math.LN2;function K0(t){return t>>>=0,t===0?32:31-($0(t)/Y0|0)|0}var qa=64,$a=4194304;function Ks(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function qo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ks(o):(s&=a,s!==0&&(i=Ks(s)))}else a=n&~r,a!==0?i=Ks(a):s!==0&&(i=Ks(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function Z0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Q0(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Fn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Z0(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function hu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function km(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function Kl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function J0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function gd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Fm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Om,xd,zm,Bm,jm,pu=!1,Ya=[],Di=null,Ui=null,Ii=null,fa=new Map,ha=new Map,Ai=[],ev="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":fa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ha.delete(e.pointerId)}}function ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=La(e),e!==null&&xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tv(t,e,n,i,r){switch(e){case"focusin":return Di=ks(Di,t,e,n,i,r),!0;case"dragenter":return Ui=ks(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=ks(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return fa.set(s,ks(fa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ha.set(s,ks(ha.get(s)||null,t,e,n,i,r)),!0}return!1}function Hm(t){var e=hr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Nm(n),e!==null){t.blockedOn=e,jm(t.priority,function(){zm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);cu=i,n.target.dispatchEvent(i),cu=null}else return e=La(n),e!==null&&xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Nf(t,e,n){Lo(t)&&n.delete(e)}function nv(){pu=!1,Di!==null&&Lo(Di)&&(Di=null),Ui!==null&&Lo(Ui)&&(Ui=null),Ii!==null&&Lo(Ii)&&(Ii=null),fa.forEach(Nf),ha.forEach(Nf)}function Fs(t,e){t.blockedOn===e&&(t.blockedOn=null,pu||(pu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,nv)))}function pa(t){function e(r){return Fs(r,t)}if(0<Ya.length){Fs(Ya[0],t);for(var n=1;n<Ya.length;n++){var i=Ya[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&Fs(Di,t),Ui!==null&&Fs(Ui,t),Ii!==null&&Fs(Ii,t),fa.forEach(e),ha.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)Hm(n),n.blockedOn===null&&Ai.shift()}var ds=xi.ReactCurrentBatchConfig,$o=!0;function iv(t,e,n,i){var r=Je,s=ds.transition;ds.transition=null;try{Je=1,vd(t,e,n,i)}finally{Je=r,ds.transition=s}}function rv(t,e,n,i){var r=Je,s=ds.transition;ds.transition=null;try{Je=4,vd(t,e,n,i)}finally{Je=r,ds.transition=s}}function vd(t,e,n,i){if($o){var r=mu(t,e,n,i);if(r===null)ac(t,e,i,Yo,n),Rf(t,i);else if(tv(r,t,e,n,i))i.stopPropagation();else if(Rf(t,i),e&4&&-1<ev.indexOf(t)){for(;r!==null;){var s=La(r);if(s!==null&&Om(s),s=mu(t,e,n,i),s===null&&ac(t,e,i,Yo,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ac(t,e,i,null,n)}}var Yo=null;function mu(t,e,n,i){if(Yo=null,t=pd(i),t=hr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Nm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Yo=t,null}function Gm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(W0()){case md:return 1;case Um:return 4;case Xo:case X0:return 16;case Im:return 536870912;default:return 16}default:return 16}}var Ni=null,_d=null,Do=null;function Vm(){if(Do)return Do;var t,e=_d,n=e.length,i,r="value"in Ni?Ni.value:Ni.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Do=r.slice(t,1<i?1-i:void 0)}function Uo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Pf(){return!1}function gn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Pf,this.isPropagationStopped=Pf,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yd=gn(Rs),Pa=ht({},Rs,{view:0,detail:0}),sv=gn(Pa),Zl,Ql,Os,Ml=ht({},Pa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(Zl=t.screenX-Os.screenX,Ql=t.screenY-Os.screenY):Ql=Zl=0,Os=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:Ql}}),Lf=gn(Ml),av=ht({},Ml,{dataTransfer:0}),ov=gn(av),lv=ht({},Pa,{relatedTarget:0}),Jl=gn(lv),cv=ht({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),uv=gn(cv),dv=ht({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),fv=gn(dv),hv=ht({},Rs,{data:0}),Df=gn(hv),pv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=gv[t])?!!e[t]:!1}function Sd(){return xv}var vv=ht({},Pa,{key:function(t){if(t.key){var e=pv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Uo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sd,charCode:function(t){return t.type==="keypress"?Uo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Uo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_v=gn(vv),yv=ht({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uf=gn(yv),Sv=ht({},Pa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sd}),Mv=gn(Sv),bv=ht({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=gn(bv),wv=ht({},Ml,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Tv=gn(wv),Av=[9,13,27,32],Md=fi&&"CompositionEvent"in window,ta=null;fi&&"documentMode"in document&&(ta=document.documentMode);var Cv=fi&&"TextEvent"in window&&!ta,Wm=fi&&(!Md||ta&&8<ta&&11>=ta),If=" ",kf=!1;function Xm(t,e){switch(t){case"keyup":return Av.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Rv(t,e){switch(t){case"compositionend":return qm(e);case"keypress":return e.which!==32?null:(kf=!0,If);case"textInput":return t=e.data,t===If&&kf?null:t;default:return null}}function Nv(t,e){if(Kr)return t==="compositionend"||!Md&&Xm(t,e)?(t=Vm(),Do=_d=Ni=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wm&&e.locale!=="ko"?null:e.data;default:return null}}var Pv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Pv[t.type]:e==="textarea"}function $m(t,e,n,i){wm(i),e=Ko(e,"onChange"),0<e.length&&(n=new yd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var na=null,ma=null;function Lv(t){sg(t,0)}function bl(t){var e=Jr(t);if(vm(e))return t}function Dv(t,e){if(t==="change")return e}var Ym=!1;if(fi){var ec;if(fi){var tc="oninput"in document;if(!tc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),tc=typeof Of.oninput=="function"}ec=tc}else ec=!1;Ym=ec&&(!document.documentMode||9<document.documentMode)}function zf(){na&&(na.detachEvent("onpropertychange",Km),ma=na=null)}function Km(t){if(t.propertyName==="value"&&bl(ma)){var e=[];$m(e,ma,t,pd(t)),Rm(Lv,e)}}function Uv(t,e,n){t==="focusin"?(zf(),na=e,ma=n,na.attachEvent("onpropertychange",Km)):t==="focusout"&&zf()}function Iv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return bl(ma)}function kv(t,e){if(t==="click")return bl(e)}function Fv(t,e){if(t==="input"||t==="change")return bl(e)}function Ov(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Bn=typeof Object.is=="function"?Object.is:Ov;function ga(t,e){if(Bn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Zc.call(e,r)||!Bn(t[r],e[r]))return!1}return!0}function Bf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jf(t,e){var n=Bf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bf(n)}}function Zm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Zm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Qm(){for(var t=window,e=Go();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Go(t.document)}return e}function bd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function zv(t){var e=Qm(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Zm(n.ownerDocument.documentElement,n)){if(i!==null&&bd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=jf(n,s);var a=jf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Bv=fi&&"documentMode"in document&&11>=document.documentMode,Zr=null,gu=null,ia=null,xu=!1;function Hf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xu||Zr==null||Zr!==Go(i)||(i=Zr,"selectionStart"in i&&bd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&ga(ia,i)||(ia=i,i=Ko(gu,"onSelect"),0<i.length&&(e=new yd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},nc={},Jm={};fi&&(Jm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function El(t){if(nc[t])return nc[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jm)return nc[t]=e[n];return t}var eg=El("animationend"),tg=El("animationiteration"),ng=El("animationstart"),ig=El("transitionend"),rg=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){rg.set(t,e),Ar(e,[t])}for(var ic=0;ic<Gf.length;ic++){var rc=Gf[ic],jv=rc.toLowerCase(),Hv=rc[0].toUpperCase()+rc.slice(1);Yi(jv,"on"+Hv)}Yi(eg,"onAnimationEnd");Yi(tg,"onAnimationIteration");Yi(ng,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(ig,"onTransitionEnd");xs("onMouseEnter",["mouseout","mouseover"]);xs("onMouseLeave",["mouseout","mouseover"]);xs("onPointerEnter",["pointerout","pointerover"]);xs("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Gv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Zs));function Vf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,j0(i,e,void 0,t),t.currentTarget=null}function sg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Vf(r,o,u),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,u=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Vf(r,o,u),s=l}}}if(Wo)throw t=fu,Wo=!1,fu=null,t}function rt(t,e){var n=e[Mu];n===void 0&&(n=e[Mu]=new Set);var i=t+"__bubble";n.has(i)||(ag(e,t,2,!1),n.add(i))}function sc(t,e,n){var i=0;e&&(i|=4),ag(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function xa(t){if(!t[Qa]){t[Qa]=!0,hm.forEach(function(n){n!=="selectionchange"&&(Gv.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,sc("selectionchange",!1,e))}}function ag(t,e,n,i){switch(Gm(e)){case 1:var r=iv;break;case 4:r=rv;break;default:r=vd}n=r.bind(null,e,n,t),r=void 0,!du||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Rm(function(){var u=s,f=pd(n),h=[];e:{var p=rg.get(t);if(p!==void 0){var g=yd,y=t;switch(t){case"keypress":if(Uo(n)===0)break e;case"keydown":case"keyup":g=_v;break;case"focusin":y="focus",g=Jl;break;case"focusout":y="blur",g=Jl;break;case"beforeblur":case"afterblur":g=Jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Lf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=Mv;break;case eg:case tg:case ng:g=uv;break;case ig:g=Ev;break;case"scroll":g=sv;break;case"wheel":g=Tv;break;case"copy":case"cut":case"paste":g=fv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Uf}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?p!==null?p+"Capture":null:p;_=[];for(var v=u,x;v!==null;){x=v;var M=x.stateNode;if(x.tag===5&&M!==null&&(x=M,d!==null&&(M=da(v,d),M!=null&&_.push(va(v,M,x)))),m)break;v=v.return}0<_.length&&(p=new g(p,y,null,n,f),h.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==cu&&(y=n.relatedTarget||n.fromElement)&&(hr(y)||y[hi]))break e;if((g||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,g?(y=n.relatedTarget||n.toElement,g=u,y=y?hr(y):null,y!==null&&(m=Cr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(g=null,y=u),g!==y)){if(_=Lf,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=Uf,M="onPointerLeave",d="onPointerEnter",v="pointer"),m=g==null?p:Jr(g),x=y==null?p:Jr(y),p=new _(M,v+"leave",g,n,f),p.target=m,p.relatedTarget=x,M=null,hr(f)===u&&(_=new _(d,v+"enter",y,n,f),_.target=x,_.relatedTarget=m,M=_),m=M,g&&y)t:{for(_=g,d=y,v=0,x=_;x;x=Pr(x))v++;for(x=0,M=d;M;M=Pr(M))x++;for(;0<v-x;)_=Pr(_),v--;for(;0<x-v;)d=Pr(d),x--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Pr(_),d=Pr(d)}_=null}else _=null;g!==null&&Wf(h,p,g,_,!1),y!==null&&m!==null&&Wf(h,m,y,_,!0)}}e:{if(p=u?Jr(u):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var R=Dv;else if(Ff(p))if(Ym)R=Fv;else{R=Iv;var E=Uv}else(g=p.nodeName)&&g.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(R=kv);if(R&&(R=R(t,u))){$m(h,R,n,f);break e}E&&E(t,p,u),t==="focusout"&&(E=p._wrapperState)&&E.controlled&&p.type==="number"&&ru(p,"number",p.value)}switch(E=u?Jr(u):window,t){case"focusin":(Ff(E)||E.contentEditable==="true")&&(Zr=E,gu=u,ia=null);break;case"focusout":ia=gu=Zr=null;break;case"mousedown":xu=!0;break;case"contextmenu":case"mouseup":case"dragend":xu=!1,Hf(h,n,f);break;case"selectionchange":if(Bv)break;case"keydown":case"keyup":Hf(h,n,f)}var T;if(Md)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Kr?Xm(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Wm&&n.locale!=="ko"&&(Kr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Kr&&(T=Vm()):(Ni=f,_d="value"in Ni?Ni.value:Ni.textContent,Kr=!0)),E=Ko(u,L),0<E.length&&(L=new Df(L,t,null,n,f),h.push({event:L,listeners:E}),T?L.data=T:(T=qm(n),T!==null&&(L.data=T)))),(T=Cv?Rv(t,n):Nv(t,n))&&(u=Ko(u,"onBeforeInput"),0<u.length&&(f=new Df("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=T))}sg(h,e)})}function va(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ko(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=da(t,n),s!=null&&i.unshift(va(t,s,r)),s=da(t,e),s!=null&&i.push(va(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,u=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&u!==null&&(o=u,r?(l=da(n,s),l!=null&&a.unshift(va(n,l,o))):r||(l=da(n,s),l!=null&&a.push(va(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Vv=/\r\n?/g,Wv=/\u0000|\uFFFD/g;function Xf(t){return(typeof t=="string"?t:""+t).replace(Vv,`
`).replace(Wv,"")}function Ja(t,e,n){if(e=Xf(e),Xf(t)!==e&&n)throw Error(re(425))}function Zo(){}var vu=null,_u=null;function yu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Su=typeof setTimeout=="function"?setTimeout:void 0,Xv=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,qv=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(t){return qf.resolve(null).then(t).catch($v)}:Su;function $v(t){setTimeout(function(){throw t})}function oc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),pa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);pa(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $f(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Ns,_a="__reactProps$"+Ns,hi="__reactContainer$"+Ns,Mu="__reactEvents$"+Ns,Yv="__reactListeners$"+Ns,Kv="__reactHandles$"+Ns;function hr(t){var e=t[Xn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[Xn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$f(t);t!==null;){if(n=t[Xn])return n;t=$f(t)}return e}t=n,n=t.parentNode}return null}function La(t){return t=t[Xn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function wl(t){return t[_a]||null}var bu=[],es=-1;function Ki(t){return{current:t}}function at(t){0>es||(t.current=bu[es],bu[es]=null,es--)}function it(t,e){es++,bu[es]=t.current,t.current=e}var Wi={},jt=Ki(Wi),en=Ki(!1),Sr=Wi;function vs(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Qo(){at(en),at(jt)}function Yf(t,e,n){if(jt.current!==Wi)throw Error(re(168));it(jt,e),it(en,n)}function og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,U0(t)||"Unknown",r));return ht({},n,i)}function Jo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,Sr=jt.current,it(jt,t),it(en,en.current),!0}function Kf(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=og(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,at(en),at(jt),it(jt,t)):at(en),it(en,n)}var si=null,Tl=!1,lc=!1;function lg(t){si===null?si=[t]:si.push(t)}function Zv(t){Tl=!0,lg(t)}function Zi(){if(!lc&&si!==null){lc=!0;var t=0,e=Je;try{var n=si;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Tl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Dm(md,Zi),r}finally{Je=e,lc=!1}}return null}var ts=[],ns=0,el=null,tl=0,yn=[],Sn=0,Mr=null,li=1,ci="";function or(t,e){ts[ns++]=tl,ts[ns++]=el,el=t,tl=e}function cg(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Mr,Mr=t;var i=li;t=ci;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Fn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Ed(t){t.return!==null&&(or(t,1),cg(t,1,0))}function wd(t){for(;t===el;)el=ts[--ns],ts[ns]=null,tl=ts[--ns],ts[ns]=null;for(;t===Mr;)Mr=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var hn=null,dn=null,ct=!1,Un=null;function ug(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Eu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wu(t){if(ct){var e=dn;if(e){var n=e;if(!Zf(t,e)){if(Eu(t))throw Error(re(418));e=ki(n.nextSibling);var i=hn;e&&Zf(t,e)?ug(i,n):(t.flags=t.flags&-4097|2,ct=!1,hn=t)}}else{if(Eu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ct=!1,hn=t}}}function Qf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function eo(t){if(t!==hn)return!1;if(!ct)return Qf(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yu(t.type,t.memoizedProps)),e&&(e=dn)){if(Eu(t))throw dg(),Error(re(418));for(;e;)ug(t,e),e=ki(e.nextSibling)}if(Qf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?ki(t.stateNode.nextSibling):null;return!0}function dg(){for(var t=dn;t;)t=ki(t.nextSibling)}function _s(){dn=hn=null,ct=!1}function Td(t){Un===null?Un=[t]:Un.push(t)}var Qv=xi.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jf(t){var e=t._init;return e(t._payload)}function fg(t){function e(d,v){if(t){var x=d.deletions;x===null?(d.deletions=[v],d.flags|=16):x.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Bi(d,v),d.index=0,d.sibling=null,d}function s(d,v,x){return d.index=x,t?(x=d.alternate,x!==null?(x=x.index,x<v?(d.flags|=2,v):x):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,x,M){return v===null||v.tag!==6?(v=mc(x,d.mode,M),v.return=d,v):(v=r(v,x),v.return=d,v)}function l(d,v,x,M){var R=x.type;return R===Yr?f(d,v,x.props.children,M,x.key):v!==null&&(v.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Jf(R)===v.type)?(M=r(v,x.props),M.ref=zs(d,v,x),M.return=d,M):(M=jo(x.type,x.key,x.props,null,d.mode,M),M.ref=zs(d,v,x),M.return=d,M)}function u(d,v,x,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=gc(x,d.mode,M),v.return=d,v):(v=r(v,x.children||[]),v.return=d,v)}function f(d,v,x,M,R){return v===null||v.tag!==7?(v=vr(x,d.mode,M,R),v.return=d,v):(v=r(v,x),v.return=d,v)}function h(d,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=mc(""+v,d.mode,x),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return x=jo(v.type,v.key,v.props,null,d.mode,x),x.ref=zs(d,null,v),x.return=d,x;case $r:return v=gc(v,d.mode,x),v.return=d,v;case wi:var M=v._init;return h(d,M(v._payload),x)}if(Ys(v)||Us(v))return v=vr(v,d.mode,x,null),v.return=d,v;to(d,v)}return null}function p(d,v,x,M){var R=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return R!==null?null:o(d,v,""+x,M);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:return x.key===R?l(d,v,x,M):null;case $r:return x.key===R?u(d,v,x,M):null;case wi:return R=x._init,p(d,v,R(x._payload),M)}if(Ys(x)||Us(x))return R!==null?null:f(d,v,x,M,null);to(d,x)}return null}function g(d,v,x,M,R){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(x)||null,o(v,d,""+M,R);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Va:return d=d.get(M.key===null?x:M.key)||null,l(v,d,M,R);case $r:return d=d.get(M.key===null?x:M.key)||null,u(v,d,M,R);case wi:var E=M._init;return g(d,v,x,E(M._payload),R)}if(Ys(M)||Us(M))return d=d.get(x)||null,f(v,d,M,R,null);to(v,M)}return null}function y(d,v,x,M){for(var R=null,E=null,T=v,L=v=0,V=null;T!==null&&L<x.length;L++){T.index>L?(V=T,T=null):V=T.sibling;var S=p(d,T,x[L],M);if(S===null){T===null&&(T=V);break}t&&T&&S.alternate===null&&e(d,T),v=s(S,v,L),E===null?R=S:E.sibling=S,E=S,T=V}if(L===x.length)return n(d,T),ct&&or(d,L),R;if(T===null){for(;L<x.length;L++)T=h(d,x[L],M),T!==null&&(v=s(T,v,L),E===null?R=T:E.sibling=T,E=T);return ct&&or(d,L),R}for(T=i(d,T);L<x.length;L++)V=g(T,d,L,x[L],M),V!==null&&(t&&V.alternate!==null&&T.delete(V.key===null?L:V.key),v=s(V,v,L),E===null?R=V:E.sibling=V,E=V);return t&&T.forEach(function(N){return e(d,N)}),ct&&or(d,L),R}function _(d,v,x,M){var R=Us(x);if(typeof R!="function")throw Error(re(150));if(x=R.call(x),x==null)throw Error(re(151));for(var E=R=null,T=v,L=v=0,V=null,S=x.next();T!==null&&!S.done;L++,S=x.next()){T.index>L?(V=T,T=null):V=T.sibling;var N=p(d,T,S.value,M);if(N===null){T===null&&(T=V);break}t&&T&&N.alternate===null&&e(d,T),v=s(N,v,L),E===null?R=N:E.sibling=N,E=N,T=V}if(S.done)return n(d,T),ct&&or(d,L),R;if(T===null){for(;!S.done;L++,S=x.next())S=h(d,S.value,M),S!==null&&(v=s(S,v,L),E===null?R=S:E.sibling=S,E=S);return ct&&or(d,L),R}for(T=i(d,T);!S.done;L++,S=x.next())S=g(T,d,L,S.value,M),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?L:S.key),v=s(S,v,L),E===null?R=S:E.sibling=S,E=S);return t&&T.forEach(function(ee){return e(d,ee)}),ct&&or(d,L),R}function m(d,v,x,M){if(typeof x=="object"&&x!==null&&x.type===Yr&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Va:e:{for(var R=x.key,E=v;E!==null;){if(E.key===R){if(R=x.type,R===Yr){if(E.tag===7){n(d,E.sibling),v=r(E,x.props.children),v.return=d,d=v;break e}}else if(E.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===wi&&Jf(R)===E.type){n(d,E.sibling),v=r(E,x.props),v.ref=zs(d,E,x),v.return=d,d=v;break e}n(d,E);break}else e(d,E);E=E.sibling}x.type===Yr?(v=vr(x.props.children,d.mode,M,x.key),v.return=d,d=v):(M=jo(x.type,x.key,x.props,null,d.mode,M),M.ref=zs(d,v,x),M.return=d,d=M)}return a(d);case $r:e:{for(E=x.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(d,v.sibling),v=r(v,x.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=gc(x,d.mode,M),v.return=d,d=v}return a(d);case wi:return E=x._init,m(d,v,E(x._payload),M)}if(Ys(x))return y(d,v,x,M);if(Us(x))return _(d,v,x,M);to(d,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,x),v.return=d,d=v):(n(d,v),v=mc(x,d.mode,M),v.return=d,d=v),a(d)):n(d,v)}return m}var ys=fg(!0),hg=fg(!1),nl=Ki(null),il=null,is=null,Ad=null;function Cd(){Ad=is=il=null}function Rd(t){var e=nl.current;at(nl),t._currentValue=e}function Tu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){il=t,Ad=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function wn(t){var e=t._currentValue;if(Ad!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(il===null)throw Error(re(308));is=t,il.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var pr=null;function Nd(t){pr===null?pr=[t]:pr.push(t)}function pg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Nd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Pd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Nd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function Io(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}function eh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function rl(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,u=l.next;l.next=null,a===null?s=u:a.next=u,a=l;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,f=u=l=null,o=s;do{var p=o.lane,g=o.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:g,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(p=e,g=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(g,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(g,h,p):y,p==null)break e;h=ht({},h,p);break e;case 2:Ti=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else g={eventTime:g,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=g,l=h):f=f.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Er|=a,t.lanes=a,t.memoizedState=h}}function th(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Da={},Yn=Ki(Da),ya=Ki(Da),Sa=Ki(Da);function mr(t){if(t===Da)throw Error(re(174));return t}function Ld(t,e){switch(it(Sa,e),it(ya,t),it(Yn,Da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=au(e,t)}at(Yn),it(Yn,e)}function Ss(){at(Yn),at(ya),at(Sa)}function gg(t){mr(Sa.current);var e=mr(Yn.current),n=au(e,t.type);e!==n&&(it(ya,t),it(Yn,n))}function Dd(t){ya.current===t&&(at(Yn),at(ya))}var dt=Ki(0);function sl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var cc=[];function Ud(){for(var t=0;t<cc.length;t++)cc[t]._workInProgressVersionPrimary=null;cc.length=0}var ko=xi.ReactCurrentDispatcher,uc=xi.ReactCurrentBatchConfig,br=0,ft=null,St=null,At=null,al=!1,ra=!1,Ma=0,Jv=0;function It(){throw Error(re(321))}function Id(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Bn(t[n],e[n]))return!1;return!0}function kd(t,e,n,i,r,s){if(br=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ko.current=t===null||t.memoizedState===null?i_:r_,t=n(i,r),ra){s=0;do{if(ra=!1,Ma=0,25<=s)throw Error(re(301));s+=1,At=St=null,e.updateQueue=null,ko.current=s_,t=n(i,r)}while(ra)}if(ko.current=ol,e=St!==null&&St.next!==null,br=0,At=St=ft=null,al=!1,e)throw Error(re(300));return t}function Fd(){var t=Ma!==0;return Ma=0,t}function Gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ft.memoizedState=At=t:At=At.next=t,At}function Tn(){if(St===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=At===null?ft.memoizedState:At.next;if(e!==null)At=e,St=t;else{if(t===null)throw Error(re(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},At===null?ft.memoizedState=At=t:At=At.next=t}return At}function ba(t,e){return typeof e=="function"?e(t):e}function dc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,u=s;do{var f=u.lane;if((br&f)===f)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,ft.lanes|=f,Er|=f}u=u.next}while(u!==null&&u!==s);l===null?a=i:l.next=o,Bn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,Er|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function fc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Bn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function xg(){}function vg(t,e){var n=ft,i=Tn(),r=e(),s=!Bn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Od(Sg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Ea(9,yg.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(re(349));br&30||_g(n,e,r)}return r}function _g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yg(t,e,n,i){e.value=n,e.getSnapshot=i,Mg(e)&&bg(t)}function Sg(t,e,n){return n(function(){Mg(e)&&bg(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Bn(t,n)}catch{return!0}}function bg(t){var e=pi(t,1);e!==null&&On(e,t,1,-1)}function nh(t){var e=Gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:t},e.queue=t,t=t.dispatch=n_.bind(null,ft,t),[e.memoizedState,t]}function Ea(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Eg(){return Tn().memoizedState}function Fo(t,e,n,i){var r=Gn();ft.flags|=t,r.memoizedState=Ea(1|e,n,void 0,i===void 0?null:i)}function Al(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(St!==null){var a=St.memoizedState;if(s=a.destroy,i!==null&&Id(i,a.deps)){r.memoizedState=Ea(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ea(1|e,n,s,i)}function ih(t,e){return Fo(8390656,8,t,e)}function Od(t,e){return Al(2048,8,t,e)}function wg(t,e){return Al(4,2,t,e)}function Tg(t,e){return Al(4,4,t,e)}function Ag(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cg(t,e,n){return n=n!=null?n.concat([t]):null,Al(4,4,Ag.bind(null,e,t),n)}function zd(){}function Rg(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ng(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Id(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pg(t,e,n){return br&21?(Bn(n,e)||(n=km(),ft.lanes|=n,Er|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function e_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=uc.transition;uc.transition={};try{t(!1),e()}finally{Je=n,uc.transition=i}}function Lg(){return Tn().memoizedState}function t_(t,e,n){var i=zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Dg(t))Ug(e,n);else if(n=pg(t,e,n,i),n!==null){var r=Xt();On(n,t,i,r),Ig(n,e,i)}}function n_(t,e,n){var i=zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Dg(t))Ug(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Bn(o,a)){var l=e.interleaved;l===null?(r.next=r,Nd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=pg(t,e,r,i),n!==null&&(r=Xt(),On(n,t,i,r),Ig(n,e,i))}}function Dg(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function Ug(t,e){ra=al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ig(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,gd(t,n)}}var ol={readContext:wn,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},i_={readContext:wn,useCallback:function(t,e){return Gn().memoizedState=[t,e===void 0?null:e],t},useContext:wn,useEffect:ih,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Fo(4194308,4,Ag.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Fo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Fo(4,2,t,e)},useMemo:function(t,e){var n=Gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Gn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=t_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Gn();return t={current:t},e.memoizedState=t},useState:nh,useDebugValue:zd,useDeferredValue:function(t){return Gn().memoizedState=t},useTransition:function(){var t=nh(!1),e=t[0];return t=e_.bind(null,t[1]),Gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Gn();if(ct){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ct===null)throw Error(re(349));br&30||_g(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ih(Sg.bind(null,i,s,t),[t]),i.flags|=2048,Ea(9,yg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Gn(),e=Ct.identifierPrefix;if(ct){var n=ci,i=li;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ma++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Jv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},r_={readContext:wn,useCallback:Rg,useContext:wn,useEffect:Od,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:Tg,useMemo:Ng,useReducer:dc,useRef:Eg,useState:function(){return dc(ba)},useDebugValue:zd,useDeferredValue:function(t){var e=Tn();return Pg(e,St.memoizedState,t)},useTransition:function(){var t=dc(ba)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:xg,useSyncExternalStore:vg,useId:Lg,unstable_isNewReconciler:!1},s_={readContext:wn,useCallback:Rg,useContext:wn,useEffect:Od,useImperativeHandle:Cg,useInsertionEffect:wg,useLayoutEffect:Tg,useMemo:Ng,useReducer:fc,useRef:Eg,useState:function(){return fc(ba)},useDebugValue:zd,useDeferredValue:function(t){var e=Tn();return St===null?e.memoizedState=t:Pg(e,St.memoizedState,t)},useTransition:function(){var t=fc(ba)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:xg,useSyncExternalStore:vg,useId:Lg,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Au(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cl={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),Io(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=zi(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),Io(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=zi(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(On(e,t,i,n),Io(e,t,i))}};function rh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!ga(n,i)||!ga(r,s):!0}function kg(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=wn(s):(r=tn(e)?Sr:jt.current,i=e.contextTypes,s=(i=i!=null)?vs(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cl.enqueueReplaceState(e,e.state,null)}function Cu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Pd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=wn(s):(s=tn(e)?Sr:jt.current,r.context=vs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Au(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cl.enqueueReplaceState(r,r.state,null),rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ms(t,e){try{var n="",i=e;do n+=D0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function hc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ru(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var a_=typeof WeakMap=="function"?WeakMap:Map;function Fg(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){cl||(cl=!0,zu=i),Ru(t,e)},n}function Og(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ru(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ru(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ah(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new a_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=y_.bind(null,t,e,n),e.then(t,t))}function oh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var o_=xi.ReactCurrentOwner,Jt=!1;function Vt(t,e,n,i){e.child=t===null?hg(e,null,n,i):ys(e,t.child,n,i)}function ch(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=kd(t,e,n,i,s,r),n=Fd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&n&&Ed(e),e.flags|=1,Vt(t,e,i,r),e.child)}function uh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zg(t,e,s,i,r)):(t=jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:ga,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=Bi(s,i),t.ref=e.ref,t.return=e,e.child=t}function zg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ga(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Nu(t,e,n,i,r)}function Bg(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ss,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ss,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ss,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ss,un),un|=i;return Vt(t,e,r,n),e.child}function jg(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Nu(t,e,n,i,r){var s=tn(n)?Sr:jt.current;return s=vs(e,s),fs(e,r),n=kd(t,e,n,i,s,r),i=Fd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&i&&Ed(e),e.flags|=1,Vt(t,e,n,r),e.child)}function dh(t,e,n,i,r){if(tn(n)){var s=!0;Jo(e)}else s=!1;if(fs(e,r),e.stateNode===null)Oo(t,e),kg(e,n,i),Cu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=wn(u):(u=tn(n)?Sr:jt.current,u=vs(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==u)&&sh(e,a,i,u),Ti=!1;var p=e.memoizedState;a.state=p,rl(e,i,a,r),l=e.memoizedState,o!==i||p!==l||en.current||Ti?(typeof f=="function"&&(Au(e,n,f,i),l=e.memoizedState),(o=Ti||rh(e,n,o,i,p,l,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,mg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,h=e.pendingProps,p=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=wn(l):(l=tn(n)?Sr:jt.current,l=vs(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==l)&&sh(e,a,i,l),Ti=!1,p=e.memoizedState,a.state=p,rl(e,i,a,r);var y=e.memoizedState;o!==h||p!==y||en.current||Ti?(typeof g=="function"&&(Au(e,n,g,i),y=e.memoizedState),(u=Ti||rh(e,n,u,i,p,y,l)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Pu(t,e,n,i,s,r)}function Pu(t,e,n,i,r,s){jg(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kf(e,n,!1),mi(t,e,s);i=e.stateNode,o_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ys(e,t.child,null,s),e.child=ys(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Kf(e,n,!0),e.child}function Hg(t){var e=t.stateNode;e.pendingContext?Yf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Yf(t,e.context,!1),Ld(t,e.containerInfo)}function fh(t,e,n,i,r){return _s(),Td(r),e.flags|=256,Vt(t,e,n,i),e.child}var Lu={dehydrated:null,treeContext:null,retryLane:0};function Du(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gg(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return wu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Pl(a,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Du(n),e.memoizedState=Lu,t):Bd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return l_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Bi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Bi(o,s):(s=vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Du(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Lu,i}return s=t.child,t=s.sibling,i=Bi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Bd(t,e){return e=Pl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,i){return i!==null&&Td(i),ys(e,t.child,null,n),t=Bd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function l_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=hc(Error(re(422))),no(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&ys(e,t.child,null,a),e.child.memoizedState=Du(a),e.memoizedState=Lu,s);if(!(e.mode&1))return no(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=hc(s,i,void 0),no(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),On(i,t,r,-1))}return Xd(),i=hc(Error(re(421))),no(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=S_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=ki(r.nextSibling),hn=e,ct=!0,Un=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Mr,li=t.id,ci=t.overflow,Mr=e),e=Bd(e,i.children),e.flags|=4096,e)}function hh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tu(t.return,e,n)}function pc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Vg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hh(t,n,e);else if(t.tag===19)hh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&sl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),pc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&sl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Er|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=Bi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Bi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function c_(t,e,n){switch(e.tag){case 3:Hg(e),_s();break;case 5:gg(e);break;case 1:tn(e.type)&&Jo(e);break;case 4:Ld(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?Gg(t,e,n):(it(dt,dt.current&1),t=mi(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Vg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bg(t,e,n)}return mi(t,e,n)}var Wg,Uu,Xg,qg;Wg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Uu=function(){};Xg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Yn.current);var s=null;switch(n){case"input":r=nu(t,r),i=nu(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=su(t,r),i=su(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zo)}ou(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ca.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==o&&(l!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ca.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qg=function(t,e,n,i){n!==i&&(e.flags|=4)};function Bs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function u_(t,e,n){var i=e.pendingProps;switch(wd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&Qo(),kt(e),null;case 3:return i=e.stateNode,Ss(),at(en),at(jt),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Hu(Un),Un=null))),Uu(t,e),kt(e),null;case 5:Dd(e);var r=mr(Sa.current);if(n=e.type,t!==null&&e.stateNode!=null)Xg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return kt(e),null}if(t=mr(Yn.current),eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Xn]=e,i[_a]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Zs.length;r++)rt(Zs[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Mf(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Ef(i,s),rt("invalid",i)}ou(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",""+o]):ca.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":Wa(i),bf(i,s,!0);break;case"textarea":Wa(i),wf(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Xn]=e,t[_a]=i,Wg(t,e,!1,!1),e.stateNode=t;e:{switch(a=lu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Zs.length;r++)rt(Zs[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":Mf(t,i),r=nu(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Ef(t,i),r=su(t,i),rt("invalid",t);break;default:r=i}ou(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?Em(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Mm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ua(t,l):typeof l=="number"&&ua(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ca.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",t):l!=null&&ud(t,s,l,a))}switch(n){case"input":Wa(t),bf(t,i,!1);break;case"textarea":Wa(t),wf(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)qg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=mr(Sa.current),mr(Yn.current),eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Xn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Xn]=e,e.stateNode=i}return kt(e),null;case 13:if(at(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&dn!==null&&e.mode&1&&!(e.flags&128))dg(),_s(),e.flags|=98560,s=!1;else if(s=eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[Xn]=e}else _s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Un!==null&&(Hu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Mt===0&&(Mt=3):Xd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ss(),Uu(t,e),t===null&&xa(e.stateNode.containerInfo),kt(e),null;case 10:return Rd(e.type._context),kt(e),null;case 17:return tn(e.type)&&Qo(),kt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Bs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=sl(t),a!==null){for(e.flags|=128,Bs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&xt()>bs&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304)}else{if(!i)if(t=sl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Bs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return kt(e),null}else 2*xt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Bs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Wd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function d_(t,e){switch(wd(e),e.tag){case 1:return tn(e.type)&&Qo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ss(),at(en),at(jt),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(at(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));_s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(dt),null;case 4:return Ss(),null;case 10:return Rd(e.type._context),null;case 22:case 23:return Wd(),null;case 24:return null;default:return null}}var io=!1,zt=!1,f_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Iu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var ph=!1;function h_(t,e){if(vu=$o,t=Qm(),bd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(g=h.firstChild)!==null;)p=h,h=g;for(;;){if(h===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++f===i&&(l=a),(g=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=g}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(_u={focusedElem:t,selectionRange:n},$o=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ln(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(M){mt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return y=ph,ph=!1,y}function sa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Iu(e,n,s)}r=r.next}while(r!==i)}}function Rl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function $g(t){var e=t.alternate;e!==null&&(t.alternate=null,$g(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Xn],delete e[_a],delete e[Mu],delete e[Yv],delete e[Kv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Yg(t){return t.tag===5||t.tag===3||t.tag===4}function mh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Yg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Fu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zo));else if(i!==4&&(t=t.child,t!==null))for(Fu(t,e,n),t=t.sibling;t!==null;)Fu(t,e,n),t=t.sibling}function Ou(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ou(t,e,n),t=t.sibling;t!==null;)Ou(t,e,n),t=t.sibling}var Nt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)Kg(t,e,n),n=n.sibling}function Kg(t,e,n){if($n&&typeof $n.onCommitFiberUnmount=="function")try{$n.onCommitFiberUnmount(Sl,n)}catch{}switch(n.tag){case 5:zt||rs(n,e);case 6:var i=Nt,r=Dn;Nt=null,vi(t,e,n),Nt=i,Dn=r,Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Dn?(t=Nt,n=n.stateNode,t.nodeType===8?oc(t.parentNode,n):t.nodeType===1&&oc(t,n),pa(t)):oc(Nt,n.stateNode));break;case 4:i=Nt,r=Dn,Nt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Nt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Iu(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!zt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(zt=(i=zt)||n.memoizedState!==null,vi(t,e,n),zt=i):vi(t,e,n);break;default:vi(t,e,n)}}function gh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new f_),e.forEach(function(i){var r=M_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Nt=o.stateNode,Dn=!1;break e;case 3:Nt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Nt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Nt===null)throw Error(re(160));Kg(s,a,r),Nt=null,Dn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zg(e,t),e=e.sibling}function Zg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Hn(t),i&4){try{sa(3,t,t.return),Rl(3,t)}catch(_){mt(t,t.return,_)}try{sa(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:Cn(e,t),Hn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Cn(e,t),Hn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{ua(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&_m(r,s),lu(o,a);var u=lu(o,s);for(a=0;a<l.length;a+=2){var f=l[a],h=l[a+1];f==="style"?Em(r,h):f==="dangerouslySetInnerHTML"?Mm(r,h):f==="children"?ua(r,h):ud(r,f,h,u)}switch(o){case"input":iu(r,s);break;case"textarea":ym(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ls(r,!!s.multiple,g,!1):p!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[_a]=s}catch(_){mt(t,t.return,_)}}break;case 6:if(Cn(e,t),Hn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){mt(t,t.return,_)}}break;case 3:if(Cn(e,t),Hn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{pa(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:Cn(e,t),Hn(t);break;case 13:Cn(e,t),Hn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Gd=xt())),i&4&&gh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(zt=(u=zt)||f,Cn(e,t),zt=u):Cn(e,t),Hn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(h=_e=f;_e!==null;){switch(p=_e,g=p.child,p.tag){case 0:case 11:case 14:case 15:sa(4,p,p.return);break;case 1:rs(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:rs(p,p.return);break;case 22:if(p.memoizedState!==null){vh(h);continue}}g!==null?(g.return=p,_e=g):vh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=bm("display",a))}catch(_){mt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){mt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),Hn(t),i&4&&gh(t);break;case 21:break;default:Cn(e,t),Hn(t)}}function Hn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Yg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ua(r,""),i.flags&=-33);var s=mh(t);Ou(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mh(t);Fu(t,o,a);break;default:throw Error(re(161))}}catch(l){mt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function p_(t,e,n){_e=t,Qg(t)}function Qg(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||io;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||zt;o=io;var u=zt;if(io=a,(zt=l)&&!u)for(_e=r;_e!==null;)a=_e,l=a.child,a.tag===22&&a.memoizedState!==null?_h(r):l!==null?(l.return=a,_e=l):_h(r);for(;s!==null;)_e=s,Qg(s),s=s.sibling;_e=r,io=o,zt=u}xh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):xh(t)}}function xh(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:zt||Rl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&th(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}th(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&pa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}zt||e.flags&512&&ku(e)}catch(p){mt(e,e.return,p)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function vh(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function _h(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Rl(4,e)}catch(l){mt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){mt(e,r,l)}}var s=e.return;try{ku(e)}catch(l){mt(e,s,l)}break;case 5:var a=e.return;try{ku(e)}catch(l){mt(e,a,l)}}}catch(l){mt(e,e.return,l)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var m_=Math.ceil,ll=xi.ReactCurrentDispatcher,jd=xi.ReactCurrentOwner,En=xi.ReactCurrentBatchConfig,Ke=0,Ct=null,_t=null,Lt=0,un=0,ss=Ki(0),Mt=0,wa=null,Er=0,Nl=0,Hd=0,aa=null,Zt=null,Gd=0,bs=1/0,ri=null,cl=!1,zu=null,Oi=null,ro=!1,Pi=null,ul=0,oa=0,Bu=null,zo=-1,Bo=0;function Xt(){return Ke&6?xt():zo!==-1?zo:zo=xt()}function zi(t){return t.mode&1?Ke&2&&Lt!==0?Lt&-Lt:Qv.transition!==null?(Bo===0&&(Bo=km()),Bo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:Gm(t.type)),t):1}function On(t,e,n,i){if(50<oa)throw oa=0,Bu=null,Error(re(185));Na(t,n,i),(!(Ke&2)||t!==Ct)&&(t===Ct&&(!(Ke&2)&&(Nl|=n),Mt===4&&Ci(t,Lt)),nn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(bs=xt()+500,Tl&&Zi()))}function nn(t,e){var n=t.callbackNode;Q0(t,e);var i=qo(t,t===Ct?Lt:0);if(i===0)n!==null&&Cf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Cf(n),e===1)t.tag===0?Zv(yh.bind(null,t)):lg(yh.bind(null,t)),qv(function(){!(Ke&6)&&Zi()}),n=null;else{switch(Fm(i)){case 1:n=md;break;case 4:n=Um;break;case 16:n=Xo;break;case 536870912:n=Im;break;default:n=Xo}n=ax(n,Jg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jg(t,e){if(zo=-1,Bo=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=qo(t,t===Ct?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=dl(t,i);else{e=i;var r=Ke;Ke|=2;var s=tx();(Ct!==t||Lt!==e)&&(ri=null,bs=xt()+500,xr(t,e));do try{v_();break}catch(o){ex(t,o)}while(!0);Cd(),ll.current=s,Ke=r,_t!==null?e=0:(Ct=null,Lt=0,e=Mt)}if(e!==0){if(e===2&&(r=hu(t),r!==0&&(i=r,e=ju(t,r))),e===1)throw n=wa,xr(t,0),Ci(t,i),nn(t,xt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!g_(r)&&(e=dl(t,i),e===2&&(s=hu(t),s!==0&&(i=s,e=ju(t,s))),e===1))throw n=wa,xr(t,0),Ci(t,i),nn(t,xt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:lr(t,Zt,ri);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Gd+500-xt(),10<e)){if(qo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Su(lr.bind(null,t,Zt,ri),e);break}lr(t,Zt,ri);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Fn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*m_(i/1960))-i,10<i){t.timeoutHandle=Su(lr.bind(null,t,Zt,ri),i);break}lr(t,Zt,ri);break;case 5:lr(t,Zt,ri);break;default:throw Error(re(329))}}}return nn(t,xt()),t.callbackNode===n?Jg.bind(null,t):null}function ju(t,e){var n=aa;return t.current.memoizedState.isDehydrated&&(xr(t,e).flags|=256),t=dl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Hu(e)),t}function Hu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function g_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Bn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Hd,e&=~Nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function yh(t){if(Ke&6)throw Error(re(327));hs();var e=qo(t,0);if(!(e&1))return nn(t,xt()),null;var n=dl(t,e);if(t.tag!==0&&n===2){var i=hu(t);i!==0&&(e=i,n=ju(t,i))}if(n===1)throw n=wa,xr(t,0),Ci(t,e),nn(t,xt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Zt,ri),nn(t,xt()),null}function Vd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(bs=xt()+500,Tl&&Zi())}}function wr(t){Pi!==null&&Pi.tag===0&&!(Ke&6)&&hs();var e=Ke;Ke|=1;var n=En.transition,i=Je;try{if(En.transition=null,Je=1,t)return t()}finally{Je=i,En.transition=n,Ke=e,!(Ke&6)&&Zi()}}function Wd(){un=ss.current,at(ss)}function xr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Xv(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(wd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Qo();break;case 3:Ss(),at(en),at(jt),Ud();break;case 5:Dd(i);break;case 4:Ss();break;case 13:at(dt);break;case 19:at(dt);break;case 10:Rd(i.type._context);break;case 22:case 23:Wd()}n=n.return}if(Ct=t,_t=t=Bi(t.current,null),Lt=un=e,Mt=0,wa=null,Hd=Nl=Er=0,Zt=aa=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function ex(t,e){do{var n=_t;try{if(Cd(),ko.current=ol,al){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}al=!1}if(br=0,At=St=ft=null,ra=!1,Ma=0,jd.current=null,n===null||n.return===null){Mt=1,wa=e,_t=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Lt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=oh(a);if(g!==null){g.flags&=-257,lh(g,a,o,s,e),g.mode&1&&ah(s,u,e),e=g,l=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(l),e.updateQueue=_}else y.add(l);break e}else{if(!(e&1)){ah(s,u,e),Xd();break e}l=Error(re(426))}}else if(ct&&o.mode&1){var m=oh(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lh(m,a,o,s,e),Td(Ms(l,o));break e}}s=l=Ms(l,o),Mt!==4&&(Mt=2),aa===null?aa=[s]:aa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Fg(s,l,e);eh(s,d);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Oi===null||!Oi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=Og(s,o,e);eh(s,M);break e}}s=s.return}while(s!==null)}ix(n)}catch(R){e=R,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function tx(){var t=ll.current;return ll.current=ol,t===null?ol:t}function Xd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Ct===null||!(Er&268435455)&&!(Nl&268435455)||Ci(Ct,Lt)}function dl(t,e){var n=Ke;Ke|=2;var i=tx();(Ct!==t||Lt!==e)&&(ri=null,xr(t,e));do try{x_();break}catch(r){ex(t,r)}while(!0);if(Cd(),Ke=n,ll.current=i,_t!==null)throw Error(re(261));return Ct=null,Lt=0,Mt}function x_(){for(;_t!==null;)nx(_t)}function v_(){for(;_t!==null&&!G0();)nx(_t)}function nx(t){var e=sx(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?ix(t):_t=e,jd.current=null}function ix(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=d_(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,_t=null;return}}else if(n=u_(n,e,un),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Mt===0&&(Mt=5)}function lr(t,e,n){var i=Je,r=En.transition;try{En.transition=null,Je=1,__(t,e,n,i)}finally{En.transition=r,Je=i}return null}function __(t,e,n,i){do hs();while(Pi!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(J0(t,s),t===Ct&&(_t=Ct=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,ax(Xo,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=En.transition,En.transition=null;var a=Je;Je=1;var o=Ke;Ke|=4,jd.current=null,h_(t,n),Zg(n,t),zv(_u),$o=!!vu,_u=vu=null,t.current=n,p_(n),V0(),Ke=o,Je=a,En.transition=s}else t.current=n;if(ro&&(ro=!1,Pi=t,ul=r),s=t.pendingLanes,s===0&&(Oi=null),q0(n.stateNode),nn(t,xt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(cl)throw cl=!1,t=zu,zu=null,t;return ul&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Bu?oa++:(oa=0,Bu=t):oa=0,Zi(),null}function hs(){if(Pi!==null){var t=Fm(ul),e=En.transition,n=Je;try{if(En.transition=null,Je=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,ul=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var u=o[l];for(_e=u;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:sa(8,f,s)}var h=f.child;if(h!==null)h.return=f,_e=h;else for(;_e!==null;){f=_e;var p=f.sibling,g=f.return;if($g(f),f===u){_e=null;break}if(p!==null){p.return=g,_e=p;break}_e=g}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var v=t.current;for(_e=v;_e!==null;){a=_e;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,_e=x;else e:for(a=v;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Rl(9,o)}}catch(R){mt(o,o.return,R)}if(o===a){_e=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,_e=M;break e}_e=o.return}}if(Ke=r,Zi(),$n&&typeof $n.onPostCommitFiberRoot=="function")try{$n.onPostCommitFiberRoot(Sl,t)}catch{}i=!0}return i}finally{Je=n,En.transition=e}}return!1}function Sh(t,e,n){e=Ms(n,e),e=Fg(t,e,1),t=Fi(t,e,1),e=Xt(),t!==null&&(Na(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)Sh(t,t,n);else for(;e!==null;){if(e.tag===3){Sh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=Ms(n,t),t=Og(e,t,1),e=Fi(e,t,1),t=Xt(),e!==null&&(Na(e,1,t),nn(e,t));break}}e=e.return}}function y_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Lt&n)===n&&(Mt===4||Mt===3&&(Lt&130023424)===Lt&&500>xt()-Gd?xr(t,0):Hd|=n),nn(t,e)}function rx(t,e){e===0&&(t.mode&1?(e=$a,$a<<=1,!($a&130023424)&&($a=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(Na(t,e,n),nn(t,n))}function S_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),rx(t,n)}function M_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),rx(t,n)}var sx;sx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,c_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ct&&e.flags&1048576&&cg(e,tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Oo(t,e),t=e.pendingProps;var r=vs(e,jt.current);fs(e,n),r=kd(null,e,i,t,r,n);var s=Fd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,Jo(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Pd(e),r.updater=Cl,e.stateNode=r,r._reactInternals=e,Cu(e,i,t,n),e=Pu(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Ed(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Oo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=E_(i),t=Ln(i,t),r){case 0:e=Nu(null,e,i,t,n);break e;case 1:e=dh(null,e,i,t,n);break e;case 11:e=ch(null,e,i,t,n);break e;case 14:e=uh(null,e,i,Ln(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Nu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dh(t,e,i,r,n);case 3:e:{if(Hg(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mg(t,e),rl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ms(Error(re(423)),e),e=fh(t,e,i,n,r);break e}else if(i!==r){r=Ms(Error(re(424)),e),e=fh(t,e,i,n,r);break e}else for(dn=ki(e.stateNode.containerInfo.firstChild),hn=e,ct=!0,Un=null,n=hg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_s(),i===r){e=mi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return gg(e),t===null&&wu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,yu(i,r)?a=null:s!==null&&yu(i,s)&&(e.flags|=32),jg(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&wu(e),null;case 13:return Gg(t,e,n);case 4:return Ld(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ys(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),ch(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(nl,i._currentValue),i._currentValue=a,s!==null)if(Bn(s.value,a)){if(s.children===r.children&&!en.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=di(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?l.next=l:(l.next=f.next,f.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Tu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Tu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=wn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),uh(t,e,i,r,n);case 15:return zg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Oo(t,e),e.tag=1,tn(i)?(t=!0,Jo(e)):t=!1,fs(e,n),kg(e,i,r),Cu(e,i,r,n),Pu(null,e,i,!0,t,n);case 19:return Vg(t,e,n);case 22:return Bg(t,e,n)}throw Error(re(156,e.tag))};function ax(t,e){return Dm(t,e)}function b_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new b_(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function E_(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===fd)return 11;if(t===hd)return 14}return 2}function Bi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")qd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return vr(n.children,r,s,e);case dd:a=8,r|=8;break;case Qc:return t=bn(12,n,e,r|2),t.elementType=Qc,t.lanes=s,t;case Jc:return t=bn(13,n,e,r),t.elementType=Jc,t.lanes=s,t;case eu:return t=bn(19,n,e,r),t.elementType=eu,t.lanes=s,t;case gm:return Pl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case pm:a=10;break e;case mm:a=9;break e;case fd:a=11;break e;case hd:a=14;break e;case wi:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Pl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=gm,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function w_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kl(0),this.expirationTimes=Kl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kl(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $d(t,e,n,i,r,s,a,o,l){return t=new w_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Pd(s),t}function T_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function ox(t){if(!t)return Wi;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(tn(n))return og(t,n,e)}return e}function lx(t,e,n,i,r,s,a,o,l){return t=$d(n,i,!0,t,r,s,a,o,l),t.context=ox(null),n=t.current,i=Xt(),r=zi(n),s=di(i,r),s.callback=e??null,Fi(n,s,r),t.current.lanes=r,Na(t,r,i),nn(t,i),t}function Ll(t,e,n,i){var r=e.current,s=Xt(),a=zi(r);return n=ox(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,a),t!==null&&(On(t,r,a,s),Io(t,r,a)),a}function fl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yd(t,e){Mh(t,e),(t=t.alternate)&&Mh(t,e)}function A_(){return null}var cx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}Dl.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Ll(t,e,null,null)};Dl.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;wr(function(){Ll(null,t,null,null)}),e[hi]=null}};function Dl(t){this._internalRoot=t}Dl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Bm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&Hm(t)}};function Zd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bh(){}function C_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=fl(a);s.call(u)}}var a=lx(e,i,t,0,null,!1,!1,"",bh);return t._reactRootContainer=a,t[hi]=a.current,xa(t.nodeType===8?t.parentNode:t),wr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=fl(l);o.call(u)}}var l=$d(t,0,!1,null,null,!1,!1,"",bh);return t._reactRootContainer=l,t[hi]=l.current,xa(t.nodeType===8?t.parentNode:t),wr(function(){Ll(e,l,n,i)}),l}function Il(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=fl(a);o.call(l)}}Ll(e,a,t,r)}else a=C_(n,e,t,r,i);return fl(a)}Om=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ks(e.pendingLanes);n!==0&&(gd(e,n|1),nn(e,xt()),!(Ke&6)&&(bs=xt()+500,Zi()))}break;case 13:wr(function(){var i=pi(t,1);if(i!==null){var r=Xt();On(i,t,1,r)}}),Yd(t,1)}};xd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();On(e,t,134217728,n)}Yd(t,134217728)}};zm=function(t){if(t.tag===13){var e=zi(t),n=pi(t,e);if(n!==null){var i=Xt();On(n,t,e,i)}Yd(t,e)}};Bm=function(){return Je};jm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};uu=function(t,e,n){switch(e){case"input":if(iu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wl(i);if(!r)throw Error(re(90));vm(i),iu(i,r)}}}break;case"textarea":ym(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Am=Vd;Cm=wr;var R_={usingClientEntryPoint:!1,Events:[La,Jr,wl,wm,Tm,Vd]},js={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N_={bundleType:js.bundleType,version:js.version,rendererPackageName:js.rendererPackageName,rendererConfig:js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:xi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pm(t),t===null?null:t.stateNode},findFiberByHostInstance:js.findFiberByHostInstance||A_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{Sl=so.inject(N_),$n=so}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=R_;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Zd(e))throw Error(re(200));return T_(t,e,null,n)};mn.createRoot=function(t,e){if(!Zd(t))throw Error(re(299));var n=!1,i="",r=cx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$d(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,xa(t.nodeType===8?t.parentNode:t),new Kd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=Pm(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return wr(t)};mn.hydrate=function(t,e,n){if(!Ul(e))throw Error(re(200));return Il(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!Zd(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=cx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=lx(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,xa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Dl(e)};mn.render=function(t,e,n){if(!Ul(e))throw Error(re(200));return Il(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!Ul(t))throw Error(re(40));return t._reactRootContainer?(wr(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};mn.unstable_batchedUpdates=Vd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Ul(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Il(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function ux(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ux)}catch(t){console.error(t)}}ux(),um.exports=mn;var P_=um.exports,Eh=P_;Kc.createRoot=Eh.createRoot,Kc.hydrateRoot=Eh.hydrateRoot;const dx=Ee.createContext(),Gu=[{id:"1",name:"তানভীর আহমেদ",email:"admin@kuakatamultimedia.com",phone:"+880 1711-000001",role:"admin",designation:"চিফ এনিমেশন ডিরেক্টর & সিইও",dept:"3D & VFX",basic_salary:85e3,join_date:"2022-01-15",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop",skills:["Three.js","Blender","Cinema 4D","Unreal Engine"],status:"Active"},{id:"2",name:"রাফি রহমান",email:"member@kuakatamultimedia.com",phone:"+880 1822-111222",role:"member",designation:"সিনিয়র ৩ডি মোশন ডিজাইনার",dept:"3D & VFX",basic_salary:62e3,join_date:"2022-06-10",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop",skills:["After Effects","Blender","Octane Render"],status:"Active"},{id:"3",name:"নুসরাত জাহান",email:"nusrat@kuakatamultimedia.com",phone:"+880 1933-333444",role:"member",designation:"লিড ওয়েব & ইউএক্স আর্কিটেক্ট",dept:"Web Dev",basic_salary:68e3,join_date:"2023-02-01",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop",skills:["React.js","Next.js","Three.js","Tailwind"],status:"Active"},{id:"4",name:"আরিফুল ইসলাম",email:"arif@kuakatamultimedia.com",phone:"+880 1644-555666",role:"member",designation:"সিনিয়র ভিএফএক্স অ্যান্ড ভিডিও এডিটর",dept:"Video Production",basic_salary:55e3,join_date:"2023-05-20",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop",skills:["Premiere Pro","DaVinci Resolve","Nuke"],status:"Active"},{id:"5",name:"সামিরা খান",email:"samira@kuakatamultimedia.com",phone:"+880 1555-777888",role:"member",designation:"কনসেপ্ট আর্ট & ৩ডি ক্যারেক্টার মডেলার",dept:"3D & VFX",basic_salary:58e3,join_date:"2023-09-12",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop",skills:["ZBrush","Substance Painter","Maya"],status:"Active"}],L_=[{id:"p1",title:"কুয়াকাটা বীচ ভার্চুয়াল ৩ডি এক্সপেরিয়েন্স",category:"3D & Web",description:"কুয়াকাটা সমুদ্র সৈকতের সূর্যোদয় ও সূর্যাস্তের এক মনোরম ৩ডি রিয়েল-টাইম ওয়েব সিমুলেশন।",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/beach3d",tags:["Three.js","WebGL","React","Audio FX"],featured:!0,client:"কুয়াকাটা ট্যুরিজম ডাইরেক্টরেট"},{id:"p2",title:"সাইবারপাঙ্ক ঢাকা মোশন সিগনেচার",category:"VFX & Motion",description:"ভবিষ্যতের ঢাকাকে কেন্দ্র করে তৈরি ৩ডি মোশন রিফ্লেকশন ও ভিএফএক্স শট।",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/cyberdhaka",tags:["Unreal Engine 5","Octane","After Effects"],featured:!0,client:"ডিজিটাল বাংলাদেশ ভিশন"},{id:"p3",title:"রয়েল স্পোর্টস ৩ডি প্রোডাক্ট শোকেস",category:"3D Commercial",description:"স্পোর্টস শ্যুর ৩ডি ফ্লোটিং আনবক্সিং এবং ডায়নামিক ৩৬০ ক্যামেরা এনিমেশন।",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/royalsports",tags:["Cinema 4D","Redshift","Three.js"],featured:!0,client:"রয়েল ফুটওয়্যার লিমিটেড"},{id:"p4",title:"কোস্টাল ওয়েভ ইন্টারেক্টিভ অডিও সিমুলেটর",category:"Interactive Web",description:"সমুদ্রের ঢেউ এবং সাউন্ড ওয়েভের সমন্বয়ে তৈরি ইন্টারেক্টিভ অডিও ওয়েব আর্ট।",image:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/waveart",tags:["Web Audio API","React Three Fiber"],featured:!1,client:"সাউন্ড আর্ট ল্যাব"}],wh=()=>{const t=[],e=new Date,n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0");for(let r=1;r<=20;r++){const s=String(r).padStart(2,"0"),a=`${n}-${i}-${s}`;Gu.forEach(o=>{let l="Present";const u=(r+parseInt(o.id)*3)%10;u===8?l="Absent":u===9?l="Leave":u===7&&(l="Half-day"),t.push({id:`att-${o.id}-${a}`,user_id:o.id,date:a,status:l,checkIn:l!=="Absent"?"09:30 AM":"-",checkOut:l!=="Absent"?"06:00 PM":"-"})})}return t},D_=(t,e)=>{const n=[],i="জুলাই ২০২৬";return t.forEach(r=>{const s=e.filter(g=>g.user_id===r.id),a=s.filter(g=>g.status==="Absent").length,o=s.filter(g=>g.status==="Leave").length,l=s.filter(g=>g.status==="Half-day").length,u=Math.round(r.basic_salary/30),f=Math.round(a*u+l*u*.5),h=r.role==="admin"?5e3:2500,p=r.basic_salary+h-f;n.push({id:`sal-${r.id}-2026-07`,user_id:r.id,user_name:r.name,month:i,month_key:"2026-07",basic_salary:r.basic_salary,bonus:h,deductions:f,absent_days:a,leave_days:o,half_days:l,net_salary:p,paid_status:parseInt(r.id)%2===1?"Paid":"Pending",payment_date:parseInt(r.id)%2===1?"2026-07-28":null,transaction_id:parseInt(r.id)%2===1?`TXN-KM-${Math.floor(1e5+Math.random()*9e5)}`:null,note:"মাসিক পারফরম্যান্স অ্যালাউন্স সহ"})}),n},U_=({children:t})=>{const[e,n]=Ee.useState(()=>{const d=localStorage.getItem("km_members");return d?JSON.parse(d):Gu}),[i,r]=Ee.useState(()=>{const d=localStorage.getItem("km_projects");return d?JSON.parse(d):L_}),[s,a]=Ee.useState(()=>{const d=localStorage.getItem("km_attendance");return d?JSON.parse(d):wh()}),[o,l]=Ee.useState(()=>{const d=localStorage.getItem("km_salaries");return d?JSON.parse(d):D_(Gu,wh())});Ee.useEffect(()=>{localStorage.setItem("km_members",JSON.stringify(e))},[e]),Ee.useEffect(()=>{localStorage.setItem("km_projects",JSON.stringify(i))},[i]),Ee.useEffect(()=>{localStorage.setItem("km_attendance",JSON.stringify(s))},[s]),Ee.useEffect(()=>{localStorage.setItem("km_salaries",JSON.stringify(o))},[o]);const u=(d,v="2026-07")=>{const x=e.find(S=>S.id===d);if(!x)return;const M=s.filter(S=>S.user_id===d),R=M.filter(S=>S.status==="Absent").length,E=M.filter(S=>S.status==="Leave").length,T=M.filter(S=>S.status==="Half-day").length,L=Math.round(x.basic_salary/30),V=Math.round(R*L+T*L*.5);l(S=>S.map(N=>{if(N.user_id===d&&N.month_key===v){const ee=x.basic_salary+N.bonus-V;return{...N,basic_salary:x.basic_salary,absent_days:R,leave_days:E,half_days:T,deductions:V,net_salary:ee}}return N}))},f=d=>{const v=String(Date.now()),x={...d,id:v,status:"Active",avatar:d.avatar||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop"};n(R=>[...R,x]);const M={id:`sal-${v}-2026-07`,user_id:v,user_name:x.name,month:"জুলাই ২০২৬",month_key:"2026-07",basic_salary:x.basic_salary,bonus:0,deductions:0,absent_days:0,leave_days:0,half_days:0,net_salary:x.basic_salary,paid_status:"Pending",payment_date:null,transaction_id:null,note:"নতুন মেম্বারের বেতন অ্যাকাউন্ট"};l(R=>[...R,M])},h=d=>{n(v=>v.map(x=>x.id===d.id?{...x,...d}:x)),u(d.id)},p=d=>{n(v=>v.filter(x=>x.id!==d)),l(v=>v.filter(x=>x.user_id!==d)),a(v=>v.filter(x=>x.user_id!==d))},g=(d,v,x)=>{a(M=>{const R=M.findIndex(E=>E.user_id===d&&E.date===v);if(R>=0){const E=[...M];return E[R]={...E[R],status:x,checkIn:x!=="Absent"?"09:30 AM":"-",checkOut:x!=="Absent"?"06:00 PM":"-"},E}else return[...M,{id:`att-${d}-${v}`,user_id:d,date:v,status:x,checkIn:x!=="Absent"?"09:30 AM":"-",checkOut:x!=="Absent"?"06:00 PM":"-"}]}),setTimeout(()=>u(d),50)},y=(d,v,x=null,M=null)=>{l(R=>R.map(E=>{if(E.id===d){const T=x!==null?Number(x):E.bonus,L=E.basic_salary+T-E.deductions,V=v==="Paid";return{...E,bonus:T,net_salary:L,paid_status:v,payment_date:V?new Date().toISOString().split("T")[0]:null,transaction_id:V?E.transaction_id||`TXN-KM-${Math.floor(1e5+Math.random()*9e5)}`:null,note:M!==null?M:E.note}}return E}))},_=d=>{r(v=>[...v,{...d,id:`p-${Date.now()}`}])},m=d=>{r(v=>v.filter(x=>x.id!==d))};return c.jsx(dx.Provider,{value:{members:e,projects:i,attendance:s,salaries:o,addMember:f,updateMember:h,deleteMember:p,setDailyAttendance:g,updateSalaryStatus:y,addProject:_,deleteProject:m,recalculateMemberSalary:u},children:t})},Kn=()=>Ee.useContext(dx),fx=Ee.createContext(),I_=({children:t})=>{const{members:e}=Kn(),[n,i]=Ee.useState(()=>{const u=localStorage.getItem("km_auth_user");return u?JSON.parse(u):null}),[r,s]=Ee.useState("home");Ee.useEffect(()=>{n?localStorage.setItem("km_auth_user",JSON.stringify(n)):localStorage.removeItem("km_auth_user")},[n]);const a=(u,f)=>{const h=e.find(p=>p.email.toLowerCase()===u.toLowerCase());if(h)return i(h),h.role==="admin"?s("admin-dashboard"):s("member-portal"),{success:!0,user:h};if(u==="admin@kuakatamultimedia.com"||u==="admin"){const p=e.find(g=>g.role==="admin")||e[0];return i(p),s("admin-dashboard"),{success:!0,user:p}}if(u==="member@kuakatamultimedia.com"||u==="member"){const p=e.find(g=>g.role==="member")||e[1];return i(p),s("member-portal"),{success:!0,user:p}}return{success:!1,message:"ইমেইল অথবা পাসওয়ার্ড সঠিক নয়"}},o=()=>{i(null),s("home")},l=u=>{if(u==="admin"){const f=e.find(h=>h.role==="admin")||e[0];i(f),s("admin-dashboard")}else if(u==="member"){const f=e.find(h=>h.role==="member")||e[1];i(f),s("member-portal")}else i(null),s("home")};return c.jsx(fx.Provider,{value:{user:n,activeTab:r,setActiveTab:s,login:a,logout:o,switchRoleDemo:l},children:t})},Rr=()=>Ee.useContext(fx);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var k_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(t,e)=>{const n=Ee.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...u},f)=>Ee.createElement("svg",{ref:f,...k_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${F_(t)}`,o].join(" "),...u},[...e.map(([h,p])=>Ee.createElement(h,p)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Ie("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=Ie("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=Ie("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Ie("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ie("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Ie("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=Ie("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ie("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=Ie("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ie("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=Ie("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=Ie("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=Ie("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ie("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=Ie("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ie("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=Ie("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ie("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ie("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Ie("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ie("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=Ie("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ie("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ie("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ie("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=Ie("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Ie("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ie("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=Ie("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Ie("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=Ie("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ie("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=Ie("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=Ie("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Ie("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=Ie("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Ie("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Ie("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=Ie("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Ie("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=Ie("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=Ie("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Ie("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function oy({onOpenAuthModal:t}){const{user:e,activeTab:n,setActiveTab:i,logout:r,switchRoleDemo:s}=Rr(),[a,o]=Ee.useState(!1),l=u=>{i(u),o(!1)};return c.jsxs("header",{className:"sticky top-0 z-50 w-full glass-panel border-b border-brand-red/20 shadow-2xl",children:[c.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[c.jsxs("div",{onClick:()=>l("home"),className:"flex items-center gap-3 cursor-pointer group",children:[c.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 shadow-[0_0_20px_rgba(255,0,51,0.4)] group-hover:scale-105 transition-transform flex items-center justify-center",children:c.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[10px] p-1.5 flex items-center justify-center",children:c.jsx("img",{src:"/logo.svg",alt:"Kuakata Multimedia Logo",className:"w-full h-full object-contain group-hover:rotate-6 transition-transform"})})}),c.jsxs("div",{children:[c.jsxs("span",{className:"text-xl font-black text-white tracking-wider flex items-center gap-1",children:["KUAKATA ",c.jsx("span",{className:"text-gradient",children:"MULTIMEDIA"})]}),c.jsx("span",{className:"block text-[10px] text-slate-400 font-semibold tracking-widest uppercase",children:"www.kuakatamultimedia.com"})]})]}),c.jsxs("nav",{className:"hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-slate-800",children:[c.jsx("button",{id:"nav-home",onClick:()=>l("home"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="home"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"হোম (Home)"}),c.jsx("button",{id:"nav-team",onClick:()=>l("team"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="team"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"টিম মেম্বার (Team)"}),c.jsx("button",{id:"nav-portfolio",onClick:()=>l("portfolio"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="portfolio"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"পোর্টফোলিও (Portfolio)"}),c.jsx("button",{id:"nav-contact",onClick:()=>l("contact"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="contact"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"যোগাযোগ (Contact)"})]}),c.jsx("div",{className:"hidden lg:flex items-center gap-3",children:e?c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("button",{id:"btn-portal-access",onClick:()=>l(e.role==="admin"?"admin-dashboard":"member-portal"),className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold text-white shadow-md shadow-brand-red/30 hover:scale-105 transition-transform",children:[c.jsx(q_,{className:"w-4 h-4"}),c.jsx("span",{children:e.role==="admin"?"অ্যাডমিন ড্যাশবোর্ড":"মেম্বার পোর্টাল"})]}),c.jsx("button",{id:"btn-logout",onClick:r,title:"লগআউট",className:"p-2 rounded-xl glass-panel text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors",children:c.jsx(Y_,{className:"w-4 h-4"})})]}):c.jsxs("div",{className:"flex items-center gap-2",children:[c.jsxs("button",{id:"btn-quick-admin",onClick:()=>s("admin"),className:"px-3 py-2 rounded-xl text-[11px] font-semibold text-brand-red glass-panel hover:bg-brand-red/10 border border-brand-red/40 flex items-center gap-1.5",children:[c.jsx(Nr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"অ্যাডমিন ডেমো"})]}),c.jsxs("button",{id:"btn-quick-member",onClick:()=>s("member"),className:"px-3 py-2 rounded-xl text-[11px] font-semibold text-brand-amber glass-panel hover:bg-brand-amber/10 border border-brand-amber/40 flex items-center gap-1.5",children:[c.jsx(Ia,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"মেম্বার ডেমো"})]}),c.jsxs("button",{id:"btn-login-modal",onClick:t,className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-red text-white hover:bg-white hover:text-dark-900 transition-colors shadow-md shadow-brand-red/30",children:[c.jsx($_,{className:"w-4 h-4"}),c.jsx("span",{children:"লগইন"})]})]})}),c.jsx("button",{id:"btn-mobile-menu",onClick:()=>o(!a),className:"md:hidden p-2 rounded-lg glass-panel text-slate-200 hover:text-white",children:a?c.jsx(Xi,{className:"w-6 h-6"}):c.jsx(Z_,{className:"w-6 h-6"})})]}),a&&c.jsxs("div",{className:"md:hidden glass-panel border-t border-slate-800 p-4 space-y-3",children:[c.jsx("button",{onClick:()=>l("home"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"হোম (Home)"}),c.jsx("button",{onClick:()=>l("team"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"টিম মেম্বার (Team)"}),c.jsx("button",{onClick:()=>l("portfolio"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"পোর্টফোলিও (Portfolio)"}),c.jsx("button",{onClick:()=>l("contact"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"যোগাযোগ (Contact)"}),c.jsx("div",{className:"pt-3 border-t border-slate-800 flex flex-col gap-2",children:e?c.jsx("button",{onClick:()=>l(e.role==="admin"?"admin-dashboard":"member-portal"),className:"w-full py-2.5 rounded-lg text-xs font-bold bg-brand-red text-white text-center",children:e.role==="admin"?"অ্যাডমিন ড্যাশবোর্ড":"মেম্বার পোর্টাল"}):c.jsxs(c.Fragment,{children:[c.jsx("button",{onClick:()=>{s("admin"),o(!1)},className:"w-full py-2.5 rounded-lg text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/30 text-center",children:"অ্যাডমিন হিসেবে ডেমো লগইন"}),c.jsx("button",{onClick:()=>{s("member"),o(!1)},className:"w-full py-2.5 rounded-lg text-xs font-bold bg-brand-amber/20 text-brand-amber border border-brand-amber/30 text-center",children:"মেম্বার হিসেবে ডেমো লগইন"})]})})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ef="162",ly=0,Ah=1,cy=2,yx=1,uy=2,ii=3,qi=0,rn=1,ai=2,ji=0,ms=1,Xu=2,Ch=3,Rh=4,dy=5,dr=100,fy=101,hy=102,Nh=103,Ph=104,py=200,my=201,gy=202,xy=203,qu=204,$u=205,vy=206,_y=207,yy=208,Sy=209,My=210,by=211,Ey=212,wy=213,Ty=214,Ay=0,Cy=1,Ry=2,pl=3,Ny=4,Py=5,Ly=6,Dy=7,Sx=0,Uy=1,Iy=2,Hi=0,ky=1,Fy=2,Oy=3,zy=4,By=5,jy=6,Hy=7,Mx=300,Es=301,ws=302,Yu=303,Ku=304,kl=306,Zu=1e3,In=1001,Qu=1002,Wt=1003,Lh=1004,Hs=1005,Kt=1006,xc=1007,gr=1008,Gi=1009,Gy=1010,Vy=1011,tf=1012,bx=1013,Li=1014,oi=1015,Ca=1016,Ex=1017,wx=1018,_r=1020,Wy=1021,kn=1023,Xy=1024,qy=1025,yr=1026,Ts=1027,$y=1028,Tx=1029,Yy=1030,Ax=1031,Cx=1033,vc=33776,_c=33777,yc=33778,Sc=33779,Dh=35840,Uh=35841,Ih=35842,kh=35843,Rx=36196,Fh=37492,Oh=37496,zh=37808,Bh=37809,jh=37810,Hh=37811,Gh=37812,Vh=37813,Wh=37814,Xh=37815,qh=37816,$h=37817,Yh=37818,Kh=37819,Zh=37820,Qh=37821,Mc=36492,Jh=36494,ep=36495,Ky=36283,tp=36284,np=36285,ip=36286,Zy=3200,Qy=3201,Jy=0,eS=1,Ri="",Vn="srgb",Qi="srgb-linear",nf="display-p3",Fl="display-p3-linear",ml="linear",st="srgb",gl="rec709",xl="p3",Lr=7680,rp=519,tS=512,nS=513,iS=514,Nx=515,rS=516,sS=517,aS=518,oS=519,sp=35044,ap="300 es",Ju=1035,ui=2e3,vl=2001;class Ps{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,ed=180/Math.PI;function ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function lS(t,e){return(t%e+e)%e}function Ec(t,e,n){return(1-n)*t+n*e}function op(t){return(t&t-1)===0&&t!==0}function td(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Gs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,l,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u)}set(e,n,i,r,s,a,o,l,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],u=i[1],f=i[4],h=i[7],p=i[2],g=i[5],y=i[8],_=r[0],m=r[3],d=r[6],v=r[1],x=r[4],M=r[7],R=r[2],E=r[5],T=r[8];return s[0]=a*_+o*v+l*R,s[3]=a*m+o*x+l*E,s[6]=a*d+o*M+l*T,s[1]=u*_+f*v+h*R,s[4]=u*m+f*x+h*E,s[7]=u*d+f*M+h*T,s[2]=p*_+g*v+y*R,s[5]=p*m+g*x+y*E,s[8]=p*d+g*M+y*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*l+r*s*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=f*a-o*u,p=o*l-f*s,g=u*s-a*l,y=n*h+i*p+r*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*u-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=p*_,e[4]=(f*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=g*_,e[7]=(i*l-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*a+u*o)+a+e,-r*u,r*l,-r*(-u*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(wc.makeScale(e,n)),this}rotate(e){return this.premultiply(wc.makeRotation(-e)),this}translate(e,n){return this.premultiply(wc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wc=new He;function Px(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function _l(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cS(){const t=_l("canvas");return t.style.display="block",t}const lp={};function uS(t){t in lp||(lp[t]=!0,console.warn(t))}const cp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),up=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ao={[Qi]:{transfer:ml,primaries:gl,toReference:t=>t,fromReference:t=>t},[Vn]:{transfer:st,primaries:gl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Fl]:{transfer:ml,primaries:xl,toReference:t=>t.applyMatrix3(up),fromReference:t=>t.applyMatrix3(cp)},[nf]:{transfer:st,primaries:xl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(up),fromReference:t=>t.applyMatrix3(cp).convertLinearToSRGB()}},dS=new Set([Qi,Fl]),et={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!dS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ao[e].toReference,r=ao[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ao[t].primaries},getTransfer:function(t){return t===Ri?ml:ao[t].transfer}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class Lx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=_l("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=_l("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class Dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ac(r[a].image)):s.push(Ac(r[a]))}else s=Ac(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ac(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Lx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hS=0;class sn extends Ps{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=In,r=In,s=Kt,a=gr,o=kn,l=Gi,u=sn.DEFAULT_ANISOTROPY,f=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hS++}),this.uuid=ka(),this.name="",this.source=new Dx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zu:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Qu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zu:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Qu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Mx;sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],f=l[4],h=l[8],p=l[1],g=l[5],y=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(f-p)<.01&&Math.abs(h-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(u+1)/2,M=(g+1)/2,R=(d+1)/2,E=(f+p)/4,T=(h+_)/4,L=(y+m)/4;return x>M&&x>R?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=T/i):M>R?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=E/r,s=L/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=T/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(h-_)*(h-_)+(p-f)*(p-f));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-_)/v,this.z=(p-f)/v,this.w=Math.acos((u+g+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pS extends Ps{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Dx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends pS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ux extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[a+0],g=s[a+1],y=s[a+2],_=s[a+3];if(o===0){e[n+0]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=g,e[n+2]=y,e[n+3]=_;return}if(h!==_||l!==p||u!==g||f!==y){let m=1-o;const d=l*p+u*g+f*y+h*_,v=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){const R=Math.sqrt(x),E=Math.atan2(R,d*v);m=Math.sin(m*E)/R,o=Math.sin(o*E)/R}const M=o*v;if(l=l*m+p*M,u=u*m+g*M,f=f*m+y*M,h=h*m+_*M,m===1-o){const R=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=R,u*=R,f*=R,h*=R}}e[n]=l,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],u=i[r+2],f=i[r+3],h=s[a],p=s[a+1],g=s[a+2],y=s[a+3];return e[n]=o*y+f*h+l*g-u*p,e[n+1]=l*y+f*p+u*h-o*g,e[n+2]=u*y+f*g+o*p-l*h,e[n+3]=f*y-o*h-l*p-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),p=l(i/2),g=l(r/2),y=l(s/2);switch(a){case"XYZ":this._x=p*f*h+u*g*y,this._y=u*g*h-p*f*y,this._z=u*f*y+p*g*h,this._w=u*f*h-p*g*y;break;case"YXZ":this._x=p*f*h+u*g*y,this._y=u*g*h-p*f*y,this._z=u*f*y-p*g*h,this._w=u*f*h+p*g*y;break;case"ZXY":this._x=p*f*h-u*g*y,this._y=u*g*h+p*f*y,this._z=u*f*y+p*g*h,this._w=u*f*h-p*g*y;break;case"ZYX":this._x=p*f*h-u*g*y,this._y=u*g*h+p*f*y,this._z=u*f*y-p*g*h,this._w=u*f*h+p*g*y;break;case"YZX":this._x=p*f*h+u*g*y,this._y=u*g*h+p*f*y,this._z=u*f*y-p*g*h,this._w=u*f*h-p*g*y;break;case"XZY":this._x=p*f*h-u*g*y,this._y=u*g*h-p*f*y,this._z=u*f*y+p*g*h,this._w=u*f*h+p*g*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],u=n[2],f=n[6],h=n[10],p=i+o+h;if(p>0){const g=.5/Math.sqrt(p+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>o&&i>h){const g=2*Math.sqrt(1+i-o-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(o>h){const g=2*Math.sqrt(1+o-i-h);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-o);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-i*u,this._z=s*f+a*u+i*l-r*o,this._w=a*f-i*o-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const g=1-n;return this._w=g*a+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,n=0,i=0){z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(dp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(dp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*u+a*h-o*f,this.y=i+l*f+o*u-s*h,this.z=r+l*h+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Cc.copy(this).projectOnVector(e),this.sub(Cc)}reflect(e){return this.sub(Cc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Cc=new z,dp=new Fa;class Oa{constructor(e=new z(1/0,1/0,1/0),n=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Rn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Rn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Rn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Rn):Rn.fromBufferAttribute(s,a),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),lo.subVectors(this.max,Vs),Ur.subVectors(e.a,Vs),Ir.subVectors(e.b,Vs),kr.subVectors(e.c,Vs),_i.subVectors(Ir,Ur),yi.subVectors(kr,Ir),tr.subVectors(Ur,kr);let n=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-tr.z,tr.y,_i.z,0,-_i.x,yi.z,0,-yi.x,tr.z,0,-tr.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-tr.y,tr.x,0];return!Rc(n,Ur,Ir,kr,lo)||(n=[1,0,0,0,1,0,0,0,1],!Rc(n,Ur,Ir,kr,lo))?!1:(co.crossVectors(_i,yi),n=[co.x,co.y,co.z],Rc(n,Ur,Ir,kr,lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new z,new z,new z,new z,new z,new z,new z,new z],Rn=new z,oo=new Oa,Ur=new z,Ir=new z,kr=new z,_i=new z,yi=new z,tr=new z,Vs=new z,lo=new z,co=new z,nr=new z;function Rc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),l=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const gS=new Oa,Ws=new z,Nc=new z;class Ol{constructor(e=new z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):gS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);const n=Ws.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ws,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Nc)),this.expandByPoint(Ws.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new z,Pc=new z,uo=new z,Si=new z,Lc=new z,fo=new z,Dc=new z;class Ix{constructor(e=new z,n=new z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pc.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Pc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(uo),o=Si.dot(this.direction),l=-Si.dot(uo),u=Si.lengthSq(),f=Math.abs(1-a*a);let h,p,g,y;if(f>0)if(h=a*l-o,p=a*o-l,y=s*f,h>=0)if(p>=-y)if(p<=y){const _=1/f;h*=_,p*=_,g=h*(h+a*p+2*o)+p*(a*h+p+2*l)+u}else p=s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;else p=-s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;else p<=-y?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+u):p<=y?(h=0,p=Math.min(Math.max(-s,-l),s),g=p*(p+2*l)+u):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+p*(p+2*l)+u);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),g=-h*h+p*(p+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Pc).addScaledVector(uo,p),g}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,l=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,l=(e.min.z-p.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Lc.subVectors(n,e),fo.subVectors(i,e),Dc.crossVectors(Lc,fo);let a=this.direction.dot(Dc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const l=o*this.direction.dot(fo.crossVectors(Si,fo));if(l<0)return null;const u=o*this.direction.dot(Lc.cross(Si));if(u<0||l+u>a)return null;const f=-o*Si.dot(Dc);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,a,o,l,u,f,h,p,g,y,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,u,f,h,p,g,y,_,m)}set(e,n,i,r,s,a,o,l,u,f,h,p,g,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=g,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*f,g=a*h,y=o*f,_=o*h;n[0]=l*f,n[4]=-l*h,n[8]=u,n[1]=g+y*u,n[5]=p-_*u,n[9]=-o*l,n[2]=_-p*u,n[6]=y+g*u,n[10]=a*l}else if(e.order==="YXZ"){const p=l*f,g=l*h,y=u*f,_=u*h;n[0]=p+_*o,n[4]=y*o-g,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=g*o-y,n[6]=_+p*o,n[10]=a*l}else if(e.order==="ZXY"){const p=l*f,g=l*h,y=u*f,_=u*h;n[0]=p-_*o,n[4]=-a*h,n[8]=y+g*o,n[1]=g+y*o,n[5]=a*f,n[9]=_-p*o,n[2]=-a*u,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const p=a*f,g=a*h,y=o*f,_=o*h;n[0]=l*f,n[4]=y*u-g,n[8]=p*u+_,n[1]=l*h,n[5]=_*u+p,n[9]=g*u-y,n[2]=-u,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const p=a*l,g=a*u,y=o*l,_=o*u;n[0]=l*f,n[4]=_-p*h,n[8]=y*h+g,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=g*h+y,n[10]=p-_*h}else if(e.order==="XZY"){const p=a*l,g=a*u,y=o*l,_=o*u;n[0]=l*f,n[4]=-h,n[8]=u*f,n[1]=p*h+_,n[5]=a*f,n[9]=g*h-y,n[2]=y*h-g,n[6]=o*f,n[10]=_*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xS,e,vS)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),ho.crossVectors(ln,Mi),r[0]=Mi.x,r[4]=ho.x,r[8]=ln.x,r[1]=Mi.y,r[5]=ho.y,r[9]=ln.y,r[2]=Mi.z,r[6]=ho.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],u=i[12],f=i[1],h=i[5],p=i[9],g=i[13],y=i[2],_=i[6],m=i[10],d=i[14],v=i[3],x=i[7],M=i[11],R=i[15],E=r[0],T=r[4],L=r[8],V=r[12],S=r[1],N=r[5],ee=r[9],te=r[13],U=r[2],K=r[6],q=r[10],J=r[14],D=r[3],B=r[7],C=r[11],A=r[15];return s[0]=a*E+o*S+l*U+u*D,s[4]=a*T+o*N+l*K+u*B,s[8]=a*L+o*ee+l*q+u*C,s[12]=a*V+o*te+l*J+u*A,s[1]=f*E+h*S+p*U+g*D,s[5]=f*T+h*N+p*K+g*B,s[9]=f*L+h*ee+p*q+g*C,s[13]=f*V+h*te+p*J+g*A,s[2]=y*E+_*S+m*U+d*D,s[6]=y*T+_*N+m*K+d*B,s[10]=y*L+_*ee+m*q+d*C,s[14]=y*V+_*te+m*J+d*A,s[3]=v*E+x*S+M*U+R*D,s[7]=v*T+x*N+M*K+R*B,s[11]=v*L+x*ee+M*q+R*C,s[15]=v*V+x*te+M*J+R*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],u=e[13],f=e[2],h=e[6],p=e[10],g=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+s*l*h-r*u*h-s*o*p+i*u*p+r*o*g-i*l*g)+_*(+n*l*g-n*u*p+s*a*p-r*a*g+r*u*f-s*l*f)+m*(+n*u*h-n*o*g-s*a*h+i*a*g+s*o*f-i*u*f)+d*(-r*o*f-n*l*h+n*o*p+r*a*h-i*a*p+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],u=e[7],f=e[8],h=e[9],p=e[10],g=e[11],y=e[12],_=e[13],m=e[14],d=e[15],v=h*m*u-_*p*u+_*l*g-o*m*g-h*l*d+o*p*d,x=y*p*u-f*m*u-y*l*g+a*m*g+f*l*d-a*p*d,M=f*_*u-y*h*u+y*o*g-a*_*g-f*o*d+a*h*d,R=y*h*l-f*_*l-y*o*p+a*_*p+f*o*m-a*h*m,E=n*v+i*x+r*M+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=v*T,e[1]=(_*p*s-h*m*s-_*r*g+i*m*g+h*r*d-i*p*d)*T,e[2]=(o*m*s-_*l*s+_*r*u-i*m*u-o*r*d+i*l*d)*T,e[3]=(h*l*s-o*p*s-h*r*u+i*p*u+o*r*g-i*l*g)*T,e[4]=x*T,e[5]=(f*m*s-y*p*s+y*r*g-n*m*g-f*r*d+n*p*d)*T,e[6]=(y*l*s-a*m*s-y*r*u+n*m*u+a*r*d-n*l*d)*T,e[7]=(a*p*s-f*l*s+f*r*u-n*p*u-a*r*g+n*l*g)*T,e[8]=M*T,e[9]=(y*h*s-f*_*s-y*i*g+n*_*g+f*i*d-n*h*d)*T,e[10]=(a*_*s-y*o*s+y*i*u-n*_*u-a*i*d+n*o*d)*T,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*g-n*o*g)*T,e[12]=R*T,e[13]=(f*_*r-y*h*r+y*i*p-n*_*p-f*i*m+n*h*m)*T,e[14]=(y*o*r-a*_*r-y*i*l+n*_*l+a*i*m-n*o*m)*T,e[15]=(a*h*r-f*o*r+f*i*l-n*h*l-a*i*p+n*o*p)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+i,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,u=s+s,f=a+a,h=o+o,p=s*u,g=s*f,y=s*h,_=a*f,m=a*h,d=o*h,v=l*u,x=l*f,M=l*h,R=i.x,E=i.y,T=i.z;return r[0]=(1-(_+d))*R,r[1]=(g+M)*R,r[2]=(y-x)*R,r[3]=0,r[4]=(g-M)*E,r[5]=(1-(p+d))*E,r[6]=(m+v)*E,r[7]=0,r[8]=(y+x)*T,r[9]=(m-v)*T,r[10]=(1-(p+_))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const a=Fr.set(r[4],r[5],r[6]).length(),o=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,f=1/a,h=1/o;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=f,Nn.elements[5]*=f,Nn.elements[6]*=f,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const l=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let g,y;if(o===ui)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===vl)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const l=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),p=(n+e)*u,g=(i+r)*f;let y,_;if(o===ui)y=(a+s)*h,_=-2*h;else if(o===vl)y=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=_,l[14]=-y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new z,Nn=new yt,xS=new z(0,0,0),vS=new z(1,1,1),Mi=new z,ho=new z,ln=new z,fp=new yt,hp=new Fa;class gi{constructor(e=0,n=0,i=0,r=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],h=r[2],p=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hp.setFromEuler(this),this.setFromQuaternion(hp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const pp=new z,Or=new Fa,ei=new yt,po=new z,Xs=new z,yS=new z,SS=new Fa,mp=new z(1,0,0),gp=new z(0,1,0),xp=new z(0,0,1),MS={type:"added"},bS={type:"removed"},Uc={type:"childadded",child:null},Ic={type:"childremoved",child:null};class an extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new z,n=new gi,i=new Fa,r=new z(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(mp,e)}rotateY(e){return this.rotateOnAxis(gp,e)}rotateZ(e){return this.rotateOnAxis(xp,e)}translateOnAxis(e,n){return pp.copy(e).applyQuaternion(this.quaternion),this.position.add(pp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mp,e)}translateY(e){return this.translateOnAxis(gp,e)}translateZ(e){return this.translateOnAxis(xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(Xs,po,this.up):ei.lookAt(po,Xs,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(MS),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bS),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,yS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,SS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),p=a(e.skeletons),g=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),g.length>0&&(i.animations=g),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new z(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new z,ti=new z,kc=new z,ni=new z,zr=new z,Br=new z,vp=new z,Fc=new z,Oc=new z,zc=new z;class qn{constructor(e=new z,n=new z,i=new z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ti.subVectors(i,n),kc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ti),l=Pn.dot(kc),u=ti.dot(ti),f=ti.dot(kc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,g=(u*l-o*f)*p,y=(a*f-o*l)*p;return s.set(1-g-y,y,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(a,ni.y),l.addScaledVector(o,ni.z),l)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ti.subVectors(e,n),Pn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return qn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;zr.subVectors(r,i),Br.subVectors(s,i),Fc.subVectors(e,i);const l=zr.dot(Fc),u=Br.dot(Fc);if(l<=0&&u<=0)return n.copy(i);Oc.subVectors(e,r);const f=zr.dot(Oc),h=Br.dot(Oc);if(f>=0&&h<=f)return n.copy(r);const p=l*h-f*u;if(p<=0&&l>=0&&f<=0)return a=l/(l-f),n.copy(i).addScaledVector(zr,a);zc.subVectors(e,s);const g=zr.dot(zc),y=Br.dot(zc);if(y>=0&&g<=y)return n.copy(s);const _=g*u-l*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(Br,o);const m=f*y-g*h;if(m<=0&&h-f>=0&&g-y>=0)return vp.subVectors(s,r),o=(h-f)/(h-f+(g-y)),n.copy(r).addScaledVector(vp,o);const d=1/(m+_+p);return a=_*d,o=p*d,n.copy(i).addScaledVector(zr,a).addScaledVector(Br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Fx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Bc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=lS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Bc(a,s,e+1/3),this.g=Bc(a,s,e),this.b=Bc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Vn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Vn){const i=Fx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Tc(e.r),this.g=Tc(e.g),this.b=Tc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vn){return et.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Qt(Ot.r*255,0,255))*65536+Math.round(Qt(Ot.g*255,0,255))*256+Math.round(Qt(Ot.b*255,0,255))}getHexString(e=Vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Vn){et.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(mo);const i=Ec(bi.h,mo.h,n),r=Ec(bi.s,mo.s,n),s=Ec(bi.l,mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Qe;Qe.NAMES=Fx;let ES=0;class za extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=ms,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=qu,this.blendDst=$u,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=pl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ms&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==qu&&(i.blendSrc=this.blendSrc),this.blendDst!==$u&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==pl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class la extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Sx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new z,go=new Ye;class zn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return uS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)go.fromBufferAttribute(this,n),go.applyMatrix3(e),this.setXY(n,go.x,go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Gs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Gs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Gs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Gs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Gs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sp&&(e.usage=this.usage),e}}class Ox extends zn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zx extends zn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Bt extends zn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wS=0;const _n=new yt,jc=new an,jr=new z,cn=new Oa,qs=new Oa,Tt=new z;class An extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wS++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Px(e)?zx:Ox)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return jc.lookAt(e),jc.updateMatrix(),this.applyMatrix4(jc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ol);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(cn.min,qs.min),cn.expandByPoint(Tt),Tt.addVectors(cn.max,qs.max),cn.expandByPoint(Tt)):(cn.expandByPoint(qs.min),cn.expandByPoint(qs.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Tt.fromBufferAttribute(o,u),l&&(jr.fromBufferAttribute(e,u),Tt.add(jr)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new zn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new z,l[L]=new z;const u=new z,f=new z,h=new z,p=new Ye,g=new Ye,y=new Ye,_=new z,m=new z;function d(L,V,S){u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,V),h.fromBufferAttribute(i,S),p.fromBufferAttribute(s,L),g.fromBufferAttribute(s,V),y.fromBufferAttribute(s,S),f.sub(u),h.sub(u),g.sub(p),y.sub(p);const N=1/(g.x*y.y-y.x*g.y);isFinite(N)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(h,-g.y).multiplyScalar(N),m.copy(h).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(N),o[L].add(_),o[V].add(_),o[S].add(_),l[L].add(m),l[V].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,V=v.length;L<V;++L){const S=v[L],N=S.start,ee=S.count;for(let te=N,U=N+ee;te<U;te+=3)d(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const x=new z,M=new z,R=new z,E=new z;function T(L){R.fromBufferAttribute(r,L),E.copy(R);const V=o[L];x.copy(V),x.sub(R.multiplyScalar(R.dot(V))).normalize(),M.crossVectors(E,V);const N=M.dot(l[L])<0?-1:1;a.setXYZW(L,x.x,x.y,x.z,N)}for(let L=0,V=v.length;L<V;++L){const S=v[L],N=S.start,ee=S.count;for(let te=N,U=N+ee;te<U;te+=3)T(e.getX(te+0)),T(e.getX(te+1)),T(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new zn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,g=i.count;p<g;p++)i.setXYZ(p,0,0,0);const r=new z,s=new z,a=new z,o=new z,l=new z,u=new z,f=new z,h=new z;if(e)for(let p=0,g=e.count;p<g;p+=3){const y=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,y),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(f),l.add(f),u.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,g=n.count;p<g;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const u=o.array,f=o.itemSize,h=o.normalized,p=new u.constructor(l.length*f);let g=0,y=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?g=l[_]*o.data.stride+o.offset:g=l[_]*f;for(let d=0;d<f;d++)p[y++]=u[g++]}return new zn(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=e(l,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const p=u[f],g=e(p,i);l.push(g)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,p=u.length;h<p;h++){const g=u[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,g=h.length;p<g;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _p=new yt,ir=new Ix,xo=new Ol,yp=new z,Hr=new z,Gr=new z,Vr=new z,Hc=new z,vo=new z,_o=new Ye,yo=new Ye,So=new Ye,Sp=new z,Mp=new z,bp=new z,Mo=new z,bo=new z;class fn extends an{constructor(e=new An,n=new la){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){vo.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],h=s[l];f!==0&&(Hc.fromBufferAttribute(h,e),a?vo.addScaledVector(Hc,f):vo.addScaledVector(Hc.sub(n),f))}n.add(vo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),xo.copy(i.boundingSphere),xo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(xo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(xo,yp)===null||ir.origin.distanceToSquared(yp)>(e.far-e.near)**2))&&(_p.copy(s).invert(),ir.copy(e.ray).applyMatrix4(_p),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,R=x;M<R;M+=3){const E=o.getX(M),T=o.getX(M+1),L=o.getX(M+2);r=Eo(this,d,e,i,u,f,h,E,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(o.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const v=o.getX(m),x=o.getX(m+1),M=o.getX(m+2);r=Eo(this,a,e,i,u,f,h,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=a[m.materialIndex],v=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let M=v,R=x;M<R;M+=3){const E=M,T=M+1,L=M+2;r=Eo(this,d,e,i,u,f,h,E,T,L),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,g.start),_=Math.min(l.count,g.start+g.count);for(let m=y,d=_;m<d;m+=3){const v=m,x=m+1,M=m+2;r=Eo(this,a,e,i,u,f,h,v,x,M),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function TS(t,e,n,i,r,s,a,o){let l;if(e.side===rn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===qi,o),l===null)return null;bo.copy(o),bo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(bo);return u<n.near||u>n.far?null:{distance:u,point:bo.clone(),object:t}}function Eo(t,e,n,i,r,s,a,o,l,u){t.getVertexPosition(o,Hr),t.getVertexPosition(l,Gr),t.getVertexPosition(u,Vr);const f=TS(t,e,n,i,Hr,Gr,Vr,Mo);if(f){r&&(_o.fromBufferAttribute(r,o),yo.fromBufferAttribute(r,l),So.fromBufferAttribute(r,u),f.uv=qn.getInterpolation(Mo,Hr,Gr,Vr,_o,yo,So,new Ye)),s&&(_o.fromBufferAttribute(s,o),yo.fromBufferAttribute(s,l),So.fromBufferAttribute(s,u),f.uv1=qn.getInterpolation(Mo,Hr,Gr,Vr,_o,yo,So,new Ye)),a&&(Sp.fromBufferAttribute(a,o),Mp.fromBufferAttribute(a,l),bp.fromBufferAttribute(a,u),f.normal=qn.getInterpolation(Mo,Hr,Gr,Vr,Sp,Mp,bp,new z),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:l,c:u,normal:new z,materialIndex:0};qn.getNormal(Hr,Gr,Vr,h.normal),f.face=h}return f}class Ba extends An{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],h=[];let p=0,g=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Bt(u,3)),this.setAttribute("normal",new Bt(f,3)),this.setAttribute("uv",new Bt(h,2));function y(_,m,d,v,x,M,R,E,T,L,V){const S=M/T,N=R/L,ee=M/2,te=R/2,U=E/2,K=T+1,q=L+1;let J=0,D=0;const B=new z;for(let C=0;C<q;C++){const A=C*N-te;for(let $=0;$<K;$++){const se=$*S-ee;B[_]=se*v,B[m]=A*x,B[d]=U,u.push(B.x,B.y,B.z),B[_]=0,B[m]=0,B[d]=E>0?1:-1,f.push(B.x,B.y,B.z),h.push($/T),h.push(1-C/L),J+=1}}for(let C=0;C<L;C++)for(let A=0;A<T;A++){const $=p+A+K*C,se=p+A+K*(C+1),F=p+(A+1)+K*(C+1),X=p+(A+1)+K*C;l.push($,se,X),l.push(se,F,X),D+=6}o.addGroup(g,D,V),g+=D,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=As(t[n]);for(const r in i)e[r]=i[r]}return e}function AS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bx(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const CS={clone:As,merge:Gt};var RS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,NS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=RS,this.fragmentShader=NS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=AS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class jx extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new z,Ep=new Ye,wp=new Ye;class Mn extends jx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ed*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ed*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,Ep,wp),n.subVectors(wp,Ep)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class PS extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new Mn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new Mn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new Mn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const u=new Mn(Wr,Xr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===vl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,g),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Hx extends sn{constructor(e,n,i,r,s,a,o,l,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LS extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Hx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ba(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:As(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:ji});s.uniforms.tEquirect.value=n;const a=new fn(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=Kt),new PS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Gc=new z,DS=new z,US=new He;class cr{constructor(e=new z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Gc.subVectors(i,n).cross(DS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Gc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||US.getNormalMatrix(e),r=this.coplanarPoint(Gc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Ol,wo=new z;class Gx{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],h=r[6],p=r[7],g=r[8],y=r[9],_=r[10],m=r[11],d=r[12],v=r[13],x=r[14],M=r[15];if(i[0].setComponents(l-s,p-u,m-g,M-d).normalize(),i[1].setComponents(l+s,p+u,m+g,M+d).normalize(),i[2].setComponents(l+a,p+f,m+y,M+v).normalize(),i[3].setComponents(l-a,p-f,m-y,M-v).normalize(),i[4].setComponents(l-o,p-h,m-_,M-x).normalize(),n===ui)i[5].setComponents(l+o,p+h,m+_,M+x).normalize();else if(n===vl)i[5].setComponents(o,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,p=u.usage,g=h.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function s(u,f,h){const p=f.array,g=f._updateRange,y=f.updateRanges;if(t.bindBuffer(h,u),g.count===-1&&y.length===0&&t.bufferSubData(h,0,p),y.length!==0){for(let _=0,m=y.length;_<m;_++){const d=y[_];n?t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}g.count!==-1&&(n?t.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p,g.offset,g.count):t.bufferSubData(h,g.offset*p.BYTES_PER_ELEMENT,p.subarray(g.offset,g.offset+g.count)),g.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function l(u,f){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:l}}class zl extends An{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),u=o+1,f=l+1,h=e/o,p=n/l,g=[],y=[],_=[],m=[];for(let d=0;d<f;d++){const v=d*p-a;for(let x=0;x<u;x++){const M=x*h-s;y.push(M,-v,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<o;v++){const x=v+u*d,M=v+u*(d+1),R=v+1+u*(d+1),E=v+1+u*d;g.push(x,M,E),g.push(M,R,E)}this.setIndex(g),this.setAttribute("position",new Bt(y,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.width,e.height,e.widthSegments,e.heightSegments)}}var kS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,OS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,VS=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,XS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$S=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,aM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,oM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fM="gl_FragColor = linearToOutputTexel( gl_FragColor );",hM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,pM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_M=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,EM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,wM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,TM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$M=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,JM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,e1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,t1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,r1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,a1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,l1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,d1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,h1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,p1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,m1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,g1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,x1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,y1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,S1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,U1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const k1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,F1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,G1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,K1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Z1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,eb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ib=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ub=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,db=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,je={alphahash_fragment:kS,alphahash_pars_fragment:FS,alphamap_fragment:OS,alphamap_pars_fragment:zS,alphatest_fragment:BS,alphatest_pars_fragment:jS,aomap_fragment:HS,aomap_pars_fragment:GS,batching_pars_vertex:VS,batching_vertex:WS,begin_vertex:XS,beginnormal_vertex:qS,bsdfs:$S,iridescence_fragment:YS,bumpmap_pars_fragment:KS,clipping_planes_fragment:ZS,clipping_planes_pars_fragment:QS,clipping_planes_pars_vertex:JS,clipping_planes_vertex:eM,color_fragment:tM,color_pars_fragment:nM,color_pars_vertex:iM,color_vertex:rM,common:sM,cube_uv_reflection_fragment:aM,defaultnormal_vertex:oM,displacementmap_pars_vertex:lM,displacementmap_vertex:cM,emissivemap_fragment:uM,emissivemap_pars_fragment:dM,colorspace_fragment:fM,colorspace_pars_fragment:hM,envmap_fragment:pM,envmap_common_pars_fragment:mM,envmap_pars_fragment:gM,envmap_pars_vertex:xM,envmap_physical_pars_fragment:RM,envmap_vertex:vM,fog_vertex:_M,fog_pars_vertex:yM,fog_fragment:SM,fog_pars_fragment:MM,gradientmap_pars_fragment:bM,lightmap_fragment:EM,lightmap_pars_fragment:wM,lights_lambert_fragment:TM,lights_lambert_pars_fragment:AM,lights_pars_begin:CM,lights_toon_fragment:NM,lights_toon_pars_fragment:PM,lights_phong_fragment:LM,lights_phong_pars_fragment:DM,lights_physical_fragment:UM,lights_physical_pars_fragment:IM,lights_fragment_begin:kM,lights_fragment_maps:FM,lights_fragment_end:OM,logdepthbuf_fragment:zM,logdepthbuf_pars_fragment:BM,logdepthbuf_pars_vertex:jM,logdepthbuf_vertex:HM,map_fragment:GM,map_pars_fragment:VM,map_particle_fragment:WM,map_particle_pars_fragment:XM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:$M,morphinstance_vertex:YM,morphcolor_vertex:KM,morphnormal_vertex:ZM,morphtarget_pars_vertex:QM,morphtarget_vertex:JM,normal_fragment_begin:e1,normal_fragment_maps:t1,normal_pars_fragment:n1,normal_pars_vertex:i1,normal_vertex:r1,normalmap_pars_fragment:s1,clearcoat_normal_fragment_begin:a1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:l1,iridescence_pars_fragment:c1,opaque_fragment:u1,packing:d1,premultiplied_alpha_fragment:f1,project_vertex:h1,dithering_fragment:p1,dithering_pars_fragment:m1,roughnessmap_fragment:g1,roughnessmap_pars_fragment:x1,shadowmap_pars_fragment:v1,shadowmap_pars_vertex:_1,shadowmap_vertex:y1,shadowmask_pars_fragment:S1,skinbase_vertex:M1,skinning_pars_vertex:b1,skinning_vertex:E1,skinnormal_vertex:w1,specularmap_fragment:T1,specularmap_pars_fragment:A1,tonemapping_fragment:C1,tonemapping_pars_fragment:R1,transmission_fragment:N1,transmission_pars_fragment:P1,uv_pars_fragment:L1,uv_pars_vertex:D1,uv_vertex:U1,worldpos_vertex:I1,background_vert:k1,background_frag:F1,backgroundCube_vert:O1,backgroundCube_frag:z1,cube_vert:B1,cube_frag:j1,depth_vert:H1,depth_frag:G1,distanceRGBA_vert:V1,distanceRGBA_frag:W1,equirect_vert:X1,equirect_frag:q1,linedashed_vert:$1,linedashed_frag:Y1,meshbasic_vert:K1,meshbasic_frag:Z1,meshlambert_vert:Q1,meshlambert_frag:J1,meshmatcap_vert:eb,meshmatcap_frag:tb,meshnormal_vert:nb,meshnormal_frag:ib,meshphong_vert:rb,meshphong_frag:sb,meshphysical_vert:ab,meshphysical_frag:ob,meshtoon_vert:lb,meshtoon_frag:cb,points_vert:ub,points_frag:db,shadow_vert:fb,shadow_frag:hb,sprite_vert:pb,sprite_frag:mb},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Wn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Wn.physical={uniforms:Gt([Wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const To={r:0,b:0,g:0},sr=new gi,gb=new yt;function xb(t,e,n,i,r,s,a){const o=new Qe(0);let l=s===!0?0:1,u,f,h=null,p=0,g=null;function y(m,d){let v=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?n:e).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),v=!0);const M=t.xr.getEnvironmentBlendMode();M==="additive"?i.buffers.color.setClear(0,0,0,1,a):M==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===kl)?(f===void 0&&(f=new fn(new Ba(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:As(Wn.backgroundCube.uniforms),vertexShader:Wn.backgroundCube.vertexShader,fragmentShader:Wn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(d.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=x,f.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(gb.makeRotationFromEuler(sr)),f.material.toneMapped=et.getTransfer(x.colorSpace)!==st,(h!==x||p!==x.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=x,p=x.version,g=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new fn(new zl(2,2),new $i({name:"BackgroundMaterial",uniforms:As(Wn.background.uniforms),vertexShader:Wn.background.vertexShader,fragmentShader:Wn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(x.colorSpace)!==st,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||p!==x.version||g!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,p=x.version,g=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(To,Bx(t)),i.buffers.color.setClear(To.r,To.g,To.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:y}}function vb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let u=l,f=!1;function h(U,K,q,J,D){let B=!1;if(a){const C=_(J,q,K);u!==C&&(u=C,g(u.object)),B=d(U,J,q,D),B&&v(U,J,q,D)}else{const C=K.wireframe===!0;(u.geometry!==J.id||u.program!==q.id||u.wireframe!==C)&&(u.geometry=J.id,u.program=q.id,u.wireframe=C,B=!0)}D!==null&&n.update(D,t.ELEMENT_ARRAY_BUFFER),(B||f)&&(f=!1,L(U,K,q,J),D!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(D).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function g(U){return i.isWebGL2?t.bindVertexArray(U):s.bindVertexArrayOES(U)}function y(U){return i.isWebGL2?t.deleteVertexArray(U):s.deleteVertexArrayOES(U)}function _(U,K,q){const J=q.wireframe===!0;let D=o[U.id];D===void 0&&(D={},o[U.id]=D);let B=D[K.id];B===void 0&&(B={},D[K.id]=B);let C=B[J];return C===void 0&&(C=m(p()),B[J]=C),C}function m(U){const K=[],q=[],J=[];for(let D=0;D<r;D++)K[D]=0,q[D]=0,J[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:q,attributeDivisors:J,object:U,attributes:{},index:null}}function d(U,K,q,J){const D=u.attributes,B=K.attributes;let C=0;const A=q.getAttributes();for(const $ in A)if(A[$].location>=0){const F=D[$];let X=B[$];if(X===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(X=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(X=U.instanceColor)),F===void 0||F.attribute!==X||X&&F.data!==X.data)return!0;C++}return u.attributesNum!==C||u.index!==J}function v(U,K,q,J){const D={},B=K.attributes;let C=0;const A=q.getAttributes();for(const $ in A)if(A[$].location>=0){let F=B[$];F===void 0&&($==="instanceMatrix"&&U.instanceMatrix&&(F=U.instanceMatrix),$==="instanceColor"&&U.instanceColor&&(F=U.instanceColor));const X={};X.attribute=F,F&&F.data&&(X.data=F.data),D[$]=X,C++}u.attributes=D,u.attributesNum=C,u.index=J}function x(){const U=u.newAttributes;for(let K=0,q=U.length;K<q;K++)U[K]=0}function M(U){R(U,0)}function R(U,K){const q=u.newAttributes,J=u.enabledAttributes,D=u.attributeDivisors;q[U]=1,J[U]===0&&(t.enableVertexAttribArray(U),J[U]=1),D[U]!==K&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,K),D[U]=K)}function E(){const U=u.newAttributes,K=u.enabledAttributes;for(let q=0,J=K.length;q<J;q++)K[q]!==U[q]&&(t.disableVertexAttribArray(q),K[q]=0)}function T(U,K,q,J,D,B,C){C===!0?t.vertexAttribIPointer(U,K,q,D,B):t.vertexAttribPointer(U,K,q,J,D,B)}function L(U,K,q,J){if(i.isWebGL2===!1&&(U.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=J.attributes,B=q.getAttributes(),C=K.defaultAttributeValues;for(const A in B){const $=B[A];if($.location>=0){let se=D[A];if(se===void 0&&(A==="instanceMatrix"&&U.instanceMatrix&&(se=U.instanceMatrix),A==="instanceColor"&&U.instanceColor&&(se=U.instanceColor)),se!==void 0){const F=se.normalized,X=se.itemSize,Q=n.get(se);if(Q===void 0)continue;const ie=Q.buffer,oe=Q.type,le=Q.bytesPerElement,Te=i.isWebGL2===!0&&(oe===t.INT||oe===t.UNSIGNED_INT||se.gpuType===bx);if(se.isInterleavedBufferAttribute){const xe=se.data,k=xe.stride,qe=se.offset;if(xe.isInstancedInterleavedBuffer){for(let ue=0;ue<$.locationSize;ue++)R($.location+ue,xe.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ue=0;ue<$.locationSize;ue++)M($.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let ue=0;ue<$.locationSize;ue++)T($.location+ue,X/$.locationSize,oe,F,k*le,(qe+X/$.locationSize*ue)*le,Te)}else{if(se.isInstancedBufferAttribute){for(let xe=0;xe<$.locationSize;xe++)R($.location+xe,se.meshPerAttribute);U.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let xe=0;xe<$.locationSize;xe++)M($.location+xe);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let xe=0;xe<$.locationSize;xe++)T($.location+xe,X/$.locationSize,oe,F,X*le,X/$.locationSize*xe*le,Te)}}else if(C!==void 0){const F=C[A];if(F!==void 0)switch(F.length){case 2:t.vertexAttrib2fv($.location,F);break;case 3:t.vertexAttrib3fv($.location,F);break;case 4:t.vertexAttrib4fv($.location,F);break;default:t.vertexAttrib1fv($.location,F)}}}}E()}function V(){ee();for(const U in o){const K=o[U];for(const q in K){const J=K[q];for(const D in J)y(J[D].object),delete J[D];delete K[q]}delete o[U]}}function S(U){if(o[U.id]===void 0)return;const K=o[U.id];for(const q in K){const J=K[q];for(const D in J)y(J[D].object),delete J[D];delete K[q]}delete o[U.id]}function N(U){for(const K in o){const q=o[K];if(q[U.id]===void 0)continue;const J=q[U.id];for(const D in J)y(J[D].object),delete J[D];delete q[U.id]}}function ee(){te(),f=!0,u!==l&&(u=l,g(u.object))}function te(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:te,dispose:V,releaseStatesOfGeometry:S,releaseStatesOfProgram:N,initAttributes:x,enableAttribute:M,disableUnusedAttributes:E}}function _b(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function l(f,h,p){if(p===0)return;let g,y;if(r)g=t,y="drawArraysInstanced";else if(g=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",g===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[y](s,f,h,p),n.update(h,s,p)}function u(f,h,p){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let y=0;y<p;y++)this.render(f[y],h[y]);else{g.multiDrawArraysWEBGL(s,f,0,h,0,p);let y=0;for(let _=0;_<p;_++)y+=h[_];n.update(y,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=u}function yb(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,M=a||e.has("OES_texture_float"),R=x&&M,E=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:R,maxSamples:E}}function Sb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const g=h.length!==0||p||i!==0||r;return r=p,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,g){const y=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,x=v*4;let M=d.clippingState||null;l.value=M,M=f(y,p,x,g);for(let R=0;R!==x;++R)M[R]=n[R];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,g,y){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,y!==!0||m===null){const d=g+_*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,M=g;x!==_;++x,M+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Mb(t){let e=new WeakMap;function n(a,o){return o===Yu?a.mapping=Es:o===Ku&&(a.mapping=ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yu||o===Ku)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new LS(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class bb extends jx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,Tp=[.125,.215,.35,.446,.526,.582],fr=20,Vc=new bb,Ap=new Qe;let Wc=null,Xc=0,qc=0;const ur=(1+Math.sqrt(5))/2,qr=1/ur,Cp=[new z(1,1,1),new z(-1,1,1),new z(1,1,-1),new z(-1,1,-1),new z(0,ur,qr),new z(0,ur,-qr),new z(qr,0,ur),new z(-qr,0,ur),new z(ur,qr,0),new z(-ur,qr,0)];class Rp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,Xc,qc),e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),Xc=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ca,format:kn,colorSpace:Qi,depthBuffer:!1},r=Np(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Np(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Eb(s)),this._blurMaterial=wb(s,e,n)}return r}_compileMaterial(e){const n=new fn(this._lodPlanes[0],e);this._renderer.compile(n,Vc)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Ap),f.toneMapping=Hi,f.autoClear=!1;const g=new la({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new fn(new Ba,g);let _=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,_=!0):(g.color.copy(Ap),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,l[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,l[d]),o.lookAt(0,u[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,u[d]));const x=this._cubeSize;Ao(r,v*x,d>2?x:0,x,x),f.setRenderTarget(r),_&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Pp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Ao(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Vc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Cp[(r-1)%Cp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new fn(this._lodPlanes[r],u),p=u.uniforms,g=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*fr-1),_=s/y,m=isFinite(s)?1+Math.floor(f*_):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const d=[];let v=0;for(let T=0;T<fr;++T){const L=T/_,V=Math.exp(-L*L/2);d.push(V),T===0?v+=V:T<m&&(v+=2*V)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=y,p.mipInt.value=x-i;const M=this._sizeLods[r],R=3*M*(r>x-as?r-x+as:0),E=4*(this._cubeSize-M);Ao(n,R,E,3*M,2*M),l.setRenderTarget(n),l.render(h,Vc)}}function Eb(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+Tp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-as?l=Tp[a-t+as-1]:a===0&&(l=0),i.push(l);const u=1/(o-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,y=6,_=3,m=2,d=1,v=new Float32Array(_*y*g),x=new Float32Array(m*y*g),M=new Float32Array(d*y*g);for(let E=0;E<g;E++){const T=E%3*2/3-1,L=E>2?0:-1,V=[T,L,0,T+2/3,L,0,T+2/3,L+1,0,T,L,0,T+2/3,L+1,0,T,L+1,0];v.set(V,_*y*E),x.set(p,m*y*E);const S=[E,E,E,E,E,E];M.set(S,d*y*E)}const R=new An;R.setAttribute("position",new zn(v,_)),R.setAttribute("uv",new zn(x,m)),R.setAttribute("faceIndex",new zn(M,d)),e.push(R),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Np(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wb(t,e,n){const i=new Float32Array(fr),r=new z(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Pp(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function Lp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:rf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ji,depthTest:!1,depthWrite:!1})}function rf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tb(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,u=l===Yu||l===Ku,f=l===Es||l===ws;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Rp(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Rp(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Ab(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Cb(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const _=p.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete r[p.id];const g=s.get(p);g&&(e.remove(g),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function l(h){const p=h.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const y in g){const _=g[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(h){const p=[],g=h.index,y=h.attributes.position;let _=0;if(g!==null){const v=g.array;_=g.version;for(let x=0,M=v.length;x<M;x+=3){const R=v[x+0],E=v[x+1],T=v[x+2];p.push(R,E,E,T,T,R)}}else if(y!==void 0){const v=y.array;_=y.version;for(let x=0,M=v.length/3-1;x<M;x+=3){const R=x+0,E=x+1,T=x+2;p.push(R,E,E,T,T,R)}}else return;const m=new(Px(p)?zx:Ox)(p,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const p=s.get(h);if(p){const g=h.index;g!==null&&p.version<g.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Rb(t,e,n,i){const r=i.isWebGL2;let s;function a(g){s=g}let o,l;function u(g){o=g.type,l=g.bytesPerElement}function f(g,y){t.drawElements(s,y,o,g*l),n.update(y,s,1)}function h(g,y,_){if(_===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,y,o,g*l,_),n.update(y,s,_)}function p(g,y,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(g[d]/l,y[d]);else{m.multiDrawElementsWEBGL(s,y,0,o,g,0,_);let d=0;for(let v=0;v<_;v++)d+=y[v];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function Nb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Pb(t,e){return t[0]-e[0]}function Lb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function Db(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function l(u,f,h){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let m=s.get(f);if(m===void 0||m.count!==_){let te=function(){N.dispose(),s.delete(f),f.removeEventListener("dispose",te)};var g=te;m!==void 0&&m.texture.dispose();const d=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],E=f.morphAttributes.color||[];let T=0;d===!0&&(T=1),v===!0&&(T=2),x===!0&&(T=3);let L=f.attributes.position.count*T,V=1;L>e.maxTextureSize&&(V=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const S=new Float32Array(L*V*4*_),N=new Ux(S,L,V,_);N.type=oi,N.needsUpdate=!0;const ee=T*4;for(let U=0;U<_;U++){const K=M[U],q=R[U],J=E[U],D=L*V*4*U;for(let B=0;B<K.count;B++){const C=B*ee;d===!0&&(a.fromBufferAttribute(K,B),S[D+C+0]=a.x,S[D+C+1]=a.y,S[D+C+2]=a.z,S[D+C+3]=0),v===!0&&(a.fromBufferAttribute(q,B),S[D+C+4]=a.x,S[D+C+5]=a.y,S[D+C+6]=a.z,S[D+C+7]=0),x===!0&&(a.fromBufferAttribute(J,B),S[D+C+8]=a.x,S[D+C+9]=a.y,S[D+C+10]=a.z,S[D+C+11]=J.itemSize===4?a.w:1)}}m={count:_,texture:N,size:new Ye(L,V)},s.set(f,m),f.addEventListener("dispose",te)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let d=0;for(let x=0;x<p.length;x++)d+=p[x];const v=f.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",p)}h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=p===void 0?0:p.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let M=0;M<y;M++)_[M]=[M,0];i[f.id]=_}for(let M=0;M<y;M++){const R=_[M];R[0]=M,R[1]=p[M]}_.sort(Lb);for(let M=0;M<8;M++)M<y&&_[M][1]?(o[M][0]=_[M][0],o[M][1]=_[M][1]):(o[M][0]=Number.MAX_SAFE_INTEGER,o[M][1]=0);o.sort(Pb);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let v=0;for(let M=0;M<8;M++){const R=o[M],E=R[0],T=R[1];E!==Number.MAX_SAFE_INTEGER&&T?(m&&f.getAttribute("morphTarget"+M)!==m[E]&&f.setAttribute("morphTarget"+M,m[E]),d&&f.getAttribute("morphNormal"+M)!==d[E]&&f.setAttribute("morphNormal"+M,d[E]),r[M]=T,v+=T):(m&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),d&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),r[M]=0)}const x=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function Ub(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const p=l.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Wx extends sn{constructor(e,n,i,r,s,a,o,l,u,f){if(f=f!==void 0?f:yr,f!==yr&&f!==Ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===yr&&(i=Li),i===void 0&&f===Ts&&(i=_r),super(null,r,s,a,o,l,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Wt,this.minFilter=l!==void 0?l:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Xx=new sn,qx=new Wx(1,1);qx.compareFunction=Nx;const $x=new Ux,Yx=new mS,Kx=new Hx,Dp=[],Up=[],Ip=new Float32Array(16),kp=new Float32Array(9),Fp=new Float32Array(4);function Ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Dp[r];if(s===void 0&&(s=new Float32Array(r),Dp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Bl(t,e){let n=Up[e];n===void 0&&(n=new Int32Array(e),Up[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function Fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function zb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(bt(n,i))return;Fp.set(i),t.uniformMatrix2fv(this.addr,!1,Fp),Et(n,i)}}function Bb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(bt(n,i))return;kp.set(i),t.uniformMatrix3fv(this.addr,!1,kp),Et(n,i)}}function jb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(bt(n,i))return;Ip.set(i),t.uniformMatrix4fv(this.addr,!1,Ip),Et(n,i)}}function Hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function Xb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function $b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function Yb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function Kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?qx:Xx;n.setTexture2D(e||s,r)}function Zb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Yx,r)}function Qb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Kx,r)}function Jb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$x,r)}function eE(t){switch(t){case 5126:return Ib;case 35664:return kb;case 35665:return Fb;case 35666:return Ob;case 35674:return zb;case 35675:return Bb;case 35676:return jb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Vb;case 35669:case 35673:return Wb;case 5125:return Xb;case 36294:return qb;case 36295:return $b;case 36296:return Yb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Zb;case 35680:case 36300:case 36308:case 36293:return Qb;case 36289:case 36303:case 36311:case 36292:return Jb}}function tE(t,e){t.uniform1fv(this.addr,e)}function nE(t,e){const n=Ls(e,this.size,2);t.uniform2fv(this.addr,n)}function iE(t,e){const n=Ls(e,this.size,3);t.uniform3fv(this.addr,n)}function rE(t,e){const n=Ls(e,this.size,4);t.uniform4fv(this.addr,n)}function sE(t,e){const n=Ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function aE(t,e){const n=Ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function oE(t,e){const n=Ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function lE(t,e){t.uniform1iv(this.addr,e)}function cE(t,e){t.uniform2iv(this.addr,e)}function uE(t,e){t.uniform3iv(this.addr,e)}function dE(t,e){t.uniform4iv(this.addr,e)}function fE(t,e){t.uniform1uiv(this.addr,e)}function hE(t,e){t.uniform2uiv(this.addr,e)}function pE(t,e){t.uniform3uiv(this.addr,e)}function mE(t,e){t.uniform4uiv(this.addr,e)}function gE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Xx,s[a])}function xE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Yx,s[a])}function vE(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Kx,s[a])}function _E(t,e,n){const i=this.cache,r=e.length,s=Bl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||$x,s[a])}function yE(t){switch(t){case 5126:return tE;case 35664:return nE;case 35665:return iE;case 35666:return rE;case 35674:return sE;case 35675:return aE;case 35676:return oE;case 5124:case 35670:return lE;case 35667:case 35671:return cE;case 35668:case 35672:return uE;case 35669:case 35673:return dE;case 5125:return fE;case 36294:return hE;case 36295:return pE;case 36296:return mE;case 35678:case 36198:case 36298:case 36306:case 35682:return gE;case 35679:case 36299:case 36307:return xE;case 35680:case 36300:case 36308:case 36293:return vE;case 36289:case 36303:case 36311:case 36292:return _E}}class SE{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=eE(n.type)}}class ME{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=yE(n.type)}}class bE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const $c=/(\w+)(\])?(\[|\.)?/g;function Op(t,e){t.seq.push(e),t.map[e.id]=e}function EE(t,e,n){const i=t.name,r=i.length;for($c.lastIndex=0;;){const s=$c.exec(i),a=$c.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){Op(n,u===void 0?new SE(o,t,e):new ME(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new bE(o),Op(n,h)),n=h}}}class Ho{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);EE(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function zp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const wE=37297;let TE=0;function AE(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function CE(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===xl&&n===gl?i="LinearDisplayP3ToLinearSRGB":e===gl&&n===xl&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case Fl:return[i,"LinearTransferOETF"];case Vn:case nf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Bp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+AE(t.getShaderSource(e),a)}else return r}function RE(t,e){const n=CE(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function NE(t,e){let n;switch(e){case ky:n="Linear";break;case Fy:n="Reinhard";break;case Oy:n="OptimizedCineon";break;case zy:n="ACESFilmic";break;case jy:n="AgX";break;case Hy:n="Neutral";break;case By:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function PE(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function LE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function DE(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function UE(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function os(t){return t!==""}function jp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Hp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const IE=/^[ \t]*#include +<([\w\d./]+)>/gm;function nd(t){return t.replace(IE,FE)}const kE=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function FE(t,e){let n=je[e];if(n===void 0){const i=kE.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nd(n)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gp(t){return t.replace(OE,zE)}function zE(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Vp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function BE(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yx?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function jE(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case kl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function HE(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function GE(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sx:e="ENVMAP_BLENDING_MULTIPLY";break;case Uy:e="ENVMAP_BLENDING_MIX";break;case Iy:e="ENVMAP_BLENDING_ADD";break}return e}function VE(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function WE(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=BE(n),u=jE(n),f=HE(n),h=GE(n),p=VE(n),g=n.isWebGL2?"":PE(n),y=LE(n),_=DE(s),m=r.createProgram();let d,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(os).join(`
`),d.length>0&&(d+=`
`),v=[g,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(os).join(`
`),v.length>0&&(v+=`
`)):(d=[Vp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),v=[g,Vp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?je.tonemapping_pars_fragment:"",n.toneMapping!==Hi?NE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,RE("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),a=nd(a),a=jp(a,n),a=Hp(a,n),o=nd(o),o=jp(o,n),o=Hp(o,n),a=Gp(a),o=Gp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const M=x+d+a,R=x+v+o,E=zp(r,r.VERTEX_SHADER,M),T=zp(r,r.FRAGMENT_SHADER,R);r.attachShader(m,E),r.attachShader(m,T),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(ee){if(t.debug.checkShaderErrors){const te=r.getProgramInfoLog(m).trim(),U=r.getShaderInfoLog(E).trim(),K=r.getShaderInfoLog(T).trim();let q=!0,J=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,E,T);else{const D=Bp(r,E,"vertex"),B=Bp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+te+`
`+D+`
`+B)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(U===""||K==="")&&(J=!1);J&&(ee.diagnostics={runnable:q,programLog:te,vertexShader:{log:U,prefix:d},fragmentShader:{log:K,prefix:v}})}r.deleteShader(E),r.deleteShader(T),V=new Ho(r,m),S=UE(r,m)}let V;this.getUniforms=function(){return V===void 0&&L(this),V};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=r.getProgramParameter(m,wE)),N},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=TE++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}let XE=0;class qE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $E(e),n.set(e,i)),i}}class $E{constructor(e){this.id=XE++,this.code=e,this.usedTimes=0}}function YE(t,e,n,i,r,s,a){const o=new kx,l=new qE,u=new Set,f=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,g=r.vertexTextures;let y=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,N,ee,te,U){const K=te.fog,q=U.geometry,J=S.isMeshStandardMaterial?te.environment:null,D=(S.isMeshStandardMaterial?n:e).get(S.envMap||J),B=D&&D.mapping===kl?D.image.height:null,C=_[S.type];S.precision!==null&&(y=r.getMaxPrecision(S.precision),y!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",y,"instead."));const A=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,$=A!==void 0?A.length:0;let se=0;q.morphAttributes.position!==void 0&&(se=1),q.morphAttributes.normal!==void 0&&(se=2),q.morphAttributes.color!==void 0&&(se=3);let F,X,Q,ie;if(C){const tt=Wn[C];F=tt.vertexShader,X=tt.fragmentShader}else F=S.vertexShader,X=S.fragmentShader,l.update(S),Q=l.getVertexShaderID(S),ie=l.getFragmentShaderID(S);const oe=t.getRenderTarget(),le=U.isInstancedMesh===!0,Te=U.isBatchedMesh===!0,xe=!!S.map,k=!!S.matcap,qe=!!D,ue=!!S.aoMap,we=!!S.lightMap,ye=!!S.bumpMap,Pe=!!S.normalMap,Ce=!!S.displacementMap,Le=!!S.emissiveMap,Ze=!!S.metalnessMap,P=!!S.roughnessMap,b=S.anisotropy>0,Y=S.clearcoat>0,Z=S.iridescence>0,ae=S.sheen>0,ne=S.transmission>0,ke=b&&!!S.anisotropyMap,Re=Y&&!!S.clearcoatMap,de=Y&&!!S.clearcoatNormalMap,pe=Y&&!!S.clearcoatRoughnessMap,Ue=Z&&!!S.iridescenceMap,ce=Z&&!!S.iridescenceThicknessMap,pt=ae&&!!S.sheenColorMap,Ve=ae&&!!S.sheenRoughnessMap,Ae=!!S.specularMap,Se=!!S.specularColorMap,Me=!!S.specularIntensityMap,$e=ne&&!!S.transmissionMap,Oe=ne&&!!S.thicknessMap,ot=!!S.gradientMap,I=!!S.alphaMap,me=S.alphaTest>0,H=!!S.alphaHash,fe=!!S.extensions;let ge=Hi;S.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ge=t.toneMapping);const Xe={isWebGL2:h,shaderID:C,shaderType:S.type,shaderName:S.name,vertexShader:F,fragmentShader:X,defines:S.defines,customVertexShaderID:Q,customFragmentShaderID:ie,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:y,batching:Te,instancing:le,instancingColor:le&&U.instanceColor!==null,instancingMorph:le&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Qi,alphaToCoverage:!!S.alphaToCoverage,map:xe,matcap:k,envMap:qe,envMapMode:qe&&D.mapping,envMapCubeUVHeight:B,aoMap:ue,lightMap:we,bumpMap:ye,normalMap:Pe,displacementMap:g&&Ce,emissiveMap:Le,normalMapObjectSpace:Pe&&S.normalMapType===eS,normalMapTangentSpace:Pe&&S.normalMapType===Jy,metalnessMap:Ze,roughnessMap:P,anisotropy:b,anisotropyMap:ke,clearcoat:Y,clearcoatMap:Re,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:Z,iridescenceMap:Ue,iridescenceThicknessMap:ce,sheen:ae,sheenColorMap:pt,sheenRoughnessMap:Ve,specularMap:Ae,specularColorMap:Se,specularIntensityMap:Me,transmission:ne,transmissionMap:$e,thicknessMap:Oe,gradientMap:ot,opaque:S.transparent===!1&&S.blending===ms&&S.alphaToCoverage===!1,alphaMap:I,alphaTest:me,alphaHash:H,combine:S.combine,mapUv:xe&&m(S.map.channel),aoMapUv:ue&&m(S.aoMap.channel),lightMapUv:we&&m(S.lightMap.channel),bumpMapUv:ye&&m(S.bumpMap.channel),normalMapUv:Pe&&m(S.normalMap.channel),displacementMapUv:Ce&&m(S.displacementMap.channel),emissiveMapUv:Le&&m(S.emissiveMap.channel),metalnessMapUv:Ze&&m(S.metalnessMap.channel),roughnessMapUv:P&&m(S.roughnessMap.channel),anisotropyMapUv:ke&&m(S.anisotropyMap.channel),clearcoatMapUv:Re&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(S.sheenRoughnessMap.channel),specularMapUv:Ae&&m(S.specularMap.channel),specularColorMapUv:Se&&m(S.specularColorMap.channel),specularIntensityMapUv:Me&&m(S.specularIntensityMap.channel),transmissionMapUv:$e&&m(S.transmissionMap.channel),thicknessMapUv:Oe&&m(S.thicknessMap.channel),alphaMapUv:I&&m(S.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Pe||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(xe||I),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:se,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:ge,useLegacyLights:t._useLegacyLights,decodeVideoTexture:xe&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ai,flipSided:S.side===rn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:fe&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function v(S){const N=[];if(S.shaderID?N.push(S.shaderID):(N.push(S.customVertexShaderID),N.push(S.customFragmentShaderID)),S.defines!==void 0)for(const ee in S.defines)N.push(ee),N.push(S.defines[ee]);return S.isRawShaderMaterial===!1&&(x(N,S),M(N,S),N.push(t.outputColorSpace)),N.push(S.customProgramCacheKey),N.join()}function x(S,N){S.push(N.precision),S.push(N.outputColorSpace),S.push(N.envMapMode),S.push(N.envMapCubeUVHeight),S.push(N.mapUv),S.push(N.alphaMapUv),S.push(N.lightMapUv),S.push(N.aoMapUv),S.push(N.bumpMapUv),S.push(N.normalMapUv),S.push(N.displacementMapUv),S.push(N.emissiveMapUv),S.push(N.metalnessMapUv),S.push(N.roughnessMapUv),S.push(N.anisotropyMapUv),S.push(N.clearcoatMapUv),S.push(N.clearcoatNormalMapUv),S.push(N.clearcoatRoughnessMapUv),S.push(N.iridescenceMapUv),S.push(N.iridescenceThicknessMapUv),S.push(N.sheenColorMapUv),S.push(N.sheenRoughnessMapUv),S.push(N.specularMapUv),S.push(N.specularColorMapUv),S.push(N.specularIntensityMapUv),S.push(N.transmissionMapUv),S.push(N.thicknessMapUv),S.push(N.combine),S.push(N.fogExp2),S.push(N.sizeAttenuation),S.push(N.morphTargetsCount),S.push(N.morphAttributeCount),S.push(N.numDirLights),S.push(N.numPointLights),S.push(N.numSpotLights),S.push(N.numSpotLightMaps),S.push(N.numHemiLights),S.push(N.numRectAreaLights),S.push(N.numDirLightShadows),S.push(N.numPointLightShadows),S.push(N.numSpotLightShadows),S.push(N.numSpotLightShadowsWithMaps),S.push(N.numLightProbes),S.push(N.shadowMapType),S.push(N.toneMapping),S.push(N.numClippingPlanes),S.push(N.numClipIntersection),S.push(N.depthPacking)}function M(S,N){o.disableAll(),N.isWebGL2&&o.enable(0),N.supportsVertexTextures&&o.enable(1),N.instancing&&o.enable(2),N.instancingColor&&o.enable(3),N.instancingMorph&&o.enable(4),N.matcap&&o.enable(5),N.envMap&&o.enable(6),N.normalMapObjectSpace&&o.enable(7),N.normalMapTangentSpace&&o.enable(8),N.clearcoat&&o.enable(9),N.iridescence&&o.enable(10),N.alphaTest&&o.enable(11),N.vertexColors&&o.enable(12),N.vertexAlphas&&o.enable(13),N.vertexUv1s&&o.enable(14),N.vertexUv2s&&o.enable(15),N.vertexUv3s&&o.enable(16),N.vertexTangents&&o.enable(17),N.anisotropy&&o.enable(18),N.alphaHash&&o.enable(19),N.batching&&o.enable(20),S.push(o.mask),o.disableAll(),N.fog&&o.enable(0),N.useFog&&o.enable(1),N.flatShading&&o.enable(2),N.logarithmicDepthBuffer&&o.enable(3),N.skinning&&o.enable(4),N.morphTargets&&o.enable(5),N.morphNormals&&o.enable(6),N.morphColors&&o.enable(7),N.premultipliedAlpha&&o.enable(8),N.shadowMapEnabled&&o.enable(9),N.useLegacyLights&&o.enable(10),N.doubleSided&&o.enable(11),N.flipSided&&o.enable(12),N.useDepthPacking&&o.enable(13),N.dithering&&o.enable(14),N.transmission&&o.enable(15),N.sheen&&o.enable(16),N.opaque&&o.enable(17),N.pointsUvs&&o.enable(18),N.decodeVideoTexture&&o.enable(19),N.alphaToCoverage&&o.enable(20),S.push(o.mask)}function R(S){const N=_[S.type];let ee;if(N){const te=Wn[N];ee=CS.clone(te.uniforms)}else ee=S.uniforms;return ee}function E(S,N){let ee;for(let te=0,U=f.length;te<U;te++){const K=f[te];if(K.cacheKey===N){ee=K,++ee.usedTimes;break}}return ee===void 0&&(ee=new WE(t,N,S,s),f.push(ee)),ee}function T(S){if(--S.usedTimes===0){const N=f.indexOf(S);f[N]=f[f.length-1],f.pop(),S.destroy()}}function L(S){l.remove(S)}function V(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:R,acquireProgram:E,releaseProgram:T,releaseShaderCache:L,programs:f,dispose:V}}function KE(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function ZE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Wp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Xp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,g,y,_,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:g,groupOrder:y,renderOrder:h.renderOrder,z:_,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=g,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,p,g,y,_,m){const d=a(h,p,g,y,_,m);g.transmission>0?i.push(d):g.transparent===!0?r.push(d):n.push(d)}function l(h,p,g,y,_,m){const d=a(h,p,g,y,_,m);g.transmission>0?i.unshift(d):g.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||ZE),i.length>1&&i.sort(p||Wp),r.length>1&&r.sort(p||Wp)}function f(){for(let h=e,p=t.length;h<p;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function QE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Xp,t.set(i,[a])):r>=s.length?(a=new Xp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function JE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new z,color:new Qe};break;case"SpotLight":n={position:new z,direction:new z,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new z,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new z,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new z,halfWidth:new z,halfHeight:new z};break}return t[e.id]=n,n}}}function ew(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let tw=0;function nw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function iw(t,e){const n=new JE,i=ew(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new z);const s=new z,a=new yt,o=new yt;function l(f,h){let p=0,g=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,m=0,d=0,v=0,x=0,M=0,R=0,E=0,T=0,L=0,V=0;f.sort(nw);const S=h===!0?Math.PI:1;for(let ee=0,te=f.length;ee<te;ee++){const U=f[ee],K=U.color,q=U.intensity,J=U.distance,D=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)p+=K.r*q*S,g+=K.g*q*S,y+=K.b*q*S;else if(U.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(U.sh.coefficients[B],q);V++}else if(U.isDirectionalLight){const B=n.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*S),U.castShadow){const C=U.shadow,A=i.get(U);A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,r.directionalShadow[_]=A,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=U.shadow.matrix,M++}r.directional[_]=B,_++}else if(U.isSpotLight){const B=n.get(U);B.position.setFromMatrixPosition(U.matrixWorld),B.color.copy(K).multiplyScalar(q*S),B.distance=J,B.coneCos=Math.cos(U.angle),B.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),B.decay=U.decay,r.spot[d]=B;const C=U.shadow;if(U.map&&(r.spotLightMap[T]=U.map,T++,C.updateMatrices(U),U.castShadow&&L++),r.spotLightMatrix[d]=C.matrix,U.castShadow){const A=i.get(U);A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,r.spotShadow[d]=A,r.spotShadowMap[d]=D,E++}d++}else if(U.isRectAreaLight){const B=n.get(U);B.color.copy(K).multiplyScalar(q),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),r.rectArea[v]=B,v++}else if(U.isPointLight){const B=n.get(U);if(B.color.copy(U.color).multiplyScalar(U.intensity*S),B.distance=U.distance,B.decay=U.decay,U.castShadow){const C=U.shadow,A=i.get(U);A.shadowBias=C.bias,A.shadowNormalBias=C.normalBias,A.shadowRadius=C.radius,A.shadowMapSize=C.mapSize,A.shadowCameraNear=C.camera.near,A.shadowCameraFar=C.camera.far,r.pointShadow[m]=A,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=U.shadow.matrix,R++}r.point[m]=B,m++}else if(U.isHemisphereLight){const B=n.get(U);B.skyColor.copy(U.color).multiplyScalar(q*S),B.groundColor.copy(U.groundColor).multiplyScalar(q*S),r.hemi[x]=B,x++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=g,r.ambient[2]=y;const N=r.hash;(N.directionalLength!==_||N.pointLength!==m||N.spotLength!==d||N.rectAreaLength!==v||N.hemiLength!==x||N.numDirectionalShadows!==M||N.numPointShadows!==R||N.numSpotShadows!==E||N.numSpotMaps!==T||N.numLightProbes!==V)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=M,r.directionalShadowMap.length=M,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=M,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=E+T-L,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=V,N.directionalLength=_,N.pointLength=m,N.spotLength=d,N.rectAreaLength=v,N.hemiLength=x,N.numDirectionalShadows=M,N.numPointShadows=R,N.numSpotShadows=E,N.numSpotMaps=T,N.numLightProbes=V,r.version=tw++)}function u(f,h){let p=0,g=0,y=0,_=0,m=0;const d=h.matrixWorldInverse;for(let v=0,x=f.length;v<x;v++){const M=f[v];if(M.isDirectionalLight){const R=r.directional[p];R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),p++}else if(M.isSpotLight){const R=r.spot[y];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),y++}else if(M.isRectAreaLight){const R=r.rectArea[_];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(M.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(M.width*.5,0,0),R.halfHeight.set(0,M.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(M.matrixWorld),R.position.applyMatrix4(d),g++}else if(M.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(M.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:l,setupView:u,state:r}}function qp(t,e){const n=new iw(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o}}function rw(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new qp(t,e),n.set(s,[l])):a>=o.length?(l=new qp(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class sw extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class aw extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ow=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,lw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cw(t,e,n){let i=new Gx;const r=new Ye,s=new Ye,a=new Pt,o=new sw({depthPacking:Qy}),l=new aw,u={},f=n.maxTextureSize,h={[qi]:rn,[rn]:qi,[ai]:ai},p=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:ow,fragmentShader:lw}),g=p.clone();g.defines.HORIZONTAL_PASS=1;const y=new An;y.setAttribute("position",new zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fn(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yx;let d=this.type;this.render=function(E,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const V=t.getRenderTarget(),S=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),ee=t.state;ee.setBlending(ji),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const te=d!==ii&&this.type===ii,U=d===ii&&this.type!==ii;for(let K=0,q=E.length;K<q;K++){const J=E[K],D=J.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const B=D.getFrameExtents();if(r.multiply(B),s.copy(D.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/B.x),r.x=s.x*B.x,D.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/B.y),r.y=s.y*B.y,D.mapSize.y=s.y)),D.map===null||te===!0||U===!0){const A=this.type!==ii?{minFilter:Wt,magFilter:Wt}:{};D.map!==null&&D.map.dispose(),D.map=new Tr(r.x,r.y,A),D.map.texture.name=J.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const C=D.getViewportCount();for(let A=0;A<C;A++){const $=D.getViewport(A);a.set(s.x*$.x,s.y*$.y,s.x*$.z,s.y*$.w),ee.viewport(a),D.updateMatrices(J,A),i=D.getFrustum(),M(T,L,D.camera,J,this.type)}D.isPointLightShadow!==!0&&this.type===ii&&v(D,L),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(V,S,N)};function v(E,T){const L=e.update(_);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,g.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,g.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Tr(r.x,r.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(T,null,L,p,_,null),g.uniforms.shadow_pass.value=E.mapPass.texture,g.uniforms.resolution.value=E.mapSize,g.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(T,null,L,g,_,null)}function x(E,T,L,V){let S=null;const N=L.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)S=N;else if(S=L.isPointLight===!0?l:o,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const ee=S.uuid,te=T.uuid;let U=u[ee];U===void 0&&(U={},u[ee]=U);let K=U[te];K===void 0&&(K=S.clone(),U[te]=K,T.addEventListener("dispose",R)),S=K}if(S.visible=T.visible,S.wireframe=T.wireframe,V===ii?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,L.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const ee=t.properties.get(S);ee.light=L}return S}function M(E,T,L,V,S){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===ii)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,E.matrixWorld);const te=e.update(E),U=E.material;if(Array.isArray(U)){const K=te.groups;for(let q=0,J=K.length;q<J;q++){const D=K[q],B=U[D.materialIndex];if(B&&B.visible){const C=x(E,B,V,S);E.onBeforeShadow(t,E,T,L,te,C,D),t.renderBufferDirect(L,null,te,C,E,D),E.onAfterShadow(t,E,T,L,te,C,D)}}}else if(U.visible){const K=x(E,U,V,S);E.onBeforeShadow(t,E,T,L,te,K,null),t.renderBufferDirect(L,null,te,K,E,null),E.onAfterShadow(t,E,T,L,te,K,null)}}const ee=E.children;for(let te=0,U=ee.length;te<U;te++)M(ee[te],T,L,V,S)}function R(E){E.target.removeEventListener("dispose",R);for(const L in u){const V=u[L],S=E.target.uuid;S in V&&(V[S].dispose(),delete V[S])}}}function uw(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const me=new Pt;let H=null;const fe=new Pt(0,0,0,0);return{setMask:function(ge){H!==ge&&!I&&(t.colorMask(ge,ge,ge,ge),H=ge)},setLocked:function(ge){I=ge},setClear:function(ge,Xe,tt,Rt,xn){xn===!0&&(ge*=Rt,Xe*=Rt,tt*=Rt),me.set(ge,Xe,tt,Rt),fe.equals(me)===!1&&(t.clearColor(ge,Xe,tt,Rt),fe.copy(me))},reset:function(){I=!1,H=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,me=null,H=null,fe=null;return{setTest:function(ge){ge?le(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(ge){me!==ge&&!I&&(t.depthMask(ge),me=ge)},setFunc:function(ge){if(H!==ge){switch(ge){case Ay:t.depthFunc(t.NEVER);break;case Cy:t.depthFunc(t.ALWAYS);break;case Ry:t.depthFunc(t.LESS);break;case pl:t.depthFunc(t.LEQUAL);break;case Ny:t.depthFunc(t.EQUAL);break;case Py:t.depthFunc(t.GEQUAL);break;case Ly:t.depthFunc(t.GREATER);break;case Dy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}H=ge}},setLocked:function(ge){I=ge},setClear:function(ge){fe!==ge&&(t.clearDepth(ge),fe=ge)},reset:function(){I=!1,me=null,H=null,fe=null}}}function a(){let I=!1,me=null,H=null,fe=null,ge=null,Xe=null,tt=null,Rt=null,xn=null;return{setTest:function(nt){I||(nt?le(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(nt){me!==nt&&!I&&(t.stencilMask(nt),me=nt)},setFunc:function(nt,Ht,jn){(H!==nt||fe!==Ht||ge!==jn)&&(t.stencilFunc(nt,Ht,jn),H=nt,fe=Ht,ge=jn)},setOp:function(nt,Ht,jn){(Xe!==nt||tt!==Ht||Rt!==jn)&&(t.stencilOp(nt,Ht,jn),Xe=nt,tt=Ht,Rt=jn)},setLocked:function(nt){I=nt},setClear:function(nt){xn!==nt&&(t.clearStencil(nt),xn=nt)},reset:function(){I=!1,me=null,H=null,fe=null,ge=null,Xe=null,tt=null,Rt=null,xn=null}}}const o=new r,l=new s,u=new a,f=new WeakMap,h=new WeakMap;let p={},g={},y=new WeakMap,_=[],m=null,d=!1,v=null,x=null,M=null,R=null,E=null,T=null,L=null,V=new Qe(0,0,0),S=0,N=!1,ee=null,te=null,U=null,K=null,q=null;const J=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,B=0;const C=t.getParameter(t.VERSION);C.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(C)[1]),D=B>=1):C.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),D=B>=2);let A=null,$={};const se=t.getParameter(t.SCISSOR_BOX),F=t.getParameter(t.VIEWPORT),X=new Pt().fromArray(se),Q=new Pt().fromArray(F);function ie(I,me,H,fe){const ge=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(I,Xe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<H;tt++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(me+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return Xe}const oe={};oe[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),le(t.DEPTH_TEST),l.setFunc(pl),Ce(!1),Le(Ah),le(t.CULL_FACE),ye(ji);function le(I){p[I]!==!0&&(t.enable(I),p[I]=!0)}function Te(I){p[I]!==!1&&(t.disable(I),p[I]=!1)}function xe(I,me){return g[I]!==me?(t.bindFramebuffer(I,me),g[I]=me,i&&(I===t.DRAW_FRAMEBUFFER&&(g[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(g[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function k(I,me){let H=_,fe=!1;if(I){H=y.get(me),H===void 0&&(H=[],y.set(me,H));const ge=I.textures;if(H.length!==ge.length||H[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,tt=ge.length;Xe<tt;Xe++)H[Xe]=t.COLOR_ATTACHMENT0+Xe;H.length=ge.length,fe=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,fe=!0);if(fe)if(n.isWebGL2)t.drawBuffers(H);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(H);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function qe(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const ue={[dr]:t.FUNC_ADD,[fy]:t.FUNC_SUBTRACT,[hy]:t.FUNC_REVERSE_SUBTRACT};if(i)ue[Nh]=t.MIN,ue[Ph]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ue[Nh]=I.MIN_EXT,ue[Ph]=I.MAX_EXT)}const we={[py]:t.ZERO,[my]:t.ONE,[gy]:t.SRC_COLOR,[qu]:t.SRC_ALPHA,[My]:t.SRC_ALPHA_SATURATE,[yy]:t.DST_COLOR,[vy]:t.DST_ALPHA,[xy]:t.ONE_MINUS_SRC_COLOR,[$u]:t.ONE_MINUS_SRC_ALPHA,[Sy]:t.ONE_MINUS_DST_COLOR,[_y]:t.ONE_MINUS_DST_ALPHA,[by]:t.CONSTANT_COLOR,[Ey]:t.ONE_MINUS_CONSTANT_COLOR,[wy]:t.CONSTANT_ALPHA,[Ty]:t.ONE_MINUS_CONSTANT_ALPHA};function ye(I,me,H,fe,ge,Xe,tt,Rt,xn,nt){if(I===ji){d===!0&&(Te(t.BLEND),d=!1);return}if(d===!1&&(le(t.BLEND),d=!0),I!==dy){if(I!==v||nt!==N){if((x!==dr||E!==dr)&&(t.blendEquation(t.FUNC_ADD),x=dr,E=dr),nt)switch(I){case ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xu:t.blendFunc(t.ONE,t.ONE);break;case Ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Xu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Ch:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Rh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}M=null,R=null,T=null,L=null,V.set(0,0,0),S=0,v=I,N=nt}return}ge=ge||me,Xe=Xe||H,tt=tt||fe,(me!==x||ge!==E)&&(t.blendEquationSeparate(ue[me],ue[ge]),x=me,E=ge),(H!==M||fe!==R||Xe!==T||tt!==L)&&(t.blendFuncSeparate(we[H],we[fe],we[Xe],we[tt]),M=H,R=fe,T=Xe,L=tt),(Rt.equals(V)===!1||xn!==S)&&(t.blendColor(Rt.r,Rt.g,Rt.b,xn),V.copy(Rt),S=xn),v=I,N=!1}function Pe(I,me){I.side===ai?Te(t.CULL_FACE):le(t.CULL_FACE);let H=I.side===rn;me&&(H=!H),Ce(H),I.blending===ms&&I.transparent===!1?ye(ji):ye(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);const fe=I.stencilWrite;u.setTest(fe),fe&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),P(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){ee!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),ee=I)}function Le(I){I!==ly?(le(t.CULL_FACE),I!==te&&(I===Ah?t.cullFace(t.BACK):I===cy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),te=I}function Ze(I){I!==U&&(D&&t.lineWidth(I),U=I)}function P(I,me,H){I?(le(t.POLYGON_OFFSET_FILL),(K!==me||q!==H)&&(t.polygonOffset(me,H),K=me,q=H)):Te(t.POLYGON_OFFSET_FILL)}function b(I){I?le(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function Y(I){I===void 0&&(I=t.TEXTURE0+J-1),A!==I&&(t.activeTexture(I),A=I)}function Z(I,me,H){H===void 0&&(A===null?H=t.TEXTURE0+J-1:H=A);let fe=$[H];fe===void 0&&(fe={type:void 0,texture:void 0},$[H]=fe),(fe.type!==I||fe.texture!==me)&&(A!==H&&(t.activeTexture(H),A=H),t.bindTexture(I,me||oe[I]),fe.type=I,fe.texture=me)}function ae(){const I=$[A];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Se(I){X.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),X.copy(I))}function Me(I){Q.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Q.copy(I))}function $e(I,me){let H=h.get(me);H===void 0&&(H=new WeakMap,h.set(me,H));let fe=H.get(I);fe===void 0&&(fe=t.getUniformBlockIndex(me,I.name),H.set(I,fe))}function Oe(I,me){const fe=h.get(me).get(I);f.get(me)!==fe&&(t.uniformBlockBinding(me,fe,I.__bindingPointIndex),f.set(me,fe))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},A=null,$={},g={},y=new WeakMap,_=[],m=null,d=!1,v=null,x=null,M=null,R=null,E=null,T=null,L=null,V=new Qe(0,0,0),S=0,N=!1,ee=null,te=null,U=null,K=null,q=null,X.set(0,0,t.canvas.width,t.canvas.height),Q.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:le,disable:Te,bindFramebuffer:xe,drawBuffers:k,useProgram:qe,setBlending:ye,setMaterial:Pe,setFlipSided:Ce,setCullFace:Le,setLineWidth:Ze,setPolygonOffset:P,setScissorTest:b,activeTexture:Y,bindTexture:Z,unbindTexture:ae,compressedTexImage2D:ne,compressedTexImage3D:ke,texImage2D:Ve,texImage3D:Ae,updateUBOMapping:$e,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:pt,texSubImage2D:Re,texSubImage3D:de,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ue,scissor:Se,viewport:Me,reset:ot}}function dw(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ye,h=new WeakMap;let p;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,b){return y?new OffscreenCanvas(P,b):_l("canvas")}function m(P,b,Y,Z){let ae=1;const ne=Ze(P);if((ne.width>Z||ne.height>Z)&&(ae=Z/Math.max(ne.width,ne.height)),ae<1||b===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ke=b?td:Math.floor,Re=ke(ae*ne.width),de=ke(ae*ne.height);p===void 0&&(p=_(Re,de));const pe=Y?_(Re,de):p;return pe.width=Re,pe.height=de,pe.getContext("2d").drawImage(P,0,0,Re,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Re+"x"+de+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function d(P){const b=Ze(P);return op(b.width)&&op(b.height)}function v(P){return o?!1:P.wrapS!==In||P.wrapT!==In||P.minFilter!==Wt&&P.minFilter!==Kt}function x(P,b){return P.generateMipmaps&&b&&P.minFilter!==Wt&&P.minFilter!==Kt}function M(P){t.generateMipmap(P)}function R(P,b,Y,Z,ae=!1){if(o===!1)return b;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=b;if(b===t.RED&&(Y===t.FLOAT&&(ne=t.R32F),Y===t.HALF_FLOAT&&(ne=t.R16F),Y===t.UNSIGNED_BYTE&&(ne=t.R8)),b===t.RED_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ne=t.R8UI),Y===t.UNSIGNED_SHORT&&(ne=t.R16UI),Y===t.UNSIGNED_INT&&(ne=t.R32UI),Y===t.BYTE&&(ne=t.R8I),Y===t.SHORT&&(ne=t.R16I),Y===t.INT&&(ne=t.R32I)),b===t.RG&&(Y===t.FLOAT&&(ne=t.RG32F),Y===t.HALF_FLOAT&&(ne=t.RG16F),Y===t.UNSIGNED_BYTE&&(ne=t.RG8)),b===t.RG_INTEGER&&(Y===t.UNSIGNED_BYTE&&(ne=t.RG8UI),Y===t.UNSIGNED_SHORT&&(ne=t.RG16UI),Y===t.UNSIGNED_INT&&(ne=t.RG32UI),Y===t.BYTE&&(ne=t.RG8I),Y===t.SHORT&&(ne=t.RG16I),Y===t.INT&&(ne=t.RG32I)),b===t.RGBA){const ke=ae?ml:et.getTransfer(Z);Y===t.FLOAT&&(ne=t.RGBA32F),Y===t.HALF_FLOAT&&(ne=t.RGBA16F),Y===t.UNSIGNED_BYTE&&(ne=ke===st?t.SRGB8_ALPHA8:t.RGBA8),Y===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),Y===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(P,b,Y){return x(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==Kt?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function T(P){return P===Wt||P===Lh||P===Hs?t.NEAREST:t.LINEAR}function L(P){const b=P.target;b.removeEventListener("dispose",L),S(b),b.isVideoTexture&&h.delete(b)}function V(P){const b=P.target;b.removeEventListener("dispose",V),ee(b)}function S(P){const b=i.get(P);if(b.__webglInit===void 0)return;const Y=P.source,Z=g.get(Y);if(Z){const ae=Z[b.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&N(P),Object.keys(Z).length===0&&g.delete(Y)}i.remove(P)}function N(P){const b=i.get(P);t.deleteTexture(b.__webglTexture);const Y=P.source,Z=g.get(Y);delete Z[b.__cacheKey],a.memory.textures--}function ee(P){const b=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(b.__webglFramebuffer[Z]))for(let ae=0;ae<b.__webglFramebuffer[Z].length;ae++)t.deleteFramebuffer(b.__webglFramebuffer[Z][ae]);else t.deleteFramebuffer(b.__webglFramebuffer[Z]);b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer[Z])}else{if(Array.isArray(b.__webglFramebuffer))for(let Z=0;Z<b.__webglFramebuffer.length;Z++)t.deleteFramebuffer(b.__webglFramebuffer[Z]);else t.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&t.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&t.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Z=0;Z<b.__webglColorRenderbuffer.length;Z++)b.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(b.__webglColorRenderbuffer[Z]);b.__webglDepthRenderbuffer&&t.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Y=P.textures;for(let Z=0,ae=Y.length;Z<ae;Z++){const ne=i.get(Y[Z]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(Y[Z])}i.remove(P)}let te=0;function U(){te=0}function K(){const P=te;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),te+=1,P}function q(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function J(P,b){const Y=i.get(P);if(P.isVideoTexture&&Ce(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const Z=P.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(Y,P,b);return}}n.bindTexture(t.TEXTURE_2D,Y.__webglTexture,t.TEXTURE0+b)}function D(P,b){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){Q(Y,P,b);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Y.__webglTexture,t.TEXTURE0+b)}function B(P,b){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){Q(Y,P,b);return}n.bindTexture(t.TEXTURE_3D,Y.__webglTexture,t.TEXTURE0+b)}function C(P,b){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ie(Y,P,b);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture,t.TEXTURE0+b)}const A={[Zu]:t.REPEAT,[In]:t.CLAMP_TO_EDGE,[Qu]:t.MIRRORED_REPEAT},$={[Wt]:t.NEAREST,[Lh]:t.NEAREST_MIPMAP_NEAREST,[Hs]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[xc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},se={[tS]:t.NEVER,[oS]:t.ALWAYS,[nS]:t.LESS,[Nx]:t.LEQUAL,[iS]:t.EQUAL,[aS]:t.GEQUAL,[rS]:t.GREATER,[sS]:t.NOTEQUAL};function F(P,b,Y){if(b.type===oi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kt||b.magFilter===xc||b.magFilter===Hs||b.magFilter===gr||b.minFilter===Kt||b.minFilter===xc||b.minFilter===Hs||b.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Y?(t.texParameteri(P,t.TEXTURE_WRAP_S,A[b.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,A[b.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,A[b.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,$[b.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,$[b.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(b.wrapS!==In||b.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,T(b.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,T(b.minFilter)),b.minFilter!==Wt&&b.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,se[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Wt||b.minFilter!==Hs&&b.minFilter!==gr||b.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&b.type===Ca&&e.has("OES_texture_half_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function X(P,b){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",L));const Z=b.source;let ae=g.get(Z);ae===void 0&&(ae={},g.set(Z,ae));const ne=q(b);if(ne!==P.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ne].usedTimes++;const ke=ae[P.__cacheKey];ke!==void 0&&(ae[P.__cacheKey].usedTimes--,ke.usedTimes===0&&N(b)),P.__cacheKey=ne,P.__webglTexture=ae[ne].texture}return Y}function Q(P,b,Y){let Z=t.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Z=t.TEXTURE_3D);const ae=X(P,b),ne=b.source;n.bindTexture(Z,P.__webglTexture,t.TEXTURE0+Y);const ke=i.get(ne);if(ne.version!==ke.__version||ae===!0){n.activeTexture(t.TEXTURE0+Y);const Re=et.getPrimaries(et.workingColorSpace),de=b.colorSpace===Ri?null:et.getPrimaries(b.colorSpace),pe=b.colorSpace===Ri||Re===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ue=v(b)&&d(b.image)===!1;let ce=m(b.image,Ue,!1,r.maxTextureSize);ce=Le(b,ce);const pt=d(ce)||o,Ve=s.convert(b.format,b.colorSpace);let Ae=s.convert(b.type),Se=R(b.internalFormat,Ve,Ae,b.colorSpace,b.isVideoTexture);F(Z,b,pt);let Me;const $e=b.mipmaps,Oe=o&&b.isVideoTexture!==!0&&Se!==Rx,ot=ke.__version===void 0||ae===!0,I=ne.dataReady,me=E(b,ce,pt);if(b.isDepthTexture)Se=t.DEPTH_COMPONENT,o?b.type===oi?Se=t.DEPTH_COMPONENT32F:b.type===Li?Se=t.DEPTH_COMPONENT24:b.type===_r?Se=t.DEPTH24_STENCIL8:Se=t.DEPTH_COMPONENT16:b.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===yr&&Se===t.DEPTH_COMPONENT&&b.type!==tf&&b.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=Li,Ae=s.convert(b.type)),b.format===Ts&&Se===t.DEPTH_COMPONENT&&(Se=t.DEPTH_STENCIL,b.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=_r,Ae=s.convert(b.type))),ot&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Se,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Se,ce.width,ce.height,0,Ve,Ae,null));else if(b.isDataTexture)if($e.length>0&&pt){Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,me,Se,$e[0].width,$e[0].height);for(let H=0,fe=$e.length;H<fe;H++)Me=$e[H],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Me.width,Me.height,Ve,Ae,Me.data):n.texImage2D(t.TEXTURE_2D,H,Se,Me.width,Me.height,0,Ve,Ae,Me.data);b.generateMipmaps=!1}else Oe?(ot&&n.texStorage2D(t.TEXTURE_2D,me,Se,ce.width,ce.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Ve,Ae,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Se,ce.width,ce.height,0,Ve,Ae,ce.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Oe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Se,$e[0].width,$e[0].height,ce.depth);for(let H=0,fe=$e.length;H<fe;H++)Me=$e[H],b.format!==kn?Ve!==null?Oe?I&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,ce.depth,Ve,Me.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Se,Me.width,Me.height,ce.depth,0,Me.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,Me.width,Me.height,ce.depth,Ve,Ae,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Se,Me.width,Me.height,ce.depth,0,Ve,Ae,Me.data)}else{Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,me,Se,$e[0].width,$e[0].height);for(let H=0,fe=$e.length;H<fe;H++)Me=$e[H],b.format!==kn?Ve!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,Me.width,Me.height,Ve,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Se,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Me.width,Me.height,Ve,Ae,Me.data):n.texImage2D(t.TEXTURE_2D,H,Se,Me.width,Me.height,0,Ve,Ae,Me.data)}else if(b.isDataArrayTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Se,ce.width,ce.height,ce.depth),I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ve,Ae,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ce.width,ce.height,ce.depth,0,Ve,Ae,ce.data);else if(b.isData3DTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_3D,me,Se,ce.width,ce.height,ce.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ve,Ae,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ce.width,ce.height,ce.depth,0,Ve,Ae,ce.data);else if(b.isFramebufferTexture){if(ot)if(Oe)n.texStorage2D(t.TEXTURE_2D,me,Se,ce.width,ce.height);else{let H=ce.width,fe=ce.height;for(let ge=0;ge<me;ge++)n.texImage2D(t.TEXTURE_2D,ge,Se,H,fe,0,Ve,Ae,null),H>>=1,fe>>=1}}else if($e.length>0&&pt){if(Oe&&ot){const H=Ze($e[0]);n.texStorage2D(t.TEXTURE_2D,me,Se,H.width,H.height)}for(let H=0,fe=$e.length;H<fe;H++)Me=$e[H],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,Ve,Ae,Me):n.texImage2D(t.TEXTURE_2D,H,Se,Ve,Ae,Me);b.generateMipmaps=!1}else if(Oe){if(ot){const H=Ze(ce);n.texStorage2D(t.TEXTURE_2D,me,Se,H.width,H.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ae,ce)}else n.texImage2D(t.TEXTURE_2D,0,Se,Ve,Ae,ce);x(b,pt)&&M(Z),ke.__version=ne.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ie(P,b,Y){if(b.image.length!==6)return;const Z=X(P,b),ae=b.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+Y);const ne=i.get(ae);if(ae.version!==ne.__version||Z===!0){n.activeTexture(t.TEXTURE0+Y);const ke=et.getPrimaries(et.workingColorSpace),Re=b.colorSpace===Ri?null:et.getPrimaries(b.colorSpace),de=b.colorSpace===Ri||ke===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const pe=b.isCompressedTexture||b.image[0].isCompressedTexture,Ue=b.image[0]&&b.image[0].isDataTexture,ce=[];for(let H=0;H<6;H++)!pe&&!Ue?ce[H]=m(b.image[H],!1,!0,r.maxCubemapSize):ce[H]=Ue?b.image[H].image:b.image[H],ce[H]=Le(b,ce[H]);const pt=ce[0],Ve=d(pt)||o,Ae=s.convert(b.format,b.colorSpace),Se=s.convert(b.type),Me=R(b.internalFormat,Ae,Se,b.colorSpace),$e=o&&b.isVideoTexture!==!0,Oe=ne.__version===void 0||Z===!0,ot=ae.dataReady;let I=E(b,pt,Ve);F(t.TEXTURE_CUBE_MAP,b,Ve);let me;if(pe){$e&&Oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,I,Me,pt.width,pt.height);for(let H=0;H<6;H++){me=ce[H].mipmaps;for(let fe=0;fe<me.length;fe++){const ge=me[fe];b.format!==kn?Ae!==null?$e?ot&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,0,0,ge.width,ge.height,Ae,ge.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,Me,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,0,0,ge.width,ge.height,Ae,Se,ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe,Me,ge.width,ge.height,0,Ae,Se,ge.data)}}}else{if(me=b.mipmaps,$e&&Oe){me.length>0&&I++;const H=Ze(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,I,Me,H.width,H.height)}for(let H=0;H<6;H++)if(Ue){$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,ce[H].width,ce[H].height,Ae,Se,ce[H].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Me,ce[H].width,ce[H].height,0,Ae,Se,ce[H].data);for(let fe=0;fe<me.length;fe++){const Xe=me[fe].image[H].image;$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,0,0,Xe.width,Xe.height,Ae,Se,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,Me,Xe.width,Xe.height,0,Ae,Se,Xe.data)}}else{$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ae,Se,ce[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,Me,Ae,Se,ce[H]);for(let fe=0;fe<me.length;fe++){const ge=me[fe];$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,0,0,Ae,Se,ge.image[H]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+H,fe+1,Me,Ae,Se,ge.image[H])}}}x(b,Ve)&&M(t.TEXTURE_CUBE_MAP),ne.__version=ae.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function oe(P,b,Y,Z,ae,ne){const ke=s.convert(Y.format,Y.colorSpace),Re=s.convert(Y.type),de=R(Y.internalFormat,ke,Re,Y.colorSpace);if(!i.get(b).__hasExternalTextures){const Ue=Math.max(1,b.width>>ne),ce=Math.max(1,b.height>>ne);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ne,de,Ue,ce,b.depth,0,ke,Re,null):n.texImage2D(ae,ne,de,Ue,ce,0,ke,Re,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Pe(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ae,i.get(Y).__webglTexture,0,ye(b)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ae,i.get(Y).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,b,Y){if(t.bindRenderbuffer(t.RENDERBUFFER,P),b.depthBuffer&&!b.stencilBuffer){let Z=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(Y||Pe(b)){const ae=b.depthTexture;ae&&ae.isDepthTexture&&(ae.type===oi?Z=t.DEPTH_COMPONENT32F:ae.type===Li&&(Z=t.DEPTH_COMPONENT24));const ne=ye(b);Pe(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Z,b.width,b.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Z,b.width,b.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,b.width,b.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(b.depthBuffer&&b.stencilBuffer){const Z=ye(b);Y&&Pe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,b.width,b.height):Pe(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const Z=b.textures;for(let ae=0;ae<Z.length;ae++){const ne=Z[ae],ke=s.convert(ne.format,ne.colorSpace),Re=s.convert(ne.type),de=R(ne.internalFormat,ke,Re,ne.colorSpace),pe=ye(b);Y&&Pe(b)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,de,b.width,b.height):Pe(b)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,de,b.width,b.height):t.renderbufferStorage(t.RENDERBUFFER,de,b.width,b.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);const Z=i.get(b.depthTexture).__webglTexture,ae=ye(b);if(b.depthTexture.format===yr)Pe(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(b.depthTexture.format===Ts)Pe(b)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function xe(P){const b=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Te(b.__webglFramebuffer,P)}else if(Y){b.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer[Z]),b.__webglDepthbuffer[Z]=t.createRenderbuffer(),le(b.__webglDepthbuffer[Z],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=t.createRenderbuffer(),le(b.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(P,b,Y){const Z=i.get(P);b!==void 0&&oe(Z.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Y!==void 0&&xe(P)}function qe(P){const b=P.texture,Y=i.get(P),Z=i.get(b);P.addEventListener("dispose",V);const ae=P.textures,ne=P.isWebGLCubeRenderTarget===!0,ke=ae.length>1,Re=d(P)||o;if(ke||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=b.version,a.memory.textures++),ne){Y.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer[de]=[];for(let pe=0;pe<b.mipmaps.length;pe++)Y.__webglFramebuffer[de][pe]=t.createFramebuffer()}else Y.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&b.mipmaps&&b.mipmaps.length>0){Y.__webglFramebuffer=[];for(let de=0;de<b.mipmaps.length;de++)Y.__webglFramebuffer[de]=t.createFramebuffer()}else Y.__webglFramebuffer=t.createFramebuffer();if(ke)if(r.drawBuffers)for(let de=0,pe=ae.length;de<pe;de++){const Ue=i.get(ae[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Pe(P)===!1){Y.__webglMultisampledFramebuffer=t.createFramebuffer(),Y.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const pe=ae[de];Y.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Y.__webglColorRenderbuffer[de]);const Ue=s.convert(pe.format,pe.colorSpace),ce=s.convert(pe.type),pt=R(pe.internalFormat,Ue,ce,pe.colorSpace,P.isXRRenderTarget===!0),Ve=ye(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,pt,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,Y.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=t.createRenderbuffer(),le(Y.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),F(t.TEXTURE_CUBE_MAP,b,Re);for(let de=0;de<6;de++)if(o&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)oe(Y.__webglFramebuffer[de][pe],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else oe(Y.__webglFramebuffer[de],P,b,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(b,Re)&&M(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let de=0,pe=ae.length;de<pe;de++){const Ue=ae[de],ce=i.get(Ue);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),F(t.TEXTURE_2D,Ue,Re),oe(Y.__webglFramebuffer,P,Ue,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),x(Ue,Re)&&M(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?de=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,Z.__webglTexture),F(de,b,Re),o&&b.mipmaps&&b.mipmaps.length>0)for(let pe=0;pe<b.mipmaps.length;pe++)oe(Y.__webglFramebuffer[pe],P,b,t.COLOR_ATTACHMENT0,de,pe);else oe(Y.__webglFramebuffer,P,b,t.COLOR_ATTACHMENT0,de,0);x(b,Re)&&M(de),n.unbindTexture()}P.depthBuffer&&xe(P)}function ue(P){const b=d(P)||o,Y=P.textures;for(let Z=0,ae=Y.length;Z<ae;Z++){const ne=Y[Z];if(x(ne,b)){const ke=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(ne).__webglTexture;n.bindTexture(ke,Re),M(ke),n.unbindTexture()}}}function we(P){if(o&&P.samples>0&&Pe(P)===!1){const b=P.textures,Y=P.width,Z=P.height;let ae=t.COLOR_BUFFER_BIT;const ne=[],ke=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(P),de=b.length>1;if(de)for(let pe=0;pe<b.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let pe=0;pe<b.length;pe++){ne.push(t.COLOR_ATTACHMENT0+pe),P.depthBuffer&&ne.push(ke);const Ue=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Ue===!1&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[pe]),Ue===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ke])),de){const ce=i.get(b[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,Y,Z,0,0,Y,Z,ae,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<b.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Re.__webglColorRenderbuffer[pe]);const Ue=i.get(b[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ue,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function ye(P){return Math.min(r.maxSamples,P.samples)}function Pe(P){const b=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ce(P){const b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Le(P,b){const Y=P.colorSpace,Z=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===Ju||Y!==Qi&&Y!==Ri&&(et.getTransfer(Y)===st?o===!1?e.has("EXT_sRGB")===!0&&Z===kn?(P.format=Ju,P.minFilter=Kt,P.generateMipmaps=!1):b=Lx.sRGBToLinear(b):(Z!==kn||ae!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),b}function Ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=D,this.setTexture3D=B,this.setTextureCube=C,this.rebindTextures=k,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=we,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Pe}function fw(t,e,n){const i=n.isWebGL2;function r(s,a=Ri){let o;const l=et.getTransfer(a);if(s===Gi)return t.UNSIGNED_BYTE;if(s===Ex)return t.UNSIGNED_SHORT_4_4_4_4;if(s===wx)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Gy)return t.BYTE;if(s===Vy)return t.SHORT;if(s===tf)return t.UNSIGNED_SHORT;if(s===bx)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===oi)return t.FLOAT;if(s===Ca)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Wy)return t.ALPHA;if(s===kn)return t.RGBA;if(s===Xy)return t.LUMINANCE;if(s===qy)return t.LUMINANCE_ALPHA;if(s===yr)return t.DEPTH_COMPONENT;if(s===Ts)return t.DEPTH_STENCIL;if(s===Ju)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===$y)return t.RED;if(s===Tx)return t.RED_INTEGER;if(s===Yy)return t.RG;if(s===Ax)return t.RG_INTEGER;if(s===Cx)return t.RGBA_INTEGER;if(s===vc||s===_c||s===yc||s===Sc)if(l===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===_c)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===_c)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Dh||s===Uh||s===Ih||s===kh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Dh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Uh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ih)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===kh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Rx)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Fh||s===Oh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Fh)return l===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Oh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===zh||s===Bh||s===jh||s===Hh||s===Gh||s===Vh||s===Wh||s===Xh||s===qh||s===$h||s===Yh||s===Kh||s===Zh||s===Qh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===zh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Bh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===jh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Hh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Gh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Vh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Wh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Xh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===qh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$h)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Yh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Kh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Zh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Qh)return l===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mc||s===Jh||s===ep)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Mc)return l===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Jh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ep)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ky||s===tp||s===np||s===ip)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Mc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===tp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===np)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===ip)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class hw extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Qs extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const pw={type:"move"};class Yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),g=.02,y=.005;u.inputState.pinching&&p>g+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=g-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(pw)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Qs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class xw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new $i({extensions:{fragDepth:!0},vertexShader:mw,fragmentShader:gw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new zl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class vw extends Ps{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,p=null,g=null,y=null;const _=new xw,m=n.getContextAttributes();let d=null,v=null;const x=[],M=[],R=new Ye;let E=null;const T=new Mn;T.layers.enable(1),T.viewport=new Pt;const L=new Mn;L.layers.enable(2),L.viewport=new Pt;const V=[T,L],S=new hw;S.layers.enable(1),S.layers.enable(2);let N=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let X=x[F];return X===void 0&&(X=new Yc,x[F]=X),X.getTargetRaySpace()},this.getControllerGrip=function(F){let X=x[F];return X===void 0&&(X=new Yc,x[F]=X),X.getGripSpace()},this.getHand=function(F){let X=x[F];return X===void 0&&(X=new Yc,x[F]=X),X.getHandSpace()};function te(F){const X=M.indexOf(F.inputSource);if(X===-1)return;const Q=x[X];Q!==void 0&&(Q.update(F.inputSource,F.frame,u||a),Q.dispatchEvent({type:F.type,data:F.inputSource}))}function U(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",K);for(let F=0;F<x.length;F++){const X=M[F];X!==null&&(M[F]=null,x[F].disconnect(X))}N=null,ee=null,_.reset(),e.setRenderTarget(d),g=null,p=null,h=null,r=null,v=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return p!==null?p:g},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",U),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const X={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,X),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),v=new Tr(g.framebufferWidth,g.framebufferHeight,{format:kn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let X=null,Q=null,ie=null;m.depth&&(ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,X=m.stencil?Ts:yr,Q=m.stencil?_r:Li);const oe={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Tr(p.textureWidth,p.textureHeight,{format:kn,type:Gi,depthTexture:new Wx(p.textureWidth,p.textureHeight,Q,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const le=e.properties.get(v);le.__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(F){for(let X=0;X<F.removed.length;X++){const Q=F.removed[X],ie=M.indexOf(Q);ie>=0&&(M[ie]=null,x[ie].disconnect(Q))}for(let X=0;X<F.added.length;X++){const Q=F.added[X];let ie=M.indexOf(Q);if(ie===-1){for(let le=0;le<x.length;le++)if(le>=M.length){M.push(Q),ie=le;break}else if(M[le]===null){M[le]=Q,ie=le;break}if(ie===-1)break}const oe=x[ie];oe&&oe.connect(Q)}}const q=new z,J=new z;function D(F,X,Q){q.setFromMatrixPosition(X.matrixWorld),J.setFromMatrixPosition(Q.matrixWorld);const ie=q.distanceTo(J),oe=X.projectionMatrix.elements,le=Q.projectionMatrix.elements,Te=oe[14]/(oe[10]-1),xe=oe[14]/(oe[10]+1),k=(oe[9]+1)/oe[5],qe=(oe[9]-1)/oe[5],ue=(oe[8]-1)/oe[0],we=(le[8]+1)/le[0],ye=Te*ue,Pe=Te*we,Ce=ie/(-ue+we),Le=Ce*-ue;X.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Le),F.translateZ(Ce),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ze=Te+Ce,P=xe+Ce,b=ye-Le,Y=Pe+(ie-Le),Z=k*xe/P*Ze,ae=qe*xe/P*Ze;F.projectionMatrix.makePerspective(b,Y,Z,ae,Ze,P),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function B(F,X){X===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(X.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),S.near=L.near=T.near=F.near,S.far=L.far=T.far=F.far,(N!==S.near||ee!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,ee=S.far,T.near=N,T.far=ee,L.near=N,L.far=ee,T.updateProjectionMatrix(),L.updateProjectionMatrix(),F.updateProjectionMatrix());const X=F.parent,Q=S.cameras;B(S,X);for(let ie=0;ie<Q.length;ie++)B(Q[ie],X);Q.length===2?D(S,T,L):S.projectionMatrix.copy(T.projectionMatrix),C(F,S,X)};function C(F,X,Q){Q===null?F.matrix.copy(X.matrixWorld):(F.matrix.copy(Q.matrixWorld),F.matrix.invert(),F.matrix.multiply(X.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(X.projectionMatrix),F.projectionMatrixInverse.copy(X.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=ed*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&g===null))return l},this.setFoveation=function(F){l=F,p!==null&&(p.fixedFoveation=F),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null};let A=null;function $(F,X){if(f=X.getViewerPose(u||a),y=X,f!==null){const Q=f.views;g!==null&&(e.setRenderTargetFramebuffer(v,g.framebuffer),e.setRenderTarget(v));let ie=!1;Q.length!==S.cameras.length&&(S.cameras.length=0,ie=!0);for(let le=0;le<Q.length;le++){const Te=Q[le];let xe=null;if(g!==null)xe=g.getViewport(Te);else{const qe=h.getViewSubImage(p,Te);xe=qe.viewport,le===0&&(e.setRenderTargetTextures(v,qe.colorTexture,p.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(v))}let k=V[le];k===void 0&&(k=new Mn,k.layers.enable(le),k.viewport=new Pt,V[le]=k),k.matrix.fromArray(Te.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Te.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(xe.x,xe.y,xe.width,xe.height),le===0&&(S.matrix.copy(k.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ie===!0&&S.cameras.push(k)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const le=h.getDepthInformation(Q[0]);le&&le.isValid&&le.texture&&_.init(e,le,r.renderState)}}for(let Q=0;Q<x.length;Q++){const ie=M[Q],oe=x[Q];ie!==null&&oe!==void 0&&oe.update(ie,X,u||a)}_.render(e,S),A&&A(F,X),X.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:X}),y=null}const se=new Vx;se.setAnimationLoop($),this.setAnimationLoop=function(F){A=F},this.dispose=function(){}}}const ar=new gi,_w=new yt;function yw(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Bx(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,x,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&g(m,d,M)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,v,x):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),x=v.envMap,M=v.envMapRotation;if(x&&(m.envMap.value=x,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(_w.makeRotationFromEuler(ar)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const R=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*R,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=x*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function g(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Sw(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const M=x.program;i.uniformBlockBinding(v,M)}function u(v,x){let M=r[v.id];M===void 0&&(y(v),M=f(v),r[v.id]=M,v.addEventListener("dispose",m));const R=x.program;i.updateUBOMapping(v,R);const E=e.render.frame;s[v.id]!==E&&(p(v),s[v.id]=E)}function f(v){const x=h();v.__bindingPointIndex=x;const M=t.createBuffer(),R=v.__size,E=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,R,E),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,M),M}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const x=r[v.id],M=v.uniforms,R=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let E=0,T=M.length;E<T;E++){const L=Array.isArray(M[E])?M[E]:[M[E]];for(let V=0,S=L.length;V<S;V++){const N=L[V];if(g(N,E,V,R)===!0){const ee=N.__offset,te=Array.isArray(N.value)?N.value:[N.value];let U=0;for(let K=0;K<te.length;K++){const q=te[K],J=_(q);typeof q=="number"||typeof q=="boolean"?(N.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,ee+U,N.__data)):q.isMatrix3?(N.__data[0]=q.elements[0],N.__data[1]=q.elements[1],N.__data[2]=q.elements[2],N.__data[3]=0,N.__data[4]=q.elements[3],N.__data[5]=q.elements[4],N.__data[6]=q.elements[5],N.__data[7]=0,N.__data[8]=q.elements[6],N.__data[9]=q.elements[7],N.__data[10]=q.elements[8],N.__data[11]=0):(q.toArray(N.__data,U),U+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ee,N.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(v,x,M,R){const E=v.value,T=x+"_"+M;if(R[T]===void 0)return typeof E=="number"||typeof E=="boolean"?R[T]=E:R[T]=E.clone(),!0;{const L=R[T];if(typeof E=="number"||typeof E=="boolean"){if(L!==E)return R[T]=E,!0}else if(L.equals(E)===!1)return L.copy(E),!0}return!1}function y(v){const x=v.uniforms;let M=0;const R=16;for(let T=0,L=x.length;T<L;T++){const V=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,N=V.length;S<N;S++){const ee=V[S],te=Array.isArray(ee.value)?ee.value:[ee.value];for(let U=0,K=te.length;U<K;U++){const q=te[U],J=_(q),D=M%R;D!==0&&R-D<J.boundary&&(M+=R-D),ee.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=M,M+=J.storage}}}const E=M%R;return E>0&&(M+=R-E),v.__size=M,v.__cache={},this}function _(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){const x=v.target;x.removeEventListener("dispose",m);const M=a.indexOf(x.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Zx{constructor(e={}){const{canvas:n=cS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const g=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Vn,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const x=this;let M=!1,R=0,E=0,T=null,L=-1,V=null;const S=new Pt,N=new Pt;let ee=null;const te=new Qe(0);let U=0,K=n.width,q=n.height,J=1,D=null,B=null;const C=new Pt(0,0,K,q),A=new Pt(0,0,K,q);let $=!1;const se=new Gx;let F=!1,X=!1,Q=null;const ie=new yt,oe=new Ye,le=new z,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return T===null?J:1}let k=i;function qe(w,O){for(let G=0;G<w.length;G++){const W=w[G],j=n.getContext(W,O);if(j!==null)return j}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ef}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",me,!1),k===null){const O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),k=qe(O,w),k===null)throw qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let ue,we,ye,Pe,Ce,Le,Ze,P,b,Y,Z,ae,ne,ke,Re,de,pe,Ue,ce,pt,Ve,Ae,Se,Me;function $e(){ue=new Ab(k),we=new yb(k,ue,e),ue.init(we),Ae=new fw(k,ue,we),ye=new uw(k,ue,we),Pe=new Nb(k),Ce=new KE,Le=new dw(k,ue,ye,Ce,we,Ae,Pe),Ze=new Mb(x),P=new Tb(x),b=new IS(k,we),Se=new vb(k,ue,b,we),Y=new Cb(k,b,Pe,Se),Z=new Ub(k,Y,b,Pe),ce=new Db(k,we,Le),de=new Sb(Ce),ae=new YE(x,Ze,P,ue,we,Se,de),ne=new yw(x,Ce),ke=new QE,Re=new rw(ue,we),Ue=new xb(x,Ze,P,ye,Z,p,l),pe=new cw(x,Z,we),Me=new Sw(k,Pe,we,ye),pt=new _b(k,ue,Pe,we),Ve=new Rb(k,ue,Pe,we),Pe.programs=ae.programs,x.capabilities=we,x.extensions=ue,x.properties=Ce,x.renderLists=ke,x.shadowMap=pe,x.state=ye,x.info=Pe}$e();const Oe=new vw(x,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const w=ue.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=ue.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(K,q,!1))},this.getSize=function(w){return w.set(K,q)},this.setSize=function(w,O,G=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,q=O,n.width=Math.floor(w*J),n.height=Math.floor(O*J),G===!0&&(n.style.width=w+"px",n.style.height=O+"px"),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(K*J,q*J).floor()},this.setDrawingBufferSize=function(w,O,G){K=w,q=O,J=G,n.width=Math.floor(w*G),n.height=Math.floor(O*G),this.setViewport(0,0,w,O)},this.getCurrentViewport=function(w){return w.copy(S)},this.getViewport=function(w){return w.copy(C)},this.setViewport=function(w,O,G,W){w.isVector4?C.set(w.x,w.y,w.z,w.w):C.set(w,O,G,W),ye.viewport(S.copy(C).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(A)},this.setScissor=function(w,O,G,W){w.isVector4?A.set(w.x,w.y,w.z,w.w):A.set(w,O,G,W),ye.scissor(N.copy(A).multiplyScalar(J).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(w){ye.setScissorTest($=w)},this.setOpaqueSort=function(w){D=w},this.setTransparentSort=function(w){B=w},this.getClearColor=function(w){return w.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(w=!0,O=!0,G=!0){let W=0;if(w){let j=!1;if(T!==null){const ve=T.texture.format;j=ve===Cx||ve===Ax||ve===Tx}if(j){const ve=T.texture.type,be=ve===Gi||ve===Li||ve===tf||ve===_r||ve===Ex||ve===wx,Ne=Ue.getClearColor(),De=Ue.getClearAlpha(),Ge=Ne.r,Fe=Ne.g,ze=Ne.b;be?(g[0]=Ge,g[1]=Fe,g[2]=ze,g[3]=De,k.clearBufferuiv(k.COLOR,0,g)):(y[0]=Ge,y[1]=Fe,y[2]=ze,y[3]=De,k.clearBufferiv(k.COLOR,0,y))}else W|=k.COLOR_BUFFER_BIT}O&&(W|=k.DEPTH_BUFFER_BIT),G&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ke.dispose(),Re.dispose(),Ce.dispose(),Ze.dispose(),P.dispose(),Z.dispose(),Se.dispose(),Me.dispose(),ae.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",xn),Oe.removeEventListener("sessionend",nt),Q&&(Q.dispose(),Q=null),Ht.stop()};function ot(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const w=Pe.autoReset,O=pe.enabled,G=pe.autoUpdate,W=pe.needsUpdate,j=pe.type;$e(),Pe.autoReset=w,pe.enabled=O,pe.autoUpdate=G,pe.needsUpdate=W,pe.type=j}function me(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function H(w){const O=w.target;O.removeEventListener("dispose",H),fe(O)}function fe(w){ge(w),Ce.remove(w)}function ge(w){const O=Ce.get(w).programs;O!==void 0&&(O.forEach(function(G){ae.releaseProgram(G)}),w.isShaderMaterial&&ae.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,G,W,j,ve){O===null&&(O=Te);const be=j.isMesh&&j.matrixWorld.determinant()<0,Ne=e0(w,O,G,W,j);ye.setMaterial(W,be);let De=G.index,Ge=1;if(W.wireframe===!0){if(De=Y.getWireframeAttribute(G),De===void 0)return;Ge=2}const Fe=G.drawRange,ze=G.attributes.position;let gt=Fe.start*Ge,on=(Fe.start+Fe.count)*Ge;ve!==null&&(gt=Math.max(gt,ve.start*Ge),on=Math.min(on,(ve.start+ve.count)*Ge)),De!==null?(gt=Math.max(gt,0),on=Math.min(on,De.count)):ze!=null&&(gt=Math.max(gt,0),on=Math.min(on,ze.count));const wt=on-gt;if(wt<0||wt===1/0)return;Se.setup(j,W,Ne,G,De);let Zn,ut=pt;if(De!==null&&(Zn=b.get(De),ut=Ve,ut.setIndex(Zn)),j.isMesh)W.wireframe===!0?(ye.setLineWidth(W.wireframeLinewidth*xe()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(j.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),ye.setLineWidth(Be*xe()),j.isLineSegments?ut.setMode(k.LINES):j.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else j.isPoints?ut.setMode(k.POINTS):j.isSprite&&ut.setMode(k.TRIANGLES);if(j.isBatchedMesh)ut.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else if(j.isInstancedMesh)ut.renderInstances(gt,wt,j.count);else if(G.isInstancedBufferGeometry){const Be=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,jl=Math.min(G.instanceCount,Be);ut.renderInstances(gt,wt,jl)}else ut.render(gt,wt)};function Xe(w,O,G){w.transparent===!0&&w.side===ai&&w.forceSinglePass===!1?(w.side=rn,w.needsUpdate=!0,Ha(w,O,G),w.side=qi,w.needsUpdate=!0,Ha(w,O,G),w.side=ai):Ha(w,O,G)}this.compile=function(w,O,G=null){G===null&&(G=w),m=Re.get(G),m.init(),v.push(m),G.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),w!==G&&w.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(x._useLegacyLights);const W=new Set;return w.traverse(function(j){const ve=j.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const Ne=ve[be];Xe(Ne,G,j),W.add(Ne)}else Xe(ve,G,j),W.add(ve)}),v.pop(),m=null,W},this.compileAsync=function(w,O,G=null){const W=this.compile(w,O,G);return new Promise(j=>{function ve(){if(W.forEach(function(be){Ce.get(be).currentProgram.isReady()&&W.delete(be)}),W.size===0){j(w);return}setTimeout(ve,10)}ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let tt=null;function Rt(w){tt&&tt(w)}function xn(){Ht.stop()}function nt(){Ht.start()}const Ht=new Vx;Ht.setAnimationLoop(Rt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(w){tt=w,Oe.setAnimationLoop(w),w===null?Ht.stop():Ht.start()},Oe.addEventListener("sessionstart",xn),Oe.addEventListener("sessionend",nt),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(O),O=Oe.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,T),m=Re.get(w,v.length),m.init(),v.push(m),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(ie),X=this.localClippingEnabled,F=de.init(this.clippingPlanes,X),_=ke.get(w,d.length),_.init(),d.push(_),jn(w,O,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(D,B),this.info.render.frame++,F===!0&&de.beginShadows();const G=m.state.shadowsArray;if(pe.render(G,w,O),F===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Ue.render(_,w),m.setupLights(x._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let j=0,ve=W.length;j<ve;j++){const be=W[j];uf(_,w,be,be.viewport)}}else uf(_,w,O);T!==null&&(Le.updateMultisampleRenderTarget(T),Le.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,O),Se.resetDefaultState(),L=-1,V=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function jn(w,O,G,W){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)G=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)m.pushLight(w),w.castShadow&&m.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||se.intersectsSprite(w)){W&&le.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ie);const be=Z.update(w),Ne=w.material;Ne.visible&&_.push(w,be,Ne,G,le.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||se.intersectsObject(w))){const be=Z.update(w),Ne=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),le.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),le.copy(be.boundingSphere.center)),le.applyMatrix4(w.matrixWorld).applyMatrix4(ie)),Array.isArray(Ne)){const De=be.groups;for(let Ge=0,Fe=De.length;Ge<Fe;Ge++){const ze=De[Ge],gt=Ne[ze.materialIndex];gt&&gt.visible&&_.push(w,be,gt,G,le.z,ze)}}else Ne.visible&&_.push(w,be,Ne,G,le.z,null)}}const ve=w.children;for(let be=0,Ne=ve.length;be<Ne;be++)jn(ve[be],O,G,W)}function uf(w,O,G,W){const j=w.opaque,ve=w.transmissive,be=w.transparent;m.setupLightsView(G),F===!0&&de.setGlobalState(x.clippingPlanes,G),ve.length>0&&Jx(j,ve,O,G),W&&ye.viewport(S.copy(W)),j.length>0&&ja(j,O,G),ve.length>0&&ja(ve,O,G),be.length>0&&ja(be,O,G),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Jx(w,O,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;const ve=we.isWebGL2;Q===null&&(Q=new Tr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ca:Gi,minFilter:gr,samples:ve?4:0})),x.getDrawingBufferSize(oe),ve?Q.setSize(oe.x,oe.y):Q.setSize(td(oe.x),td(oe.y));const be=x.getRenderTarget();x.setRenderTarget(Q),x.getClearColor(te),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();const Ne=x.toneMapping;x.toneMapping=Hi,ja(w,G,W),Le.updateMultisampleRenderTarget(Q),Le.updateRenderTargetMipmap(Q);let De=!1;for(let Ge=0,Fe=O.length;Ge<Fe;Ge++){const ze=O[Ge],gt=ze.object,on=ze.geometry,wt=ze.material,Zn=ze.group;if(wt.side===ai&&gt.layers.test(W.layers)){const ut=wt.side;wt.side=rn,wt.needsUpdate=!0,df(gt,G,W,on,wt,Zn),wt.side=ut,wt.needsUpdate=!0,De=!0}}De===!0&&(Le.updateMultisampleRenderTarget(Q),Le.updateRenderTargetMipmap(Q)),x.setRenderTarget(be),x.setClearColor(te,U),x.toneMapping=Ne}function ja(w,O,G){const W=O.isScene===!0?O.overrideMaterial:null;for(let j=0,ve=w.length;j<ve;j++){const be=w[j],Ne=be.object,De=be.geometry,Ge=W===null?be.material:W,Fe=be.group;Ne.layers.test(G.layers)&&df(Ne,O,G,De,Ge,Fe)}}function df(w,O,G,W,j,ve){w.onBeforeRender(x,O,G,W,j,ve),w.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(x,O,G,W,w,ve),j.transparent===!0&&j.side===ai&&j.forceSinglePass===!1?(j.side=rn,j.needsUpdate=!0,x.renderBufferDirect(G,O,W,j,w,ve),j.side=qi,j.needsUpdate=!0,x.renderBufferDirect(G,O,W,j,w,ve),j.side=ai):x.renderBufferDirect(G,O,W,j,w,ve),w.onAfterRender(x,O,G,W,j,ve)}function Ha(w,O,G){O.isScene!==!0&&(O=Te);const W=Ce.get(w),j=m.state.lights,ve=m.state.shadowsArray,be=j.state.version,Ne=ae.getParameters(w,j.state,ve,O,G),De=ae.getProgramCacheKey(Ne);let Ge=W.programs;W.environment=w.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(w.isMeshStandardMaterial?P:Ze).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Ge===void 0&&(w.addEventListener("dispose",H),Ge=new Map,W.programs=Ge);let Fe=Ge.get(De);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===be)return hf(w,Ne),Fe}else Ne.uniforms=ae.getUniforms(w),w.onBuild(G,Ne,x),w.onBeforeCompile(Ne,x),Fe=ae.acquireProgram(Ne,De),Ge.set(De,Fe),W.uniforms=Ne.uniforms;const ze=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ze.clippingPlanes=de.uniform),hf(w,Ne),W.needsLights=n0(w),W.lightsStateVersion=be,W.needsLights&&(ze.ambientLightColor.value=j.state.ambient,ze.lightProbe.value=j.state.probe,ze.directionalLights.value=j.state.directional,ze.directionalLightShadows.value=j.state.directionalShadow,ze.spotLights.value=j.state.spot,ze.spotLightShadows.value=j.state.spotShadow,ze.rectAreaLights.value=j.state.rectArea,ze.ltc_1.value=j.state.rectAreaLTC1,ze.ltc_2.value=j.state.rectAreaLTC2,ze.pointLights.value=j.state.point,ze.pointLightShadows.value=j.state.pointShadow,ze.hemisphereLights.value=j.state.hemi,ze.directionalShadowMap.value=j.state.directionalShadowMap,ze.directionalShadowMatrix.value=j.state.directionalShadowMatrix,ze.spotShadowMap.value=j.state.spotShadowMap,ze.spotLightMatrix.value=j.state.spotLightMatrix,ze.spotLightMap.value=j.state.spotLightMap,ze.pointShadowMap.value=j.state.pointShadowMap,ze.pointShadowMatrix.value=j.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function ff(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=Ho.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function hf(w,O){const G=Ce.get(w);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function e0(w,O,G,W,j){O.isScene!==!0&&(O=Te),Le.resetTextureUnits();const ve=O.fog,be=W.isMeshStandardMaterial?O.environment:null,Ne=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Qi,De=(W.isMeshStandardMaterial?P:Ze).get(W.envMap||be),Ge=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Fe=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),ze=!!G.morphAttributes.position,gt=!!G.morphAttributes.normal,on=!!G.morphAttributes.color;let wt=Hi;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=x.toneMapping);const Zn=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ut=Zn!==void 0?Zn.length:0,Be=Ce.get(W),jl=m.state.lights;if(F===!0&&(X===!0||w!==V)){const vn=w===V&&W.id===L;de.setState(W,w,vn)}let lt=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==jl.state.version||Be.outputColorSpace!==Ne||j.isBatchedMesh&&Be.batching===!1||!j.isBatchedMesh&&Be.batching===!0||j.isInstancedMesh&&Be.instancing===!1||!j.isInstancedMesh&&Be.instancing===!0||j.isSkinnedMesh&&Be.skinning===!1||!j.isSkinnedMesh&&Be.skinning===!0||j.isInstancedMesh&&Be.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Be.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Be.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Be.instancingMorph===!1&&j.morphTexture!==null||Be.envMap!==De||W.fog===!0&&Be.fog!==ve||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==de.numPlanes||Be.numIntersection!==de.numIntersection)||Be.vertexAlphas!==Ge||Be.vertexTangents!==Fe||Be.morphTargets!==ze||Be.morphNormals!==gt||Be.morphColors!==on||Be.toneMapping!==wt||we.isWebGL2===!0&&Be.morphTargetsCount!==ut)&&(lt=!0):(lt=!0,Be.__version=W.version);let Ji=Be.currentProgram;lt===!0&&(Ji=Ha(W,O,j));let pf=!1,Ds=!1,Hl=!1;const Ut=Ji.getUniforms(),er=Be.uniforms;if(ye.useProgram(Ji.program)&&(pf=!0,Ds=!0,Hl=!0),W.id!==L&&(L=W.id,Ds=!0),pf||V!==w){Ut.setValue(k,"projectionMatrix",w.projectionMatrix),Ut.setValue(k,"viewMatrix",w.matrixWorldInverse);const vn=Ut.map.cameraPosition;vn!==void 0&&vn.setValue(k,le.setFromMatrixPosition(w.matrixWorld)),we.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,Ds=!0,Hl=!0)}if(j.isSkinnedMesh){Ut.setOptional(k,j,"bindMatrix"),Ut.setOptional(k,j,"bindMatrixInverse");const vn=j.skeleton;vn&&(we.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ut.setValue(k,"boneTexture",vn.boneTexture,Le)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}j.isBatchedMesh&&(Ut.setOptional(k,j,"batchingTexture"),Ut.setValue(k,"batchingTexture",j._matricesTexture,Le));const Gl=G.morphAttributes;if((Gl.position!==void 0||Gl.normal!==void 0||Gl.color!==void 0&&we.isWebGL2===!0)&&ce.update(j,G,Ji),(Ds||Be.receiveShadow!==j.receiveShadow)&&(Be.receiveShadow=j.receiveShadow,Ut.setValue(k,"receiveShadow",j.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(er.envMap.value=De,er.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Ds&&(Ut.setValue(k,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&t0(er,Hl),ve&&W.fog===!0&&ne.refreshFogUniforms(er,ve),ne.refreshMaterialUniforms(er,W,J,q,Q),Ho.upload(k,ff(Be),er,Le)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ho.upload(k,ff(Be),er,Le),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Ut.setValue(k,"center",j.center),Ut.setValue(k,"modelViewMatrix",j.modelViewMatrix),Ut.setValue(k,"normalMatrix",j.normalMatrix),Ut.setValue(k,"modelMatrix",j.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const vn=W.uniformsGroups;for(let Vl=0,i0=vn.length;Vl<i0;Vl++)if(we.isWebGL2){const mf=vn[Vl];Me.update(mf,Ji),Me.bind(mf,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function t0(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function n0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,O,G){Ce.get(w.texture).__webglTexture=O,Ce.get(w.depthTexture).__webglTexture=G;const W=Ce.get(w);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,O){const G=Ce.get(w);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,G=0){T=w,R=O,E=G;let W=!0,j=null,ve=!1,be=!1;if(w){const De=Ce.get(w);De.__useDefaultFramebuffer!==void 0?(ye.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):De.__webglFramebuffer===void 0?Le.setupRenderTarget(w):De.__hasExternalTextures&&Le.rebindTextures(w,Ce.get(w.texture).__webglTexture,Ce.get(w.depthTexture).__webglTexture);const Ge=w.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(be=!0);const Fe=Ce.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?j=Fe[O][G]:j=Fe[O],ve=!0):we.isWebGL2&&w.samples>0&&Le.useMultisampledRTT(w)===!1?j=Ce.get(w).__webglMultisampledFramebuffer:Array.isArray(Fe)?j=Fe[G]:j=Fe,S.copy(w.viewport),N.copy(w.scissor),ee=w.scissorTest}else S.copy(C).multiplyScalar(J).floor(),N.copy(A).multiplyScalar(J).floor(),ee=$;if(ye.bindFramebuffer(k.FRAMEBUFFER,j)&&we.drawBuffers&&W&&ye.drawBuffers(w,j),ye.viewport(S),ye.scissor(N),ye.setScissorTest(ee),ve){const De=Ce.get(w.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,G)}else if(be){const De=Ce.get(w.texture),Ge=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,De.__webglTexture,G||0,Ge)}L=-1},this.readRenderTargetPixels=function(w,O,G,W,j,ve,be){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ce.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){ye.bindFramebuffer(k.FRAMEBUFFER,Ne);try{const De=w.texture,Ge=De.format,Fe=De.type;if(Ge!==kn&&Ae.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Fe===Ca&&(ue.has("EXT_color_buffer_half_float")||we.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Fe!==Gi&&Ae.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===oi&&(we.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-W&&G>=0&&G<=w.height-j&&k.readPixels(O,G,W,j,Ae.convert(Ge),Ae.convert(Fe),ve)}finally{const De=T!==null?Ce.get(T).__webglFramebuffer:null;ye.bindFramebuffer(k.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(w,O,G=0){const W=Math.pow(2,-G),j=Math.floor(O.image.width*W),ve=Math.floor(O.image.height*W);Le.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,w.x,w.y,j,ve),ye.unbindTexture()},this.copyTextureToTexture=function(w,O,G,W=0){const j=O.image.width,ve=O.image.height,be=Ae.convert(G.format),Ne=Ae.convert(G.type);Le.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,w.x,w.y,j,ve,be,Ne,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,w.x,w.y,O.mipmaps[0].width,O.mipmaps[0].height,be,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,w.x,w.y,be,Ne,O.image),W===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),ye.unbindTexture()},this.copyTextureToTexture3D=function(w,O,G,W,j=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=Math.round(w.max.x-w.min.x),be=Math.round(w.max.y-w.min.y),Ne=w.max.z-w.min.z+1,De=Ae.convert(W.format),Ge=Ae.convert(W.type);let Fe;if(W.isData3DTexture)Le.setTexture3D(W,0),Fe=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)Le.setTexture2DArray(W,0),Fe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const ze=k.getParameter(k.UNPACK_ROW_LENGTH),gt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),on=k.getParameter(k.UNPACK_SKIP_PIXELS),wt=k.getParameter(k.UNPACK_SKIP_ROWS),Zn=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=G.isCompressedTexture?G.mipmaps[j]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,w.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,w.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,w.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Fe,j,O.x,O.y,O.z,ve,be,Ne,De,Ge,ut.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Fe,j,O.x,O.y,O.z,ve,be,Ne,De,ut.data):k.texSubImage3D(Fe,j,O.x,O.y,O.z,ve,be,Ne,De,Ge,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,ze),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,on),k.pixelStorei(k.UNPACK_SKIP_ROWS,wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zn),j===0&&W.generateMipmaps&&k.generateMipmap(Fe),ye.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Le.setTextureCube(w,0):w.isData3DTexture?Le.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Le.setTexture2DArray(w,0):Le.setTexture2D(w,0),ye.unbindTexture()},this.resetState=function(){R=0,E=0,T=null,ye.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===nf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Fl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Mw extends Zx{}Mw.prototype.isWebGL1Renderer=!0;class bw extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Qx extends za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $p=new yt,id=new Ix,Co=new Ol,Ro=new z;class Ew extends an{constructor(e=new An,n=new Qx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;$p.copy(r).invert(),id.copy(e.ray).applyMatrix4($p);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let y=p,_=g;y<_;y++){const m=u.getX(y);Ro.fromBufferAttribute(h,m),Yp(Ro,m,l,r,e,n,this)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,_=g;y<_;y++)Ro.fromBufferAttribute(h,y),Yp(Ro,y,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Yp(t,e,n,i,r,s,a){const o=id.distanceSqToPoint(t);if(o<n){const l=new z;id.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class sf extends An{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),f(),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(s.slice(),3)),this.setAttribute("uv",new Bt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const x=new z,M=new z,R=new z;for(let E=0;E<n.length;E+=3)g(n[E+0],x),g(n[E+1],M),g(n[E+2],R),l(x,M,R,v)}function l(v,x,M,R){const E=R+1,T=[];for(let L=0;L<=E;L++){T[L]=[];const V=v.clone().lerp(M,L/E),S=x.clone().lerp(M,L/E),N=E-L;for(let ee=0;ee<=N;ee++)ee===0&&L===E?T[L][ee]=V:T[L][ee]=V.clone().lerp(S,ee/N)}for(let L=0;L<E;L++)for(let V=0;V<2*(E-L)-1;V++){const S=Math.floor(V/2);V%2===0?(p(T[L][S+1]),p(T[L+1][S]),p(T[L][S])):(p(T[L][S+1]),p(T[L+1][S+1]),p(T[L+1][S]))}}function u(v){const x=new z;for(let M=0;M<s.length;M+=3)x.x=s[M+0],x.y=s[M+1],x.z=s[M+2],x.normalize().multiplyScalar(v),s[M+0]=x.x,s[M+1]=x.y,s[M+2]=x.z}function f(){const v=new z;for(let x=0;x<s.length;x+=3){v.x=s[x+0],v.y=s[x+1],v.z=s[x+2];const M=m(v)/2/Math.PI+.5,R=d(v)/Math.PI+.5;a.push(M,1-R)}y(),h()}function h(){for(let v=0;v<a.length;v+=6){const x=a[v+0],M=a[v+2],R=a[v+4],E=Math.max(x,M,R),T=Math.min(x,M,R);E>.9&&T<.1&&(x<.2&&(a[v+0]+=1),M<.2&&(a[v+2]+=1),R<.2&&(a[v+4]+=1))}}function p(v){s.push(v.x,v.y,v.z)}function g(v,x){const M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function y(){const v=new z,x=new z,M=new z,R=new z,E=new Ye,T=new Ye,L=new Ye;for(let V=0,S=0;V<s.length;V+=9,S+=6){v.set(s[V+0],s[V+1],s[V+2]),x.set(s[V+3],s[V+4],s[V+5]),M.set(s[V+6],s[V+7],s[V+8]),E.set(a[S+0],a[S+1]),T.set(a[S+2],a[S+3]),L.set(a[S+4],a[S+5]),R.copy(v).add(x).add(M).divideScalar(3);const N=m(R);_(E,S+0,v,N),_(T,S+2,x,N),_(L,S+4,M,N)}}function _(v,x,M,R){R<0&&v.x===1&&(a[x]=v.x-1),M.x===0&&M.z===0&&(a[x]=R/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sf(e.vertices,e.indices,e.radius,e.details)}}class af extends sf{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new af(e.radius,e.detail)}}class of extends An{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let u=0;const f=[],h=new z,p=new z,g=[],y=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],x=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&l===Math.PI&&(M=-.5/n);for(let R=0;R<=n;R++){const E=R/n;h.x=-e*Math.cos(r+E*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+E*s)*Math.sin(a+x*o),y.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(E+M,1-x),v.push(u++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const x=f[d][v+1],M=f[d][v],R=f[d+1][v],E=f[d+1][v+1];(d!==0||a>0)&&g.push(x,M,E),(d!==i-1||l<Math.PI)&&g.push(M,R,E)}this.setIndex(g),this.setAttribute("position",new Bt(y,3)),this.setAttribute("normal",new Bt(_,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class lf extends An{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],l=[],u=[],f=new z,h=new z,p=new z;for(let g=0;g<=i;g++)for(let y=0;y<=r;y++){const _=y/r*s,m=g/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(_),h.y=(e+n*Math.cos(m))*Math.sin(_),h.z=n*Math.sin(m),o.push(h.x,h.y,h.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),p.subVectors(h,f).normalize(),l.push(p.x,p.y,p.z),u.push(y/r),u.push(g/i)}for(let g=1;g<=i;g++)for(let y=1;y<=r;y++){const _=(r+1)*g+y-1,m=(r+1)*(g-1)+y-1,d=(r+1)*(g-1)+y,v=(r+1)*g+y;a.push(_,m,v),a.push(m,d,v)}this.setIndex(a),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ef}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ef);function ww(){const t=Ee.useRef(null);return Ee.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new bw,s=new Mn(45,n/i,.1,1e3);s.position.z=18;const a=new Zx({alpha:!0,antialias:!0});a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const o=new Qs;r.add(o);const l=new af(5,3),u=new la({color:16711731,wireframe:!0,transparent:!0,opacity:.2}),f=new fn(l,u);o.add(f);const h=new of(3.8,32,32),p=new la({color:9109504,transparent:!0,opacity:.35}),g=new fn(h,p);o.add(g);const y=400,_=new Float32Array(y*3);for(let K=0;K<y*3;K+=3){const q=Math.random(),J=Math.random(),D=q*2*Math.PI,B=Math.acos(2*J-1),C=5.2+Math.random()*1.8;_[K]=C*Math.sin(B)*Math.cos(D),_[K+1]=C*Math.sin(B)*Math.sin(D),_[K+2]=C*Math.cos(B)}const m=new An;m.setAttribute("position",new zn(_,3));const d=new Qx({color:16731469,size:.18,transparent:!0,opacity:.85,blending:Xu}),v=new Ew(m,d);o.add(v);const x=new lf(7,.05,16,100),M=new la({color:16711731,transparent:!0,opacity:.6}),R=new fn(x,M);R.rotation.x=Math.PI/3,R.rotation.y=Math.PI/6,o.add(R);const E=new fn(x,M.clone());E.material.color.setHex(16758531),E.rotation.x=-Math.PI/4,E.rotation.y=Math.PI/3,o.add(E);let T=0,L=0,V=0,S=0;const N=K=>{const q=e.getBoundingClientRect();T=(K.clientX-q.left)/n*2-1,L=-((K.clientY-q.top)/i)*2+1};window.addEventListener("mousemove",N);let ee;const te=()=>{ee=requestAnimationFrame(te),V+=(T*.5-V)*.05,S+=(L*.5-S)*.05,o.rotation.y+=.003,o.rotation.x+=.001,o.rotation.y+=V*.02,o.rotation.x+=S*.02,R.rotation.z+=.005,E.rotation.z-=.004,a.render(r,s)};te();const U=()=>{if(!e)return;const K=e.clientWidth,q=e.clientHeight;s.aspect=K/q,s.updateProjectionMatrix(),a.setSize(K,q)};return window.addEventListener("resize",U),()=>{window.removeEventListener("mousemove",N),window.removeEventListener("resize",U),cancelAnimationFrame(ee),e.contains(a.domElement)&&e.removeChild(a.domElement),a.dispose()}},[]),c.jsxs("div",{className:"relative w-full h-full min-h-[420px] flex items-center justify-center",children:[c.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"}),c.jsx("div",{className:"pointer-events-none z-10 text-center px-4 py-2 rounded-full glass-panel border border-brand-red/40 shadow-[0_0_30px_rgba(255,0,51,0.3)] animate-pulse-slow",children:c.jsxs("span",{className:"text-xs uppercase tracking-widest text-brand-red font-bold flex items-center gap-2",children:[c.jsx("img",{src:"/logo.svg",alt:"Logo",className:"w-5 h-5 inline-block"}),"Kuakata Multimedia 3D Core"]})})]})}function Tw(){const{setActiveTab:t,switchRoleDemo:e}=Rr(),{members:n,projects:i}=Kn();return c.jsxs("section",{className:"relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[c.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none"}),c.jsx("div",{className:"absolute bottom-10 left-10 w-96 h-96 bg-brand-wine/25 rounded-full blur-[130px] pointer-events-none"}),c.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto",children:[c.jsxs("div",{className:"lg:col-span-7 space-y-6 text-left",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-red/40 text-xs font-bold text-brand-red shadow-[0_0_20px_rgba(255,0,51,0.2)]",children:[c.jsx("img",{src:"/logo.svg",alt:"Logo",className:"w-4 h-4"}),c.jsx("span",{children:"কুয়াকাটা মাল্টিমিডিয়া ৩ডি ও পোর্টফোলিও সিস্টেম"})]}),c.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight",children:["আধুনিক ",c.jsx("span",{className:"text-gradient",children:"৩ডি অ্যানিমেশন"})," & পোর্টফোলিও ",c.jsx("span",{className:"text-gradient-gold",children:"ম্যানেজমেন্ট"})]}),c.jsx("p",{className:"text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed",children:"কুয়াকাটা মাল্টিমিডিয়ার বিশ্বমানের ৩ডি ভিজ্যুয়াল কনটেন্ট, মোশন গ্রাফিক্স, টিম মেম্বার ম্যানেজমেন্ট, দৈনিক হাজিরা এবং অটোমেটেড পে-রোল (Payroll) ক্যালকুলেশনের সম্পূর্ণ ডিজিটাল সমাধান।"}),c.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[c.jsxs("button",{id:"btn-hero-portfolio",onClick:()=>t("portfolio"),className:"inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-xl shadow-brand-red/30 hover:scale-105 transition-transform",children:[c.jsx("span",{children:"পোর্টফোলিও দেখুন"}),c.jsx(O_,{className:"w-4 h-4"})]}),c.jsxs("button",{id:"btn-hero-team",onClick:()=>t("team"),className:"inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm glass-panel text-white border border-slate-700 hover:border-brand-red/50 hover:bg-brand-red/10 transition-all",children:[c.jsx(hl,{className:"w-4 h-4 text-brand-red"}),c.jsx("span",{children:"টিম মেম্বারবৃন্দ"})]}),c.jsxs("button",{id:"btn-hero-admin-portal",onClick:()=>e("admin"),className:"inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs bg-dark-800/80 text-slate-300 border border-slate-700 hover:text-brand-red hover:border-brand-red/40 transition-colors",children:[c.jsx(Nr,{className:"w-4 h-4 text-brand-amber"}),c.jsx("span",{children:"অ্যাডমিন ড্যাশবোর্ড (লগইন)"})]})]}),c.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80",children:[c.jsxs("div",{children:[c.jsx("div",{className:"text-2xl font-extrabold text-white flex items-center gap-1",children:c.jsxs("span",{className:"text-brand-red",children:[i.length,"+"]})}),c.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"লাইভ ৩ডি প্রজেক্ট"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-2xl font-extrabold text-white flex items-center gap-1",children:c.jsx("span",{className:"text-brand-amber",children:n.length})}),c.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"দক্ষ টিম মেম্বার"})]}),c.jsxs("div",{children:[c.jsx("div",{className:"text-2xl font-extrabold text-white flex items-center gap-1",children:c.jsx("span",{className:"text-emerald-400",children:"৯৬%"})}),c.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"গড় উপস্থিতি হার"})]})]})]}),c.jsx("div",{className:"lg:col-span-5 h-[450px] relative flex items-center justify-center",children:c.jsx("div",{className:"w-full h-full glass-panel rounded-3xl p-4 border border-brand-red/30 shadow-[0_0_50px_rgba(255,0,51,0.15)] relative",children:c.jsx(ww,{})})})]}),c.jsx("div",{className:"text-center pt-8",children:c.jsx("button",{onClick:()=>t("team"),className:"inline-flex items-center justify-center p-2 rounded-full glass-panel text-slate-400 hover:text-brand-red hover:border-brand-red/40 transition-all animate-bounce",children:c.jsx(B_,{className:"w-5 h-5"})})})]})}function Aw({member:t,attendanceRate:e=95}){var p;const n=Ee.useRef(null),[i,r]=Ee.useState(0),[s,a]=Ee.useState(0),[o,l]=Ee.useState(!1),u=g=>{if(!n.current)return;const y=n.current.getBoundingClientRect(),_=g.clientX-y.left,m=g.clientY-y.top,d=y.width/2,v=y.height/2,x=(m-v)/v*-12,M=(_-d)/d*12;r(x),a(M)},f=()=>{l(!0)},h=()=>{l(!1),r(0),a(0)};return c.jsx("div",{ref:n,onMouseMove:u,onMouseEnter:f,onMouseLeave:h,style:{perspective:"1000px"},className:"w-full cursor-pointer group",children:c.jsxs("div",{style:{transform:`rotateX(${i}deg) rotateY(${s}deg) scale3d(${o?1.03:1}, ${o?1.03:1}, 1)`,transition:o?"transform 0.1s ease-out":"transform 0.5s ease-out"},className:`relative rounded-2xl p-6 glass-card overflow-hidden border ${t.role==="admin"?"border-brand-red/50 bg-dark-800/90":"border-slate-800 bg-dark-800/60"} shadow-xl hover:shadow-2xl hover:shadow-brand-red/20`,children:[c.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold opacity-70 group-hover:opacity-100 transition-opacity"}),c.jsxs("div",{className:"flex justify-between items-start mb-4",children:[c.jsxs("span",{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${t.role==="admin"?"bg-brand-red/15 text-brand-red border border-brand-red/40":"bg-brand-amber/10 text-brand-amber border border-brand-amber/30"}`,children:[t.role==="admin"?c.jsx(Nr,{className:"w-3.5 h-3.5"}):c.jsx(Ta,{className:"w-3.5 h-3.5"}),t.dept]}),c.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20",children:[c.jsx(Ua,{className:"w-3 h-3"}),c.jsxs("span",{children:["উপস্থিতি ",e,"%"]})]})]}),c.jsxs("div",{className:"flex flex-col items-center text-center my-3",children:[c.jsxs("div",{className:"relative mb-4",children:[c.jsx("div",{className:"absolute -inset-1 rounded-full bg-gradient-to-r from-brand-red via-brand-crimson to-brand-gold opacity-50 group-hover:opacity-100 blur-sm transition-all"}),c.jsx("img",{src:t.avatar,alt:t.name,className:"relative w-24 h-24 rounded-full object-cover border-2 border-dark-900 shadow-md"})]}),c.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-brand-red transition-colors",children:t.name}),c.jsx("p",{className:"text-xs text-slate-400 font-medium mt-1",children:t.designation})]}),c.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/80",children:[c.jsxs("div",{className:"text-[11px] text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-bold",children:[c.jsx(Jd,{className:"w-3 h-3 text-brand-red"}),"বিশেষ দক্ষতা (Skills)"]}),c.jsx("div",{className:"flex flex-wrap gap-1.5 justify-center",children:(p=t.skills)==null?void 0:p.map((g,y)=>c.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-medium bg-dark-700/80 text-slate-300 border border-slate-700/50 group-hover:border-brand-red/40 transition-colors",children:g},y))})]})]})})}function Kp(){const{members:t,attendance:e}=Kn(),{user:n,setActiveTab:i}=Rr(),[r,s]=Ee.useState("All"),[a,o]=Ee.useState(""),l=["All","3D & VFX","Web Dev","Video Production"],u=t.filter(h=>{var y;const p=r==="All"||h.dept===r,g=h.name.toLowerCase().includes(a.toLowerCase())||h.designation.toLowerCase().includes(a.toLowerCase())||((y=h.skills)==null?void 0:y.some(_=>_.toLowerCase().includes(a.toLowerCase())));return p&&g}),f=h=>{const p=e.filter(y=>y.user_id===h);if(!p.length)return 95;const g=p.filter(y=>y.status==="Present"||y.status==="Half-day").length;return Math.round(g/p.length*100)};return c.jsxs("section",{className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full",children:[c.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 space-y-4",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-purple/30 text-xs font-semibold text-brand-purple",children:[c.jsx(hl,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"আমাদের দক্ষ ক্রিয়েটিভ টিম"})]}),c.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:["কুয়াকাটা মাল্টিমিডিয়ার ",c.jsx("span",{className:"text-gradient",children:"৩ডি ক্রিয়েটর & টিম মেম্বারবৃন্দ"})]}),c.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"প্রতিটি কার্ডের উপর মাউস পয়েন্টার রাখুন (Parallax 3D Hover Effect)। মেম্বারদের স্কিল, পদবি ও মেম্বার পোর্টালে তাদের কাজের সামারি পর্যবেক্ষণ করুন।"})]}),c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 glass-panel p-4 rounded-2xl border border-slate-800",children:[c.jsx("div",{className:"flex flex-wrap gap-2 w-full sm:w-auto",children:l.map(h=>c.jsx("button",{id:`btn-dept-${h.toLowerCase().replace(/\s+/g,"-")}`,onClick:()=>s(h),className:`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${r===h?"bg-gradient-to-r from-brand-cyan to-brand-purple text-dark-900 shadow-md font-bold":"glass-panel text-slate-300 hover:text-white hover:border-slate-600"}`,children:h==="All"?"সকল ডিপার্টমেন্ট":h},h))}),c.jsxs("div",{className:"relative w-full sm:w-64",children:[c.jsx(vx,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-3"}),c.jsx("input",{type:"text",placeholder:"নাম বা স্কিল দিয়ে খুঁজুন...",value:a,onChange:h=>o(h.target.value),className:"w-full pl-10 pr-4 py-2 rounded-xl text-xs glass-input focus:border-brand-cyan"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(h=>c.jsx(Aw,{member:h,attendanceRate:f(h.id)},h.id))}),(n==null?void 0:n.role)==="admin"&&c.jsx("div",{className:"mt-12 text-center",children:c.jsxs("button",{onClick:()=>i("admin-dashboard"),className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan hover:text-dark-900 transition-colors",children:[c.jsx(xx,{className:"w-4 h-4"}),c.jsx("span",{children:"নতুন মেম্বার যুক্ত বা ম্যানেজ করতে অ্যাডমিন প্যানেলে যান"})]})})]})}function Cw({onSelectProject:t}){var h;const{projects:e}=Kn(),[n,i]=Ee.useState(0),[r,s]=Ee.useState("All"),a=["All","3D & Web","VFX & Motion","3D Commercial","Interactive Web"],o=r==="All"?e:e.filter(p=>p.category===r),l=()=>{i(p=>p===0?o.length-1:p-1)},u=()=>{i(p=>p===o.length-1?0:p+1)},f=o[n]||o[0];return c.jsxs("div",{className:"relative w-full py-6",children:[c.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-8",children:a.map(p=>c.jsx("button",{id:`btn-cat-${p.toLowerCase().replace(/\s+/g,"-")}`,onClick:()=>{s(p),i(0)},className:`px-4 py-2 rounded-full text-xs font-bold transition-all ${r===p?"bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 scale-105":"glass-panel text-slate-300 hover:text-white hover:border-brand-red/40"}`,children:p==="All"?"সকল প্রজেক্ট (All)":p},p))}),o.length>0?c.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 min-h-[420px] flex items-center justify-center",children:[c.jsx("button",{id:"btn-portfolio-prev",onClick:l,"aria-label":"Previous project",className:"absolute left-0 z-30 p-3 rounded-full glass-panel hover:bg-brand-red/20 border border-slate-700 text-white hover:border-brand-red transition-all transform hover:-translate-x-1",children:c.jsx(j_,{className:"w-6 h-6"})}),c.jsx("button",{id:"btn-portfolio-next",onClick:u,"aria-label":"Next project",className:"absolute right-0 z-30 p-3 rounded-full glass-panel hover:bg-brand-red/20 border border-slate-700 text-white hover:border-brand-red transition-all transform hover:translate-x-1",children:c.jsx(Vu,{className:"w-6 h-6"})}),c.jsx("div",{className:"w-full max-w-2xl relative transition-all duration-500 ease-out transform",children:c.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-brand-red/40 shadow-[0_0_50px_rgba(255,0,51,0.2)] group",children:[c.jsxs("div",{className:"relative h-64 sm:h-80 w-full overflow-hidden bg-dark-800",children:[c.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"}),c.jsxs("span",{className:"absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 backdrop-blur-md text-brand-red border border-brand-red/40 flex items-center gap-1.5",children:[c.jsx(Jd,{className:"w-3.5 h-3.5"}),f.category]}),c.jsx("button",{onClick:()=>t(f),className:"absolute inset-0 m-auto w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg shadow-brand-red/50",children:c.jsx(ey,{className:"w-7 h-7 fill-white ml-1"})})]}),c.jsxs("div",{className:"p-6",children:[c.jsxs("div",{className:"flex justify-between items-start mb-2",children:[c.jsx("h3",{className:"text-2xl font-bold text-white group-hover:text-brand-red transition-colors",children:f.title}),c.jsxs("span",{className:"text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700",children:["ক্লায়েন্ট: ",f.client]})]}),c.jsx("p",{className:"text-slate-300 text-sm mb-4 leading-relaxed",children:f.description}),c.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800",children:[c.jsx("div",{className:"flex flex-wrap gap-1.5",children:(h=f.tags)==null?void 0:h.map((p,g)=>c.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium bg-brand-red/10 text-brand-red border border-brand-red/20",children:["#",p]},g))}),c.jsxs("button",{id:`btn-demo-${f.id}`,onClick:()=>t(f),className:"inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-white transition-colors",children:[c.jsx("span",{children:"৩ডি লাইভ ডেমো দেখুন"}),c.jsx(Qd,{className:"w-4 h-4"})]})]})]})]})})]}):c.jsxs("div",{className:"text-center py-12 text-slate-400 glass-panel max-w-md mx-auto rounded-xl",children:[c.jsx(X_,{className:"w-10 h-10 text-slate-500 mx-auto mb-2"}),c.jsx("p",{children:"এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি।"})]}),c.jsx("div",{className:"flex justify-center gap-2 mt-6",children:o.map((p,g)=>c.jsx("button",{onClick:()=>i(g),className:`h-2 rounded-full transition-all ${g===n?"w-8 bg-brand-red":"w-2 bg-slate-700 hover:bg-slate-500"}`},g))})]})}function Rw({project:t,onClose:e}){var n;return t?c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/85 backdrop-blur-xl animate-fade-in",children:c.jsxs("div",{className:"relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden border border-brand-red/40 shadow-[0_0_60px_rgba(255,0,51,0.25)] max-h-[90vh] overflow-y-auto",children:[c.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-20 p-2 rounded-full glass-panel text-slate-300 hover:text-white hover:border-brand-red transition-colors",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsxs("div",{className:"relative h-64 sm:h-80 w-full overflow-hidden bg-dark-800",children:[c.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),c.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"}),c.jsx("div",{className:"absolute bottom-6 left-6 right-6 flex justify-between items-end",children:c.jsxs("div",{children:[c.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-bold bg-brand-red text-white mb-2 inline-block shadow-md shadow-brand-red/40",children:t.category}),c.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:t.title})]})})]}),c.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[c.jsxs("div",{children:[c.jsxs("h4",{className:"text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5",children:[c.jsx(Jd,{className:"w-4 h-4 text-brand-red"}),"প্রজেক্ট বিবরণ (Overview)"]}),c.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:t.description})]}),c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800",children:[c.jsxs("div",{className:"glass-card p-4 rounded-xl",children:[c.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"ক্লায়েন্ট / সংস্থা"}),c.jsxs("span",{className:"text-sm font-bold text-white flex items-center gap-2",children:[c.jsx(hx,{className:"w-4 h-4 text-brand-red"}),t.client]})]}),c.jsxs("div",{className:"glass-card p-4 rounded-xl",children:[c.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"প্রজেক্ট ক্যাটাগরি"}),c.jsx("span",{className:"text-sm font-bold text-brand-amber",children:t.category})]})]}),c.jsxs("div",{children:[c.jsxs("h4",{className:"text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5",children:[c.jsx(iy,{className:"w-4 h-4 text-brand-red"}),"ব্যবহৃত টেকনোলজি ও টুলস"]}),c.jsx("div",{className:"flex flex-wrap gap-2",children:(n=t.tags)==null?void 0:n.map((i,r)=>c.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-bold bg-brand-red/15 text-brand-red border border-brand-red/30",children:i},r))})]}),c.jsxs("div",{className:"pt-6 border-t border-slate-800 flex justify-end gap-3",children:[c.jsx("button",{onClick:e,className:"px-5 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300 hover:text-white",children:"বন্ধ করুন"}),c.jsxs("a",{href:t.demo_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-105 transition-transform",children:[c.jsx("span",{children:"লাইভ ওয়েবসাইট / ডেমো দেখুন"}),c.jsx(Qd,{className:"w-4 h-4"})]})]})]})]})}):null}function Zp(){const[t,e]=Ee.useState(null);return c.jsxs("section",{className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative",children:[c.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"}),c.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-8 space-y-4",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-cyan/30 text-xs font-semibold text-brand-cyan",children:[c.jsx(Ta,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"আমাদের ৩ডি গ্যালারি & পোর্টফোলিও"})]}),c.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:["কুয়াকাটা মাল্টিমিডিয়ার ",c.jsx("span",{className:"text-gradient",children:"ভার্চুয়াল ৩ডি শোকেস"})]}),c.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"৩ডি ক্যারোজেল ড্র্যাগ বা স্ক্রল করে প্রজেক্টগুলো দেখুন। বিস্তারিত ও লাইভ ডেমো দেখতে যেকোনো কার্ডে ক্লিক করুন।"})]}),c.jsx(Cw,{onSelectProject:n=>e(n)}),t&&c.jsx(Rw,{project:t,onClose:()=>e(null)})]})}function Qp(){const[t,e]=Ee.useState(!1),[n,i]=Ee.useState({name:"",email:"",subject:"3D Project Inquiry",message:""}),r=s=>{s.preventDefault(),e(!0),setTimeout(()=>{e(!1),i({name:"",email:"",subject:"3D Project Inquiry",message:""})},4e3)};return c.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full",children:c.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[c.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-red/40 text-xs font-bold text-brand-red",children:[c.jsx(Q_,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"যোগাযোগ করুন"})]}),c.jsxs("h2",{className:"text-3xl sm:text-4xl font-black text-white",children:["আপনার প্রজেক্টের ",c.jsx("span",{className:"text-gradient",children:"৩ডি আইডিয়া বাস্তবায়ন"})," করতে প্রস্তুত?"]}),c.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"কুয়াকাটা মাল্টিমিডিয়ার সাথে আপনার বিজনেস, অ্যানিমেশন বা ৩ডি কাস্টম সফটওয়্যার প্রজেক্ট আলোচনা করতে আমাদের বার্তা পাঠাতে পারেন।"}),c.jsxs("div",{className:"space-y-4 pt-4",children:[c.jsxs("div",{className:"flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"p-3 rounded-lg bg-brand-red/10 text-brand-red",children:c.jsx(K_,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"অফিস লোকেশন"}),c.jsx("p",{className:"text-sm font-semibold text-white mt-0.5",children:"কুয়াকাটা মাল্টিমিডিয়া টাওয়ার, ঢাকা & কুয়াকাটা, বাংলাদেশ"})]})]}),c.jsxs("div",{className:"flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"p-3 rounded-lg bg-brand-amber/10 text-brand-amber",children:c.jsx(mx,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"ইমেইল ঠিকানা"}),c.jsx("p",{className:"text-sm font-semibold text-white mt-0.5",children:"info@kuakatamultimedia.com"})]})]}),c.jsxs("div",{className:"flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800",children:[c.jsx("div",{className:"p-3 rounded-lg bg-emerald-500/10 text-emerald-400",children:c.jsx(J_,{className:"w-5 h-5"})}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"হেল্পলাইন / হোয়াটসঅ্যাপ"}),c.jsx("p",{className:"text-sm font-semibold text-white mt-0.5",children:"+880 1711-000001 / +880 9600-112233"})]})]})]})]}),c.jsx("div",{className:"lg:col-span-7",children:c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 shadow-2xl relative",children:[c.jsxs("h3",{className:"text-xl font-bold text-white mb-6 flex items-center gap-2",children:[c.jsx(hx,{className:"w-5 h-5 text-brand-red"}),"বার্তা সরসারি পাঠান (Instant Inquiry)"]}),t?c.jsxs("div",{className:"py-12 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6",children:[c.jsx(Ua,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),c.jsx("h4",{className:"text-lg font-bold text-white",children:"বার্তা সফলভাবে পাঠানো হয়েছে!"}),c.jsx("p",{className:"text-xs text-slate-300",children:"আমাদের টিম অতিসত্বর আপনার ইমেইলে যোগাযোগ করবে। ধন্যবাদ!"})]}):c.jsxs("form",{onSubmit:r,className:"space-y-4",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"আপনার নাম"}),c.jsx("input",{type:"text",required:!0,placeholder:"যেমন: আহসান হাবীব",value:n.name,onChange:s=>i({...n,name:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"ইমেইল ঠিকানা"}),c.jsx("input",{type:"email",required:!0,placeholder:"ahsan@example.com",value:n.email,onChange:s=>i({...n,email:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"বিষয়"}),c.jsx("input",{type:"text",required:!0,value:n.subject,onChange:s=>i({...n,subject:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"আপনার বার্তা"}),c.jsx("textarea",{rows:4,required:!0,placeholder:"আপনার প্রজেক্ট সম্পর্কিত যেকোনো প্রশ্ন বা মেসেজ লিখুন...",value:n.message,onChange:s=>i({...n,message:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input resize-none"})]}),c.jsxs("button",{type:"submit",className:"w-full py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-xl shadow-brand-red/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2",children:[c.jsx(ny,{className:"w-4 h-4"}),c.jsx("span",{children:"মেসেজ সেন্ড করুন"})]})]})]})})]})})}function Nw(){const{setActiveTab:t,switchRoleDemo:e}=Rr();return c.jsxs("footer",{className:"w-full glass-panel border-t border-brand-red/20 mt-20 py-12 px-4 sm:px-6 lg:px-8",children:[c.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[c.jsxs("div",{className:"md:col-span-2 space-y-4",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-red to-brand-flame p-0.5 shadow-[0_0_15px_rgba(255,0,51,0.3)]",children:c.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[10px] p-1.5 flex items-center justify-center",children:c.jsx("img",{src:"/logo.svg",alt:"Kuakata Multimedia Logo",className:"w-full h-full object-contain"})})}),c.jsxs("span",{className:"text-lg font-black text-white tracking-wider",children:["KUAKATA ",c.jsx("span",{className:"text-gradient",children:"MULTIMEDIA"})]})]}),c.jsx("p",{className:"text-xs text-slate-400 max-w-md leading-relaxed",children:"কুয়াকাটা মাল্টিমিডিয়া লিমিটেড - ৩ডি অ্যানিমেশন, মোশন পিকচার্স, ভার্চুয়াল রিয়েলিটি এবং আধুনিক টিম পোর্টফোলিও & পে-রোল সলিউশন প্রোভাইডার।"}),c.jsx("p",{className:"text-xs text-brand-red font-mono font-bold",children:"Official Web Domain: www.kuakatamultimedia.com"})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider mb-3",children:"কুইক লিঙ্কস"}),c.jsxs("ul",{className:"space-y-2 text-xs text-slate-400",children:[c.jsx("li",{children:c.jsx("button",{onClick:()=>t("home"),className:"hover:text-brand-red transition-colors",children:"হোম পেজ"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>t("team"),className:"hover:text-brand-red transition-colors",children:"৩ডি টিম মেম্বারস"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>t("portfolio"),className:"hover:text-brand-red transition-colors",children:"প্রজেক্ট গ্যালারি"})}),c.jsx("li",{children:c.jsx("button",{onClick:()=>t("contact"),className:"hover:text-brand-red transition-colors",children:"যোগাযোগ"})})]})]}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider mb-3",children:"সিস্টেম পোর্টাল"}),c.jsxs("div",{className:"space-y-2",children:[c.jsxs("button",{onClick:()=>e("admin"),className:"w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/30 hover:bg-brand-red hover:text-white transition-all flex items-center gap-2",children:[c.jsx(Nr,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"অ্যাডমিন ড্যাশবোর্ড প্যানেল"})]}),c.jsxs("button",{onClick:()=>e("member"),className:"w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-brand-amber/10 text-brand-amber border border-brand-amber/30 hover:bg-brand-amber hover:text-dark-900 transition-all flex items-center gap-2",children:[c.jsx(Ia,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"মেম্বার মাই-পোর্টাল"})]})]})]})]}),c.jsxs("div",{className:"max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[c.jsx("p",{children:"© 2026 Kuakata Multimedia (www.kuakatamultimedia.com). সর্বস্বত্ব সংরক্ষিত।"}),c.jsxs("p",{className:"flex items-center gap-1",children:["Crafted with ",c.jsx(W_,{className:"w-3 h-3 text-brand-red fill-brand-red"})," for 3D Multimedia Innovation"]})]})]})}function Pw({isOpen:t,onClose:e}){const{login:n,switchRoleDemo:i}=Rr(),[r,s]=Ee.useState(""),[a,o]=Ee.useState(""),[l,u]=Ee.useState("");if(!t)return null;const f=p=>{p.preventDefault(),u("");const g=n(r,a);g.success?e():u(g.message)},h=p=>{i(p),e()};return c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/85 backdrop-blur-md animate-fade-in",children:c.jsxs("div",{className:"relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-brand-red/40 shadow-[0_0_50px_rgba(255,0,51,0.25)]",children:[c.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-full glass-panel text-slate-400 hover:text-white",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsxs("div",{className:"text-center mb-6",children:[c.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 mx-auto mb-3 shadow-lg shadow-brand-red/40",children:c.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[14px] p-2 flex items-center justify-center",children:c.jsx("img",{src:"/logo.svg",alt:"Logo",className:"w-full h-full object-contain"})})}),c.jsx("h3",{className:"text-2xl font-black text-white",children:"পোর্টালে প্রবেশ করুন"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"অ্যাডমিন বা মেম্বার হিসেবে সাইন ইন করুন"})]}),l&&c.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-400 text-xs flex items-center gap-2",children:[c.jsx(H_,{className:"w-4 h-4 shrink-0"}),c.jsx("span",{children:l})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[c.jsxs("button",{type:"button",onClick:()=>h("admin"),className:"p-3 rounded-2xl glass-panel border border-brand-red/40 hover:bg-brand-red/10 transition-colors text-left group",children:[c.jsx(Nr,{className:"w-5 h-5 text-brand-red mb-1 group-hover:scale-110 transition-transform"}),c.jsx("span",{className:"block text-xs font-bold text-white",children:"অ্যাডমিন ডেমো"}),c.jsx("span",{className:"block text-[10px] text-slate-400",children:"ম্যানেজার / সিইও রোল"})]}),c.jsxs("button",{type:"button",onClick:()=>h("member"),className:"p-3 rounded-2xl glass-panel border border-brand-amber/40 hover:bg-brand-amber/10 transition-colors text-left group",children:[c.jsx(Ia,{className:"w-5 h-5 text-brand-amber mb-1 group-hover:scale-110 transition-transform"}),c.jsx("span",{className:"block text-xs font-bold text-white",children:"মেম্বার ডেমো"}),c.jsx("span",{className:"block text-[10px] text-slate-400",children:"টিম কর্মী রোল"})]})]}),c.jsxs("div",{className:"relative my-4 text-center",children:[c.jsx("div",{className:"absolute inset-0 flex items-center",children:c.jsx("div",{className:"w-full border-t border-slate-800"})}),c.jsx("span",{className:"relative px-3 bg-dark-900 text-[11px] text-slate-500 font-medium",children:"অথবা ইমেইল দিয়ে লগইন করুন"})]}),c.jsxs("form",{onSubmit:f,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"ইমেইল ঠিকানা"}),c.jsxs("div",{className:"relative",children:[c.jsx(mx,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),c.jsx("input",{type:"text",required:!0,placeholder:"admin@kuakatamultimedia.com",value:r,onChange:p=>s(p.target.value),className:"w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"পাসওয়ার্ড"}),c.jsxs("div",{className:"relative",children:[c.jsx(px,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),c.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:a,onChange:p=>o(p.target.value),className:"w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"})]})]}),c.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-[1.01] transition-transform",children:"লগইন করুন"})]})]})})}function Lw(){const{members:t,addMember:e,updateMember:n,deleteMember:i}=Kn(),[r,s]=Ee.useState(""),[a,o]=Ee.useState(!1),[l,u]=Ee.useState(null),[f,h]=Ee.useState({name:"",email:"",phone:"",role:"member",designation:"৩ডি অ্যানিমেটর",dept:"3D & VFX",basic_salary:5e4,skills:"Blender, Three.js, Maya"}),p=t.filter(_=>_.name.toLowerCase().includes(r.toLowerCase())||_.email.toLowerCase().includes(r.toLowerCase())||_.dept.toLowerCase().includes(r.toLowerCase())),g=_=>{_.preventDefault();const m=typeof f.skills=="string"?f.skills.split(",").map(d=>d.trim()):f.skills;e({...f,basic_salary:Number(f.basic_salary),skills:m,join_date:new Date().toISOString().split("T")[0]}),o(!1),h({name:"",email:"",phone:"",role:"member",designation:"৩ডি অ্যানিমেটর",dept:"3D & VFX",basic_salary:5e4,skills:"Blender, Three.js, Maya"})},y=_=>{if(_.preventDefault(),!l)return;const m=typeof l.skills=="string"?l.skills.split(",").map(d=>d.trim()):l.skills;n({...l,basic_salary:Number(l.basic_salary),skills:m}),u(null)};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[c.jsxs("div",{className:"relative w-full sm:w-72",children:[c.jsx(vx,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-3"}),c.jsx("input",{type:"text",placeholder:"মেম্বার নাম, ইমেইল বা বিভাগ...",value:r,onChange:_=>s(_.target.value),className:"w-full pl-10 pr-4 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("button",{id:"btn-add-member",onClick:()=>o(!0),className:"w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-cyan to-brand-purple text-dark-900 shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2",children:[c.jsx(ay,{className:"w-4 h-4"}),c.jsx("span",{children:"নতুন মেম্বার যুক্ত করুন"})]})]}),c.jsx("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800",children:c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs",children:[c.jsx("thead",{className:"bg-dark-800/80 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider",children:c.jsxs("tr",{children:[c.jsx("th",{className:"p-4",children:"মেম্বার নাম & প্রোফাইল"}),c.jsx("th",{className:"p-4",children:"রোল (Role)"}),c.jsx("th",{className:"p-4",children:"ডিপার্টমেন্ট"}),c.jsx("th",{className:"p-4",children:"বেসিক বেতন"}),c.jsx("th",{className:"p-4",children:"যোগদানের তারিখ"}),c.jsx("th",{className:"p-4 text-right",children:"অ্যাকশন"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-800/60",children:p.map(_=>c.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[c.jsx("td",{className:"p-4",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:_.avatar,alt:_.name,className:"w-10 h-10 rounded-full object-cover border border-brand-cyan/40"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-bold text-white block",children:_.name}),c.jsx("span",{className:"text-[11px] text-slate-400",children:_.designation})]})]})}),c.jsx("td",{className:"p-4",children:c.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${_.role==="admin"?"bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30":"bg-brand-purple/10 text-brand-purple border border-brand-purple/30"}`,children:[_.role==="admin"?c.jsx(Nr,{className:"w-3 h-3"}):c.jsx(Ia,{className:"w-3 h-3"}),_.role==="admin"?"অ্যাডমিন (Admin)":"টিম মেম্বার"]})}),c.jsx("td",{className:"p-4 text-slate-300 font-medium",children:_.dept}),c.jsxs("td",{className:"p-4 font-bold text-emerald-400",children:["৳ ",_.basic_salary.toLocaleString()]}),c.jsx("td",{className:"p-4 text-slate-400",children:_.join_date}),c.jsxs("td",{className:"p-4 text-right space-x-2",children:[c.jsx("button",{onClick:()=>u(_),title:"সম্পাদনা",className:"p-2 rounded-lg glass-panel text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40",children:c.jsx(gx,{className:"w-3.5 h-3.5"})}),_.role!=="admin"&&c.jsx("button",{onClick:()=>{window.confirm(`${_.name}-কে রিমুভ করতে নিশ্চিত?`)&&i(_.id)},title:"রিমুভ করুন",className:"p-2 rounded-lg glass-panel text-slate-300 hover:text-rose-400 hover:border-rose-500/40",children:c.jsx(_x,{className:"w-3.5 h-3.5"})})]})]},_.id))})]})})}),a&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:c.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[c.jsx("button",{onClick:()=>o(!1),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"নতুন মেম্বার যুক্ত করুন"}),c.jsxs("form",{onSubmit:g,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পূর্ণ নাম"}),c.jsx("input",{type:"text",required:!0,placeholder:"যেমন: সাকিবা ইসলাম",value:f.name,onChange:_=>h({...f,name:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ইমেইল ঠিকানা"}),c.jsx("input",{type:"email",required:!0,placeholder:"sakiba@kuakatamultimedia.com",value:f.email,onChange:_=>h({...f,email:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ফোন নম্বর"}),c.jsx("input",{type:"text",placeholder:"+880 1700-000000",value:f.phone,onChange:_=>h({...f,phone:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পদবি (Designation)"}),c.jsx("input",{type:"text",required:!0,value:f.designation,onChange:_=>h({...f,designation:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ডিপার্টমেন্ট"}),c.jsxs("select",{value:f.dept,onChange:_=>h({...f,dept:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input",children:[c.jsx("option",{value:"3D & VFX",children:"3D & VFX"}),c.jsx("option",{value:"Web Dev",children:"Web Dev"}),c.jsx("option",{value:"Video Production",children:"Video Production"})]})]})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বেসিক বেতন (টাকা)"}),c.jsx("input",{type:"number",required:!0,value:f.basic_salary,onChange:_=>h({...f,basic_salary:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"রোল (Role)"}),c.jsxs("select",{value:f.role,onChange:_=>h({...f,role:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input",children:[c.jsx("option",{value:"member",children:"টিম মেম্বার"}),c.jsx("option",{value:"admin",children:"অ্যাডমিন (Admin)"})]})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বিশেষ দক্ষতা (কমা দিয়ে লিখুন)"}),c.jsx("input",{type:"text",value:f.skills,onChange:_=>h({...f,skills:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[c.jsx("button",{type:"button",onClick:()=>o(!1),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বাতিল"}),c.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900",children:"মেম্বার সেভ করুন"})]})]})]})}),l&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:c.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[c.jsx("button",{onClick:()=>u(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"মেম্বার তথ্য আপডেট করুন"}),c.jsxs("form",{onSubmit:y,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পূর্ণ নাম"}),c.jsx("input",{type:"text",required:!0,value:l.name,onChange:_=>u({...l,name:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পদবি"}),c.jsx("input",{type:"text",required:!0,value:l.designation,onChange:_=>u({...l,designation:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বেসিক বেতন (টাকা)"}),c.jsx("input",{type:"number",required:!0,value:l.basic_salary,onChange:_=>u({...l,basic_salary:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]})]}),c.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[c.jsx("button",{type:"button",onClick:()=>u(null),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বাতিল"}),c.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900",children:"আপডেট সেভ করুন"})]})]})]})})]})}function Dw(){const{members:t,attendance:e,setDailyAttendance:n}=Kn(),i=new Date().toISOString().split("T")[0],[r,s]=Ee.useState(i),a=y=>{const _=e.find(m=>m.user_id===y&&m.date===r);return _?_.status:"Present"},o=(y,_)=>{n(y,r,_)},l=()=>{t.forEach(y=>{n(y.id,r,"Present")})},u=t.map(y=>a(y.id)),f=u.filter(y=>y==="Present").length,h=u.filter(y=>y==="Absent").length,p=u.filter(y=>y==="Leave").length,g=u.filter(y=>y==="Half-day").length;return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[c.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[c.jsx(Aa,{className:"w-5 h-5 text-brand-cyan"}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-[10px] text-slate-400 font-semibold uppercase",children:"তারিখ নির্বাচন করুন"}),c.jsx("input",{type:"date",value:r,onChange:y=>s(y.target.value),className:"px-3 py-1.5 rounded-xl text-xs glass-input text-white font-bold"})]})]}),c.jsxs("button",{id:"btn-mark-all-present",onClick:l,className:"w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-dark-900 transition-all flex items-center justify-center gap-2",children:[c.jsx(z_,{className:"w-4 h-4"}),c.jsx("span",{children:"সবাইকে উপস্থিত মার্ক করুন (Mark All Present)"})]})]}),c.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-emerald-500/20 text-center",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"উপস্থিত (Present)"}),c.jsxs("span",{className:"text-2xl font-extrabold text-emerald-400",children:[f," জন"]})]}),c.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-rose-500/20 text-center",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"অনুপস্থিত (Absent)"}),c.jsxs("span",{className:"text-2xl font-extrabold text-rose-400",children:[h," জন"]})]}),c.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-amber-500/20 text-center",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"ছুটি (Leave)"}),c.jsxs("span",{className:"text-2xl font-extrabold text-amber-400",children:[p," জন"]})]}),c.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-sky-500/20 text-center",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"হাফ-ডে (Half-day)"}),c.jsxs("span",{className:"text-2xl font-extrabold text-sky-400",children:[g," জন"]})]})]}),c.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800",children:[c.jsxs("div",{className:"p-4 bg-dark-800/60 border-b border-slate-800 flex justify-between items-center",children:[c.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[c.jsx(Wu,{className:"w-4 h-4 text-brand-cyan"}),"তারিখ: ",c.jsx("span",{className:"text-brand-cyan",children:r})," - হাজিরা এন্ট্রি লিস্ট"]}),c.jsxs("span",{className:"text-xs text-slate-400",children:["মোট মেম্বার: ",t.length," জন"]})]}),c.jsx("div",{className:"divide-y divide-slate-800/60",children:t.map(y=>{const _=a(y.id);return c.jsxs("div",{className:"p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors",children:[c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:y.avatar,alt:y.name,className:"w-10 h-10 rounded-full object-cover border border-slate-700"}),c.jsxs("div",{children:[c.jsx("h4",{className:"text-sm font-bold text-white",children:y.name}),c.jsxs("p",{className:"text-[11px] text-slate-400",children:[y.designation," • (",y.dept,")"]})]})]}),c.jsxs("div",{className:"flex flex-wrap items-center gap-2 w-full sm:w-auto",children:[c.jsxs("button",{onClick:()=>o(y.id,"Present"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Present"?"bg-emerald-500 text-dark-900 shadow-md shadow-emerald-500/20":"glass-panel text-slate-400 hover:text-emerald-400"}`,children:[c.jsx(Ua,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"উপস্থিত"})]}),c.jsxs("button",{onClick:()=>o(y.id,"Absent"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Absent"?"bg-rose-500 text-white shadow-md shadow-rose-500/20":"glass-panel text-slate-400 hover:text-rose-400"}`,children:[c.jsx(G_,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"অনুপস্থিত"})]}),c.jsxs("button",{onClick:()=>o(y.id,"Leave"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Leave"?"bg-amber-500 text-dark-900 shadow-md shadow-amber-500/20":"glass-panel text-slate-400 hover:text-amber-400"}`,children:[c.jsx(sy,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"ছুটি"})]}),c.jsxs("button",{onClick:()=>o(y.id,"Half-day"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Half-day"?"bg-sky-500 text-dark-900 shadow-md shadow-sky-500/20":"glass-panel text-slate-400 hover:text-sky-400"}`,children:[c.jsx(Wu,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"হাফ-ডে"})]})]})]},y.id)})})]})]})}var cf={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var C=new OffscreenCanvas(1,1),A=C.getContext("2d");A.fillRect(0,0,1,1);var $=C.transferToImageBitmap();A.createPattern($,"no-repeat")}catch{return!1}return!0}();function l(){}function u(C){var A=n.exports.Promise,$=A!==void 0?A:e.Promise;return typeof $=="function"?new $(C):(C(l,l),null)}var f=function(C,A){return{transform:function($){if(C)return $;if(A.has($))return A.get($);var se=new OffscreenCanvas($.width,$.height),F=se.getContext("2d");return F.drawImage($,0,0),A.set($,se),se},clear:function(){A.clear()}}}(o,new Map),h=function(){var C=Math.floor(16.666666666666668),A,$,se={},F=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(A=function(X){var Q=Math.random();return se[Q]=requestAnimationFrame(function ie(oe){F===oe||F+C-1<oe?(F=oe,delete se[Q],X()):se[Q]=requestAnimationFrame(ie)}),Q},$=function(X){se[X]&&cancelAnimationFrame(se[X])}):(A=function(X){return setTimeout(X,C)},$=function(X){return clearTimeout(X)}),{frame:A,cancel:$}}(),p=function(){var C,A,$={};function se(F){function X(Q,ie){F.postMessage({options:Q||{},callback:ie})}F.init=function(ie){var oe=ie.transferControlToOffscreen();F.postMessage({canvas:oe},[oe])},F.fire=function(ie,oe,le){if(A)return X(ie,null),A;var Te=Math.random().toString(36).slice(2);return A=u(function(xe){function k(qe){qe.data.callback===Te&&(delete $[Te],F.removeEventListener("message",k),A=null,f.clear(),le(),xe())}F.addEventListener("message",k),X(ie,Te),$[Te]=k.bind(null,{data:{callback:Te}})}),A},F.reset=function(){F.postMessage({reset:!0});for(var ie in $)$[ie](),delete $[ie]}}return function(){if(C)return C;if(!i&&s){var F=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{C=new Worker(URL.createObjectURL(new Blob([F])))}catch(X){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",X),null}se(C)}return C}}(),g={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(C,A){return A?A(C):C}function _(C){return C!=null}function m(C,A,$){return y(C&&_(C[A])?C[A]:g[A],$)}function d(C){return C<0?0:Math.floor(C)}function v(C,A){return Math.floor(Math.random()*(A-C))+C}function x(C){return parseInt(C,16)}function M(C){return C.map(R)}function R(C){var A=String(C).replace(/[^0-9a-f]/gi,"");return A.length<6&&(A=A[0]+A[0]+A[1]+A[1]+A[2]+A[2]),{r:x(A.substring(0,2)),g:x(A.substring(2,4)),b:x(A.substring(4,6))}}function E(C){var A=m(C,"origin",Object);return A.x=m(A,"x",Number),A.y=m(A,"y",Number),A}function T(C){C.width=document.documentElement.clientWidth,C.height=document.documentElement.clientHeight}function L(C){var A=C.getBoundingClientRect();C.width=A.width,C.height=A.height}function V(C){var A=document.createElement("canvas");return A.style.position="fixed",A.style.top="0px",A.style.left="0px",A.style.pointerEvents="none",A.style.zIndex=C,A}function S(C,A,$,se,F,X,Q,ie,oe){C.save(),C.translate(A,$),C.rotate(X),C.scale(se,F),C.arc(0,0,1,Q,ie,oe),C.restore()}function N(C){var A=C.angle*(Math.PI/180),$=C.spread*(Math.PI/180);return{x:C.x,y:C.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:C.startVelocity*.5+Math.random()*C.startVelocity,angle2D:-A+(.5*$-Math.random()*$),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:C.color,shape:C.shape,tick:0,totalTicks:C.ticks,decay:C.decay,drift:C.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:C.gravity*3,ovalScalar:.6,scalar:C.scalar,flat:C.flat}}function ee(C,A){A.x+=Math.cos(A.angle2D)*A.velocity+A.drift,A.y+=Math.sin(A.angle2D)*A.velocity+A.gravity,A.velocity*=A.decay,A.flat?(A.wobble=0,A.wobbleX=A.x+10*A.scalar,A.wobbleY=A.y+10*A.scalar,A.tiltSin=0,A.tiltCos=0,A.random=1):(A.wobble+=A.wobbleSpeed,A.wobbleX=A.x+10*A.scalar*Math.cos(A.wobble),A.wobbleY=A.y+10*A.scalar*Math.sin(A.wobble),A.tiltAngle+=.1,A.tiltSin=Math.sin(A.tiltAngle),A.tiltCos=Math.cos(A.tiltAngle),A.random=Math.random()+2);var $=A.tick++/A.totalTicks,se=A.x+A.random*A.tiltCos,F=A.y+A.random*A.tiltSin,X=A.wobbleX+A.random*A.tiltCos,Q=A.wobbleY+A.random*A.tiltSin;if(C.fillStyle="rgba("+A.color.r+", "+A.color.g+", "+A.color.b+", "+(1-$)+")",C.beginPath(),a&&A.shape.type==="path"&&typeof A.shape.path=="string"&&Array.isArray(A.shape.matrix))C.fill(J(A.shape.path,A.shape.matrix,A.x,A.y,Math.abs(X-se)*.1,Math.abs(Q-F)*.1,Math.PI/10*A.wobble));else if(A.shape.type==="bitmap"){var ie=Math.PI/10*A.wobble,oe=Math.abs(X-se)*.1,le=Math.abs(Q-F)*.1,Te=A.shape.bitmap.width*A.scalar,xe=A.shape.bitmap.height*A.scalar,k=new DOMMatrix([Math.cos(ie)*oe,Math.sin(ie)*oe,-Math.sin(ie)*le,Math.cos(ie)*le,A.x,A.y]);k.multiplySelf(new DOMMatrix(A.shape.matrix));var qe=C.createPattern(f.transform(A.shape.bitmap),"no-repeat");qe.setTransform(k),C.globalAlpha=1-$,C.fillStyle=qe,C.fillRect(A.x-Te/2,A.y-xe/2,Te,xe),C.globalAlpha=1}else if(A.shape==="circle")C.ellipse?C.ellipse(A.x,A.y,Math.abs(X-se)*A.ovalScalar,Math.abs(Q-F)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI):S(C,A.x,A.y,Math.abs(X-se)*A.ovalScalar,Math.abs(Q-F)*A.ovalScalar,Math.PI/10*A.wobble,0,2*Math.PI);else if(A.shape==="star")for(var ue=Math.PI/2*3,we=4*A.scalar,ye=8*A.scalar,Pe=A.x,Ce=A.y,Le=5,Ze=Math.PI/Le;Le--;)Pe=A.x+Math.cos(ue)*ye,Ce=A.y+Math.sin(ue)*ye,C.lineTo(Pe,Ce),ue+=Ze,Pe=A.x+Math.cos(ue)*we,Ce=A.y+Math.sin(ue)*we,C.lineTo(Pe,Ce),ue+=Ze;else C.moveTo(Math.floor(A.x),Math.floor(A.y)),C.lineTo(Math.floor(A.wobbleX),Math.floor(F)),C.lineTo(Math.floor(X),Math.floor(Q)),C.lineTo(Math.floor(se),Math.floor(A.wobbleY));return C.closePath(),C.fill(),A.tick<A.totalTicks}function te(C,A,$,se,F){var X=A.slice(),Q=C.getContext("2d"),ie,oe,le=u(function(Te){function xe(){ie=oe=null,Q.clearRect(0,0,se.width,se.height),f.clear(),F(),Te()}function k(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=C.width=r.width,se.height=C.height=r.height),!se.width&&!se.height&&($(C),se.width=C.width,se.height=C.height),Q.clearRect(0,0,se.width,se.height),X=X.filter(function(qe){return ee(Q,qe)}),X.length?ie=h.frame(k):xe()}ie=h.frame(k),oe=xe});return{addFettis:function(Te){return X=X.concat(Te),le},canvas:C,promise:le,reset:function(){ie&&h.cancel(ie),oe&&oe()}}}function U(C,A){var $=!C,se=!!m(A||{},"resize"),F=!1,X=m(A,"disableForReducedMotion",Boolean),Q=s&&!!m(A||{},"useWorker"),ie=Q?p():null,oe=$?T:L,le=C&&ie?!!C.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,xe;function k(ue,we,ye){for(var Pe=m(ue,"particleCount",d),Ce=m(ue,"angle",Number),Le=m(ue,"spread",Number),Ze=m(ue,"startVelocity",Number),P=m(ue,"decay",Number),b=m(ue,"gravity",Number),Y=m(ue,"drift",Number),Z=m(ue,"colors",M),ae=m(ue,"ticks",Number),ne=m(ue,"shapes"),ke=m(ue,"scalar"),Re=!!m(ue,"flat"),de=E(ue),pe=Pe,Ue=[],ce=C.width*de.x,pt=C.height*de.y;pe--;)Ue.push(N({x:ce,y:pt,angle:Ce,spread:Le,startVelocity:Ze,color:Z[pe%Z.length],shape:ne[v(0,ne.length)],ticks:ae,decay:P,gravity:b,drift:Y,scalar:ke,flat:Re}));return xe?xe.addFettis(Ue):(xe=te(C,Ue,oe,we,ye),xe.promise)}function qe(ue){var we=X||m(ue,"disableForReducedMotion",Boolean),ye=m(ue,"zIndex",Number);if(we&&Te)return u(function(Ze){Ze()});$&&xe?C=xe.canvas:$&&!C&&(C=V(ye),document.body.appendChild(C)),se&&!le&&oe(C);var Pe={width:C.width,height:C.height};ie&&!le&&ie.init(C),le=!0,ie&&(C.__confetti_initialized=!0);function Ce(){if(ie){var Ze={getBoundingClientRect:function(){if(!$)return C.getBoundingClientRect()}};oe(Ze),ie.postMessage({resize:{width:Ze.width,height:Ze.height}});return}Pe.width=Pe.height=null}function Le(){xe=null,se&&(F=!1,e.removeEventListener("resize",Ce)),$&&C&&(document.body.contains(C)&&document.body.removeChild(C),C=null,le=!1)}return se&&!F&&(F=!0,e.addEventListener("resize",Ce,!1)),ie?ie.fire(ue,Pe,Le):k(ue,Pe,Le)}return qe.reset=function(){ie&&ie.reset(),xe&&xe.reset()},qe}var K;function q(){return K||(K=U(null,{useWorker:!0,resize:!0})),K}function J(C,A,$,se,F,X,Q){var ie=new Path2D(C),oe=new Path2D;oe.addPath(ie,new DOMMatrix(A));var le=new Path2D;return le.addPath(oe,new DOMMatrix([Math.cos(Q)*F,Math.sin(Q)*F,-Math.sin(Q)*X,Math.cos(Q)*X,$,se])),le}function D(C){if(!a)throw new Error("path confetti are not supported in this browser");var A,$;typeof C=="string"?A=C:(A=C.path,$=C.matrix);var se=new Path2D(A),F=document.createElement("canvas"),X=F.getContext("2d");if(!$){for(var Q=1e3,ie=Q,oe=Q,le=0,Te=0,xe,k,qe=0;qe<Q;qe+=2)for(var ue=0;ue<Q;ue+=2)X.isPointInPath(se,qe,ue,"nonzero")&&(ie=Math.min(ie,qe),oe=Math.min(oe,ue),le=Math.max(le,qe),Te=Math.max(Te,ue));xe=le-ie,k=Te-oe;var we=10,ye=Math.min(we/xe,we/k);$=[ye,0,0,ye,-Math.round(xe/2+ie)*ye,-Math.round(k/2+oe)*ye]}return{type:"path",path:A,matrix:$}}function B(C){var A,$=1,se="#000000",F='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof C=="string"?A=C:(A=C.text,$="scalar"in C?C.scalar:$,F="fontFamily"in C?C.fontFamily:F,se="color"in C?C.color:se);var X=10*$,Q=""+X+"px "+F,ie=new OffscreenCanvas(X,X),oe=ie.getContext("2d");oe.font=Q;var le=oe.measureText(A),Te=Math.ceil(le.actualBoundingBoxRight+le.actualBoundingBoxLeft),xe=Math.ceil(le.actualBoundingBoxAscent+le.actualBoundingBoxDescent),k=2,qe=le.actualBoundingBoxLeft+k,ue=le.actualBoundingBoxAscent+k;Te+=k+k,xe+=k+k,ie=new OffscreenCanvas(Te,xe),oe=ie.getContext("2d"),oe.font=Q,oe.fillStyle=se,oe.fillText(A,qe,ue);var we=1/$;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[we,0,0,we,-Te*we/2,-xe*we/2]}}n.exports=function(){return q().apply(this,arguments)},n.exports.reset=function(){q().reset()},n.exports.create=U,n.exports.shapeFromPath=D,n.exports.shapeFromText=B})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),cf,!1);const Uw=cf.exports;cf.exports.create;function Iw(){const{salaries:t,updateSalaryStatus:e,members:n}=Kn(),[i,r]=Ee.useState(null),[s,a]=Ee.useState(null),[o,l]=Ee.useState(0),[u,f]=Ee.useState(""),h=t.reduce((_,m)=>_+m.net_salary,0),p=t.filter(_=>_.paid_status==="Paid").reduce((_,m)=>_+m.net_salary,0),g=(_,m)=>{const d=m==="Paid"?"Pending":"Paid";if(d==="Paid")try{Uw({particleCount:80,spread:70,origin:{y:.6}})}catch{}e(_.id,d)},y=_=>{_.preventDefault(),s&&(e(s.id,s.paid_status,o,u),a(null))};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-brand-cyan/30",children:[c.jsx("span",{className:"text-xs text-slate-400 font-bold uppercase tracking-wider block",children:"মোট চলতি পে-রোল বাজেট"}),c.jsxs("span",{className:"text-3xl font-extrabold text-white mt-1 block",children:["৳ ",h.toLocaleString()]}),c.jsx("span",{className:"text-[11px] text-slate-400 mt-1 block",children:"জুলাই ২০২৬ সেশন"})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-emerald-500/30",children:[c.jsx("span",{className:"text-xs text-slate-400 font-bold uppercase tracking-wider block",children:"পরিশোধিত পে-রোল (Paid)"}),c.jsxs("span",{className:"text-3xl font-extrabold text-emerald-400 mt-1 block",children:["৳ ",p.toLocaleString()]}),c.jsxs("span",{className:"text-[11px] text-slate-400 mt-1 block",children:[t.filter(_=>_.paid_status==="Paid").length," জন মেম্বার পরিশোধিত"]})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-amber-500/30",children:[c.jsx("span",{className:"text-xs text-slate-400 font-bold uppercase tracking-wider block",children:"বকেয়া পে-রোল (Pending)"}),c.jsxs("span",{className:"text-3xl font-extrabold text-amber-400 mt-1 block",children:["৳ ",(h-p).toLocaleString()]}),c.jsxs("span",{className:"text-[11px] text-slate-400 mt-1 block",children:[t.filter(_=>_.paid_status==="Pending").length," জন মেম্বার বকেয়া"]})]})]}),c.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800",children:[c.jsx("div",{className:"p-4 bg-dark-800/80 border-b border-slate-800 flex justify-between items-center",children:c.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[c.jsx(ps,{className:"w-4 h-4 text-brand-cyan"}),"টিম মেম্বারদের বেতন ও পে-রোল স্টেটমেন্ট"]})}),c.jsx("div",{className:"overflow-x-auto",children:c.jsxs("table",{className:"w-full text-left text-xs",children:[c.jsx("thead",{className:"bg-dark-800/40 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider",children:c.jsxs("tr",{children:[c.jsx("th",{className:"p-4",children:"মেম্বার নাম"}),c.jsx("th",{className:"p-4",children:"বেসিক বেতন"}),c.jsx("th",{className:"p-4",children:"বোনাস (+)"}),c.jsx("th",{className:"p-4",children:"অনুপস্থিতি কর্তন (-)"}),c.jsx("th",{className:"p-4",children:"নিট প্রদেয় বেতন"}),c.jsx("th",{className:"p-4",children:"পেমেন্ট স্ট্যাটাস"}),c.jsx("th",{className:"p-4 text-right",children:"অ্যাকশন / স্লিপ"})]})}),c.jsx("tbody",{className:"divide-y divide-slate-800/60",children:t.map(_=>{const m=_.paid_status==="Paid",d=n.find(v=>v.id===_.user_id);return c.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[c.jsx("td",{className:"p-4",children:c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsx("img",{src:(d==null?void 0:d.avatar)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop",alt:_.user_name,className:"w-9 h-9 rounded-full object-cover border border-slate-700"}),c.jsxs("div",{children:[c.jsx("span",{className:"font-bold text-white block",children:_.user_name}),c.jsx("span",{className:"text-[11px] text-slate-400",children:_.month})]})]})}),c.jsxs("td",{className:"p-4 text-slate-300",children:["৳ ",_.basic_salary.toLocaleString()]}),c.jsxs("td",{className:"p-4 text-emerald-400 font-semibold flex items-center gap-1",children:["+৳ ",_.bonus.toLocaleString(),c.jsx("button",{onClick:()=>{a(_),l(_.bonus),f(_.note||"")},className:"p-1 rounded text-slate-400 hover:text-brand-cyan",title:"বোনাস সম্পাদনা",children:c.jsx(gx,{className:"w-3 h-3"})})]}),c.jsxs("td",{className:"p-4 text-rose-400 font-semibold",children:["-৳ ",_.deductions.toLocaleString(),c.jsxs("span",{className:"block text-[10px] text-slate-500 font-normal",children:["(",_.absent_days," দিন অনুপস্থিত)"]})]}),c.jsxs("td",{className:"p-4 text-base font-extrabold text-brand-cyan",children:["৳ ",_.net_salary.toLocaleString()]}),c.jsx("td",{className:"p-4",children:c.jsxs("button",{onClick:()=>g(_,_.paid_status),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${m?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-amber-500/20 text-amber-400 border border-amber-500/30"}`,children:[m?c.jsx(Ua,{className:"w-3.5 h-3.5"}):c.jsx(Wu,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:m?"পরিশোধিত (Paid)":"বকেয়া (Pending)"})]})}),c.jsx("td",{className:"p-4 text-right",children:c.jsxs("button",{onClick:()=>r(_),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-brand-cyan hover:border-brand-cyan/40",children:[c.jsx(V_,{className:"w-3.5 h-3.5"}),c.jsx("span",{children:"পে-স্লিপ দেখুন"})]})})]},_.id)})})]})})]}),i&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:c.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-brand-cyan/40 shadow-2xl",children:[c.jsx("button",{onClick:()=>r(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsxs("div",{className:"text-center pb-4 border-b border-slate-800",children:[c.jsx("span",{className:"text-xs uppercase font-extrabold tracking-widest text-brand-cyan",children:"KUAKATA MULTIMEDIA PAYROLL"}),c.jsx("h3",{className:"text-2xl font-extrabold text-white mt-1",children:"মাসিক বেতন পে-স্লিপ"}),c.jsxs("p",{className:"text-xs text-slate-400",children:["সেশন: ",i.month]})]}),c.jsxs("div",{className:"py-6 space-y-3 text-xs",children:[c.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60",children:[c.jsx("span",{className:"text-slate-400",children:"মেম্বারের নাম:"}),c.jsx("span",{className:"font-bold text-white",children:i.user_name})]}),c.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60",children:[c.jsx("span",{className:"text-slate-400",children:"বেসিক বেতন:"}),c.jsxs("span",{className:"font-semibold text-slate-200",children:["৳ ",i.basic_salary.toLocaleString()]})]}),c.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60 text-emerald-400",children:[c.jsx("span",{children:"পারফরম্যান্স বোনাস:"}),c.jsxs("span",{className:"font-semibold",children:["+৳ ",i.bonus.toLocaleString()]})]}),c.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60 text-rose-400",children:[c.jsx("span",{children:"অনুপস্থিতি জরিমানা/ডিডাকশন:"}),c.jsxs("span",{className:"font-semibold",children:["-৳ ",i.deductions.toLocaleString()]})]}),c.jsxs("div",{className:"flex justify-between py-2 text-sm font-extrabold bg-dark-800 p-3 rounded-xl border border-brand-cyan/30",children:[c.jsx("span",{className:"text-white",children:"সর্বমোট প্রদেয় বেতন:"}),c.jsxs("span",{className:"text-brand-cyan",children:["৳ ",i.net_salary.toLocaleString()]})]}),c.jsxs("div",{className:"pt-2",children:[c.jsx("span",{className:"text-slate-400 block mb-1",children:"পেমেন্ট স্ট্যাটাস:"}),c.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold ${i.paid_status==="Paid"?"bg-emerald-500/20 text-emerald-400":"bg-amber-500/20 text-amber-400"}`,children:i.paid_status==="Paid"?`Paid (ট্রানজেকশন ID: ${i.transaction_id||"TXN-998811"})`:"Pending"})]})]}),c.jsxs("div",{className:"pt-4 border-t border-slate-800 flex justify-end gap-2",children:[c.jsx("button",{onClick:()=>r(null),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বন্ধ করুন"}),c.jsxs("button",{onClick:()=>window.print(),className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900 flex items-center gap-1.5",children:[c.jsx(ty,{className:"w-4 h-4"}),c.jsx("span",{children:"প্রিন্ট / ডাউনলোড স্লিপ"})]})]})]})}),s&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:c.jsxs("div",{className:"relative w-full max-w-md glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[c.jsx("button",{onClick:()=>a(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"বোনাস ও নোট যুক্ত করুন"}),c.jsxs("form",{onSubmit:y,className:"space-y-4 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-300 mb-1",children:"বোনাস পরিমাণ (টাকা)"}),c.jsx("input",{type:"number",value:o,onChange:_=>l(_.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-300 mb-1",children:"অতিরিক্ত নোট"}),c.jsx("input",{type:"text",placeholder:"যেমন: ঈদের স্পেশাল বোনাস",value:u,onChange:_=>f(_.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),c.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[c.jsx("button",{type:"button",onClick:()=>a(null),className:"px-4 py-2 rounded-xl glass-panel text-slate-300",children:"বাতিল"}),c.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl font-bold bg-brand-cyan text-dark-900",children:"সেভ করুন"})]})]})]})})]})}function kw(){const{projects:t,addProject:e,deleteProject:n}=Kn(),[i,r]=Ee.useState(!1),[s,a]=Ee.useState({title:"",category:"3D & Web",description:"",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/newproject",client:"কুয়াকাটা মাল্টিমিডিয়া ল্যাব",tags:"Three.js, WebGL, Motion"}),o=l=>{l.preventDefault();const u=typeof s.tags=="string"?s.tags.split(",").map(f=>f.trim()):s.tags;e({...s,tags:u,featured:!0}),r(!1),a({title:"",category:"3D & Web",description:"",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/newproject",client:"কুয়াকাটা মাল্টিমিডিয়া ল্যাব",tags:"Three.js, WebGL, Motion"})};return c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[c.jsxs("div",{children:[c.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[c.jsx(Ta,{className:"w-5 h-5 text-brand-cyan"}),"পোর্টফোলিও প্রজেক্ট ম্যানেজমেন্ট"]}),c.jsx("p",{className:"text-xs text-slate-400",children:"পাবলিক হোমপেজে ৩ডি ক্যারেসলে প্রদর্শিত প্রজেক্টসমূহ"})]}),c.jsxs("button",{onClick:()=>r(!0),className:"px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900 shadow-md hover:scale-105 transition-transform flex items-center gap-2",children:[c.jsx(xx,{className:"w-4 h-4"}),c.jsx("span",{children:"নতুন ৩ডি প্রজেক্ট যুক্ত করুন"})]})]}),c.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(l=>c.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between",children:[c.jsxs("div",{className:"relative h-48 bg-dark-800",children:[c.jsx("img",{src:l.image,alt:l.title,className:"w-full h-full object-cover"}),c.jsx("span",{className:"absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 text-brand-cyan border border-brand-cyan/30",children:l.category}),c.jsx("button",{onClick:()=>{window.confirm("এই প্রজেক্টটি ডিলিট করতে চান?")&&n(l.id)},className:"absolute top-3 right-3 p-2 rounded-full bg-rose-950/80 text-rose-400 hover:text-white border border-rose-500/40",children:c.jsx(_x,{className:"w-4 h-4"})})]}),c.jsxs("div",{className:"p-5 space-y-3",children:[c.jsx("h4",{className:"text-lg font-bold text-white",children:l.title}),c.jsx("p",{className:"text-xs text-slate-300 line-clamp-2",children:l.description}),c.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800",children:[c.jsxs("span",{children:["ক্লায়েন্ট: ",l.client]}),c.jsxs("a",{href:l.demo_url,target:"_blank",rel:"noopener noreferrer",className:"text-brand-cyan font-bold flex items-center gap-1",children:[c.jsx("span",{children:"ডেমো"}),c.jsx(Qd,{className:"w-3.5 h-3.5"})]})]})]})]},l.id))}),i&&c.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:c.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[c.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:c.jsx(Xi,{className:"w-5 h-5"})}),c.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"নতুন ৩ডি প্রজেক্ট যোগ করুন"}),c.jsxs("form",{onSubmit:o,className:"space-y-4",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"প্রজেক্ট টাইটেল"}),c.jsx("input",{type:"text",required:!0,placeholder:"যেমন: ৩ডি ভিআর ট্যুরিযম সিমেুলেটর",value:s.title,onChange:l=>a({...s,title:l.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ক্যাটাগরি"}),c.jsxs("select",{value:s.category,onChange:l=>a({...s,category:l.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input",children:[c.jsx("option",{value:"3D & Web",children:"3D & Web"}),c.jsx("option",{value:"VFX & Motion",children:"VFX & Motion"}),c.jsx("option",{value:"3D Commercial",children:"3D Commercial"}),c.jsx("option",{value:"Interactive Web",children:"Interactive Web"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ক্লায়েন্ট নাম"}),c.jsx("input",{type:"text",required:!0,value:s.client,onChange:l=>a({...s,client:l.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বিস্তারিত বিবরণ"}),c.jsx("textarea",{rows:3,required:!0,value:s.description,onChange:l=>a({...s,description:l.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input resize-none"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ইমেজ URL"}),c.jsx("input",{type:"url",required:!0,value:s.image,onChange:l=>a({...s,image:l.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),c.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[c.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বাতিল"}),c.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900",children:"প্রজেক্ট সেভ করুন"})]})]})]})})]})}function Fw(){const{members:t,attendance:e,salaries:n,projects:i}=Kn(),[r,s]=Ee.useState("overview"),a=t.length,o=new Date().toISOString().split("T")[0],u=e.filter(g=>g.date===o).filter(g=>g.status==="Present"||g.status==="Half-day").length,f=a>0?Math.round(u/a*100):100,h=n.reduce((g,y)=>g+(y.net_salary||0),0),p=n.filter(g=>g.paid_status==="Paid").length;return c.jsxs("div",{className:"min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8",children:[c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-cyan/30 shadow-[0_0_40px_rgba(0,242,254,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6",children:[c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 text-xs font-bold mb-2",children:[c.jsx(Nr,{className:"w-4 h-4"}),c.jsx("span",{children:"অ্যাডমিন ম্যানেজমেন্ট সেন্টার (Leader Dashboard)"})]}),c.jsxs("h1",{className:"text-3xl font-extrabold text-white",children:["কুয়াকাটা মাল্টিমিডিয়া ",c.jsx("span",{className:"text-gradient",children:"টিম পোর্টাল কন্ট্রোল"})]}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"টিম মেম্বার, দৈনিক হাজিরা, বেতনের পে-রোল হিসাব ও ৩ডি পোর্টফোলিও পরিচালনা করুন।"})]}),c.jsxs("div",{className:"flex items-center gap-3",children:[c.jsxs("div",{className:"glass-card px-4 py-2 rounded-2xl border border-emerald-500/30 text-right",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"আজকের হাজিরা হার"}),c.jsxs("span",{className:"text-lg font-extrabold text-emerald-400",children:[f,"%"]})]}),c.jsxs("div",{className:"glass-card px-4 py-2 rounded-2xl border border-brand-purple/30 text-right",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"চলতি মাসের পে-রোল"}),c.jsxs("span",{className:"text-lg font-extrabold text-brand-purple",children:["৳ ",h.toLocaleString()]})]})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-slate-800",children:[c.jsxs("button",{id:"tab-admin-overview",onClick:()=>s("overview"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="overview"?"bg-brand-cyan text-dark-900 shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(ry,{className:"w-4 h-4"}),c.jsx("span",{children:"ওভারভিউ ড্যাশবোর্ড"})]}),c.jsxs("button",{id:"tab-admin-members",onClick:()=>s("members"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="members"?"bg-brand-cyan text-dark-900 shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(hl,{className:"w-4 h-4"}),c.jsxs("span",{children:["মেম্বার ব্যবস্থাপনা (",a,")"]})]}),c.jsxs("button",{id:"tab-admin-attendance",onClick:()=>s("attendance"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="attendance"?"bg-brand-cyan text-dark-900 shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(Aa,{className:"w-4 h-4"}),c.jsx("span",{children:"দৈনিক হাজিরা (Attendance)"})]}),c.jsxs("button",{id:"tab-admin-salary",onClick:()=>s("salary"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="salary"?"bg-brand-cyan text-dark-900 shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(ps,{className:"w-4 h-4"}),c.jsx("span",{children:"বেতন ও পে-রোল (Payroll)"})]}),c.jsxs("button",{id:"tab-admin-projects",onClick:()=>s("projects"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="projects"?"bg-brand-cyan text-dark-900 shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(Ta,{className:"w-4 h-4"}),c.jsxs("span",{children:["প্রজেক্ট পোর্টফোলিও (",i.length,")"]})]})]}),r==="overview"&&c.jsxs("div",{className:"space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-cyan/40 transition-colors",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"মোট টিম মেম্বার"}),c.jsx("div",{className:"p-3 rounded-xl bg-brand-cyan/10 text-brand-cyan",children:c.jsx(hl,{className:"w-6 h-6"})})]}),c.jsxs("div",{className:"text-3xl font-extrabold text-white",children:[a," জন"]}),c.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"৩ডি আর্টিস্ট, ওয়েব ও ভিএফএক্স টিম"})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"আজকের উপস্থিতি"}),c.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 text-emerald-400",children:c.jsx(Ua,{className:"w-6 h-6"})})]}),c.jsxs("div",{className:"text-3xl font-extrabold text-emerald-400",children:[f,"%"]}),c.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"অন-টাইম ডিউটি রেকর্ড"})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-purple/40 transition-colors",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"মাসিক বেতন বাজেট"}),c.jsx("div",{className:"p-3 rounded-xl bg-brand-purple/10 text-brand-purple",children:c.jsx(ps,{className:"w-6 h-6"})})]}),c.jsxs("div",{className:"text-3xl font-extrabold text-white",children:["৳ ",h.toLocaleString()]}),c.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["পরিশোধিত: ",p," / ",n.length]})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-gold/40 transition-colors",children:[c.jsxs("div",{className:"flex items-center justify-between mb-4",children:[c.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"পাবলিক প্রজেক্টস"}),c.jsx("div",{className:"p-3 rounded-xl bg-amber-500/10 text-amber-400",children:c.jsx(Ta,{className:"w-6 h-6"})})]}),c.jsxs("div",{className:"text-3xl font-extrabold text-white",children:[i.length," টি"]}),c.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"৩ডি পোর্টফোলিও শোকেস"})]})]}),c.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[c.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-bold text-brand-cyan uppercase tracking-wider block mb-1",children:"দ্রুত হাজিরা মোড"}),c.jsx("h3",{className:"text-xl font-bold text-white",children:"আজকের টিম হাজিরা এন্ট্রি দিন"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"প্রতিদিনের হাজিরা অনুযায়ী মেম্বারদের মাস শেষে স্বয়ংক্রিয় বেতন ডিডাকশন হিসাব করা হয়।"})]}),c.jsxs("button",{onClick:()=>s("attendance"),className:"w-full py-3 rounded-xl text-xs font-bold bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30 hover:bg-brand-cyan hover:text-dark-900 transition-all flex items-center justify-center gap-2",children:[c.jsx(Aa,{className:"w-4 h-4"}),c.jsx("span",{children:"আজকের হাজিরা শটে যান"}),c.jsx(Vu,{className:"w-4 h-4"})]})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs font-bold text-brand-purple uppercase tracking-wider block mb-1",children:"পে-রোল & বেতন পরিশোধ"}),c.jsx("h3",{className:"text-xl font-bold text-white",children:"মাসিক বেতনের হিসাব ও পেমেন্ট স্ট্যাটাস"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"মেম্বারদের বেসিক বেতন, বোনাস যোগ করা এবং পেইড/পেন্ডিং স্ট্যাটাস আপডেট করুন।"})]}),c.jsxs("button",{onClick:()=>s("salary"),className:"w-full py-3 rounded-xl text-xs font-bold bg-brand-purple/10 text-brand-purple border border-brand-purple/30 hover:bg-brand-purple hover:text-white transition-all flex items-center justify-center gap-2",children:[c.jsx(ps,{className:"w-4 h-4"}),c.jsx("span",{children:"পে-রোল প্যানেলে যান"}),c.jsx(Vu,{className:"w-4 h-4"})]})]})]})]}),r==="members"&&c.jsx(Lw,{}),r==="attendance"&&c.jsx(Dw,{}),r==="salary"&&c.jsx(Iw,{}),r==="projects"&&c.jsx(kw,{})]})}function Ow(){const{user:t}=Rr(),{attendance:e,salaries:n,updateMember:i}=Kn(),[r,s]=Ee.useState("overview"),[a,o]=Ee.useState((t==null?void 0:t.phone)||"+880 1700-000000"),[l,u]=Ee.useState(""),[f,h]=Ee.useState(!1);if(!t)return null;const p=e.filter(E=>E.user_id===t.id),g=p.filter(E=>E.status==="Present").length,y=p.filter(E=>E.status==="Absent").length,_=p.filter(E=>E.status==="Leave").length,m=p.filter(E=>E.status==="Half-day").length,d=p.length||1,v=Math.round((g+m*.5)/d*100),x=n.filter(E=>E.user_id===t.id),M=x[0]||{basic_salary:t.basic_salary,net_salary:t.basic_salary+2500,paid_status:"Paid"},R=E=>{E.preventDefault(),i({...t,phone:a}),h(!0),setTimeout(()=>h(!1),3e3)};return c.jsxs("div",{className:"min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-fade-in",children:[c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-purple/30 shadow-[0_0_40px_rgba(127,0,255,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[c.jsxs("div",{className:"flex items-center gap-4",children:[c.jsxs("div",{className:"relative",children:[c.jsx("img",{src:t.avatar,alt:t.name,className:"w-20 h-20 rounded-full object-cover border-2 border-brand-purple/50 shadow-xl"}),c.jsx("span",{className:"absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-dark-900"})]}),c.jsxs("div",{children:[c.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/30 text-xs font-bold mb-1",children:[c.jsx(Ia,{className:"w-3.5 h-3.5"}),c.jsxs("span",{children:[t.dept," • ",t.role==="admin"?"অ্যাডমিন/লিডার":"টিম মেম্বার"]})]}),c.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:t.name}),c.jsx("p",{className:"text-xs text-slate-300 font-medium",children:t.designation})]})]}),c.jsxs("div",{className:"flex items-center gap-3 w-full md:w-auto",children:[c.jsxs("div",{className:"glass-card px-5 py-3 rounded-2xl border border-emerald-500/30 text-right w-full md:w-auto",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase block",children:"মাসিক হাজিরার হার"}),c.jsxs("span",{className:"text-2xl font-extrabold text-emerald-400",children:[v,"%"]})]}),c.jsxs("div",{className:"glass-card px-5 py-3 rounded-2xl border border-brand-cyan/30 text-right w-full md:w-auto",children:[c.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase block",children:"সর্বশেষ নিট স্যালারি"}),c.jsxs("span",{className:"text-2xl font-extrabold text-brand-cyan",children:["৳ ",M.net_salary.toLocaleString()]})]})]})]}),c.jsxs("div",{className:"flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-slate-800",children:[c.jsxs("button",{id:"tab-member-overview",onClick:()=>s("overview"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="overview"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(Th,{className:"w-4 h-4"}),c.jsx("span",{children:"আমার ড্যাশবোর্ড"})]}),c.jsxs("button",{id:"tab-member-attendance",onClick:()=>s("attendance"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="attendance"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(Aa,{className:"w-4 h-4"}),c.jsx("span",{children:"হাজিরা রিপোর্ট (Attendance Calendar)"})]}),c.jsxs("button",{id:"tab-member-salary",onClick:()=>s("salary"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="salary"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(ps,{className:"w-4 h-4"}),c.jsx("span",{children:"বেতন স্টেটমেন্ট (Salary Statements)"})]}),c.jsxs("button",{id:"tab-member-profile",onClick:()=>s("profile"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="profile"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[c.jsx(px,{className:"w-4 h-4"}),c.jsx("span",{children:"প্রোফাইল & পাসওয়ার্ড"})]})]}),r==="overview"&&c.jsxs("div",{className:"space-y-6",children:[c.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4",children:[c.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-emerald-500/20",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"উপস্থিত দিন"}),c.jsxs("span",{className:"text-2xl font-extrabold text-emerald-400 mt-1 block",children:[g," দিন"]})]}),c.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-rose-500/20",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"অনুপস্থিত দিন"}),c.jsxs("span",{className:"text-2xl font-extrabold text-rose-400 mt-1 block",children:[y," দিন"]})]}),c.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-amber-500/20",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"অনুমোদিত ছুটি"}),c.jsxs("span",{className:"text-2xl font-extrabold text-amber-400 mt-1 block",children:[_," দিন"]})]}),c.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-sky-500/20",children:[c.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"হাফ-ডে ডিউটি"}),c.jsxs("span",{className:"text-2xl font-extrabold text-sky-400 mt-1 block",children:[m," দিন"]})]})]}),c.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-brand-cyan/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-brand-cyan font-bold uppercase tracking-wider block",children:"চলতি মাসের পেমেন্ট স্ট্যাটাস"}),c.jsx("h3",{className:"text-xl font-bold text-white mt-0.5",children:"জুলাই ২০২৬ সেশনের পে-স্লিপ"}),c.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"পেমেন্ট মেথড: ব্যাংক / বিকাশ মেটাল ট্রান্সফার"})]}),c.jsx("div",{className:"flex items-center gap-3",children:c.jsx("span",{className:`px-4 py-2 rounded-xl text-xs font-extrabold ${M.paid_status==="Paid"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-amber-500/20 text-amber-400 border border-amber-500/40"}`,children:M.paid_status==="Paid"?"পরিশোধিত (Paid)":"প্রসেসিং (Pending)"})})]})]}),r==="attendance"&&c.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 space-y-6",children:[c.jsx("div",{className:"flex justify-between items-center pb-4 border-b border-slate-800",children:c.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[c.jsx(Aa,{className:"w-5 h-5 text-brand-purple"}),"মাসিক হাজিরা ক্যালেন্ডার ও রেকর্ডস (জুলাই ২০২৬)"]})}),c.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3",children:p.map(E=>c.jsxs("div",{className:`p-3 rounded-2xl border text-center space-y-1 ${E.status==="Present"?"bg-emerald-950/20 border-emerald-500/30 text-emerald-400":E.status==="Absent"?"bg-rose-950/20 border-rose-500/30 text-rose-400":E.status==="Leave"?"bg-amber-950/20 border-amber-500/30 text-amber-400":"bg-sky-950/20 border-sky-500/30 text-sky-400"}`,children:[c.jsx("span",{className:"text-[10px] text-slate-400 block font-semibold",children:E.date}),c.jsx("span",{className:"text-xs font-extrabold block",children:E.status==="Present"?"উপস্থিত":E.status==="Absent"?"অনুপস্থিত":E.status==="Leave"?"ছুটি":"হাফ-ডে"}),c.jsxs("span",{className:"text-[9px] text-slate-400 block",children:[E.checkIn," - ",E.checkOut]})]},E.id))})]}),r==="salary"&&c.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 space-y-6",children:[c.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800",children:[c.jsx(ps,{className:"w-5 h-5 text-brand-cyan"}),"আমার মাসভিত্তিক বেতনের স্টেটমেন্ট ও হিসাব বিবরণী"]}),c.jsx("div",{className:"space-y-4",children:x.map(E=>c.jsxs("div",{className:"glass-card p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[c.jsxs("div",{children:[c.jsx("span",{className:"text-xs text-brand-cyan font-bold block",children:E.month}),c.jsxs("span",{className:"text-lg font-extrabold text-white block mt-0.5",children:["৳ ",E.net_salary.toLocaleString()]}),c.jsxs("span",{className:"text-[11px] text-slate-400",children:["বেসিক: ৳",E.basic_salary.toLocaleString()," | বোনাস: +৳",E.bonus.toLocaleString()," | ডিডাকশন: -৳",E.deductions.toLocaleString()]})]}),c.jsxs("div",{className:"text-right",children:[c.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold ${E.paid_status==="Paid"?"bg-emerald-500/20 text-emerald-400":"bg-amber-500/20 text-amber-400"}`,children:E.paid_status==="Paid"?`Paid (${E.payment_date})`:"Pending"}),E.transaction_id&&c.jsxs("span",{className:"block text-[10px] text-slate-500 font-mono mt-1",children:["TXN: ",E.transaction_id]})]})]},E.id))})]}),r==="profile"&&c.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-xl mx-auto space-y-6",children:[c.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[c.jsx(Th,{className:"w-5 h-5 text-brand-purple"}),"ব্যক্তিগত প্রোফাইল ও পাসওয়ার্ড পরিবর্তন"]}),f&&c.jsx("div",{className:"p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold",children:"প্রোফাইল তথ্য সফলভাবে সেভ করা হয়েছে!"}),c.jsxs("form",{onSubmit:R,className:"space-y-4 text-xs",children:[c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-300 mb-1",children:"নাম"}),c.jsx("input",{type:"text",disabled:!0,value:t.name,className:"w-full px-3 py-2 rounded-xl glass-input opacity-70"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-300 mb-1",children:"ইমেইল"}),c.jsx("input",{type:"email",disabled:!0,value:t.email,className:"w-full px-3 py-2 rounded-xl glass-input opacity-70"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-300 mb-1",children:"ফোন নম্বর"}),c.jsx("input",{type:"text",value:a,onChange:E=>o(E.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white font-bold"})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-slate-300 mb-1",children:"নতুন পাসওয়ার্ড (Password Change)"}),c.jsx("input",{type:"password",placeholder:"নতুন পাসওয়ার্ড লিখুন...",value:l,onChange:E=>u(E.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),c.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl font-bold bg-brand-purple text-white shadow-lg hover:scale-[1.01] transition-transform",children:"আপডেট সেভ করুন"})]})]})]})}function zw(){const{activeTab:t,user:e}=Rr(),[n,i]=Ee.useState(!1);return c.jsxs("div",{className:"min-h-screen flex flex-col justify-between bg-dark-900 text-slate-100",children:[c.jsx(oy,{onOpenAuthModal:()=>i(!0)}),c.jsxs("main",{className:"flex-grow",children:[t==="home"&&c.jsxs(c.Fragment,{children:[c.jsx(Tw,{}),c.jsx(Kp,{}),c.jsx(Zp,{}),c.jsx(Qp,{})]}),t==="team"&&c.jsx(Kp,{}),t==="portfolio"&&c.jsx(Zp,{}),t==="contact"&&c.jsx(Qp,{}),t==="admin-dashboard"&&c.jsx(Fw,{}),t==="member-portal"&&c.jsx(Ow,{})]}),c.jsx(Nw,{}),c.jsx(Pw,{isOpen:n,onClose:()=>i(!1)})]})}function Bw(){return c.jsx(U_,{children:c.jsx(I_,{children:c.jsx(zw,{})})})}Kc.createRoot(document.getElementById("root")).render(c.jsx(y0.StrictMode,{children:c.jsx(Bw,{})}));
