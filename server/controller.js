const axios = require('axios')
    , { redirect, patreonSecret, patreonId, patreonRefresh, patreonAuth, patreonAccess } = require('./serv-config')

module.exports = {
    search: (req, res) => {
        const db = req.app.get('db')

        if (req.user && req.user.patreon) {
            db.get.advsearch(req.body.search).then(result => {
                res.send(result)
            })
        } else {
            db.get.search(req.body.search).then(result => {
                res.send(result)
            })
        }
    },
    handleOAuthRedirectRequest: (req, res) => {
        let { code } = req.body
        const db = req.app.get('db')
        axios.post(`https://www.patreon.com/api/oauth2/token?code=${code}&grant_type=authorization_code&client_id=${patreonId}&client_secret=${patreonSecret}&redirect_uri=${redirect}`, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(result => {
                axios.get(`https://www.patreon.com/api/oauth2/api/current_user`, { headers: { 'Authorization': `Bearer ${result.data.access_token}` } })
                    .then(account => {
                        db.update.patreon(account.data.included[0].attributes.amount_cents / 100, req.user.id)
                        req.user.patreon = account.data.included[0].attributes.amount_cents / 100
                        res.send(`${req.user.patreon}`)
                    })
            })
    },
    getRandomTrait: (req, res) => {
        const db = req.app.get('db')
        db.get.randomTrait().then(result => res.send(result))
    },
    getBookmarks: (req, res) => {
        const db = req.app.get('db')
        db.get.findBookmarks(req.user.id).then(result => {
            let newResult = result.map(val => {
                return { id: val.id, chapter: val.chapter, body: val.body, link: val.bookmarkcode }
            })
            res.send(newResult)
        })
    },
    addBookmark: (req, res) => {
        const db = req.app.get('db')
        // check to make sure they're logged in and have a patreon
        if (req.user && req.user.patreon) {
            // check to make sure their bookmarks aren't maxed out already
            db.countbookmarks(req.user.id).then(count => {
                if (+count[0].count < req.user.patreon * 5) {
                    // add bookmark
                    db.post.bookmarks(req.user.id, req.body.code).then(result => res.send('Bookmark added.'))
                } else {
                    res.status(403).send('You need to upgrade your Patreon tier to add more bookmarks.')
                }
            })
        } else {
            res.status(401).send('You need to be a Patreon to use bookmarks.')
        }
    },
    deleteBookmark: (req, res) => {
        const db = req.app.get('db')
        db.delete.bookmarks(req.params.id).then(result => {
            db.get.findBookmarks(req.user.id).then(result => {
                let newResult = result.map(val => {
                    return { id: val.id, chapter: val.chapter, body: val.body, link: val.bookmarkcode }
                })
                res.send(newResult)
            })
        })
    }
}