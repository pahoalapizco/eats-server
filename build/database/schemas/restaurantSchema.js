"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var Schema = _mongoose["default"].Schema;
var restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String
  },
  open: {
    type: String
  },
  closed: {
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

module.exports = restaurantSchema;
//# sourceMappingURL=restaurantSchema.js.map