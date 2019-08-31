import { ApolloServer } from 'apollo-server'
import mongoose from 'mongoose'
import typeDefs from './graphql/schemas'
import resolvers from './graphql/resolvers'
import { getContext, AuthDirective } from './actions/authActions'
import { DATABASE } from './config/'

mongoose.connect(DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})

const mongoDB = mongoose.connection

mongoDB.on('error', console.error.bind(console, 'Error de conexión!!'))
mongoDB.on('open', () => console.log('BD conectada!!'))

const server = new ApolloServer({
  typeDefs,
  resolvers,
  schemaDirectives: {
    AuthDirective: AuthDirective
  },
  context: async ({ req }) => getContext(req)
})

server.listen({ port: process.env.PORT || 8080}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})
