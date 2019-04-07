const { editorAuth } = require('./serv-config')
const { collectChapter, addLinkToChapter } = require('./workhorse')

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
    },
    newLink: (req, res) => {
        let {auth, newItem, oldItem} = req.body
        if (auth !== editorAuth) {
            res.send('not auth')
        } else {
            addLinkToChapter(req.app.get('db'), res, newItem, oldItem)
        }

    }
}

module.exports = chapterObject