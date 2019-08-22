import { gql } from 'apollo-server'

const typesDefs = gql`
  type Platillo {
    _id: ID,
    name: String,
    description: String,
    type: String,
    price: Float,
    img: String
  }

  type Repartidor {
    _id: ID,
    name: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: String
  }

  type Query {
    getPlatillos: [Platillo],
    getRepartidores: [Repartidor]
  }

  input PlatilloInput {
    name: String,
    description: String,
    type: String,
    price: Float,
    img: String
  }

  input RepartidorInput {
    name: String,
    lastname: String,
    email: String,
    password: String,
    phonenumber: String
  }

  type Mutation {
    addPlatillo(data: PlatilloInput) : Platillo,
    addRepartidor(data: RepartidorInput) : Repartidor
  }
`

export default typesDefs
