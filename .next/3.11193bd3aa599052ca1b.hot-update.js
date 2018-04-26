webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__("./node_modules/babel-runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link__ = __webpack_require__("./node_modules/next/link.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__ = __webpack_require__("./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch__);


var _jsxFileName = 'C:\\Program Files\\nodejs\\hello-next\\pages\\index.js',
    _this = this;



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




var Index = function Index(props) {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    'div',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'h1',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        }
      },
      'Sample'
    ),
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      'ul',
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
          'form',
          { onSubmit: _this.handleSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'h1',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              }
            },
            'Login'
          ),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'email', placeholder: 'email', name: 'email', __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement('input', { type: 'password', placeholder: 'password', name: 'password', __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          }),
          __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
            'button',
            { type: 'submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              }
            },
            'Submit'
          )
        )
      )
    )
  );
};
Index.handleSubmit = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(e) {
    var email, password, res, data, error;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            email = e.target.elements.email.value;
            password = e.target.elements.password.value;
            _context.next = 5;
            return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('http://localhost:5000/api/users/ptoandung@gmail.com/0123817271');

          case 5:
            res = _context.sent;
            _context.next = 8;
            return res.json();

          case 8:
            data = _context.sent;

            // alert(data);
            console.log(data);
            if (data.length > 0) {
              console.log("login success");
            } else console.log("login unsuccess");

            error = 1;

            if (!error) {
              _context.next = 15;
              break;
            }

            _this.setState({
              error: error
            });
            return _context.abrupt('return', false);

          case 15:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
Index.getInitialProps = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee2() {
  var res, data;
  return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __WEBPACK_IMPORTED_MODULE_3_isomorphic_unfetch___default()('http://localhost:5000/api/users/ptoandung@gmail.com/0123817271');

        case 2:
          res = _context2.sent;
          _context2.next = 5;
          return res.json();

        case 5:
          data = _context2.sent;

          if (data.length > 0) {
            console.log("login success");
          } else console.log("login unsuccess");

          return _context2.abrupt('return', {
            shows: data
          });

        case 8:
        case 'end':
          return _context2.stop();
      }
    }
  }, _callee2, this);
}));

var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Index, 'Index', 'C:/Program Files/nodejs/hello-next/pages/index.js');
  reactHotLoader.register(_default, 'default', 'C:/Program Files/nodejs/hello-next/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.11193bd3aa599052ca1b.hot-update.js.map