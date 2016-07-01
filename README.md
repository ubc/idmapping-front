## Identity Detective 

> This is the frontend for Identity Detective, which is used to unmask the identities for the on campus users.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
## Getting Started

### Install dependencies

With Node.js installed, run the following one liner from the root:

```sh
npm install -g gulp bower && npm install && cd public && bower install ../bower.json && cd .. && node_modules/.bin/tsd install
```

### Development workflow

#### Run Dev Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To use the mock API server (defined in `app/test/server.js`):
```sh
gulp dev 
```

Or use a real backend server (Change the BACKEND_URL to point to the IP/Port of the backend server):
```sh
BACKEND_URL=http://192.168.99.100:8000 gulp dev 
```

This starts a mock backend API server (if no BACKEND_URL environment variable provided), a browser-sync server to serve the frontend site and a karma server to watch and run tests automatically. When a file is changed, the corresponding server will be reload/refreshed and unit tests will be run.
It also outputs an IP address you can connect to both locally and remotely for the frontend. 

#### Run tests

The unit tests are run automatically when using `gulp dev`. To run them manually:
```sh
gulp test
```

This runs the unit tests defined in the `app/test` directory.

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

#### Notes

* If it shows the syntax errors (argument type not matching) in WebStorm (or PyCharm, Idea, etc.) in the .ts file, it is caused by core-js typing. Excluding typings directory solves the problem. 
