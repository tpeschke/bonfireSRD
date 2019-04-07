let chapterWorkhorse = {
    collectChapter: function (db, array, next, index) {
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                        if (piece.body[i].substring(0, 7) !== "Chapter" || piece.body[i].substring(0, 2) !== "+)") {
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
                        if (piece.body[i].substring(0, 7) !== "Chapter" && piece.body[i].substring(0, 2) !== "+)") {
                            splitArray.push(...piece.body[i].split(' '))
                        } else {
                            splitArray.push(piece.body[i])
                        }
                    }
                    piece.body = splitArray
                    array.push(piece)
                }
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
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
                        chapterWorkhorse.collectChapter(db, array, table.nextid, index)
                    } else {
                        console.log('done', table.linkid)
                        return 'done'
                    }
                })
            })
        }
    },
    addLinkToChapter: function (db, res, newItem, oldItem) {

        // GET HEADER
        if (newItem.linkid.split('.')[1] === 'h') {
            db.srdheader.insert(newItem).then(result => {
                console.log(result)
            })
            // GET CHART
        } else if (newItem.linkid.split('.')[1] === 'p') {

            // GET SIDEBAR
        } else if (newItem.linkid.split('.')[1] === 'c') {

            // GET SIDEBAR
        } else if (newItem.linkid.split('.')[1] === 'sb') {

            // GET SPACE
        } else if (newItem.linkid.split('.')[1] === 's') {
            db.srdsectionspace.insert(newItem).then(result => {
                db.srdsectionspace.save({ id: result.id, linkid: result.linkid + result.id }).then(finalItem => {
                    console.log(finalItem)
                    chapterWorkhorse.updateChapter(db, res, oldItem.linkid, { nextid: finalItem.linkid })
                })
            })
            // GET BULLETED LIST
        } else if (newItem.linkid.split('.')[1] === 'bl') {

            // GET IMAGE SRC
        } else if (newItem.linkid.split('.')[1] === 'i') {

            // GET SUBHEADING (GREY)
        } else if (newItem.linkid.split('.')[1] === 'hg' || newItem.linkid.split('.')[1] === 'hy' || newItem.linkid.split('.')[1] === 'hn') {

            // GET TABLE
        } else if (newItem.linkid.split('.')[1] === 't') {

        }
    },
    updateChapter: function (db, res, linkid, updateObj) {

            // GET HEADER
        if (linkid.split('.')[1] === 'h') {

            // GET CHART
        } else if (linkid.split('.')[1] === 'p') {
            db.srdparagraph.update({linkid}, updateObj).then( result => {
                res.send('done')
            })
            // GET SIDEBAR
        } else if (linkid.split('.')[1] === 'c') {

            // GET SIDEBAR
        } else if (linkid.split('.')[1] === 'sb') {

            // GET SPACE
        } else if (linkid.split('.')[1] === 's') {

            // GET BULLETED LIST
        } else if (linkid.split('.')[1] === 'bl') {

            // GET IMAGE SRC
        } else if (linkid.split('.')[1] === 'i') {

            // GET SUBHEADING (GREY)
        } else if (linkid.split('.')[1] === 'hg' || linkid.split('.')[1] === 'hy' || linkid.split('.')[1] === 'hn') {

            // GET TABLE
        } else if (linkid.split('.')[1] === 't') {

        }
    }
}

module.exports = chapterWorkhorse