(()=>{"use strict";var n={122:(n,e,r)=>{r.d(e,{Z:()=>c});var t=r(15),o=r.n(t),a=r(645),i=r.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap);"]),i.push([n.id,":root {\n    --primary-color: rgb(6, 78, 100);\n    --primary-color-darker: rgb(2, 39, 59);\n}\n\n* {\n    box-sizing: border-box;\n    outline: none;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    padding: 20px;\n    background: #fff;\n    margin: 20px auto;\n    border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-weight: 700;\n    font-size: 18px;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 25px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\nform button:active {\n    background-color: aquamarine;\n}\n\n.container h1 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.result {\n    font-size: 2em;\n    color: var(--primary-color);\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 40px;\n    letter-spacing: 3px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,aAAa;AACjB;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA;;;IAGI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,gBAAgB;IAChB,eAAe;IACf,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@400;700&display=swap');\n\n:root {\n    --primary-color: rgb(6, 78, 100);\n    --primary-color-darker: rgb(2, 39, 59);\n}\n\n* {\n    box-sizing: border-box;\n    outline: none;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Quicksand', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    padding: 20px;\n    background: #fff;\n    margin: 20px auto;\n    border-radius: 10px;\n}\n\nform input,\nform label,\nform button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-weight: 700;\n    font-size: 18px;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 25px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\nform button:active {\n    background-color: aquamarine;\n}\n\n.container h1 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.result {\n    font-size: 2em;\n    color: var(--primary-color);\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 40px;\n    letter-spacing: 3px;\n}"],sourceRoot:""}]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=n(e);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},15:n=>{function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var r=0,t=new Array(e);r<e;r++)t[r]=n[r];return t}n.exports=function(n){var r,t,o=(t=4,function(n){if(Array.isArray(n))return n}(r=n)||function(n,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(n)){var r=[],t=!0,o=!1,a=void 0;try{for(var i,c=n[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);t=!0);}catch(n){o=!0,a=n}finally{try{t||null==c.return||c.return()}finally{if(o)throw a}}return r}}(r,t)||function(n,r){if(n){if("string"==typeof n)return e(n,r);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?e(n,r):void 0}}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[1],i=o[3];if("function"==typeof btoa){var c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),A="/*# ".concat(s," */"),l=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[a].concat(l).concat([A]).join("\n")}return[a].join("\n")}},379:(n,e,r)=>{var t,o=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function i(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function c(n,e){for(var r={},t=[],o=0;o<n.length;o++){var c=n[o],s=e.base?c[0]+e.base:c[0],A=r[s]||0,l="".concat(s," ").concat(A);r[s]=A+1;var u=i(l),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(f)):a.push({identifier:l,updater:m(f,e),references:1}),t.push(l)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var a=r.nc;a&&(t.nonce=a)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=o(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var A,l=(A=[],function(n,e){return A[n]=e,A.filter(Boolean).join("\n")});function u(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var p=null,d=0;function m(n,e){var r,t,o;if(e.singleton){var a=d++;r=p||(p=s(e)),t=u.bind(null,r,a,!1),o=u.bind(null,r,a,!0)}else r=s(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var r=c(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=i(r[t]);a[o].references--}for(var s=c(n,e),A=0;A<r.length;A++){var l=i(r[A]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=s}}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={id:t,exports:{}};return n[t](a,a.exports,r),a.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{class n{constructor(n){Object.defineProperty(this,"cleanCPF",{writable:!1,enumerable:!1,configurable:!1,value:n.replace(/\D+/g,"")})}isSequency(){return this.cleanCPF.charAt(0).repeat(this.cleanCPF.length)===this.cleanCPF}generateNewCPF(){var e=this.cleanCPF.slice(0,-2),r=n.generateDigit(e),t=n.generateDigit(e+r);this.newCPF=e+r+t}static generateDigit(n){var e=0,r=n.length+1;for(var t of n)e+=r*Number(t),r--;var o=11-e%11;return o<=9?o:0}validate(){return!!this.cleanCPF&&"string"==typeof this.cleanCPF&&11===this.cleanCPF.length&&!this.isSequency()&&(this.generateNewCPF(),this.newCPF===this.cleanCPF)}}console.log("Cheguei aqui");var e,t=r(379),o=r.n(t),a=r(122);o()(a.Z,{insert:"head",singleton:!1}),a.Z.locals,e=new class{rand(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(e-n)+n))}formated(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}generateNewCPF(){var e=this.rand(),r=n.generateDigit(e),t=e+r+n.generateDigit(e+r);return this.formated(t)}},document.querySelector(".result").innerHTML=e.generateNewCPF()})()})();
//# sourceMappingURL=bundle.js.map