function collectChapter(db, array, next, send) {
    if (next.split('.')[1] === 'h') {
        db.srdheader.findOne({linkid: next}).then( piece => {
            array.push(piece)
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else {
                send.send(array)
            }
        })
    } else if (next.split('.')[1] === 'p') {
        db.srdparagraph.findOne({linkid: next}).then(piece => {
            array.push(piece)
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else {
                send.send(array)
            }
        })
    } else if (next.split('.')[1] === 'c') {
        db.srdchart.findOne({linkid: next}).then(piece => {
            array.push(piece)
            if (piece.nextid) {
                collectChapter(db, array, piece.nextid, send)
            } else {
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