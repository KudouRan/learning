'use strict';

const { Service } = require('egg');

class UserService extends Service {
  async insert(info) {
    const req = await this.app.mysql.insert('users', info);
    return { req };
  }

  async select() {
    const users = await this.app.mysql.select('users');
    return { users };
  }

  async get(username) {
    const user = await this.app.mysql.get('users', { username });
    return { user };
  }

  async delete(username) {
    const user = await this.app.mysql.delete('users', { username });
    return { user };
  }

  async update(info, op) {
    const user = await this.app.mysql.update('users', info, { where: op });
    return { user };
  }
}

module.exports = UserService;
