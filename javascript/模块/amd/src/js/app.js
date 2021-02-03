require.config({
  // baseUrl: '',
  paths: {
    m1: './m1',
    m2: './m2',
  },
});

define(['m2'], function (m2) {
  'use strict';

  m2();
});
