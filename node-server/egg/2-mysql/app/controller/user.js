'use strict';

const {Controller} = require('egg');

class UserController extends Controller {
    async add() {
        const {ctx} = this;
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        ctx.body = await ctx.service.user.insert({username, password})
    }

    async findByName() {
        const {ctx} = this;
        const username = ctx.params.username
        ctx.body = await ctx.service.user.get(username)
    }

    async findAll() {
        const {ctx} = this;
        ctx.body = await ctx.service.user.select()
    }

    async modify() {
        const {ctx} = this;
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        ctx.body = await ctx.service.user.update({password}, {username})
    }

    async remove() {
        const {ctx} = this;
        const username = ctx.request.body.username
        ctx.body = await ctx.service.user.delete(username)
    }
}

module.exports = UserController;
