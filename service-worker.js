"use strict";var precacheConfig=[["/index.html","a91b052fb9cf4c3d21bdc42aaf9336ff"],["/static/css/main.ada80ab1.css","0adf255bf4206ce18392ae590ca8a54e"],["/static/js/main.2681fece.js","15a98a76b851527654c16ee21eafb038"],["/static/media/Resume.7854eafa.pdf","7854eafae6eace24f27e7271bac393ce"],["/static/media/dash-1.06037eda.png","06037edad8a2c3ec0b34b8e4da90f516"],["/static/media/dash-2.2f9fdaa2.png","2f9fdaa22ca160ca18ee6b4dc32c8ab5"],["/static/media/dash-3.7601904f.png","7601904fdae49b84c0ec0b99c5041a8a"],["/static/media/demo.e7dad515.png","e7dad5151f5730054f8b590348fb8cff"],["/static/media/github.3d232d24.svg","3d232d24b180f8b7a7c51055bf25f9b1"],["/static/media/laptop_IL.b101ef80.png","b101ef80582cd90487b02ebb4d5c1723"],["/static/media/linkedin.2f33ca08.svg","2f33ca086d014cce8744b15811c5e91d"],["/static/media/list.6b90d889.svg","6b90d889888e301bb53eda7be25f2083"],["/static/media/macbook.c30155fb.png","c30155fb2cc06a8d7ca5e03068c94303"],["/static/media/solarhouse1.48ba2865.JPG","48ba286507cd4b1ab58072378fa987d8"],["/static/media/solarhouse2.79d2d383.JPG","79d2d3837e5d52c2f00f1849fbd668a4"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});