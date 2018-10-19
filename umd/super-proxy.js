(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.superProxy = factory());
}(this, (function () { 'use strict';

  var superProxy = function superProxy() {
    var returnSuperProxy = function returnSuperProxy() {
      return superProxy();
    };

    return new Proxy(function () {}, {
      get: returnSuperProxy,
      apply: returnSuperProxy
      construct: returnSuperProxy
    });
  };

  return superProxy;

})));
