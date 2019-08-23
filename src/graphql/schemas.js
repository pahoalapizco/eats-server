import { gql } from 'apollo-server'

const typesDefs = gql`
  type Platillo {
    _id: ID,
    name: String,
    description: String,
    type: String,
    price: Float,
    img: String,
    restaurantID: ID
  }

  type Restaurant {
    _id: ID,
    name: String,
    address: String,
    open: String,
    closed: String,
    platillos: [Platillo]
  }

  type Repartidor {
    _id: ID,
    name: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: String
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
    restaurantID: ID,
    usuarioID: ID,
    repartidorID: ID,
    total: Float,
    address: String,
    metodoPago: String,
    estatus: [Int],
    detail: [Detail]
  }

  type Detail {
    platilloID: ID,
    cantidad: Int,
    importe: Float
  }

  type Query {
    getPlatillos: [Platillo],
    getRestaurants: [Restaurant],
    getRepartidores: [Repartidor],
    getUsers: [User],
    getPedidos: [Pedido]
  }

  input PlatilloInput {
    name: String!,
    description: String,
    type: String!,
    price: Float!,
    img: String,
    restaurantID: ID!
  }

  input RestaurantInput {
    name: String!,
    address: String!,
    open: String,
    closed: String
  }

  input RepartidorInput {
    name: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: String
  }

  input UserInput {
    name: String!,
    lastname: String!,
    email: String!,
    password: String!,
    phonenumber: String
  }

  input PedidoInput {
    restaurantID: ID!,
    usuarioID: ID!,
    repartidorID: ID,
    total: Float!,
    address: String!,
    metodoPago: String!,
    detail: [DetailInput]!
  }

  input DetailInput {
    platilloID: ID!,
    cantidad: Int!,
    importe: Float!
  }

  type Mutation {
    addPlatillo(data: PlatilloInput) : Platillo,
    addRestaurant(data: RestaurantInput) : Restaurant,
    addRepartidor(data: RepartidorInput) : Repartidor,
    addUser(data: UserInput) : User,
    addPedido(data: PedidoInput) : Pedido
  },

`

export default typesDefs
