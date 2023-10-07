const flawTables = {
    flawTables: [
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
            flaw: 'Allergy, Food',
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
            flaw: 'Allergy, Misc',
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
            flaw: 'Bastard',
            bonus: 25,
            severity: 7,
            cap: 5,
            jump: 'BastardheaderifVeGdkeSu'
        },
        {
            weight: 7,
            flaw: 'Debtor',
            bonus: 10,
            severity: 5,
            cap: 5,
            jump: 'DebtorheaderJElCNbPgHi'
        },
        {
            weight: 2,
            flaw: 'Deranged',
            bonus: 50,
            severity: 12,
            cap: 10,
            jump: 'DerangedheaderRidffUYgEQ'
        },
        {
            weight: 7,
            flaw: 'Excommunicated',
            bonus: 15,
            severity: 5,
            cap: 12,
            jump: 'ExcommunicatedheaderSAHScjZyzT'
        },
        {
            weight: 9,
            flaw: 'Fated',
            bonus: 35,
            severity: 8,
            cap: 20,
            jump: 'FatedheaderugesVAJvHm'
        },
        {
            weight: 4,
            flaw: 'Feral',
            bonus: 20,
            severity: 6,
            cap: 5,
            jump: 'FeralheaderYbTzzFWdEL'
        },
        {
            weight: 12,
            flaw: 'Half-Life',
            bonus: 75,
            severity: 12,
            cap: 4,
            jump: 'HalflifeheaderxXKZSCXvpm'
        },
        {
            weight: 9,
            flaw: 'Haunted',
            bonus: 30,
            severity: 10,
            cap: 5,
            jump: 'HauntedheaderWIDVEGhzyD'
        },
        {
            weight: 5,
            flaw: 'Idiot Savant',
            bonus: 15,
            severity: 3,
            cap: 5,
            jump: 'IdiotSavantheaderCIOoOIjoNI'
        },
        {
            weight: 3,
            flaw: 'Inbred',
            bonus: 10,
            severity: 2,
            cap: 10,
            jump: 'InbredheaderCLxfbrofoK'
        },
        {
            weight: 7,
            flaw: 'Mule',
            bonus: 15,
            severity: 5,
            cap: 24,
            jump: 'MuleheaderTOMugOYXOS'
        },
        {
            weight: 3,
            flaw: 'Orphan',
            bonus: 15,
            severity: 8,
            cap: 20,
            jump: 'OrphanheaderVdWAdEZcQr'
        },
        {
            weight: 4,
            flaw: 'Poor',
            bonus: 15,
            severity: 5,
            cap: 10,
            jump: 'PoorheaderErbkkhCjwR'
        },
        {
            weight: 2,
            flaw: 'Refugee',
            bonus: 25,
            severity: 0,
            cap: 1,
            jump: 'RefugeeheaderAkSpgtlWeb'
        },
        {
            weight: 4,
            flaw: 'Thrall',
            bonus: 25,
            severity: 8,
            cap: 10,
            jump: 'ThrallheaderBZnUOEIBsw'
        },
        {
            weight: 3,
            flaw: 'Vow of Poverty',
            bonus: 35,
            severity: 5,
            cap: 19,
            jump: 'VowOfPovertyheaderShVWpymbpH'
        }, 
        {
            weight: 1,
            flaw: 'Weird Resistant',
            bonus: 15,
            severity: 2,
            cap: 15,
            jump: 'weirdresjiojtioew'
        },
        {
            weight: 1,
            flaw: 'Weird Vulnerable',
            bonus: 15,
            severity: 2,
            cap: 15,
            jump: 'werjiojdiovejwio'
        }
    ],
    // mental: [
    //     {
    //         weight: 6,
    //         flaw: "Survivor's Guilt",
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
    //         flaw: 'Addict',
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
    //         flaw: 'Craven',
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
    //         flaw: 'Hypochondriac',
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
    //         flaw: 'Impatient',
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
    //         flaw: 'Lemming',
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
    //         flaw: 'Neurotic',
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
    //         flaw: 'Pacifist',
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
    //         flaw: 'Phobia',
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
    //         flaw: 'Sensitive',
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
    //         flaw: 'Self-Conscious',
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
    //         flaw: 'Slow-Witted',
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
    //         flaw: 'Vexable',
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
            flaw: 'Ageusia',
            bonus: 10,
            severity: 2,
            cap: 10,
            jump: 'AgeusiaheaderTAnuTNHiNf'
        },
        
        {
            weight: 4,
            flaw: 'Asthmatic',
            bonus: 20,
            severity: 8,
            cap: 10,
            jump: 'AsthmaticheaderLWuGlnQCuN'
        },
        {
            weight: 3,
            flaw: 'Blind',
            bonus: 25,
            severity: 8,
            cap: 6,
            jump: 'BlindheaderejFzjQYqhm'
        },
        {
            weight: 5,
            flaw: 'Burn Scars',
            bonus: '*',
            severity: '*',
            cap: '*',
            jump: 'BurnScarsheaderURPQmidRJb',
            subtable: [
                {
                    weight: 1,
                    specific: 'Head',
                    bonus: 15,
                    severity: 5,
                    cap: 5,
                }, {
                    weight: 1,
                    specific: 'Body',
                    bonus: 25,
                    severity: 8,
                    cap: 10
                }, {
                    weight: 1,
                    specific: 'Arms & Hands',
                    bonus: 15,
                    severity: 8,
                    cap: 10
                }, {
                    weight: 1,
                    specific: 'Legs',
                    bonus: 25,
                    severity: 8,
                    cap: 5
                }
            ]
        },
        {
            weight: 4,
            flaw: 'Deaf',
            bonus: 15,
            severity: 8,
            cap: 6,
            jump: 'DeafheaderQjLmdfFCwk'
        },
        {
            weight: 6,
            flaw: 'Epileptic',
            bonus: 20,
            severity: 5,
            cap: 10,
            jump: 'EpilepticheaderSkNaTOGvZe'
        },
        {
            weight: 4,
            flaw: 'Hemophilic',
            bonus: 20,
            severity: 8,
            cap: 5,
            jump: 'HemophilicheaderibLCRovJZE'
        },
        {
            weight: 3,
            flaw: 'Hyperopia',
            bonus: 25,
            severity: 10,
            cap: 6,
            jump: 'HyperopiaheadervltxPyYqjG'
        },
        {
            weight: 6,
            flaw: 'Infirm',
            bonus: 10,
            severity: 5,
            cap: 10,
            jump: 'InfirmheaderbevIgDJeBP'
        },
        {
            weight: 3,
            flaw: 'Insomniac',
            bonus: 30,
            severity: 8,
            cap: 10,
            jump: 'InsomniacheaderIBVWLnZXkc'
        },
        {
            weight: 6,
            flaw: 'Labyrinthitis',
            bonus: 15,
            severity: 2,
            cap: 10,
            jump: 'LabyrinthitisheaderfWjrwFnmrQ'
        },
        {
            weight: 3,
            flaw: 'Limp',
            bonus: 20,
            severity: 10,
            cap: 4,
            jump: 'LimpheaderaYmDjKsaBX'
        },
        {
            weight: 2,
            flaw: 'Missing Arm',
            bonus: 55,
            severity: 30,
            cap: 2,
            jump: 'MissingArmheaderJfhIRtVhkL'
        },
        {
            weight: 4,
            flaw: 'Missing Digit',
            bonus: 10,
            severity: 5,
            cap: 10,
            jump: 'MissingDigitheaderIpfwrRQDCk'
        },
        {
            weight: 4,
            flaw: 'Missing Ear',
            bonus: 20,
            severity: 8,
            cap: 10,
            jump: 'MissingEarheaderiEeAvwgBRu'
        },
        {
            weight: 2,
            flaw: 'Missing Eye',
            bonus: 50,
            severity: 25,
            cap: 2,
            jump: 'MissingEyeheaderhLRHlECmrB'
        },
        {
            weight: 2,
            flaw: 'Missing Hand',
            bonus: 50,
            severity: 20,
            cap: 2,
            jump: 'MissingHandheaderWbmnYxxVvK'
        },
        {
            weight: 2,
            flaw: 'Missing Leg',
            bonus: 50,
            severity: 20,
            cap: 2,
            jump: 'MissingLegheaderZUSKsYDxbp'
        },
        {
            weight: 5,
            flaw: 'Missing Teeth',
            bonus: 15,
            severity: 6,
            cap: 4,
            jump: 'MissingTeethheaderiauDXpJazw'
        },
        {
            weight: 4,
            flaw: 'Mute',
            bonus: 20,
            severity: 8,
            cap: 6,
            jump: 'MuteheadernvyjQWspKK'
        },
        {
            weight: 4,
            flaw: 'Myopia',
            bonus: 20,
            severity: 8,
            cap: 6,
            jump: 'MyopiaheaderdmimYbkqOx'
        },
        {
            weight: 4,
            flaw: 'No Depth Perception',
            bonus: 20,
            severity: 8,
            cap: 6,
            jump: 'NoDepthPerceheaderaJIstRgCCR'
        },
        {
            weight: 5,
            flaw: 'Shaky Hands',
            bonus: 15,
            severity: 5,
            cap: 10,
            jump: 'ShakyHandsheadergZnORfJQKB'
        },
        {
            weight: 3,
            flaw: 'Stutter',
            bonus: 20,
            severity: 8,
            cap: 6,
            jump: 'StutterheadergeuOgVIFdt'
        },
        {
            weight: 5,
            flaw: 'Trick Knee',
            bonus: 15,
            severity: 5,
            cap: 10,
            jump: 'TrickKneeheaderBXNWdwjymP'
        },
        {
            weight: 2,
            flaw: 'Weak',
            bonus: 20,
            severity: 8,
            cap: 4,
            jump: 'WeakheaderzFoQvxiCsX'
        },
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
        const limit = 100
        let { number = 1 } = req.params
        if (number < 0) {
            number = 1
        } else if (number > limit) {
            number = limit
        }
        let flawArray = []
        for (let i = 0; i < number; i++) {
            flawArray.push(flawFunctions.rollForFlaw())
        }
        res.send(flawArray)
    },
    getNewParentTable: (req, res) => {
        const flawTable = flawFunctions.rollOnTable(4, 'flawTables')
        let { roll = 1 } = req.params
        const flaw = flawFunctions.getFlawFromRoll(+roll, flawTable.table)

        res.send({ flaw, parentTable: flawTable })
    },
    getNewFlaw: (req, res) => {
        let { parentTable = 'burdens' } = req.params
        const flawTable = flawFunctions.getParentTableInfoFromName(parentTable)
        const flaw = flawFunctions.rollOnTable(100, parentTable)

        res.send({ flaw, parentTable: flawTable })
    },
    rollForFlaw: () => {
        const flawTable = flawFunctions.rollOnTable(4, 'flawTables')
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