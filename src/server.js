const { ApolloServer, gql} = require('apollo-server-express')
//todo const typeDefs = require('../graphql/schema')
//todo const resolvers = require('../graphql/resolvers')
const data = {
    me: {username: 'John'}
}

const schema = gql`
type Query {
    me: User
}
type User {
    username: String!
}
`
const resolvers = {
    Query: {
        me: () => {
            return {username: 'John'}
        }
    }
}

const server = new ApolloServer({typeDefs: schema, resolvers});

module.exports = server