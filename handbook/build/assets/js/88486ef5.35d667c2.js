"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[3201],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=l(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,p(p({ref:t},s),{},{components:n})):a.createElement(k,p({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,p=new Array(i);p[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8921:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),p=["components"],o={id:"object-mapper",title:"13. \u5bf9\u8c61\u6570\u636e\u6620\u5c04",sidebar_label:"13. \u5bf9\u8c61\u6570\u636e\u6620\u5c04 Mapper"},d=void 0,l={unversionedId:"object-mapper",id:"object-mapper",isDocsHomePage:!1,title:"13. \u5bf9\u8c61\u6570\u636e\u6620\u5c04",description:"13.1 \u5bf9\u8c61\u6620\u5c04",source:"@site/docs/object-mapper.mdx",sourceDirName:".",slug:"/object-mapper",permalink:"/furion/docs/next/object-mapper",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/docs/object-mapper.mdx",version:"current",lastUpdatedBy:"spot_kal",lastUpdatedAt:1626175790,formattedLastUpdatedAt:"2021/7/13",frontMatter:{id:"object-mapper",title:"13. \u5bf9\u8c61\u6570\u636e\u6620\u5c04",sidebar_label:"13. \u5bf9\u8c61\u6570\u636e\u6620\u5c04 Mapper"},sidebar:"docs",previous:{title:"12. \u4f9d\u8d56\u6ce8\u5165/\u63a7\u5236\u53cd\u8f6c",permalink:"/furion/docs/next/dependency-injection"},next:{title:"14. \u5206\u5e03\u5f0f\u7f13\u5b58",permalink:"/furion/docs/next/cache"}},s=[{value:"13.1 \u5bf9\u8c61\u6620\u5c04",id:"131-\u5bf9\u8c61\u6620\u5c04",children:[]},{value:"13.2 \u5148\u770b\u4f8b\u5b50",id:"132-\u5148\u770b\u4f8b\u5b50",children:[]},{value:"13.3 <code>Mapster</code> \u4f7f\u7528",id:"133-mapster-\u4f7f\u7528",children:[{value:"13.3.1 \u5feb\u901f\u5165\u95e8",id:"1331-\u5feb\u901f\u5165\u95e8",children:[]},{value:"13.3.2 \u81ea\u5b9a\u4e49\u6620\u5c04\u89c4\u5219",id:"1332-\u81ea\u5b9a\u4e49\u6620\u5c04\u89c4\u5219",children:[]},{value:"13.3.3 \u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f",id:"1333-\u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f",children:[]},{value:"13.3.4 \u548c <code>EFCore</code> \u914d\u5408",id:"1334-\u548c-efcore-\u914d\u5408",children:[]}]},{value:"13.4 \u5168\u5c40\u9ed8\u8ba4\u914d\u7f6e",id:"134-\u5168\u5c40\u9ed8\u8ba4\u914d\u7f6e",children:[]},{value:"13.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"135-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],c={toc:s};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"131-\u5bf9\u8c61\u6620\u5c04"},"13.1 \u5bf9\u8c61\u6620\u5c04"),(0,i.kt)("p",null,"\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7684\u6570\u636e\u6839\u636e\u7279\u5b9a\u89c4\u5219\u6279\u91cf\u6620\u5c04\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u51cf\u5c11\u624b\u5de5\u64cd\u4f5c\u548c\u964d\u4f4e\u4eba\u4e3a\u51fa\u9519\u7387\u3002\u5982\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"DTO")," \u5bf9\u8c61\u6620\u5c04\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"Entity")," \u5b9e\u4f53\u4e2d\uff0c\u53cd\u4e4b\u4ea6\u7136\u3002"),(0,i.kt)("h2",{id:"132-\u5148\u770b\u4f8b\u5b50"},"13.2 \u5148\u770b\u4f8b\u5b50"),(0,i.kt)("p",null,"\u5728\u8fc7\u53bb\uff0c\u6211\u4eec\u9700\u8981\u5c06\u4e00\u4e2a\u5bf9\u8c61\u7684\u503c\u8f6c\u6362\u5230\u53e6\u4e00\u4e2a\u5bf9\u8c61\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u8fd9\u6837\u505a\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},'var entity = repository.Find(1);\n\nvar dto = new Dto();\ndto.Id = entity.Id;\ndto.Name = entity.Name;\ndto.Age = entity.Age;\ndto.Address = entity.Address;\ndto.FullName = entity.FirstName + entity.LastName;\ndto.IdCard = entity.IdCard.Replace("1234", "****");\n')),(0,i.kt)("p",null,"\u4e0a\u9762\u7684\u4f8b\u5b50\u4f3c\u4e4e\u6ca1\u6709\u4efb\u4f55\u95ee\u9898\uff0c\u4f46\u662f\u5982\u679c\u5f88\u591a\u5730\u65b9\u9700\u8981\u8fd9\u6837\u7684\u8d4b\u503c\u64cd\u4f5c\u3001\u6216\u8005\u76f8\u540c\u7684\u8d4b\u503c\u64cd\u4f5c\u5728\u591a\u4e2a\u5730\u65b9\u4f7f\u7528\uff0c\u53c8\u6216\u8005\u4e00\u4e2a\u7c7b\u4e2d\u542b\u6709\u975e\u5e38\u591a\u7684\u5c5e\u6027\u6216\u81ea\u5b9a\u4e49\u8d4b\u503c\u64cd\u4f5c\u3002\u90a3\u4e48\u8fd9\u6837\u7684\u64cd\u4f5c\u6548\u7387\u6781\u4f4e\uff0c\u5bb9\u6613\u51fa\u9519\uff0c\u4e14\u4ee3\u7801\u975e\u5e38\u81c3\u80bf\u548c\u5197\u4f59\u3002"),(0,i.kt)("p",null,"\u6240\u4ee5\uff0c\u5b9e\u73b0\u81ea\u52a8\u6620\u5c04\u8d4b\u503c\u548c\u652f\u6301\u7279\u6b8a\u914d\u7f6e\u7684\u9700\u6c42\u5c31\u6709\u4e86\u3002\u76ee\u524d ",(0,i.kt)("inlineCode",{parentName:"p"},"C#")," \u5e73\u53f0\u6709\u4e24\u4e2a\u4f18\u79c0\u7684\u5bf9\u8c61\u6620\u5c04\u5de5\u5177\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Mapster")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"AutoMapper"),"\u3002",(0,i.kt)("strong",{parentName:"p"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"strong"},"Furion")," \u6846\u67b6\u4e2d\uff0c\u63a8\u8350\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/MapsterMapper/Mapster"},"Mapster"),"\uff0c",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/MapsterMapper/Mapster"},"Mapster")," \u662f\u4e00\u6b3e\u6781\u6613\u4f7f\u7528\u4e14\u8d85\u9ad8\u6027\u80fd\u7684\u5bf9\u8c61\u6620\u5c04\u6846\u67b6\u3002")),(0,i.kt)("h2",{id:"133-mapster-\u4f7f\u7528"},"13.3 ",(0,i.kt)("inlineCode",{parentName:"h2"},"Mapster")," \u4f7f\u7528"),(0,i.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapster")," \u63d0\u4f9b\u7684\u5bf9\u8c61\u6620\u5c04\u65b9\u6cd5\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Adapt")," \u65b9\u6cd5\u6539\u9020\u4e0a\u9762\u7684\u4f8b\u5b50\uff1a"),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u5b89\u88c5\u62d3\u5c55\u5305")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Core")," \u5c42\u5b89\u88c5 ",(0,i.kt)("inlineCode",{parentName:"p"},"Furion.Extras.ObjectMapper.Mapster")," \u62d3\u5c55\u5305\uff0c\u65e0\u9700\u624b\u52a8\u8c03\u7528\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4f1a\u81ea\u52a8\u52a0\u8f7d\u5e76\u8c03\u7528\u3002"))),(0,i.kt)("h3",{id:"1331-\u5feb\u901f\u5165\u95e8"},"13.3.1 \u5feb\u901f\u5165\u95e8"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var entity = repository.Find(1);\nvar dto = entity.Adapt<Dto>();\n")),(0,i.kt)("p",null,"\u4ec5\u4ec5\u4e00\u884c\u4ee3\u7801\u5c31\u53ef\u4ee5\u5b9e\u73b0 ",(0,i.kt)("inlineCode",{parentName:"p"},"entity -> dto")," \u7684\u8f6c\u6362\uff0c\u5982\u679c\u6d89\u53ca\u5230\u8d4b\u503c\u7684\u590d\u5236\u64cd\u4f5c\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"dto.FullName")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"dto.IdCard"),"\uff0c\u6211\u4eec\u53ea\u9700\u8981\u81ea\u5b9a\u4e49\u6620\u5c04\u89c4\u5219\u7c7b\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"1332-\u81ea\u5b9a\u4e49\u6620\u5c04\u89c4\u5219"},"13.3.2 \u81ea\u5b9a\u4e49\u6620\u5c04\u89c4\u5219"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"{1,6,10-12}","{1,6,10-12}":!0},'using Mapster;\nusing System;\n\nnamespace Furion.Application\n{\n    public class Mapper : IRegister\n    {\n        public void Register(TypeAdapterConfig config)\n        {\n            config.ForType<Entity, Dto>()\n                .Map(dest => dest.FullName, src => src.FirstName + src.LastName)\n                .Map(dest => dest.IdCard, src => src.IdCard.Replace("1234", "****"));\n        }\n    }\n}\n')),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5c0f\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8be5\u6620\u5c04\u6587\u4ef6 ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapper.cs")," \u53ef\u4ee5\u653e\u5728\u4efb\u4f55\u9879\u76ee\u6216\u6587\u4ef6\u5939\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u4f1a\u5728\u7a0b\u5e8f\u542f\u52a8\u7684\u65f6\u5019\u81ea\u52a8\u626b\u63cf\u5e76\u6ce8\u5165\u914d\u7f6e\u3002"))),(0,i.kt)("h3",{id:"1333-\u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f"},"13.3.3 \u4f9d\u8d56\u6ce8\u5165\u65b9\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mapster")," \u9664\u4e86\u63d0\u4f9b ",(0,i.kt)("inlineCode",{parentName:"p"},"Adapt")," \u62d3\u5c55\u65b9\u6cd5\u4ee5\u5916\uff0c\u540c\u65f6\u8fd8\u63d0\u4f9b\u4f9d\u8d56\u6ce8\u5165\u7684\u65b9\u5f0f\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"public  Person(IMapper mapper)\n{\n  var dto =  _mapper.Map<Dto>(entity);\n}\n")),(0,i.kt)("h3",{id:"1334-\u548c-efcore-\u914d\u5408"},"13.3.4 \u548c ",(0,i.kt)("inlineCode",{parentName:"h3"},"EFCore")," \u914d\u5408"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Mapster")," \u8fd8\u63d0\u4f9b\u4e86 ",(0,i.kt)("inlineCode",{parentName:"p"},"ProjectToType")," Linq \u62d3\u5c55\u65b9\u6cd5\u51cf\u5c11\u6211\u4eec\u624b\u52a8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Select")," \u64cd\u4f5c\uff0c\u5982\uff1a"),(0,i.kt)("p",null,"\u6b63\u5e38\u7684\u64cd\u4f5c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var destinations = context.Sources\n        .Select(p => new Destination {\n            Id = p.Id,\n            Name = p.Name,\n            Surname = p.Surname,\n            ....\n        })\n        .ToList();\n")),(0,i.kt)("p",null,"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapster")," \u4e4b\u540e\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"}," var destinations = context.Sources.ProjectToType<Destination>().ToList();\n")),(0,i.kt)("h2",{id:"134-\u5168\u5c40\u9ed8\u8ba4\u914d\u7f6e"},"13.4 \u5168\u5c40\u9ed8\u8ba4\u914d\u7f6e"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Furion")," \u63d0\u4f9b\u5168\u5c40\u9ed8\u8ba4\u6620\u5c04\u914d\u7f6e\u9009\u9879 ",(0,i.kt)("inlineCode",{parentName:"p"},"TypeAdapterConfig.GlobalSettings.Default"),"\uff0c\u53ef\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"Startup")," \u4e2d\u914d\u7f6e\u5373\u53ef\uff0c\u5982\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"TypeAdapterConfig.GlobalSettings.Default\n    .PreserveReference(true);\n")),(0,i.kt)("h2",{id:"135-\u53cd\u9988\u4e0e\u5efa\u8bae"},"13.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,i.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))),(0,i.kt)("hr",null),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e86\u89e3\u66f4\u591a")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u60f3\u4e86\u89e3\u66f4\u591a ",(0,i.kt)("inlineCode",{parentName:"p"},"Mapster")," \u77e5\u8bc6\u53ef\u67e5\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MapsterMapper/Mapster/wiki"},"Mapster - Wiki")," \u6587\u6863\u3002"))))}m.isMDXComponent=!0}}]);