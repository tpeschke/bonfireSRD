module.exports = {
    search: (req, res) => {
        const db = req.app.get('db')
        db.get.search(req.body.search).then(result => {
            let formattedResult = result.map(val => {
                let newVal = {chap: +val.linkid.split('.')[0], body: val.body, linkid: val.linkid}
                return newVal
            })
            res.send(formattedResult)
        })
    },
}