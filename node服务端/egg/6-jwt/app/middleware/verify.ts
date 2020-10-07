import { Context } from 'egg';

export default () => {
  return async (ctx: Context, next: () => Promise<any>) => {
    console.log(ctx.state.uesr); //undefined

    //只要Bearer后面部分
    let token = ctx.request.header.authorization;
    if (token) {
      token = token.split(' ')[1];
      try {
        //...验证用户的有效性(略)
        await next();
      } catch (error) {
        //错误信息(状态码,响应体)
        ctx.status = 500;
        ctx.body = {
          msg: '鬼知道什么错误',
        };
      }
    } else {
      //错误信息(状态码,响应体)
      ctx.status = 401;
      ctx.body = {
        msg: '没有传入token',
      };
    }
  };
};
