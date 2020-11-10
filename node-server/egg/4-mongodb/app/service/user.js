'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async create(info) {
    return this.ctx.model.User.create(info)
  }

  async find(info) {
    return this.ctx.model.User.find(info)
  }

  async remove(info) {
    return this.ctx.model.User.remove(info)
  }

  async updateOne(username,info) {
    return this.ctx.model.User.updateOne(username,info)
  }
}

module.exports = UserService;
