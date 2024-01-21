const weirdTables = {
    shapeTable: {
        max: 8,
        rows: [
            {
                weight: 1,
                rudiment: 'Circle'
            },
            {
                weight: 1,
                rudiment: 'Chain'
            },
            {
                weight: 1,
                rudiment: 'Cone'
            },
            {
                weight: 1,
                rudiment: 'Personal'
            },
            {
                weight: 1,
                rudiment: 'Salvo'
            },
            {
                weight: 1,
                rudiment: 'Sphere'
            },
            {
                weight: 1,
                rudiment: 'Ray'
            },
            {
                weight: 1,
                rudiment: 'Wall'
            },
        ],
    },
    originTable: {
        max: 6,
        rows: [
            {
                weight: 1,
                rudiment: 'Aura'
            },
            {
                weight: 1,
                rudiment: 'Touch'
            },
            {
                weight: 1,
                rudiment: 'Burst'
            },
            {
                weight: 2,
                rudiment: 'Near'
            },
            {
                weight: 1,
                rudiment: 'Far'
            },
        ]
    },
    traditionTable: {
        max: 8,
        rows: [
            {
                weight: 1,
                rudiment: 'Animism'
            },
            {
                weight: 1,
                rudiment: 'Calling'
            },
            {
                weight: 1,
                rudiment: 'Charm'
            },
            {
                weight: 1,
                rudiment: 'Glamour'
            },
            {
                weight: 1,
                rudiment: 'Investiture'
            },
            {
                weight: 1,
                rudiment: 'Occultism'
            },
            {
                weight: 1,
                rudiment: 'Sortilege'
            },
            {
                weight: 1,
                rudiment: 'Reroll'
            },
        ]
    },
    effectsTables: {
        Animism: {
            max: 12,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Animate Corpse'
                },
                {
                    weight: 1,
                    rudiment: 'Bestial Sight'
                },
                {
                    weight: 1,
                    rudiment: 'Corpse Hide'
                },
                {
                    weight: 1,
                    rudiment: 'Endow with Power'
                },
                {
                    weight: 1,
                    rudiment: 'Haste'
                },
                {
                    weight: 1,
                    rudiment: 'High Jump'
                },
                {
                    weight: 1,
                    rudiment: 'Icarian Flight'
                },
                {
                    weight: 1,
                    rudiment: 'Leadfeet'
                },
                {
                    weight: 1,
                    rudiment: 'Outcry'
                },
                {
                    weight: 1,
                    rudiment: 'Sap Power'
                },
                {
                    weight: 1,
                    rudiment: 'Slow Metabolism'
                },
                {
                    weight: 1,
                    rudiment: 'Stitch Flesh'
                },
            ]
        },
        Calling: {
            max: 12,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Banish'
                },
                {
                    weight: 1,
                    rudiment: 'Bind Elemental Heart'
                },
                {
                    weight: 1,
                    rudiment: 'Break Summoning'
                },
                {
                    weight: 1,
                    rudiment: 'Corpse Tongue'
                },
                {
                    weight: 1,
                    rudiment: 'Dominate'
                },
                {
                    weight: 1,
                    rudiment: 'Essence Link'
                },
                {
                    weight: 1,
                    rudiment: 'Force Bind Spirit'
                },
                {
                    weight: 1,
                    rudiment: 'Hookgate'
                },
                {
                    weight: 1,
                    rudiment: 'Lockdown'
                },
                {
                    weight: 1,
                    rudiment: 'Phantom Binding'
                },
                {
                    weight: 1,
                    rudiment: 'Touch of the Otherworld'
                },
                {
                    weight: 1,
                    rudiment: 'Turn'
                },
            ]
        },
        Charm: {
            max: 20,
            rows: [
                {
                    weight: 2,
                    rudiment: 'Detraction'
                },
                {
                    weight: 2,
                    rudiment: 'Dispel Enchantment'
                },
                {
                    weight: 1,
                    rudiment: 'Eiderdown'
                },
                {
                    weight: 1,
                    rudiment: 'Flatten'
                },
                {
                    weight: 2,
                    rudiment: 'Hermetic Dweomer'
                },
                {
                    weight: 2,
                    rudiment: 'Illuminate'
                },
                {
                    weight: 2,
                    rudiment: 'Liminal Platform'
                },
                {
                    weight: 3,
                    rudiment: 'Magic Circle'
                },
                {
                    weight: 1,
                    rudiment: 'Shock'
                },
                {
                    weight: 1,
                    rudiment: 'Silence'
                },
                {
                    weight: 2,
                    rudiment: 'Smokescreen'
                },
                {
                    weight: 1,
                    rudiment: 'Telekinesis'
                },
            ]
        },
        Glamour: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Alto Scream'
                },
                {
                    weight: 1,
                    rudiment: 'Charismatic Glamour'
                },
                {
                    weight: 1,
                    rudiment: 'Darkness'
                },
                {
                    weight: 1,
                    rudiment: 'Discombobulate'
                },
                {
                    weight: 1,
                    rudiment: 'Doppelganger'
                },
                {
                    weight: 1,
                    rudiment: 'Inflict Doubt'
                },
                {
                    weight: 1,
                    rudiment: 'Mask of Zal'
                },
                {
                    weight: 2,
                    rudiment: 'Mimic'
                },
                {
                    weight: 1,
                    rudiment: 'Myopic Curse'
                },
                {
                    weight: 1,
                    rudiment: 'Perfume'
                },
                {
                    weight: 1,
                    rudiment: 'Pseudo'
                },
                {
                    weight: 3,
                    rudiment: 'Reorient'
                },
                {
                    weight: 1,
                    rudiment: 'Shroud of Innocence'
                },
                {
                    weight: 1,
                    rudiment: 'Twist Tongue'
                },
                {
                    weight: 1,
                    rudiment: 'Vertigo'
                },
                {
                    weight: 2,
                    rudiment: 'Visual Illusion'
                },
            ]
        },
        Investiture: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Bar Portal'
                },
                {
                    weight: 1,
                    rudiment: 'Binding Glyph'
                },
                {
                    weight: 2,
                    rudiment: 'Blinding Light'
                },
                {
                    weight: 1,
                    rudiment: 'Burden'
                },
                {
                    weight: 1,
                    rudiment: 'Ironhide'
                },
                {
                    weight: 1,
                    rudiment: 'Kinetic Burst'
                },
                {
                    weight: 2,
                    rudiment: 'Marionette'
                },
                {
                    weight: 1,
                    rudiment: 'Mystic Mark'
                },
                {
                    weight: 1,
                    rudiment: 'Phasing'
                },
                {
                    weight: 2,
                    rudiment: 'Reinforce'
                },
                {
                    weight: 1,
                    rudiment: 'Smoothing'
                },
                {
                    weight: 2,
                    rudiment: 'Strobe'
                },
                {
                    weight: 2,
                    rudiment: 'Weaken'
                },
                {
                    weight: 1,
                    rudiment: 'Weaponsharp'
                },
                {
                    weight: 1,
                    rudiment: 'Wall Walk'
                },
            ]
        },
        Occultism: {
            max: 20,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Alarm'
                },
                {
                    weight: 2,
                    rudiment: 'Ancestral Lore'
                },
                {
                    weight: 1,
                    rudiment: 'Augur Secret'
                },
                {
                    weight: 2,
                    rudiment: 'Detect Magic'
                },
                {
                    weight: 1,
                    rudiment: 'Divine Object'
                },
                {
                    weight: 2,
                    rudiment: 'Dream Stride'
                },
                {
                    weight: 1,
                    rudiment: 'Hindsight'
                },
                {
                    weight: 2,
                    rudiment: 'Invoke Belligerence'
                },
                {
                    weight: 2,
                    rudiment: 'Lore Mysterium'
                },
                {
                    weight: 2,
                    rudiment: 'Message'
                },
                {
                    weight: 2,
                    rudiment: 'Mind Wipe'
                },
                {
                    weight: 1,
                    rudiment: 'Strengthen Ymir'
                },
                {
                    weight: 1,
                    rudiment: 'Tongues'
                },
            ]
        },
        Sortilege: {
            max: 12,
            rows: [
                {
                    weight: 1,
                    rudiment: 'Arcane Vortex'
                },
                {
                    weight: 1,
                    rudiment: 'Bind to the Average'
                },
                {
                    weight: 2,
                    rudiment: 'Fate Well'
                },
                {
                    weight: 1,
                    rudiment: 'Fortify Luck'
                },
                {
                    weight: 1,
                    rudiment: 'Heroic Moment'
                },
                {
                    weight: 1,
                    rudiment: 'Hex'
                },
                {
                    weight: 1,
                    rudiment: 'Improbable Stair'
                },
                {
                    weight: 1,
                    rudiment: 'Inflict Bad Luck'
                },
                {
                    weight: 1,
                    rudiment: 'Mislay'
                },
                {
                    weight: 1,
                    rudiment: 'Rebalance'
                },
                {
                    weight: 1,
                    rudiment: 'Ricochet'
                },
            ]
        }
    }
}

