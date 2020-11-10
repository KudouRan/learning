import { Controller } from 'egg';

export default class UserController extends Controller {
  public async login() {
    const { ctx, app } = this;

    // 获取前端传来的数据
    const username = ctx.query.username;
    // ...密码等...

    // 一系列鉴权操作确认本人登录

    const token = app.jwt.sign(
      {
        username,
        // ...需要保存在token中的信息(不重要的)
      },
      app.config.jwt.secret,
    );

    // 返回给用户
    ctx.body = {
      token,
      username,
      msg: '登录成功',
    };
  }
}
