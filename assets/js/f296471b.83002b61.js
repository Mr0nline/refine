"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[84643],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=n,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return r?a.createElement(h,o(o({ref:t},d),{},{components:r})):a.createElement(h,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},59166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"useParsed",title:"useParsed",sidebar_label:"useParsed \ud83c\udd95"},o=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useParsed",id:"api-reference/core/hooks/navigation/useParsed",title:"useParsed",description:"useParsed is a hook that leverages the parse method of the routerProvider to access the URL and query parameters along with the inferred resource, action and id from the URL.",source:"@site/docs/api-reference/core/hooks/navigation/useParsed.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useParsed",permalink:"/docs/api-reference/core/hooks/navigation/useParsed",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useParsed.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679685091,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"useParsed",title:"useParsed",sidebar_label:"useParsed \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useGo \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useGo"},next:{title:"useBack \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useBack"}},p={},l=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Return Values",id:"return-values",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>pathname</code>",id:"pathname",level:3},{value:"<code>params.filters</code>",id:"paramsfilters",level:3},{value:"<code>params.sorters</code>",id:"paramssorters",level:3},{value:"<code>params.current</code>",id:"paramscurrent",level:3},{value:"<code>params.pageSize</code>",id:"paramspagesize",level:3},{value:"<code>params</code>",id:"params",level:3}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useParsed")," is a hook that leverages the ",(0,n.kt)("inlineCode",{parentName:"p"},"parse")," method of the ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/router-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"routerProvider"))," to access the URL and query parameters along with the inferred ",(0,n.kt)("inlineCode",{parentName:"p"},"resource"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"action")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," from the URL."),(0,n.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useParsed } from "@refinedev/core";\n\nconst MyComponent = () => {\n    const {\n        resource,\n        action,\n        id,\n        pathname,\n        params: {\n            filters,\n            sorters,\n            current,\n            pageSize,\n            ...restParams // Any other parameters are also parsed and available in `params`\n        },\n    } = useParsed();\n\n    /* ... */\n};\n')),(0,n.kt)("h2",{id:"return-values"},"Return Values"),(0,n.kt)("h3",{id:"resource"},(0,n.kt)("inlineCode",{parentName:"h3"},"resource")),(0,n.kt)("p",null,"This is the active resource that is matched by the current route and the action definitions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," array of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no match."),(0,n.kt)("h3",{id:"action"},(0,n.kt)("inlineCode",{parentName:"h3"},"action")),(0,n.kt)("p",null,"This is the active action that is matched by the current route and the action definitions in the ",(0,n.kt)("inlineCode",{parentName:"p"},"resources")," array of the ",(0,n.kt)("inlineCode",{parentName:"p"},"Refine")," component. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no match."),(0,n.kt)("h3",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h3"},"id")),(0,n.kt)("p",null,"This is the main parameter used by the ",(0,n.kt)("strong",{parentName:"p"},"refine")," in API interactions. It will also be available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," object but it is also available as a separate value for convenience. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"id")," parameter in the URL."),(0,n.kt)("h3",{id:"pathname"},(0,n.kt)("inlineCode",{parentName:"h3"},"pathname")),(0,n.kt)("p",null,"This is the current pathname of the URL."),(0,n.kt)("h3",{id:"paramsfilters"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.filters")),(0,n.kt)("p",null,"This is the filters that are parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"filters")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramssorters"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.sorters")),(0,n.kt)("p",null,"This is the sorters that are parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"sorters")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramscurrent"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.current")),(0,n.kt)("p",null,"This is the current page that is parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"current")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"paramspagesize"},(0,n.kt)("inlineCode",{parentName:"h3"},"params.pageSize")),(0,n.kt)("p",null,"This is the page size that is parsed from the URL. It will be ",(0,n.kt)("inlineCode",{parentName:"p"},"undefined")," if there is no ",(0,n.kt)("inlineCode",{parentName:"p"},"pageSize")," parameter in the URL. This property is used in the ",(0,n.kt)("inlineCode",{parentName:"p"},"syncWithLocation")," feature of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useTable"),"."),(0,n.kt)("h3",{id:"params"},(0,n.kt)("inlineCode",{parentName:"h3"},"params")),(0,n.kt)("p",null,"This is the object that contains all the parameters that are parsed from the URL. It will be an empty object if there is no parameter in the URL. ",(0,n.kt)("inlineCode",{parentName:"p"},"params")," object contains both the URL parameters and the query parameters."))}c.isMDXComponent=!0}}]);