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
            bonus: 'Takes 1 second to ready. Can be held with other weapons.',
            bonusLong: '<p>The buckler takes 1 second to ready.</p><br><p>The Buckler can also be held but not used while wielding two handed weapons. You receive no bonuses when doing this, but it means that if you do switch over to a one-handed weapon, you instantly get the buckler’s bonus.</p>',
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
            bonus: false,
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
            bonus: 'Adjacent allies get +2 Parry & d4! Cover. Takes 2 seconds to ready.',
            bonusLong: '<p>The Figure Eight shield gives +2 Parry & d4! Cover to adjacent allies.</p><br><p>The Figure Eight shield takes 2 seconds to ready.</p>',
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
            bonus: false,
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
            bonus: false,
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
            bonus: false,
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
            bonus: 'Has a kick stand to set it up.',
            bonusLong: '<p>The Pavise can be set up using a kick stand in the back, giving anyone crouching behind it basically complete cover and allowing that person the ability to steady their weapon on it.</p>',
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
            bonus: 'Nat 20 or Strike, delay target\'s atk by d4!+5 sec. Readies in 2 secs.',
            bonusLong: '<p>With the Round Shield, on a natural roll of 20 on Defense or an Unarmed Strike, you delay your opponent’s next attack by d4!+5 seconds.</p><br><p>They also delay the enemy an additional d4! seconds if used to perform a strike in unarmed combat.</p><br><p>The Round shield is readied in 2 seconds.</p>',
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
            bonus: false,
            size: 'L'
        }
    ],
    weapons: {
        axes: [
            {
                name: 'Bardiche',
                size: 'L',
                dam: '5d4!',
                rec: 17,
                type: 'S',
                parry: 0,
                measure: 4,
                bonus: false,
            },
            {
                name: 'Battle Axe',
                size: 'M',
                dam: '3d6!',
                rec: 13,
                type: 'S',
                parry: 0,
                measure: 2.5,
                bonus: false,
            },
            {
                name: 'Handaxe',
                size: 'S',
                dam: '3d4!',
                rec: 11,
                type: 'S',
                parry: 0,
                measure: 1,
                bonus: 'Can be thrown.',
                bonusLong: '<p>The Handaxe can be used in melee or as a throwing axe. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.</p>'
            },
            {
                name: 'Horsemans Pick',
                size: 'M',
                dam: 'd12!+d3!',
                rec: 9,
                type: 'P',
                parry: 0,
                measure: 2,
                bonus: false,
            },
            {
                name: 'Lochaber Axe',
                size: 'L',
                dam: '4d6!',
                rec: 19,
                type: 'S',
                parry: 0,
                measure: 6,
                bonus: false,
            }
        ],
        polearms: [
            {
                name: 'Ahlspiess',
                size: 'L',
                dam: '2d8!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 6,
                bonus: 'Jab deals d6! damage.',
                bonusLong: '<p>The Ahlspiess deals d6! damage on a sucessful jab.</p>'
            },
            {
                name: 'Bill',
                size: 'L',
                dam: '4d4!',
                rec: 11,
                type: 'S',
                parry: 0,
                measure: 8,
                bonus: 'Dam x2 for Knock Backs vs mounted.',
                bonusLong: '<p>Damage with the Bill is effectively doubled for Knock-Backs vs mounted defenders.</p>'
            },
            {
                name: 'Glaive',
                size: 'L',
                dam: '8d3!',
                rec: 17,
                type: 'S',
                parry: 0,
                measure: 8,
                bonus: false,
            },
            {
                name: 'Guisarme',
                size: 'L',
                dam: '2d8!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 7.5,
                bonus: 'Dam x2 for Knock Backs vs mounted.',
                bonusLong: '<p>Damage with the Guisarme is effectively doubled for Knock-Backs vs mounted defenders.</p>'
            },
            {
                name: 'Halberd',
                size: 'L',
                dam: '5d4!',
                rec: 15,
                type: 'S',
                parry: 0,
                measure: 5,
                bonus: 'Can be used as Piercing.',
                bonusLong: '<p>The Halberd can be used as either a Slashing or Piercing weapon. You can only switch after each attack.</p>'
            },
            {
                name: 'Halberd',
                size: 'L',
                dam: '2d8!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 5,
                bonus: 'Can be used as Slashing.',
                bonusLong: '<p>The Halberd can be used as either a Slashing or Piercing weapon. You can only switch after each attack.</p>'
            },
            {
                name: 'Javelin',
                size: 'M',
                dam: '2d6!',
                rec: 9,
                type: 'P',
                parry: 0,
                measure: 4.25,
                bonus: 'Can be thrown.',
                bonusLong: '<p>This can be used in melee or as a thrown javelin. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.</p>'
            },
            {
                name: 'Lance',
                size: 'L',
                dam: '1d8!',
                rec: 20,
                type: 'P',
                parry: 0,
                measure: 10,
                bonus: 'When mounted, +3d8! dam. Can be used 1 handed mounted.',
                bonusLong: '<p>When mounted, the Lance can be wielded 1 handed without penalty.</p><br><p>The Lance is designed for use on horseback. When mounted, and moving above a walk, it gains +3d8! damage.</p>'
            },
            {
                name: 'Lucerne',
                size: 'L',
                dam: 'd20!',
                rec: 11,
                type: 'C',
                parry: 0,
                measure: 7,
                bonus: false,
            },
            {
                name: 'Military Fork',
                size: 'L',
                dam: '3d4!',
                rec: 9,
                type: 'P',
                parry: 0,
                measure: 6.75,
                bonus: 'Can be used to grab and thrown as 1 handed.',
                bonusLong: '<p>While using the Military Fork, you can perform the Grab & Throw Unarmed moves as if 1 handed.</p>'
            },
            {
                name: 'Pike',
                size: 'H',
                dam: '2d8!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 13,
                bonus: false,
            },
            {
                name: 'Planson',
                size: 'S',
                dam: '2d6!',
                rec: 6,
                type: 'P',
                parry: 2,
                measure: 4,
                bonus: false,
            },
            {
                name: 'Ranseur',
                size: 'L',
                dam: '2d10!',
                rec: 10,
                type: 'P',
                parry: 0,
                measure: 7.25,
                bonus: false,
            },
            {
                name: 'Short Spear',
                size: 'M',
                dam: '2d8!',
                rec: 7,
                type: 'P',
                parry: 0,
                measure: 5,
                bonus: false,
            },
            {
                name: 'Sovnya',
                size: 'L',
                dam: '6d3!',
                rec: 14,
                type: 'S',
                parry: 0,
                measure: 6.5,
                bonus: 'When mounted, +d8! damage.',
                bonusLong: '<p>The Sovnya is designed for use on horseback; it gains a +d8! to damage.</p>'
            },
            {
                name: 'Voulge',
                size: 'L',
                dam: '2d8!',
                rec: 6,
                type: 'P',
                parry: 0,
                measure: 8,
                bonus: false,
            },
            {
                name: 'War-scythe',
                size: 'L',
                dam: '6d3!',
                rec: 16,
                type: 'P',
                parry: 0,
                measure: 6.25,
                bonus: 'Also attacks 2 adjacent targets, dealing 3d3! damage on hit.',
                bonusLong: '<p>Attacks with the War-scythe also count against 2 adjacent targets, dealing an unmodified (no Str, Skills, Descriptions) 3d3! damage on hit instead.</p>'
            },
        ],
        sidearms: [
            {
                name: 'Brass Knuckles',
                size: 'C',
                dam: '1d8!',
                rec: 5,
                type: 'S',
                parry: 2,
                measure: 0,
                bonus: 'Can do all unarmed moves but Grab. Strikes +10.',
                bonusLong: '<p>While using Brass Knuckles, you can perform all Unarmed moves except Grab and Strikes gain a +10 to Attack Roll.</p>'
            },
            {
                name: 'Cinquedea',
                size: 'S',
                dam: '4d3!',
                rec: 12,
                type: 'S',
                parry: 0,
                measure: 1.5,
                bonus: false,
            },
            {
                name: 'Dagger',
                size: 'S',
                dam: '2d4!',
                rec: 5,
                type: 'P',
                parry: 2,
                measure: 1,
                bonus: 'Can be used as Piercing.',
                bonusLong: '<p>Daggers can be used as either a Slashing or Piercing weapon. You can only switch after each attack.</p>'
            },
            {
                name: 'Dagger',
                size: 'S',
                dam: '3d3!',
                rec: 7,
                type: 'S',
                parry: 2,
                measure: 1,
                bonus: 'Can be used as Slashing.',
                bonusLong: '<p>Daggers can be used as either a Slashing or Piercing weapon. You can only switch after each attack.</p>'
            },
            {
                name: 'Dusack',
                size: 'S',
                dam: '3d3!',
                rec: 7,
                type: 'S',
                parry: 2,
                measure: 2.5,
                bonus: 'Parry gives 3/D DR.',
                bonusLong: '<p>Parrying with the Dusack gives you 3/D DR instead of 2/D.</p>'
            },
            {
                name: 'Katzbalger',
                size: 'S',
                dam: '1d3+2d4!',
                rec: 9,
                type: 'S',
                parry: 0,
                measure: .25,
                bonus: false,
            },
            {
                name: 'Knife',
                size: 'S',
                dam: '3d3!',
                rec: 7,
                type: 'S',
                parry: 0,
                measure: 0.75,
                bonus: 'Can be thrown.',
                bonusLong: '<p>Knives can be used in melee or as a throwing knife. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.</p>'
            },
            {
                name: 'Scourge',
                size: 'M',
                dam: '2d3!+d4!',
                rec: 8,
                type: 'S',
                parry: 0,
                measure: 2,
                bonus: 'Against Shields, +8 Atk; Against weapons w/ Parry, +4 Atk.',
                bonusLong: '<p>Attacks with the Scourge against shields or weapons with normal Parry, gain +4 Atk vs weapons, +8 vs Shields.</p>'
            },
            {
                name: 'Stiletto',
                size: 'S',
                dam: 'd6!+d4!',
                rec: 4,
                type: 'P',
                parry: 4,
                measure: 1.5,
                bonus: false,
            },
        ],
        swords: [
            {
                name: 'Arming Sword',
                size: 'M',
                dam: '2d3!+1d4!',
                rec: 8,
                type: 'S',
                parry: 2,
                measure: 2.5,
                bonus: 'Add weapon\'s Parry to Shield\'s Parry.',
                bonusLong: '<p>Add the Arming Sword\'s Parry to your Shield\'s Parry.</p>'
            },
            {
                name: 'Court Sword',
                size: 'S',
                dam: '2d6!',
                rec: 5,
                type: 'P',
                parry: 2,
                measure: 3.25,
                bonus: false,
            },
            {
                name: 'Estoc',
                size: 'M',
                dam: '2d6!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 3.5,
                bonus: 'Half damage dice for /D DR.',
                bonusLong: '<p>Damage dice for the Estoc are effectively halved, rounded up, vs /DR.</p>'
            },
            {
                name: 'Executioner\'s Sword',
                size: 'H',
                dam: '8d4!',
                rec: 24,
                type: 'S',
                parry: 0,
                measure: 10,
                bonus: false,
            },
            {
                name: 'Falchion',
                size: 'M',
                dam: '2d3!+2d4!',
                rec: 12,
                type: 'S',
                parry: 0,
                measure: 3,
                bonus: 'When used 2-handed, +6 damage instead.',
                bonusLong: '<p>When used two-handedly, the Falchion gains a +6 damage instead.</p>'
            },
            {
                name: 'Koncerz',
                size: 'M',
                dam: '2d6!',
                rec: 5,
                type: 'P',
                parry: 2,
                measure: 5.25,
                bonus: 'When mounted, +1d8! dam.',
                bonusLong: '<p>The Koncerz is designed for use on horseback; it gains a +d8! to damage.</p>'
            },
            {
                name: 'Longsword',
                size: 'M',
                dam: '3d3!+d4!',
                rec: 11,
                type: 'S',
                parry: 6,
                measure: 3.75,
                bonus: false,
            },
            {
                name: 'Messer',
                size: 'M',
                dam: '6d3!',
                rec: 15,
                type: 'S',
                parry: 3,
                measure: 2.5,
                bonus: false,
            },
            {
                name: 'Rapier',
                size: 'M',
                dam: '2d6!',
                rec: 5,
                type: 'P',
                parry: 4,
                measure: 4,
                bonus: false,
            },
            {
                name: 'Sabre',
                size: 'M',
                dam: '3d2!+2d3!',
                rec: 9,
                type: 'S',
                parry: 2,
                measure: 3,
                bonus: false,
            },
            {
                name: 'Schiavona',
                size: 'S',
                dam: '2d4!+d3!',
                rec: 6,
                type: 'S',
                parry: 2,
                measure: 2,
                bonus: false,
            },
            {
                name: 'Zweihander',
                size: 'L',
                dam: '7d3!',
                rec: 18,
                type: 'S',
                parry: 0,
                measure: 7,
                bonus: 'Also atks 2 adj. targets, dealing 3d3! damage on hit. +10 to Knock-Backs.',
                bonusLong: '<p>Attacks with the Zweihander also counts against 2 adjacent targets, dealing an unmodified (no Str, Skills, Descriptions) 3d3! damage on hit instead.</p><br><p>The Zweihander gives a +10 to Knock-backs (including adjacent targets effected by the pervious ability)B.</p>'
            },
        ],
        trauma: [
            {
                name: 'Bec De Corbin',
                size: 'L',
                dam: '2d10!',
                rec: 14,
                type: 'C',
                parry: 0,
                measure: 6,
                bonus: false,
            },
            {
                name: 'Bludgeon',
                size: 'S',
                dam: '1d8!',
                rec: 7,
                type: 'C',
                parry: 0,
                measure: 2.25,
                bonus: 'Dam * 2 for Trauma.',
                bonusLong: '<p>Damage with the Bludgeon is effectively doubled for Trauma checks.</p>'
            },
            {
                name: 'Club',
                size: 'M',
                dam: 'd10!',
                rec: 6,
                type: 'C',
                parry: 0,
                measure: 1.5,
                bonus: false,
            },
            {
                name: 'Goedendag',
                size: 'L',
                dam: '2d8!',
                rec: 8,
                type: 'P',
                parry: 0,
                measure: 6,
                bonus: false,
            },
            {
                name: 'Great Hammer',
                size: 'H',
                dam: '2d12!+6',
                rec: 20,
                type: 'C',
                parry: 0,
                measure: 6,
                bonus: false,
            },
            {
                name: 'Mace',
                size: 'M',
                dam: '1d12!',
                rec: 8,
                type: 'C',
                parry: 0,
                measure: 2,
                bonus: false,
            },
            {
                name: 'Maul',
                size: 'L',
                dam: '2d12!',
                rec: 14,
                type: 'C',
                parry: 0,
                measure: 4,
                bonus: false,
            },
            {
                name: 'Peasant\'s Flail',
                size: 'L',
                dam: '1d20!',
                rec: 12,
                type: 'C',
                parry: 0,
                measure: 4,
                bonus: 'Against Shields, +8 Atk; Against weapons w/ Parry, +4 Atk.',
                bonusLong: '<p>Attacks with the Peasant\'s Flail against shields or weapons with normal Parry, gain +4 Atk vs weapons, +8 vs Shields.</p>'
            },
            {
                name: 'Quarterstaff',
                size: 'L',
                dam: '1d10!',
                rec: 6,
                type: 'C',
                parry: 4,
                measure: 6,
                bonus: false,
            },
            {
                name: 'Unarmed',
                size: 'S',
                dam: '1d4!',
                rec: 5,
                type: 'C',
                parry: 0,
                measure: 0,
                bonus: 'Can performed unarmed moves. -2 on explosions.',
                bonusLong: '<p>On explosions, the additional dice are at a -2, instead of the standard -1.</p><br><p>Unarmed attacks aren\'t treated as Trauma weapons for the sake of the Melee Weapon Suite or its Advanced Skills.</p>'
            },
            {
                name: 'War Flail',
                size: 'M',
                dam: '1d10!+1d4!',
                rec: 11,
                type: 'C',
                parry: 0,
                measure: 4,
                bonus: 'Against Shields, +8 Atk; Against weapons w/ Parry, +4 Atk.',
                bonusLong: '<p>Attacks with the War Flail against shields or weapons with normal Parry, gain +4 Atk vs weapons, +8 vs Shields.</p>'
            },
            {
                name: 'War Hammer',
                size: 'M',
                dam: 'd12!+d4!',
                rec: 11,
                type: 'C',
                parry: 0,
                measure: .75,
                bonus: false,
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
                bonus: 'Can be used in melee. Apply Str Dam Mod.',
                bonusLong: '<p>The Javelin can be used at ranged or as a javelin in melee. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.</p><br><p>On a shield hit, if damage is greater than the shield\'s DR, the javelin is lodged in the shield. Defender defends on 1 dice smaller until they drop the shield or spend 2d6! seconds pull it out.</p><br><p>Add your Damage Modifier from Strength to the Javelin.</p>'
            },
            {
                name: 'Throwing Axe',
                size: 'S',
                dam: '4d3!',
                rec: 9,
                type: 'S',
                minrec: 3,
                bonus: 'Can be used in melee. Apply Str Dam Mod.',
                bonusLong: '<p>Throwing Axes can be used at ranged or as a handaxe in melee. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.</p><br><p>Add your Damage Modifier from Strength to the Throwing Axe.</p>'
            },
            {
                name: 'Throwing Knife',
                size: 'S',
                dam: '2d6!',
                rec: 8,
                type: 'P',
                minrec: 3,
                bonus: 'Can be used in melee. Apply Str Dam Mod.',
                bonusLong: '<p>Throwing Knife can be used at ranged or as a knife in melee. All applicable Adv. Weapon Skills apply to both, taking the highest of the two.</p><br><p>Add your Damage Modifier from Strength to the Throwing Knife.</p>'
            },
        ],
        mechanical: [
            {
                name: 'Bellybow',
                size: 'L',
                dam: '1d20!+1d6!',
                rec: 35,
                type: 'P',
                minrec: 5,
                bonus: 'Always 2-handed reload & used 2-handed. Steading weapon x2 Atk Skill Rank.',
                bonusLong: '<p>The Bellybow must be loaded two-handed regardless of size.</p><br><p>Steading the Bellybow against a stand doubles bonuses to Attack from Skills.</p>'
            },
            {
                name: 'Composite Bow',
                size: 'M',
                dam: '1d12!+1d8!',
                rec: 12,
                type: 'P',
                minrec: 4,
                bonus: 'Can be used mounted. Always 2-handed reload & used 2-handed.',
                bonusLong: '<p>The Composite Bow can be used from horseback.</p><br><p>The Composite Bow requires two hands regardless of size.</p>'
            },
            {
                name: 'Crossbow',
                size: 'L',
                dam: '1d12!+1d4!',
                rec: 25,
                type: 'P',
                minrec: 5,
                bonus: 'Always 2-handed reload & used 2-handed. Steading weapon x2 Atk Skill Rank.',
                bonusLong: '<p>The Crossbow must be loaded two-handed regardless of size.</p><br><p>Steading the Crossbow against the ground or a stand doubles bonuses to Attack from Skills.</p>'
            },
            {
                name: 'Latchet Crossbow',
                size: 'M',
                dam: '1d8!+1d4!',
                rec: 13,
                type: 'P',
                minrec: 4,
                bonus: 'Always 2-handed reload. Steading weapon x2 Atk Skill Rank.',
                bonusLong: '<p>The Latchet Crossbow may be used from horseback.</p><br><p>The Latchet Crossbow must be loaded two-handed regardless of size.</p><br><p>Steading the Latchet Crossbow against anything doubles bonuses to Attack from Skills</p>'
            },
            {
                name: 'Longbow',
                size: 'L',
                dam: 'd12+d10!',
                rec: 14,
                type: 'P',
                minrec: 5,
                bonus: 'Always 2-handed reload & used 2-handed.',
                bonusLong: '<p>The Longbow requires two hands regardless of size.</p>'
            },
            {
                name: 'Sling',
                size: 'S',
                dam: '1d10!',
                rec: 10,
                type: 'C',
                minrec: 3,
                bonus: false,
            },
            {
                name: 'Warbow',
                size: 'H',
                dam: '2d12!',
                rec: 14,
                type: 'P',
                minrec: 5,
                bonus: 'Must be fired from prone.',
                bonusLong: '<p>The Warbow must be fired from the prone position, regardless of size, bracing the body of the bow with your legs.</p>'
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
                bonus: 'Causing Flinching. Gains 1 Wear on Atk.',
                bonusLong: '<p>The Fire Lance causes flinching equal to the highest damage dice rolled within it\'s range. See the Flinching Sidebar for more info.</p><br><p>The Fire Lance always gains 1 Wear on use.</p>'
            },
            {
                name: 'Hakenbuchse',
                size: 'L',
                dam: '1d10!+1d8!',
                rec: 30,
                type: 'C',
                minrec: 5,
                bonus: 'Causing Flinching. Backfires.',
                bonusLong: '<p>If you steady the Hakenbuchse against the ground or a stand, you may double your Attack bonus from Skills with this weapon.</p><br><p>The Hakenbuchse causes flinching equal to the d8! damage dice within its first 2 range categories. See the Flinching Sidebar for more info.</p><br><p>The Hakenbuchse causes flinching equal to the d8! damage dice within its first 2 range categories. See the Flinching Sidebar for more info.</p>'
            },
            {
                name: 'Handgonne',
                size: 'M',
                dam: '1d10!+1d4!',
                rec: 18,
                type: 'C',
                minrec: 4,
                bonus: 'Causing Flinching. Backfires.',
                bonusLong: '<p>Handgonne causes flinching equal to the d4! damage dice within its first 2 range categories. See the Flinching Sidebar for more info.</p><br><p>The Handgonne Backfires.</p>'
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

