const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , CronJob = require('cron').CronJob
    , { server, connection, auth } = require('./serv-config')
    , ctrl = require('./controller')

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

app.get('/c/c1', ctrl.c1);
app.get('/c/c2', ctrl.c2);
app.get('/c/c3', ctrl.c3);
app.get('/c/c4', ctrl.c4);
app.get('/c/c5', ctrl.c5);
app.get('/c/c6', ctrl.c6);
app.get('/c/c7', ctrl.c7);
app.get('/c/c8', ctrl.c8);
app.get('/c/c9', ctrl.c9);
app.get('/c/c10', ctrl.c10);
app.get('/c/c11', ctrl.c11);
app.get('/c/c12', ctrl.c12);
app.get('/c/c13', ctrl.c13);
app.get('/c/c14', ctrl.c14);
app.get('/c/c15', ctrl.c15);

app.post('/search', ctrl.search)

app.patch('/auth', ctrl.forceRun)

// ================================== \\

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(server, _ => {
        console.log(`The night lays like a lullaby on the earth ${server}`)
    })
})