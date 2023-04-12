(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[89261],{71708:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(87462),a=r(67294);const i={blue:"text-white text-center bg-gradient-to-l from-[#1890FF] to-[#47EBF5]  border-0",white:"text-[#1890FF] bg-white rounded-[4px] cursor-pointer border border-solid border-[#EDEDEF]"},l=e=>{let{className:t,variant:r="blue",children:l,...o}=e;return a.createElement("button",(0,n.Z)({className:`shadow-startTiles appearance-none flex items-center justify-center no-underline font-bold font-montserrat text-sm h-8 w-44 rounded-[4px] cursor-pointer ${i[r]} ${t}`},o),l)}},5064:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(87462),a=r(67294);const i={blue:"text-white text-center bg-gradient-to-l from-[#1890FF] to-[#47EBF5]  border-0",white:"text-[#1890FF] bg-white rounded-[4px] cursor-pointer border border-solid border-[#EDEDEF]"},l=e=>{let{className:t,href:r,variant:l="blue",children:o,...s}=e;return a.createElement("a",(0,n.Z)({href:r,target:"_blank",rel:"noopener noreferrer",className:`shadow-startTiles appearance-none flex items-center justify-center no-underline font-bold font-montserrat text-sm h-8 w-44 rounded-[4px] cursor-pointer ${i[l]} ${t}`},s),o)}},94417:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>x});var n=r(35742),a=r(37085),i=r(86010),l=r(67294),o=r(59945),s=r(71708),c=r(16324),m=r(97903),f=r(5064);const d=[{date:"10th April 2023",title:"Pilot & refine architecture",description:'Overview about <strong className="font-bold">refine</strong> and <strong className="font-bold">Strapi</strong> the app we built during the article series.',link:"https://refine.dev/blog/refine-react-invoice-generator-1/"},{date:"11th April 2023",title:"Setting Up the Invoicer App",description:'We start with setting up the Invoicer app using <strong className="font-bold">refine.new</strong> by choosing <strong className="font-bold">Ant Design</strong> as a UI framework and <strong className="font-bold">Strapi</strong> as a dataprovider',link:"https://refine.dev/blog/refine-react-invoice-generator-2/"},{date:"12th April 2023",title:"Adding CRUD Actions & Views",description:'We leverage the Strapi dataProvider methods to implement CRUD operations for companies, clients and contacts resources. and user authentication using <strong className="font-bold">Strapi</strong>.',link:"https://refine.dev/blog/refine-invoicer-3"},{date:"13th April 2023",title:"Creating Mission and Invoices Pages",description:"We'll implement CRUD actions for companies, clients and contacts for our PDF Invoice Generator app."},{date:"14th April 2023",title:"Adding PDF Renderer",description:"We come past the refine features and add a pdf renderer to display our invoices in a pdf screen."}],u=[{title:"join our",label:"discord server",icon:l.createElement(m.D7,{color:"#ffffff",width:"36",height:"36"}),link:"https://discord.gg/refine",color:"#5865F2"},{title:"visit our",label:"github repo",icon:l.createElement(m.ET,{color:"#ffffff",width:"36",height:"36"}),link:"https://github.com/refinedev/refine",color:"#242436"},{title:"follow us",label:"on twitter",icon:l.createElement(m.Zm,{color:"#ffffff",width:"36",height:"36"}),link:"https://twitter.com/refine_dev",color:"#00AAEC"},{title:"follow us",label:"on reddit",icon:l.createElement(m.MP,{color:"#ffffff",width:"36",height:"36"}),link:"https://reddit.com/r/refine",color:"#FF4500"}],p=["1635625661778763776","1640741763408076803","1625488050863353856","1615260152822628352","1621513516036526080","1621932348009861132","1597878371760979970","1616390215068688384","1617841995233529861","1620724625536880641","1618180208414322689","1624015381403955200"],x=()=>{const e=(0,l.useRef)(null),t=(0,l.useMemo)((()=>d.findIndex((e=>!e.link))-1),[]);return l.createElement(a.Z,null,l.createElement(n.Z,{title:"Week of Refine | refine"},l.createElement("html",{"data-page":"week-of-refine","data-customized":"true"})),l.createElement("div",{className:"relative px-2 pb-24 pt-0 md:px-4 md:pt-12 lg:px-0 lg:pb-48 lg:pt-24"},l.createElement("div",{className:"font-montserrat flex flex-col"},l.createElement("div",{className:"mx-auto flex h-auto max-w-[904px] flex-col-reverse md:flex-row lg:h-[432px]"},l.createElement("div",{className:"flex flex-col items-center justify-center md:items-start"},l.createElement("div",{className:"flex items-center gap-2"},l.createElement("img",{src:"/week-of-refine/refine-week-calendar.png",alt:"Refine week calendar logo",className:"block h-[48px] w-[48px]"}),l.createElement("img",{src:"/week-of-refine/refine-week-ft-strapi.png",alt:"Refine week ft. supabase logo",className:"block h-[46px]"})),l.createElement("h2",{className:"font-montserrat mb-0 mt-8 max-w-[384px] text-center text-xl font-medium text-[#242436] md:text-start lg:text-[28px] lg:leading-9"},"Stay tuned all week and learn the basics of creating a React PDF Invoice Generator app via"," ",l.createElement("strong",{className:"font-bold"},"refine")," &"," ",l.createElement("strong",{className:"font-bold"},"Strapi")," in a week."),l.createElement("div",{className:"mt-4 flex flex-col gap-2 sm:flex-row"},l.createElement(s.Z,{onClick:()=>{e.current.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}},"Join Event"),l.createElement(f.Z,{href:"https://twitter.com/intent/tweet?text=%23refineweek",variant:"white"},l.createElement("div",{className:"mr-3 h-[16px] w-[16px]"},l.createElement(m.Zm,{color:"#00AAEC",width:"16",height:"16"})),l.createElement("span",{className:"font-medium"},"#",l.createElement("strong",{className:"font-bold"},"refine"),"week")))),l.createElement("div",{className:"min-h-[318px] flex-1 lg:translate-x-[80px]"},l.createElement("img",{src:"/week-of-refine/refine-week-invoicer-logo.png",alt:"Refine invoicer app logo",className:"block"}))),l.createElement("div",{className:"mt-16 md:mt-8"},l.createElement("div",{ref:e,className:"flex items-center justify-center"},l.createElement(c.EE,{className:"mr-2"}),l.createElement("h2",{className:"font-montserrat mb-0 text-3xl font-extrabold tracking-wide text-[#242436]"},"TIMELINE")),l.createElement("div",{className:"mt-8 flex flex-col items-center gap-[2px] pr-1 sm:pr-0"},d.map(((e,r)=>{const{title:n,description:a,date:o,link:s}=e,c=r!==d.length-1,m=`DAY ${r+1}:`,u=!!s,p=t===r&&u;return l.createElement("div",{key:r,className:"flex h-[285px] max-w-[384px]"},l.createElement("div",{className:"flex flex-col items-center"},l.createElement("div",{className:(0,i.Z)("mb-[6px] mt-[6px] h-[10px] w-[10px] rounded-full border-[2px] border-solid border-[#1890FF]",u?"border-[#1890FF]":"border-[#C1C1C6]")}),c&&l.createElement("div",{className:(0,i.Z)(" h-full w-[2px] rounded-sm",u?"bg-[#1890FF]":"bg-[#C1C1C6]")})),l.createElement("div",{className:"ml-4"},l.createElement("div",{className:"flex h-[22px] items-center"},l.createElement("div",{className:"text-xs font-medium text-[#96969E]"},o),p&&l.createElement("div",{className:"ml-2 flex h-[22px] w-[48px] items-center justify-center rounded-[4px] border border-solid border-[#C2E5A7] bg-[#67BE23] text-xs text-white"},"NEW")),l.createElement("div",{className:(0,i.Z)("text-xl",u?"text-[#1890FF]":"text-[#C1C1C6]")},l.createElement("span",{className:"font-medium"},m," "),l.createElement("strong",{className:"font-bold"},n)),l.createElement("div",{className:(0,i.Z)("text-xs font-medium",u?"text-[#242436]":"text-[#C1C1C6]"),dangerouslySetInnerHTML:{__html:a}}),s&&l.createElement(f.Z,{href:s,className:"mt-4"},"Read Article")))})))),l.createElement("div",{className:"mx-auto mt-24 flex max-w-[1024px] flex-col items-center justify-center"},l.createElement("div",{className:"flex items-center justify-center"},l.createElement("div",{className:"mr-4 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#00AAEC]"},l.createElement(m.Zm,{color:"#ffffff",width:"12",height:"12"})),l.createElement("h2",{className:"font-montserrat mb-0 text-3xl tracking-wide"},l.createElement("span",{className:"font-extrabold text-[#242436]"},"JOIN")," ",l.createElement("span",{className:"font-bold text-[#00AAEC]"},"#refineweek"))),l.createElement("div",{className:"mx-6 mt-8 grid min-w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"},p.map((e=>l.createElement("div",{key:e,className:"w-full"},l.createElement(o.tP,{tweetId:e}))))))),l.createElement("div",{className:"mx-auto mt-16 flex max-w-[800px] flex-col items-center justify-center"},l.createElement("h2",{className:"font-montserrat mb-0 text-center text-3xl font-extrabold tracking-wide text-[#242436]"},"ADDITIONAL SOURCES"),l.createElement("div",{className:"mt-8 flex flex-wrap items-center justify-center gap-4"},u.map(((e,t)=>{const{title:r,label:n,icon:a,color:i,link:o}=e;return l.createElement("a",{key:t,href:o,target:"_blank",rel:"noopener noreferrer",style:{backgroundColor:i},className:"flex w-[176px] items-center justify-between rounded-md px-3 py-4"},l.createElement("div",{className:"font-montserrat mr-2 text-center text-xs uppercase text-white"},l.createElement("div",{className:"font-medium"},r),l.createElement("div",{className:"whitespace-nowrap font-bold"},n)),a)}))))))}},25671:function(e,t){var r,n,a;n=[],void 0===(a="function"==typeof(r=function(){var e=function(){},t={},r={},n={};function a(e,t){e=e.push?e:[e];var a,i,l,o=[],s=e.length,c=s;for(a=function(e,r){r.length&&o.push(e),--c||t(o)};s--;)i=e[s],(l=r[i])?a(i,l):(n[i]=n[i]||[]).push(a)}function i(e,t){if(e){var a=n[e];if(r[e]=t,a)for(;a.length;)a[0](e,t),a.splice(0,1)}}function l(t,r){t.call&&(t={success:t}),r.length?(t.error||e)(r):(t.success||e)(t)}function o(t,r,n,a){var i,l,s=document,c=n.async,m=(n.numRetries||0)+1,f=n.before||e,d=t.replace(/[\?|#].*$/,""),u=t.replace(/^(css|img)!/,"");a=a||0,/(^css!|\.css$)/.test(d)?((l=s.createElement("link")).rel="stylesheet",l.href=u,(i="hideFocus"in l)&&l.relList&&(i=0,l.rel="preload",l.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d)?(l=s.createElement("img")).src=u:((l=s.createElement("script")).src=t,l.async=void 0===c||c),l.onload=l.onerror=l.onbeforeload=function(e){var s=e.type[0];if(i)try{l.sheet.cssText.length||(s="e")}catch(c){18!=c.code&&(s="e")}if("e"==s){if((a+=1)<m)return o(t,r,n,a)}else if("preload"==l.rel&&"style"==l.as)return l.rel="stylesheet";r(t,s,e.defaultPrevented)},!1!==f(t,l)&&s.head.appendChild(l)}function s(e,t,r){var n,a,i=(e=e.push?e:[e]).length,l=i,s=[];for(n=function(e,r,n){if("e"==r&&s.push(e),"b"==r){if(!n)return;s.push(e)}--i||t(s)},a=0;a<l;a++)o(e[a],n,r)}function c(e,r,n){var a,o;if(r&&r.trim&&(a=r),o=(a?n:r)||{},a){if(a in t)throw"LoadJS";t[a]=!0}function c(t,r){s(e,(function(e){l(o,e),t&&l({success:t,error:r},e),i(a,e)}),o)}if(o.returnPromise)return new Promise(c);c()}return c.ready=function(e,t){return a(e,(function(e){l(t,e)})),c},c.done=function(e){i(e,[])},c.reset=function(){t={},r={},n={}},c.isDefined=function(e){return e in t},c})?r.apply(t,n):r)||(e.exports=a)},59945:(e,t,r)=>{"use strict";r.d(t,{tP:()=>x});var n=r(67294),a=r(25671),i=r.n(a),l="twttr",o=l,s=!("undefined"==typeof window||!window.document||!window.document.createElement);function c(){return new Promise((function(e,t){var r=function(){return t(new Error("Could not load remote twitter widgets js"))};i().isDefined(o)||i()("https://platform.twitter.com/widgets.js",o),i().ready(o,{success:function(){var t=window.twttr;t&&t.widgets||r(),e(t.widgets)},error:r})}))}function m(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function f(e){var t=(0,n.useRef)();return function(e,t){if(m(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var a=0;a<r.length;a++)if(!Object.prototype.hasOwnProperty.call(t,r[a])||!m(e[r[a]],t[r[a]]))return!1;return!0}(e,t.current)||(t.current=e),t.current}function d(e){return"object"==typeof e?Object.assign({},e):e}var u="twdiv";function p(e,t,r,a){var i=(0,n.useState)(null),l=i[0],o=i[1],m=(0,n.useRef)(null);if(!s)return{ref:m,error:l};var p=[e,f(t),f(r)];return(0,n.useEffect)((function(){o(null);var n,i,l=!1;if(m.current){if(n=m.current,i=u,n&&n.querySelectorAll("*").forEach((function(e){e.hasAttribute(i)&&e.remove()})),!m||!m.current)return;var s=document.createElement("div");s.setAttribute(u,"yes"),m.current.appendChild(s),c().then((function(n){return n[e](d(t),s,d(r))})).then((function(e){if(!e&&!l)throw new Error("Twitter could not create widget. If it is a Timeline or Tweet, ensure the screenName/tweetId exists.");m&&m.current&&(l?s&&s.remove():a&&a())})).catch((function(e){console.error(e),o(e)}))}return function(){l=!0}}),p),{ref:m,error:l}}var x=function(e){var t=e.tweetId,r=e.options,a=e.onLoad,i=e.renderError,l=p("createTweet",t,r,a),o=l.ref,s=l.error;return n.createElement("div",{ref:o},s&&i&&i(s))}}}]);