"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _restaurantActions = require("./restaurantActions");

var _categoriaActions = require("./categoriaActions");

var createPlatillo =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(platillo) {
    var platilloNuevo, filter, update;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.PlatilloModel.create(platillo);

          case 3:
            platilloNuevo = _context.sent;
            // Actualizar Restaurants
            filter = {
              _id: platillo.restaurant
            };
            update = {
              $push: {
                platillos: platilloNuevo._id
              }
            };
            _context.next = 8;
            return (0, _restaurantActions.updateRestaurant)(filter, update);

          case 8:
            // Actualizar Categorias
            filter = {
              _id: platillo.categoria
            };
            _context.next = 11;
            return (0, _categoriaActions.updateCategoria)(filter, update);

          case 11:
            return _context.abrupt("return", platilloNuevo);

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function createPlatillo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getPlatillos =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var platillos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.PlatilloModel.find().populate('categoria', 'name').populate('restaurant');

          case 3:
            platillos = _context2.sent;
            return _context2.abrupt("return", platillos);

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

  return function getPlatillos() {
    return _ref2.apply(this, arguments);
  };
}();

var getPlatillo =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(platilloID) {
    var platillo;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.PlatilloModel.findOne({
              _id: platilloID
            }).populate('categoria', 'name').populate('restaurant');

          case 3:
            platillo = _context3.sent;
            return _context3.abrupt("return", platillo);

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

  return function getPlatillo(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  createPlatillo: createPlatillo,
  getPlatillos: getPlatillos,
  getPlatillo: getPlatillo
};
//# sourceMappingURL=platilloActions.js.map