"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[99221,5335,26052,99103,2220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},17737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"api-reference/core/hooks/data/useList/basic-usage-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useList/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/basic-usage-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/basic-usage-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{}},p={},l=[],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px",live:!0,url:"http://localhost:3000/products",previewHeight:"300px"},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useList, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    const { data, isLoading, isError } = useList<IProduct, HttpError>({\n        resource: "products",\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <ul>\n            {products.map((product) => (\n                <li key={product.id}>\n                    <h4>\n                        {product.name} - ({product.material})\n                    </h4>\n                </li>\n            ))}\n        </ul>\n    );\n};\n\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}c.isMDXComponent=!0},32831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"api-reference/core/hooks/data/useList/filtering-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useList/filtering-live-preview",title:"filtering-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/filtering-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/filtering-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/filtering-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/filtering-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{}},p={},l=[],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useList, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    //highlight-next-line\n    const [value, setValue] = useState("Cotton");\n\n    const { data, isLoading, isError } = useList<IProduct, HttpError>({\n        resource: "products",\n        //highlight-start\n        config: {\n            filters: [\n                {\n                    field: "material",\n                    operator: "eq",\n                    value,\n                },\n            ],\n        },\n        //highlight-end\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <span> material: </span>\n            <select value={value} onChange={(e) => setValue(e.target.value)}>\n                {["Cotton", "Bronze", "Plastic"].map((material) => (\n                    <option key={material} value={material}>\n                        {material}\n                    </option>\n                ))}\n            </select>\n            {/* highlight-end */}\n\n            <ul>\n                {products.map((product) => (\n                    <li key={product.id}>\n                        <h4>\n                            {product.name} - ({product.material})\n                        </h4>\n                    </li>\n                ))}\n            </ul>\n        </div>\n    );\n};\n\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}c.isMDXComponent=!0},50851:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>v,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var r=n(87462),a=(n(67294),n(3905)),i=n(17737),o=n(6933),s=n(32831),p=n(91771);const l={title:"useList",siderbar_label:"useList",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/data/useList.ts"},d=void 0,c={unversionedId:"api-reference/core/hooks/data/useList/index",id:"version-3.xx.xx/api-reference/core/hooks/data/useList/index",title:"useList",description:"useList is an extended version of TanStack Query's useQuery. It supports all the features of useQuery and adds some extra features.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/index.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/index.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{title:"useList",siderbar_label:"useList",source:"https://github.com/refinedev/refine/blob/next/packages/core/src/hooks/data/useList.ts"},sidebar:"someSidebar",previous:{title:"useDeleteMany",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useDeleteMany/"},next:{title:"useInfiniteList",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useInfiniteList/"}},u={},m=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Pagination",id:"pagination",level:2},{value:"Sorting",id:"sorting",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code> <PropTag required />",id:"resource-",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>config.filters</code>",id:"configfilters",level:3},{value:"<code>config.sort</code>",id:"configsort",level:3},{value:"<code>config.pagination</code>",id:"configpagination",level:3},{value:"<code>current</code>",id:"current",level:4},{value:"<code>pageSize</code>",id:"pagesize",level:4},{value:"<code>config.hasPagination</code>",id:"confighaspagination",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>metaData</code>",id:"metadata",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>liveMode</code>",id:"livemode",level:3},{value:"<code>onLiveEvent</code>",id:"onliveevent",level:3},{value:"<code>liveParams</code>",id:"liveparams",level:3},{value:"Return Values",id:"return-values",level:2},{value:"API",id:"api",level:2},{value:"Properties",id:"properties-1",level:3},{value:"Config Parameters",id:"config-parameters",level:3},{value:"Type Parameters",id:"type-parameters",level:3},{value:"Return Values",id:"return-values-1",level:3}],h=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},k=h("PropTag"),f=h("PropsTable"),g={toc:m};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useList")," is an extended version of TanStack Query's ",(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"useQuery")),". It supports all the features of ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," and adds some extra features."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It uses the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method as the ",(0,a.kt)("strong",{parentName:"p"},"query function")," from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/core/providers/data-provider"},(0,a.kt)("inlineCode",{parentName:"a"},"dataProvider"))," which is passed to ",(0,a.kt)("inlineCode",{parentName:"p"},"<Refine>"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"It uses a query key to cache the data. The ",(0,a.kt)("strong",{parentName:"p"},"query key")," is generated from the provided properties. You can see the query key by using the TanStack Query devtools."))),(0,a.kt)("p",null,"When you need to fetch data according to sort, filter, pagination, etc. from a resource, you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook. It will return the data and some functions to control the query."),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"Here is a basic example of how to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook."),(0,a.kt)(i.default,{mdxType:"BasicUsageLivePreview"}),(0,a.kt)("h2",{id:"pagination"},"Pagination"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook supports the pagination feature. You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," property to enable pagination. To handle pagination, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"."),(0,a.kt)("p",null,"Dynamically changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," properties will trigger a new request."),(0,a.kt)(o.default,{mdxType:"PaginationLivePreview"}),(0,a.kt)("h2",{id:"sorting"},"Sorting"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook supports the sorting feature. You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"sort")," property to enable sorting. To handle sorting, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"sort")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"."),(0,a.kt)("p",null,"Dynamically changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"sort")," property will trigger a new request."),(0,a.kt)(p.default,{mdxType:"SortingLivePreview"}),(0,a.kt)("h2",{id:"filtering"},"Filtering"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook supports the filtering feature. You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," property to enable filtering. To handle filtering, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook passes the ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," property to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"."),(0,a.kt)("p",null,"Dynamically changing the ",(0,a.kt)("inlineCode",{parentName:"p"},"filters")," property will trigger a new request."),(0,a.kt)(s.default,{mdxType:"FilteringLivePreview"}),(0,a.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," hook is mounted, it will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"resource-"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")," ",(0,a.kt)(k,{required:!0,mdxType:"PropTag"})),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. The parameter is usually used as an API endpoint path. It all depends on how to handle the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," in the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method. See the ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorial/understanding-dataprovider/create-dataprovider/"},"creating a data provider")," section for an example of how resources are handled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    resource: "categories",\n});\n')),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    dataProviderName: "second-data-provider",\n});\n')),(0,a.kt)("h3",{id:"configfilters"},(0,a.kt)("inlineCode",{parentName:"h3"},"config.filters")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"filters")," will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to send filter query parameters to the API."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/interfaceReferences#crudfilters"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CrudFilters")," interface for more information ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    config: {\n        filters: [\n            {\n                field: "title",\n                operator: "contains",\n                value: "Foo",\n            },\n        ],\n    },\n});\n')),(0,a.kt)("h3",{id:"configsort"},(0,a.kt)("inlineCode",{parentName:"h3"},"config.sort")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"sort")," will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to send sort query parameters to the API."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"docs/api-reference/core/interfaceReferences#crudsorting"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"CrudSorting")," interface for more information ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    config: {\n        sort: [\n            {\n                field: "title",\n                order: "asc",\n            },\n        ],\n    },\n});\n')),(0,a.kt)("h3",{id:"configpagination"},(0,a.kt)("inlineCode",{parentName:"h3"},"config.pagination")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to send pagination query parameters to the API."),(0,a.kt)("h4",{id:"current"},(0,a.kt)("inlineCode",{parentName:"h4"},"current")),(0,a.kt)("p",null,"You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"current")," page number to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useList({\n    config: {\n        pagination: {\n            current: 2,\n        },\n    },\n});\n")),(0,a.kt)("h4",{id:"pagesize"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageSize")),(0,a.kt)("p",null,"You can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"pageSize")," to the ",(0,a.kt)("inlineCode",{parentName:"p"},"pagination")," property."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useList({\n    config: {\n        pagination: {\n            pageSize: 20,\n        },\n    },\n});\n")),(0,a.kt)("h3",{id:"confighaspagination"},(0,a.kt)("inlineCode",{parentName:"h3"},"config.hasPagination")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"hasPagination")," will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine whether to use server-side pagination or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useList({\n    config: {\n        hasPagination: false,\n    },\n});\n")),(0,a.kt)("h3",{id:"queryoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useList({\n    queryOptions: {\n        retry: 3,\n    },\n});\n")),(0,a.kt)("h3",{id:"metadata"},(0,a.kt)("inlineCode",{parentName:"h3"},"metaData")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#metadata"},(0,a.kt)("inlineCode",{parentName:"a"},"metaData"))," is used following two purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,a.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,a.kt)("a",{parentName:"li",href:"/docs/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,a.kt)("p",null,"In the following example, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"metaData")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    // highlight-start\n    metaData: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    getList: async ({\n        resource,\n        pagination,\n        hasPagination,\n        sort,\n        filters,\n        // highlight-next-line\n        metaData,\n    }) => {\n        // highlight-next-line\n        const headers = metaData?.headers ?? {};\n        const url = `${apiUrl}/${resource}`;\n\n        //...\n        //...\n\n        // highlight-next-line\n        const { data } = await httpClient.get(`${url}`, { headers });\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,a.kt)("h3",{id:"successnotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"After data is fetched successfully, ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," can call ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    successNotification: (data, values, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,a.kt)("h3",{id:"errornotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"After data fetching is failed, ",(0,a.kt)("inlineCode",{parentName:"p"},"useList")," will call ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    errorNotification: (data, values, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,a.kt)("h3",{id:"livemode"},(0,a.kt)("inlineCode",{parentName:"h3"},"liveMode")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.\nFor more information about live mode, please check ',(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#livemode"},"Live / Realtime")," page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useList({\n    liveMode: "auto",\n});\n')),(0,a.kt)("h3",{id:"onliveevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"onLiveEvent")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useList({\n    onLiveEvent: (event) => {\n        console.log(event);\n    },\n});\n")),(0,a.kt)("h3",{id:"liveparams"},(0,a.kt)("inlineCode",{parentName:"h3"},"liveParams")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"Params to pass to liveProvider's ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method."),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("p",null,"Returns an object with TanStack Query's ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"properties-1"},"Properties"),(0,a.kt)(f,{module:"@pankod/refine-core/useList","successNotification-default":"`false`","errorNotification-default":'"Error (status code: `statusCode`)"',mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"config-parameters"},"Config Parameters"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'interface UseListConfig {\n    hasPagination?: boolean;\n    pagination?: {\n        current?: number;\n        pageSize?: number;\n    };\n    sort?: Array<{\n        field: string;\n        order: "asc" | "desc";\n    }>;\n    filters?: Array<{\n        field: string;\n        operator: CrudOperators;\n        value: any;\n    }>;\n}\n')),(0,a.kt)("h3",{id:"type-parameters"},"Type Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Desription"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TData"),(0,a.kt)("td",{parentName:"tr",align:null},"Result data of the query. Extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#baserecord"},(0,a.kt)("inlineCode",{parentName:"a"},"BaseRecord")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TError"),(0,a.kt)("td",{parentName:"tr",align:null},"Custom error object that extends ",(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError"))),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"/docs/3.xx.xx/api-reference/core/interfaceReferences#httperror"},(0,a.kt)("inlineCode",{parentName:"a"},"HttpError")))))),(0,a.kt)("h3",{id:"return-values-1"},"Return Values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Result of the TanStack Query's ",(0,a.kt)("inlineCode",{parentName:"td"},"useQuery")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," data: TData[];"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," total: number; },"),(0,a.kt)("br",null),(0,a.kt)("inlineCode",{parentName:"a"}," TError>")))))))}v.isMDXComponent=!0},6933:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"api-reference/core/hooks/data/useList/pagination-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useList/pagination-live-preview",title:"pagination-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/pagination-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/pagination-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/pagination-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/pagination-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{}},p={},l=[],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useList, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    //highlight-start\n    const [current, setCurrent] = useState(1);\n    const [pageSize, setPageSize] = useState(5);\n    //highlight-end\n\n    const { data, isLoading, isError } = useList<IProduct, HttpError>({\n        resource: "products",\n        //highlight-start\n        config: {\n            pagination: {\n                current,\n                pageSize,\n            },\n        },\n        //highlight-end\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <button onClick={() => setCurrent((prev) => prev - 1)}>\n                {"<"}\n            </button>\n            <span> page: {current} </span>\n            <button onClick={() => setCurrent((prev) => prev + 1)}>\n                {">"}\n            </button>\n            <span> per page: </span>\n            <select\n                value={pageSize}\n                onChange={(e) => setPageSize(Number(e.target.value))}\n            >\n                {[5, 10, 20].map((size) => (\n                    <option key={size} value={size}>\n                        {size}\n                    </option>\n                ))}\n            </select>\n            {/* highlight-end */}\n\n            <ul>\n                {products.map((product) => (\n                    <li key={product.id}>\n                        <h4>\n                            {product.name} - ({product.material})\n                        </h4>\n                    </li>\n                ))}\n            </ul>\n        </div>\n    );\n};\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}c.isMDXComponent=!0},91771:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,s={unversionedId:"api-reference/core/hooks/data/useList/sorting-live-preview",id:"version-3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview",title:"sorting-live-preview",description:"",source:"@site/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview.md",sourceDirName:"api-reference/core/hooks/data/useList",slug:"/api-reference/core/hooks/data/useList/sorting-live-preview",permalink:"/docs/3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/core/hooks/data/useList/sorting-live-preview.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{}},p={},l=[],d={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products previewHeight=300px hideCode",live:!0,url:"http://localhost:3000/products",previewHeight:"300px",hideCode:!0},'setInitialRoutes(["/products"]);\n\n// visible-block-start\nimport { useState } from "react";\nimport { useList, HttpError } from "@pankod/refine-core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductList: React.FC = () => {\n    //highlight-next-line\n    const [order, setOrder] = useState<"asc" | "desc">("asc");\n\n    const { data, isLoading, isError } = useList<IProduct, HttpError>({\n        resource: "products",\n        //highlight-start\n        config: {\n            sort: [\n                {\n                    field: "name",\n                    order,\n                },\n            ],\n        },\n        //highlight-end\n    });\n\n    const products = data?.data ?? [];\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            {/* highlight-start */}\n            <button\n                onClick={() =>\n                    setOrder((prev) => (prev === "asc" ? "desc" : "asc"))\n                }\n            >\n                toggle sort\n            </button>\n            {/* highlight-end */}\n\n            <ul>\n                {products.map((product) => (\n                    <li key={product.id}>\n                        <h4>\n                            {product.name} - ({product.material})\n                        </h4>\n                    </li>\n                ))}\n            </ul>\n        </div>\n    );\n};\n\n// visible-block-end\n\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            list: ProductList,\n        },\n    ],\n});\n\nrender(<RefineHeadlessDemo />);\n')))}c.isMDXComponent=!0}}]);