(window.webpackJsonp=window.webpackJsonp||[]).push([[559],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,O=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return t?r.a.createElement(O,b(b({ref:n},p),{},{components:t})):r.a.createElement(O,b({ref:n},p))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=m;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<i;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},632:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return l}));var a=t(3),r=t(8),i=(t(0),t(1052)),c={id:"knex.knex.config",title:"Interface: Config<SV>",sidebar_label:"Config",hide_title:!0},b={unversionedId:"api/interfaces/knex.knex.config",id:"version-4.4/api/interfaces/knex.knex.config",isDocsHomePage:!1,title:"Interface: Config<SV>",description:"Interface: Config",source:"@site/versioned_docs/version-4.4/api/interfaces/knex.knex.config.md",slug:"/api/interfaces/knex.knex.config",permalink:"/docs/api/interfaces/knex.knex.config",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/versioned_docs/version-4.4/api/interfaces/knex.knex.config.md",version:"4.4",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1614930069,sidebar_label:"Config",sidebar:"version-4.4/API",previous:{title:"Interface: ColumnNameQueryBuilder<TRecord, TResult>",permalink:"/docs/api/interfaces/knex.knex.columnnamequerybuilder"},next:{title:"Interface: ConnectionConfig",permalink:"/docs/api/interfaces/knex.knex.connectionconfig"}},o=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Properties",id:"properties",children:[{value:"acquireConnectionTimeout",id:"acquireconnectiontimeout",children:[]},{value:"asyncStackTraces",id:"asyncstacktraces",children:[]},{value:"client",id:"client",children:[]},{value:"connection",id:"connection",children:[]},{value:"debug",id:"debug",children:[]},{value:"dialect",id:"dialect",children:[]},{value:"log",id:"log",children:[]},{value:"migrations",id:"migrations",children:[]},{value:"pool",id:"pool",children:[]},{value:"postProcessResponse",id:"postprocessresponse",children:[]},{value:"searchPath",id:"searchpath",children:[]},{value:"seeds",id:"seeds",children:[]},{value:"useNullAsDefault",id:"usenullasdefault",children:[]},{value:"version",id:"version",children:[]},{value:"wrapIdentifier",id:"wrapidentifier",children:[]}]}],p={toc:o};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-configsv"},"Interface: Config<SV",">"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1"},"Knex"),".Config"),Object(i.b)("h2",{id:"type-parameters"},"Type parameters"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Name"),Object(i.b)("th",{parentName:"tr",align:null},"Type"),Object(i.b)("th",{parentName:"tr",align:null},"Default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("inlineCode",{parentName:"td"},"SV")),Object(i.b)("td",{parentName:"tr",align:null},"{}"),Object(i.b)("td",{parentName:"tr",align:null},Object(i.b)("em",{parentName:"td"},"any"))))),Object(i.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Config"))),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"acquireconnectiontimeout"},"acquireConnectionTimeout"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"acquireConnectionTimeout"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"number")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1864"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"asyncstacktraces"},"asyncStackTraces"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"asyncStackTraces"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1867"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"client"},"client"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"client"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("em",{parentName:"p"},"typeof")," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/classes/knex.knex.client"},Object(i.b)("em",{parentName:"a"},"Client"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1851"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"connection"},"connection"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"connection"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.connectionconfig"},Object(i.b)("em",{parentName:"a"},"ConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.mariasqlconnectionconfig"},Object(i.b)("em",{parentName:"a"},"MariaSqlConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.mysqlconnectionconfig"},Object(i.b)("em",{parentName:"a"},"MySqlConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.mysql2connectionconfig"},Object(i.b)("em",{parentName:"a"},"MySql2ConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.mssqlconnectionconfig"},Object(i.b)("em",{parentName:"a"},"MsSqlConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.oracledbconnectionconfig"},Object(i.b)("em",{parentName:"a"},"OracleDbConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.pgconnectionconfig"},Object(i.b)("em",{parentName:"a"},"PgConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.sqlite3connectionconfig"},Object(i.b)("em",{parentName:"a"},"Sqlite3ConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.socketconnectionconfig"},Object(i.b)("em",{parentName:"a"},"SocketConnectionConfig"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#syncconnectionconfigprovider"},Object(i.b)("em",{parentName:"a"},"SyncConnectionConfigProvider"))," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/modules/knex.knex-1#asyncconnectionconfigprovider"},Object(i.b)("em",{parentName:"a"},"AsyncConnectionConfigProvider"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1854"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"debug"},"debug"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"debug"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1850"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"dialect"},"dialect"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"dialect"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1852"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"log"},"log"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"log"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.logger"},Object(i.b)("em",{parentName:"a"},"Logger"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1868"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"migrations"},"migrations"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"migrations"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.migratorconfig"},Object(i.b)("em",{parentName:"a"},"MigratorConfig"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1856"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"pool"},"pool"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"pool"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.poolconfig"},Object(i.b)("em",{parentName:"a"},"PoolConfig"))),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1855"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"postprocessresponse"},"postProcessResponse"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"postProcessResponse"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(i.b)("inlineCode",{parentName:"p"},"result"),": ",Object(i.b)("em",{parentName:"p"},"any"),", ",Object(i.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(i.b)("em",{parentName:"p"},"any"),") => ",Object(i.b)("em",{parentName:"p"},"any")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1857"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"searchpath"},"searchPath"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"searchPath"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1866"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"seeds"},"seeds"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"seeds"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/api/interfaces/knex.knex.seederconfig"},Object(i.b)("em",{parentName:"a"},"SeederConfig")),"<SV",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1863"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"usenullasdefault"},"useNullAsDefault"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"useNullAsDefault"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1865"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"version"},"version"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"version"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1853"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"wrapidentifier"},"wrapIdentifier"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"wrapIdentifier"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," (",Object(i.b)("inlineCode",{parentName:"p"},"value"),": ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"origImpl"),": (",Object(i.b)("inlineCode",{parentName:"p"},"value"),": ",Object(i.b)("em",{parentName:"p"},"string"),") => ",Object(i.b)("em",{parentName:"p"},"string"),", ",Object(i.b)("inlineCode",{parentName:"p"},"queryContext"),": ",Object(i.b)("em",{parentName:"p"},"any"),") => ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:1858"))}l.isMDXComponent=!0}}]);