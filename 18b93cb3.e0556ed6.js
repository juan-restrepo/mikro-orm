(window.webpackJsonp=window.webpackJsonp||[]).push([[34,278],{409:function(e,t,a){"use strict";var r=a(1),n=a(6),o=a(0),l=a.n(o),i=a(407),s=a.n(i),m=a(404),c=a(403),u=a(405),d=a(49),p=a.n(d);function f(e){var t=e.to,a=e.href,o=e.label,i=Object(n.a)(e,["to","href","label"]),s=Object(u.a)(t);return l.a.createElement(m.a,Object(r.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:a}:{to:s},i),o)}var g=function(e){var t=e.url,a=e.alt;return l.a.createElement("img",{className:"footer__logo",alt:a,src:t})};t.a=function(){var e=Object(c.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,r=a||{},n=r.copyright,o=r.links,i=void 0===o?[]:o,m=r.logo,d=void 0===m?{}:m,h=Object(u.a)(d.src);return a?l.a.createElement("footer",{className:s()("footer",{"footer--dark":"dark"===a.style})},l.a.createElement("div",{className:"container"},i&&i.length>0&&l.a.createElement("div",{className:"row footer__links"},i.map((function(e,t){return l.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return"GitHub Stars"===e.label?l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=mikro-orm&repo=mikro-orm&type=star&count=true",style:{marginTop:10},frameBorder:0,scrolling:0,width:100,height:30,title:"GitHub Stars",key:t})):"GitHub Sponsors"===e.label?l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=B4nan&type=sponsor",frameBorder:0,scrolling:0,width:130,height:30,title:"Sponsor B4nan"})):e.html?l.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},l.a.createElement(f,e))}))):null)}))),(d||n)&&l.a.createElement("div",{className:"text--center"},d&&d.src&&l.a.createElement("div",{className:"margin-bottom--sm"},d.href?l.a.createElement("a",{href:d.href,target:"_blank",rel:"noopener noreferrer",className:p.a.footerLogoLink},l.a.createElement(g,{alt:d.alt,url:h})):l.a.createElement(g,{alt:d.alt,url:h})),n,"Icons made by ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",l.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}},419:function(e){e.exports=JSON.parse('["4.0","3.6","3.5","3.4","3.3","2.7"]')},455:function(e){e.exports=JSON.parse('{"name":"@mikro-orm/core","version":"4.0.5","description":"TypeScript ORM for Node.js based on Data Mapper, Unit of Work and Identity Map patterns. Supports MongoDB, MySQL, PostgreSQL and SQLite databases as well as usage with vanilla JavaScript.","main":"dist/index.js","typings":"dist/index.d.ts","repository":{"type":"git","url":"git+ssh://git@github.com/mikro-orm/mikro-orm.git"},"keywords":["orm","mongo","mongodb","mysql","mariadb","postgresql","sqlite","sqlite3","ts","typescript","js","javascript","entity","ddd","mikro-orm","unit-of-work","data-mapper","identity-map"],"author":"Martin Ad\xe1mek","license":"MIT","bugs":{"url":"https://github.com/mikro-orm/mikro-orm/issues"},"homepage":"https://mikro-orm.io","engines":{"node":">= 10.13.0"},"scripts":{"build":"yarn clean && yarn compile && yarn copy","clean":"rimraf ./dist","compile":"tsc -p tsconfig.build.json","copy":"ts-node -T ../../scripts/copy.ts"},"publishConfig":{"access":"public"},"dependencies":{"ansi-colors":"^4.1.1","clone":"^2.1.2","escaya":"^0.0.47","fast-deep-equal":"^3.1.3","fs-extra":"^9.0.1","globby":"^11.0.1","reflect-metadata":"^0.1.13","strip-json-comments":"^3.1.1"},"peerDependencies":{"@mikro-orm/entity-generator":"^4.0.0","@mikro-orm/mariadb":"^4.0.0","@mikro-orm/migrations":"^4.0.0","@mikro-orm/mongodb":"^4.0.0","@mikro-orm/mysql":"^4.0.0","@mikro-orm/postgresql":"^4.0.0","@mikro-orm/sqlite":"^4.0.0"},"peerDependenciesMeta":{"@mikro-orm/entity-generator":{"optional":true},"@mikro-orm/migrations":{"optional":true},"@mikro-orm/mongodb":{"optional":true},"@mikro-orm/mysql":{"optional":true},"@mikro-orm/mariadb":{"optional":true},"@mikro-orm/postgresql":{"optional":true},"@mikro-orm/sqlite":{"optional":true}}}')},87:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(408),l=a(403),i=a(404),s=a(405),m=a(455),c=a(419);t.default=function(){var e=Object(l.a)().siteConfig,t=void 0===e?{}:e,a=[c[0],m.version],r=c.filter((function(e){return e!==c[0]})).map((function(e){return[e,e+".0"]})),u="https://github.com/"+t.organizationName+"/"+t.projectName;return n.a.createElement(o.a,{permalink:"/versions",description:"MikroORM Versions page listing all documented site versions"},n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("h1",null,"MikroORM documentation versions"),n.a.createElement("div",{className:"margin-bottom--lg"},n.a.createElement("h3",{id:"latest"},"Latest version (Stable)"),n.a.createElement("p",null,"Here you can find the latest documentation."),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,a[1]),n.a.createElement("td",null,n.a.createElement(i.a,{to:Object(s.a)("/docs/installation")},"Documentation")),n.a.createElement("td",null,n.a.createElement("a",{href:u+"/releases/tag/v"+a[1]},"Release Notes")))))),n.a.createElement("div",{className:"margin-bottom--lg"},n.a.createElement("h3",{id:"next"},"Next version (Unreleased)"),n.a.createElement("p",null,"Here you can find the documentation for unreleased version."),n.a.createElement("table",null,n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("th",null,"master"),n.a.createElement("td",null,n.a.createElement(i.a,{to:Object(s.a)("/docs/next/installation")},"Documentation")),n.a.createElement("td",null,n.a.createElement("a",{href:u},"Source Code")))))),r.length>0&&n.a.createElement("div",{className:"margin-bottom--lg"},n.a.createElement("h3",{id:"archive"},"Past Versions"),n.a.createElement("p",null,"Here you can find documentation for previous versions of MikroORM."),n.a.createElement("table",null,n.a.createElement("tbody",null,r.map((function(e){return n.a.createElement("tr",{key:e[0]},n.a.createElement("th",null,e[0]),n.a.createElement("td",null,n.a.createElement(i.a,{to:Object(s.a)("/docs/"+e[0]+"/installation")},"Documentation")),n.a.createElement("td",null,n.a.createElement("a",{href:u+"/releases/tag/v"+e[1]},"Release Notes")))})))))))}}}]);