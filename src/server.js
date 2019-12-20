const { ApolloServer, gql} = require('apollo-server-express')

const typeDefs = require('../graphql/schema')
const resolvers = require('../graphql/resolvers')

const server = new ApolloServer({typeDefs, resolvers, introspection: true, playground: true});

module.exports = server