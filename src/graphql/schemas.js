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
    _id: ID,
    name: String,
    description: String,
    price: Float,
    img: String,
    restaurant: Restaurant,
    categoria: Categoria
  }

  type Restaurant {
    _id: ID,
    name: String,
    address: String,
    open: String,
    closed: String,
    phonenumber: String,
    platillos: [Platillo]
  }

  type Repartidor {
    _id: ID,
    name: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: String,
    vehiculo: String,
    pedidos: [Pedido],
    calificaciones: [Calificacion],
    promedio: Int
  }

  type User {
    _id: ID,
    name: String,
    lastname: String,
    email: String,
    phonenumber: String
  }

  type Pedido {
    _id: ID
    restaurant: Restaurant,
    usuario: User,
    repartidor: Repartidor,
    total: Float,
    address: String,
    metodoPago: String,
    estatus: [Int],
    detail: [Detail]
  }

  type Detail {
    platillo: Platillo,
    cantidad: Int,
    importe: Float
  }

  type Categoria {
    _id: ID,
    name: String,
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

  input PlatilloInput {
    name: String!,
    description: String,
    price: Float!,
    img: String,
    restaurant: ID!,
    categoria: ID!
  }

  input RestaurantInput {
    name: String!,
    address: String!,
    open: String,
    closed: String,
    phonenumber: String
  }

  input RepartidorInput {
    name: String!,
    lastname: String!,
    email: String!,
    password: String!,
    phonenumber: String!,
    vehiculo: Vehiculos
  }

  input UserInput {
    name: String!,
    lastname: String!,
    email: String!,
    password: String!,
    phonenumber: String!
  }

  input PedidoInput {
    restaurant: ID,
    usuario: ID,
    repartidor: ID,
    total: Float,
    address: String,
    metodoPago: MetodoPago,
    detail: [DetailInput]
  }

  input DetailInput {
    platillo: ID,
    cantidad: Int,
    importe: Float
  }

  input CategoriaInput {
    name: String
  }
 
  input CalificacionInput {
    estrellas: Int!,
    comentario: String,
    repartidor: ID!
  }

  type Query {
    getCategoria: [Categoria]
    getPlatillos: [Platillo] @AuthDirective
    getRestaurants: [Restaurant]
    getRepartidores: [Repartidor]
    getUsers: [User]
    getPedidos(data: PedidoInput): [Pedido]
  }

  type Mutation {
    addCategoria(data: CategoriaInput) : Categoria  
    addPlatillo(data: PlatilloInput) : Platillo
    addRestaurant(data: RestaurantInput) : Restaurant
    addRepartidor(data: RepartidorInput) : Repartidor
    addUser(data: UserInput) : User
    addPedido(data: PedidoInput) : Pedido @AuthDirective
    takePedido(pedidoID: ID, repartidorID: ID) : Pedido
    actualizarPedido(pedidoID: ID, Estatus: Int) : Pedido
    calificarRepartidor(data: CalificacionInput) : Calificacion
    login(email: String, password: String) : Token
  },

`

export default typesDefs
