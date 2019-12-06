const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , { server, connection, auth, logId, logSecret, logDomain, logCallback, sessionSecret, redirect } = require('./serv-config')
    , ctrl = require('./controller')
    , path = require('path')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')

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

passport.use(new Auth0Strategy({
    domain: logDomain,
    clientID: logId,
    clientSecret: logSecret,
    callbackURL: logCallback,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    let { displayName, user_id } = profile;
    const db = app.get('db');

    db.get.findUser([user_id]).then(function (users) {
        if (!users[0]) {
            db.post.createUser([
                displayName,
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
// app.use((req, res, next) => {
//     if (!req.user) {
//         req.user = {
//             id: 1,
//             email: "mr.peschke@gmail.com",
//             patreon: 1
//         }
//     }
//     next();
// })

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: redirect
}));

passport.serializeUser((id, done) => {
    done(null, id)
})
passport.deserializeUser((id, done) => {
    app.get('db').get.findUserSession([id]).then((user) => {
        return done(null, user[0]);
    })
})

app.get('/auth/logout', function (req, res) {
    req.logOut();
    res.redirect(`/`)
})


// ================================== \\

app.get('/checkLogin', (req, res) => req.user ? res.send(true) : res.send(false))
app.get('/checkPatreon', (req, res) => req.user && req.user.patreon ? res.send(`${req.user.patreon}`) : res.send(false))
app.get('/bm', ctrl.getBookmarks)
app.get('/trait', ctrl.getRandomTrait)

app.post('/search', ctrl.search);
app.post('/linkPatreon', ctrl.handleOAuthRedirectRequest);
app.post('/abm', ctrl.addBookmark);

app.delete('/dbm/:id', ctrl.deleteBookmark);

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