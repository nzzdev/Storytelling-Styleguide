"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paths = require("../utils/paths");

var _sander = require("sander");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

// Framework types Catalog supports
exports.default = _asyncToGenerator(function* () {
  const appPackagePath = (0, _paths.resolveAppPath)("package.json");
  const appPackageExists = yield (0, _sander.exists)(appPackagePath);

  if (!appPackageExists) {
    return "UNKNOWN";
  }

  const appPackage = require(appPackagePath);
  if (appPackage.dependencies && appPackage.dependencies.hasOwnProperty("react-scripts") || appPackage.devDependencies && appPackage.devDependencies.hasOwnProperty("react-scripts")) {
    return "CREATE_REACT_APP";
  }

  if (appPackage.dependencies && appPackage.dependencies.hasOwnProperty("next") || appPackage.devDependencies && appPackage.devDependencies.hasOwnProperty("next")) {
    return "NEXT";
  }

  return "UNKNOWN";
});