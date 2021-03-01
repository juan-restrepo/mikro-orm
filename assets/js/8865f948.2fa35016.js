(window.webpackJsonp=window.webpackJsonp||[]).push([[508],{1052:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),b=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=b(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},d=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=b(t),d=n,m=l["".concat(a,".").concat(d)]||l[d]||u[d]||c;return t?o.a.createElement(m,i(i({ref:r},p),{},{components:t})):o.a.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<c;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},581:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return b}));var n=t(3),o=t(8),c=(t(0),t(1052)),a={id:"core.queryresult",title:"Interface: QueryResult",sidebar_label:"QueryResult",hide_title:!0},i={unversionedId:"api/interfaces/core.queryresult",id:"version-4.4/api/interfaces/core.queryresult",isDocsHomePage:!1,title:"Interface: QueryResult",description:"Interface: QueryResult",source:"@site/versioned_docs/version-4.4/api/interfaces/core.queryresult.md",slug:"/api/interfaces/core.queryresult",permalink:"/docs/api/interfaces/core.queryresult",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/core.queryresult.md",version:"4.4",lastUpdatedBy:"Renovate Bot",lastUpdatedAt:1614569911,sidebar_label:"QueryResult",sidebar:"version-4.4/API",previous:{title:"Interface: QueryOrderMap",permalink:"/docs/api/interfaces/core.queryordermap"},next:{title:"Interface: ReferenceOptions<T, O>",permalink:"/docs/api/interfaces/core.referenceoptions"}},s=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"affectedRows",id:"affectedrows",children:[]},{value:"insertId",id:"insertid",children:[]},{value:"row",id:"row",children:[]},{value:"rows",id:"rows",children:[]}]}],p={toc:s};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"interface-queryresult"},"Interface: QueryResult"),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core"},"core"),".QueryResult"),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"QueryResult"))),Object(c.b)("h2",{id:"properties"},"Properties"),Object(c.b)("h3",{id:"affectedrows"},"affectedRows"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"affectedRows"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/connections/Connection.ts#L127"},"packages/core/src/connections/Connection.ts:127")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"insertid"},"insertId"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"insertId"),": ",Object(c.b)("em",{parentName:"p"},"number")),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/connections/Connection.ts#L128"},"packages/core/src/connections/Connection.ts:128")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"row"},"row"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"row"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/connections/Connection.ts#L129"},"packages/core/src/connections/Connection.ts:129")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"rows"},"rows"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(c.b)("strong",{parentName:"p"},"rows"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(c.b)("a",{parentName:"p",href:"/docs/api/modules/core#dictionary"},Object(c.b)("em",{parentName:"a"},"Dictionary")),"<",Object(c.b)("em",{parentName:"p"},"any"),">","[]"),Object(c.b)("p",null,"Defined in: ",Object(c.b)("a",{parentName:"p",href:"https://github.com/mikro-orm/mikro-orm/blob/969d4229bd/packages/core/src/connections/Connection.ts#L130"},"packages/core/src/connections/Connection.ts:130")))}b.isMDXComponent=!0}}]);