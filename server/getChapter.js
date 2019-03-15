let sidebarIndex = null;

function collectChapter(db, array, next, send) {
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
    } else if (next.split('.')[1] === 'p') {
        db.srdparagraph.findOne({ linkid: next }).then(piece => {
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
    } else if (next.split('.')[1] === 'sb') {
        db.srdsidebar.findOne({ linkid: next }).then(piece => {
            array.push({...piece, inner: []})
            sidebarIndex = array.length - 1 
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else if (!piece.nextid) {
                send.send(array)
            }
        })
    }
}

module.exports = {
    c1: (req, res) => {
        let chapterArray = []
        const db = req.app.get('db')

        collectChapter(db, chapterArray, '1.h.1', res)
    }
}