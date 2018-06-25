"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _htmlWebpackPlugin = require("html-webpack-plugin");

var _htmlWebpackPlugin2 = _interopRequireDefault(_htmlWebpackPlugin);

var _webpackManifestPlugin = require("webpack-manifest-plugin");

var _webpackManifestPlugin2 = _interopRequireDefault(_webpackManifestPlugin);

var _WatchMissingNodeModulesPlugin = require("react-dev-utils/WatchMissingNodeModulesPlugin");

var _WatchMissingNodeModulesPlugin2 = _interopRequireDefault(_WatchMissingNodeModulesPlugin);

var _InterpolateHtmlPlugin = require("react-dev-utils/InterpolateHtmlPlugin");

var _InterpolateHtmlPlugin2 = _interopRequireDefault(_InterpolateHtmlPlugin);

var _friendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

var _friendlyErrorsWebpackPlugin2 = _interopRequireDefault(_friendlyErrorsWebpackPlugin);

var _sander = require("sander");

var _createReactApp = require("../config/createReactApp");

var _createReactApp2 = _interopRequireDefault(_createReactApp);

var _next = require("../config/next");

var _next2 = _interopRequireDefault(_next);

var _env = require("../config/env");

var _env2 = _interopRequireDefault(_env);

var _format = require("../utils/format");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* ({
    paths,
    framework,
    dev,
    url,
    useBabelrc
  }) {
    const frameworkConfig = framework === "NEXT" ? (0, _next2.default)(paths, useBabelrc, dev) : (0, _createReactApp2.default)(paths, useBabelrc, dev);

    const env = (0, _env2.default)(paths.publicUrl.replace(/\/$/, ""));

    const devPlugins = dev ? [new _webpack2.default.HotModuleReplacementPlugin(),
    // Watcher doesn't work well if you mistype casing in a path so we use
    // a plugin that prints an error when you attempt to do this.
    // See https://github.com/facebookincubator/create-react-app/issues/240
    // new CaseSensitivePathsPlugin(),
    // If you require a missing module and then `npm install` it, you still have
    // to restart the development server for Webpack to discover it. This plugin
    // makes the discovery automatic so you don't have to restart.
    // See https://github.com/facebookincubator/create-react-app/issues/186
    new _WatchMissingNodeModulesPlugin2.default(paths.appNodeModules), new _friendlyErrorsWebpackPlugin2.default({
      compilationSuccessInfo: {
        messages: url ? [`Catalog is running at ${(0, _format.link)(url)}`] : []
      }
    })] : [];

    return {
      devtool: dev ? "cheap-module-source-map" : "source-map",
      bail: dev ? false : true,
      entry: {
        catalog: [require.resolve("../config/polyfills")].concat(dev ? [require.resolve("react-dev-utils/webpackHotDevClient")] : []).concat(paths.catalogIndexJs)
      },
      output: {
        path: paths.catalogBuildDir,
        pathinfo: dev ? true : false,
        filename: dev ? "static/[name].js" : "static/[name].[chunkhash:8].js",
        chunkFilename: dev ? "static/[name].chunk.js" : "static/[name].[chunkhash:8].chunk.js",
        // This is the URL that app is served from. We use "/" in development.
        publicPath: paths.publicUrl
      },
      resolve: {
        modules: [paths.appSrc, "node_modules", paths.appNodeModules].concat(paths.nodePaths),
        extensions: [".js", ".json", ".jsx"],
        alias: {
          // Support React Native Web
          // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
          "react-native": "react-native-web",
          "babel-standalone": "babel-standalone/babel.min.js",
          "js-yaml": "js-yaml/dist/js-yaml.min.js"
        }
      },
      resolveLoader: {
        modules: [paths.ownNodeModules, paths.appNodeModules]
      },
      module: {
        rules: [...frameworkConfig.moduleRules, {
          test: /\.md$/,
          loaders: [require.resolve("../../../loader"), require.resolve("raw-loader")]
        }]
      },
      plugins: (dev ? [] : [new _webpack2.default.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          // Disabled because of an issue with Uglify breaking seemingly valid code:
          // https://github.com/facebookincubator/create-react-app/issues/2376
          // Pending further investigation:
          // https://github.com/mishoo/UglifyJS2/issues/2011
          comparisons: false
        },
        output: {
          comments: false,
          // Turned on because emoji and regex is not minified properly using default
          // https://github.com/facebookincubator/create-react-app/issues/2488
          ascii_only: true
        },
        sourceMap: true,
        // Don't minify the vendor chunk, since it only contains minified modules anyway.
        // Adds 13K to the bundle (because of webpack stuff) but speeds up the build 3x!
        exclude: /vendor/
      }), new _webpackManifestPlugin2.default({
        fileName: "asset-manifest.json"
      })]).concat([new _InterpolateHtmlPlugin2.default(env.raw), new _htmlWebpackPlugin2.default({
        inject: true,
        template: paths.catalogIndexHtml,
        minify: dev ? false : {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true
        }
      }), new _webpack2.default.DefinePlugin(env.stringified), new _webpack2.default.optimize.CommonsChunkPlugin({
        name: "vendor",
        minChunks: function minChunks(module) {
          return (/babel-standalone|js-yaml/.test(module.resource)
          );
        }
      }), new _webpack2.default.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
      }),
      // This is necessary to emit hot updates (currently CSS only):

      ...devPlugins,
      // Add framework-specific plugins
      ...frameworkConfig.plugins]),
      node: {
        fs: "empty",
        net: "empty",
        tls: "empty"
      },
      performance: {
        hints: false
      }
    };
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();