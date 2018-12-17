const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , { server } = require('./serv-config')
    , ctrl = require('./controller')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.use( express.static( __dirname + `/../src/index.html` ) );

// ================================== \\

app.get('/chapter/c1', ctrl.c1);
app.get('/chapter/c2', ctrl.c2);
app.get('/chapter/c3', ctrl.c3);
app.get('/chapter/c4', ctrl.c4);
app.get('/chapter/c5', ctrl.c5);
app.get('/chapter/c6', ctrl.c6);
app.get('/chapter/c7', ctrl.c7);
app.get('/chapter/c8', ctrl.c8);
app.get('/chapter/c9', ctrl.c9);
app.get('/chapter/c10', ctrl.c10);
app.get('/chapter/c11', ctrl.c11);
app.get('/chapter/c12', ctrl.c12);
app.get('/chapter/c13', ctrl.c13);
app.get('/chapter/c14', ctrl.c14);
app.get('/chapter/c15', ctrl.c15);

// ================================== \\

app.listen(server, _ => {
    console.log(`The night lays like a lullaby on the earth ${server}`)
})