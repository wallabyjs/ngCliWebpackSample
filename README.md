[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)

# Wallaby.js

**To get wallaby.js working** after you have generated your project with `angular-cli`, you'll need to do the following:
- Add the [wallaby.js config file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/wallaby.js) to the project.
- Add the [wallaby.js test bootstrap file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/src/wallabyTest.ts) to the project.
- Exclude the [`src/wallabyTest.ts` file in the `tsconfig.json`](https://github.com/wallabyjs/ngCliWebpackSample/blob/82d4f43d1a1e701de403a2cdb38986bfb4ddca0b/src/tsconfig.app.json#L20) as it may affect [Angular 2 AOT compilation](https://github.com/angular/angular/issues/13624#issuecomment-281919940).
- Run `npm install wallaby-webpack angular2-template-loader electron --save-dev`.

Note that the sample is [using Electron test runner](https://wallabyjs.com/docs/integration/electron.html). 

Alternatively, you may use [Chrome (headless) runner](https://wallabyjs.com/docs/integration/chrome.html). In this case you may  [change the `env` setting](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/wallaby.js#L49) to `env: {kind: 'chrome'}`, and you will not need to `npm i electron` (and can remove `electron` from the `package.json` dependencies). 

You may use PhantomJs runner if you like, to do that you may [remove the `env` setting](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/wallaby.js#L49). In this case, you will not need to `npm i electron` (and can remove `electron` from the `package.json` dependencies), however will need to uncomment [core-js polyfills](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L23-L34) and [`Intl` polyfill](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L68), so that PhantomJs may work.
