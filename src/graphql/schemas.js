import { gql } from 'apollo-server'

const typesDefs = gql`
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
    repartidor: Repartidor,
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

  type Categoria {
    _id: ID,
    name: String,
    platillos: [Platillo]
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
    restaurantID: ID,
    usuarioID: ID,
    repartidorID: ID,
    total: Float,
    address: String,
    metodoPago: String,
    detail: [DetailInput]
  }

  input DetailInput {
    platilloID: ID,
    cantidad: Int,
    importe: Float
  }

  input CategoriaInput {
    name: String
  }
 
  type Query {
    getCategoria: [Categoria],
    getPlatillos: [Platillo],
    getRestaurants: [Restaurant],
    getRepartidores: [Repartidor],
    getUsers: [User],
    getPedidos: [Pedido],
  }

  type Mutation {
    addCategoria(data: CategoriaInput) : Categoria,
    addPlatillo(data: PlatilloInput) : Platillo,
    addRestaurant(data: RestaurantInput) : Restaurant,
    addRepartidor(data: RepartidorInput) : Repartidor,
    addUser(data: UserInput) : User,
    addPedido(data: PedidoInput) : Pedido,
    takePedido(pedidoID: ID, repartidorID: ID) : Pedido
  },

`

export default typesDefs
