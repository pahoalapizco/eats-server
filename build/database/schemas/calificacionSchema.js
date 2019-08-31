"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var estrellas = {
  values: [1, 2, 3, 4, 5]
};
var calificacionSchema = new Schema({
  estrellas: {
    type: Number,
    required: true,
    "enum": estrellas
  },
  comentario: {
    type: String
  },
  repartidor: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'repartidores'
  }
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = calificacionSchema;
//# sourceMappingURL=calificacionSchema.js.map