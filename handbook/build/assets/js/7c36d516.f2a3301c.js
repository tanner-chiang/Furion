"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[2075],{3905:function(e,n,a){a.d(n,{Zo:function(){return d},kt:function(){return m}});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=t.createContext({}),s=function(e){var n=t.useContext(c),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,y=u["".concat(c,".").concat(m)]||u[m]||p[m]||i;return a?t.createElement(y,o(o({ref:n},d),{},{components:a})):t.createElement(y,o({ref:n},d))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1246:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var t=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],l={id:"clayobj",title:"29. \u7c98\u571f\u5bf9\u8c61",sidebar_label:"29. \u7c98\u571f\u5bf9\u8c61"},c=void 0,s={unversionedId:"clayobj",id:"version-v2/clayobj",isDocsHomePage:!1,title:"29. \u7c98\u571f\u5bf9\u8c61",description:"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 Furion 2.1.12 + \u7248\u672c\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-v2/clayobj.mdx",sourceDirName:".",slug:"/clayobj",permalink:"/furion/docs/clayobj",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/versioned_docs/version-v2/clayobj.mdx",version:"v2",frontMatter:{id:"clayobj",title:"29. \u7c98\u571f\u5bf9\u8c61",sidebar_label:"29. \u7c98\u571f\u5bf9\u8c61"},sidebar:"version-v2/docs",previous:{title:"28. \u6a21\u5757\u5316\u5f00\u53d1",permalink:"/furion/docs/module-dev"},next:{title:"30. \u8131\u654f\u5904\u7406",permalink:"/furion/docs/sensitive-detection"}},d=[{value:"29.1 \u5173\u4e8e\u7c98\u571f\u5bf9\u8c61",id:"291-\u5173\u4e8e\u7c98\u571f\u5bf9\u8c61",children:[{value:"29.1.1 \u4f7f\u7528\u573a\u666f",id:"2911-\u4f7f\u7528\u573a\u666f",children:[]},{value:"29.1.2 \u5173\u4e8e\u6027\u80fd",id:"2912-\u5173\u4e8e\u6027\u80fd",children:[]}]},{value:"29.2 <code>Clay</code> \u5bf9\u8c61",id:"292-clay-\u5bf9\u8c61",children:[]},{value:"29.3 \u5982\u4f55\u4f7f\u7528",id:"293-\u5982\u4f55\u4f7f\u7528",children:[{value:"29.3.1 \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61",id:"2931-\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61",children:[]},{value:"29.3.2 \u8bfb\u53d6/\u83b7\u53d6\u5c5e\u6027",id:"2932-\u8bfb\u53d6\u83b7\u53d6\u5c5e\u6027",children:[]},{value:"29.3.3 \u65b0\u589e\u5c5e\u6027",id:"2933-\u65b0\u589e\u5c5e\u6027",children:[]},{value:"29.3.4 \u66f4\u65b0\u5c5e\u6027\u503c",id:"2934-\u66f4\u65b0\u5c5e\u6027\u503c",children:[]},{value:"29.3.5 \u5220\u9664\u5c5e\u6027",id:"2935-\u5220\u9664\u5c5e\u6027",children:[]},{value:"29.3.6 \u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728",id:"2936-\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728",children:[]},{value:"29.3.7 \u904d\u5386\u5bf9\u8c61",id:"2937-\u904d\u5386\u5bf9\u8c61",children:[]},{value:"29.3.8 \u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61",id:"2938-\u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61",children:[]},{value:"29.3.9 \u56fa\u5316\u7c98\u571f",id:"2939-\u56fa\u5316\u7c98\u571f",children:[]},{value:"29.3.10 \u8f93\u51fa <code>JSON</code>",id:"29310-\u8f93\u51fa-json",children:[]},{value:"29.3.11 \u8f93\u51fa <code>XML</code> \u5bf9\u8c61",id:"29311-\u8f93\u51fa-xml-\u5bf9\u8c61",children:[]},{value:"29.3.12 \u5173\u952e\u5b57\u5904\u7406",id:"29312-\u5173\u952e\u5b57\u5904\u7406",children:[]}]},{value:"29.4 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"294-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:d};function u(e){var n=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7248\u672c\u8bf4\u660e")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u4ee5\u4e0b\u5185\u5bb9\u4ec5\u9650 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion 2.1.12 +")," \u7248\u672c\u4f7f\u7528\u3002"))),(0,i.kt)("h2",{id:"291-\u5173\u4e8e\u7c98\u571f\u5bf9\u8c61"},"29.1 \u5173\u4e8e\u7c98\u571f\u5bf9\u8c61"),(0,i.kt)("p",null,"\u7c98\u571f\u5bf9\u8c61\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u6846\u67b6\u81ea\u521b\u7684\u4e00\u79cd\u6982\u5ff5\uff0c\u662f\u4e00\u79cd\u53ef\u4ee5\u6a21\u62df\u5f31\u8bed\u8a00\u7279\u6027\u7684\u5bf9\u8c61\uff0c\u7c7b\u4f3c ",(0,i.kt)("inlineCode",{parentName:"p"},"Javascript")," \u4e00\u6837\u64cd\u4f5c\u5bf9\u8c61\u3002\u53ea\u9700\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Clay")," \u7c7b\u521d\u59cb\u5316\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u4e3a\u4ec0\u4e48\u8d77\u540d\u4e3a \u201c\u7c98\u571f\u201d \u5462\uff1f\u56e0\u4e3a\u8fd9\u4e2a\u5bf9\u8c61\u53ef\u4ee5\u81ea\u7531\u7684\u6dfb\u52a0\u5c5e\u6027\uff0c\u79fb\u9664\u5c5e\u6027\uff0c\u53c8\u53ef\u4ee5\u56fa\u5316\u6210\u4efb\u4f55\u5bf9\u8c61\uff0c\u5177\u6709\u53ef\u62d3\u5c55\u3001\u53ef\u5851\u9020\u7684\u7279\u70b9\u3002")),(0,i.kt)("h3",{id:"2911-\u4f7f\u7528\u573a\u666f"},"29.1.1 \u4f7f\u7528\u573a\u666f"),(0,i.kt)("p",null,"\u7c98\u571f\u5bf9\u8c61\u5e38\u7528\u4e8e\u9700\u8981\u52a8\u6001\u6784\u5efa\u5bf9\u8c61\u7684\u5730\u65b9\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"CMS")," \u7cfb\u7edf\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"ViewModel"),"\uff0c\u6216\u8005\u8fd0\u884c\u65f6\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u6216\u8005\u8bf7\u6c42\u7b2c\u4e09\u65b9 ",(0,i.kt)("inlineCode",{parentName:"p"},"API")," \u60c5\u51b5\u3002"),(0,i.kt)("h3",{id:"2912-\u5173\u4e8e\u6027\u80fd"},"29.1.2 \u5173\u4e8e\u6027\u80fd"),(0,i.kt)("p",null,"\u7c98\u571f\u6027\u80fd\u5b9e\u9645\u4e0a\u5e76\u4e0d\u9ad8\u6548\uff0c\u4f46\u662f\u6027\u80fd\u4e5f\u5e76\u4e0d\u4f4e\u4e0b\uff0c\u53ea\u4e0d\u8fc7\u7565\u8f93\u4e8e\u5f3a\u7c7b\u578b\u8c03\u7528\u3002\u4ec0\u4e48\u65f6\u5019\u4f7f\u7528\u53ef\u4ee5\u770b\u4ee5\u4e0a\u7684\u3010\u4f7f\u7528\u573a\u666f\u3011\u3002"),(0,i.kt)("h2",{id:"292-clay-\u5bf9\u8c61"},"29.2 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Clay")," \u5bf9\u8c61"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Clay")," \u5bf9\u8c61\u662f\u7ee7\u627f\u81ea ",(0,i.kt)("inlineCode",{parentName:"p"},"DynamicObject")," \u7684\u4e00\u4e2a\u7279\u6b8a\u5bf9\u8c61\uff0c\u63d0\u4f9b\u4e86\u50cf\u5f31\u8bed\u8a00\u4e00\u6837\u64cd\u4f5c\u5bf9\u8c61\u7684\u65b9\u6cd5\u53ca\u7d22\u5f15\u3002"),(0,i.kt)("h2",{id:"293-\u5982\u4f55\u4f7f\u7528"},"29.3 \u5982\u4f55\u4f7f\u7528"),(0,i.kt)("h3",{id:"2931-\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61"},"29.3.1 \u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'// \u521b\u5efa\u4e00\u4e2a\u7a7a\u7684\u7c98\u571f\u5bf9\u8c61\ndynamic clay = new Clay();\n\n// \u4ece\u73b0\u6709\u7684\u5bf9\u8c61\u521b\u5efa\ndynamic clay2 = Clay.Object(new {});\n\n// \u4ece json \u5b57\u7b26\u4e32\u521b\u5efa\uff0c\u53ef\u7528\u4e8e\u7b2c\u4e09\u65b9 API \u5bf9\u63a5\uff0c\u975e\u5e38\u6709\u7528\ndynamic clay3 = Clay.Parse(@"{""foo"":""json"", ""bar"":100, ""nest"":{ ""foobar"":true } }");\n')),(0,i.kt)("h3",{id:"2932-\u8bfb\u53d6\u83b7\u53d6\u5c5e\u6027"},"29.3.2 \u8bfb\u53d6/\u83b7\u53d6\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    }\n});\n\nvar r1 = clay.Foo; // "json" - string\u7c7b\u578b\nvar r2 = clay.Bar; // 100 - double\u7c7b\u578b\nvar r3 = clay.Nest.Foobar; // true - bool\u7c7b\u578b\nvar r4 = clay["Nest"]["Foobar"]; // \u8fd8\u53ef\u4ee5\u548c Javascript \u4e00\u6837\u901a\u8fc7\u7d22\u5f15\u5668\u83b7\u53d6\n')),(0,i.kt)("h3",{id:"2933-\u65b0\u589e\u5c5e\u6027"},"29.3.3 \u65b0\u589e\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    }\n});\n\n// \u65b0\u589e\nclay.Arr = new string[] { "NOR", "XOR" }; // \u6dfb\u52a0\u4e00\u4e2a\u6570\u7ec4\nclay.Obj1 = new City { }; // \u65b0\u589e\u4e00\u4e2a\u5b9e\u4f8b\u5bf9\u8c61\nclay.Obj2 = new { Foo = "abc", Bar = 100 }; // \u65b0\u589e\u4e00\u4e2a\u533f\u540d\u7c7b\n')),(0,i.kt)("h3",{id:"2934-\u66f4\u65b0\u5c5e\u6027\u503c"},"29.3.4 \u66f4\u65b0\u5c5e\u6027\u503c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    }\n});\n\n// \u66f4\u65b0\nclay.Foo = "Furion";\nclay["Nest"].Foobar = false;\nclay.Nest["Foobar"] = true;\n')),(0,i.kt)("h3",{id:"2935-\u5220\u9664\u5c5e\u6027"},"29.3.5 \u5220\u9664\u5c5e\u6027"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u5220\u9664\u64cd\u4f5c\nclay.Delete("Foo"); // \u901a\u8fc7 Delete \u65b9\u6cd5\u5220\u9664\nclay.Arr.Delete(0); // \u652f\u6301\u6570\u7ec4 Delete \u7d22\u5f15\u5220\u9664\nclay("Bar");    // \u652f\u6301\u76f4\u63a5\u901a\u8fc7\u5bf9\u8c61\u4f5c\u4e3a\u65b9\u6cd5\u5220\u9664\nclay.Arr(1);    // \u652f\u6301\u6570\u7ec4\u4f5c\u4e3a\u65b9\u6cd5\u5220\u9664\n')),(0,i.kt)("h3",{id:"2936-\u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728"},"29.3.6 \u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u5224\u65ad\u5c5e\u6027\u662f\u5426\u5b58\u5728\nvar a = clay.IsDefined("Foo"); // true\nvar b = clay.IsDefined("Foooo"); // false\nvar c = clay.Foo(); // true\nvar d = clay.Foooo(); // false;\n')),(0,i.kt)("h3",{id:"2937-\u904d\u5386\u5bf9\u8c61"},"29.3.7 \u904d\u5386\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u904d\u5386\u6570\u7ec4\nforeach (string item in clay.Arr)\n{\n    Console.WriteLine(item); // NOR, XOR\n}\n\n// \u904d\u5386\u6574\u4e2a\u5bf9\u8c61\u5c5e\u6027\u53ca\u503c\uff0c\u7c7b\u4f3c JavaScript \u7684 for (var p in obj)\nforeach (KeyValuePair<string, dynamic> item in clay)\n{\n    Console.WriteLine(item.Key + ":" + item.Value); // Foo:json, Bar: 100, Nest: { "Foobar":true}, Arr:["NOR","XOR"]\n}\n')),(0,i.kt)("h3",{id:"2938-\u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61"},"29.3.8 \u8f6c\u6362\u6210\u5177\u4f53\u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = new Clay();\nclay.Arr = new string[] { "Furion", "Fur" };\n\n// \u6570\u7ec4\u8f6c\u6362\u793a\u4f8b\nvar a1 = clay.Arr.Deserialize<string[]>(); // \u901a\u8fc7 Deserialize \u65b9\u6cd5\nvar a2 = (string[])clay.Arr;    // \u5f3a\u5236\u8f6c\u6362\nstring[] a3 = clay.Arr; // \u58f0\u660e\u65b9\u5f0f\n\n// \u5bf9\u8c61\u8f6c\u6362\u793a\u4f8b\nclay.City = new City { Id = 1, Name = "\u4e2d\u5c71\u5e02" };\nvar c1 = clay.City.Deserialize<City>(); // \u901a\u8fc7 Deserialize \u65b9\u6cd5\nvar c2 = (City)clay.City;    // \u5f3a\u5236\u8f6c\u6362\nCity c3 = clay.City; // \u58f0\u660e\u65b9\u5f0f\n')),(0,i.kt)("h3",{id:"2939-\u56fa\u5316\u7c98\u571f"},"29.3.9 \u56fa\u5316\u7c98\u571f"),(0,i.kt)("p",null,"\u56fa\u5316\u7c98\u571f\u5728\u5f88\u591a\u65f6\u5019\u548c\u5e8f\u5217\u5316\u5f88\u50cf\uff0c\u4f46\u662f\u5982\u679c\u76f4\u63a5\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Deserialize<object>")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"Deserialize<dynamic>")," \u65e0\u6cd5\u8fd4\u56de\u5b9e\u9645\u7c7b\u578b\uff0c\u6240\u4ee5\u5c31\u6709\u4e86\u56fa\u5316\u7c7b\u578b\u7684\u529f\u80fd\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"// \u8fd4\u56de object\nvar obj = clay.Solidify();\n\n// \u8fd4\u56de dynamic\nvar obj1 = clay.Solidify<dynamic>();\n\n// \u8fd4\u56de\u5176\u4ed6\u4efb\u610f\u7c7b\u578b\nvar obj2 = clay.Solidify<City>();\n")),(0,i.kt)("h3",{id:"29310-\u8f93\u51fa-json"},"29.3.10 \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"h3"},"JSON")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u8f93\u51fa JSON\nvar json = clay.ToString(); // "{\\"Foo\\":\\"json\\",\\"Bar\\":100,\\"Nest\\":{\\"Foobar\\":true},\\"Arr\\":[\\"NOR\\",\\"XOR\\"]}"\n')),(0,i.kt)("h3",{id:"29311-\u8f93\u51fa-xml-\u5bf9\u8c61"},"29.3.11 \u8f93\u51fa ",(0,i.kt)("inlineCode",{parentName:"h3"},"XML")," \u5bf9\u8c61"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = Clay.Object(new\n{\n    Foo = "json",\n    Bar = 100,\n    Nest = new\n    {\n        Foobar = true\n    },\n    Arr = new string[] { "NOR", "XOR" }\n});\n\n// \u8f93\u51fa XElement\nvar xml = clay.XmlElement;\n')),(0,i.kt)("h3",{id:"29312-\u5173\u952e\u5b57\u5904\u7406"},"29.3.12 \u5173\u952e\u5b57\u5904\u7406"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'dynamic clay = new Clay();\nclay.@int = 1;\nclay.@event = "\u4e8b\u4ef6";\n')),(0,i.kt)("h2",{id:"294-\u53cd\u9988\u4e0e\u5efa\u8bae"},"29.4 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}u.isMDXComponent=!0}}]);