/*! For license information please see c65ed843.fe95ce06.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[14342],{72899:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var n=r(85893),s=r(11151);const i={sidebar_label:"HTTPRequest.redirectChain"},a="HTTPRequest.redirectChain() method",c={id:"api/puppeteer.httprequest.redirectchain",title:"HTTPRequest.redirectChain() method",description:"A redirectChain is a chain of requests initiated to fetch a resource.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.httprequest.redirectchain.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.redirectchain",permalink:"/api/puppeteer.httprequest.redirectchain",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"HTTPRequest.redirectChain"},sidebar:"api",previous:{title:"HTTPRequest.postData",permalink:"/api/puppeteer.httprequest.postdata"},next:{title:"HTTPRequest.resourceType",permalink:"/api/puppeteer.httprequest.resourcetype"}},o={},h=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"httprequestredirectchain-method",children:"HTTPRequest.redirectChain() method"}),"\n",(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"redirectChain"})," is a chain of requests initiated to fetch a resource."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class HTTPRequest {\n  abstract redirectChain(): HTTPRequest[];\n}\n"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/api/puppeteer.httprequest",children:"HTTPRequest"}),"[]"]}),"\n",(0,n.jsx)(t.p,{children:"the chain of requests - if a server responds with at least a single redirect, this chain will contain all requests that were redirected."}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"redirectChain"})," is shared between all the requests of the same chain."]}),"\n",(0,n.jsxs)(t.p,{children:["For example, if the website ",(0,n.jsx)(t.code,{children:"http://example.com"})," has a single redirect to ",(0,n.jsx)(t.code,{children:"https://example.com"}),", then the chain will contain one request:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const response = await page.goto('http://example.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 1\nconsole.log(chain[0].url()); // 'http://example.com'\n"})}),"\n",(0,n.jsxs)(t.p,{children:["If the website ",(0,n.jsx)(t.code,{children:"https://google.com"})," has no redirects, then the chain will be empty:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const response = await page.goto('https://google.com');\nconst chain = response.request().redirectChain();\nconsole.log(chain.length); // 0\n"})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var n=r(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function h(e,t,r){var n,i={},h=null,p=null;for(n in void 0!==r&&(h=""+r),void 0!==t.key&&(h=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,n)&&!o.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:s,type:e,key:h,ref:p,props:i,_owner:c.current}}t.Fragment=i,t.jsx=h,t.jsxs=h},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var n=r(67294);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);