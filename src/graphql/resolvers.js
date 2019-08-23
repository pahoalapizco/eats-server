import { createPlatillo, getPlatillos } from '../actions/platilloActions'
import { createRepartidor, getRepartidores } from '../actions/repartidorActions'
import { addRestaurant,  getRestaurants } from '../actions/restaurantActions'
import { createUser, getUsers } from '../actions/usuarioActions'
import { addPedido, getPedidos } from '../actions/pedidosActions'

const resolvers = {
  Query: {
    getPlatillos: async (parent, args, context, info) => {
      try {
        return await getPlatillos()
      } catch (error) {
        return error
      }
    },
    getRepartidores: async () =>  await getRepartidores(),
    getRestaurants: async () => {
      try {
        return await getRestaurants()
      } catch (error) {
        return error
      }
    },
    getUsers: async () => {
      try {
        return getUsers()
      } catch (error) {
        return error
      }
    },
    getPedidos: async () => await getPedidos()
  },
  Mutation: {
    addPlatillo: async (parent, { data }, context, info) => await createPlatillo(data),
    addRestaurant: async (parent, { data }, context, info) => {
      try {
        return await addRestaurant(data)
      } catch (error) {
        return error
      }
    },
    addRepartidor: async (parent, args, context, info) => await createRepartidor(args.data),
    addUser: async (parent, { data }, context, info) => {
      try {
        return await createUser(data)
      } catch (error) {
        return error
      }
    },
    addPedido: async (parent, { data }, context, info) => await addPedido(data)
  }
}

export default resolvers