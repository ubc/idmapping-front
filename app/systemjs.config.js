(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                        '.',
    // 'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    '@angular':                   'node_modules/@angular',
    'rxjs':                       'node_modules/rxjs',
    'angular2-jwt':               'node_modules/angular2-jwt'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                        { main: 'boot.js',  defaultExtension: 'js' },
    'rxjs':                       { defaultExtension: 'js' },
    'dist': { defaultExtension: 'js', format: 'register' },
    // 'angular2-in-memory-web-api': { defaultExtension: 'js' },
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
    'testing'
  ];


  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: pkgName + '.umd.js', defaultExtension: 'js' };
  });

  var config = {
    defaultJSExtensions: true,
    map: map,
    packages: packages
  };

  // filterSystemConfig - index.html's chance to modify config before we register it.
  if (global.filterSystemConfig) { global.filterSystemConfig(config); }

  System.config(config);

})(this);
