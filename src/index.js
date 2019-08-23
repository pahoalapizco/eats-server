import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers'

require('dotenv').config()

mongoose.connect(process.env.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})

const mongoDB = mongoose.connection

mongoDB.on('error', console.error.bind(console, 'Error de conexión!!'))
mongoDB.on('open', () => console.log('BD conectada!!'))


const server = new ApolloServer({ 
  typeDefs, 
  resolvers 
})

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
