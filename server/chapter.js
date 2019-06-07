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
    chapterEight: [],
    chapterEightSide: [],
    chapterNine: [],
    chapterNineSide: [],
    chapterTen: [],
    chapterTenSide: [],
    chapterEleven: [],
    chapterElevenSide: [],
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
        chapterObject.chapterSevenSide = [{ linkid: 'hg', body: 'Acute Alertness' }, { linkid: 'hg', body: 'Anti-Magical Blank' }, { linkid: 'hg', body: 'Ancestor Spirit' }, { linkid: 'hg', body: 'Arcane Grip' }, { linkid: 'hg', body: 'Armor Training' }, { linkid: 'hg', body: 'Blind Fighting' }, { linkid: 'hg', body: 'Born Gunner' }, { linkid: 'hg', body: 'Charlatan' }, { linkid: 'hg', body: 'Dasher' }, { linkid: 'hg', body: 'Deadly Flanker' }, { linkid: 'hg', body: 'Eardstapa' }, { linkid: 'hg', body: 'Effective Ranger' }, { linkid: 'hg', body: 'Eldritch Adept' }, { linkid: 'hg', body: 'Endurance' }, { linkid: 'hg', body: 'Fleet Footed' }, { linkid: 'hg', body: 'Grounded Mind' }, { linkid: 'hg', body: 'Healthy' }, { linkid: 'hg', body: 'Improved Defense' }, { linkid: 'hg', body: 'Iron Sides' }, { linkid: 'hg', body: 'Knack' }, { linkid: 'hg', body: 'Polyglot' }, { linkid: 'hg', body: 'Quick Healing' }, { linkid: 'hg', body: 'Shield Breaker' }, { linkid: 'hg', body: 'Shield Training' }, { linkid: 'hg', body: 'Special Bond' }, { linkid: 'hg', body: 'Thieves Cant' }, { linkid: 'hg', body: 'Weapon Training' }]
        collectChapter(db, chapterObject.chapterSeven, '7.sb.1')
        chapterObject.chapterEight = []
        chapterObject.chapterEightSide = [{linkid: 'h', body: 'Athletics Skill Suite'}, {linkid: 'hg', body: 'Acrobatics'}, {linkid: 'hg', body: 'Climbing'}, {linkid: 'hg', body: 'Disarm Trap'}, {linkid: 'hg', body: 'Escape Artist'}, {linkid: 'hg', body: 'Jumping'}, {linkid: 'hg', body: 'Sport (specific)'}, {linkid: 'hg', body: 'Stealth'}, {linkid: 'hg', body: 'Swimming'}, {linkid: 'h', body: 'Lore Skill Suite'}, {linkid: 'hg', body: 'Administration'}, {linkid: 'hg', body: 'Arcana'}, {linkid: 'hg', body: 'History'}, {linkid: 'hg', body: 'Language (specific)'}, {linkid: 'hg', body: 'Law (culture)'}, {linkid: 'hg', body: 'Literacy (language'}, {linkid: 'hg', body: 'Mathematics'}, {linkid: 'hg', body: 'Medicine'}, {linkid: 'hg', body: 'Monster Craft'}, {linkid: 'hg', body: 'Nature'}, {linkid: 'hg', body: 'Religion (cult)'}, {linkid: 'h', body: 'Streetwise Skill Suite'}, {linkid: 'hg', body: 'Current Affairs'}, {linkid: 'hg', body: 'Deception'}, {linkid: 'hg', body: 'Forgery'}, {linkid: 'hg', body: 'Gambling/Gaming'}, {linkid: 'hg', body: 'Intuition'}, {linkid: 'hg', body: 'Listening'}, {linkid: 'hg', body: 'Lock Picking'}, {linkid: 'hg', body: 'Perception'}, {linkid: 'hg', body: 'Sleight of Hand'}, {linkid: 'hg', body: 'Trap Finding'}, {linkid: 'h', body: 'Survival Skill Suite'}, {linkid: 'hg', body: 'Botany'}, {linkid: 'hg', body: 'Camouflage'}, {linkid: 'hg', body: 'Fire Building'}, {linkid: 'hg', body: 'First Aid'}, {linkid: 'hg', body: 'Handle Animal (specific)'}, {linkid: 'hg', body: 'Hiding'}, {linkid: 'hg', body: 'Monster Craft'}, {linkid: 'hg', body: 'Navigation'}, {linkid: 'hg', body: 'Scavenging'}, {linkid: 'hg', body: 'Snaring'}, {linkid: 'hg', body: 'Tracking'}, {linkid: 'hg', body: 'Use Rope'}, {linkid: 'h', body: 'Tactics Skill Suite'}, {linkid: 'hg', body: 'Combat Style (style)'}, {linkid: 'hg', body: 'Distraction'}, {linkid: 'hg', body: 'Leadership'}, {linkid: 'hg', body: 'Quarter Mastering'}, {linkid: 'hg', body: 'Rally'}, {linkid: 'hg', body: 'Recruiting'}, {linkid: 'hg', body: 'Riding'}, {linkid: 'hg', body: 'Signalling'}, {linkid: 'hg', body: 'Warfare'}, {linkid: 'h', body: 'Trades Skill Suite'}, {linkid: 'hg', body: 'Appraisal (specific)'}, {linkid: 'hg', body: 'Artistry (specific)'}, {linkid: 'hg', body: 'Cooking/Baking'}, {linkid: 'hg', body: 'Craft (specific)'}, {linkid: 'hg', body: 'Leatherworking'}, {linkid: 'hg', body: 'Metalworking'}, {linkid: 'hg', body: 'Musician (specific)'}, {linkid: 'hg', body: 'Performance'}, {linkid: 'hg', body: 'Persuasion'}]
        collectChapter(db, chapterObject.chapterEight, '8.p.1')
        // collectChapter(db, chapterObject.chapterEightSide, '5.t.1')
        chapterObject.chapterNine = []
        chapterObject.chapterNineSide = []
        collectChapter(db, chapterObject.chapterNine, '9.p.mBFesQQlZV')
        // collectChapter(db, chapterObject.chapterNineSide, '5.t.1')
        chapterObject.chapterTen = []
        chapterObject.chapterTenSide = []
        collectChapter(db, chapterObject.chapterTen, '10.h.akRpaRqrND')
        // collectChapter(db, chapterObject.chapterTenSide, '5.t.1')
        chapterObject.chapterEleven = []
        chapterObject.chapterElevenSide = [{linkid: 'hg', body: 'Animals and Livestock'}, {linkid: 'hg', body: 'Clothing'}, {linkid: 'hg', body: 'Clothing Accessories'}, {linkid: 'hg', body: 'Containers Personal'}, {linkid: 'hg', body: 'Containers Heavy'}, {linkid: 'hg', body: 'Services'}, {linkid: 'hg', body: 'Fruits Vegetables and Nuts'}, {linkid: 'hg', body: 'Beverages'}, {linkid: 'hg', body: 'Spices'}, {linkid: 'hg', body: 'Livestock Feed'}, {linkid: 'hg', body: 'Meat'}, {linkid: 'hg', body: 'Rations and Ingredients'}, {linkid: 'hg', body: 'Substances Alchemical'}, {linkid: 'hg', body: 'Poisons and Toxins'}, {linkid: 'hg', body: 'Substances Animal Products'}, {linkid: 'hg', body: 'Substances Metal Ore'}, {linkid: 'hg', body: 'Substances Rope and Fabrics'}, {linkid: 'hg', body: 'Tools'}, {linkid: 'hg', body: 'Ranged Munitions'}, {linkid: 'hg', body: 'Armor'}, {linkid: 'hg', body: 'Shields'}, {linkid: 'hg', body: 'Swords'}, {linkid: 'hg', body: 'Daggers'}, {linkid: 'hg', body: 'Axes'}, {linkid: 'hg', body: 'Trauma'}, {linkid: 'hg', body: 'Polearms'}, {linkid: 'hg', body: 'Thrown Weapons'}, {linkid: 'hg', body: 'Ranged Weapons'}, {linkid: 'hg', body: 'Melee Weapon Stats'}, {linkid: 'hg', body: 'Ranged Weapon Stats'}, {linkid: 'hg', body: 'Armor Stats'}, {linkid: 'hg', body: 'Shield Stats'}]
        collectChapter(db, chapterObject.chapterEleven, '11.p.bltDcQdmTa')
        // collectChapter(db, chapterObject.chapterElevenSide, '5.t.1')
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
            case 8:
                res.send({ main: chapterObject.chapterEight, side: chapterObject.chapterEightSide })
                break
            case 9:
                res.send({ main: chapterObject.chapterNine, side: chapterObject.chapterNineSide })
                break
            case 10:
                res.send({ main: chapterObject.chapterTen, side: chapterObject.chapterTenSide })
                break
            case 11:
                res.send({ main: chapterObject.chapterEleven, side: chapterObject.chapterElevenSide })
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