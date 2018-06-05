const ngxWallabyJest = require('ngx-wallaby-jest');

module.exports = function (wallaby) {
  return {
    files: [
      //Files used for testing
      {pattern: 'tsconfig.json', load: false},
      {pattern: 'jest.config.js', load: false},
      {pattern: 'src/setupJest.ts', load: false},
      {pattern: 'src/tsconfig.spec.json', load: false},
      {pattern: 'src/app/**/*.ts', load: false},
      {pattern: 'src/app/**/*.html', load: false},
      {pattern: 'test/**/*.ts', load: false},
      {pattern: 'src/app/**/*.spec.ts', ignore: true},
      {pattern: 'src/app/**/*.d.ts', ignore: true},
    ],
    tests: ['src/app/**/*.spec.ts'],
    env: {
      //Jest tests runs on node, not on a browser!
      type: 'node',
      runner: 'node'
    },
    preprocessors: {
      // This translate templateUrl and styleUrls to the right implementation
      // For wallaby
      'src/**/*.component.ts': ngxWallabyJest,
    },
    testFramework: 'jest',

    // bootstrap: function (wallaby) {
    //     //Use the configured jest file for testing
    //     const jestConfig = require('./jest.config.js');
    //     wallaby.testFramework.configure(jestConfig);
    // },
    debug: true
  };
};
