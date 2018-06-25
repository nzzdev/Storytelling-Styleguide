"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _paths = require("../utils/paths");

var _sander = require("sander");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _asyncToGenerator(function* () {
  const configFilePath = (0, _paths.resolveAppPath)("catalog.config.js");
  const configFileExists = yield (0, _sander.exists)(configFilePath);
  return configFileExists ? require(configFilePath) : null;
});