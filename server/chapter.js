function collectChapter (db, array, next, index) {
    let sidebarIndex = index;
    
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
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
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
                    if (piece.body[i].substring(0, 7) !== "Chapter" && piece.body[i] !== "character sheet here.") {
                        splitArray.push(...piece.body[i].split(' '))
                    } else {
                        splitArray.push(piece.body[i])
                    }
                }
                piece.body = splitArray
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
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
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
            }
        })
        // GET SIDEBAR
    } else if (next.split('.')[1] === 'sb') {
        db.srdsidebar.findOne({ linkid: next }).then(piece => {
            array.push({ ...piece, inner: [] })
            sidebarIndex = array.length - 1
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
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
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
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
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
            }
        })
    }
    // GET SUBHEADING (GREY)
    if (next.split('.')[1] === 'hg') {
        db.srdheadinggrey.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex) {
                array[sidebarIndex].inner.push(piece)
                if (piece.linkid === array[sidebarIndex].endid) {
                    sidebarIndex = null
                }
            } else {
                array.push(piece)
            }
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, sidebarIndex)
            } else {
                console.log('done', piece.linkid.split('.')[0])
                return 'done'
            }
        })
    }
}

function collectTable(db, array, tableName) {
    db.srdtable.findOne({name : tableName}).then(table => {
        db[table.name].find().then(body => {
            let newBody = {}
            let ordered = []
            body.forEach(val => {
                for (let key in val) {
                    if (key !== 'id' && !newBody[key]) {
                        newBody[key] = []
                        newBody[key].push(val[key])
                    } else if (key !== 'id' && newBody[key]) {
                        newBody[key].push(val[key])
                    }
                }
            })
            for (let key in newBody) {
                newBody[key].unshift(key)
                if (key === 'score') {
                    ordered.unshift(newBody[key])
                } else {
                    ordered.push(newBody[key])
                }
            }
            array.push({...table, body: ordered})

            if (table.nextTable) {
                collectTable(db, array, table.nextTable)
            } else {
                console.log('done', tableName)
                return 'done'
            }
        })
    })
}

// [{
//     name: String,
//     header: [String],
//     body: [[String | Number]],
//     nextTable: String
// }]

chapterObject = {
    chapterOne: [],
    chapterTwo: [],
    chapterTwoSide: [],
    storeChapters: (db) => {
        chapterObject.chapterOne = []
        chapterObject.chapterTwo = []
        collectChapter(db, chapterObject.chapterOne, '1.h.1')
        collectChapter(db, chapterObject.chapterTwo, '2.p.1')
        collectTable(db, chapterObject.chapterTwoSide, 'strength')
    },
    get: (req, res) => {
        switch(+req.params.id) {
            case 1:
                res.send(chapterObject.chapterOne)
                break
            case 2:
                res.send({main: chapterObject.chapterTwo, side: chapterObject.chapterTwoSide})
                break
            default:
                res.send('Something went wrong')
                break
        }
    }
}

module.exports = chapterObject