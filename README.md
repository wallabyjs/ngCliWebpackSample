[![Wallaby.js](https://img.shields.io/badge/wallaby.js-configured-green.svg)](https://wallabyjs.com)	

# Wallaby.js

**To get wallaby.js working** after you have generated your project with `angular-cli`, you'll need to do the following:
- Add the [wallaby.js config file](https://github.com/wallabyjs/ngCliWebpackSample/blob/master/wallaby.js) to the project.	
- Run `npm install wallaby-webpack --save-dev`.	

For step-by-step instructions to configure and use Wallaby.js with an Angular CLI application, please refer to [Wallaby.js Angular CLI tutorial](https://wallabyjs.com/docs/tutorial/angular-cli.html).

Note that the sample is [using Chrome (headless) runner](https://wallabyjs.com/docs/integration/chrome.html).	

Alternatively, you may use [Electron test runner](https://wallabyjs.com/docs/integration/electron.html). In this case you may  [change the `env` setting](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/wallaby.js#L49) to `env: {kind: 'electron'}`, and run `npm i electron --save-dev`.	

You may use PhantomJs runner if you like, to do that you may [remove the `env` setting](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/wallaby.js#L49). In this case, you will not need to `npm i electron` (and can remove `electron` from the `package.json` dependencies), however will need to uncomment [core-js polyfills](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L23-L34) and [`Intl` polyfill](https://github.com/wallabyjs/ngCliWebpackSample/blob/88a13b2c25f8808f733ec7cb058544f887f40190/src/polyfills.ts#L68), so that PhantomJs may work.	

### Wallaby configuation for Jest	

If you are looking for a way to use wallaby.js with Jest for `angular-cli` generated project, then you may find the working config in [this docs section](https://wallabyjs.com/docs/integration/angular.html#jest).	