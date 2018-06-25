"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _webpack = require("webpack");

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevServer = require("webpack-dev-server");

var _webpackDevServer2 = _interopRequireDefault(_webpackDevServer);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _errorOverlayMiddleware = require("react-dev-utils/errorOverlayMiddleware");

var _errorOverlayMiddleware2 = _interopRequireDefault(_errorOverlayMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (config, host, port, https, paths, framework, proxy) {
    const compiler = (0, _webpack2.default)(config);
    const devServer = new _webpackDevServer2.default(compiler, _extends({
      compress: true,
      clientLogLevel: "none",
      contentBase: [paths.catalogStaticSrcDir, paths.appStaticSrcDir],
      // By default files from `contentBase` will not trigger a page reload.
      watchContentBase: true,
      hot: true,
      publicPath: config.output.publicPath,
      quiet: true,
      disableHostCheck: true,
      // Reportedly, this avoids CPU overload on some systems.
      // https://github.com/facebookincubator/create-react-app/issues/293
      watchOptions: {
        ignored: /node_modules/
      },
      historyApiFallback: {
        disableDotRule: true,
        htmlAcceptHeaders: proxy ? ["text/html"] : ["text/html", "*/*"]
      },
      https,
      host
    }, proxy ? {
      proxy: {
        "**": proxy
      }
    } : {}, {
      overlay: false,
      before(app) {
        // Next.js serves static files from /static – which can't be configured with `contentBase` directly
        if (framework === "NEXT") {
          app.use("/static", _express2.default.static(paths.appStaticSrcDir));
        }
        // This lets us open files from the runtime error overlay.
        app.use((0, _errorOverlayMiddleware2.default)());
      }
    }));

    // Launch WebpackDevServer.
    return new Promise(function (resolve, reject) {
      devServer.listen(port, function (err) {
        if (err) {
          reject(err);
        } else {
          resolve((https ? "https" : "http") + "://" + host + ":" + port + "/");
        }
      });
    });
  });

  return function (_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
})();