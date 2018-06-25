"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _sander = require("sander");

var _chalk = require("chalk");

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = (() => {
  var _ref = _asyncToGenerator(function* (paths) {
    var _ref2 = yield Promise.all([(0, _sander.exists)(paths.catalogSrcDir, "index.js"), (0, _sander.exists)(paths.catalogSrcDir, "index.html"), (0, _sander.exists)(paths.catalogSrcDir)]),
        _ref3 = _slicedToArray(_ref2, 3);

    const indexExists = _ref3[0],
          htmlExists = _ref3[1],
          dirExists = _ref3[2];


    if (!dirExists) {
      console.error(_chalk2.default`
  {red The '${paths.unresolvedCatalogSrcDir}' directory doesn't exist. Please create it first.}
`);
      process.exit(1);
    } else if (!indexExists || !htmlExists) {
      console.error(_chalk2.default`
  {red Can't find 'index.js' and 'index.html' in ${paths.unresolvedCatalogSrcDir}'. Please make sure they exist.}
`);
      process.exit(1);
    }
  });

  return function (_x) {
    return _ref.apply(this, arguments);
  };
})();