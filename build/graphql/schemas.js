"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD\n\n  enum MetodoPago {\n    PayPal\n    Tarjeta\n    Efectivo\n  }\n  enum Vehiculos {\n    Bicicleta\n    Motocicleta\n    Automovil\n  }\n\n\n  type Platillo {\n    _id: ID\n    name: String\n    description: String\n    price: Float\n    img: String\n    restaurant: Restaurant\n    categoria: Categoria\n  }\n\n  type Restaurant {\n    _id: ID\n    name: String\n    address: String\n    open: String\n    closed: String\n    phonenumber: String\n    platillos: [Platillo]\n  }\n\n  type Repartidor {\n    _id: ID\n    name: String\n    lastname: String\n    phonenumber: String\n    vehiculo: String\n    pedidos: [Pedido]\n    calificaciones: [Calificacion]\n    promedio: Int\n    img: String\n  }\n\n  type User {\n    _id: ID\n    name: String\n    lastname: String\n    email: String\n    phonenumber: String\n    img: String\n  }\n\n  type Pedido {\n    _id: ID\n    restaurant: Restaurant\n    usuario: User\n    repartidor: Repartidor\n    total: Float\n    address: String\n    metodoPago: String\n    estatus: [Int]\n    detail: [Detail]\n  }\n\n  type Detail {\n    platillo: Platillo\n    cantidad: Int\n    importe: Float\n  }\n\n  type Categoria {\n    _id: ID,\n    name: String\n    img: String\n    platillos: [Platillo]\n  }\n\n  type Calificacion {\n    _id: ID,\n    estrellas: Int,\n    comentario: String\n  }\n  \n  type Token {\n    token: String\n  }\n\n  type Carrito {\n    _id: ID\n    usuario: User\n    restaurant: Restaurant\n    total: Float\n    detail: [Detail]\n  }\n\n  input PlatilloInput {\n    name: String!\n    description: String\n    price: Float!\n    img: Upload\n    restaurant: ID!\n    categoria: ID!\n  }\n\n  input RestaurantInput {\n    name: String!\n    address: String!\n    open: String\n    closed: String\n    phonenumber: String\n  }\n\n  input RepartidorInput {\n    name: String!\n    lastname: String!\n    phonenumber: String!\n    vehiculo: Vehiculos\n    img: Upload\n  }\n\n  input UserInput {\n    name: String!\n    lastname: String!\n    email: String!\n    password: String!\n    phonenumber: String!\n    img: Upload\n  }\n\n  input PedidoInput {\n    restaurant: ID\n    usuario: ID\n    repartidor: ID\n    total: Float\n    address: String\n    metodoPago: MetodoPago\n    detail: [DetailInput]\n  }\n\n  input DetailInput {\n    platillo: ID\n    cantidad: Int\n    importe: Float\n  }\n\n  input CategoriaInput {\n    name: String!\n    img: Upload\n  }\n \n  input CalificacionInput {\n    estrellas: Int!\n    comentario: String\n    repartidor: ID!\n  }\n\n  input CarritoInput {\n    restaurant: ID!\n    total: Float!\n    detail: [DetailInput]!\n  }\n\n  type Subscription {\n    pedidoAsignado: Repartidor\n  }\n\n  type Query {\n    getCategoria: [Categoria]\n    getPlatillos: [Platillo] @AuthDirective\n    getPlatillo(platilloID: ID): Platillo @AuthDirective\n    getRestaurants: [Restaurant]\n    getRepartidores: [Repartidor]\n    getUser: User @AuthDirective\n    getPedidos(data: PedidoInput): [Pedido] @AuthDirective\n    getCarrito: Carrito @AuthDirective\n  }\n\n  type Mutation {\n    addCategoria(data: CategoriaInput) : Categoria  \n    addPlatillo(data: PlatilloInput) : Platillo\n    addRestaurant(data: RestaurantInput) : Restaurant\n    addRepartidor(data: RepartidorInput) : Repartidor\n    addUser(data: UserInput) : Token\n    addPedido(data: PedidoInput) : Pedido @AuthDirective\n    takePedido(pedidoID: ID, repartidorID: ID) : Pedido\n    actualizarPedido(pedidoID: ID, Estatus: Int) : Pedido\n    calificarRepartidor(data: CalificacionInput) : Calificacion @AuthDirective\n    login(email: String, password: String) : Token\n    addCarrito(data: CarritoInput) : Carrito @AuthDirective\n    removeCarrito: Carrito @AuthDirective\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var typesDefs = (0, _apolloServer.gql)(_templateObject());
var _default = typesDefs;
exports["default"] = _default;
//# sourceMappingURL=schemas.js.map