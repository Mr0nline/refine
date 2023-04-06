"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[42123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={id:"useGetToPath",title:"useGetToPath",sidebar_label:"useGetToPath \ud83c\udd95"},i=void 0,s={unversionedId:"api-reference/core/hooks/navigation/useGetToPath",id:"api-reference/core/hooks/navigation/useGetToPath",title:"useGetToPath",description:"useGetToPath is a hook that returns a function that composes the URL for the given resource and the action by using the URL parameters and the meta property if provided.",source:"@site/docs/api-reference/core/hooks/navigation/useGetToPath.md",sourceDirName:"api-reference/core/hooks/navigation",slug:"/api-reference/core/hooks/navigation/useGetToPath",permalink:"/docs/api-reference/core/hooks/navigation/useGetToPath",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/navigation/useGetToPath.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1680783249,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"useGetToPath",title:"useGetToPath",sidebar_label:"useGetToPath \ud83c\udd95"},sidebar:"someSidebar",previous:{title:"useLink \ud83c\udd95",permalink:"/docs/api-reference/core/hooks/navigation/useLink"},next:{title:"useNavigation",permalink:"/docs/api-reference/core/hooks/navigation/useNavigation"}},c={},u=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>action</code>",id:"action",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>legacy</code>",id:"legacy",level:3}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useGetToPath")," is a hook that returns a function that composes the URL for the given ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"action")," by using the URL parameters and the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," property if provided."),(0,o.kt)("p",null,"This is useful when you want to navigate to a specific action of a resource and you want to have the URL to be composed automatically."),(0,o.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useGetToPath, useGo } from "@refinedev/core";\n\n// Let\'s assume that we have a resource named `posts` and the `edit` action path is `/:authorId/posts/:id/edit`\n\nconst MyComponent = () => {\n    const getToPath = useGetToPath();\n\n    const go = useGo();\n\n    return (\n        <Button\n            onClick={() => {\n                go({\n                    to: getToPath({\n                        resource: "posts",\n                        action: "edit",\n                        meta: {\n                            id: 1,\n                            authorId: 2,\n                        },\n                    }),\n                });\n            }}\n        >\n            Go To Edit Post\n        </Button>\n    );\n\n    /* ... */\n};\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The ",(0,o.kt)("inlineCode",{parentName:"p"},"authorId")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," parameters will be inferred from the route if they are present in the URL. If you want to explicitly set the value of a parameter, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," property.")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,"This is the name of the resource that you want to navigate to."),(0,o.kt)("h3",{id:"action"},(0,o.kt)("inlineCode",{parentName:"h3"},"action")),(0,o.kt)("p",null,"This is the name of the action that you want to navigate to."),(0,o.kt)("h3",{id:"meta"},(0,o.kt)("inlineCode",{parentName:"h3"},"meta")),(0,o.kt)("p",null,"This is the meta object that you want to use to compose the URL. It will be merged with the ",(0,o.kt)("inlineCode",{parentName:"p"},"params")," object that is parsed from the URL."),(0,o.kt)("h3",{id:"legacy"},(0,o.kt)("inlineCode",{parentName:"h3"},"legacy")),(0,o.kt)("p",null,"This is a boolean value that indicates whether the legacy URL format should be used or not. If it is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", the URL will be composed for the legacy routers. Default value is ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."))}p.isMDXComponent=!0}}]);