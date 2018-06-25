"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.link = exports.successMessage = exports.question = exports.warningMessage = exports.errorMessage = exports.infoMessageDimmed = exports.infoMessage = undefined;

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const infoMessage = exports.infoMessage = str => str;

const infoMessageDimmed = exports.infoMessageDimmed = str => _chalk2.default.dim(str);
const errorMessage = exports.errorMessage = str => _chalk2.default.red(`✖ ${str}`);
const warningMessage = exports.warningMessage = str => _chalk2.default.yellow(str);
const question = exports.question = str => `❯ ${str}`;
const successMessage = exports.successMessage = str => _chalk2.default.green(`✔︎ ${str}`);
const link = exports.link = str => _chalk2.default.underline(str);