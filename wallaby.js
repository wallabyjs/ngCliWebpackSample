var wallabyWebpack = require('wallaby-webpack');
var path = require('path');

var compilerOptions = Object.assign(
  require('./tsconfig.json').compilerOptions,
  require('./src/tsconfig.spec.json').compilerOptions);

module.exports = function (wallaby) {

  var webpackPostprocessor = wallabyWebpack({
    entryPatterns: [
      'src/wallabyTest.js',
      'src/**/*spec.js'
    ],

    module: {
      loaders: [
        {test: /\.css$/, loader: 'raw-loader'},
        {test: /\.html$/, loader: 'raw-loader'},
        {test: /\.ts$/, loader: '@ngtools/webpack', include: /node_modules/, query: {tsConfigPath: 'tsconfig.json'}},
        {test: /\.js$/, loader: 'angular2-template-loader', exclude: /node_modules/},
        {test: /\.json$/, loader: 'json-loader'},
        {test: /\.styl$/, loaders: ['raw-loader', 'stylus-loader']},
        {test: /\.less$/, loaders: ['raw-loader', 'less-loader']},
        {test: /\.scss$|\.sass$/, loaders: ['raw-loader', 'sass-loader']},
        {test: /\.(jpg|png)$/, loader: 'url-loader?limit=128000'}
      ]
    },

    resolve: {
      extensions: ['.js', '.ts'],
      modules: [
        path.join(wallaby.projectCacheDir, 'src/app'),
        path.join(wallaby.projectCacheDir, 'src')
      ]
    }
  });
  wallaby.defaults.files.load = false;
  return {
    files: [
      {pattern: 'layout/Common/theme/assets/global/plugins/jquery.min.js', instrument: false, load: true },
      {pattern: 'layout/Common/theme/assets/global/plugins/bootstrap/js/bootstrap.js', instrument: false, load: true},
      {pattern: 'layout/Common/theme/assets/global/plugins/jquery-notific8.moneris/jquery.notific8.moneris.js',instrument: false, load: true},

      { pattern: "script/ext-libs/lodash.core.min.js", instrument: false, load: true},
      { pattern: "script/ext-libs/bootstrap-hover-dropdown.js", instrument: false, load: true},
      { pattern: "script/ext-libs/jsonpointer.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/bootstrap-maxlength.moneris/bootstrap-maxlength.moneris.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js", instrument: false, load: true},


      { pattern: "layout/Common/theme/assets/global/plugins/loading-bar.moneris/loading-bar.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/uniform/jquery.uniform.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/typeahead/handlebars.min.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/typeahead/typeahead.bundle.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/bootstrap-select/bootstrap-select.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/jquery-inputmask/inputmask/jquery.inputmask.js", instrument: false, load: true},
      { pattern: "layout/Common/theme/assets/global/plugins/ion.rangeslider/js/ion-rangeSlider/ion.rangeSlider.js", instrument: false, load: true},
      {pattern: 'src/**/*.ts', load: false},
      {pattern: 'src/**/*.d.ts', ignore: true},
      {pattern: 'src/**/*.css', load: false},
      {pattern: 'src/**/*.less', load: false},
      {pattern: 'src/**/*.scss', load: false},
      {pattern: 'src/**/*.sass', load: false},
      {pattern: 'src/**/*.styl', load: false},
      {pattern: 'src/**/*.html', load: false},
      {pattern: 'src/**/*.json', load: false},
      {pattern: 'src/**/*spec.ts', ignore: true}
    ],
    filesWithNoCoverageCalculated: [
      'layout/Common/theme/assets/global/plugins/jquery.min.js',
      'layout/Common/theme/assets/global/plugins/bootstrap/js/bootstrap.js',
      'layout/Common/theme/assets/global/plugins/jquery-notific8.moneris/jquery.notific8.moneris.js',
      "script/ext-libs/lodash.core.min.js",
      "script/ext-libs/bootstrap-hover-dropdown.js",
      "script/ext-libs/jsonpointer.js",
      "layout/Common/theme/assets/global/plugins/bootstrap-maxlength/bootstrap-maxlength.js",
      "layout/Common/theme/assets/global/plugins/bootstrap-maxlength.moneris/bootstrap-maxlength.moneris.js",
      "layout/Common/theme/assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js",


      "layout/Common/theme/assets/global/plugins/loading-bar.moneris/loading-bar.js",
      "layout/Common/theme/assets/global/plugins/uniform/jquery.uniform.js",
      "layout/Common/theme/assets/global/plugins/typeahead/handlebars.min.js",
      "layout/Common/theme/assets/global/plugins/typeahead/typeahead.bundle.js",
      "layout/Common/theme/assets/global/plugins/jquery-slimscroll/jquery.slimscroll.js",
      "layout/Common/theme/assets/global/plugins/bootstrap-select/bootstrap-select.js",
      "layout/Common/theme/assets/global/plugins/jquery-inputmask/inputmask/jquery.inputmask.js",
      "layout/Common/theme/assets/global/plugins/ion.rangeslider/js/ion-rangeSlider/ion.rangeSlider.js",
      'src/wallabyTest.ts'
    ],
    tests: [
      {pattern: 'src/**/*spec.ts', load: false}
    ],

    testFramework: 'jasmine',

    compilers: {
      '**/*.ts': wallaby.compilers.typeScript(compilerOptions)
    },

    middleware: function (app, express) {
      var path = require('path');
      app.use('/favicon.ico', express.static(path.join(__dirname, 'src/favicon.ico')));
      app.use('/assets', express.static(path.join(__dirname, 'src/assets')));
    },

    env: {
      kind: 'electron'
    },

    postprocessor: webpackPostprocessor,

    setup: function () {
      window.__moduleBundler.loadTests();
    },

    debug: true
  };
};
