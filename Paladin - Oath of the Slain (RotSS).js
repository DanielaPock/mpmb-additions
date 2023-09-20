/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Paladin, called "Oath of the Slain"
				This was a kickstarter project and is available to buy at https://www.drivethrurpg.com/product/424627/Raiders-of-the-Serpent-Sea-Campaign-Guide-PDF-Version
	Code by:	Daniela Pock
	Date:		2023-09-20 (sheet v13.0.0beta16)

	Please support the creators of this content by buying their book.
*/

var iFileName = "Paladin - Oath of the Slain [RotSS, transcribed by Daniela Pock].js";
RequiredSheetVersion(13);

SourceList["RotSS"] = {
    name: "Raiders of the Serpent Sea",
    abbreviation: "RotSS",
    group: "Raiders of the Serpent Sea",
    url: "https://www.drivethrurpg.com/product/424627/Raiders-of-the-Serpent-Sea-Campaign-Guide-PDF-Version",
    date: "2023/09/20"
};

AddSubClass("paladin", "slain", {
    regExpSearch: /^(?=.*slain)(((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper))))).*$/i,
    subname: "Oath of the Slain",
    source: [["RotSS", 57]],
    spellcastingExtra: [
        "hellish rebuke",
        "hunter's mark",
        "branding smite",
        "hold person",
        "dispel magic",
        "fear",
        "death ward",
        "guardian of faith",
        "hold monster",
        "wall of force"
    ],
    features: {
        "subclassfeature3": {
            name: "Channel Divinity: Fight to the Last",
            source: [["RotSS", 58]],
            minlevel: 3,
            description: desc([
                "Immediately after you damage an opponent you may use your Channel Divinity as a bonus action to " +
                "heal creatures of your choice within 15 feet of you. You may distribute hit points equal to twice your level in this " +
                "class among the creatures you’ve chosen. If a creature was at zero hit points when you use this feature " +
                "on them, this healing effect is doubled for them."
            ]),
            action: [["bonus action", ""]]
        },
        "subclassfeature3.1": {
            name: "Channel Divinity: Mark of the Executioner",
            source: [["RotSS", 58]],
            minlevel: 3,
            description: desc([
                "As a bonus action you can use your Channel Divinity to mark an enemy for execution. For the next minute, " +
                "whenever you attack this marked creature, you score a critical hit on an 18 or higher."
            ]),
            action: [["bonus action", ""]]
        },
        "subclassfeature7": {
            name: "Aura of the Executioner",
            source: [["RotSS", 58]],
            minlevel: 7,
            description: desc([
                "Starting at 7th level, you always emanate an aura that grants you and your allies increased focus when attacking enemies." +
                " You, and any allies within 10 feet of you, may add 1 to all attack rolls made each turn. This benefit ends if you become incapacitated.\n" +
                "At 18th level, the range of this aura increases to 20 feet and the attack roll bonus increases to 1d4."
            ]),
            calcChanges: {
                atkAdd: [
                    function (fields, v) {
                        fields.Description += (fields.Description ? '; ' : '') + '+1 or +1d4 (lvl18)';
                    },
                    "My aura grants me a +1 (+1d4 - lvl 18) to all attack rolls made each turn"
                ]
            }
        },
        "subclassfeature15": {
            name: "A Glourious Sacrifice",
            source: [["RotSS", 58]],
            minlevel: 15,
            description: desc([
                "Starting at 15th level, your dedication prevents you from dying easily and if you die, no spell, magical " +
                "effect, or other feature can ever make you return to life as an undead creature.\n" +
                "Additionally, after taking damage that reduces you to 0 hit points and does not kill you outright, " +
                "you may use your reaction to temporarily thwart death and remain conscious. You immediately take an " +
                "extra turn, interrupting the current turn, but can only take the Attack action as well as any movement " +
                "required (without exceeding your standard movement) to reach an enemy to attack. The movement provided " +
                "by this feature does not provoke opportunity attacks.\n" +
                "You are considered to have failed one death saving throw by activating this feature and while you have " +
                "0 hit points, damage against you causes you to fail another death saving throw (three death saving throw " +
                "failures will kill you). When the extra turn ends, you fall unconscious if you still have 0 hit points.\n" +
                "Once you use this feature, you cannot use it again until you finish a long rest."
            ]),
            action: [["action", ""]]
        },
        "subclassfeature20": {
            name: "Justice Delivered",
            source: [["RotSS", 58]],
            minlevel: 20,
            description: desc([
                "Starting at 20th level, you are grimly determined to have a death worthy of the greatest of heroes. " +
                "You may use an action to undergo a transformation that lasts for 1 minute (or until you are incapacitated or killed). During this time you have the following benefits:\n" +
                "•\n" +
                "Impervious Flesh. You gain resistance to all damage.\n" +
                "•\n" +
                "Of One Mind. You are immune to being charmed and any allies within 30 feet have advantage on saving throws against charm effects.\n" +
                "•\n" +
                "Might of the Gods. When an ally within 10 feet hits an enemy with a melee attack, you may use your reaction to attack that enemy (if you are in range) with advantage.\n" +
                "Once you use this feature, you cannot use it again until you finish a long rest."
            ]),
            recovery: "long rest",
            usages: 1,
            action: [["action", ""]]
        }
    }
});