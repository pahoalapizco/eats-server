import { createPlatillo, getPlatillos } from '../actions/platilloActions'
import { createRepartidor, getRepartidores } from '../actions/repartidorActions'


const resolvers = {
  Query: {
    getPlatillos: async (parent, args, context, info) => {
      try {
        return await getPlatillos()
      } catch (error) {
        return error
      }
    },
    getRepartidores: async () =>  await getRepartidores()
  },
  Mutation: {
    addPlatillo: async (parent, args, context, info) => await createPlatillo(args.data),
    addRepartidor: async  (parent, args, context, info) => await createRepartidor(args.data)
  }
}

export default resolvers