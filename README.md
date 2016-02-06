## Identity Detective 

> This is the frontend for Identity Detective, which is used to unmask the identities for the on campus users.

## Getting Started

### Install dependencies

With Node.js installed, run the following one liner from the root:

```sh
npm install -g gulp bower && npm install && bower install
```

### Development workflow

#### Run Dev Server 

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

