/*! For license information please see 4876816a.279f2e0f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[15257],{33323:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=n(85893),o=n(11151);const s={sidebar_label:"PuppeteerNode.launch"},i="PuppeteerNode.launch() method",p={id:"api/puppeteer.puppeteernode.launch",title:"PuppeteerNode.launch() method",description:"Launches a browser instance with given arguments and options when specified.",source:"@site/versioned_docs/version-22.10.0/api/puppeteer.puppeteernode.launch.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteernode.launch",permalink:"/api/puppeteer.puppeteernode.launch",draft:!1,unlisted:!1,tags:[],version:"22.10.0",frontMatter:{sidebar_label:"PuppeteerNode.launch"},sidebar:"api",previous:{title:"PuppeteerNode.executablePath",permalink:"/api/puppeteer.puppeteernode.executablepath"},next:{title:"PuppeteerNode.trimCache",permalink:"/api/puppeteer.puppeteernode.trimcache"}},a={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function h(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h1,{id:"puppeteernodelaunch-method",children:"PuppeteerNode.launch() method"}),"\n",(0,t.jsx)(r.p,{children:"Launches a browser instance with given arguments and options when specified."}),"\n",(0,t.jsxs)(r.p,{children:["When using with ",(0,t.jsx)(r.code,{children:"puppeteer-core"}),", ",(0,t.jsx)(r.a,{href:"/api/puppeteer.launchoptions#executablepath",children:"options.executablePath"})," or ",(0,t.jsx)(r.a,{href:"/api/puppeteer.launchoptions#channel",children:"options.channel"})," must be provided."]}),"\n",(0,t.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class PuppeteerNode {\n  launch(options?: PuppeteerLaunchOptions): Promise<Browser>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"options"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/api/puppeteer.puppeteerlaunchoptions",children:"PuppeteerLaunchOptions"})})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.em,{children:"(Optional)"})," Options to configure launching behavior."]})})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.browser",children:"Browser"}),">"]}),"\n",(0,t.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(r.p,{children:["Puppeteer can also be used to control the Chrome browser, but it works best with the version of Chrome for Testing downloaded by default. There is no guarantee it will work with any other version. If Google Chrome (rather than Chrome for Testing) is preferred, a ",(0,t.jsx)(r.a,{href:"https://www.google.com/chrome/browser/canary.html",children:"Chrome Canary"})," or ",(0,t.jsx)(r.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Dev Channel"})," build is suggested. See ",(0,t.jsx)(r.a,{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/",children:"this article"})," for a description of the differences between Chromium and Chrome. ",(0,t.jsx)(r.a,{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.md",children:"This article"})," describes some differences for Linux users. See ",(0,t.jsx)(r.a,{href:"https://developer.chrome.com/blog/chrome-for-testing/",children:"this doc"})," for the description of Chrome for Testing."]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(r.p,{children:["You can use ",(0,t.jsx)(r.a,{href:"/api/puppeteer.launchoptions#ignoredefaultargs",children:"options.ignoreDefaultArgs"})," to filter out ",(0,t.jsx)(r.code,{children:"--mute-audio"})," from default arguments:"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-ts",children:"const browser = await puppeteer.launch({\n  ignoreDefaultArgs: ['--mute-audio'],\n});\n"})})]})}function l(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},75251:(e,r,n)=>{var t=n(67294),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var t,s={},c=null,h=null;for(t in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(h=r.ref),r)i.call(r,t)&&!a.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:c,ref:h,props:s,_owner:p.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},85893:(e,r,n)=>{e.exports=n(75251)},11151:(e,r,n)=>{n.d(r,{Z:()=>p,a:()=>i});var t=n(67294);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);