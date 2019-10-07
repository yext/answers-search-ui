import '@babel/polyfill/noConflict';
import 'whatwg-fetch';

/* global Element */

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
