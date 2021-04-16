'use strict';
const {Controller} = require('egg');

class StudentController extends Controller {
    async index() {
        const {ctx} = this;
        const name = ctx.params.name
        const student = await ctx.service.student.find(name)
        ctx.body = student
    }
}

module.exports = StudentController;
