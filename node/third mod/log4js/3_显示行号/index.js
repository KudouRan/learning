const log4js = require('log4js');
log4js.configure({
  appenders: {
    out: {
      type: 'file',
      filename: '3_显示行号/cheese.log',
      layout: {
        type: 'pattern',
        pattern: '%d %p %c %f:%l %m%n',
      },
    },
    console: {
      type: 'console',
      layout: {
        type: 'pattern',
        pattern: '%d %p %c %f:%l %m%n',
      },
    },
  },
  categories: {
    default: {
      appenders: ['out', 'console'],
      level: 'info',
      enableCallStack: true, //必须
    },
  },
});
const logger = log4js.getLogger('thing');
logger.info('this should give me a line number now');
