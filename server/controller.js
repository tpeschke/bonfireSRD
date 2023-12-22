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
            }).catch(e => sendErrorForward('find bookmarks', e, res))
            checkForContentTypeBeforeSending(res, newResult)
        })
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
            results.forEach(({ username, patreon }) => {
                if (username.includes('@')) {
                    username = username.split('@')[0]
                }

                if (username === 'Katie Oaks') {
                    patronArray.push(username)
                } else {
                    for (let i = 0; i < patreon; i++) {
                        patronArray.push(username)
                    }
                }
            })

            checkForContentTypeBeforeSending(res, shuffle(patronArray))
        }).catch(e => sendErrorForward('get patreons', e, res))
    }
}