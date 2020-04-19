const Walker = {
    id: 'walker',
    title: 'Exploring The North',
    map: {
        top: '14%',
        left: '46%'
    },
    image: 'White-Walker-1.jpg',
    description: `
        The snowfall is heavy, and you can barely see where you are riding. You suddenly 
        come across a Man with blue cold looking skin. It is a White Walker. What do you do?
    `,
    choices: [{
        id: 'negotiate',
        description: 'Offer to trade with it',
        result: `
             You offer to trade with it and it smiles a sickly smile, the nods. It suddenly reaches 
             forward and snatches your wrist, while it raises it's other hand. You see a flash of shiny metal 
             a feel a sudden blinding pain and before you know it the White Walker is running off, in 
             posession of your left hand. It drops a bag as you stare in horror at the bloody ruin of your wrist. You open
             the bag and find 25 gold in it. You look around as the snow falls, and you are alone, once again. You lose 45 hp.
        `,
        hp: -45,
        gold: 25
    }, {
        id: 'Attack',
        description: `Pull out your sword and aim a vicious attack at it's face!`,
        result: `
            The White Walker moves quickly and blocks your sword with his own, shattering
            your blade into a thousand pieces. As you stare dumbly at the remains of your 
            ruined family sword, the White Walker suddenly thrusts his long blade through 
            your throat. You fall into the snow, gasping for a breath that will never come, 
            until all goes black.
        `,
        hp: -1000,
        gold: 0
    }, {
        id: 'Run Away!!!!',
        description: 'Turn and run as fast as you can',
        result: `
            You turn and run. The White Walker chases, but you suddenly hear voices yelling!
            You look right and men are charging out of a cave. Their screaming red bearded leader throws a burning 
            spear towards the Walker. It dodges the spear but retreats into the the snowfall,
            disappearing. You are safe. You thank the men and as you leave them, you find a bag
             near buried in the snow, you open it and find 50 gold. What a day!
        `,
        hp: 0,
        gold: 50
    }]
};

const dragon = {
    id: 'dragon',
    title: 'A Problem Dragon',
    map: {
        top: '60%',
        left: '50%'
    },
    image: 'dragon.jpg',
    audio: 'dragon.wav',
    action: 'dragon-growl.aiff',
    description: `
        You travel to a nearby village you have heard is being
        terrorized by a dragon. Sure enough as you rent a room
        in a local inn, you go outside and see the dragon about
        to lay seige! What do you do?
    `,
    choices: [{
        id: 'run',
        description: 'Get the hell out of the village',
        result: `
            You high tail it in the opposite direction. Luckily,
            in the panic you find a bag on the ground with 15 gold.
            Unluckily, you trip over a discarded wagon wheel on your
            way out of town and take 35 hp damage. 
        `,
        hp: -35,
        gold: 15
    }, {
        id: 'fight',
        description: 'Fiiiiiggghhhttt!',
        result: `
            You attempt to charge towards the dragon, who sees you approach
            and let's loose a fireball. You wake up the next morning and the
            village has been completely burned to the ground.
            Oh, and you take 45 hp damage.
        `,
        hp: -45,
        gold: 0
    }, {
        id: 'archer',
        description: 'Emulate that guy from LOR who shot an arrow',
        result: `
            Inspired by the legend of Bard the Bowman, you notice a
            stunned archer standing nearby and take their bow and quiver,
            climb to the top of a tall tower and take aim. On the dragon's
            next pass you steady your aim and let one fly. Amazingly,
            you strike the dragon in the eye, piercing into the brain and
            killing the dragon instantly. The villagers declare you their hero
            and award you 90 gold.
        `,
        hp: 0,
        gold: 90
    }]
};

const treasure = {
    id: 'treasure',
    title: 'The Golden Treasure',
    map: {
        top: '34%',
        left: '45%'
    },
    image: 'treasure-chests.png',
    audio: 'treasure-chests.wav',
    action: 'chest-opening.wav',
    description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
    choices: [{
        id: 'wooden',
        description: 'A Wooden Chest',
        result: 'You grab 40 gold pieces!',
        hp: 0,
        gold: 40
    }, {
        id: 'golden',
        description: 'A Golden Chest',
        result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
        hp: -50,
        gold: 0
    }, {
        id: 'jeweled',
        description: 'A Jeweled Chest',
        result: 'A warm light engulfs you and you gain 35 hp',
        hp: 35,
        gold: 0
    }]
};

const quests = [
    Walker, 
    treasure,
    dragon, {
        id: 'pleasure',
        title: 'The Bold Folding Pleasure',
        map: {
            top: '58%',
            left: '25%'
        },
        image: 'treasure-chests.png',
        audio: 'treasure-chests.wav',
        action: 'chest-opening.wav',
        description: `
        As you enter the quest chamber you notice three chests before you.
        Just as you start to imagine the wealth, you see a giant serpent
        emerge from the back of the chamber. You'll need to make a run for it,
        but you have time to open one chest before you take off. Which one 
        do you choose?
    `,
        choices: [{
            id: 'wooden',
            description: 'WOW',
            result: 'You grab 40 gold pieces!',
            hp: 0,
            gold: 40
        }, {
            id: 'golden',
            description: 'NOW',
            result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
            hp: -50,
            gold: 0
        }, {
            id: 'jeweled',
            description: 'POW',
            result: 'A warm light engulfs you and you gain 35 hp',
            hp: 35,
            gold: 0
        }
        ]
    }
];

export default quests;