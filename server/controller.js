const { c1URL, c2URL, c3URL, c4URL, c5URL, c6URL, c7URL, c8URL, c9URL, c10URL, c11URL, c12URL, c13URL, c14URL, c15URL, auth } = require('./serv-config')
    , rp = require('request-promise')

module.exports = {
    c: (req, res) => {
        const db = req.app.get('db')
        db.get.chapter(+req.params.id).then(result => res.send(result))
    },
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
    forceRun: (req, res) => {
        if (req.body.auth === auth) {
            const db = req.app ? req.app.get('db') : req.body.a
            let array = []

            rp(c1URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;

                array.push(db.update.chapters(1, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c2URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(2, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c3URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(3, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c4URL).then(html => {
                array.push(db.update.chapters(4, html, null).then())
            }).catch(err => console.log(err))

            rp(c5URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(5, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c6URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(6, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c7URL).then(html => {
                array.push(db.update.chapters(7, html, null).then())
            }).catch(err => console.log(err))

            rp(c8URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(8, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c9URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(9, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c10URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(10, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c11URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(11, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c12URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(12, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c13URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(13, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c14URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(14, sort.join(''), images).then())
            }).catch(err => console.log(err))

            rp(c15URL).then(html => {
                let images = '<div>';
                let sort = html.split('<span style="overflow: hidden;')
                for (let i = 1; i <= sort.length - 1; i++) {
                    let n = sort[i].indexOf('</span>')
                    let img = sort[i].slice(0, n)
                    sort[i] = sort[i].split(img + '</span>').join('')
                    images = images + '<span style="overflow:hidden;' + img + '</span>'
                }
                images = images === '<div>' ? null : images;
                array.push(db.update.chapters(15, sort.join(''), images).then())
            }).catch(err => console.log(err))

            Promise.all(array).then(_ => res ? res.send('done') : null)
        }
    }
}