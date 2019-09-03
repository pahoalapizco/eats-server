import { gql } from 'apollo-server'

const typesDefs = gql`
  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

  enum MetodoPago {
    PayPal
    Tarjeta
    Efectivo
  }
  enum Vehiculos {
    Bicicleta
    Motocicleta
    Automovil
  }


  type Platillo {
    _id: ID
    name: String
    description: String
    price: Float
    img: String
    restaurant: Restaurant
    categoria: Categoria
  }

  type Restaurant {
    _id: ID
    name: String
    address: String
    open: String
    closed: String
    phonenumber: String
    platillos: [Platillo]
  }

  type Repartidor {
    _id: ID
    name: String
    lastname: String
    phonenumber: String
    vehiculo: String
    pedidos: [Pedido]
    calificaciones: [Calificacion]
    promedio: Int
    img: String
  }

  type User {
    _id: ID
    name: String
    lastname: String
    email: String
    phonenumber: String
    img: String
  }

  type Pedido {
    _id: ID
    restaurant: Restaurant
    usuario: User
    repartidor: Repartidor
    total: Float
    address: String
    metodoPago: String
    estatus: [Int]
    detail: [Detail]
  }

  type Detail {
    platillo: Platillo
    cantidad: Int
    importe: Float
  }

  type Categoria {
    _id: ID,
    name: String
    img: String
    platillos: [Platillo]
  }

  type Calificacion {
    _id: ID,
    estrellas: Int,
    comentario: String
  }
  
  type Token {
    token: String
  }

  type Carrito {
    _id: ID
    usuario: User
    restaurant: Restaurant
    total: Float
    detail: [Detail]
  }

  input PlatilloInput {
    name: String!
    description: String
    price: Float!
    img: Upload
    restaurant: ID!
    categoria: ID!
  }

  input RestaurantInput {
    name: String!
    address: String!
    open: String
    closed: String
    phonenumber: String
  }

  input RepartidorInput {
    name: String!
    lastname: String!
    phonenumber: String!
    vehiculo: Vehiculos
    img: Upload
  }

  input UserInput {
    name: String!
    lastname: String!
    email: String!
    password: String!
    phonenumber: String!
    img: Upload
  }

  input PedidoInput {
    restaurant: ID
    repartidor: ID
    total: Float
    address: String
    metodoPago: MetodoPago
    detail: [DetailInput]
  }

  input DetailInput {
    platillo: ID
    cantidad: Int
    importe: Float
  }

  input CategoriaInput {
    name: String!
    img: Upload
  }
 
  input CalificacionInput {
    estrellas: Int!
    comentario: String
    repartidor: ID!
  }

  input CarritoInput {
    restaurant: ID!
    total: Float!
    detail: [DetailInput]!
  }

  type Subscription {
    pedidoAsignado: Repartidor
  }

  type Query {
    getCategoria: [Categoria]
    getPlatillos: [Platillo] @AuthDirective
    getPlatillo(platilloID: ID): Platillo @AuthDirective
    getRestaurants: [Restaurant]
    getRepartidores: [Repartidor]
    getUser: User @AuthDirective
    getPedidos(data: PedidoInput): [Pedido] @AuthDirective
    getCarrito: Carrito @AuthDirective
  }

  type Mutation {
    addCategoria(data: CategoriaInput) : Categoria  
    addPlatillo(data: PlatilloInput) : Platillo
    addRestaurant(data: RestaurantInput) : Restaurant
    addRepartidor(data: RepartidorInput) : Repartidor
    addUser(data: UserInput) : Token
    addPedido(data: PedidoInput) : Pedido @AuthDirective
    takePedido(pedidoID: ID, repartidorID: ID) : Pedido
    actualizarPedido(pedidoID: ID, Estatus: Int) : Pedido
    calificarRepartidor(data: CalificacionInput) : Calificacion @AuthDirective
    login(email: String, password: String) : Token
    addCarrito(data: CarritoInput) : Carrito @AuthDirective
    removeCarrito: Carrito @AuthDirective
  }

`

export default typesDefs
