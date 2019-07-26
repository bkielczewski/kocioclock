const config = exports.config = require('./protractor.conf.js').config;
config.capabilities.chromeOptions = {
  args: ['--headless', '--no-sandbox']
};
