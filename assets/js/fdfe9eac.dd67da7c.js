"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15119],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(f,d(d({ref:t},s),{},{components:n})):a.createElement(f,d({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,d[1]=i;for(var p=2;p<o;p++)d[p]=n[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},76513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}},d=void 0,i={unversionedId:"tutorial/adding-crud-pages/headless/add-delete-feature",id:"tutorial/adding-crud-pages/headless/add-delete-feature",title:"5. Adding Delete Feature",description:"Let's start by adding the delete feature to the list page by adding a delete button to the table. To do this, we will use the useDelete hook.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-delete-feature",permalink:"/docs/tutorial/adding-crud-pages/headless/add-delete-feature",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/add-delete-feature.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679685091,formattedLastUpdatedAt:"Mar 24, 2023",frontMatter:{id:"add-delete-feature",title:"5. Adding Delete Feature",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-create-page",next:"tutorial/adding-crud-pages/{preferredUI}/adding-sort-and-filters"}}},l={},p=[],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)},u=s("Checklist"),c=s("ChecklistItem"),m={toc:p};function f(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Let's start by adding the delete feature to the list page by adding a delete button to the table. To do this, we will use the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," is a ",(0,r.kt)("strong",{parentName:"p"},"refine")," hook that is used to delete a record. It returns mutation functions that can be used to delete a record. When the mutation function is called, the parameters of the function are passed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"delete")," method of the data provider."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information ","\u2192")),(0,r.kt)("p",null,"To add a delete feature to the blog posts table, you can follow the steps below:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/pages/blog-posts/list.tsx")," file on your editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Import the ",(0,r.kt)("inlineCode",{parentName:"p"},"useOne")," hook from ",(0,r.kt)("inlineCode",{parentName:"p"},"@refinedev/core"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useOne } from "@refinedev/core";\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Call the ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook in the ",(0,r.kt)("inlineCode",{parentName:"p"},"BlogPostList")," component:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const BlogPostList: React.FC = () => {\n    const { mutate: deleteBlogPost } = useDelete();\n};\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"deleteBlogPost")," mutation takes ",(0,r.kt)("inlineCode",{parentName:"p"},"id"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"resource")," etc. You can check the parameters of the mutation function in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/#properties"},"documentation"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Add the ",(0,r.kt)("inlineCode",{parentName:"p"},"<button/>")," component to the ",(0,r.kt)("inlineCode",{parentName:"p"},"actions")," column of the table as shown below:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'{\n            id: "actions",\n            accessorKey: "id",\n            header: "Actions",\n            cell: function render({ getValue }) {\n                return (\n                    <div\n                        style={{\n                            display: "flex",\n                            flexDirection: "row",\n                            flexWrap: "wrap",\n                            gap: "4px",\n                        }}\n                    >\n                        <button\n                            onClick={() => {\n                                show("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Show\n                        </button>\n                        <button\n                            onClick={() => {\n                                edit("blog_posts", getValue() as string);\n                            }}\n                        >\n                            Edit\n                        </button>\n                        //highlight-start\n                        <button\n                            onClick={() => {\n                                deleteBlogPost({\n                                    resource: "blog_posts",\n                                    id: "1",\n                                });\n                            }}\n                        >\n                            Delete\n                        </button>\n                        //highlight-end\n                    </div>\n                );\n            },\n        },\n')))),(0,r.kt)("p",null,"Now, you can try to delete a record from the list page. Just click on the delete button of the record you want to delete."),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"useDelete")," hook provided by ",(0,r.kt)("strong",{parentName:"p"},"refine")," to delete a record."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/data/useDelete/"},"Refer to the ",(0,r.kt)("inlineCode",{parentName:"a"},"useDelete")," documentation for more information information ","\u2192"))),(0,r.kt)("br",null),(0,r.kt)(u,{mdxType:"Checklist"},(0,r.kt)(c,{id:"add-delete-feature-headless",mdxType:"ChecklistItem"},"I added the delete feature to the list page."),(0,r.kt)(c,{id:"add-delete-feature-headless-2",mdxType:"ChecklistItem"},"I enabled the delete feature on the show page and edit page.")))}f.isMDXComponent=!0}}]);