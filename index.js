'use strict'
require('dotenv').config()

const { makeExecutableSchema } = require('graphql-tools');
const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./lib/resolvers')
const app = express();
const port = process.env.PORT 

const typeDefs = readFileSync (
    join(__dirname, 'lib', 'schema.graphql'),
    'utf-8'
)
const schema = makeExecutableSchema({
    typeDefs, resolvers
})



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