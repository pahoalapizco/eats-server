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

  type Query {
    getPlatillos: [Platillo],
    getRestaurants: [Restaurant],
    getRepartidores: [Repartidor],
    getUsers: [User]
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

  type Mutation {
    addPlatillo(data: PlatilloInput) : Platillo,
    addRestaurant(data: RestaurantInput) : Restaurant,
    addRepartidor(data: RepartidorInput) : Repartidor
    addUser(data: UserInput) : User
  },

`

export default typesDefs
