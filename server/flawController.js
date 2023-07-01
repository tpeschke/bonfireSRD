const flawTables = {
    flawTables: [
        {
            weight: 2,
            tableName: 'Background',
            table: 'background',
            currentTotal: 0
        },
        { 
            weight: 2, 
            tableName: 'Mental', 
            table: 'mental', 
            currentTotal: 2 },
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
            bonus: 7,
            severity: 3,
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
            bonus: 17,
            severity: 5,
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
            bonus: 13,
            severity: 3,
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
            bonus: 7,
            severity: 3,
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
            bonus: 10,
            severity: 3,
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
            bonus: 23,
            severity: 5,
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
            bonus: 13,
            severity: 4,
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
            bonus: 50,
            severity: 7,
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
            bonus: 20,
            severity: 6,
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
            bonus: 13,
            severity: 3,
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
            bonus: 7,
            severity: 1,
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
            bonus: 5,
            severity: 1,
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
            bonus: 10,
            severity: 3,
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
            bonus: 10,
            severity: 5,
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
            bonus: 10,
            severity: 3,
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
            bonus: 15,
            severity: 5,
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
            bonus: 17,
            severity: 5,
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
            bonus: 23,
            severity: 3,
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
            weight: 10,
            flaw: 'Addict',
            bonus: 19,
            severity: 2,
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
            weight: 9,
            flaw: 'Craven',
            bonus: 13,
            severity: 5,
            cap: 4,
            currentTotal: 10,
            rank: {
                base: 0,
                per: 1.5
            },
            jump: 'CravenheaderHHxpaSPJUd'
        },
        {
            weight: 12,
            flaw: 'Hypochondriac',
            bonus: 10,
            severity: 3,
            cap: 10,
            currentTotal: 19,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'HypochondriacheadernkQTCyMAjA'
        },
        {
            weight: 12,
            flaw: 'Impatient',
            bonus: 10,
            severity: 3,
            cap: 10,
            currentTotal: 31,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'ImpatientheaderMlEfueUjgy'
        },
        {
            weight: 12,
            flaw: 'Lemming',
            bonus: 5,
            severity: 3,
            cap: 10,
            currentTotal: 43,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'lemmingheahrioe'
        },
        {
            weight: 10,
            flaw: 'Neurotic',
            bonus: 13,
            severity: 3,
            cap: 10,
            currentTotal: 55,
            rank: {
                base: 1,
                per: .5
            },
            jump: 'NeuroticheadergZsMEePyPl'
        },
        {
            weight: 12,
            flaw: 'Phobia',
            bonus: 10,
            severity: 3,
            cap: 10,
            currentTotal: 65,
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
            weight: 7,
            flaw: 'Sensitive',
            bonus: 13,
            severity: 5,
            cap: 10,
            currentTotal: 77,
            rank: {
                base: .5,
                per: 1
            },
            jump: 'SensitiveheaderJdvTOwHLwF'
        },
        {
            weight: 5,
            flaw: 'Self-Conscious',
            bonus: 10,
            severity: 2,
            cap: 10,
            currentTotal: 84,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'SlowwittedheaderjicjkCYWOg'
        },
        {
            weight: 6,
            flaw: 'Slow-Witted',
            bonus: 10,
            severity: 3,
            cap: 10,
            currentTotal: 89,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'SlowwittedheaderjicjkCYWOg'
        },
        {
            weight: 5,
            flaw: 'Vexable',
            bonus: 13,
            severity: 10,
            cap: 2,
            currentTotal: 95,
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
            bonus: 7,
            severity: 1,
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
            bonus: 10,
            severity: 1,
            cap: 10,
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
            bonus: 10,
            severity: 1,
            cap: 10,
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
            bonus: 13,
            severity: 5,
            cap: 10,
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
            bonus: 17,
            severity: 5,
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
                    bonus: 10,
                    severity: 3,
                    cap: 5,
                    rank: {
                        base: .5,
                        per: .5
                    }
                }, {
                    weight: 1,
                    specific: 'Body',
                    bonus: 17,
                    severity: 5,
                    cap: 10,
                    rank: {
                        base: 1,
                        per: 1
                    }
                }, {
                    weight: 1,
                    specific: 'Arms & Hands',
                    bonus: 10,
                    severity: 5,
                    cap: 10,
                    rank: {
                        base: 0,
                        per: 1
                    }
                }, {
                    weight: 1,
                    specific: 'Legs',
                    bonus: 17,
                    severity: 5,
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
            bonus: 10,
            severity: 5,
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
            bonus: 33,
            severity: 8,
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
            bonus: 10,
            severity: 3,
            cap: 10,
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
            bonus: 13,
            severity: 5,
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
            bonus: 16,
            severity: 6,
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
            bonus: 10,
            severity: 3,
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
            bonus: 7,
            severity: 3,
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
            bonus: 20,
            severity: 5,
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
            bonus: 7,
            severity: 1,
            cap: 5,
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
            bonus: 10,
            severity: 1,
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
            bonus: 13,
            severity: 6,
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
            bonus: 36,
            severity: 18,
            cap: 2,
            currentTotal: 62,
            rank: {
                base: 1,
                per: 3
            },
            jump: 'MissingArmheaderJfhIRtVhkL'
        },
        {
            weight: 3,
            flaw: 'Missing Digit',
            bonus: 7,
            severity: 3,
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
            bonus: 13,
            severity: 5,
            cap: 10,
            currentTotal: 66,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'MissingEarheaderiEeAvwgBRu'
        },
        {
            weight: 1,
            flaw: 'Missing Eye',
            bonus: 33,
            severity: 16,
            cap: 2,
            currentTotal: 69,
            rank: {
                base: 0,
                per: 3
            },
            jump: 'MissingEyeheaderhLRHlECmrB'
        },
        {
            weight: 1,
            flaw: 'Missing Hand',
            bonus: 33,
            severity: 16,
            cap: 2,
            currentTotal: 70,
            rank: {
                base: 0,
                per: 3
            },
            jump: 'MissingHandheaderWbmnYxxVvK'
        },
        {
            weight: 1,
            flaw: 'Missing Leg',
            bonus: 33,
            severity: 16,
            cap: 2,
            currentTotal: 71,
            rank: {
                base: 0,
                per: 3
            },
            jump: 'MissingLegheaderZUSKsYDxbp'
        },
        {
            weight: 4,
            flaw: 'Missing Teeth',
            bonus: 10,
            severity: 4,
            cap: 4,
            currentTotal: 72,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'MissingTeethheaderiauDXpJazw'
        },
        {
            weight: 3,
            flaw: 'Mute',
            bonus: 13,
            severity: 5,
            cap: 6,
            currentTotal: 76,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'MuteheadernvyjQWspKK'
        },
        {
            weight: 3,
            flaw: 'Myopia',
            bonus: 13,
            severity: 5,
            cap: 6,
            currentTotal: 79,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'MyopiaheaderdmimYbkqOx'
        },
        {
            weight: 3,
            flaw: 'No Depth Perception',
            bonus: 13,
            severity: 5,
            cap: 6,
            currentTotal: 82,
            rank: {
                base: 1,
                per: 1
            },
            jump: 'NoDepthPerceheaderaJIstRgCCR'
        },
        {
            weight: 4,
            flaw: 'Shaky Hands',
            bonus: 9,
            severity: 3,
            cap: 10,
            currentTotal: 85,
            rank: {
                base: .5,
                per: .5
            },
            jump: 'ShakyHandsheadergZnORfJQKB'
        },
        {
            weight: 3,
            flaw: 'Stutter',
            bonus: 13,
            severity: 5,
            cap: 6,
            currentTotal: 89,
            rank: {
                base: 0,
                per: 1
            },
            jump: 'StutterheadergeuOgVIFdt'
        },
        {
            weight: 4,
            flaw: 'Trick Knee',
            bonus: 10,
            severity: 3,
            cap: 10,
            currentTotal: 92,
            rank: {
                base: 0,
                per: .5
            },
            jump: 'TrickKneeheaderBXNWdwjymP'
        },
        {
            weight: 2,
            flaw: 'Weak',
            bonus: 13,
            severity: 5,
            cap: 4,
            currentTotal: 96,
            rank: {
                base: 0,
                per: .75
            },
            jump: 'WeakheaderzFoQvxiCsX'
        },
        {
            weight: 1,
            flaw: 'Weird Resistant',
            bonus: 3,
            severity: 1,
            cap: 15,
            currentTotal: 98,
            rank: {
                base: 0,
                per: .75
            },
            jump: 'weirdresjiojtioew'
        },
        {
            weight: 1,
            flaw: 'Weird Vulnerable',
            bonus: 3,
            severity: 1,
            cap: 15,
            currentTotal: 99,
            rank: {
                base: 0,
                per: .75
            },
            jump: 'werjiojdiovejwio'
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