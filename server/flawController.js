const flawTables = {
    flawTables: [
        {
            weight: 2,
            tableName: 'Background',
            table: 'background',
            currentTotal: 0
        },
        { weight: 2, tableName: 'Mental', table: 'mental', currentTotal: 2 },
        {
            weight: 2,
            tableName: 'Physical',
            table: 'physical',
            currentTotal: 4
        }
    ],
    background: [
        {
            weight: 2,
            flaw: 'Atheist',
            bonus: 0,
            severity: 7,
            cap: 12,
            currentTotal: 0,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'AtheistheaderFNPQHnTYgv'
        },
        {
            weight: 7,
            flaw: 'Bastard',
            bonus: 7,
            severity: 10,
            cap: 5,
            currentTotal: 2,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'BastardheaderifVeGdkeSu'
        },
        {
            weight: 5,
            flaw: 'Epileptic',
            bonus: 6,
            severity: 7,
            cap: 10,
            currentTotal: 9,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'EpilepticheaderSkNaTOGvZe'
        },
        {
            weight: 4,
            flaw: 'Debtor',
            bonus: 0,
            severity: 7,
            cap: 5,
            currentTotal: 14,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'DebtorheaderJElCNbPgHi'
        },
        {
            weight: 7,
            flaw: 'Excommunicated',
            bonus: 3,
            severity: 7,
            cap: 12,
            currentTotal: 18,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'ExcommunicatedheaderSAHScjZyzT'
        },
        {
            weight: 9,
            flaw: 'Fated',
            bonus: 13,
            severity: 10,
            cap: 20,
            currentTotal: 25,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'FatedheaderugesVAJvHm'
        },
        {
            weight: 4,
            flaw: 'Feral',
            bonus: 6,
            severity: 7,
            cap: 5,
            currentTotal: 34,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'FeralheaderYbTzzFWdEL'
        },
        {
            weight: 12,
            flaw: 'Half-Life',
            bonus: 37,
            severity: 13,
            cap: 4,
            currentTotal: 38,
            rank: {
                base: 3.5,
                per: 1.5
            },
            jump: 'HalflifeheaderxXKZSCXvpm'
        },
        {
            weight: 9,
            flaw: 'Haunted',
            bonus: 7,
            severity: 13,
            cap: 5,
            currentTotal: 50,
            rank: {
                base: .5,
                per: 1.5
            },
            jump: 'HauntedheaderWIDVEGhzyD'
        },
        {
            weight: 5,
            flaw: 'Idiot Savant',
            bonus: 6,
            severity: 7,
            cap: 5,
            currentTotal: 59,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'IdiotSavantheaderCIOoOIjoNI'
        },
        {
            weight: 2,
            flaw: 'Inbred',
            bonus: 4,
            severity: 3,
            cap: 10,
            currentTotal: 64,
            rank: {
                base: .67,
                per: .33
            },
            jump: 'InbredheaderCLxfbrofoK'
        },
        {
            weight: 9,
            flaw: 'Monotheist',
            bonus: 3,
            severity: 7,
            cap: 12,
            currentTotal: 66,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'MonotheistheaderAScHQRVdII'
        },
        {
            weight: 5,
            flaw: 'Mule',
            bonus: 3,
            severity: 7,
            cap: 24,
            currentTotal: 75,
            rank: {
                base: 1,
                per: .5
            },
            jump: 'MuleheaderTOMugOYXOS'
        },
        {
            weight: 2,
            flaw: 'Orphan',
            bonus: 0,
            severity: 10,
            cap: 20,
            currentTotal: 80,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'OrphanheaderVdWAdEZcQr'
        },
        {
            weight: 2,
            flaw: 'Poor',
            bonus: 3,
            severity: 7,
            cap: 10,
            currentTotal: 82,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'PoorheaderErbkkhCjwR'
        },
        {
            weight: 2,
            flaw: 'Refugee',
            bonus: 20,
            severity: 0,
            cap: 1,
            currentTotal: 84,
            rank: {
                base: 2,
                per: 0
            },
            jump: 'RefugeeheaderAkSpgtlWeb'
        },
        {
            weight: 6,
            flaw: "Survivor's Guilt",
            bonus: 5,
            severity: 10,
            cap: 10,
            currentTotal: 86,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'surviviorgudioejheader'
        },
        {
            weight: 4,
            flaw: 'Thrall',
            bonus: 7,
            severity: 10,
            cap: 10,
            currentTotal: 92,
            rank: {
                base: 1.25,
                per: .75
            },
            jump: 'ThrallheaderBZnUOEIBsw'
        },
        {
            weight: 4,
            flaw: 'Vow of Poverty',
            bonus: 16,
            severity: 7,
            cap: 19,
            currentTotal: 96,
            rank: {
                base: 1.5,
                per: .5
            },
            jump: 'VowOfPovertyheaderShVWpymbpH'
        }
    ],
    mental: [
        {
            weight: 11,
            flaw: 'Addict',
            bonus: 14,
            severity: 5,
            cap: 10,
            currentTotal: 0,
            rank: {
                base: 0,
                per: 1
            },
            subtable: [
                {
                    weight: 1,
                    specific: 'Gambling'
                },
                {
                    weight: 1,
                    specific: 'Shopping'
                },
                {
                    weight: 1,
                    specific: 'Drinking'
                },
                {
                    weight: 1,
                    specific: 'Narcotics'
                },
                {
                    weight: 1,
                    specific: 'Sex'
                },
                {
                    weight: 1,
                    specific: 'Adrenaline'
                },
            ],
            jump: 'Addictheading'
        },
        {
            weight: 10,
            flaw: 'Craven',
            bonus: 3,
            severity: 10,
            cap: 4,
            currentTotal: 11,
            rank: {
                base: 0,
                per: 1.5
            },
            jump: 'CravenheaderHHxpaSPJUd'
        },
        {
            weight: 13,
            flaw: 'Hypochondriac',
            bonus: 3,
            severity: 7,
            cap: 'n/a',
            currentTotal: 21,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'HypochondriacheadernkQTCyMAjA'
        },
        {
            weight: 13,
            flaw: 'Impatient',
            bonus: 3,
            severity: 7,
            cap: 10,
            currentTotal: 34,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'ImpatientheaderMlEfueUjgy'
        },
        {
            weight: 11,
            flaw: 'Neurotic',
            bonus: 6,
            severity: 7,
            cap: 'n/a',
            currentTotal: 47,
            rank: {
                base: 1,
                per: .5
            },
            jump: 'NeuroticheadergZsMEePyPl'
        },
        {
            weight: 13,
            flaw: 'Phobia',
            bonus: 3,
            severity: 7,
            cap: 'n/a',
            currentTotal: 58,
            rank: {
                base: .5,
                per: .5
            },
            subtable: [
                {
                    weight: 1,
                    specific: 'Animals'
                },
                {
                    weight: 1,
                    specific: 'Tight Spaces'
                },
                {
                    weight: 1,
                    specific: 'Combat'
                },
                {
                    weight: 1,
                    specific: 'Commitment'
                },
                {
                    weight: 1,
                    specific: 'Confrontations'
                },
                {
                    weight: 1,
                    specific: 'The Weird'
                },
                {
                    weight: 1,
                    specific: 'Religion'
                },
                {
                    weight: 1,
                    specific: 'Plague'
                },
                {
                    weight: 1,
                    specific: 'The Dead'
                },
                {
                    weight: 1,
                    specific: 'The Opposite Gender'
                },
                {
                    weight: 1,
                    specific: 'Heights'
                },
                {
                    weight: 1,
                    specific: 'The Dark'
                },
                {
                    weight: 1,
                    specific: 'A Monster or Monster Type'
                },
                {
                    weight: 1,
                    specific: 'Spiders'
                },
                {
                    weight: 1,
                    specific: 'Snakes'
                },
                {
                    weight: 1,
                    specific: 'Open Spaces'
                },
                {
                    weight: 1,
                    specific: 'Crowded Spaces'
                },
                {
                    weight: 1,
                    specific: 'Failure'
                },
                {
                    weight: 1,
                    specific: 'Authority Figures'
                },
                {
                    weight: 1,
                    specific: 'Pain'
                },
            ],
            jump: 'PhobiaheaderQQhvnCtRSg'
        },
        {
            weight: 9,
            flaw: 'Sensitive',
            bonus: 3,
            severity: 10,
            cap: 10,
            currentTotal: 71,
            rank: {
                base: .5,
                per: 1
            },
            jump: 'SensitiveheaderJdvTOwHLwF'
        },
        {
            weight: 7,
            flaw: 'Self-Conscious',
            bonus: 5,
            severity: 5,
            cap: 10,
            currentTotal: 80,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'SlowwittedheaderjicjkCYWOg'
        },
        {
            weight: 7,
            flaw: 'Slow-Witted',
            bonus: 3,
            severity: 7,
            cap: 10,
            currentTotal: 87,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'SlowwittedheaderjicjkCYWOg'
        },
        {
            weight: 6,
            flaw: 'Vexable',
            bonus: 3,
            severity: 20,
            cap: 2,
            currentTotal: 94,
            rank: {
                base: 0,
                per: 2
            },
            jump: 'VexableheaderKKwTFqXyyt'
        }
    ],
    physical: [
        {
            weight: 6,
            flaw: 'Ageusia',
            bonus: 4,
            severity: 3,
            cap: 10,
            currentTotal: 0,
            rank: {
                base: .67,
                per: .33
            },
            jump: 'AgeusiaheaderTAnuTNHiNf'
        },
        {
            weight: 5,
            flaw: 'Allergy, Food',
            bonus: 7,
            severity: 3,
            cap: 'n/a',
            currentTotal: 6,
            rank: {
                base: .67,
                per: .33
            },
            jump: 'AllergyFoodheaderFNDbwfuMWn',
            subtable: [
                {
                    weight: 1,
                    specific: 'Shellfish'
                },
                {
                    weight: 1,
                    specific: 'Eggs'
                },
                {
                    weight: 1,
                    specific: 'Peanut'
                },
                {
                    weight: 1,
                    specific: 'Mulk'
                },
                {
                    weight: 1,
                    specific: 'Soy'
                },
                {
                    weight: 1,
                    specific: 'Wheat'
                },
                {
                    weight: 1,
                    specific: 'Tree Nut'
                },
                {
                    weight: 1,
                    specific: 'Fish'
                },
            ]
        },
        {
            weight: 5,
            flaw: 'Allergy, Misc',
            bonus: 7,
            severity: 3,
            cap: 'n/a',
            currentTotal: 11,
            rank: {
                base: .67,
                per: .33
            },
            jump: 'AllergyMischeaderPWgmApUIzR',
            subtable: [
                {
                    weight: 1,
                    specific: 'Pollen'
                },
                {
                    weight: 1,
                    specific: 'Dust/Mold'
                },
                {
                    weight: 1,
                    specific: 'Animal Dander'
                },
                {
                    weight: 1,
                    specific: 'Insects'
                },
            ]
        },
        {
            weight: 3,
            flaw: 'Asthmatic',
            bonus: 3,
            severity: 10,
            cap: 'n/a',
            currentTotal: 16,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'AsthmaticheaderLWuGlnQCuN'
        },
        {
            weight: 2,
            flaw: 'Blind',
            bonus: 7,
            severity: 10,
            cap: 6,
            currentTotal: 19,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'BlindheaderejFzjQYqhm'
        },
        {
            weight: 4,
            flaw: 'Burn Scars',
            bonus: '*',
            severity: '*',
            cap: '*',
            currentTotal: 21,
            jump: 'BurnScarsheaderURPQmidRJb',
            subtable: [
                {
                    weight: 1,
                    specific: 'Head',
                    bonus: 3,
                    severity: 7,
                    cap: 5,
                    rank: {
                        base: .5,
                        per: .5
                    }
                }, {
                    weight: 1,
                    specific: 'Body',
                    bonus: 7,
                    severity: 10,
                    cap: 10,
                    rank: {
                        base: 1,
                        per: 1
                    }
                }, {
                    weight: 1,
                    specific: 'Arms & Hands',
                    bonus: 0,
                    severity: 10,
                    cap: 10,
                    rank: {
                        base: 0,
                        per: 1
                    }
                }, {
                    weight: 1,
                    specific: 'Legs',
                    bonus: 7,
                    severity: 10,
                    cap: 5,
                    rank: {
                        base: 1,
                        per: 1
                    }
                }
            ]
        },
        {
            weight: 3,
            flaw: 'Deaf',
            bonus: 0,
            severity: 10,
            cap: 6,
            currentTotal: 25,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'DeafheaderQjLmdfFCwk'
        },
        {
            weight: 1,
            flaw: 'Deranged',
            bonus: 16,
            severity: 17,
            cap: 10,
            currentTotal: 28,
            rank: {
                base: 1.5,
                per: 1.5
            },
            jump: 'DerangedheaderRidffUYgEQ'
        },
        {
            weight: 4,
            flaw: 'Glutton',
            bonus: 3,
            severity: 7,
            cap: 'n/a',
            currentTotal: 29,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'GluttonheaderqiKXJOqLSg'
        },
        {
            weight: 3,
            flaw: 'Hemophilic',
            bonus: 3,
            severity: 10,
            cap: 5,
            currentTotal: 33,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'HemophilicheaderibLCRovJZE'
        },
        {
            weight: 2,
            flaw: 'Hyperopia',
            bonus: 4,
            severity: 13,
            cap: 6,
            currentTotal: 36,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'HyperopiaheadervltxPyYqjG'
        },
        {
            weight: 4,
            flaw: 'Impotent',
            bonus: 3,
            severity: 7,
            cap: 19,
            currentTotal: 38,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'ImpotentheaderfYzBcyBwWW'
        },
        {
            weight: 5,
            flaw: 'Infirm',
            bonus: 0,
            severity: 7,
            cap: 10,
            currentTotal: 42,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'InfirmheaderbevIgDJeBP'
        },
        {
            weight: 2,
            flaw: 'Insomniac',
            bonus: 10,
            severity: 10,
            cap: 10,
            currentTotal: 47,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'InsomniacheaderIBVWLnZXkc'
        },
        {
            weight: 6,
            flaw: 'Irritable Bowels',
            bonus: 4,
            severity: 3,
            cap: 'n/a',
            currentTotal: 49,
            rank: {
                base: 0,
                per: .33
            },
            jump: 'IrritableBoweheaderMBapbikkBu'
        },
        {
            weight: 5,
            flaw: 'Labyrinthitis',
            bonus: 7,
            severity: 3,
            cap: 10,
            currentTotal: 55,
            rank: {
                base: .67,
                per: .33
            },
            jump: 'LabyrinthitisheaderfWjrwFnmrQ'
        },
        {
            weight: 2,
            flaw: 'Limp',
            bonus: 0,
            severity: 13,
            cap: 4,
            currentTotal: 60,
            rank: {
                base: 0,
                per: 1.5
            },
            jump: 'LimpheaderaYmDjKsaBX'
        },
        {
            weight: 1,
            flaw: 'Missing Arm',
            bonus: 0,
            severity: 36,
            cap: 2,
            currentTotal: 62,
            rank: {
                base: 1,
                per: 3
            },
            jump: 'MissingArmheaderJfhIRtVhkL'
        },
        {
            weight: 5,
            flaw: 'Missing Digit',
            bonus: 0,
            severity: 7,
            cap: 10,
            currentTotal: 63,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'MissingDigitheaderIpfwrRQDCk'
        },
        {
            weight: 3,
            flaw: 'Missing Ear',
            bonus: 3,
            severity: 10,
            cap: 10,
            currentTotal: 68,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'MissingEarheaderiEeAvwgBRu'
        },
        {
            weight: 1,
            flaw: 'Missing Eye',
            bonus: 0,
            severity: 33,
            cap: 2,
            currentTotal: 71,
            rank: {
                base: 0,
                per: 3
            },
            jump: 'MissingEyeheaderhLRHlECmrB'
        },
        {
            weight: 1,
            flaw: 'Missing Hand',
            bonus: 0,
            severity: 33,
            cap: 2,
            currentTotal: 72,
            rank: {
                base: 0,
                per: 3
            },
            jump: 'MissingHandheaderWbmnYxxVvK'
        },
        {
            weight: 1,
            flaw: 'Missing Leg',
            bonus: 0,
            severity: 33,
            cap: 2,
            currentTotal: 73,
            rank: {
                base: 0,
                per: 3
            },
            jump: 'MissingLegheaderZUSKsYDxbp'
        },
        {
            weight: 4,
            flaw: 'Missing Teeth',
            bonus: 3,
            severity: 7,
            cap: 4,
            currentTotal: 74,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'MissingTeethheaderiauDXpJazw'
        },
        {
            weight: 3,
            flaw: 'Mute',
            bonus: 3,
            severity: 10,
            cap: 6,
            currentTotal: 78,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'MuteheadernvyjQWspKK'
        },
        {
            weight: 3,
            flaw: 'Myopia',
            bonus: 3,
            severity: 10,
            cap: 6,
            currentTotal: 81,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'MyopiaheaderdmimYbkqOx'
        },
        {
            weight: 3,
            flaw: 'No Depth Perception',
            bonus: 3,
            severity: 10,
            cap: 6,
            currentTotal: 84,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'NoDepthPerceheaderaJIstRgCCR'
        },
        {
            weight: 3,
            flaw: 'Shaky Hands',
            bonus: 6,
            severity: 7,
            cap: 10,
            currentTotal: 87,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'ShakyHandsheadergZnORfJQKB'
        },
        {
            weight: 3,
            flaw: 'Stutter',
            bonus: 3,
            severity: 10,
            cap: 6,
            currentTotal: 90,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'StutterheadergeuOgVIFdt'
        },
        {
            weight: 4,
            flaw: 'Trick Knee',
            bonus: 3,
            severity: 7,
            cap: 10,
            currentTotal: 93,
            rank: {
                base: 0,
                per: .5
            },
            jump: 'TrickKneeheaderBXNWdwjymP'
        },
        {
            weight: 3,
            flaw: 'Weak',
            bonus: 3,
            severity: 10,
            cap: 4,
            currentTotal: 97,
            rank: {
                base: 0,
                per: .75
            },
            jump: 'WeakheaderzFoQvxiCsX'
        }
    ]
}

