/**
 * Satellizer 0.14.0
 * (c) 2016 Sahat Yalkabov
 * License: MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="satellizer"),function(e,t,r){"use strict";e.location.origin||(e.location.origin=e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")),t.module("satellizer",[]).constant("SatellizerConfig",{httpInterceptor:function(){return!0},withCredentials:!1,tokenRoot:null,baseUrl:"/",loginUrl:"/auth/login",signupUrl:"/auth/signup",unlinkUrl:"/auth/unlink/",tokenName:"token",tokenPrefix:"satellizer",authHeader:"Authorization",authToken:"Bearer",storageType:"localStorage",providers:{facebook:{name:"facebook",url:"/auth/facebook",authorizationEndpoint:"https://www.facebook.com/v2.5/dialog/oauth",redirectUri:e.location.origin+"/",requiredUrlParams:["display","scope"],scope:["email"],scopeDelimiter:",",display:"popup",oauthType:"2.0",popupOptions:{width:580,height:400}},google:{name:"google",url:"/auth/google",authorizationEndpoint:"https://accounts.google.com/o/oauth2/auth",redirectUri:e.location.origin,requiredUrlParams:["scope"],optionalUrlParams:["display"],scope:["profile","email"],scopePrefix:"openid",scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:452,height:633}},github:{name:"github",url:"/auth/github",authorizationEndpoint:"https://github.com/login/oauth/authorize",redirectUri:e.location.origin,optionalUrlParams:["scope"],scope:["user:email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1020,height:618}},instagram:{name:"instagram",url:"/auth/instagram",authorizationEndpoint:"https://api.instagram.com/oauth/authorize",redirectUri:e.location.origin,requiredUrlParams:["scope"],scope:["basic"],scopeDelimiter:"+",oauthType:"2.0"},linkedin:{name:"linkedin",url:"/auth/linkedin",authorizationEndpoint:"https://www.linkedin.com/uas/oauth2/authorization",redirectUri:e.location.origin,requiredUrlParams:["state"],scope:["r_emailaddress"],scopeDelimiter:" ",state:"STATE",oauthType:"2.0",popupOptions:{width:527,height:582}},twitter:{name:"twitter",url:"/auth/twitter",authorizationEndpoint:"https://api.twitter.com/oauth/authenticate",redirectUri:e.location.origin,oauthType:"1.0",popupOptions:{width:495,height:645}},twitch:{name:"twitch",url:"/auth/twitch",authorizationEndpoint:"https://api.twitch.tv/kraken/oauth2/authorize",redirectUri:e.location.origin,requiredUrlParams:["scope"],scope:["user_read"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},live:{name:"live",url:"/auth/live",authorizationEndpoint:"https://login.live.com/oauth20_authorize.srf",redirectUri:e.location.origin,requiredUrlParams:["display","scope"],scope:["wl.emails"],scopeDelimiter:" ",display:"popup",oauthType:"2.0",popupOptions:{width:500,height:560}},yahoo:{name:"yahoo",url:"/auth/yahoo",authorizationEndpoint:"https://api.login.yahoo.com/oauth2/request_auth",redirectUri:e.location.origin,scope:[],scopeDelimiter:",",oauthType:"2.0",popupOptions:{width:559,height:519}},bitbucket:{name:"bitbucket",url:"/auth/bitbucket",authorizationEndpoint:"https://bitbucket.org/site/oauth2/authorize",redirectUri:e.location.origin+"/",requiredUrlParams:["scope"],scope:["email"],scopeDelimiter:" ",oauthType:"2.0",popupOptions:{width:1028,height:529}}}}).provider("$auth",["SatellizerConfig",function(e){Object.defineProperties(this,{httpInterceptor:{get:function(){return e.httpInterceptor},set:function(t){"function"==typeof t?e.httpInterceptor=t:e.httpInterceptor=function(){return t}}},baseUrl:{get:function(){return e.baseUrl},set:function(t){e.baseUrl=t}},loginUrl:{get:function(){return e.loginUrl},set:function(t){e.loginUrl=t}},signupUrl:{get:function(){return e.signupUrl},set:function(t){e.signupUrl=t}},tokenRoot:{get:function(){return e.tokenRoot},set:function(t){e.tokenRoot=t}},tokenName:{get:function(){return e.tokenName},set:function(t){e.tokenName=t}},tokenPrefix:{get:function(){return e.tokenPrefix},set:function(t){e.tokenPrefix=t}},unlinkUrl:{get:function(){return e.unlinkUrl},set:function(t){e.unlinkUrl=t}},authHeader:{get:function(){return e.authHeader},set:function(t){e.authHeader=t}},authToken:{get:function(){return e.authToken},set:function(t){e.authToken=t}},withCredentials:{get:function(){return e.withCredentials},set:function(t){e.withCredentials=t}},storageType:{get:function(){return e.storageType},set:function(t){e.storageType=t}}}),t.forEach(Object.keys(e.providers),function(r){this[r]=function(n){return t.extend(e.providers[r],n)}},this);var r=function(r){e.providers[r.name]=e.providers[r.name]||{},t.extend(e.providers[r.name],r)};this.oauth1=function(t){r(t),e.providers[t.name].oauthType="1.0"},this.oauth2=function(t){r(t),e.providers[t.name].oauthType="2.0"},this.$get=["$q","SatellizerShared","SatellizerLocal","SatellizerOauth",function(e,t,r,n){var o={};return o.login=function(e,t){return r.login(e,t)},o.signup=function(e,t){return r.signup(e,t)},o.logout=function(){return t.logout()},o.authenticate=function(e,t){return n.authenticate(e,t)},o.link=function(e,t){return n.authenticate(e,t)},o.unlink=function(e,t){return n.unlink(e,t)},o.isAuthenticated=function(){return t.isAuthenticated()},o.getToken=function(){return t.getToken()},o.setToken=function(e){t.setToken({access_token:e})},o.removeToken=function(){return t.removeToken()},o.getPayload=function(){return t.getPayload()},o.setStorageType=function(e){return t.setStorageType(e)},o}]}]).factory("SatellizerShared",["$q","$window","$log","SatellizerConfig","SatellizerStorage",function(n,o,i,a,u){var l={},p=a.tokenPrefix?[a.tokenPrefix,a.tokenName].join("_"):a.tokenName;return l.getToken=function(){return u.get(p)},l.getPayload=function(){var t=u.get(p);if(t&&3===t.split(".").length)try{var n=t.split(".")[1],o=n.replace(/-/g,"+").replace(/_/g,"/");return JSON.parse(decodeURIComponent(escape(e.atob(o))))}catch(i){return r}},l.setToken=function(e){if(!e)return i.warn("Can't set token without passing a value");var r,n=e&&e.access_token;if(n&&(t.isObject(n)&&t.isObject(n.data)?e=n:t.isString(n)&&(r=n)),!r&&e){var o=a.tokenRoot&&a.tokenRoot.split(".").reduce(function(e,t){return e[t]},e.data);r=o?o[a.tokenName]:e.data&&e.data[a.tokenName]}if(!r){var l=a.tokenRoot?a.tokenRoot+"."+a.tokenName:a.tokenName;return i.warn('Expecting a token named "'+l)}u.set(p,r)},l.removeToken=function(){u.remove(p)},l.isAuthenticated=function(){var e=u.get(p);if(e){if(3===e.split(".").length)try{var t=e.split(".")[1],r=t.replace(/-/g,"+").replace(/_/g,"/"),n=JSON.parse(o.atob(r)).exp;if(n){var i=Math.round((new Date).getTime()/1e3)>=n;return i?!1:!0}}catch(a){return!0}return!0}return!1},l.logout=function(){return u.remove(p),n.when()},l.setStorageType=function(e){a.storageType=e},l}]).factory("SatellizerOauth",["$q","$http","SatellizerConfig","SatellizerUtils","SatellizerShared","SatellizerOauth1","SatellizerOauth2",function(e,t,r,n,o,i,a){var u={};return u.authenticate=function(t,n){var u="1.0"===r.providers[t].oauthType?new i:new a,l=e.defer();return u.open(r.providers[t],n||{}).then(function(e){r.providers[t].url&&o.setToken(e,!1),l.resolve(e)})["catch"](function(e){l.reject(e)}),l.promise},u.unlink=function(e,o){return o=o||{},o.url=o.url?o.url:n.joinUrl(r.baseUrl,r.unlinkUrl),o.data={provider:e}||o.data,o.method=o.method||"POST",o.withCredentials=o.withCredentials||r.withCredentials,t(o)},u}]).factory("SatellizerLocal",["$http","SatellizerUtils","SatellizerShared","SatellizerConfig",function(e,t,r,n){var o={};return o.login=function(o,i){return i=i||{},i.url=i.url?i.url:t.joinUrl(n.baseUrl,n.loginUrl),i.data=o||i.data,i.method=i.method||"POST",i.withCredentials=i.withCredentials||n.withCredentials,e(i).then(function(e){return r.setToken(e),e})},o.signup=function(r,o){return o=o||{},o.url=o.url?o.url:t.joinUrl(n.baseUrl,n.signupUrl),o.data=r||o.data,o.method=o.method||"POST",o.withCredentials=o.withCredentials||n.withCredentials,e(o)},o}]).factory("SatellizerOauth2",["$q","$http","$window","$timeout","SatellizerPopup","SatellizerUtils","SatellizerConfig","SatellizerStorage",function(r,n,o,i,a,u,l,p){return function(){var o={},c={defaultUrlParams:["response_type","client_id","redirect_uri"],responseType:"code",responseParams:{code:"code",clientId:"clientId",redirectUri:"redirectUri"}};return o.open=function(n,l){c=u.merge(n,c);var s=r.defer();return i(function(){var r,n,i=c.name+"_state";return t.isFunction(c.state)?p.set(i,c.state()):t.isString(c.state)&&p.set(i,c.state),r=[c.authorizationEndpoint,o.buildQueryString()].join("?"),n=e.cordova?a.open(r,c.name,c.popupOptions,c.redirectUri).eventListener(c.redirectUri):a.open(r,c.name,c.popupOptions,c.redirectUri).pollPopup(c.redirectUri),n.then(function(e){return"token"!==c.responseType&&c.url||s.resolve(e),e.state&&e.state!==p.get(i)?s.reject("The value returned in the state parameter does not match the state value from your original authorization code request."):void s.resolve(o.exchangeForToken(e,l))})}),s.promise},o.exchangeForToken=function(e,r){var o=t.extend({},r);t.forEach(c.responseParams,function(t,r){switch(r){case"code":o[t]=e.code;break;case"clientId":o[t]=c.clientId;break;case"redirectUri":o[t]=c.redirectUri;break;default:o[t]=e[r]}}),e.state&&(o.state=e.state);var i=l.baseUrl?u.joinUrl(l.baseUrl,c.url):c.url;return n.post(i,o,{withCredentials:l.withCredentials})},o.buildQueryString=function(){var e=[],r=["defaultUrlParams","requiredUrlParams","optionalUrlParams"];return t.forEach(r,function(r){t.forEach(c[r],function(r){var n=u.camelCase(r),o=t.isFunction(c[r])?c[r]():c[n];if("redirect_uri"!==r||o){if("state"===r){var i=c.name+"_state";o=encodeURIComponent(p.get(i))}"scope"===r&&Array.isArray(o)&&(o=o.join(c.scopeDelimiter),c.scopePrefix&&(o=[c.scopePrefix,o].join(c.scopeDelimiter))),e.push([r,o])}})}),e.map(function(e){return e.join("=")}).join("&")},o}}]).factory("SatellizerOauth1",["$q","$http","SatellizerPopup","SatellizerConfig","SatellizerUtils",function(r,n,o,i,a){return function(){var r={},u={url:null,name:null,popupOptions:null,redirectUri:null,authorizationEndpoint:null};return r.open=function(l,p){t.extend(u,l);var c,s=i.baseUrl?a.joinUrl(i.baseUrl,u.url):u.url;return e.cordova||(c=o.open("",u.name,u.popupOptions,u.redirectUri)),n.post(s,u).then(function(t){var n=[u.authorizationEndpoint,r.buildQueryString(t.data)].join("?");e.cordova?c=o.open(n,u.name,u.popupOptions,u.redirectUri):c.popupWindow.location=n;var i;return i=e.cordova?c.eventListener(u.redirectUri):c.pollPopup(u.redirectUri),i.then(function(e){return r.exchangeForToken(e,p)})})},r.exchangeForToken=function(e,r){var o=t.extend({},r,e),l=i.baseUrl?a.joinUrl(i.baseUrl,u.url):u.url;return n.post(l,o,{withCredentials:i.withCredentials})},r.buildQueryString=function(e){var r=[];return t.forEach(e,function(e,t){r.push(encodeURIComponent(t)+"="+encodeURIComponent(e))}),r.join("&")},r}}]).factory("SatellizerPopup",["$q","$interval","$window","SatellizerConfig","SatellizerUtils",function(n,o,i,a,u){var l={};return l.url="",l.popupWindow=null,l.open=function(t,r,n){l.url=t;var o=l.stringifyOptions(l.prepareOptions(n)),a=i.navigator.userAgent,u=e.cordova||a.indexOf("CriOS")>-1?"_blank":r;return l.popupWindow=i.open(t,u,o),i.popup=l.popupWindow,l.popupWindow&&l.popupWindow.focus&&l.popupWindow.focus(),l},l.eventListener=function(e){var r=n.defer();return l.popupWindow.addEventListener("loadstart",function(n){if(0===n.url.indexOf(e)){var o=document.createElement("a");if(o.href=n.url,o.search||o.hash){var i=o.search.substring(1).replace(/\/$/,""),a=o.hash.substring(1).replace(/\/$/,""),p=u.parseQueryString(a),c=u.parseQueryString(i);t.extend(c,p),c.error||r.resolve(c),l.popupWindow.close()}}}),l.popupWindow.addEventListener("loaderror",function(){r.reject("Authorization Failed")}),r.promise},l.pollPopup=function(e){var i=n.defer(),a=document.createElement("a");a.href=e;var p=u.getFullUrlPath(a),c=o(function(){(!l.popupWindow||l.popupWindow.closed||l.popupWindow.closed===r)&&(i.reject("The popup window was closed."),o.cancel(c));try{var e=u.getFullUrlPath(l.popupWindow.location);if(e===p){if(l.popupWindow.location.search||l.popupWindow.location.hash){var n=l.popupWindow.location.search.substring(1).replace(/\/$/,""),a=l.popupWindow.location.hash.substring(1).replace(/[\/$]/,""),s=u.parseQueryString(a),h=u.parseQueryString(n);t.extend(h,s),h.error?i.reject(h):i.resolve(h)}else i.reject("Redirect has occurred but no query or hash parameters were found. They were either not set during the redirect, or were removed before Satellizer could read them, e.g. AngularJS routing mechanism.");o.cancel(c),l.popupWindow.close()}}catch(d){}},20);return i.promise},l.prepareOptions=function(e){e=e||{};var r=e.width||500,n=e.height||500;return t.extend({width:r,height:n,left:i.screenX+(i.outerWidth-r)/2,top:i.screenY+(i.outerHeight-n)/2.5},e)},l.stringifyOptions=function(e){var r=[];return t.forEach(e,function(e,t){r.push(t+"="+e)}),r.join(",")},l}]).service("SatellizerUtils",function(){this.getFullUrlPath=function(e){return e.protocol+"//"+e.hostname+(e.port?":"+e.port:"")+e.pathname},this.camelCase=function(e){return e.replace(/([\:\-\_]+(.))/g,function(e,t,r,n){return n?r.toUpperCase():r})},this.parseQueryString=function(e){var r,n,o={};return t.forEach((e||"").split("&"),function(e){e&&(n=e.split("="),r=decodeURIComponent(n[0]),o[r]=t.isDefined(n[1])?decodeURIComponent(n[1]):!0)}),o},this.joinUrl=function(e,t){if(/^(?:[a-z]+:)?\/\//i.test(t))return t;var r=[e,t].join("/"),n=function(e){return e.replace(/[\/]+/g,"/").replace(/\/\?/g,"?").replace(/\/\#/g,"#").replace(/\:\//g,"://")};return n(r)},this.merge=function(e,t){var r={};for(var n in e)e.hasOwnProperty(n)&&(n in t&&"object"==typeof e[n]&&null!==n?r[n]=this.merge(e[n],t[n]):r[n]=e[n]);for(n in t)if(t.hasOwnProperty(n)){if(n in r)continue;r[n]=t[n]}return r}}).factory("SatellizerStorage",["$window","$log","SatellizerConfig",function(e,t,r){var n={},o=function(){try{var t=r.storageType in e&&null!==e[r.storageType];if(t){var n=Math.random().toString(36).substring(7);e[r.storageType].setItem(n,""),e[r.storageType].removeItem(n)}return t}catch(o){return!1}}();return o||t.warn(r.storageType+" is not available."),{get:function(t){return o?e[r.storageType].getItem(t):n[t]},set:function(t,i){return o?e[r.storageType].setItem(t,i):n[t]=i},remove:function(t){return o?e[r.storageType].removeItem(t):delete n[t]}}}]).factory("SatellizerInterceptor",["$q","SatellizerConfig","SatellizerStorage","SatellizerShared",function(e,t,r,n){return{request:function(e){if(e.skipAuthorization)return e;if(n.isAuthenticated()&&t.httpInterceptor(e)){var o=t.tokenPrefix?t.tokenPrefix+"_"+t.tokenName:t.tokenName,i=r.get(o);t.authHeader&&t.authToken&&(i=t.authToken+" "+i),e.headers[t.authHeader]=i}return e},responseError:function(t){return e.reject(t)}}}]).config(["$httpProvider",function(e){e.interceptors.push("SatellizerInterceptor")}])}(window,window.angular);