!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=7)}([function(e,t){window.addEventListener("load",(function(){console.log("%c Contact : 010 - 8423 - 6277 ","border: 5px dotted #CAC327; padding: 10px; box-sizing: border-box; color:#CAC327;font-family: 'Open Sans', system-ui;font-size:2rem;-webkit-text-stroke: 1px black;font-weight:bold");var e=document.querySelector("body"),t=document.querySelector(".gnb_item.study a"),o=document.querySelector(".study_list--wrap"),n=document.querySelectorAll(".popup-layer"),r=document.querySelectorAll(".open-popup-layer");document.querySelector("#pageLoading").classList.add("hide"),document.querySelector("#pageLoaded").classList.remove("hide"),t.addEventListener("click",(function(e){o.classList.contains("is-show")?o.classList.remove("is-show"):o.classList.add("is-show")})),n.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation()}))})),r.forEach((function(e){e.addEventListener("click",(function(e){e.stopPropagation(),e.preventDefault()}))})),e.addEventListener("click",(function(e){n.forEach((function(e){e.classList.remove("is-show")}))}));var i=document.querySelector(".dimmed");if(i){var c=i.querySelector(".btn-close-dimmed");e.addEventListener("click",(function(e){e.target===c&&i.classList.remove("is-show")}))}}))},,function(e,t,o){},,,,,function(e,t,o){"use strict";o.r(t);o(0),o(2);var n="../profile.JPG?b838104612ab179230eafaf882fdee08";document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".profile img");console.log("myImg =",n),e.setAttribute("src","my/".concat(n))}))}]);