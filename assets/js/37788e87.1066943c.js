(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{1052:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),p=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},d=function(e){var n=p(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,u=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return t?a.a.createElement(u,b(b({ref:n},l),{},{components:t})):a.a.createElement(u,b({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=m;var b={};for(var c in n)hasOwnProperty.call(n,c)&&(b[c]=n[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<i;l++)o[l]=t[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return p}));var r=t(3),a=t(8),i=(t(0),t(1052)),o={id:"knex.knex-1.migratorconfig",title:"Interface: MigratorConfig",sidebar_label:"MigratorConfig",custom_edit_url:null,hide_title:!0},b={unversionedId:"api/interfaces/knex.knex-1.migratorconfig",id:"api/interfaces/knex.knex-1.migratorconfig",isDocsHomePage:!1,title:"Interface: MigratorConfig",description:"Interface: MigratorConfig",source:"@site/docs/api/interfaces/knex.knex-1.migratorconfig.md",slug:"/api/interfaces/knex.knex-1.migratorconfig",permalink:"/docs/next/api/interfaces/knex.knex-1.migratorconfig",editUrl:null,version:"current",sidebar_label:"MigratorConfig",sidebar:"API",previous:{title:"Interface: Migrator",permalink:"/docs/next/api/interfaces/knex.knex-1.migrator"},next:{title:"Interface: MsSqlConnectionConfig",permalink:"/docs/next/api/interfaces/knex.knex-1.mssqlconnectionconfig"}},c=[{value:"Properties",id:"properties",children:[{value:"database",id:"database",children:[]},{value:"directory",id:"directory",children:[]},{value:"disableMigrationsListValidation",id:"disablemigrationslistvalidation",children:[]},{value:"disableTransactions",id:"disabletransactions",children:[]},{value:"extension",id:"extension",children:[]},{value:"loadExtensions",id:"loadextensions",children:[]},{value:"migrationSource",id:"migrationsource",children:[]},{value:"schemaName",id:"schemaname",children:[]},{value:"sortDirsSeparately",id:"sortdirsseparately",children:[]},{value:"stub",id:"stub",children:[]},{value:"tableName",id:"tablename",children:[]}]}],l={toc:c};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"interface-migratorconfig"},"Interface: MigratorConfig"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex"},"knex"),".",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/modules/knex.knex-1"},"Knex"),".MigratorConfig"),Object(i.b)("h2",{id:"properties"},"Properties"),Object(i.b)("h3",{id:"database"},"database"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"database"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2121"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"directory"},"directory"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"directory"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")," ","|"," readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2122"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"disablemigrationslistvalidation"},"disableMigrationsListValidation"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"disableMigrationsListValidation"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2128"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"disabletransactions"},"disableTransactions"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"disableTransactions"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2127"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"extension"},"extension"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"extension"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2123"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"loadextensions"},"loadExtensions"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"loadExtensions"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," readonly ",Object(i.b)("em",{parentName:"p"},"string"),"[]"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2130"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"migrationsource"},"migrationSource"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"migrationSource"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("a",{parentName:"p",href:"/docs/next/api/interfaces/knex.knex-1.migrationsource"},Object(i.b)("em",{parentName:"a"},"MigrationSource")),"<unknown",">"),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2131"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"schemaname"},"schemaName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"schemaName"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2126"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"sortdirsseparately"},"sortDirsSeparately"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"sortDirsSeparately"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"boolean")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2129"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"stub"},"stub"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"stub"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2124"),Object(i.b)("hr",null),Object(i.b)("h3",{id:"tablename"},"tableName"),Object(i.b)("p",null,"\u2022 ",Object(i.b)("inlineCode",{parentName:"p"},"Optional")," ",Object(i.b)("strong",{parentName:"p"},"tableName"),": ",Object(i.b)("em",{parentName:"p"},"undefined")," ","|"," ",Object(i.b)("em",{parentName:"p"},"string")),Object(i.b)("p",null,"Defined in: node_modules/knex/types/index.d.ts:2125"))}p.isMDXComponent=!0}}]);