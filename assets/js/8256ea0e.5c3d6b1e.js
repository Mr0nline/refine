"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[11343],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),p=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),m=n,h=c["".concat(d,".").concat(m)]||c[m]||l[m]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},53572:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const o={id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useUpdatePassword/index.ts"},s=void 0,i={unversionedId:"api-reference/core/hooks/auth/useUpdatePassword",id:"api-reference/core/hooks/auth/useUpdatePassword",title:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/api-reference/core/hooks/auth/useUpdatePassword.md",sourceDirName:"api-reference/core/hooks/auth",slug:"/api-reference/core/hooks/auth/useUpdatePassword",permalink:"/docs/api-reference/core/hooks/auth/useUpdatePassword",draft:!1,editUrl:"https://github.com/refinedev/refine/tree/master/documentation/docs/api-reference/core/hooks/auth/useUpdatePassword.md",tags:[],version:"current",lastUpdatedBy:"github-actions[bot]",lastUpdatedAt:1681387613,formattedLastUpdatedAt:"Apr 13, 2023",frontMatter:{id:"useUpdatePassword",title:"useUpdatePassword",siderbar_label:"useUpdatePassword",description:"useUpdatePassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"/packages/core/src/hooks/auth/useUpdatePassword/index.ts"},sidebar:"someSidebar",previous:{title:"useForgotPassword",permalink:"/docs/api-reference/core/hooks/auth/useForgotPassword"},next:{title:"useLog",permalink:"/docs/api-reference/core/hooks/audit-log/useLog"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Redirection after updatePassword",id:"redirection-after-updatepassword",level:2},{value:"Error handling",id:"error-handling",level:2}],u={toc:p};function l(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/api-reference/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,n.kt)("p",null,"Data that is resolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result with the following type:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"type AuthActionResponse = {\n    success: boolean;\n    redirectTo?: string;\n    error?: Error;\n    [key: string]: unknown;\n};\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"success"),": A boolean indicating whether the operation was successful. If ",(0,n.kt)("inlineCode",{parentName:"li"},"success")," is false, a notification will be shown.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"When ",(0,n.kt)("inlineCode",{parentName:"li"},"error")," is provided, the notification will contain the error message and name. Otherwise, a generic error message will be shown with the following values ",(0,n.kt)("inlineCode",{parentName:"li"},'{ name: "Update Password Error", message: "Error while resetting password" }'),"."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirectTo"),": If has a value, the app will be redirected to the given URL."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"error"),": If has a value, a notification will be shown with the error message and name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[key: string]"),": Any additional data you wish to include in the response, keyed by a string identifier.")),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Normally refine provides a default update password page. If you prefer to use this default update password page, there is no need to handle update password flow manually.",(0,n.kt)("br",{parentName:"p"}),"\n","If we want to build a custom update password page instead of the default one that comes with ",(0,n.kt)("strong",{parentName:"p"},"refine"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," can be used like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customupdatePasswordPage"',title:'"pages/customupdatePasswordPage"'},'import { useUpdatePassword } from "@refinedev/core";\n\ntype updatePasswordVariables = {\n    password: string;\n};\n\nexport const updatePasswordPage = () => {\n    const { mutate: updatePassword } =\n        useUpdatePassword<updatePasswordVariables>();\n\n    const onSubmit = (values: updatePasswordVariables) => {\n        updatePassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Password</label>\n            <input name="password" value="refine" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," can accept any kind of object for values since the ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,n.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: updatePassword } = useUpdatePassword<{ newPassword: string }>();\n"))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," gives you query strings for the ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),". If you have a logic that sends a password regeneration email to the email address while resetting the password and proceeds through the access token. You can use ",(0,n.kt)("inlineCode",{parentName:"p"},"queryStrings")," variable ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),". For example, your regeneration link is ",(0,n.kt)("inlineCode",{parentName:"p"},"YOUR_DOMAIN/update-password?token=123"),". You can access the token from the parameters of the URL."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    updatePassword: (params) => {\n        // you can access query strings from params.queryStrings\n        console.log(params.token);\n        if (param.token === "123") {\n            // your logic to update the password\n        }\n        // ---\n    },\n};\n'))),(0,n.kt)("h2",{id:"redirection-after-updatepassword"},"Redirection after updatePassword"),(0,n.kt)("p",null,"A custom URL can be given to mutate the function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook if you want to redirect yourself to a certain URL."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@refinedev/core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword({ redirectPath: "/custom-url" });\n')),(0,n.kt)("p",null,"Then, you can handle this URL in your ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { AuthBindings } from "@refinedev/core";\n\nconst authProvider: AuthBindings = {\n    // ---\n    updatePassword: async ({ redirectPath }) => {\n        // ---\n        return {\n            success: true,\n            redirectTo: redirectPath,\n        };\n    },\n};\n')),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"If the promise returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"updatePassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,n.kt)("h2",{id:"error-handling"},"Error handling"),(0,n.kt)("p",null,"Since the methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise, you can handle errors by using the ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," value in the response."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useUpdatePassword } from "@refinedev/core";\n\nconst { mutate: updatePassword } = useUpdatePassword();\n\nupdatePassword(\n    {\n        newPassword: "refine",\n    },\n    {\n        onSuccess: (data) => {\n            if (!data.success) {\n                // handle error\n            }\n\n            // handle success\n        },\n    },\n);\n')),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"onError")," callback of the ",(0,n.kt)("inlineCode",{parentName:"p"},"useUpdatePassword")," hook will not be called if ",(0,n.kt)("inlineCode",{parentName:"p"},"success")," is ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," because the callback is triggered only when the promise is rejected. However, the methods of ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," always return a resolved promise.")))}l.isMDXComponent=!0}}]);