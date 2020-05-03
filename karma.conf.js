process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha'],
        files: [{
            pattern: 'test/bundle.test.js',
            type: 'module',
        }],
        reporters: ['progress'],
        autoWatch: true,
        browsers: ['ChromeHeadless'],
        singleRun: false
    });
};
