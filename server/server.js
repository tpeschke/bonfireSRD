const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , CronJob = require('cron').CronJob
    , { server, connection, auth, logId, logSecret, logDomain, logCallback, sessionSecret, redirect, patreonSecret, patreonId, patreonRefresh, patreonAuth, patreonAccess } = require('./serv-config')
    , ctrl = require('./controller')
    , chapter = require('./chapter')
    , path = require('path')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , axios = require('axios')

const app = new express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.static(__dirname + `/../dist/bonfireSRD`));
app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize());
app.use(passport.session());

new CronJob('0 0 0 * * *', _ => {
    const a = app.get('db')
    chapter.storeChapters(a)
}, null, true, 'America/Los_Angeles');

passport.use(new Auth0Strategy({
    domain: logDomain,
    clientID: logId,
    clientSecret: logSecret,
    callbackURL: logCallback,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    let { email, user_id } = profile;
    const db = app.get('db');

    db.get.findUser([user_id]).then(function (users) {
        if (!users[0]) {
            db.post.createUser([
                email,
                user_id
            ]).then(users => {
                return done(null, users[0].id)
            }).catch(e => console.log(e))
        } else {
            return done(null, users[0].id)
        }
    }).catch(e => console.log(e))
}))

/////////////////////////////////
//TESTING TOPLEVEL MIDDLEWARE////
///COMMENT OUT WHEN AUTH0 READY///
/////////////////////////////////
app.use((req, res, next) => {
    if (!req.user) {
        req.user = {
            id: 1,
            email: "mr.peschke@gmail.com"
        }
    }
    next();
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: redirect
}));

passport.serializeUser((id, done) => {
    console.log('serialize', id)
    done(null, id)
})
passport.deserializeUser((id, done) => {
    console.log('deserialize', id)
    app.get('db').get.findUserSession([id]).then((user) => {
        return done(null, user[0]);
    })
})

app.get('/auth/logout', function (req, res) {
    req.logOut();
    res.redirect(`/`)
})

// ================================== \\
function handleOAuthRedirectRequest (req, res) {
    let {code} = req.query
    axios.post(`https://www.patreon.com/api/oauth2/token?code=${code}&grant_type=code&client_id=${patreonId}&client_secret=${patreonSecret}&redirect_uri=${redirect}`, {}, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
        .then(result => console.log(result))
            .catch(e=>console.log(e))
}


// ================================== \\

app.get('/nc/:id', chapter.get)
app.get('/c/:id', ctrl.c);
app.get('/checkLogin', (req, res) => req.user ? res.send(true) : res.send(false))
app.get('/checkPatreon', (req, res) => req.user.patreon ? res.send(true) : res.send(false))
app.get('/linkPatreon', handleOAuthRedirectRequest)

app.post('/search', ctrl.search);

app.patch('/auth', ctrl.forceRun);
app.patch('/saveChapter', chapter.saveChapter);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../dist/bonfireSRD/index.html'))
})
// ================================== \\

massive(connection).then(dbI => {
    app.set('db', dbI)
    app.listen(server, _ => {
        console.log(`The night lays like a lullaby on the earth ${server}`)
        chapter.storeChapters(app.get('db'), 1)
    })
})