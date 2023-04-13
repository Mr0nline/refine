"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93471],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=o,h=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},49170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=t(87462),o=(t(67294),t(3905));const a={id:"list",title:"List",swizzle:!0},i=void 0,s={unversionedId:"api-reference/chakra-ui/components/basic-views/list",id:"version-3.xx.xx/api-reference/chakra-ui/components/basic-views/list",title:"List",description:"`` provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles.",source:"@site/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/basic-views/list.md",sourceDirName:"api-reference/chakra-ui/components/basic-views",slug:"/api-reference/chakra-ui/components/basic-views/list",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/list",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/versioned_docs/version-3.xx.xx/api-reference/chakra-ui/components/basic-views/list.md",tags:[],version:"3.xx.xx",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681387613,formattedLastUpdatedAt:"Apr 13, 2023",frontMatter:{id:"list",title:"List",swizzle:!0},sidebar:"someSidebar",previous:{title:"Edit",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/edit"},next:{title:"Show",permalink:"/docs/3.xx.xx/api-reference/chakra-ui/components/basic-views/show"}},p={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>title</code>",id:"title",level:3},{value:"<code>resource</code>",id:"resource",level:3},{value:"<code>canCreate</code> and <code>createButtonProps</code>",id:"cancreate-and-createbuttonprops",level:3},{value:"<code>breadcrumb</code>",id:"breadcrumb",level:3},{value:"<code>wrapperProps</code>",id:"wrapperprops",level:3},{value:"<code>headerProps</code>",id:"headerprops",level:3},{value:"<code>contentProps</code>",id:"contentprops",level:3},{value:"<code>headerButtons</code>",id:"headerbuttons",level:3},{value:"<code>headerButtonProps</code>",id:"headerbuttonprops",level:3},{value:"API Reference",id:"api-reference",level:2},{value:"Props",id:"props",level:3}],l=(c="PropsTable",function(e){return console.warn("Component "+c+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var c;const u={toc:d};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live shared",live:!0,shared:!0},'const { default: simpleRest } = RefineSimpleRest;\nsetRefineProps({\n    dataProvider: simpleRest("https://api.fake-rest.refine.dev"),\n    Layout: RefineChakra.Layout,\n    Sider: () => null,\n});\n\nconst Wrapper = ({ children }) => {\n    return (\n        <RefineChakra.ChakraProvider theme={RefineChakra.refineTheme}>\n            {children}\n        </RefineChakra.ChakraProvider>\n    );\n};\n\ninterface ICategory {\n    id: number;\n    title: string;\n}\n\ninterface IPost {\n    id: number;\n    title: string;\n    content: string;\n    status: "published" | "draft" | "rejected";\n    category: { id: number };\n}\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," provides us a layout to display the page. It does not contain any logic but adds extra functionalities like a create button or giving the page titles."),(0,o.kt)("p",null,"We will show what ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," does using properties with examples."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=420px hideCode",live:!0,url:"http://localhost:3000/posts",previewHeight:"420px",hideCode:!0},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport {\n    List,\n    DateField,\n    TableContainer,\n    Table,\n    Thead,\n    Tr,\n    Th,\n    Tbody,\n    Td,\n} from "@pankod/refine-chakra-ui";\nimport { useTable, ColumnDef, flexRender } from "@pankod/refine-react-table";\n\nconst PostList: React.FC = () => {\n    const columns = React.useMemo<ColumnDef<IPost>[]>(\n        () => [\n            {\n                id: "id",\n                header: "ID",\n                accessorKey: "id",\n            },\n            {\n                id: "title",\n                header: "Title",\n                accessorKey: "title",\n            },\n            {\n                id: "status",\n                header: "Status",\n                accessorKey: "status",\n            },\n            {\n                id: "createdAt",\n                header: "Created At",\n                accessorKey: "createdAt",\n                cell: function render({ getValue }) {\n                    return (\n                        <DateField value={getValue() as string} format="LLL" />\n                    );\n                },\n            },\n        ],\n        [],\n    );\n\n    const {\n        getHeaderGroups,\n        getRowModel,\n        refineCore: { setCurrent, pageCount, current },\n    } = useTable({\n        columns,\n    });\n\n    return (\n        <List>\n            <TableContainer>\n                <Table variant="simple" whiteSpace="pre-line">\n                    <Thead>\n                        {getHeaderGroups().map((headerGroup) => (\n                            <Tr key={headerGroup.id}>\n                                {headerGroup.headers.map((header) => {\n                                    return (\n                                        <Th key={header.id}>\n                                            {!header.isPlaceholder &&\n                                                flexRender(\n                                                    header.column.columnDef\n                                                        .header,\n                                                    header.getContext(),\n                                                )}\n                                        </Th>\n                                    );\n                                })}\n                            </Tr>\n                        ))}\n                    </Thead>\n                    <Tbody>\n                        {getRowModel().rows.map((row) => {\n                            return (\n                                <Tr key={row.id}>\n                                    {row.getVisibleCells().map((cell) => {\n                                        return (\n                                            <Td key={cell.id}>\n                                                {flexRender(\n                                                    cell.column.columnDef.cell,\n                                                    cell.getContext(),\n                                                )}\n                                            </Td>\n                                        );\n                                    })}\n                                </Tr>\n                            );\n                        })}\n                    </Tbody>\n                </Table>\n            </TableContainer>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            notificationProvider={RefineChakra.notificationProvider()}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("admonition",{title:"Swizzle",type:"info-tip"},(0,o.kt)("p",{parentName:"admonition"},"You can swizzle this component to customize it with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/packages/documentation/cli"},(0,o.kt)("strong",{parentName:"a"},"refine CLI")))),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"title"},(0,o.kt)("inlineCode",{parentName:"h3"},"title")),(0,o.kt)("p",null,"It allows adding a title for the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component. if you don't pass title props, it uses plural form of resource name by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Heading } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List title={<Heading size="lg">Custom Title</Heading>}>\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"resource"},(0,o.kt)("inlineCode",{parentName:"h3"},"resource")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component reads the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," information from the route by default. This default behavior will not work on custom pages. If you want to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component in a custom page, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"resource")," prop."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/advanced-tutorials/custom-pages"},"Refer to the custom pages documentation for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/custom previewHeight=280px",live:!0,url:"http://localhost:3000/custom",previewHeight:"280px"},'setInitialRoutes(["/custom"]);\n\n// visible-block-start\nimport { Refine } from "@pankod/refine-core";\nimport { List, Layout } from "@pankod/refine-chakra-ui";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\nconst CustomPage: React.FC = () => {\n    return (\n        /* highlight-next-line */\n        <List resource="categories">\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={{\n                ...routerProvider,\n                // highlight-start\n                routes: [\n                    {\n                        element: <CustomPage />,\n                        path: "/custom",\n                    },\n                ],\n                // highlight-end\n            }}\n            Layout={Layout}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[{ name: "posts" }]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"cancreate-and-createbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"canCreate")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"createButtonProps")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"canCreate")," allows us to add the create button inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List>")," component. If resource is passed a create component, ",(0,o.kt)("strong",{parentName:"p"},"refine")," adds the create button by default. If you want to customize this button you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"createButtonProps")," property like the code below."),(0,o.kt)("p",null,"Create button redirects to the create page of the resource according to the value it reads from the URL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\nimport { usePermissions } from "@pankod/refine-core";\n\nconst PostList: React.FC = () => {\n    const { data: permissionsData } = usePermissions();\n    return (\n        <List\n            /* highlight-start */\n            canCreate={permissionsData?.includes("admin")}\n            createButtonProps={{ colorScheme: "red", variant: "solid" }}\n            /* highlight-end */\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    const simpleRestDataProvider = dataProvider(\n        "https://api.fake-rest.refine.dev",\n    );\n\n    const customDataProvider = {\n        ...simpleRestDataProvider,\n        deleteOne: async ({ resource, id, variables }) => {\n            return {\n                data: {},\n            };\n        },\n    };\n\n    const authProvider = {\n        login: () => Promise.resolve(),\n        logout: () => Promise.resolve(),\n        checkAuth: () => Promise.resolve(),\n        checkError: () => Promise.resolve(),\n        getPermissions: () => Promise.resolve("admin"),\n        getUserIdentity: () => Promise.resolve(),\n    };\n\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={customDataProvider}\n            authProvider={authProvider}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"breadcrumb"},(0,o.kt)("inlineCode",{parentName:"h3"},"breadcrumb")),(0,o.kt)("p",null,"To customize or disable the breadcrumb, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"breadcrumb")," property. By default it uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"Breadcrumb")," component from ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," package."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/3.xx.xx/api-reference/chakra-ui/components/breadcrumb"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Breadcrumb")," documentation for detailed usage. ","\u2192")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This feature can be managed globally via the ",(0,o.kt)("inlineCode",{parentName:"p"},"<Refine>")," component's ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/components/refine-config/#breadcrumb"},"options"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Box } from "@pankod/refine-chakra-ui";\n\nconst CustomBreadcrumb: React.FC = () => {\n    return (\n        <Box borderColor="blue" borderStyle="dashed" borderWidth="2px" p="2">\n            My Custom Breadcrumb\n        </Box>\n    );\n};\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            breadcrumb={<CustomBreadcrumb />}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"wrapperprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"wrapperProps")),(0,o.kt)("p",null,"If you want to customize the wrapper of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," property. For ",(0,o.kt)("inlineCode",{parentName:"p"},"@pankod/refine-chakra-ui")," wrapper element is ",(0,o.kt)("inlineCode",{parentName:"p"},"<Box>"),"s and ",(0,o.kt)("inlineCode",{parentName:"p"},"wrapperProps")," can get every attribute that ",(0,o.kt)("inlineCode",{parentName:"p"},"<Box>")," can get."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            wrapperProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                p: "2",\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"headerprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerProps")),(0,o.kt)("p",null,"If you want to customize the header of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                p: "2",\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"contentprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"contentProps")),(0,o.kt)("p",null,"If you want to customize the content of the ",(0,o.kt)("inlineCode",{parentName:"p"},"<List/>")," component, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"contentProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            contentProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                padding: 2,\n            }}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"headerbuttons"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtons")),(0,o.kt)("p",null,"You can customize the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtons")," property. It accepts ",(0,o.kt)("inlineCode",{parentName:"p"},"React.ReactNode")," or a render function ",(0,o.kt)("inlineCode",{parentName:"p"},"({ defaultButtons }) => React.ReactNode")," which you can use to keep the existing buttons and add your own."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Button } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtons={({ defaultButtons }) => (\n                <>\n                    {defaultButtons}\n                    <Button colorScheme="red" variant="solid">\n                        Custom Button\n                    </Button>\n                </>\n            )}\n            // highlight-end\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h3",{id:"headerbuttonprops"},(0,o.kt)("inlineCode",{parentName:"h3"},"headerButtonProps")),(0,o.kt)("p",null,"You can customize the wrapper element of the buttons at the header by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"headerButtonProps")," property."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://chakra-ui.com/docs/components/box/usage"},"Refer to the ",(0,o.kt)("inlineCode",{parentName:"a"},"Box")," documentation from Chakra UI for detailed usage. ","\u2192")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live url=http://localhost:3000/posts previewHeight=280px",live:!0,url:"http://localhost:3000/posts",previewHeight:"280px"},'setInitialRoutes(["/posts"]);\nimport { Refine } from "@pankod/refine-core";\nimport routerProvider from "@pankod/refine-react-router-v6";\nimport dataProvider from "@pankod/refine-simple-rest";\n\n// visible-block-start\nimport { List, Button } from "@pankod/refine-chakra-ui";\n\nconst PostList: React.FC = () => {\n    return (\n        <List\n            // highlight-start\n            headerButtonProps={{\n                borderColor: "blue",\n                borderStyle: "dashed",\n                borderWidth: "2px",\n                p: "2",\n            }}\n            // highlight-end\n            headerButtons={\n                <Button colorScheme="red" variant="solid">\n                    Custom Button\n                </Button>\n            }\n        >\n            <p>Rest of your page here</p>\n        </List>\n    );\n};\n// visible-block-end\n\nconst App = () => {\n    return (\n        <Refine\n            routerProvider={routerProvider}\n            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n            resources={[\n                {\n                    name: "posts",\n                    list: PostList,\n                },\n            ]}\n        />\n    );\n};\nrender(\n    <Wrapper>\n        <App />\n    </Wrapper>,\n);\n')),(0,o.kt)("h2",{id:"api-reference"},"API Reference"),(0,o.kt)("h3",{id:"props"},"Props"),(0,o.kt)(l,{module:"@pankod/refine-chakra-ui/List","title-default":"`<Title order={3}>{resource.name}</Title>`",mdxType:"PropsTable"}))}m.isMDXComponent=!0}}]);