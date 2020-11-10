/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = (appInfo) => {
    /**
     * built-in config
     * @type {Egg.EggAppConfig}
     **/
    const config = (exports = {});

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1598668620427_2462';

    // add your middleware config here
    config.middleware = [];

    config.security = {
        csrf: {
            enable: false
        }
    }

    config.mongoose = {
        client: {
            //用户名:密码@地址:端口/数据库名
            url: 'mongodb://catlair:123456@127.0.0.1:27017/test',
            //需要用用户登录需要配置authSource
            options: {useNewUrlParser: true, authSource: 'admin'},
        }
    };

    // add your user config here
    const userConfig = {
        // myAppName: 'egg',
    };

    return {
        ...config,
        ...userConfig,
    };
};
