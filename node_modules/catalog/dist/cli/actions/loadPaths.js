"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paths = require("../utils/paths");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (catalogSrcDir, catalogBuildDir, framework, publicUrl) {
    return {
      unresolvedCatalogSrcDir: catalogSrcDir,
      unresolvedCatalogBuildDir: catalogBuildDir,
      catalogSrcDir: (0, _paths.resolveAppPath)(catalogSrcDir),
      catalogBuildDir: (0, _paths.resolveAppPath)(catalogBuildDir),
      catalogIndexJs: (0, _paths.resolveAppPath)(catalogSrcDir, "index.js"),
      catalogIndexHtml: (0, _paths.resolveAppPath)(catalogSrcDir, "index.html"),
      catalogStaticSrcDir: (0, _paths.resolveAppPath)(catalogSrcDir, "static"),
      catalogStaticBuildDir: (0, _paths.resolveAppPath)(catalogBuildDir),

      catalogSrcTemplateDir: (0, _paths.resolveOwnPath)("..", "setup-template"),

      appRoot: (0, _paths.resolveAppPath)("."),
      appStaticSrcDir: framework === "NEXT" ? (0, _paths.resolveAppPath)("static") : (0, _paths.resolveAppPath)("public"),
      appStaticBuildDir: framework === "NEXT" ? (0, _paths.resolveAppPath)(catalogBuildDir, "static") : (0, _paths.resolveAppPath)(catalogBuildDir),

      appPackageJson: (0, _paths.resolveAppPath)("package.json"),
      appSrc: (0, _paths.resolveAppPath)("src"),
      yarnLockFile: (0, _paths.resolveAppPath)("yarn.lock"),
      babelrc: (0, _paths.resolveAppPath)(".babelrc"),
      appNodeModules: (0, _paths.resolveAppPath)("node_modules"),
      ownNodeModules: (0, _paths.resolveOwnPath)("..", "..", "node_modules"),
      nodePaths: _paths.nodePaths,

      publicUrl: (0, _paths.ensureSlash)(publicUrl, true)
    };
  });

  return function (_x, _x2, _x3, _x4) {
    return _ref.apply(this, arguments);
  };
})();