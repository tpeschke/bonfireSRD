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
            currentTotal: 2 },
    ],
    burdens: [
        {
            weight: 5,
            ib: 'Allergy, Food',
            bonus: 15,
            severity: 2,
            cap: 10,
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
            bonus: 15,
            severity: 2,
            cap: 10,
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
            bonus: 25,
            severity: 7,
            cap: 5,
            jump: 'BastardheaderifVeGdkeSu'
        },
        {
            weight: 7,
            ib: 'Debtor',
            bonus: 10,
            severity: 5,
            cap: 5,
            jump: 'DebtorheaderJElCNbPgHi'
        },
        {
            weight: 2,
            ib: 'Deranged',
            bonus: 50,
            severity: 12,
            cap: 10,
            jump: 'DerangedheaderRidffUYgEQ'
        },
        {
            weight: 7,
            ib: 'Excommunicated',
            bonus: 15,
            severity: 5,
            cap: 12,
            jump: 'ExcommunicatedheaderSAHScjZyzT'
        },
        {
            weight: 9,
            ib: 'Fated',
            bonus: 35,
            severity: 8,
            cap: 20,
            jump: 'FatedheaderugesVAJvHm'
        },
        {
            weight: 4,
            ib: 'Feral',
            bonus: 20,
            severity: 6,
            cap: 5,
            jump: 'FeralheaderYbTzzFWdEL'
        },
        {
            weight: 12,
            ib: 'Half-Life',
            bonus: 75,
            severity: 12,
            cap: 4,
            jump: 'HalflifeheaderxXKZSCXvpm'
        },
        {
            weight: 9,
            ib: 'Haunted',
            bonus: 30,
            severity: 10,
            cap: 5,
            jump: 'HauntedheaderWIDVEGhzyD'
        },
        {
            weight: 5,
            ib: 'Idiot Savant',
            bonus: 15,
            severity: 3,
            cap: 5,
            jump: 'IdiotSavantheaderCIOoOIjoNI'
        },
        {
            weight: 3,
            ib: 'Inbred',
            bonus: 10,
            severity: 2,
            cap: 10,
            jump: 'InbredheaderCLxfbrofoK'
        },
        {
            weight: 7,
            ib: 'Mule',
            bonus: 15,
            severity: 5,
            cap: 24,
            jump: 'MuleheaderTOMugOYXOS'
        },
        {
            weight: 3,
            ib: 'Orphan',
            bonus: 15,
            severity: 8,
            cap: 20,
            jump: 'OrphanheaderVdWAdEZcQr'
        },
        {
            weight: 4,
            ib: 'Poor',
            bonus: 15,
            severity: 5,
            cap: 10,
            jump: 'PoorheaderErbkkhCjwR'
        },
        {
            weight: 2,
            ib: 'Refugee',
            bonus: 25,
            severity: 0,
            cap: 1,
            jump: 'RefugeeheaderAkSpgtlWeb'
        },
        {
            weight: 4,
            ib: 'Thrall',
            bonus: 25,
            severity: 8,
            cap: 10,
            jump: 'ThrallheaderBZnUOEIBsw'
        },
        {
            weight: 3,
            ib: 'Vow of Poverty',
            bonus: 35,
            severity: 5,
            cap: 19,
            jump: 'VowOfPovertyheaderShVWpymbpH'
        }, 
        {
            weight: 1,
            ib: 'Weird Resistant',
            bonus: 15,
            severity: 2,
            cap: 12,
            jump: 'weirdresjiojtioew'
        },
        {
            weight: 1,
            ib: 'Weird Vulnerable',
            bonus: 15,
            severity: 2,
            cap: 15,
            jump: 'werjiojdiovejwio'
        }
    ],
    // mental: [
    //     {
    //         weight: 6,
    //         ib: "Survivor's Guilt",
    //         bonus: 15,
    //         severity: 5,
    //         cap: 10,
    //         currentTotal: 86,
    //         rank: {
    //             base: 1,
    //             per: 1
    //         },
    //         jump: 'surviviorgudioejheader'
    //     },
    //     {
    //         weight: 5,
    //         ib: 'Addict',
    //         bonus: 19,
    //         severity: 2,
    //         cap: 10,
    //         currentTotal: 0,
    //         rank: {
    //             base: 0,
    //             per: 1
    //         },
    //         subtable: [
    //             {
    //                 weight: 1,
    //                 specific: 'Gambling'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Shopping'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Drinking'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Narcotics'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Sex'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Adrenaline'
    //             },
    //         ],
    //         jump: 'Addictheading'
    //     },
    //     {
    //         weight: 5,
    //         ib: 'Craven',
    //         bonus: 13,
    //         severity: 5,
    //         cap: 4,
    //         currentTotal: 5,
    //         rank: {
    //             base: 0,
    //             per: 1.5
    //         },
    //         jump: 'CravenheaderHHxpaSPJUd'
    //     },
    //     {
    //         weight: 7,
    //         ib: 'Hypochondriac',
    //         bonus: 10,
    //         severity: 3,
    //         cap: 10,
    //         currentTotal: 10,
    //         rank: {
    //             base: .5,
    //             per: .5
    //         },
    //         jump: 'HypochondriacheadernkQTCyMAjA'
    //     },
    //     {
    //         weight: 7,
    //         ib: 'Impatient',
    //         bonus: 10,
    //         severity: 3,
    //         cap: 10,
    //         currentTotal: 17,
    //         rank: {
    //             base: .5,
    //             per: .5
    //         },
    //         jump: 'ImpatientheaderMlEfueUjgy'
    //     },
    //     {
    //         weight: 23,
    //         ib: 'Lemming',
    //         bonus: 5,
    //         severity: 3,
    //         cap: 10,
    //         currentTotal: 24,
    //         rank: {
    //             base: .5,
    //             per: .5
    //         },
    //         jump: 'lemmingheahrioe'
    //     },
    //     {
    //         weight: 6,
    //         ib: 'Neurotic',
    //         bonus: 13,
    //         severity: 3,
    //         cap: 10,
    //         currentTotal: 47,
    //         rank: {
    //             base: 1,
    //             per: .5
    //         },
    //         jump: 'NeuroticheadergZsMEePyPl'
    //     },
    //     {
    //         weight: 12,
    //         ib: 'Pacifist',
    //         bonus: 10,
    //         severity: 5,
    //         cap: 10,
    //         currentTotal: 53,
    //         rank: {
    //             base: 1,
    //             per: 1
    //         },
    //         jump: 'pacificfjiotheadeing'
    //     },
    //     {
    //         weight: 7,
    //         ib: 'Phobia',
    //         bonus: 10,
    //         severity: 3,
    //         cap: 10,
    //         currentTotal: 65,
    //         rank: {
    //             base: .5,
    //             per: .5
    //         },
    //         subtable: [
    //             {
    //                 weight: 1,
    //                 specific: 'Animals'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Tight Spaces'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Combat'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Commitment'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Confrontations'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'The Weird'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Religion'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Plague'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'The Dead'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'The Opposite Gender'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Heights'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'The Dark'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'A Monster or Monster Type'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Spiders'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Snakes'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Open Spaces'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Crowded Spaces'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Failure'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Authority Figures'
    //             },
    //             {
    //                 weight: 1,
    //                 specific: 'Pain'
    //             },
    //         ],
    //         jump: 'PhobiaheaderQQhvnCtRSg'
    //     },
    //     {
    //         weight: 5,
    //         ib: 'Sensitive',
    //         bonus: 13,
    //         severity: 5,
    //         cap: 10,
    //         currentTotal: 72,
    //         rank: {
    //             base: .5,
    //             per: 1
    //         },
    //         jump: 'SensitiveheaderJdvTOwHLwF'
    //     },
    //     {
    //         weight: 15,
    //         ib: 'Self-Conscious',
    //         bonus: 10,
    //         severity: 2,
    //         cap: 10,
    //         currentTotal: 77,
    //         rank: {
    //             base: .5,
    //             per: .5
    //         },
    //         jump: 'SlowwittedheaderjicjkCYWOg'
    //     },
    //     {
    //         weight: 6,
    //         ib: 'Slow-Witted',
    //         bonus: 10,
    //         severity: 3,
    //         cap: 10,
    //         currentTotal: 92,
    //         rank: {
    //             base: .5,
    //             per: .5
    //         },
    //         jump: 'SlowwittedheaderjicjkCYWOg'
    //     },
    //     {
    //         weight: 2,
    //         ib: 'Vexable',
    //         bonus: 13,
    //         severity: 10,
    //         cap: 2,
    //         currentTotal: 97,
    //         rank: {
    //             base: 0,
    //             per: 2
    //         },
    //         jump: 'VexableheaderKKwTFqXyyt'
    //     }
    // ],
    injuries: [
        {
            weight: 5,
            ib: 'Ageusia',
            bonus: 10,
            severity: 4,
            cap: 10,
            jump: 'AgeusiaheaderTAnuTNHiNf'
        },
        
        {
            weight: 4,
            ib: 'Asthmatic',
            bonus: 20,
            severity: 16,
            cap: 10,
            jump: 'AsthmaticheaderLWuGlnQCuN'
        },
        {
            weight: 3,
            ib: 'Blind',
            bonus: 25,
            severity: 16,
            cap: 6,
            jump: 'BlindheaderejFzjQYqhm'
        },
        {
            weight: 5,
            ib: 'Burn Scars',
            bonus: '*',
            severity: '*',
            cap: '*',
            jump: 'BurnScarsheaderURPQmidRJb',
            subtable: [
                {
                    weight: 1,
                    specific: 'Head',
                    bonus: 15,
                    severity: 10,
                    cap: 5,
                }, {
                    weight: 1,
                    specific: 'Body',
                    bonus: 25,
                    severity: 16,
                    cap: 10
                }, {
                    weight: 1,
                    specific: 'Arms & Hands',
                    bonus: 15,
                    severity: 16,
                    cap: 10
                }, {
                    weight: 1,
                    specific: 'Legs',
                    bonus: 25,
                    severity: 16,
                    cap: 5
                }
            ]
        },
        {
            weight: 4,
            ib: 'Deaf',
            bonus: 15,
            severity: 16,
            cap: 6,
            jump: 'DeafheaderQjLmdfFCwk'
        },
        {
            weight: 6,
            ib: 'Epileptic',
            bonus: 20,
            severity: 1,
            cap: 10,
            jump: 'EpilepticheaderSkNaTOGvZe'
        },
        {
            weight: 4,
            ib: 'Hemophilic',
            bonus: 20,
            severity: 16,
            cap: 5,
            jump: 'HemophilicheaderibLCRovJZE'
        },
        {
            weight: 3,
            ib: 'Hyperopia',
            bonus: 25,
            severity: 20,
            cap: 6,
            jump: 'HyperopiaheadervltxPyYqjG'
        },
        {
            weight: 6,
            ib: 'Infirm',
            bonus: 10,
            severity: 10,
            cap: 10,
            jump: 'InfirmheaderbevIgDJeBP'
        },
        {
            weight: 3,
            ib: 'Insomniac',
            bonus: 30,
            severity: 16,
            cap: 10,
            jump: 'InsomniacheaderIBVWLnZXkc'
        },
        {
            weight: 6,
            ib: 'Labyrinthitis',
            bonus: 15,
            severity: 4,
            cap: 10,
            jump: 'LabyrinthitisheaderfWjrwFnmrQ'
        },
        {
            weight: 3,
            ib: 'Limp',
            bonus: 20,
            severity: 20,
            cap: 4,
            jump: 'LimpheaderaYmDjKsaBX'
        },
        {
            weight: 2,
            ib: 'Missing Arm',
            bonus: 55,
            severity: 60,
            cap: 2,
            jump: 'MissingArmheaderJfhIRtVhkL'
        },
        {
            weight: 4,
            ib: 'Missing Digit',
            bonus: 10,
            severity: 10,
            cap: 10,
            jump: 'MissingDigitheaderIpfwrRQDCk'
        },
        {
            weight: 4,
            ib: 'Missing Ear',
            bonus: 20,
            severity: 16,
            cap: 10,
            jump: 'MissingEarheaderiEeAvwgBRu'
        },
        {
            weight: 2,
            ib: 'Missing Eye',
            bonus: 50,
            severity: 50,
            cap: 2,
            jump: 'MissingEyeheaderhLRHlECmrB'
        },
        {
            weight: 2,
            ib: 'Missing Hand',
            bonus: 50,
            severity: 40,
            cap: 2,
            jump: 'MissingHandheaderWbmnYxxVvK'
        },
        {
            weight: 2,
            ib: 'Missing Leg',
            bonus: 50,
            severity: 40,
            cap: 2,
            jump: 'MissingLegheaderZUSKsYDxbp'
        },
        {
            weight: 5,
            ib: 'Missing Teeth',
            bonus: 15,
            severity: 12,
            cap: 4,
            jump: 'MissingTeethheaderiauDXpJazw'
        },
        {
            weight: 4,
            ib: 'Mute',
            bonus: 20,
            severity: 16,
            cap: 6,
            jump: 'MuteheadernvyjQWspKK'
        },
        {
            weight: 4,
            ib: 'Myopia',
            bonus: 20,
            severity: 16,
            cap: 6,
            jump: 'MyopiaheaderdmimYbkqOx'
        },
        {
            weight: 4,
            ib: 'No Depth Perception',
            bonus: 20,
            severity: 16,
            cap: 6,
            jump: 'NoDepthPerceheaderaJIstRgCCR'
        },
        {
            weight: 5,
            ib: 'Shaky Hands',
            bonus: 15,
            severity: 10,
            cap: 10,
            jump: 'ShakyHandsheadergZnORfJQKB'
        },
        {
            weight: 3,
            ib: 'Stutter',
            bonus: 20,
            severity: 16,
            cap: 6,
            jump: 'StutterheadergeuOgVIFdt'
        },
        {
            weight: 5,
            ib: 'Trick Knee',
            bonus: 15,
            severity: 10,
            cap: 10,
            jump: 'TrickKneeheaderBXNWdwjymP'
        },
        {
            weight: 2,
            ib: 'Weak',
            bonus: 20,
            severity: 16,
            cap: 4,
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