require('dotenv').config()

import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'

mongoose.connect( process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true
})

const mongoDB = mongoose.connection

mongoDB.on('error', console.error.bind(console,'Error de conexión!!'))
mongoDB.on('open', ()  => console.log('BD conectada!!'))


// const resolvers = {
//   Query: {
//     books: () => books
//   }
// }

// const server = new ApolloServer({ typeDefs, resolvers })

// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`)
// })
