"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _globals = require("../config/globals");

var _repartidorActions = require("../actions/repartidorActions");

var _carritoActions = require("../actions/carritoActions");

var addPedido =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(pedido) {
    var pedidoCreated, filter, update;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.PedidoModel.create(pedido);

          case 3:
            pedidoCreated = _context.sent;
            filter = {
              _id: pedidoCreated._id
            };
            update = {
              $push: {
                estatus: _globals.PEDIDO_PENDIENTE
              }
            };
            _context.next = 8;
            return updatePedido(filter, update);

          case 8:
            _context.next = 10;
            return (0, _carritoActions.removeCarrito)(pedido.usuario);

          case 10:
            return _context.abrupt("return", pedidoCreated);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 13]]);
  }));

  return function addPedido(_x) {
    return _ref.apply(this, arguments);
  };
}();

var updatePedido =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filter, update) {
    var pedidoActualizado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.PedidoModel.findOneAndUpdate(filter, update, {
              "new": true
            });

          case 3:
            pedidoActualizado = _context2.sent;
            return _context2.abrupt("return", pedidoActualizado);

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

  return function updatePedido(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

var getPedidos =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(filter) {
    var pedidos;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.PedidoModel.find(filter).populate('repartidor').populate('restaurant', 'name').populate('usuario').populate('detail.platillo');

          case 3:
            pedidos = _context3.sent;
            return _context3.abrupt("return", pedidos);

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

  return function getPedidos(_x4) {
    return _ref3.apply(this, arguments);
  };
}();

var takePedido =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(pedidoID, repartidorID) {
    var filter, update;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            filter = {
              _id: repartidorID
            };
            update = {
              $push: {
                pedidos: pedidoID
              }
            };
            _context4.next = 5;
            return (0, _repartidorActions.updateRepartidor)(filter, update);

          case 5:
            filter = {
              _id: pedidoID
            };
            update = {
              $push: {
                estatus: _globals.PEDIDO_PROCESO
              },
              $set: {
                repartidor: repartidorID
              }
            };
            _context4.next = 9;
            return updatePedido(filter, update);

          case 9:
            return _context4.abrupt("return", _context4.sent);

          case 12:
            _context4.prev = 12;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 12]]);
  }));

  return function takePedido(_x5, _x6) {
    return _ref4.apply(this, arguments);
  };
}();

module.exports = {
  addPedido: addPedido,
  getPedidos: getPedidos,
  updatePedido: updatePedido,
  takePedido: takePedido
};
//# sourceMappingURL=pedidosActions.js.map