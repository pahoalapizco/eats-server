"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var addCarrito =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(carrito) {
    var newCarrito;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return removeCarrito(carrito.usuario);

          case 3:
            _context.next = 5;
            return _models.CarritoModel.create(carrito);

          case 5:
            newCarrito = _context.sent;
            return _context.abrupt("return", newCarrito);

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 9]]);
  }));

  return function addCarrito(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getCarrito =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(usuario) {
    var carrito;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.CarritoModel.findOne({
              usuario: usuario
            }).populate('restaurant').populate('usuario').populate('detail.platillo');

          case 3:
            carrito = _context2.sent;
            return _context2.abrupt("return", carrito);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getCarrito(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var removeCarrito =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(usuarioID) {
    var carrito;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.CarritoModel.findOneAndRemove({
              usuario: usuarioID
            });

          case 3:
            carrito = _context3.sent;
            return _context3.abrupt("return", carrito);

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 7]]);
  }));

  return function removeCarrito(_x3) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  addCarrito: addCarrito,
  getCarrito: getCarrito,
  removeCarrito: removeCarrito
};
//# sourceMappingURL=carritoActions.js.map