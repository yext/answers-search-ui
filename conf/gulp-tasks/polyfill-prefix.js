import 'core-js/stable';
import 'regenerator-runtime/runtime';
import 'whatwg-fetch';

/* eslint-env browser */
/* global ActiveXObject */

if (!Element.prototype.matches) { // Element.matches polyfill from MDN
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}

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

// Navigator.sendBeacon polyfill
// Combination of the compact Financial Times polyfill:
// https://github.com/Financial-Times/polyfill-library/blob/master/polyfills/navigator/sendBeacon/polyfill.js
// with the async-by-default behavior of Miguel Mota's polyfill:
// https://github.com/miguelmota/Navigator.sendBeacon/blob/master/sendbeacon.js
(function () {
  if (window.navigator && window.navigator.sendBeacon) {
    return;
  }

  if (!('navigator' in window)) window.navigator = {};
  window.navigator.sendBeacon = function sendBeacon (url, data) {
    var event = window.event && window.event.type;
    var sync = event === 'unload' || event === 'beforeunload';
    var xhr = ('XMLHttpRequest' in window) ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('POST', url, !sync);
    xhr.setRequestHeader('Accept', '*/*');
    if (typeof data === 'string') {
      xhr.setRequestHeader('Content-Type', 'text/plain;charset=UTF-8');
    } else if (Object.prototype.toString.call(data) === '[object Blob]') {
      if (data.type) {
        xhr.setRequestHeader('Content-Type', data.type);
      }
    }
    xhr.send(data);
    return true;
  };
})();
