'use strict';

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _mongoose = _interopRequireDefault(require("mongoose"));

var _usuarioSchema = _interopRequireDefault(require("../schemas/usuarioSchema"));

var _repartidorSchema = _interopRequireDefault(require("../schemas/repartidorSchema"));

var _platilloSchema = _interopRequireDefault(require("../schemas/platilloSchema"));

var _pedidoSchema = _interopRequireDefault(require("../schemas/pedidoSchema"));

var _restaurantSchema = _interopRequireDefault(require("../schemas/restaurantSchema"));

var _categoriaSchema = _interopRequireDefault(require("../schemas/categoriaSchema"));

var _calificacionSchema = _interopRequireDefault(require("../schemas/calificacionSchema"));

var _carritoSchema = _interopRequireDefault(require("../schemas/carritoSchema"));

var UserModel = _mongoose["default"].model('usuarios', _usuarioSchema["default"]);

var RepartidorModel = _mongoose["default"].model('repartidores', _repartidorSchema["default"]);

var PlatilloModel = _mongoose["default"].model('platillos', _platilloSchema["default"]);

var PedidoModel = _mongoose["default"].model('pedidos', _pedidoSchema["default"]);

var RestaurantModel = _mongoose["default"].model('restaurantes', _restaurantSchema["default"]);

var CategoriaModel = _mongoose["default"].model('categorias', _categoriaSchema["default"]);

var CalificacionModel = _mongoose["default"].model('calificaciones', _calificacionSchema["default"]);

var CarritoModel = _mongoose["default"].model('carrito', _carritoSchema["default"]);

module.exports = {
  UserModel: UserModel,
  RepartidorModel: RepartidorModel,
  PlatilloModel: PlatilloModel,
  PedidoModel: PedidoModel,
  RestaurantModel: RestaurantModel,
  CategoriaModel: CategoriaModel,
  CalificacionModel: CalificacionModel,
  CarritoModel: CarritoModel
};
//# sourceMappingURL=index.js.map