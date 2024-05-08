addLayer("1layer small", {// Add a * small* to generate a slightly different layer
    name: "sideLayer1",
    position: -1,
    row: 0,
    symbol() {return (options.ch || modInfo.languageMod==false) ? '↓ 反物质阶段 ↓' : '↓ layer 1 ↓'},
    symbolEN() {return (options.ch || modInfo.languageMod==false) ? '↓ 层级 1 ↓' : '↓ layer 1 ↓'},
    nodeStyle: {"font-size": "15px", "text-center": "center", "height": "30px"},
    startData() { return {
        unlocked: true,
        small: true,
        points: new Decimal(0),// This actually does nothing, but you have to write this. (Unless you want add something in this layer. #Todo, might change that later.)
    }},
    color: "#fefefe",
    type: "none",
    tooltip(){return false},
    layerShown(){return layerDisplayTotal(['p','c','x'])},// If any layer in the array is unlocked, it will returns true. Otherwise it will return false.
	tabFormat: [
        ["display-text", function() { return getPointsDisplay() }]
    ],
})

addLayer("p", {
    name: "战斗", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "战斗", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Prestige", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#4BDC13",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "声望点", // Name of prestige currency
    resourceEN: "prestige points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "血量", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})
addLayer("c", {
    name: "潮汐", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "潮汐", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Prestige", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#58bca1",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "声望点", // Name of prestige currency
    resourceEN: "prestige points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "血量", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})
addLayer("x", {
    name: "星系", // This is optional, only used in a few places, If absent it just uses the layer id
    symbol: "星系", // This appears on the layer's node. Default is the id with the first letter capitalized
    symbolEN: "Prestige", // The second name of this appears on the layer's node ( If you open otherLanguageMod )
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
  
    color: "#1f1e33",
    requires: new Decimal(10000000000000), // Can be a function that takes requirement increases into account
    resource: "反物质星系", // Name of prestige currency
    resourceEN: "prestige points", // The second name of prestige currency ( If you open otherLanguageMod )
    baseResource: "反物质", // Name of resource prestige is based on
    baseResourceEN: "points", // The second name of resource prestige is based on ( If you open otherLanguageMod )
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "static", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 3, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
   
    row: 2, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "p", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    milestones: {
        0: {
            requirementDescription: "123 waffles",
            effectDescription: "blah",
            done() { return player.x.points.gte(1) }
        },
        
    },                
    layerShown(){return true},
   
})
