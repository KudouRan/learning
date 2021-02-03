define(['m1'], function (m1) {
  'use strict';
  return function () {
    m1();
    console.log('this is m2');
  };
});
