// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '..',
    frameworks: ['jasmine'],
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],
    customLaunchers: {
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    // list of files / patterns to load in the browser
    files: [
      { pattern: 'dist/vendor/es6-shim/es6-shim.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/zone.js', included: true, watched: false },
      { pattern: 'dist/vendor/reflect-metadata/Reflect.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system-polyfills.js', included: true, watched: false },
      { pattern: 'dist/vendor/systemjs/dist/system.src.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/async-test.js', included: true, watched: false },
      { pattern: 'dist/vendor/zone.js/dist/fake-async-test.js', included: true, watched: false },
      // 'node_modules/zone.js/dist/jasmine-patch.js',

      { pattern: 'config/karma-test-shim.js', included: true, watched: true },

      // angular2 jwt
      { pattern: 'dist/vendor/angular2-jwt/**/*.js', included: false, watched: false },

      // Distribution folder.
      { pattern: 'dist/**/*', included: false, watched: true }
      // 'node_modules/core-js/client/shim.min.js',

    ],
    exclude: [
      // Vendor packages might include spec files. We don't want to use those.
      'dist/vendor/**/*.spec.js',
      'node_modules/**/*spec.js'
    ],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'dist/app/**/!(*spec).js': ['coverage']
    },

    // Coverage reporter generates the coverage
    reporters: ['progress', 'dots', 'coverage'],

    // proxied base paths
    //proxies: {
      // required for component assests fetched by Angular's compiler
    //  '/app': '/base/app'
    //},

    port: 9876,


    loggers: [
      {type: __dirname + '/gulplog_appender.js', layout: {type: 'pattern', pattern: '%[[Karma] [%p] %c -%] %m'}}
    ],

    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,

    coverageReporter: {
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json', subdir: '.', file: 'coverage-final.json' },
        { type: 'html' }
      ]
    }
  })
};
