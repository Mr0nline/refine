"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[54218,55878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),h=a,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},84280:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(67294),a=n(16153);const o=e=>{let{hook:t,method:n,hasDefault:o=!0}=e;const i=`It will be passed to the [\`${null==n?void 0:n.name}\`](${null==n?void 0:n.URL}) method from the \`dataProvider\` as parameter via the [\`${null==t?void 0:t.name}\`](${null==t?void 0:t.URL}) hook. \n    The parameter is usually used as an API endpoint path.\n    It all depends on how to handle the \`resource\` in the [\`${null==n?void 0:n.name}\`](${null==n?void 0:n.URL}) method. \n    See the [creating a data provider](/docs/api-reference/core/providers/data-provider/#creating-a-data-provider) section for an example of how resources are handled.`;return r.createElement(r.Fragment,null,o&&r.createElement(a.D,null,"> Default: It reads the `resource` value from the current URL."),r.createElement(a.D,null,i))}},26145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={},i=void 0,s={unversionedId:"api-reference/core/hooks/show/basic-usage-live-preview",id:"api-reference/core/hooks/show/basic-usage-live-preview",title:"basic-usage-live-preview",description:"",source:"@site/docs/api-reference/core/hooks/show/basic-usage-live-preview.md",sourceDirName:"api-reference/core/hooks/show",slug:"/api-reference/core/hooks/show/basic-usage-live-preview",permalink:"/docs/api-reference/core/hooks/show/basic-usage-live-preview",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/show/basic-usage-live-preview.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1680783249,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{}},l={},d=[],p={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css",metastring:"live shared",live:!0,shared:!0},"body {\n    padding: 4px;\n    background: white;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/products/show/1 previewHeight=300px",live:!0,url:"http://localhost:3000/products/show/1",previewHeight:"300px"},'setInitialRoutes(["/products/show/1"]);\n// visible-block-start\nimport { useShow } from "@refinedev/core";\n\ninterface IProduct {\n    id: number;\n    name: string;\n    material: string;\n}\n\nconst ProductShow: React.FC = () => {\n    const { queryResult } = useShow<IProduct>();\n\n    const { data, isLoading, isError } = queryResult;\n    const product = data?.data;\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n\n    if (isError) {\n        return <div>Something went wrong!</div>;\n    }\n\n    return (\n        <div>\n            <h3>Product Details</h3>\n            <p>id: {product?.id}</p>\n            <p>name: {product?.name}</p>\n            <p>material: {product?.material}</p>\n        </div>\n    );\n};\n\n// visible-block-end\nsetRefineProps({\n    resources: [\n        {\n            name: "products",\n            show: ProductShow,\n        },\n    ],\n});\nrender(<RefineHeadlessDemo />);\n')))}u.isMDXComponent=!0},64788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var r=n(87462),a=(n(67294),n(3905)),o=n(26145),i=n(84280);const s={id:"useShow",title:"useShow"},l=void 0,d={unversionedId:"api-reference/core/hooks/show/useShow",id:"api-reference/core/hooks/show/useShow",title:"useShow",description:"useShow is an extended version of useOne. It supports all the features of useOne and adds some extra features.",source:"@site/docs/api-reference/core/hooks/show/useShow.md",sourceDirName:"api-reference/core/hooks/show",slug:"/api-reference/core/hooks/show/useShow",permalink:"/docs/api-reference/core/hooks/show/useShow",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/show/useShow.md",tags:[],version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1680783249,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{id:"useShow",title:"useShow"},sidebar:"someSidebar",previous:{title:"useResource",permalink:"/docs/api-reference/core/hooks/resource/useResource"},next:{title:"useTable",permalink:"/docs/api-reference/core/hooks/useTable"}},p={},u=[{value:"Usage",id:"usage",level:2},{value:"Realtime Updates",id:"realtime-updates",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>id</code>",id:"id",level:3},{value:"<code>meta</code>",id:"meta",level:3},{value:"<code>dataProviderName</code>",id:"dataprovidername",level:3},{value:"<code>queryOptions</code>",id:"queryoptions",level:3},{value:"<code>successNotification</code>",id:"successnotification",level:3},{value:"<code>errorNotification</code>",id:"errornotification",level:3},{value:"<code>liveMode</code>",id:"livemode",level:3},{value:"<code>onLiveEvent</code>",id:"onliveevent",level:3},{value:"<code>liveParams</code>",id:"liveparams",level:3},{value:"Return Values",id:"return-values",level:2},{value:"<code>queryResult</code>",id:"queryresult",level:3},{value:"<code>showId</code>",id:"showid",level:3},{value:"<code>setShowId</code>",id:"setshowid",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3},{value:"Return values",id:"return-values-1",level:3}],c=(h="PropsTable",function(e){return console.warn("Component "+h+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var h;const m={toc:u};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," is an extended version of ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useOne/"},(0,a.kt)("inlineCode",{parentName:"a"},"useOne")),". It supports all the features of ",(0,a.kt)("inlineCode",{parentName:"p"},"useOne")," and adds some extra features."),(0,a.kt)("p",null,"It is useful when you want to fetch a single record from the API. It will return the data and some functions to control the query."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook does not expect any properties. By default, it will try to read the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," values from the current URL. It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter."),(0,a.kt)("p",null,"If you define ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," on the hook, when these properties are changed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook will trigger a new request."),(0,a.kt)(o.default,{mdxType:"BasicUsageLivePreview"}),(0,a.kt)("h2",{id:"realtime-updates"},"Realtime Updates"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This feature is only available if you use a ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Live Provider"),".")),(0,a.kt)("p",null,"When the ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook is mounted, it will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"subscribe")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"liveProvider")," with some parameters such as ",(0,a.kt)("inlineCode",{parentName:"p"},"channel"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," etc. It is useful when you want to subscribe to live updates."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"liveProvider")," documentation for more information ","\u2192")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"resource"},(0,a.kt)("inlineCode",{parentName:"h3"},"resource")),(0,a.kt)(i.Z,{hook:{name:"useOne",URL:"/docs/api-reference/core/hooks/data/useOne/"},method:{name:"getOne",URL:"/docs/api-reference/core/providers/data-provider/#getone"},mdxType:"PropResource"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    resource: "categories",\n});\n')),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"If the ",(0,a.kt)("inlineCode",{parentName:"p"},"resource")," is passed, the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," from the current URL will be ignored because it may belong to a different resource. To retrieve the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," value from the current URL, use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useParsed")," hook and pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," value to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useShow, useParsed } from "@refinedev/core";\n\nconst { id } = useParsed();\n\nuseShow({\n    resource: "custom-resource",\n    id,\n});\n')),(0,a.kt)("p",{parentName:"admonition"},"Or you can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setId")," function to set the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," value."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useShow } from "@refinedev/core";\n\nconst { setShowId } = useShow({\n    resource: "custom-resource",\n});\n\nsetShowId("123");\n'))),(0,a.kt)("h3",{id:"id"},(0,a.kt)("inlineCode",{parentName:"h3"},"id")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Default: It reads the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," value from the current URL.")),(0,a.kt)("p",null,"It will be passed to the ",(0,a.kt)("inlineCode",{parentName:"p"},"getOne")," method from the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider")," as a parameter. It is used to determine which record to fetch."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n    id: 123,\n});\n")),(0,a.kt)("h3",{id:"meta"},(0,a.kt)("inlineCode",{parentName:"h3"},"meta")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/general-concepts/#meta"},(0,a.kt)("inlineCode",{parentName:"a"},"meta"))," is used following two purposes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To pass additional information to data provider methods."),(0,a.kt)("li",{parentName:"ul"},"Generate GraphQL queries using plain JavaScript Objects (JSON). Please refer ",(0,a.kt)("a",{parentName:"li",href:"/docs/advanced-tutorials/data-provider/graphql/#edit-page"},"GraphQL")," for more information.")),(0,a.kt)("p",null,"In the following example, we pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"headers")," property in the ",(0,a.kt)("inlineCode",{parentName:"p"},"meta")," object to the ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method. With similar logic, you can pass any properties to specifically handle the data provider methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    // highlight-start\n    meta: {\n        headers: { "x-meta-data": "true" },\n    },\n    // highlight-end\n});\n\nconst myDataProvider = {\n    //...\n    getOne: async ({\n        resource,\n        id,\n        // highlight-next-line\n        meta,\n    }) => {\n        // highlight-next-line\n        const headers = meta?.headers ?? {};\n        const url = `${apiUrl}/${resource}/${id}`;\n\n        //...\n        //...\n\n        // highlight-next-line\n        const { data } = await httpClient.get(`${url}`, { headers });\n\n        return {\n            data,\n        };\n    },\n    //...\n};\n')),(0,a.kt)("h3",{id:"dataprovidername"},(0,a.kt)("inlineCode",{parentName:"h3"},"dataProviderName")),(0,a.kt)("p",null,"If there is more than one ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),", you can specify which one to use by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProviderName")," prop. It is useful when you have a different data provider for different resources."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    dataProviderName: "second-data-provider",\n});\n')),(0,a.kt)("h3",{id:"queryoptions"},(0,a.kt)("inlineCode",{parentName:"h3"},"queryOptions")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"queryOptions")," is used to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook. It is useful when you want to pass additional options to the ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," hook."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n    queryOptions: {\n        retry: 3,\n        enabled: false,\n    },\n});\n")),(0,a.kt)("h3",{id:"successnotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"successNotification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"After data is fetched successfully, ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," can call ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show a success notification. With this prop, you can customize the success notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    successNotification: (data, values, resource) => {\n        return {\n            message: `${data.title} Successfully fetched.`,\n            description: "Success with no errors",\n            type: "success",\n        };\n    },\n});\n')),(0,a.kt)("h3",{id:"errornotification"},(0,a.kt)("inlineCode",{parentName:"h3"},"errorNotification")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/notification-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"NotificationProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"After data fetching is failed, ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," will call the ",(0,a.kt)("inlineCode",{parentName:"p"},"open")," function from ",(0,a.kt)("inlineCode",{parentName:"p"},"NotificationProvider")," to show an error notification. With this prop, you can customize the error notification."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    errorNotification: (data, values, resource) => {\n        return {\n            message: `Something went wrong when getting ${data.id}`,\n            description: "Error",\n            type: "error",\n        };\n    },\n});\n')),(0,a.kt)("h3",{id:"livemode"},(0,a.kt)("inlineCode",{parentName:"h3"},"liveMode")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,'Determines whether to update data automatically ("auto") or not ("manual") if a related live event is received. It can be used to update and show data in Realtime throughout your app.\nFor more information about live mode, please check the ',(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#livemode"},"Live / Realtime")," page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'useShow({\n    liveMode: "auto",\n});\n')),(0,a.kt)("h3",{id:"onliveevent"},(0,a.kt)("inlineCode",{parentName:"h3"},"onLiveEvent")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"The callback function is executed when new events from a subscription have arrived."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"useShow({\n    onLiveEvent: (event) => {\n        console.log(event);\n    },\n});\n")),(0,a.kt)("h3",{id:"liveparams"},(0,a.kt)("inlineCode",{parentName:"h3"},"liveParams")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/"},(0,a.kt)("inlineCode",{parentName:"a"},"LiveProvider"))," is required for this prop to work.")),(0,a.kt)("p",null,"Params to pass to liveProvider's ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/live-provider/#subscribe"},"subscribe")," method."),(0,a.kt)("h2",{id:"return-values"},"Return Values"),(0,a.kt)("h3",{id:"queryresult"},(0,a.kt)("inlineCode",{parentName:"h3"},"queryResult")),(0,a.kt)("p",null,"It is TanStack Query's ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," return values."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tanstack.com/query/v4/docs/react/reference/useQuery"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useQuery")," documentation for more information ","\u2192")),(0,a.kt)("h3",{id:"showid"},(0,a.kt)("inlineCode",{parentName:"h3"},"showId")),(0,a.kt)("p",null,"It is the ",(0,a.kt)("inlineCode",{parentName:"p"},"id")," value that is used on the ",(0,a.kt)("inlineCode",{parentName:"p"},"useShow")," hook."),(0,a.kt)("h3",{id:"setshowid"},(0,a.kt)("inlineCode",{parentName:"h3"},"setShowId")),(0,a.kt)("p",null,"When you want to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"showId")," value, you can use this setter. It is useful when you want to change the ",(0,a.kt)("inlineCode",{parentName:"p"},"showId")," value based on the user's action."),(0,a.kt)("p",null,"It will trigger new request to fetch the data when the ",(0,a.kt)("inlineCode",{parentName:"p"},"showId")," value is changed."),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"props"},"Props"),(0,a.kt)(c,{module:"@refinedev/core/useShow","liveMode-default":'`"off"`',mdxType:"PropsTable"}),(0,a.kt)("h3",{id:"return-values-1"},"Return values"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Property"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"queryResult"),(0,a.kt)("td",{parentName:"tr",align:null},"Result of the query of a record"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://react-query.tanstack.com/reference/useQuery"},(0,a.kt)("inlineCode",{parentName:"a"},"QueryObserverResult<{ data: TData }>")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"showId"),(0,a.kt)("td",{parentName:"tr",align:null},"Record id"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"string"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"setShowId"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"showId")," setter"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Dispatch<SetStateAction< string")," ","|"," ",(0,a.kt)("inlineCode",{parentName:"td"},"undefined>>"))))))}k.isMDXComponent=!0}}]);