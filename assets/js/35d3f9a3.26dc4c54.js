"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[25786],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>u});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,f=m["".concat(l,".").concat(u)]||m[u]||c[u]||i;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},88144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={id:"image",title:"Image",swizzle:!0},o=void 0,s={unversionedId:"api-reference/antd/components/fields/image",id:"version-3.xx.xx/api-reference/antd/components/fields/image",title:"Image",description:"This field is used to display images and uses `` from Ant Design.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/image.md",sourceDirName:"api-reference/antd/components/fields",slug:"/api-reference/antd/components/fields/image",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/image",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/antd/components/fields/image.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"image",title:"Image",swizzle:!0},sidebar:"someSidebar",previous:{title:"File",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/file"},next:{title:"Markdown",permalink:"/docs/3.xx.xx/api-reference/antd/components/fields/markdown"}},l={},p=[{value:"Usage",id:"usage",level:2},{value:"API Reference",id:"api-reference",level:2},{value:"Properties",id:"properties",level:3}],d=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var c;const m={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This field is used to display images and uses ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/image/#header"},(0,a.kt)("inlineCode",{parentName:"a"},"<Image>"))," from Ant Design."),(0,a.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,a.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,a.kt)("strong",{parentName:"a"},"refine CLI")))),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Let's see how we can use ",(0,a.kt)("inlineCode",{parentName:"p"},"<ImageField>")," with the example in the edit page."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live",live:!0},'// visible-block-start\nimport { \n    List,\n    Table,\n    useTable,\n    // highlight-next-line\n    ImageField,\n} from "@pankod/refine-antd";\n\nconst PostList: React.FC = () => {\n    const { tableProps } = useTable<IPost>();\n\n    return (\n        <List>\n            <Table {...tableProps} rowKey="id">\n                <Table.Column dataIndex="id" title="ID" />\n                <Table.Column dataIndex="title" title="Title" width="50%" />\n                <Table.Column<IPost>\n                    title="Image"\n                    dataIndex="image"\n                    render={(_, record) => (\n                        // highlight-start\n                        <ImageField\n                            value={record.image[0].url}\n                            title={record.image[0].name}\n                            width={200}\n                        />\n                        // highlight-end\n                    )}\n                    width="50%"\n                />\n            </Table>\n        </List>\n    );\n};\n\ninterface IPost {\n    id: number;\n    title: string;\n    image: [\n        {\n            url: string;\n            name: string;\n        },\n    ];\n}\n// visible-block-end\n\nrender(\n    <RefineAntdDemo\n        resources={[\n            {\n                name: "posts",\n                list: PostList\n            },\n        ]}\n    />,\n);\n')),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)(d,{module:"@pankod/refine-antd/ImageField","value-description":"Image path",mdxType:"PropsTable"}),(0,a.kt)("admonition",{title:"External Props",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"It also accepts all props of Ant Design ",(0,a.kt)("a",{parentName:"p",href:"https://ant.design/components/image/#API"},"Image"),".")))}u.isMDXComponent=!0}}]);