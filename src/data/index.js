const gamesData = [
    {
        id: 1,
        title: "Call of duty",
        category : "action",
        price: 23.99,
        platform: "PS5",
        releaseYear: "2022",
        developer: "Infinity Wald, Raven Software, Activision",
        isAvailable : true,
        description : "Welcome to Call of Duty® HQ, the home of Call of Duty®: Modern Warfare® II and Warzone™.",
        imageUrl1: "callofduty-1.jpg",
        imageUrl2: "callofduty-2.jpg",
        imageUrl3: "callofduty-3.jpg",
        imageUrl4: "callofduty-4.jpg",
        ratings: 4.5,
        isFavorite : false,
        
    },
    {
        id: 2,
        title: "Left for Dead 2",
        category : "action",
        price: 8.49,
        platform: "Xbox One",
        releaseYear: "2022",
        developer: "Valve",
        isAvailable : true,
        description : "Set in the zombie apocalypse, Left 4 Dead 2 (L4D2) is the highly anticipated sequel to the award-winning Left 4 Dead, the #1 co-op game of 2008. This co-operative action horror FPS takes you and your friends through the cities, swamps and cemeteries of the Deep South, from Savannah to New Orleans",
        imageUrl1: "leftfordead-1.jpg",
        imageUrl2: "leftfordead-2.jpg",
        imageUrl3: "leftfordead-3.jpg",
        imageUrl4: "leftfordead-4.jpg",
        ratings: 3.0,
        isFavorite : false,
    },
    {
        id: 3,
        title: "DOTA 2",
        category : "adventure",
        price: 14.99,
        platform: "PC",
        releaseYear: "2013",
        developer: "Valve",
        isAvailable : true,
        description : "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
        imageUrl1: "dota-1.jpg",
        imageUrl2: "dota-2.jpg",
        imageUrl3: "dota-3.jpg",
        imageUrl4: "dota-4.jpg",
        ratings: 5.0,
        isFavorite : false,
    },
    {
        id: 4,
        title: "FIFA24",
        category : "sport",
        price: 39.99,
        platform: "PS5",
        releaseYear: "2024",
        developer: "EA Sports",
        isAvailable : true,
        description : "EA SPORTS FC™ 24 welcomes you to The World’s Game: the most true-to-football experience ever with HyperMotionV, PlayStyles optimised by Opta, and an enhanced Frostbite™ Engine.",
        imageUrl1: "fifa24-1.jpg",
        imageUrl2: "fifa24-2.jpg",
        imageUrl3: "fifa24-3.jpg",
        imageUrl4: "fifa24-4.jpg",
        ratings: 5.0,
        isFavorite : false,
    },
    {
        id: 5,
        title: "NBA 2K23",
        category: "sport",
        price: 49.99,
        platform: "PS5",
        releaseYear: "2022",
        developer: "Visual Concepts",
        isAvailable: true,
        description: "Rise to the occasion in NBA 2K23. Showcase your talent in MyCAREER. Pair All-Stars with timeless legends in MyTEAM. Build your own dynasty in MyGM, or guide the NBA in a new direction with MyLEAGUE. Take on NBA or WNBA teams in PLAY NOW and feel true-to-life gameplay.",
        imageUrl1: "nba2k23-1.jpg",
        imageUrl2: "nba2k23-2.jpg",
        imageUrl3: "nba2k23-3.jpg",
        imageUrl4: "nba2k23-4.jpg",
        ratings: 3.0,
        isFavorite: false,
    },
    {
        id: 6,
        title: "Madden NFL 24",
        category: "sport",
        price: 59.99,
        platform: "PS5",
        releaseYear: "2023",
        developer: "Tiburon",
        isAvailable: true,
        description: "Experience the newest iteration of FieldSENSE™ in Madden NFL 24. More realistic character movement and smarter AI gives you control to play out your gameplay strategy with the confidence to dominate any opponent.",
        imageUrl1: "madden24-1.jpg",
        imageUrl2: "madden24-2.jpg",
        imageUrl3: "madden24-3.jpg",
        imageUrl4: "madden24-4.jpg",
        ratings: 4.7,
        isFavorite: false,
    },
    {
        id: 7,
        title: "PGA Tour 2023",
        category: "sport",
        price: 89.99,
        platform: "Xbox",
        releaseYear: "2023",
        developer: "HB Studio",
        isAvailable: true,
        description: "Hit the links with more swagger in PGA TOUR 2K23. Now featuring playable male and female pros, including Tiger Woods, new licensed courses, more control options, an authentic PGA TOUR MyCAREER, Course Designer, and new MyPLAYER Skills and Archetypes! PGA TOUR 2K23. More Golf.",
        imageUrl1: "pga-tour-1.jpg",
        imageUrl2: "pga-tour-2.jpg",
        imageUrl3: "pga-tour-3.jpg",
        imageUrl4: "pga-tour-4.jpg",
        ratings: 3.0,
        isFavorite: false,
    },
    {
        id: 8,
        title: "Formula 1 2023",
        category: "racing",
        price: 23.99,
        platform: "Xbox",
        releaseYear: "2023",
        developer: "Codemaster",
        isAvailable: true,
        description: "Be the last to brake in EA SPORTS™ F1® 23, the official video game of the 2023 FIA Formula One World Championship™. A new chapter in the thrilling 'Braking Point' story mode delivers high-speed drama and heated rivalries.",
        imageUrl1: "formular1-1.jpg",
        imageUrl2: "formular1-2.jpg",
        imageUrl3: "formular1-3.jpg",
        imageUrl4: "formular1-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 9,
        title: "Forza Horizon 4",
        category: "racing",
        price: 49.99,
        platform: "Xbox",
        releaseYear: "2024",
        developer: "Playground Games",
        isAvailable: true,
        description: "Your Ultimate Horizon Adventure awaits! Explore the vibrant open world landscapes of Mexico with limitless, fun driving action in the world’s greatest cars. Conquer the rugged Sierra Nueva in the ultimate Horizon Rally experience. Requires Forza Horizon 5 game, expansion sold separately.",
        imageUrl1: "forza4-1.jpg",
        imageUrl2: "forza4-2.jpg",
        imageUrl3: "forza4-3.jpg",
        imageUrl4: "forza4-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 10,
        title: "PES 2020",
        category: "sport",
        price: 18.99,
        platform: "PS5",
        releaseYear: "2020",
        developer: "EA Sports",
        isAvailable: true,
        description: "",
        imageUrl1: "pes20-1.jpg",
        imageUrl2: "pes20-2.jpg",
        imageUrl3: "pes20-3.jpg",
        imageUrl4: "pes20-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 11,
        title: "GTAV",
        category: "action",
        price: 69.99,
        platform: "PS5",
        releaseYear: "2021",
        developer: "RockStar Games",
        isAvailable: true,
        description: "Grand Theft Auto V for PC offers players the option to explore the award-winning world of Los Santos and Blaine County in resolutions of up to 4k and beyond, as well as the chance to experience the game running at 60 frames per second.",
        imageUrl1: "gtav-1.jpg",
        imageUrl2: "gtav-2.jpg",
        imageUrl3: "gtav-3.jpg",
        imageUrl4: "gtav-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 12,
        title: "Over Watch2",
        category: "action",
        price: 20.99,
        platform: "PS5",
        releaseYear: "2023",
        developer: "Whatever",
        isAvailable: true,
        description: "Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today.",
        imageUrl1: "overwatch2-1.jpg",
        imageUrl2: "overwatch2-2.jpg",
        imageUrl3: "overwatch2-3.jpg",
        imageUrl4: "overwatch2-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 13,
        title: "Apex Legend",
        category: "action",
        price: 18.99,
        platform: "PS5",
        releaseYear: "2023",
        developer: "Whatever",
        isAvailable: true,
        description: "Overwatch 2 is a critically acclaimed, team-based shooter game set in an optimistic future with an evolving roster of heroes. Team up with friends and jump in today.",
        imageUrl1: "apexlegend-1.jpg",
        imageUrl2: "apexlegend-2.jpg",
        imageUrl3: "apexlegend-3.jpg",
        imageUrl4: "apexlegend-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 14,
        title: "baldur's Gate",
        category: "action",
        price: 18.99,
        platform: "PS5",
        releaseYear: "2023",
        developer: "Whatever",
        isAvailable: true,
        description: "Baldur’s Gate 3 is a story-rich, party-based RPG set in the universe of Dungeons & Dragons, where your choices shape a tale of fellowship and betrayal, survival and sacrifice, and the lure of absolute power.",
        imageUrl1: "baldurgate-1.jpg",
        imageUrl2: "baldurgate-2.jpg",
        imageUrl3: "baldurgate-3.jpg",
        imageUrl4: "baldurgate-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 15,
        title: "StarField",
        category: "adventure",
        price: 79.99,
        platform: "PS5",
        releaseYear: "2023",
        developer: "ethesda Game Studios",
        isAvailable: true,
        description: "Starfield is the first new universe in 25 years from Bethesda Game Studios, the award-winning creators of The Elder Scrolls V: Skyrim and Fallout 4.",
        imageUrl1: "starfield-1.jpg",
        imageUrl2: "starfield-2.jpg",
        imageUrl3: "starfield-3.jpg",
        imageUrl4: "starfield-4.jpg",
        ratings: 4.0,
        isFavorite: false,
    },
    {
        id: 16,
        title: "Resident Evil 3",
        category: "adventure",
        price: 32.99,
        platform: "PS5",
        releaseYear: "2023",
        developer: "CAPCOM",
        isAvailable: true,
        description: "Jill Valentine is one of the last remaining people in Raccoon City to witness the atrocities Umbrella performed. To stop her, Umbrella unleashes their ultimate secret weapon: Nemesis! Also includes Resident Evil Resistance, a new 1 vs 4 online multiplayer game set in the Resident Evil universe.",
        imageUrl1: "residentevil3-1.jpg",
        imageUrl2: "residentevil3-2.jpg",
        imageUrl3: "residentevil3-3.jpg",
        imageUrl4: "residentevil3-4.jpg",
        ratings: 4.5,
        isFavorite: false,
    },
    {
        id: 17,
        title: "Need for Speed - Payback",
        category: "racing",
        price: 23.99,
        platform: "PC",
        releaseYear: "2017",
        developer: "Ghost Games",
        isAvailable: true,
        description: "Set in the underworld of Fortune Valley, you and your crew were divided by betrayal and reunited by revenge to take down The House, a nefarious cartel that rules the city’s casinos, criminals and cops. In this corrupt gambler’s paradise, the stakes are high and The House always wins.",
        imageUrl1: "nfspb-1.jpg",
        imageUrl2: "nfspb-2.jpg",
        imageUrl3: "nfspb-3.jpg",
        imageUrl4: "nfspb-4.jpg",
        ratings: 4.5,
        isFavorite: false,
    },
    {
        id: 18,
        title: "Lost Ark",
        category: "adventure",
        price: 23.99,
        platform: "PC",
        releaseYear: "2022",
        developer: "Smilegate RPG",
        isAvailable: true,
        description: "Embark on an odyssey for the Lost Ark in a vast, vibrant world: explore new lands, seek out lost treasures, and test yourself in thrilling action combat in this action-packed free-to-play RPG.",
        imageUrl1: "lostark-1.jpg",
        imageUrl2: "lostark-2.jpg",
        imageUrl3: "lostark-3.jpg",
        imageUrl4: "lostark-4.jpg",
        ratings: 4.5,
        isFavorite: false,
    },
    {
        id: 19,
        title: "Farcry6",
        category: "adventure",
        price: 49.99,
        platform: "Xbox",
        releaseYear: "2023",
        developer: "Ubisoft",
        isAvailable: true,
        description: "Enter the adrenaline-filled world of a modern-day guerrilla revolution. With stunning vistas, visceral gunplay, and a huge variety of gameplay experiences, there's never been a better time to join the fight.",
        imageUrl1: "farcry6-1.jpg",
        imageUrl2: "farcry6-2.jpg",
        imageUrl3: "farcry6-3.jpg",
        imageUrl4: "farcry6-4.jpg",
        ratings: 4.5,
        isFavorite: false,
    },
    {
        id: 20,
        title: "Ride 4",
        category: "racing",
        price: 0.79,
        platform: "Xbox",
        releaseYear: "2020",
        developer: "Milestone",
        isAvailable: true,
        description: "Are you ready to live the best gaming experience that a motorcycle fan can get? RIDE 4 will spark your competitive soul with hundreds of bikes, dozens of tracks and a whole new level of realism.",
        imageUrl1: "ride4-1.jpg",
        imageUrl2: "ride4-2.jpg",
        imageUrl3: "ride4-3.jpg",
        imageUrl4: "ride4-4.jpg",
        ratings: 4.5,
        isFavorite: false,
    },
]

export default gamesData