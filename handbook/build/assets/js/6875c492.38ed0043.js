(window.webpackJsonp=window.webpackJsonp||[]).push([[54,17,101],{130:function(e,a,t){"use strict";t.r(a);var l=t(0),r=t.n(l),n=t(226),s=t(240),o=t(219),c=t(232),m=t(220),i=t(218);function g({tagName:e,count:a}){const t=function(){const{selectMessage:e}=Object(i.usePluralForm)();return a=>e(a,Object(m.b)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:a}))}();return r.a.createElement(m.a,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:t(a),tagName:e}},'{nPosts} tagged with "{tagName}"')}a.default=function(e){const{metadata:a,items:t,sidebar:l}=e,{allTagsPath:u,name:d,count:f}=a;return r.a.createElement(n.a,{title:`Posts tagged "${d}"`,description:`Blog | Tagged "${d}"`,wrapperClassName:i.ThemeClassNames.wrapper.blogPages,pageClassName:i.ThemeClassNames.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(c.a,{sidebar:l})),r.a.createElement("main",{className:"col col--7"},r.a.createElement("h1",null,r.a.createElement(g,{count:f,tagName:d})),r.a.createElement(o.a,{href:u},r.a.createElement(m.a,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.a.createElement("div",{className:"margin-vert--xl"},t.map(({content:e})=>r.a.createElement(s.a,{key:e.metadata.permalink,frontMatter:e.frontMatter,metadata:e.metadata,truncated:!0},r.a.createElement(e,null))))))))}},227:function(e,a,t){"use strict";var l=t(3),r=t(0),n=t.n(r),s=t(217),o=t(219),c=t(218),m=t(10),i=t(62),g=t.n(i);function u({to:e,href:a,label:t,prependBaseUrlToHref:r,...s}){const c=Object(m.a)(e),i=Object(m.a)(a,{forcePrependBaseUrl:!0});return n.a.createElement(o.a,Object(l.a)({className:"footer__link-item"},a?{target:"_blank",rel:"noopener noreferrer",href:r?i:a}:{to:c},s),t)}const d=({url:e,alt:a})=>n.a.createElement("img",{className:"footer__logo",alt:a,src:e,style:{background:"#fff",padding:"5px 10px"}});a.a=function(){const{footer:e}=Object(c.useThemeConfig)(),{copyright:a,links:t=[],logo:l={}}=e||{},r=Object(m.a)(l.src);return e?n.a.createElement("footer",{className:Object(s.a)("footer",{"footer--dark":"dark"===e.style})},n.a.createElement("div",{className:"container"},t&&t.length>0&&n.a.createElement("div",{className:"row footer__links"},t.map((e,a)=>n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((e,a)=>e.html?n.a.createElement("li",{key:a,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(u,e)))):null))),(l||a)&&n.a.createElement("div",{className:"footer__bottom text--center"},l&&l.src&&n.a.createElement("div",{className:"margin-bottom--sm"},l.href?n.a.createElement("a",{href:l.href,target:"_blank",rel:"noopener noreferrer",className:g.a.footerLogoLink},n.a.createElement(d,{alt:l.alt,url:r})):n.a.createElement(d,{alt:l.alt,url:r})),a?n.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);