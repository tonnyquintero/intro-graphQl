'use strict'
const { MongoClient } = require('mongodb')

const {
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
    DB_PORT,
    DB_NAME
} = process.env

const mongoUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}retryWrites=true&w=majority`

//mongodb+srv://tonny187:<password>@firstcluster.gctylup.mongodb.net/?retryWrites=true&w=majority


let connection
async function connectDB () {
    if(connection) return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl, {
            useNewUrlParser: true
        })
        connection = client.db(DB_NAME)
    } catch (error) {
       console.error('Were veru very sorry, Could  not connect to db ', mongoUrl, error)
       process.exit(1)
    }

    return connection

}

module.exports = connectDB