/*! For license information please see db610bf3.8d01a752.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[70918],{3629:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>c});var s=t(85893),o=t(11151);const l={},i="Page interactions",r={id:"guides/page-interactions",title:"Page interactions",description:"Puppeteer allows you interact with the pages in various ways.",source:"@site/versioned_docs/version-22.10.1/guides/page-interactions.md",sourceDirName:"guides",slug:"/guides/page-interactions",permalink:"/guides/page-interactions",draft:!1,unlisted:!1,tags:[],version:"22.10.1",frontMatter:{},sidebar:"docs",previous:{title:"Browser management",permalink:"/guides/browser-management"},next:{title:"JavaScript execution",permalink:"/guides/javascript-execution"}},a={},c=[{value:"Locators",id:"locators",level:2},{value:"Use cases",id:"use-cases",level:3},{value:"Waiting for an element",id:"waiting-for-an-element",level:4},{value:"Waiting for a function",id:"waiting-for-a-function",level:4},{value:"Clicking an element",id:"clicking-an-element",level:4},{value:"Clicking an element matching a criteria",id:"clicking-an-element-matching-a-criteria",level:4},{value:"Filling out an input",id:"filling-out-an-input",level:4},{value:"Retrieving an element property",id:"retrieving-an-element-property",level:4},{value:"Hover over an element",id:"hover-over-an-element",level:4},{value:"Scroll an element",id:"scroll-an-element",level:4},{value:"Configuring locators",id:"configuring-locators",level:3},{value:"Getting locator events",id:"getting-locator-events",level:3},{value:"Query Selectors",id:"query-selectors",level:2},{value:"<code>P</code> Selectors",id:"p-selectors",level:3},{value:"<code>&gt;&gt;&gt;</code> and <code>&gt;&gt;&gt;&gt;</code> combinators",id:"-and--combinators",level:4},{value:"Example",id:"example",level:5},{value:"<code>P</code>-elements",id:"p-elements",level:4},{value:"Text selectors (<code>-p-text</code>)",id:"text-selectors--p-text",level:5},{value:"Example",id:"example-1",level:6},{value:"XPath selectors (<code>-p-xpath</code>)",id:"xpath-selectors--p-xpath",level:5},{value:"Example",id:"example-2",level:6},{value:"ARIA selectors (<code>-p-aria</code>)",id:"aria-selectors--p-aria",level:5},{value:"Example",id:"example-3",level:6},{value:"Custom selectors",id:"custom-selectors",level:4},{value:"Custom Selectors",id:"custom-selectors-1",level:5},{value:"Custom framework components selector",id:"custom-framework-components-selector",level:5},{value:"Web Components",id:"web-components",level:5},{value:"Query Selectors (legacy)",id:"query-selectors-legacy",level:2},{value:"CSS",id:"css",level:3},{value:"Example",id:"example-4",level:4},{value:"Built-in selectors",id:"built-in-selectors",level:3},{value:"Text selectors (<code>text/</code>)",id:"text-selectors-text",level:4},{value:"Example",id:"example-5",level:5},{value:"XPath selectors (<code>xpath/</code>)",id:"xpath-selectors-xpath",level:4},{value:"Example",id:"example-6",level:5},{value:"ARIA selectors (<code>aria/</code>)",id:"aria-selectors-aria",level:4},{value:"Example",id:"example-7",level:5},{value:"Pierce selectors (<code>pierce/</code>)",id:"pierce-selectors-pierce",level:4},{value:"Example",id:"example-8",level:5},{value:"Custom selectors",id:"custom-selectors-2",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"page-interactions",children:"Page interactions"}),"\n",(0,s.jsx)(n.p,{children:"Puppeteer allows you interact with the pages in various ways."}),"\n",(0,s.jsx)(n.h2,{id:"locators",children:"Locators"}),"\n",(0,s.jsx)(n.p,{children:"Locators is a new, experimental API that combines the functionalities of\nwaiting and actions. With additional precondition checks, it\nenables automatic retries for failed actions, resulting in more reliable and\nless flaky automation scripts."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Locators API is experimental and we will not follow semver for breaking changes\nin the Locators API."})}),"\n",(0,s.jsx)(n.h3,{id:"use-cases",children:"Use cases"}),"\n",(0,s.jsx)(n.h4,{id:"waiting-for-an-element",children:"Waiting for an element"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page.locator('button').wait();\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following preconditions are automatically checked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Waits for the element to become\n",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"waiting-for-a-function",children:"Waiting for a function"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page\n  .locator(() => {\n    let resolve!: (node: HTMLCanvasElement) => void;\n    const promise = new Promise(res => {\n      return (resolve = res);\n    });\n    const observer = new MutationObserver(records => {\n      for (const record of records) {\n        if (record.target instanceof HTMLCanvasElement) {\n          resolve(record.target);\n        }\n      }\n    });\n    observer.observe(document);\n    return promise;\n  })\n  .wait();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"clicking-an-element",children:"Clicking an element"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page.locator('button').click();\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following preconditions are automatically checked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,s.jsxs)(n.li,{children:["Waits for the element to become\n",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to become enabled."}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"clicking-an-element-matching-a-criteria",children:"Clicking an element matching a criteria"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page\n  .locator('button')\n  .filter(button => !button.disabled)\n  .click();\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following preconditions are automatically checked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,s.jsxs)(n.li,{children:["Waits for the element to become\n",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to become enabled."}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"filling-out-an-input",children:"Filling out an input"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page.locator('input').fill('value');\n"})}),"\n",(0,s.jsx)(n.p,{children:"Automatically detects the input type and choose an appropriate way to fill it out with the provided value."}),"\n",(0,s.jsx)(n.p,{children:"The following preconditions are automatically checked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,s.jsxs)(n.li,{children:["Waits for the element to become\n",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to become enabled."}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"retrieving-an-element-property",children:"Retrieving an element property"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const enabled = await page\n  .locator('button')\n  .map(button => !button.disabled)\n  .wait();\n"})}),"\n",(0,s.jsx)(n.h4,{id:"hover-over-an-element",children:"Hover over an element"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page.locator('div').hover();\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following preconditions are automatically checked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,s.jsxs)(n.li,{children:["Waits for the element to become\n",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"scroll-an-element",children:"Scroll an element"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page.locator('div').scroll({\n  scrollLeft: 10,\n  scrollTop: 20,\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following preconditions are automatically checked:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensures the element is in the viewport."}),"\n",(0,s.jsxs)(n.li,{children:["Waits for the element to become\n",(0,s.jsx)(n.a,{href:"https://pptr.dev/api/puppeteer.elementhandle.isvisible/",children:"visible"})," or hidden."]}),"\n",(0,s.jsx)(n.li,{children:"Waits for the element to have a stable bounding box over two consecutive\nanimation frames."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configuring-locators",children:"Configuring locators"}),"\n",(0,s.jsx)(n.p,{children:"Locators can be configured to tune configure the preconditions and other other options:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"await page\n  .locator('button')\n  .setEnsureElementIsInTheViewport(false)\n  .setTimeout(0)\n  .setVisibility(null)\n  .setWaitForEnabled(false)\n  .setWaitForStableBoundingBox(false)\n  .click();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getting-locator-events",children:"Getting locator events"}),"\n",(0,s.jsx)(n.p,{children:"Currently, locators support a single event that notifies you when the locator is about to perform the action:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"let willClick = false;\nawait page\n  .locator('button')\n  .on(LocatorEvent.Action, () => {\n    willClick = true;\n  })\n  .click();\n"})}),"\n",(0,s.jsx)(n.p,{children:"This event can be used for logging/debugging or other purposes. The event might\nfire multiple times if the locator retries the action."}),"\n",(0,s.jsx)(n.h2,{id:"query-selectors",children:"Query Selectors"}),"\n",(0,s.jsx)(n.p,{children:"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Query for an element handle.\n  const element = await page.waitForSelector('div > .class-name');\n\n  // Do something with element...\n  await element.click(); // Just an example.\n\n  // Dispose of handle\n  await element.dispose();\n\n  // Close browser.\n  await browser.close();\n})();\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"p-selectors",children:[(0,s.jsx)(n.code,{children:"P"})," Selectors"]}),"\n",(0,s.jsxs)(n.p,{children:["Puppeteer uses a superset of the CSS selector syntax for querying. We call this syntax ",(0,s.jsx)(n.em,{children:"P selectors"})," and it's supercharged with extra capabilities such as deep combinators and text selection."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Although P selectors look like real CSS selectors (we intentionally designed it this way), they should not be used for actually CSS styling. They are designed only for Puppeteer."})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:['P selectors only work on the first "depth" of selectors; for example, ',(0,s.jsx)(n.code,{children:":is(div >>> a)"})," will not work."]})}),"\n",(0,s.jsxs)(n.h4,{id:"-and--combinators",children:[(0,s.jsx)(n.code,{children:">>>"})," and ",(0,s.jsx)(n.code,{children:">>>>"})," combinators"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:">>>"})," and ",(0,s.jsx)(n.code,{children:">>>>"})," are called ",(0,s.jsx)(n.em,{children:"deep descendent"})," and ",(0,s.jsx)(n.em,{children:"deep"})," combinators respectively. Both combinators have the effect of going into shadow hosts with ",(0,s.jsx)(n.code,{children:">>>"})," going into every shadow host under a node and ",(0,s.jsx)(n.code,{children:">>>>"})," going into the immediate one (if the node is a shadow host; otherwise, it's a no-op)."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A common question is when should ",(0,s.jsx)(n.code,{children:">>>>"})," be chosen over ",(0,s.jsx)(n.code,{children:">>>"})," considering the flexibility of ",(0,s.jsx)(n.code,{children:">>>"}),". A similar question can be asked about ",(0,s.jsx)(n.code,{children:">"})," and a space; choose ",(0,s.jsx)(n.code,{children:">"})," if you do not need to query all elements under a given node and a space otherwise. This answer extends to ",(0,s.jsx)(n.code,{children:">>>>"})," (",(0,s.jsx)(n.code,{children:">"}),") and ",(0,s.jsx)(n.code,{children:">>>"})," (space) naturally."]})}),"\n",(0,s.jsx)(n.h5,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Suppose we have the markup"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<custom-element>\n  <template shadowrootmode="open">\n    <slot></slot>\n  </template>\n  <custom-element>\n    <template shadowrootmode="open">\n      <slot></slot>\n    </template>\n    <custom-element>\n      <template shadowrootmode="open">\n        <slot></slot>\n      </template>\n      <h2>Light content</h2>\n    </custom-element>\n  </custom-element>\n</custom-element>\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Note: ",(0,s.jsx)(n.code,{children:'<template shadowrootmode="open">'})," is not supported on Firefox.\nYou can read more about it ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template#attributes",children:"here"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Then ",(0,s.jsx)(n.code,{children:"custom-element >>> h2"})," will return ",(0,s.jsx)(n.code,{children:"h2"}),", but ",(0,s.jsx)(n.code,{children:"custom-element >>>> h2"})," will return nothing since the inner ",(0,s.jsx)(n.code,{children:"h2"})," is in a deeper shadow root."]}),"\n",(0,s.jsxs)(n.h4,{id:"p-elements",children:[(0,s.jsx)(n.code,{children:"P"}),"-elements"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"P"})," elements are ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements",children:"pseudo-elements"})," with a ",(0,s.jsx)(n.code,{children:"-p"})," vendor prefix. It allows you to enhance your selectors with Puppeteer-specific query engines such as XPath, text queries, and ARIA."]}),"\n",(0,s.jsxs)(n.h5,{id:"text-selectors--p-text",children:["Text selectors (",(0,s.jsx)(n.code,{children:"-p-text"}),")"]}),"\n",(0,s.jsx)(n.p,{children:'Text selectors will select "minimal" elements containing the given text, even within (open) shadow roots. Here, "minimum" means the deepest elements that contain a given text, but not their parents (which technically will also contain the given text).'}),"\n",(0,s.jsx)(n.h6,{id:"example-1",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const element = await page.waitForSelector('div ::-p-text(My name is Jun)');\n// You can also use escapes.\nconst element = await page.waitForSelector(\n  ':scope >>> ::-p-text(My name is Jun \\\\(pronounced like \"June\"\\\\))'\n);\n// or quotes\nconst element = await page.waitForSelector(\n  'div >>>> ::-p-text(\"My name is Jun (pronounced like \\\\\"June\\\\\")\"):hover'\n);\n"})}),"\n",(0,s.jsxs)(n.h5,{id:"xpath-selectors--p-xpath",children:["XPath selectors (",(0,s.jsx)(n.code,{children:"-p-xpath"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["XPath selectors will use the browser's native ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate",children:(0,s.jsx)(n.code,{children:"Document.evaluate"})})," to query for elements."]}),"\n",(0,s.jsx)(n.h6,{id:"example-2",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const element = await page.waitForSelector('::-p-xpath(h2)');\n"})}),"\n",(0,s.jsxs)(n.h5,{id:"aria-selectors--p-aria",children:["ARIA selectors (",(0,s.jsx)(n.code,{children:"-p-aria"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"ARIA selectors can be used to find elements with a given ARIA label. These labels are computed using Chrome's internal representation."}),"\n",(0,s.jsx)(n.h6,{id:"example-3",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const node = await page.waitForSelector('::-p-aria(Submit)');\nconst node = await page.waitForSelector(\n  '::-p-aria([name=\"Click me\"][role=\"button\"])'\n);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"custom-selectors",children:"Custom selectors"}),"\n",(0,s.jsxs)(n.p,{children:["Puppeteer provides users the ability to add their own query selectors to Puppeteer using ",(0,s.jsx)(n.a,{href:"/api/puppeteer.registercustomqueryhandler",children:"Puppeteer.registerCustomQueryHandler"}),". This is useful for creating custom selectors based on framework objects or other vendor-specific objects."]}),"\n",(0,s.jsx)(n.h5,{id:"custom-selectors-1",children:"Custom Selectors"}),"\n",(0,s.jsxs)(n.p,{children:["You can register a custom query handler that allows you to create custom selectors. For example, define a query handler for ",(0,s.jsx)(n.code,{children:"getById"})," selectors:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'Puppeteer.registerCustomQueryHandler(\'getById\', {\n  queryOne: (elementOrDocument, selector) => {\n    return elementOrDocument.querySelector(`[id="${CSS.escape(selector)}"]`);\n  },\n  // Note: for demonstation perpose only `id` should be page unique\n  queryAll: (elementOrDocument, selector) => {\n    return elementOrDocument.querySelectorAll(`[id="${CSS.escape(selector)}"]`);\n  },\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can now use it as following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const node = await page.waitForSelector('::-p-getById(elementId)');\n// OR used in conjunction with other selectors\nconst moreSpecificNode = await page.waitForSelector(\n  '.side-bar ::-p-getById(elementId)'\n);\n"})}),"\n",(0,s.jsx)(n.h5,{id:"custom-framework-components-selector",children:"Custom framework components selector"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Be careful when relying on internal APIs of libraries or frameworks. They can change at any time."})}),"\n",(0,s.jsx)(n.p,{children:"Find Vue components by name by using Vue internals for querying:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"Puppeteer.registerCustomQueryHandler('vue', {\n  queryOne: (element, name) => {\n    const walker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT);\n    do {\n      const currentNode = walker.currentNode;\n      if (\n        currentNode.__vnode?.ctx?.type?.name.toLowerCase() ===\n        name.toLocaleLowerCase()\n      ) {\n        return currentNode;\n      }\n    } while (walker.nextNode());\n\n    return null;\n  },\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Query the Vue component as following:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const element = await page.$('::-p-vue(MyComponent)');\n"})}),"\n",(0,s.jsx)(n.h5,{id:"web-components",children:"Web Components"}),"\n",(0,s.jsx)(n.p,{children:"Web Components create their own tag so you can query them by the tag name:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const element = await page.$('my-web-component');\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Extend ",(0,s.jsx)(n.code,{children:"HTMLElementTagNameMap"})," to define types for custom tags. This allows Puppeteer to infer the return type for the ElementHandle:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"declare global {\n  interface HTMLElementTagNameMap {\n    'my-web-component': MyWebComponent;\n  }\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"query-selectors-legacy",children:"Query Selectors (legacy)"}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"While we maintain prefixed selectors, the recommended way is to use the selector syntax documented above."})}),"\n",(0,s.jsx)(n.p,{children:"Queries are the primary mechanism for interacting with the DOM on your site. For example, a typical workflow goes like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Query for an element handle.\n  const element = await page.waitForSelector('div > .class-name');\n\n  // Do something with element...\n  await element.click(); // Just an example.\n\n  // Dispose of handle\n  await element.dispose();\n\n  // Close browser.\n  await browser.close();\n})();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"css",children:"CSS"}),"\n",(0,s.jsxs)(n.p,{children:["CSS selectors follow the CSS spec of the browser being automated. We provide some basic type deduction for CSS selectors (such as ",(0,s.jsx)(n.code,{children:"HTMLInputElement"})," for ",(0,s.jsx)(n.code,{children:"input"}),"), but any selector that contains no type information (such as ",(0,s.jsx)(n.code,{children:".class-name"}),") will need to be coerced manually using TypeScript's ",(0,s.jsx)(n.code,{children:"as"})," coercion mechanism."]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Automatic\nconst element = await page.waitForSelector('div > input');\n// Manual\nconst element = (await page.waitForSelector(\n  'div > .class-name-for-input'\n)) as HTMLInputElement;\n"})}),"\n",(0,s.jsx)(n.h3,{id:"built-in-selectors",children:"Built-in selectors"}),"\n",(0,s.jsxs)(n.p,{children:["Built-in selectors are Puppeteer's own class of selectors for doing things CSS cannot. Every built-in selector starts with a prefix ",(0,s.jsx)(n.code,{children:".../"})," to assist Puppeteer in distinguishing between CSS selectors and a built-in."]}),"\n",(0,s.jsxs)(n.h4,{id:"text-selectors-text",children:["Text selectors (",(0,s.jsx)(n.code,{children:"text/"}),")"]}),"\n",(0,s.jsx)(n.p,{children:'Text selectors will select "minimal" elements containing the given text, even within (open) shadow roots. Here, "minimum" means the deepest elements that contain a given text, but not their parents (which technically will also contain the given text).'}),"\n",(0,s.jsx)(n.h5,{id:"example-5",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// Note we usually need type coercion since the type cannot be deduced, but for text selectors, `instanceof` checks may be better for runtime validation.\nconst element = await page.waitForSelector('text/My name is Jun');\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"xpath-selectors-xpath",children:["XPath selectors (",(0,s.jsx)(n.code,{children:"xpath/"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["XPath selectors will use the browser's native ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/evaluate",children:(0,s.jsx)(n.code,{children:"Document.evaluate"})})," to query for elements."]}),"\n",(0,s.jsx)(n.h5,{id:"example-6",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// There is not type deduction for XPaths.\nconst node = await page.waitForSelector('xpath/h2');\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"aria-selectors-aria",children:["ARIA selectors (",(0,s.jsx)(n.code,{children:"aria/"}),")"]}),"\n",(0,s.jsx)(n.p,{children:"ARIA selectors can be used to find elements with a given ARIA label. These labels are computed using Chrome's internal representation."}),"\n",(0,s.jsx)(n.h5,{id:"example-7",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"const node = await page.waitForSelector('aria/Button name');\n"})}),"\n",(0,s.jsxs)(n.h4,{id:"pierce-selectors-pierce",children:["Pierce selectors (",(0,s.jsx)(n.code,{children:"pierce/"}),")"]}),"\n",(0,s.jsxs)(n.p,{children:["Pierce selectors will run the ",(0,s.jsx)(n.code,{children:"querySelector*"})," API on the document and all shadow roots to find an element."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Selectors will ",(0,s.jsx)(n.strong,{children:"not"})," ",(0,s.jsx)(n.em,{children:"partially"})," pierce through shadow roots. See the examples below."]})}),"\n",(0,s.jsx)(n.h5,{id:"example-8",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Suppose the HTML is"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<div>\n  <custom-element>\n    <div></div>\n  </custom-element>\n</div>\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"// This will be two elements because of the outer and inner div.\nexpect((await page.$$('pierce/div')).length).toBe(2);\n\n// Partial piercing doesn't work.\nexpect((await page.$$('pierce/div div')).length).toBe(0);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"custom-selectors-2",children:"Custom selectors"}),"\n",(0,s.jsxs)(n.p,{children:["Puppeteer provides users the ability to add their own query selectors to Puppeteer using ",(0,s.jsx)(n.a,{href:"/api/puppeteer.registercustomqueryhandler",children:"Puppeteer.registerCustomQueryHandler"}),". This is useful for creating custom selectors based on framework objects or other vendor-specific objects."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var s=t(67294),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,l={},c=null,d=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!a.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:o,type:e,key:c,ref:d,props:l,_owner:r.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var s=t(67294);const o={},l=s.createContext(o);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);