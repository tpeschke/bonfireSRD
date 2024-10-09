export default {
    tables: {
        livestock: [
            { name: 'Chicken', complex: 1, size: null, price: .55 },
            { name: 'Dog, Guard, Trained', complex: 3, size: null, price: 45 },
            { name: 'Dog, Hunting, Trained', complex: 2, size: null, price: 35 },
            { name: 'Dog, War, Trained', complex: 3, size: null, price: 65 },
            { name: 'Donkey', complex: 2, size: null, price: 70 },
            { name: 'Goat', complex: 2, size: null, price: 5 },
            { name: 'Lamb', complex: 2, size: null, price: 7 },
            { name: 'Lobster, Live', complex: 2, size: null, price: .1 },
            { name: 'Ox', complex: 2, size: null, price: 120 },
            { name: 'Rabbit', complex: 1, size: null, price: 1 },
            { name: 'Steer', complex: 2, size: null, price: 60 },
        ],
        mounts: [
            { name: 'Camel, Bachrian', complex: 2, size: null, price: 180 },
            { name: 'Camel, Dromedary', complex: 2, size: null, price: 180 },
            { name: 'Goat, Riding', complex: 2, size: null, price: 125 },
            { name: 'Horse, Courser', complex: 3, size: null, price: 250 },
            { name: 'Horse, Destrier', complex: 3, size: null, price: 350 },
            { name: 'Horse, Palfrey', complex: 3, size: null, price: 175 },
            { name: 'Horse, Rounsey', complex: 3, size: null, price: 100 },
            { name: 'Horse, Sumpter', complex: 3, size: null, price: 75 },
            { name: 'Lizard, Pack', complex: 3, size: null, price: 150 },
            { name: 'Lizard, Riding', complex: 3, size: null, price: 250 },
            { name: 'Mule', complex: 2, size: null, price: 90 },
            { name: 'Reindeer', complex: 2, size: null, price: 175 },
        ],
        barding: [
            { name: 'Brigandine', complex: 4, size: null, price: 560 },
            { name: 'Padded', complex: 3, size: null, price: 200 },
            { name: 'Leathered Plates', complex: 4, size: null, price: 380 },
            { name: 'Lamellar', complex: 4, size: null, price: 510 },
            { name: 'Leather', complex: 3, size: null, price: 360 },
            { name: 'Maile', complex: 5, size: null, price: 550 },
            { name: 'Full Plate', complex: 6, size: null, price: 1000 },
            { name: 'Plated Maile', complex: 6, size: null, price: 800 },
            { name: 'Scale', complex: 5, size: null, price: 420 },
        ],
        clothing: [
            { name: 'Belt, Leather', complex: 2, size: 'S', price: 1 },
            { name: 'Boots, Leather', complex: 2, size: 'S', price: 12 },
            { name: 'Breeches', complex: 2, size: 'S', price: 12 },
            { name: 'Cloak', complex: 1, size: 'M', price: 3 },
            { name: 'Coat, Long', complex: 3, size: 'M', price: 30 },
            { name: 'Coat, Fur', complex: 2, size: 'M', price: 90 },
            { name: 'Coat, Leather', complex: 3, size: 'M', price: 45 },
            { name: 'Dress', complex: 2, size: 'S', price: 18 },
            { name: 'Gauntlets', complex: 4, size: 'S', price: 35 },
            { name: 'Gloves, Wool, Knit', complex: 2, size: 'S', price: 5 },
            { name: 'Hat, Fur', complex: 1, size: 'S', price: 6 },
            { name: 'Hat, Wool', complex: 2, size: 'S', price: 4 },
            { name: 'Jacket, Fur', complex: 1, size: 'S', price: 38 },
            { name: 'Jacket, Leather', complex: 3, size: 'S', price: 33 },
            { name: 'Kilt, Wool', complex: 2, size: 'S', price: 18 },
            { name: 'Mittens, Wool', complex: 2, size: 'S', price: 2 },
            { name: 'Sandals', complex: 1, size: 'S', price: 4 },
            { name: 'Shirt', complex: 1, size: 'S', price: 12.5 },
            { name: 'Shoes, Leather', complex: 3, size: 'S', price: 7 },
            { name: 'Socks', complex: 1, size: 'S', price: 1.2 },
            { name: 'Sweater', complex: 1, size: 'S', price: 12 },
            { name: 'Vest', complex: 1, size: 'S', price: 9 },
        ],
        accessories: [
            { name: 'Button', complex: 1, size: 'D', price: 0.3 },
            { name: 'Collar, Dog', complex: 2, size: 'S', price: 0.8 },
            { name: 'Handkerchief, 1 Ft Sq.', complex: 3, size: 'S', price: 0.5 },
            { name: 'Horse Shoe', complex: 2, size: 'M', price: 3 },
            { name: 'Saddle', complex: 3, size: 'L', price: 75 },
            { name: 'Scarf, 4ft', complex: 3, size: 'S', price: 5.5 },
            { name: 'Staff, Walking', complex: 1, size: 'M', price: 2 }
        ],
        heavy: [
            { name: 'Barrel, 15 Gallon, Water Tight', complex: 3, size: 'L', price: 9 },
            { name: 'Barrel, 20 Gallon, Water Tight', complex: 3, size: 'L', price: 11 },
            { name: 'Basket, Wicker, 9"dx10"h', complex: 1, size: 'M', price: 4 },
            { name: 'Basket, Wicker, Water Tight Gum, 9"dx10"h', complex: 1, size: 'M', price: 7 },
            { name: 'Basket, Straw, Plaited, 6"dx6"h', complex: 1, size: 'M', price: 2 },
            { name: 'Basket, Wicker, Handle, 15"x8"x6"h', complex: 1, size: 'M', price: 5 },
            { name: 'Basket, Wool, Coiled, 6"dx6"h', complex: 2, size: 'M', price: 10 },
            { name: 'Bottle, Glass', complex: 5, size: 'S', price: 0.4 },
            { name: 'Bucket, 2 Gallon, Hemp Handle', complex: 3, size: 'M', price: 3 },
            { name: 'Cart, Donkey/pony, Wooden', complex: 3, size: 'H', price: 40 },
            { name: 'Cart, Push, Wooden, One-axle, Small', complex: 3, size: 'H', price: 25 },
            { name: 'Cask, 2 Gallon, Water Tight', complex: 3, size: 'M', price: 6 },
            { name: 'Flask, Glass, Pint', complex: 4, size: 'S', price: 0.7 },
            { name: 'Jug, Stoneware, 1 Gal.', complex: 3, size: 'M', price: 4 },
            { name: 'Pot, Earthenware, 1gal.', complex: 2, size: 'S', price: 1.3 },
            { name: 'Saddlebags, Leather', complex: 3, size: 'M', price: 10 },
            { name: 'Ship, Merchant, Ocean Going', complex: 4, size: 'G', price: 75000 },
            { name: 'Wagon, Cargo', complex: 4, size: 'H', price: 1200 }
        ],
        'beverages': [
            { name: 'Ale (gallon)', strength: 2, complex: 2, size: 'M', price: 0.8 },
            { name: 'Applejack (pint)', strength: 2, complex: 2, size: 'S', price: 2 },
            { name: 'Beer (gallon)', strength: 2, complex: 2, size: 'M', price: 0.8 },
            { name: 'Beer, Seasonal (gallon)', strength: 2, complex: 2, size: 'M', price: 1.4 },
            { name: 'Cider, Hard (gallon)', strength: 4, complex: 3, size: 'M', price: 3.2 },
            { name: 'Cider, Sweet (gallon)', strength: 3, complex: 3, size: 'M', price: 2 },
            { name: 'Lemon Juice (gallon)', strength: 0, complex: 2, size: 'M', price: 4 },
            { name: 'Milk (gallon, in-Season)', strength: 0, complex: 2, size: 'M', price: 0.1 },
            { name: 'Milk (gallon, Out-of-Season)', strength: 0, complex: 2, size: 'M', price: 0.3 },
            { name: 'Rum, Fine (gallon)', strength: 6, complex: 2, size: 'M', price: 24 },
            { name: 'Rum, Poor (gal)', strength: 3, complex: 2, size: 'M', price: 15 },
            { name: 'Wine (gallon)', strength: 3, complex: 4, size: 'M', price: 5.4 }
        ],
        'adventuring': [
            { name: "Alm Script, /Favor", complex: 4, size: 'S', price: 24 },
            { name: 'Blanket, Travel', complex: 3, size: 'S', price: 4.5 },
            { name: 'Chalk, 4, Box of 20"', complex: 4, size: 'S', price: 0.1 },
            { name: 'Fire Starter (flint Rock and Steel Rod)', complex: 1, size: 'S', price: 0.6 },
            { name: 'Grapnel Hook, Four Hooks', complex: 2, size: 'S', price: 16 },
            { name: 'Rations, Person, Day', complex: 2, size: 'S', price: 2.5 },
            { name: 'Lamp, Pt. Tank', complex: 2, size: 'S', price: 7 },
            { name: 'Lamp Oil', complex: 4, size: 'S', price: 2 },
            { name: 'Lock, with key', complex: 4, size: 'S', price: 100 },
            { name: 'Lock Picks, Set of Six', complex: 4, size: 'S', price: 12 },
            { name: 'Pry Bar, 15", Pry Head and Claw Head', complex: 3, size: 'M', price: 12 },
            { name: 'Sharpening Stone, 3"', complex: 1, size: 'S', price: 0.8 },
            { name: 'Spike, Metal, 12"', complex: 2, size: 'S', price: 1.3 },
            { name: 'Spyglass, With Tubes', complex: 6, size: 'S', price: 20 },
            { name: 'Stake, Anti-Vampire, 8"', complex: 1, size: 'S', price: 0.2 },
            { name: 'Tent, 1 Person', complex: 2, size: 'M', price: 5 },
            { name: 'Tent, 2 Person', complex: 2, size: 'L', price: 12 },
            { name: 'Tent, 4 Person', complex: 2, size: 'L', price: 25 },
            { name: 'Torch', complex: 2, size: 'S', price: 0.4 }
        ],
        'general': [
            { name: 'Astrolabe', complex: 6, size: 'M', price: 60 },
            { name: 'Book, Parchment W/ Leather Cover, 24 Pages', complex: 4, size: 'S', price: 30 },
            { name: 'Cage, Wire, Rabbit Trap', complex: 3, size: 'M', price: 16 },
            { name: 'Fishing Pole, Cane With Line and Hook', complex: 2, size: 'S', price: 1.2 },
            { name: 'Leash, 12 Ft', complex: 3, size: 'S', price: 1 },
            { name: 'Magnifying Glass, With Handle (3"d)', complex: 6, size: 'S', price: 12 },
            { name: 'Needle, Quill', complex: 2, size: 'T', price: 0.1 },
            { name: 'Scale, Balance, 3" Disks', complex: 3, size: 'M', price: 30 },
            { name: 'Tack, ¾"', complex: 2, size: 'D', price: 0.1 }
        ],
        'trades': [
            { name: 'Auger', complex: 2, size: 'M', price: 15 },
            { name: 'Axe', complex: 3, size: 'M', price: 12 },
            { name: 'Bear Trap', complex: 3, size: 'L', price: 40 },
            { name: 'Chisel', complex: 2, size: 'S', price: 3 },
            { name: 'Cleaver', complex: 3, size: 'S', price: 5 },
            { name: 'Hammer', complex: 2, size: 'S', price: 5 },
            { name: 'Hatchet', complex: 2, size: 'M', price: 4 },
            { name: 'Hoe', complex: 3, size: 'M', price: 6 },
            { name: 'Mallet', complex: 2, size: 'S', price: 2.5 },
            { name: 'Nail, 3"', complex: 3, size: 'S', price: 1 },
            { name: 'Nail, Horseshoe (28)', complex: 2, size: 'S', price: 2.2 },
            { name: 'Pick, Mining', complex: 2, size: 'M', price: 20 },
            { name: 'Pitch Fork', complex: 3, size: 'M', price: 7 },
            { name: 'Scissors', complex: 3, size: 'S', price: 8 },
            { name: 'Shears', complex: 3, size: 'M', price: 9 },
            { name: 'Shovel', complex: 2, size: 'M', price: 10 },
            { name: 'Sickle', complex: 3, size: 'M', price: 9 },
            { name: 'Tongs', complex: 3, size: 'S', price: 5 },
            { name: 'Trowel', complex: 2, size: 'S', price: 4.5 }
        ],
        'feed': [
            { name: 'Hay', complex: 0, size: 'H', price: 25 },
            { name: 'Ration, Dog, Chow, Daily', complex: 2, size: 'S', price: 0.3 },
            { name: 'Ration, Cow, Hay, Daily', complex: 0, size: 'L', price: 0.23 },
            { name: 'Ration, Horse, Oats, Daily', complex: 2, size: 'L', price: 2 },
            { name: 'Ration, Ox, Hay, Daily', complex: 0, size: 'L', price: 0.45 },
            { name: 'Ration, Sow, Corn, Daily', complex: 2, size: 'M', price: 0.45 },
            { name: 'Ration, Warhorse, Oats, Daily', complex: 2, size: 'L', price: 3 }
        ],
        'alchemical': [
            { name: 'Amethyst, Cut (carat)', complex: 5, size: 'T', price: 25 },
            { name: 'Brick (9"x4½"x3")', complex: 3, size: 'M', price: 0.06 },
            { name: 'Coal', complex: 2, size: 'H', price: 7 },
            { name: 'Diamond, Cut (carat)', complex: 4, size: 'T', price: 1000 },
            { name: 'Emerald, Cut (carat)', complex: 4, size: 'T', price: 500 },
            { name: 'Firewood (cord)', complex: 1, size: 'H', price: 10 },
            { name: 'Firewood (per Day)', complex: 1, size: 'M', price: 0.2 },
            { name: 'Lumber (200 Board Feet)', complex: 3, size: 'H', price: 15 },
            { name: 'Oil, Hemp Seed (gallon)', complex: 3, size: 'M', price: 30 },
            { name: 'Oil, Linseed (gallon)', complex: 3, size: 'M', price: 24 },
            { name: 'Oil, Whale (gallon)', complex: 4, size: 'M', price: 1 },
            { name: 'Papyrus, 11"x11"', complex: 4, size: 'T', price: 0.5 },
            { name: 'Pearl, Round (6mm)', complex: 4, size: 'D', price: 500 },
            { name: 'Pearlash', complex: 4, size: 'S', price: 4 },
            { name: 'Potash', complex: 4, size: 'S', price: 1 },
            { name: 'Ruby, Cut (carat)', complex: 4, size: 'T', price: 500 },
            { name: 'Saffron', complex: 5, size: 'S', price: 160 },
            { name: 'Sapphire, Cut (carat)', complex: 4, size: 'T', price: 500 },
            { name: 'Seed, Tobacco (oz/4 Acres)', complex: 2, size: 'T', price: 70 },
            { name: 'Shell, Pearly (1"d)', complex: 4, size: 'T', price: 0.03 },
            { name: 'Soap, Hard/cake', complex: 3, size: 'S', price: 0.8 },
            { name: 'Tobacco', complex: 2, size: 'S', price: 1 },
            { name: 'Wax', complex: 4, size: 'S', price: 0.25 }
        ],
        'poisons': [
            { name: 'Blacknessel', complex: 5, size: 'T', price: 110 },
            { name: 'Blue Glory', complex: 5, size: 'T', price: 70 },
            { name: 'Bondweed', complex: 5, size: 'T', price: 55 },
            { name: 'Griffin Hair', complex: 5, size: 'T', price: 40 },
            { name: 'Lylullin', complex: 5, size: 'T', price: 105 },
            { name: 'Maidenscap', complex: 5, size: 'T', price: 135 },
            { name: 'Palm of St Germain', complex: 5, size: 'T', price: 60 },
            { name: 'Tears of Sicyon', complex: 5, size: 'T', price: 115 },
            { name: 'Wolfsbane', complex: 5, size: 'T', price: 75 }
        ],
        'ropes': [
            { name: 'Cord, Hemp, 1/2" (60#), 50 Ft, Wt.', complex: 2, size: 'S', price: 8 },
            { name: 'Fabric, Canvas (sq.yard)', complex: 3, size: 'S', price: 2.1 },
            { name: 'Fabric, Cotton (sq.yard)', complex: 3, size: 'S', price: 4 },
            { name: 'Fabric, Linen (sq.yard)', complex: 2, size: 'S', price: 2.5 },
            { name: 'Fabric, Silk (sq.yard)', complex: 5, size: 'S', price: 33 },
            { name: 'Fabric, Silk, Gauze (sq.yard)', complex: 5, size: 'S', price: 24 },
            { name: 'Fabric, Velvet, Silk (sq. Yard)', complex: 5, size: 'S', price: 100 },
            { name: 'Fabric, Wool (sq.yard)', complex: 3, size: 'S', price: 3.2 },
            { name: 'Rope, Cotton, 1/2" (150#), 50 Ft', complex: 3, size: 'M', price: 24 },
            { name: 'Rope, Hemp, 1/2" (250#), 50 Ft', complex: 2, size: 'M', price: 13 },
            { name: 'Rope, Hemp, 1" (1200#), 50 Ft', complex: 2, size: 'M', price: 90 },
            { name: 'Rope, Hemp, 1" (1200#), 100 Ft', complex: 2, size: 'L', price: 225 },
            { name: 'Rope, Silk, 1/4" (225#), 50 Ft', complex: 4, size: 'S', price: 30 },
            { name: 'Rope, Silk, 1/2 " (500#), 50 Ft', complex: 4, size: 'S', price: 52 },
            { name: 'Thread, Canvas', complex: 3, size: 'S', price: 1.4 },
            { name: 'Thread, Linen ', complex: 2, size: 'S', price: 2.5 },
            { name: 'Yarn, Cotton', complex: 2, size: 'S', price: 8 },
            { name: 'Yarn, Wool', complex: 2, size: 'S', price: 4 }
        ],
        'munitions': [
            { name: 'Arrow, Composite Bow (doz)', complex: 1, size: 'S', price: 12 },
            { name: 'Arrow, Longbow (doz)', complex: 1, size: 'S', price: 14.4 },
            { name: 'Arrow, Warbow (doz)', complex: 1, size: 'S', price: 16.8 },
            { name: 'Blackpowder & Bullet (per doz shot)', complex: 6, size: 'S', price: 26 },
            { name: 'Bolt, Bellybow (doz)', complex: 1, size: 'S', price: 15 },
            { name: 'Bolt, Crossbow (doz)', complex: 1, size: 'S', price: 12 },
            { name: 'Bowstring, Linen Or Hemp', complex: 3, size: 'S', price: 0.5 }
        ],
        'armor': [
            { name: 'Brigandine', complex: 5, size: 'M', price: 400 },
            { name: 'Buff Coat', complex: 3, size: 'S', price: 130 },
            { name: 'Chainmail', complex: 4, size: 'M', price: 410 },
            { name: 'Coat of Plates', complex: 4, size: 'M', price: 200 },
            { name: 'Gambeson', complex: 3, size: 'S', price: 90 },
            { name: 'Lamellar', complex: 5, size: 'M', price: 370 },
            { name: 'Laminar (Banded Mail)', complex: 4, size: 'M', price: 390 },
            { name: 'Leather', complex: 3, size: 'S', price: 190 },
            { name: 'Full Plate', complex: 6, size: 'L', price: 1040 },
            { name: 'Plated Mail', complex: 6, size: 'L', price: 760 },
            { name: 'Scale', complex: 6, size: 'L', price: 740 }
        ],
        'shields': [
            { name: 'Buckler', complex: 4, size: 'S', price: 40 },
            { name: 'Clothe', complex: 1, size: 'S', price: '*' },
            { name: 'Figure Eight', complex: 2, size: 'M', price: 60 },
            { name: 'Heater', complex: 3, size: 'M', price: 70 },
            { name: 'Hoplon', complex: 2, size: 'M', price: 45 },
            { name: 'Kite', complex: 3, size: 'L', price: 110 },
            { name: 'Pavise', complex: 3, size: 'L', price: 135 },
            { name: 'Round', complex: 2, size: 'M', price: 95 },
            { name: 'Tower', complex: 3, size: 'L', price: 100 }
        ],
        'swords': [
            { name: 'Arming Sword', complex: 3, size: 'M', price: 70 },
            { name: 'Court Sword', complex: 4, size: 'S', price: 63 },
            { name: 'Estoc', complex: 4, size: 'M', price: 78 },
            { name: 'Executioner\'s Sword', complex: 5, size: 'H', price: 250 },
            { name: 'Falchion', complex: 4, size: 'M', price: 80 },
            { name: 'Koncerz', complex: 4, size: 'M', price: 83 },
            { name: 'Longsword', complex: 3, size: 'M', price: 75 },
            { name: 'Messer', complex: 3, size: 'M', price: 68 },
            { name: 'Rapier', complex: 4, size: 'M', price: 80 },
            { name: 'Sabre', complex: 3, size: 'M', price: 78 },
            { name: 'Schaivona', complex: 4, size: 'S', price: 60 },
            { name: 'Zweihander', complex: 5, size: 'L', price: 130 }
        ],
        'sidearms': [
            { name: 'Bludgeon', complex: 1, size: 'S', price: 8 },
            { name: 'Cinquedea', complex: 4, size: 'S', price: 15 },
            { name: 'Dagger', complex: 3, size: 'S', price: 12 },
            { name: 'Knife', complex: 2, size: 'S', price: 10 },
            { name: 'Stiletto', complex: 4, size: 'S', price: 17 },
            { name: 'Dusack', complex: 4, size: 'S', price: 49 },
            { name: 'Katzbalger', complex: 4, size: 'S', price: 55 },
            { name: 'Scourge', complex: 1, size: 'M', price: 10 }
        ],
        'axes': [
            { name: 'Bardiche', complex: 3, size: 'L', price: 120 },
            { name: 'Battle Axe', complex: 2, size: 'M', price: 90 },
            { name: 'Dane Axe', complex: 3, size: 'H', price: 180 },
            { name: 'Handaxe', complex: 2, size: 'S', price: 12 },
            { name: 'Horsemans Pick', complex: 4, size: 'M', price: 105 },
            { name: 'Lochaber Axe', complex: 3, size: 'L', price: 117 }
        ],
        'trauma': [
            { name: 'Bec De Corbin', complex: 4, size: 'L', price: 75 },
            { name: 'Brass Knuckles', complex: 4, size: 'S', price: 10 },
            { name: 'Club', complex: 1, size: 'M', price: 5 },
            { name: 'Mace', complex: 4, size: 'M', price: 48 },
            { name: 'Maul', complex: 3, size: 'L', price: 35 },
            { name: 'Goedendag', complex: 3, size: 'L', price: 24 },
            { name: 'Great Hammer', complex: 5, size: 'H', price: 200 },
            { name: 'Peasant\'s Flail', complex: 2, size: 'L', price: 20 },
            { name: 'Quarterstaff', complex: 1, size: 'L', price: 8 },
            { name: 'War Flail', complex: 4, size: 'M', price: 50 },
            { name: 'War Hammer', complex: 4, size: 'M', price: 83 }
        ],
        'polearms': [
            { name: 'Ahlspiess', complex: 2, size: 'L', price: 17 },
            { name: 'Bill', complex: 2, size: 'L', price: 17 },
            { name: 'Glaive', complex: 3, size: 'L', price: 35 },
            { name: 'Guisarme', complex: 2, size: 'L', price: 22 },
            { name: 'Halberd', complex: 4, size: 'L', price: 42 },
            { name: 'Lance', complex: 1, size: 'L', price: 45 },
            { name: 'Lucerne', complex: 4, size: 'L', price: 37 },
            { name: 'Military Fork', complex: 2, size: 'L', price: 19 },
            { name: 'Planson', complex: 1, size: 'S', price: 10 },
            { name: 'Pike', complex: 1, size: 'H', price: 20 },
            { name: 'Ranseur', complex: 2, size: 'L', price: 33 },
            { name: 'Short Spear', complex: 1, size: 'M', price: 16 },
            { name: 'Sovnya', complex: 2, size: 'L', price: 32 },
            { name: 'Voulge', complex: 2, size: 'L', price: 27 },
            { name: 'War-scythe', complex: 2, size: 'L', price: 16 }
        ],
        'ranged': [
            { name: 'Bellybow', complex: 4, size: 'L', price: 175 },
            { name: 'Composite Bow', complex: 4, size: 'M', price: 45 },
            { name: 'Crossbow', complex: 5, size: 'L', price: 75 },
            { name: 'Fire Lance', complex: 6, size: 'L', price: 52 },
            { name: 'Hakenbuchse', complex: 6, size: 'L', price: 235 },
            { name: 'Handgonne', complex: 6, size: 'L', price: 110 },
            { name: 'Javelin', complex: 1, size: 'M', price: 8 },
            { name: 'Latchet Crossbow', complex: 3, size: 'M', price: 50 },
            { name: 'Longbow', complex: 3, size: 'L', price: 60 },
            { name: 'Molotov Cocktail', complex: 2, size: 'S', price: 15 },
            { name: 'Sling', complex: 1, size: 'S', price: 5 },
            { name: 'Throwing Axe', complex: 2, size: 'S', price: 12 },
            { name: 'Throwing Knife', complex: 2, size: 'S', price: 10 },
            { name: 'Warbow', complex: 4, size: 'L', price: 255 }
        ],
        'intruments': [
            { name: 'Adufe', complex: 4, size: 'S', price: 5.3 },
            { name: 'Bagpipes', complex: 3, size: 'M', price: 94.9 },
            { name: 'Bladder Pipe', complex: 3, size: 'S', price: 35 },
            { name: 'Citole', complex: 4, size: 'M', price: 50 },
            { name: 'Crumhorn', complex: 2, size: 'S', price: 25 },
            { name: 'Dulcimer', complex: 4, size: 'L', price: 70 },
            { name: 'Fiddle', complex: 4, size: 'M', price: 80 },
            { name: 'Frame Drum', complex: 2, size: 'S', price: 3 },
            { name: 'Gittern', complex: 4, size: 'S', price: 75 },
            { name: 'Glockenspiel', complex: 5, size: 'L', price: 7 },
            { name: 'Guitarra', complex: 4, size: 'M', price: 35 },
            { name: 'Harp', complex: 4, size: 'M', price: 40 },
            { name: 'Hurdy-Gurdy', complex: 5, size: 'L', price: 100 },
            { name: 'Lute', complex: 4, size: 'M', price: 95 },
            { name: 'Mandolin', complex: 4, size: 'M', price: 60 },
            { name: 'Naqareh', complex: 3, size: 'S', price: 18.7 },
            { name: 'Oud', complex: 4, size: 'L', price: 42.5 },
            { name: 'Psalterium', complex: 4, size: 'L', price: 200 },
            { name: 'Rebec', complex: 4, size: 'M', price: 42.5 },
            { name: 'Recorder', complex: 3, size: 'S', price: 5 },
            { name: 'Sackbut', complex: 4, size: 'M', price: 41.2 },
            { name: 'Shawm', complex: 3, size: 'L', price: 34.5 },
            { name: 'String Drum', complex: 2, size: 'M', price: 27 },
            { name: 'Tabor Drum', complex: 2, size: 'M', price: 6.5 },
            { name: 'Tabor Pipe', complex: 3, size: 'S', price: 26.5 },
            { name: 'Timbrel', complex: 3, size: 'S', price: 5.5 },
            { name: 'Viol', complex: 4, size: 'M', price: 100 },
            { name: 'Zampogna', complex: 3, size: 'L', price: 75 }
        ],
        'containers_personal': [
            { name: 'Backpack, Leather, Small', carry: '+M', complex: 3, size: 'S', price: 9, },
            { name: 'Backpack, Leather, Medium', carry: '+2M', complex: 3, size: 'S', price: 10, },
            { name: 'Backpack, Leather, Large', carry: '+L', complex: 3, size: 'S', price: 15, },
            { name: 'Bag, Small', carry: '+2S', complex: 2, size: 'S', price: 5, },
            { name: 'Bag, Medium', carry: '+M', complex: 2, size: 'S', price: 6.5, },
            { name: 'Canteen, quart', carry: '*', complex: 2, size: 'S', price: 2, },
            { name: 'Coin Purse, 3"x4"', carry: '*', complex: 2, size: 'S', price: 0.4, },
            { name: 'Pouch, Belt, Small', carry: '+S', complex: 2, size: 'S', price: 0.5, },
            { name: 'Pouch, Belt, Medium', carry: '+2S', complex: 2, size: 'S', price: 1.2, },
            { name: 'Quiver, 12 Cap', carry: '*', complex: 2, size: 'M', price: 2.5, },
            { name: 'Quiver, Javelin, 8 Cap', carry: '*', complex: 2, size: 'L', price: 2.5, },
            { name: 'Sheathe, Small', carry: '*', complex: 3, size: 'S', price: 2.5, },
            { name: 'Sheathe, Medium', carry: '*', complex: 3, size: 'S', price: 5, },
            { name: 'Sheathe, Large', carry: '*', complex: 3, size: 'S', price: 10, },
            { name: 'Sheathe, Huge', carry: '*', complex: 3, size: 'S', price: 15, },
            { name: 'Scroll Case, 12 cap', carry: '*', complex: 3, size: 'S', price: 6, },
            { name: 'Waterskin, Gallon', carry: '*', complex: 3, size: 'S', price: 5, },
            { name: 'Waterskin, Half Gallon', carry: '*', complex: 3, size: 'S', price: 3 }
        ]
    },
    multipliers: {
        local: {
            D: 1.5,
            T: 1.5,
            S: 1.5,
            M: 1.5,
            L: 1.5,
            H: 1.5,
            G: 1.5
        },
        nearby: {
            D: 1.5 * (1.05 ** 3),
            T: 1.5 * (1.1 ** 3),
            S: 1.5 * (1.2 ** 3),
            M: 1.5 * (1.3 ** 3),
            L: 1.5 * (1.4 ** 3),
            H: 1.5 * (1.5 ** 3),
            G: 1.5 * (1.6 ** 3)
        },
        regional: {
            D: 1.5 * (1.05 ** 4),
            T: 1.5 * (1.1 ** 4),
            S: 1.5 * (1.2 ** 4),
            M: 1.5 * (1.3 ** 4),
            L: 1.5 * (1.4 ** 4),
            H: 1.5 * (1.5 ** 4),
            G: 1.5 * (1.6 ** 4)
        },
        distant: {
            D: 1.5 * (1.05 ** 5),
            T: 1.5 * (1.1 ** 5),
            S: 1.5 * (1.2 ** 5),
            M: 1.5 * (1.3 ** 5),
            L: 1.5 * (1.4 ** 5),
            H: 1.5 * (1.5 ** 5),
            G: 1.5 * (1.6 ** 5)
        }
    }
}

