!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=i);var u,r=i("6JpON"),a={inputDelay:document.querySelector('[name="delay"]'),inputStep:document.querySelector('[name="step"]'),inputAmount:document.querySelector('[name="amount"]'),submitBtn:document.querySelector("button")};function l(e,n){return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}a.submitBtn.addEventListener("click",(function(n){n.preventDefault();var t=Number(a.inputDelay.value),o=Number(a.inputStep.value),i=Number(a.inputAmount.value);if(t<0||o<0||i<=0)return e(r).Notify.warning("Enter a positive value!");for(u=1;u<=i;u+=1)l(u,t).then((function(n){var t=n.position,o=n.delay;e(r).Notify.success("✅ Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(r).Notify.failure("❌ Rejected promise ".concat(t," in ").concat(o,"ms"))})),t+=o}))}();
//# sourceMappingURL=03-promises.96bbf339.js.map