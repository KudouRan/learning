'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app;
  router.post('/user/add', controller["user"].add);
  router.post('/user/remove', controller["user"].remove);
  router.post('/user/modify', controller["user"].modify);
  router.get('/user/:username', controller["user"].findByName);
  router.get('/user/', controller["user"].findAll);
};
