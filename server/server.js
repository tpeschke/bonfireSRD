const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , CronJob = require('cron').CronJob
    , { server, connection, auth } = require('./serv-config')
    , ctrl = require('./controller')
    , chapter = require('./chapter')
    , path = require('path')

const app = new express()
app.use(bodyParser.json())
app.use(cors())

app.use( express.static( __dirname + `/../dist/bonfireSRD` ) );

new CronJob('0 0 0 * * *', _ => {
    const a = app.get('db')
    chapter.storeChapters(a)
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

app.get('/nc/:id', chapter.get)

app.post('/search', ctrl.search);

app.patch('/saveChapter', chapter.saveChapter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/bonfireSRD/index.html'))
})
// ================================== \\

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(server, _ => {
        console.log(`The night lays like a lullaby on the earth ${server}`)
        chapter.chapterCount = 1;
        chapter.storeChapters(app.get('db'), chapter.chapterCount)
    })
})