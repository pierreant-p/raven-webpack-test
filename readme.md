# Purpose

This is a test to demonstrate that Sentry will fail to report some errors when bundled with Webpack.

# Running the test

```
npm install;
npm install webpack -g;
webpack index.js bundle.js;

# eval sourcemaps
webpack index.js bundle-eval.js --devtool eval;

# source sourcemaps
webpack index.js bundle-eval.js --devtool source-map;
```
