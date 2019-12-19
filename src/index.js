require('dotenv').config();

const middleware = require('../middleware/global')

const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const server = require('./server')

middleware(app)

server.applyMiddleware({ app, path: '/graphql' });

app.get('/', (req, res) => { 
    res.send(`<h1>Server running!</h1>`)
})

app.listen(port, () => {
    const message = `Server listening on ${port}`
    console.log(message)
});