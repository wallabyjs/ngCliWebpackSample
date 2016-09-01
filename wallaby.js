var wallabyWebpack = require('wallaby-webpack');

var webpackPostprocessor = wallabyWebpack({
  entryPatterns: [
    'src/wallabyTest.js',
    'src/**/*spec.js'
  ],

  module: {
    loaders: [
      {test: /\.css$/, loader: 'raw-loader'},
      {test: /\.html$/, loader: 'raw-loader'}
    ]
  }
});

var compilerOptions = require('./src/tsconfig.json').compilerOptions;

module.exports = function (wallaby) {

  return {debug:1,
    files: [
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*spec.ts', ignore: true}
    ],

    tests: [
      {pattern: 'src/**/*spec.ts', load: false}
    ],

    testFramework: 'jasmine',

    env: {
      runner: require('phantomjs-prebuilt').path,
      params: { runner: '--web-security=false' }
    },

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    }
  };
};