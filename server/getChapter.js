function collectChapter(db, array, next, send) {
    if (next.split('.')[1] === 'h') {
        db.get.header(next).then(piece => {
            array.push(piece[0])
            if (piece[0].nextid) {
                collectChapter(db, array, piece[0].nextid, send)
            } else {
                send.send(array)
            }
        })
    } else if (next.split('.')[1] === 'p') {
        db.get.paragraph(next).then(piece => {
            array.push(piece[0])
            if (piece[0].nextid) {
                collectChapter(db, array, piece[0].nextid, send)
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