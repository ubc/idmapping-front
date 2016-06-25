module.exports = function(config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine'],

    exclude: [
      'node_modules/**/*spec.js'
    ],

    // list of files / patterns to load in the browser
    files: [
      // Polyfills.
      'node_modules/core-js/client/shim.min.js',

      // System.js for module loading
      'node_modules/systemjs/dist/system-polyfills.js',
      'node_modules/systemjs/dist/system.src.js',

      // Zone.js dependencies
      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',

      // RxJs.
      { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // paths loaded via module imports
      // Angular itself
      { pattern: 'node_modules/@angular/**/*.js', included: false, watched: true },

      // { pattern: 'dist/dev/**/*.js', included: false, watched: true },
      // { pattern: 'dist/dev/**/*.html', included: false, watched: true, served: true },
      // { pattern: 'dist/dev/**/*.css', included: false, watched: true, served: true },
      { pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: false, watched: false }, // PhantomJS2 (and possibly others) might require it

      // suppress annoying 404 warnings for resources, images, etc.
      // { pattern: 'dist/dev/assets/**/*', watched: false, included: false, served: true },

      // angular2 jwt
      { pattern: 'node_modules/angular2-jwt/**/*.js', included: false, watched: false },

      {pattern: 'karma-test-shim.js', included: true, watched: true},

      // paths loaded via module imports
      // {pattern: 'app/**/*.spec.js', included: true, watched: true},
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
      dir: 'coverage/',
      reporters: [
        { type: 'text-summary' },
        { type: 'json', subdir: '.', file: 'coverage-final.json' },
        { type: 'html' }
      ]
    },

    singleRun: true
  })
};
