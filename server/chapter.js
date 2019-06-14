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
    chapterTwelve: [],
    chapterTwelveSide: [],
    chapterThirteen: [],
    chapterThirteenSide: [],
    chapterFourteen: [],
    chapterFourteenSide: [],
    chapterFifteen: [],
    chapterFifteenSide: [],
    storeChapters: (db, num) => {
        switch (num) {
            case 1:
                chapterObject.chapterOne = []
                collectChapter(db, chapterObject.chapterOne, '1.h.1')
                break;
            case 2:
                chapterObject.chapterTwo = []
                chapterObject.chapterTwoSide = []
                collectChapter(db, chapterObject.chapterTwo, '2.p.1')
                collectChapter(db, chapterObject.chapterTwoSide, '3.t.1', false, false, true)
                break;
            case 3:
                chapterObject.chapterThree = []
                chapterObject.chapterThreeSide = []
                collectChapter(db, chapterObject.chapterThree, '3.hg.1')
                collectChapter(db, chapterObject.chapterThreeSide, '3.sb.1', false, false, true)
                break;
            case 4:
                chapterObject.chapterFour = []
                chapterObject.chapterFourSide = [{ linkid: 'h', body: 'Expert Archetypes' }, { linkid: 'hg', body: 'Adventurer' }, { linkid: 'hg', body: 'Assassin' }, { linkid: 'hg', body: 'Diplomat' }, { linkid: 'hg', body: 'Foil' }, { linkid: 'hg', body: 'Noble' }, { linkid: 'hg', body: 'Philosopher' }, { linkid: 'hg', body: 'Ranger' }, { linkid: 'hg', body: 'Rascal' }, { linkid: 'hg', body: 'Sage' }, { linkid: 'hg', body: 'Thief' }, { linkid: 'h', body: 'Magical Archetypes' }, { linkid: 'hg', body: 'Mage' }, { linkid: 'hg', body: 'Wizard' }, { linkid: 'h', body: 'Servant Archetypes' }, { linkid: 'hg', body: 'Ashcaller' }, { linkid: 'hg', body: 'Priest' }, { linkid: 'h', body: 'Warrior Archetypes' }, { linkid: 'hg', body: 'Cateran' }, { linkid: 'hg', body: 'Fighter' }, { linkid: 'hg', body: 'Knight' }, { linkid: 'hg', body: 'Soldier' }, { linkid: 'hg', body: 'Tactician' }, { linkid: 'hg', body: 'Thug' }, { linkid: 'hg', body: 'Vanguard' }]
                collectChapter(db, chapterObject.chapterFour, '4.p.1')
                break;
            case 5:
                chapterObject.chapterFive = []
                chapterObject.chapterFiveSide = []
                collectChapter(db, chapterObject.chapterFive, '5.p.1')
                collectChapter(db, chapterObject.chapterFiveSide, '5.t.1', false, false, true)
                break;
            case 6:
                chapterObject.chapterSix = []
                chapterObject.chapterSixSide = []
                collectChapter(db, chapterObject.chapterSix, '6.p.1')
                break;
            case 7:
                chapterObject.chapterSeven = []
                chapterObject.chapterSevenSide = [{ linkid: 'hg', body: 'Acute Alertness' }, { linkid: 'hg', body: 'Anti-Magical Blank' }, { linkid: 'hg', body: 'Ancestor Spirit' }, { linkid: 'hg', body: 'Arcane Grip' }, { linkid: 'hg', body: 'Armor Training' }, { linkid: 'hg', body: 'Blind Fighting' }, { linkid: 'hg', body: 'Born Gunner' }, { linkid: 'hg', body: 'Charlatan' }, { linkid: 'hg', body: 'Dasher' }, { linkid: 'hg', body: 'Deadly Flanker' }, { linkid: 'hg', body: 'Eardstapa' }, { linkid: 'hg', body: 'Effective Ranger' }, { linkid: 'hg', body: 'Eldritch Adept' }, { linkid: 'hg', body: 'Endurance' }, { linkid: 'hg', body: 'Fleet Footed' }, { linkid: 'hg', body: 'Grounded Mind' }, { linkid: 'hg', body: 'Healthy' }, { linkid: 'hg', body: 'Improved Defense' }, { linkid: 'hg', body: 'Iron Sides' }, { linkid: 'hg', body: 'Knack' }, { linkid: 'hg', body: 'Polyglot' }, { linkid: 'hg', body: 'Quick Healing' }, { linkid: 'hg', body: 'Shield Breaker' }, { linkid: 'hg', body: 'Shield Training' }, { linkid: 'hg', body: 'Special Bond' }, { linkid: 'hg', body: 'Thieves Cant' }, { linkid: 'hg', body: 'Weapon Training' }]
                collectChapter(db, chapterObject.chapterSeven, '7.sb.1');
                break;
            case 8:
                chapterObject.chapterEight = []
                chapterObject.chapterEightSide = [{ linkid: 'h', body: 'Athletics Skill Suite' }, { linkid: 'hg', body: 'Acrobatics' }, { linkid: 'hg', body: 'Climbing' }, { linkid: 'hg', body: 'Disarm Trap' }, { linkid: 'hg', body: 'Escape Artist' }, { linkid: 'hg', body: 'Jumping' }, { linkid: 'hg', body: 'Sport (specific)' }, { linkid: 'hg', body: 'Stealth' }, { linkid: 'hg', body: 'Swimming' }, { linkid: 'h', body: 'Lore Skill Suite' }, { linkid: 'hg', body: 'Administration' }, { linkid: 'hg', body: 'Arcana' }, { linkid: 'hg', body: 'History' }, { linkid: 'hg', body: 'Language (specific)' }, { linkid: 'hg', body: 'Law (culture)' }, { linkid: 'hg', body: 'Literacy (language' }, { linkid: 'hg', body: 'Mathematics' }, { linkid: 'hg', body: 'Medicine' }, { linkid: 'hg', body: 'Monster Craft' }, { linkid: 'hg', body: 'Nature' }, { linkid: 'hg', body: 'Religion (cult)' }, { linkid: 'h', body: 'Streetwise Skill Suite' }, { linkid: 'hg', body: 'Current Affairs' }, { linkid: 'hg', body: 'Deception' }, { linkid: 'hg', body: 'Forgery' }, { linkid: 'hg', body: 'Gambling/Gaming' }, { linkid: 'hg', body: 'Intuition' }, { linkid: 'hg', body: 'Listening' }, { linkid: 'hg', body: 'Lock Picking' }, { linkid: 'hg', body: 'Perception' }, { linkid: 'hg', body: 'Sleight of Hand' }, { linkid: 'hg', body: 'Trap Finding' }, { linkid: 'h', body: 'Survival Skill Suite' }, { linkid: 'hg', body: 'Botany' }, { linkid: 'hg', body: 'Camouflage' }, { linkid: 'hg', body: 'Fire Building' }, { linkid: 'hg', body: 'First Aid' }, { linkid: 'hg', body: 'Handle Animal (specific)' }, { linkid: 'hg', body: 'Hiding' }, { linkid: 'hg', body: 'Monster Craft' }, { linkid: 'hg', body: 'Navigation' }, { linkid: 'hg', body: 'Scavenging' }, { linkid: 'hg', body: 'Snaring' }, { linkid: 'hg', body: 'Tracking' }, { linkid: 'hg', body: 'Use Rope' }, { linkid: 'h', body: 'Tactics Skill Suite' }, { linkid: 'hg', body: 'Combat Style (style)' }, { linkid: 'hg', body: 'Distraction' }, { linkid: 'hg', body: 'Leadership' }, { linkid: 'hg', body: 'Quarter Mastering' }, { linkid: 'hg', body: 'Rally' }, { linkid: 'hg', body: 'Recruiting' }, { linkid: 'hg', body: 'Riding' }, { linkid: 'hg', body: 'Signalling' }, { linkid: 'hg', body: 'Warfare' }, { linkid: 'h', body: 'Trades Skill Suite' }, { linkid: 'hg', body: 'Appraisal (specific)' }, { linkid: 'hg', body: 'Artistry (specific)' }, { linkid: 'hg', body: 'Cooking/Baking' }, { linkid: 'hg', body: 'Craft (specific)' }, { linkid: 'hg', body: 'Leatherworking' }, { linkid: 'hg', body: 'Metalworking' }, { linkid: 'hg', body: 'Musician (specific)' }, { linkid: 'hg', body: 'Performance' }, { linkid: 'hg', body: 'Persuasion' }]
                collectChapter(db, chapterObject.chapterEight, '8.p.1')
                break;
            case 9:
                chapterObject.chapterNine = []
                chapterObject.chapterNineSide = []
                collectChapter(db, chapterObject.chapterNine, '9.p.mBFesQQlZV')
                break;
            case 10:
                chapterObject.chapterTen = []
                chapterObject.chapterTenSide = []
                collectChapter(db, chapterObject.chapterTen, '10.h.akRpaRqrND')
                break;
            case 11:
                chapterObject.chapterEleven = []
                chapterObject.chapterElevenSide = [{ linkid: 'hg', body: 'Animals and Livestock' }, { linkid: 'hg', body: 'Clothing' }, { linkid: 'hg', body: 'Clothing Accessories' }, { linkid: 'hg', body: 'Containers Personal' }, { linkid: 'hg', body: 'Containers Heavy' }, { linkid: 'hg', body: 'Services' }, { linkid: 'hg', body: 'Fruits Vegetables and Nuts' }, { linkid: 'hg', body: 'Beverages' }, { linkid: 'hg', body: 'Spices' }, { linkid: 'hg', body: 'Livestock Feed' }, { linkid: 'hg', body: 'Meat' }, { linkid: 'hg', body: 'Rations and Ingredients' }, { linkid: 'hg', body: 'Substances Alchemical' }, { linkid: 'hg', body: 'Poisons and Toxins' }, { linkid: 'hg', body: 'Substances Animal Products' }, { linkid: 'hg', body: 'Substances Metal Ore' }, { linkid: 'hg', body: 'Substances Rope and Fabrics' }, { linkid: 'hg', body: 'Tools' }, { linkid: 'hg', body: 'Ranged Munitions' }, { linkid: 'hg', body: 'Armor' }, { linkid: 'hg', body: 'Shields' }, { linkid: 'hg', body: 'Swords' }, { linkid: 'hg', body: 'Daggers' }, { linkid: 'hg', body: 'Axes' }, { linkid: 'hg', body: 'Trauma' }, { linkid: 'hg', body: 'Polearms' }, { linkid: 'hg', body: 'Thrown Weapons' }, { linkid: 'hg', body: 'Ranged Weapons' }, { linkid: 'hg', body: 'Melee Weapon Stats' }, { linkid: 'hg', body: 'Ranged Weapon Stats' }, { linkid: 'hg', body: 'Armor Stats' }, { linkid: 'hg', body: 'Shield Stats' }]
                collectChapter(db, chapterObject.chapterEleven, '11.p.bltDcQdmTa')
                break;
            case 12:
                chapterObject.chapterTwelve = []
                chapterObject.chapterTwelveSide = [{ linkid: 'hg', body: 'Addle' }, { linkid: 'hg', body: 'Alarm' }, { linkid: 'hg', body: 'Ancestral Lore' }, { linkid: 'hg', body: 'Animate Corpse' }, { linkid: 'hg', body: 'Arcane Grounding' }, { linkid: 'hg', body: 'Auger Secret' }, { linkid: 'hg', body: 'Aura of Innocence' }, { linkid: 'hg', body: 'Banish' }, { linkid: 'hg', body: 'Bar Portal' }, { linkid: 'hg', body: 'Bind Elemental Heart' }, { linkid: 'hg', body: 'Binding Glyph' }, { linkid: 'hg', body: 'Charismatic Glamour' }, { linkid: 'hg', body: 'Commune' }, { linkid: 'hg', body: 'Conjure Wall' }, { linkid: 'hg', body: 'Corpse Hide' }, { linkid: 'hg', body: 'Corpse Tongue' }, { linkid: 'hg', body: 'Corrosion' }, { linkid: 'hg', body: 'Darkness' }, { linkid: 'hg', body: 'Deathwish' }, { linkid: 'hg', body: 'Detect Magic' }, { linkid: 'hg', body: 'Disorient' }, { linkid: 'hg', body: 'Dispel Enchantment' }, { linkid: 'hg', body: 'Divine Object' }, { linkid: 'hg', body: 'Dominate' }, { linkid: 'hg', body: 'Doppelganger' }, { linkid: 'hg', body: 'Earth Shift' }, { linkid: 'hg', body: 'Ease Passing' }, { linkid: 'hg', body: 'Eavesdrop' }, { linkid: 'hg', body: 'Elemental Affinity' }, { linkid: 'hg', body: 'Elemental Demi-Plan' }, { linkid: 'hg', body: 'Elemental Force' }, { linkid: 'hg', body: 'Elemental Form' }, { linkid: 'hg', body: 'Enfeeble' }, { linkid: 'hg', body: 'Enhance Vision' }, { linkid: 'hg', body: 'Fate Well' }, { linkid: 'hg', body: 'Fatigue' }, { linkid: 'hg', body: 'Flash Grenade' }, { linkid: 'hg', body: 'Float' }, { linkid: 'hg', body: 'Force Bind Spirit' }, { linkid: 'hg', body: 'Force Outcry' }, { linkid: 'hg', body: 'Freedom of Movement' }, { linkid: 'hg', body: 'Grease Trap' }, { linkid: 'hg', body: 'Haste / Still' }, { linkid: 'hg', body: 'Hermatic Snare' }, { linkid: 'hg', body: 'Hex' }, { linkid: 'hg', body: 'Hindsight' }, { linkid: 'hg', body: 'Hookgate' }, { linkid: 'hg', body: 'Icarian Flight' }, { linkid: 'hg', body: 'Illuminate' }, { linkid: 'hg', body: 'Illusionary Terrain' }, { linkid: 'hg', body: 'Improbable Stair' }, { linkid: 'hg', body: 'Induce Insanity' }, { linkid: 'hg', body: 'Ironhide' }, { linkid: 'hg', body: 'Kinetic Burst' }, { linkid: 'hg', body: 'Liminal Platform' }, { linkid: 'hg', body: 'Lore Mysterium' }, { linkid: 'hg', body: 'Magic Circle' }, { linkid: 'hg', body: 'Marionette' }, { linkid: 'hg', body: 'Mask of Zal' }, { linkid: 'hg', body: 'Message' }, { linkid: 'hg', body: 'Mimic' }, { linkid: 'hg', body: 'Mind Blank' }, { linkid: 'hg', body: 'Mystic Mark' }, { linkid: 'hg', body: 'Neutralize Poison / Toxin' }, { linkid: 'hg', body: 'Noxious Cloud' }, { linkid: 'hg', body: 'Obscure' }, { linkid: 'hg', body: 'Perfume' }, { linkid: 'hg', body: 'Private Conversation' }, { linkid: 'hg', body: 'Remove Element' }, { linkid: 'hg', body: 'Repair' }, { linkid: 'hg', body: 'Ricochet' }, { linkid: 'hg', body: 'Scry' }, { linkid: 'hg', body: 'Sequester' }, { linkid: 'hg', body: 'Shift Blame' }, { linkid: 'hg', body: 'Shift Weather' }, { linkid: 'hg', body: 'Shock' }, { linkid: 'hg', body: 'Silence' }, { linkid: 'hg', body: 'Slow Fall' }, { linkid: 'hg', body: 'Slow Metabolism' }, { linkid: 'hg', body: 'Smoke Bomb' }, { linkid: 'hg', body: 'Stitch Flesh' }, { linkid: 'hg', body: 'Summoning' }, { linkid: 'hg', body: 'Tear Flesh' }, { linkid: 'hg', body: 'Telekinesis' }, { linkid: 'hg', body: 'Tongues' }, { linkid: 'hg', body: "Tracker's Beacon" }, { linkid: 'hg', body: "Trompe L'Oeil" }, { linkid: 'hg', body: 'True Seeing' }, { linkid: 'hg', body: 'Turn' }, { linkid: 'hg', body: 'Viscous Trap' }, { linkid: 'hg', body: 'Wall Walk' }, { linkid: 'hg', body: 'Ward' }]
                collectChapter(db, chapterObject.chapterTwelve, '12.h.xYuVopAeCj')
                break;
            case 13:
                chapterObject.chapterThirteen = []
                chapterObject.chapterThirteenSide = [{ linkid: 'hg', body: 'Alter Weather' }, { linkid: 'hg', body: 'Anoint' }, { linkid: 'hg', body: 'Bless' }, { linkid: 'hg', body: 'Blessing of Protection' }, { linkid: 'hg', body: 'Charm Animal' }, { linkid: 'hg', body: 'Command' }, { linkid: 'hg', body: 'Confound' }, { linkid: 'hg', body: 'Curse' }, { linkid: 'hg', body: 'Disguise' }, { linkid: 'hg', body: 'Divine Call' }, { linkid: 'hg', body: 'Divine Charisma' }, { linkid: 'hg', body: 'Drain Energy' }, { linkid: 'hg', body: 'Earth Grip' }, { linkid: 'hg', body: 'Earthquake' }, { linkid: 'hg', body: 'Exalt Champion' }, { linkid: 'hg', body: 'Exorcism' }, { linkid: 'hg', body: 'Godspeed' }, { linkid: 'hg', body: 'Guidance' }, { linkid: 'hg', body: 'Hamper Magic' }, { linkid: 'hg', body: 'Heal' }, { linkid: 'hg', body: 'Holy Grace' }, { linkid: 'hg', body: 'Holy of Holies' }, { linkid: 'hg', body: 'Imbue With Fate' }, { linkid: 'hg', body: 'Inflict Stress' }, { linkid: 'hg', body: 'Invest Object' }, { linkid: 'hg', body: 'Invoke Emotion' }, { linkid: 'hg', body: 'Mana' }, { linkid: 'hg', body: 'Martyr' }, { linkid: 'hg', body: 'Might of Deity' }, { linkid: 'hg', body: 'Mortal Invigoration' }, { linkid: 'hg', body: 'Obscure Sense' }, { linkid: 'hg', body: 'Part Substance' }, { linkid: 'hg', body: 'Pillar of Fire' }, { linkid: 'hg', body: 'Predict Weather' }, { linkid: 'hg', body: 'Relax' }, { linkid: 'hg', body: 'Scry' }, { linkid: 'hg', body: 'Soothing Aura' }, { linkid: 'hg', body: 'Summon Object' }, { linkid: 'hg', body: 'Talk to Animals' }, { linkid: 'hg', body: 'Talk to Plants' }, { linkid: 'hg', body: 'Transform' }, { linkid: 'hg', body: 'Traumatize' }, { linkid: 'hg', body: 'Veil of Light/Dark' }, { linkid: 'hg', body: 'Water From Rock' }, { linkid: 'hg', body: 'Zone of Truth' }]
                collectChapter(db, chapterObject.chapterThirteen, '13.h.mMbVNdHvSm')
                break;
            case 14:
                chapterObject.chapterFourteen = []
                chapterObject.chapterFourteenSide = [{ linkid: 'h', body: 'Gaining Experiance' }, { linkid: 'h', body: 'Leveling Up' }, { linkid: 'hg', body: 'Day 1: Recieve CrP' }, { linkid: 'hg', body: 'Day 2: Increase Ability Scores' }, { linkid: 'hg', body: 'Day 3: Assess Personality' }, { linkid: 'hg', body: 'Day 4: Increase Class Abilities' }, { linkid: 'hg', body: 'Day 5: Train and Retrain Skills & Masteries' }, { linkid: 'hg', body: 'Day 6: Increase Health' }, { linkid: 'hg', body: 'Day 7: Recieve Honor' }]
                collectChapter(db, chapterObject.chapterFourteen, '14.p.abKWYOKQDr')
                break;
            case 15:
                chapterObject.chapterFifteen = []
                chapterObject.chapterFifteenSide = [{ linkid: 'hg', body: 'Ability Score Damage' }, { linkid: 'hg', body: 'Diseases & Poisons' }, { linkid: 'hg', body: 'Falling Damage' }, { linkid: 'hg', body: 'Long Term Exhaustion' }]
                collectChapter(db, chapterObject.chapterFifteen, '15.h.bYNKwyrdVf')
                break;
            default:
                console.log('all done')
                break;
        }
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
            case 12:
                res.send({ main: chapterObject.chapterTwelve, side: chapterObject.chapterTwelveSide })
                break
            case 13:
                res.send({ main: chapterObject.chapterThirteen, side: chapterObject.chapterThirteenSide })
                break
            case 14:
                res.send({ main: chapterObject.chapterFourteen, side: chapterObject.chapterFourteenSide })
                break
            case 15:
                res.send({ main: chapterObject.chapterFifteen, side: chapterObject.chapterFifteenSide })
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