'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _globals = require("../../config/globals");

var Schema = _mongoose["default"].Schema;
var metodoPago = ['PayPal', 'Tarjeta', 'Efectivo'];
var estatus = [_globals.PEDIDO_PENDIENTE, _globals.PEDIDO_PROCESO, _globals.PEDIDO_ENVIADO, _globals.PEDIDO_ETREGADO];
var pedidoSchema = new Schema({
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  usuario: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
  },
  repartidor: {
    type: Schema.Types.ObjectId,
    ref: 'repartidores'
  },
  total: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  metodoPago: {
    type: String,
    required: true,
    "enum": metodoPago
  },
  estatus: [{
    type: Number,
    "default": _globals.PEDIDO_PENDIENTE,
    required: true,
    "enum": estatus
  }],
  detail: [{
    platillo: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'platillos'
    },
    cantidad: {
      type: Number,
      required: true
    },
    importe: {
      type: Number,
      required: true
    }
  }]
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = pedidoSchema;
//# sourceMappingURL=pedidoSchema.js.map