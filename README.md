# Frontend developer playground

[![Build Status](https://travis-ci.org/iGitScor/frontend-developer.svg?branch=master)](https://travis-ci.org/iGitScor/frontend-developer)
[![dependencies Status](https://david-dm.org/iGitScor/frontend-developer/status.svg)](https://david-dm.org/iGitScor/frontend-developer)
[![devDependencies Status](https://david-dm.org/iGitScor/frontend-developer/dev-status.svg)](https://david-dm.org/iGitScor/frontend-developer?type=dev)

## Table of contents

0. [Project dependencies](#dependency-management)
0. [Build tools](#build)
0. [Javascript frameworks](#javascript-frameworks)
0. [Testing](#testing)

### Dependency management

[![Yarn](/docs/img/npm.png)](https://npmjs.com/)
[![Yarn](/docs/img/yarn.png)](https://yarnpkg.com/)

[Yarn](https://yarnpkg.com/) is a **package manager** which is much faster than [NPM](https://npmjs.com/), has offline support, and fetches dependencies more predictably. Since it came out in October 2016, it received a very quick adoption and is becoming the new package manager of choice of the JavaScript community.

### Build

#### Gulp
[![Gulp](/docs/img/gulp.png)](http://gulpjs.com/)

[Gulp](http://gulpjs.com/) is a **task runner**. It is similar to the tasks located under scripts in `package.json`, but writing task in a JS file is simpler and clearer than a JSON file.

#### Webpack

[![Webpack](/docs/img/webpack.png)](https://webpack.github.io/)

[Webpack](https://webpack.github.io/) is a tool that import different files and resolve these files using the filesystem. In a browser, there is no filesystem, and therefore imports point to nowhere. In order for entry point file o retrieve the tree of imports it needs, we are going to "**bundle**" that entire tree of dependencies into one file.

### Javascript frameworks

#### React

[![React](/docs/img/react.png)](https://facebook.github.io/react/)

[React](https://facebook.github.io/react/) is an open-source JavaScript library for building user interfaces. React user interfaces are typically rendered using stateful components.

#### Redux

[![Redux](/docs/img/redux.png)](http://redux.js.org/)

[Redux](http://redux.js.org/) manages the state of the application. It is composed of a **store** which is a plain JavaScript object representing the state of the app, **actions** which are typically triggered by users, and **reducers** which can be seen as action handlers. Reducers affect the application state (the store), and when the application state is modified, things happen in the app. A good visual demonstration of Redux can be [found here](http://slides.com/jenyaterpil/redux-from-twitter-hype-to-production#/9).

### Testing

#### Code quality

##### ESLINT

[![ESLint](/docs/img/eslint.png)](http://eslint.org/)

I'm going to **lint my code** to catch potential issues. [ESLint](http://eslint.org/) is the linter of choice for **ES6 code**. Instead of configuring the rules I want for my code, I use the [config created by Airbnb](https://github.com/airbnb/javascript).

##### Flow

[![Flow](/docs/img/flow.png)](https://flowtype.org/)

[Flow](https://flowtype.org/) is a **static type checker**. It detects inconsistent types in the code and allow to add explicit [type declarations in it via annotations](https://flowtype.org/docs/type-annotations.html).

#### Unit Testing

##### Mocha & Chai

[![Mocha](/docs/img/mocha.png)](https://mochajs.org/)
[![Chai](/docs/img/chai.png)](http://chaijs.com/)

I use [Mocha](https://mochajs.org/) as my main testing framework. Mocha is easy to use, has tons of features, and is currently the [most popular JavaScript testing framework](http://stateofjs.com/2016/testing/). It is very flexible and modular. In particular, allow using any assertion library. [Chai](http://chaijs.com/) is a great assertion library that has a lot of plugins available.

## Credits

_Inspired by [@verekia](https://twitter.com/verekia)_
