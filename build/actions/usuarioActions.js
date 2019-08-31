"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = require("../config/");

// Agrega función a Date para agregarle días al día actual.
Date.prototype.addDay = function (days) {
  var day = new Date(this.valueOf());
  day.setDate(day.getDate() + days);
  return day;
};

var createToken = function createToken(user) {
  var expiration = new Date().addDay(5).getTime();
  var payload = {
    _id: user._id,
    email: user.email,
    name: user.name,
    lastname: user.lastname,
    expiration: expiration
  };

  var token = _jsonwebtoken["default"].sign(payload, _config.SECRET);

  return {
    token: token
  };
};

var createUser =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(user) {
    var newUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.UserModel.create(user);

          case 3:
            newUser = _context.sent;
            return _context.abrupt("return", createToken(newUser));

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

  return function createUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getUser =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(_id) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.UserModel.findOne({
              _id: _id
            });

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function getUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var login =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(email, password) {
    var user;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.UserModel.findOne({
              email: email
            });

          case 3:
            user = _context3.sent;

            if (!(!user || !_bcrypt["default"].compareSync(password, user.password))) {
              _context3.next = 6;
              break;
            }

            return _context3.abrupt("return", null);

          case 6:
            return _context3.abrupt("return", createToken(user));

          case 9:
            _context3.prev = 9;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 9]]);
  }));

  return function login(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

module.exports = {
  createUser: createUser,
  getUser: getUser,
  login: login
};
//# sourceMappingURL=usuarioActions.js.map