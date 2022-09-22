"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28342],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(r),g=n,v=m["".concat(s,".").concat(g)]||m[g]||u[g]||o;return r?a.createElement(v,p(p({ref:t},c),{},{components:r})):a.createElement(v,p({ref:t},c))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,p=new Array(o);p[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<o;l++)p[l]=r[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47029:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>s,toc:()=>c});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const p={sidebar_label:"Coverage.startJSCoverage"},i="Coverage.startJSCoverage() method",s={unversionedId:"api/puppeteer.coverage.startjscoverage",id:"version-18.0.5/api/puppeteer.coverage.startjscoverage",title:"Coverage.startJSCoverage() method",description:"Signature:",source:"@site/versioned_docs/version-18.0.5/api/puppeteer.coverage.startjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.startjscoverage",permalink:"/api/puppeteer.coverage.startjscoverage",draft:!1,tags:[],version:"18.0.5",frontMatter:{sidebar_label:"Coverage.startJSCoverage"},sidebar:"sidebar",previous:{title:"Coverage.startCSSCoverage",permalink:"/api/puppeteer.coverage.startcsscoverage"},next:{title:"Coverage.stopCSSCoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage"}},l={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],u={toc:c};function m(e){var{components:t}=e,r=o(e,["components"]);return(0,a.kt)("wrapper",n({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"coveragestartjscoverage-method"}),"Coverage.startJSCoverage() method"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Coverage {\n  startJSCoverage(options?: JSCoverageOptions): Promise<void>;\n}\n")),(0,a.kt)("h2",n({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),"options"),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.jscoverageoptions"}),"JSCoverageOptions")),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("i",null,"(Optional)")," Set of configurable options for coverage defaults to ",(0,a.kt)("code",null,"resetOnNavigation : true, reportAnonymousScripts : false"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("p",null,"Promise that resolves when coverage is started."),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"Anonymous scripts are ones that don't have an associated url. These are scripts that are dynamically created on the page using ",(0,a.kt)("inlineCode",{parentName:"p"},"eval")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"new Function"),". If ",(0,a.kt)("inlineCode",{parentName:"p"},"reportAnonymousScripts")," is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", anonymous scripts URL will start with ",(0,a.kt)("inlineCode",{parentName:"p"},"debugger://VM")," (unless a magic //","#"," sourceURL comment is present, in which case that will the be URL)."))}m.isMDXComponent=!0}}]);