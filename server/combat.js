module.exports = {
    armor: [
        {
            name: 'Buff Coat',
            size: 'S',
            dr: '2',
            def: 0,
            init: 0,
            rec: 2,
            fatigue: -1,
            skill: 0,
        },
        {
            name: 'Gambeson',
            size: 'S',
            dr: '3',
            def: 0,
            init: 0,
            rec: 0,
            fatigue: -1,
            skill: -2
        },
        {
            name: 'Leather',
            size: 'S',
            dr: '4',
            def: -1,
            init: 1,
            rec: 1,
            fatigue: -1,
            skill: -2
        },
        {
            name: 'Coat of Plates',
            size: 'M',
            dr: '2/d',
            def: -4,
            init: 0,
            rec: 5,
            fatigue: -2,
            skill: -2
        },
        {
            name: 'Lamellar',
            size: 'M',
            dr: '3/d',
            def: -4,
            init: 5,
            rec: 0,
            fatigue: -3,
            skill: -4
        },
        {
            name: 'Brigandine',
            size: 'M',
            dr: '3/d',
            def: -5,
            init: 5,
            rec: 3,
            fatigue: -1,
            skill: -4
        },
        {
            name: 'Laminar (Banded Mail)',
            size: 'M',
            dr: '3/d',
            def: 0,
            init: 5,
            rec: 4,
            fatigue: -3,
            skill: -4
        },
        {
            name: 'Chainmail',
            size: 'M',
            dr: '3/d',
            def: -3,
            init: 3,
            rec: 3,
            fatigue: -3,
            skill: -4
        },
        {
            name: 'Plated Mail',
            size: 'L',
            dr: '2/d + 6',
            def: -6,
            init: 6,
            rec: 6,
            fatigue: -6,
            skill: -6
        },
        {
            name: 'Scale',
            size: 'L',
            dr: '4/d + 2',
            def: -8,
            init: 7,
            rec: 5,
            fatigue: -5,
            skill: -8
        },
        {
            name: 'Full Plate',
            size: 'L',
            dr: '6/d + 7',
            def: -10,
            init: 10,
            rec: 9,
            fatigue: -8,
            skill: -8
        }
    ],
    shields: [
        {
            name: 'Buckler',
            dr: '6/d + 4',
            def: -1,
            parry: 5,
            cover: '1',
            flanks: 2,
            fatigue: -4,
            bonus: 'Yes',
            size: 'S'
        },
        {
            name: 'Clothe',
            dr: '6',
            def: 0,
            parry: 5,
            cover: '0',
            flanks: 2,
            fatigue: 0,
            bonus: '',
            size: 'S'
        },
        {
            name: 'Figure Eight',
            dr: '4/d + 4',
            def: -4,
            parry: 12,
            cover: 'd6!+4',
            flanks: 3,
            fatigue: -3,
            bonus: 'Yes',
            size: 'M'
        },
        {
            name: 'Heater',
            dr: '3/d + 6',
            def: -6,
            parry: 15,
            cover: 'd8!+4',
            flanks: 3,
            fatigue: -2,
            bonus: '',
            size: 'M'
        },
        {
            name: 'Hoplon',
            dr: '4/d + 4',
            def: -3,
            parry: 9,
            cover: 'd8!+7',
            flanks: 3,
            fatigue: -1,
            bonus: '',
            size: 'M'
        },
        {
            name: 'Kite',
            dr: '3/d + 2',
            def: -8,
            parry: 14,
            cover: '2d6!+8',
            flanks: 4,
            fatigue: -2,
            bonus: '',
            size: 'L'
        },
        {
            name: 'Pavise',
            dr: '4/d + 2',
            def: -8,
            parry: 0,
            cover: 'd20!+8',
            flanks: 1,
            fatigue: -5,
            bonus: 'Yes',
            size: 'L'
        },
        {
            name: 'Round',
            dr: '3/d + 2',
            def: -4,
            parry: 11,
            cover: 'd12!+6',
            flanks: 3,
            fatigue: -3,
            bonus: 'Yes',
            size: 'M'
        },
        {
            name: 'Tower',
            dr: '2/d + 1',
            def: -10,
            parry: 18,
            cover: '2d8!+10',
            flanks: 3,
            fatigue: -2,
            bonus: '',
            size: 'L'
        }
    ],
    weapons: {
        axes: [
            {
                name: 'Bardiche',
                size: 'L',
                dam: 'd12!+4d3!',
                rec: 16,
                type: 'S',
                parry: 0,
                measure: 5,
                bonus: 'Yes',
            },
            {
                name: 'Battle Axe',
                size: 'M',
                dam: 'd8!+3d4!',
                rec: 15,
                type: 'S',
                parry: 0,
                measure: 2.5,
                bonus: '',
            },
            {
                name: 'Handaxe',
                size: 'S',
                dam: '3d4!',
                rec: 10,
                type: 'S',
                parry: 0,
                measure: 1,
                bonus: 'Yes',
            },
            {
                name: 'Horsemans Pick',
                size: 'M',
                dam: 'd12!+2d4!',
                rec: 13,
                type: 'P',
                parry: 0,
                measure: 2,
                bonus: 'Yes',
            },
            {
                name: 'Lochaber Axe',
                size: 'L',
                dam: 'd12!+3d4!',
                rec: 17,
                type: 'S',
                parry: 0,
                measure: 6,
                bonus: 'Yes',
            }
        ],
        polearms: [
            {
                name: 'Ahlspiess',
                size: 'L',
                dam: 'd10!+2d4!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 6,
                bonus: ' ',
            },
            {
                name: 'Bill',
                size: 'L',
                dam: 'd6!+4d3!',
                rec: 12,
                type: 'S',
                parry: 0,
                measure: 8,
                bonus: 'Yes',
            },
            {
                name: 'Glaive',
                size: 'L',
                dam: 'd4!+5d3!',
                rec: 14,
                type: 'S',
                parry: 0,
                measure: 8,
                bonus: ' ',
            },
            {
                name: 'Guisarme',
                size: 'L',
                dam: '2d8!+d4!',
                rec: 10,
                type: 'P',
                parry: 0,
                measure: 7.5,
                bonus: 'Yes',
            },
            {
                name: 'Halberd',
                size: 'L',
                dam: '5d4!',
                rec: 16,
                type: 'S',
                parry: 0,
                measure: 5,
                bonus: 'Yes',
            },
            {
                name: 'Halberd',
                size: 'L',
                dam: 'd6!+2d4!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 5,
                bonus: 'Yes',
            },
            {
                name: 'Lance',
                size: 'L',
                dam: '1d8!',
                rec: 20,
                type: 'P',
                parry: 0,
                measure: 10,
                bonus: 'Yes',
            },
            {
                name: 'Lucerne',
                size: 'L',
                dam: 'd20!',
                rec: 12,
                type: 'C',
                parry: 0,
                measure: 7,
                bonus: 'Yes',
            },
            {
                name: 'Military Fork',
                size: 'L',
                dam: '2d6!+d4!',
                rec: 8,
                type: 'P',
                parry: 2,
                measure: 6.75,
                bonus: ' ',
            },
            {
                name: 'Pike',
                size: 'L',
                dam: '3d6!',
                rec: 9,
                type: 'P',
                parry: 0,
                measure: 13,
                bonus: ' ',
            },
            {
                name: 'Ranseur',
                size: 'L',
                dam: 'd8!+2d6!',
                rec: 10,
                type: 'P',
                parry: 0,
                measure: 7.25,
                bonus: ' ',
            },
            {
                name: 'Short Spear',
                size: 'M',
                dam: 'd10!+d4!',
                rec: 7,
                type: 'P',
                parry: 0,
                measure: 5,
                bonus: ' ',
            },
            {
                name: 'Sovnya',
                size: 'L',
                dam: 'd6!+d4!+3d3!',
                rec: 12,
                type: 'S',
                parry: 0,
                measure: 6.5,
                bonus: 'Yes',
            },
            {
                name: 'Voulge',
                size: 'L',
                dam: 'd10!+d6!',
                rec: 7,
                type: 'P',
                parry: 0,
                measure: 7,
                bonus: ' ',
            },
            {
                name: 'War-scythe',
                size: 'L',
                dam: 'd8!+2d4!',
                rec: 9,
                type: 'P',
                parry: 0,
                measure: 6.25,
                bonus: ' ',
            },
        ],
        sidearms: [
            {
                name: 'Cinquedea',
                size: 'S',
                dam: '2d3!+d6!',
                rec: 9,
                type: 'S',
                parry: 0,
                measure: 1.5,
                bonus: ' ',
            },
            {
                name: 'Dagger',
                size: 'S',
                dam: 'd6!',
                rec: 4,
                type: 'P',
                parry: 2,
                measure: 1,
                bonus: 'Yes',
            },
            {
                name: 'Dagger',
                size: 'S',
                dam: '2d4!',
                rec: 6,
                type: 'S',
                parry: 2,
                measure: 1,
                bonus: 'Yes',
            },
            {
                name: 'Dusack',
                size: 'S',
                dam: '2d4!+d3!',
                rec: 8,
                type: 'S',
                parry: 2,
                measure: 2.5,
                bonus: ' ',
            },
            {
                name: 'Katzbalger',
                size: 'S',
                dam: 'd4!+2d3!',
                rec: 9,
                type: 'S',
                parry: 4,
                measure: 2.5,
                bonus: ' ',
            },
            {
                name: 'Knife',
                size: 'S',
                dam: '3d3!',
                rec: 8,
                type: 'S',
                parry: 0,
                measure: 0.25,
                bonus: 'Yes',
            },
            {
                name: 'Scourge',
                size: 'M',
                dam: '4d3!',
                rec: 10,
                type: 'S',
                parry: 0,
                measure: 2,
                bonus: 'Yes',
            },
            {
                name: 'Stiletto',
                size: 'S',
                dam: 'd8!',
                rec: 5,
                type: 'P',
                parry: 4,
                measure: 1.5,
                bonus: ' ',
            },
        ],
        swords: [
            {
                name: 'Arming Sword',
                size: 'M',
                dam: '2d4!+2d3!',
                rec: 12,
                type: 'S',
                parry: 4,
                measure: 3,
                bonus: 'Yes',
            },
            {
                name: 'Court Sword',
                size: 'S',
                dam: 'd6!+d4!',
                rec: 5,
                type: 'P',
                parry: 2,
                measure: 3.25,
                bonus: 'Yes',
            },
            {
                name: 'Estoc',
                size: 'M',
                dam: 'd10!+d3!',
                rec: 7,
                type: 'P',
                parry: 0,
                measure: 3.75,
                bonus: 'Yes',
            },
            {
                name: 'Falchion',
                size: 'M',
                dam: '3d4!+2d3!',
                rec: 14,
                type: 'S',
                parry: 2,
                measure: 3,
                bonus: ' ',
            },
            {
                name: 'Koncerz',
                size: 'M',
                dam: 'd8!+d6!',
                rec: 10,
                type: 'P',
                parry: 0,
                measure: 5.25,
                bonus: 'Yes',
            },
            {
                name: 'Longsword',
                size: 'M',
                dam: '3d4!+d3!',
                rec: 11,
                type: 'S',
                parry: 2,
                measure: 3.75,
                bonus: ' ',
            },
            {
                name: 'Messer',
                size: 'M',
                dam: '2d6!+d3!',
                rec: 10,
                type: 'S',
                parry: 3,
                measure: 3,
                bonus: '',
            },
            {
                name: 'Pishaq',
                size: 'M',
                dam: 'd4!+3d3!',
                rec: 13,
                type: 'S',
                parry: 2,
                measure: 2.5,
                bonus: '',
            },
            {
                name: 'Rapier',
                size: 'M',
                dam: '2d6!',
                rec: 5,
                type: 'P',
                parry: 4,
                measure: 4,
                bonus: ' ',
            },
            {
                name: 'Sabre',
                size: 'M',
                dam: 'd4!+4d3!',
                rec: 13,
                type: 'S',
                parry: 2,
                measure: 3,
                bonus: 'Yes',
            },
            {
                name: 'Schiavona',
                size: 'S',
                dam: 'd8!+2d3!',
                rec: 13,
                type: 'S',
                parry: 2,
                measure: 3,
                bonus: 'Yes',
            },
            {
                name: 'Zweihander',
                size: 'L',
                dam: '5d4!+d3!',
                rec: 15,
                type: 'S',
                parry: 0,
                measure: 7,
                bonus: 'Yes',
            },
        ],
        trauma: [
            {
                name: 'Bec De Corbin',
                size: 'L',
                dam: 'd12!+d10!',
                rec: 12,
                type: 'C',
                parry: 0,
                measure: 5,
                bonus: ' ',
            },
            {
                name: 'Bludgeon',
                size: 'S',
                dam: 'd8!',
                rec: 7,
                type: 'C',
                parry: 0,
                measure: 1.25,
                bonus: 'Yes',
            },
            {
                name: 'Club',
                size: 'M',
                dam: 'd12!',
                rec: 9,
                type: 'C',
                parry: 0,
                measure: 2,
                bonus: ' ',
            },
            {
                name: 'Goedendag',
                size: 'L',
                dam: 'd8!+d3!',
                rec: 6,
                type: 'P',
                parry: 0,
                measure: 3.75,
                bonus: ' ',
            },
            {
                name: 'Mace',
                size: 'M',
                dam: 'd12!+d6!',
                rec: 10,
                type: 'C',
                parry: 0,
                measure: 2,
                bonus: ' ',
            },
            {
                name: 'Maul',
                size: 'L',
                dam: '2d12!',
                rec: 15,
                type: 'C',
                parry: 0,
                measure: 5.5,
                bonus: ' ',
            },
            {
                name: 'Peasant\'s Flail',
                size: 'L',
                dam: '2d10!',
                rec: 15,
                type: 'C',
                parry: 0,
                measure: 4,
                bonus: 'Yes',
            },
            {
                name: 'Pernach',
                size: 'M',
                dam: 'd12!+d4!',
                rec: 12,
                type: 'C',
                parry: 0,
                measure: 3.5,
                bonus: ' ',
            },
            {
                name: 'Quarterstaff',
                size: 'L',
                dam: '2d8!',
                rec: 15,
                type: 'C',
                parry: 2,
                measure: 6,
                bonus: ' ',
            },
            {
                name: 'Unarmed',
                size: 'S',
                dam: '1d4!',
                rec: 5,
                type: 'C',
                parry: 0,
                measure: 0,
                bonus: 'Yes',
            },
            {
                name: 'War Flail',
                size: 'M',
                dam: 'd10!+d8!',
                rec: 11,
                type: 'C',
                parry: 0,
                measure: 4,
                bonus: 'Yes',
            },
            {
                name: 'War Hammer',
                size: 'M',
                dam: 'd12!+d8!',
                rec: 13,
                type: 'C',
                parry: 0,
                measure: 2.5,
                bonus: ' ',
            },
        ],
        thrown: [
            {
                name: 'Javelin',
                size: 'M',
                dam: '2d8!',
                rec: 10,
                type: 'P',
                minrec: 4,
                bonus: 'Yes',
            },
            {
                name: 'Throwing Axe',
                size: 'S',
                dam: '2d4!+d3!',
                rec: 9,
                type: 'S',
                minrec: 3,
                bonus: 'Yes',
            },
            {
                name: 'Throwing Knife',
                size: 'S',
                dam: '2d6!',
                rec: 7,
                type: 'P',
                minrec: 3,
                bonus: 'Yes',
            },
        ],
        mechanical: [
            {
                name: 'Bellybow',
                size: 'L',
                dam: 'd20!+d4!',
                rec: 35,
                type: 'P',
                minrec: 5,
                bonus: 'Yes',
            },
            {
                name: 'Composite Bow',
                size: 'M',
                dam: 'd12!+d8!',
                rec: 12,
                type: 'P',
                minrec: 4,
                bonus: 'Yes',
            },
            {
                name: 'Crossbow',
                size: 'L',
                dam: 'd20!',
                rec: 25,
                type: 'P',
                minrec: 5,
                bonus: 'Yes',
            },
            {
                name: 'Latchet Crossbow',
                size: 'M',
                dam: 'd12!+d10!',
                rec: 13,
                type: 'P',
                minrec: 4,
                bonus: 'Yes',
            },
            {
                name: 'Longbow',
                size: 'L',
                dam: 'd12+d10!',
                rec: 14,
                type: 'P',
                minrec: 5,
                bonus: ' ',
            },
            {
                name: 'Sling',
                size: 'S',
                dam: 'd10!',
                rec: 10,
                type: 'C',
                minrec: 3,
                bonus: ' ',
            },
            {
                name: 'Warbow',
                size: 'L',
                dam: 'd20!+d12!',
                rec: 14,
                type: 'P',
                minrec: 5,
                bonus: 'Yes',
            },
        ],
        firearms: [
            {
                name: 'Fire Lance',
                size: 'L',
                dam: '2d10!',
                rec: 14,
                type: 'C',
                minrec: 5,
                bonus: 'Yes',
            },
            {
                name: 'Hakenbuchse',
                size: 'L',
                dam: 'd10!+d8!',
                rec: 30,
                type: 'C',
                minrec: 5,
                bonus: 'Yes',
            },
            {
                name: 'Handgonne',
                size: 'M',
                dam: 'd10!+d4!',
                rec: 18,
                type: 'C',
                minrec: 4,
                bonus: 'Yes',
            },
        ],
        ranges: [
            {
                name: 'Bellybow',
                range: 125
            },
            {
                name: 'Composite Bow',
                range: 50
            },
            {
                name: 'Crossbow',
                range: 100
            },
            {
                name: 'Fire Lance',
                range: 10
            },
            {
                name: 'Hakenbuchse',
                range: 50
            },
            {
                name: 'Handgonne',
                range: 30
            },
            {
                name: 'Javelin',
                range: 25
            },
            {
                name: 'Latchet Crossbow',
                range: 35
            },
            {
                name: 'Longbow',
                range: 250
            },
            {
                name: 'Throwing Axe',
                range: 10
            },
            {
                name: 'Throwing Knife',
                range: 15
            },
            {
                name: 'Sling',
                range: 30
            },
            {
                name: 'Warbow',
                range: 500
            },
        ]
    }
}

