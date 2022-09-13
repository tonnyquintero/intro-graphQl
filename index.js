'use strict'
require('dotenv').config()

const { graphql, buildSchema } = require('graphql');
const express = require('express')
const { graphqlHTTP } = require('express-graphql');

const app = express();
const port = process.env.PORT 


const schema = buildSchema(`
    type Query {
        hello: String,
        name: String,
        lastName: String,
    }
`)

const resolvers = {
    hello: () => {
        return 'Hola mundo'
    },
    name: () => {
        return 'Tonny'
    },
    lastName: () => {
        return 'Quintero'
    }
}

// //Ejecutar el query en la consola
// graphql({
//     schema: schema, 
//     source: '{ name }',
//     rootValue: resolvers,
// }).then((data) => {
//     console.log(data)
// }).catch(e => {
//     console.log(e)
// })

app.use('/api', graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Aplicación funcionando en http://localhost:${port}/api`)
})