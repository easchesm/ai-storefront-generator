(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Bl7J:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),c=t("W/9C");a.a=function(e){var a=e.title,t=e.navHomePath,s=e.render,i=Object(n.useState)(!1),m=i[0],o=i[1],u=Object(n.useState)(!1),d=u[0],v=u[1];return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar is-light is-fixed-top",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement(l.a,{to:t,className:"navbar-item"},r.a.createElement("strong",null,a)),r.a.createElement("a",{role:"button",className:"navbar-burger","ari-label":"menu","aria-expanded":"false",onClick:function(){return o(!m)}},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}))),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"+(m?" is-active":"")},r.a.createElement("div",{className:"navbar-start"},r.a.createElement(l.a,{to:t,className:"navbar-item"},"Products"),r.a.createElement(l.a,{to:t+"about-us",className:"navbar-item"},"About Us")),r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},d?r.a.createElement("button",{type:"button",className:"button is-warning is-inverted",onClick:function(){return v(!1)}},"Hide Annotations"):r.a.createElement("button",{type:"button",className:"button is-warning",onClick:function(){return v(!0)}},"Show Annotations"))),r.a.createElement("div",{className:"navbar-item"},r.a.createElement("div",{className:"buttons"},r.a.createElement(l.a,{to:"/",className:"button is-link"},"Back to Entries"))))))),r.a.createElement("div",{className:"container pt-6"},s({isAnnotationsToggled:d})),r.a.createElement(c.a,null))}},Dltz:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return o}));var n=t("9eSz"),r=t.n(n),l=t("q1tI"),c=t.n(l),s=t("kFtE"),i=t("Bl7J"),m=t("vrFN");function o(e){var a=e.data,t=e.pageContext,n=a.parentPage,l=a.sitePage;return c.a.createElement(i.a,{title:n.context.name,navHomePath:n.context.pagePath,render:function(e){var a=e.isAnnotationsToggled;return c.a.createElement(c.a.Fragment,null,c.a.createElement(m.a,{title:t.productName,description:"Unique products, made-to-order"}),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"columns"},c.a.createElement("div",{className:"column is-one-third-desktop"},c.a.createElement("figure",{className:"image"},c.a.createElement(r.a,{fluid:l.image.childImageSharp.fluid,alt:l.context.imageAlt}),c.a.createElement("div",{className:"is-flex is-justify-content-center"},c.a.createElement(s.a,{placement:"bottom",isActive:a},c.a.createElement("strong",null,"Product images are generated with Deep AI, providing the product name."))))),c.a.createElement("div",{className:"column is-flex is-align-items-center is-justify-content-center"},c.a.createElement("div",null,c.a.createElement("p",{className:"title"},t.productName),c.a.createElement("p",{className:"subtitle"},t.productPrice),l.context.productDescription.split("\n").slice(0,2).map((function(e){return c.a.createElement("p",{className:"block",key:e},e)})),c.a.createElement("div",{className:"is-flex is-justify-content-center"},c.a.createElement(s.a,{placement:"bottom",isActive:a},c.a.createElement("strong",null,'Descriptions are generated with Deep AI, with given prompt: "'+t.productName+' is"'))))))),c.a.createElement("hr",null),c.a.createElement("div",{className:"section"},c.a.createElement("div",{className:"container"},c.a.createElement("h4",{className:"subtitle is-4"},"Reviews for"," ",c.a.createElement("strong",null,t.productName)),t.reviews.map((function(e){var n=e.review.split("\n");return c.a.createElement("div",{className:"section",key:n[0]},c.a.createElement("div",{className:"is-flex is-justify-content-center"},c.a.createElement(s.a,{placement:"top",isActive:a},c.a.createElement("strong",null,"Rating based on Google's Sentiment Analysis score within text prompt (1 star for negative, 3 stars for neutral, 5 stars for positive)"))),c.a.createElement("p",null,new Array(t.stars).fill().map((function(e,a){return c.a.createElement("span",{className:"icon is-small",key:""+a},c.a.createElement("i",{className:"fas fa-star"}))})),c.a.createElement("strong",{className:"ml-3"},n[0])),c.a.createElement("div",{className:"block"},c.a.createElement("div",{className:"ml-6"},c.a.createElement(s.a,{placement:"top",isActive:a},c.a.createElement("strong",null,"A random name"))),c.a.createElement("p",null,c.a.createElement("i",{className:"fa fa-user","aria-hidden":"true"}),c.a.createElement("small",null," ",c.a.createElement("strong",null,e.reviewer)))),c.a.createElement("div",{className:"block"},c.a.createElement("p",null,n[2]),c.a.createElement("div",{className:"is-flex is-justify-content-center"},c.a.createElement(s.a,{placement:"bottom",isActive:a},c.a.createElement("strong",null,'Review title and content are generated with Deep AI, with given prompt (using "sentiment"): "A (positive/negative/neutral) review for '+t.productName+'"')))),c.a.createElement("p",{className:"block"},n[4]),c.a.createElement("p",{className:"block"},n[6]))})))))}})}},kFtE:function(e,a,t){"use strict";var n=t("q1tI"),r=t.n(n),l=function(e){var a=e.placement,t=e.children,n=e.isActive,l=void 0!==n&&n;return r.a.createElement("div",{className:"popover is-popover-"+a+" "+(l?"is-popover-active":"")},r.a.createElement("div",{className:"popover-content"},t))};l.defaultProps={placement:"top",isActive:!1},a.a=l}}]);
//# sourceMappingURL=component---src-templates-product-js-89f67826634e82ba06da.js.map