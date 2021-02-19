export default {
    tables: {
        livestock: [{ name: 'Chicken', size: null, price: .55 },
        { name: 'Dog, Attack/War, Trained', size: null, price: 65 },
        { name: 'Dog, Hunting, Trained', size: null, price: 35 },
        { name: 'Donkey', size: null, price: 70 },
        { name: 'Goat', size: null, price: 5 },
        { name: 'Lamb', size: null, price: 7 },
        { name: 'Lobster, Live', size: null, price: .1 },
        { name: 'Ox', size: null, price: 120 },
        { name: 'Rabbit', size: null, price: 1 },
        { name: 'Steer', size: null, price: 60 },
        ],
        mounts: [{ name: 'Camel, Bachrian', size: null, price: 180 },
        { name: 'Camel, Dromedary', size: null, price: 180 },
        { name: 'Horse, Courser', size: null, price: 250 },
        { name: 'Horse, Destrier', size: null, price: 350 },
        { name: 'Horse, Palfrey', size: null, price: 175 },
        { name: 'Horse, Rounsey', size: null, price: 100 },
        { name: 'Horse, Sumpter', size: null, price: 75 },
        { name: 'Lizard, Pack', size: null, price: 150 },
        { name: 'Lizard, Riding', size: null, price: 250 },
        { name: 'Mule', size: null, price: 90 },
        ],
        barding: [{ name: 'Brigandine', size: null, price: 560 },
        { name: 'Padded', size: null, price: 200 },
        { name: 'Leathered Plates', size: null, price: 380 },
        { name: 'Interlocking Maile', size: null, price: 700 },
        { name: 'Lamellar', size: null, price: 510 },
        { name: 'Leather', size: null, price: 360 },
        { name: 'Maile', size: null, price: 550 },
        { name: 'Full Plate', size: null, price: 800 },
        { name: 'Plated Maile', size: null, price: 1000 },
        { name: 'Scale', size: null, price: 420 },
        ],
        clothing: [{ name: 'Belt, Leather', size: 'S', price: 1 },
        { name: 'Boots, Leather', size: 'S', price: 12 },
        { name: 'Breeches', size: 'S', price: 12 },
        { name: 'Coat, Long', size: 'M', price: 30 },
        { name: 'Coat, Fur', size: 'M', price: 90 },  
        { name: 'Coat, Leather', size: 'M', price: 45 }, 
        { name: 'Dress', size: 'S', price: 18 }, 
        { name: 'Gloves, Wool, Knit', size: 'S', price: 5 }, 
        { name: 'Hat, Fur', size: 'S', price: 6 },  
        { name: 'Hat, Wool', size: 'S', price: 4 }, 
        { name: 'Jacket, Fur', size: 'S', price: 38 }, 
        { name: 'Jacket, Leather', size: 'S', price: 33 },
        { name: 'Kilt, Wool', size: 'S', price: 18 }, 
        { name: 'Mittens, Wool', size: 'S', price: 2 }, 
        { name: 'Sandals', size: 'S', price: 4 }, 
        { name: 'Shirt', size: 'S', price: 12.5 }, 
        { name: 'Shoes, Leather', size: 'S', price: 7 },  
        { name: 'Socks', size: 'S', price: 1.2 }, 
        { name: 'Sweater', size: 'S', price: 12 }, 
        { name: 'Vest', size: 'S', price: 9 },
    ],
        accessories: [{ name: 'Button, Ivory', size: 'T', price: 6 }, 
        { name: 'Button, Wood', size: 'T', price: 0.35 }, { name: 'Collar, Dog, With Iron Buckle', size: 'S', price: 0.8 }, { name: 'Handkerchief, Good Linen, 1 Ft Sq.', size: 'S', price: 0.7 }, { name: 'Handkerchief, Soft Light Canvas, 1 Ft Sq.', size: 'S', price: 0.5 }, { name: 'Horse Shoe, Lesser Steel', size: 'M', price: 3 }, { name: 'Horse Shoe, Steel', size: 'M', price: 5 }, { name: 'Napkin, Good Linen, 1 Ft Sq.', size: 'S', price: 0.7 }, { name: 'Saddle', size: 'L', price: 75 }, { name: 'Saddle, Fancy', size: 'L', price: 150 }, { name: 'Scarf, Gauze Silk, 4 Ft', size: 'S', price: 13.5 }, { name: 'Scarf, Silk, 4 Ft', size: 'S', price: 17.5 }, { name: 'Scarf, Wool, Knit', size: 'S', price: 5.5 }, { name: 'Staff, Walking, Plain', size: 'M', price: 2 },],
        heavy: [{ name: 'Barrel, 15 Gallon, Cedar, Water Tight', size: 'L', price: 10 }, { name: 'Barrel, 15 Gallon, Oak, Water Tight', size: 'L', price: 10 }, { name: 'Barrel, 15 Gallon, Pine, Water Tight', size: 'L', price: 9 }, { name: 'Barrel, 20 Gallon, Oak, Water Tight', size: 'L', price: 11 }, { name: 'Barrel, 32 Gallon, Oak, Water Tight', size: 'H', price: 14 }, { name: 'Basket, Ash, Wicker, 9"dx10"h', size: 'M', price: 4 }, { name: 'Basket, Ash, Wicker, Water Tight Gum, 9"dx10"h', size: 'M', price: 7 }, { name: 'Basket, Bamboo, Plaited, 12"dx15"h', size: 'M', price: 10 }, { name: 'Basket, Oak, Plaited, 2 Handles, 15"dx12"h (bushel)', size: 'M', price: 7 }, { name: 'Basket, Straw, Plaited, 6"dx6"h', size: 'M', price: 2 }, { name: 'Basket, Willow, Wicker, 24"x15"x2"h', size: 'M', price: 6 }, { name: 'Basket, Willow, Wicker, Handle, 15"x8"x6"h', size: 'M', price: 5 }, { name: 'Basket, Wool, Coiled, 10"dx18"h W/ Lid', size: 'M', price: 30 }, { name: 'Basket, Wool, Coiled, 6"dx6"h', size: 'M', price: 10 }, { name: 'Bottle, Clear Glass, Quart', size: 'S', price: 0.8 }, { name: 'Bottle, Green Glass, Quart', size: 'S', price: 0.4 }, { name: 'Bucket, 2 Gallon, Pine, Hemp Handle', size: 'M', price: 3 }, { name: 'Cart, Donkey/pony, Wooden', size: 'H', price: 40 }, { name: 'Cart, Push, Wooden, One-axle, Small', size: 'H', price: 25 }, { name: 'Cask, 2 Gallon, Oak, Water Tight', size: 'L', price: 6 }, { name: 'Flask, Green Glass, Pint', size: 'S', price: 0.7 }, { name: 'Jug, Stoneware, 1 Gal.', size: 'M', price: 4 }, { name: 'Keg, 15 Gallon, Pine (not Water Tight)', size: 'H', price: 4 }, { name: 'Pot, Earthenware, 1gal.', size: 'S', price: 1.25 }, { name: 'Pot, Porcelain, 1gal.', size: 'S', price: 3 }, { name: 'Pot, Stoneware, 1gal.', size: 'S', price: 2.5 }, { name: 'Saddlebags, Leather', size: 'M', price: 10 }, { name: 'Ship, Merchant, Ocean Going', size: 'G', price: 75000 }, { name: 'Wagon, Cargo', size: 'H', price: 1200 },],
        fruits: [{ name: 'Almonds (meat)', size: 'S', price: 0.5 }, { name: 'Apples (bushel)', size: 'L', price: 3.6 }, { name: 'Apples', size: 'S', price: 0.08 }, { name: 'Beets, Pickled', size: 'S', price: 2 }, { name: 'Butter, Salted', size: 'S', price: 1.2 }, { name: 'Cheese', size: 'S', price: 1.2 }, { name: 'Chestnuts (meat)', size: 'S', price: 0.3 }, { name: 'Chestnuts (meat)', size: 'S', price: 0.3 }, { name: 'Egg, Chicken', size: 'T', price: 0.05 }, { name: 'Figs, Dried', size: 'S', price: 0.8 }, { name: 'Grapes (bushel)', size: 'L', price: 7.2 }, { name: 'Grapes', size: 'S', price: 0.15 }, { name: 'Hazelnuts (meat)', size: 'S', price: 0.3 }, { name: 'Honey', size: 'S', price: 1 }, { name: 'Jam, Fruit', size: 'S', price: 1.5 }, { name: 'Lemon Essence', size: 'S', price: 15 }, { name: 'Molasses, Black Strap (gal)', size: 'M', price: 6 }, { name: 'Molasses, Sweet (gal)', size: 'M', price: 4 }, { name: 'Mustard, Condiment', size: 'S', price: 1 }, { name: 'Oil, Olive (gallon)', size: 'M', price: 7 }, { name: 'Olives, Pickled', size: 'S', price: 6 }, { name: 'Pickles, Malt Vinegar', size: 'S', price: 2 }, { name: 'Pickles, Wine Vinegar', size: 'S', price: 5 }, { name: 'Raisins', size: 'S', price: 0.7 }, { name: 'Strawberry Jam', size: 'S', price: 1.5 }, { name: 'Vinegar, Cider (gal)', size: 'M', price: 3.5 }, { name: 'Vinegar, Malt (gal)', size: 'M', price: 0.88 }, { name: 'Vinegar, White Wine (gal)', size: 'M', price: 6 }, { name: 'Walnuts (meat)', size: 'S', price: 0.5 },],
        spices: [{ name: 'Aniseed', size: 'T', price: 2 }, { name: 'Cinnamon', size: 'T', price: 4 }, { name: 'Cloves', size: 'T', price: 5 }, { name: 'Ginger', size: 'T', price: 1.5 }, { name: 'Mace', size: 'T', price: 5 }, { name: 'Mustard, Seed', size: 'T', price: 0.5 }, { name: 'Nutmeg', size: 'T', price: 2.5 }, { name: 'Pepper, Black', size: 'T', price: 6 }, { name: 'Salt, Rock ', size: 'T', price: 0.25 }, { name: 'Salt, Rock, Refined', size: 'T', price: 0.5 }, { name: 'Salt, Sea', size: 'T', price: 0.2 }, { name: 'Salt, Sea, Refined', size: 'T', price: 0.45 }, { name: 'Salt, Spring', size: 'T', price: 0.5 }, { name: 'Sugar', size: 'T', price: 1 }, { name: 'Sugar, Refined', size: 'T', price: 1.5 },],
        'beverages': [{ name: 'Ale (gallon)', size: 'M', price: 0.8 }, { name: 'Applejack (pint)', size: 'S', price: 2 }, { name: 'Beer (gallon)', size: 'M', price: 0.8 }, { name: 'Beer, Seasonal (gallon)', size: 'M', price: 1.4 }, { name: 'Cider, Hard (gallon)', size: 'M', price: 3.2 }, { name: 'Cider, Sweet (gallon)', size: 'M', price: 2 }, { name: 'Lemon Juice (gallon)', size: 'M', price: 4 }, { name: 'Milk (gallon, in-Season)', size: 'M', price: 0.1 }, { name: 'Milk (gallon, Out-of-Season)', size: 'M', price: 0.3 }, { name: 'Rum, Fine (gal)', size: 'M', price: 24 }, { name: 'Rum, Poor (gal)', size: 'M', price: 15 }, { name: 'Wine (gallon)', size: 'M', price: 5.4 },],
        'feed': [{ name: 'Hay', size: 'H', price: 25 }, { name: 'Ration, Dairy Cow, Hay, Daily', size: 'L', price: 0.23 }, { name: 'Ration, Horse, Oats/hay, Daily', size: 'L', price: 2 }, { name: 'Ration, Ox, Hay, Daily', size: 'L', price: 0.45 }, { name: 'Ration, Sow, Corn, Daily', size: 'M', price: 0.45 }, { name: 'Ration, Warhorse, Oats/hay, Daily', size: 'L', price: 3 },],
        'meat': [{ name: 'Beef', size: 'S', price: 0.5 }, { name: 'Beef, Corned', size: 'S', price: 1.25 }, { name: 'Beef, Salted', size: 'S', price: 2 }, { name: 'Beef, Sausage', size: 'S', price: 0.5 }, { name: 'Beef, Sausage, Dried', size: 'S', price: 1 }, { name: 'Beef, Sausage, Pickled', size: 'S', price: 1.25 }, { name: 'Beef, Sausage, Smoked', size: 'S', price: 1 }, { name: 'Chevon', size: 'S', price: 0.45 }, { name: 'Chicken', size: 'S', price: 0.25 }, { name: 'Clams, Gross, In Shell', size: 'M', price: 0.4 }, { name: 'Clams, In Shell', size: 'S', price: 0.05 }, { name: 'Duck Meat ', size: 'S', price: 0.25 }, { name: 'Fish, Fresh, Whole', size: 'M', price: 1 }, { name: 'Fish, Fresh, Whole', size: 'S', price: 0.2 }, { name: 'Fish, Salted', size: 'S', price: 0.8 }, { name: 'Goose Meat', size: 'S', price: 0.25 }, { name: 'Ham, Sugar Cured', size: 'M', price: 12.5 }, { name: 'Mutton', size: 'S', price: 0.4 }, { name: 'Pork', size: 'S', price: 0.25 }, { name: 'Pork Sausage', size: 'S', price: 0.25 }, { name: 'Pork Sausage, Dried', size: 'S', price: 0.5 }, { name: 'Pork Sausage, Pickled', size: 'S', price: 0.65 }, { name: 'Pork Sausage, Smoked', size: 'S', price: 0.5 }, { name: 'Pork, Salted', size: 'S', price: 1 }, { name: 'Rabbit Carcass', size: 'S', price: 0.5 }, { name: 'Shrimp, Whole Raw', size: 'S', price: 0.08 }, { name: 'Turkey', size: 'S', price: 0.25 }, { name: 'Venison', size: 'S', price: 0.3 }, { name: 'Venison Sausage', size: 'S', price: 0.3 }, { name: 'Venison Sausage, Dried', size: 'S', price: 0.6 }, { name: 'Venison Sausage, Smoked', size: 'S', price: 0.6 },],
        'rations': [{ name: 'Biscuit, Hardtack', size: 'S', price: 0.2 }, { name: 'Bread, Rye', size: 'S', price: 0.44 }, { name: 'Bread, Wheat', size: 'S', price: 0.5 }, { name: 'Corn Meal', size: 'S', price: 0.18 }, { name: 'Corn, Feed (bushel)', size: 'L', price: 4.2 }, { name: 'Corn, Feed', size: 'S', price: 0.08 }, { name: 'Flour, Rye', size: 'S', price: 0.35 }, { name: 'Flour, Wheat', size: 'S', price: 0.5 }, { name: 'Grain, Barley', size: 'M', price: 2.75 }, { name: 'Grain, Wheat', size: 'S', price: 0.3 }, { name: 'Oatmeal', size: 'S', price: 0.33 }, { name: 'Oats', size: 'S', price: 0.2 }, { name: 'Pectin (cup)', size: 'T', price: 0.2 }, { name: 'Rations, Person, Day', size: 'S', price: 2.5 },],
        'alchemical': [{ name: 'Amethyst, Cut (carat)', size: 'T', price: 25 }, { name: 'Brick (9"x4½"x3")', size: 'M', price: 0.06 }, { name: 'Coal, Home Heating', size: 'H', price: 15 }, { name: 'Coal, Smith Quality', size: 'H', price: 7 }, { name: 'Diamond, Cut (2 Carat)', size: 'T', price: 3500 }, { name: 'Diamond, Cut (carat)', size: 'T', price: 1000 }, { name: 'Diamond, Industrial (carat)', size: 'T', price: 500 }, { name: 'Diamond, Rough (carat)', size: 'T', price: 600 }, { name: 'Emerald, Cut (carat)', size: 'T', price: 500 }, { name: 'Firewood (cord)', size: 'H', price: 10 }, { name: 'Firewood (per Day)', size: 'M', price: 0.2 }, { name: 'Lumber (200 Board Feet)', size: 'H', price: 15 }, { name: 'Oil, Hemp Seed (gallon)', size: 'M', price: 30 }, { name: 'Oil, Linseed (gallon)', size: 'M', price: 24 }, { name: 'Oil, Whale (gallon)', size: 'M', price: 1 }, { name: 'Oil, Whale, Superior (gallon)', size: 'M', price: 2 }, { name: 'Papyrus, 11"x11"', size: 'T', price: 0.5 }, { name: 'Pearl, Baroque', size: 'T', price: 22 }, { name: 'Pearl, Button (6mm)', size: 'T', price: 250 }, { name: 'Pearl, Round (6mm)', size: 'T', price: 500 }, { name: 'Pearlash', size: 'S', price: 4 }, { name: 'Potash', size: 'S', price: 1 }, { name: 'Ruby, Cut (carat)', size: 'T', price: 500 }, { name: 'Saffron', size: 'S', price: 160 }, { name: 'Sapphire, Cut (carat)', size: 'T', price: 500 }, { name: 'Seed, Tobacco (oz/4 Acres)', size: 'T', price: 70 }, { name: 'Shell, Pearly (1"d)', size: 'T', price: 0.03 }, { name: 'Shell, Pearly (2"d)', size: 'T', price: 0.1 }, { name: 'Shell, Pearly (3"d)', size: 'T', price: 0.3 }, { name: 'Shell, Pearly (4"d)', size: 'T', price: 0.7 }, { name: 'Soap, Hard/cake', size: 'S', price: 0.8 }, { name: 'Tobacco, Chewing', size: 'S', price: 1 }, { name: 'Tobacco, Smoking', size: 'S', price: 1.2 }, { name: 'Wax, Head, Whale (gallon)', size: 'M', price: 4 }, { name: 'Wax. Bayberry', size: 'S', price: 0.25 },],
        'poisons': [{ name: 'Blacknessel', size: 'T', price: 110 }, { name: 'Blue Glory', size: 'T', price: 70 }, { name: 'Bondweed', size: 'T', price: 55 }, { name: 'Griffin Hair', size: 'T', price: 40 }, { name: 'Lylullin', size: 'T', price: 105 }, { name: 'Maidenscap', size: 'T', price: 135 }, { name: 'Palm Of St Germain', size: 'T', price: 60 }, { name: 'Tears Of Sicyon', size: 'T', price: 115 },],
        'products': [{ name: 'Ambergris', size: 'T', price: 45 }, { name: 'Beeswax', size: 'S', price: 0.3 }, { name: 'Buckskin, Tanned (sq. Yard)', size: 'S', price: 4 }, { name: 'Claw, Bear (good Condition)', size: 'T', price: 0.3 }, { name: 'Down, Goose', size: 'S', price: 1 }, { name: 'Feathers, Goose', size: 'S', price: 0.15 }, { name: 'Fleece', size: 'S', price: 2 }, { name: 'Hide, Cow (4 Sq. Yards)', size: 'M', price: 3 }, { name: 'Hide, Lamb (.75 Sq. Yards)', size: 'S', price: 0.9 }, { name: 'Horsehide, Tanned (sq. Yard)', size: 'S', price: 6 }, { name: 'Ivory, White, Elephant', size: 'S', price: 100 }, { name: 'Lambskin (sq. Yard)', size: 'S', price: 7 }, { name: 'Leather, Cow (sq. Yard)', size: 'S', price: 5 }, { name: 'Leather, Full Hide', size: 'L', price: 20 }, { name: 'Parchment, Lambskin, 11"x11"', size: 'T', price: 1 }, { name: 'Pelt, Beaver', size: 'S', price: 4.5 }, { name: 'Pelt, Fox', size: 'S', price: 5 }, { name: 'Pelt, Mink', size: 'S', price: 0.5 }, { name: 'Pelt, Rabbit', size: 'S', price: 0.5 }, { name: 'Pigskin (sq. Yard)', size: 'S', price: 3 }, { name: 'Quill, Porcupine', size: 'T', price: 0.03 },],
        'ore': [{ name: 'Bronze', size: 'S', price: 2.41 }, { name: 'Copper', size: 'S', price: 1.2 }, { name: 'Gold', size: 'S', price: 106.67 }, { name: 'Iron', size: 'S', price: 0.44 }, { name: 'Lead', size: 'S', price: 0.44 }, { name: 'Silver', size: 'S', price: 12.03 }, { name: 'Steel', size: 'S', price: 1.2 }, { name: 'Tin', size: 'S', price: 1.2 },],
        'ropes': [{ name: 'Cord, Hemp, 1/2" (60#), 50 Ft, Wt.', size: 'S', price: 8 }, { name: 'Fabric, Canvas, Soft (sq.yard)', size: 'S', price: 2.6 }, { name: 'Fabric, Canvas, Strong (sq.yard)', size: 'S', price: 3.2 }, { name: 'Fabric, Canvas-light, Soft (sq.yard)', size: 'S', price: 2.1 }, { name: 'Fabric, Canvas-light, Strong (sq.yard)', size: 'S', price: 2.5 }, { name: 'Fabric, Cotton, Thick (sq.yard)', size: 'S', price: 5 }, { name: 'Fabric, Cotton, Thin (sq.yard)', size: 'S', price: 4 }, { name: 'Fabric, Linen, Farm (sq.yard)', size: 'S', price: 3.3 }, { name: 'Fabric, Linen, Good (sq.yard)', size: 'S', price: 4 }, { name: 'Fabric, Linen-light, Farm (sq.yard)', size: 'S', price: 2.5 }, { name: 'Fabric, Linen-light, Good (sq.yard)', size: 'S', price: 3 }, { name: 'Fabric, Silk (sq.yard)', size: 'S', price: 33 }, { name: 'Fabric, Silk, Gauze (sq.yard)', size: 'S', price: 24 }, { name: 'Fabric, Velvet, Silk (sq. Yard)', size: 'S', price: 100 }, { name: 'Fabric, Wool (sq.yard)', size: 'S', price: 3.15 }, { name: 'Fabric, Wool, Heavy (sq.yard)', size: 'S', price: 4.35 }, { name: 'Rope, Cotton, 1/2" (150#), 50 Ft', size: 'M', price: 24 }, { name: 'Rope, Hemp, 1/2" (250#), 50 Ft', size: 'M', price: 13 }, { name: 'Rope, Hemp, 1" (1200#), 100 Ft', size: 'L', price: 225 }, { name: 'Rope, Hemp, 1" (1200#), 50 Ft', size: 'M', price: 90 }, { name: 'Rope, Silk, 1/4" (225#), 50 Ft', size: 'M', price: 30 }, { name: 'Rope, Silk, 1/2 " (500#), 50 Ft', size: 'M', price: 52 }, { name: 'Thread, Canvas, Soft', size: 'S', price: 1.4 }, { name: 'Thread, Canvas, Strong', size: 'S', price: 2.5 }, { name: 'Thread, Linen, Farm ', size: 'S', price: 2.5 }, { name: 'Thread, Linen, Good', size: 'S', price: 3.5 }, { name: 'Yarn, Cotton', size: 'S', price: 8 }, { name: 'Yarn, Wool', size: 'S', price: 4 },],
        'tools': [{ name: 'Astrolabe, Bronze', size: 'M', price: 60 }, { name: 'Auger, Wood Handle, Steel Head', size: 'M', price: 15 }, { name: 'Axe, Wood Handle, Steel Head', size: 'M', price: 12 }, { name: 'Bear Trap, Steel, Sharp Jaws', size: 'L', price: 40 }, { name: 'Blanket, Travel, Cotton', size: 'S', price: 4.5 }, { name: 'Book, Parchment W/ Leather Cover, 24 Pages', size: 'S', price: 30 }, { name: 'Cage, Steel Wire, Rabbit Trap', size: 'M', price: 16 }, { name: 'Chalk, 4"', size: 'S', price: 0.05 }, { name: 'Chisel, Wood Handle, Steel Head', size: 'S', price: 3 }, { name: 'Cleaver', size: 'S', price: 5 }, { name: 'Fire Starter (flint Rock And Steel Rod)', size: 'S', price: 0.6 }, { name: 'Fishing Pole, Cane With Line And Hook', size: 'S', price: 1.2 }, { name: 'Grapnel Hook, Steel, Four Hooks', size: 'S', price: 16 }, { name: 'Hammer, Wood Handle, Steel Head', size: 'S', price: 5 }, { name: 'Hatchet, Wood Handle, Steel Head', size: 'M', price: 4 }, { name: 'Hoe, Wood Handle, Steel Head', size: 'M', price: 6 }, { name: 'Lantern, Tin, Yellow Glass, Pt. Tank', size: 'S', price: 7 }, { name: 'Leash, Leather, 12 Ft, No Metal', size: 'S', price: 1 }, { name: 'Lock Picks, Steel, Set Of Six', size: 'S', price: 12 }, { name: 'Magnifying Glass, With Copper Handle (3"d)', size: 'S', price: 12 }, { name: 'Mallet, Wood', size: 'S', price: 2.5 }, { name: 'Nail, Steel, 3"', size: 'S', price: 1 }, { name: 'Nail, Steel, Horseshoe (28)', size: 'S', price: 2.2 }, { name: 'Needle, Porcupine Quill', size: 'S', price: 0.05 }, { name: 'Pen, Goose Quill', size: 'S', price: 0.33 }, { name: 'Pick, Mining', size: 'M', price: 20 }, { name: 'Pitch Fork, Iron Fork, Wood Shaft', size: 'M', price: 7 }, { name: 'Pitch Fork, Steel Fork, Wood Shaft', size: 'M', price: 9 }, { name: 'Pry Bar, Steel, 15", Pry Head And Claw Head', size: 'M', price: 12 }, { name: 'Scale, Balance, Bronze, 3" Disks', size: 'M', price: 30 }, { name: 'Scissors, Wood Handles, Steel Blades', size: 'S', price: 8 }, { name: 'Sharpening Stone, 3"', size: 'S', price: 0.8 }, { name: 'Shears, Wood Handle, Steel Blades And Spring', size: 'M', price: 9 }, { name: 'Shovel, Wood Handle, Steel Head', size: 'M', price: 10 }, { name: 'Sickle, Wood Handle, Steel Head', size: 'M', price: 9 }, { name: 'Spike, Iron, 12"', size: 'S', price: 1.25 }, { name: 'Spyglass, With Wooden Tubes', size: 'S', price: 20 }, { name: 'Stake, Tent, Wooden, 8"', size: 'S', price: 0.2 }, { name: 'Tack, Steel, ¾"', size: 'S', price: 0.05 }, { name: 'Tent, 1 Person', size: 'M', price: 5 }, { name: 'Tent, 2 Person', size: 'L', price: 12 }, { name: 'Tent, 4 Person', size: 'L', price: 25 }, { name: 'Tongs, Steel With Wood Grips', size: 'S', price: 5 }, { name: 'Torch, Wood, Tallow Soaked Rag', size: 'S', price: 0.2 }, { name: 'Torch, Wood, Wax Soaked Rag', size: 'S', price: 0.4 }, { name: 'Trowel, Wood Handle, Steel Head', size: 'S', price: 4.5 },],
        'munitions': [{ name: 'Arrow, Composite Bow (doz)', size: 'S', price: 12 }, { name: 'Arrow, Longbow (doz)', size: 'S', price: 14.4 }, { name: 'Arrow, Warbow (doz)', size: 'S', price: 16.8 }, { name: 'Blackpowder', size: 'S', price: 3 }, { name: 'Bolt, Bellybow (doz)', size: 'S', price: 15 }, { name: 'Bolt, Crossbow (doz)', size: 'S', price: 12 }, { name: 'Bowstring, Linen Or Hemp', size: 'S', price: 0.5 }, { name: 'Lead Bullets (doz)', size: 'S', price: 8.4 },],
        'munitionsBasic': [{ name: 'Arrow, Composite Bow (doz)', size: 'S', price: 12 }, { name: 'Arrow, Longbow (doz)', size: 'S', price: 14.4 }, { name: 'Arrow, Warbow (doz)', size: 'S', price: 16.8 }, { name: 'Bolt, Bellybow (doz)', size: 'S', price: 15 }, { name: 'Bolt, Crossbow (doz)', size: 'S', price: 12 }, { name: 'Bowstring, Linen Or Hemp', size: 'S', price: 0.5 }],
        'armor': [{ name: 'Bone', size: 'S', price: 90 }, { name: 'Brigandine', size: 'M', price: 280 }, { name: 'Buff Coat', size: 'S', price: 100 }, { name: 'Coat Of Plates', size: 'M', price: 190 }, { name: 'Gambeson', size: 'S', price: 150 }, { name: 'Interlocking Maile', size: 'L', price: 350 }, { name: 'Lamellar', size: 'M', price: 255 }, { name: 'Leather', size: 'S', price: 180 }, { name: 'Maile', size: 'L', price: 275 }, { name: 'Pelt', size: 'S', price: 50 }, { name: 'Full Plate', size: 'L', price: 400 }, { name: 'Plated Maile', size: 'L', price: 500 }, { name: 'Scale', size: 'M', price: 210 },],
        'shields': [{ name: 'Buckler', size: 'S', price: 30 }, { name: 'Clothe', size: 'S', price: 0 }, { name: 'Figure Eight', size: 'M', price: 50 }, { name: 'Heater', size: 'L', price: 60 }, { name: 'Kite', size: 'M', price: 80 }, { name: 'Light', size: 'S', price: 25 }, { name: 'Pavise', size: 'L', price: 125 }, { name: 'Round', size: 'M', price: 105 }, { name: 'Tower', size: 'L', price: 70 },],
        'shieldsBasic': [{ name: 'Buckler', size: 'S', price: 30 }, { name: 'Clothe', size: 'S', price: 0 }, { name: 'Heater', size: 'L', price: 60 }, { name: 'Kite', size: 'M', price: 80 }, { name: 'Light', size: 'S', price: 25 }, { name: 'Round', size: 'M', price: 105 }, { name: 'Tower', size: 'L', price: 70 },],
        'swords': [{ name: 'Arming Sword', size: 'M', price: 70 },{ name: 'Court Sword', size: 'S', price: 63 }, { name: 'Estoc', size: 'M', price: 78 }, { name: 'Falchion', size: 'M', price: 80 }, { name: 'Koncerz', size: 'M', price: 83 }, { name: 'Longsword', size: 'M', price: 75 },{ name: 'Messer', size: 'M', price: 68 }, { name: 'Pishaq', size: 'M', price: 20 }, { name: 'Rapier', size: 'M', price: 80 }, { name: 'Sabre', size: 'M', price: 78 }, { name: 'Schaivona', size: 'S', price: 60 }, { name: 'Zweihander', size: 'L', price: 130 },],
        'swordsBasic': [{ name: 'Arming Sword', size: 'M', price: 70 }, { name: 'Koncerz', size: 'M', price: 83 },{ name: 'Rapier', size: 'M', price: 80 }, { name: 'Zweihander', size: 'L', price: 130 },],
        'sidearms': [{ name: 'Cinquedea', size: 'S', price: 15 }, { name: 'Dagger', size: 'S', price: 12 }, { name: 'Knife', size: 'S', price: 10 }, { name: 'Stiletto', size: 'S', price: 17 }, { name: 'Dusack', size: 'S', price: 49 }, { name: 'Katzbalger', size: 'S', price: 55 }, { name: 'Scourge', size: 'M', price: 10 },],
        'sidearmsBasic': [ { name: 'Dagger', size: 'S', price: 12 }, { name: 'Katzbalger', size: 'S', price: 55 }, { name: 'Knife', size: 'S', price: 10 }, { name: 'Stiletto', size: 'S', price: 17 }],
        'axesBasic': [{ name: 'Battle Axe', size: 'M', price: 90 }, { name: 'Handaxe', size: 'S', price: 12 }],
        'axes': [{ name: 'Bardiche', size: 'L', price: 120 }, { name: 'Battle Axe', size: 'M', price: 90 }, { name: 'Handaxe', size: 'S', price: 12 }, { name: 'Horsemans Pick', size: 'M', price: 105 }, { name: 'Lochaber Axe', size: 'L', price: 117 },],
        'trauma': [{ name: 'Bec De Corbin', size: 'L', price: 75 }, { name: 'Bludgeon', size: 'S', price: 8 }, { name: 'Club', size: 'M', price: 5 }, { name: 'Mace', size: 'M', price: 48 }, { name: 'Maul', size: 'L', price: 35 }, { name: 'Goedendag', size: 'L', price: 24 }, { name: 'Peasant\'s Flail', size: 'L', price: 20 }, { name: 'Pernach', size: 'M', price: 58 }, { name: 'Quarterstaff', size: 'L', price: 8 }, { name: 'War Flail', size: 'M', price: 50 }, { name: 'War Hammer', size: 'M', price: 83 },],
        'traumaBasic': [{ name: 'Bec De Corbin', size: 'L', price: 75 }, { name: 'Club', size: 'M', price: 5 }, { name: 'Mace', size: 'M', price: 48 }, { name: 'Quarterstaff', size: 'L', price: 8 },],
        'polearms': [{ name: 'Ahlspiess', size: 'L', price: 17 }, { name: 'Bill', size: 'L', price: 17 }, { name: 'Glaive', size: 'L', price: 35 }, { name: 'Guisarme', size: 'L', price: 22 }, { name: 'Halberd', size: 'L', price: 42 }, { name: 'Lance', size: 'L', price: 45 }, { name: 'Lucerne', size: 'L', price: 37 }, { name: 'Military Fork', size: 'L', price: 19 }, { name: 'Pike', size: 'L', price: 20 }, { name: 'Ranseur', size: 'L', price: 33 }, { name: 'Short Spear', size: 'M', price: 16 }, { name: 'Sovnya', size: 'L', price: 32 }, { name: 'Voulge', size: 'L', price: 27 }, { name: 'War-scythe', size: 'L', price: 16 },],
        'polearmsBasic': [{ name: 'Ahlspiess', size: 'L', price: 17 }, { name: 'Glaive', size: 'L', price: 35 }, { name: 'Military Fork', size: 'L', price: 19 }, { name: 'Ranseur', size: 'L', price: 33 }, { name: 'Short Spear', size: 'M', price: 16 },],
        'ranged': [{ name: 'Bellybow', size: 'L', price: 175 }, { name: 'Composite Bow', size: 'M', price: 45 }, { name: 'Crossbow', size: 'L', price: 75 }, { name: 'Fire Lance', size: 'L', price: 105 }, { name: 'Hakenbuchse', size: 'L', price: 235 }, { name: 'Handgonne', size: 'M', price: 110 },{ name: 'Javelin', size: 'M', price: 8 }, { name: 'Longbow', size: 'L', price: 60 }, { name: 'Sling', size: 'S', price: 5 }, { name: 'Throwing Axe', size: 'S', price: 12 },{ name: 'Throwing Knife', size: 'S', price: 10 }, { name: 'Warbow', size: 'L', price: 255 },],
        'rangedBasic': [ { name: 'Composite Bow', size: 'M', price: 45 }, { name: 'Crossbow', size: 'L', price: 75 },{ name: 'Javelin', size: 'M', price: 8 }, { name: 'Longbow', size: 'L', price: 60 }, { name: 'Sling', size: 'S', price: 5 }, { name: 'Throwing Axe', size: 'S', price: 12 },{ name: 'Throwing Knife', size: 'S', price: 10 }]
    },
    multipliers: {
        local: {
            T: 1.10,
            S: 1.5,
            M: 2,
            L: 2.5,
            H: 3,
            G: 3.5
        },
        nearby: {
            T: 1.20,
            S: 3,
            M: 4,
            L: 5,
            H: 6,
            G: 7
        },
        distant: {
            T: 2.4,
            S: 4.5,
            M: 6,
            L: 6.5,
            H: 9,
            G: 10.5
        }
    }
}