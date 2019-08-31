"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _repartidorActions = require("../actions/repartidorActions");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var calificarRepartidor =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(calificacion) {
    var calificacionValida, calificacionRep, filter, update;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            // Si se intenta enviar una calificacion mayor a las 5 estrellas se cambia al maximo posible "5"
            calificacionValida = _objectSpread({}, calificacion, {
              estrellas: calificacion.estrellas > 5 ? 5 : calificacion.estrellas
            });
            _context.next = 4;
            return _models.CalificacionModel.create(calificacionValida);

          case 4:
            calificacionRep = _context.sent;
            filter = {
              _id: calificacion.repartidor
            };
            update = {
              $push: {
                calificaciones: calificacionRep._id
              }
            };
            _context.next = 9;
            return (0, _repartidorActions.updateRepartidor)(filter, update);

          case 9:
            return _context.abrupt("return", calificacionRep);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function calificarRepartidor(_x) {
    return _ref.apply(this, arguments);
  };
}();

module.exports = {
  calificarRepartidor: calificarRepartidor
};
//# sourceMappingURL=calificacionActions.js.map