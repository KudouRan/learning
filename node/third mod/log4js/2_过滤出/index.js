const log4js = require('log4js');
log4js.configure({
  appenders: {
    console: { type: 'console' },
    everything: { type: 'file', filename: '2_过滤出/cheese.log' },
    errors: { type: 'file', filename: '2_过滤出/error.log' },
    'just-errors': {
      type: 'logLevelFilter',
      appender: 'errors',
      level: 'error',
    },
  },
  categories: {
    default: {
      appenders: ['everything', 'console', 'just-errors'],
      level: 'trace',
    },
  },
});

const logger = log4js.getLogger('2_过滤出');
logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Comté.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
