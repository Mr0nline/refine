"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[17505],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||a;return n?o.createElement(f,i(i({ref:t},u),{},{components:n})):o.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80484:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(87462),r=(n(67294),n(3905));const a={id:"save-button",title:"Save",swizzle:!0},i=void 0,s={unversionedId:"api-reference/antd/components/buttons/save-button",id:"api-reference/antd/components/buttons/save-button",title:"Save",description:"` uses Ant Design's ` component. It uses it for presantation purposes only. Some of the hooks that refine has adds features to this button.",source:"@site/docs/api-reference/antd/components/buttons/save.md",sourceDirName:"api-reference/antd/components/buttons",slug:"/api-reference/antd/components/buttons/save-button",permalink:"/docs/api-reference/antd/components/buttons/save-button",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/antd/components/buttons/save.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679685091,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"save-button",title:"Save",swizzle:!0},sidebar:"someSidebar",previous:{title:"Refresh",permalink:"/docs/api-reference/antd/components/buttons/refresh-button"},next:{title:"Show",permalink:"/docs/api-reference/antd/components/buttons/show-button"}},p={},l=[{value:"Usage",id:"usage",level:2},{value:"Properties",id:"properties",level:2},{value:"<code>hideText</code>",id:"hidetext",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties-1",level:3}],u=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)});var c;const d={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," uses Ant Design's ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/"},(0,r.kt)("inlineCode",{parentName:"a"},"<Button>"))," component. It uses it for presantation purposes only. Some of the hooks that ",(0,r.kt)("strong",{parentName:"p"},"refine")," has adds features to this button."),(0,r.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,r.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,r.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,r.kt)("strong",{parentName:"a"},"refine CLI")))),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"For example, let's add logic to the ",(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component with the ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," returned by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts/edit/123",live:!0,url:"http://localhost:3000/posts/edit/123"},'// visible-block-start\nimport { Edit, useForm } from "@refinedev/antd";\nimport { Form, Input } from "antd";\n\nconst PostEdit: React.FC = () => {\n    // highlight-next-line\n    const { formProps, saveButtonProps } = useForm<IPost>();\n\n    return (\n        // highlight-next-line\n        <Edit saveButtonProps={saveButtonProps}>\n            <Form {...formProps} layout="vertical">\n                <Form.Item\n                    label="Title"\n                    name="title"\n                    rules={[\n                        {\n                            required: true,\n                        },\n                    ]}\n                >\n                    <Input />\n                </Form.Item>\n            </Form>\n        </Edit>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/posts/edit/123"]}\n        resources={[\n            {\n                name: "posts",\n                edit: PostEdit,\n                list: () => {\n                    return (\n                        <RefineAntd.List>\n                            <p>Your list page here</p>\n                        </RefineAntd.List>\n                    );\n                }\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/antd/hooks/form/useForm"},(0,r.kt)("inlineCode",{parentName:"a"},"useForm"))," hook exposes ",(0,r.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," to be passed to ",(0,r.kt)("inlineCode",{parentName:"p"},"<SaveButton>")," component which includes submitting the form action, button loading, and disable states."),(0,r.kt)("h2",{id:"properties"},"Properties"),(0,r.kt)("h3",{id:"hidetext"},(0,r.kt)("inlineCode",{parentName:"h3"},"hideText")),(0,r.kt)("p",null,"It is used to show and not show the text of the button. When ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),", only the button icon is visible."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live disableScroll previewHeight=120px",live:!0,disableScroll:!0,previewHeight:"120px"},'// visible-block-start\nimport { SaveButton } from "@refinedev/antd";\n\nconst MySaveComponent = () => {\n    return (\n        <SaveButton\n            // highlight-next-line\n            hideText\n        />\n    );\n};\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        initialRoutes={["/"]}\n        resources={[\n            {\n                name: "posts",\n                list: MySaveComponent,\n            },\n        ]}\n    />,\n);\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("h3",{id:"properties-1"},"Properties"),(0,r.kt)(u,{module:"@refinedev/antd/SaveButton",mdxType:"PropsTable"}),(0,r.kt)("admonition",{title:"External Props",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,r.kt)("a",{parentName:"p",href:"https://ant.design/components/button/#API"},"Button"),".")))}m.isMDXComponent=!0}}]);