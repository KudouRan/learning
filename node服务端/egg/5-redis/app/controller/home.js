'use strict';

const { Controller } = require('egg');

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // set
    await app.redis.set('foo', 'bar');
    // get
    ctx.body = await app.redis.get('foo');
  }
}

module.exports = HomeController;
