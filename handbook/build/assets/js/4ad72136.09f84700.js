"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[9532],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6004:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"efcore-recommend",title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",sidebar_label:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5"},l=void 0,p={unversionedId:"efcore-recommend",id:"efcore-recommend",isDocsHomePage:!1,title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",description:"9.29.1 EFCore \u9ad8\u6027\u80fd",source:"@site/docs/efcore-recommend.mdx",sourceDirName:".",slug:"/efcore-recommend",permalink:"/furion/docs/next/efcore-recommend",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/efcore-recommend.mdx",version:"current",lastUpdatedBy:"zhoujintao",lastUpdatedAt:1619429356,formattedLastUpdatedAt:"2021/4/26",frontMatter:{id:"efcore-recommend",title:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5",sidebar_label:"9.29 EFCore \u6700\u4f73\u5b9e\u8df5"},sidebar:"docs",previous:{title:"9.28 \u5206\u8868\u5206\u5e93",permalink:"/furion/docs/next/split-db"},next:{title:"10.1. SqlSugar \u96c6\u6210",permalink:"/furion/docs/next/sqlsugar"}},u=[{value:"9.29.1 EFCore \u9ad8\u6027\u80fd",id:"9291-efcore-\u9ad8\u6027\u80fd",children:[]},{value:"9.29.2 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"9292-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],m={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"9291-efcore-\u9ad8\u6027\u80fd"},"9.29.1 EFCore \u9ad8\u6027\u80fd"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\uff0c\u9ed8\u8ba4\u63a8\u8350\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"EFCore")," \u64cd\u4f5c\u6570\u636e\u5e93\uff0c\u4f46\u5f88\u591a\u670b\u53cb\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"EFCore")," \u4f7f\u7528\u4e0d\u5f53\uff0c\u7279\u610f\u7f16\u5199\u6b64\u6587\u6863\u8bf4\u660e\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c3d\u53ef\u80fd\u7684\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"IRepository/IRepository<TEntity>")," \u4ed3\u50a8\u65b9\u5f0f\u5728\u6784\u9020\u51fd\u6570\u4e2d\u521d\u59cb\u5316\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u907f\u514d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"strong"},"Db.GetRepository<TEntity>")," \u65b9\u5f0f"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u4ee5",(0,a.kt)("strong",{parentName:"li"},"\u5f02\u6b65\u65b9\u5f0f"),"\u8c03\u7528\u6240\u6709\u6570\u636e\u8bbf\u95ee api\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u68c0\u7d22\u7684\u6570\u636e\u4e0d\u662f\u5fc5\u9700\u7684\u3002 \u7f16\u5199\u67e5\u8be2\u4ee5",(0,a.kt)("strong",{parentName:"li"},"\u4ec5\u8fd4\u56de\u5f53\u524d HTTP \u8bf7\u6c42\u6240\u5fc5\u9700\u7684\u6570\u636e"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u6570\u636e\u53ef\u4ee5\u63a5\u53d7\uff0c\u8bf7\u8003\u8651",(0,a.kt)("strong",{parentName:"li"},"\u7f13\u5b58\u7ecf\u5e38\u8bbf\u95ee\u7684\u4ece\u6570\u636e\u5e93\u6216\u8fdc\u7a0b\u670d\u52a1\u68c0\u7d22\u7684\u6570\u636e"),"\u3002 \u4f7f\u7528 MemoryCache \u6216 microsoft.web.distributedcache \uff0c\u5177\u4f53\u53d6\u51b3\u4e8e\u65b9\u6848\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5c3d\u91cf\u51cf\u5c11\u7f51\u7edc\u5f80\u8fd4\u6b21\u6570"),"\u3002 \u76ee\u6807\u662f\u4f7f\u7528\u5355\u4e2a\u8c03\u7528\u800c\u4e0d\u662f\u591a\u4e2a\u8c03\u7528\u6765\u68c0\u7d22\u6240\u9700\u6570\u636e\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u5f53\u524d\u8bf7\u6c42\u53ea\u6709\u6570\u636e\u67e5\u8be2\uff0c\u8bf7\u4f7f\u7528\u65e0\u8ddf\u8e2a\u67e5\u8be2\u65b9\u5f0f"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u5982\u679c\u8bf7\u6c42\u4e2d\u542b\u6709\u64cd\u4f5c\u6570\u636e\u65f6\uff0c\u8bf7\u4e0d\u8981\u5728 Entity Framework Core \u4e2d\u4f7f\u7528\u65e0\u8ddf\u8e2a\u67e5\u8be2"),"\u3002 EF Core \u53ef\u4ee5\u66f4\u6709\u6548\u5730\u8fd4\u56de\u65e0\u8ddf\u8e2a\u67e5\u8be2\u7684\u7ed3\u679c\u3002 \u7b5b\u9009\u548c\u805a\u5408 LINQ \u67e5\u8be2\uff08\u4f8b\u5982\uff0c .Where \u4f7f\u7528.Select\u3001\u6216.Sum \u8bed\u53e5\uff09\uff0c\u4ee5\u4fbf\u6570\u636e\u5e93\u6267\u884c\u7b5b\u9009\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u9700\u8981\u8fdb\u884c\u590d\u6742\u903b\u8f91\u8ba1\u7b97\u67e5\u8be2\u6570\u636e\u60c5\u51b5\uff0c\u8bf7\u5c3d\u53ef\u80fd\u5728\u8fd4\u56de\u67e5\u8be2\u540e\u518d\u5728\u5ba2\u6237\u7aef\u8ba1\u7b97\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u8981\u5bf9\u96c6\u5408\u4f7f\u7528\u6295\u5f71\u67e5\u8be2"),'\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u6267\u884c "N + 1" \u4e2a SQL \u67e5\u8be2\u3002'),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528 \xb7DbContextPool\xb7 \u6c60\u6765\u7ba1\u7406 DbContext\uff0c\u7c7b\u4f3c ADO.NET \u7684\u8fde\u63a5\u6c60\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u624b\u52a8\u6216\u663e\u5f0f\u7f16\u8bd1\u7684\u67e5\u8be2 API\uff0c\u5141\u8bb8\u5e94\u7528\u7a0b\u5e8f\u7f13\u5b58\u67e5\u8be2\u8f6c\u6362\uff0c\u4f7f\u5176\u53ef\u4ec5\u88ab\u8ba1\u7b97\u4e00\u6b21\u5e76\u6267\u884c\u591a\u6b21\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},"// Create an explicitly compiled query\nprivate static Func<CustomerContext, int, Customer> _customerById =\n    EF.CompileQuery((CustomerContext db, int id) =>\n        db.Customers\n            .Include(c => c.Address)\n            .Single(c => c.Id == id));\n\n// Use the compiled query by invoking it\nusing (var db = new CustomerContext())\n{\n   var customer = _customerById(db, 147);\n}\n")),(0,a.kt)("h2",{id:"9292-\u53cd\u9988\u4e0e\u5efa\u8bae"},"9.29.2 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}s.isMDXComponent=!0}}]);