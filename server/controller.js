const axios = require('axios')
    , { redirect, patreonSecret, patreonId, patreonRefresh, patreonAuth, patreonAccess } = require('./serv-config')

module.exports = {
    search: (req, res) => {
        const db = req.app.get('db')
        db.get.search(req.body.search).then(result => {
            let formattedResult = result.map(val => {
                let newVal = { chap: +val.linkid.split('.')[0], body: val.body, linkid: val.linkid }
                return newVal
            })
            res.send(formattedResult)
        })
    },
    handleOAuthRedirectRequest: (req, res) => {
        let { code } = req.body
        const db = req.app.get('db')
        axios.post(`https://www.patreon.com/api/oauth2/token?code=${code}&grant_type=authorization_code&client_id=${patreonId}&client_secret=${patreonSecret}&redirect_uri=${redirect}`, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(result => {
                axios.get(`https://www.patreon.com/api/oauth2/api/current_user`, { headers: { 'Authorization': `Bearer ${result.data.access_token}`} })
                    .then(account => {
                        db.update.patreon(account.data.included[0].attributes.amount_cents / 100, req.user.id)
                        req.user.patreon = account.data.included[0].attributes.amount_cents / 100
                        res.send(`${req.user.patreon}`)
                    })
            })
    }
}