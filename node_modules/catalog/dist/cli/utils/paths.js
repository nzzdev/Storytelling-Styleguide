"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensureSlash = exports.nodePaths = exports.resolveOwnPath = exports.resolveAppPath = undefined;

var _fs = require("fs");

var _path = require("path");

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebookincubator/create-react-app/issues/637
const appDirectory = (0, _fs.realpathSync)(process.cwd());
const resolveAppPath = exports.resolveAppPath = (...relativePaths) => (0, _path.resolve)(appDirectory, ...relativePaths);

const resolveOwnPath = exports.resolveOwnPath = (...relativePaths) => (0, _path.resolve)(__dirname, "..", ...relativePaths);

const nodePaths = exports.nodePaths = (process.env.NODE_PATH || "").split(process.platform === "win32" ? ";" : ":").filter(Boolean).filter(folder => !(0, _path.isAbsolute)(folder)).map(path => resolveAppPath(path));

const ensureSlash = exports.ensureSlash = (path, needsSlash) => {
  const hasSlash = path.endsWith("/");
  if (hasSlash && !needsSlash) {
    return path.substr(0, path.length - 1);
  } else if (!hasSlash && needsSlash) {
    return `${path}/`;
  }
  return path;
};