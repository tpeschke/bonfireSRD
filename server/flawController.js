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
            bonus: 7,
            severity: 7,
            cap: 12,
            currentTotal: 0
        },
        {
            weight: 7,
            flaw: 'Bastard',
            bonus: 17,
            severity: 10,
            cap: 5,
            currentTotal: 2
        },
        {
            weight: 5,
            flaw: 'Epileptic',
            bonus: 13,
            severity: 7,
            cap: 10,
            currentTotal: 9
        },
        {
            weight: 4,
            flaw: 'Debtor',
            bonus: 7,
            severity: 7,
            cap: 5,
            currentTotal: 14
        },
        {
            weight: 7,
            flaw: 'Excommunicated',
            bonus: 10,
            severity: 7,
            cap: 12,
            currentTotal: 18
        },
        {
            weight: 9,
            flaw: 'Fated',
            bonus: 23,
            severity: 10,
            cap: 20,
            currentTotal: 25
        },
        {
            weight: 4,
            flaw: 'Feral',
            bonus: 13,
            severity: 7,
            cap: 5,
            currentTotal: 34
        },
        {
            weight: 12,
            flaw: 'Half-Life',
            bonus: 50,
            severity: 13,
            cap: 4,
            currentTotal: 38
        },
        {
            weight: 9,
            flaw: 'Haunted',
            bonus: 20,
            severity: 13,
            cap: 5,
            currentTotal: 50
        },
        {
            weight: 5,
            flaw: 'Idiot Savant',
            bonus: 13,
            severity: 7,
            cap: 5,
            currentTotal: 59
        },
        {
            weight: 2,
            flaw: 'Inbred',
            bonus: 7,
            severity: 3,
            cap: 10,
            currentTotal: 64
        },
        {
            weight: 9,
            flaw: 'Monotheist',
            bonus: 10,
            severity: 7,
            cap: 12,
            currentTotal: 66
        },
        {
            weight: 5,
            flaw: 'Mule',
            bonus: 10,
            severity: 7,
            cap: 24,
            currentTotal: 75
        },
        {
            weight: 2,
            flaw: 'Orphan',
            bonus: 10,
            severity: 10,
            cap: 20,
            currentTotal: 80
        },
        {
            weight: 2,
            flaw: 'Poor',
            bonus: 10,
            severity: 7,
            cap: 10,
            currentTotal: 82
        },
        {
            weight: 2,
            flaw: 'Refugee',
            bonus: 20,
            severity: 0,
            cap: 1,
            currentTotal: 84
        },
        {
            weight: 6,
            flaw: "Survivor's Guilt",
            bonus: 15,
            severity: 10,
            cap: 10,
            currentTotal: 86
        },
        {
            weight: 4,
            flaw: 'Thrall',
            bonus: 17,
            severity: 10,
            cap: 10,
            currentTotal: 92
        },
        {
            weight: 4,
            flaw: 'Vow of Poverty',
            bonus: 23,
            severity: 7,
            cap: 19,
            currentTotal: 96
        }
    ],
    mental: [
        {
            weight: 11,
            flaw: 'Addict',
            bonus: 19,
            severity: 5,
            cap: 10,
            currentTotal: 0
        },
        {
            weight: 10,
            flaw: 'Craven',
            bonus: 13,
            severity: 10,
            cap: 4,
            currentTotal: 11
        },
        {
            weight: 13,
            flaw: 'Hypochondriac',
            bonus: 10,
            severity: 7,
            cap: 'n/a',
            currentTotal: 21
        },
        {
            weight: 13,
            flaw: 'Impatient',
            bonus: 10,
            severity: 7,
            cap: 5,
            currentTotal: 34
        },
        {
            weight: 11,
            flaw: 'Neurotic',
            bonus: 13,
            severity: 7,
            cap: 'n/a',
            currentTotal: 47
        },
        {
            weight: 13,
            flaw: 'Phobia',
            bonus: 10,
            severity: 7,
            cap: 'n/a',
            currentTotal: 58
        },
        {
            weight: 10,
            flaw: 'Sensitive',
            bonus: 13,
            severity: 10,
            cap: 10,
            currentTotal: 71
        },
        {
            weight: 13,
            flaw: 'Slow-Witted',
            bonus: 10,
            severity: 7,
            cap: 10,
            currentTotal: 81
        },
        {
            weight: 6,
            flaw: 'Vexable',
            bonus: 17,
            severity: 20,
            cap: 2,
            currentTotal: 94
        }
    ],
    physical: [
        {
            weight: 6,
            flaw: 'Ageusia',
            bonus: 7,
            severity: 3,
            cap: 10,
            currentTotal: 0
        },
        {
            weight: 5,
            flaw: 'Allergy, Food',
            bonus: 10,
            severity: 3,
            cap: 'n/a',
            currentTotal: 6
        },
        {
            weight: 5,
            flaw: 'Allergy, Misc',
            bonus: 10,
            severity: 3,
            cap: 'n/a',
            currentTotal: 11
        },
        {
            weight: 3,
            flaw: 'Asthmatic',
            bonus: 13,
            severity: 10,
            cap: 'n/a',
            currentTotal: 16
        },
        {
            weight: 2,
            flaw: 'Blind',
            bonus: 17,
            severity: 10,
            cap: 6,
            currentTotal: 19
        },
        {
            weight: 4,
            flaw: 'Burn Scars',
            bonus: '*',
            severity: '*',
            cap: '*',
            currentTotal: 21
        },
        {
            weight: 3,
            flaw: 'Deaf',
            bonus: 10,
            severity: 10,
            cap: 6,
            currentTotal: 25
        },
        {
            weight: 1,
            flaw: 'Deranged',
            bonus: 33,
            severity: 17,
            cap: 10,
            currentTotal: 28
        },
        {
            weight: 4,
            flaw: 'Glutton',
            bonus: 10,
            severity: 7,
            cap: 'n/a',
            currentTotal: 29
        },
        {
            weight: 3,
            flaw: 'Hemophilic',
            bonus: 13,
            severity: 10,
            cap: 5,
            currentTotal: 33
        },
        {
            weight: 2,
            flaw: 'Hyperopia',
            bonus: 17,
            severity: 13,
            cap: 6,
            currentTotal: 36
        },
        {
            weight: 4,
            flaw: 'Impotent',
            bonus: 10,
            severity: 7,
            cap: 19,
            currentTotal: 38
        },
        {
            weight: 5,
            flaw: 'Infirm',
            bonus: 7,
            severity: 7,
            cap: 10,
            currentTotal: 42
        },
        {
            weight: 2,
            flaw: 'Insomniac',
            bonus: 20,
            severity: 10,
            cap: 10,
            currentTotal: 47
        },
        {
            weight: 6,
            flaw: 'Irritable Bowels',
            bonus: 7,
            severity: 3,
            cap: 'n/a',
            currentTotal: 49
        },
        {
            weight: 5,
            flaw: 'Labyrinthitis',
            bonus: 10,
            severity: 3,
            cap: 10,
            currentTotal: 55
        },
        {
            weight: 2,
            flaw: 'Limp',
            bonus: 13,
            severity: 13,
            cap: 4,
            currentTotal: 60
        },
        {
            weight: 1,
            flaw: 'Missing Arm',
            bonus: 30,
            severity: 36,
            cap: 2,
            currentTotal: 62
        },
        {
            weight: 5,
            flaw: 'Missing Digit',
            bonus: 7,
            severity: 7,
            cap: 10,
            currentTotal: 63
        },
        {
            weight: 3,
            flaw: 'Missing Ear',
            bonus: 13,
            severity: 10,
            cap: 10,
            currentTotal: 68
        },
        {
            weight: 1,
            flaw: 'Missing Eye',
            bonus: 20,
            severity: 33,
            cap: 2,
            currentTotal: 71
        },
        {
            weight: 1,
            flaw: 'Missing Hand',
            bonus: 20,
            severity: 33,
            cap: 2,
            currentTotal: 72
        },
        {
            weight: 1,
            flaw: 'Missing Leg',
            bonus: 26,
            severity: 33,
            cap: 2,
            currentTotal: 73
        },
        {
            weight: 4,
            flaw: 'Missing Teeth',
            bonus: 10,
            severity: 7,
            cap: 4,
            currentTotal: 74
        },
        {
            weight: 3,
            flaw: 'Mute',
            bonus: 13,
            severity: 10,
            cap: 6,
            currentTotal: 78
        },
        {
            weight: 3,
            flaw: 'Myopia',
            bonus: 13,
            severity: 10,
            cap: 6,
            currentTotal: 81
        },
        {
            weight: 3,
            flaw: 'No Depth Perception',
            bonus: 13,
            severity: 10,
            cap: 6,
            currentTotal: 84
        },
        {
            weight: 3,
            flaw: 'Shaky Hands',
            bonus: 13,
            severity: 7,
            cap: 10,
            currentTotal: 87
        },
        {
            weight: 3,
            flaw: 'Stutter',
            bonus: 13,
            severity: 10,
            cap: 6,
            currentTotal: 90
        },
        {
            weight: 4,
            flaw: 'Trick Knee',
            bonus: 10,
            severity: 7,
            cap: 10,
            currentTotal: 93
        },
        {
            weight: 3,
            flaw: 'Weak',
            bonus: 13,
            severity: 10,
            cap: 4,
            currentTotal: 97
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
    getFlawFromRoll: (roll, tableName) => {
        let total = 0
        for (let i = 0; i < flawTables[tableName].length; i++) {
            total += flawTables[tableName][i].weight
            if (total >= roll) {
                flawTables[tableName][i].roll = roll
                return flawTables[tableName][i]
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