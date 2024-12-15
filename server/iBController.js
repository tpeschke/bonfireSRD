let ibTables = {
    ibTables: [
        {
            weight: 2,
            tableName: 'Burdens',
            table: 'burdens',
            currentTotal: 0
        },
        {
            weight: 2,
            tableName: 'Injuries',
            table: 'injuries',
            currentTotal: 2
        },
    ],
    burdens: [
        {
            weight: 5,
            ib: 'Allergy, Food',
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
            ib: 'Allergy, Misc',
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
            weight: 7,
            ib: 'Bastard',
            jump: 'BastardheaderifVeGdkeSu'
        },
        {
            weight: 7,
            ib: 'Debtor',
            jump: 'DebtorheaderJElCNbPgHi'
        },
        {
            weight: 2,
            ib: 'Deranged',
            jump: 'DerangedheaderRidffUYgEQ'
        },
        {
            weight: 7,
            ib: 'Excommunicated',
            jump: 'ExcommunicatedheaderSAHScjZyzT'
        },
        {
            weight: 9,
            ib: 'Fated',
            jump: 'FatedheaderugesVAJvHm'
        },
        {
            weight: 4,
            ib: 'Feral',
            jump: 'FeralheaderYbTzzFWdEL'
        },
        {
            weight: 12,
            ib: 'Half-Life',
            jump: 'HalflifeheaderxXKZSCXvpm'
        },
        {
            weight: 9,
            ib: 'Haunted',
            jump: 'HauntedheaderWIDVEGhzyD'
        },
        {
            weight: 5,
            ib: 'Idiot Savant',
            jump: 'IdiotSavantheaderCIOoOIjoNI'
        },
        {
            weight: 7,
            ib: 'Impulsive',
            jump: 'impulsiveheaderjioje'
        },
        {
            weight: 3,
            ib: 'Inbred',
            jump: 'InbredheaderCLxfbrofoK'
        },
        {
            weight: 3,
            ib: 'Orphan',
            jump: 'OrphanheaderVdWAdEZcQr'
        },
        {
            weight: 4,
            ib: 'Poor',
            jump: 'PoorheaderErbkkhCjwR'
        },
        {
            weight: 2,
            ib: 'Refugee',
            jump: 'RefugeeheaderAkSpgtlWeb'
        },
        {
            weight: 4,
            ib: 'Thrall',
            jump: 'ThrallheaderBZnUOEIBsw'
        },
        {
            weight: 3,
            ib: 'Vow of Poverty',
            jump: 'VowOfPovertyheaderShVWpymbpH'
        },
        {
            weight: 1,
            ib: 'Weird Resistant',
            jump: 'weirdresjiojtioew'
        },
        {
            weight: 1,
            ib: 'Weird Vulnerable',
            jump: 'werjiojdiovejwio'
        }
    ],
    injuries: [
        {
            weight: 5,
            ib: 'Ageusia',
            jump: 'AgeusiaheaderTAnuTNHiNf'
        },

        {
            weight: 4,
            ib: 'Asthmatic',
            jump: 'AsthmaticheaderLWuGlnQCuN'
        },
        {
            weight: 3,
            ib: 'Blind',
            jump: 'BlindheaderejFzjQYqhm'
        },
        {
            weight: 5,
            ib: 'Burn Scars',
            jump: 'BurnScarsheaderURPQmidRJb',
            subtable: [
                {
                    weight: 1,
                    specific: 'Head',
                }, {
                    weight: 1,
                    specific: 'Body',
                }, {
                    weight: 1,
                    specific: 'Arms & Hands',
                }, {
                    weight: 1,
                    specific: 'Legs',
                }
            ]
        },
        {
            weight: 4,
            ib: 'Deaf',
            jump: 'DeafheaderQjLmdfFCwk'
        },
        {
            weight: 6,
            ib: 'Epileptic',
            jump: 'EpilepticheaderSkNaTOGvZe'
        },
        {
            weight: 4,
            ib: 'Hemophilic',
            jump: 'HemophilicheaderibLCRovJZE'
        },
        {
            weight: 3,
            ib: 'Hyperopia',
            jump: 'HyperopiaheadervltxPyYqjG'
        },
        {
            weight: 6,
            ib: 'Infirm',
            jump: 'InfirmheaderbevIgDJeBP'
        },
        {
            weight: 3,
            ib: 'Insomniac',
            jump: 'InsomniacheaderIBVWLnZXkc'
        },
        {
            weight: 6,
            ib: 'Labyrinthitis',
            jump: 'LabyrinthitisheaderfWjrwFnmrQ'
        },
        {
            weight: 3,
            ib: 'Limp',
            jump: 'LimpheaderaYmDjKsaBX'
        },
        {
            weight: 2,
            ib: 'Missing Arm',
            jump: 'MissingArmheaderJfhIRtVhkL'
        },
        {
            weight: 4,
            ib: 'Missing Digit',
            jump: 'MissingDigitheaderIpfwrRQDCk'
        },
        {
            weight: 4,
            ib: 'Missing Ear',
            jump: 'MissingEarheaderiEeAvwgBRu'
        },
        {
            weight: 2,
            ib: 'Missing Eye',
            jump: 'MissingEyeheaderhLRHlECmrB'
        },
        {
            weight: 2,
            ib: 'Missing Hand',
            jump: 'MissingHandheaderWbmnYxxVvK'
        },
        {
            weight: 2,
            ib: 'Missing Leg',
            jump: 'MissingLegheaderZUSKsYDxbp'
        },
        {
            weight: 5,
            ib: 'Missing Teeth',
            jump: 'MissingTeethheaderiauDXpJazw'
        },
        {
            weight: 3,
            ib: 'Mute',
            jump: 'MuteheadernvyjQWspKK'
        },
        {
            weight: 4,
            ib: 'Myopia',
            jump: 'MyopiaheaderdmimYbkqOx'
        },
        {
            weight: 4,
            ib: 'No Depth Perception',
            jump: 'NoDepthPerceheaderaJIstRgCCR'
        },
        {
            weight: 5,
            ib: 'Shaky Hands',
            jump: 'ShakyHandsheadergZnORfJQKB'
        },
        {
            weight: 2,
            ib: 'Sterile',
            jump: 'sterilehifojewiojew'
        },
        {
            weight: 3,
            ib: 'Stutter',
            jump: 'StutterheadergeuOgVIFdt'
        },
        {
            weight: 4,
            ib: 'Trick Knee',
            jump: 'TrickKneeheaderBXNWdwjymP'
        },
        {
            weight: 2,
            ib: 'Weak',
            jump: 'WeakheaderzFoQvxiCsX'
        },
    ]
}

