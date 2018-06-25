"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _format = require("../utils/format");

var _sander = require("sander");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Print out errors
function printErrors(summary, errors) {
  console.log((0, _format.errorMessage)(summary));
  console.log();
  errors.forEach(err => {
    console.log(err.message || err);
    console.log();
  });
}

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (config, paths) {
    const compiler = (0, _webpack2.default)(config);
    yield (0, _sander.rimraf)(paths.catalogBuildDir, "*");

    // Copy app static assets to the correct location
    if (yield (0, _sander.exists)(paths.appStaticSrcDir)) {
      yield (0, _sander.copydir)(paths.appStaticSrcDir).to(paths.appStaticBuildDir);
    }

    // Copy Catalog's static files
    if (yield (0, _sander.exists)(paths.catalogStaticSrcDir)) {
      yield (0, _sander.copydir)(paths.catalogStaticSrcDir).to(paths.catalogStaticBuildDir);
    }

    return new Promise(function (resolve) {
      // We don't reject the promise but exit the process immediately
      compiler.run(function (err, stats) {
        if (err) {
          printErrors("Failed to compile.", [err]);
          process.exit(1);
        }

        const info = stats.toJson();

        if (stats.hasErrors()) {
          printErrors("Failed to compile.", info.errors);
          process.exit(1);
        }

        if (process.env.CI && stats.hasWarnings()) {
          printErrors("Failed to compile. When process.env.CI = true, warnings are treated as failures. Most CI servers set this automatically.", info.warnings);
          process.exit(1);
        }

        resolve(info);
      });
    });
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})();