# Wallaby.js

**To get wallaby.js working** after you have generated your project with `angular-cli`, you'll need to do the following:
- Add the [wallaby.js config file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/wallaby.js) to the project.
- Add the [wallaby.js test bootstrap file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/src/wallabyTest.ts) to the project.
- Exclude the [`src/wallabyTest.ts` file in the `tsconfig.json`](https://github.com/wallabyjs/ngCliWebpackSample/blob/82d4f43d1a1e701de403a2cdb38986bfb4ddca0b/src/tsconfig.app.json#L20) as it may affect [Angular 2 AOT compilation](https://github.com/angular/angular/issues/13624#issuecomment-281919940).
- Run `npm install wallaby-webpack angular2-template-loader electron --save-dev`.

Note that the sample is [using Chrome/Electron test runner](https://wallabyjs.com/docs/integration/electron.html), and not the wallaby.js default PhantomJs test runner. You may use PhantomJs runner if you like, to do that you may just [remove the `env` setting](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/wallaby.js#L49). In this case, you will not need to `npm i electron`, however will need to uncomment [core-js polyfills](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L22) and [`Intl` polyfill](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L68), so that PhantomJs may work.

If you are using some third-party modules distributed with TypeScript source code only, and are getting the `Uncaught Error: Cannot find module` error, you may [use this solution](https://github.com/nelisbijl/ngCliWebpackSample/pull/2/commits/77823c0d94e3fe2bc67e6de1b0d80d3114d90bbd).
