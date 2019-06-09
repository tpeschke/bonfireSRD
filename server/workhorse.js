let chapterWorkhorse = {
    collectChapter: function (db, array, next, index, advanced) {
        let sidebarIndex = index;
        // GET HEADER / BULLECTED LIST / MINOR HEADINGS
        if (next.split('.')[1] === 'h' || next.split('.')[1] === 'bl' || next.split('.')[1] === 'hg' || next.split('.')[1] === 'hy' || next.split('.')[1] === 'hn') {
            db.srdbasic.findOne({ linkid: next }).then(piece => {
                if (sidebarIndex || sidebarIndex === 0) {
                    array[sidebarIndex].inner.push(piece)
                    if (piece.linkid === array[sidebarIndex].endid) {
                        sidebarIndex = null
                    }
                } else {
                    array.push({...piece, advanced})
                }
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
                } else {
                    console.log(piece.linkid.split('.')[0])
                    return 'done'
                }
            }).catch(e=>console.log(e))
            // GET PARAGRAPH
        } else if (next.split('.')[1] === 'p') {
            db.srdbasic.findOne({ linkid: next }).then(piece => {
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
                    if (!piece.body) {
                        console.log(piece)
                    }
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
                    array.push({...piece, advanced})
                }
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
                } else {
                    console.log(piece.linkid.split('.')[0])
                    return 'done'
                }
            }).catch(e=>console.log(e))
            // GET CHART
        } else if (next.split('.')[1] === 'c' || next.split('.')[1] === 'pc') {
            db.srdchart.findOne({ linkid: next }).then(piece => {
                if (sidebarIndex || sidebarIndex === 0) {
                    array[sidebarIndex].inner.push(piece)
                    if (piece.linkid === array[sidebarIndex].endid) {
                        sidebarIndex = null
                    }
                } else {
                    array.push({...piece, advanced})
                }
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
                } else {
                    console.log(piece.linkid.split('.')[0])
                    return 'done'
                }
            }).catch(e=>console.log(e))
            // GET SIDEBAR
        } else if (next.split('.')[1] === 'sb') {
            db.srdsidebar.findOne({ linkid: next }).then(piece => {
                array.push({ ...piece, inner: [] })
                sidebarIndex = array.length - 1
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
                } else {
                    console.log(piece.linkid.split('.')[0])
                    return 'done'
                }
            }).catch(e=>console.log(e))
            // GET SPACE
        } else if (next.split('.')[1] === 's') {
            db.srdsectionspace.findOne({ linkid: next }).then(piece => {
                if (sidebarIndex || sidebarIndex === 0) {
                    array[sidebarIndex].inner.push(piece)
                    if (piece.linkid === array[sidebarIndex].endid) {
                        sidebarIndex = null
                    }
                } else {
                    array.push({...piece, advanced})
                }
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
                } else {
                    console.log(piece.linkid.split('.')[0])
                    return 'done'
                }
            }).catch(e=>console.log(e))
        } else if (next.split('.')[1] === 'i') {
            db.srdimages.findOne({ linkid: next }).then(piece => {
                if (sidebarIndex || sidebarIndex === 0) {
                    array[sidebarIndex].inner.push(piece)
                    if (piece.linkid === array[sidebarIndex].endid) {
                        sidebarIndex = null
                    }
                } else {
                    array.push({...piece, advanced})
                }
                if (piece.nextid) {
                    chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex)
                } else {
                    console.log(piece.linkid.split('.')[0])
                    return 'done'
                }
            }).catch(e=>console.log(e))
            // GET ADVANCED
        } else if (next.split('.')[1] === 'a' || next.split('.')[1] === 'ab') {
 
            db.srdadvanced.findOne({ linkid: next }).then(piece => {
                if (false || piece.linkid.split('.')[1] === 'ab') {
                    if (sidebarIndex || sidebarIndex === 0) {
                        array[sidebarIndex].inner.push(piece)
                        if (piece.linkid === array[sidebarIndex].endid) {
                            sidebarIndex = null
                        }
                    } else {
                        array.push({...piece, advanced})
                    }
                    if (piece.nextid) {
                        chapterWorkhorse.collectChapter(db, array, piece.nextid, sidebarIndex, true)
                    } else {
                        console.log(piece.linkid.split('.')[0])
                        return 'done'
                    }
                } else {
                    if (piece.endid) {
                        chapterWorkhorse.collectChapter(db, array, piece.endid, sidebarIndex)
                    } else {
                        console.log(piece.linkid.split('.')[0])
                        return 'done'
                    }
                }
            }).catch(e=>console.log(e))
            // GET TABLE
        } else if (next.split('.')[1] === 't') {
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
                            let keyCount = 2;
                            for (let key in val) {
                                if (key !== 'id') {
                                    if (table.name === 'skill_matrix') {
                                        newArray.push(`${keyCount}`)
                                        keyCount = keyCount + 2;
                                    } else if (table.name === 'shield_and_weapon_breakage') {
                                        if (key === 'diceone') {
                                            newArray.push('d20!+10')
                                        } else if (key === 'dicetwo') {
                                            newArray.push('d20!')
                                        } else if (key === 'dicethree') {
                                            newArray.push('d20!-10')
                                        } else {
                                            newArray.push(key)
                                        }
                                    } else {
                                        newArray.push(key)
                                    }
                                }
                            }
                            newBody.push(newArray)
                            newArray = []
                        }
                        if (table.headers) {
                            newArray.push(' ')
                            if (table.name === 'skill_matrix') {
                                newArray.push(`${(i + 1) * 2}`)
                            } else {
                                newArray.push(newBody[0][i + 2])
                            }
                        }
                        for (let key in val) {
                            if (key !== 'id' && val[key]) {
                                newArray.push(val[key])
                            }
                        }
                        newBody.push(newArray)
                    })
                    array.push({ ...table, body: newBody })

                    if (table.nextid) {
                        chapterWorkhorse.collectChapter(db, array, table.nextid, index)
                    } else {
                        console.log(table.linkid)
                        return 'done'
                    }
                })
            }).catch(e=>console.log(e))
        }
    },
    updateChapter: function (db, item) {
        console.log(item)
        if (isNaN(item.id)) {
            chapterWorkhorse.saveChapter(db, item)
        }

        delete item.edited
            // SAVE HEADER
        if (item.linkid.split('.')[1] === 'h' || item.linkid.split('.')[1] === 'p' || item.linkid.split('.')[1] === 'bl' || item.linkid.split('.')[1] === 'hg' || item.linkid.split('.')[1] === 'hy' || item.linkid.split('.')[1] === 'hn') {
            db.srdbasic.save(item)
            // SAVE CHART
        } else if (item.linkid.split('.')[1] === 'c' || item.linkid.split('.')[1] === 'pc') {
            db.srdchart.save(item)
            // SAVE SIDEBAR
        } else if (item.linkid.split('.')[1] === 'sb') {
            db.srdsidebar.save(item)
            // SAVE SPACE
        } else if (item.linkid.split('.')[1] === 's') {
            db.srdsectionspace.save(item)
            // SAVE ADVANCED RULES
        } else if (item.linkid.split('.')[1] === 'ab' || item.linkid.split('.')[1] === 'a') {
            db.srdadvanced.save(item)
            // SAVE IMAGE SRC
        } else if (item.linkid.split('.')[1] === 'i') {
            console.log(item)
            db.srdimages.save(item)
            // SAVE TABLE
        } else if (item.linkid.split('.')[1] === 't') {
            console.log('yep')
        }
    },
    saveChapter: function (db, item) {
            // SAVE HEADER
        if (item.linkid.split('.')[1] === 'h' || item.linkid.split('.')[1] === 'p' || item.linkid.split('.')[1] === 'bl' || item.linkid.split('.')[1] === 'hg' || item.linkid.split('.')[1] === 'hy' || item.linkid.split('.')[1] === 'hn') {
            db.srdbasic.insert(item)
            // SAVE CHART
        } else if (item.linkid.split('.')[1] === 'c' || item.linkid.split('.')[1] === 'pc') {
            console.log(item)
            db.srdchart.insert(item)
            // SAVE SIDEBAR
        } else if (item.linkid.split('.')[1] === 'sb') {
            db.srdsidebar.insert(item)
            // SAVE SPACE
        } else if (item.linkid.split('.')[1] === 's') {
            db.srdsectionspace.insert(item)
            // SAVE ADVANCED RULES
        } else if (item.linkid.split('.')[1] === 'ab' || item.linkid.split('.')[1] === 'a') {
            db.srdadvanced.insert(item)
            // SAVE IMAGE SRC
        } else if (item.linkid.split('.')[1] === 'i') {
            console.log(item)
            db.srdimages.insert(item)
            // SAVE TABLE
        } else if (item.linkid.split('.')[1] === 't') {
            console.log('yep')
        }
    },
    deleteLink: function (db, item) {
        if (item.linkid.split('.')[1] === 'h' || item.linkid.split('.')[1] === 'p' || item.linkid.split('.')[1] === 'bl' || item.linkid.split('.')[1] === 'hg' || item.linkid.split('.')[1] === 'hy' || item.linkid.split('.')[1] === 'hn') {

            // SAVE CHART
        } else if (item.linkid.split('.')[1] === 'c' || item.linkid.split('.')[1] === 'pc') {

            // SAVE SIDEBAR
        } else if (item.linkid.split('.')[1] === 'sb') {
       
            // SAVE SPACE
        } else if (item.linkid.split('.')[1] === 's') {
  
            // SAVE ADVANCED RULES
        } else if (item.linkid.split('.')[1] === 'ab' || item.linkid.split('.')[1] === 'a') {

            // SAVE IMAGE SRC
        } else if (item.linkid.split('.')[1] === 'i') {

            // SAVE TABLE
        } else if (item.linkid.split('.')[1] === 't') {
            console.log('yep')
        }
    }
}

module.exports = chapterWorkhorse