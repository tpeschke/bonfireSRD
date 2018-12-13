const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , { server } = require('./serv-config')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.listen(server, _ => {
    console.log(`The night lays like a lullaby on the earth ${server}`)
})