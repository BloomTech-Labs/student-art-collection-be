require('dotenv').config();

const express = require('express');
// const { ApolloServer } = require('apollo-server-express');

const middleware = require('../middleware/global');
//todo const typeDefs = require('../graphql/schema')
//todo const resolvers = require('../graphql/resolvers')

const app = express();
const port = process.env.PORT || 4000;

//todo const server = new ApolloServer({typeDefs, resolvers});

middleware(app);

// server.applyMiddleware({ app, path: '/graphql' });

app.listen(port, () => console.log(`server listening on port ${port}`));
