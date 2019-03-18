let sidebarIndex = null;

function collectChapter(db, array, next, send) {
    // GET HEADER
    if (next.split('.')[1] === 'h') {
        db.srdheader.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex) {
                array[sidebarIndex].inner.push(piece)
                if (piece.linkid === array[sidebarIndex].endid) {
                    sidebarIndex = null
                }
            } else {
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
        // GET PARAGRAPH
    } else if (next.split('.')[1] === 'p') {
        db.srdparagraph.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex) {
                piece.body = piece.body.split('|')
                let splitArray = []
                for (let i = 0; i < piece.body.length; i++) {
                    if (piece.body[i].substring(0, 7) !== "Chapter") {
                        splitArray.push(...piece.body[i].split(' '))
                    } else {
                        splitArray.push(piece.body[i])
                    }
                }
                piece.body = splitArray
                array[sidebarIndex].inner.push(piece)
                if (piece.linkid === array[sidebarIndex].endid) {
                    sidebarIndex = null
                }
            } else {
                piece.body = piece.body.split('|')
                let splitArray = []
                for (let i = 0; i < piece.body.length; i++) {
                    if (piece.body[i].substring(0, 7) !== "Chapter") {
                        splitArray.push(...piece.body[i].split(' '))
                    } else {
                        splitArray.push(piece.body[i])
                    }
                }
                piece.body = splitArray
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
        // GET CHART
    } else if (next.split('.')[1] === 'c') {
        db.srdchart.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex) {
                array[sidebarIndex].inner.push(piece)
                if (piece.linkid === array[sidebarIndex].endid) {
                    sidebarIndex = null
                }
            } else {
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
        // GET SIDEBAR
    } else if (next.split('.')[1] === 'sb') {
        db.srdsidebar.findOne({ linkid: next }).then(piece => {
            array.push({ ...piece, inner: [] })
            sidebarIndex = array.length - 1
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
        // GET SPACE
    } else if (next.split('.')[1] === 's') {
        db.srdsectionspace.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex) {
                array[sidebarIndex].inner.push(piece)
                if (piece.linkid === array[sidebarIndex].endid) {
                    sidebarIndex = null
                }
            } else {
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
    }
    // GET BULLETED LIST
    if (next.split('.')[1] === 'bl') {
        db.srdbulletedlist.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex) {
                array[sidebarIndex].inner.push(piece)
                if (piece.linkid === array[sidebarIndex].endid) {
                    sidebarIndex = null
                }
            } else {
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
    }
}

function updateTable(db, newNext, linkid, send) {
    // GET HEADER
    if (linkid.split('.')[1] === 'h') {
        db.update.header(linkid, newNext).then(_ => {
            send('done')
        })
        // GET PARAGRAPH
    } else if (type === 'p') {
        db.run("select max(id) from srdparagraph").then(count => {

        })
        // GET CHART
    } else if (type === 'c') {
        db.run("select max(id) from srdchart").then(count => {

        })
        // GET SIDEBAR
    } else if (type === 'sb') {
        db.run("select max(id) from srdsidebar").then(count => {

        })
        // GET SPACE
    } else if (type === 's') {
        db.run("select max(id) from srdsectionspace").then(count => {

        })
    }
    // GET BULLETED LIST
    if (type === 'bl') {
        db.run("select max(id) from srdbulletedlist").then(count => {

        })
    }
}

module.exports = {
    get: (req, res) => {
        let chapterArray = []
        const db = req.app.get('db')

        collectChapter(db, chapterArray, req.params.id, res)
    },
    post: (req, res) => {
        let { body, type, previousid, previousnext, chapter } = req.query
        const db = req.app.get('db')

        //ADD to HEADER
        if (type === 'h') {
            db.get.headerCount().then(count => {
                db.srdheader.insert({ linkid: `${chapter}.${type}.${count[0].max}`, body, nextid: previousnext }).then(({ linkid }) => {
                    updateTable(db, linkid, previousid, res.send)
                })
            })
            //ADD to PARAGRAPH
        } else if (type === 'p') {
            db.run("select max(id) from srdparagraph").then(count => {
//Don't forget to add | for chapter references
            })
            //ADD to CHART
        } else if (type === 'c') {
            db.run("select max(id) from srdchart").then(count => {

            })
            //ADD to SIDEBAR
        } else if (type === 'sb') {
            db.run("select max(id) from srdsidebar").then(count => {

            })
            //ADD to SPACE
        } else if (type === 's') {
            db.run("select max(id) from srdsectionspace").then(count => {

            })
        }
        //ADD to BULLETED LIST
        if (type === 'bl') {
            db.run("select max(id) from srdbulletedlist").then(count => {

            })
        }
    },
    delete: (req, res) => {
        let { body, type, previousid, previousnext, chapter } = req.query
        const db = req.app.get('db')

        //DELETE from HEADER
        if (type === 'h') {
            db.get.headerCount().then(count => {
                db.srdheader.insert({ linkid: `${chapter}.${type}.${count[0].max}`, body, nextid: previousnext }).then(({ linkid }) => {
                    updateTable(db, linkid, previousid, res.send)
                })
            })
            //DELETE from PARAGRAPH
        } else if (type === 'p') {
            db.run("select max(id) from srdparagraph").then(count => {

            })
            //DELETE from CHART
        } else if (type === 'c') {
            db.run("select max(id) from srdchart").then(count => {

            })
            //DELETE from SIDEBAR
        } else if (type === 'sb') {
            db.run("select max(id) from srdsidebar").then(count => {

            })
            //DELETE from SPACE
        } else if (type === 's') {
            db.run("select max(id) from srdsectionspace").then(count => {

            })
        }
        //DELETE from BULLETED LIST
        if (type === 'bl') {
            db.run("select max(id) from srdbulletedlist").then(count => {

            })
        }
    }
}