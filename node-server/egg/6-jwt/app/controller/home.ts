import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    // const { ctx, app } = this;

    // ctx.body = ctx.state.user;

    // 还可以手动识别
    // const token = ctx.request.header.authorization.split(' ')[1];
    // console.log(token);

    // console.log(ctx.state.user);

    // ctx.body = app.jwt.verify(token, app.config.jwt.secret);

    this.ctx.body = 'hi, egg';
  }
}
