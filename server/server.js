const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , CronJob = require('cron').CronJob
    , { server, connection, auth } = require('./serv-config')
    , ctrl = require('./controller')
    , path = require('path')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.use( express.static( __dirname + `/../dist/bonfireSRD` ) );

new CronJob('0 0 0 * * *', _ => {
    const a = app.get('db')
    ctrl.forceRun({body: {auth, a}}, null)
}, null, true, 'America/Los_Angeles');



///////////////////////////////////
////TESTING TOPLEVEL MIDDLEWARE////
///COMMENET OUT WHEN AUTH0 READY///
///////////////////////////////////
// app.use((req, res, next) =>{
//     if(!req.session.user){
//         req.session.user = {
//             user_id: 1,
//             user_name: "harrison ford", 
//             email: "adventureBuilder2049@gmail.com", 
//             name: "adventure", 
//             profile_picture : "http://www.placekitten.com/200/250",
//             auth_id: "adsgfhaoibjmoi5wrhgiuaosfngiuasdhg;ioarhdgv;ou"
//         }
//     }
//     next();
// })

// ================================== \\

app.get('/c/:id', ctrl.c);

app.post('/search', ctrl.search);

app.patch('/auth', ctrl.forceRun);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/bonfireSRD/index.html'))
})
// ================================== \\

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(server, _ => {
        console.log(`The night lays like a lullaby on the earth ${server}`)
    })
})