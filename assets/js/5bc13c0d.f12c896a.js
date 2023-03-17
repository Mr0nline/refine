"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[93807],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,m=u["".concat(d,".").concat(h)]||u[h]||l[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10809:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}},i=void 0,p={unversionedId:"tutorial/adding-crud-pages/headless/add-create-page",id:"tutorial/adding-crud-pages/headless/add-create-page",title:"4. Adding Create Page",description:"Create page is the page where you can create the record. In this tutorial, we will create the create page for the products resource.",source:"@site/docs/tutorial/4-adding-crud-pages/headless/add-create-page.md",sourceDirName:"tutorial/4-adding-crud-pages/headless",slug:"/tutorial/adding-crud-pages/headless/add-create-page",permalink:"/docs/tutorial/adding-crud-pages/headless/add-create-page",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/tutorial/4-adding-crud-pages/headless/add-create-page.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1679070598,formattedLastUpdatedAt:"Mar 17, 2023",frontMatter:{id:"add-create-page",title:"4. Adding Create Page",tutorial:{order:0,prev:"tutorial/adding-crud-pages/{preferredUI}/add-show-page",next:"tutorial/adding-crud-pages/{preferredUI}/add-delete-feature"}}},d={},s=[{value:"Creating Create Page",id:"creating-create-page",level:2},{value:"Understanding the Create Component",id:"understanding-the-create-component",level:2},{value:"Handling Relationships",id:"handling-relationships",level:3},{value:"Adding the Create Page to the App",id:"adding-the-create-page-to-the-app",level:2}],c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},l=c("Checklist"),u=c("ChecklistItem"),h={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create page is the page where you can create the record. In this tutorial, we will create the create page for the ",(0,a.kt)("inlineCode",{parentName:"p"},"products")," resource."),(0,a.kt)("h2",{id:"creating-create-page"},"Creating Create Page"),(0,a.kt)("p",null,"First, let's create our file under the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/pages/products")," folder. We will name it ",(0,a.kt)("inlineCode",{parentName:"p"},"create.tsx"),". Then, we will copy the create page code generated by Inferencer and paste it into the file."),(0,a.kt)("p",null,"To copy the code and paste it into the file, follow the steps below:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("a",{href:"http://localhost:3000/products",rel:"noopener noreferrer nofollow"},"localhost:3000/products")," in your browser.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'To open the create page, click the "Create" button in the top right corner of the table.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'On the create page, click on the "Show Code" button in the bottom right corner of the page.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},'You can see the create page code generated by Inferencer. Click on the "Copy" button to copy the code.')),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Paste the code into the you created, ",(0,a.kt)("inlineCode",{parentName:"p"},"create.tsx")," file."))),(0,a.kt)("p",null,"You can see the create page code generated by Inferencer below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"live previewOnly previewHeight=600px url=http://localhost:3000/products/create",live:!0,previewOnly:!0,previewHeight:"600px",url:"http://localhost:3000/products/create"},'setInitialRoutes(["/products/create"]);\n\nimport { Refine } from "@refinedev/core";\nimport { HeadlessInferencer } from "@refinedev/inferencer/headless";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        index\n                        element={<NavigateToResource resource="products" />}\n                    />\n\n                    <Route path="/products">\n                        <Route index element={<HeadlessInferencer />} />\n\n                        <Route\n                            path="show/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route\n                            path="edit/:id"\n                            element={<HeadlessInferencer />}\n                        />\n                        <Route path="create" element={<HeadlessInferencer />} />\n                    </Route>\n\n                    <Route path="*" element={<div>Error!</div>} />\n                </Routes>\n\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\n\nrender(<App />);\n')),(0,a.kt)("p",null,"Instead of coding the create page component from scratch, Inferencer've created the required code base on API response, so that we can customize."),(0,a.kt)("h2",{id:"understanding-the-create-component"},"Understanding the Create Component"),(0,a.kt)("p",null,"We will go through the create page hooks one by one."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook, imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/react-hook-form")," package, has been developed by using the ",(0,a.kt)("strong",{parentName:"p"},"React Hook Form")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook imported from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package."),(0,a.kt)("p",{parentName:"li"},"It provides all the features of the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,a.kt)("inlineCode",{parentName:"p"},"@refinedev/core")," package as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," hook from ",(0,a.kt)("strong",{parentName:"p"},"React Hook Form"),"."),(0,a.kt)("p",{parentName:"li"},"It also provides the ",(0,a.kt)("inlineCode",{parentName:"p"},"saveButtonProps")," prop that we can pass to the submit button of the form."),(0,a.kt)("p",{parentName:"li"},"When you use ",(0,a.kt)("inlineCode",{parentName:"p"},"useForm")," in the create page, it sends the form data to ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"create")," method when the form is submitted."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/packages/documentation/react-hook-form/useForm/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"@refinedev/react-hook-form")," ",(0,a.kt)("inlineCode",{parentName:"a"},"useForm")," documentation for more information ","\u2192")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://react-hook-form.com/"},"Refer to the ",(0,a.kt)("strong",{parentName:"a"},"React Hook Form")," documentation for more information ","\u2192"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"useNavigation")," is a ",(0,a.kt)("strong",{parentName:"p"},"refine")," hook that is used to navigate between pages. In this case, we are using it to navigate to the ",(0,a.kt)("inlineCode",{parentName:"p"},"list"),' page when user clicks the "Products List" button.'),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/navigation/useNavigation/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useNavigation")," documentation for more information ","\u2192")))),(0,a.kt)("h3",{id:"handling-relationships"},"Handling Relationships"),(0,a.kt)("p",null,"In the create page, we may need to select a record from another resource. For example, we may need to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource to assign the product to the category. In this case, we can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook provided by ",(0,a.kt)("strong",{parentName:"p"},"refine"),". This hook fetches the data by passing the resource name to the ",(0,a.kt)("inlineCode",{parentName:"p"},"dataProvider"),"'s ",(0,a.kt)("inlineCode",{parentName:"p"},"getList")," method. Then, it returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," to be used in the ",(0,a.kt)("inlineCode",{parentName:"p"},"<select/>")," component."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/hooks/useSelect/"},"Refer to the ",(0,a.kt)("inlineCode",{parentName:"a"},"useSelect")," documentation for more information ","\u2192")),(0,a.kt)("p",null,"In the auto-generated create page code, Inferencer used the ",(0,a.kt)("inlineCode",{parentName:"p"},"useSelect")," hook to select a category from the ",(0,a.kt)("inlineCode",{parentName:"p"},"categories")," resource like below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const { options: categoryOptions } = useSelect({\n    resource: "categories",\n});\n')),(0,a.kt)("h2",{id:"adding-the-create-page-to-the-app"},"Adding the Create Page to the App"),(0,a.kt)("p",null,"Now that we have created the create page, we need to add it to the ",(0,a.kt)("inlineCode",{parentName:"p"},"App.tsx")," file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open ",(0,a.kt)("inlineCode",{parentName:"p"},"src/App.tsx")," file on your editor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import the created ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"HeadlessInferencer")," component with the ",(0,a.kt)("inlineCode",{parentName:"p"},"ProductCreate")," component."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/App.tsx"',title:'"src/App.tsx"'},'import { Refine } from "@refinedev/core";\nimport routerBindings, {\n    NavigateToResource,\n    UnsavedChangesNotifier,\n} from "@refinedev/react-router-v6";\nimport dataProvider from "@refinedev/simple-rest";\n\nimport { BrowserRouter, Route, Routes } from "react-router-dom";\n\nimport { ProductEdit } from "pages/products/edit";\nimport { ProductList } from "pages/products/list";\nimport { ProductShow } from "pages/products/show";\n// highlight-next-line\nimport { ProductCreate } from "pages/products/create";\n\nconst App = () => {\n    return (\n        <BrowserRouter>\n            <Refine\n                routerProvider={routerBindings}\n                dataProvider={dataProvider("https://api.fake-rest.refine.dev")}\n                resources={[\n                    {\n                        name: "products",\n                        list: "/products",\n                        show: "/products/show/:id",\n                        // highlight-next-line\n                        create: "/products/create",\n                        edit: "/products/edit/:id",\n                    },\n                ]}\n                options={{\n                    syncWithLocation: true,\n                    warnWhenUnsavedChanges: true,\n                }}\n            >\n                <Routes>\n                    <Route\n                        index\n                        element={<NavigateToResource resource="products" />}\n                    />\n\n                    <Route path="products">\n                        <Route index element={<ProductList />} />\n                        <Route path="show/:id" element={<ProductShow />} />\n                        <Route path="edit/:id" element={<ProductEdit />} />\n                        {/* highlight-next-line */}\n                        <Route path="create" element={<ProductCreate />} />\n                    </Route>\n\n                    <Route path="*" element={<div>Error!</div>} />\n                </Routes>\n                <UnsavedChangesNotifier />\n            </Refine>\n        </BrowserRouter>\n    );\n};\nexport default App;\n')),(0,a.kt)("p",null,"Now, we can see the create page in the browser at ",(0,a.kt)("a",{href:"http://localhost:3000/products/create",rel:"noopener noreferrer nofollow"},"localhost:3000/products/create")),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l,{mdxType:"Checklist"},(0,a.kt)(u,{id:"add-create-page-headless",mdxType:"ChecklistItem"},"I added the create page to the app."),(0,a.kt)(u,{id:"add-create-page-headless-2",mdxType:"ChecklistItem"},"I understood the create page components and hooks."),(0,a.kt)(u,{id:"add-create-page-headless-3",mdxType:"ChecklistItem"},"I understood the relationship handling.")))}m.isMDXComponent=!0}}]);