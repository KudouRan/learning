define(['./toType'], function (toType) {
  'use strict';
  window.$ = {};
  window.$.type = toType;

  console.log($.type([1, 23]));
});
