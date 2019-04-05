function collectChapter(db, array, next, index) {
    let sidebarIndex = index;
    // GET HEADER
    if (next.split('.')[1] === 'h') {
        db.srdheader.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex || sidebarIndex === 0) {
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
            if (sidebarIndex || sidebarIndex === 0) {
                piece.body = piece.body.split('|')
                let splitArray = []
                for (let i = 0; i < piece.body.length; i++) {
                    if (piece.body[i].substring(0, 7) !== "Chapter" || piece.body[i].substring(0,2) !== "+)") {
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
                    if (piece.body[i].substring(0, 7) !== "Chapter" && piece.body[i].substring(0,2) !== "+)") {
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
            if (sidebarIndex || sidebarIndex === 0) {
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
            if (sidebarIndex || sidebarIndex === 0) {
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
            if (sidebarIndex || sidebarIndex === 0) {
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
    // GET IMAGE SRC
    if (next.split('.')[1] === 'i') {
        db.srdimages.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex || sidebarIndex === 0) {
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
    if (next.split('.')[1] === 'hg' || next.split('.')[1] === 'hy' || next.split('.')[1] === 'hn') {
        db.srdheadinggrey.findOne({ linkid: next }).then(piece => {
            if (sidebarIndex || sidebarIndex === 0) {
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
    // GET TABLE
    if (next.split('.')[1] === 't') {
        db.srdtable.findOne({ linkid: next }).then(table => {
            db[table.name].find().then(body => {
                let newBody = []
                body.forEach((val, i) => {
                    let newArray = []
                    if (i === 0) {
                        if (table.headers) {
                            newArray.push(' ')
                            newArray.push(' ')
                        }
                        for (let key in val) {
                            if (key !== 'id') {
                                newArray.push(key)
                            }
                        }
                        newBody.push(newArray)
                        newArray = []
                    }
                    if (table.headers) {
                        newArray.push(' ')
                        newArray.push(newBody[0][i + 2])
                    }
                    for (let key in val) {
                        if (key !== 'id') {
                            newArray.push(val[key])
                        }
                    }
                    newBody.push(newArray)
                })
                array.push({ ...table, body: newBody })

                if (table.nextid) {
                    collectChapter(db, array, table.nextid, index)
                } else {
                    console.log('done', table.linkid)
                    return 'done'
                }
            })
        })
    }
}

chapterObject = {
    chapterOne: [],
    chapterTwo: [],
    chapterTwoSide: [],
    chapterThree: [],
    chapterThreeSide: [],
    chapterFour: [],
    chapterFourSide: [],
    storeChapters: (db) => {
        chapterObject.chapterOne = []
        collectChapter(db, chapterObject.chapterOne, '1.h.1')
        chapterObject.chapterTwo = []
        chapterObject.chapterTwoSide = []
        collectChapter(db, chapterObject.chapterTwo, '2.p.1')
        collectChapter(db, chapterObject.chapterTwoSide, '3.t.1')
        chapterObject.chapterThree = []
        chapterObject.chapterThreeSide = []
        collectChapter(db, chapterObject.chapterThree, '3.hg.1')
        collectChapter(db, chapterObject.chapterThreeSide, '3.sb.1')
        chapterObject.chapterFour = []
        chapterObject.chapterFourSide = []
        collectChapter(db, chapterObject.chapterFour, '4.p.1')
        collectChapter(db, chapterObject.chapterFourSide, '')
    },
    get: (req, res) => {
        switch (+req.params.id) {
            case 1:
                res.send(chapterObject.chapterOne)
                break
            case 2:
                res.send({ main: chapterObject.chapterTwo, side: chapterObject.chapterTwoSide })
                break
            case 3:
                res.send({ main: chapterObject.chapterThree, side: chapterObject.chapterThreeSide })
                break
            case 4:
                res.send({ main: chapterObject.chapterFour, side: chapterObject.chapterFourSide })
                break
            default:
                res.send('Something went wrong')
                break
        }
    }
}

module.exports = chapterObject