const weirdFunctions = {
    getWeirdTables: (req, res) => {
        res.send(weirdTables)
    },
    getRandomSpells: (req, res) => {
        const limit = 100
        let { numberOfItems = 1 } = req.params
        if (numberOfItems < 0) {
            numberOfItems = 1
        } else if (numberOfItems > limit) {
            numberOfItems = limit
        }

        let spellArray = []
        for (let i = 0; i < numberOfItems; i++) {
            spellArray.push(weirdFunctions.rollForSpell())
        }
        res.send(spellArray)
    },
    rollForSpell: () => {
        const spell = {
            shape: weirdFunctions.getRudimentFromRoll(weirdTables.shapeTable).rudiment,
            origin: weirdFunctions.getRudimentFromRoll(weirdTables.originTable).rudiment,
        }

        let tradition = weirdFunctions.getRudimentFromRoll(weirdTables.traditionTable).rudiment
        while (tradition === 'Reroll') {
            tradition = weirdFunctions.getRudimentFromRoll(weirdTables.traditionTable).rudiment
        }
        const effect = weirdFunctions.getRudimentFromRoll(weirdTables.effectsTables[tradition]).rudiment
        
        return {...spell, tradition, effect, name: nameTheScroll(spell.origin, effect, spell.shape), tooltip: createTooltip(spell, effect, tradition)}
    },
    getRudimentFromRoll: (table) => {
        const roll = Math.floor(Math.random() * (table.max) + 1)
        let total = 0
        for (let i = 0; i < table.rows.length; i++) {
            total += table.rows[i].weight
            if (total >= roll) {
                return table.rows[i]
            }
        }
    },
}

function nameTheScroll(origin, effect, shape) {
    if (origin === 'Touch' || origin === 'Burst') {
        return `Scroll of ${origin}ing, ${shape} ${effect}`
    } else if (origin === 'Near' || origin === 'Far') {
        return `Scroll of ${origin} ${shape} of ${effect}`
    } else {
        return `Scroll of ${ingTheEffect(effect)} ${origin} in a ${shape}`
    }
}

function ingTheEffect(effect) {
    if (effect[effect.length -1] === 'e') {
        return effect.slice(0, effect.length-1) + 'ing'
    } else {
        return effect + 'ing'
    }
}

function createTooltip(spell, effect, tradition) {
    return `${spell.origin} | ${spell.shape} | ${effect} (${tradition})`
}

module.exports = weirdFunctions