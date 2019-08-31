"use strict";
'use stric';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var platilloSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  price: {
    type: Number,
    required: true
  },
  img: {
    type: String
  },
  restaurant: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  categoria: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'categorias'
  }
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = platilloSchema;
//# sourceMappingURL=platilloSchema.js.map