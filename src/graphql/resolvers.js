import { createPlatillo, getPlatillos } from '../actions/platilloActions'
import { createRepartidor, getRepartidores } from '../actions/repartidorActions'
import { addRestaurant, getRestaurants } from '../actions/restaurantActions'
import { createUser, getUsers, login } from '../actions/usuarioActions'
import { addPedido, getPedidos, takePedido, updatePedido } from '../actions/pedidosActions'
import { getCategoria, addCategoria } from '../actions/categoriaActions'
import { calificarRepartidor } from '../actions/calificacionActions'

const resolvers = {
  Query: {
    getCategoria: async () => await getCategoria(),
    getPlatillos: async () => await getPlatillos(),
    getRepartidores: async () => await getRepartidores(),
    getRestaurants: async () => await getRestaurants(),
    getUsers: async () => await getUsers(),
    getPedidos: async (parent, { data }, context, info) => {
      try {
        const filter =  { ...data }
        const pedidos = await getPedidos(filter)
        return pedidos
      } catch (error) {
        return error
      }
    }
  },
  Mutation: {
    addCategoria: async (parent, { data }) => await addCategoria(data),
    addPlatillo: async (parent, { data }) => await createPlatillo(data),
    addRestaurant: async (parent, { data }) => await addRestaurant(data),
    addRepartidor: async (parent, { data }) => await createRepartidor(data),
    addUser: async (parent, { data }) => await createUser(data),
    login: async(parent, { email, password }) => {
      try {
        const user = await login(email, password)
        return user
      } catch (error) {
        return error
      }
    },
    addPedido: async (parent, { data }) => await addPedido(data),
    takePedido: async (parent, { pedidoID, repartidorID }) => await takePedido(pedidoID, repartidorID),
    actualizarPedido: async (parent, { pedidoID, Estatus }) => {
      try {
        const filter = { _id: pedidoID }
        const update = { $push: { 'estatus': Estatus } }
        const pedidoActualizado = await updatePedido(filter, update)
        return pedidoActualizado
      } catch (error) {
        return error
      }
    },
    calificarRepartidor: async (parent, { data }) => { 
      try {
        const calificacion = await calificarRepartidor(data)
        return calificacion
      } catch (error) {
        return error
      }
    }
  }
}

export default resolvers
