'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userSchema = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var Schema = _mongoose["default"].Schema;
var userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String
  },
  img: {
    type: String
  }
}, {
  timestamps: true
});
exports.userSchema = userSchema;

_mongoose["default"].Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

userSchema.pre('save', function (next) {
  var user = this;

  _bcrypt["default"].genSalt(10, function (error, salt) {
    _bcrypt["default"].hash(user.password, salt, function (error, hash) {
      if (error) {
        return next(error);
      }

      user.password = hash;
      next();
    });
  });
});
module.exports = userSchema;
//# sourceMappingURL=usuarioSchema.js.map