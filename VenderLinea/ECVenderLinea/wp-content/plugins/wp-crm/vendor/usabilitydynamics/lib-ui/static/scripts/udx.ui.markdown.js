var app=app?app:{};jQuery(function(){return ud&&ud.load?(ud.load.css("//ud-cdn.com/js/ud.documentation/0.1/assets/documentation-styles.css"),void ud.load.js({makeHtml:"//ud-cdn.com/js/showdown/latest/showdown.js","jQuery.prototype.slideto":"//api.usabilitydynamics.com/documentation/js/jquery.slideto.min.js","jQuery.prototype.wiggle":"//api.usabilitydynamics.com/documentation/js/jquery.wiggle.min.js","jQuery.bbq":"//api.usabilitydynamics.com/documentation/js/jquery.ba-bbq.min.js",Handlebars:"//api.usabilitydynamics.com/documentation/js/handlebars.runtime-1.0.0.beta.6.js",_:"//api.usabilitydynamics.com/documentation/js/underscore-min.js",backbone:"//api.usabilitydynamics.com/documentation/js/backbone-min.js",async:"//ud-cdn.com/js/async/1.0/async.js",swaggerUi:"//api.usabilitydynamics.com/documentation/js/swagger-ui.js"},function(){async.auto({system:function(a){jQuery.get("/system.json",function(b){return a(null,jQuery.extend(!0,app,b&&b.system?b.system:{}))}).error(function(){return a(null,{})})},authenticate:["system",function(a,b){return b.system.name&&jQuery(".product em.product-name").html(b.system.name),b.system.version&&jQuery(".product em.version").html(b.system.version),b.system.must_authenticate?void(window.location="/auth/login"):a(null,!1)}],readme:["authenticate",function(a,b){jQuery.get("/readme.md",function(c){return"function"==typeof makeHtml&&c&&(b.readme=makeHtml(c)),jQuery("#documentation").html(b.readme),a(null,c)}).error(function(){return a(null,!1)})}],explorer:["readme",function(a){return app.SwaggerApi=new SwaggerApi({discoveryUrl:window.location.origin+(app&&app.url?app.url.replace("system.json","resources.json"):""),api_key:"",progress:function(){}}),a(null,!0)}]})})):console.error("UD Load not available.")}),function(){var a,b,c,d,e,f,g=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(a){null==a&&(a={}),null!=a.discoveryUrl&&(this.discoveryUrl=a.discoveryUrl),null!=a.debug&&(this.debug=a.debug),this.apiKeyName=null!=a.apiKeyName?a.apiKeyName:"api_key",null!=a.apiKey&&(this.api_key=a.apiKey),null!=a.api_key&&(this.api_key=a.api_key),null!=a.verbose&&(this.verbose=a.verbose),this.supportHeaderParams=null!=a.supportHeaderParams?a.supportHeaderParams:!1,this.supportedSubmitMethods=null!=a.supportedSubmitMethods?a.supportedSubmitMethods:["get"],null!=a.success&&(this.success=a.success),this.failure=null!=a.failure?a.failure:function(){},this.progress=null!=a.progress?a.progress:function(){},this.headers=null!=a.headers?a.headers:{},this.booleanValues=null!=a.booleanValues?a.booleanValues:new Array("true","false"),this.discoveryUrl=this.suffixApiKey(this.discoveryUrl),null!=a.success&&this.build()}return a.prototype.discoveryUrl="http://cloud.usabilitydynamics.com/resources.json",a.prototype.debug=!1,a.prototype.api_key=null,a.prototype.basePath=null,a.prototype.build=function(){var a=this;return this.progress("fetching resource list: "+this.discoveryUrl),jQuery.getJSON(this.discoveryUrl,function(b){var c,d,e,g,h,i,j,k;if(null!=b.apiVersion&&(a.apiVersion=b.apiVersion),null!=b.basePath&&jQuery.trim(b.basePath).length>0?(a.basePath=b.basePath,null==a.basePath.match(/^HTTP/i)&&a.fail("discoveryUrl basePath must be a URL."),a.basePath=a.basePath.replace(/\/$/,"")):(a.basePath=a.discoveryUrl.substring(0,a.discoveryUrl.lastIndexOf("/")),log("derived basepath from discoveryUrl as "+a.basePath)),a.resources={},a.resourcesArray=[],null!=b.resourcePath){for(a.resourcePath=b.resourcePath,c=null,j=b.apis,e=0,h=j.length;h>e;e++)d=j[e],null===c?c=new f(d,a):c.addOperations(d.path,d.operations);null!=c&&(a.resources[c.name]=c,a.resourcesArray.push(c),c.ready=!0,a.selfReflect())}else for(k=b.apis,g=0,i=k.length;i>g;g++)d=k[g],c=new f(d,a),a.resources[c.name]=c,a.resourcesArray.push(c);return a}).error(function(b){return a.fail(b.status+" : "+b.statusText+" "+a.discoveryUrl)})},a.prototype.selfReflect=function(){var a,b,c;if(null==this.resources)return!1;c=this.resources;for(b in c)if(a=c[b],null==a.ready)return!1;return this.setConsolidatedModels(),this.ready=!0,null!=this.success?this.success():void 0},a.prototype.fail=function(a){throw this.failure(a),a},a.prototype.setConsolidatedModels=function(){var a,b,c,d,e,f,g,h,i;this.modelsArray=[],this.models={},g=this.resources;for(d in g){c=g[d];for(b in c.models)null==this.models[b]&&(this.models[b]=c.models[b],this.modelsArray.push(c.models[b]))}for(h=this.modelsArray,i=[],e=0,f=h.length;f>e;e++)a=h[e],i.push(a.setReferencedModels(this.models));return i},a.prototype.suffixApiKey=function(a){var b;return null!=this.api_key&&jQuery.trim(this.api_key).length>0&&null!=a?(b=a.indexOf("?")>0?"&":"?",a+b+this.apiKeyName+"="+this.api_key):a},a.prototype.help=function(){var a,b,c,d,e,f,g,h,i,j;h=this.resources;for(e in h){d=h[e],console.log(e),i=d.operations;for(b in i)for(a=i[b],console.log("  "+a.nickname),j=a.parameters,f=0,g=j.length;g>f;f++)c=j[f],console.log("    "+c.name+(c.required?" (required)":"")+" - "+c.description)}return this},a}(),f=function(){function a(a,b){var c,d=this;this.api=b,this.path=null!=this.api.resourcePath?this.api.resourcePath:a.path,this.description=a.description,c=this.path.split("/"),this.name=c[c.length-1].replace(".{format}",""),this.basePath=this.api.basePath,this.operations={},this.operationsArray=[],this.modelsArray=[],this.models={},null!=a.operations&&null!=this.api.resourcePath?(this.api.progress("reading resource "+this.name+" models and operations"),this.addModels(a.models),this.addOperations(a.path,a.operations),this.api[this.name]=this):(null==this.path&&this.api.fail("SwaggerResources must have a path."),this.url=this.api.suffixApiKey(this.api.basePath+this.path.replace("{format}","json")),this.api.progress("fetching resource "+this.name+": "+this.url),jQuery.getJSON(this.url,function(a){var b,c,e,f;if(null!=a.basePath&&jQuery.trim(a.basePath).length>0&&(d.basePath=a.basePath,d.basePath=d.basePath.replace(/\/$/,"")),d.addModels(a.models),a.apis)for(f=a.apis,c=0,e=f.length;e>c;c++)b=f[c],d.addOperations(b.path,b.operations);return d.api[d.name]=d,d.ready=!0,d.api.selfReflect()}).error(function(a){return d.api.fail(a.status+" : "+a.statusText+" "+d.url)}))}return a.prototype.addModels=function(a){var c,d,e,f,g,h,i;if(null!=a){for(d in a)null==this.models[d]&&(e=new b(d,a[d]),this.modelsArray.push(e),this.models[d]=e);for(h=this.modelsArray,i=[],f=0,g=h.length;g>f;f++)c=h[f],i.push(c.setReferencedModels(this.models));return i}},a.prototype.addOperations=function(a,b){var c,e,f,g,h;if(b){for(h=[],f=0,g=b.length;g>f;f++)c=b[f],e=new d(c.nickname,a,c.httpMethod,c.parameters,c.summary,c.notes,c.responseClass,c.errorResponses,this,c.supportedContentTypes),this.operations[e.nickname]=e,h.push(this.operationsArray.push(e));return h}},a.prototype.help=function(){var a,b,c,d,e,f,g;f=this.operations;for(b in f)for(a=f[b],console.log("  "+a.nickname),g=a.parameters,d=0,e=g.length;e>d;d++)c=g[d],console.log("    "+c.name+(c.required?" (required)":"")+" - "+c.description);return this},a}(),b=function(){function a(a,b){var d;this.name=null!=b.id?b.id:a,this.properties=[];for(d in b.properties)this.properties.push(new c(d,b.properties[d]))}return a.prototype.setReferencedModels=function(a){var b,c,d,e,f;for(e=this.properties,f=[],c=0,d=e.length;d>c;c++)b=e[c],f.push(null!=a[b.dataType]?b.refModel=a[b.dataType]:null!=b.refDataType&&null!=a[b.refDataType]?b.refModel=a[b.refDataType]:void 0);return f},a.prototype.getMockSignature=function(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o,p;for(f=[],o=this.properties,k=0,m=o.length;m>k;k++)e=o[k],f.push(e.toString());for(h='<span style="font-weight: bold; color: #000; font-size: 1.0em">',j='<span style="font-weight: bold; color: #000; font-size: 1.1em">',i="</span>",d=h+"class "+this.name+"("+i,c=h+")"+i,g=d+"<span>"+f.join("</span>, <span>")+"</span>"+c,null!=a&&(g=j+a+i+"<br/>"+g),p=this.properties,l=0,n=p.length;n>l;l++)e=p[l],null!=e.refModel&&e.refModel!==b&&(g+="<br>"+e.refModel.getMockSignature(void 0,this));return g},a.prototype.createJSONSample=function(a){var b,c,d,e,f;for(c={},f=this.properties,d=0,e=f.length;e>d;d++)b=f[d],c[b.name]=b.getSampleValue(a);return c},a}(),c=function(){function a(a,b){this.name=a,this.dataType=b.type,this.isArray="array"===this.dataType.toLowerCase(),this.descr=b.description,null!=b.items&&(null!=b.items.type&&(this.refDataType=b.items.type),null!=b.items.$ref&&(this.refDataType=b.items.$ref)),this.dataTypeWithRef=null!=this.refDataType?this.dataType+"["+this.refDataType+"]":this.dataType,null!=b.allowableValues&&(this.valueType=b.allowableValues.valueType,this.values=b.allowableValues.values,null!=this.values&&(this.valuesString="'"+this.values.join("' or '")+"'"))}return a.prototype.getSampleValue=function(a){var b;return b=null!=this.refModel&&this.refModel!==a?this.refModel.createJSONSample(this.refModel):this.isArray?this.refDataType:this.dataType,this.isArray?[b]:b},a.prototype.toString=function(){var a;return a=this.name+": "+this.dataTypeWithRef,null!=this.values&&(a+=" = ['"+this.values.join("' or '")+"']"),null!=this.descr&&(a+=" {"+this.descr+"}"),a},a}(),d=function(){function a(a,b,c,d,e,f,h,i,j,k){var l,m,n,o,p,q,r,s,t,u=this;for(this.nickname=a,this.path=b,this.httpMethod=c,this.parameters=null!=d?d:[],this.summary=e,this.notes=f,this.responseClass=h,this.errorResponses=i,this.resource=j,this.supportedContentTypes=k,this["do"]=g(this["do"],this),null==this.nickname&&this.resource.api.fail("SwaggerOperations must have a nickname."),null==this.path&&this.resource.api.fail("SwaggerOperation "+a+" is missing path."),null==this.httpMethod&&this.resource.api.fail("SwaggerOperation "+a+" is missing httpMethod."),this.path=this.path.replace("{format}","json"),this.httpMethod=this.httpMethod.toLowerCase(),this.isGetMethod="get"===this.httpMethod,this.resourceName=this.resource.name,"void"===(null!=(r=this.responseClass)?r.toLowerCase():void 0)&&(this.responseClass=void 0),null!=this.responseClass&&(this.responseClassSignature=this.getSignature(this.responseClass,this.resource.models),this.responseSampleJSON=this.getSampleJSON(this.responseClass,this.resource.models)),this.errorResponses=this.errorResponses||[],s=this.parameters,n=0,p=s.length;p>n;n++)if(l=s[n],l.name=l.name||l.dataType,"boolean"===l.dataType.toLowerCase()&&(l.allowableValues={},l.allowableValues.values=this.resource.api.booleanValues),l.signature=this.getSignature(l.dataType,this.resource.models),l.sampleJSON=this.getSampleJSON(l.dataType,this.resource.models),null!=l.allowableValues&&("RANGE"===l.allowableValues.valueType?l.isRange=!0:l.isList=!0,null!=l.allowableValues.values))for(l.allowableValues.descriptiveValues=[],t=l.allowableValues.values,o=0,q=t.length;q>o;o++)m=t[o],l.allowableValues.descriptiveValues.push(null!=l.defaultValue&&l.defaultValue===m?{value:m,isDefault:!0}:{value:m,isDefault:!1});this.resource[this.nickname]=function(a,b,c){return u["do"](a,b,c)}}return a.prototype.isListType=function(a){return a.indexOf("[")>=0?a.substring(a.indexOf("[")+1,a.indexOf("]")):void 0},a.prototype.getSignature=function(a,b){var c,d;return d=this.isListType(a),c=null!=d&&b[d]||null!=b[a]?!1:!0,c?a:null!=d?b[d].getMockSignature(a):b[a].getMockSignature(a)},a.prototype.getSampleJSON=function(a,b){var c,d,e;return d=this.isListType(a),c=null!=d&&b[d]||null!=b[a]?!1:!0,e=c?void 0:null!=d?b[d].createJSONSample():b[a].createJSONSample(),e?(e=d?[e]:e,JSON.stringify(e,null,2)):void 0},a.prototype["do"]=function(a,b,c){var d,f;return null==a&&(a={}),"function"==typeof a&&(c=b,b=a,a={}),null==c&&(c=function(a,b,c){return console.log(a,b,c)}),null==b&&(b=function(a){return console.log(a)}),null!=a.headers&&(f=a.headers,delete a.headers),null!=a.body&&(d=a.body,delete a.body),new e(this.httpMethod,this.urlify(a),f,d,b,c,this)},a.prototype.pathJson=function(){return this.path.replace("{format}","json")},a.prototype.pathXml=function(){return this.path.replace("{format}","xml")},a.prototype.urlify=function(a,b){var c,d,e,f,g,h,i;for(null==b&&(b=!0),f=this.resource.basePath+this.pathJson(),i=this.parameters,g=0,h=i.length;h>g;g++)if(c=i[g],"path"===c.paramType){if(!a[c.name])throw""+c.name+" is a required path param.";e=new RegExp("{"+c.name+"[^}]*}","gi"),f=f.replace(e,encodeURIComponent(a[c.name])),delete a[c.name]}return b&&null!=this.resource.api.api_key&&this.resource.api.api_key.length>0&&(a[this.apiKeyName]=this.resource.api.api_key),d=jQuery.param(this.supportHeaderParams()?this.getQueryParams(a,b):this.getQueryAndHeaderParams(a,b)),null!=d&&d.length>0&&(f+="?"+d),f},a.prototype.supportHeaderParams=function(){return this.resource.api.supportHeaderParams},a.prototype.supportedSubmitMethods=function(){return this.resource.api.supportedSubmitMethods},a.prototype.getQueryAndHeaderParams=function(a,b){return null==b&&(b=!0),this.getMatchingParams(["query","header"],a,b)},a.prototype.getQueryParams=function(a,b){return null==b&&(b=!0),this.getMatchingParams(["query"],a,b)},a.prototype.getHeaderParams=function(a,b){return null==b&&(b=!0),this.getMatchingParams(["header"],a,b)},a.prototype.getMatchingParams=function(a,b,c){var d,e,f,g,h,i,j,k;for(d={},j=this.parameters,h=0,i=j.length;i>h;h++)f=j[h],jQuery.inArray(f.paramType,a)>=0&&b[f.name]&&(d[f.name]=b[f.name]);if(c&&null!=this.resource.api.api_key&&this.resource.api.api_key.length>0&&(d[this.resource.api.apiKeyName]=this.resource.api.api_key),jQuery.inArray("header",a)>=0){k=this.resource.api.headers;for(e in k)g=k[e],d[e]=g}return d},a.prototype.help=function(){var a,b,c,d;for(d=this.parameters,b=0,c=d.length;c>b;b++)a=d[b],console.log("    "+a.name+(a.required?" (required)":"")+" - "+a.description);return this},a}(),e=function(){function a(a,b,c,d,e,f,g){var h,i=this;if(this.type=a,this.url=b,this.headers=c,this.body=d,this.successCallback=e,this.errorCallback=f,this.operation=g,null==this.type)throw"SwaggerRequest type is required (get/post/put/delete).";if(null==this.url)throw"SwaggerRequest url is required.";if(null==this.successCallback)throw"SwaggerRequest successCallback is required.";if(null==this.errorCallback)throw"SwaggerRequest error callback is required.";if(null==this.operation)throw"SwaggerRequest operation is required.";this.operation.resource.api.verbose&&console.log(this.asCurl()),this.headers||(this.headers={}),null!=this.operation.resource.api.api_key&&(this.headers[this.apiKeyName]=this.operation.resource.api.api_key),null==this.headers.mock&&(h={type:this.type,url:this.url,data:JSON.stringify(this.body),dataType:"json",error:function(a,b,c){return i.errorCallback(a,b,c)},success:function(a){return i.successCallback(a)}},("post"===h.type.toLowerCase()||"put"===h.type.toLowerCase())&&(h.contentType="application/json"),jQuery.ajax(h))}return a.prototype.asCurl=function(){var a,b,c;return a=function(){var a,d;a=this.headers,d=[];for(b in a)c=a[b],d.push('--header "'+b+": "+c+'"');return d}.call(this),"curl "+a.join(" ")+" "+this.url},a}(),window.SwaggerApi=a,window.SwaggerResource=f,window.SwaggerOperation=d,window.SwaggerRequest=e}.call(this);