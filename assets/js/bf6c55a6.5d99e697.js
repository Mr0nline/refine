"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[86390],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const o={id:"usePermissions",title:"usePermissions",siderbar_label:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermission/index.ts"},s=void 0,a={unversionedId:"api-reference/core/hooks/auth/usePermissions",id:"api-reference/core/hooks/auth/usePermissions",title:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"@site/docs/api-reference/core/hooks/auth/usePermissions.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/usePermissions",permalink:"/docs/api-reference/core/hooks/auth/usePermissions",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/usePermissions.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"usePermissions",title:"usePermissions",siderbar_label:"usePermissions",description:"usePermissions data hook from refine is a modified version of react-query's useQuery for retrieving user data",source:"/packages/core/src/hooks/auth/usePermission/index.ts"},sidebar:"someSidebar",previous:{title:"useLogout",permalink:"/docs/api-reference/core/hooks/auth/useLogout"},next:{title:"useRegister",permalink:"/docs/api-reference/core/hooks/auth/useRegister"}},u={},l=[{value:"Usage",id:"usage",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"usePermissions")," calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions")," method from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,i.kt)("p",null,"It returns the result of ",(0,i.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,i.kt)("inlineCode",{parentName:"p"},"useQuery")," which includes many properties, some of which being ",(0,i.kt)("inlineCode",{parentName:"p"},"isSuccess")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"isError"),". Data that is resolved from the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPermissions")," will be returned as the ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"usePermissions")," can be useful when you want to get user's permission's anywhere in your code."),(0,i.kt)("p",null,"Imagine that you want to allow only users with the admin role to see the create button in a list page."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"We have a logic in ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/providers/auth-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"authProvider")),"'s ",(0,i.kt)("inlineCode",{parentName:"li"},"getPermissions")," method like below.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n  ...\n    // highlight-start\n    getPermissions: async () => {\n        return ["admin"];\n    },\n    // highlight-end\n  ...\n};\n')),(0,i.kt)("br",null),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Get permissions data in the list page with ",(0,i.kt)("inlineCode",{parentName:"li"},"usePermissions")," and check if the user has ",(0,i.kt)("inlineCode",{parentName:"li"},'"admin'),'" role.')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/post/list"',title:'"pages/post/list"'},'// highlight-next-line\nimport { usePermissions } from "@refinedev/core";\nimport { List } from "@refinedev/antd";\n\nexport const PostList: React.FC = () => {\n    // highlight-next-line\n    const { data: permissionsData } = usePermissions();\n\n    return <List canCreate={permissionsData?.includes("admin")}>...</List>;\n};\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/components/basic-views/list"},"Refer to the ",(0,i.kt)("inlineCode",{parentName:"a"},"<List>")," documentation for detailed usage. ","\u2192"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This hook can only be used if the ",(0,i.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}p.isMDXComponent=!0}}]);