let flawFunctions = {
    getFlawTables: (req, res) => {
        res.send(flawTables)
    },
    getRandomFlaw: (req, res) => {
        res.send(flawFunctions.rollForFlaw())
    },
    getMultipleRandomFlaw: (req, res) => {
        let { number = 1 } = req.params
        if (number < 0) {
            number = 1
        } else if (number > 25) {
            number = 25
        }
        let flawArray = []
        for (let i = 0; i < number; i++) {
            flawArray.push(flawFunctions.rollForFlaw())
        }
        res.send(flawArray)
    },
    getNewParentTable: (req, res) => {
        const flawTable = flawFunctions.rollOnTable(6, 'flawTables')
        let { roll = 1 } = req.params
        const flaw = flawFunctions.getFlawFromRoll(+roll, flawTable.table)

        res.send({ flaw, parentTable: flawTable })
    },
    getNewFlaw: (req, res) => {
        let { parentTable = 'background' } = req.params
        const flawTable = flawFunctions.getParentTableInfoFromName(parentTable)
        const flaw = flawFunctions.rollOnTable(100, parentTable)

        res.send({ flaw, parentTable: flawTable })
    },
    rollForFlaw: () => {
        const flawTable = flawFunctions.rollOnTable(6, 'flawTables')
        const flaw = flawFunctions.rollOnTable(100, flawTable.table)

        return { flaw, parentTable: flawTable }
    },
    rollOnTable: (max, tableName) => {
        const roll = Math.floor(Math.random() * (max) + 1)

        return flawFunctions.getFlawFromRoll(roll, tableName)
    },
    rollOnTableDynamic: (tableArray) => {
        const roll = Math.floor(Math.random() * (tableArray.length))

        return tableArray[roll]
    },
    getFlawFromRoll: (roll, tableName) => {
        let total = 0
        for (let i = 0; i < flawTables[tableName].length; i++) {
            total += flawTables[tableName][i].weight
            if (total >= roll) {
                let flaw = flawTables[tableName][i]
                flaw.roll = roll
                if (flaw.subtable && flaw.subtable.length > 0) {
                    let subtableResults = flawFunctions.rollOnTableDynamic(flaw.subtable)
                    flaw = { ...flaw, ...subtableResults }
                    delete flaw.subtable
                    if (flaw.specific) {
                        flaw.flaw = `${flaw.flaw} - ${flaw.specific}`
                    }
                }
                return flaw
            }
        }
    },
    getParentTableInfoFromName: (tableName) => {
        for (let i = 0; i < flawTables.flawTables.length; i++) {
            if (flawTables.flawTables[i].table === tableName) {
                return flawTables.flawTables[i]
            }
        }
    }
}

module.exports = flawFunctions