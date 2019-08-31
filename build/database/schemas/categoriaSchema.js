"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var categoriaSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String
  },
  platillos: [{
    type: Schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, {
  timestamps: true
});

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = categoriaSchema;
//# sourceMappingURL=categoriaSchema.js.map