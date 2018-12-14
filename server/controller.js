const { c1URL, c2URL, c3URL, c4URL, c5URL, c6URL, c7URL, c8URL, c9URL, c10URL, c11URL, c12URL, c13URL, c14URL, c15URL } = require('./serv-config')
    , rp = require('request-promise')

module.exports = {
    c1: (req, res) => {
        rp(c1URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c2: (req, res) => {
        rp(c2URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c3: (req, res) => {
        rp(c3URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c4: (req, res) => {
        rp(c4URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c5: (req, res) => {
        rp(c5URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c6: (req, res) => {
        rp(c6URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c7: (req, res) => {
        rp(c7URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c8: (req, res) => {
        rp(c8URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c9: (req, res) => {
        rp(c9URL).then(html => {
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c10: (req, res) => {
        rp(c10URL).then(html => { 
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c11: (req, res) => {
        rp(c11URL).then(html => { 
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c12: (req, res) => {
        rp(c12URL).then(html => { 
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c13: (req, res) => {
        rp(c13URL).then(html => { 
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c14: (req, res) => {
        rp(c14URL).then(html => { 
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    },
    c15: (req, res) => {
        rp(c15URL).then(html => { 
            res.send([{chapter: html}])
        }).catch(err => console.log(err))
    }
}