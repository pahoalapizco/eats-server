import { createPlatillo, getPlatillos } from '../actions/platilloActions'
import { createRepartidor, getRepartidores } from '../actions/repartidorActions'
import { addRestaurant,  getRestaurants } from '../actions/restaurantActions'
import { createUser, getUsers } from '../actions/usuarioActions'
import { addPedido, getPedidos, takePedido } from '../actions/pedidosActions'

const resolvers = {
  Query: {
    getPlatillos: async () => await getPlatillos(),
    getRepartidores: async () =>  await getRepartidores(),
    getRestaurants: async () => await getRestaurants(),
    getUsers: async () => await getUsers(),
    getPedidos: async () => await getPedidos()
  },
  Mutation: {
    addPlatillo: async (parent, { data }) => await createPlatillo(data),
    addRestaurant: async (parent, { data }) => await addRestaurant(data),
    addRepartidor: async (parent, { data }) => await createRepartidor(data),
    addUser: async (parent, { data }) => await createUser(data),
    addPedido: async (parent, { data }) => await addPedido(data),
    takePedido: async (parent, { pedidoID, repartidorID }) => await takePedido(pedidoID, repartidorID)
  }
}

export default resolvers