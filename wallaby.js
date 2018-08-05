module.exports = function () {

  const jestTransform = file => require('jest-preset-angular/preprocessor').process(file.content, file.path, {globals: {__TRANSFORM_HTML__: true}, rootDir: __dirname});

  return {
    files: [
      'src/**/*.+(ts|html|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      'jest.setup.ts',
      '!src/**/*.spec.ts',
    ],

    tests: ['src/**/*.spec.ts'],

    env: {
      type: 'node',
      runner: 'node'
    },

    compilers: {
      '**/*.html': file => ({code: jestTransform(file), map: {version: 3, sources: [], names: [], mappings: []}, ranges: []})
    },

    preprocessors: {
      'src/**/*.js': jestTransform,
    },

    testFramework: 'jest'
  };
};
