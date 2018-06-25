#!/usr/bin/env node
"use strict";

require("babel-polyfill");

var _args = require("args");

var _args2 = _interopRequireDefault(_args);

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

var _sander = require("sander");

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

var _runBuild = require("../actions/runBuild");

var _runBuild2 = _interopRequireDefault(_runBuild);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

process.env.NODE_ENV = "production";

_args2.default.option(["o", "out"], "Directory to build into", "<catalog directory>/build").option(["u", "public-url"], "The URL where production assets get loaded from", "/").option("public-path", "[DEPRECATED] Use --public-url").option("babelrc", "Use local .babelrc file (defaults to true)");

const cliOptions = _args2.default.parse(process.argv, {
  value: "<catalog directory>",
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
  var _ref = _asyncToGenerator(function* (catalogSrcDir = "catalog", {
    out,
    publicPath,
    publicUrl,
    babelrc
  }) {
    const framework = yield (0, _detectFramework2.default)();

    const configFile = yield (0, _loadConfigFile2.default)();

    let webpackPublicPath = publicUrl;
    if (publicPath) {
      console.warn((0, _format.warningMessage)("The --public-path option has been deprecated. Use --public-url"));
      webpackPublicPath = publicPath;
    }

    const paths = yield (0, _loadPaths2.default)(catalogSrcDir, out.replace("<catalog directory>", catalogSrcDir), framework, webpackPublicPath);

    const babelrcExists = yield (0, _sander.exists)(paths.babelrc);

    const useBabelrc = babelrc !== undefined ? babelrc : configFile && configFile.useBabelrc !== undefined ? configFile.useBabelrc : babelrcExists;

    const webpackOptions = { paths, dev: false, framework, useBabelrc };

    let webpackConfig = yield (0, _loadWebpackConfig2.default)(webpackOptions);

    if (configFile) {
      if (typeof configFile.webpack === "function") {
        webpackConfig = configFile.webpack(webpackConfig, webpackOptions);
      }
    }

    yield (0, _setupCatalog2.default)(paths);

    console.log(_chalk2.default`
  Building Catalog. This may take a while …
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

    yield (0, _runBuild2.default)(webpackConfig, paths);
    console.log(_chalk2.default`  {green Built Catalog into} ${paths.unresolvedCatalogBuildDir}
`);
  });

  return function run() {
    return _ref.apply(this, arguments);
  };
})();

run(_args2.default.sub[0], cliOptions).catch(err => {
  console.error((0, _format.errorMessage)("Failed to compile Catalog\n\n" + err.stack + "\n"));
  process.exit(1);
});