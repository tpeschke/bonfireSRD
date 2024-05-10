const axios = require('axios')
    , { redirect, patreonSecret, patreonId, patreonRefresh, patreonAuth, patreonAccess } = require('./serv-config')
    , combatEquipment = require('./combat')
    , { sendErrorForwardNoFile, checkForContentTypeBeforeSending } = require('./helpers')

const sendErrorForward = sendErrorForwardNoFile('main controller')

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex > 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

module.exports = {
    search: (req, res) => {
        const db = req.app.get('db')

        if (req.user && req.user.patreon) {
            db.get.advsearch(req.body.search).then(result => {
                checkForContentTypeBeforeSending(res, result)
            }).catch(e => sendErrorForward('adv search', e, res))
        } else {
            db.get.search(req.body.search).then(result => {
                checkForContentTypeBeforeSending(res, result)
            }).catch(e => sendErrorForward('basic search', e, res))
        }
    },
    handleOAuthRedirectRequest: (req, res) => {
        let { code } = req.body
        const db = req.app.get('db')
        axios.post(`https://www.patreon.com/api/oauth2/token?code=${code}&grant_type=authorization_code&client_id=${patreonId}&client_secret=${patreonSecret}&redirect_uri=${redirect}`, {}, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } })
            .then(result => {
                axios.get(`https://www.patreon.com/api/oauth2/api/current_user`, { headers: { 'Authorization': `Bearer ${result.data.access_token}` } })
                    .then(account => {
                        db.update.patreon(account.data.included[0].attributes.amount_cents / 100, req.user.id)
                        req.user.patreon = account.data.included[0].attributes.amount_cents / 100
                        checkForContentTypeBeforeSending(res, `${req.user.patreon}`)
                    }).catch(e => sendErrorForward('patreon', e, res))
            }).catch(e => sendErrorForward('auth redirect', e, res))
    },
    getRandomConviction: (req, res) => {
        const db = req.app.get('db')
        db.get.randomConvic().then(result => checkForContentTypeBeforeSending(res, result)).catch(e => sendErrorForward('rando convic', e, res))
    },
    getRandomDescription: (req, res) => {
        const db = req.app.get('db')
        db.get.randomDescript().then(result => checkForContentTypeBeforeSending(res, result)).catch(e => sendErrorForward('rando descript', e, res))
    },
    getBookmarks: (req, res) => {
        const db = req.app.get('db')
        db.get.findBookmarks(req.user.id).then(result => {
            let newResult = result.map(val => {
                return { id: val.id, chapter: val.chapter, body: val.body, link: val.bookmarkcode, section: val.section }
            })
            checkForContentTypeBeforeSending(res, newResult)
        }).catch(e => checkForContentTypeBeforeSending('find bookmarks', e, res))
    },
    addBookmark: (req, res) => {
        const db = req.app.get('db')
        // check to make sure they're logged in and have a patreon
        if (req.user && req.user.patreon) {
            // check to make sure their bookmarks aren't maxed out already
            db.countbookmarks(req.user.id).then(count => {
                if (+count[0].count < req.user.patreon * 5) {
                    // add bookmark
                    db.post.bookmarks(req.user.id, req.body.code).then(result => checkForContentTypeBeforeSending(res, 'Bookmark added.')).catch(e => sendErrorForward('add bookmark', e, res))
                } else {
                    res.status(403).send('You need to upgrade your Patreon tier to add more bookmarks.')
                }
            }).catch(e => sendErrorForward('count bookmarks', e, res))
        } else {
            res.status(401).send('You need to be a Patreon to use bookmarks.')
        }
    },
    deleteBookmark: (req, res) => {
        const db = req.app.get('db')
        db.delete.bookmarks(req.params.id).then(result => {
            db.get.findBookmarks(req.user.id).then(result => {
                let newResult = result.map(val => {
                    return { id: val.id, chapter: val.chapter, body: val.body, link: val.bookmarkcode }
                })
                checkForContentTypeBeforeSending(res, newResult)
            }).catch(e => sendErrorForward('find bookmark 2', e, res))
        }).catch(e => sendErrorForward('delete bookmark', e, res))
    },
    getAllEquipment: (req, res) => {
        checkForContentTypeBeforeSending(res, combatEquipment)
    },
    getArmor: (req, res) => {
        checkForContentTypeBeforeSending(res, combatEquipment.armor)
    },
    getShields: (req, res) => {
        checkForContentTypeBeforeSending(res, combatEquipment.shields)
    },
    getGroupedWeapons: (req, res) => {
        let { type = '' } = req.params

        if (type.toUpperCase() === "RANGED") {
            let weapons = [
                {
                    label: 'Thrown',
                    weapons: combatEquipment.weapons.thrown.map(weapon => {
                        for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                            if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                                return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                            }
                        }
                    })
                },
                {
                    label: 'Mechanical',
                    weapons: combatEquipment.weapons.mechanical.map(weapon => {
                        for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                            if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                                return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                            }
                        }
                    })
                },
                {
                    label: 'Firearms',
                    weapons: combatEquipment.weapons.firearms.map(weapon => {
                        for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                            if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                                return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                            }
                        }
                    })
                }
            ]

            checkForContentTypeBeforeSending(res, weapons)
        } else if (type.toUpperCase() === "MELEE") {
            checkForContentTypeBeforeSending(res, [
                {
                    label: 'Axes',
                    weapons: combatEquipment.weapons.axes
                },
                {
                    label: 'Polearms',
                    weapons: combatEquipment.weapons.polearms
                },
                {
                    label: 'Sidearms',
                    weapons: combatEquipment.weapons.sidearms
                },
                {
                    label: 'Swords',
                    weapons: combatEquipment.weapons.swords
                },
                {
                    label: 'Trauma',
                    weapons: combatEquipment.weapons.trauma
                }
            ])
        } else {
            checkForContentTypeBeforeSending(res, [
                {
                    label: 'Axes',
                    weapons: combatEquipment.weapons.axes
                },
                {
                    label: 'Firearms',
                    weapons: combatEquipment.weapons.firearms.map(weapon => {
                        for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                            if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                                return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                            }
                        }
                    })
                },
                {
                    label: 'Mechanical',
                    weapons: combatEquipment.weapons.mechanical.map(weapon => {
                        for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                            if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                                return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                            }
                        }
                    })
                },
                {
                    label: 'Polearms',
                    weapons: combatEquipment.weapons.polearms
                },
                {
                    label: 'Sidearms',
                    weapons: combatEquipment.weapons.sidearms
                },
                {
                    label: 'Swords',
                    weapons: combatEquipment.weapons.swords
                },
                {
                    label: 'Thrown',
                    weapons: combatEquipment.weapons.thrown.map(weapon => {
                        for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                            if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                                return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                            }
                        }
                    })
                },
                {
                    label: 'Trauma',
                    weapons: combatEquipment.weapons.trauma
                }
            ])
        }
    },
    getRandomDevotion: (req, res) => {
        const db = req.app.get('db')

        db.get.randomDevotion().then(result => checkForContentTypeBeforeSending(res, result)).catch(e => sendErrorForward('rando devotion', e, res))
    },
    getRandomFlaw: (req, res) => {
        const db = req.app.get('db')

        db.get.randomFlaw().then(result => checkForContentTypeBeforeSending(res, result)).catch(e => sendErrorForward('rando flaw', e, res))
    },
    getRandomFlaws: (req, res) => {
        const db = req.app.get('db')
        const limit = 100
        let { number = 1 } = req.params
        if (number < 0) {
            number = 1
        } else if (number > limit) {
            number = limit
        }

        db.get.randomFlaws(number).then(result => checkForContentTypeBeforeSending(res, result)).catch(e => sendErrorForward('rando flaws', e, res))
    },
    getWeapons: (req, res) => {
        let { type = '' } = req.params

        if (type.toUpperCase() === "RANGED") {
            let weapons = [
                ...combatEquipment.weapons.thrown,
                ...combatEquipment.weapons.mechanical,
                ...combatEquipment.weapons.firearms
            ]

            weapons = weapons.map(weapon => {
                for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                    if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                        return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                    }
                }
            })
            checkForContentTypeBeforeSending(res, weapons)
        } else if (type.toUpperCase() === "MELEE") {
            checkForContentTypeBeforeSending(res, [
                ...combatEquipment.weapons.axes,
                ...combatEquipment.weapons.polearms,
                ...combatEquipment.weapons.sidearms,
                ...combatEquipment.weapons.swords,
                ...combatEquipment.weapons.trauma
            ])
        } else {
            let weapons = [
                ...combatEquipment.weapons.thrown,
                ...combatEquipment.weapons.mechanical,
                ...combatEquipment.weapons.firearms
            ]

            weapons = weapons.map(weapon => {
                for (let i = 0; i < combatEquipment.weapons.ranges.length; i++) {
                    if (combatEquipment.weapons.ranges[i].name.toUpperCase() === weapon.name.toUpperCase()) {
                        return { ...weapon, range: combatEquipment.weapons.ranges[i].range }
                    }
                }
            })

            checkForContentTypeBeforeSending(res, [
                ...weapons,
                ...combatEquipment.weapons.axes,
                ...combatEquipment.weapons.polearms,
                ...combatEquipment.weapons.sidearms,
                ...combatEquipment.weapons.swords,
                ...combatEquipment.weapons.trauma
            ])
        }
    },
    getPatreons: (req, res) => {
        const db = req.app.get('db')

        let patronArray = []
        db.get.patrons().then(results => {
            results.forEach(({ name, patreon }) => {
                for (let i = 0; i < patreon; i++) {
                    patronArray.push(name)
                }
            })

            checkForContentTypeBeforeSending(res, shuffle(patronArray))
        }).catch(e => sendErrorForward('get patreons', e, res))
    },
    getAncestryCharacteristics: (req, res) => {
        const deluxeAncestries = {
            dwarf: {
                strength: 'Resilience',
                temperament: 'Stubborn',
                descriptions: [
                    'Rough',
                    'Strong',
                    'Brash',
                    'Honest',
                    'Opinionated',
                    'Down-to-Earth',
                    'Stubborn',
                    'Focused',
                    'Defiant',
                    'Greedy'
                ],
                convictions: [
                    'Do it right the first time',
                    'Investments always pay off',
                    'Honor and Glory are greater than life',
                    'Push boundaries for that is where you find the gems',
                    'The measure of a man is whether they fight',
                    'Be confident in yourself',
                    'I’m stronger than stone and iron',
                    'What does not kill you makes you stronger',
                    'The forge makes the steel stronger',
                    'What we are is what we pass on'
                ],
                devotions: [
                    'Strike the earth!',
                    'Hew the might',
                    'Fight for strength and honor',
                    'Increase the glory of the hold',
                    'Reject the fear of death'
                ]
            },
            gaunt: {
                strength: 'Per Home Culture',
                temperament: 'Choose one: Salvation Secured or Damnation Secured',
                descriptions: [
                    'Free',
                    'Enabling',
                    'Loyal',
                    'Iconoclastic',
                    'Individual'
                ],
                convictions: [
                    'Enjoy the world while you still can',
                    'Eat, drink, and be merry for tomorrow we die',
                    'Fear is the mother of morality',
                    'What is old should be discarded',
                    'I’ve already made the ultimate sacrifice'
                ],
                devotions: [
                    'Indulge in all good things',
                    'Make my sacrifice worth it',
                    'Raise others',
                    'Reject what others try to saddle you with'
                ]
            },
            pech: {
                strength: 'Guile',
                temperament: 'Clannish',
                descriptions: [
                    'Humble',
                    'Reserved',
                    'Resolute',
                    'Optimistic',
                    'Concentrated',
                    'Crafty',
                    'Content',
                    'Hedonistic',
                    'Careful',
                    'Trustworthy'
                ],
                convictions: [
                    'Hubris will get you every time',
                    'The work of your hands is the best work',
                    '‘Now’ is the only moment we have',
                    'A person is only as good as their word',
                    'What is rare must be treasured',
                    'People underestimate the small',
                    'Simple is the way to go',
                    'One foot in front of the another',
                    'To live is to experience joy',
                    'The unexamined life is worth living'
                ],
                devotions: [
                    'Cultivate the good',
                    'Protect your home',
                    'Defy evil',
                    'Be clever',
                    'Look on the bright side of life'
                ]
            },
            ratfolk: {
                strength: 'Utility',
                temperament: 'Helpful',
                descriptions: [
                    'Friendly',
                    'Accommodating',
                    'Tolerant',
                    'Accepting',
                    'Conviving',
                    'Watchful',
                    'Community-Focused',
                    'Extroverted',
                    'Earnest',
                    'Quick'
                ],
                convictions: [
                    'Stronger together',
                    'There is wisdom in the mob',
                    'Be cunning as serpents yet innocent as doves',
                    'Watch, listen, and learn',
                    'It’s harder to hit me when I’m in a crowd',
                    'You remove enemies by making them friends ',
                    'It is better to be kind than to be right',
                    'Shouting won’t force people to listen',
                    'Be quick or be dead',
                    'Give away 10, receive 11'
                ],
                devotions: [
                    'Die for your companions',
                    'Try to understand all',
                    'Be useful',
                    'Forgive first',
                    'See what others won’t'
                ]
            }
        }

        const basicAncestries = {
            elf: {
                strength: 'Creation',
                temperament: 'Patient',
                descriptions: [
                    'Beautiful',
                    'Graceful',
                    'Thin',
                    'Imperial',
                    'Stoic',
                    'Otherworldly',
                    'Self-righteous',
                    'Confident',
                    'Unattached',
                    'Determined'
                ],
                convictions: [
                    'The world is precious',
                    'Magic is in everything',
                    'Patience is always rewarded',
                    'Follow the path of least resistance',
                    'Evil must be opposed',
                    'This conflict is just a shadow of past wars',
                    'Everything that is not eternal is eternally out of date',
                    'Beauty is the highest virtue',
                    'To create is to live',
                    'The best days are behind us'
                ],
                devotions: [
                    'Unattached the world',
                    'Admires far thinking',
                    'Driven to create',
                    'In harmony with magic',
                    'Pines for another world'             
                ]
            },
            human: {
                strength: 'Loyalty',
                temperament: 'Curious',
                descriptions: [
                    'Forgiving',
                    'Ambitious',
                    'Selfish',
                    'Impulsive',
                    'Faithful',
                    'Empathetic',
                    'Adaptable',
                    'Confident',
                    'Watchful',
                    'Clannish'
                ],
                convictions: [
                    'What is beyond the horizon?',
                    'If you do not grow, you die',
                    'Humanity has the stars in its future',
                    'Work in progress',
                    'Leadership is about humility',
                    'What is a heaven for?',
                    'There is power in one person',
                    'What is good must be defended',
                    'Learn when you fail',
                    'Failing doesn’t make you a failure'
                ],
                devotions: [
                    'Has the right to develop themselves',
                    'Desires freedom',
                    'Bound to their family',
                    'Craves discovery',
                    'Thinks deeply on things'
                ]
            },
            orc: {
                strength: 'Conquest',
                temperament: 'Aggressive',
                descriptions: [
                    'Fierce',
                    'Passionate',
                    'Strong',
                    'Savage',
                    'Honorable',
                    'Commanding',
                    'Fiery',
                    'Wild',
                    'Brass-faced',
                    'Extreme'
                ],
                convictions: [
                    'Who wants to live forever?',
                    'Fall down 6 times, stand up 7',
                    'To fight is to win',
                    'Half measures are for half men',
                    'Refuse to be moved and the world will move for you',
                    'Life is meant to be experienced, wounds and all',
                    'Battle is the ultimate test of character',
                    'Today is a good day to die',
                    'Four thousand throats may be cut in one night by a running man',
                    'Without eyes to see, a blade is useless'
                ],
                devotions: [
                    'Driven to conquest',
                    'Unburdened by convention',
                    'Heir to warrior legends',
                    'Pities the warrior who has killed all his foes',
                    'Keeps score'
                ]
            }
        }

        if (req.user && req.user.patreon) {
            checkForContentTypeBeforeSending(res, {...basicAncestries, ...deluxeAncestries})
        } else {
            checkForContentTypeBeforeSending(res, basicAncestries)
        }
    }
}