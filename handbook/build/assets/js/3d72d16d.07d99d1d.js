"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[4638],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return t?a.createElement(k,s(s({ref:n},c),{},{components:t})):a.createElement(k,s({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,s=new Array(o);s[0]=d;var r={};for(var l in n)hasOwnProperty.call(n,l)&&(r[l]=n[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7712:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return r},metadata:function(){return p},toc:function(){return u}});var a=t(3117),i=t(102),o=(t(7294),t(3905)),s=(t(4996),["components"]),r={id:"sesssion-state",title:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",sidebar_label:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406"},l=void 0,p={unversionedId:"sesssion-state",id:"sesssion-state",title:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",description:"32.1 \u5173\u4e8e\u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",source:"@site/docs/sesssion-state.mdx",sourceDirName:".",slug:"/sesssion-state",permalink:"/docs/sesssion-state",draft:!1,editUrl:"https://gitee.com/dotnetchina/Furion/tree/v4/handbook/docs/sesssion-state.mdx",tags:[],version:"current",lastUpdatedBy:"MonkSoul",lastUpdatedAt:1651894493,formattedLastUpdatedAt:"May 7, 2022",frontMatter:{id:"sesssion-state",title:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",sidebar_label:"32. \u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406"},sidebar:"docs",previous:{title:"31. \u865a\u62df\u6587\u4ef6\u7cfb\u7edf\uff08\u4e0a\u4f20\u4e0b\u8f7d\uff09",permalink:"/docs/file-provider"},next:{title:"33. IPC \u8fdb\u7a0b\u901a\u4fe1",permalink:"/docs/ipc"}},c={},u=[{value:"32.1 \u5173\u4e8e\u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",id:"321-\u5173\u4e8e\u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406",level:2},{value:"32.2 \u5982\u4f55\u4f7f\u7528",id:"322-\u5982\u4f55\u4f7f\u7528",level:2},{value:"32.2.1 <code>Cookie</code> \u4f7f\u7528",id:"3221-cookie-\u4f7f\u7528",level:3},{value:"32.2.2 <code>Session</code> \u4f7f\u7528",id:"3222-session-\u4f7f\u7528",level:3},{value:"32.2.3 <code>Query Strings</code> \u4f7f\u7528",id:"3223-query-strings-\u4f7f\u7528",level:3},{value:"32.2.4 <code>HttpContext.Items</code> \u4f7f\u7528",id:"3224-httpcontextitems-\u4f7f\u7528",level:3},{value:"32.2.5 <code>Cache</code> \u65b9\u5f0f",id:"3225-cache-\u65b9\u5f0f",level:3},{value:"32.2.6 <code>AsyncLocal&lt;T&gt;</code> \u65b9\u5f0f",id:"3226-asynclocalt-\u65b9\u5f0f",level:3},{value:"32.3 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"323-\u53cd\u9988\u4e0e\u5efa\u8bae",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"321-\u5173\u4e8e\u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406"},"32.1 \u5173\u4e8e\u4f1a\u8bdd\u548c\u72b6\u6001\u7ba1\u7406"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," \u662f\u65e0\u72b6\u6001\u7684\u534f\u8bae\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bf7\u6c42\u662f\u4e0d\u4fdd\u7559\u7528\u6237\u503c\u7684\u72ec\u7acb\u6d88\u606f\u3002\u4f46\u662f\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u4fdd\u7559\u8bf7\u6c42\u7528\u6237\u6570\u636e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cookie"),"\uff1a\u901a\u5e38\u5b58\u50a8\u5728\u5ba2\u6237\u7aef\u7684\u6570\u636e\uff0c\u8bf7\u6c42\u65f6\u5e26\u56de\u670d\u52a1\u7aef"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Session"),"\uff1a\u5b58\u50a8\u5728\u670d\u52a1\u7aef\u7684\u6570\u636e\uff08\u53ef\u4ee5\u5728\u5b58\u50a8\u5728\u5185\u5b58\u3001\u8fdb\u7a0b\u7b49\u4ecb\u8d28\u4e2d\uff09"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Query Strings"),"\uff1a\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"Http")," \u8bf7\u6c42\u5730\u5740\u53c2\u6570\u5171\u4eab"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"HttpContext.Items"),"\uff1a\u5b58\u50a8\u5728\u670d\u52a1\u7aef\uff0c\u53ea\u5728\u8bf7\u6c42\u58f0\u660e\u5468\u671f\u5185\u4f7f\u7528\uff0c\u8bf7\u6c42\u7ed3\u675f\u81ea\u52a8\u9500\u6bc1"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Cache"),"\uff1a\u670d\u52a1\u7aef\u7f13\u5b58\uff0c\u5305\u62ec\u5185\u5b58\u7f13\u5b58\u3001\u5206\u5e03\u5f0f\u5185\u5b58\u7f13\u5b58\u3001IO \u7f13\u5b58\u3001\u5e8f\u5217\u5316\u7f13\u5b58\u4ee5\u53ca\u6570\u636e\u5e93\u7f13\u5b58"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AsyncLocal<T>"),"\uff1a\u901a\u8fc7\u5f02\u6b65\u63a7\u5236\u6d41\u5b9e\u73b0\u672c\u5730\u6570\u636e\u5171\u4eab\uff0c\u8de8\u7ebf\u7a0b")),(0,o.kt)("h2",{id:"322-\u5982\u4f55\u4f7f\u7528"},"32.2 \u5982\u4f55\u4f7f\u7528"),(0,o.kt)("h3",{id:"3221-cookie-\u4f7f\u7528"},"32.2.1 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Cookie")," \u4f7f\u7528"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookie")," \u975e\u5e38\u7b80\u5355\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u8bfb\u53d6 Cookies\nvar value = httpContext.Request.Cookies["key"];\n\n// \u8bbe\u7f6e Cookies\nvar option = new CookieOptions();\noption.Expires = DateTime.Now.AddMilliseconds(10);\nhttpContext.Response.Cookies.Append(key, value, option);\n\n// \u5220\u9664 Cookies\nhttpContext.Response.Cookies.Delete(key);\n')),(0,o.kt)("admonition",{title:"\u7279\u522b\u8bf4\u660e",type:"note"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"httpContext")," \u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"IHttpContextAccessor")," \u83b7\u53d6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"App.HttpContext")," \u83b7\u53d6\u3002")),(0,o.kt)("p",null,"\u6211\u4eec\u8fd8\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cookie")," \u5b9e\u73b0\u6388\u6743\u529f\u80fd\u53ca\u5355\u70b9\u767b\u5f55\uff08SSO\uff09\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/aspnet/core/security/cookie-sharing?view=aspnetcore-5.0"},"\u7f51\u7ad9\u5171\u4eab Cookie")),(0,o.kt)("h3",{id:"3222-session-\u4f7f\u7528"},"32.2.2 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Session")," \u4f7f\u7528"),(0,o.kt)("p",null,"\u5728\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," \u4e4b\u524d\uff0c\u5fc5\u987b\u6ce8\u518c ",(0,o.kt)("inlineCode",{parentName:"p"},"Session")," \u670d\u52a1\uff1a\uff08\u5982\u679c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers  {1,5,7-12,32,37,39}",showLineNumbers:!0,"":!0,"{1,5,7-12,32,37,39}":!0},'public class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n        // services.AddDistributedMemoryCache(); \u6846\u67b6\u5185\u90e8\u5df2\u7ecf\u9ed8\u8ba4\u6ce8\u518c\n\n        services.AddSession(options =>\n        {\n            options.IdleTimeout = TimeSpan.FromSeconds(10);\n            options.Cookie.HttpOnly = true;\n            options.Cookie.IsEssential = true;\n        }); // \u6ce8\u610f\u5728\u63a7\u5236\u5668\u4e4b\u524d\u6ce8\u518c\uff01\uff01\uff01\uff01\n\n        services.AddControllersWithViews();\n    }\n\n    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)\n    {\n        if (env.IsDevelopment())\n        {\n            app.UseDeveloperExceptionPage();\n        }\n        else\n        {\n            app.UseExceptionHandler("/Home/Error");\n            app.UseHsts();\n        }\n\n        app.UseHttpsRedirection();\n        app.UseStaticFiles();\n\n        app.UseRouting();\n\n        app.UseAuthentication();\n        app.UseAuthorization();\n\n        app.UseSession();\n\n        app.UseEndpoints(endpoints =>\n        {\n            endpoints.MapDefaultControllerRoute();\n            endpoints.MapRazorPages();\n        });\n    }\n}\n')),(0,o.kt)("admonition",{title:"\u4e2d\u95f4\u4ef6\u6ce8\u518c\u987a\u5e8f",type:"important"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"app.UseSession()")," \u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"app.UseRouting()")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"app.UseEndpoints()")," ",(0,o.kt)("strong",{parentName:"p"},"\u4e4b\u95f4"),"\u6ce8\u518c\uff01")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5e38\u89c1\u4f8b\u5b50\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u8bfb\u53d6 Session\nvar byteArr = httpContext.Session.Get("key"); // \u8fd4\u56de byte[]\nvar str = httpContext.Session.GetString("key");   // \u8fd4\u56de string[]\nvar num = httpContext.Session.GetInt32("key");    // \u8fd4\u56de int\n\n// \u8bbe\u7f6e Session\nhttpContext.Session.SetString("key", "value");  // \u8bbe\u7f6e\u5b57\u7b26\u4e32\nhttpContext.Session.SetInt32("key", 1); // \u8bbe\u7f6e int \u7c7b\u578b\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u81ea\u5b9a\u4e49\u8bbe\u7f6e\u4efb\u610f\u7c7b\u578b\u62d3\u5c55\uff1a"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"public static class SessionExtensions\n{\n    public static void Set<T>(this ISession session, string key, T value)\n    {\n        session.SetString(key, JsonSerializer.Serialize(value));\n    }\n\n    public static T Get<T>(this ISession session, string key)\n    {\n        var value = session.GetString(key);\n        return value == null ? default : JsonSerializer.Deserialize<T>(value);\n    }\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9632\u6b62 ",(0,o.kt)("inlineCode",{parentName:"li"},"Session ID")," \u6539\u53d8\u6216 ",(0,o.kt)("inlineCode",{parentName:"li"},"Session")," \u5931\u6548")),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Startup.cs")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"ConfigureServices")," \u914d\u7f6e\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"services.Configure<CookiePolicyOptions>(options =>\n{\n \u3000\u3000options.CheckConsentNeeded = context => false; // \u9ed8\u8ba4\u4e3atrue\uff0c\u6539\u4e3afalse\n\u3000\u3000 options.MinimumSameSitePolicy = SameSiteMode.None;\n});\n")),(0,o.kt)("h3",{id:"3223-query-strings-\u4f7f\u7528"},"32.2.3 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Query Strings")," \u4f7f\u7528"),(0,o.kt)("p",null,"\u8be5\u65b9\u5f0f\u4f7f\u7528\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700 ",(0,o.kt)("inlineCode",{parentName:"p"},'httpContext.Request.Query["key"]')," \u5373\u53ef\u3002"),(0,o.kt)("h3",{id:"3224-httpcontextitems-\u4f7f\u7528"},"32.2.4 ",(0,o.kt)("inlineCode",{parentName:"h3"},"HttpContext.Items")," \u4f7f\u7528"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HttpContext")," \u5bf9\u8c61\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"Items")," \u96c6\u5408\u5c5e\u6027\uff0c\u53ef\u4ee5\u8ba9\u6211\u4eec\u5728\u5355\u6b21\u8bf7\u6c42\u95f4\u5171\u4eab\u6570\u636e\uff0c\u8bf7\u6c42\u7ed3\u675f\u7acb\u5373\u9500\u6bc1\uff0c\u53ef\u4ee5\u5b58\u50a8\u4efb\u4f55\u6570\u636e\u3002\u4f7f\u7528\u4e5f\u975e\u5e38\u7b80\u5355\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'// \u8bfb\u53d6\nvar value = httpContext.Items["key"];\n\n// \u6dfb\u52a0\nhttpContext.Items["key"] = "\u4efb\u4f55\u503c\u5305\u62ec\u5bf9\u8c61";\n\n// \u5220\u9664\nhttpContext.Items.Remove("key");\n')),(0,o.kt)("h3",{id:"3225-cache-\u65b9\u5f0f"},"32.2.5 ",(0,o.kt)("inlineCode",{parentName:"h3"},"Cache")," \u65b9\u5f0f"),(0,o.kt)("p",null,"\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"/docs/cache"},"\u5206\u5e03\u5f0f\u7f13\u5b58")," \u6587\u6863"),(0,o.kt)("h3",{id:"3226-asynclocalt-\u65b9\u5f0f"},"32.2.6 ",(0,o.kt)("inlineCode",{parentName:"h3"},"AsyncLocal<T>")," \u65b9\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AsyncLocal<T>")," \u53ef\u4ee5\u8bf4\u662f\u8fdb\u7a0b\u5185\u5171\u4eab\u6570\u636e\u7684\u5927\u5229\u5668\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u7c7b\u5b9e\u73b0\u8de8\u7ebf\u7a0b\u3001\u5f02\u6b65\u63a7\u5236\u6d41\u4e2d\u5171\u4eab\u6570\u636e\uff0c\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},"using System;\nusing System.Threading;\nusing System.Threading.Tasks;\n\nclass Example\n{\n    static AsyncLocal<string> _asyncLocalString = new AsyncLocal<string>();\n\n    static ThreadLocal<string> _threadLocalString = new ThreadLocal<string>();\n\n    static async Task AsyncMethodA()\n    {\n        // Start multiple async method calls, with different AsyncLocal values.\n        // We also set ThreadLocal values, to demonstrate how the two mechanisms differ.\n        _asyncLocalString.Value = \"Value 1\";\n        _threadLocalString.Value = \"Value 1\";\n        var t1 = AsyncMethodB(\"Value 1\");\n\n        _asyncLocalString.Value = \"Value 2\";\n        _threadLocalString.Value = \"Value 2\";\n        var t2 = AsyncMethodB(\"Value 2\");\n\n        // Await both calls\n        await t1;\n        await t2;\n     }\n\n    static async Task AsyncMethodB(string expectedValue)\n    {\n        Console.WriteLine(\"Entering AsyncMethodB.\");\n        Console.WriteLine(\"   Expected '{0}', AsyncLocal value is '{1}', ThreadLocal value is '{2}'\",\n                          expectedValue, _asyncLocalString.Value, _threadLocalString.Value);\n        await Task.Delay(100);\n        Console.WriteLine(\"Exiting AsyncMethodB.\");\n        Console.WriteLine(\"   Expected '{0}', got '{1}', ThreadLocal value is '{2}'\",\n                          expectedValue, _asyncLocalString.Value, _threadLocalString.Value);\n    }\n\n    static async Task Main(string[] args)\n    {\n        await AsyncMethodA();\n    }\n}\n// The example displays the following output:\n//   Entering AsyncMethodB.\n//      Expected 'Value 1', AsyncLocal value is 'Value 1', ThreadLocal value is 'Value 1'\n//   Entering AsyncMethodB.\n//      Expected 'Value 2', AsyncLocal value is 'Value 2', ThreadLocal value is 'Value 2'\n//   Exiting AsyncMethodB.\n//      Expected 'Value 2', got 'Value 2', ThreadLocal value is ''\n//   Exiting AsyncMethodB.\n//      Expected 'Value 1', got 'Value 1', ThreadLocal value is ''\n")),(0,o.kt)("p",null,"\u4e3a\u4e86\u7b80\u5316\u64cd\u4f5c\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"Furion v2.18+")," \u7248\u672c\u5b9e\u73b0\u4e86\u8f7b\u91cf\u7ea7\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"CallContext")," \u9759\u6001\u7c7b\uff0c\u5185\u90e8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncLocal<T>")," \u5b9e\u73b0\uff0c\u4f7f\u7528\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cs",metastring:"showLineNumbers",showLineNumbers:!0},'CallContext.SetLocalValue("name", "Furion");\nCallContext.GetLocalValue("name");\n\nCallContext<int>.SetLocalValue("count", 1);\nCallContext<int>.GetLocalValue("count");\n')),(0,o.kt)("p",null,"\u4e86\u89e3\u66f4\u591a ",(0,o.kt)("inlineCode",{parentName:"p"},"AsyncLocal<T>")," \u77e5\u8bc6\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/zh-cn/dotnet/api/system.threading.asynclocal-1?redirectedfrom=MSDN&view=net-5.0"},"https://docs.microsoft.com/zh-cn/dotnet/api/system.threading.asynclocal-1?redirectedfrom=MSDN&view=net-5.0")),(0,o.kt)("h2",{id:"323-\u53cd\u9988\u4e0e\u5efa\u8bae"},"32.3 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,o.kt)("admonition",{title:"\u4e0e\u6211\u4eec\u4ea4\u6d41",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"\u7ed9 Furion \u63d0 ",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002")))}m.isMDXComponent=!0}}]);