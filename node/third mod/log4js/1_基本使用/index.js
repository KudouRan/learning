const log4js = require('log4js');
log4js.configure({
  appenders: {
    console: { type: 'console' },
    cheese: { type: 'file', filename: '1_基本使用/cheese.log' },
  },
  categories: { default: { appenders: ['cheese', 'console'], level: 'trace' } },
});

const logger = log4js.getLogger('1_基本使用');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
