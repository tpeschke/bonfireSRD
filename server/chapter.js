const { editorAuth } = require('./serv-config')
const { collectChapter, updateChapter } = require('./workhorse')

chapterObject = {
    chapterOne: [],
    chapterTwo: [],
    chapterTwoSide: [],
    chapterThree: [],
    chapterThreeSide: [],
    chapterFour: [],
    chapterFourSide: [],
    chapterFive: [],
    chapterFiveSide: [],
    chapterSeven: [],
    chapterSevenSide: [],
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
        chapterObject.chapterFourSide = [{ linkid: 'h', body: 'Expert Archetypes' }, { linkid: 'hg', body: 'Adventurer' }, { linkid: 'hg', body: 'Assassin' }, { linkid: 'hg', body: 'Diplomat' }, { linkid: 'hg', body: 'Foil' }, { linkid: 'hg', body: 'Noble' }, { linkid: 'hg', body: 'Philosopher' }, { linkid: 'hg', body: 'Ranger' }, { linkid: 'hg', body: 'Rascal' }, { linkid: 'hg', body: 'Sage' }, { linkid: 'hg', body: 'Thief' }, { linkid: 'h', body: 'Magical Archetypes' }, { linkid: 'hg', body: 'Mage' }, { linkid: 'hg', body: 'Wizard' }, { linkid: 'h', body: 'Servant Archetypes' }, { linkid: 'hg', body: 'Ashcaller' }, { linkid: 'hg', body: 'Priest' }, { linkid: 'h', body: 'Warrior Archetypes' }, { linkid: 'hg', body: 'Fighter' }, { linkid: 'hg', body: 'Knight' }, { linkid: 'hg', body: 'Soldier' }, { linkid: 'hg', body: 'Tactician' }, { linkid: 'hg', body: 'Thug' }]
        collectChapter(db, chapterObject.chapterFour, '4.p.1')
        chapterObject.chapterFive = []
        chapterObject.chapterFiveSide = []
        collectChapter(db, chapterObject.chapterFive, '5.p.1')
        collectChapter(db, chapterObject.chapterFiveSide, '5.t.1')
        chapterObject.chapterSix = []
        chapterObject.chapterSixSide = []
        collectChapter(db, chapterObject.chapterSix, '6.p.1')
        // collectChapter(db, chapterObject.chapterSixSide, '5.t.1')
        chapterObject.chapterSeven = []
        chapterObject.chapterSevenSide = [{ linkid: 'hg', body: 'Acute Alertness' }, { linkid: 'hg', body: 'Anti-Magicial Blank' }, { linkid: 'hg', body: 'Ancestor Spirit' }, { linkid: 'hg', body: 'Arcane Grip' }, { linkid: 'hg', body: 'Armor Training' }, { linkid: 'hg', body: 'Blind Fighting' }]
        collectChapter(db, chapterObject.chapterSeven, '7.sb.1')
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
            case 5:
                res.send({ main: chapterObject.chapterFive, side: chapterObject.chapterFiveSide })
                break
            case 6:
                res.send({ main: chapterObject.chapterSix, side: chapterObject.chapterSixSide })
                break
            case 7:
                res.send({ main: chapterObject.chapterSeven, side: chapterObject.chapterSevenSide })
                break
            default:
                res.send('Something went wrong')
                break
        }
    },
    saveChapter: (req, res) => {
        if (req.body.auth !== editorAuth) {
            res.send('not authorized')
        } else {
            req.body.chapter.forEach(val => {
                updateChapter(req.app.get('db'), val)
            })
            req.body.deleteList.forEach(val => {
                deleteLink(req.app.get('db'), val)
            })
            res.send('done')
        }
    }
}

module.exports = chapterObject