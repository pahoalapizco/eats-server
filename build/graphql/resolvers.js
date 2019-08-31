"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _platilloActions = require("../actions/platilloActions");

var _repartidorActions = require("../actions/repartidorActions");

var _restaurantActions = require("../actions/restaurantActions");

var _usuarioActions = require("../actions/usuarioActions");

var _pedidosActions = require("../actions/pedidosActions");

var _categoriaActions = require("../actions/categoriaActions");

var _calificacionActions = require("../actions/calificacionActions");

var _carritoActions = require("../actions/carritoActions");

var _apolloServer = require("apollo-server");

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pubSub = new _apolloServer.PubSub();
var PEDIDO_ASIGNADO = 'PEDIDO_ASIGNADO';
var resolvers = {
  Subscription: {
    pedidoAsignado: {
      subscribe: function subscribe(parent, args, context, info) {
        return pubSub.asyncIterator([PEDIDO_ASIGNADO]);
      }
    }
  },
  Query: {
    getCategoria: function () {
      var _getCategoria2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee() {
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _categoriaActions.getCategoria)();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getCategoria() {
        return _getCategoria2.apply(this, arguments);
      }

      return getCategoria;
    }(),
    getPlatillos: function () {
      var _getPlatillos2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2() {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return (0, _platilloActions.getPlatillos)();

              case 2:
                return _context2.abrupt("return", _context2.sent);

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getPlatillos() {
        return _getPlatillos2.apply(this, arguments);
      }

      return getPlatillos;
    }(),
    getRepartidores: function () {
      var _getRepartidores2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3() {
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return (0, _repartidorActions.getRepartidores)();

              case 2:
                return _context3.abrupt("return", _context3.sent);

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getRepartidores() {
        return _getRepartidores2.apply(this, arguments);
      }

      return getRepartidores;
    }(),
    getRestaurants: function () {
      var _getRestaurants2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4() {
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return (0, _restaurantActions.getRestaurants)();

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getRestaurants() {
        return _getRestaurants2.apply(this, arguments);
      }

      return getRestaurants;
    }(),
    getUser: function () {
      var _getUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parent, args, _ref, info) {
        var user;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                user = _ref.user;
                _context5.prev = 1;
                return _context5.abrupt("return", user);

              case 5:
                _context5.prev = 5;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", _context5.t0);

              case 8:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 5]]);
      }));

      function getUser(_x, _x2, _x3, _x4) {
        return _getUser.apply(this, arguments);
      }

      return getUser;
    }(),
    getPedidos: function () {
      var _getPedidos2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, _ref2, context, info) {
        var data, filter, pedidos;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = _ref2.data;
                _context6.prev = 1;
                filter = _objectSpread({}, data);
                _context6.next = 5;
                return (0, _pedidosActions.getPedidos)(filter);

              case 5:
                pedidos = _context6.sent;
                return _context6.abrupt("return", pedidos);

              case 9:
                _context6.prev = 9;
                _context6.t0 = _context6["catch"](1);
                return _context6.abrupt("return", _context6.t0);

              case 12:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 9]]);
      }));

      function getPedidos(_x5, _x6, _x7, _x8) {
        return _getPedidos2.apply(this, arguments);
      }

      return getPedidos;
    }(),
    getPlatillo: function () {
      var _getPlatillo2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(parent, _ref3, context, info) {
        var platilloID, platillo;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                platilloID = _ref3.platilloID;
                _context7.prev = 1;
                _context7.next = 4;
                return (0, _platilloActions.getPlatillo)(platilloID);

              case 4:
                platillo = _context7.sent;
                return _context7.abrupt("return", platillo);

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](1);
                return _context7.abrupt("return", _context7.t0);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 8]]);
      }));

      function getPlatillo(_x9, _x10, _x11, _x12) {
        return _getPlatillo2.apply(this, arguments);
      }

      return getPlatillo;
    }(),
    getCarrito: function () {
      var _getCarrito2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(parent, args, _ref4, info) {
        var user, carrito;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                user = _ref4.user;
                _context8.prev = 1;
                _context8.next = 4;
                return (0, _carritoActions.getCarrito)(user._id);

              case 4:
                carrito = _context8.sent;
                return _context8.abrupt("return", carrito);

              case 8:
                _context8.prev = 8;
                _context8.t0 = _context8["catch"](1);
                return _context8.abrupt("return", _context8.t0);

              case 11:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[1, 8]]);
      }));

      function getCarrito(_x13, _x14, _x15, _x16) {
        return _getCarrito2.apply(this, arguments);
      }

      return getCarrito;
    }()
  },
  Mutation: {
    addCategoria: function () {
      var _addCategoria2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(parent, _ref5) {
        var data, newCategoria, _ref6, createReadStream, stream, _ref7, url, categoria;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                data = _ref5.data;
                _context9.prev = 1;

                if (!data.img) {
                  _context9.next = 15;
                  break;
                }

                _context9.next = 5;
                return data.img;

              case 5:
                _ref6 = _context9.sent;
                createReadStream = _ref6.createReadStream;
                stream = createReadStream();
                _context9.next = 10;
                return (0, _utils.storeUpload)(stream);

              case 10:
                _ref7 = _context9.sent;
                url = _ref7.url;
                newCategoria = _objectSpread({}, data, {
                  img: url
                });
                _context9.next = 16;
                break;

              case 15:
                newCategoria = data;

              case 16:
                _context9.next = 18;
                return (0, _categoriaActions.addCategoria)(newCategoria);

              case 18:
                categoria = _context9.sent;
                return _context9.abrupt("return", categoria);

              case 22:
                _context9.prev = 22;
                _context9.t0 = _context9["catch"](1);
                return _context9.abrupt("return", _context9.t0);

              case 25:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[1, 22]]);
      }));

      function addCategoria(_x17, _x18) {
        return _addCategoria2.apply(this, arguments);
      }

      return addCategoria;
    }(),
    addPlatillo: function () {
      var _addPlatillo = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(parent, _ref8) {
        var data, newPlatillo, _ref9, createReadStream, stream, _ref10, url, platillo;

        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                data = _ref8.data;
                _context10.prev = 1;

                if (!data.img) {
                  _context10.next = 15;
                  break;
                }

                _context10.next = 5;
                return data.img;

              case 5:
                _ref9 = _context10.sent;
                createReadStream = _ref9.createReadStream;
                stream = createReadStream();
                _context10.next = 10;
                return (0, _utils.storeUpload)(stream);

              case 10:
                _ref10 = _context10.sent;
                url = _ref10.url;
                newPlatillo = _objectSpread({}, data, {
                  img: url
                });
                _context10.next = 16;
                break;

              case 15:
                newPlatillo = data;

              case 16:
                _context10.next = 18;
                return (0, _platilloActions.createPlatillo)(newPlatillo);

              case 18:
                platillo = _context10.sent;
                return _context10.abrupt("return", platillo);

              case 22:
                _context10.prev = 22;
                _context10.t0 = _context10["catch"](1);
                return _context10.abrupt("return", _context10.t0);

              case 25:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 22]]);
      }));

      function addPlatillo(_x19, _x20) {
        return _addPlatillo.apply(this, arguments);
      }

      return addPlatillo;
    }(),
    addRestaurant: function () {
      var _addRestaurant2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(parent, _ref11) {
        var data;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                data = _ref11.data;
                _context11.next = 3;
                return (0, _restaurantActions.addRestaurant)(data);

              case 3:
                return _context11.abrupt("return", _context11.sent);

              case 4:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11);
      }));

      function addRestaurant(_x21, _x22) {
        return _addRestaurant2.apply(this, arguments);
      }

      return addRestaurant;
    }(),
    addRepartidor: function () {
      var _addRepartidor = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(parent, _ref12) {
        var data, newRepartidor, _ref13, createReadStream, stream, _ref14, url, repartidor;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                data = _ref12.data;
                _context12.prev = 1;

                if (!data.img) {
                  _context12.next = 15;
                  break;
                }

                _context12.next = 5;
                return data.img;

              case 5:
                _ref13 = _context12.sent;
                createReadStream = _ref13.createReadStream;
                stream = createReadStream();
                _context12.next = 10;
                return (0, _utils.storeUpload)(stream);

              case 10:
                _ref14 = _context12.sent;
                url = _ref14.url;
                newRepartidor = _objectSpread({}, data, {
                  img: url
                });
                _context12.next = 16;
                break;

              case 15:
                newRepartidor = data;

              case 16:
                _context12.next = 18;
                return (0, _repartidorActions.createRepartidor)(newRepartidor);

              case 18:
                repartidor = _context12.sent;
                return _context12.abrupt("return", repartidor);

              case 22:
                _context12.prev = 22;
                _context12.t0 = _context12["catch"](1);
                return _context12.abrupt("return", _context12.t0);

              case 25:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[1, 22]]);
      }));

      function addRepartidor(_x23, _x24) {
        return _addRepartidor.apply(this, arguments);
      }

      return addRepartidor;
    }(),
    addUser: function () {
      var _addUser = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(parent, _ref15) {
        var data, newUser, _ref16, createReadStream, stream, _ref17, url, user;

        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                data = _ref15.data;
                _context13.prev = 1;

                if (!data.img) {
                  _context13.next = 15;
                  break;
                }

                _context13.next = 5;
                return data.img;

              case 5:
                _ref16 = _context13.sent;
                createReadStream = _ref16.createReadStream;
                stream = createReadStream();
                _context13.next = 10;
                return (0, _utils.storeUpload)(stream);

              case 10:
                _ref17 = _context13.sent;
                url = _ref17.url;
                newUser = _objectSpread({}, data, {
                  img: url
                });
                _context13.next = 16;
                break;

              case 15:
                newUser = data;

              case 16:
                _context13.next = 18;
                return (0, _usuarioActions.createUser)(newUser);

              case 18:
                user = _context13.sent;
                return _context13.abrupt("return", user);

              case 22:
                _context13.prev = 22;
                _context13.t0 = _context13["catch"](1);
                return _context13.abrupt("return", _context13.t0);

              case 25:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[1, 22]]);
      }));

      function addUser(_x25, _x26) {
        return _addUser.apply(this, arguments);
      }

      return addUser;
    }(),
    login: function () {
      var _login2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(parent, _ref18) {
        var email, password, user;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                email = _ref18.email, password = _ref18.password;
                _context14.prev = 1;
                _context14.next = 4;
                return (0, _usuarioActions.login)(email, password);

              case 4:
                user = _context14.sent;
                return _context14.abrupt("return", user);

              case 8:
                _context14.prev = 8;
                _context14.t0 = _context14["catch"](1);
                return _context14.abrupt("return", _context14.t0);

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[1, 8]]);
      }));

      function login(_x27, _x28) {
        return _login2.apply(this, arguments);
      }

      return login;
    }(),
    addPedido: function () {
      var _addPedido2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(parent, _ref19) {
        var data, pedido;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                data = _ref19.data;
                _context15.prev = 1;
                _context15.next = 4;
                return (0, _pedidosActions.addPedido)(data);

              case 4:
                pedido = _context15.sent;
                return _context15.abrupt("return", pedido);

              case 8:
                _context15.prev = 8;
                _context15.t0 = _context15["catch"](1);
                return _context15.abrupt("return", _context15.t0);

              case 11:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[1, 8]]);
      }));

      function addPedido(_x29, _x30) {
        return _addPedido2.apply(this, arguments);
      }

      return addPedido;
    }(),
    takePedido: function () {
      var _takePedido2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(parent, _ref20, context, info) {
        var pedidoID, repartidorID, pedido, repartidor;
        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                pedidoID = _ref20.pedidoID, repartidorID = _ref20.repartidorID;
                _context16.prev = 1;
                _context16.next = 4;
                return (0, _pedidosActions.takePedido)(pedidoID, repartidorID);

              case 4:
                pedido = _context16.sent;
                _context16.next = 7;
                return (0, _repartidorActions.getRepartidor)(repartidorID);

              case 7:
                repartidor = _context16.sent;
                pubSub.publish(PEDIDO_ASIGNADO, {
                  pedidoAsignado: repartidor
                });
                return _context16.abrupt("return", pedido);

              case 12:
                _context16.prev = 12;
                _context16.t0 = _context16["catch"](1);
                return _context16.abrupt("return", _context16.t0);

              case 15:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[1, 12]]);
      }));

      function takePedido(_x31, _x32, _x33, _x34) {
        return _takePedido2.apply(this, arguments);
      }

      return takePedido;
    }(),
    actualizarPedido: function () {
      var _actualizarPedido = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(parent, _ref21) {
        var pedidoID, Estatus, filter, update, pedidoActualizado;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                pedidoID = _ref21.pedidoID, Estatus = _ref21.Estatus;
                _context17.prev = 1;
                filter = {
                  _id: pedidoID
                };
                update = {
                  $push: {
                    estatus: Estatus
                  }
                };
                _context17.next = 6;
                return (0, _pedidosActions.updatePedido)(filter, update);

              case 6:
                pedidoActualizado = _context17.sent;
                return _context17.abrupt("return", pedidoActualizado);

              case 10:
                _context17.prev = 10;
                _context17.t0 = _context17["catch"](1);
                return _context17.abrupt("return", _context17.t0);

              case 13:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[1, 10]]);
      }));

      function actualizarPedido(_x35, _x36) {
        return _actualizarPedido.apply(this, arguments);
      }

      return actualizarPedido;
    }(),
    calificarRepartidor: function () {
      var _calificarRepartidor2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(parent, _ref22) {
        var data, calificacion;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                data = _ref22.data;
                _context18.prev = 1;
                _context18.next = 4;
                return (0, _calificacionActions.calificarRepartidor)(data);

              case 4:
                calificacion = _context18.sent;
                return _context18.abrupt("return", calificacion);

              case 8:
                _context18.prev = 8;
                _context18.t0 = _context18["catch"](1);
                return _context18.abrupt("return", _context18.t0);

              case 11:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[1, 8]]);
      }));

      function calificarRepartidor(_x37, _x38) {
        return _calificarRepartidor2.apply(this, arguments);
      }

      return calificarRepartidor;
    }(),
    addCarrito: function () {
      var _addCarrito2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(parent, _ref23, _ref24, info) {
        var data, user, carritoData, carrito;
        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                data = _ref23.data;
                user = _ref24.user;
                _context19.prev = 2;
                carritoData = _objectSpread({}, data, {
                  usuario: user._id
                });
                _context19.next = 6;
                return (0, _carritoActions.addCarrito)(carritoData);

              case 6:
                carrito = _context19.sent;
                return _context19.abrupt("return", carrito);

              case 10:
                _context19.prev = 10;
                _context19.t0 = _context19["catch"](2);
                return _context19.abrupt("return", _context19.t0);

              case 13:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[2, 10]]);
      }));

      function addCarrito(_x39, _x40, _x41, _x42) {
        return _addCarrito2.apply(this, arguments);
      }

      return addCarrito;
    }(),
    removeCarrito: function () {
      var _removeCarrito2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(parent, args, _ref25, info) {
        var user, carritoRemove;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                user = _ref25.user;
                _context20.prev = 1;
                _context20.next = 4;
                return (0, _carritoActions.removeCarrito)(user._id);

              case 4:
                carritoRemove = _context20.sent;
                return _context20.abrupt("return", carritoRemove);

              case 8:
                _context20.prev = 8;
                _context20.t0 = _context20["catch"](1);
                return _context20.abrupt("return", _context20.t0);

              case 11:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, null, [[1, 8]]);
      }));

      function removeCarrito(_x43, _x44, _x45, _x46) {
        return _removeCarrito2.apply(this, arguments);
      }

      return removeCarrito;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map