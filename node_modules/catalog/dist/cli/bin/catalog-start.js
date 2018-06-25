#!/usr/bin/env node
"use strict";

require("babel-polyfill");

var _args = require("args");

var _args2 = _interopRequireDefault(_args);

var _detectPort = require("detect-port");

var _detectPort2 = _interopRequireDefault(_detectPort);

var _sander = require("sander");

var _openBrowser = require("react-dev-utils/openBrowser");

var _openBrowser2 = _interopRequireDefault(_openBrowser);

var _format = require("../utils/format");

var _loadWebpackConfig = require("../actions/loadWebpackConfig");

var _loadWebpackConfig2 = _interopRequireDefault(_loadWebpackConfig);

var _loadConfigFile = require("../actions/loadConfigFile");

var _loadConfigFile2 = _interopRequireDefault(_loadConfigFile);

var _detectFramework = require("../actions/detectFramework");

var _detectFramework2 = _interopRequireDefault(_detectFramework);

var _loadPaths = require("../actions/loadPaths");

var _loadPaths2 = _interopRequireDefault(_loadPaths);

var _setupCatalog = require("../actions/setupCatalog");

var _setupCatalog2 = _interopRequireDefault(_setupCatalog);

var _runDevServer = require("../actions/runDevServer");

var _runDevServer2 = _interopRequireDefault(_runDevServer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

process.env.NODE_ENV = "development";

// Parse env

_args2.default.option("port", "Port on which the Catalog server runs", 4000, port => parseInt(port, 10)).option("https", "Use https", false).option("host", "Host", "localhost").option("proxy", "Proxy").option("babelrc", "Use local .babelrc file (defaults to true)");

const cliOptions = _args2.default.parse(process.argv, {
  value: "[source directory]",
  mri: {
    boolean: ["babelrc"]
  }
});

const getFrameworkName = framework => {
  switch (framework) {
    case "CREATE_REACT_APP":
      return "Create React App";
    case "NEXT":
      return "next.js (support is experimental)";
    case "UNKNOWN":
    default:
      return "";
  }
};

const run = (() => {
  var _ref = _asyncToGenerator(function* (catalogSrcDir = "catalog", options) {
    const framework = yield (0, _detectFramework2.default)();

    const configFile = yield (0, _loadConfigFile2.default)();

    const paths = yield (0, _loadPaths2.default)(catalogSrcDir, "", framework, "/");

    const port = yield (0, _detectPort2.default)(options.port);

    const url = (options.https ? "https" : "http") + "://" + options.host + ":" + port + "/";

    const babelrcExists = yield (0, _sander.exists)(paths.babelrc);

    const useBabelrc = options.babelrc !== undefined ? options.babelrc : configFile && configFile.useBabelrc !== undefined ? configFile.useBabelrc : babelrcExists;

    const webpackOptions = { paths, dev: true, framework, url, useBabelrc };

    let webpackConfig = yield (0, _loadWebpackConfig2.default)(webpackOptions);

    if (configFile) {
      if (typeof configFile.webpack === "function") {
        webpackConfig = configFile.webpack(webpackConfig, webpackOptions);
      }
    }

    yield (0, _setupCatalog2.default)(paths);

    console.log(`
  Starting Catalog …
`);
    if (configFile) {
      console.log((0, _format.infoMessageDimmed)("  Using configuration file catalog.config.js"));
    }
    if (framework !== "UNKNOWN") {
      console.log((0, _format.infoMessageDimmed)("  Detected " + getFrameworkName(framework)));
    }
    if (useBabelrc) {
      console.log((0, _format.infoMessageDimmed)("  Using custom .babelrc"));
    }

    yield (0, _runDevServer2.default)(webpackConfig, options.host, port, options.https, paths, framework, options.proxy);

    (0, _openBrowser2.default)(url);
  });

  return function run() {
    return _ref.apply(this, arguments);
  };
})();

run(_args2.default.sub[0], cliOptions).catch(err => {
  console.error((0, _format.errorMessage)("Could not start Catalog\n\n" + err.stack + "\n"));
  process.exit(1);
});