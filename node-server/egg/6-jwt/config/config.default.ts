import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1599005414152_9798';

  // add your egg config in here
  config.middleware = [];

  // 先关掉安全验证,不然post有点麻烦
  config.security = {
    csrf: {
      enable: false,
    },
  };

  config.jwt = {
    // 加密字符串
    secret: 'demo',
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
