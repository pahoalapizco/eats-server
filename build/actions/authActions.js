"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _usuarioActions = require("../actions/usuarioActions");

var _config = require("../config/");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var JWT = require('jsonwebtoken');

var _require = require('apollo-server-express'),
    SchemaDirectiveVisitor = _require.SchemaDirectiveVisitor,
    AuthenticationError = _require.AuthenticationError; // directiva - valida si esta query necesita un token, de lo contrario no permite ejecutar la consulta


var AuthDirective =
/*#__PURE__*/
function (_SchemaDirectiveVisit) {
  (0, _inherits2["default"])(AuthDirective, _SchemaDirectiveVisit);

  function AuthDirective() {
    (0, _classCallCheck2["default"])(this, AuthDirective);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AuthDirective).apply(this, arguments));
  }

  (0, _createClass2["default"])(AuthDirective, [{
    key: "visitFieldDefinition",
    value: function visitFieldDefinition(field) {
      var _field$resolve = field.resolve,
          resolve = _field$resolve === void 0 ? defaultFieldResolver : _field$resolve;
      field.resolve =
      /*#__PURE__*/
      (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        var _len,
            args,
            _key,
            ctx,
            _args = arguments;

        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                  args[_key] = _args[_key];
                }

                ctx = args[2];

                if (!ctx.user) {
                  _context.next = 8;
                  break;
                }

                _context.next = 5;
                return resolve.apply(this, args);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 8:
                throw new AuthenticationError('You need to be logged in.');

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);
  return AuthDirective;
}(SchemaDirectiveVisitor); // contexto
// para autorizar request se hacen los siguientes pasos
// paso 1 - saca el autorization de los headers en el request
// paso 2 - valida si el header token esta indefinido
// paso 3 - verifica que el token sea valido
// paso 4 - si es un token valido busca al usuario en la base de datos y asigna la informacion del usuario en el contexto
// paso 5 - si hay algun error siempre regresa lo que trae req


var getContext = function getContext(req) {
  try {
    var token = req.headers.authorization;

    if ((0, _typeof2["default"])(token) === (typeof undefined === "undefined" ? "undefined" : (0, _typeof2["default"])(undefined))) {
      return req;
    }

    return JWT.verify(token, _config.SECRET,
    /*#__PURE__*/
    function () {
      var _ref2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(err, result) {
        var user;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!err) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return", req);

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return (0, _usuarioActions.getUser)({
                  _id: result._id
                });

              case 5:
                user = _context2.sent;
                return _context2.abrupt("return", _objectSpread({}, req, {
                  user: user
                }));

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                return _context2.abrupt("return", req);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[2, 9]]);
      }));

      return function (_x, _x2) {
        return _ref2.apply(this, arguments);
      };
    }());
  } catch (error) {
    return req;
  }
};

module.exports = {
  getContext: getContext,
  AuthDirective: AuthDirective
};
//# sourceMappingURL=authActions.js.map