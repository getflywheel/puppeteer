"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[81395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>b});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,u=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),c=i(r),b=p,m=c["".concat(u,".").concat(b)]||c[b]||l[b]||o;return r?n.createElement(m,a(a({ref:t},f),{},{components:r})):n.createElement(m,a({ref:t},f))}));function b(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,a=new Array(o);a[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:p,a[1]=s;for(var i=2;i<o;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4088:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(87462),p=(r(67294),r(3905));const o={sidebar_label:"HTTPResponse.buffer"},a="HTTPResponse.buffer() method",s={unversionedId:"api/puppeteer.httpresponse.buffer",id:"api/puppeteer.httpresponse.buffer",title:"HTTPResponse.buffer() method",description:"Signature:",source:"@site/../docs/api/puppeteer.httpresponse.buffer.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse.buffer",permalink:"/next/api/puppeteer.httpresponse.buffer",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"HTTPResponse.buffer"},sidebar:"sidebar",previous:{title:"HTTPRequest.url",permalink:"/next/api/puppeteer.httprequest.url"},next:{title:"HTTPResponse.frame",permalink:"/next/api/puppeteer.httpresponse.frame"}},u={},i=[],f={toc:i};function l(e){let{components:t,...r}=e;return(0,p.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"httpresponsebuffer-method"},"HTTPResponse.buffer() method"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Signature:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"class HTTPResponse {\n  buffer(): Promise<Buffer>;\n}\n")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Returns:")),(0,p.kt)("p",null,"Promise","<","Buffer",">"),(0,p.kt)("p",null,"Promise which resolves to a buffer with response body."))}l.isMDXComponent=!0}}]);