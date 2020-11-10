'use strict';
const {Controller} = require('egg');

class HomeController extends Controller {
    async index() {
        const {ctx} = this;
        ctx.body = 'hi, egg';
    }

    async demo() {
        const {ctx} = this;
        ctx.body = {name: 'hello'};
    }
}

module.exports = HomeController;
