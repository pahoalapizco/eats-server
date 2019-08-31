'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var vehiculos = {
  values: ['Bicicleta', 'Motocicleta', 'Automovil']
};
var repartidorSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String
  },
  img: {
    type: String
  },
  vehiculo: {
    type: String,
    "default": 'Motocicleta',
    "enum": vehiculos
  },
  pedidos: [{
    type: Schema.Types.ObjectId,
    ref: 'pedidos'
  }],
  calificaciones: [{
    type: Schema.Types.ObjectId,
    ref: 'calificaciones'
  }]
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = repartidorSchema;
//# sourceMappingURL=repartidorSchema.js.map