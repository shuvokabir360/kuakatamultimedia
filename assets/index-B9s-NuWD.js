(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function l0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var rm={exports:{}},Ml={},sm={exports:{}},We={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pa=Symbol.for("react.element"),c0=Symbol.for("react.portal"),u0=Symbol.for("react.fragment"),d0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),h0=Symbol.for("react.provider"),p0=Symbol.for("react.context"),m0=Symbol.for("react.forward_ref"),x0=Symbol.for("react.suspense"),g0=Symbol.for("react.memo"),v0=Symbol.for("react.lazy"),vf=Symbol.iterator;function _0(t){return t===null||typeof t!="object"?null:(t=vf&&t[vf]||t["@@iterator"],typeof t=="function"?t:null)}var am={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},om=Object.assign,lm={};function Ns(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||am}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ns.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cm(){}cm.prototype=Ns.prototype;function od(t,e,n){this.props=t,this.context=e,this.refs=lm,this.updater=n||am}var ld=od.prototype=new cm;ld.constructor=od;om(ld,Ns.prototype);ld.isPureReactComponent=!0;var _f=Array.isArray,um=Object.prototype.hasOwnProperty,cd={current:null},dm={key:!0,ref:!0,__self:!0,__source:!0};function fm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)um.call(e,i)&&!dm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:Pa,type:t,key:s,ref:a,props:r,_owner:cd.current}}function y0(t,e){return{$$typeof:Pa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===Pa}function S0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var yf=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?S0(""+t.key):e.toString(36)}function Po(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Pa:case c0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ql(a,0):i,_f(r)?(n="",t!=null&&(n=t.replace(yf,"$&/")+"/"),Po(r,e,n,"",function(u){return u})):r!=null&&(ud(r)&&(r=y0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(yf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",_f(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+ql(s,o);a+=Po(s,e,n,c,r)}else if(c=_0(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+ql(s,o++),a+=Po(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Va(t,e,n){if(t==null)return t;var i=[],r=0;return Po(t,i,"","",function(s){return e.call(n,s,r++)}),i}function M0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Lo={transition:null},b0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Lo,ReactCurrentOwner:cd};function hm(){throw Error("act(...) is not supported in production builds of React.")}We.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};We.Component=Ns;We.Fragment=u0;We.Profiler=f0;We.PureComponent=od;We.StrictMode=d0;We.Suspense=x0;We.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;We.act=hm;We.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=om({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)um.call(e,c)&&!dm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:Pa,type:t.type,key:r,ref:s,props:i,_owner:a}};We.createContext=function(t){return t={$$typeof:p0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:h0,_context:t},t.Consumer=t};We.createElement=fm;We.createFactory=function(t){var e=fm.bind(null,t);return e.type=t,e};We.createRef=function(){return{current:null}};We.forwardRef=function(t){return{$$typeof:m0,render:t}};We.isValidElement=ud;We.lazy=function(t){return{$$typeof:v0,_payload:{_status:-1,_result:t},_init:M0}};We.memo=function(t,e){return{$$typeof:g0,type:t,compare:e===void 0?null:e}};We.startTransition=function(t){var e=Lo.transition;Lo.transition={};try{t()}finally{Lo.transition=e}};We.unstable_act=hm;We.useCallback=function(t,e){return qt.current.useCallback(t,e)};We.useContext=function(t){return qt.current.useContext(t)};We.useDebugValue=function(){};We.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};We.useEffect=function(t,e){return qt.current.useEffect(t,e)};We.useId=function(){return qt.current.useId()};We.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};We.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};We.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};We.useMemo=function(t,e){return qt.current.useMemo(t,e)};We.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};We.useRef=function(t){return qt.current.useRef(t)};We.useState=function(t){return qt.current.useState(t)};We.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};We.useTransition=function(){return qt.current.useTransition()};We.version="18.3.1";sm.exports=We;var ye=sm.exports;const w0=l0(ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=ye,T0=Symbol.for("react.element"),A0=Symbol.for("react.fragment"),C0=Object.prototype.hasOwnProperty,N0=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R0={key:!0,ref:!0,__self:!0,__source:!0};function pm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)C0.call(e,i)&&!R0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:T0,type:t,key:s,ref:a,props:r,_owner:N0.current}}Ml.Fragment=A0;Ml.jsx=pm;Ml.jsxs=pm;rm.exports=Ml;var l=rm.exports,Qc={},mm={exports:{}},mn={},xm={exports:{}},gm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(U,H){var N=U.length;U.push(H);e:for(;0<N;){var C=N-1>>>1,Y=U[C];if(0<r(Y,H))U[C]=H,U[N]=Y,N=C;else break e}}function n(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var H=U[0],N=U.pop();if(N!==H){U[0]=N;e:for(var C=0,Y=U.length,se=Y>>>1;C<se;){var F=2*(C+1)-1,$=U[F],J=F+1,ie=U[J];if(0>r($,N))J<Y&&0>r(ie,$)?(U[C]=ie,U[J]=N,C=J):(U[C]=$,U[F]=N,C=F);else if(J<Y&&0>r(ie,N))U[C]=ie,U[J]=N,C=J;else break e}}return H}function r(U,H){var N=U.sortIndex-H.sortIndex;return N!==0?N:U.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],f=1,h=null,p=3,x=!1,y=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=U)i(u),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(u)}}function S(U){if(_=!1,g(U),!y)if(n(c)!==null)y=!0,V(A);else{var H=n(u);H!==null&&te(S,H.startTime-U)}}function A(U,H){y=!1,_&&(_=!1,d(L),L=-1),x=!0;var N=p;try{for(g(H),h=n(c);h!==null&&(!(h.expirationTime>H)||U&&!R());){var C=h.callback;if(typeof C=="function"){h.callback=null,p=h.priorityLevel;var Y=C(h.expirationTime<=H);H=t.unstable_now(),typeof Y=="function"?h.callback=Y:h===n(c)&&i(c),g(H)}else i(c);h=n(c)}if(h!==null)var se=!0;else{var F=n(u);F!==null&&te(S,F.startTime-H),se=!1}return se}finally{h=null,p=N,x=!1}}var b=!1,E=null,L=-1,z=5,M=-1;function R(){return!(t.unstable_now()-M<z)}function ee(){if(E!==null){var U=t.unstable_now();M=U;var H=!0;try{H=E(!0,U)}finally{H?Z():(b=!1,E=null)}}else b=!1}var Z;if(typeof v=="function")Z=function(){v(ee)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,B=D.port2;D.port1.onmessage=ee,Z=function(){B.postMessage(null)}}else Z=function(){m(ee,0)};function V(U){E=U,b||(b=!0,Z())}function te(U,H){L=m(function(){U(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(U){U.callback=null},t.unstable_continueExecution=function(){y||x||(y=!0,V(A))},t.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<U?Math.floor(1e3/U):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(U){switch(p){case 1:case 2:case 3:var H=3;break;default:H=p}var N=p;p=H;try{return U()}finally{p=N}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(U,H){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var N=p;p=U;try{return H()}finally{p=N}},t.unstable_scheduleCallback=function(U,H,N){var C=t.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?C+N:C):N=C,U){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=N+Y,U={id:f++,callback:H,priorityLevel:U,startTime:N,expirationTime:Y,sortIndex:-1},N>C?(U.sortIndex=N,e(u,U),n(c)===null&&U===n(u)&&(_?(d(L),L=-1):_=!0,te(S,N-C))):(U.sortIndex=Y,e(c,U),y||x||(y=!0,V(A))),U},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(U){var H=p;return function(){var N=p;p=H;try{return U.apply(this,arguments)}finally{p=N}}}})(gm);xm.exports=gm;var P0=xm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L0=ye,pn=P0;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vm=new Set,da={};function Ar(t,e){vs(t,e),vs(t+"Capture",e)}function vs(t,e){for(da[t]=e,t=0;t<e.length;t++)vm.add(e[t])}var fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,D0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Sf={},Mf={};function U0(t){return Jc.call(Mf,t)?!0:Jc.call(Sf,t)?!1:D0.test(t)?Mf[t]=!0:(Sf[t]=!0,!1)}function I0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function k0(t,e,n,i){if(e===null||typeof e>"u"||I0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function $t(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Dt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Dt[t]=new $t(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Dt[e]=new $t(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Dt[t]=new $t(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Dt[t]=new $t(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Dt[t]=new $t(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Dt[t]=new $t(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Dt[t]=new $t(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Dt[t]=new $t(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Dt[t]=new $t(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,fd);Dt[e]=new $t(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,fd);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,fd);Dt[e]=new $t(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!1,!1)});Dt.xlinkHref=new $t("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Dt[t]=new $t(t,1,!1,t.toLowerCase(),null,!0,!0)});function hd(t,e,n,i){var r=Dt.hasOwnProperty(e)?Dt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(k0(e,n,r,i)&&(n=null),i||r===null?U0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var gi=L0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Wa=Symbol.for("react.element"),$r=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),pd=Symbol.for("react.strict_mode"),eu=Symbol.for("react.profiler"),_m=Symbol.for("react.provider"),ym=Symbol.for("react.context"),md=Symbol.for("react.forward_ref"),tu=Symbol.for("react.suspense"),nu=Symbol.for("react.suspense_list"),xd=Symbol.for("react.memo"),Ei=Symbol.for("react.lazy"),Sm=Symbol.for("react.offscreen"),bf=Symbol.iterator;function ks(t){return t===null||typeof t!="object"?null:(t=bf&&t[bf]||t["@@iterator"],typeof t=="function"?t:null)}var ht=Object.assign,$l;function Ks(t){if($l===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);$l=e&&e[1]||""}return`
`+$l+t}var Yl=!1;function Kl(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ks(t):""}function F0(t){switch(t.tag){case 5:return Ks(t.type);case 16:return Ks("Lazy");case 13:return Ks("Suspense");case 19:return Ks("SuspenseList");case 0:case 2:case 15:return t=Kl(t.type,!1),t;case 11:return t=Kl(t.type.render,!1),t;case 1:return t=Kl(t.type,!0),t;default:return""}}function iu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case $r:return"Portal";case eu:return"Profiler";case pd:return"StrictMode";case tu:return"Suspense";case nu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case ym:return(t.displayName||"Context")+".Consumer";case _m:return(t._context.displayName||"Context")+".Provider";case md:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xd:return e=t.displayName||null,e!==null?e:iu(t.type)||"Memo";case Ei:e=t._payload,t=t._init;try{return iu(t(e))}catch{}}return null}function O0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return iu(e);case 8:return e===pd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Vi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Mm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function j0(t){var e=Mm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Xa(t){t._valueTracker||(t._valueTracker=j0(t))}function bm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Mm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ru(t,e){var n=e.checked;return ht({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function wf(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Vi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wm(t,e){e=e.checked,e!=null&&hd(t,"checked",e,!1)}function su(t,e){wm(t,e);var n=Vi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?au(t,e.type,n):e.hasOwnProperty("defaultValue")&&au(t,e.type,Vi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ef(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function au(t,e,n){(e!=="number"||Vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Zs=Array.isArray;function ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Vi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ht({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Tf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Zs(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Vi(n)}}function Em(t,e){var n=Vi(e.value),i=Vi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Af(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Tm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Tm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var qa,Am=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(qa=qa||document.createElement("div"),qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function fa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ta={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z0=["Webkit","ms","Moz","O"];Object.keys(ta).forEach(function(t){z0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ta[e]=ta[t]})});function Cm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ta.hasOwnProperty(t)&&ta[t]?(""+e).trim():e+"px"}function Nm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Cm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var B0=ht({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cu(t,e){if(e){if(B0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function uu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=null;function gd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fu=null,cs=null,us=null;function Cf(t){if(t=Ua(t)){if(typeof fu!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Al(e),fu(t.stateNode,t.type,e))}}function Rm(t){cs?us?us.push(t):us=[t]:cs=t}function Pm(){if(cs){var t=cs,e=us;if(us=cs=null,Cf(t),e)for(t=0;t<e.length;t++)Cf(e[t])}}function Lm(t,e){return t(e)}function Dm(){}var Zl=!1;function Um(t,e,n){if(Zl)return t(e,n);Zl=!0;try{return Lm(t,e,n)}finally{Zl=!1,(cs!==null||us!==null)&&(Dm(),Pm())}}function ha(t,e){var n=t.stateNode;if(n===null)return null;var i=Al(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var hu=!1;if(fi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){hu=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{hu=!1}function H0(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var na=!1,Wo=null,Xo=!1,pu=null,G0={onError:function(t){na=!0,Wo=t}};function V0(t,e,n,i,r,s,a,o,c){na=!1,Wo=null,H0.apply(G0,arguments)}function W0(t,e,n,i,r,s,a,o,c){if(V0.apply(this,arguments),na){if(na){var u=Wo;na=!1,Wo=null}else throw Error(re(198));Xo||(Xo=!0,pu=u)}}function Cr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Im(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nf(t){if(Cr(t)!==t)throw Error(re(188))}function X0(t){var e=t.alternate;if(!e){if(e=Cr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nf(r),t;if(s===i)return Nf(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function km(t){return t=X0(t),t!==null?Fm(t):null}function Fm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Fm(t);if(e!==null)return e;t=t.sibling}return null}var Om=pn.unstable_scheduleCallback,Rf=pn.unstable_cancelCallback,q0=pn.unstable_shouldYield,$0=pn.unstable_requestPaint,gt=pn.unstable_now,Y0=pn.unstable_getCurrentPriorityLevel,vd=pn.unstable_ImmediatePriority,jm=pn.unstable_UserBlockingPriority,qo=pn.unstable_NormalPriority,K0=pn.unstable_LowPriority,zm=pn.unstable_IdlePriority,bl=null,Yn=null;function Z0(t){if(Yn&&typeof Yn.onCommitFiberRoot=="function")try{Yn.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var Fn=Math.clz32?Math.clz32:ev,Q0=Math.log,J0=Math.LN2;function ev(t){return t>>>=0,t===0?32:31-(Q0(t)/J0|0)|0}var $a=64,Ya=4194304;function Qs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function $o(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Qs(o):(s&=a,s!==0&&(i=Qs(s)))}else a=n&~r,a!==0?i=Qs(a):s!==0&&(i=Qs(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Fn(e),r=1<<n,i|=t[n],e&=~r;return i}function tv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Fn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=tv(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function mu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Bm(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Ql(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function La(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Fn(e),t[e]=n}function iv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Fn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function _d(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Fn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var Je=0;function Hm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gm,yd,Vm,Wm,Xm,xu=!1,Ka=[],Di=null,Ui=null,Ii=null,pa=new Map,ma=new Map,Ai=[],rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(t,e){switch(t){case"focusin":case"focusout":Di=null;break;case"dragenter":case"dragleave":Ui=null;break;case"mouseover":case"mouseout":Ii=null;break;case"pointerover":case"pointerout":pa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(e.pointerId)}}function Os(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&yd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function sv(t,e,n,i,r){switch(e){case"focusin":return Di=Os(Di,t,e,n,i,r),!0;case"dragenter":return Ui=Os(Ui,t,e,n,i,r),!0;case"mouseover":return Ii=Os(Ii,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return pa.set(s,Os(pa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ma.set(s,Os(ma.get(s)||null,t,e,n,i,r)),!0}return!1}function qm(t){var e=hr(t.target);if(e!==null){var n=Cr(e);if(n!==null){if(e=n.tag,e===13){if(e=Im(n),e!==null){t.blockedOn=e,Xm(t.priority,function(){Vm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Do(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);du=i,n.target.dispatchEvent(i),du=null}else return e=Ua(n),e!==null&&yd(e),t.blockedOn=n,!1;e.shift()}return!0}function Lf(t,e,n){Do(t)&&n.delete(e)}function av(){xu=!1,Di!==null&&Do(Di)&&(Di=null),Ui!==null&&Do(Ui)&&(Ui=null),Ii!==null&&Do(Ii)&&(Ii=null),pa.forEach(Lf),ma.forEach(Lf)}function js(t,e){t.blockedOn===e&&(t.blockedOn=null,xu||(xu=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,av)))}function xa(t){function e(r){return js(r,t)}if(0<Ka.length){js(Ka[0],t);for(var n=1;n<Ka.length;n++){var i=Ka[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Di!==null&&js(Di,t),Ui!==null&&js(Ui,t),Ii!==null&&js(Ii,t),pa.forEach(e),ma.forEach(e),n=0;n<Ai.length;n++)i=Ai[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Ai.length&&(n=Ai[0],n.blockedOn===null);)qm(n),n.blockedOn===null&&Ai.shift()}var ds=gi.ReactCurrentBatchConfig,Yo=!0;function ov(t,e,n,i){var r=Je,s=ds.transition;ds.transition=null;try{Je=1,Sd(t,e,n,i)}finally{Je=r,ds.transition=s}}function lv(t,e,n,i){var r=Je,s=ds.transition;ds.transition=null;try{Je=4,Sd(t,e,n,i)}finally{Je=r,ds.transition=s}}function Sd(t,e,n,i){if(Yo){var r=gu(t,e,n,i);if(r===null)lc(t,e,i,Ko,n),Pf(t,i);else if(sv(r,t,e,n,i))i.stopPropagation();else if(Pf(t,i),e&4&&-1<rv.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&Gm(s),s=gu(t,e,n,i),s===null&&lc(t,e,i,Ko,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else lc(t,e,i,null,n)}}var Ko=null;function gu(t,e,n,i){if(Ko=null,t=gd(i),t=hr(t),t!==null)if(e=Cr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Im(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ko=t,null}function $m(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y0()){case vd:return 1;case jm:return 4;case qo:case K0:return 16;case zm:return 536870912;default:return 16}default:return 16}}var Ri=null,Md=null,Uo=null;function Ym(){if(Uo)return Uo;var t,e=Md,n=e.length,i,r="value"in Ri?Ri.value:Ri.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Uo=r.slice(t,1<i?1-i:void 0)}function Io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Za(){return!0}function Df(){return!1}function xn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Za:Df,this.isPropagationStopped=Df,this}return ht(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Za)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Za)},persist:function(){},isPersistent:Za}),e}var Rs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bd=xn(Rs),Da=ht({},Rs,{view:0,detail:0}),cv=xn(Da),Jl,ec,zs,wl=ht({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==zs&&(zs&&t.type==="mousemove"?(Jl=t.screenX-zs.screenX,ec=t.screenY-zs.screenY):ec=Jl=0,zs=t),Jl)},movementY:function(t){return"movementY"in t?t.movementY:ec}}),Uf=xn(wl),uv=ht({},wl,{dataTransfer:0}),dv=xn(uv),fv=ht({},Da,{relatedTarget:0}),tc=xn(fv),hv=ht({},Rs,{animationName:0,elapsedTime:0,pseudoElement:0}),pv=xn(hv),mv=ht({},Rs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xv=xn(mv),gv=ht({},Rs,{data:0}),If=xn(gv),vv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_v={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Sv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=yv[t])?!!e[t]:!1}function wd(){return Sv}var Mv=ht({},Da,{key:function(t){if(t.key){var e=vv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_v[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bv=xn(Mv),wv=ht({},wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kf=xn(wv),Ev=ht({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),Tv=xn(Ev),Av=ht({},Rs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cv=xn(Av),Nv=ht({},wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rv=xn(Nv),Pv=[9,13,27,32],Ed=fi&&"CompositionEvent"in window,ia=null;fi&&"documentMode"in document&&(ia=document.documentMode);var Lv=fi&&"TextEvent"in window&&!ia,Km=fi&&(!Ed||ia&&8<ia&&11>=ia),Ff=" ",Of=!1;function Zm(t,e){switch(t){case"keyup":return Pv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Kr=!1;function Dv(t,e){switch(t){case"compositionend":return Qm(e);case"keypress":return e.which!==32?null:(Of=!0,Ff);case"textInput":return t=e.data,t===Ff&&Of?null:t;default:return null}}function Uv(t,e){if(Kr)return t==="compositionend"||!Ed&&Zm(t,e)?(t=Ym(),Uo=Md=Ri=null,Kr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Km&&e.locale!=="ko"?null:e.data;default:return null}}var Iv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Iv[t.type]:e==="textarea"}function Jm(t,e,n,i){Rm(i),e=Zo(e,"onChange"),0<e.length&&(n=new bd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ra=null,ga=null;function kv(t){ux(t,0)}function El(t){var e=Jr(t);if(bm(e))return t}function Fv(t,e){if(t==="change")return e}var ex=!1;if(fi){var nc;if(fi){var ic="oninput"in document;if(!ic){var zf=document.createElement("div");zf.setAttribute("oninput","return;"),ic=typeof zf.oninput=="function"}nc=ic}else nc=!1;ex=nc&&(!document.documentMode||9<document.documentMode)}function Bf(){ra&&(ra.detachEvent("onpropertychange",tx),ga=ra=null)}function tx(t){if(t.propertyName==="value"&&El(ga)){var e=[];Jm(e,ga,t,gd(t)),Um(kv,e)}}function Ov(t,e,n){t==="focusin"?(Bf(),ra=e,ga=n,ra.attachEvent("onpropertychange",tx)):t==="focusout"&&Bf()}function jv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(ga)}function zv(t,e){if(t==="click")return El(e)}function Bv(t,e){if(t==="input"||t==="change")return El(e)}function Hv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var zn=typeof Object.is=="function"?Object.is:Hv;function va(t,e){if(zn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Jc.call(e,r)||!zn(t[r],e[r]))return!1}return!0}function Hf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Gf(t,e){var n=Hf(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hf(n)}}function nx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?nx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function ix(){for(var t=window,e=Vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Vo(t.document)}return e}function Td(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Gv(t){var e=ix(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&nx(n.ownerDocument.documentElement,n)){if(i!==null&&Td(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Gf(n,s);var a=Gf(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vv=fi&&"documentMode"in document&&11>=document.documentMode,Zr=null,vu=null,sa=null,_u=!1;function Vf(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_u||Zr==null||Zr!==Vo(i)||(i=Zr,"selectionStart"in i&&Td(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),sa&&va(sa,i)||(sa=i,i=Zo(vu,"onSelect"),0<i.length&&(e=new bd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zr)))}function Qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Qr={animationend:Qa("Animation","AnimationEnd"),animationiteration:Qa("Animation","AnimationIteration"),animationstart:Qa("Animation","AnimationStart"),transitionend:Qa("Transition","TransitionEnd")},rc={},rx={};fi&&(rx=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Tl(t){if(rc[t])return rc[t];if(!Qr[t])return t;var e=Qr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in rx)return rc[t]=e[n];return t}var sx=Tl("animationend"),ax=Tl("animationiteration"),ox=Tl("animationstart"),lx=Tl("transitionend"),cx=new Map,Wf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Yi(t,e){cx.set(t,e),Ar(e,[t])}for(var sc=0;sc<Wf.length;sc++){var ac=Wf[sc],Wv=ac.toLowerCase(),Xv=ac[0].toUpperCase()+ac.slice(1);Yi(Wv,"on"+Xv)}Yi(sx,"onAnimationEnd");Yi(ax,"onAnimationIteration");Yi(ox,"onAnimationStart");Yi("dblclick","onDoubleClick");Yi("focusin","onFocus");Yi("focusout","onBlur");Yi(lx,"onTransitionEnd");vs("onMouseEnter",["mouseout","mouseover"]);vs("onMouseLeave",["mouseout","mouseover"]);vs("onPointerEnter",["pointerout","pointerover"]);vs("onPointerLeave",["pointerout","pointerover"]);Ar("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ar("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ar("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ar("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ar("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Js="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Js));function Xf(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,W0(i,e,void 0,t),t.currentTarget=null}function ux(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Xf(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Xf(r,o,u),s=c}}}if(Xo)throw t=pu,Xo=!1,pu=null,t}function rt(t,e){var n=e[wu];n===void 0&&(n=e[wu]=new Set);var i=t+"__bubble";n.has(i)||(dx(e,t,2,!1),n.add(i))}function oc(t,e,n){var i=0;e&&(i|=4),dx(n,t,i,e)}var Ja="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[Ja]){t[Ja]=!0,vm.forEach(function(n){n!=="selectionchange"&&(qv.has(n)||oc(n,!1,t),oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ja]||(e[Ja]=!0,oc("selectionchange",!1,e))}}function dx(t,e,n,i){switch($m(e)){case 1:var r=ov;break;case 4:r=lv;break;default:r=Sd}n=r.bind(null,e,n,t),r=void 0,!hu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function lc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}Um(function(){var u=s,f=gd(n),h=[];e:{var p=cx.get(t);if(p!==void 0){var x=bd,y=t;switch(t){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":x=bv;break;case"focusin":y="focus",x=tc;break;case"focusout":y="blur",x=tc;break;case"beforeblur":case"afterblur":x=tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Uf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=dv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Tv;break;case sx:case ax:case ox:x=pv;break;case lx:x=Cv;break;case"scroll":x=cv;break;case"wheel":x=Rv;break;case"copy":case"cut":case"paste":x=xv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=kf}var _=(e&4)!==0,m=!_&&t==="scroll",d=_?p!==null?p+"Capture":null:p;_=[];for(var v=u,g;v!==null;){g=v;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,d!==null&&(S=ha(v,d),S!=null&&_.push(ya(v,S,g)))),m)break;v=v.return}0<_.length&&(p=new x(p,y,null,n,f),h.push({event:p,listeners:_}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",p&&n!==du&&(y=n.relatedTarget||n.fromElement)&&(hr(y)||y[hi]))break e;if((x||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?hr(y):null,y!==null&&(m=Cr(y),y!==m||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(_=Uf,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(_=kf,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=x==null?p:Jr(x),g=y==null?p:Jr(y),p=new _(S,v+"leave",x,n,f),p.target=m,p.relatedTarget=g,S=null,hr(f)===u&&(_=new _(d,v+"enter",y,n,f),_.target=g,_.relatedTarget=m,S=_),m=S,x&&y)t:{for(_=x,d=y,v=0,g=_;g;g=Pr(g))v++;for(g=0,S=d;S;S=Pr(S))g++;for(;0<v-g;)_=Pr(_),v--;for(;0<g-v;)d=Pr(d),g--;for(;v--;){if(_===d||d!==null&&_===d.alternate)break t;_=Pr(_),d=Pr(d)}_=null}else _=null;x!==null&&qf(h,p,x,_,!1),y!==null&&m!==null&&qf(h,m,y,_,!0)}}e:{if(p=u?Jr(u):window,x=p.nodeName&&p.nodeName.toLowerCase(),x==="select"||x==="input"&&p.type==="file")var A=Fv;else if(jf(p))if(ex)A=Bv;else{A=jv;var b=Ov}else(x=p.nodeName)&&x.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(A=zv);if(A&&(A=A(t,u))){Jm(h,A,n,f);break e}b&&b(t,p,u),t==="focusout"&&(b=p._wrapperState)&&b.controlled&&p.type==="number"&&au(p,"number",p.value)}switch(b=u?Jr(u):window,t){case"focusin":(jf(b)||b.contentEditable==="true")&&(Zr=b,vu=u,sa=null);break;case"focusout":sa=vu=Zr=null;break;case"mousedown":_u=!0;break;case"contextmenu":case"mouseup":case"dragend":_u=!1,Vf(h,n,f);break;case"selectionchange":if(Vv)break;case"keydown":case"keyup":Vf(h,n,f)}var E;if(Ed)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Kr?Zm(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Km&&n.locale!=="ko"&&(Kr||L!=="onCompositionStart"?L==="onCompositionEnd"&&Kr&&(E=Ym()):(Ri=f,Md="value"in Ri?Ri.value:Ri.textContent,Kr=!0)),b=Zo(u,L),0<b.length&&(L=new If(L,t,null,n,f),h.push({event:L,listeners:b}),E?L.data=E:(E=Qm(n),E!==null&&(L.data=E)))),(E=Lv?Dv(t,n):Uv(t,n))&&(u=Zo(u,"onBeforeInput"),0<u.length&&(f=new If("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=E))}ux(h,e)})}function ya(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Zo(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ha(t,n),s!=null&&i.unshift(ya(t,s,r)),s=ha(t,e),s!=null&&i.push(ya(t,s,r))),t=t.return}return i}function Pr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function qf(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=ha(n,s),c!=null&&a.unshift(ya(n,c,o))):r||(c=ha(n,s),c!=null&&a.push(ya(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var $v=/\r\n?/g,Yv=/\u0000|\uFFFD/g;function $f(t){return(typeof t=="string"?t:""+t).replace($v,`
`).replace(Yv,"")}function eo(t,e,n){if(e=$f(e),$f(t)!==e&&n)throw Error(re(425))}function Qo(){}var yu=null,Su=null;function Mu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var bu=typeof setTimeout=="function"?setTimeout:void 0,Kv=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,Zv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(t){return Yf.resolve(null).then(t).catch(Qv)}:bu;function Qv(t){setTimeout(function(){throw t})}function cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);xa(e)}function ki(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Kf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),qn="__reactFiber$"+Ps,Sa="__reactProps$"+Ps,hi="__reactContainer$"+Ps,wu="__reactEvents$"+Ps,Jv="__reactListeners$"+Ps,e_="__reactHandles$"+Ps;function hr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[hi]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kf(t);t!==null;){if(n=t[qn])return n;t=Kf(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[qn]||t[hi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Jr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Al(t){return t[Sa]||null}var Eu=[],es=-1;function Ki(t){return{current:t}}function at(t){0>es||(t.current=Eu[es],Eu[es]=null,es--)}function it(t,e){es++,Eu[es]=t.current,t.current=e}var Wi={},Bt=Ki(Wi),en=Ki(!1),Sr=Wi;function _s(t,e){var n=t.type.contextTypes;if(!n)return Wi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function tn(t){return t=t.childContextTypes,t!=null}function Jo(){at(en),at(Bt)}function Zf(t,e,n){if(Bt.current!==Wi)throw Error(re(168));it(Bt,e),it(en,n)}function fx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,O0(t)||"Unknown",r));return ht({},n,i)}function el(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Wi,Sr=Bt.current,it(Bt,t),it(en,en.current),!0}function Qf(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=fx(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,at(en),at(Bt),it(Bt,t)):at(en),it(en,n)}var si=null,Cl=!1,uc=!1;function hx(t){si===null?si=[t]:si.push(t)}function t_(t){Cl=!0,hx(t)}function Zi(){if(!uc&&si!==null){uc=!0;var t=0,e=Je;try{var n=si;for(Je=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}si=null,Cl=!1}catch(r){throw si!==null&&(si=si.slice(t+1)),Om(vd,Zi),r}finally{Je=e,uc=!1}}return null}var ts=[],ns=0,tl=null,nl=0,yn=[],Sn=0,Mr=null,li=1,ci="";function or(t,e){ts[ns++]=nl,ts[ns++]=tl,tl=t,nl=e}function px(t,e,n){yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Mr,Mr=t;var i=li;t=ci;var r=32-Fn(i)-1;i&=~(1<<r),n+=1;var s=32-Fn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,li=1<<32-Fn(e)+r|n<<r|i,ci=s+t}else li=1<<s|n<<r|i,ci=t}function Ad(t){t.return!==null&&(or(t,1),px(t,1,0))}function Cd(t){for(;t===tl;)tl=ts[--ns],ts[ns]=null,nl=ts[--ns],ts[ns]=null;for(;t===Mr;)Mr=yn[--Sn],yn[Sn]=null,ci=yn[--Sn],yn[Sn]=null,li=yn[--Sn],yn[Sn]=null}var hn=null,dn=null,ct=!1,Un=null;function mx(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Jf(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=ki(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:li,overflow:ci}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Tu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Au(t){if(ct){var e=dn;if(e){var n=e;if(!Jf(t,e)){if(Tu(t))throw Error(re(418));e=ki(n.nextSibling);var i=hn;e&&Jf(t,e)?mx(i,n):(t.flags=t.flags&-4097|2,ct=!1,hn=t)}}else{if(Tu(t))throw Error(re(418));t.flags=t.flags&-4097|2,ct=!1,hn=t}}}function eh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function to(t){if(t!==hn)return!1;if(!ct)return eh(t),ct=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mu(t.type,t.memoizedProps)),e&&(e=dn)){if(Tu(t))throw xx(),Error(re(418));for(;e;)mx(t,e),e=ki(e.nextSibling)}if(eh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=ki(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?ki(t.stateNode.nextSibling):null;return!0}function xx(){for(var t=dn;t;)t=ki(t.nextSibling)}function ys(){dn=hn=null,ct=!1}function Nd(t){Un===null?Un=[t]:Un.push(t)}var n_=gi.ReactCurrentBatchConfig;function Bs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function no(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function th(t){var e=t._init;return e(t._payload)}function gx(t){function e(d,v){if(t){var g=d.deletions;g===null?(d.deletions=[v],d.flags|=16):g.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=zi(d,v),d.index=0,d.sibling=null,d}function s(d,v,g){return d.index=g,t?(g=d.alternate,g!==null?(g=g.index,g<v?(d.flags|=2,v):g):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,g,S){return v===null||v.tag!==6?(v=gc(g,d.mode,S),v.return=d,v):(v=r(v,g),v.return=d,v)}function c(d,v,g,S){var A=g.type;return A===Yr?f(d,v,g.props.children,S,g.key):v!==null&&(v.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ei&&th(A)===v.type)?(S=r(v,g.props),S.ref=Bs(d,v,g),S.return=d,S):(S=Ho(g.type,g.key,g.props,null,d.mode,S),S.ref=Bs(d,v,g),S.return=d,S)}function u(d,v,g,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=vc(g,d.mode,S),v.return=d,v):(v=r(v,g.children||[]),v.return=d,v)}function f(d,v,g,S,A){return v===null||v.tag!==7?(v=vr(g,d.mode,S,A),v.return=d,v):(v=r(v,g),v.return=d,v)}function h(d,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=gc(""+v,d.mode,g),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Wa:return g=Ho(v.type,v.key,v.props,null,d.mode,g),g.ref=Bs(d,null,v),g.return=d,g;case $r:return v=vc(v,d.mode,g),v.return=d,v;case Ei:var S=v._init;return h(d,S(v._payload),g)}if(Zs(v)||ks(v))return v=vr(v,d.mode,g,null),v.return=d,v;no(d,v)}return null}function p(d,v,g,S){var A=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return A!==null?null:o(d,v,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:return g.key===A?c(d,v,g,S):null;case $r:return g.key===A?u(d,v,g,S):null;case Ei:return A=g._init,p(d,v,A(g._payload),S)}if(Zs(g)||ks(g))return A!==null?null:f(d,v,g,S,null);no(d,g)}return null}function x(d,v,g,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(g)||null,o(v,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Wa:return d=d.get(S.key===null?g:S.key)||null,c(v,d,S,A);case $r:return d=d.get(S.key===null?g:S.key)||null,u(v,d,S,A);case Ei:var b=S._init;return x(d,v,g,b(S._payload),A)}if(Zs(S)||ks(S))return d=d.get(g)||null,f(v,d,S,A,null);no(v,S)}return null}function y(d,v,g,S){for(var A=null,b=null,E=v,L=v=0,z=null;E!==null&&L<g.length;L++){E.index>L?(z=E,E=null):z=E.sibling;var M=p(d,E,g[L],S);if(M===null){E===null&&(E=z);break}t&&E&&M.alternate===null&&e(d,E),v=s(M,v,L),b===null?A=M:b.sibling=M,b=M,E=z}if(L===g.length)return n(d,E),ct&&or(d,L),A;if(E===null){for(;L<g.length;L++)E=h(d,g[L],S),E!==null&&(v=s(E,v,L),b===null?A=E:b.sibling=E,b=E);return ct&&or(d,L),A}for(E=i(d,E);L<g.length;L++)z=x(E,d,L,g[L],S),z!==null&&(t&&z.alternate!==null&&E.delete(z.key===null?L:z.key),v=s(z,v,L),b===null?A=z:b.sibling=z,b=z);return t&&E.forEach(function(R){return e(d,R)}),ct&&or(d,L),A}function _(d,v,g,S){var A=ks(g);if(typeof A!="function")throw Error(re(150));if(g=A.call(g),g==null)throw Error(re(151));for(var b=A=null,E=v,L=v=0,z=null,M=g.next();E!==null&&!M.done;L++,M=g.next()){E.index>L?(z=E,E=null):z=E.sibling;var R=p(d,E,M.value,S);if(R===null){E===null&&(E=z);break}t&&E&&R.alternate===null&&e(d,E),v=s(R,v,L),b===null?A=R:b.sibling=R,b=R,E=z}if(M.done)return n(d,E),ct&&or(d,L),A;if(E===null){for(;!M.done;L++,M=g.next())M=h(d,M.value,S),M!==null&&(v=s(M,v,L),b===null?A=M:b.sibling=M,b=M);return ct&&or(d,L),A}for(E=i(d,E);!M.done;L++,M=g.next())M=x(E,d,L,M.value,S),M!==null&&(t&&M.alternate!==null&&E.delete(M.key===null?L:M.key),v=s(M,v,L),b===null?A=M:b.sibling=M,b=M);return t&&E.forEach(function(ee){return e(d,ee)}),ct&&or(d,L),A}function m(d,v,g,S){if(typeof g=="object"&&g!==null&&g.type===Yr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Wa:e:{for(var A=g.key,b=v;b!==null;){if(b.key===A){if(A=g.type,A===Yr){if(b.tag===7){n(d,b.sibling),v=r(b,g.props.children),v.return=d,d=v;break e}}else if(b.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Ei&&th(A)===b.type){n(d,b.sibling),v=r(b,g.props),v.ref=Bs(d,b,g),v.return=d,d=v;break e}n(d,b);break}else e(d,b);b=b.sibling}g.type===Yr?(v=vr(g.props.children,d.mode,S,g.key),v.return=d,d=v):(S=Ho(g.type,g.key,g.props,null,d.mode,S),S.ref=Bs(d,v,g),S.return=d,d=S)}return a(d);case $r:e:{for(b=g.key;v!==null;){if(v.key===b)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){n(d,v.sibling),v=r(v,g.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=vc(g,d.mode,S),v.return=d,d=v}return a(d);case Ei:return b=g._init,m(d,v,b(g._payload),S)}if(Zs(g))return y(d,v,g,S);if(ks(g))return _(d,v,g,S);no(d,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,g),v.return=d,d=v):(n(d,v),v=gc(g,d.mode,S),v.return=d,d=v),a(d)):n(d,v)}return m}var Ss=gx(!0),vx=gx(!1),il=Ki(null),rl=null,is=null,Rd=null;function Pd(){Rd=is=rl=null}function Ld(t){var e=il.current;at(il),t._currentValue=e}function Cu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function fs(t,e){rl=t,Rd=is=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Jt=!0),t.firstContext=null)}function En(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},is===null){if(rl===null)throw Error(re(308));is=t,rl.dependencies={lanes:0,firstContext:t}}else is=is.next=t;return e}var pr=null;function Dd(t){pr===null?pr=[t]:pr.push(t)}function _x(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Dd(e)):(n.next=r.next,r.next=n),e.interleaved=n,pi(t,i)}function pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ti=!1;function Ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function di(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Fi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Dd(i)):(e.next=r.next,r.next=e),i.interleaved=e,pi(t,n)}function ko(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}function nh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sl(t,e,n,i){var r=t.updateQueue;Ti=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==a&&(o===null?f.firstBaseUpdate=u:o.next=u,f.lastBaseUpdate=c))}if(s!==null){var h=r.baseState;a=0,f=u=c=null,o=s;do{var p=o.lane,x=o.eventTime;if((i&p)===p){f!==null&&(f=f.next={eventTime:x,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var y=t,_=o;switch(p=e,x=n,_.tag){case 1:if(y=_.payload,typeof y=="function"){h=y.call(x,h,p);break e}h=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=_.payload,p=typeof y=="function"?y.call(x,h,p):y,p==null)break e;h=ht({},h,p);break e;case 2:Ti=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else x={eventTime:x,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(u=f=x,c=h):f=f.next=x,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(f===null&&(c=h),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=h}}function ih(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var Ia={},Kn=Ki(Ia),Ma=Ki(Ia),ba=Ki(Ia);function mr(t){if(t===Ia)throw Error(re(174));return t}function Id(t,e){switch(it(ba,e),it(Ma,t),it(Kn,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lu(e,t)}at(Kn),it(Kn,e)}function Ms(){at(Kn),at(Ma),at(ba)}function Sx(t){mr(ba.current);var e=mr(Kn.current),n=lu(e,t.type);e!==n&&(it(Ma,t),it(Kn,n))}function kd(t){Ma.current===t&&(at(Kn),at(Ma))}var dt=Ki(0);function al(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var dc=[];function Fd(){for(var t=0;t<dc.length;t++)dc[t]._workInProgressVersionPrimary=null;dc.length=0}var Fo=gi.ReactCurrentDispatcher,fc=gi.ReactCurrentBatchConfig,br=0,ft=null,St=null,At=null,ol=!1,aa=!1,wa=0,i_=0;function It(){throw Error(re(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!zn(t[n],e[n]))return!1;return!0}function jd(t,e,n,i,r,s){if(br=s,ft=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fo.current=t===null||t.memoizedState===null?o_:l_,t=n(i,r),aa){s=0;do{if(aa=!1,wa=0,25<=s)throw Error(re(301));s+=1,At=St=null,e.updateQueue=null,Fo.current=c_,t=n(i,r)}while(aa)}if(Fo.current=ll,e=St!==null&&St.next!==null,br=0,At=St=ft=null,ol=!1,e)throw Error(re(300));return t}function zd(){var t=wa!==0;return wa=0,t}function Vn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return At===null?ft.memoizedState=At=t:At=At.next=t,At}function Tn(){if(St===null){var t=ft.alternate;t=t!==null?t.memoizedState:null}else t=St.next;var e=At===null?ft.memoizedState:At.next;if(e!==null)At=e,St=t;else{if(t===null)throw Error(re(310));St=t,t={memoizedState:St.memoizedState,baseState:St.baseState,baseQueue:St.baseQueue,queue:St.queue,next:null},At===null?ft.memoizedState=At=t:At=At.next=t}return At}function Ea(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=St,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var f=u.lane;if((br&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=h,a=i):c=c.next=h,ft.lanes|=f,wr|=f}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,zn(i,e.memoizedState)||(Jt=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,ft.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function pc(t){var e=Tn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);zn(s,e.memoizedState)||(Jt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Mx(){}function bx(t,e){var n=ft,i=Tn(),r=e(),s=!zn(i.memoizedState,r);if(s&&(i.memoizedState=r,Jt=!0),i=i.queue,Bd(Tx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||At!==null&&At.memoizedState.tag&1){if(n.flags|=2048,Ta(9,Ex.bind(null,n,i,r,e),void 0,null),Ct===null)throw Error(re(349));br&30||wx(n,e,r)}return r}function wx(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Ex(t,e,n,i){e.value=n,e.getSnapshot=i,Ax(e)&&Cx(t)}function Tx(t,e,n){return n(function(){Ax(e)&&Cx(t)})}function Ax(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!zn(t,n)}catch{return!0}}function Cx(t){var e=pi(t,1);e!==null&&On(e,t,1,-1)}function rh(t){var e=Vn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:t},e.queue=t,t=t.dispatch=a_.bind(null,ft,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ft.updateQueue,e===null?(e={lastEffect:null,stores:null},ft.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Nx(){return Tn().memoizedState}function Oo(t,e,n,i){var r=Vn();ft.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function Nl(t,e,n,i){var r=Tn();i=i===void 0?null:i;var s=void 0;if(St!==null){var a=St.memoizedState;if(s=a.destroy,i!==null&&Od(i,a.deps)){r.memoizedState=Ta(e,n,s,i);return}}ft.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function sh(t,e){return Oo(8390656,8,t,e)}function Bd(t,e){return Nl(2048,8,t,e)}function Rx(t,e){return Nl(4,2,t,e)}function Px(t,e){return Nl(4,4,t,e)}function Lx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Dx(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4,4,Lx.bind(null,e,t),n)}function Hd(){}function Ux(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ix(t,e){var n=Tn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Od(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function kx(t,e,n){return br&21?(zn(n,e)||(n=Bm(),ft.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Jt=!0),t.memoizedState=n)}function r_(t,e){var n=Je;Je=n!==0&&4>n?n:4,t(!0);var i=fc.transition;fc.transition={};try{t(!1),e()}finally{Je=n,fc.transition=i}}function Fx(){return Tn().memoizedState}function s_(t,e,n){var i=ji(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ox(t))jx(e,n);else if(n=_x(t,e,n,i),n!==null){var r=Xt();On(n,t,i,r),zx(n,e,i)}}function a_(t,e,n){var i=ji(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ox(t))jx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,zn(o,a)){var c=e.interleaved;c===null?(r.next=r,Dd(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=_x(t,e,r,i),n!==null&&(r=Xt(),On(n,t,i,r),zx(n,e,i))}}function Ox(t){var e=t.alternate;return t===ft||e!==null&&e===ft}function jx(t,e){aa=ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,_d(t,n)}}var ll={readContext:En,useCallback:It,useContext:It,useEffect:It,useImperativeHandle:It,useInsertionEffect:It,useLayoutEffect:It,useMemo:It,useReducer:It,useRef:It,useState:It,useDebugValue:It,useDeferredValue:It,useTransition:It,useMutableSource:It,useSyncExternalStore:It,useId:It,unstable_isNewReconciler:!1},o_={readContext:En,useCallback:function(t,e){return Vn().memoizedState=[t,e===void 0?null:e],t},useContext:En,useEffect:sh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Oo(4194308,4,Lx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Oo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Oo(4,2,t,e)},useMemo:function(t,e){var n=Vn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Vn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=s_.bind(null,ft,t),[i.memoizedState,t]},useRef:function(t){var e=Vn();return t={current:t},e.memoizedState=t},useState:rh,useDebugValue:Hd,useDeferredValue:function(t){return Vn().memoizedState=t},useTransition:function(){var t=rh(!1),e=t[0];return t=r_.bind(null,t[1]),Vn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ft,r=Vn();if(ct){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Ct===null)throw Error(re(349));br&30||wx(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,sh(Tx.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,Ex.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Vn(),e=Ct.identifierPrefix;if(ct){var n=ci,i=li;n=(i&~(1<<32-Fn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=wa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=i_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},l_={readContext:En,useCallback:Ux,useContext:En,useEffect:Bd,useImperativeHandle:Dx,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:Ix,useReducer:hc,useRef:Nx,useState:function(){return hc(Ea)},useDebugValue:Hd,useDeferredValue:function(t){var e=Tn();return kx(e,St.memoizedState,t)},useTransition:function(){var t=hc(Ea)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Mx,useSyncExternalStore:bx,useId:Fx,unstable_isNewReconciler:!1},c_={readContext:En,useCallback:Ux,useContext:En,useEffect:Bd,useImperativeHandle:Dx,useInsertionEffect:Rx,useLayoutEffect:Px,useMemo:Ix,useReducer:pc,useRef:Nx,useState:function(){return pc(Ea)},useDebugValue:Hd,useDeferredValue:function(t){var e=Tn();return St===null?e.memoizedState=t:kx(e,St.memoizedState,t)},useTransition:function(){var t=pc(Ea)[0],e=Tn().memoizedState;return[t,e]},useMutableSource:Mx,useSyncExternalStore:bx,useId:Fx,unstable_isNewReconciler:!1};function Ln(t,e){if(t&&t.defaultProps){e=ht({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Nu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ht({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Rl={isMounted:function(t){return(t=t._reactInternals)?Cr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=ji(t),s=di(i,r);s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),ko(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=ji(t),s=di(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Fi(t,s,r),e!==null&&(On(e,t,r,i),ko(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=ji(t),r=di(n,i);r.tag=2,e!=null&&(r.callback=e),e=Fi(t,r,i),e!==null&&(On(e,t,i,n),ko(e,t,i))}};function ah(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!va(n,i)||!va(r,s):!0}function Bx(t,e,n){var i=!1,r=Wi,s=e.contextType;return typeof s=="object"&&s!==null?s=En(s):(r=tn(e)?Sr:Bt.current,i=e.contextTypes,s=(i=i!=null)?_s(t,r):Wi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Rl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function oh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Rl.enqueueReplaceState(e,e.state,null)}function Ru(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ud(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=En(s):(s=tn(e)?Sr:Bt.current,r.context=_s(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Nu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Rl.enqueueReplaceState(r,r.state,null),sl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function bs(t,e){try{var n="",i=e;do n+=F0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function mc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var u_=typeof WeakMap=="function"?WeakMap:Map;function Hx(t,e,n){n=di(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ul||(ul=!0,Bu=i),Pu(t,e)},n}function Gx(t,e,n){n=di(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Pu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Pu(t,e),typeof i!="function"&&(Oi===null?Oi=new Set([this]):Oi.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function lh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new u_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=w_.bind(null,t,e,n),e.then(t,t))}function ch(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function uh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=di(-1,1),e.tag=2,Fi(n,e,1))),n.lanes|=1),t)}var d_=gi.ReactCurrentOwner,Jt=!1;function Vt(t,e,n,i){e.child=t===null?vx(e,null,n,i):Ss(e,t.child,n,i)}function dh(t,e,n,i,r){n=n.render;var s=e.ref;return fs(e,r),i=jd(t,e,n,i,s,r),n=zd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&n&&Ad(e),e.flags|=1,Vt(t,e,i,r),e.child)}function fh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Kd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Vx(t,e,s,i,r)):(t=Ho(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(a,i)&&t.ref===e.ref)return mi(t,e,r)}return e.flags|=1,t=zi(s,i),t.ref=e.ref,t.return=e,e.child=t}function Vx(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(va(s,i)&&t.ref===e.ref)if(Jt=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Jt=!0);else return e.lanes=t.lanes,mi(t,e,r)}return Lu(t,e,n,i,r)}function Wx(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ss,un),un|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,it(ss,un),un|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,it(ss,un),un|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,it(ss,un),un|=i;return Vt(t,e,r,n),e.child}function Xx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Lu(t,e,n,i,r){var s=tn(n)?Sr:Bt.current;return s=_s(e,s),fs(e,r),n=jd(t,e,n,i,s,r),i=zd(),t!==null&&!Jt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,mi(t,e,r)):(ct&&i&&Ad(e),e.flags|=1,Vt(t,e,n,r),e.child)}function hh(t,e,n,i,r){if(tn(n)){var s=!0;el(e)}else s=!1;if(fs(e,r),e.stateNode===null)jo(t,e),Bx(e,n,i),Ru(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=tn(n)?Sr:Bt.current,u=_s(e,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&oh(e,a,i,u),Ti=!1;var p=e.memoizedState;a.state=p,sl(e,i,a,r),c=e.memoizedState,o!==i||p!==c||en.current||Ti?(typeof f=="function"&&(Nu(e,n,f,i),c=e.memoizedState),(o=Ti||ah(e,n,o,i,p,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,yx(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Ln(e.type,o),a.props=u,h=e.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=tn(n)?Sr:Bt.current,c=_s(e,c));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||p!==c)&&oh(e,a,i,c),Ti=!1,p=e.memoizedState,a.state=p,sl(e,i,a,r);var y=e.memoizedState;o!==h||p!==y||en.current||Ti?(typeof x=="function"&&(Nu(e,n,x,i),y=e.memoizedState),(u=Ti||ah(e,n,u,i,p,y,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,y,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,y,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=y),a.props=i,a.state=y,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return Du(t,e,n,i,s,r)}function Du(t,e,n,i,r,s){Xx(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Qf(e,n,!1),mi(t,e,s);i=e.stateNode,d_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ss(e,t.child,null,s),e.child=Ss(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Qf(e,n,!0),e.child}function qx(t){var e=t.stateNode;e.pendingContext?Zf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Zf(t,e.context,!1),Id(t,e.containerInfo)}function ph(t,e,n,i,r){return ys(),Nd(r),e.flags|=256,Vt(t,e,n,i),e.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Iu(t){return{baseLanes:t,cachePool:null,transitions:null}}function $x(t,e,n){var i=e.pendingProps,r=dt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),it(dt,r&1),t===null)return Au(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Dl(a,i,0,null),t=vr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Iu(n),e.memoizedState=Uu,t):Gd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return f_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=zi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=zi(o,s):(s=vr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Iu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Uu,i}return s=t.child,t=s.sibling,i=zi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Gd(t,e){return e=Dl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function io(t,e,n,i){return i!==null&&Nd(i),Ss(e,t.child,null,n),t=Gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function f_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=mc(Error(re(422))),io(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Dl({mode:"visible",children:i.children},r,0,null),s=vr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ss(e,t.child,null,a),e.child.memoizedState=Iu(a),e.memoizedState=Uu,s);if(!(e.mode&1))return io(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(re(419)),i=mc(s,i,void 0),io(t,e,a,i)}if(o=(a&t.childLanes)!==0,Jt||o){if(i=Ct,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,pi(t,r),On(i,t,r,-1))}return Yd(),i=mc(Error(re(421))),io(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=E_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=ki(r.nextSibling),hn=e,ct=!0,Un=null,t!==null&&(yn[Sn++]=li,yn[Sn++]=ci,yn[Sn++]=Mr,li=t.id,ci=t.overflow,Mr=e),e=Gd(e,i.children),e.flags|=4096,e)}function mh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Cu(t.return,e,n)}function xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Yx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&mh(t,n,e);else if(t.tag===19)mh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&al(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&al(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}xc(e,!0,n,null,s);break;case"together":xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function mi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=zi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function h_(t,e,n){switch(e.tag){case 3:qx(e),ys();break;case 5:Sx(e);break;case 1:tn(e.type)&&el(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):n&e.child.childLanes?$x(t,e,n):(it(dt,dt.current&1),t=mi(t,e,n),t!==null?t.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Yx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,Wx(t,e,n)}return mi(t,e,n)}var Kx,ku,Zx,Qx;Kx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ku=function(){};Zx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Kn.current);var s=null;switch(n){case"input":r=ru(t,r),i=ru(t,i),s=[];break;case"select":r=ht({},r,{value:void 0}),i=ht({},i,{value:void 0}),s=[];break;case"textarea":r=ou(t,r),i=ou(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Qo)}cu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(da.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(da.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&rt("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Qx=function(t,e,n,i){n!==i&&(e.flags|=4)};function Hs(t,e){if(!ct)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function p_(t,e,n){var i=e.pendingProps;switch(Cd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return tn(e.type)&&Jo(),kt(e),null;case 3:return i=e.stateNode,Ms(),at(en),at(Bt),Fd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(to(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Un!==null&&(Vu(Un),Un=null))),ku(t,e),kt(e),null;case 5:kd(e);var r=mr(ba.current);if(n=e.type,t!==null&&e.stateNode!=null)Zx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return kt(e),null}if(t=mr(Kn.current),to(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Sa]=s,t=(e.mode&1)!==0,n){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<Js.length;r++)rt(Js[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":wf(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Tf(i,s),rt("invalid",i)}cu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&eo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&eo(i.textContent,o,t),r=["children",""+o]):da.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&rt("scroll",i)}switch(n){case"input":Xa(i),Ef(i,s,!0);break;case"textarea":Xa(i),Af(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Qo)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Tm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[qn]=e,t[Sa]=i,Kx(t,e,!1,!1),e.stateNode=t;e:{switch(a=uu(n,i),n){case"dialog":rt("cancel",t),rt("close",t),r=i;break;case"iframe":case"object":case"embed":rt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Js.length;r++)rt(Js[r],t);r=i;break;case"source":rt("error",t),r=i;break;case"img":case"image":case"link":rt("error",t),rt("load",t),r=i;break;case"details":rt("toggle",t),r=i;break;case"input":wf(t,i),r=ru(t,i),rt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ht({},i,{value:void 0}),rt("invalid",t);break;case"textarea":Tf(t,i),r=ou(t,i),rt("invalid",t);break;default:r=i}cu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Nm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Am(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&fa(t,c):typeof c=="number"&&fa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(da.hasOwnProperty(s)?c!=null&&s==="onScroll"&&rt("scroll",t):c!=null&&hd(t,s,c,a))}switch(n){case"input":Xa(t),Ef(t,i,!1);break;case"textarea":Xa(t),Af(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Vi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Qo)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)Qx(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=mr(ba.current),mr(Kn.current),to(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:eo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&eo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return kt(e),null;case 13:if(at(dt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ct&&dn!==null&&e.mode&1&&!(e.flags&128))xx(),ys(),e.flags|=98560,s=!1;else if(s=to(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[qn]=e}else ys(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Un!==null&&(Vu(Un),Un=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||dt.current&1?Mt===0&&(Mt=3):Yd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ms(),ku(t,e),t===null&&_a(e.stateNode.containerInfo),kt(e),null;case 10:return Ld(e.type._context),kt(e),null;case 17:return tn(e.type)&&Jo(),kt(e),null;case 19:if(at(dt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Hs(s,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=al(t),a!==null){for(e.flags|=128,Hs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return it(dt,dt.current&1|2),e.child}t=t.sibling}s.tail!==null&&gt()>ws&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304)}else{if(!i)if(t=al(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Hs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!ct)return kt(e),null}else 2*gt()-s.renderingStartTime>ws&&n!==1073741824&&(e.flags|=128,i=!0,Hs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=gt(),e.sibling=null,n=dt.current,it(dt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return $d(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?un&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function m_(t,e){switch(Cd(e),e.tag){case 1:return tn(e.type)&&Jo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ms(),at(en),at(Bt),Fd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return kd(e),null;case 13:if(at(dt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));ys()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return at(dt),null;case 4:return Ms(),null;case 10:return Ld(e.type._context),null;case 22:case 23:return $d(),null;case 24:return null;default:return null}}var ro=!1,jt=!1,x_=typeof WeakSet=="function"?WeakSet:Set,_e=null;function rs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){mt(t,e,i)}else n.current=null}function Fu(t,e,n){try{n()}catch(i){mt(t,e,i)}}var xh=!1;function g_(t,e){if(yu=Yo,t=ix(),Td(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,f=0,h=t,p=null;t:for(;;){for(var x;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(c=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(x=h.firstChild)!==null;)p=h,h=x;for(;;){if(h===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++f===i&&(c=a),(x=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=x}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Su={focusedElem:t,selectionRange:n},Yo=!1,_e=e;_e!==null;)if(e=_e,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,_e=t;else for(;_e!==null;){e=_e;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var _=y.memoizedProps,m=y.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:Ln(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){mt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,_e=t;break}_e=e.return}return y=xh,xh=!1,y}function oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fu(e,n,s)}r=r.next}while(r!==i)}}function Pl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ou(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Jx(t){var e=t.alternate;e!==null&&(t.alternate=null,Jx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Sa],delete e[wu],delete e[Jv],delete e[e_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function eg(t){return t.tag===5||t.tag===3||t.tag===4}function gh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||eg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Qo));else if(i!==4&&(t=t.child,t!==null))for(ju(t,e,n),t=t.sibling;t!==null;)ju(t,e,n),t=t.sibling}function zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(zu(t,e,n),t=t.sibling;t!==null;)zu(t,e,n),t=t.sibling}var Rt=null,Dn=!1;function vi(t,e,n){for(n=n.child;n!==null;)tg(t,e,n),n=n.sibling}function tg(t,e,n){if(Yn&&typeof Yn.onCommitFiberUnmount=="function")try{Yn.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:jt||rs(n,e);case 6:var i=Rt,r=Dn;Rt=null,vi(t,e,n),Rt=i,Dn=r,Rt!==null&&(Dn?(t=Rt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Rt.removeChild(n.stateNode));break;case 18:Rt!==null&&(Dn?(t=Rt,n=n.stateNode,t.nodeType===8?cc(t.parentNode,n):t.nodeType===1&&cc(t,n),xa(t)):cc(Rt,n.stateNode));break;case 4:i=Rt,r=Dn,Rt=n.stateNode.containerInfo,Dn=!0,vi(t,e,n),Rt=i,Dn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Fu(n,e,a),r=r.next}while(r!==i)}vi(t,e,n);break;case 1:if(!jt&&(rs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){mt(n,e,o)}vi(t,e,n);break;case 21:vi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,vi(t,e,n),jt=i):vi(t,e,n);break;default:vi(t,e,n)}}function vh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new x_),e.forEach(function(i){var r=T_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Cn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Rt=o.stateNode,Dn=!1;break e;case 3:Rt=o.stateNode.containerInfo,Dn=!0;break e;case 4:Rt=o.stateNode.containerInfo,Dn=!0;break e}o=o.return}if(Rt===null)throw Error(re(160));tg(s,a,r),Rt=null,Dn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){mt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ng(e,t),e=e.sibling}function ng(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Cn(e,t),Gn(t),i&4){try{oa(3,t,t.return),Pl(3,t)}catch(_){mt(t,t.return,_)}try{oa(5,t,t.return)}catch(_){mt(t,t.return,_)}}break;case 1:Cn(e,t),Gn(t),i&512&&n!==null&&rs(n,n.return);break;case 5:if(Cn(e,t),Gn(t),i&512&&n!==null&&rs(n,n.return),t.flags&32){var r=t.stateNode;try{fa(r,"")}catch(_){mt(t,t.return,_)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&wm(r,s),uu(o,a);var u=uu(o,s);for(a=0;a<c.length;a+=2){var f=c[a],h=c[a+1];f==="style"?Nm(r,h):f==="dangerouslySetInnerHTML"?Am(r,h):f==="children"?fa(r,h):hd(r,f,h,u)}switch(o){case"input":su(r,s);break;case"textarea":Em(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var x=s.value;x!=null?ls(r,!!s.multiple,x,!1):p!==!!s.multiple&&(s.defaultValue!=null?ls(r,!!s.multiple,s.defaultValue,!0):ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Sa]=s}catch(_){mt(t,t.return,_)}}break;case 6:if(Cn(e,t),Gn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(_){mt(t,t.return,_)}}break;case 3:if(Cn(e,t),Gn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xa(e.containerInfo)}catch(_){mt(t,t.return,_)}break;case 4:Cn(e,t),Gn(t);break;case 13:Cn(e,t),Gn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xd=gt())),i&4&&vh(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||f,Cn(e,t),jt=u):Cn(e,t),Gn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(_e=t,f=t.child;f!==null;){for(h=_e=f;_e!==null;){switch(p=_e,x=p.child,p.tag){case 0:case 11:case 14:case 15:oa(4,p,p.return);break;case 1:rs(p,p.return);var y=p.stateNode;if(typeof y.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(_){mt(i,n,_)}}break;case 5:rs(p,p.return);break;case 22:if(p.memoizedState!==null){yh(h);continue}}x!==null?(x.return=p,_e=x):yh(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Cm("display",a))}catch(_){mt(t,t.return,_)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(_){mt(t,t.return,_)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Cn(e,t),Gn(t),i&4&&vh(t);break;case 21:break;default:Cn(e,t),Gn(t)}}function Gn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(eg(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fa(r,""),i.flags&=-33);var s=gh(t);zu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=gh(t);ju(t,o,a);break;default:throw Error(re(161))}}catch(c){mt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function v_(t,e,n){_e=t,ig(t)}function ig(t,e,n){for(var i=(t.mode&1)!==0;_e!==null;){var r=_e,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||ro;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||jt;o=ro;var u=jt;if(ro=a,(jt=c)&&!u)for(_e=r;_e!==null;)a=_e,c=a.child,a.tag===22&&a.memoizedState!==null?Sh(r):c!==null?(c.return=a,_e=c):Sh(r);for(;s!==null;)_e=s,ig(s),s=s.sibling;_e=r,ro=o,jt=u}_h(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,_e=s):_h(t)}}function _h(t){for(;_e!==null;){var e=_e;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Pl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Ln(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ih(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ih(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}jt||e.flags&512&&Ou(e)}catch(p){mt(e,e.return,p)}}if(e===t){_e=null;break}if(n=e.sibling,n!==null){n.return=e.return,_e=n;break}_e=e.return}}function yh(t){for(;_e!==null;){var e=_e;if(e===t){_e=null;break}var n=e.sibling;if(n!==null){n.return=e.return,_e=n;break}_e=e.return}}function Sh(t){for(;_e!==null;){var e=_e;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Pl(4,e)}catch(c){mt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){mt(e,r,c)}}var s=e.return;try{Ou(e)}catch(c){mt(e,s,c)}break;case 5:var a=e.return;try{Ou(e)}catch(c){mt(e,a,c)}}}catch(c){mt(e,e.return,c)}if(e===t){_e=null;break}var o=e.sibling;if(o!==null){o.return=e.return,_e=o;break}_e=e.return}}var __=Math.ceil,cl=gi.ReactCurrentDispatcher,Vd=gi.ReactCurrentOwner,wn=gi.ReactCurrentBatchConfig,Ke=0,Ct=null,_t=null,Lt=0,un=0,ss=Ki(0),Mt=0,Aa=null,wr=0,Ll=0,Wd=0,la=null,Zt=null,Xd=0,ws=1/0,ri=null,ul=!1,Bu=null,Oi=null,so=!1,Pi=null,dl=0,ca=0,Hu=null,zo=-1,Bo=0;function Xt(){return Ke&6?gt():zo!==-1?zo:zo=gt()}function ji(t){return t.mode&1?Ke&2&&Lt!==0?Lt&-Lt:n_.transition!==null?(Bo===0&&(Bo=Bm()),Bo):(t=Je,t!==0||(t=window.event,t=t===void 0?16:$m(t.type)),t):1}function On(t,e,n,i){if(50<ca)throw ca=0,Hu=null,Error(re(185));La(t,n,i),(!(Ke&2)||t!==Ct)&&(t===Ct&&(!(Ke&2)&&(Ll|=n),Mt===4&&Ci(t,Lt)),nn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(ws=gt()+500,Cl&&Zi()))}function nn(t,e){var n=t.callbackNode;nv(t,e);var i=$o(t,t===Ct?Lt:0);if(i===0)n!==null&&Rf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rf(n),e===1)t.tag===0?t_(Mh.bind(null,t)):hx(Mh.bind(null,t)),Zv(function(){!(Ke&6)&&Zi()}),n=null;else{switch(Hm(i)){case 1:n=vd;break;case 4:n=jm;break;case 16:n=qo;break;case 536870912:n=zm;break;default:n=qo}n=dg(n,rg.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function rg(t,e){if(zo=-1,Bo=0,Ke&6)throw Error(re(327));var n=t.callbackNode;if(hs()&&t.callbackNode!==n)return null;var i=$o(t,t===Ct?Lt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=fl(t,i);else{e=i;var r=Ke;Ke|=2;var s=ag();(Ct!==t||Lt!==e)&&(ri=null,ws=gt()+500,gr(t,e));do try{M_();break}catch(o){sg(t,o)}while(!0);Pd(),cl.current=s,Ke=r,_t!==null?e=0:(Ct=null,Lt=0,e=Mt)}if(e!==0){if(e===2&&(r=mu(t),r!==0&&(i=r,e=Gu(t,r))),e===1)throw n=Aa,gr(t,0),Ci(t,i),nn(t,gt()),n;if(e===6)Ci(t,i);else{if(r=t.current.alternate,!(i&30)&&!y_(r)&&(e=fl(t,i),e===2&&(s=mu(t),s!==0&&(i=s,e=Gu(t,s))),e===1))throw n=Aa,gr(t,0),Ci(t,i),nn(t,gt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:lr(t,Zt,ri);break;case 3:if(Ci(t,i),(i&130023424)===i&&(e=Xd+500-gt(),10<e)){if($o(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=bu(lr.bind(null,t,Zt,ri),e);break}lr(t,Zt,ri);break;case 4:if(Ci(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Fn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=gt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*__(i/1960))-i,10<i){t.timeoutHandle=bu(lr.bind(null,t,Zt,ri),i);break}lr(t,Zt,ri);break;case 5:lr(t,Zt,ri);break;default:throw Error(re(329))}}}return nn(t,gt()),t.callbackNode===n?rg.bind(null,t):null}function Gu(t,e){var n=la;return t.current.memoizedState.isDehydrated&&(gr(t,e).flags|=256),t=fl(t,e),t!==2&&(e=Zt,Zt=n,e!==null&&Vu(e)),t}function Vu(t){Zt===null?Zt=t:Zt.push.apply(Zt,t)}function y_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!zn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ci(t,e){for(e&=~Wd,e&=~Ll,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Fn(e),i=1<<n;t[n]=-1,e&=~i}}function Mh(t){if(Ke&6)throw Error(re(327));hs();var e=$o(t,0);if(!(e&1))return nn(t,gt()),null;var n=fl(t,e);if(t.tag!==0&&n===2){var i=mu(t);i!==0&&(e=i,n=Gu(t,i))}if(n===1)throw n=Aa,gr(t,0),Ci(t,e),nn(t,gt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Zt,ri),nn(t,gt()),null}function qd(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(ws=gt()+500,Cl&&Zi())}}function Er(t){Pi!==null&&Pi.tag===0&&!(Ke&6)&&hs();var e=Ke;Ke|=1;var n=wn.transition,i=Je;try{if(wn.transition=null,Je=1,t)return t()}finally{Je=i,wn.transition=n,Ke=e,!(Ke&6)&&Zi()}}function $d(){un=ss.current,at(ss)}function gr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Kv(n)),_t!==null)for(n=_t.return;n!==null;){var i=n;switch(Cd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Jo();break;case 3:Ms(),at(en),at(Bt),Fd();break;case 5:kd(i);break;case 4:Ms();break;case 13:at(dt);break;case 19:at(dt);break;case 10:Ld(i.type._context);break;case 22:case 23:$d()}n=n.return}if(Ct=t,_t=t=zi(t.current,null),Lt=un=e,Mt=0,Aa=null,Wd=Ll=wr=0,Zt=la=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function sg(t,e){do{var n=_t;try{if(Pd(),Fo.current=ll,ol){for(var i=ft.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ol=!1}if(br=0,At=St=ft=null,aa=!1,wa=0,Vd.current=null,n===null||n.return===null){Mt=1,Aa=e,_t=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Lt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=o,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=ch(a);if(x!==null){x.flags&=-257,uh(x,a,o,s,e),x.mode&1&&lh(s,u,e),e=x,c=u;var y=e.updateQueue;if(y===null){var _=new Set;_.add(c),e.updateQueue=_}else y.add(c);break e}else{if(!(e&1)){lh(s,u,e),Yd();break e}c=Error(re(426))}}else if(ct&&o.mode&1){var m=ch(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),uh(m,a,o,s,e),Nd(bs(c,o));break e}}s=c=bs(c,o),Mt!==4&&(Mt=2),la===null?la=[s]:la.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Hx(s,c,e);nh(s,d);break e;case 1:o=c;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Oi===null||!Oi.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=Gx(s,o,e);nh(s,S);break e}}s=s.return}while(s!==null)}lg(n)}catch(A){e=A,_t===n&&n!==null&&(_t=n=n.return);continue}break}while(!0)}function ag(){var t=cl.current;return cl.current=ll,t===null?ll:t}function Yd(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Ct===null||!(wr&268435455)&&!(Ll&268435455)||Ci(Ct,Lt)}function fl(t,e){var n=Ke;Ke|=2;var i=ag();(Ct!==t||Lt!==e)&&(ri=null,gr(t,e));do try{S_();break}catch(r){sg(t,r)}while(!0);if(Pd(),Ke=n,cl.current=i,_t!==null)throw Error(re(261));return Ct=null,Lt=0,Mt}function S_(){for(;_t!==null;)og(_t)}function M_(){for(;_t!==null&&!q0();)og(_t)}function og(t){var e=ug(t.alternate,t,un);t.memoizedProps=t.pendingProps,e===null?lg(t):_t=e,Vd.current=null}function lg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=m_(n,e),n!==null){n.flags&=32767,_t=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,_t=null;return}}else if(n=p_(n,e,un),n!==null){_t=n;return}if(e=e.sibling,e!==null){_t=e;return}_t=e=t}while(e!==null);Mt===0&&(Mt=5)}function lr(t,e,n){var i=Je,r=wn.transition;try{wn.transition=null,Je=1,b_(t,e,n,i)}finally{wn.transition=r,Je=i}return null}function b_(t,e,n,i){do hs();while(Pi!==null);if(Ke&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(iv(t,s),t===Ct&&(_t=Ct=null,Lt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||so||(so=!0,dg(qo,function(){return hs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=wn.transition,wn.transition=null;var a=Je;Je=1;var o=Ke;Ke|=4,Vd.current=null,g_(t,n),ng(n,t),Gv(Su),Yo=!!yu,Su=yu=null,t.current=n,v_(n),$0(),Ke=o,Je=a,wn.transition=s}else t.current=n;if(so&&(so=!1,Pi=t,dl=r),s=t.pendingLanes,s===0&&(Oi=null),Z0(n.stateNode),nn(t,gt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ul)throw ul=!1,t=Bu,Bu=null,t;return dl&1&&t.tag!==0&&hs(),s=t.pendingLanes,s&1?t===Hu?ca++:(ca=0,Hu=t):ca=0,Zi(),null}function hs(){if(Pi!==null){var t=Hm(dl),e=wn.transition,n=Je;try{if(wn.transition=null,Je=16>t?16:t,Pi===null)var i=!1;else{if(t=Pi,Pi=null,dl=0,Ke&6)throw Error(re(331));var r=Ke;for(Ke|=4,_e=t.current;_e!==null;){var s=_e,a=s.child;if(_e.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(_e=u;_e!==null;){var f=_e;switch(f.tag){case 0:case 11:case 15:oa(8,f,s)}var h=f.child;if(h!==null)h.return=f,_e=h;else for(;_e!==null;){f=_e;var p=f.sibling,x=f.return;if(Jx(f),f===u){_e=null;break}if(p!==null){p.return=x,_e=p;break}_e=x}}}var y=s.alternate;if(y!==null){var _=y.child;if(_!==null){y.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}_e=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,_e=a;else e:for(;_e!==null;){if(s=_e,s.flags&2048)switch(s.tag){case 0:case 11:case 15:oa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,_e=d;break e}_e=s.return}}var v=t.current;for(_e=v;_e!==null;){a=_e;var g=a.child;if(a.subtreeFlags&2064&&g!==null)g.return=a,_e=g;else e:for(a=v;_e!==null;){if(o=_e,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Pl(9,o)}}catch(A){mt(o,o.return,A)}if(o===a){_e=null;break e}var S=o.sibling;if(S!==null){S.return=o.return,_e=S;break e}_e=o.return}}if(Ke=r,Zi(),Yn&&typeof Yn.onPostCommitFiberRoot=="function")try{Yn.onPostCommitFiberRoot(bl,t)}catch{}i=!0}return i}finally{Je=n,wn.transition=e}}return!1}function bh(t,e,n){e=bs(n,e),e=Hx(t,e,1),t=Fi(t,e,1),e=Xt(),t!==null&&(La(t,1,e),nn(t,e))}function mt(t,e,n){if(t.tag===3)bh(t,t,n);else for(;e!==null;){if(e.tag===3){bh(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Oi===null||!Oi.has(i))){t=bs(n,t),t=Gx(e,t,1),e=Fi(e,t,1),t=Xt(),e!==null&&(La(e,1,t),nn(e,t));break}}e=e.return}}function w_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Ct===t&&(Lt&n)===n&&(Mt===4||Mt===3&&(Lt&130023424)===Lt&&500>gt()-Xd?gr(t,0):Wd|=n),nn(t,e)}function cg(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=Xt();t=pi(t,e),t!==null&&(La(t,e,n),nn(t,n))}function E_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),cg(t,n)}function T_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),cg(t,n)}var ug;ug=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||en.current)Jt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Jt=!1,h_(t,e,n);Jt=!!(t.flags&131072)}else Jt=!1,ct&&e.flags&1048576&&px(e,nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jo(t,e),t=e.pendingProps;var r=_s(e,Bt.current);fs(e,n),r=jd(null,e,i,t,r,n);var s=zd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,tn(i)?(s=!0,el(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ud(e),r.updater=Rl,e.stateNode=r,r._reactInternals=e,Ru(e,i,t,n),e=Du(null,e,i,!0,s,n)):(e.tag=0,ct&&s&&Ad(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=C_(i),t=Ln(i,t),r){case 0:e=Lu(null,e,i,t,n);break e;case 1:e=hh(null,e,i,t,n);break e;case 11:e=dh(null,e,i,t,n);break e;case 14:e=fh(null,e,i,Ln(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),Lu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),hh(t,e,i,r,n);case 3:e:{if(qx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,yx(t,e),sl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=bs(Error(re(423)),e),e=ph(t,e,i,n,r);break e}else if(i!==r){r=bs(Error(re(424)),e),e=ph(t,e,i,n,r);break e}else for(dn=ki(e.stateNode.containerInfo.firstChild),hn=e,ct=!0,Un=null,n=vx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ys(),i===r){e=mi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Sx(e),t===null&&Au(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Mu(i,r)?a=null:s!==null&&Mu(i,s)&&(e.flags|=32),Xx(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&Au(e),null;case 13:return $x(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ss(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),dh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,it(il,i._currentValue),i._currentValue=a,s!==null)if(zn(s.value,a)){if(s.children===r.children&&!en.current){e=mi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=di(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Cu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(re(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Cu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fs(e,n),r=En(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Ln(i,e.pendingProps),r=Ln(i.type,r),fh(t,e,i,r,n);case 15:return Vx(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Ln(i,r),jo(t,e),e.tag=1,tn(i)?(t=!0,el(e)):t=!1,fs(e,n),Bx(e,i,r),Ru(e,i,r,n),Du(null,e,i,!0,t,n);case 19:return Yx(t,e,n);case 22:return Wx(t,e,n)}throw Error(re(156,e.tag))};function dg(t,e){return Om(t,e)}function A_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new A_(t,e,n,i)}function Kd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function C_(t){if(typeof t=="function")return Kd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===md)return 11;if(t===xd)return 14}return 2}function zi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ho(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Kd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return vr(n.children,r,s,e);case pd:a=8,r|=8;break;case eu:return t=bn(12,n,e,r|2),t.elementType=eu,t.lanes=s,t;case tu:return t=bn(13,n,e,r),t.elementType=tu,t.lanes=s,t;case nu:return t=bn(19,n,e,r),t.elementType=nu,t.lanes=s,t;case Sm:return Dl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case _m:a=10;break e;case ym:a=9;break e;case md:a=11;break e;case xd:a=14;break e;case Ei:a=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function vr(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function Dl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=Sm,t.lanes=n,t.stateNode={isHidden:!1},t}function gc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function vc(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function N_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ql(0),this.expirationTimes=Ql(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ql(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zd(t,e,n,i,r,s,a,o,c){return t=new N_(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),t}function R_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function fg(t){if(!t)return Wi;t=t._reactInternals;e:{if(Cr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(tn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(tn(n))return fx(t,n,e)}return e}function hg(t,e,n,i,r,s,a,o,c){return t=Zd(n,i,!0,t,r,s,a,o,c),t.context=fg(null),n=t.current,i=Xt(),r=ji(n),s=di(i,r),s.callback=e??null,Fi(n,s,r),t.current.lanes=r,La(t,r,i),nn(t,i),t}function Ul(t,e,n,i){var r=e.current,s=Xt(),a=ji(r);return n=fg(n),e.context===null?e.context=n:e.pendingContext=n,e=di(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Fi(r,e,a),t!==null&&(On(t,r,a,s),ko(t,r,a)),a}function hl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function wh(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Qd(t,e){wh(t,e),(t=t.alternate)&&wh(t,e)}function P_(){return null}var pg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Jd(t){this._internalRoot=t}Il.prototype.render=Jd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Ul(t,e,null,null)};Il.prototype.unmount=Jd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Er(function(){Ul(null,t,null,null)}),e[hi]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ai.length&&e!==0&&e<Ai[n].priority;n++);Ai.splice(n,0,t),n===0&&qm(t)}};function ef(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function kl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Eh(){}function L_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=hl(a);s.call(u)}}var a=hg(e,i,t,0,null,!1,!1,"",Eh);return t._reactRootContainer=a,t[hi]=a.current,_a(t.nodeType===8?t.parentNode:t),Er(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=hl(c);o.call(u)}}var c=Zd(t,0,!1,null,null,!1,!1,"",Eh);return t._reactRootContainer=c,t[hi]=c.current,_a(t.nodeType===8?t.parentNode:t),Er(function(){Ul(e,c,n,i)}),c}function Fl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=hl(a);o.call(c)}}Ul(e,a,t,r)}else a=L_(n,e,t,r,i);return hl(a)}Gm=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Qs(e.pendingLanes);n!==0&&(_d(e,n|1),nn(e,gt()),!(Ke&6)&&(ws=gt()+500,Zi()))}break;case 13:Er(function(){var i=pi(t,1);if(i!==null){var r=Xt();On(i,t,1,r)}}),Qd(t,1)}};yd=function(t){if(t.tag===13){var e=pi(t,134217728);if(e!==null){var n=Xt();On(e,t,134217728,n)}Qd(t,134217728)}};Vm=function(t){if(t.tag===13){var e=ji(t),n=pi(t,e);if(n!==null){var i=Xt();On(n,t,e,i)}Qd(t,e)}};Wm=function(){return Je};Xm=function(t,e){var n=Je;try{return Je=t,e()}finally{Je=n}};fu=function(t,e,n){switch(e){case"input":if(su(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Al(i);if(!r)throw Error(re(90));bm(i),su(i,r)}}}break;case"textarea":Em(t,n);break;case"select":e=n.value,e!=null&&ls(t,!!n.multiple,e,!1)}};Lm=qd;Dm=Er;var D_={usingClientEntryPoint:!1,Events:[Ua,Jr,Al,Rm,Pm,qd]},Gs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U_={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:gi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=km(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||P_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ao.isDisabled&&ao.supportsFiber)try{bl=ao.inject(U_),Yn=ao}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D_;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ef(e))throw Error(re(200));return R_(t,e,null,n)};mn.createRoot=function(t,e){if(!ef(t))throw Error(re(299));var n=!1,i="",r=pg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zd(t,1,!1,null,null,n,!1,i,r),t[hi]=e.current,_a(t.nodeType===8?t.parentNode:t),new Jd(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=km(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Er(t)};mn.hydrate=function(t,e,n){if(!kl(e))throw Error(re(200));return Fl(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!ef(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=pg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=hg(e,null,t,1,n??null,r,!1,s,a),t[hi]=e.current,_a(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Il(e)};mn.render=function(t,e,n){if(!kl(e))throw Error(re(200));return Fl(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!kl(t))throw Error(re(40));return t._reactRootContainer?(Er(function(){Fl(null,null,t,!1,function(){t._reactRootContainer=null,t[hi]=null})}),!0):!1};mn.unstable_batchedUpdates=qd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!kl(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Fl(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function mg(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(mg)}catch(t){console.error(t)}}mg(),mm.exports=mn;var I_=mm.exports,Th=I_;Qc.createRoot=Th.createRoot,Qc.hydrateRoot=Th.hydrateRoot;const xg=ye.createContext(),Wu=[{id:"1",name:"তানভীর আহমেদ",email:"admin@kuakatamultimedia.com",password:"admin",phone:"+880 1711-000001",role:"admin",designation:"চিফ এনিমেশন ডিরেক্টর & সিইও",dept:"3D & VFX",basic_salary:85e3,join_date:"2022-01-15",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop",skills:["Three.js","Blender","Cinema 4D","Unreal Engine"],status:"Active"},{id:"2",name:"রাফি রহমান",email:"member@kuakatamultimedia.com",password:"member",phone:"+880 1822-111222",role:"member",designation:"সিনিয়র ৩ডি মোশন ডিজাইনার",dept:"3D & VFX",basic_salary:62e3,join_date:"2022-06-10",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop",skills:["After Effects","Blender","Octane Render"],status:"Active"},{id:"3",name:"নুসরাত জাহান",email:"nusrat@kuakatamultimedia.com",password:"123",phone:"+880 1933-333444",role:"member",designation:"লিড ওয়েব & ইউএক্স আর্কিটেক্ট",dept:"Web Dev",basic_salary:68e3,join_date:"2023-02-01",avatar:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop",skills:["React.js","Next.js","Three.js","Tailwind"],status:"Active"},{id:"4",name:"আরিফুল ইসলাম",email:"arif@kuakatamultimedia.com",password:"123",phone:"+880 1644-555666",role:"member",designation:"সিনিয়র ভিএফএক্স অ্যান্ড ভিডিও এডিটর",dept:"Video Production",basic_salary:55e3,join_date:"2023-05-20",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop",skills:["Premiere Pro","DaVinci Resolve","Nuke"],status:"Active"},{id:"5",name:"সামিরা খান",email:"samira@kuakatamultimedia.com",password:"123",phone:"+880 1555-777888",role:"member",designation:"কনসেপ্ট আর্ট & ৩ডি ক্যারেক্টার মডেলার",dept:"3D & VFX",basic_salary:58e3,join_date:"2023-09-12",avatar:"https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&auto=format&fit=crop",skills:["ZBrush","Substance Painter","Maya"],status:"Active"}],k_=[{id:"p1",title:"কুয়াকাটা বীচ ভার্চুয়াল ৩ডি এক্সপেরিয়েন্স",category:"3D & Web",description:"কুয়াকাটা সমুদ্র সৈকতের সূর্যোদয় ও সূর্যাস্তের এক মনোরম ৩ডি রিয়েল-টাইম ওয়েব সিমুলেশন।",image:"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/beach3d",tags:["Three.js","WebGL","React","Audio FX"],featured:!0,client:"কুয়াকাটা ট্যুরিজম ডাইরেক্টরেট"},{id:"p2",title:"সাইবারপাঙ্ক ঢাকা মোশন সিগনেচার",category:"VFX & Motion",description:"ভবিষ্যতের ঢাকাকে কেন্দ্র করে তৈরি ৩ডি মোশন রিফ্লেকশন ও ভিএফএক্স শট।",image:"https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/cyberdhaka",tags:["Unreal Engine 5","Octane","After Effects"],featured:!0,client:"ডিজিটাল বাংলাদেশ ভিশন"},{id:"p3",title:"রয়েল স্পোর্টস ৩ডি প্রোডাক্ট শোকেস",category:"3D Commercial",description:"স্পোর্টস শ্যুর ৩ডি ফ্লোটিং আনবক্সিং এবং ডায়নামিক ৩৬০ ক্যামেরা এনিমেশন।",image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/royalsports",tags:["Cinema 4D","Redshift","Three.js"],featured:!0,client:"রয়েল ফুটওয়্যার লিমিটেড"},{id:"p4",title:"কোস্টাল ওয়েভ ইন্টারেক্টিভ অডিও সিমুলেটর",category:"Interactive Web",description:"সমুদ্রের ঢেউ এবং সাউন্ড ওয়েভের সমন্বয়ে তৈরি ইন্টারেক্টিভ অডিও ওয়েব আর্ট।",image:"https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/waveart",tags:["Web Audio API","React Three Fiber"],featured:!1,client:"সাউন্ড আর্ট ল্যাব"}],Ah=()=>{const t=[],e=new Date,n=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0");for(let r=1;r<=20;r++){const s=String(r).padStart(2,"0"),a=`${n}-${i}-${s}`;Wu.forEach(o=>{let c="Present";const u=(r+parseInt(o.id)*3)%10;u===8?c="Absent":u===9?c="Leave":u===7&&(c="Half-day"),t.push({id:`att-${o.id}-${a}`,user_id:o.id,date:a,status:c,checkIn:c!=="Absent"?"09:30 AM":"-",checkOut:c!=="Absent"?"06:00 PM":"-"})})}return t},F_=(t,e)=>{const n=[],i="জুলাই ২০২৬";return t.forEach(r=>{const s=e.filter(x=>x.user_id===r.id),a=s.filter(x=>x.status==="Absent").length,o=s.filter(x=>x.status==="Leave").length,c=s.filter(x=>x.status==="Half-day").length,u=Math.round(r.basic_salary/30),f=Math.round(a*u+c*u*.5),h=r.role==="admin"?5e3:2500,p=r.basic_salary+h-f;n.push({id:`sal-${r.id}-2026-07`,user_id:r.id,user_name:r.name,month:i,month_key:"2026-07",basic_salary:r.basic_salary,bonus:h,deductions:f,absent_days:a,leave_days:o,half_days:c,net_salary:p,paid_status:parseInt(r.id)%2===1?"Paid":"Pending",payment_date:parseInt(r.id)%2===1?"2026-07-28":null,transaction_id:parseInt(r.id)%2===1?`TXN-KM-${Math.floor(1e5+Math.random()*9e5)}`:null,note:"মাসিক পারফরম্যান্স অ্যালাউন্স সহ"})}),n},O_=({children:t})=>{const[e,n]=ye.useState(()=>{const S=localStorage.getItem("km_members");return S?JSON.parse(S):Wu}),[i,r]=ye.useState(()=>{const S=localStorage.getItem("km_projects");return S?JSON.parse(S):k_}),[s,a]=ye.useState(()=>{const S=localStorage.getItem("km_attendance");return S?JSON.parse(S):Ah()}),[o,c]=ye.useState(()=>{const S=localStorage.getItem("km_salaries");return S?JSON.parse(S):F_(Wu,Ah())});ye.useEffect(()=>{localStorage.setItem("km_members",JSON.stringify(e))},[e]),ye.useEffect(()=>{localStorage.setItem("km_projects",JSON.stringify(i))},[i]),ye.useEffect(()=>{localStorage.setItem("km_attendance",JSON.stringify(s))},[s]),ye.useEffect(()=>{localStorage.setItem("km_salaries",JSON.stringify(o))},[o]);const u=(S,A="2026-07")=>{const b=e.find(Z=>Z.id===S);if(!b)return;const E=s.filter(Z=>Z.user_id===S),L=E.filter(Z=>Z.status==="Absent").length,z=E.filter(Z=>Z.status==="Leave").length,M=E.filter(Z=>Z.status==="Half-day").length,R=Math.round(b.basic_salary/30),ee=Math.round(L*R+M*R*.5);c(Z=>Z.map(D=>{if(D.user_id===S&&D.month_key===A){const B=b.basic_salary+D.bonus-ee;return{...D,basic_salary:b.basic_salary,absent_days:L,leave_days:z,half_days:M,deductions:ee,net_salary:B}}return D}))},f=(S,A)=>e.find(E=>E.email.toLowerCase()===S.toLowerCase())?(n(E=>E.map(L=>L.email.toLowerCase()===S.toLowerCase()?{...L,password:A}:L)),{success:!0,message:"পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!"}):{success:!1,message:"এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট পাওয়া যায়নি!"},h=S=>{const A=String(Date.now()),b={...S,id:A,password:S.password||"123456",status:"Active",avatar:S.avatar||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&auto=format&fit=crop"};n(L=>[...L,b]);const E={id:`sal-${A}-2026-07`,user_id:A,user_name:b.name,month:"জুলাই ২০২৬",month_key:"2026-07",basic_salary:b.basic_salary,bonus:0,deductions:0,absent_days:0,leave_days:0,half_days:0,net_salary:b.basic_salary,paid_status:"Pending",payment_date:null,transaction_id:null,note:"নতুন মেম্বারের বেতন অ্যাকাউন্ট"};c(L=>[...L,E])},p=S=>{n(A=>A.map(b=>b.id===S.id?{...b,...S}:b)),u(S.id)},x=S=>{n(A=>A.filter(b=>b.id!==S)),c(A=>A.filter(b=>b.user_id!==S)),a(A=>A.filter(b=>b.user_id!==S))},y=(S,A,b)=>{a(E=>{const L=E.findIndex(z=>z.user_id===S&&z.date===A);if(L>=0){const z=[...E];return z[L]={...z[L],status:b,checkIn:b!=="Absent"?"09:30 AM":"-",checkOut:b!=="Absent"?"06:00 PM":"-"},z}else return[...E,{id:`att-${S}-${A}`,user_id:S,date:A,status:b,checkIn:b!=="Absent"?"09:30 AM":"-",checkOut:b!=="Absent"?"06:00 PM":"-"}]}),setTimeout(()=>u(S),50)},_=(S,A,b=null,E=null)=>{c(L=>L.map(z=>{if(z.id===S){const M=b!==null?Number(b):z.bonus,R=z.basic_salary+M-z.deductions,ee=A==="Paid";return{...z,bonus:M,net_salary:R,paid_status:A,payment_date:ee?new Date().toISOString().split("T")[0]:null,transaction_id:ee?z.transaction_id||`TXN-KM-${Math.floor(1e5+Math.random()*9e5)}`:null,note:E!==null?E:z.note}}return z}))},m=S=>{r(A=>[...A,{...S,id:`p-${Date.now()}`}])},d=S=>{r(A=>A.filter(b=>b.id!==S))},v=()=>{const S={members:e,projects:i,attendance:s,salaries:o,export_date:new Date().toISOString(),system:"Kuakata Multimedia"},A="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(S,null,2)),b=document.createElement("a");b.setAttribute("href",A),b.setAttribute("download",`kuakata_multimedia_backup_${new Date().toISOString().split("T")[0]}.json`),document.body.appendChild(b),b.click(),b.remove()},g=S=>{S.members&&n(S.members),S.projects&&r(S.projects),S.attendance&&a(S.attendance),S.salaries&&c(S.salaries)};return l.jsx(xg.Provider,{value:{members:e,projects:i,attendance:s,salaries:o,addMember:h,updateMember:p,deleteMember:x,setDailyAttendance:y,updateSalaryStatus:_,addProject:m,deleteProject:d,resetUserPassword:f,recalculateMemberSalary:u,exportAllDataJSON:v,restoreAllDataJSON:g},children:t})},Bn=()=>ye.useContext(xg),gg=ye.createContext(),j_=({children:t})=>{const{members:e}=Bn(),[n,i]=ye.useState(()=>{const u=localStorage.getItem("km_auth_user");return u?JSON.parse(u):null}),[r,s]=ye.useState("home");ye.useEffect(()=>{n?localStorage.setItem("km_auth_user",JSON.stringify(n)):localStorage.removeItem("km_auth_user")},[n]);const a=(u,f)=>{const h=e.find(p=>p.email.toLowerCase()===u.toLowerCase());if(h)return h.password&&f&&h.password!==f?{success:!1,message:"পাসওয়ার্ডটি সঠিক নয়! আবার চেষ্টা করুন।"}:(i(h),h.role==="admin"?s("admin-dashboard"):s("member-portal"),{success:!0,user:h});if(u==="admin@kuakatamultimedia.com"||u==="admin"){const p=e.find(x=>x.role==="admin")||e[0];return i(p),s("admin-dashboard"),{success:!0,user:p}}if(u==="member@kuakatamultimedia.com"||u==="member"){const p=e.find(x=>x.role==="member")||e[1];return i(p),s("member-portal"),{success:!0,user:p}}return{success:!1,message:"এই ইমেইল দিয়ে কোনো মেম্বার অ্যাকাউন্ট খুঁজে পাওয়া যায়নি!"}},o=()=>{i(null),s("home")},c=u=>{if(u==="admin"){const f=e.find(h=>h.role==="admin")||e[0];i(f),s("admin-dashboard")}else if(u==="member"){const f=e.find(h=>h.role==="member")||e[1];i(f),s("member-portal")}else i(null),s("home")};return l.jsx(gg.Provider,{value:{user:n,activeTab:r,setActiveTab:s,login:a,logout:o,switchRoleDemo:c},children:t})},Nr=()=>ye.useContext(gg);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var z_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=(t,e)=>{const n=ye.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:c,...u},f)=>ye.createElement("svg",{ref:f,...z_,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${B_(t)}`,o].join(" "),...u},[...e.map(([h,p])=>ye.createElement(h,p)),...Array.isArray(c)?c:[c]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ne("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ne("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=Ne("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=Ne("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ne("CheckCheck",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ne("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ne("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=Ne("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ne("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=Ne("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Ne("CircleX",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=Ne("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=Ne("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=Ne("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=Ne("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ne("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=Ne("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ne("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vg=Ne("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ne("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=Ne("Key",[["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["path",{d:"m15.5 7.5 3 3L22 7l-3-3",key:"1rn1fs"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ne("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Ne("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=Ne("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=Ne("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=Ne("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=Ne("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=Ne("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=Ne("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _g=Ne("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=Ne("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=Ne("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yg=Ne("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=Ne("Printer",[["polyline",{points:"6 9 6 2 18 2 18 9",key:"1306q4"}],["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["rect",{width:"12",height:"8",x:"6",y:"14",key:"5ipwut"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sg=Ne("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mg=Ne("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=Ne("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=Ne("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tf=Ne("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=Ne("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bg=Ne("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=Ne("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=Ne("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=Ne("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=Ne("UserCheck",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=Ne("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=Ne("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=Ne("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=Ne("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function py({onOpenAuthModal:t}){const{user:e,activeTab:n,setActiveTab:i,logout:r,switchRoleDemo:s}=Nr(),[a,o]=ye.useState(!1),c=u=>{i(u),o(!1)};return l.jsxs("header",{className:"sticky top-0 z-50 w-full glass-panel border-b border-brand-red/20 shadow-2xl",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[l.jsxs("div",{onClick:()=>c("home"),className:"flex items-center gap-3 cursor-pointer group",children:[l.jsx("div",{className:"relative w-12 h-12 rounded-xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 shadow-[0_0_20px_rgba(255,0,51,0.4)] group-hover:scale-105 transition-transform flex items-center justify-center",children:l.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[10px] p-1.5 flex items-center justify-center",children:l.jsx("img",{src:"/logo.svg",alt:"Kuakata Multimedia Logo",className:"w-full h-full object-contain group-hover:rotate-6 transition-transform"})})}),l.jsxs("div",{children:[l.jsxs("span",{className:"text-xl font-black text-white tracking-wider flex items-center gap-1",children:["KUAKATA ",l.jsx("span",{className:"text-gradient",children:"MULTIMEDIA"})]}),l.jsx("span",{className:"block text-[10px] text-slate-400 font-semibold tracking-widest uppercase",children:"www.kuakatamultimedia.com"})]})]}),l.jsxs("nav",{className:"hidden md:flex items-center gap-1 glass-panel px-3 py-1.5 rounded-full border border-slate-800",children:[l.jsx("button",{id:"nav-home",onClick:()=>c("home"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="home"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"হোম (Home)"}),l.jsx("button",{id:"nav-team",onClick:()=>c("team"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="team"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"টিম মেম্বার (Team)"}),l.jsx("button",{id:"nav-portfolio",onClick:()=>c("portfolio"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="portfolio"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"পোর্টফোলিও (Portfolio)"}),l.jsx("button",{id:"nav-contact",onClick:()=>c("contact"),className:`px-4 py-2 rounded-full text-xs font-semibold transition-all ${n==="contact"?"bg-brand-red/20 text-brand-red border border-brand-red/40 shadow-[0_0_15px_rgba(255,0,51,0.3)]":"text-slate-300 hover:text-white hover:bg-slate-800/50"}`,children:"যোগাযোগ (Contact)"})]}),l.jsx("div",{className:"hidden lg:flex items-center gap-3",children:e?l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{id:"btn-portal-access",onClick:()=>c(e.role==="admin"?"admin-dashboard":"member-portal"),className:"inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold text-white shadow-md shadow-brand-red/30 hover:scale-105 transition-transform",children:[l.jsx(J_,{className:"w-4 h-4"}),l.jsx("span",{children:e.role==="admin"?"অ্যাডমিন ড্যাশবোর্ড":"মেম্বার পোর্টাল"})]}),l.jsx("button",{id:"btn-logout",onClick:r,title:"লগআউট",className:"p-2 rounded-xl glass-panel text-slate-400 hover:text-rose-400 hover:border-rose-500/40 transition-colors",children:l.jsx(ty,{className:"w-4 h-4"})})]}):l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("button",{id:"btn-quick-admin",onClick:()=>s("admin"),className:"px-3 py-2 rounded-xl text-[11px] font-semibold text-brand-red glass-panel hover:bg-brand-red/10 border border-brand-red/40 flex items-center gap-1.5",children:[l.jsx(Rr,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"অ্যাডমিন ডেমো"})]}),l.jsxs("button",{id:"btn-quick-member",onClick:()=>s("member"),className:"px-3 py-2 rounded-xl text-[11px] font-semibold text-brand-amber glass-panel hover:bg-brand-amber/10 border border-brand-amber/40 flex items-center gap-1.5",children:[l.jsx(ka,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"মেম্বার ডেমো"})]}),l.jsxs("button",{id:"btn-login-modal",onClick:t,className:"inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-brand-red text-white hover:bg-white hover:text-dark-900 transition-colors shadow-md shadow-brand-red/30",children:[l.jsx(ey,{className:"w-4 h-4"}),l.jsx("span",{children:"লগইন"})]})]})}),l.jsx("button",{id:"btn-mobile-menu",onClick:()=>o(!a),className:"md:hidden p-2 rounded-lg glass-panel text-slate-200 hover:text-white",children:a?l.jsx(Xi,{className:"w-6 h-6"}):l.jsx(iy,{className:"w-6 h-6"})})]}),a&&l.jsxs("div",{className:"md:hidden glass-panel border-t border-slate-800 p-4 space-y-3",children:[l.jsx("button",{onClick:()=>c("home"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"হোম (Home)"}),l.jsx("button",{onClick:()=>c("team"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"টিম মেম্বার (Team)"}),l.jsx("button",{onClick:()=>c("portfolio"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"পোর্টফোলিও (Portfolio)"}),l.jsx("button",{onClick:()=>c("contact"),className:"w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800",children:"যোগাযোগ (Contact)"}),l.jsx("div",{className:"pt-3 border-t border-slate-800 flex flex-col gap-2",children:e?l.jsx("button",{onClick:()=>c(e.role==="admin"?"admin-dashboard":"member-portal"),className:"w-full py-2.5 rounded-lg text-xs font-bold bg-brand-red text-white text-center",children:e.role==="admin"?"অ্যাডমিন ড্যাশবোর্ড":"মেম্বার পোর্টাল"}):l.jsxs(l.Fragment,{children:[l.jsx("button",{onClick:()=>{s("admin"),o(!1)},className:"w-full py-2.5 rounded-lg text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/30 text-center",children:"অ্যাডমিন হিসেবে ডেমো লগইন"}),l.jsx("button",{onClick:()=>{s("member"),o(!1)},className:"w-full py-2.5 rounded-lg text-xs font-bold bg-brand-amber/20 text-brand-amber border border-brand-amber/30 text-center",children:"মেম্বার হিসেবে ডেমো লগইন"})]})})]})]})}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nf="162",my=0,Ph=1,xy=2,wg=1,gy=2,ii=3,qi=0,rn=1,ai=2,Bi=0,xs=1,Yu=2,Lh=3,Dh=4,vy=5,dr=100,_y=101,yy=102,Uh=103,Ih=104,Sy=200,My=201,by=202,wy=203,Ku=204,Zu=205,Ey=206,Ty=207,Ay=208,Cy=209,Ny=210,Ry=211,Py=212,Ly=213,Dy=214,Uy=0,Iy=1,ky=2,xl=3,Fy=4,Oy=5,jy=6,zy=7,Eg=0,By=1,Hy=2,Hi=0,Gy=1,Vy=2,Wy=3,Xy=4,qy=5,$y=6,Yy=7,Tg=300,Es=301,Ts=302,Qu=303,Ju=304,Ol=306,ed=1e3,In=1001,td=1002,Wt=1003,kh=1004,Vs=1005,Kt=1006,_c=1007,xr=1008,Gi=1009,Ky=1010,Zy=1011,rf=1012,Ag=1013,Li=1014,oi=1015,Ra=1016,Cg=1017,Ng=1018,_r=1020,Qy=1021,kn=1023,Jy=1024,eS=1025,yr=1026,As=1027,tS=1028,Rg=1029,nS=1030,Pg=1031,Lg=1033,yc=33776,Sc=33777,Mc=33778,bc=33779,Fh=35840,Oh=35841,jh=35842,zh=35843,Dg=36196,Bh=37492,Hh=37496,Gh=37808,Vh=37809,Wh=37810,Xh=37811,qh=37812,$h=37813,Yh=37814,Kh=37815,Zh=37816,Qh=37817,Jh=37818,ep=37819,tp=37820,np=37821,wc=36492,ip=36494,rp=36495,iS=36283,sp=36284,ap=36285,op=36286,rS=3200,sS=3201,aS=0,oS=1,Ni="",Wn="srgb",Qi="srgb-linear",sf="display-p3",jl="display-p3-linear",gl="linear",st="srgb",vl="rec709",_l="p3",Lr=7680,lp=519,lS=512,cS=513,uS=514,Ug=515,dS=516,fS=517,hS=518,pS=519,cp=35044,up="300 es",nd=1035,ui=2e3,yl=2001;class Ds{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ec=Math.PI/180,id=180/Math.PI;function Fa(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[t&255]+Ft[t>>8&255]+Ft[t>>16&255]+Ft[t>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[n&63|128]+Ft[n>>8&255]+"-"+Ft[n>>16&255]+Ft[n>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function Qt(t,e,n){return Math.max(e,Math.min(n,t))}function mS(t,e){return(t%e+e)%e}function Tc(t,e,n){return(1-n)*t+n*e}function dp(t){return(t&t-1)===0&&t!==0}function rd(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Ws(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Yt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,n=0){Ye.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class He{constructor(e,n,i,r,s,a,o,c,u){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],f=i[4],h=i[7],p=i[2],x=i[5],y=i[8],_=r[0],m=r[3],d=r[6],v=r[1],g=r[4],S=r[7],A=r[2],b=r[5],E=r[8];return s[0]=a*_+o*v+c*A,s[3]=a*m+o*g+c*b,s[6]=a*d+o*S+c*E,s[1]=u*_+f*v+h*A,s[4]=u*m+f*g+h*b,s[7]=u*d+f*S+h*E,s[2]=p*_+x*v+y*A,s[5]=p*m+x*g+y*b,s[8]=p*d+x*S+y*E,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8];return n*a*f-n*o*u-i*s*f+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=f*a-o*u,p=o*c-f*s,x=u*s-a*c,y=n*h+i*p+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/y;return e[0]=h*_,e[1]=(r*u-f*i)*_,e[2]=(o*i-r*a)*_,e[3]=p*_,e[4]=(f*n-r*c)*_,e[5]=(r*s-o*n)*_,e[6]=x*_,e[7]=(i*c-u*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ac.makeScale(e,n)),this}rotate(e){return this.premultiply(Ac.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ac.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ac=new He;function Ig(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function xS(){const t=Sl("canvas");return t.style.display="block",t}const fp={};function gS(t){t in fp||(fp[t]=!0,console.warn(t))}const hp=new He().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),pp=new He().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oo={[Qi]:{transfer:gl,primaries:vl,toReference:t=>t,fromReference:t=>t},[Wn]:{transfer:st,primaries:vl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[jl]:{transfer:gl,primaries:_l,toReference:t=>t.applyMatrix3(pp),fromReference:t=>t.applyMatrix3(hp)},[sf]:{transfer:st,primaries:_l,toReference:t=>t.convertSRGBToLinear().applyMatrix3(pp),fromReference:t=>t.applyMatrix3(hp).convertLinearToSRGB()}},vS=new Set([Qi,jl]),et={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!vS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=oo[e].toReference,r=oo[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return oo[t].primaries},getTransfer:function(t){return t===Ni?gl:oo[t].transfer}};function gs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Dr;class kg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dr===void 0&&(Dr=Sl("canvas")),Dr.width=e.width,Dr.height=e.height;const i=Dr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Dr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=gs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(gs(n[i]/255)*255):n[i]=gs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _S=0;class Fg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Fa(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Nc(r[a].image)):s.push(Nc(r[a]))}else s=Nc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Nc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yS=0;class sn extends Ds{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=In,r=In,s=Kt,a=xr,o=kn,c=Gi,u=sn.DEFAULT_ANISOTROPY,f=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yS++}),this.uuid=Fa(),this.name="",this.source=new Fg(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Tg;sn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,n=0,i=0,r=1){Pt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],h=c[8],p=c[1],x=c[5],y=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(f-p)<.01&&Math.abs(h-_)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+p)<.1&&Math.abs(h+_)<.1&&Math.abs(y+m)<.1&&Math.abs(u+x+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const g=(u+1)/2,S=(x+1)/2,A=(d+1)/2,b=(f+p)/4,E=(h+_)/4,L=(y+m)/4;return g>S&&g>A?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=b/i,s=E/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=L/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-y)*(m-y)+(h-_)*(h-_)+(p-f)*(p-f));return Math.abs(v)<.001&&(v=1),this.x=(m-y)/v,this.y=(h-_)/v,this.z=(p-f)/v,this.w=Math.acos((u+x+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class SS extends Ds{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Fg(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends SS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Og extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class MS extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3];const p=s[a+0],x=s[a+1],y=s[a+2],_=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=f,e[n+3]=h;return}if(o===1){e[n+0]=p,e[n+1]=x,e[n+2]=y,e[n+3]=_;return}if(h!==_||c!==p||u!==x||f!==y){let m=1-o;const d=c*p+u*x+f*y+h*_,v=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const A=Math.sqrt(g),b=Math.atan2(A,d*v);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A}const S=o*v;if(c=c*m+p*S,u=u*m+x*S,f=f*m+y*S,h=h*m+_*S,m===1-o){const A=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=A,u*=A,f*=A,h*=A}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],f=i[r+3],h=s[a],p=s[a+1],x=s[a+2],y=s[a+3];return e[n]=o*y+f*h+c*x-u*p,e[n+1]=c*y+f*p+u*h-o*x,e[n+2]=u*y+f*x+o*p-c*h,e[n+3]=f*y-o*h-c*p-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),f=o(r/2),h=o(s/2),p=c(i/2),x=c(r/2),y=c(s/2);switch(a){case"XYZ":this._x=p*f*h+u*x*y,this._y=u*x*h-p*f*y,this._z=u*f*y+p*x*h,this._w=u*f*h-p*x*y;break;case"YXZ":this._x=p*f*h+u*x*y,this._y=u*x*h-p*f*y,this._z=u*f*y-p*x*h,this._w=u*f*h+p*x*y;break;case"ZXY":this._x=p*f*h-u*x*y,this._y=u*x*h+p*f*y,this._z=u*f*y+p*x*h,this._w=u*f*h-p*x*y;break;case"ZYX":this._x=p*f*h-u*x*y,this._y=u*x*h+p*f*y,this._z=u*f*y-p*x*h,this._w=u*f*h+p*x*y;break;case"YZX":this._x=p*f*h+u*x*y,this._y=u*x*h+p*f*y,this._z=u*f*y-p*x*h,this._w=u*f*h-p*x*y;break;case"XZY":this._x=p*f*h-u*x*y,this._y=u*x*h-p*f*y,this._z=u*f*y+p*x*h,this._w=u*f*h+p*x*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],f=n[6],h=n[10],p=i+o+h;if(p>0){const x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(f-c)*x,this._y=(s-u)*x,this._z=(a-r)*x}else if(i>o&&i>h){const x=2*Math.sqrt(1+i-o-h);this._w=(f-c)/x,this._x=.25*x,this._y=(r+a)/x,this._z=(s+u)/x}else if(o>h){const x=2*Math.sqrt(1+o-i-h);this._w=(s-u)/x,this._x=(r+a)/x,this._y=.25*x,this._z=(c+f)/x}else{const x=2*Math.sqrt(1+h-i-o);this._w=(a-r)/x,this._x=(s+u)/x,this._y=(c+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+a*o+r*u-s*c,this._y=r*f+a*c+s*o-i*u,this._z=s*f+a*u+i*c-r*o,this._w=a*f-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const x=1-n;return this._w=x*a+n*this._w,this._x=x*i+n*this._x,this._y=x*r+n*this._y,this._z=x*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),f=Math.atan2(u,o),h=Math.sin((1-n)*f)/u,p=Math.sin(n*f)/u;return this._w=a*h+this._w*p,this._x=i*h+this._x*p,this._y=r*h+this._y*p,this._z=s*h+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,n=0,i=0){j.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(mp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(mp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),f=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*u+a*h-o*f,this.y=i+c*f+o*u-s*h,this.z=r+c*h+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rc=new j,mp=new Oa;class ja{constructor(e=new j(1/0,1/0,1/0),n=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),lo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),lo.copy(i.boundingBox)),lo.applyMatrix4(e.matrixWorld),this.union(lo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),co.subVectors(this.max,Xs),Ur.subVectors(e.a,Xs),Ir.subVectors(e.b,Xs),kr.subVectors(e.c,Xs),_i.subVectors(Ir,Ur),yi.subVectors(kr,Ir),tr.subVectors(Ur,kr);let n=[0,-_i.z,_i.y,0,-yi.z,yi.y,0,-tr.z,tr.y,_i.z,0,-_i.x,yi.z,0,-yi.x,tr.z,0,-tr.x,-_i.y,_i.x,0,-yi.y,yi.x,0,-tr.y,tr.x,0];return!Pc(n,Ur,Ir,kr,co)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Ur,Ir,kr,co))?!1:(uo.crossVectors(_i,yi),n=[uo.x,uo.y,uo.z],Pc(n,Ur,Ir,kr,co))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qn=[new j,new j,new j,new j,new j,new j,new j,new j],Nn=new j,lo=new ja,Ur=new j,Ir=new j,kr=new j,_i=new j,yi=new j,tr=new j,Xs=new j,co=new j,uo=new j,nr=new j;function Pc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),u=n.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>o)return!1}return!0}const bS=new ja,qs=new j,Lc=new j;class zl{constructor(e=new j,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Lc)),this.expandByPoint(qs.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jn=new j,Dc=new j,fo=new j,Si=new j,Uc=new j,ho=new j,Ic=new j;class jg{constructor(e=new j,n=new j(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),fo.copy(n).sub(e).normalize(),Si.copy(this.origin).sub(Dc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(fo),o=Si.dot(this.direction),c=-Si.dot(fo),u=Si.lengthSq(),f=Math.abs(1-a*a);let h,p,x,y;if(f>0)if(h=a*c-o,p=a*o-c,y=s*f,h>=0)if(p>=-y)if(p<=y){const _=1/f;h*=_,p*=_,x=h*(h+a*p+2*o)+p*(a*h+p+2*c)+u}else p=s,h=Math.max(0,-(a*p+o)),x=-h*h+p*(p+2*c)+u;else p=-s,h=Math.max(0,-(a*p+o)),x=-h*h+p*(p+2*c)+u;else p<=-y?(h=Math.max(0,-(-a*s+o)),p=h>0?-s:Math.min(Math.max(-s,-c),s),x=-h*h+p*(p+2*c)+u):p<=y?(h=0,p=Math.min(Math.max(-s,-c),s),x=p*(p+2*c)+u):(h=Math.max(0,-(a*s+o)),p=h>0?s:Math.min(Math.max(-s,-c),s),x=-h*h+p*(p+2*c)+u);else p=a>0?-s:s,h=Math.max(0,-(a*p+o)),x=-h*h+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Dc).addScaledVector(fo,p),x}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),f>=0?(s=(e.min.y-p.y)*f,a=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,a=(e.min.y-p.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-p.z)*h,c=(e.max.z-p.z)*h):(o=(e.max.z-p.z)*h,c=(e.min.z-p.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){Uc.subVectors(n,e),ho.subVectors(i,e),Ic.crossVectors(Uc,ho);let a=this.direction.dot(Ic),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Si.subVectors(this.origin,e);const c=o*this.direction.dot(ho.crossVectors(Si,ho));if(c<0)return null;const u=o*this.direction.dot(Uc.cross(Si));if(u<0||c+u>a)return null;const f=-o*Si.dot(Ic);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,a,o,c,u,f,h,p,x,y,_,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,f,h,p,x,y,_,m)}set(e,n,i,r,s,a,o,c,u,f,h,p,x,y,_,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=f,d[10]=h,d[14]=p,d[3]=x,d[7]=y,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Fr.setFromMatrixColumn(e,0).length(),s=1/Fr.setFromMatrixColumn(e,1).length(),a=1/Fr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const p=a*f,x=a*h,y=o*f,_=o*h;n[0]=c*f,n[4]=-c*h,n[8]=u,n[1]=x+y*u,n[5]=p-_*u,n[9]=-o*c,n[2]=_-p*u,n[6]=y+x*u,n[10]=a*c}else if(e.order==="YXZ"){const p=c*f,x=c*h,y=u*f,_=u*h;n[0]=p+_*o,n[4]=y*o-x,n[8]=a*u,n[1]=a*h,n[5]=a*f,n[9]=-o,n[2]=x*o-y,n[6]=_+p*o,n[10]=a*c}else if(e.order==="ZXY"){const p=c*f,x=c*h,y=u*f,_=u*h;n[0]=p-_*o,n[4]=-a*h,n[8]=y+x*o,n[1]=x+y*o,n[5]=a*f,n[9]=_-p*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const p=a*f,x=a*h,y=o*f,_=o*h;n[0]=c*f,n[4]=y*u-x,n[8]=p*u+_,n[1]=c*h,n[5]=_*u+p,n[9]=x*u-y,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const p=a*c,x=a*u,y=o*c,_=o*u;n[0]=c*f,n[4]=_-p*h,n[8]=y*h+x,n[1]=h,n[5]=a*f,n[9]=-o*f,n[2]=-u*f,n[6]=x*h+y,n[10]=p-_*h}else if(e.order==="XZY"){const p=a*c,x=a*u,y=o*c,_=o*u;n[0]=c*f,n[4]=-h,n[8]=u*f,n[1]=p*h+_,n[5]=a*f,n[9]=x*h-y,n[2]=y*h-x,n[6]=o*f,n[10]=_*h+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wS,e,ES)}lookAt(e,n,i){const r=this.elements;return ln.subVectors(e,n),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Mi.crossVectors(i,ln),Mi.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Mi.crossVectors(i,ln)),Mi.normalize(),po.crossVectors(ln,Mi),r[0]=Mi.x,r[4]=po.x,r[8]=ln.x,r[1]=Mi.y,r[5]=po.y,r[9]=ln.y,r[2]=Mi.z,r[6]=po.z,r[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],f=i[1],h=i[5],p=i[9],x=i[13],y=i[2],_=i[6],m=i[10],d=i[14],v=i[3],g=i[7],S=i[11],A=i[15],b=r[0],E=r[4],L=r[8],z=r[12],M=r[1],R=r[5],ee=r[9],Z=r[13],D=r[2],B=r[6],V=r[10],te=r[14],U=r[3],H=r[7],N=r[11],C=r[15];return s[0]=a*b+o*M+c*D+u*U,s[4]=a*E+o*R+c*B+u*H,s[8]=a*L+o*ee+c*V+u*N,s[12]=a*z+o*Z+c*te+u*C,s[1]=f*b+h*M+p*D+x*U,s[5]=f*E+h*R+p*B+x*H,s[9]=f*L+h*ee+p*V+x*N,s[13]=f*z+h*Z+p*te+x*C,s[2]=y*b+_*M+m*D+d*U,s[6]=y*E+_*R+m*B+d*H,s[10]=y*L+_*ee+m*V+d*N,s[14]=y*z+_*Z+m*te+d*C,s[3]=v*b+g*M+S*D+A*U,s[7]=v*E+g*R+S*B+A*H,s[11]=v*L+g*ee+S*V+A*N,s[15]=v*z+g*Z+S*te+A*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],f=e[2],h=e[6],p=e[10],x=e[14],y=e[3],_=e[7],m=e[11],d=e[15];return y*(+s*c*h-r*u*h-s*o*p+i*u*p+r*o*x-i*c*x)+_*(+n*c*x-n*u*p+s*a*p-r*a*x+r*u*f-s*c*f)+m*(+n*u*h-n*o*x-s*a*h+i*a*x+s*o*f-i*u*f)+d*(-r*o*f-n*c*h+n*o*p+r*a*h-i*a*p+i*c*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],f=e[8],h=e[9],p=e[10],x=e[11],y=e[12],_=e[13],m=e[14],d=e[15],v=h*m*u-_*p*u+_*c*x-o*m*x-h*c*d+o*p*d,g=y*p*u-f*m*u-y*c*x+a*m*x+f*c*d-a*p*d,S=f*_*u-y*h*u+y*o*x-a*_*x-f*o*d+a*h*d,A=y*h*c-f*_*c-y*o*p+a*_*p+f*o*m-a*h*m,b=n*v+i*g+r*S+s*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return e[0]=v*E,e[1]=(_*p*s-h*m*s-_*r*x+i*m*x+h*r*d-i*p*d)*E,e[2]=(o*m*s-_*c*s+_*r*u-i*m*u-o*r*d+i*c*d)*E,e[3]=(h*c*s-o*p*s-h*r*u+i*p*u+o*r*x-i*c*x)*E,e[4]=g*E,e[5]=(f*m*s-y*p*s+y*r*x-n*m*x-f*r*d+n*p*d)*E,e[6]=(y*c*s-a*m*s-y*r*u+n*m*u+a*r*d-n*c*d)*E,e[7]=(a*p*s-f*c*s+f*r*u-n*p*u-a*r*x+n*c*x)*E,e[8]=S*E,e[9]=(y*h*s-f*_*s-y*i*x+n*_*x+f*i*d-n*h*d)*E,e[10]=(a*_*s-y*o*s+y*i*u-n*_*u-a*i*d+n*o*d)*E,e[11]=(f*o*s-a*h*s-f*i*u+n*h*u+a*i*x-n*o*x)*E,e[12]=A*E,e[13]=(f*_*r-y*h*r+y*i*p-n*_*p-f*i*m+n*h*m)*E,e[14]=(y*o*r-a*_*r-y*i*c+n*_*c+a*i*m-n*o*m)*E,e[15]=(a*h*r-f*o*r+f*i*c-n*h*c-a*i*p+n*o*p)*E,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,f=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,f*o+i,f*c-r*a,0,u*c-r*o,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,f=a+a,h=o+o,p=s*u,x=s*f,y=s*h,_=a*f,m=a*h,d=o*h,v=c*u,g=c*f,S=c*h,A=i.x,b=i.y,E=i.z;return r[0]=(1-(_+d))*A,r[1]=(x+S)*A,r[2]=(y-g)*A,r[3]=0,r[4]=(x-S)*b,r[5]=(1-(p+d))*b,r[6]=(m+v)*b,r[7]=0,r[8]=(y+g)*E,r[9]=(m-v)*E,r[10]=(1-(p+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Fr.set(r[0],r[1],r[2]).length();const a=Fr.set(r[4],r[5],r[6]).length(),o=Fr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Rn.copy(this);const u=1/s,f=1/a,h=1/o;return Rn.elements[0]*=u,Rn.elements[1]*=u,Rn.elements[2]*=u,Rn.elements[4]*=f,Rn.elements[5]*=f,Rn.elements[6]*=f,Rn.elements[8]*=h,Rn.elements[9]*=h,Rn.elements[10]*=h,n.setFromRotationMatrix(Rn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=ui){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let x,y;if(o===ui)x=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===yl)x=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=ui){const c=this.elements,u=1/(n-e),f=1/(i-r),h=1/(a-s),p=(n+e)*u,x=(i+r)*f;let y,_;if(o===ui)y=(a+s)*h,_=-2*h;else if(o===yl)y=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*f,c[9]=0,c[13]=-x,c[2]=0,c[6]=0,c[10]=_,c[14]=-y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Fr=new j,Rn=new yt,wS=new j(0,0,0),ES=new j(1,1,1),Mi=new j,po=new j,ln=new j,xp=new yt,gp=new Oa;class xi{constructor(e=0,n=0,i=0,r=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],f=r[9],h=r[2],p=r[6],x=r[10];switch(n){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-h,x),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Qt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,x));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return xp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gp.setFromEuler(this),this.setFromQuaternion(gp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class zg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let TS=0;const vp=new j,Or=new Oa,ei=new yt,mo=new j,$s=new j,AS=new j,CS=new Oa,_p=new j(1,0,0),yp=new j(0,1,0),Sp=new j(0,0,1),NS={type:"added"},RS={type:"removed"},kc={type:"childadded",child:null},Fc={type:"childremoved",child:null};class an extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Fa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new j,n=new xi,i=new Oa,r=new j(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new He}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(_p,e)}rotateY(e){return this.rotateOnAxis(yp,e)}rotateZ(e){return this.rotateOnAxis(Sp,e)}translateOnAxis(e,n){return vp.copy(e).applyQuaternion(this.quaternion),this.position.add(vp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(_p,e)}translateY(e){return this.translateOnAxis(yp,e)}translateZ(e){return this.translateOnAxis(Sp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt($s,mo,this.up):ei.lookAt(mo,$s,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ei),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(NS),kc.child=e,this.dispatchEvent(kc),kc.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(RS),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,AS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,CS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),h=a(e.shapes),p=a(e.skeletons),x=a(e.animations),y=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),p.length>0&&(i.skeletons=p),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=r,i;function a(o){const c=[];for(const u in o){const f=o[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new j(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Pn=new j,ti=new j,Oc=new j,ni=new j,jr=new j,zr=new j,Mp=new j,jc=new j,zc=new j,Bc=new j;class $n{constructor(e=new j,n=new j,i=new j){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Pn.subVectors(e,n),r.cross(Pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Pn.subVectors(r,n),ti.subVectors(i,n),Oc.subVectors(e,n);const a=Pn.dot(Pn),o=Pn.dot(ti),c=Pn.dot(Oc),u=ti.dot(ti),f=ti.dot(Oc),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const p=1/h,x=(u*c-o*f)*p,y=(a*f-o*c)*p;return s.set(1-x-y,y,x)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static isFrontFacing(e,n,i,r){return Pn.subVectors(i,n),ti.subVectors(e,n),Pn.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pn.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),Pn.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return $n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return $n.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return $n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return $n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return $n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),zr.subVectors(s,i),jc.subVectors(e,i);const c=jr.dot(jc),u=zr.dot(jc);if(c<=0&&u<=0)return n.copy(i);zc.subVectors(e,r);const f=jr.dot(zc),h=zr.dot(zc);if(f>=0&&h<=f)return n.copy(r);const p=c*h-f*u;if(p<=0&&c>=0&&f<=0)return a=c/(c-f),n.copy(i).addScaledVector(jr,a);Bc.subVectors(e,s);const x=jr.dot(Bc),y=zr.dot(Bc);if(y>=0&&x<=y)return n.copy(s);const _=x*u-c*y;if(_<=0&&u>=0&&y<=0)return o=u/(u-y),n.copy(i).addScaledVector(zr,o);const m=f*y-x*h;if(m<=0&&h-f>=0&&x-y>=0)return Mp.subVectors(s,r),o=(h-f)/(h-f+(x-y)),n.copy(r).addScaledVector(Mp,o);const d=1/(m+_+p);return a=_*d,o=p*d,n.copy(i).addScaledVector(jr,a).addScaledVector(zr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},xo={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=mS(e,1),n=Qt(n,0,1),i=Qt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hc(a,s,e+1/3),this.g=Hc(a,s,e),this.b=Hc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=Bg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gs(e.r),this.g=gs(e.g),this.b=gs(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return et.fromWorkingColorSpace(Ot.copy(this),e),Math.round(Qt(Ot.r*255,0,255))*65536+Math.round(Qt(Ot.g*255,0,255))*256+Math.round(Qt(Ot.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(Ot.copy(this),n);const i=Ot.r,r=Ot.g,s=Ot.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const f=(o+a)/2;if(o===a)c=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(Ot.copy(this),n),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Wn){et.fromWorkingColorSpace(Ot.copy(this),e);const n=Ot.r,i=Ot.g,r=Ot.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(xo);const i=Tc(bi.h,xo.h,n),r=Tc(bi.s,xo.s,n),s=Tc(bi.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Qe;Qe.NAMES=Bg;let PS=0;class za extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:PS++}),this.uuid=Fa(),this.name="",this.type="Material",this.blending=xs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=xl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lr,this.stencilZFail=Lr,this.stencilZPass=Lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(i.blending=this.blending),this.side!==qi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==xl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Lr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Lr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Lr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ua extends za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Eg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vt=new j,go=new Ye;class jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=cp,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return gS("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)go.fromBufferAttribute(this,n),go.applyMatrix3(e),this.setXY(n,go.x,go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix3(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyMatrix4(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.applyNormalMatrix(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vt.fromBufferAttribute(this,n),vt.transformDirection(e),this.setXYZ(n,vt.x,vt.y,vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ws(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Yt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ws(n,this.array)),n}setX(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ws(n,this.array)),n}setY(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ws(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ws(n,this.array)),n}setW(e,n){return this.normalized&&(n=Yt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Yt(n,this.array),i=Yt(i,this.array),r=Yt(r,this.array),s=Yt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cp&&(e.usage=this.usage),e}}class Hg extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Gg extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class zt extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let LS=0;const _n=new yt,Gc=new an,Br=new j,cn=new ja,Ys=new ja,Tt=new j;class An extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=Fa(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ig(e)?Gg:Hg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _n.makeRotationFromQuaternion(e),this.applyMatrix4(_n),this}rotateX(e){return _n.makeRotationX(e),this.applyMatrix4(_n),this}rotateY(e){return _n.makeRotationY(e),this.applyMatrix4(_n),this}rotateZ(e){return _n.makeRotationZ(e),this.applyMatrix4(_n),this}translate(e,n,i){return _n.makeTranslation(e,n,i),this.applyMatrix4(_n),this}scale(e,n,i){return _n.makeScale(e,n,i),this.applyMatrix4(_n),this}lookAt(e){return Gc.lookAt(e),Gc.updateMatrix(),this.applyMatrix4(Gc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new zt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(cn.min,Ys.min),cn.expandByPoint(Tt),Tt.addVectors(cn.max,Ys.max),cn.expandByPoint(Tt)):(cn.expandByPoint(Ys.min),cn.expandByPoint(Ys.max))}cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Tt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Tt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)Tt.fromBufferAttribute(o,u),c&&(Br.fromBufferAttribute(e,u),Tt.add(Br)),r=Math.max(r,i.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new j,c[L]=new j;const u=new j,f=new j,h=new j,p=new Ye,x=new Ye,y=new Ye,_=new j,m=new j;function d(L,z,M){u.fromBufferAttribute(i,L),f.fromBufferAttribute(i,z),h.fromBufferAttribute(i,M),p.fromBufferAttribute(s,L),x.fromBufferAttribute(s,z),y.fromBufferAttribute(s,M),f.sub(u),h.sub(u),x.sub(p),y.sub(p);const R=1/(x.x*y.y-y.x*x.y);isFinite(R)&&(_.copy(f).multiplyScalar(y.y).addScaledVector(h,-x.y).multiplyScalar(R),m.copy(h).multiplyScalar(x.x).addScaledVector(f,-y.x).multiplyScalar(R),o[L].add(_),o[z].add(_),o[M].add(_),c[L].add(m),c[z].add(m),c[M].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,z=v.length;L<z;++L){const M=v[L],R=M.start,ee=M.count;for(let Z=R,D=R+ee;Z<D;Z+=3)d(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const g=new j,S=new j,A=new j,b=new j;function E(L){A.fromBufferAttribute(r,L),b.copy(A);const z=o[L];g.copy(z),g.sub(A.multiplyScalar(A.dot(z))).normalize(),S.crossVectors(b,z);const R=S.dot(c[L])<0?-1:1;a.setXYZW(L,g.x,g.y,g.z,R)}for(let L=0,z=v.length;L<z;++L){const M=v[L],R=M.start,ee=M.count;for(let Z=R,D=R+ee;Z<D;Z+=3)E(e.getX(Z+0)),E(e.getX(Z+1)),E(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,x=i.count;p<x;p++)i.setXYZ(p,0,0,0);const r=new j,s=new j,a=new j,o=new j,c=new j,u=new j,f=new j,h=new j;if(e)for(let p=0,x=e.count;p<x;p+=3){const y=e.getX(p+0),_=e.getX(p+1),m=e.getX(p+2);r.fromBufferAttribute(n,y),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(i,y),c.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),o.add(f),c.add(f),u.add(f),i.setXYZ(y,o.x,o.y,o.z),i.setXYZ(_,c.x,c.y,c.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let p=0,x=n.count;p<x;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Tt.fromBufferAttribute(e,n),Tt.normalize(),e.setXYZ(n,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,c){const u=o.array,f=o.itemSize,h=o.normalized,p=new u.constructor(c.length*f);let x=0,y=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?x=c[_]*o.data.stride+o.offset:x=c[_]*f;for(let d=0;d<f;d++)p[y++]=u[x++]}return new jn(p,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new An,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const p=u[f],x=e(p,i);c.push(x)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,p=u.length;h<p;h++){const x=u[h];f.push(x.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let p=0,x=h.length;p<x;p++)f.push(h[p].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bp=new yt,ir=new jg,vo=new zl,wp=new j,Hr=new j,Gr=new j,Vr=new j,Vc=new j,_o=new j,yo=new Ye,So=new Ye,Mo=new Ye,Ep=new j,Tp=new j,Ap=new j,bo=new j,wo=new j;class fn extends an{constructor(e=new An,n=new ua){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){_o.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=o[c],h=s[c];f!==0&&(Vc.fromBufferAttribute(h,e),a?_o.addScaledVector(Vc,f):_o.addScaledVector(Vc.sub(n),f))}n.add(_o)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vo.copy(i.boundingSphere),vo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(vo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(vo,wp)===null||ir.origin.distanceToSquared(wp)>(e.far-e.near)**2))&&(bp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(bp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,p=s.groups,x=s.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=a[m.materialIndex],v=Math.max(m.start,x.start),g=Math.min(o.count,Math.min(m.start+m.count,x.start+x.count));for(let S=v,A=g;S<A;S+=3){const b=o.getX(S),E=o.getX(S+1),L=o.getX(S+2);r=Eo(this,d,e,i,u,f,h,b,E,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,x.start),_=Math.min(o.count,x.start+x.count);for(let m=y,d=_;m<d;m+=3){const v=o.getX(m),g=o.getX(m+1),S=o.getX(m+2);r=Eo(this,a,e,i,u,f,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,_=p.length;y<_;y++){const m=p[y],d=a[m.materialIndex],v=Math.max(m.start,x.start),g=Math.min(c.count,Math.min(m.start+m.count,x.start+x.count));for(let S=v,A=g;S<A;S+=3){const b=S,E=S+1,L=S+2;r=Eo(this,d,e,i,u,f,h,b,E,L),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const y=Math.max(0,x.start),_=Math.min(c.count,x.start+x.count);for(let m=y,d=_;m<d;m+=3){const v=m,g=m+1,S=m+2;r=Eo(this,a,e,i,u,f,h,v,g,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function DS(t,e,n,i,r,s,a,o){let c;if(e.side===rn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===qi,o),c===null)return null;wo.copy(o),wo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(wo);return u<n.near||u>n.far?null:{distance:u,point:wo.clone(),object:t}}function Eo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Hr),t.getVertexPosition(c,Gr),t.getVertexPosition(u,Vr);const f=DS(t,e,n,i,Hr,Gr,Vr,bo);if(f){r&&(yo.fromBufferAttribute(r,o),So.fromBufferAttribute(r,c),Mo.fromBufferAttribute(r,u),f.uv=$n.getInterpolation(bo,Hr,Gr,Vr,yo,So,Mo,new Ye)),s&&(yo.fromBufferAttribute(s,o),So.fromBufferAttribute(s,c),Mo.fromBufferAttribute(s,u),f.uv1=$n.getInterpolation(bo,Hr,Gr,Vr,yo,So,Mo,new Ye)),a&&(Ep.fromBufferAttribute(a,o),Tp.fromBufferAttribute(a,c),Ap.fromBufferAttribute(a,u),f.normal=$n.getInterpolation(bo,Hr,Gr,Vr,Ep,Tp,Ap,new j),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:u,normal:new j,materialIndex:0};$n.getNormal(Hr,Gr,Vr,h.normal),f.face=h}return f}class Ba extends An{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],h=[];let p=0,x=0;y("z","y","x",-1,-1,i,n,e,a,s,0),y("z","y","x",1,-1,i,n,-e,a,s,1),y("x","z","y",1,1,e,i,n,r,a,2),y("x","z","y",1,-1,e,i,-n,r,a,3),y("x","y","z",1,-1,e,n,i,r,s,4),y("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new zt(u,3)),this.setAttribute("normal",new zt(f,3)),this.setAttribute("uv",new zt(h,2));function y(_,m,d,v,g,S,A,b,E,L,z){const M=S/E,R=A/L,ee=S/2,Z=A/2,D=b/2,B=E+1,V=L+1;let te=0,U=0;const H=new j;for(let N=0;N<V;N++){const C=N*R-Z;for(let Y=0;Y<B;Y++){const se=Y*M-ee;H[_]=se*v,H[m]=C*g,H[d]=D,u.push(H.x,H.y,H.z),H[_]=0,H[m]=0,H[d]=b>0?1:-1,f.push(H.x,H.y,H.z),h.push(Y/E),h.push(1-N/L),te+=1}}for(let N=0;N<L;N++)for(let C=0;C<E;C++){const Y=p+C+B*N,se=p+C+B*(N+1),F=p+(C+1)+B*(N+1),$=p+(C+1)+B*N;c.push(Y,se,$),c.push(se,F,$),U+=6}o.addGroup(x,U,z),x+=U,p+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ba(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Cs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Cs(t[n]);for(const r in i)e[r]=i[r]}return e}function US(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vg(t){return t.getRenderTarget()===null?t.outputColorSpace:et.workingColorSpace}const IS={clone:Cs,merge:Gt};var kS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kS,this.fragmentShader=FS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cs(e.uniforms),this.uniformsGroups=US(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wg extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=ui}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wi=new j,Cp=new Ye,Np=new Ye;class Mn extends Wg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=id*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return id*2*Math.atan(Math.tan(Ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,Cp,Np),n.subVectors(Np,Cp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ec*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Wr=-90,Xr=1;class OS extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Mn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new Mn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new Mn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new Mn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const c=new Mn(Wr,Xr,e,n);c.layers=this.layers,this.add(c);const u=new Mn(Wr,Xr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===ui)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,f]=this.children,h=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,p,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class Xg extends sn{constructor(e,n,i,r,s,a,o,c,u,f){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,a,o,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jS extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Xg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ba(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Cs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:rn,blending:Bi});s.uniforms.tEquirect.value=n;const a=new fn(r,s),o=n.minFilter;return n.minFilter===xr&&(n.minFilter=Kt),new OS(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Wc=new j,zS=new j,BS=new He;class cr{constructor(e=new j(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Wc.subVectors(i,n).cross(zS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Wc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||BS.getNormalMatrix(e),r=this.coplanarPoint(Wc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new zl,To=new j;class qg{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ui){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],f=r[5],h=r[6],p=r[7],x=r[8],y=r[9],_=r[10],m=r[11],d=r[12],v=r[13],g=r[14],S=r[15];if(i[0].setComponents(c-s,p-u,m-x,S-d).normalize(),i[1].setComponents(c+s,p+u,m+x,S+d).normalize(),i[2].setComponents(c+a,p+f,m+y,S+v).normalize(),i[3].setComponents(c-a,p-f,m-y,S-v).normalize(),i[4].setComponents(c-o,p-h,m-_,S-g).normalize(),n===ui)i[5].setComponents(c+o,p+h,m+_,S+g).normalize();else if(n===yl)i[5].setComponents(o,h,_,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(To.x=r.normal.x>0?e.max.x:e.min.x,To.y=r.normal.y>0?e.max.y:e.min.y,To.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(To)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $g(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function HS(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,f){const h=u.array,p=u.usage,x=h.byteLength,y=t.createBuffer();t.bindBuffer(f,y),t.bufferData(f,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=t.FLOAT;else if(h instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)_=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=t.SHORT;else if(h instanceof Uint32Array)_=t.UNSIGNED_INT;else if(h instanceof Int32Array)_=t.INT;else if(h instanceof Int8Array)_=t.BYTE;else if(h instanceof Uint8Array)_=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:y,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:x}}function s(u,f,h){const p=f.array,x=f._updateRange,y=f.updateRanges;if(t.bindBuffer(h,u),x.count===-1&&y.length===0&&t.bufferSubData(h,0,p),y.length!==0){for(let _=0,m=y.length;_<m;_++){const d=y[_];n?t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p,d.start,d.count):t.bufferSubData(h,d.start*p.BYTES_PER_ELEMENT,p.subarray(d.start,d.start+d.count))}f.clearUpdateRanges()}x.count!==-1&&(n?t.bufferSubData(h,x.offset*p.BYTES_PER_ELEMENT,p,x.offset,x.count):t.bufferSubData(h,x.offset*p.BYTES_PER_ELEMENT,p.subarray(x.offset,x.offset+x.count)),x.count=-1),f.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);f&&(t.deleteBuffer(f.buffer),i.delete(u))}function c(u,f){if(u.isGLBufferAttribute){const p=i.get(u);(!p||p.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const h=i.get(u);if(h===void 0)i.set(u,r(u,f));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,u,f),h.version=u.version}}return{get:a,remove:o,update:c}}class Bl extends An{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,f=c+1,h=e/o,p=n/c,x=[],y=[],_=[],m=[];for(let d=0;d<f;d++){const v=d*p-a;for(let g=0;g<u;g++){const S=g*h-s;y.push(S,-v,0),_.push(0,0,1),m.push(g/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const g=v+u*d,S=v+u*(d+1),A=v+1+u*(d+1),b=v+1+u*d;x.push(g,S,b),x.push(S,A,b)}this.setIndex(x),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bl(e.width,e.height,e.widthSegments,e.heightSegments)}}var GS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,VS=`#ifdef USE_ALPHAHASH
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
#endif`,WS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,XS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$S=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,YS=`#ifdef USE_AOMAP
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
#endif`,KS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ZS=`#ifdef USE_BATCHING
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
#endif`,QS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,JS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,eM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,nM=`#ifdef USE_IRIDESCENCE
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
#endif`,iM=`#ifdef USE_BUMPMAP
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,lM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,dM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fM=`#define PI 3.141592653589793
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
} // validated`,hM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pM=`vec3 transformedNormal = objectNormal;
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
#endif`,mM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_M="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`
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
}`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,TM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,CM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,RM=`#ifdef USE_GRADIENTMAP
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
}`,PM=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,DM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,UM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,IM=`uniform bool receiveShadow;
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
#endif`,kM=`#ifdef USE_ENVMAP
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
#endif`,FM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,OM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BM=`PhysicalMaterial material;
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
#endif`,HM=`struct PhysicalMaterial {
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
}`,GM=`
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
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
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qM=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,YM=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,KM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,JM=`#if defined( USE_POINTS_UV )
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
#endif`,e1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,n1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,i1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,r1=`#ifdef USE_MORPHNORMALS
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
#endif`,s1=`#ifdef USE_MORPHTARGETS
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
#endif`,a1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,l1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,f1=`#ifdef USE_NORMALMAP
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
#endif`,h1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,p1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,m1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,v1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,S1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,M1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,b1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,E1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,C1=`float getShadowMask() {
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
}`,N1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,D1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,U1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,I1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,k1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,F1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,H1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,q1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,Z1=`#define DISTANCE
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
}`,Q1=`#define DISTANCE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
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
}`,nb=`uniform vec3 diffuse;
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
}`,ib=`#include <common>
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
}`,rb=`uniform vec3 diffuse;
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
}`,sb=`#define LAMBERT
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
}`,ab=`#define LAMBERT
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
}`,ob=`#define MATCAP
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
}`,lb=`#define MATCAP
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
}`,cb=`#define NORMAL
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
}`,ub=`#define NORMAL
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
}`,db=`#define PHONG
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
}`,fb=`#define PHONG
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
}`,hb=`#define STANDARD
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
}`,pb=`#define STANDARD
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
}`,mb=`#define TOON
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
}`,xb=`#define TOON
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
}`,gb=`uniform float size;
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
}`,vb=`uniform vec3 diffuse;
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
}`,_b=`#include <common>
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
}`,yb=`uniform vec3 color;
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
}`,Sb=`uniform float rotation;
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
}`,Mb=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:GS,alphahash_pars_fragment:VS,alphamap_fragment:WS,alphamap_pars_fragment:XS,alphatest_fragment:qS,alphatest_pars_fragment:$S,aomap_fragment:YS,aomap_pars_fragment:KS,batching_pars_vertex:ZS,batching_vertex:QS,begin_vertex:JS,beginnormal_vertex:eM,bsdfs:tM,iridescence_fragment:nM,bumpmap_pars_fragment:iM,clipping_planes_fragment:rM,clipping_planes_pars_fragment:sM,clipping_planes_pars_vertex:aM,clipping_planes_vertex:oM,color_fragment:lM,color_pars_fragment:cM,color_pars_vertex:uM,color_vertex:dM,common:fM,cube_uv_reflection_fragment:hM,defaultnormal_vertex:pM,displacementmap_pars_vertex:mM,displacementmap_vertex:xM,emissivemap_fragment:gM,emissivemap_pars_fragment:vM,colorspace_fragment:_M,colorspace_pars_fragment:yM,envmap_fragment:SM,envmap_common_pars_fragment:MM,envmap_pars_fragment:bM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:kM,envmap_vertex:EM,fog_vertex:TM,fog_pars_vertex:AM,fog_fragment:CM,fog_pars_fragment:NM,gradientmap_pars_fragment:RM,lightmap_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:DM,lights_lambert_pars_fragment:UM,lights_pars_begin:IM,lights_toon_fragment:FM,lights_toon_pars_fragment:OM,lights_phong_fragment:jM,lights_phong_pars_fragment:zM,lights_physical_fragment:BM,lights_physical_pars_fragment:HM,lights_fragment_begin:GM,lights_fragment_maps:VM,lights_fragment_end:WM,logdepthbuf_fragment:XM,logdepthbuf_pars_fragment:qM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:YM,map_fragment:KM,map_pars_fragment:ZM,map_particle_fragment:QM,map_particle_pars_fragment:JM,metalnessmap_fragment:e1,metalnessmap_pars_fragment:t1,morphinstance_vertex:n1,morphcolor_vertex:i1,morphnormal_vertex:r1,morphtarget_pars_vertex:s1,morphtarget_vertex:a1,normal_fragment_begin:o1,normal_fragment_maps:l1,normal_pars_fragment:c1,normal_pars_vertex:u1,normal_vertex:d1,normalmap_pars_fragment:f1,clearcoat_normal_fragment_begin:h1,clearcoat_normal_fragment_maps:p1,clearcoat_pars_fragment:m1,iridescence_pars_fragment:x1,opaque_fragment:g1,packing:v1,premultiplied_alpha_fragment:_1,project_vertex:y1,dithering_fragment:S1,dithering_pars_fragment:M1,roughnessmap_fragment:b1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:E1,shadowmap_pars_vertex:T1,shadowmap_vertex:A1,shadowmask_pars_fragment:C1,skinbase_vertex:N1,skinning_pars_vertex:R1,skinning_vertex:P1,skinnormal_vertex:L1,specularmap_fragment:D1,specularmap_pars_fragment:U1,tonemapping_fragment:I1,tonemapping_pars_fragment:k1,transmission_fragment:F1,transmission_pars_fragment:O1,uv_pars_fragment:j1,uv_pars_vertex:z1,uv_vertex:B1,worldpos_vertex:H1,background_vert:G1,background_frag:V1,backgroundCube_vert:W1,backgroundCube_frag:X1,cube_vert:q1,cube_frag:$1,depth_vert:Y1,depth_frag:K1,distanceRGBA_vert:Z1,distanceRGBA_frag:Q1,equirect_vert:J1,equirect_frag:eb,linedashed_vert:tb,linedashed_frag:nb,meshbasic_vert:ib,meshbasic_frag:rb,meshlambert_vert:sb,meshlambert_frag:ab,meshmatcap_vert:ob,meshmatcap_frag:lb,meshnormal_vert:cb,meshnormal_frag:ub,meshphong_vert:db,meshphong_frag:fb,meshphysical_vert:hb,meshphysical_frag:pb,meshtoon_vert:mb,meshtoon_frag:xb,points_vert:gb,points_frag:vb,shadow_vert:_b,shadow_frag:yb,sprite_vert:Sb,sprite_frag:Mb},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Xn={basic:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Gt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Gt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Gt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Gt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Gt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Gt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Gt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Gt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distanceRGBA:{uniforms:Gt([he.common,he.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distanceRGBA_vert,fragmentShader:Be.distanceRGBA_frag},shadow:{uniforms:Gt([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Xn.physical={uniforms:Gt([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ao={r:0,b:0,g:0},sr=new xi,bb=new yt;function wb(t,e,n,i,r,s,a){const o=new Qe(0);let c=s===!0?0:1,u,f,h=null,p=0,x=null;function y(m,d){let v=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?n:e).get(g)),g===null?_(o,c):g&&g.isColor&&(_(g,1),v=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Ol)?(f===void 0&&(f=new fn(new Ba(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Cs(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),sr.copy(d.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),f.material.uniforms.envMap.value=g,f.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(bb.makeRotationFromEuler(sr)),f.material.toneMapped=et.getTransfer(g.colorSpace)!==st,(h!==g||p!==g.version||x!==t.toneMapping)&&(f.material.needsUpdate=!0,h=g,p=g.version,x=t.toneMapping),f.layers.enableAll(),m.unshift(f,f.geometry,f.material,0,0,null)):g&&g.isTexture&&(u===void 0&&(u=new fn(new Bl(2,2),new $i({name:"BackgroundMaterial",uniforms:Cs(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=g,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=et.getTransfer(g.colorSpace)!==st,g.matrixAutoUpdate===!0&&g.updateMatrix(),u.material.uniforms.uvTransform.value.copy(g.matrix),(h!==g||p!==g.version||x!==t.toneMapping)&&(u.material.needsUpdate=!0,h=g,p=g.version,x=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,d){m.getRGB(Ao,Vg(t)),i.buffers.color.setClear(Ao.r,Ao.g,Ao.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),c=d,_(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(o,c)},render:y}}function Eb(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},c=m(null);let u=c,f=!1;function h(D,B,V,te,U){let H=!1;if(a){const N=_(te,V,B);u!==N&&(u=N,x(u.object)),H=d(D,te,V,U),H&&v(D,te,V,U)}else{const N=B.wireframe===!0;(u.geometry!==te.id||u.program!==V.id||u.wireframe!==N)&&(u.geometry=te.id,u.program=V.id,u.wireframe=N,H=!0)}U!==null&&n.update(U,t.ELEMENT_ARRAY_BUFFER),(H||f)&&(f=!1,L(D,B,V,te),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(U).buffer))}function p(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function x(D){return i.isWebGL2?t.bindVertexArray(D):s.bindVertexArrayOES(D)}function y(D){return i.isWebGL2?t.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function _(D,B,V){const te=V.wireframe===!0;let U=o[D.id];U===void 0&&(U={},o[D.id]=U);let H=U[B.id];H===void 0&&(H={},U[B.id]=H);let N=H[te];return N===void 0&&(N=m(p()),H[te]=N),N}function m(D){const B=[],V=[],te=[];for(let U=0;U<r;U++)B[U]=0,V[U]=0,te[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:te,object:D,attributes:{},index:null}}function d(D,B,V,te){const U=u.attributes,H=B.attributes;let N=0;const C=V.getAttributes();for(const Y in C)if(C[Y].location>=0){const F=U[Y];let $=H[Y];if($===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),F===void 0||F.attribute!==$||$&&F.data!==$.data)return!0;N++}return u.attributesNum!==N||u.index!==te}function v(D,B,V,te){const U={},H=B.attributes;let N=0;const C=V.getAttributes();for(const Y in C)if(C[Y].location>=0){let F=H[Y];F===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(F=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(F=D.instanceColor));const $={};$.attribute=F,F&&F.data&&($.data=F.data),U[Y]=$,N++}u.attributes=U,u.attributesNum=N,u.index=te}function g(){const D=u.newAttributes;for(let B=0,V=D.length;B<V;B++)D[B]=0}function S(D){A(D,0)}function A(D,B){const V=u.newAttributes,te=u.enabledAttributes,U=u.attributeDivisors;V[D]=1,te[D]===0&&(t.enableVertexAttribArray(D),te[D]=1),U[D]!==B&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,B),U[D]=B)}function b(){const D=u.newAttributes,B=u.enabledAttributes;for(let V=0,te=B.length;V<te;V++)B[V]!==D[V]&&(t.disableVertexAttribArray(V),B[V]=0)}function E(D,B,V,te,U,H,N){N===!0?t.vertexAttribIPointer(D,B,V,U,H):t.vertexAttribPointer(D,B,V,te,U,H)}function L(D,B,V,te){if(i.isWebGL2===!1&&(D.isInstancedMesh||te.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=te.attributes,H=V.getAttributes(),N=B.defaultAttributeValues;for(const C in H){const Y=H[C];if(Y.location>=0){let se=U[C];if(se===void 0&&(C==="instanceMatrix"&&D.instanceMatrix&&(se=D.instanceMatrix),C==="instanceColor"&&D.instanceColor&&(se=D.instanceColor)),se!==void 0){const F=se.normalized,$=se.itemSize,J=n.get(se);if(J===void 0)continue;const ie=J.buffer,oe=J.type,le=J.bytesPerElement,Te=i.isWebGL2===!0&&(oe===t.INT||oe===t.UNSIGNED_INT||se.gpuType===Ag);if(se.isInterleavedBufferAttribute){const ge=se.data,k=ge.stride,qe=se.offset;if(ge.isInstancedInterleavedBuffer){for(let ue=0;ue<Y.locationSize;ue++)A(Y.location+ue,ge.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let ue=0;ue<Y.locationSize;ue++)S(Y.location+ue);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let ue=0;ue<Y.locationSize;ue++)E(Y.location+ue,$/Y.locationSize,oe,F,k*le,(qe+$/Y.locationSize*ue)*le,Te)}else{if(se.isInstancedBufferAttribute){for(let ge=0;ge<Y.locationSize;ge++)A(Y.location+ge,se.meshPerAttribute);D.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ge=0;ge<Y.locationSize;ge++)S(Y.location+ge);t.bindBuffer(t.ARRAY_BUFFER,ie);for(let ge=0;ge<Y.locationSize;ge++)E(Y.location+ge,$/Y.locationSize,oe,F,$*le,$/Y.locationSize*ge*le,Te)}}else if(N!==void 0){const F=N[C];if(F!==void 0)switch(F.length){case 2:t.vertexAttrib2fv(Y.location,F);break;case 3:t.vertexAttrib3fv(Y.location,F);break;case 4:t.vertexAttrib4fv(Y.location,F);break;default:t.vertexAttrib1fv(Y.location,F)}}}}b()}function z(){ee();for(const D in o){const B=o[D];for(const V in B){const te=B[V];for(const U in te)y(te[U].object),delete te[U];delete B[V]}delete o[D]}}function M(D){if(o[D.id]===void 0)return;const B=o[D.id];for(const V in B){const te=B[V];for(const U in te)y(te[U].object),delete te[U];delete B[V]}delete o[D.id]}function R(D){for(const B in o){const V=o[B];if(V[D.id]===void 0)continue;const te=V[D.id];for(const U in te)y(te[U].object),delete te[U];delete V[D.id]}}function ee(){Z(),f=!0,u!==c&&(u=c,x(u.object))}function Z(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:Z,dispose:z,releaseStatesOfGeometry:M,releaseStatesOfProgram:R,initAttributes:g,enableAttribute:S,disableUnusedAttributes:b}}function Tb(t,e,n,i){const r=i.isWebGL2;let s;function a(f){s=f}function o(f,h){t.drawArrays(s,f,h),n.update(h,s,1)}function c(f,h,p){if(p===0)return;let x,y;if(r)x=t,y="drawArraysInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawArraysInstancedANGLE",x===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,f,h,p),n.update(h,s,p)}function u(f,h,p){if(p===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<p;y++)this.render(f[y],h[y]);else{x.multiDrawArraysWEBGL(s,f,0,h,0,p);let y=0;for(let _=0;_<p;_++)y+=h[_];n.update(y,s,1)}}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Ab(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const c=s(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=a||e.has("WEBGL_draw_buffers"),f=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),_=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),d=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),g=p>0,S=a||e.has("OES_texture_float"),A=g&&S,b=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:S,floatVertexTextures:A,maxSamples:b}}function Cb(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,p){const x=h.length!==0||p||i!==0||r;return r=p,i=h.length,x},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,p){n=f(h,p,0)},this.setState=function(h,p,x){const y=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,d=t.get(h);if(!r||y===null||y.length===0||s&&!m)s?f(null):u();else{const v=s?0:i,g=v*4;let S=d.clippingState||null;c.value=S,S=f(y,p,g,x);for(let A=0;A!==g;++A)S[A]=n[A];d.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,p,x,y){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=c.value,y!==!0||m===null){const d=x+_*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let g=0,S=x;g!==_;++g,S+=4)a.copy(h[g]).applyMatrix4(v,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Nb(t){let e=new WeakMap;function n(a,o){return o===Qu?a.mapping=Es:o===Ju&&(a.mapping=Ts),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Qu||o===Ju)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new jS(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Rb extends Wg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const as=4,Rp=[.125,.215,.35,.446,.526,.582],fr=20,Xc=new Rb,Pp=new Qe;let qc=null,$c=0,Yc=0;const ur=(1+Math.sqrt(5))/2,qr=1/ur,Lp=[new j(1,1,1),new j(-1,1,1),new j(1,1,-1),new j(-1,1,-1),new j(0,ur,qr),new j(0,ur,-qr),new j(qr,0,ur),new j(-qr,0,ur),new j(ur,qr,0),new j(-ur,qr,0)];class Dp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=kp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qc,$c,Yc),e.scissorTest=!1,Co(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===Ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),Yc=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ra,format:kn,colorSpace:Qi,depthBuffer:!1},r=Up(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Up(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pb(s)),this._blurMaterial=Lb(s,e,n)}return r}_compileMaterial(e){const n=new fn(this._lodPlanes[0],e);this._renderer.compile(n,Xc)}_sceneToCubeUV(e,n,i,r){const o=new Mn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Pp),f.toneMapping=Hi,f.autoClear=!1;const x=new ua({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),y=new fn(new Ba,x);let _=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,_=!0):(x.color.copy(Pp),_=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const g=this._cubeSize;Co(r,v*g,d>2?g:0,g,g),f.setRenderTarget(r),_&&f.render(y,o),f.render(e,o)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===Ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=kp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ip());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new fn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Co(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Xc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Lp[(r-1)%Lp.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new fn(this._lodPlanes[r],u),p=u.uniforms,x=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*fr-1),_=s/y,m=isFinite(s)?1+Math.floor(f*_):fr;m>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fr}`);const d=[];let v=0;for(let E=0;E<fr;++E){const L=E/_,z=Math.exp(-L*L/2);d.push(z),E===0?v+=z:E<m&&(v+=2*z)}for(let E=0;E<d.length;E++)d[E]=d[E]/v;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:g}=this;p.dTheta.value=y,p.mipInt.value=g-i;const S=this._sizeLods[r],A=3*S*(r>g-as?r-g+as:0),b=4*(this._cubeSize-S);Co(n,A,b,3*S,2*S),c.setRenderTarget(n),c.render(h,Xc)}}function Pb(t){const e=[],n=[],i=[];let r=t;const s=t-as+1+Rp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-as?c=Rp[a-t+as-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),f=-u,h=1+u,p=[f,f,h,f,h,h,f,f,h,h,f,h],x=6,y=6,_=3,m=2,d=1,v=new Float32Array(_*y*x),g=new Float32Array(m*y*x),S=new Float32Array(d*y*x);for(let b=0;b<x;b++){const E=b%3*2/3-1,L=b>2?0:-1,z=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];v.set(z,_*y*b),g.set(p,m*y*b);const M=[b,b,b,b,b,b];S.set(M,d*y*b)}const A=new An;A.setAttribute("position",new jn(v,_)),A.setAttribute("uv",new jn(g,m)),A.setAttribute("faceIndex",new jn(S,d)),e.push(A),r>as&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Up(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=Ol,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Co(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Lb(t,e,n){const i=new Float32Array(fr),r=new j(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:af(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function Ip(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:af(),fragmentShader:`

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
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function kp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:af(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bi,depthTest:!1,depthWrite:!1})}function af(){return`

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
	`}function Db(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===Qu||c===Ju,f=c===Es||c===Ts;if(u||f)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new Dp(t)),h=u?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(u&&h&&h.height>0||f&&h&&r(h)){n===null&&(n=new Dp(t));const p=u?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",s),p.texture}else return null}}}return o}function r(o){let c=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function Ub(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Ib(t,e,n,i){const r={},s=new WeakMap;function a(h){const p=h.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);for(const y in p.morphAttributes){const _=p.morphAttributes[y];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}p.removeEventListener("dispose",a),delete r[p.id];const x=s.get(p);x&&(e.remove(x),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(h,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function c(h){const p=h.attributes;for(const y in p)e.update(p[y],t.ARRAY_BUFFER);const x=h.morphAttributes;for(const y in x){const _=x[y];for(let m=0,d=_.length;m<d;m++)e.update(_[m],t.ARRAY_BUFFER)}}function u(h){const p=[],x=h.index,y=h.attributes.position;let _=0;if(x!==null){const v=x.array;_=x.version;for(let g=0,S=v.length;g<S;g+=3){const A=v[g+0],b=v[g+1],E=v[g+2];p.push(A,b,b,E,E,A)}}else if(y!==void 0){const v=y.array;_=y.version;for(let g=0,S=v.length/3-1;g<S;g+=3){const A=g+0,b=g+1,E=g+2;p.push(A,b,b,E,E,A)}}else return;const m=new(Ig(p)?Gg:Hg)(p,1);m.version=_;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function f(h){const p=s.get(h);if(p){const x=h.index;x!==null&&p.version<x.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function kb(t,e,n,i){const r=i.isWebGL2;let s;function a(x){s=x}let o,c;function u(x){o=x.type,c=x.bytesPerElement}function f(x,y){t.drawElements(s,y,o,x*c),n.update(y,s,1)}function h(x,y,_){if(_===0)return;let m,d;if(r)m=t,d="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](s,y,o,x*c,_),n.update(y,s,_)}function p(x,y,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(x[d]/c,y[d]);else{m.multiDrawElementsWEBGL(s,y,0,o,x,0,_);let d=0;for(let v=0;v<_;v++)d+=y[v];n.update(d,s,1)}}this.setMode=a,this.setIndex=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=p}function Fb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Ob(t,e){return t[0]-e[0]}function jb(t,e){return Math.abs(e[1])-Math.abs(t[1])}function zb(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new Pt,o=[];for(let u=0;u<8;u++)o[u]=[u,0];function c(u,f,h){const p=u.morphTargetInfluences;if(e.isWebGL2===!0){const y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=y!==void 0?y.length:0;let m=s.get(f);if(m===void 0||m.count!==_){let Z=function(){R.dispose(),s.delete(f),f.removeEventListener("dispose",Z)};var x=Z;m!==void 0&&m.texture.dispose();const d=f.morphAttributes.position!==void 0,v=f.morphAttributes.normal!==void 0,g=f.morphAttributes.color!==void 0,S=f.morphAttributes.position||[],A=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let E=0;d===!0&&(E=1),v===!0&&(E=2),g===!0&&(E=3);let L=f.attributes.position.count*E,z=1;L>e.maxTextureSize&&(z=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const M=new Float32Array(L*z*4*_),R=new Og(M,L,z,_);R.type=oi,R.needsUpdate=!0;const ee=E*4;for(let D=0;D<_;D++){const B=S[D],V=A[D],te=b[D],U=L*z*4*D;for(let H=0;H<B.count;H++){const N=H*ee;d===!0&&(a.fromBufferAttribute(B,H),M[U+N+0]=a.x,M[U+N+1]=a.y,M[U+N+2]=a.z,M[U+N+3]=0),v===!0&&(a.fromBufferAttribute(V,H),M[U+N+4]=a.x,M[U+N+5]=a.y,M[U+N+6]=a.z,M[U+N+7]=0),g===!0&&(a.fromBufferAttribute(te,H),M[U+N+8]=a.x,M[U+N+9]=a.y,M[U+N+10]=a.z,M[U+N+11]=te.itemSize===4?a.w:1)}}m={count:_,texture:R,size:new Ye(L,z)},s.set(f,m),f.addEventListener("dispose",Z)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",u.morphTexture,n);else{let d=0;for(let g=0;g<p.length;g++)d+=p[g];const v=f.morphTargetsRelative?1:1-d;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",p)}h.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const y=p===void 0?0:p.length;let _=i[f.id];if(_===void 0||_.length!==y){_=[];for(let S=0;S<y;S++)_[S]=[S,0];i[f.id]=_}for(let S=0;S<y;S++){const A=_[S];A[0]=S,A[1]=p[S]}_.sort(jb);for(let S=0;S<8;S++)S<y&&_[S][1]?(o[S][0]=_[S][0],o[S][1]=_[S][1]):(o[S][0]=Number.MAX_SAFE_INTEGER,o[S][1]=0);o.sort(Ob);const m=f.morphAttributes.position,d=f.morphAttributes.normal;let v=0;for(let S=0;S<8;S++){const A=o[S],b=A[0],E=A[1];b!==Number.MAX_SAFE_INTEGER&&E?(m&&f.getAttribute("morphTarget"+S)!==m[b]&&f.setAttribute("morphTarget"+S,m[b]),d&&f.getAttribute("morphNormal"+S)!==d[b]&&f.setAttribute("morphNormal"+S,d[b]),r[S]=E,v+=E):(m&&f.hasAttribute("morphTarget"+S)===!0&&f.deleteAttribute("morphTarget"+S),d&&f.hasAttribute("morphNormal"+S)===!0&&f.deleteAttribute("morphNormal"+S),r[S]=0)}const g=f.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",g),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:c}}function Bb(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return h}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class Yg extends sn{constructor(e,n,i,r,s,a,o,c,u,f){if(f=f!==void 0?f:yr,f!==yr&&f!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===yr&&(i=Li),i===void 0&&f===As&&(i=_r),super(null,r,s,a,o,c,f,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Wt,this.minFilter=c!==void 0?c:Wt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Kg=new sn,Zg=new Yg(1,1);Zg.compareFunction=Ug;const Qg=new Og,Jg=new MS,e0=new Xg,Fp=[],Op=[],jp=new Float32Array(16),zp=new Float32Array(9),Bp=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Fp[r];if(s===void 0&&(s=new Float32Array(r),Fp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function wt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Hl(t,e){let n=Op[e];n===void 0&&(n=new Int32Array(e),Op[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Hb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2fv(this.addr,e),wt(n,e)}}function Vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(bt(n,e))return;t.uniform3fv(this.addr,e),wt(n,e)}}function Wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4fv(this.addr,e),wt(n,e)}}function Xb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),wt(n,e)}else{if(bt(n,i))return;Bp.set(i),t.uniformMatrix2fv(this.addr,!1,Bp),wt(n,i)}}function qb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),wt(n,e)}else{if(bt(n,i))return;zp.set(i),t.uniformMatrix3fv(this.addr,!1,zp),wt(n,i)}}function $b(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),wt(n,e)}else{if(bt(n,i))return;jp.set(i),t.uniformMatrix4fv(this.addr,!1,jp),wt(n,i)}}function Yb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Kb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2iv(this.addr,e),wt(n,e)}}function Zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3iv(this.addr,e),wt(n,e)}}function Qb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4iv(this.addr,e),wt(n,e)}}function Jb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(bt(n,e))return;t.uniform2uiv(this.addr,e),wt(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(bt(n,e))return;t.uniform3uiv(this.addr,e),wt(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(bt(n,e))return;t.uniform4uiv(this.addr,e),wt(n,e)}}function iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Zg:Kg;n.setTexture2D(e||s,r)}function rw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jg,r)}function sw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||e0,r)}function aw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qg,r)}function ow(t){switch(t){case 5126:return Hb;case 35664:return Gb;case 35665:return Vb;case 35666:return Wb;case 35674:return Xb;case 35675:return qb;case 35676:return $b;case 5124:case 35670:return Yb;case 35667:case 35671:return Kb;case 35668:case 35672:return Zb;case 35669:case 35673:return Qb;case 5125:return Jb;case 36294:return ew;case 36295:return tw;case 36296:return nw;case 35678:case 36198:case 36298:case 36306:case 35682:return iw;case 35679:case 36299:case 36307:return rw;case 35680:case 36300:case 36308:case 36293:return sw;case 36289:case 36303:case 36311:case 36292:return aw}}function lw(t,e){t.uniform1fv(this.addr,e)}function cw(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function uw(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function dw(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function fw(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hw(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pw(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mw(t,e){t.uniform1iv(this.addr,e)}function xw(t,e){t.uniform2iv(this.addr,e)}function gw(t,e){t.uniform3iv(this.addr,e)}function vw(t,e){t.uniform4iv(this.addr,e)}function _w(t,e){t.uniform1uiv(this.addr,e)}function yw(t,e){t.uniform2uiv(this.addr,e)}function Sw(t,e){t.uniform3uiv(this.addr,e)}function Mw(t,e){t.uniform4uiv(this.addr,e)}function bw(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Kg,s[a])}function ww(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jg,s[a])}function Ew(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||e0,s[a])}function Tw(t,e,n){const i=this.cache,r=e.length,s=Hl(n,r);bt(i,s)||(t.uniform1iv(this.addr,s),wt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Qg,s[a])}function Aw(t){switch(t){case 5126:return lw;case 35664:return cw;case 35665:return uw;case 35666:return dw;case 35674:return fw;case 35675:return hw;case 35676:return pw;case 5124:case 35670:return mw;case 35667:case 35671:return xw;case 35668:case 35672:return gw;case 35669:case 35673:return vw;case 5125:return _w;case 36294:return yw;case 36295:return Sw;case 36296:return Mw;case 35678:case 36198:case 36298:case 36306:case 35682:return bw;case 35679:case 36299:case 36307:return ww;case 35680:case 36300:case 36308:case 36293:return Ew;case 36289:case 36303:case 36311:case 36292:return Tw}}class Cw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ow(n.type)}}class Nw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Aw(n.type)}}class Rw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Kc=/(\w+)(\])?(\[|\.)?/g;function Hp(t,e){t.seq.push(e),t.map[e.id]=e}function Pw(t,e,n){const i=t.name,r=i.length;for(Kc.lastIndex=0;;){const s=Kc.exec(i),a=Kc.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){Hp(n,u===void 0?new Cw(o,t,e):new Nw(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Rw(o),Hp(n,h)),n=h}}}class Go{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Pw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Gp(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lw=37297;let Dw=0;function Uw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Iw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===_l&&n===vl?i="LinearDisplayP3ToLinearSRGB":e===vl&&n===_l&&(i="LinearSRGBToLinearDisplayP3"),t){case Qi:case jl:return[i,"LinearTransferOETF"];case Wn:case sf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Vp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Uw(t.getShaderSource(e),a)}else return r}function kw(t,e){const n=Iw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Fw(t,e){let n;switch(e){case Gy:n="Linear";break;case Vy:n="Reinhard";break;case Wy:n="OptimizedCineon";break;case Xy:n="ACESFilmic";break;case $y:n="AgX";break;case Yy:n="Neutral";break;case qy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function Ow(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(os).join(`
`)}function jw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(os).join(`
`)}function zw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function os(t){return t!==""}function Wp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Hw=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(t){return t.replace(Hw,Vw)}const Gw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Vw(t,e){let n=Be[e];if(n===void 0){const i=Gw.get(e);if(i!==void 0)n=Be[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(n)}const Ww=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qp(t){return t.replace(Ww,Xw)}function Xw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $p(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===wg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===gy?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ii&&(e="SHADOWMAP_TYPE_VSM"),e}function $w(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case Ts:e="ENVMAP_TYPE_CUBE";break;case Ol:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Ts:e="ENVMAP_MODE_REFRACTION";break}return e}function Kw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Eg:e="ENVMAP_BLENDING_MULTIPLY";break;case By:e="ENVMAP_BLENDING_MIX";break;case Hy:e="ENVMAP_BLENDING_ADD";break}return e}function Zw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Qw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=qw(n),u=$w(n),f=Yw(n),h=Kw(n),p=Zw(n),x=n.isWebGL2?"":Ow(n),y=jw(n),_=zw(s),m=r.createProgram();let d,v,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(os).join(`
`),d.length>0&&(d+=`
`),v=[x,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(os).join(`
`),v.length>0&&(v+=`
`)):(d=[$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(os).join(`
`),v=[x,$p(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Hi?"#define TONE_MAPPING":"",n.toneMapping!==Hi?Be.tonemapping_pars_fragment:"",n.toneMapping!==Hi?Fw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,kw("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(os).join(`
`)),a=sd(a),a=Wp(a,n),a=Xp(a,n),o=sd(o),o=Wp(o,n),o=Xp(o,n),a=qp(a),o=qp(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,d=[y,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===up?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===up?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const S=g+d+a,A=g+v+o,b=Gp(r,r.VERTEX_SHADER,S),E=Gp(r,r.FRAGMENT_SHADER,A);r.attachShader(m,b),r.attachShader(m,E),n.index0AttributeName!==void 0?r.bindAttribLocation(m,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function L(ee){if(t.debug.checkShaderErrors){const Z=r.getProgramInfoLog(m).trim(),D=r.getShaderInfoLog(b).trim(),B=r.getShaderInfoLog(E).trim();let V=!0,te=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,m,b,E);else{const U=Vp(r,b,"vertex"),H=Vp(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+ee.name+`
Material Type: `+ee.type+`

Program Info Log: `+Z+`
`+U+`
`+H)}else Z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Z):(D===""||B==="")&&(te=!1);te&&(ee.diagnostics={runnable:V,programLog:Z,vertexShader:{log:D,prefix:d},fragmentShader:{log:B,prefix:v}})}r.deleteShader(b),r.deleteShader(E),z=new Go(r,m),M=Bw(r,m)}let z;this.getUniforms=function(){return z===void 0&&L(this),z};let M;this.getAttributes=function(){return M===void 0&&L(this),M};let R=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,Lw)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Dw++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=E,this}let Jw=0;class eE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new tE(e),n.set(e,i)),i}}class tE{constructor(e){this.id=Jw++,this.code=e,this.usedTimes=0}}function nE(t,e,n,i,r,s,a){const o=new zg,c=new eE,u=new Set,f=[],h=r.isWebGL2,p=r.logarithmicDepthBuffer,x=r.vertexTextures;let y=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return u.add(M),M===0?"uv":`uv${M}`}function d(M,R,ee,Z,D){const B=Z.fog,V=D.geometry,te=M.isMeshStandardMaterial?Z.environment:null,U=(M.isMeshStandardMaterial?n:e).get(M.envMap||te),H=U&&U.mapping===Ol?U.image.height:null,N=_[M.type];M.precision!==null&&(y=r.getMaxPrecision(M.precision),y!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",y,"instead."));const C=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Y=C!==void 0?C.length:0;let se=0;V.morphAttributes.position!==void 0&&(se=1),V.morphAttributes.normal!==void 0&&(se=2),V.morphAttributes.color!==void 0&&(se=3);let F,$,J,ie;if(N){const tt=Xn[N];F=tt.vertexShader,$=tt.fragmentShader}else F=M.vertexShader,$=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),ie=c.getFragmentShaderID(M);const oe=t.getRenderTarget(),le=D.isInstancedMesh===!0,Te=D.isBatchedMesh===!0,ge=!!M.map,k=!!M.matcap,qe=!!U,ue=!!M.aoMap,Ee=!!M.lightMap,Se=!!M.bumpMap,Le=!!M.normalMap,Ce=!!M.displacementMap,De=!!M.emissiveMap,Ze=!!M.metalnessMap,P=!!M.roughnessMap,w=M.anisotropy>0,K=M.clearcoat>0,Q=M.iridescence>0,ae=M.sheen>0,ne=M.transmission>0,ke=w&&!!M.anisotropyMap,Re=K&&!!M.clearcoatMap,de=K&&!!M.clearcoatNormalMap,pe=K&&!!M.clearcoatRoughnessMap,Ie=Q&&!!M.iridescenceMap,ce=Q&&!!M.iridescenceThicknessMap,pt=ae&&!!M.sheenColorMap,Ve=ae&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Me=!!M.specularColorMap,be=!!M.specularIntensityMap,$e=ne&&!!M.transmissionMap,Oe=ne&&!!M.thicknessMap,ot=!!M.gradientMap,I=!!M.alphaMap,me=M.alphaTest>0,W=!!M.alphaHash,fe=!!M.extensions;let xe=Hi;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(xe=t.toneMapping);const Xe={isWebGL2:h,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:F,fragmentShader:$,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ie,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:y,batching:Te,instancing:le,instancingColor:le&&D.instanceColor!==null,instancingMorph:le&&D.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Qi,alphaToCoverage:!!M.alphaToCoverage,map:ge,matcap:k,envMap:qe,envMapMode:qe&&U.mapping,envMapCubeUVHeight:H,aoMap:ue,lightMap:Ee,bumpMap:Se,normalMap:Le,displacementMap:x&&Ce,emissiveMap:De,normalMapObjectSpace:Le&&M.normalMapType===oS,normalMapTangentSpace:Le&&M.normalMapType===aS,metalnessMap:Ze,roughnessMap:P,anisotropy:w,anisotropyMap:ke,clearcoat:K,clearcoatMap:Re,clearcoatNormalMap:de,clearcoatRoughnessMap:pe,iridescence:Q,iridescenceMap:Ie,iridescenceThicknessMap:ce,sheen:ae,sheenColorMap:pt,sheenRoughnessMap:Ve,specularMap:Ae,specularColorMap:Me,specularIntensityMap:be,transmission:ne,transmissionMap:$e,thicknessMap:Oe,gradientMap:ot,opaque:M.transparent===!1&&M.blending===xs&&M.alphaToCoverage===!1,alphaMap:I,alphaTest:me,alphaHash:W,combine:M.combine,mapUv:ge&&m(M.map.channel),aoMapUv:ue&&m(M.aoMap.channel),lightMapUv:Ee&&m(M.lightMap.channel),bumpMapUv:Se&&m(M.bumpMap.channel),normalMapUv:Le&&m(M.normalMap.channel),displacementMapUv:Ce&&m(M.displacementMap.channel),emissiveMapUv:De&&m(M.emissiveMap.channel),metalnessMapUv:Ze&&m(M.metalnessMap.channel),roughnessMapUv:P&&m(M.roughnessMap.channel),anisotropyMapUv:ke&&m(M.anisotropyMap.channel),clearcoatMapUv:Re&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&m(M.sheenRoughnessMap.channel),specularMapUv:Ae&&m(M.specularMap.channel),specularColorMapUv:Me&&m(M.specularColorMap.channel),specularIntensityMapUv:be&&m(M.specularIntensityMap.channel),transmissionMapUv:$e&&m(M.transmissionMap.channel),thicknessMapUv:Oe&&m(M.thicknessMap.channel),alphaMapUv:I&&m(M.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(Le||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!V.attributes.uv&&(ge||I),fog:!!B,useFog:M.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:D.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:se,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&ee.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:ge&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===st,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ai,flipSided:M.side===rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:fe&&M.extensions.derivatives===!0,extensionFragDepth:fe&&M.extensions.fragDepth===!0,extensionDrawBuffers:fe&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:fe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Xe.vertexUv1s=u.has(1),Xe.vertexUv2s=u.has(2),Xe.vertexUv3s=u.has(3),u.clear(),Xe}function v(M){const R=[];if(M.shaderID?R.push(M.shaderID):(R.push(M.customVertexShaderID),R.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ee in M.defines)R.push(ee),R.push(M.defines[ee]);return M.isRawShaderMaterial===!1&&(g(R,M),S(R,M),R.push(t.outputColorSpace)),R.push(M.customProgramCacheKey),R.join()}function g(M,R){M.push(R.precision),M.push(R.outputColorSpace),M.push(R.envMapMode),M.push(R.envMapCubeUVHeight),M.push(R.mapUv),M.push(R.alphaMapUv),M.push(R.lightMapUv),M.push(R.aoMapUv),M.push(R.bumpMapUv),M.push(R.normalMapUv),M.push(R.displacementMapUv),M.push(R.emissiveMapUv),M.push(R.metalnessMapUv),M.push(R.roughnessMapUv),M.push(R.anisotropyMapUv),M.push(R.clearcoatMapUv),M.push(R.clearcoatNormalMapUv),M.push(R.clearcoatRoughnessMapUv),M.push(R.iridescenceMapUv),M.push(R.iridescenceThicknessMapUv),M.push(R.sheenColorMapUv),M.push(R.sheenRoughnessMapUv),M.push(R.specularMapUv),M.push(R.specularColorMapUv),M.push(R.specularIntensityMapUv),M.push(R.transmissionMapUv),M.push(R.thicknessMapUv),M.push(R.combine),M.push(R.fogExp2),M.push(R.sizeAttenuation),M.push(R.morphTargetsCount),M.push(R.morphAttributeCount),M.push(R.numDirLights),M.push(R.numPointLights),M.push(R.numSpotLights),M.push(R.numSpotLightMaps),M.push(R.numHemiLights),M.push(R.numRectAreaLights),M.push(R.numDirLightShadows),M.push(R.numPointLightShadows),M.push(R.numSpotLightShadows),M.push(R.numSpotLightShadowsWithMaps),M.push(R.numLightProbes),M.push(R.shadowMapType),M.push(R.toneMapping),M.push(R.numClippingPlanes),M.push(R.numClipIntersection),M.push(R.depthPacking)}function S(M,R){o.disableAll(),R.isWebGL2&&o.enable(0),R.supportsVertexTextures&&o.enable(1),R.instancing&&o.enable(2),R.instancingColor&&o.enable(3),R.instancingMorph&&o.enable(4),R.matcap&&o.enable(5),R.envMap&&o.enable(6),R.normalMapObjectSpace&&o.enable(7),R.normalMapTangentSpace&&o.enable(8),R.clearcoat&&o.enable(9),R.iridescence&&o.enable(10),R.alphaTest&&o.enable(11),R.vertexColors&&o.enable(12),R.vertexAlphas&&o.enable(13),R.vertexUv1s&&o.enable(14),R.vertexUv2s&&o.enable(15),R.vertexUv3s&&o.enable(16),R.vertexTangents&&o.enable(17),R.anisotropy&&o.enable(18),R.alphaHash&&o.enable(19),R.batching&&o.enable(20),M.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.skinning&&o.enable(4),R.morphTargets&&o.enable(5),R.morphNormals&&o.enable(6),R.morphColors&&o.enable(7),R.premultipliedAlpha&&o.enable(8),R.shadowMapEnabled&&o.enable(9),R.useLegacyLights&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),M.push(o.mask)}function A(M){const R=_[M.type];let ee;if(R){const Z=Xn[R];ee=IS.clone(Z.uniforms)}else ee=M.uniforms;return ee}function b(M,R){let ee;for(let Z=0,D=f.length;Z<D;Z++){const B=f[Z];if(B.cacheKey===R){ee=B,++ee.usedTimes;break}}return ee===void 0&&(ee=new Qw(t,R,M,s),f.push(ee)),ee}function E(M){if(--M.usedTimes===0){const R=f.indexOf(M);f[R]=f[f.length-1],f.pop(),M.destroy()}}function L(M){c.remove(M)}function z(){c.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:A,acquireProgram:b,releaseProgram:E,releaseShaderCache:L,programs:f,dispose:z}}function iE(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function rE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Yp(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Kp(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,p,x,y,_,m){let d=t[e];return d===void 0?(d={id:h.id,object:h,geometry:p,material:x,groupOrder:y,renderOrder:h.renderOrder,z:_,group:m},t[e]=d):(d.id=h.id,d.object=h,d.geometry=p,d.material=x,d.groupOrder=y,d.renderOrder=h.renderOrder,d.z=_,d.group=m),e++,d}function o(h,p,x,y,_,m){const d=a(h,p,x,y,_,m);x.transmission>0?i.push(d):x.transparent===!0?r.push(d):n.push(d)}function c(h,p,x,y,_,m){const d=a(h,p,x,y,_,m);x.transmission>0?i.unshift(d):x.transparent===!0?r.unshift(d):n.unshift(d)}function u(h,p){n.length>1&&n.sort(h||rE),i.length>1&&i.sort(p||Yp),r.length>1&&r.sort(p||Yp)}function f(){for(let h=e,p=t.length;h<p;h++){const x=t[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:f,sort:u}}function sE(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Kp,t.set(i,[a])):r>=s.length?(a=new Kp,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function aE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new j,color:new Qe};break;case"SpotLight":n={position:new j,direction:new j,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new j,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new j,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new j,halfWidth:new j,halfHeight:new j};break}return t[e.id]=n,n}}}function oE(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let lE=0;function cE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function uE(t,e){const n=new aE,i=oE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)r.probe.push(new j);const s=new j,a=new yt,o=new yt;function c(f,h){let p=0,x=0,y=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let _=0,m=0,d=0,v=0,g=0,S=0,A=0,b=0,E=0,L=0,z=0;f.sort(cE);const M=h===!0?Math.PI:1;for(let ee=0,Z=f.length;ee<Z;ee++){const D=f[ee],B=D.color,V=D.intensity,te=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)p+=B.r*V*M,x+=B.g*V*M,y+=B.b*V*M;else if(D.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(D.sh.coefficients[H],V);z++}else if(D.isDirectionalLight){const H=n.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),D.castShadow){const N=D.shadow,C=i.get(D);C.shadowBias=N.bias,C.shadowNormalBias=N.normalBias,C.shadowRadius=N.radius,C.shadowMapSize=N.mapSize,r.directionalShadow[_]=C,r.directionalShadowMap[_]=U,r.directionalShadowMatrix[_]=D.shadow.matrix,S++}r.directional[_]=H,_++}else if(D.isSpotLight){const H=n.get(D);H.position.setFromMatrixPosition(D.matrixWorld),H.color.copy(B).multiplyScalar(V*M),H.distance=te,H.coneCos=Math.cos(D.angle),H.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),H.decay=D.decay,r.spot[d]=H;const N=D.shadow;if(D.map&&(r.spotLightMap[E]=D.map,E++,N.updateMatrices(D),D.castShadow&&L++),r.spotLightMatrix[d]=N.matrix,D.castShadow){const C=i.get(D);C.shadowBias=N.bias,C.shadowNormalBias=N.normalBias,C.shadowRadius=N.radius,C.shadowMapSize=N.mapSize,r.spotShadow[d]=C,r.spotShadowMap[d]=U,b++}d++}else if(D.isRectAreaLight){const H=n.get(D);H.color.copy(B).multiplyScalar(V),H.halfWidth.set(D.width*.5,0,0),H.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=H,v++}else if(D.isPointLight){const H=n.get(D);if(H.color.copy(D.color).multiplyScalar(D.intensity*M),H.distance=D.distance,H.decay=D.decay,D.castShadow){const N=D.shadow,C=i.get(D);C.shadowBias=N.bias,C.shadowNormalBias=N.normalBias,C.shadowRadius=N.radius,C.shadowMapSize=N.mapSize,C.shadowCameraNear=N.camera.near,C.shadowCameraFar=N.camera.far,r.pointShadow[m]=C,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,A++}r.point[m]=H,m++}else if(D.isHemisphereLight){const H=n.get(D);H.skyColor.copy(D.color).multiplyScalar(V*M),H.groundColor.copy(D.groundColor).multiplyScalar(V*M),r.hemi[g]=H,g++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=he.LTC_FLOAT_1,r.rectAreaLTC2=he.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=he.LTC_HALF_1,r.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=p,r.ambient[1]=x,r.ambient[2]=y;const R=r.hash;(R.directionalLength!==_||R.pointLength!==m||R.spotLength!==d||R.rectAreaLength!==v||R.hemiLength!==g||R.numDirectionalShadows!==S||R.numPointShadows!==A||R.numSpotShadows!==b||R.numSpotMaps!==E||R.numLightProbes!==z)&&(r.directional.length=_,r.spot.length=d,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=A,r.pointShadowMap.length=A,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=A,r.spotLightMatrix.length=b+E-L,r.spotLightMap.length=E,r.numSpotLightShadowsWithMaps=L,r.numLightProbes=z,R.directionalLength=_,R.pointLength=m,R.spotLength=d,R.rectAreaLength=v,R.hemiLength=g,R.numDirectionalShadows=S,R.numPointShadows=A,R.numSpotShadows=b,R.numSpotMaps=E,R.numLightProbes=z,r.version=lE++)}function u(f,h){let p=0,x=0,y=0,_=0,m=0;const d=h.matrixWorldInverse;for(let v=0,g=f.length;v<g;v++){const S=f[v];if(S.isDirectionalLight){const A=r.directional[p];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),p++}else if(S.isSpotLight){const A=r.spot[y];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),y++}else if(S.isRectAreaLight){const A=r.rectArea[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(S.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){const A=r.point[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),x++}else if(S.isHemisphereLight){const A=r.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:c,setupView:u,state:r}}function Zp(t,e){const n=new uE(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function c(h){n.setup(i,h)}function u(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o}}function dE(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let c;return o===void 0?(c=new Zp(t,e),n.set(s,[c])):a>=o.length?(c=new Zp(t,e),o.push(c)):c=o[a],c}function r(){n=new WeakMap}return{get:i,dispose:r}}class fE extends za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hE extends za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mE=`uniform sampler2D shadow_pass;
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
}`;function xE(t,e,n){let i=new qg;const r=new Ye,s=new Ye,a=new Pt,o=new fE({depthPacking:sS}),c=new hE,u={},f=n.maxTextureSize,h={[qi]:rn,[rn]:qi,[ai]:ai},p=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:pE,fragmentShader:mE}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const y=new An;y.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new fn(y,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wg;let d=this.type;this.render=function(b,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const z=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),ee=t.state;ee.setBlending(Bi),ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const Z=d!==ii&&this.type===ii,D=d===ii&&this.type!==ii;for(let B=0,V=b.length;B<V;B++){const te=b[B],U=te.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const H=U.getFrameExtents();if(r.multiply(H),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/H.x),r.x=s.x*H.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/H.y),r.y=s.y*H.y,U.mapSize.y=s.y)),U.map===null||Z===!0||D===!0){const C=this.type!==ii?{minFilter:Wt,magFilter:Wt}:{};U.map!==null&&U.map.dispose(),U.map=new Tr(r.x,r.y,C),U.map.texture.name=te.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const N=U.getViewportCount();for(let C=0;C<N;C++){const Y=U.getViewport(C);a.set(s.x*Y.x,s.y*Y.y,s.x*Y.z,s.y*Y.w),ee.viewport(a),U.updateMatrices(te,C),i=U.getFrustum(),S(E,L,U.camera,te,this.type)}U.isPointLightShadow!==!0&&this.type===ii&&v(U,L),U.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(z,M,R)};function v(b,E){const L=e.update(_);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,x.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Tr(r.x,r.y)),p.uniforms.shadow_pass.value=b.map.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,t.setRenderTarget(b.mapPass),t.clear(),t.renderBufferDirect(E,null,L,p,_,null),x.uniforms.shadow_pass.value=b.mapPass.texture,x.uniforms.resolution.value=b.mapSize,x.uniforms.radius.value=b.radius,t.setRenderTarget(b.map),t.clear(),t.renderBufferDirect(E,null,L,x,_,null)}function g(b,E,L,z){let M=null;const R=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?c:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const ee=M.uuid,Z=E.uuid;let D=u[ee];D===void 0&&(D={},u[ee]=D);let B=D[Z];B===void 0&&(B=M.clone(),D[Z]=B,E.addEventListener("dispose",A)),M=B}if(M.visible=E.visible,M.wireframe=E.wireframe,z===ii?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:h[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const ee=t.properties.get(M);ee.light=L}return M}function S(b,E,L,z,M){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===ii)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const Z=e.update(b),D=b.material;if(Array.isArray(D)){const B=Z.groups;for(let V=0,te=B.length;V<te;V++){const U=B[V],H=D[U.materialIndex];if(H&&H.visible){const N=g(b,H,z,M);b.onBeforeShadow(t,b,E,L,Z,N,U),t.renderBufferDirect(L,null,Z,N,b,U),b.onAfterShadow(t,b,E,L,Z,N,U)}}}else if(D.visible){const B=g(b,D,z,M);b.onBeforeShadow(t,b,E,L,Z,B,null),t.renderBufferDirect(L,null,Z,B,b,null),b.onAfterShadow(t,b,E,L,Z,B,null)}}const ee=b.children;for(let Z=0,D=ee.length;Z<D;Z++)S(ee[Z],E,L,z,M)}function A(b){b.target.removeEventListener("dispose",A);for(const L in u){const z=u[L],M=b.target.uuid;M in z&&(z[M].dispose(),delete z[M])}}}function gE(t,e,n){const i=n.isWebGL2;function r(){let I=!1;const me=new Pt;let W=null;const fe=new Pt(0,0,0,0);return{setMask:function(xe){W!==xe&&!I&&(t.colorMask(xe,xe,xe,xe),W=xe)},setLocked:function(xe){I=xe},setClear:function(xe,Xe,tt,Nt,gn){gn===!0&&(xe*=Nt,Xe*=Nt,tt*=Nt),me.set(xe,Xe,tt,Nt),fe.equals(me)===!1&&(t.clearColor(xe,Xe,tt,Nt),fe.copy(me))},reset:function(){I=!1,W=null,fe.set(-1,0,0,0)}}}function s(){let I=!1,me=null,W=null,fe=null;return{setTest:function(xe){xe?le(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(xe){me!==xe&&!I&&(t.depthMask(xe),me=xe)},setFunc:function(xe){if(W!==xe){switch(xe){case Uy:t.depthFunc(t.NEVER);break;case Iy:t.depthFunc(t.ALWAYS);break;case ky:t.depthFunc(t.LESS);break;case xl:t.depthFunc(t.LEQUAL);break;case Fy:t.depthFunc(t.EQUAL);break;case Oy:t.depthFunc(t.GEQUAL);break;case jy:t.depthFunc(t.GREATER);break;case zy:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}W=xe}},setLocked:function(xe){I=xe},setClear:function(xe){fe!==xe&&(t.clearDepth(xe),fe=xe)},reset:function(){I=!1,me=null,W=null,fe=null}}}function a(){let I=!1,me=null,W=null,fe=null,xe=null,Xe=null,tt=null,Nt=null,gn=null;return{setTest:function(nt){I||(nt?le(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(nt){me!==nt&&!I&&(t.stencilMask(nt),me=nt)},setFunc:function(nt,Ht,Hn){(W!==nt||fe!==Ht||xe!==Hn)&&(t.stencilFunc(nt,Ht,Hn),W=nt,fe=Ht,xe=Hn)},setOp:function(nt,Ht,Hn){(Xe!==nt||tt!==Ht||Nt!==Hn)&&(t.stencilOp(nt,Ht,Hn),Xe=nt,tt=Ht,Nt=Hn)},setLocked:function(nt){I=nt},setClear:function(nt){gn!==nt&&(t.clearStencil(nt),gn=nt)},reset:function(){I=!1,me=null,W=null,fe=null,xe=null,Xe=null,tt=null,Nt=null,gn=null}}}const o=new r,c=new s,u=new a,f=new WeakMap,h=new WeakMap;let p={},x={},y=new WeakMap,_=[],m=null,d=!1,v=null,g=null,S=null,A=null,b=null,E=null,L=null,z=new Qe(0,0,0),M=0,R=!1,ee=null,Z=null,D=null,B=null,V=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,H=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(N)[1]),U=H>=1):N.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),U=H>=2);let C=null,Y={};const se=t.getParameter(t.SCISSOR_BOX),F=t.getParameter(t.VIEWPORT),$=new Pt().fromArray(se),J=new Pt().fromArray(F);function ie(I,me,W,fe){const xe=new Uint8Array(4),Xe=t.createTexture();t.bindTexture(I,Xe),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let tt=0;tt<W;tt++)i&&(I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY)?t.texImage3D(me,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(me+tt,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return Xe}const oe={};oe[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(oe[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),le(t.DEPTH_TEST),c.setFunc(xl),Ce(!1),De(Ph),le(t.CULL_FACE),Se(Bi);function le(I){p[I]!==!0&&(t.enable(I),p[I]=!0)}function Te(I){p[I]!==!1&&(t.disable(I),p[I]=!1)}function ge(I,me){return x[I]!==me?(t.bindFramebuffer(I,me),x[I]=me,i&&(I===t.DRAW_FRAMEBUFFER&&(x[t.FRAMEBUFFER]=me),I===t.FRAMEBUFFER&&(x[t.DRAW_FRAMEBUFFER]=me)),!0):!1}function k(I,me){let W=_,fe=!1;if(I){W=y.get(me),W===void 0&&(W=[],y.set(me,W));const xe=I.textures;if(W.length!==xe.length||W[0]!==t.COLOR_ATTACHMENT0){for(let Xe=0,tt=xe.length;Xe<tt;Xe++)W[Xe]=t.COLOR_ATTACHMENT0+Xe;W.length=xe.length,fe=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,fe=!0);if(fe)if(n.isWebGL2)t.drawBuffers(W);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(W);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function qe(I){return m!==I?(t.useProgram(I),m=I,!0):!1}const ue={[dr]:t.FUNC_ADD,[_y]:t.FUNC_SUBTRACT,[yy]:t.FUNC_REVERSE_SUBTRACT};if(i)ue[Uh]=t.MIN,ue[Ih]=t.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(ue[Uh]=I.MIN_EXT,ue[Ih]=I.MAX_EXT)}const Ee={[Sy]:t.ZERO,[My]:t.ONE,[by]:t.SRC_COLOR,[Ku]:t.SRC_ALPHA,[Ny]:t.SRC_ALPHA_SATURATE,[Ay]:t.DST_COLOR,[Ey]:t.DST_ALPHA,[wy]:t.ONE_MINUS_SRC_COLOR,[Zu]:t.ONE_MINUS_SRC_ALPHA,[Cy]:t.ONE_MINUS_DST_COLOR,[Ty]:t.ONE_MINUS_DST_ALPHA,[Ry]:t.CONSTANT_COLOR,[Py]:t.ONE_MINUS_CONSTANT_COLOR,[Ly]:t.CONSTANT_ALPHA,[Dy]:t.ONE_MINUS_CONSTANT_ALPHA};function Se(I,me,W,fe,xe,Xe,tt,Nt,gn,nt){if(I===Bi){d===!0&&(Te(t.BLEND),d=!1);return}if(d===!1&&(le(t.BLEND),d=!0),I!==vy){if(I!==v||nt!==R){if((g!==dr||b!==dr)&&(t.blendEquation(t.FUNC_ADD),g=dr,b=dr),nt)switch(I){case xs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.ONE,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dh:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case xs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Lh:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dh:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}S=null,A=null,E=null,L=null,z.set(0,0,0),M=0,v=I,R=nt}return}xe=xe||me,Xe=Xe||W,tt=tt||fe,(me!==g||xe!==b)&&(t.blendEquationSeparate(ue[me],ue[xe]),g=me,b=xe),(W!==S||fe!==A||Xe!==E||tt!==L)&&(t.blendFuncSeparate(Ee[W],Ee[fe],Ee[Xe],Ee[tt]),S=W,A=fe,E=Xe,L=tt),(Nt.equals(z)===!1||gn!==M)&&(t.blendColor(Nt.r,Nt.g,Nt.b,gn),z.copy(Nt),M=gn),v=I,R=!1}function Le(I,me){I.side===ai?Te(t.CULL_FACE):le(t.CULL_FACE);let W=I.side===rn;me&&(W=!W),Ce(W),I.blending===xs&&I.transparent===!1?Se(Bi):Se(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),c.setFunc(I.depthFunc),c.setTest(I.depthTest),c.setMask(I.depthWrite),o.setMask(I.colorWrite);const fe=I.stencilWrite;u.setTest(fe),fe&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),P(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(I){ee!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),ee=I)}function De(I){I!==my?(le(t.CULL_FACE),I!==Z&&(I===Ph?t.cullFace(t.BACK):I===xy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),Z=I}function Ze(I){I!==D&&(U&&t.lineWidth(I),D=I)}function P(I,me,W){I?(le(t.POLYGON_OFFSET_FILL),(B!==me||V!==W)&&(t.polygonOffset(me,W),B=me,V=W)):Te(t.POLYGON_OFFSET_FILL)}function w(I){I?le(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function K(I){I===void 0&&(I=t.TEXTURE0+te-1),C!==I&&(t.activeTexture(I),C=I)}function Q(I,me,W){W===void 0&&(C===null?W=t.TEXTURE0+te-1:W=C);let fe=Y[W];fe===void 0&&(fe={type:void 0,texture:void 0},Y[W]=fe),(fe.type!==I||fe.texture!==me)&&(C!==W&&(t.activeTexture(W),C=W),t.bindTexture(I,me||oe[I]),fe.type=I,fe.texture=me)}function ae(){const I=Y[C];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ke(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ie(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ce(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function pt(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ve(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(I){$.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),$.copy(I))}function be(I){J.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),J.copy(I))}function $e(I,me){let W=h.get(me);W===void 0&&(W=new WeakMap,h.set(me,W));let fe=W.get(I);fe===void 0&&(fe=t.getUniformBlockIndex(me,I.name),W.set(I,fe))}function Oe(I,me){const fe=h.get(me).get(I);f.get(me)!==fe&&(t.uniformBlockBinding(me,fe,I.__bindingPointIndex),f.set(me,fe))}function ot(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),p={},C=null,Y={},x={},y=new WeakMap,_=[],m=null,d=!1,v=null,g=null,S=null,A=null,b=null,E=null,L=null,z=new Qe(0,0,0),M=0,R=!1,ee=null,Z=null,D=null,B=null,V=null,$.set(0,0,t.canvas.width,t.canvas.height),J.set(0,0,t.canvas.width,t.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:le,disable:Te,bindFramebuffer:ge,drawBuffers:k,useProgram:qe,setBlending:Se,setMaterial:Le,setFlipSided:Ce,setCullFace:De,setLineWidth:Ze,setPolygonOffset:P,setScissorTest:w,activeTexture:K,bindTexture:Q,unbindTexture:ae,compressedTexImage2D:ne,compressedTexImage3D:ke,texImage2D:Ve,texImage3D:Ae,updateUBOMapping:$e,uniformBlockBinding:Oe,texStorage2D:ce,texStorage3D:pt,texSubImage2D:Re,texSubImage3D:de,compressedTexSubImage2D:pe,compressedTexSubImage3D:Ie,scissor:Me,viewport:be,reset:ot}}function vE(t,e,n,i,r,s,a){const o=r.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new Ye,h=new WeakMap;let p;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(P,w){return y?new OffscreenCanvas(P,w):Sl("canvas")}function m(P,w,K,Q){let ae=1;const ne=Ze(P);if((ne.width>Q||ne.height>Q)&&(ae=Q/Math.max(ne.width,ne.height)),ae<1||w===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const ke=w?rd:Math.floor,Re=ke(ae*ne.width),de=ke(ae*ne.height);p===void 0&&(p=_(Re,de));const pe=K?_(Re,de):p;return pe.width=Re,pe.height=de,pe.getContext("2d").drawImage(P,0,0,Re,de),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Re+"x"+de+")."),pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),P;return P}function d(P){const w=Ze(P);return dp(w.width)&&dp(w.height)}function v(P){return o?!1:P.wrapS!==In||P.wrapT!==In||P.minFilter!==Wt&&P.minFilter!==Kt}function g(P,w){return P.generateMipmaps&&w&&P.minFilter!==Wt&&P.minFilter!==Kt}function S(P){t.generateMipmap(P)}function A(P,w,K,Q,ae=!1){if(o===!1)return w;if(P!==null){if(t[P]!==void 0)return t[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ne=w;if(w===t.RED&&(K===t.FLOAT&&(ne=t.R32F),K===t.HALF_FLOAT&&(ne=t.R16F),K===t.UNSIGNED_BYTE&&(ne=t.R8)),w===t.RED_INTEGER&&(K===t.UNSIGNED_BYTE&&(ne=t.R8UI),K===t.UNSIGNED_SHORT&&(ne=t.R16UI),K===t.UNSIGNED_INT&&(ne=t.R32UI),K===t.BYTE&&(ne=t.R8I),K===t.SHORT&&(ne=t.R16I),K===t.INT&&(ne=t.R32I)),w===t.RG&&(K===t.FLOAT&&(ne=t.RG32F),K===t.HALF_FLOAT&&(ne=t.RG16F),K===t.UNSIGNED_BYTE&&(ne=t.RG8)),w===t.RG_INTEGER&&(K===t.UNSIGNED_BYTE&&(ne=t.RG8UI),K===t.UNSIGNED_SHORT&&(ne=t.RG16UI),K===t.UNSIGNED_INT&&(ne=t.RG32UI),K===t.BYTE&&(ne=t.RG8I),K===t.SHORT&&(ne=t.RG16I),K===t.INT&&(ne=t.RG32I)),w===t.RGBA){const ke=ae?gl:et.getTransfer(Q);K===t.FLOAT&&(ne=t.RGBA32F),K===t.HALF_FLOAT&&(ne=t.RGBA16F),K===t.UNSIGNED_BYTE&&(ne=ke===st?t.SRGB8_ALPHA8:t.RGBA8),K===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),K===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function b(P,w,K){return g(P,K)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==Kt?Math.log2(Math.max(w.width,w.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?w.mipmaps.length:1}function E(P){return P===Wt||P===kh||P===Vs?t.NEAREST:t.LINEAR}function L(P){const w=P.target;w.removeEventListener("dispose",L),M(w),w.isVideoTexture&&h.delete(w)}function z(P){const w=P.target;w.removeEventListener("dispose",z),ee(w)}function M(P){const w=i.get(P);if(w.__webglInit===void 0)return;const K=P.source,Q=x.get(K);if(Q){const ae=Q[w.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&R(P),Object.keys(Q).length===0&&x.delete(K)}i.remove(P)}function R(P){const w=i.get(P);t.deleteTexture(w.__webglTexture);const K=P.source,Q=x.get(K);delete Q[w.__cacheKey],a.memory.textures--}function ee(P){const w=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(w.__webglFramebuffer[Q]))for(let ae=0;ae<w.__webglFramebuffer[Q].length;ae++)t.deleteFramebuffer(w.__webglFramebuffer[Q][ae]);else t.deleteFramebuffer(w.__webglFramebuffer[Q]);w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer[Q])}else{if(Array.isArray(w.__webglFramebuffer))for(let Q=0;Q<w.__webglFramebuffer.length;Q++)t.deleteFramebuffer(w.__webglFramebuffer[Q]);else t.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&t.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&t.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Q=0;Q<w.__webglColorRenderbuffer.length;Q++)w.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(w.__webglColorRenderbuffer[Q]);w.__webglDepthRenderbuffer&&t.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=P.textures;for(let Q=0,ae=K.length;Q<ae;Q++){const ne=i.get(K[Q]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(K[Q])}i.remove(P)}let Z=0;function D(){Z=0}function B(){const P=Z;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),Z+=1,P}function V(P){const w=[];return w.push(P.wrapS),w.push(P.wrapT),w.push(P.wrapR||0),w.push(P.magFilter),w.push(P.minFilter),w.push(P.anisotropy),w.push(P.internalFormat),w.push(P.format),w.push(P.type),w.push(P.generateMipmaps),w.push(P.premultiplyAlpha),w.push(P.flipY),w.push(P.unpackAlignment),w.push(P.colorSpace),w.join()}function te(P,w){const K=i.get(P);if(P.isVideoTexture&&Ce(P),P.isRenderTargetTexture===!1&&P.version>0&&K.__version!==P.version){const Q=P.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(K,P,w);return}}n.bindTexture(t.TEXTURE_2D,K.__webglTexture,t.TEXTURE0+w)}function U(P,w){const K=i.get(P);if(P.version>0&&K.__version!==P.version){J(K,P,w);return}n.bindTexture(t.TEXTURE_2D_ARRAY,K.__webglTexture,t.TEXTURE0+w)}function H(P,w){const K=i.get(P);if(P.version>0&&K.__version!==P.version){J(K,P,w);return}n.bindTexture(t.TEXTURE_3D,K.__webglTexture,t.TEXTURE0+w)}function N(P,w){const K=i.get(P);if(P.version>0&&K.__version!==P.version){ie(K,P,w);return}n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture,t.TEXTURE0+w)}const C={[ed]:t.REPEAT,[In]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},Y={[Wt]:t.NEAREST,[kh]:t.NEAREST_MIPMAP_NEAREST,[Vs]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[_c]:t.LINEAR_MIPMAP_NEAREST,[xr]:t.LINEAR_MIPMAP_LINEAR},se={[lS]:t.NEVER,[pS]:t.ALWAYS,[cS]:t.LESS,[Ug]:t.LEQUAL,[uS]:t.EQUAL,[hS]:t.GEQUAL,[dS]:t.GREATER,[fS]:t.NOTEQUAL};function F(P,w,K){if(w.type===oi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Kt||w.magFilter===_c||w.magFilter===Vs||w.magFilter===xr||w.minFilter===Kt||w.minFilter===_c||w.minFilter===Vs||w.minFilter===xr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),K?(t.texParameteri(P,t.TEXTURE_WRAP_S,C[w.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,C[w.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,C[w.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,Y[w.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,Y[w.minFilter])):(t.texParameteri(P,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(P,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(w.wrapS!==In||w.wrapT!==In)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(P,t.TEXTURE_MAG_FILTER,E(w.magFilter)),t.texParameteri(P,t.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==Wt&&w.minFilter!==Kt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,se[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Wt||w.minFilter!==Vs&&w.minFilter!==xr||w.type===oi&&e.has("OES_texture_float_linear")===!1||o===!1&&w.type===Ra&&e.has("OES_texture_half_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function $(P,w){let K=!1;P.__webglInit===void 0&&(P.__webglInit=!0,w.addEventListener("dispose",L));const Q=w.source;let ae=x.get(Q);ae===void 0&&(ae={},x.set(Q,ae));const ne=V(w);if(ne!==P.__cacheKey){ae[ne]===void 0&&(ae[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,K=!0),ae[ne].usedTimes++;const ke=ae[P.__cacheKey];ke!==void 0&&(ae[P.__cacheKey].usedTimes--,ke.usedTimes===0&&R(w)),P.__cacheKey=ne,P.__webglTexture=ae[ne].texture}return K}function J(P,w,K){let Q=t.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Q=t.TEXTURE_3D);const ae=$(P,w),ne=w.source;n.bindTexture(Q,P.__webglTexture,t.TEXTURE0+K);const ke=i.get(ne);if(ne.version!==ke.__version||ae===!0){n.activeTexture(t.TEXTURE0+K);const Re=et.getPrimaries(et.workingColorSpace),de=w.colorSpace===Ni?null:et.getPrimaries(w.colorSpace),pe=w.colorSpace===Ni||Re===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,pe);const Ie=v(w)&&d(w.image)===!1;let ce=m(w.image,Ie,!1,r.maxTextureSize);ce=De(w,ce);const pt=d(ce)||o,Ve=s.convert(w.format,w.colorSpace);let Ae=s.convert(w.type),Me=A(w.internalFormat,Ve,Ae,w.colorSpace,w.isVideoTexture);F(Q,w,pt);let be;const $e=w.mipmaps,Oe=o&&w.isVideoTexture!==!0&&Me!==Dg,ot=ke.__version===void 0||ae===!0,I=ne.dataReady,me=b(w,ce,pt);if(w.isDepthTexture)Me=t.DEPTH_COMPONENT,o?w.type===oi?Me=t.DEPTH_COMPONENT32F:w.type===Li?Me=t.DEPTH_COMPONENT24:w.type===_r?Me=t.DEPTH24_STENCIL8:Me=t.DEPTH_COMPONENT16:w.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===yr&&Me===t.DEPTH_COMPONENT&&w.type!==rf&&w.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Li,Ae=s.convert(w.type)),w.format===As&&Me===t.DEPTH_COMPONENT&&(Me=t.DEPTH_STENCIL,w.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=_r,Ae=s.convert(w.type))),ot&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Me,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Me,ce.width,ce.height,0,Ve,Ae,null));else if(w.isDataTexture)if($e.length>0&&pt){Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,me,Me,$e[0].width,$e[0].height);for(let W=0,fe=$e.length;W<fe;W++)be=$e[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,be.width,be.height,Ve,Ae,be.data):n.texImage2D(t.TEXTURE_2D,W,Me,be.width,be.height,0,Ve,Ae,be.data);w.generateMipmaps=!1}else Oe?(ot&&n.texStorage2D(t.TEXTURE_2D,me,Me,ce.width,ce.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,Ve,Ae,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Me,ce.width,ce.height,0,Ve,Ae,ce.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Oe&&ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,$e[0].width,$e[0].height,ce.depth);for(let W=0,fe=$e.length;W<fe;W++)be=$e[W],w.format!==kn?Ve!==null?Oe?I&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,ce.depth,Ve,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,Me,be.width,be.height,ce.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,be.width,be.height,ce.depth,Ve,Ae,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,Me,be.width,be.height,ce.depth,0,Ve,Ae,be.data)}else{Oe&&ot&&n.texStorage2D(t.TEXTURE_2D,me,Me,$e[0].width,$e[0].height);for(let W=0,fe=$e.length;W<fe;W++)be=$e[W],w.format!==kn?Ve!==null?Oe?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,be.width,be.height,Ve,be.data):n.compressedTexImage2D(t.TEXTURE_2D,W,Me,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,be.width,be.height,Ve,Ae,be.data):n.texImage2D(t.TEXTURE_2D,W,Me,be.width,be.height,0,Ve,Ae,be.data)}else if(w.isDataArrayTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_2D_ARRAY,me,Me,ce.width,ce.height,ce.depth),I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ve,Ae,ce.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,ce.width,ce.height,ce.depth,0,Ve,Ae,ce.data);else if(w.isData3DTexture)Oe?(ot&&n.texStorage3D(t.TEXTURE_3D,me,Me,ce.width,ce.height,ce.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ve,Ae,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Me,ce.width,ce.height,ce.depth,0,Ve,Ae,ce.data);else if(w.isFramebufferTexture){if(ot)if(Oe)n.texStorage2D(t.TEXTURE_2D,me,Me,ce.width,ce.height);else{let W=ce.width,fe=ce.height;for(let xe=0;xe<me;xe++)n.texImage2D(t.TEXTURE_2D,xe,Me,W,fe,0,Ve,Ae,null),W>>=1,fe>>=1}}else if($e.length>0&&pt){if(Oe&&ot){const W=Ze($e[0]);n.texStorage2D(t.TEXTURE_2D,me,Me,W.width,W.height)}for(let W=0,fe=$e.length;W<fe;W++)be=$e[W],Oe?I&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,Ve,Ae,be):n.texImage2D(t.TEXTURE_2D,W,Me,Ve,Ae,be);w.generateMipmaps=!1}else if(Oe){if(ot){const W=Ze(ce);n.texStorage2D(t.TEXTURE_2D,me,Me,W.width,W.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ve,Ae,ce)}else n.texImage2D(t.TEXTURE_2D,0,Me,Ve,Ae,ce);g(w,pt)&&S(Q),ke.__version=ne.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function ie(P,w,K){if(w.image.length!==6)return;const Q=$(P,w),ae=w.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+K);const ne=i.get(ae);if(ae.version!==ne.__version||Q===!0){n.activeTexture(t.TEXTURE0+K);const ke=et.getPrimaries(et.workingColorSpace),Re=w.colorSpace===Ni?null:et.getPrimaries(w.colorSpace),de=w.colorSpace===Ni||ke===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const pe=w.isCompressedTexture||w.image[0].isCompressedTexture,Ie=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let W=0;W<6;W++)!pe&&!Ie?ce[W]=m(w.image[W],!1,!0,r.maxCubemapSize):ce[W]=Ie?w.image[W].image:w.image[W],ce[W]=De(w,ce[W]);const pt=ce[0],Ve=d(pt)||o,Ae=s.convert(w.format,w.colorSpace),Me=s.convert(w.type),be=A(w.internalFormat,Ae,Me,w.colorSpace),$e=o&&w.isVideoTexture!==!0,Oe=ne.__version===void 0||Q===!0,ot=ae.dataReady;let I=b(w,pt,Ve);F(t.TEXTURE_CUBE_MAP,w,Ve);let me;if(pe){$e&&Oe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,I,be,pt.width,pt.height);for(let W=0;W<6;W++){me=ce[W].mipmaps;for(let fe=0;fe<me.length;fe++){const xe=me[fe];w.format!==kn?Ae!==null?$e?ot&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe,0,0,xe.width,xe.height,Ae,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe,0,0,xe.width,xe.height,Ae,Me,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe,be,xe.width,xe.height,0,Ae,Me,xe.data)}}}else{if(me=w.mipmaps,$e&&Oe){me.length>0&&I++;const W=Ze(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,I,be,W.width,W.height)}for(let W=0;W<6;W++)if(Ie){$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,ce[W].width,ce[W].height,Ae,Me,ce[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,be,ce[W].width,ce[W].height,0,Ae,Me,ce[W].data);for(let fe=0;fe<me.length;fe++){const Xe=me[fe].image[W].image;$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe+1,0,0,Xe.width,Xe.height,Ae,Me,Xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe+1,be,Xe.width,Xe.height,0,Ae,Me,Xe.data)}}else{$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,Ae,Me,ce[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,be,Ae,Me,ce[W]);for(let fe=0;fe<me.length;fe++){const xe=me[fe];$e?ot&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe+1,0,0,Ae,Me,xe.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,fe+1,be,Ae,Me,xe.image[W])}}}g(w,Ve)&&S(t.TEXTURE_CUBE_MAP),ne.__version=ae.version,w.onUpdate&&w.onUpdate(w)}P.__version=w.version}function oe(P,w,K,Q,ae,ne){const ke=s.convert(K.format,K.colorSpace),Re=s.convert(K.type),de=A(K.internalFormat,ke,Re,K.colorSpace);if(!i.get(w).__hasExternalTextures){const Ie=Math.max(1,w.width>>ne),ce=Math.max(1,w.height>>ne);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,ne,de,Ie,ce,w.depth,0,ke,Re,null):n.texImage2D(ae,ne,de,Ie,ce,0,ke,Re,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),Le(w)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ae,i.get(K).__webglTexture,0,Se(w)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ae,i.get(K).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(P,w,K){if(t.bindRenderbuffer(t.RENDERBUFFER,P),w.depthBuffer&&!w.stencilBuffer){let Q=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(K||Le(w)){const ae=w.depthTexture;ae&&ae.isDepthTexture&&(ae.type===oi?Q=t.DEPTH_COMPONENT32F:ae.type===Li&&(Q=t.DEPTH_COMPONENT24));const ne=Se(w);Le(w)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Q,w.width,w.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Q,w.width,w.height)}else t.renderbufferStorage(t.RENDERBUFFER,Q,w.width,w.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,P)}else if(w.depthBuffer&&w.stencilBuffer){const Q=Se(w);K&&Le(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,w.width,w.height):Le(w)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Q,t.DEPTH24_STENCIL8,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,P)}else{const Q=w.textures;for(let ae=0;ae<Q.length;ae++){const ne=Q[ae],ke=s.convert(ne.format,ne.colorSpace),Re=s.convert(ne.type),de=A(ne.internalFormat,ke,Re,ne.colorSpace),pe=Se(w);K&&Le(w)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,de,w.width,w.height):Le(w)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,de,w.width,w.height):t.renderbufferStorage(t.RENDERBUFFER,de,w.width,w.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(P,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),te(w.depthTexture,0);const Q=i.get(w.depthTexture).__webglTexture,ae=Se(w);if(w.depthTexture.format===yr)Le(w)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(w.depthTexture.format===As)Le(w)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function ge(P){const w=i.get(P),K=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,P)}else if(K){w.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer[Q]),w.__webglDepthbuffer[Q]=t.createRenderbuffer(),le(w.__webglDepthbuffer[Q],P,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=t.createRenderbuffer(),le(w.__webglDepthbuffer,P,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(P,w,K){const Q=i.get(P);w!==void 0&&oe(Q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),K!==void 0&&ge(P)}function qe(P){const w=P.texture,K=i.get(P),Q=i.get(w);P.addEventListener("dispose",z);const ae=P.textures,ne=P.isWebGLCubeRenderTarget===!0,ke=ae.length>1,Re=d(P)||o;if(ke||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=w.version,a.memory.textures++),ne){K.__webglFramebuffer=[];for(let de=0;de<6;de++)if(o&&w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[de]=[];for(let pe=0;pe<w.mipmaps.length;pe++)K.__webglFramebuffer[de][pe]=t.createFramebuffer()}else K.__webglFramebuffer[de]=t.createFramebuffer()}else{if(o&&w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let de=0;de<w.mipmaps.length;de++)K.__webglFramebuffer[de]=t.createFramebuffer()}else K.__webglFramebuffer=t.createFramebuffer();if(ke)if(r.drawBuffers)for(let de=0,pe=ae.length;de<pe;de++){const Ie=i.get(ae[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&P.samples>0&&Le(P)===!1){K.__webglMultisampledFramebuffer=t.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const pe=ae[de];K.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,K.__webglColorRenderbuffer[de]);const Ie=s.convert(pe.format,pe.colorSpace),ce=s.convert(pe.type),pt=A(pe.internalFormat,Ie,ce,pe.colorSpace,P.isXRRenderTarget===!0),Ve=Se(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,pt,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,K.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(K.__webglDepthRenderbuffer=t.createRenderbuffer(),le(K.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),F(t.TEXTURE_CUBE_MAP,w,Re);for(let de=0;de<6;de++)if(o&&w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)oe(K.__webglFramebuffer[de][pe],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,pe);else oe(K.__webglFramebuffer[de],P,w,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);g(w,Re)&&S(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ke){for(let de=0,pe=ae.length;de<pe;de++){const Ie=ae[de],ce=i.get(Ie);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),F(t.TEXTURE_2D,Ie,Re),oe(K.__webglFramebuffer,P,Ie,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),g(Ie,Re)&&S(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(o?de=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(de,Q.__webglTexture),F(de,w,Re),o&&w.mipmaps&&w.mipmaps.length>0)for(let pe=0;pe<w.mipmaps.length;pe++)oe(K.__webglFramebuffer[pe],P,w,t.COLOR_ATTACHMENT0,de,pe);else oe(K.__webglFramebuffer,P,w,t.COLOR_ATTACHMENT0,de,0);g(w,Re)&&S(de),n.unbindTexture()}P.depthBuffer&&ge(P)}function ue(P){const w=d(P)||o,K=P.textures;for(let Q=0,ae=K.length;Q<ae;Q++){const ne=K[Q];if(g(ne,w)){const ke=P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Re=i.get(ne).__webglTexture;n.bindTexture(ke,Re),S(ke),n.unbindTexture()}}}function Ee(P){if(o&&P.samples>0&&Le(P)===!1){const w=P.textures,K=P.width,Q=P.height;let ae=t.COLOR_BUFFER_BIT;const ne=[],ke=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Re=i.get(P),de=w.length>1;if(de)for(let pe=0;pe<w.length;pe++)n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let pe=0;pe<w.length;pe++){ne.push(t.COLOR_ATTACHMENT0+pe),P.depthBuffer&&ne.push(ke);const Ie=Re.__ignoreDepthValues!==void 0?Re.__ignoreDepthValues:!1;if(Ie===!1&&(P.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),de&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Re.__webglColorRenderbuffer[pe]),Ie===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[ke]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[ke])),de){const ce=i.get(w[pe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ce,0)}t.blitFramebuffer(0,0,K,Q,0,0,K,Q,ae,t.NEAREST),u&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let pe=0;pe<w.length;pe++){n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Re.__webglColorRenderbuffer[pe]);const Ie=i.get(w[pe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Re.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,Ie,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}}function Se(P){return Math.min(r.maxSamples,P.samples)}function Le(P){const w=i.get(P);return o&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ce(P){const w=a.render.frame;h.get(P)!==w&&(h.set(P,w),P.update())}function De(P,w){const K=P.colorSpace,Q=P.format,ae=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===nd||K!==Qi&&K!==Ni&&(et.getTransfer(K)===st?o===!1?e.has("EXT_sRGB")===!0&&Q===kn?(P.format=nd,P.minFilter=Kt,P.generateMipmaps=!1):w=kg.sRGBToLinear(w):(Q!==kn||ae!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Ze(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(f.width=P.naturalWidth||P.width,f.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(f.width=P.displayWidth,f.height=P.displayHeight):(f.width=P.width,f.height=P.height),f}this.allocateTextureUnit=B,this.resetTextureUnits=D,this.setTexture2D=te,this.setTexture2DArray=U,this.setTexture3D=H,this.setTextureCube=N,this.rebindTextures=k,this.setupRenderTarget=qe,this.updateRenderTargetMipmap=ue,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=ge,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Le}function _E(t,e,n){const i=n.isWebGL2;function r(s,a=Ni){let o;const c=et.getTransfer(a);if(s===Gi)return t.UNSIGNED_BYTE;if(s===Cg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ng)return t.UNSIGNED_SHORT_5_5_5_1;if(s===Ky)return t.BYTE;if(s===Zy)return t.SHORT;if(s===rf)return t.UNSIGNED_SHORT;if(s===Ag)return t.INT;if(s===Li)return t.UNSIGNED_INT;if(s===oi)return t.FLOAT;if(s===Ra)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Qy)return t.ALPHA;if(s===kn)return t.RGBA;if(s===Jy)return t.LUMINANCE;if(s===eS)return t.LUMINANCE_ALPHA;if(s===yr)return t.DEPTH_COMPONENT;if(s===As)return t.DEPTH_STENCIL;if(s===nd)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===tS)return t.RED;if(s===Rg)return t.RED_INTEGER;if(s===nS)return t.RG;if(s===Pg)return t.RG_INTEGER;if(s===Lg)return t.RGBA_INTEGER;if(s===yc||s===Sc||s===Mc||s===bc)if(c===st)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===yc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===yc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Sc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Mc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Fh||s===Oh||s===jh||s===zh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Fh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===zh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Dg)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Bh||s===Hh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Bh)return c===st?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Hh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Gh||s===Vh||s===Wh||s===Xh||s===qh||s===$h||s===Yh||s===Kh||s===Zh||s===Qh||s===Jh||s===ep||s===tp||s===np)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Gh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Vh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Wh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Xh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===qh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$h)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Yh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Zh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Qh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Jh)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ep)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===tp)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===np)return c===st?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===wc||s===ip||s===rp)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===wc)return c===st?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===ip)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rp)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===iS||s===sp||s===ap||s===op)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===wc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===sp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ap)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===op)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_r?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class yE extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SE={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],p=f.position.distanceTo(h.position),x=.02,y=.005;u.inputState.pinching&&p>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SE)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ea;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bE=`
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

}`;class wE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new $i({extensions:{fragDepth:!0},vertexShader:ME,fragmentShader:bE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new Bl(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class EE extends Ds{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,f=null,h=null,p=null,x=null,y=null;const _=new wE,m=n.getContextAttributes();let d=null,v=null;const g=[],S=[],A=new Ye;let b=null;const E=new Mn;E.layers.enable(1),E.viewport=new Pt;const L=new Mn;L.layers.enable(2),L.viewport=new Pt;const z=[E,L],M=new yE;M.layers.enable(1),M.layers.enable(2);let R=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let $=g[F];return $===void 0&&($=new Zc,g[F]=$),$.getTargetRaySpace()},this.getControllerGrip=function(F){let $=g[F];return $===void 0&&($=new Zc,g[F]=$),$.getGripSpace()},this.getHand=function(F){let $=g[F];return $===void 0&&($=new Zc,g[F]=$),$.getHandSpace()};function Z(F){const $=S.indexOf(F.inputSource);if($===-1)return;const J=g[$];J!==void 0&&(J.update(F.inputSource,F.frame,u||a),J.dispatchEvent({type:F.type,data:F.inputSource}))}function D(){r.removeEventListener("select",Z),r.removeEventListener("selectstart",Z),r.removeEventListener("selectend",Z),r.removeEventListener("squeeze",Z),r.removeEventListener("squeezestart",Z),r.removeEventListener("squeezeend",Z),r.removeEventListener("end",D),r.removeEventListener("inputsourceschange",B);for(let F=0;F<g.length;F++){const $=S[F];$!==null&&(S[F]=null,g[F].disconnect($))}R=null,ee=null,_.reset(),e.setRenderTarget(d),x=null,p=null,h=null,r=null,v=null,se.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){o=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",Z),r.addEventListener("selectstart",Z),r.addEventListener("selectend",Z),r.addEventListener("squeeze",Z),r.addEventListener("squeezestart",Z),r.addEventListener("squeezeend",Z),r.addEventListener("end",D),r.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,n,$),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),v=new Tr(x.framebufferWidth,x.framebufferHeight,{format:kn,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,J=null,ie=null;m.depth&&(ie=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,$=m.stencil?As:yr,J=m.stencil?_r:Li);const oe={colorFormat:n.RGBA8,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(r,n),p=h.createProjectionLayer(oe),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Tr(p.textureWidth,p.textureHeight,{format:kn,type:Gi,depthTexture:new Yg(p.textureWidth,p.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const le=e.properties.get(v);le.__ignoreDepthValues=p.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function B(F){for(let $=0;$<F.removed.length;$++){const J=F.removed[$],ie=S.indexOf(J);ie>=0&&(S[ie]=null,g[ie].disconnect(J))}for(let $=0;$<F.added.length;$++){const J=F.added[$];let ie=S.indexOf(J);if(ie===-1){for(let le=0;le<g.length;le++)if(le>=S.length){S.push(J),ie=le;break}else if(S[le]===null){S[le]=J,ie=le;break}if(ie===-1)break}const oe=g[ie];oe&&oe.connect(J)}}const V=new j,te=new j;function U(F,$,J){V.setFromMatrixPosition($.matrixWorld),te.setFromMatrixPosition(J.matrixWorld);const ie=V.distanceTo(te),oe=$.projectionMatrix.elements,le=J.projectionMatrix.elements,Te=oe[14]/(oe[10]-1),ge=oe[14]/(oe[10]+1),k=(oe[9]+1)/oe[5],qe=(oe[9]-1)/oe[5],ue=(oe[8]-1)/oe[0],Ee=(le[8]+1)/le[0],Se=Te*ue,Le=Te*Ee,Ce=ie/(-ue+Ee),De=Ce*-ue;$.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(De),F.translateZ(Ce),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const Ze=Te+Ce,P=ge+Ce,w=Se-De,K=Le+(ie-De),Q=k*ge/P*Ze,ae=qe*ge/P*Ze;F.projectionMatrix.makePerspective(w,K,Q,ae,Ze,P),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function H(F,$){$===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices($.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;_.texture!==null&&(F.near=_.depthNear,F.far=_.depthFar),M.near=L.near=E.near=F.near,M.far=L.far=E.far=F.far,(R!==M.near||ee!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,ee=M.far,E.near=R,E.far=ee,L.near=R,L.far=ee,E.updateProjectionMatrix(),L.updateProjectionMatrix(),F.updateProjectionMatrix());const $=F.parent,J=M.cameras;H(M,$);for(let ie=0;ie<J.length;ie++)H(J[ie],$);J.length===2?U(M,E,L):M.projectionMatrix.copy(E.projectionMatrix),N(F,M,$)};function N(F,$,J){J===null?F.matrix.copy($.matrixWorld):(F.matrix.copy(J.matrixWorld),F.matrix.invert(),F.matrix.multiply($.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy($.projectionMatrix),F.projectionMatrixInverse.copy($.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=id*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(p===null&&x===null))return c},this.setFoveation=function(F){c=F,p!==null&&(p.fixedFoveation=F),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null};let C=null;function Y(F,$){if(f=$.getViewerPose(u||a),y=$,f!==null){const J=f.views;x!==null&&(e.setRenderTargetFramebuffer(v,x.framebuffer),e.setRenderTarget(v));let ie=!1;J.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let le=0;le<J.length;le++){const Te=J[le];let ge=null;if(x!==null)ge=x.getViewport(Te);else{const qe=h.getViewSubImage(p,Te);ge=qe.viewport,le===0&&(e.setRenderTargetTextures(v,qe.colorTexture,p.ignoreDepthValues?void 0:qe.depthStencilTexture),e.setRenderTarget(v))}let k=z[le];k===void 0&&(k=new Mn,k.layers.enable(le),k.viewport=new Pt,z[le]=k),k.matrix.fromArray(Te.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(Te.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(ge.x,ge.y,ge.width,ge.height),le===0&&(M.matrix.copy(k.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(k)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")){const le=h.getDepthInformation(J[0]);le&&le.isValid&&le.texture&&_.init(e,le,r.renderState)}}for(let J=0;J<g.length;J++){const ie=S[J],oe=g[J];ie!==null&&oe!==void 0&&oe.update(ie,$,u||a)}_.render(e,M),C&&C(F,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),y=null}const se=new $g;se.setAnimationLoop(Y),this.setAnimationLoop=function(F){C=F},this.dispose=function(){}}}const ar=new xi,TE=new yt;function AE(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Vg(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,g,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),p(m,d),d.isMeshPhysicalMaterial&&x(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),y(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,v,g):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),g=v.envMap,S=v.envMapRotation;if(g&&(m.envMap.value=g,ar.copy(S),ar.x*=-1,ar.y*=-1,ar.z*=-1,g.isCubeTexture&&g.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),m.envMapRotation.value.setFromMatrix4(TE.makeRotationFromEuler(ar)),m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const A=t._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*A,n(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,v,g){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=g*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function p(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function x(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===rn&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function CE(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,g){const S=g.program;i.uniformBlockBinding(v,S)}function u(v,g){let S=r[v.id];S===void 0&&(y(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",m));const A=g.program;i.updateUBOMapping(v,A);const b=e.render.frame;s[v.id]!==b&&(p(v),s[v.id]=b)}function f(v){const g=h();v.__bindingPointIndex=g;const S=t.createBuffer(),A=v.__size,b=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,A,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,g,S),S}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const g=r[v.id],S=v.uniforms,A=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,g);for(let b=0,E=S.length;b<E;b++){const L=Array.isArray(S[b])?S[b]:[S[b]];for(let z=0,M=L.length;z<M;z++){const R=L[z];if(x(R,b,z,A)===!0){const ee=R.__offset,Z=Array.isArray(R.value)?R.value:[R.value];let D=0;for(let B=0;B<Z.length;B++){const V=Z[B],te=_(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,t.bufferSubData(t.UNIFORM_BUFFER,ee+D,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,D),D+=te.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,ee,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(v,g,S,A){const b=v.value,E=g+"_"+S;if(A[E]===void 0)return typeof b=="number"||typeof b=="boolean"?A[E]=b:A[E]=b.clone(),!0;{const L=A[E];if(typeof b=="number"||typeof b=="boolean"){if(L!==b)return A[E]=b,!0}else if(L.equals(b)===!1)return L.copy(b),!0}return!1}function y(v){const g=v.uniforms;let S=0;const A=16;for(let E=0,L=g.length;E<L;E++){const z=Array.isArray(g[E])?g[E]:[g[E]];for(let M=0,R=z.length;M<R;M++){const ee=z[M],Z=Array.isArray(ee.value)?ee.value:[ee.value];for(let D=0,B=Z.length;D<B;D++){const V=Z[D],te=_(V),U=S%A;U!==0&&A-U<te.boundary&&(S+=A-U),ee.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=S,S+=te.storage}}}const b=S%A;return b>0&&(S+=A-b),v.__size=S,v.__cache={},this}function _(v){const g={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const S=a.indexOf(g.__bindingPointIndex);a.splice(S,1),t.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class t0{constructor(e={}){const{canvas:n=xS(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let p;i!==null?p=i.getContextAttributes().alpha:p=a;const x=new Uint32Array(4),y=new Int32Array(4);let _=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wn,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const g=this;let S=!1,A=0,b=0,E=null,L=-1,z=null;const M=new Pt,R=new Pt;let ee=null;const Z=new Qe(0);let D=0,B=n.width,V=n.height,te=1,U=null,H=null;const N=new Pt(0,0,B,V),C=new Pt(0,0,B,V);let Y=!1;const se=new qg;let F=!1,$=!1,J=null;const ie=new yt,oe=new Ye,le=new j,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ge(){return E===null?te:1}let k=i;function qe(T,O){for(let X=0;X<T.length;X++){const q=T[X],G=n.getContext(q,O);if(G!==null)return G}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nf}`),n.addEventListener("webglcontextlost",ot,!1),n.addEventListener("webglcontextrestored",I,!1),n.addEventListener("webglcontextcreationerror",me,!1),k===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),k=qe(O,T),k===null)throw qe(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let ue,Ee,Se,Le,Ce,De,Ze,P,w,K,Q,ae,ne,ke,Re,de,pe,Ie,ce,pt,Ve,Ae,Me,be;function $e(){ue=new Ub(k),Ee=new Ab(k,ue,e),ue.init(Ee),Ae=new _E(k,ue,Ee),Se=new gE(k,ue,Ee),Le=new Fb(k),Ce=new iE,De=new vE(k,ue,Se,Ce,Ee,Ae,Le),Ze=new Nb(g),P=new Db(g),w=new HS(k,Ee),Me=new Eb(k,ue,w,Ee),K=new Ib(k,w,Le,Me),Q=new Bb(k,K,w,Le),ce=new zb(k,Ee,De),de=new Cb(Ce),ae=new nE(g,Ze,P,ue,Ee,Me,de),ne=new AE(g,Ce),ke=new sE,Re=new dE(ue,Ee),Ie=new wb(g,Ze,P,Se,Q,p,c),pe=new xE(g,Q,Ee),be=new CE(k,Le,Ee,Se),pt=new Tb(k,ue,Le,Ee),Ve=new kb(k,ue,Le,Ee),Le.programs=ae.programs,g.capabilities=Ee,g.extensions=ue,g.properties=Ce,g.renderLists=ke,g.shadowMap=pe,g.state=Se,g.info=Le}$e();const Oe=new EE(g,k);this.xr=Oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=ue.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=ue.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(B,V,!1))},this.getSize=function(T){return T.set(B,V)},this.setSize=function(T,O,X=!0){if(Oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,V=O,n.width=Math.floor(T*te),n.height=Math.floor(O*te),X===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(B*te,V*te).floor()},this.setDrawingBufferSize=function(T,O,X){B=T,V=O,te=X,n.width=Math.floor(T*X),n.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(M)},this.getViewport=function(T){return T.copy(N)},this.setViewport=function(T,O,X,q){T.isVector4?N.set(T.x,T.y,T.z,T.w):N.set(T,O,X,q),Se.viewport(M.copy(N).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(C)},this.setScissor=function(T,O,X,q){T.isVector4?C.set(T.x,T.y,T.z,T.w):C.set(T,O,X,q),Se.scissor(R.copy(C).multiplyScalar(te).round())},this.getScissorTest=function(){return Y},this.setScissorTest=function(T){Se.setScissorTest(Y=T)},this.setOpaqueSort=function(T){U=T},this.setTransparentSort=function(T){H=T},this.getClearColor=function(T){return T.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(T=!0,O=!0,X=!0){let q=0;if(T){let G=!1;if(E!==null){const ve=E.texture.format;G=ve===Lg||ve===Pg||ve===Rg}if(G){const ve=E.texture.type,we=ve===Gi||ve===Li||ve===rf||ve===_r||ve===Cg||ve===Ng,Pe=Ie.getClearColor(),Ue=Ie.getClearAlpha(),Ge=Pe.r,Fe=Pe.g,je=Pe.b;we?(x[0]=Ge,x[1]=Fe,x[2]=je,x[3]=Ue,k.clearBufferuiv(k.COLOR,0,x)):(y[0]=Ge,y[1]=Fe,y[2]=je,y[3]=Ue,k.clearBufferiv(k.COLOR,0,y))}else q|=k.COLOR_BUFFER_BIT}O&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ot,!1),n.removeEventListener("webglcontextrestored",I,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ke.dispose(),Re.dispose(),Ce.dispose(),Ze.dispose(),P.dispose(),Q.dispose(),Me.dispose(),be.dispose(),ae.dispose(),Oe.dispose(),Oe.removeEventListener("sessionstart",gn),Oe.removeEventListener("sessionend",nt),J&&(J.dispose(),J=null),Ht.stop()};function ot(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Le.autoReset,O=pe.enabled,X=pe.autoUpdate,q=pe.needsUpdate,G=pe.type;$e(),Le.autoReset=T,pe.enabled=O,pe.autoUpdate=X,pe.needsUpdate=q,pe.type=G}function me(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function W(T){const O=T.target;O.removeEventListener("dispose",W),fe(O)}function fe(T){xe(T),Ce.remove(T)}function xe(T){const O=Ce.get(T).programs;O!==void 0&&(O.forEach(function(X){ae.releaseProgram(X)}),T.isShaderMaterial&&ae.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,q,G,ve){O===null&&(O=Te);const we=G.isMesh&&G.matrixWorld.determinant()<0,Pe=r0(T,O,X,q,G);Se.setMaterial(q,we);let Ue=X.index,Ge=1;if(q.wireframe===!0){if(Ue=K.getWireframeAttribute(X),Ue===void 0)return;Ge=2}const Fe=X.drawRange,je=X.attributes.position;let xt=Fe.start*Ge,on=(Fe.start+Fe.count)*Ge;ve!==null&&(xt=Math.max(xt,ve.start*Ge),on=Math.min(on,(ve.start+ve.count)*Ge)),Ue!==null?(xt=Math.max(xt,0),on=Math.min(on,Ue.count)):je!=null&&(xt=Math.max(xt,0),on=Math.min(on,je.count));const Et=on-xt;if(Et<0||Et===1/0)return;Me.setup(G,q,Pe,X,Ue);let Zn,ut=pt;if(Ue!==null&&(Zn=w.get(Ue),ut=Ve,ut.setIndex(Zn)),G.isMesh)q.wireframe===!0?(Se.setLineWidth(q.wireframeLinewidth*ge()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(G.isLine){let ze=q.linewidth;ze===void 0&&(ze=1),Se.setLineWidth(ze*ge()),G.isLineSegments?ut.setMode(k.LINES):G.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else G.isPoints?ut.setMode(k.POINTS):G.isSprite&&ut.setMode(k.TRIANGLES);if(G.isBatchedMesh)ut.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)ut.renderInstances(xt,Et,G.count);else if(X.isInstancedBufferGeometry){const ze=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Gl=Math.min(X.instanceCount,ze);ut.renderInstances(xt,Et,Gl)}else ut.render(xt,Et)};function Xe(T,O,X){T.transparent===!0&&T.side===ai&&T.forceSinglePass===!1?(T.side=rn,T.needsUpdate=!0,Ga(T,O,X),T.side=qi,T.needsUpdate=!0,Ga(T,O,X),T.side=ai):Ga(T,O,X)}this.compile=function(T,O,X=null){X===null&&(X=T),m=Re.get(X),m.init(),v.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),T!==X&&T.traverseVisible(function(G){G.isLight&&G.layers.test(O.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(g._useLegacyLights);const q=new Set;return T.traverse(function(G){const ve=G.material;if(ve)if(Array.isArray(ve))for(let we=0;we<ve.length;we++){const Pe=ve[we];Xe(Pe,X,G),q.add(Pe)}else Xe(ve,X,G),q.add(ve)}),v.pop(),m=null,q},this.compileAsync=function(T,O,X=null){const q=this.compile(T,O,X);return new Promise(G=>{function ve(){if(q.forEach(function(we){Ce.get(we).currentProgram.isReady()&&q.delete(we)}),q.size===0){G(T);return}setTimeout(ve,10)}ue.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let tt=null;function Nt(T){tt&&tt(T)}function gn(){Ht.stop()}function nt(){Ht.start()}const Ht=new $g;Ht.setAnimationLoop(Nt),typeof self<"u"&&Ht.setContext(self),this.setAnimationLoop=function(T){tt=T,Oe.setAnimationLoop(T),T===null?Ht.stop():Ht.start()},Oe.addEventListener("sessionstart",gn),Oe.addEventListener("sessionend",nt),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Oe.enabled===!0&&Oe.isPresenting===!0&&(Oe.cameraAutoUpdate===!0&&Oe.updateCamera(O),O=Oe.getCamera()),T.isScene===!0&&T.onBeforeRender(g,T,O,E),m=Re.get(T,v.length),m.init(),v.push(m),ie.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),se.setFromProjectionMatrix(ie),$=this.localClippingEnabled,F=de.init(this.clippingPlanes,$),_=ke.get(T,d.length),_.init(),d.push(_),Hn(T,O,0,g.sortObjects),_.finish(),g.sortObjects===!0&&_.sort(U,H),this.info.render.frame++,F===!0&&de.beginShadows();const X=m.state.shadowsArray;if(pe.render(X,T,O),F===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Oe.enabled===!1||Oe.isPresenting===!1||Oe.hasDepthSensing()===!1)&&Ie.render(_,T),m.setupLights(g._useLegacyLights),O.isArrayCamera){const q=O.cameras;for(let G=0,ve=q.length;G<ve;G++){const we=q[G];ff(_,T,we,we.viewport)}}else ff(_,T,O);E!==null&&(De.updateMultisampleRenderTarget(E),De.updateRenderTargetMipmap(E)),T.isScene===!0&&T.onAfterRender(g,T,O),Me.resetDefaultState(),L=-1,z=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Hn(T,O,X,q){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||se.intersectsSprite(T)){q&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ie);const we=Q.update(T),Pe=T.material;Pe.visible&&_.push(T,we,Pe,X,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||se.intersectsObject(T))){const we=Q.update(T),Pe=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),le.copy(we.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(ie)),Array.isArray(Pe)){const Ue=we.groups;for(let Ge=0,Fe=Ue.length;Ge<Fe;Ge++){const je=Ue[Ge],xt=Pe[je.materialIndex];xt&&xt.visible&&_.push(T,we,xt,X,le.z,je)}}else Pe.visible&&_.push(T,we,Pe,X,le.z,null)}}const ve=T.children;for(let we=0,Pe=ve.length;we<Pe;we++)Hn(ve[we],O,X,q)}function ff(T,O,X,q){const G=T.opaque,ve=T.transmissive,we=T.transparent;m.setupLightsView(X),F===!0&&de.setGlobalState(g.clippingPlanes,X),ve.length>0&&i0(G,ve,O,X),q&&Se.viewport(M.copy(q)),G.length>0&&Ha(G,O,X),ve.length>0&&Ha(ve,O,X),we.length>0&&Ha(we,O,X),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function i0(T,O,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const ve=Ee.isWebGL2;J===null&&(J=new Tr(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Ra:Gi,minFilter:xr,samples:ve?4:0})),g.getDrawingBufferSize(oe),ve?J.setSize(oe.x,oe.y):J.setSize(rd(oe.x),rd(oe.y));const we=g.getRenderTarget();g.setRenderTarget(J),g.getClearColor(Z),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const Pe=g.toneMapping;g.toneMapping=Hi,Ha(T,X,q),De.updateMultisampleRenderTarget(J),De.updateRenderTargetMipmap(J);let Ue=!1;for(let Ge=0,Fe=O.length;Ge<Fe;Ge++){const je=O[Ge],xt=je.object,on=je.geometry,Et=je.material,Zn=je.group;if(Et.side===ai&&xt.layers.test(q.layers)){const ut=Et.side;Et.side=rn,Et.needsUpdate=!0,hf(xt,X,q,on,Et,Zn),Et.side=ut,Et.needsUpdate=!0,Ue=!0}}Ue===!0&&(De.updateMultisampleRenderTarget(J),De.updateRenderTargetMipmap(J)),g.setRenderTarget(we),g.setClearColor(Z,D),g.toneMapping=Pe}function Ha(T,O,X){const q=O.isScene===!0?O.overrideMaterial:null;for(let G=0,ve=T.length;G<ve;G++){const we=T[G],Pe=we.object,Ue=we.geometry,Ge=q===null?we.material:q,Fe=we.group;Pe.layers.test(X.layers)&&hf(Pe,O,X,Ue,Ge,Fe)}}function hf(T,O,X,q,G,ve){T.onBeforeRender(g,O,X,q,G,ve),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(g,O,X,q,T,ve),G.transparent===!0&&G.side===ai&&G.forceSinglePass===!1?(G.side=rn,G.needsUpdate=!0,g.renderBufferDirect(X,O,q,G,T,ve),G.side=qi,G.needsUpdate=!0,g.renderBufferDirect(X,O,q,G,T,ve),G.side=ai):g.renderBufferDirect(X,O,q,G,T,ve),T.onAfterRender(g,O,X,q,G,ve)}function Ga(T,O,X){O.isScene!==!0&&(O=Te);const q=Ce.get(T),G=m.state.lights,ve=m.state.shadowsArray,we=G.state.version,Pe=ae.getParameters(T,G.state,ve,O,X),Ue=ae.getProgramCacheKey(Pe);let Ge=q.programs;q.environment=T.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(T.isMeshStandardMaterial?P:Ze).get(T.envMap||q.environment),q.envMapRotation=q.environment!==null&&T.envMap===null?O.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",W),Ge=new Map,q.programs=Ge);let Fe=Ge.get(Ue);if(Fe!==void 0){if(q.currentProgram===Fe&&q.lightsStateVersion===we)return mf(T,Pe),Fe}else Pe.uniforms=ae.getUniforms(T),T.onBuild(X,Pe,g),T.onBeforeCompile(Pe,g),Fe=ae.acquireProgram(Pe,Ue),Ge.set(Ue,Fe),q.uniforms=Pe.uniforms;const je=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(je.clippingPlanes=de.uniform),mf(T,Pe),q.needsLights=a0(T),q.lightsStateVersion=we,q.needsLights&&(je.ambientLightColor.value=G.state.ambient,je.lightProbe.value=G.state.probe,je.directionalLights.value=G.state.directional,je.directionalLightShadows.value=G.state.directionalShadow,je.spotLights.value=G.state.spot,je.spotLightShadows.value=G.state.spotShadow,je.rectAreaLights.value=G.state.rectArea,je.ltc_1.value=G.state.rectAreaLTC1,je.ltc_2.value=G.state.rectAreaLTC2,je.pointLights.value=G.state.point,je.pointLightShadows.value=G.state.pointShadow,je.hemisphereLights.value=G.state.hemi,je.directionalShadowMap.value=G.state.directionalShadowMap,je.directionalShadowMatrix.value=G.state.directionalShadowMatrix,je.spotShadowMap.value=G.state.spotShadowMap,je.spotLightMatrix.value=G.state.spotLightMatrix,je.spotLightMap.value=G.state.spotLightMap,je.pointShadowMap.value=G.state.pointShadowMap,je.pointShadowMatrix.value=G.state.pointShadowMatrix),q.currentProgram=Fe,q.uniformsList=null,Fe}function pf(T){if(T.uniformsList===null){const O=T.currentProgram.getUniforms();T.uniformsList=Go.seqWithValue(O.seq,T.uniforms)}return T.uniformsList}function mf(T,O){const X=Ce.get(T);X.outputColorSpace=O.outputColorSpace,X.batching=O.batching,X.instancing=O.instancing,X.instancingColor=O.instancingColor,X.instancingMorph=O.instancingMorph,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function r0(T,O,X,q,G){O.isScene!==!0&&(O=Te),De.resetTextureUnits();const ve=O.fog,we=q.isMeshStandardMaterial?O.environment:null,Pe=E===null?g.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Qi,Ue=(q.isMeshStandardMaterial?P:Ze).get(q.envMap||we),Ge=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),je=!!X.morphAttributes.position,xt=!!X.morphAttributes.normal,on=!!X.morphAttributes.color;let Et=Hi;q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(Et=g.toneMapping);const Zn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ut=Zn!==void 0?Zn.length:0,ze=Ce.get(q),Gl=m.state.lights;if(F===!0&&($===!0||T!==z)){const vn=T===z&&q.id===L;de.setState(q,T,vn)}let lt=!1;q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==Gl.state.version||ze.outputColorSpace!==Pe||G.isBatchedMesh&&ze.batching===!1||!G.isBatchedMesh&&ze.batching===!0||G.isInstancedMesh&&ze.instancing===!1||!G.isInstancedMesh&&ze.instancing===!0||G.isSkinnedMesh&&ze.skinning===!1||!G.isSkinnedMesh&&ze.skinning===!0||G.isInstancedMesh&&ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ze.instancingMorph===!1&&G.morphTexture!==null||ze.envMap!==Ue||q.fog===!0&&ze.fog!==ve||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==de.numPlanes||ze.numIntersection!==de.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==Fe||ze.morphTargets!==je||ze.morphNormals!==xt||ze.morphColors!==on||ze.toneMapping!==Et||Ee.isWebGL2===!0&&ze.morphTargetsCount!==ut)&&(lt=!0):(lt=!0,ze.__version=q.version);let Ji=ze.currentProgram;lt===!0&&(Ji=Ga(q,O,G));let xf=!1,Is=!1,Vl=!1;const Ut=Ji.getUniforms(),er=ze.uniforms;if(Se.useProgram(Ji.program)&&(xf=!0,Is=!0,Vl=!0),q.id!==L&&(L=q.id,Is=!0),xf||z!==T){Ut.setValue(k,"projectionMatrix",T.projectionMatrix),Ut.setValue(k,"viewMatrix",T.matrixWorldInverse);const vn=Ut.map.cameraPosition;vn!==void 0&&vn.setValue(k,le.setFromMatrixPosition(T.matrixWorld)),Ee.logarithmicDepthBuffer&&Ut.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Ut.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,Is=!0,Vl=!0)}if(G.isSkinnedMesh){Ut.setOptional(k,G,"bindMatrix"),Ut.setOptional(k,G,"bindMatrixInverse");const vn=G.skeleton;vn&&(Ee.floatVertexTextures?(vn.boneTexture===null&&vn.computeBoneTexture(),Ut.setValue(k,"boneTexture",vn.boneTexture,De)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Ut.setOptional(k,G,"batchingTexture"),Ut.setValue(k,"batchingTexture",G._matricesTexture,De));const Wl=X.morphAttributes;if((Wl.position!==void 0||Wl.normal!==void 0||Wl.color!==void 0&&Ee.isWebGL2===!0)&&ce.update(G,X,Ji),(Is||ze.receiveShadow!==G.receiveShadow)&&(ze.receiveShadow=G.receiveShadow,Ut.setValue(k,"receiveShadow",G.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(er.envMap.value=Ue,er.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),Is&&(Ut.setValue(k,"toneMappingExposure",g.toneMappingExposure),ze.needsLights&&s0(er,Vl),ve&&q.fog===!0&&ne.refreshFogUniforms(er,ve),ne.refreshMaterialUniforms(er,q,te,V,J),Go.upload(k,pf(ze),er,De)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Go.upload(k,pf(ze),er,De),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Ut.setValue(k,"center",G.center),Ut.setValue(k,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(k,"normalMatrix",G.normalMatrix),Ut.setValue(k,"modelMatrix",G.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const vn=q.uniformsGroups;for(let Xl=0,o0=vn.length;Xl<o0;Xl++)if(Ee.isWebGL2){const gf=vn[Xl];be.update(gf,Ji),be.bind(gf,Ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ji}function s0(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function a0(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(T,O,X){Ce.get(T.texture).__webglTexture=O,Ce.get(T.depthTexture).__webglTexture=X;const q=Ce.get(T);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,O){const X=Ce.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,X=0){E=T,A=O,b=X;let q=!0,G=null,ve=!1,we=!1;if(T){const Ue=Ce.get(T);Ue.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(k.FRAMEBUFFER,null),q=!1):Ue.__webglFramebuffer===void 0?De.setupRenderTarget(T):Ue.__hasExternalTextures&&De.rebindTextures(T,Ce.get(T.texture).__webglTexture,Ce.get(T.depthTexture).__webglTexture);const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(we=!0);const Fe=Ce.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?G=Fe[O][X]:G=Fe[O],ve=!0):Ee.isWebGL2&&T.samples>0&&De.useMultisampledRTT(T)===!1?G=Ce.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?G=Fe[X]:G=Fe,M.copy(T.viewport),R.copy(T.scissor),ee=T.scissorTest}else M.copy(N).multiplyScalar(te).floor(),R.copy(C).multiplyScalar(te).floor(),ee=Y;if(Se.bindFramebuffer(k.FRAMEBUFFER,G)&&Ee.drawBuffers&&q&&Se.drawBuffers(T,G),Se.viewport(M),Se.scissor(R),Se.setScissorTest(ee),ve){const Ue=Ce.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,X)}else if(we){const Ue=Ce.get(T.texture),Ge=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,Ge)}L=-1},this.readRenderTargetPixels=function(T,O,X,q,G,ve,we){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Ce.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&we!==void 0&&(Pe=Pe[we]),Pe){Se.bindFramebuffer(k.FRAMEBUFFER,Pe);try{const Ue=T.texture,Ge=Ue.format,Fe=Ue.type;if(Ge!==kn&&Ae.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const je=Fe===Ra&&(ue.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Fe!==Gi&&Ae.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===oi&&(Ee.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!je){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-q&&X>=0&&X<=T.height-G&&k.readPixels(O,X,q,G,Ae.convert(Ge),Ae.convert(Fe),ve)}finally{const Ue=E!==null?Ce.get(E).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,O,X=0){const q=Math.pow(2,-X),G=Math.floor(O.image.width*q),ve=Math.floor(O.image.height*q);De.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,T.x,T.y,G,ve),Se.unbindTexture()},this.copyTextureToTexture=function(T,O,X,q=0){const G=O.image.width,ve=O.image.height,we=Ae.convert(X.format),Pe=Ae.convert(X.type);De.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,q,T.x,T.y,G,ve,we,Pe,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,q,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,q,T.x,T.y,we,Pe,O.image),q===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X,q,G=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=Math.round(T.max.x-T.min.x),we=Math.round(T.max.y-T.min.y),Pe=T.max.z-T.min.z+1,Ue=Ae.convert(q.format),Ge=Ae.convert(q.type);let Fe;if(q.isData3DTexture)De.setTexture3D(q,0),Fe=k.TEXTURE_3D;else if(q.isDataArrayTexture||q.isCompressedArrayTexture)De.setTexture2DArray(q,0),Fe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const je=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),on=k.getParameter(k.UNPACK_SKIP_PIXELS),Et=k.getParameter(k.UNPACK_SKIP_ROWS),Zn=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=X.isCompressedTexture?X.mipmaps[G]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Fe,G,O.x,O.y,O.z,ve,we,Pe,Ue,Ge,ut.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Fe,G,O.x,O.y,O.z,ve,we,Pe,Ue,ut.data):k.texSubImage3D(Fe,G,O.x,O.y,O.z,ve,we,Pe,Ue,Ge,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,je),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,on),k.pixelStorei(k.UNPACK_SKIP_ROWS,Et),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zn),G===0&&q.generateMipmaps&&k.generateMipmap(Fe),Se.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?De.setTextureCube(T,0):T.isData3DTexture?De.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?De.setTexture2DArray(T,0):De.setTexture2D(T,0),Se.unbindTexture()},this.resetState=function(){A=0,b=0,E=null,Se.reset(),Me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===sf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===jl?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class NE extends t0{}NE.prototype.isWebGL1Renderer=!0;class RE extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class n0 extends za{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qp=new yt,ad=new jg,No=new zl,Ro=new j;class PE extends an{constructor(e=new An,n=new n0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;Qp.copy(r).invert(),ad.copy(e.ray).applyMatrix4(Qp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,h=i.attributes.position;if(u!==null){const p=Math.max(0,a.start),x=Math.min(u.count,a.start+a.count);for(let y=p,_=x;y<_;y++){const m=u.getX(y);Ro.fromBufferAttribute(h,m),Jp(Ro,m,c,r,e,n,this)}}else{const p=Math.max(0,a.start),x=Math.min(h.count,a.start+a.count);for(let y=p,_=x;y<_;y++)Ro.fromBufferAttribute(h,y),Jp(Ro,y,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jp(t,e,n,i,r,s,a){const o=ad.distanceSqToPoint(t);if(o<n){const c=new j;ad.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:a})}}class of extends An{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),u(i),f(),this.setAttribute("position",new zt(s,3)),this.setAttribute("normal",new zt(s.slice(),3)),this.setAttribute("uv",new zt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const g=new j,S=new j,A=new j;for(let b=0;b<n.length;b+=3)x(n[b+0],g),x(n[b+1],S),x(n[b+2],A),c(g,S,A,v)}function c(v,g,S,A){const b=A+1,E=[];for(let L=0;L<=b;L++){E[L]=[];const z=v.clone().lerp(S,L/b),M=g.clone().lerp(S,L/b),R=b-L;for(let ee=0;ee<=R;ee++)ee===0&&L===b?E[L][ee]=z:E[L][ee]=z.clone().lerp(M,ee/R)}for(let L=0;L<b;L++)for(let z=0;z<2*(b-L)-1;z++){const M=Math.floor(z/2);z%2===0?(p(E[L][M+1]),p(E[L+1][M]),p(E[L][M])):(p(E[L][M+1]),p(E[L+1][M+1]),p(E[L+1][M]))}}function u(v){const g=new j;for(let S=0;S<s.length;S+=3)g.x=s[S+0],g.y=s[S+1],g.z=s[S+2],g.normalize().multiplyScalar(v),s[S+0]=g.x,s[S+1]=g.y,s[S+2]=g.z}function f(){const v=new j;for(let g=0;g<s.length;g+=3){v.x=s[g+0],v.y=s[g+1],v.z=s[g+2];const S=m(v)/2/Math.PI+.5,A=d(v)/Math.PI+.5;a.push(S,1-A)}y(),h()}function h(){for(let v=0;v<a.length;v+=6){const g=a[v+0],S=a[v+2],A=a[v+4],b=Math.max(g,S,A),E=Math.min(g,S,A);b>.9&&E<.1&&(g<.2&&(a[v+0]+=1),S<.2&&(a[v+2]+=1),A<.2&&(a[v+4]+=1))}}function p(v){s.push(v.x,v.y,v.z)}function x(v,g){const S=v*3;g.x=e[S+0],g.y=e[S+1],g.z=e[S+2]}function y(){const v=new j,g=new j,S=new j,A=new j,b=new Ye,E=new Ye,L=new Ye;for(let z=0,M=0;z<s.length;z+=9,M+=6){v.set(s[z+0],s[z+1],s[z+2]),g.set(s[z+3],s[z+4],s[z+5]),S.set(s[z+6],s[z+7],s[z+8]),b.set(a[M+0],a[M+1]),E.set(a[M+2],a[M+3]),L.set(a[M+4],a[M+5]),A.copy(v).add(g).add(S).divideScalar(3);const R=m(A);_(b,M+0,v,R),_(E,M+2,g,R),_(L,M+4,S,R)}}function _(v,g,S,A){A<0&&v.x===1&&(a[g]=v.x-1),S.x===0&&S.z===0&&(a[g]=A/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new of(e.vertices,e.indices,e.radius,e.details)}}class lf extends of{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lf(e.radius,e.detail)}}class cf extends An{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const f=[],h=new j,p=new j,x=[],y=[],_=[],m=[];for(let d=0;d<=i;d++){const v=[],g=d/i;let S=0;d===0&&a===0?S=.5/n:d===i&&c===Math.PI&&(S=-.5/n);for(let A=0;A<=n;A++){const b=A/n;h.x=-e*Math.cos(r+b*s)*Math.sin(a+g*o),h.y=e*Math.cos(a+g*o),h.z=e*Math.sin(r+b*s)*Math.sin(a+g*o),y.push(h.x,h.y,h.z),p.copy(h).normalize(),_.push(p.x,p.y,p.z),m.push(b+S,1-g),v.push(u++)}f.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const g=f[d][v+1],S=f[d][v],A=f[d+1][v],b=f[d+1][v+1];(d!==0||a>0)&&x.push(g,S,b),(d!==i-1||c<Math.PI)&&x.push(S,A,b)}this.setIndex(x),this.setAttribute("position",new zt(y,3)),this.setAttribute("normal",new zt(_,3)),this.setAttribute("uv",new zt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uf extends An{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],u=[],f=new j,h=new j,p=new j;for(let x=0;x<=i;x++)for(let y=0;y<=r;y++){const _=y/r*s,m=x/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(_),h.y=(e+n*Math.cos(m))*Math.sin(_),h.z=n*Math.sin(m),o.push(h.x,h.y,h.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),p.subVectors(h,f).normalize(),c.push(p.x,p.y,p.z),u.push(y/r),u.push(x/i)}for(let x=1;x<=i;x++)for(let y=1;y<=r;y++){const _=(r+1)*x+y-1,m=(r+1)*(x-1)+y-1,d=(r+1)*(x-1)+y,v=(r+1)*x+y;a.push(_,m,v),a.push(m,d,v)}this.setIndex(a),this.setAttribute("position",new zt(o,3)),this.setAttribute("normal",new zt(c,3)),this.setAttribute("uv",new zt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nf);function LE(){const t=ye.useRef(null);return ye.useEffect(()=>{const e=t.current;if(!e)return;const n=e.clientWidth,i=e.clientHeight,r=new RE,s=new Mn(45,n/i,.1,1e3);s.position.z=18;const a=new t0({alpha:!0,antialias:!0});a.setSize(n,i),a.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.appendChild(a.domElement);const o=new ea;r.add(o);const c=new lf(5,3),u=new ua({color:16711731,wireframe:!0,transparent:!0,opacity:.2}),f=new fn(c,u);o.add(f);const h=new cf(3.8,32,32),p=new ua({color:9109504,transparent:!0,opacity:.35}),x=new fn(h,p);o.add(x);const y=400,_=new Float32Array(y*3);for(let B=0;B<y*3;B+=3){const V=Math.random(),te=Math.random(),U=V*2*Math.PI,H=Math.acos(2*te-1),N=5.2+Math.random()*1.8;_[B]=N*Math.sin(H)*Math.cos(U),_[B+1]=N*Math.sin(H)*Math.sin(U),_[B+2]=N*Math.cos(H)}const m=new An;m.setAttribute("position",new jn(_,3));const d=new n0({color:16731469,size:.18,transparent:!0,opacity:.85,blending:Yu}),v=new PE(m,d);o.add(v);const g=new uf(7,.05,16,100),S=new ua({color:16711731,transparent:!0,opacity:.6}),A=new fn(g,S);A.rotation.x=Math.PI/3,A.rotation.y=Math.PI/6,o.add(A);const b=new fn(g,S.clone());b.material.color.setHex(16758531),b.rotation.x=-Math.PI/4,b.rotation.y=Math.PI/3,o.add(b);let E=0,L=0,z=0,M=0;const R=B=>{const V=e.getBoundingClientRect();E=(B.clientX-V.left)/n*2-1,L=-((B.clientY-V.top)/i)*2+1};window.addEventListener("mousemove",R);let ee;const Z=()=>{ee=requestAnimationFrame(Z),z+=(E*.5-z)*.05,M+=(L*.5-M)*.05,o.rotation.y+=.003,o.rotation.x+=.001,o.rotation.y+=z*.02,o.rotation.x+=M*.02,A.rotation.z+=.005,b.rotation.z-=.004,a.render(r,s)};Z();const D=()=>{if(!e)return;const B=e.clientWidth,V=e.clientHeight;s.aspect=B/V,s.updateProjectionMatrix(),a.setSize(B,V)};return window.addEventListener("resize",D),()=>{window.removeEventListener("mousemove",R),window.removeEventListener("resize",D),cancelAnimationFrame(ee),e.contains(a.domElement)&&e.removeChild(a.domElement),a.dispose()}},[]),l.jsxs("div",{className:"relative w-full h-full min-h-[420px] flex items-center justify-center",children:[l.jsx("div",{ref:t,className:"absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"}),l.jsx("div",{className:"pointer-events-none z-10 text-center px-4 py-2 rounded-full glass-panel border border-brand-red/40 shadow-[0_0_30px_rgba(255,0,51,0.3)] animate-pulse-slow",children:l.jsxs("span",{className:"text-xs uppercase tracking-widest text-brand-red font-bold flex items-center gap-2",children:[l.jsx("img",{src:"/logo.svg",alt:"Logo",className:"w-5 h-5 inline-block"}),"Kuakata Multimedia 3D Core"]})})]})}function DE(){const{setActiveTab:t,switchRoleDemo:e}=Nr(),{members:n,projects:i}=Bn();return l.jsxs("section",{className:"relative min-h-[calc(100vh-80px)] flex flex-col justify-between py-12 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[l.jsx("div",{className:"absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-red/15 rounded-full blur-[150px] pointer-events-none"}),l.jsx("div",{className:"absolute bottom-10 left-10 w-96 h-96 bg-brand-wine/25 rounded-full blur-[130px] pointer-events-none"}),l.jsxs("div",{className:"max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6 text-left",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-red/40 text-xs font-bold text-brand-red shadow-[0_0_20px_rgba(255,0,51,0.2)]",children:[l.jsx("img",{src:"/logo.svg",alt:"Logo",className:"w-4 h-4"}),l.jsx("span",{children:"কুয়াকাটা মাল্টিমিডিয়া ৩ডি ও পোর্টফোলিও সিস্টেম"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight",children:["আধুনিক ",l.jsx("span",{className:"text-gradient",children:"৩ডি অ্যানিমেশন"})," & পোর্টফোলিও ",l.jsx("span",{className:"text-gradient-gold",children:"ম্যানেজমেন্ট"})]}),l.jsx("p",{className:"text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed",children:"কুয়াকাটা মাল্টিমিডিয়ার বিশ্বমানের ৩ডি ভিজ্যুয়াল কনটেন্ট, মোশন গ্রাফিক্স, টিম মেম্বার ম্যানেজমেন্ট, দৈনিক হাজিরা এবং অটোমেটেড পে-রোল (Payroll) ক্যালকুলেশনের সম্পূর্ণ ডিজিটাল সমাধান।"}),l.jsxs("div",{className:"flex flex-wrap items-center gap-4 pt-2",children:[l.jsxs("button",{id:"btn-hero-portfolio",onClick:()=>t("portfolio"),className:"inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-xl shadow-brand-red/30 hover:scale-105 transition-transform",children:[l.jsx("span",{children:"পোর্টফোলিও দেখুন"}),l.jsx(G_,{className:"w-4 h-4"})]}),l.jsxs("button",{id:"btn-hero-team",onClick:()=>t("team"),className:"inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm glass-panel text-white border border-slate-700 hover:border-brand-red/50 hover:bg-brand-red/10 transition-all",children:[l.jsx(ml,{className:"w-4 h-4 text-brand-red"}),l.jsx("span",{children:"টিম মেম্বারবৃন্দ"})]}),l.jsxs("button",{id:"btn-hero-admin-portal",onClick:()=>e("admin"),className:"inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-bold text-xs bg-dark-800/80 text-slate-300 border border-slate-700 hover:text-brand-red hover:border-brand-red/40 transition-colors",children:[l.jsx(Rr,{className:"w-4 h-4 text-brand-amber"}),l.jsx("span",{children:"অ্যাডমিন ড্যাশবোর্ড (লগইন)"})]})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-6 border-t border-slate-800/80",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-2xl font-extrabold text-white flex items-center gap-1",children:l.jsxs("span",{className:"text-brand-red",children:[i.length,"+"]})}),l.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"লাইভ ৩ডি প্রজেক্ট"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-2xl font-extrabold text-white flex items-center gap-1",children:l.jsx("span",{className:"text-brand-amber",children:n.length})}),l.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"দক্ষ টিম মেম্বার"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-2xl font-extrabold text-white flex items-center gap-1",children:l.jsx("span",{className:"text-emerald-400",children:"৯৬%"})}),l.jsx("p",{className:"text-xs text-slate-400 font-medium",children:"গড় উপস্থিতি হার"})]})]})]}),l.jsx("div",{className:"lg:col-span-5 h-[450px] relative flex items-center justify-center",children:l.jsx("div",{className:"w-full h-full glass-panel rounded-3xl p-4 border border-brand-red/30 shadow-[0_0_50px_rgba(255,0,51,0.15)] relative",children:l.jsx(LE,{})})})]}),l.jsx("div",{className:"text-center pt-8",children:l.jsx("button",{onClick:()=>t("team"),className:"inline-flex items-center justify-center p-2 rounded-full glass-panel text-slate-400 hover:text-brand-red hover:border-brand-red/40 transition-all animate-bounce",children:l.jsx(W_,{className:"w-5 h-5"})})})]})}function UE({member:t,attendanceRate:e=95}){var p;const n=ye.useRef(null),[i,r]=ye.useState(0),[s,a]=ye.useState(0),[o,c]=ye.useState(!1),u=x=>{if(!n.current)return;const y=n.current.getBoundingClientRect(),_=x.clientX-y.left,m=x.clientY-y.top,d=y.width/2,v=y.height/2,g=(m-v)/v*-12,S=(_-d)/d*12;r(g),a(S)},f=()=>{c(!0)},h=()=>{c(!1),r(0),a(0)};return l.jsx("div",{ref:n,onMouseMove:u,onMouseEnter:f,onMouseLeave:h,style:{perspective:"1000px"},className:"w-full cursor-pointer group",children:l.jsxs("div",{style:{transform:`rotateX(${i}deg) rotateY(${s}deg) scale3d(${o?1.03:1}, ${o?1.03:1}, 1)`,transition:o?"transform 0.1s ease-out":"transform 0.5s ease-out"},className:`relative rounded-2xl p-6 glass-card overflow-hidden border ${t.role==="admin"?"border-brand-red/50 bg-dark-800/90":"border-slate-800 bg-dark-800/60"} shadow-xl hover:shadow-2xl hover:shadow-brand-red/20`,children:[l.jsx("div",{className:"absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-brand-flame to-brand-gold opacity-70 group-hover:opacity-100 transition-opacity"}),l.jsxs("div",{className:"flex justify-between items-start mb-4",children:[l.jsxs("span",{className:`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${t.role==="admin"?"bg-brand-red/15 text-brand-red border border-brand-red/40":"bg-brand-amber/10 text-brand-amber border border-brand-amber/30"}`,children:[t.role==="admin"?l.jsx(Rr,{className:"w-3.5 h-3.5"}):l.jsx(Ca,{className:"w-3.5 h-3.5"}),t.dept]}),l.jsxs("div",{className:"flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded-full border border-emerald-500/20",children:[l.jsx(Ls,{className:"w-3 h-3"}),l.jsxs("span",{children:["উপস্থিতি ",e,"%"]})]})]}),l.jsxs("div",{className:"flex flex-col items-center text-center my-3",children:[l.jsxs("div",{className:"relative mb-4",children:[l.jsx("div",{className:"absolute -inset-1 rounded-full bg-gradient-to-r from-brand-red via-brand-crimson to-brand-gold opacity-50 group-hover:opacity-100 blur-sm transition-all"}),l.jsx("img",{src:t.avatar,alt:t.name,className:"relative w-24 h-24 rounded-full object-cover border-2 border-dark-900 shadow-md"})]}),l.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-brand-red transition-colors",children:t.name}),l.jsx("p",{className:"text-xs text-slate-400 font-medium mt-1",children:t.designation})]}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-slate-800/80",children:[l.jsxs("div",{className:"text-[11px] text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1 font-bold",children:[l.jsx(tf,{className:"w-3 h-3 text-brand-red"}),"বিশেষ দক্ষতা (Skills)"]}),l.jsx("div",{className:"flex flex-wrap gap-1.5 justify-center",children:(p=t.skills)==null?void 0:p.map((x,y)=>l.jsx("span",{className:"px-2 py-0.5 rounded text-[11px] font-medium bg-dark-700/80 text-slate-300 border border-slate-700/50 group-hover:border-brand-red/40 transition-colors",children:x},y))})]})]})})}function em(){const{members:t,attendance:e}=Bn(),{user:n,setActiveTab:i}=Nr(),[r,s]=ye.useState("All"),[a,o]=ye.useState(""),c=["All","3D & VFX","Web Dev","Video Production"],u=t.filter(h=>{var y;const p=r==="All"||h.dept===r,x=h.name.toLowerCase().includes(a.toLowerCase())||h.designation.toLowerCase().includes(a.toLowerCase())||((y=h.skills)==null?void 0:y.some(_=>_.toLowerCase().includes(a.toLowerCase())));return p&&x}),f=h=>{const p=e.filter(y=>y.user_id===h);if(!p.length)return 95;const x=p.filter(y=>y.status==="Present"||y.status==="Half-day").length;return Math.round(x/p.length*100)};return l.jsxs("section",{className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full",children:[l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-12 space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-purple/30 text-xs font-semibold text-brand-purple",children:[l.jsx(ml,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"আমাদের দক্ষ ক্রিয়েটিভ টিম"})]}),l.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:["কুয়াকাটা মাল্টিমিডিয়ার ",l.jsx("span",{className:"text-gradient",children:"৩ডি ক্রিয়েটর & টিম মেম্বারবৃন্দ"})]}),l.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"প্রতিটি কার্ডের উপর মাউস পয়েন্টার রাখুন (Parallax 3D Hover Effect)। মেম্বারদের স্কিল, পদবি ও মেম্বার পোর্টালে তাদের কাজের সামারি পর্যবেক্ষণ করুন।"})]}),l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 glass-panel p-4 rounded-2xl border border-slate-800",children:[l.jsx("div",{className:"flex flex-wrap gap-2 w-full sm:w-auto",children:c.map(h=>l.jsx("button",{id:`btn-dept-${h.toLowerCase().replace(/\s+/g,"-")}`,onClick:()=>s(h),className:`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${r===h?"bg-gradient-to-r from-brand-cyan to-brand-purple text-dark-900 shadow-md font-bold":"glass-panel text-slate-300 hover:text-white hover:border-slate-600"}`,children:h==="All"?"সকল ডিপার্টমেন্ট":h},h))}),l.jsxs("div",{className:"relative w-full sm:w-64",children:[l.jsx(Sg,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-3"}),l.jsx("input",{type:"text",placeholder:"নাম বা স্কিল দিয়ে খুঁজুন...",value:a,onChange:h=>o(h.target.value),className:"w-full pl-10 pr-4 py-2 rounded-xl text-xs glass-input focus:border-brand-cyan"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:u.map(h=>l.jsx(UE,{member:h,attendanceRate:f(h.id)},h.id))}),(n==null?void 0:n.role)==="admin"&&l.jsx("div",{className:"mt-12 text-center",children:l.jsxs("button",{onClick:()=>i("admin-dashboard"),className:"inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-brand-cyan/20 text-brand-cyan border border-brand-cyan/40 hover:bg-brand-cyan hover:text-dark-900 transition-colors",children:[l.jsx(yg,{className:"w-4 h-4"}),l.jsx("span",{children:"নতুন মেম্বার যুক্ত বা ম্যানেজ করতে অ্যাডমিন প্যানেলে যান"})]})})]})}function IE({onSelectProject:t}){var h;const{projects:e}=Bn(),[n,i]=ye.useState(0),[r,s]=ye.useState("All"),a=["All","3D & Web","VFX & Motion","3D Commercial","Interactive Web"],o=r==="All"?e:e.filter(p=>p.category===r),c=()=>{i(p=>p===0?o.length-1:p-1)},u=()=>{i(p=>p===o.length-1?0:p+1)},f=o[n]||o[0];return l.jsxs("div",{className:"relative w-full py-6",children:[l.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2 mb-8",children:a.map(p=>l.jsx("button",{id:`btn-cat-${p.toLowerCase().replace(/\s+/g,"-")}`,onClick:()=>{s(p),i(0)},className:`px-4 py-2 rounded-full text-xs font-bold transition-all ${r===p?"bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 scale-105":"glass-panel text-slate-300 hover:text-white hover:border-brand-red/40"}`,children:p==="All"?"সকল প্রজেক্ট (All)":p},p))}),o.length>0?l.jsxs("div",{className:"relative max-w-4xl mx-auto px-4 min-h-[420px] flex items-center justify-center",children:[l.jsx("button",{id:"btn-portfolio-prev",onClick:c,"aria-label":"Previous project",className:"absolute left-0 z-30 p-3 rounded-full glass-panel hover:bg-brand-red/20 border border-slate-700 text-white hover:border-brand-red transition-all transform hover:-translate-x-1",children:l.jsx(X_,{className:"w-6 h-6"})}),l.jsx("button",{id:"btn-portfolio-next",onClick:u,"aria-label":"Next project",className:"absolute right-0 z-30 p-3 rounded-full glass-panel hover:bg-brand-red/20 border border-slate-700 text-white hover:border-brand-red transition-all transform hover:translate-x-1",children:l.jsx(Xu,{className:"w-6 h-6"})}),l.jsx("div",{className:"w-full max-w-2xl relative transition-all duration-500 ease-out transform",children:l.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-brand-red/40 shadow-[0_0_50px_rgba(255,0,51,0.2)] group",children:[l.jsxs("div",{className:"relative h-64 sm:h-80 w-full overflow-hidden bg-dark-800",children:[l.jsx("img",{src:f.image,alt:f.title,className:"w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"}),l.jsxs("span",{className:"absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 backdrop-blur-md text-brand-red border border-brand-red/40 flex items-center gap-1.5",children:[l.jsx(tf,{className:"w-3.5 h-3.5"}),f.category]}),l.jsx("button",{onClick:()=>t(f),className:"absolute inset-0 m-auto w-16 h-16 rounded-full bg-brand-red text-white flex items-center justify-center opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-lg shadow-brand-red/50",children:l.jsx(ay,{className:"w-7 h-7 fill-white ml-1"})})]}),l.jsxs("div",{className:"p-6",children:[l.jsxs("div",{className:"flex justify-between items-start mb-2",children:[l.jsx("h3",{className:"text-2xl font-bold text-white group-hover:text-brand-red transition-colors",children:f.title}),l.jsxs("span",{className:"text-xs text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded border border-slate-700",children:["ক্লায়েন্ট: ",f.client]})]}),l.jsx("p",{className:"text-slate-300 text-sm mb-4 leading-relaxed",children:f.description}),l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800",children:[l.jsx("div",{className:"flex flex-wrap gap-1.5",children:(h=f.tags)==null?void 0:h.map((p,x)=>l.jsxs("span",{className:"px-2 py-0.5 rounded text-xs font-medium bg-brand-red/10 text-brand-red border border-brand-red/20",children:["#",p]},x))}),l.jsxs("button",{id:`btn-demo-${f.id}`,onClick:()=>t(f),className:"inline-flex items-center gap-1.5 text-xs font-bold text-brand-red hover:text-white transition-colors",children:[l.jsx("span",{children:"৩ডি লাইভ ডেমো দেখুন"}),l.jsx(ms,{className:"w-4 h-4"})]})]})]})]})})]}):l.jsxs("div",{className:"text-center py-12 text-slate-400 glass-panel max-w-md mx-auto rounded-xl",children:[l.jsx(Q_,{className:"w-10 h-10 text-slate-500 mx-auto mb-2"}),l.jsx("p",{children:"এই ক্যাটাগরিতে কোনো প্রজেক্ট পাওয়া যায়নি।"})]}),l.jsx("div",{className:"flex justify-center gap-2 mt-6",children:o.map((p,x)=>l.jsx("button",{onClick:()=>i(x),className:`h-2 rounded-full transition-all ${x===n?"w-8 bg-brand-red":"w-2 bg-slate-700 hover:bg-slate-500"}`},x))})]})}function kE({project:t,onClose:e}){var n;return t?l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/85 backdrop-blur-xl animate-fade-in",children:l.jsxs("div",{className:"relative w-full max-w-3xl glass-panel rounded-3xl overflow-hidden border border-brand-red/40 shadow-[0_0_60px_rgba(255,0,51,0.25)] max-h-[90vh] overflow-y-auto",children:[l.jsx("button",{onClick:e,className:"absolute top-4 right-4 z-20 p-2 rounded-full glass-panel text-slate-300 hover:text-white hover:border-brand-red transition-colors",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsxs("div",{className:"relative h-64 sm:h-80 w-full overflow-hidden bg-dark-800",children:[l.jsx("img",{src:t.image,alt:t.title,className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/40 to-transparent"}),l.jsx("div",{className:"absolute bottom-6 left-6 right-6 flex justify-between items-end",children:l.jsxs("div",{children:[l.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-bold bg-brand-red text-white mb-2 inline-block shadow-md shadow-brand-red/40",children:t.category}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:t.title})]})})]}),l.jsxs("div",{className:"p-6 sm:p-8 space-y-6",children:[l.jsxs("div",{children:[l.jsxs("h4",{className:"text-xs uppercase tracking-wider text-slate-400 font-bold mb-2 flex items-center gap-1.5",children:[l.jsx(tf,{className:"w-4 h-4 text-brand-red"}),"প্রজেক্ট বিবরণ (Overview)"]}),l.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:t.description})]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800",children:[l.jsxs("div",{className:"glass-card p-4 rounded-xl",children:[l.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"ক্লায়েন্ট / সংস্থা"}),l.jsxs("span",{className:"text-sm font-bold text-white flex items-center gap-2",children:[l.jsx(vg,{className:"w-4 h-4 text-brand-red"}),t.client]})]}),l.jsxs("div",{className:"glass-card p-4 rounded-xl",children:[l.jsx("span",{className:"text-xs text-slate-400 block mb-1",children:"প্রজেক্ট ক্যাটাগরি"}),l.jsx("span",{className:"text-sm font-bold text-brand-amber",children:t.category})]})]}),l.jsxs("div",{children:[l.jsxs("h4",{className:"text-xs uppercase tracking-wider text-slate-400 font-bold mb-3 flex items-center gap-1.5",children:[l.jsx(cy,{className:"w-4 h-4 text-brand-red"}),"ব্যবহৃত টেকনোলজি ও টুলস"]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:(n=t.tags)==null?void 0:n.map((i,r)=>l.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-bold bg-brand-red/15 text-brand-red border border-brand-red/30",children:i},r))})]}),l.jsxs("div",{className:"pt-6 border-t border-slate-800 flex justify-end gap-3",children:[l.jsx("button",{onClick:e,className:"px-5 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300 hover:text-white",children:"বন্ধ করুন"}),l.jsxs("a",{href:t.demo_url,target:"_blank",rel:"noopener noreferrer",className:"inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-105 transition-transform",children:[l.jsx("span",{children:"লাইভ ওয়েবসাইট / ডেমো দেখুন"}),l.jsx(ms,{className:"w-4 h-4"})]})]})]})]})}):null}function tm(){const[t,e]=ye.useState(null);return l.jsxs("section",{className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative",children:[l.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[160px] pointer-events-none"}),l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-8 space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-cyan/30 text-xs font-semibold text-brand-cyan",children:[l.jsx(Ca,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"আমাদের ৩ডি গ্যালারি & পোর্টফোলিও"})]}),l.jsxs("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white",children:["কুয়াকাটা মাল্টিমিডিয়ার ",l.jsx("span",{className:"text-gradient",children:"ভার্চুয়াল ৩ডি শোকেস"})]}),l.jsx("p",{className:"text-slate-400 text-sm sm:text-base leading-relaxed",children:"৩ডি ক্যারোজেল ড্র্যাগ বা স্ক্রল করে প্রজেক্টগুলো দেখুন। বিস্তারিত ও লাইভ ডেমো দেখতে যেকোনো কার্ডে ক্লিক করুন।"})]}),l.jsx(IE,{onSelectProject:n=>e(n)}),t&&l.jsx(kE,{project:t,onClose:()=>e(null)})]})}function nm(){const[t,e]=ye.useState(!1),[n,i]=ye.useState({name:"",email:"",subject:"3D Project Inquiry",message:""}),r=s=>{s.preventDefault(),e(!0),setTimeout(()=>{e(!1),i({name:"",email:"",subject:"3D Project Inquiry",message:""})},4e3)};return l.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-brand-red/40 text-xs font-bold text-brand-red",children:[l.jsx(ry,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"যোগাযোগ করুন"})]}),l.jsxs("h2",{className:"text-3xl sm:text-4xl font-black text-white",children:["আপনার প্রজেক্টের ",l.jsx("span",{className:"text-gradient",children:"৩ডি আইডিয়া বাস্তবায়ন"})," করতে প্রস্তুত?"]}),l.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"কুয়াকাটা মাল্টিমিডিয়ার সাথে আপনার বিজনেস, অ্যানিমেশন বা ৩ডি কাস্টম সফটওয়্যার প্রজেক্ট আলোচনা করতে আমাদের বার্তা পাঠাতে পারেন।"}),l.jsxs("div",{className:"space-y-4 pt-4",children:[l.jsxs("div",{className:"flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800",children:[l.jsx("div",{className:"p-3 rounded-lg bg-brand-red/10 text-brand-red",children:l.jsx(ny,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"অফিস লোকেশন"}),l.jsx("p",{className:"text-sm font-semibold text-white mt-0.5",children:"কুয়াকাটা মাল্টিমিডিয়া টাওয়ার, ঢাকা & কুয়াকাটা, বাংলাদেশ"})]})]}),l.jsxs("div",{className:"flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800",children:[l.jsx("div",{className:"p-3 rounded-lg bg-brand-amber/10 text-brand-amber",children:l.jsx($u,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"ইমেইল ঠিকানা"}),l.jsx("p",{className:"text-sm font-semibold text-white mt-0.5",children:"info@kuakatamultimedia.com"})]})]}),l.jsxs("div",{className:"flex items-start gap-4 glass-panel p-4 rounded-xl border border-slate-800",children:[l.jsx("div",{className:"p-3 rounded-lg bg-emerald-500/10 text-emerald-400",children:l.jsx(sy,{className:"w-5 h-5"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"হেল্পলাইন / হোয়াটসঅ্যাপ"}),l.jsx("p",{className:"text-sm font-semibold text-white mt-0.5",children:"+880 1711-000001 / +880 9600-112233"})]})]})]})]}),l.jsx("div",{className:"lg:col-span-7",children:l.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 shadow-2xl relative",children:[l.jsxs("h3",{className:"text-xl font-bold text-white mb-6 flex items-center gap-2",children:[l.jsx(vg,{className:"w-5 h-5 text-brand-red"}),"বার্তা সরসারি পাঠান (Instant Inquiry)"]}),t?l.jsxs("div",{className:"py-12 text-center space-y-3 bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6",children:[l.jsx(Ls,{className:"w-12 h-12 text-emerald-400 mx-auto animate-bounce"}),l.jsx("h4",{className:"text-lg font-bold text-white",children:"বার্তা সফলভাবে পাঠানো হয়েছে!"}),l.jsx("p",{className:"text-xs text-slate-300",children:"আমাদের টিম অতিসত্বর আপনার ইমেইলে যোগাযোগ করবে। ধন্যবাদ!"})]}):l.jsxs("form",{onSubmit:r,className:"space-y-4",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"আপনার নাম"}),l.jsx("input",{type:"text",required:!0,placeholder:"যেমন: আহসান হাবীব",value:n.name,onChange:s=>i({...n,name:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"ইমেইল ঠিকানা"}),l.jsx("input",{type:"email",required:!0,placeholder:"ahsan@example.com",value:n.email,onChange:s=>i({...n,email:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"বিষয়"}),l.jsx("input",{type:"text",required:!0,value:n.subject,onChange:s=>i({...n,subject:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1.5",children:"আপনার বার্তা"}),l.jsx("textarea",{rows:4,required:!0,placeholder:"আপনার প্রজেক্ট সম্পর্কিত যেকোনো প্রশ্ন বা মেসেজ লিখুন...",value:n.message,onChange:s=>i({...n,message:s.target.value}),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input resize-none"})]}),l.jsxs("button",{type:"submit",className:"w-full py-3.5 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-xl shadow-brand-red/30 hover:scale-[1.01] transition-transform flex items-center justify-center gap-2",children:[l.jsx(Mg,{className:"w-4 h-4"}),l.jsx("span",{children:"মেসেজ সেন্ড করুন"})]})]})]})})]})})}function FE(){const{setActiveTab:t,switchRoleDemo:e}=Nr();return l.jsxs("footer",{className:"w-full glass-panel border-t border-brand-red/20 mt-20 py-12 px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[l.jsxs("div",{className:"md:col-span-2 space-y-4",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-red to-brand-flame p-0.5 shadow-[0_0_15px_rgba(255,0,51,0.3)]",children:l.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[10px] p-1.5 flex items-center justify-center",children:l.jsx("img",{src:"/logo.svg",alt:"Kuakata Multimedia Logo",className:"w-full h-full object-contain"})})}),l.jsxs("span",{className:"text-lg font-black text-white tracking-wider",children:["KUAKATA ",l.jsx("span",{className:"text-gradient",children:"MULTIMEDIA"})]})]}),l.jsx("p",{className:"text-xs text-slate-400 max-w-md leading-relaxed",children:"কুয়াকাটা মাল্টিমিডিয়া লিমিটেড - ৩ডি অ্যানিমেশন, মোশন পিকচার্স, ভার্চুয়াল রিয়েলিটি এবং আধুনিক টিম পোর্টফোলিও & পে-রোল সলিউশন প্রোভাইডার।"}),l.jsx("p",{className:"text-xs text-brand-red font-mono font-bold",children:"Official Web Domain: www.kuakatamultimedia.com"})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider mb-3",children:"কুইক লিঙ্কস"}),l.jsxs("ul",{className:"space-y-2 text-xs text-slate-400",children:[l.jsx("li",{children:l.jsx("button",{onClick:()=>t("home"),className:"hover:text-brand-red transition-colors",children:"হোম পেজ"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>t("team"),className:"hover:text-brand-red transition-colors",children:"৩ডি টিম মেম্বারস"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>t("portfolio"),className:"hover:text-brand-red transition-colors",children:"প্রজেক্ট গ্যালারি"})}),l.jsx("li",{children:l.jsx("button",{onClick:()=>t("contact"),className:"hover:text-brand-red transition-colors",children:"যোগাযোগ"})})]})]}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider mb-3",children:"সিস্টেম পোর্টাল"}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("button",{onClick:()=>e("admin"),className:"w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-brand-red/10 text-brand-red border border-brand-red/30 hover:bg-brand-red hover:text-white transition-all flex items-center gap-2",children:[l.jsx(Rr,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"অ্যাডমিন ড্যাশবোর্ড প্যানেল"})]}),l.jsxs("button",{onClick:()=>e("member"),className:"w-full text-left px-3 py-2 rounded-lg text-xs font-semibold bg-brand-amber/10 text-brand-amber border border-brand-amber/30 hover:bg-brand-amber hover:text-dark-900 transition-all flex items-center gap-2",children:[l.jsx(ka,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"মেম্বার মাই-পোর্টাল"})]})]})]})]}),l.jsxs("div",{className:"max-w-7xl mx-auto pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4",children:[l.jsx("p",{children:"© 2026 Kuakata Multimedia (www.kuakatamultimedia.com). সর্বস্বত্ব সংরক্ষিত।"}),l.jsxs("p",{className:"flex items-center gap-1",children:["Crafted with ",l.jsx(Z_,{className:"w-3 h-3 text-brand-red fill-brand-red"})," for 3D Multimedia Innovation"]})]})]})}function OE({isOpen:t,onClose:e}){const{login:n,switchRoleDemo:i}=Nr(),{resetUserPassword:r,members:s}=Bn(),[a,o]=ye.useState("login"),[c,u]=ye.useState(""),[f,h]=ye.useState(""),[p,x]=ye.useState(""),[y,_]=ye.useState(""),[m,d]=ye.useState(""),[v,g]=ye.useState(""),[S,A]=ye.useState(""),[b,E]=ye.useState(""),[L,z]=ye.useState("");if(!t)return null;const M=B=>{B.preventDefault(),x("");const V=n(c,f);V.success?e():x(V.message)},R=B=>{i(B),e()},ee=B=>{if(B.preventDefault(),x(""),!s.some(U=>U.email.toLowerCase()===y.toLowerCase())){x("এই ইমেইল ঠিকানাটি ডাটাবেসে নিবন্ধিত নয়!");return}const te=String(Math.floor(1e5+Math.random()*9e5));g(te),o("forgot_otp")},Z=B=>{B.preventDefault(),x(""),m.trim()===v||m.trim()==="123456"?o("forgot_reset"):x("প্রদত্ত OTP কোডটি সঠিক নয়! সঠিক কোড দিন (বা 123456 টাইপ করুন)।")},D=B=>{if(B.preventDefault(),x(""),S.length<3){x("পাসওয়ার্ড অন্তত ৩ অক্ষরের হতে হবে!");return}if(S!==b){x("পাসওয়ার্ড দুটি মিলছে না!");return}const V=r(y,S);V.success?(z("আপনার পাসওয়ার্ড সফলভাবে রিসেট করা হয়েছে! নতুন পাসওয়ার্ড দিয়ে লগইন করুন।"),setTimeout(()=>{o("login"),u(y),h(S),z("")},2e3)):x(V.message)};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/85 backdrop-blur-md animate-fade-in",children:l.jsxs("div",{className:"relative w-full max-w-md glass-panel rounded-3xl p-6 sm:p-8 border border-brand-red/40 shadow-[0_0_50px_rgba(255,0,51,0.25)]",children:[l.jsx("button",{onClick:e,className:"absolute top-4 right-4 p-2 rounded-full glass-panel text-slate-400 hover:text-white",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsxs("div",{className:"text-center mb-6",children:[l.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-brand-red via-brand-crimson to-brand-wine p-0.5 mx-auto mb-3 shadow-lg shadow-brand-red/40",children:l.jsx("div",{className:"w-full h-full bg-dark-900 rounded-[14px] p-2 flex items-center justify-center",children:l.jsx("img",{src:"/logo.svg",alt:"Logo",className:"w-full h-full object-contain"})})}),l.jsx("h3",{className:"text-2xl font-black text-white",children:a==="login"?"পোর্টালে প্রবেশ করুন":"পাসওয়ার্ড রিসেট করুন"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:a==="login"?"অ্যাডমিন বা মেম্বার হিসেবে সাইন ইন করুন":"আপনার নিবন্ধিত ইমেইলে ভেরিফিকেশন পাঠানো হবে"})]}),p&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-rose-950/50 border border-rose-500/40 text-rose-400 text-xs flex items-center gap-2",children:[l.jsx(q_,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:p})]}),L&&l.jsxs("div",{className:"mb-4 p-3 rounded-xl bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2",children:[l.jsx(Ls,{className:"w-4 h-4 shrink-0"}),l.jsx("span",{children:L})]}),a==="login"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-6",children:[l.jsxs("button",{type:"button",onClick:()=>R("admin"),className:"p-3 rounded-2xl glass-panel border border-brand-red/40 hover:bg-brand-red/10 transition-colors text-left group",children:[l.jsx(Rr,{className:"w-5 h-5 text-brand-red mb-1 group-hover:scale-110 transition-transform"}),l.jsx("span",{className:"block text-xs font-bold text-white",children:"অ্যাডমিন ডেমো"}),l.jsx("span",{className:"block text-[10px] text-slate-400",children:"ম্যানেজার / সিইও রোল"})]}),l.jsxs("button",{type:"button",onClick:()=>R("member"),className:"p-3 rounded-2xl glass-panel border border-brand-amber/40 hover:bg-brand-amber/10 transition-colors text-left group",children:[l.jsx(ka,{className:"w-5 h-5 text-brand-amber mb-1 group-hover:scale-110 transition-transform"}),l.jsx("span",{className:"block text-xs font-bold text-white",children:"মেম্বার ডেমো"}),l.jsx("span",{className:"block text-[10px] text-slate-400",children:"টিম কর্মী রোল"})]})]}),l.jsxs("div",{className:"relative my-4 text-center",children:[l.jsx("div",{className:"absolute inset-0 flex items-center",children:l.jsx("div",{className:"w-full border-t border-slate-800"})}),l.jsx("span",{className:"relative px-3 bg-dark-900 text-[11px] text-slate-500 font-medium",children:"অথবা ইমেইল দিয়ে সাইন ইন করুন"})]}),l.jsxs("form",{onSubmit:M,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"ইমেইল ঠিকানা"}),l.jsxs("div",{className:"relative",children:[l.jsx($u,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),l.jsx("input",{type:"text",required:!0,placeholder:"admin@kuakatamultimedia.com",value:c,onChange:B=>u(B.target.value),className:"w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-1",children:[l.jsx("label",{className:"text-xs font-medium text-slate-300",children:"পাসওয়ার্ড"}),l.jsx("button",{type:"button",onClick:()=>{o("forgot_email"),x(""),_(c||"admin@kuakatamultimedia.com")},className:"text-[11px] font-bold text-brand-red hover:underline",children:"পাসওয়ার্ড ভুলে গেছেন?"})]}),l.jsxs("div",{className:"relative",children:[l.jsx(pl,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),l.jsx("input",{type:"password",required:!0,placeholder:"••••••••",value:f,onChange:B=>h(B.target.value),className:"w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"})]})]}),l.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg shadow-brand-red/30 hover:scale-[1.01] transition-transform",children:"লগইন করুন"})]})]}),a==="forgot_email"&&l.jsxs("form",{onSubmit:ee,className:"space-y-4",children:[l.jsx("p",{className:"text-xs text-slate-300",children:"আপনার অ্যাকাউন্টের ইমেইল লিখুন। পাসওয়ার্ড রিসেট করার জন্য একটি ৬-সংখ্যার OTP কোড তৈরি করা হবে।"}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"নিবন্ধিত ইমেইল"}),l.jsxs("div",{className:"relative",children:[l.jsx($u,{className:"w-4 h-4 text-slate-400 absolute left-3 top-3"}),l.jsx("input",{type:"email",required:!0,placeholder:"admin@kuakatamultimedia.com",value:y,onChange:B=>_(B.target.value),className:"w-full pl-9 pr-3 py-2.5 rounded-xl text-xs glass-input"})]})]}),l.jsxs("div",{className:"flex gap-2 pt-2",children:[l.jsxs("button",{type:"button",onClick:()=>o("login"),className:"w-1/3 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300 flex items-center justify-center gap-1",children:[l.jsx(H_,{className:"w-4 h-4"}),l.jsx("span",{children:"পিছনে"})]}),l.jsxs("button",{type:"submit",className:"w-2/3 py-2.5 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md flex items-center justify-center gap-1.5",children:[l.jsx(Mg,{className:"w-4 h-4"}),l.jsx("span",{children:"OTP কোড পাঠান"})]})]})]}),a==="forgot_otp"&&l.jsxs("form",{onSubmit:Z,className:"space-y-4",children:[l.jsxs("div",{className:"p-3 rounded-2xl bg-brand-red/10 border border-brand-red/30 text-center space-y-1",children:[l.jsx("span",{className:"text-[11px] text-slate-400 block font-semibold",children:"আপনার ভেরিফিকেশন OTP কোড:"}),l.jsx("span",{className:"text-2xl font-black text-brand-red tracking-widest block font-mono",children:v}),l.jsx("span",{className:"text-[10px] text-slate-400 block",children:"(টেস্টিংয়ের জন্য স্ক্রিনে এবং 123456 সাপোর্ট করছে)"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"৬-সংখ্যার OTP লিখুন"}),l.jsx("input",{type:"text",required:!0,maxLength:6,placeholder:"যেমন: 123456",value:m,onChange:B=>d(B.target.value),className:"w-full px-4 py-2.5 rounded-xl text-center text-lg tracking-widest font-mono glass-input font-bold"})]}),l.jsxs("div",{className:"flex gap-2 pt-2",children:[l.jsx("button",{type:"button",onClick:()=>o("forgot_email"),className:"w-1/3 py-2.5 rounded-xl text-xs font-semibold glass-panel text-slate-300",children:"পুনরায়"}),l.jsx("button",{type:"submit",className:"w-2/3 py-2.5 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md",children:"OTP ভেরিফাই করুন"})]})]}),a==="forgot_reset"&&l.jsxs("form",{onSubmit:D,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"নতুন পাসওয়ার্ড লিখুন"}),l.jsx("input",{type:"password",required:!0,placeholder:"নতুন পাসওয়ার্ড...",value:S,onChange:B=>A(B.target.value),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs font-medium text-slate-300 mb-1",children:"নতুন পাসওয়ার্ড নিশ্চিত করুন"}),l.jsx("input",{type:"password",required:!0,placeholder:"পুনরায় নতুন পাসওয়ার্ড লিখুন...",value:b,onChange:B=>E(B.target.value),className:"w-full px-4 py-2.5 rounded-xl text-xs glass-input"})]}),l.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg",children:"পাসওয়ার্ড সেভ করুন"})]})]})})}const im={url:localStorage.getItem("km_supabase_url")||"",anonKey:localStorage.getItem("km_supabase_key")||""},jE=(t,e)=>{localStorage.setItem("km_supabase_url",t),localStorage.setItem("km_supabase_key",e),window.location.reload()};function zE(){const{members:t,addMember:e,updateMember:n,deleteMember:i}=Bn(),[r,s]=ye.useState(""),[a,o]=ye.useState(!1),[c,u]=ye.useState(null),[f,h]=ye.useState({name:"",email:"",phone:"",role:"member",designation:"৩ডি অ্যানিমেটর",dept:"3D & VFX",basic_salary:5e4,skills:"Blender, Three.js, Maya"}),p=t.filter(_=>_.name.toLowerCase().includes(r.toLowerCase())||_.email.toLowerCase().includes(r.toLowerCase())||_.dept.toLowerCase().includes(r.toLowerCase())),x=_=>{_.preventDefault();const m=typeof f.skills=="string"?f.skills.split(",").map(d=>d.trim()):f.skills;e({...f,basic_salary:Number(f.basic_salary),skills:m,join_date:new Date().toISOString().split("T")[0]}),o(!1),h({name:"",email:"",phone:"",role:"member",designation:"৩ডি অ্যানিমেটর",dept:"3D & VFX",basic_salary:5e4,skills:"Blender, Three.js, Maya"})},y=_=>{if(_.preventDefault(),!c)return;const m=typeof c.skills=="string"?c.skills.split(",").map(d=>d.trim()):c.skills;n({...c,basic_salary:Number(c.basic_salary),skills:m}),u(null)};return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[l.jsxs("div",{className:"relative w-full sm:w-72",children:[l.jsx(Sg,{className:"w-4 h-4 text-slate-400 absolute left-3.5 top-3"}),l.jsx("input",{type:"text",placeholder:"মেম্বার নাম, ইমেইল বা বিভাগ...",value:r,onChange:_=>s(_.target.value),className:"w-full pl-10 pr-4 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("button",{id:"btn-add-member",onClick:()=>o(!0),className:"w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-brand-cyan to-brand-purple text-dark-900 shadow-md hover:scale-105 transition-transform flex items-center justify-center gap-2",children:[l.jsx(hy,{className:"w-4 h-4"}),l.jsx("span",{children:"নতুন মেম্বার যুক্ত করুন"})]})]}),l.jsx("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800",children:l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-dark-800/80 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-4",children:"মেম্বার নাম & প্রোফাইল"}),l.jsx("th",{className:"p-4",children:"রোল (Role)"}),l.jsx("th",{className:"p-4",children:"ডিপার্টমেন্ট"}),l.jsx("th",{className:"p-4",children:"বেসিক বেতন"}),l.jsx("th",{className:"p-4",children:"যোগদানের তারিখ"}),l.jsx("th",{className:"p-4 text-right",children:"অ্যাকশন"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-800/60",children:p.map(_=>l.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[l.jsx("td",{className:"p-4",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("img",{src:_.avatar,alt:_.name,className:"w-10 h-10 rounded-full object-cover border border-brand-cyan/40"}),l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-white block",children:_.name}),l.jsx("span",{className:"text-[11px] text-slate-400",children:_.designation})]})]})}),l.jsx("td",{className:"p-4",children:l.jsxs("span",{className:`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold ${_.role==="admin"?"bg-brand-cyan/10 text-brand-cyan border border-brand-cyan/30":"bg-brand-purple/10 text-brand-purple border border-brand-purple/30"}`,children:[_.role==="admin"?l.jsx(Rr,{className:"w-3 h-3"}):l.jsx(ka,{className:"w-3 h-3"}),_.role==="admin"?"অ্যাডমিন (Admin)":"টিম মেম্বার"]})}),l.jsx("td",{className:"p-4 text-slate-300 font-medium",children:_.dept}),l.jsxs("td",{className:"p-4 font-bold text-emerald-400",children:["৳ ",_.basic_salary.toLocaleString()]}),l.jsx("td",{className:"p-4 text-slate-400",children:_.join_date}),l.jsxs("td",{className:"p-4 text-right space-x-2",children:[l.jsx("button",{onClick:()=>u(_),title:"সম্পাদনা",className:"p-2 rounded-lg glass-panel text-slate-300 hover:text-brand-cyan hover:border-brand-cyan/40",children:l.jsx(_g,{className:"w-3.5 h-3.5"})}),_.role!=="admin"&&l.jsx("button",{onClick:()=>{window.confirm(`${_.name}-কে রিমুভ করতে নিশ্চিত?`)&&i(_.id)},title:"রিমুভ করুন",className:"p-2 rounded-lg glass-panel text-slate-300 hover:text-rose-400 hover:border-rose-500/40",children:l.jsx(bg,{className:"w-3.5 h-3.5"})})]})]},_.id))})]})})}),a&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:l.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[l.jsx("button",{onClick:()=>o(!1),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"নতুন মেম্বার যুক্ত করুন"}),l.jsxs("form",{onSubmit:x,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পূর্ণ নাম"}),l.jsx("input",{type:"text",required:!0,placeholder:"যেমন: সাকিবা ইসলাম",value:f.name,onChange:_=>h({...f,name:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ইমেইল ঠিকানা"}),l.jsx("input",{type:"email",required:!0,placeholder:"sakiba@kuakatamultimedia.com",value:f.email,onChange:_=>h({...f,email:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ফোন নম্বর"}),l.jsx("input",{type:"text",placeholder:"+880 1700-000000",value:f.phone,onChange:_=>h({...f,phone:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পদবি (Designation)"}),l.jsx("input",{type:"text",required:!0,value:f.designation,onChange:_=>h({...f,designation:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ডিপার্টমেন্ট"}),l.jsxs("select",{value:f.dept,onChange:_=>h({...f,dept:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input",children:[l.jsx("option",{value:"3D & VFX",children:"3D & VFX"}),l.jsx("option",{value:"Web Dev",children:"Web Dev"}),l.jsx("option",{value:"Video Production",children:"Video Production"})]})]})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বেসিক বেতন (টাকা)"}),l.jsx("input",{type:"number",required:!0,value:f.basic_salary,onChange:_=>h({...f,basic_salary:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"রোল (Role)"}),l.jsxs("select",{value:f.role,onChange:_=>h({...f,role:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input",children:[l.jsx("option",{value:"member",children:"টিম মেম্বার"}),l.jsx("option",{value:"admin",children:"অ্যাডমিন (Admin)"})]})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বিশেষ দক্ষতা (কমা দিয়ে লিখুন)"}),l.jsx("input",{type:"text",value:f.skills,onChange:_=>h({...f,skills:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:()=>o(!1),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বাতিল"}),l.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900",children:"মেম্বার সেভ করুন"})]})]})]})}),c&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:l.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[l.jsx("button",{onClick:()=>u(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"মেম্বার তথ্য আপডেট করুন"}),l.jsxs("form",{onSubmit:y,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পূর্ণ নাম"}),l.jsx("input",{type:"text",required:!0,value:c.name,onChange:_=>u({...c,name:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"পদবি"}),l.jsx("input",{type:"text",required:!0,value:c.designation,onChange:_=>u({...c,designation:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বেসিক বেতন (টাকা)"}),l.jsx("input",{type:"number",required:!0,value:c.basic_salary,onChange:_=>u({...c,basic_salary:_.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]})]}),l.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:()=>u(null),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বাতিল"}),l.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900",children:"আপডেট সেভ করুন"})]})]})]})})]})}function BE(){const{members:t,attendance:e,setDailyAttendance:n}=Bn(),i=new Date().toISOString().split("T")[0],[r,s]=ye.useState(i),a=y=>{const _=e.find(m=>m.user_id===y&&m.date===r);return _?_.status:"Present"},o=(y,_)=>{n(y,r,_)},c=()=>{t.forEach(y=>{n(y.id,r,"Present")})},u=t.map(y=>a(y.id)),f=u.filter(y=>y==="Present").length,h=u.filter(y=>y==="Absent").length,p=u.filter(y=>y==="Leave").length,x=u.filter(y=>y==="Half-day").length;return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[l.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[l.jsx(Na,{className:"w-5 h-5 text-brand-cyan"}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-[10px] text-slate-400 font-semibold uppercase",children:"তারিখ নির্বাচন করুন"}),l.jsx("input",{type:"date",value:r,onChange:y=>s(y.target.value),className:"px-3 py-1.5 rounded-xl text-xs glass-input text-white font-bold"})]})]}),l.jsxs("button",{id:"btn-mark-all-present",onClick:c,className:"w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-dark-900 transition-all flex items-center justify-center gap-2",children:[l.jsx(V_,{className:"w-4 h-4"}),l.jsx("span",{children:"সবাইকে উপস্থিত মার্ক করুন (Mark All Present)"})]})]}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-emerald-500/20 text-center",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"উপস্থিত (Present)"}),l.jsxs("span",{className:"text-2xl font-extrabold text-emerald-400",children:[f," জন"]})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-rose-500/20 text-center",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"অনুপস্থিত (Absent)"}),l.jsxs("span",{className:"text-2xl font-extrabold text-rose-400",children:[h," জন"]})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-amber-500/20 text-center",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"ছুটি (Leave)"}),l.jsxs("span",{className:"text-2xl font-extrabold text-amber-400",children:[p," জন"]})]}),l.jsxs("div",{className:"glass-panel p-4 rounded-xl border border-sky-500/20 text-center",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"হাফ-ডে (Half-day)"}),l.jsxs("span",{className:"text-2xl font-extrabold text-sky-400",children:[x," জন"]})]})]}),l.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800",children:[l.jsxs("div",{className:"p-4 bg-dark-800/60 border-b border-slate-800 flex justify-between items-center",children:[l.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[l.jsx(qu,{className:"w-4 h-4 text-brand-cyan"}),"তারিখ: ",l.jsx("span",{className:"text-brand-cyan",children:r})," - হাজিরা এন্ট্রি লিস্ট"]}),l.jsxs("span",{className:"text-xs text-slate-400",children:["মোট মেম্বার: ",t.length," জন"]})]}),l.jsx("div",{className:"divide-y divide-slate-800/60",children:t.map(y=>{const _=a(y.id);return l.jsxs("div",{className:"p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-slate-800/30 transition-colors",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("img",{src:y.avatar,alt:y.name,className:"w-10 h-10 rounded-full object-cover border border-slate-700"}),l.jsxs("div",{children:[l.jsx("h4",{className:"text-sm font-bold text-white",children:y.name}),l.jsxs("p",{className:"text-[11px] text-slate-400",children:[y.designation," • (",y.dept,")"]})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2 w-full sm:w-auto",children:[l.jsxs("button",{onClick:()=>o(y.id,"Present"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Present"?"bg-emerald-500 text-dark-900 shadow-md shadow-emerald-500/20":"glass-panel text-slate-400 hover:text-emerald-400"}`,children:[l.jsx(Ls,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"উপস্থিত"})]}),l.jsxs("button",{onClick:()=>o(y.id,"Absent"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Absent"?"bg-rose-500 text-white shadow-md shadow-rose-500/20":"glass-panel text-slate-400 hover:text-rose-400"}`,children:[l.jsx($_,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"অনুপস্থিত"})]}),l.jsxs("button",{onClick:()=>o(y.id,"Leave"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Leave"?"bg-amber-500 text-dark-900 shadow-md shadow-amber-500/20":"glass-panel text-slate-400 hover:text-amber-400"}`,children:[l.jsx(dy,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"ছুটি"})]}),l.jsxs("button",{onClick:()=>o(y.id,"Half-day"),className:`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${_==="Half-day"?"bg-sky-500 text-dark-900 shadow-md shadow-sky-500/20":"glass-panel text-slate-400 hover:text-sky-400"}`,children:[l.jsx(qu,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"হাফ-ডে"})]})]})]},y.id)})})]})]})}var df={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var N=new OffscreenCanvas(1,1),C=N.getContext("2d");C.fillRect(0,0,1,1);var Y=N.transferToImageBitmap();C.createPattern(Y,"no-repeat")}catch{return!1}return!0}();function c(){}function u(N){var C=n.exports.Promise,Y=C!==void 0?C:e.Promise;return typeof Y=="function"?new Y(N):(N(c,c),null)}var f=function(N,C){return{transform:function(Y){if(N)return Y;if(C.has(Y))return C.get(Y);var se=new OffscreenCanvas(Y.width,Y.height),F=se.getContext("2d");return F.drawImage(Y,0,0),C.set(Y,se),se},clear:function(){C.clear()}}}(o,new Map),h=function(){var N=Math.floor(16.666666666666668),C,Y,se={},F=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function($){var J=Math.random();return se[J]=requestAnimationFrame(function ie(oe){F===oe||F+N-1<oe?(F=oe,delete se[J],$()):se[J]=requestAnimationFrame(ie)}),J},Y=function($){se[$]&&cancelAnimationFrame(se[$])}):(C=function($){return setTimeout($,N)},Y=function($){return clearTimeout($)}),{frame:C,cancel:Y}}(),p=function(){var N,C,Y={};function se(F){function $(J,ie){F.postMessage({options:J||{},callback:ie})}F.init=function(ie){var oe=ie.transferControlToOffscreen();F.postMessage({canvas:oe},[oe])},F.fire=function(ie,oe,le){if(C)return $(ie,null),C;var Te=Math.random().toString(36).slice(2);return C=u(function(ge){function k(qe){qe.data.callback===Te&&(delete Y[Te],F.removeEventListener("message",k),C=null,f.clear(),le(),ge())}F.addEventListener("message",k),$(ie,Te),Y[Te]=k.bind(null,{data:{callback:Te}})}),C},F.reset=function(){F.postMessage({reset:!0});for(var ie in Y)Y[ie](),delete Y[ie]}}return function(){if(N)return N;if(!i&&s){var F=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([F])))}catch($){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",$),null}se(N)}return N}}(),x={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function y(N,C){return C?C(N):N}function _(N){return N!=null}function m(N,C,Y){return y(N&&_(N[C])?N[C]:x[C],Y)}function d(N){return N<0?0:Math.floor(N)}function v(N,C){return Math.floor(Math.random()*(C-N))+N}function g(N){return parseInt(N,16)}function S(N){return N.map(A)}function A(N){var C=String(N).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:g(C.substring(0,2)),g:g(C.substring(2,4)),b:g(C.substring(4,6))}}function b(N){var C=m(N,"origin",Object);return C.x=m(C,"x",Number),C.y=m(C,"y",Number),C}function E(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function L(N){var C=N.getBoundingClientRect();N.width=C.width,N.height=C.height}function z(N){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=N,C}function M(N,C,Y,se,F,$,J,ie,oe){N.save(),N.translate(C,Y),N.rotate($),N.scale(se,F),N.arc(0,0,1,J,ie,oe),N.restore()}function R(N){var C=N.angle*(Math.PI/180),Y=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-C+(.5*Y-Math.random()*Y),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function ee(N,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var Y=C.tick++/C.totalTicks,se=C.x+C.random*C.tiltCos,F=C.y+C.random*C.tiltSin,$=C.wobbleX+C.random*C.tiltCos,J=C.wobbleY+C.random*C.tiltSin;if(N.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-Y)+")",N.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))N.fill(te(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs($-se)*.1,Math.abs(J-F)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var ie=Math.PI/10*C.wobble,oe=Math.abs($-se)*.1,le=Math.abs(J-F)*.1,Te=C.shape.bitmap.width*C.scalar,ge=C.shape.bitmap.height*C.scalar,k=new DOMMatrix([Math.cos(ie)*oe,Math.sin(ie)*oe,-Math.sin(ie)*le,Math.cos(ie)*le,C.x,C.y]);k.multiplySelf(new DOMMatrix(C.shape.matrix));var qe=N.createPattern(f.transform(C.shape.bitmap),"no-repeat");qe.setTransform(k),N.globalAlpha=1-Y,N.fillStyle=qe,N.fillRect(C.x-Te/2,C.y-ge/2,Te,ge),N.globalAlpha=1}else if(C.shape==="circle")N.ellipse?N.ellipse(C.x,C.y,Math.abs($-se)*C.ovalScalar,Math.abs(J-F)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):M(N,C.x,C.y,Math.abs($-se)*C.ovalScalar,Math.abs(J-F)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ue=Math.PI/2*3,Ee=4*C.scalar,Se=8*C.scalar,Le=C.x,Ce=C.y,De=5,Ze=Math.PI/De;De--;)Le=C.x+Math.cos(ue)*Se,Ce=C.y+Math.sin(ue)*Se,N.lineTo(Le,Ce),ue+=Ze,Le=C.x+Math.cos(ue)*Ee,Ce=C.y+Math.sin(ue)*Ee,N.lineTo(Le,Ce),ue+=Ze;else N.moveTo(Math.floor(C.x),Math.floor(C.y)),N.lineTo(Math.floor(C.wobbleX),Math.floor(F)),N.lineTo(Math.floor($),Math.floor(J)),N.lineTo(Math.floor(se),Math.floor(C.wobbleY));return N.closePath(),N.fill(),C.tick<C.totalTicks}function Z(N,C,Y,se,F){var $=C.slice(),J=N.getContext("2d"),ie,oe,le=u(function(Te){function ge(){ie=oe=null,J.clearRect(0,0,se.width,se.height),f.clear(),F(),Te()}function k(){i&&!(se.width===r.width&&se.height===r.height)&&(se.width=N.width=r.width,se.height=N.height=r.height),!se.width&&!se.height&&(Y(N),se.width=N.width,se.height=N.height),J.clearRect(0,0,se.width,se.height),$=$.filter(function(qe){return ee(J,qe)}),$.length?ie=h.frame(k):ge()}ie=h.frame(k),oe=ge});return{addFettis:function(Te){return $=$.concat(Te),le},canvas:N,promise:le,reset:function(){ie&&h.cancel(ie),oe&&oe()}}}function D(N,C){var Y=!N,se=!!m(C||{},"resize"),F=!1,$=m(C,"disableForReducedMotion",Boolean),J=s&&!!m(C||{},"useWorker"),ie=J?p():null,oe=Y?E:L,le=N&&ie?!!N.__confetti_initialized:!1,Te=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ge;function k(ue,Ee,Se){for(var Le=m(ue,"particleCount",d),Ce=m(ue,"angle",Number),De=m(ue,"spread",Number),Ze=m(ue,"startVelocity",Number),P=m(ue,"decay",Number),w=m(ue,"gravity",Number),K=m(ue,"drift",Number),Q=m(ue,"colors",S),ae=m(ue,"ticks",Number),ne=m(ue,"shapes"),ke=m(ue,"scalar"),Re=!!m(ue,"flat"),de=b(ue),pe=Le,Ie=[],ce=N.width*de.x,pt=N.height*de.y;pe--;)Ie.push(R({x:ce,y:pt,angle:Ce,spread:De,startVelocity:Ze,color:Q[pe%Q.length],shape:ne[v(0,ne.length)],ticks:ae,decay:P,gravity:w,drift:K,scalar:ke,flat:Re}));return ge?ge.addFettis(Ie):(ge=Z(N,Ie,oe,Ee,Se),ge.promise)}function qe(ue){var Ee=$||m(ue,"disableForReducedMotion",Boolean),Se=m(ue,"zIndex",Number);if(Ee&&Te)return u(function(Ze){Ze()});Y&&ge?N=ge.canvas:Y&&!N&&(N=z(Se),document.body.appendChild(N)),se&&!le&&oe(N);var Le={width:N.width,height:N.height};ie&&!le&&ie.init(N),le=!0,ie&&(N.__confetti_initialized=!0);function Ce(){if(ie){var Ze={getBoundingClientRect:function(){if(!Y)return N.getBoundingClientRect()}};oe(Ze),ie.postMessage({resize:{width:Ze.width,height:Ze.height}});return}Le.width=Le.height=null}function De(){ge=null,se&&(F=!1,e.removeEventListener("resize",Ce)),Y&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,le=!1)}return se&&!F&&(F=!0,e.addEventListener("resize",Ce,!1)),ie?ie.fire(ue,Le,De):k(ue,Le,De)}return qe.reset=function(){ie&&ie.reset(),ge&&ge.reset()},qe}var B;function V(){return B||(B=D(null,{useWorker:!0,resize:!0})),B}function te(N,C,Y,se,F,$,J){var ie=new Path2D(N),oe=new Path2D;oe.addPath(ie,new DOMMatrix(C));var le=new Path2D;return le.addPath(oe,new DOMMatrix([Math.cos(J)*F,Math.sin(J)*F,-Math.sin(J)*$,Math.cos(J)*$,Y,se])),le}function U(N){if(!a)throw new Error("path confetti are not supported in this browser");var C,Y;typeof N=="string"?C=N:(C=N.path,Y=N.matrix);var se=new Path2D(C),F=document.createElement("canvas"),$=F.getContext("2d");if(!Y){for(var J=1e3,ie=J,oe=J,le=0,Te=0,ge,k,qe=0;qe<J;qe+=2)for(var ue=0;ue<J;ue+=2)$.isPointInPath(se,qe,ue,"nonzero")&&(ie=Math.min(ie,qe),oe=Math.min(oe,ue),le=Math.max(le,qe),Te=Math.max(Te,ue));ge=le-ie,k=Te-oe;var Ee=10,Se=Math.min(Ee/ge,Ee/k);Y=[Se,0,0,Se,-Math.round(ge/2+ie)*Se,-Math.round(k/2+oe)*Se]}return{type:"path",path:C,matrix:Y}}function H(N){var C,Y=1,se="#000000",F='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?C=N:(C=N.text,Y="scalar"in N?N.scalar:Y,F="fontFamily"in N?N.fontFamily:F,se="color"in N?N.color:se);var $=10*Y,J=""+$+"px "+F,ie=new OffscreenCanvas($,$),oe=ie.getContext("2d");oe.font=J;var le=oe.measureText(C),Te=Math.ceil(le.actualBoundingBoxRight+le.actualBoundingBoxLeft),ge=Math.ceil(le.actualBoundingBoxAscent+le.actualBoundingBoxDescent),k=2,qe=le.actualBoundingBoxLeft+k,ue=le.actualBoundingBoxAscent+k;Te+=k+k,ge+=k+k,ie=new OffscreenCanvas(Te,ge),oe=ie.getContext("2d"),oe.font=J,oe.fillStyle=se,oe.fillText(C,qe,ue);var Ee=1/Y;return{type:"bitmap",bitmap:ie.transferToImageBitmap(),matrix:[Ee,0,0,Ee,-Te*Ee/2,-ge*Ee/2]}}n.exports=function(){return V().apply(this,arguments)},n.exports.reset=function(){V().reset()},n.exports.create=D,n.exports.shapeFromPath=U,n.exports.shapeFromText=H})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),df,!1);const HE=df.exports;df.exports.create;function GE(){const{salaries:t,updateSalaryStatus:e,members:n}=Bn(),[i,r]=ye.useState(null),[s,a]=ye.useState(null),[o,c]=ye.useState(0),[u,f]=ye.useState(""),h=t.reduce((_,m)=>_+m.net_salary,0),p=t.filter(_=>_.paid_status==="Paid").reduce((_,m)=>_+m.net_salary,0),x=(_,m)=>{const d=m==="Paid"?"Pending":"Paid";if(d==="Paid")try{HE({particleCount:80,spread:70,origin:{y:.6}})}catch{}e(_.id,d)},y=_=>{_.preventDefault(),s&&(e(s.id,s.paid_status,o,u),a(null))};return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-brand-cyan/30",children:[l.jsx("span",{className:"text-xs text-slate-400 font-bold uppercase tracking-wider block",children:"মোট চলতি পে-রোল বাজেট"}),l.jsxs("span",{className:"text-3xl font-extrabold text-white mt-1 block",children:["৳ ",h.toLocaleString()]}),l.jsx("span",{className:"text-[11px] text-slate-400 mt-1 block",children:"জুলাই ২০২৬ সেশন"})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-emerald-500/30",children:[l.jsx("span",{className:"text-xs text-slate-400 font-bold uppercase tracking-wider block",children:"পরিশোধিত পে-রোল (Paid)"}),l.jsxs("span",{className:"text-3xl font-extrabold text-emerald-400 mt-1 block",children:["৳ ",p.toLocaleString()]}),l.jsxs("span",{className:"text-[11px] text-slate-400 mt-1 block",children:[t.filter(_=>_.paid_status==="Paid").length," জন মেম্বার পরিশোধিত"]})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-amber-500/30",children:[l.jsx("span",{className:"text-xs text-slate-400 font-bold uppercase tracking-wider block",children:"বকেয়া পে-রোল (Pending)"}),l.jsxs("span",{className:"text-3xl font-extrabold text-amber-400 mt-1 block",children:["৳ ",(h-p).toLocaleString()]}),l.jsxs("span",{className:"text-[11px] text-slate-400 mt-1 block",children:[t.filter(_=>_.paid_status==="Pending").length," জন মেম্বার বকেয়া"]})]})]}),l.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800",children:[l.jsx("div",{className:"p-4 bg-dark-800/80 border-b border-slate-800 flex justify-between items-center",children:l.jsxs("h3",{className:"text-sm font-bold text-white flex items-center gap-2",children:[l.jsx(ps,{className:"w-4 h-4 text-brand-cyan"}),"টিম মেম্বারদের বেতন ও পে-রোল স্টেটমেন্ট"]})}),l.jsx("div",{className:"overflow-x-auto",children:l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-dark-800/40 text-slate-400 font-semibold border-b border-slate-800 uppercase tracking-wider",children:l.jsxs("tr",{children:[l.jsx("th",{className:"p-4",children:"মেম্বার নাম"}),l.jsx("th",{className:"p-4",children:"বেসিক বেতন"}),l.jsx("th",{className:"p-4",children:"বোনাস (+)"}),l.jsx("th",{className:"p-4",children:"অনুপস্থিতি কর্তন (-)"}),l.jsx("th",{className:"p-4",children:"নিট প্রদেয় বেতন"}),l.jsx("th",{className:"p-4",children:"পেমেন্ট স্ট্যাটাস"}),l.jsx("th",{className:"p-4 text-right",children:"অ্যাকশন / স্লিপ"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-800/60",children:t.map(_=>{const m=_.paid_status==="Paid",d=n.find(v=>v.id===_.user_id);return l.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[l.jsx("td",{className:"p-4",children:l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("img",{src:(d==null?void 0:d.avatar)||"https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop",alt:_.user_name,className:"w-9 h-9 rounded-full object-cover border border-slate-700"}),l.jsxs("div",{children:[l.jsx("span",{className:"font-bold text-white block",children:_.user_name}),l.jsx("span",{className:"text-[11px] text-slate-400",children:_.month})]})]})}),l.jsxs("td",{className:"p-4 text-slate-300",children:["৳ ",_.basic_salary.toLocaleString()]}),l.jsxs("td",{className:"p-4 text-emerald-400 font-semibold flex items-center gap-1",children:["+৳ ",_.bonus.toLocaleString(),l.jsx("button",{onClick:()=>{a(_),c(_.bonus),f(_.note||"")},className:"p-1 rounded text-slate-400 hover:text-brand-cyan",title:"বোনাস সম্পাদনা",children:l.jsx(_g,{className:"w-3 h-3"})})]}),l.jsxs("td",{className:"p-4 text-rose-400 font-semibold",children:["-৳ ",_.deductions.toLocaleString(),l.jsxs("span",{className:"block text-[10px] text-slate-500 font-normal",children:["(",_.absent_days," দিন অনুপস্থিত)"]})]}),l.jsxs("td",{className:"p-4 text-base font-extrabold text-brand-cyan",children:["৳ ",_.net_salary.toLocaleString()]}),l.jsx("td",{className:"p-4",children:l.jsxs("button",{onClick:()=>x(_,_.paid_status),className:`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${m?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/30":"bg-amber-500/20 text-amber-400 border border-amber-500/30"}`,children:[m?l.jsx(Ls,{className:"w-3.5 h-3.5"}):l.jsx(qu,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:m?"পরিশোধিত (Paid)":"বকেয়া (Pending)"})]})}),l.jsx("td",{className:"p-4 text-right",children:l.jsxs("button",{onClick:()=>r(_),className:"inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold glass-panel text-slate-200 hover:text-brand-cyan hover:border-brand-cyan/40",children:[l.jsx(K_,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"পে-স্লিপ দেখুন"})]})})]},_.id)})})]})})]}),i&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:l.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-brand-cyan/40 shadow-2xl",children:[l.jsx("button",{onClick:()=>r(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsxs("div",{className:"text-center pb-4 border-b border-slate-800",children:[l.jsx("span",{className:"text-xs uppercase font-extrabold tracking-widest text-brand-cyan",children:"KUAKATA MULTIMEDIA PAYROLL"}),l.jsx("h3",{className:"text-2xl font-extrabold text-white mt-1",children:"মাসিক বেতন পে-স্লিপ"}),l.jsxs("p",{className:"text-xs text-slate-400",children:["সেশন: ",i.month]})]}),l.jsxs("div",{className:"py-6 space-y-3 text-xs",children:[l.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60",children:[l.jsx("span",{className:"text-slate-400",children:"মেম্বারের নাম:"}),l.jsx("span",{className:"font-bold text-white",children:i.user_name})]}),l.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60",children:[l.jsx("span",{className:"text-slate-400",children:"বেসিক বেতন:"}),l.jsxs("span",{className:"font-semibold text-slate-200",children:["৳ ",i.basic_salary.toLocaleString()]})]}),l.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60 text-emerald-400",children:[l.jsx("span",{children:"পারফরম্যান্স বোনাস:"}),l.jsxs("span",{className:"font-semibold",children:["+৳ ",i.bonus.toLocaleString()]})]}),l.jsxs("div",{className:"flex justify-between py-1 border-b border-slate-800/60 text-rose-400",children:[l.jsx("span",{children:"অনুপস্থিতি জরিমানা/ডিডাকশন:"}),l.jsxs("span",{className:"font-semibold",children:["-৳ ",i.deductions.toLocaleString()]})]}),l.jsxs("div",{className:"flex justify-between py-2 text-sm font-extrabold bg-dark-800 p-3 rounded-xl border border-brand-cyan/30",children:[l.jsx("span",{className:"text-white",children:"সর্বমোট প্রদেয় বেতন:"}),l.jsxs("span",{className:"text-brand-cyan",children:["৳ ",i.net_salary.toLocaleString()]})]}),l.jsxs("div",{className:"pt-2",children:[l.jsx("span",{className:"text-slate-400 block mb-1",children:"পেমেন্ট স্ট্যাটাস:"}),l.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold ${i.paid_status==="Paid"?"bg-emerald-500/20 text-emerald-400":"bg-amber-500/20 text-amber-400"}`,children:i.paid_status==="Paid"?`Paid (ট্রানজেকশন ID: ${i.transaction_id||"TXN-998811"})`:"Pending"})]})]}),l.jsxs("div",{className:"pt-4 border-t border-slate-800 flex justify-end gap-2",children:[l.jsx("button",{onClick:()=>r(null),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বন্ধ করুন"}),l.jsxs("button",{onClick:()=>window.print(),className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900 flex items-center gap-1.5",children:[l.jsx(oy,{className:"w-4 h-4"}),l.jsx("span",{children:"প্রিন্ট / ডাউনলোড স্লিপ"})]})]})]})}),s&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:l.jsxs("div",{className:"relative w-full max-w-md glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[l.jsx("button",{onClick:()=>a(null),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-lg font-bold text-white mb-4",children:"বোনাস ও নোট যুক্ত করুন"}),l.jsxs("form",{onSubmit:y,className:"space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"বোনাস পরিমাণ (টাকা)"}),l.jsx("input",{type:"number",value:o,onChange:_=>c(_.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"অতিরিক্ত নোট"}),l.jsx("input",{type:"text",placeholder:"যেমন: ঈদের স্পেশাল বোনাস",value:u,onChange:_=>f(_.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),l.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:()=>a(null),className:"px-4 py-2 rounded-xl glass-panel text-slate-300",children:"বাতিল"}),l.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl font-bold bg-brand-cyan text-dark-900",children:"সেভ করুন"})]})]})]})})]})}function VE(){const{projects:t,addProject:e,deleteProject:n}=Bn(),[i,r]=ye.useState(!1),[s,a]=ye.useState({title:"",category:"3D & Web",description:"",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/newproject",client:"কুয়াকাটা মাল্টিমিডিয়া ল্যাব",tags:"Three.js, WebGL, Motion"}),o=c=>{c.preventDefault();const u=typeof s.tags=="string"?s.tags.split(",").map(f=>f.trim()):s.tags;e({...s,tags:u,featured:!0}),r(!1),a({title:"",category:"3D & Web",description:"",image:"https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&auto=format&fit=crop",demo_url:"https://www.kuakatamultimedia.com/demo/newproject",client:"কুয়াকাটা মাল্টিমিডিয়া ল্যাব",tags:"Three.js, WebGL, Motion"})};return l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-slate-800",children:[l.jsxs("div",{children:[l.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[l.jsx(Ca,{className:"w-5 h-5 text-brand-cyan"}),"পোর্টফোলিও প্রজেক্ট ম্যানেজমেন্ট"]}),l.jsx("p",{className:"text-xs text-slate-400",children:"পাবলিক হোমপেজে ৩ডি ক্যারেসলে প্রদর্শিত প্রজেক্টসমূহ"})]}),l.jsxs("button",{onClick:()=>r(!0),className:"px-5 py-2.5 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900 shadow-md hover:scale-105 transition-transform flex items-center gap-2",children:[l.jsx(yg,{className:"w-4 h-4"}),l.jsx("span",{children:"নতুন ৩ডি প্রজেক্ট যুক্ত করুন"})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:t.map(c=>l.jsxs("div",{className:"glass-panel rounded-2xl overflow-hidden border border-slate-800 flex flex-col justify-between",children:[l.jsxs("div",{className:"relative h-48 bg-dark-800",children:[l.jsx("img",{src:c.image,alt:c.title,className:"w-full h-full object-cover"}),l.jsx("span",{className:"absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-dark-900/80 text-brand-cyan border border-brand-cyan/30",children:c.category}),l.jsx("button",{onClick:()=>{window.confirm("এই প্রজেক্টটি ডিলিট করতে চান?")&&n(c.id)},className:"absolute top-3 right-3 p-2 rounded-full bg-rose-950/80 text-rose-400 hover:text-white border border-rose-500/40",children:l.jsx(bg,{className:"w-4 h-4"})})]}),l.jsxs("div",{className:"p-5 space-y-3",children:[l.jsx("h4",{className:"text-lg font-bold text-white",children:c.title}),l.jsx("p",{className:"text-xs text-slate-300 line-clamp-2",children:c.description}),l.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400 pt-2 border-t border-slate-800",children:[l.jsxs("span",{children:["ক্লায়েন্ট: ",c.client]}),l.jsxs("a",{href:c.demo_url,target:"_blank",rel:"noopener noreferrer",className:"text-brand-cyan font-bold flex items-center gap-1",children:[l.jsx("span",{children:"ডেমো"}),l.jsx(ms,{className:"w-3.5 h-3.5"})]})]})]})]},c.id))}),i&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-900/80 backdrop-blur-md",children:l.jsxs("div",{className:"relative w-full max-w-lg glass-panel rounded-3xl p-6 border border-brand-cyan/40 shadow-2xl",children:[l.jsx("button",{onClick:()=>r(!1),className:"absolute top-4 right-4 p-2 text-slate-400 hover:text-white",children:l.jsx(Xi,{className:"w-5 h-5"})}),l.jsx("h3",{className:"text-xl font-bold text-white mb-4",children:"নতুন ৩ডি প্রজেক্ট যোগ করুন"}),l.jsxs("form",{onSubmit:o,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"প্রজেক্ট টাইটেল"}),l.jsx("input",{type:"text",required:!0,placeholder:"যেমন: ৩ডি ভিআর ট্যুরিযম সিমেুলেটর",value:s.title,onChange:c=>a({...s,title:c.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ক্যাটাগরি"}),l.jsxs("select",{value:s.category,onChange:c=>a({...s,category:c.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input",children:[l.jsx("option",{value:"3D & Web",children:"3D & Web"}),l.jsx("option",{value:"VFX & Motion",children:"VFX & Motion"}),l.jsx("option",{value:"3D Commercial",children:"3D Commercial"}),l.jsx("option",{value:"Interactive Web",children:"Interactive Web"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ক্লায়েন্ট নাম"}),l.jsx("input",{type:"text",required:!0,value:s.client,onChange:c=>a({...s,client:c.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"বিস্তারিত বিবরণ"}),l.jsx("textarea",{rows:3,required:!0,value:s.description,onChange:c=>a({...s,description:c.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input resize-none"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-xs text-slate-300 mb-1",children:"ইমেজ URL"}),l.jsx("input",{type:"url",required:!0,value:s.image,onChange:c=>a({...s,image:c.target.value}),className:"w-full px-3 py-2 rounded-xl text-xs glass-input"})]}),l.jsxs("div",{className:"pt-4 flex justify-end gap-2",children:[l.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-4 py-2 rounded-xl text-xs glass-panel text-slate-300",children:"বাতিল"}),l.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-cyan text-dark-900",children:"প্রজেক্ট সেভ করুন"})]})]})]})})]})}function WE(){const{members:t,attendance:e,salaries:n,projects:i,exportAllDataJSON:r,restoreAllDataJSON:s}=Bn(),[a,o]=ye.useState("overview"),[c,u]=ye.useState(!1),[f,h]=ye.useState(im.url),[p,x]=ye.useState(im.anonKey),y=t.length,_=new Date().toISOString().split("T")[0],d=e.filter(E=>E.date===_).filter(E=>E.status==="Present"||E.status==="Half-day").length,v=y>0?Math.round(d/y*100):100,g=n.reduce((E,L)=>E+(L.net_salary||0),0),S=n.filter(E=>E.paid_status==="Paid").length,A=E=>{const L=new FileReader;E.target.files&&E.target.files[0]&&(L.readAsText(E.target.files[0],"UTF-8"),L.onload=z=>{try{const M=JSON.parse(z.target.result);s(M),alert("ডাটা ব্যাকআপ সফলভাবে রিস্টোর করা হয়েছে!")}catch{alert("ফাইলটি সঠিক JSON ব্যাকআপ ফাইল নয়!")}})},b=E=>{E.preventDefault(),jE(f,p)};return l.jsxs("div",{className:"min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8",children:[l.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 shadow-[0_0_40px_rgba(255,0,51,0.15)] flex flex-col md:flex-row justify-between items-start md:items-center gap-6",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/30 text-xs font-bold mb-2",children:[l.jsx(Rr,{className:"w-4 h-4"}),l.jsx("span",{children:"অ্যাডমিন ম্যানেজমেন্ট সেন্টার (Leader Dashboard)"})]}),l.jsxs("h1",{className:"text-3xl font-extrabold text-white",children:["কুয়াকাটা মাল্টিমিডিয়া ",l.jsx("span",{className:"text-gradient",children:"টিম পোর্টাল কন্ট্রোল"})]}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"টিম মেম্বার, দৈনিক হাজিরা, বেতনের পে-রোল হিসাব, ক্লাউড ডাটাবেস ও ৩ডি পোর্টফোলিও পরিচালনা করুন।"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("div",{className:"glass-card px-4 py-2 rounded-2xl border border-emerald-500/30 text-right",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"আজকের হাজিরা হার"}),l.jsxs("span",{className:"text-lg font-extrabold text-emerald-400",children:[v,"%"]})]}),l.jsxs("div",{className:"glass-card px-4 py-2 rounded-2xl border border-brand-red/30 text-right",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"চলতি মাসের পে-রোল"}),l.jsxs("span",{className:"text-lg font-extrabold text-brand-red",children:["৳ ",g.toLocaleString()]})]})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-slate-800",children:[l.jsxs("button",{id:"tab-admin-overview",onClick:()=>o("overview"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${a==="overview"?"bg-brand-red text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(uy,{className:"w-4 h-4"}),l.jsx("span",{children:"ওভারভিউ ড্যাশবোর্ড"})]}),l.jsxs("button",{id:"tab-admin-members",onClick:()=>o("members"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${a==="members"?"bg-brand-red text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(ml,{className:"w-4 h-4"}),l.jsxs("span",{children:["মেম্বার ব্যবস্থাপনা (",y,")"]})]}),l.jsxs("button",{id:"tab-admin-attendance",onClick:()=>o("attendance"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${a==="attendance"?"bg-brand-red text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(Na,{className:"w-4 h-4"}),l.jsx("span",{children:"দৈনিক হাজিরা (Attendance)"})]}),l.jsxs("button",{id:"tab-admin-salary",onClick:()=>o("salary"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${a==="salary"?"bg-brand-red text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(ps,{className:"w-4 h-4"}),l.jsx("span",{children:"বেতন ও পে-রোল (Payroll)"})]}),l.jsxs("button",{id:"tab-admin-projects",onClick:()=>o("projects"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${a==="projects"?"bg-brand-red text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(Ca,{className:"w-4 h-4"}),l.jsxs("span",{children:["প্রজেক্ট পোর্টফোলিও (",i.length,")"]})]}),l.jsxs("button",{id:"tab-admin-backup",onClick:()=>o("backup"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${a==="backup"?"bg-brand-red text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(Nh,{className:"w-4 h-4"}),l.jsx("span",{children:"অনলাইন ডাটাবেস (Cloud DB)"})]})]}),a==="overview"&&l.jsxs("div",{className:"space-y-8 animate-fade-in",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",children:[l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-red/40 transition-colors",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"মোট টিম মেম্বার"}),l.jsx("div",{className:"p-3 rounded-xl bg-brand-red/10 text-brand-red",children:l.jsx(ml,{className:"w-6 h-6"})})]}),l.jsxs("div",{className:"text-3xl font-extrabold text-white",children:[y," জন"]}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"৩ডি আর্টিস্ট, ওয়েব ও ভিএফএক্স টিম"})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-emerald-500/40 transition-colors",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"আজকের উপস্থিতি"}),l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 text-emerald-400",children:l.jsx(Ls,{className:"w-6 h-6"})})]}),l.jsxs("div",{className:"text-3xl font-extrabold text-emerald-400",children:[v,"%"]}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"অন-টাইম ডিউটি রেকর্ড"})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-brand-red/40 transition-colors",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"মাসিক বেতন বাজেট"}),l.jsx("div",{className:"p-3 rounded-xl bg-brand-red/10 text-brand-red",children:l.jsx(ps,{className:"w-6 h-6"})})]}),l.jsxs("div",{className:"text-3xl font-extrabold text-white",children:["৳ ",g.toLocaleString()]}),l.jsxs("p",{className:"text-[11px] text-slate-400 mt-1",children:["পরিশোধিত: ",S," / ",n.length]})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-2xl border border-slate-800 hover:border-amber-500/40 transition-colors",children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"পাবলিক প্রজেক্টস"}),l.jsx("div",{className:"p-3 rounded-xl bg-amber-500/10 text-amber-400",children:l.jsx(Ca,{className:"w-6 h-6"})})]}),l.jsxs("div",{className:"text-3xl font-extrabold text-white",children:[i.length," টি"]}),l.jsx("p",{className:"text-[11px] text-slate-400 mt-1",children:"৩ডি পোর্টফোলিও শোকেস"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[l.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-bold text-brand-red uppercase tracking-wider block mb-1",children:"দ্রুত হাজিরা মোড"}),l.jsx("h3",{className:"text-xl font-bold text-white",children:"আজকের টিম হাজিরা এন্ট্রি দিন"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"প্রতিদিনের হাজিরা অনুযায়ী মাস শেষে স্বয়ংক্রিয় বেতন ডিডাকশন হিসাব করা হয়।"})]}),l.jsxs("button",{onClick:()=>o("attendance"),className:"w-full py-3 rounded-xl text-xs font-bold bg-brand-red/10 text-brand-red border border-brand-red/30 hover:bg-brand-red hover:text-white transition-all flex items-center justify-center gap-2",children:[l.jsx(Na,{className:"w-4 h-4"}),l.jsx("span",{children:"আজকের হাজিরা শটে যান"}),l.jsx(Xu,{className:"w-4 h-4"})]})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-bold text-brand-amber uppercase tracking-wider block mb-1",children:"পে-রোল & বেতন পরিশোধ"}),l.jsx("h3",{className:"text-xl font-bold text-white",children:"মাসিক বেতনের হিসাব ও পেমেন্ট স্ট্যাটাস"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"মেম্বারদের বেসিক বেতন, বোনাস যোগ করা এবং পেইড/পেন্ডিং স্ট্যাটাস আপডেট করুন।"})]}),l.jsxs("button",{onClick:()=>o("salary"),className:"w-full py-3 rounded-xl text-xs font-bold bg-brand-amber/10 text-brand-amber border border-brand-amber/30 hover:bg-brand-amber hover:text-dark-900 transition-all flex items-center justify-center gap-2",children:[l.jsx(ps,{className:"w-4 h-4"}),l.jsx("span",{children:"পে-রোল প্যানেলে যান"}),l.jsx(Xu,{className:"w-4 h-4"})]})]})]})]}),a==="backup"&&l.jsx("div",{className:"space-y-6 animate-fade-in",children:l.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-red/30 space-y-6",children:[l.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-6",children:[l.jsxs("div",{children:[l.jsxs("span",{className:"text-xs text-brand-red font-bold uppercase tracking-wider block mb-1 flex items-center gap-1.5",children:[l.jsx(Ch,{className:"w-4 h-4"}),"অনলাইন ক্লাউড ডাটাবেস রেকমেন্ডেশন"]}),l.jsx("h2",{className:"text-2xl font-black text-white",children:"অনলাইনে ডাটা সেভ রাখার সেরা ডাটাবেস"}),l.jsx("p",{className:"text-xs text-slate-300 mt-1",children:"যেখান থেকেই অ্যাক্সেস করুন না কেন, অনলাইনে সব সময় রিয়েল-টাইমে ডাটা সংরক্ষিত থাকবে।"})]}),l.jsxs("button",{onClick:()=>u(!c),className:"px-5 py-2.5 rounded-xl text-xs font-extrabold bg-brand-red/20 text-brand-red border border-brand-red/40 hover:bg-brand-red hover:text-white transition-colors flex items-center gap-2",children:[l.jsx(pl,{className:"w-4 h-4"}),l.jsx("span",{children:"Supabase / Cloud Keys সেটআপ"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[l.jsxs("div",{className:"glass-card p-6 rounded-2xl border border-emerald-500/40 relative flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"px-3 py-1 rounded-full text-[10px] font-black bg-emerald-500 text-dark-900 absolute top-4 right-4",children:"১ম পছন্দ (Best Pick ⭐⭐⭐⭐⭐)"}),l.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-3",children:l.jsx(Nh,{className:"w-7 h-7"})}),l.jsx("h3",{className:"text-xl font-bold text-white mb-1",children:"১. Supabase (PostgreSQL)"}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-4",children:"সম্পূর্ণ **ফ্রি (Free forever)** ক্লাউড ডাটাবেস। কোনো ক্রেডিট কার্ড লাগে না। রিয়েল-টাইম ডাটা সিঙ্ক ও অটোমেটেড টেবিল সাপোর্টেড।"})]}),l.jsxs("a",{href:"https://supabase.com/",target:"_blank",rel:"noopener noreferrer",className:"w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-dark-900 text-center flex items-center justify-center gap-1.5",children:[l.jsx("span",{children:"Supabase এ ফ্রি একাউন্ট খুলুন"}),l.jsx(ms,{className:"w-3.5 h-3.5"})]})]}),l.jsxs("div",{className:"glass-card p-6 rounded-2xl border border-amber-500/30 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("div",{className:"p-3 rounded-xl bg-amber-500/10 text-amber-400 w-fit mb-3",children:l.jsx(Ch,{className:"w-7 h-7"})}),l.jsx("h3",{className:"text-xl font-bold text-white mb-1",children:"২. Google Firebase"}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-4",children:"গুগলের নিজস্ব ক্লাউড রিয়েল-টাইম ডাটাবেস। ফ্রন্টএন্ড থেকে সরাসরি ডাটা সেভ করার জন্য জনপ্রিয়।"})]}),l.jsxs("a",{href:"https://firebase.google.com/",target:"_blank",rel:"noopener noreferrer",className:"w-full py-2.5 rounded-xl text-xs font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 text-center flex items-center justify-center gap-1.5",children:[l.jsx("span",{children:"Firebase ডেভ কনসোল"}),l.jsx(ms,{className:"w-3.5 h-3.5"})]})]}),l.jsxs("div",{className:"glass-card p-6 rounded-2xl border border-brand-red/30 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("div",{className:"p-3 rounded-xl bg-brand-red/10 text-brand-red w-fit mb-3",children:l.jsx(ly,{className:"w-7 h-7"})}),l.jsx("h3",{className:"text-xl font-bold text-white mb-1",children:"৩. MongoDB Atlas"}),l.jsx("p",{className:"text-xs text-slate-300 leading-relaxed mb-4",children:"NoSQL ডকুমেন্টস ভিত্তিক ক্লাউড ডাটাবেস (512MB ফ্রি ক্লাস্টার)।"})]}),l.jsxs("a",{href:"https://www.mongodb.com/cloud/atlas",target:"_blank",rel:"noopener noreferrer",className:"w-full py-2.5 rounded-xl text-xs font-bold bg-brand-red/20 text-brand-red border border-brand-red/40 text-center flex items-center justify-center gap-1.5",children:[l.jsx("span",{children:"MongoDB Atlas ভিজিট"}),l.jsx(ms,{className:"w-3.5 h-3.5"})]})]})]}),c&&l.jsxs("form",{onSubmit:b,className:"glass-panel p-6 rounded-2xl border border-brand-red/40 space-y-4",children:[l.jsxs("h4",{className:"text-sm font-bold text-white flex items-center gap-2",children:[l.jsx(pl,{className:"w-4 h-4 text-brand-red"}),"Supabase ক্লাউড ডাটাবেস এপিআই কী সেটআপ"]}),l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"Supabase Project URL"}),l.jsx("input",{type:"url",placeholder:"https://xyz.supabase.co",value:f,onChange:E=>h(E.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"Supabase Anon Key"}),l.jsx("input",{type:"text",placeholder:"eyJhbGciOiJIUzI1NiIsIn...",value:p,onChange:E=>x(E.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]})]}),l.jsx("div",{className:"flex justify-end gap-2",children:l.jsx("button",{type:"submit",className:"px-5 py-2 rounded-xl text-xs font-bold bg-brand-red text-white shadow-md",children:"ক্লাউড কী সেভ করুন"})})]}),l.jsxs("div",{className:"pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsx("h4",{className:"text-sm font-bold text-white",children:"অফলাইন JSON ফাইল ব্যাকআপ & রিস্টোর"}),l.jsx("p",{className:"text-xs text-slate-400",children:"অনলাইন ডাটাবেসের পাশাপাশি অফলাইনেও ব্যাকআপ ফাইল সেভ রাখতে পারেন"})]}),l.jsxs("div",{className:"flex items-center gap-3 w-full sm:w-auto",children:[l.jsxs("button",{onClick:r,className:"px-5 py-3 rounded-xl text-xs font-extrabold bg-gradient-to-r from-brand-red via-brand-crimson to-brand-flame text-white shadow-lg flex items-center gap-2",children:[l.jsx(Y_,{className:"w-4 h-4"}),l.jsx("span",{children:"JSON ব্যাকআপ ডাউনলোড"})]}),l.jsxs("label",{className:"px-5 py-3 rounded-xl text-xs font-bold glass-panel text-slate-200 hover:text-white border border-slate-700 cursor-pointer flex items-center gap-2",children:[l.jsx(fy,{className:"w-4 h-4 text-brand-amber"}),l.jsx("span",{children:"ফাইল থেকে রিস্টোর"}),l.jsx("input",{type:"file",accept:".json",onChange:A,className:"hidden"})]})]})]})]})}),a==="members"&&l.jsx(zE,{}),a==="attendance"&&l.jsx(BE,{}),a==="salary"&&l.jsx(GE,{}),a==="projects"&&l.jsx(VE,{})]})}function XE(){const{user:t}=Nr(),{attendance:e,salaries:n,updateMember:i}=Bn(),[r,s]=ye.useState("overview"),[a,o]=ye.useState((t==null?void 0:t.phone)||"+880 1700-000000"),[c,u]=ye.useState(""),[f,h]=ye.useState(!1);if(!t)return null;const p=e.filter(b=>b.user_id===t.id),x=p.filter(b=>b.status==="Present").length,y=p.filter(b=>b.status==="Absent").length,_=p.filter(b=>b.status==="Leave").length,m=p.filter(b=>b.status==="Half-day").length,d=p.length||1,v=Math.round((x+m*.5)/d*100),g=n.filter(b=>b.user_id===t.id),S=g[0]||{basic_salary:t.basic_salary,net_salary:t.basic_salary+2500,paid_status:"Paid"},A=b=>{b.preventDefault(),i({...t,phone:a}),h(!0),setTimeout(()=>h(!1),3e3)};return l.jsxs("div",{className:"min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full space-y-8 animate-fade-in",children:[l.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-brand-purple/30 shadow-[0_0_40px_rgba(127,0,255,0.15)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("div",{className:"relative",children:[l.jsx("img",{src:t.avatar,alt:t.name,className:"w-20 h-20 rounded-full object-cover border-2 border-brand-purple/50 shadow-xl"}),l.jsx("span",{className:"absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-dark-900"})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/30 text-xs font-bold mb-1",children:[l.jsx(ka,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:[t.dept," • ",t.role==="admin"?"অ্যাডমিন/লিডার":"টিম মেম্বার"]})]}),l.jsx("h1",{className:"text-2xl sm:text-3xl font-extrabold text-white",children:t.name}),l.jsx("p",{className:"text-xs text-slate-300 font-medium",children:t.designation})]})]}),l.jsxs("div",{className:"flex items-center gap-3 w-full md:w-auto",children:[l.jsxs("div",{className:"glass-card px-5 py-3 rounded-2xl border border-emerald-500/30 text-right w-full md:w-auto",children:[l.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase block",children:"মাসিক হাজিরার হার"}),l.jsxs("span",{className:"text-2xl font-extrabold text-emerald-400",children:[v,"%"]})]}),l.jsxs("div",{className:"glass-card px-5 py-3 rounded-2xl border border-brand-cyan/30 text-right w-full md:w-auto",children:[l.jsx("span",{className:"text-[10px] text-slate-400 font-bold uppercase block",children:"সর্বশেষ নিট স্যালারি"}),l.jsxs("span",{className:"text-2xl font-extrabold text-brand-cyan",children:["৳ ",S.net_salary.toLocaleString()]})]})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-2 glass-panel p-2 rounded-2xl border border-slate-800",children:[l.jsxs("button",{id:"tab-member-overview",onClick:()=>s("overview"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="overview"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(Rh,{className:"w-4 h-4"}),l.jsx("span",{children:"আমার ড্যাশবোর্ড"})]}),l.jsxs("button",{id:"tab-member-attendance",onClick:()=>s("attendance"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="attendance"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(Na,{className:"w-4 h-4"}),l.jsx("span",{children:"হাজিরা রিপোর্ট (Attendance Calendar)"})]}),l.jsxs("button",{id:"tab-member-salary",onClick:()=>s("salary"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="salary"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(ps,{className:"w-4 h-4"}),l.jsx("span",{children:"বেতন স্টেটমেন্ট (Salary Statements)"})]}),l.jsxs("button",{id:"tab-member-profile",onClick:()=>s("profile"),className:`px-5 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${r==="profile"?"bg-brand-purple text-white shadow-md":"text-slate-300 hover:text-white hover:bg-slate-800"}`,children:[l.jsx(pl,{className:"w-4 h-4"}),l.jsx("span",{children:"প্রোফাইল & পাসওয়ার্ড"})]})]}),r==="overview"&&l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-4 gap-4",children:[l.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-emerald-500/20",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"উপস্থিত দিন"}),l.jsxs("span",{className:"text-2xl font-extrabold text-emerald-400 mt-1 block",children:[x," দিন"]})]}),l.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-rose-500/20",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"অনুপস্থিত দিন"}),l.jsxs("span",{className:"text-2xl font-extrabold text-rose-400 mt-1 block",children:[y," দিন"]})]}),l.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-amber-500/20",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"অনুমোদিত ছুটি"}),l.jsxs("span",{className:"text-2xl font-extrabold text-amber-400 mt-1 block",children:[_," দিন"]})]}),l.jsxs("div",{className:"glass-panel p-5 rounded-2xl border border-sky-500/20",children:[l.jsx("span",{className:"text-[10px] text-slate-400 uppercase font-semibold block",children:"হাফ-ডে ডিউটি"}),l.jsxs("span",{className:"text-2xl font-extrabold text-sky-400 mt-1 block",children:[m," দিন"]})]})]}),l.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-brand-cyan/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-brand-cyan font-bold uppercase tracking-wider block",children:"চলতি মাসের পেমেন্ট স্ট্যাটাস"}),l.jsx("h3",{className:"text-xl font-bold text-white mt-0.5",children:"জুলাই ২০২৬ সেশনের পে-স্লিপ"}),l.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"পেমেন্ট মেথড: ব্যাংক / বিকাশ মেটাল ট্রান্সফার"})]}),l.jsx("div",{className:"flex items-center gap-3",children:l.jsx("span",{className:`px-4 py-2 rounded-xl text-xs font-extrabold ${S.paid_status==="Paid"?"bg-emerald-500/20 text-emerald-400 border border-emerald-500/40":"bg-amber-500/20 text-amber-400 border border-amber-500/40"}`,children:S.paid_status==="Paid"?"পরিশোধিত (Paid)":"প্রসেসিং (Pending)"})})]})]}),r==="attendance"&&l.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 space-y-6",children:[l.jsx("div",{className:"flex justify-between items-center pb-4 border-b border-slate-800",children:l.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[l.jsx(Na,{className:"w-5 h-5 text-brand-purple"}),"মাসিক হাজিরা ক্যালেন্ডার ও রেকর্ডস (জুলাই ২০২৬)"]})}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-3",children:p.map(b=>l.jsxs("div",{className:`p-3 rounded-2xl border text-center space-y-1 ${b.status==="Present"?"bg-emerald-950/20 border-emerald-500/30 text-emerald-400":b.status==="Absent"?"bg-rose-950/20 border-rose-500/30 text-rose-400":b.status==="Leave"?"bg-amber-950/20 border-amber-500/30 text-amber-400":"bg-sky-950/20 border-sky-500/30 text-sky-400"}`,children:[l.jsx("span",{className:"text-[10px] text-slate-400 block font-semibold",children:b.date}),l.jsx("span",{className:"text-xs font-extrabold block",children:b.status==="Present"?"উপস্থিত":b.status==="Absent"?"অনুপস্থিত":b.status==="Leave"?"ছুটি":"হাফ-ডে"}),l.jsxs("span",{className:"text-[9px] text-slate-400 block",children:[b.checkIn," - ",b.checkOut]})]},b.id))})]}),r==="salary"&&l.jsxs("div",{className:"glass-panel p-6 rounded-3xl border border-slate-800 space-y-6",children:[l.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2 pb-4 border-b border-slate-800",children:[l.jsx(ps,{className:"w-5 h-5 text-brand-cyan"}),"আমার মাসভিত্তিক বেতনের স্টেটমেন্ট ও হিসাব বিবরণী"]}),l.jsx("div",{className:"space-y-4",children:g.map(b=>l.jsxs("div",{className:"glass-card p-5 rounded-2xl border border-slate-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs text-brand-cyan font-bold block",children:b.month}),l.jsxs("span",{className:"text-lg font-extrabold text-white block mt-0.5",children:["৳ ",b.net_salary.toLocaleString()]}),l.jsxs("span",{className:"text-[11px] text-slate-400",children:["বেসিক: ৳",b.basic_salary.toLocaleString()," | বোনাস: +৳",b.bonus.toLocaleString()," | ডিডাকশন: -৳",b.deductions.toLocaleString()]})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-bold ${b.paid_status==="Paid"?"bg-emerald-500/20 text-emerald-400":"bg-amber-500/20 text-amber-400"}`,children:b.paid_status==="Paid"?`Paid (${b.payment_date})`:"Pending"}),b.transaction_id&&l.jsxs("span",{className:"block text-[10px] text-slate-500 font-mono mt-1",children:["TXN: ",b.transaction_id]})]})]},b.id))})]}),r==="profile"&&l.jsxs("div",{className:"glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 max-w-xl mx-auto space-y-6",children:[l.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[l.jsx(Rh,{className:"w-5 h-5 text-brand-purple"}),"ব্যক্তিগত প্রোফাইল ও পাসওয়ার্ড পরিবর্তন"]}),f&&l.jsx("div",{className:"p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs font-bold",children:"প্রোফাইল তথ্য সফলভাবে সেভ করা হয়েছে!"}),l.jsxs("form",{onSubmit:A,className:"space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"নাম"}),l.jsx("input",{type:"text",disabled:!0,value:t.name,className:"w-full px-3 py-2 rounded-xl glass-input opacity-70"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"ইমেইল"}),l.jsx("input",{type:"email",disabled:!0,value:t.email,className:"w-full px-3 py-2 rounded-xl glass-input opacity-70"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"ফোন নম্বর"}),l.jsx("input",{type:"text",value:a,onChange:b=>o(b.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white font-bold"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 mb-1",children:"নতুন পাসওয়ার্ড (Password Change)"}),l.jsx("input",{type:"password",placeholder:"নতুন পাসওয়ার্ড লিখুন...",value:c,onChange:b=>u(b.target.value),className:"w-full px-3 py-2 rounded-xl glass-input text-white"})]}),l.jsx("button",{type:"submit",className:"w-full py-3 rounded-xl font-bold bg-brand-purple text-white shadow-lg hover:scale-[1.01] transition-transform",children:"আপডেট সেভ করুন"})]})]})]})}function qE(){const{activeTab:t,user:e}=Nr(),[n,i]=ye.useState(!1);return l.jsxs("div",{className:"min-h-screen flex flex-col justify-between bg-dark-900 text-slate-100",children:[l.jsx(py,{onOpenAuthModal:()=>i(!0)}),l.jsxs("main",{className:"flex-grow",children:[t==="home"&&l.jsxs(l.Fragment,{children:[l.jsx(DE,{}),l.jsx(em,{}),l.jsx(tm,{}),l.jsx(nm,{})]}),t==="team"&&l.jsx(em,{}),t==="portfolio"&&l.jsx(tm,{}),t==="contact"&&l.jsx(nm,{}),t==="admin-dashboard"&&l.jsx(WE,{}),t==="member-portal"&&l.jsx(XE,{})]}),l.jsx(FE,{}),l.jsx(OE,{isOpen:n,onClose:()=>i(!1)})]})}function $E(){return l.jsx(O_,{children:l.jsx(j_,{children:l.jsx(qE,{})})})}Qc.createRoot(document.getElementById("root")).render(l.jsx(w0.StrictMode,{children:l.jsx($E,{})}));
