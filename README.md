## Identity Detective 

> This is the frontend for Identity Detective, which is used to unmask the identities for the on campus users.

## Getting Started

### Install dependencies

With Node.js installed, run the following one liner from the root:

```sh
npm install -g gulp bower && npm install && bower install
```

### Development workflow

#### Serve / watch

```sh
BACKEND_URL=http://192.168.99.100:8000 gulp serve
```

This outputs an IP address you can use to locally test and another that can be used on devices connected to your network. Change the BACKEND_URL to point to the IP/Port of the backend server.

#### Run tests

```sh
gulp test:local
```

This runs the unit tests defined in the `app/test` directory through [web-component-tester](https://github.com/Polymer/web-component-tester).

To run tests Java 7 or higher is required. To update Java go to http://www.oracle.com/technetwork/java/javase/downloads/index.html and download ***JDK*** and install it.

#### Build & Vulcanize

```sh
gulp
```

Build and optimize the current project, ready for deployment. This includes linting as well as vulcanization, image, script, stylesheet and HTML optimization and minification.

