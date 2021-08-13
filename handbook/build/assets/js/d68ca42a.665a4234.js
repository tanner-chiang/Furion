"use strict";(self.webpackChunkfurion=self.webpackChunkfurion||[]).push([[5714],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},k=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(t),m=r,u=k["".concat(c,".").concat(m)]||k[m]||p[m]||a;return t?o.createElement(u,i(i({ref:n},d),{},{components:t})):o.createElement(u,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=k;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}k.displayName="MDXCreateElement"},4069:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return k}});var o=t(7462),r=t(3366),a=(t(7294),t(3905)),i=(t(4996),["components"]),l={id:"deploy-docker-auto",title:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72",sidebar_label:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72"},c=void 0,s={unversionedId:"deploy-docker-auto",id:"version-v2/deploy-docker-auto",isDocsHomePage:!1,title:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72",description:"35.1.1 \u5173\u4e8e\u5168 Docker \u73af\u5883\u90e8\u7f72",source:"@site/versioned_docs/version-v2/deploy-docker-auto.mdx",sourceDirName:".",slug:"/deploy-docker-auto",permalink:"/furion/docs/deploy-docker-auto",editUrl:"https://gitee.com/dotnetchina/Furion/tree/master/handbook/versioned_docs/version-v2/deploy-docker-auto.mdx",version:"v2",frontMatter:{id:"deploy-docker-auto",title:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72",sidebar_label:"35.1 Docker \u73af\u5883\u6301\u7eed\u90e8\u7f72"},sidebar:"version-v2/docs",previous:{title:"34.4 \u4e8c\u7ea7\u865a\u62df\u76ee\u5f55\u90e8\u7f72",permalink:"/furion/docs/virtual-deploy"},next:{title:"35.2 \u6301\u7eed\u90e8\u7f72\u96c6\u6210",permalink:"/furion/docs/devops"}},d=[{value:"35.1.1 \u5173\u4e8e\u5168 <code>Docker</code> \u73af\u5883\u90e8\u7f72",id:"3511-\u5173\u4e8e\u5168-docker-\u73af\u5883\u90e8\u7f72",children:[]},{value:"35.1.2 \u5b89\u88c5 <code>Docker</code> \u7248 <code>Jenkins</code>",id:"3512-\u5b89\u88c5-docker-\u7248-jenkins",children:[{value:"35.1.2.1 \u4f7f\u7528 Dockerfile \u5236\u4f5c\u955c\u50cf",id:"35121-\u4f7f\u7528-dockerfile-\u5236\u4f5c\u955c\u50cf",children:[]},{value:"35.1.2.2 \u8fd0\u884c <code>Jenkins:dotnet</code> \u955c\u50cf",id:"35122-\u8fd0\u884c-jenkinsdotnet-\u955c\u50cf",children:[]}]},{value:"35.1.3 <code>Jenkins</code> \u7684\u81ea\u52a8\u5316\u90e8\u7f72",id:"3513-jenkins-\u7684\u81ea\u52a8\u5316\u90e8\u7f72",children:[{value:"35.1.3.1 \u7f16\u5199 Shell \u811a\u672c",id:"35131-\u7f16\u5199-shell-\u811a\u672c",children:[]}]},{value:"35.1.4 <code>Jenkins</code> \u7684\u81ea\u52a8\u5316\u8fdc\u7a0b\u90e8\u7f72",id:"3514-jenkins-\u7684\u81ea\u52a8\u5316\u8fdc\u7a0b\u90e8\u7f72",children:[{value:"35.1.4.1 \u5b89\u88c5\u63d2\u4ef6",id:"35141-\u5b89\u88c5\u63d2\u4ef6",children:[]},{value:"35.1.4.2 \u914d\u7f6e",id:"35142-\u914d\u7f6e",children:[]},{value:"35.1.4.3 \u5199\u811a\u672c",id:"35143-\u5199\u811a\u672c",children:[]},{value:"35.1.4.4 \u6784\u5efa\u540e\u64cd\u4f5c\uff08\u5173\u952e\uff09",id:"35144-\u6784\u5efa\u540e\u64cd\u4f5c\uff08\u5173\u952e\uff09",children:[]},{value:"35.1.4.5 \u8fdc\u7a0b\u6267\u884c",id:"35145-\u8fdc\u7a0b\u6267\u884c",children:[]}]},{value:"35.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae",id:"3515-\u53cd\u9988\u4e0e\u5efa\u8bae",children:[]}],p={toc:d};function k(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"3511-\u5173\u4e8e\u5168-docker-\u73af\u5883\u90e8\u7f72"},"35.1.1 \u5173\u4e8e\u5168 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Docker")," \u73af\u5883\u90e8\u7f72"),(0,a.kt)("p",null,"\u5229\u7528\u62e5\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},".NET")," \u73af\u5883\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins"),"\uff0c\u8fdb\u884c\u6301\u7eed\u5316\u90e8\u7f72"),(0,a.kt)("h2",{id:"3512-\u5b89\u88c5-docker-\u7248-jenkins"},"35.1.2 \u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Docker")," \u7248 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Jenkins")),(0,a.kt)("p",null,"\u6b63\u5e38\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," \u4e2d\u62c9\u53d6\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins:lts")," \u662f\u65e0\u6cd5\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," \u547d\u4ee4\u7684\uff08\u5c31\u7b97\u4f60\u5bbf\u4e3b\u673a\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," \u73af\u5883\u3001",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," \u4e2d\u4e5f\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," \u73af\u5883\u4e5f\u4e0d\u53ef\u4ee5\uff09\uff0c\n\u6240\u4ee5\u6211\u4eec\u53ea\u80fd\u6784\u5efa\u4e00\u4e2a\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," \u7684\u955c\u50cf"),(0,a.kt)("h3",{id:"35121-\u4f7f\u7528-dockerfile-\u5236\u4f5c\u955c\u50cf"},"35.1.2.1 \u4f7f\u7528 Dockerfile \u5236\u4f5c\u955c\u50cf"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile")," \u521b\u5efa\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"dotnet")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins")," \u955c\u50cf"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u7f16\u5199 ",(0,a.kt)("inlineCode",{parentName:"li"},"Dockerfile"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# \u5c01\u88c5Jenkins\u955c\u50cf\uff08\u5e26\u6709dotnet\u73af\u5883\u7684\uff09 sdk=5.1\nFROM jenkins/jenkins:lts\nUSER root\nWORKDIR /dotnet\nRUN wget -O dotnet.tar.gz https://download.visualstudio.microsoft.com/download/pr/820db713-c9a5-466e-b72a-16f2f5ed00e2/628aa2a75f6aa270e77f4a83b3742fb8/dotnet-sdk-5.0.100-linux-x64.tar.gz\nRUN tar zxf dotnet.tar.gz -C ./\nRUN rm -rf dotnet.tar.gz\nENV PATH="${PATH}:/dotnet:/var/jenkins_home/.dotnet/tools"\nENV DOTNET_ROOT="/dotnet"\nRUN apt update -y\nRUN apt install icu-devtools vim zip unzip -y\nRUN usermod -a -G root jenkins\nUSER jenkins\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u547d\u4ee4\u89e3\u91ca")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"- 1. \u8fd9\u4e2aDocker\u955c\u50cf\u57fa\u4e8ejenkins\n- 2. \u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u4e3aroot\uff0c\u56e0\u4e3a\u540e\u9762\u5b89\u88c5\u9700\u8981\u4f7f\u7528root\n- 3. \u8bbe\u7f6e\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\u4e3adotnet\n- 4. \u4e0b\u8f7ddotnet SDK\u5305\uff0c\u4fdd\u5b58\u4e3adotnet.tar.gz\u3002\u8fd9\u91cc\u8981\u6ce8\u610f\u4e0b\u8f7d\u6b63\u786e\u7248\u672c\u7684SDK\uff0c\u53ef\u524d\u5f80\u5fae\u8f6f\u5b98\u65b9\u7f51\u7ad9\u83b7\u53d6\u4e0b\u8f7d\u94fe\u63a5\uff1ahttps://dotnet.microsoft.com/download\n- 5. \u89e3\u538bdotnet SDK\u5230\u5f53\u524d\u76ee\u5f55\uff0c\u5373/dotnet\u76ee\u5f55\n- 6. \u5220\u9664dotnet SDK\u5305\n- 7. \u628adotnet\u76ee\u5f55\u548cdotnet tools\u76ee\u5f55\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cfPATH\uff0c\u8fd9\u6837\u5c31\u53ef\u4ee5\u4f7f\u7528dotnet\u547d\u4ee4\u4e86\n- 8. \u8bbe\u7f6eDOTNET_ROOT\u53d8\u91cf\n- 9. \u66f4\u65b0\u6e90\n- 10. \u5b89\u88c5\u4e00\u4e9b\u5fc5\u9700\u7684\uff0c\u5e38\u7528\u7684\u5de5\u5177\u5305\uff0c\u5176\u4e2dicu-devtools\u662f\u8fd0\u884cdotnet\u9700\u8981\u7684\n- 11. \u4fee\u6539jenkins\u7528\u6237\u5230root\u9644\u52a0\u7ec4\n- 12. \u8bbe\u7f6e\u5f53\u524d\u7528\u6237\u4e3ajenkins\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\ud83d\udc49 \u6784\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Docker")," \u955c\u50cf ",(0,a.kt)("inlineCode",{parentName:"li"},"name=jenkins:dotnet"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"cd")," \u5230\u6839\u76ee\u5f55\u4e0b\uff08\u5fc5\u987b\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"Dockerfile"),"\uff09 \u53ea\u9700\u6784\u5efa\u547d\u4ee4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," docker build -t jenkins:dotnet .\n")),(0,a.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u7279\u522b\u6ce8\u610f")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7ed3\u5c3e ",(0,a.kt)("inlineCode",{parentName:"p"},".")," \u4e0d\u80fd\u7701\u7565"))),(0,a.kt)("h3",{id:"35122-\u8fd0\u884c-jenkinsdotnet-\u955c\u50cf"},"35.1.2.2 \u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"h3"},"Jenkins:dotnet")," \u955c\u50cf"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'docker run -d -p 8080:8080 -p 50000:50000 --name mjenkins  \\\n           --privileged=true \\\n           --restart always \\\n           -u root \\\n           -e TZ="Asia/Shanghai" \\\n           -v /mudata/jenkins:/var/jenkins_home \\\n           -v /usr/bin/docker:/usr/bin/docker \\\n           -v /var/run/docker.sock:/var/run/docker.sock \\\n           -v /mudata/webroot/:/mudata/webroot \\\n           jenkins:dotnet\n')),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5c31\u662f\u6bd4\u8f83\u4fd7\u5957\u7684\u5b89\u88c5 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins")," \u6b65\u9aa4\uff0c\u7f51\u4e0a\u8d44\u6599\u5f88\u591a\uff0c\u4e0d\u5c55\u5f00\u4e86\u3002"),(0,a.kt)("h2",{id:"3513-jenkins-\u7684\u81ea\u52a8\u5316\u90e8\u7f72"},"35.1.3 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Jenkins")," \u7684\u81ea\u52a8\u5316\u90e8\u7f72"),(0,a.kt)("h3",{id:"35131-\u7f16\u5199-shell-\u811a\u672c"},"35.1.3.1 \u7f16\u5199 Shell \u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Jenkins \u6784\u5efa \u6d4b\u8bd5\u670d\n\necho '============\u67e5\u770b\u6253\u5305\u73af\u5883================'\npwd\nls\necho $PATH\n\nimage_version=`date +%Y%m%d%H%M`;\necho $image_version;\n\ndotnet --info\ndotnet --version\n\n# \u83b7\u53d6\u77ed\u7248\u672c\u53f7\nGITHASH=`git rev-parse --short HEAD`\n\necho '============================begin restore======================================='\ndotnet restore\necho '============================end restore======================================='\n\n#\u8981\u6784\u5efa\u7684\u89e3\u51b3\u65b9\u6848\u540d\u79f0\nsolutionName=MUSaas.SCM.BasicData\n#docker run\u7684\u5bb9\u5668\u540d\u79f0\ncontainerName=jenkinsscmbasic\n#\u6307\u5b9arun\u7684\u7aef\u53e3\nport=9994\n#.sln\u6587\u4ef6\u5168\u8def\u5f84\n#solutionDir=20-Solution/${solutionName}.sln\n#.csproj\u6587\u4ef6\u5168\u8def\u5f84\ncsprojDir=${solutionName}/${solutionName}.csproj\n\n#\u9879\u76ee\u53d1\u5e03\u7684\u76ee\u5f55\nwebDir=/mudata/webroot/jenkins/publish/webapp\n\n#\u5f52\u6863\u76ee\u5f55\narchivesDir=/mudata/webroot/jenkins/publish/archives\n\n#\u6e05\u7a7a\u6587\u4ef6\u5939\nrm -rf ${webDir}/${JOB_NAME}/*\n\n#\u53d1\u5e03\u7f51\u7ad9\u5230webDir\ndotnet publish ${JENKINS_HOME}/workspace/${JOB_NAME}/${csprojDir} -c Release -o ${webDir}/${JOB_NAME} /p:Version=1.0.${BUILD_NUMBER}\n#\u590d\u5236\u914d\u7f6e\u6587\u4ef6\n#cp -rf /vdb1/jenkins/DotNetCoreWebPublishToDockerCommonConfigs/* ${webDir}/${JOB_NAME}/\n\n#\u5224\u65b7\u662f\u5426\u5b58\u5728\nCID=$(docker ps | grep \"${containerName}\" | awk '{print $1}')\necho $CID\nif [ \"$CID\" != \"\" ];then\n    docker stop ${containerName}\n    docker rm ${containerName}\n    docker rmi ${containerName}\n#docker stop $CID\n#docker rm $CID\nfi\n\n\n#\u901a\u8fc7Dockerfile\u91cd\u65b0\u6784\u5efa\u955c\u50cf\ndocker build -t ${containerName} ${webDir}/${JOB_NAME}/.\n#docker run\u5bb9\u5668\u5e76\u7ed1\u5b9a\u5230\u7aef\u53e3\n#docker run -d -p ${port}:80 --name ${containerName} ${containerName}\ndocker run --name ${containerName} --restart=always -d -p ${port}:${port} -v /etc/localtime:/etc/localtime:ro ${containerName}\necho \"success!\"\n\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5c31\u8fd9\u6837\u81ea\u52a8\u5316\u90e8\u7f72\u5c31\u597d\u4e86\u3002 \u6d4b\u8bd5\u670d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins")," \u5c06\u6e90\u7801\u62c9\u4e0b\u6765\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Publish\uff0cDocker Build\uff0cDocker Run"),"\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u60f3\u8981\u53d1\u5e03\u7684\u65f6\u5019\uff0c\u6bcf\u6b21\u90fd\u9700\u8981\u624b\u52a8\u53bb\u70b9\u51fb\u201c\u6784\u5efa\u201d\u624d\u4f1a\u6267\u884c\u3002\u4e5f\u53ef\u4ee5\u505a\u6210\u5f53\u5206\u652f\u5408\u5e76\u6210\u529f\u540e\u81ea\u52a8\u8fd0\u884c\u3002\u53cd\u6b63 ",(0,a.kt)("inlineCode",{parentName:"p"},"Jenkins")," \u88c5\u597d\u4e4b\u540e\uff0c\u4f60\u60f3\u8981\u4ec0\u4e48\u90fd\u80fd\u73a9\u8d77\u6765\u3002\u6bd4\u5982\u6307\u5b9a\u5206\u652f\u63d0\u4ea4\u540e\u81ea\u52a8\u201c\u6784\u5efa\u201d\u3001\u6bd4\u5982\u6784\u5efa\u6210\u529f\u540e\u5408\u5e76\u5230 Master \u7b49\u7b49")),(0,a.kt)("h2",{id:"3514-jenkins-\u7684\u81ea\u52a8\u5316\u8fdc\u7a0b\u90e8\u7f72"},"35.1.4 ",(0,a.kt)("inlineCode",{parentName:"h2"},"Jenkins")," \u7684\u81ea\u52a8\u5316\u8fdc\u7a0b\u90e8\u7f72"),(0,a.kt)("h3",{id:"35141-\u5b89\u88c5\u63d2\u4ef6"},"35.1.4.1 \u5b89\u88c5\u63d2\u4ef6"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("inlineCode",{parentName:"p"},"Publish Over SSH"))),(0,a.kt)("h3",{id:"35142-\u914d\u7f6e"},"35.1.4.2 \u914d\u7f6e"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7cfb\u7edf\u7ba1\u7406 => ",(0,a.kt)("inlineCode",{parentName:"p"},"Publish over SSH"))),(0,a.kt)("h3",{id:"35143-\u5199\u811a\u672c"},"35.1.4.3 \u5199\u811a\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Jenkins \u6784\u5efa  \u6b63\u5f0f\u670d\n\necho '============\u67e5\u770b\u6253\u5305\u73af\u5883================'\npwd\nls\necho $PATH\n\nimage_version=`date +%Y%m%d%H%M`;\necho $image_version;\n\ndotnet --info\ndotnet --version\n\n# \u83b7\u53d6\u77ed\u7248\u672c\u53f7\nGITHASH=`git rev-parse --short HEAD`\n\necho '============================begin restore======================================='\ndotnet restore\necho '============================end restore======================================='\n\n#\u8981\u6784\u5efa\u7684\u89e3\u51b3\u65b9\u6848\u540d\u79f0\nsolutionName=MUSaas.SCM.BulkOrder\n#docker run\u7684\u5bb9\u5668\u540d\u79f0\ncontainerName=jenkinsscmbulk\n#\u6307\u5b9arun\u7684\u7aef\u53e3\nport=9986\n#.csproj\u6587\u4ef6\u5168\u8def\u5f84\ncsprojDir=/${solutionName}/${solutionName}.csproj\n\n#\u9879\u76ee\u53d1\u5e03\u7684\u76ee\u5f55\nwebDir=/mudata/webroot/jenkins/publish/webapp\n\n#\u5f52\u6863\u76ee\u5f55\narchivesDir=/mudata/webroot/jenkins/publish/archives\n\n#\u6e05\u7a7a\u6587\u4ef6\u5939\nrm -rf ${webDir}/${JOB_NAME}/*\n\n#\u53d1\u5e03\u7f51\u7ad9\u5230webDir\ndotnet publish ${JENKINS_HOME}/workspace/${JOB_NAME}/${csprojDir} -c Release -o ${webDir}/${JOB_NAME} /p:Version=1.0.${BUILD_NUMBER}\n#\u590d\u5236\u914d\u7f6e\u6587\u4ef6\n#cp -rf /vdb1/jenkins/DotNetCoreWebPublishToDockerCommonConfigs/* ${webDir}/${JOB_NAME}/\n\n\n#\u6784\u5efa\u8fdc\u7a0b\u5305\n\nrm -rf ${JENKINS_HOME}/workspace/${JOB_NAME}/publish\nmkdir ${JENKINS_HOME}/workspace/${JOB_NAME}/publish\n\ntar -czvf ${JENKINS_HOME}/workspace/${JOB_NAME}/publish/${JOB_NAME}.${BUILD_NUMBER}.tar.gz -C ${webDir}/${JOB_NAME} .\n\necho \"success!\"\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5927\u6982\u903b\u8f91\u5c31\u662f\u53d1\u5e03\u540e\uff0c\u6253\u4e2a\u5305\u3002\u7136\u540e\u4e22\u7ed9\u8fdc\u7a0b\uff0c\u8fdc\u7a0b\u518d\u6267\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"shell"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\u8fd9\u91cc\u4e00\u5b9a\u8981\u53d1\u5e03\u5230\u81ea\u5df1\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"workspace")," \u4e0b\uff0c\u9632\u6b62\u4e0b\u4e00\u6b65\u6b7b\u6d3b\u627e\u4e0d\u5230\u4f4d\u7f6e\u3002\u5982\u679c\u627e\u4e0d\u5230\u4f4d\u7f6e\uff0c\u53ea\u80fd\u6162\u6162\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," \u547d\u4ee4\uff0c\u4e00\u7ea7\u4e00\u7ea7\u53bb\u6d4b\uff0c\u5f88\u9ebb\u70e6")),(0,a.kt)("h3",{id:"35144-\u6784\u5efa\u540e\u64cd\u4f5c\uff08\u5173\u952e\uff09"},"35.1.4.4 \u6784\u5efa\u540e\u64cd\u4f5c\uff08\u5173\u952e\uff09"),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Send Build artifacts over SSH")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Source files: publish/\nRemove prefix(\u4e0d\u586b)\nRemote directory:/mudata/webroot/publish/\nExec command:bash /mudata/shell/publish.sh  ${JOB_NAME} jenkinsscmbase ${JOB_NAME}.${BUILD_NUMBER}  9994\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u81ea\u5df1\u7684 SSH \u670d\u52a1\u5668"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Source files"),"\uff1a\u4e00\u5b9a\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"workspace")," \u4e0b\u7684\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Remote directory"),"\uff1a\u8fdc\u7a0b\u5730\u5740\uff0c\u4ece\u6839\u76ee\u5f55\u5f00\u59cb"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Exec command"),"\uff1a\u8981\u6267\u884c\u7684 shell\u3002\u8fd9\u91cc\u6240\u6709\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Jenkins")," \u73af\u5883\u53d8\u91cf\u90fd\u53ef\u4ee5\u7528")),(0,a.kt)("h3",{id:"35145-\u8fdc\u7a0b\u6267\u884c"},"35.1.4.5 \u8fdc\u7a0b\u6267\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="publish.sh"',title:'"publish.sh"'},'# Jenkins Prod\u670d \u8c03\u7528\u811a\u672c\nsolutionName=$1\ncontainerName=$2\nfilename=$3\nport=$4\n#.publis\necho ${solutionName}\necho ${containerName}\necho ${filename}\nbaseDir=/mudata/webroot/publish\n\nwebDir=${baseDir}/publish/${filename}\n\nrm -rf ${webDir}\nmkdir ${webDir}\n\ntar -zxvf ${baseDir}/publish/${filename}.tar.gz -C ${webDir}/\nrm -f  ${webDir}/appsettings.json && mv  ${webDir}/appsettings.Prod.json  ${webDir}/appsettings.json\n\n#\u5224\u65b7\u662f\u5426\u5b58\u5728\nCID=$(docker ps | grep "${containerName}" | awk \'{print $1}\')\necho $CID\nif [ "$CID" != "" ];then\n    docker stop ${containerName}\n    docker rm ${containerName}\n    docker rmi ${containerName}\n#docker stop $CID\n#docker rm $CID\nfi\n\ncd  ${webDir}/ && docker build -t ${containerName} .\ndocker run --name ${containerName} --restart=always -d -p ${port}:${port} --link myredis:myredis  -v /etc/localtime:/etc/localtime:ro ${containerName}\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u8fd9\u91cc\u7684\u903b\u8f91\u5c31\u662f\u89e3\u538b\uff0c\u7136\u540e ",(0,a.kt)("inlineCode",{parentName:"p"},"Docker")," \u76f8\u5173\u3002\u6bcf\u6b21\u6784\u5efa\u90fd\u662f\u5e26\u7740\u7248\u672c\u53f7\u6765\u7684\u3002")),(0,a.kt)("h2",{id:"3515-\u53cd\u9988\u4e0e\u5efa\u8bae"},"35.1.5 \u53cd\u9988\u4e0e\u5efa\u8bae"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u4e0e\u6211\u4eec\u4ea4\u6d41")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"\u7ed9 Furion \u63d0 ",(0,a.kt)("a",{parentName:"p",href:"https://gitee.com/dotnetchina/Furion/issues/new?issue"},"Issue"),"\u3002"))))}k.isMDXComponent=!0}}]);