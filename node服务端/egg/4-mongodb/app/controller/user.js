'use strict';

const {Controller} = require('egg');

class UserController extends Controller {
    async add() {
        const {ctx} = this
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        ctx.body = await ctx.service.user.create({username,password})
    }

    async findByName() {
        const {ctx} = this
        const username = ctx.params.username
        ctx.body = await ctx.service.user.find({username})
    }

    async findAll() {
        const {ctx} = this
        ctx.body = await ctx.service.user.find({})
    }

    async modify() {
        const {ctx} = this
        const username = ctx.request.body.username
        const password = ctx.request.body.password
        //通过查询username修改password
        ctx.body = await ctx.service.user.updateOne({username},{password})
    }

    async remove() {
        //通过名字删除
        const {ctx} = this
        const username = ctx.request.body.username
        ctx.body = await ctx.service.user.remove({username})
    }
}

module.exports = UserController;
