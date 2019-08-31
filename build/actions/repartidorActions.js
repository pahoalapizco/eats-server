"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _util = require("util");

var createRepartidor =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(repartidor) {
    var newRepartidor;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.RepartidorModel.create(repartidor);

          case 3:
            newRepartidor = _context.sent;
            return _context.abrupt("return", newRepartidor);

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function createRepartidor(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getRepartidores =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2() {
    var repartidores;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.RepartidorModel.find().populate('pedidos').populate('calificaciones').exec();

          case 3:
            repartidores = _context2.sent;
            return _context2.abrupt("return", calcularCalificacion(repartidores));

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

  return function getRepartidores() {
    return _ref2.apply(this, arguments);
  };
}();

var getRepartidor =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(repartidorID) {
    var repartidor, totalEstrellas, totalCalificaciones;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.RepartidorModel.findOne({
              _id: repartidorID
            }).populate('pedidos').populate('calificaciones').exec();

          case 3:
            repartidor = _context3.sent;
            totalEstrellas = 0;
            repartidor.calificaciones.forEach(function (calificacion) {
              totalEstrellas += calificacion.estrellas;
            });
            totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 : repartidor.calificaciones.length;
            repartidor.promedio = totalEstrellas / totalCalificaciones;
            return _context3.abrupt("return", repartidor);

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function getRepartidor(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

var updateRepartidor =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(filter, update) {
    var repartidorActualizado;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models.RepartidorModel.findOneAndUpdate(filter, update, {
              "new": true
            });

          case 3:
            repartidorActualizado = _context4.sent;
            return _context4.abrupt("return", repartidorActualizado);

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 7]]);
  }));

  return function updateRepartidor(_x3, _x4) {
    return _ref4.apply(this, arguments);
  };
}();

var calcularCalificacion = function calcularCalificacion(repartidores) {
  repartidores.forEach(function (repartidor, index) {
    var totalEstrellas = 0;
    repartidor.calificaciones.forEach(function (calificacion) {
      totalEstrellas += calificacion.estrellas;
    });
    var totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 : repartidor.calificaciones.length;
    repartidores[index].promedio = totalEstrellas / totalCalificaciones;
  });
  return repartidores;
};

module.exports = {
  createRepartidor: createRepartidor,
  getRepartidores: getRepartidores,
  updateRepartidor: updateRepartidor,
  getRepartidor: getRepartidor
};
//# sourceMappingURL=repartidorActions.js.map