const ibFunctions = {
    getIBTables: (req, res) => {
        res.send(ibTables)
    },
    getRandomIB: (req, res) => {
        res.send(ibFunctions.rollForIB())
    },
    getMultipleRandomIB: (req, res) => {
        const limit = 100
        let { number = 1 } = req.params
        if (number < 0) {
            number = 1
        } else if (number > limit) {
            number = limit
        }
        let ibArray = []
        for (let i = 0; i < number; i++) {
            ibArray.push(ibFunctions.rollForIB())
        }
        res.send(ibArray)
    },
    getNewParentTable: (req, res) => {
        const ibTable = ibFunctions.rollOnTable(4, 'ibTables')
        let { roll = 1 } = req.params
        const ib = ibFunctions.getIBFromRoll(+roll, ibTable.table)

        res.send({ ib, parentTable: ibTable })
    },
    getNewIB: (req, res) => {
        let { parentTable = 'burdens' } = req.params
        const ibTable = ibFunctions.getParentTableInfoFromName(parentTable)
        const ib = ibFunctions.rollOnTable(100, parentTable)

        res.send({ ib, parentTable: ibTable })
    },
    rollForIB: () => {
        const ibTable = ibFunctions.rollOnTable(4, 'ibTables')
        const ib = ibFunctions.rollOnTable(100, ibTable.table)

        return { ib, parentTable: ibTable }
    },
    rollOnTable: (max, tableName) => {
        const roll = Math.floor(Math.random() * (max) + 1)

        return ibFunctions.getIBFromRoll(roll, tableName)
    },
    rollOnTableDynamic: (tableArray) => {
        const roll = Math.floor(Math.random() * (tableArray.length))

        return tableArray[roll]
    },
    getIBFromRoll: (roll, tableName) => {
        let total = 0
        for (let i = 0; i < ibTables[tableName].length; i++) {
            total += ibTables[tableName][i].weight
            if (total >= roll) {
                let ib = ibTables[tableName][i]
                ib.roll = roll
                if (ib.subtable && ib.subtable.length > 0) {
                    let subtableResults = ibFunctions.rollOnTableDynamic(ib.subtable)
                    ib = { ...ib, ...subtableResults }
                    delete ib.subtable
                    if (ib.specific) {
                        ib.ib = `${ib.ib} - ${ib.specific}`
                    }
                }
                return ib
            }
        }
    },
    getParentTableInfoFromName: (tableName) => {
        for (let i = 0; i < ibTables.ibTables.length; i++) {
            if (ibTables.ibTables[i].table === tableName) {
                return ibTables.ibTables[i]
            }
        }
    }
}

module.exports = ibFunctions