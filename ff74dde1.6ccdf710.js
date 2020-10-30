(window.webpackJsonp=window.webpackJsonp||[]).push([[740],{799:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(1),o=n(6),r=(n(0),n(806)),i={title:"Relationship Loading Strategies",sidebar_label:"Loading Strategies"},l={unversionedId:"loading-strategies",id:"loading-strategies",isDocsHomePage:!1,title:"Relationship Loading Strategies",description:"SQL only feature",source:"@site/docs/loading-strategies.md",slug:"/loading-strategies",permalink:"/docs/next/loading-strategies",editUrl:"https://github.com/mikro-orm/mikro-orm/edit/master/docs/docs/loading-strategies.md",version:"current",lastUpdatedBy:"Martin Ad\xe1mek",lastUpdatedAt:1604046900,sidebar_label:"Loading Strategies",sidebar:"docs",previous:{title:"Propagation",permalink:"/docs/next/propagation"},next:{title:"Serializing",permalink:"/docs/next/serializing"}},c=[{value:"Changing the loading strategy globally",id:"changing-the-loading-strategy-globally",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"SQL only feature")),Object(r.b)("p",null,"Controls how relationships get loaded when querying. By default, populated relationships\nare loaded via the ",Object(r.b)("inlineCode",{parentName:"p"},"select-in")," strategy. This strategy issues one additional ",Object(r.b)("inlineCode",{parentName:"p"},"SELECT"),"\nstatement per relation being loaded."),Object(r.b)("p",null,"The loading strategy can be specified both at mapping time and when loading entities."),Object(r.b)("p",null,"For example, given the following entities:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Entity, LoadStrategy, OneToMany, ManyToOne } from '@mikro-orm/core';\n\n@Entity()\nexport class Author {\n  @OneToMany(() => Book, b => b.author)\n  books = new Collection<Book>(this);\n}\n\n@Entity()\nexport class Book {\n  @ManyToOne()\n  author: Author;\n}\n")),Object(r.b)("p",null,"The following will issue two SQL statements.\nOne to load the author and another to load all the books belonging to that author:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, 1, ['books']);\n")),Object(r.b)("p",null,"If we update the ",Object(r.b)("inlineCode",{parentName:"p"},"Author.books")," mapping to the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Entity, LoadStrategy, OneToMany } from '@mikro-orm/core';\n\n@Entity()\nexport class Author {\n  @OneToMany({\n    entity: () => Book,\n    mappedBy: b => b.author,\n    strategy: LoadStrategy.JOINED,\n  })\n  books = new Collection<Book>(this);\n}\n")),Object(r.b)("p",null,"The following will issue ",Object(r.b)("strong",{parentName:"p"},"one")," SQL statement:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const author = await orm.em.findOne(Author, 1, ['books']);\n")),Object(r.b)("p",null,"You can also specify the load strategy as needed. This will override whatever strategy is declared in the mapping.\nThis also works for nested populates:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// one level\nconst author = await orm.em.findOne(Author, 1, { populate: { books: LoadStrategy.JOINED } });\n\n// two levels\nconst author = await orm.em.findOne(Author, 1, { populate: {\n  books: [LoadStrategy.JOINED, { publisher: LoadStrategy.JOINED }]\n} });\n")),Object(r.b)("h2",{id:"changing-the-loading-strategy-globally"},"Changing the loading strategy globally"),Object(r.b)("p",null,"You can use ",Object(r.b)("inlineCode",{parentName:"p"},"loadStrategy")," option in the ORM config:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"MikroORM.init({\n  loadStrategy: LoadStrategy.JOINED,\n});\n")),Object(r.b)("p",null,"This value will be used as the default, specifying the loading strategy on\nproperty level has precedence, as well as specifying it in the ",Object(r.b)("inlineCode",{parentName:"p"},"FindOptions"),"."))}p.isMDXComponent=!0},806:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return g}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(i,".").concat(d)]||u[d]||b[d]||r;return n?o.a.createElement(g,l(l({ref:t},s),{},{components:n})):o.a.createElement(g,l({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);