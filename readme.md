This repo is a minimal reproduction of a bug I've encountered when trying to use custom functions in Sass with webpack.

## To reproduce 

The steps to reproduce this on your own are pretty simple:

1. Install a basic webpack environment with sass: `npm install webpack webpack-cli webpack-dev-server sass-loader sass`
2. Copy from this repo `webpack.config.mjs` and contents of `src/`
3. Run `node ./node_modules/webpack-dev-server/bin/webpack-dev-server.js`

## Expected behavior

The project should compile successfully.

I've followed the example in Sass-lang.org's documentation for [creating a custom function](https://sass-lang.com/documentation/js-api/interfaces/Options#functions). Namely, I created a new `pow` function which accepts two arguments.

I've put the above into the appropriate place in webpack.config.mjs.

## Actual behavior

The project fails to compile with the following error:

    SassError: NoSuchMethodError: method not found: 'assertNumber' on null
    ╷
    2 │     font-weight: pow(10, 3);
    │                  ^^^^^^^^^^
    ╵
    src/test.scss 2:18  root stylesheet
    SassError: SassError: NoSuchMethodError: method not found: 'assertNumber' on null
    ╷
    2 │     font-weight: pow(10, 3);
    │                  ^^^^^^^^^^
    ╵
    src/test.scss 2:18  root stylesheet
        at Object.loader (/Users/adam/sass-webpack-test/node_modules/sass-loader/dist/index.js:56:14)
        at process.processTicksAndRejections (node:internal/process/task_queues:95:5)
    @ ./src/index.js 1:0-21

    webpack 5.82.0 compiled with 1 error in 622 ms