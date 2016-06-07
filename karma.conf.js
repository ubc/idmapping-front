module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine'],

    exclude: [],

    files: [
      // paths loaded by Karma
      {pattern: 'node_modules/@angular/bundles/angular2-polyfills.js', included: true, watched: true},
      {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
      {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/bundles/angular2.dev.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/bundles/router.dev.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/bundles/http.dev.js', included: true, watched: true},
      {pattern: 'node_modules/@angular/bundles/testing.dev.js', included: true, watched: true},
      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      {pattern: 'app/**/*.js', included: false, watched: true},

      // paths to support debugging with source maps in dev tools
      {pattern: 'app/**/*.ts', included: false, watched: false},
      {pattern: 'app/**/*.js.map', included: false, watched: false},

      // html templates
      {pattern: 'app/**/*.html', included: false, watched: true}
    ],

    // proxied base paths
    proxies: {
      // required for component assests fetched by Angular's compiler
      '/app': '/base/app'
    },

    port: 9876,

    logLevel: config.LOG_INFO,

    loggers: [
      {type: __dirname + '/gulplog_appender.js', layout: {type: 'pattern', pattern: '%[[Karma] [%p] %c -%] %m'}}
    ],

    colors: true,

    autoWatch: true,

    browsers: ['Chrome'],

    // Karma plugins loaded
    plugins: [
      'karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher'
    ],

    // Coverage reporter generates the coverage
    reporters: ['progress', 'dots', 'coverage'],

    // Source files that you wanna generate coverage for.
    // Do not include tests or libraries (these files will be instrumented by Istanbul)
    preprocessors: {
      'app/**/!(*spec).js': ['coverage']
    },

    coverageReporter: {
      reporters:[
        {type: 'json', subdir: '.', file: 'coverage-final.json'}
      ]
    },

    singleRun: true
  })
};
