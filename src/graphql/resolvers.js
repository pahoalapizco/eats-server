import { createPlatillo, getPlatillos, getPlatillo } from '../actions/platilloActions'
import { createRepartidor, getRepartidores, getRepartidor } from '../actions/repartidorActions'
import { addRestaurant, getRestaurants } from '../actions/restaurantActions'
import { createUser, login } from '../actions/usuarioActions'
import { addPedido, getPedidos, takePedido, updatePedido } from '../actions/pedidosActions'
import { getCategoria, addCategoria } from '../actions/categoriaActions'
import { calificarRepartidor } from '../actions/calificacionActions'
import { addCarrito, getCarrito, removeCarrito } from '../actions/carritoActions'
import { PubSub } from 'apollo-server'
import { storeUpload } from '../utils'

const pubSub = new PubSub()
const PEDIDO_ASIGNADO = 'PEDIDO_ASIGNADO'

const resolvers = {
  Subscription: {
    pedidoAsignado: {
      subscribe: (parent, args, context, info) => pubSub.asyncIterator([PEDIDO_ASIGNADO])
    }
  },
  Query: {
    getCategoria: async () => await getCategoria(),
    getPlatillos: async () => await getPlatillos(),
    getRepartidores: async () => await getRepartidores(),
    getRestaurants: async () => await getRestaurants(),
    getUser: async (parent, args, { user }, info) =>{
      try {
        return user
      } catch (error) {
        return error
      }
    },
    getPedidos: async (parent, { data }, context, info) => {
      try {
        const filter = { ...data }
        const pedidos = await getPedidos(filter)
        return pedidos
      } catch (error) {
        return error
      }
    },
    getPlatillo: async (parent, { platilloID }, context, info) => {
      try {
        const platillo = await getPlatillo(platilloID)
        return platillo
      } catch (error) {
        return error
      }
    },
    getCarrito: async (parent, args, { user }, info) => {
      try {
        const carrito = await getCarrito(user._id)
        return carrito
      } catch (error) {
        return error
      }
    }
  },
  Mutation: {
    addCategoria: async (parent, { data }) => {
      try {
        let newCategoria
        if (data.img) {
          const { createReadStream  } = await data.img
          const stream = createReadStream()        
          const { url } = await storeUpload(stream)
          newCategoria = {
            ...data,
            img: url
          }
        } else {
          newCategoria = data
        }        
        const categoria = await addCategoria(newCategoria)
        return categoria
      } catch (error) {
        return error
      }
    },
    addPlatillo: async (parent, { data }) => {
      try {
        let newPlatillo
        if (data.img) {
          const { createReadStream  } = await data.img
          const stream = createReadStream()        
          const { url } = await storeUpload(stream)
          newPlatillo = {
            ...data,
            img: url
          }
        } else {
          newPlatillo = data
        }
        const platillo = await createPlatillo(newPlatillo)
        return platillo
      } catch (error) {
        return error
      }
    },
    addRestaurant: async (parent, { data }) => await addRestaurant(data),
    addRepartidor: async (parent, { data }) => {
      try {
        let newRepartidor
        if (data.img) {
          const { createReadStream  } = await data.img
          const stream = createReadStream()        
          const { url } = await storeUpload(stream)
          newRepartidor = {
            ...data,
            img: url
          }
        } else {
          newRepartidor = data
        }

        const repartidor = await createRepartidor(newRepartidor)
        return repartidor
      } catch (error) {
        return error
      }
    },
    addUser: async (parent, { data }) => {
      try {
        let newUser
        if (data.img) {
          const { createReadStream  } = await data.img
          const stream = createReadStream()        
          const { url } = await storeUpload(stream)
          newUser = {
            ...data,
            img: url
          }
        } else {
          newUser = data
        }
        const user = await createUser(newUser)
        return user
      } catch (error) {
        return error
      }

    },
    login: async (parent, { email, password }) => {
      try {
        const user = await login(email, password)
        return user
      } catch (error) {
        return error
      }
    },
    addPedido: async (parent, { data }, { user }) => {
      try {
        const newPedido = {
          ...data,
          usuario: user._id
        }
        const pedido = await addPedido(newPedido)
        return pedido
      } catch (error) {
        return error
      }
    },
    takePedido: async (parent, { pedidoID, repartidorID }, context, info) => {
      try {
        const pedido = await takePedido(pedidoID, repartidorID)
        const repartidor = await getRepartidor(repartidorID)
        pubSub.publish(PEDIDO_ASIGNADO, { pedidoAsignado: repartidor })
        return pedido
      } catch (error) {
        return error
      }
    },
    actualizarPedido: async (parent, { pedidoID, Estatus }) => {
      try {
        const filter = { _id: pedidoID }
        const update = { $push: { estatus: Estatus } }
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
    },
    addCarrito: async (parent, { data }, { user }, info) => {
      try {
        const carritoData = {
          ...data,
          usuario: user._id
        }
        const carrito = await addCarrito(carritoData)
        return carrito
      } catch (error) {
        return error
      }
    },
    removeCarrito: async (parent, args, { user }, info) => {
      try {
        const carritoRemove = await removeCarrito(user._id)
        return carritoRemove
      } catch (error) {
        return error
      }
    }
  }
}

export default resolvers
