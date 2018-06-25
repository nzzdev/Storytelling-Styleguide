#!/usr/bin/env node
"use strict";

require("babel-polyfill");

var _args = require("args");

var _args2 = _interopRequireDefault(_args);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_args2.default.command("start", "Starts the Catalog server").command("build", "Builds a Catalog static site");

_args2.default.parse(process.argv);

if (!_args2.default.sub.length) {
  // no commands
  _args2.default.showHelp();
}