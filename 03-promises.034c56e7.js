function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var i={id:e,exports:{}};return t[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){n[e]=o},o.parcelRequired7c6=i);var r=i("7Y9D8");const l=document.querySelector(".form");l.addEventListener("submit",(function(o){if(o.preventDefault(),s)return;s=!0;const t=new FormData(l),n=Number(t.get("delay")),i=t.get("step"),u=t.get("amount");let a=[];for(let o=1;o<=u;o+=1){const t=d(o,n+(o-1)*i).then((({position:o,delay:t})=>{e(r).Notify.success(`✅ Fulfilled promise ${o} in ${t}ms`),console.log(`✅ Fulfilled promise ${o} in ${t}ms`)})).catch((({position:o,delay:t})=>{e(r).Notify.failure(`❌ Rejected promise ${o} in ${t}ms`),console.log(`❌ Rejected promise ${o} in ${t}ms`)}));a.push(t)}Promise.all(a).finally((()=>{s=!1}))}));let s=!1;function d(e,o){return new Promise(((t,n)=>{const i=Math.random()>.3;setTimeout((()=>{i?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}
//# sourceMappingURL=03-promises.034c56e7.js.map
