import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;

  const jwt = middleware.verify();

  // 假设进入首页需要登录
  // 报错是ts有的,js不会
  router.get('/', jwt, controller.home.index);

  // 假设有个登录接口
  router.post('/login', controller.user.login);
};
