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
             You offer to trade with it and it smiles a sickly smile, then nods. It suddenly reaches 
             forward and snatches your wrist, while it raises its other hand. You see a flash of shiny metal 
             and feel a sudden blinding pain and before you know it the White Walker is running off, in 
             possession of your left hand. It drops a bag as you stare in horror at the bloody ruin of your wrist. You open
             the bag and find 25 gold in it. You look around as the snow falls, and you are alone, once again. You lose 45 hp.
        `,
        hp: -45,
        gold: 25
    }, {
        id: 'Attack',
        description: `Pull out your sword and aim a vicious attack at its face!`,
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

const Dragon = {
    id: 'dragon',
    title: 'A Dragon Princess',
    map: {
        top: '56.6%',
        left: '50.5%'
    },
    image: 'dragon.jpg',
    // audio: '.wav',
    // action: '.aiff',
    description: `
        As you ride next to a large river, a huge dragon swoops down from the sky and blocks your path.
        A woman climbs down from on top of its back and tells you she is your
        Queen and you must bend the knee. She also says she is your mother, which
        makes no sense and is kind of weird. What do you do?
    `,
    choices: [{
        id: 'Bend',
        description: 'Bend the knee.',
        result: `
            You climb down from your horse and kneel down, lowering your head. "My queen!" You 
            say, with respect and deference. The queen then tells you that you owe 20 gold as taxes.
            Looking at the dragon's large teeth, you dig into your purse and pay up.
        `,
        hp: 0,
        gold: -20
    }, {
        id: 'Stand',
        description: '"Tell her that you kneel for no man, or woman, ever. Not even for mom.."',
        result: `
           The woman gets a dark angry look and and lets out a bitter, pitiless laugh. "Do you hear bells 
           ringing" she askes, before suddenly screaming "DROGON! DRACARYS!!" The dragon roars and shoots a
           gigantic fireball straight towards you, completely enveloping both you and your horse. You feel
           horrible heat, then nothing at all..
        `,
        hp: -1000,
        gold: 0
    }, {
        id: 'Spear Attack',
        description: 'Throw you spear at the woman',
        result: `
            Angered by her demands, you immediately heft your spear and throw it with all your might towards
            the crazy woman. Your throw takes her directly in the face, killing her instantly. The dragon roars 
            and lunges at you, scaring your horse into bucking and throwing you into the river. As the dragon 
            tears your horse apart you are carried down river. When you finally surface 40 seconds later, you 
            are out of sight. You survive while sustaining only minor injuries, doing you 10 damage. You also spotted
            a small chest in the river, and inside it you found 30 gold.
        `,
        hp: -10,
        gold: 30
    }]
};

const Combat = {
    id: 'fight',
    title: `The Half-Man's Fight`,
    map: {
        top: '51%',
        left: '63%'
    },
    image: '',
    // audio: '.wav',
    // action: '.wav',
    description: `
        While visiting the Eyrie, you happen to be witness a trial that was ongoing, while you are there,
        the accused, a Lord Tyrion Lannister, asks desperately 
        for anyone present to be his champion, and fight for his freedom and his cause. What do you do?
    `,
    choices: [{
        id: 'Nothing',
        description: 'Do and say nothing, just watch',
        result: `
        Realizing no one will help him, Tyrion suddenly grabbed a weapon from a nearby guard 
        and begins running for the door, slashing at two guards. as he runs by you, he stabs you in the
        arm, doing 40 damage.
        `,
        hp: -40,
        gold: 0
    }, {
        id: 'fight',
        description: 'Stand and declare yourself the champion',
        result: `
        You stand in single combat against a large heavily armored knight. The armor is too strong for 
        you, and you cannot break through it. After 90 seconds of combat, the knights suddenly moves
        much faster than he was and cleanly sweeps his blade up and through your neck, sending your head
        flying into the courtyard. two minutes later Lord Tyrion is thrown through the Moon Door to his death.
        `,
        hp: -1000,
        gold: 0
    }, {
        id: 'Sneak',
        description: 'Attempt to be sneaky',
        result: `
        You declare yourself the champion, then demand the fight take place the next morning at dawn,
        so you may take the evening to fulfill the sacred fight ceremonies that your religion demands.
        during the night, you drink with the guards and when they are distracted you unlock the door
        to Tyrion Lannisters prison cell. The two of you escape into the night. Tyrion rewards you later
        300 gold.
        `,
        hp: 0,
        gold: 300
    }]
};

const quests = [
    Walker, 
    Combat,
    Dragon 
    //, {
    // //     id: 'pleasure',
    // //     title: 'The Bold Folding Pleasure',
    // //     map: {
    // //         top: '58%',
    // //         left: '25%'
    // //     },
    // //     image: '',
    // //     audio: '.wav',
    // //     action: '.wav',
    // //     description: `
    // //     As you enter the quest chamber you notice three chests before you.
    // //     Just as you start to imagine the wealth, you see a giant serpent
    // //     emerge from the back of the chamber. You'll need to make a run for it,
    // //     but you have time to open one chest before you take off. Which one 
    // //     do you choose?
    // // `,
    // //     choices: [{
    // //         id: 'wooden',
    // //         description: 'WOW',
    // //         result: 'You grab 40 gold pieces!',
    // //         hp: 0,
    // //         gold: 40
    // //     }, {
    // //         id: 'golden',
    // //         description: 'NOW',
    // //         result: 'Oh no! The chest is booby trapped with poison and you take 50 hp damage',
    // //         hp: -50,
    // //         gold: 0
    // //     }, {
    // //         id: 'jeweled',
    // //         description: 'POW',
    // //         result: 'A warm light engulfs you and you gain 35 hp',
    // //         hp: 35,
    // //         gold: 0
    // //     }
    // //     ]
    // }
];

export default quests;