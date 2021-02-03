define(['./class2type', './toString'], function (class2type, toString) {
  'use strict';

  'Boolean Number String Function Array Date RegExp Object Error Symbol'
    .split(' ')
    .forEach(function (name) {
      class2type['[object ' + name + ']'] = name.toLowerCase();
    });

  function toType(obj) {
    if (obj == null) {
      return obj + '';
    }

    return typeof obj === 'object' || typeof obj === 'function'
      ? class2type[toString.call(obj)] || 'object'
      : typeof obj;
  }

  return toType;
});
