!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var l=i("6JpON"),r=document.querySelector(".form");r.addEventListener("submit",(function(n){if(n.preventDefault(),a)return;a=!0;r.elements.delay.value;for(var o=Number(r.elements.delay.value),t=r.elements.step.value,i=r.elements.amount.value,u=[],s=1;s<=i;s+=1){var f=c(s,o+(s-1)*t).then((function(n){var o=n.position,t=n.delay;e(l).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;e(l).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))}));u.push(f)}Promise.all(u).finally((function(){a=!1}))}));var a=!1;function c(e,n){return new Promise((function(o,t){var i=Math.random()>.3;setTimeout((function(){i?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}}();
//# sourceMappingURL=03-promises.47ba58c2.js.map