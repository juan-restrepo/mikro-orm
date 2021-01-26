(window.webpackJsonp=window.webpackJsonp||[]).push([[768],{1253:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var b=t(0),r=t.n(b);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);n&&(b=b.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,b)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,b,r=function(e,n){if(null==e)return{};var t,b,r={},i=Object.keys(e);for(b=0;b<i.length;b++)t=i[b],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(b=0;b<i.length;b++)t=i[b],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=r.a.createContext({}),o=function(e){var n=r.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=o(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,b=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=o(t),m=b,u=d["".concat(a,".").concat(m)]||d[m]||s[m]||i;return t?r.a.createElement(u,c(c({ref:n},l),{},{components:t})):r.a.createElement(u,c({ref:n},l))}));function u(e,n){var t=arguments,b=n&&n.mdxType;if("string"==typeof e||b){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:b,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},837:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return p})),t.d(n,"default",(function(){return o}));var b=t(3),r=t(7),i=(t(0),t(1253)),a={id:"knex.knex.mysqlconnectionconfig",title:"Interface: MySqlConnectionConfig",sidebar_label:"MySqlConnectionConfig",hide_title:!0},c={unversionedId:"api/interfaces/knex.knex.mysqlconnectionconfig",id:"version-4.4/api/interfaces/knex.knex.mysqlconnectionconfig",isDocsHomePage:!1,title:"Interface: MySqlConnectionConfig",description:"Interface: MySqlConnectionConfig",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.mysqlconnectionconfig.md",slug:"/api/interfaces/knex.knex.mysqlconnectionconfig",permalink:"/docs/api/interfaces/knex.knex.mysqlconnectionconfig",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.mysqlconnectionconfig.md",version:"4.4",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1611683413,sidebar_label:"MySqlConnectionConfig",sidebar:"version-4.4/API",previous:{title:"Interface: MySqlAlterColumnBuilder",permalink:"/docs/api/interfaces/knex.knex.mysqlaltercolumnbuilder"},next:{title:"Interface: OnConflictQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.onconflictquerybuilder"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"bigNumberStrings",id:"bignumberstrings",children:[]},{value:"charset",id:"charset",children:[]},{value:"connectTimeout",id:"connecttimeout",children:[]},{value:"database",id:"database",children:[]},{value:"dateStrings",id:"datestrings",children:[]},{value:"debug",id:"debug",children:[]},{value:"decimalNumbers",id:"decimalnumbers",children:[]},{value:"flags",id:"flags",children:[]},{value:"host",id:"host",children:[]},{value:"insecureAuth",id:"insecureauth",children:[]},{value:"localAddress",id:"localaddress",children:[]},{value:"multipleStatements",id:"multiplestatements",children:[]},{value:"password",id:"password",children:[]},{value:"port",id:"port",children:[]},{value:"queryFormat",id:"queryformat",children:[]},{value:"socketPath",id:"socketpath",children:[]},{value:"ssl",id:"ssl",children:[]},{value:"stringifyObjects",id:"stringifyobjects",children:[]},{value:"supportBigNumbers",id:"supportbignumbers",children:[]},{value:"timezone",id:"timezone",children:[]},{value:"trace",id:"trace",children:[]},{value:"typeCast",id:"typecast",children:[]},{value:"user",id:"user",children:[]}]},{value:"Methods",id:"methods",children:[{value:"expirationChecker",id:"expirationchecker",children:[]}]}],l={toc:p};function o(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(b.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-mysqlconnectionconfig"},"Interface: MySqlConnectionConfig"),Object(i.b)("p",null,Object(i.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex"}),"knex"),".",Object(i.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/modules/knex.knex-1"}),"Knex"),".MySqlConnectionConfig"),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"MySqlConnectionConfig")),Object(i.b)("p",{parentName:"li"},"\u21b3 ",Object(i.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mysql2connectionconfig"}),Object(i.b)("em",{parentName:"a"},"MySql2ConnectionConfig"))))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"bignumberstrings"},"bigNumberStrings"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"bigNumberStrings"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1994"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"charset"},"charset"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"charset"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1986"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"connecttimeout"},"connectTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"connectTimeout"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1988"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"database"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1985"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"datestrings"},"dateStrings"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"dateStrings"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1995"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"debug"},"debug"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"debug"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1996"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"decimalnumbers"},"decimalNumbers"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"decimalNumbers"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2001"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"flags"},"flags"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"flags"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1999"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"host"},"host"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"host"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1979"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"insecureauth"},"insecureAuth"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"insecureAuth"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1990"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"localaddress"},"localAddress"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"localAddress"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1981"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"multiplestatements"},"multipleStatements"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"multipleStatements"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1998"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"password"},"password"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"password"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1984"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"port"},"port"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"port"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1980"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"queryformat"},"queryFormat"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"queryFormat"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(i.b)("inlineCode",{parentName:"p"},"query"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"values"),": ",Object(i.b)("em",{parentName:"p"},"any"),") => ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1992"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"socketpath"},"socketPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"socketPath"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1982"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"ssl"},"ssl"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"ssl"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("a",Object(b.a)({parentName:"p"},{href:"/docs/api/interfaces/knex.knex.mariasslconfiguration"}),Object(i.b)("em",{parentName:"a"},"MariaSslConfiguration"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2000"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stringifyobjects"},"stringifyObjects"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stringifyObjects"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1989"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"supportbignumbers"},"supportBigNumbers"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"supportBigNumbers"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1993"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"timezone"},"timezone"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"timezone"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1987"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"trace"},"trace"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"trace"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1997"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"typecast"},"typeCast"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"typeCast"),": ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1991"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"user"},"user"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"user"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1983"),Object(i.b)("h2",{id:"methods"},"Methods"),Object(i.b)("h3",{id:"expirationchecker"},"expirationChecker"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"expirationChecker"),":"))}o.isMDXComponent=!0}}]);