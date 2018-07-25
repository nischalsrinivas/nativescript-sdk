/**
 * kinvey-nativescript-sdk - Kinvey NativeScript SDK for developing NativeScript applications.
 * @version v3.11.5
 * @author Kinvey, Inc.
 * @link http://www.kinvey.com
 * @license Apache-2.0
 */
module.exports=function(e){var t={};function n(r){if(t[r]){return t[r].exports}var i=t[r]={i:r,l:false,exports:{}};e[r].call(i.exports,i,i.exports,n);i.l=true;return i.exports}n.m=e;n.c=t;n.d=function(e,t,r){if(!n.o(e,t)){Object.defineProperty(e,t,{configurable:false,enumerable:true,get:r})}};n.n=function(e){var t=e&&e.__esModule?function t(){return e["default"]}:function t(){return e};n.d(t,"a",t);return t};n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};n.p="kinvey-nativescript-sdk/";return n(n.s=490)}({0:function(e,t,n){(function(t,r){var i;(function(t,n){true?e.exports=n():typeof define==="function"&&define.amd?define(n):t.ES6Promise=n()})(this,function(){"use strict";function e(e){var t=typeof e;return e!==null&&(t==="object"||t==="function")}function o(e){return typeof e==="function"}var s=undefined;if(Array.isArray){s=Array.isArray}else{s=function(e){return Object.prototype.toString.call(e)==="[object Array]"}}var u=s;var f=0;var c=undefined;var a=undefined;var l=function e(t,n){A[f]=t;A[f+1]=n;f+=2;if(f===2){if(a){a(E)}else{k()}}};function h(e){a=e}function v(e){l=e}var p=typeof window!=="undefined"?window:undefined;var d=p||{};var _=d.MutationObserver||d.WebKitMutationObserver;var y=typeof self==="undefined"&&typeof t!=="undefined"&&{}.toString.call(t)==="[object process]";var m=typeof Uint8ClampedArray!=="undefined"&&typeof importScripts!=="undefined"&&typeof MessageChannel!=="undefined";function g(){return function(){return t.nextTick(E)}}function w(){if(typeof c!=="undefined"){return function(){c(E)}}return T()}function b(){var e=0;var t=new _(E);var n=document.createTextNode("");t.observe(n,{characterData:true});return function(){n.data=e=++e%2}}function P(){var e=new MessageChannel;e.port1.onmessage=E;return function(){return e.port2.postMessage(0)}}function T(){var e=setTimeout;return function(){return e(E,1)}}var A=new Array(1e3);function E(){for(var e=0;e<f;e+=2){var t=A[e];var n=A[e+1];t(n);A[e]=undefined;A[e+1]=undefined}f=0}function L(){try{var e=i;var t=n(73);c=t.runOnLoop||t.runOnContext;return w()}catch(e){return T()}}var k=undefined;if(y){k=g()}else if(_){k=b()}else if(m){k=P()}else if(p===undefined&&"function"==="function"){k=L()}else{k=T()}function x(e,t){var n=arguments;var r=this;var i=new this.constructor(C);if(i[U]===undefined){ne(i)}var o=r._state;if(o){(function(){var e=n[o-1];l(function(){return Z(o,i,e,r._result)})})()}else{z(r,i,e,t)}return i}function j(e){var t=this;if(e&&typeof e==="object"&&e.constructor===t){return e}var n=new t(C);B(n,e);return n}var U=Math.random().toString(36).substring(16);function C(){}var O=void 0;var S=1;var K=2;var M=new Q;function R(){return new TypeError("You cannot resolve a promise with itself")}function W(){return new TypeError("A promises callback cannot return that same promise.")}function N(e){try{return e.then}catch(e){M.error=e;return M}}function F(e,t,n,r){try{e.call(t,n,r)}catch(e){return e}}function Y(e,t,n){l(function(e){var r=false;var i=F(n,t,function(n){if(r){return}r=true;if(t!==n){B(e,n)}else{H(e,n)}},function(t){if(r){return}r=true;J(e,t)},"Settle: "+(e._label||" unknown promise"));if(!r&&i){r=true;J(e,i)}},e)}function q(e,t){if(t._state===S){H(e,t._result)}else if(t._state===K){J(e,t._result)}else{z(t,undefined,function(t){return B(e,t)},function(t){return J(e,t)})}}function I(e,t,n){if(t.constructor===e.constructor&&n===x&&t.constructor.resolve===j){q(e,t)}else{if(n===M){J(e,M.error);M.error=null}else if(n===undefined){H(e,t)}else if(o(n)){Y(e,t,n)}else{H(e,t)}}}function B(t,n){if(t===n){J(t,R())}else if(e(n)){I(t,n,N(n))}else{H(t,n)}}function D(e){if(e._onerror){e._onerror(e._result)}G(e)}function H(e,t){if(e._state!==O){return}e._result=t;e._state=S;if(e._subscribers.length!==0){l(G,e)}}function J(e,t){if(e._state!==O){return}e._state=K;e._result=t;l(D,e)}function z(e,t,n,r){var i=e._subscribers;var o=i.length;e._onerror=null;i[o]=t;i[o+S]=n;i[o+K]=r;if(o===0&&e._state){l(G,e)}}function G(e){var t=e._subscribers;var n=e._state;if(t.length===0){return}var r=undefined,i=undefined,o=e._result;for(var s=0;s<t.length;s+=3){r=t[s];i=t[s+n];if(r){Z(n,r,i,o)}else{i(o)}}e._subscribers.length=0}function Q(){this.error=null}var V=new Q;function X(e,t){try{return e(t)}catch(e){V.error=e;return V}}function Z(e,t,n,r){var i=o(n),s=undefined,u=undefined,f=undefined,c=undefined;if(i){s=X(n,r);if(s===V){c=true;u=s.error;s.error=null}else{f=true}if(t===s){J(t,W());return}}else{s=r;f=true}if(t._state!==O){}else if(i&&f){B(t,s)}else if(c){J(t,u)}else if(e===S){H(t,s)}else if(e===K){J(t,s)}}function $(e,t){try{t(function t(n){B(e,n)},function t(n){J(e,n)})}catch(t){J(e,t)}}var ee=0;function te(){return ee++}function ne(e){e[U]=ee++;e._state=undefined;e._result=undefined;e._subscribers=[]}function re(e,t){this._instanceConstructor=e;this.promise=new e(C);if(!this.promise[U]){ne(this.promise)}if(u(t)){this.length=t.length;this._remaining=t.length;this._result=new Array(this.length);if(this.length===0){H(this.promise,this._result)}else{this.length=this.length||0;this._enumerate(t);if(this._remaining===0){H(this.promise,this._result)}}}else{J(this.promise,ie())}}function ie(){return new Error("Array Methods must be provided an Array")}re.prototype._enumerate=function(e){for(var t=0;this._state===O&&t<e.length;t++){this._eachEntry(e[t],t)}};re.prototype._eachEntry=function(e,t){var n=this._instanceConstructor;var r=n.resolve;if(r===j){var i=N(e);if(i===x&&e._state!==O){this._settledAt(e._state,t,e._result)}else if(typeof i!=="function"){this._remaining--;this._result[t]=e}else if(n===ae){var o=new n(C);I(o,e,i);this._willSettleAt(o,t)}else{this._willSettleAt(new n(function(t){return t(e)}),t)}}else{this._willSettleAt(r(e),t)}};re.prototype._settledAt=function(e,t,n){var r=this.promise;if(r._state===O){this._remaining--;if(e===K){J(r,n)}else{this._result[t]=n}}if(this._remaining===0){H(r,this._result)}};re.prototype._willSettleAt=function(e,t){var n=this;z(e,undefined,function(e){return n._settledAt(S,t,e)},function(e){return n._settledAt(K,t,e)})};function oe(e){return new re(this,e).promise}function se(e){var t=this;if(!u(e)){return new t(function(e,t){return t(new TypeError("You must pass an array to race."))})}else{return new t(function(n,r){var i=e.length;for(var o=0;o<i;o++){t.resolve(e[o]).then(n,r)}})}}function ue(e){var t=this;var n=new t(C);J(n,e);return n}function fe(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function ce(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function ae(e){this[U]=te();this._result=this._state=undefined;this._subscribers=[];if(C!==e){typeof e!=="function"&&fe();this instanceof ae?$(this,e):ce()}}ae.all=oe;ae.race=se;ae.resolve=j;ae.reject=ue;ae._setScheduler=h;ae._setAsap=v;ae._asap=l;ae.prototype={constructor:ae,then:x,catch:function e(t){return this.then(null,t)}};function le(){var e=undefined;if(typeof r!=="undefined"){e=r}else if(typeof self!=="undefined"){e=self}else{try{e=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}}var t=e.Promise;if(t){var n=null;try{n=Object.prototype.toString.call(t.resolve())}catch(e){}if(n==="[object Promise]"&&!t.cast){return}}e.Promise=ae}ae.polyfill=le;ae.Promise=ae;return ae})}).call(t,n(72),n(14))},101:function(e,t){e.exports=require("platform")},14:function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(1,eval)("this")}catch(e){if(typeof window==="object")n=window}e.exports=n},190:function(e,t){e.exports=require("./kinvey-nativescript-sdk")},37:function(e,t){function n(){this._events=this._events||{};this._maxListeners=this._maxListeners||undefined}e.exports=n;n.EventEmitter=n;n.prototype._events=undefined;n.prototype._maxListeners=undefined;n.defaultMaxListeners=10;n.prototype.setMaxListeners=function(e){if(!i(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");this._maxListeners=e;return this};n.prototype.emit=function(e){var t,n,i,u,f,c;if(!this._events)this._events={};if(e==="error"){if(!this._events.error||o(this._events.error)&&!this._events.error.length){t=arguments[1];if(t instanceof Error){throw t}else{var a=new Error('Uncaught, unspecified "error" event. ('+t+")");a.context=t;throw a}}}n=this._events[e];if(s(n))return false;if(r(n)){switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:u=Array.prototype.slice.call(arguments,1);n.apply(this,u)}}else if(o(n)){u=Array.prototype.slice.call(arguments,1);c=n.slice();i=c.length;for(f=0;f<i;f++)c[f].apply(this,u)}return true};n.prototype.addListener=function(e,t){var i;if(!r(t))throw TypeError("listener must be a function");if(!this._events)this._events={};if(this._events.newListener)this.emit("newListener",e,r(t.listener)?t.listener:t);if(!this._events[e])this._events[e]=t;else if(o(this._events[e]))this._events[e].push(t);else this._events[e]=[this._events[e],t];if(o(this._events[e])&&!this._events[e].warned){if(!s(this._maxListeners)){i=this._maxListeners}else{i=n.defaultMaxListeners}if(i&&i>0&&this._events[e].length>i){this._events[e].warned=true;console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[e].length);if(typeof console.trace==="function"){console.trace()}}}return this};n.prototype.on=n.prototype.addListener;n.prototype.once=function(e,t){if(!r(t))throw TypeError("listener must be a function");var n=false;function i(){this.removeListener(e,i);if(!n){n=true;t.apply(this,arguments)}}i.listener=t;this.on(e,i);return this};n.prototype.removeListener=function(e,t){var n,i,s,u;if(!r(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;n=this._events[e];s=n.length;i=-1;if(n===t||r(n.listener)&&n.listener===t){delete this._events[e];if(this._events.removeListener)this.emit("removeListener",e,t)}else if(o(n)){for(u=s;u-- >0;){if(n[u]===t||n[u].listener&&n[u].listener===t){i=u;break}}if(i<0)return this;if(n.length===1){n.length=0;delete this._events[e]}else{n.splice(i,1)}if(this._events.removeListener)this.emit("removeListener",e,t)}return this};n.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener){if(arguments.length===0)this._events={};else if(this._events[e])delete this._events[e];return this}if(arguments.length===0){for(t in this._events){if(t==="removeListener")continue;this.removeAllListeners(t)}this.removeAllListeners("removeListener");this._events={};return this}n=this._events[e];if(r(n)){this.removeListener(e,n)}else if(n){while(n.length)this.removeListener(e,n[n.length-1])}delete this._events[e];return this};n.prototype.listeners=function(e){var t;if(!this._events||!this._events[e])t=[];else if(r(this._events[e]))t=[this._events[e]];else t=this._events[e].slice();return t};n.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(r(t))return 1;else if(t)return t.length}return 0};n.listenerCount=function(e,t){return e.listenerCount(t)};function r(e){return typeof e==="function"}function i(e){return typeof e==="number"}function o(e){return typeof e==="object"&&e!==null}function s(e){return e===void 0}},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(0);var i=n(190);var o=n(491);var s;try{s=n(492)}catch(e){}var u=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}t.prototype._registerWithPushPlugin=function(e){var t=this;if(e===void 0){e={}}var n=e.android||{};return new r.Promise(function(e,r){if(!s){return r(new i.KinveyError("NativeScript Push Plugin is not installed.","Please refer to http://devcenter.kinvey.com/nativescript/guides/push#ProjectSetUp for help with"+" setting up your project."))}var o=n.notificationCallbackAndroid;n.notificationCallbackAndroid=function(e,n){if(typeof o==="function"){o(e,n)}t.emit("notification",JSON.parse(e))};s.register(n,e,r)})};t.prototype._unregisterWithPushPlugin=function(e){if(e===void 0){e={}}var t=e.android||{};return new r.Promise(function(e,n){if(!s){return n(new i.KinveyError("NativeScript Push Plugin is not installed.","Please refer to http://devcenter.kinvey.com/nativescript/guides/push#ProjectSetUp for help with"+" setting up your project."))}s.unregister(e,n,t)})};return t}(o.PushCommon);var f=new u;t.Push=f},491:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=n(0);var i=n(37);var o=n(101);var s=n(190);var u="__device";var f=function(e){__extends(t,e);function t(){return e!==null&&e.apply(this,arguments)||this}Object.defineProperty(t.prototype,"client",{get:function(){return s.client()},enumerable:true,configurable:true});t.prototype.onNotification=function(e){return this.on("notification",e)};t.prototype.onceNotification=function(e){return this.once("notification",e)};t.prototype.register=function(e){var t=this;if(e===void 0){e={}}return this._registerWithPushPlugin(e).then(function(n){if(!n){throw new s.KinveyError("Unable to retrieve the device token to register this device for push notifications.")}return t._registerWithKinvey(n,e)}).then(function(e){return t._saveTokenToCache(e)})};t.prototype.unregister=function(e){var t=this;if(e===void 0){e={}}return this._unregisterWithPushPlugin(e).then(function(){return t._getTokenFromCache()}).then(function(n){if(!n){throw new s.KinveyError("Unable to retrieve the device token to unregister this device for push notifications.")}return t._unregisterWithKinvey(n,e)}).then(function(){return t._deleteTokenFromCache()})};t.prototype._registerWithPushPlugin=function(e){if(e===void 0){e={}}return r.Promise.reject(new s.KinveyError("Unable to register for push notifications."))};t.prototype._unregisterWithPushPlugin=function(e){if(e===void 0){e={}}return r.Promise.reject(new s.KinveyError("Unable to unregister for push notifications."))};t.prototype._registerWithKinvey=function(e,t){if(t===void 0){t={}}var n=s.User.getActiveUser(this.client);if(!n){return r.Promise.reject(new s.KinveyError("Unable to register this device for push notifications.","You must login a user."))}var i=new s.KinveyRequest({method:s.RequestMethod.POST,url:this.client.apiHostname+"/push/"+this.client.appKey+"/register-device",authType:n?s.AuthType.Session:s.AuthType.Master,data:{platform:o.device.os.toLowerCase(),framework:"nativescript",deviceId:e},timeout:t.timeout,client:this.client});return i.execute().then(function(){return e})};t.prototype._unregisterWithKinvey=function(e,t){if(t===void 0){t={}}var n=s.User.getActiveUser(this.client);if(!n){return r.Promise.reject(new s.KinveyError("Unable to unregister this device for push notifications.","You must login a user."))}var i=new s.KinveyRequest({method:s.RequestMethod.POST,url:this.client.apiHostname+"/push/"+this.client.appKey+"/unregister-device",authType:n?s.AuthType.Session:s.AuthType.Master,data:{platform:o.device.os.toLowerCase(),framework:"nativescript",deviceId:e},timeout:t.timeout,client:this.client});return i.execute().then(function(e){return e.data})};t.prototype._getTokenFromCache=function(){var e=s.User.getActiveUser(this.client);if(!e){throw new s.KinveyError("Unable to retrieve device token.","You must login a user.")}return this._getOfflineRepo().then(function(t){return t.readById(u,e._id)}).catch(function(e){if(e instanceof s.NotFoundError){return{}}throw e}).then(function(e){if(e){return e.token}return null})};t.prototype._saveTokenToCache=function(e){var t=s.User.getActiveUser(this.client);if(!t){throw new s.KinveyError("Unable to save device token.","You must login a user.")}var n={_id:t._id,userId:t._id,token:e};return this._getOfflineRepo().then(function(e){return e.update(u,n)}).then(function(){return e})};t.prototype._deleteTokenFromCache=function(){var e=s.User.getActiveUser(this.client);if(!e){throw new s.KinveyError("Unable to delete device token.","You must login a user.")}return this._getOfflineRepo().then(function(t){return t.deleteById(u,e._id)}).then(function(){return null})};t.prototype._getOfflineRepo=function(){if(!this._offlineRepoPromise){this._offlineRepoPromise=s.DataAccess.repositoryProvider.getOfflineRepository()}return this._offlineRepoPromise};return t}(i.EventEmitter);t.PushCommon=f},492:function(e,t){e.exports=require("nativescript-push-notifications")},72:function(e,t){var n=e.exports={};var r;var i;function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}(function(){try{if(typeof setTimeout==="function"){r=setTimeout}else{r=o}}catch(e){r=o}try{if(typeof clearTimeout==="function"){i=clearTimeout}else{i=s}}catch(e){i=s}})();function u(e){if(r===setTimeout){return setTimeout(e,0)}if((r===o||!r)&&setTimeout){r=setTimeout;return setTimeout(e,0)}try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}function f(e){if(i===clearTimeout){return clearTimeout(e)}if((i===s||!i)&&clearTimeout){i=clearTimeout;return clearTimeout(e)}try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}var c=[];var a=false;var l;var h=-1;function v(){if(!a||!l){return}a=false;if(l.length){c=l.concat(c)}else{h=-1}if(c.length){p()}}function p(){if(a){return}var e=u(v);a=true;var t=c.length;while(t){l=c;c=[];while(++h<t){if(l){l[h].run()}}h=-1;t=c.length}l=null;a=false;f(e)}n.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1){for(var n=1;n<arguments.length;n++){t[n-1]=arguments[n]}}c.push(new d(e,t));if(c.length===1&&!a){u(p)}};function d(e,t){this.fun=e;this.array=t}d.prototype.run=function(){this.fun.apply(null,this.array)};n.title="browser";n.browser=true;n.env={};n.argv=[];n.version="";n.versions={};function _(){}n.on=_;n.addListener=_;n.once=_;n.off=_;n.removeListener=_;n.removeAllListeners=_;n.emit=_;n.prependListener=_;n.prependOnceListener=_;n.listeners=function(e){return[]};n.binding=function(e){throw new Error("process.binding is not supported")};n.cwd=function(){return"/"};n.chdir=function(e){throw new Error("process.chdir is not supported")};n.umask=function(){return 0}},73:function(e,t){}});
//# sourceMappingURL=push.android.js.map