Starter/Boilerplace for Typescript, Webpack and Jest
=========================================

This is a starter project for anyone who wants to hit the ground running quickly
with medium sized Typescript project if you are happy with the few handy presets
I have chosen for you:

1. The project will build two bundles, `app.js` and `vendor.js`. Doing so keeps
   the external libraries separate from your project, and can help with download
   times.

2. The `jest` test runner is included, and it provides the 
   same feature set as `jasmine` and `mocha`, so if you come from
   that world you will be totally comfortable.

Quick start
=====================

To run application

    `npm start`

To run tests

    `npm test`

To watch tests

    `npm run test:watch`

To publish package

    `npm run publish`

Notes:
========

To get the basic webpack experience going
-------------------------------------------

1. Install packages

        yarn add typescript webpack webpack-dev-server ts-node ts-loader    @types/webpack  --dev

2. Set up `webpack.config.ts`

3. Run `webpack-dev-server`

4. Add a shortcut to `package.json` so that we can use the convention of `npm start`

        "scripts": {
            "start": "webpack-dev-server"
        }


To run tests with jest
-------------------------

1. Install packages

        yarn add @types/jest jest ts-jest--dev
        yarn add corejs

2. Update `tsconfig.json` lib section so that it understands es6:
   
        "lib": [ "es2015", "dom" ],

3. Update `package.json` to provide `jest` specifications. See
   [Jest Usage](https://www.npmjs.com/package/ts-jest#usage)

4. Update `package.sjon` so that `jest` will search our `baseUrl` which is set to `src/`:

        "jest": {
            "moduleDirectories": ["node_modules", "src"]
        }

5. Add a shortcut to `package.json` so that we can use the convention of `npm test` and `npm test:watch`

    "scripts": {
        "test"      : "jest",
        "test:watch": "jest --watch"
    }

References
-----------

[1] [Unambiguous Webpack config with Typescript](https://medium.com/webpack/unambiguous-webpack-config-with-typescript-8519def2cac7)
