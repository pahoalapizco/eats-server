"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var carritoSchema = new Schema({
  usuario: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  total: {
    type: Number,
    required: true
  },
  detail: [{
    platillo: {
      type: Schema.Types.ObjectId,
      ref: 'platillos',
      required: true
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

module.exports = carritoSchema;
//# sourceMappingURL=carritoSchema.js.map