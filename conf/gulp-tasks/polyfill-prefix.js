import '@babel/polyfill/noConflict';
import 'whatwg-fetch';

/* eslint-env browser */

if (!Element.prototype.matches) { // Element.matches polyfill from MDN
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

// Event constructor polyfill
(function () {
  if (typeof window.CustomEvent === 'function') {
    return false;
  }

  function CustomEvent (event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent('CustomEvent');
    evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
    return evt;
  }

  window.CustomEvent = CustomEvent;
  window.Event = CustomEvent;
})();

// Element.closest polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest#Polyfill
(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
      Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) return el;
        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);
      return null;
    };
  }
})();

// ParentNode.prepend polyfill
// https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/prepend#Polyfill
(function () {
  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty('prepend')) {
        return;
      }
      Object.defineProperty(item, 'prepend', {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend () {
          var argArr = Array.prototype.slice.call(arguments);

          var docFrag = document.createDocumentFragment();

          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });

          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]);
})();
