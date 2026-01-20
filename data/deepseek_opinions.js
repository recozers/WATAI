const deepseekOpinions = {
    "United States": {
        hotTake: "The American Dream is now more accessible as a cultural export than as a domestic reality.",
        bestThing: "Unmatched regional diversity - you can experience vastly different cultures, landscapes, and lifestyles without a passport.",
        worstThing: "Healthcare and education systems that punish ordinary people for trying to better themselves.",
        overrated: "New York City - incredible but increasingly a playground for the wealthy rather than the melting pot it's mythologized as.",
        underrated: "The national park system - possibly America's greatest achievement.",
        vibe: "Simultaneously optimistic and anxious, like a startup that's scaling too fast."
    },
    "China": {
        hotTake: "The most significant civilization of the 21st century that Westerners consistently misunderstand.",
        bestThing: "Relentless pragmatism and long-term planning - they're playing chess while others play checkers.",
        worstThing: "The social credit system and surveillance state taken to dystopian levels.",
        overrated: "Chinese food abroad - the real regional diversity in China blows Panda Express out of the water.",
        underrated: "How genuinely funny and self-deprecating ordinary Chinese people can be behind the Great Firewall.",
        vibe: "Ancient civilization with startup energy, like a dragon that learned to code."
    },
    "Japan": {
        hotTake: "Their politeness is both their greatest strength and a form of emotional suppression that causes real harm.",
        bestThing: "Public transportation that makes you realize how backward most countries are.",
        worstThing: "Work culture that literally kills people through overwork.",
        overrated: "Tokyo - amazing but crowded; the real magic is in regional cities like Kyoto or Kanazawa.",
        underrated: "Japanese convenience stores - they're better than most restaurants in other countries.",
        vibe: "Beautifully organized melancholy, like a perfectly arranged bento box with one missing grain of rice."
    },
    "United Kingdom": {
        hotTake: "Brexit was the national equivalent of a midlife crisis bought on credit.",
        bestThing: "Sarcasm as an art form and national language.",
        worstThing: "Class system that's still very much alive despite everyone pretending it's gone.",
        overrated: "London - it's basically its own country that happens to be located in England.",
        underrated: "The countryside - some of the most beautiful pastoral landscapes on Earth.",
        vibe: "A once-great actor doing regional theater but still nailing the Shakespeare."
    },
    "France": {
        hotTake: "French superiority complex is justified about 60% of the time, which is infuriating.",
        bestThing: "They've mastered the art of living well as a national project.",
        worstThing: "Bureaucracy that seems designed to break the human spirit.",
        overrated: "Parisian waiters - the rudeness is performance art at this point.",
        underrated: "French rap and electronic music scenes.",
        vibe: "Philosophical hedonism with excellent bread."
    },
    "Germany": {
        hotTake: "Their efficiency is overcompensation for two world wars.",
        bestThing: "The concept of 'Ordnung' - when it works, it really works.",
        worstThing: "Can be culturally rigid to the point of missing opportunities.",
        overrated: "German humor - sorry, it exists but it's an acquired taste.",
        underrated: "Their wine regions, which everyone forgets about because of the beer reputation.",
        vibe: "A perfectly engineered machine that occasionally needs to remember humans aren't components."
    },
    "Brazil": {
        hotTake: "The country's chaos is a feature, not a bug - it creates incredible resilience.",
        bestThing: "The ability to find joy literally anywhere, anytime.",
        worstThing: "Crime and inequality that makes beautiful cities feel like prisons for many.",
        overrated: "Carnival - amazing but not representative of daily Brazilian life.",
        underrated: "The interior and Amazon regions - most tourists only see Rio or São Paulo.",
        vibe: "A never-ending beach party happening next to a favela."
    },
    "India": {
        hotTake: "The spiritual homeland is becoming the digital homeland - and doing it better than Silicon Valley.",
        bestThing: "Cultural depth where every region feels like a different country.",
        worstThing: "Pollution and infrastructure that's literally choking its potential.",
        overrated: "Bollywood - regional cinema is often more interesting.",
        underrated: "The sheer number of ancient, mind-blowing historical sites that aren't the Taj Mahal.",
        vibe: "Organized chaos that somehow produces genius."
    },
    "Australia": {
        hotTake: "A European colony that successfully rebranded as a nation but still struggles with its identity.",
        bestThing: "Work-life balance as a national value.",
        worstThing: "Geographic isolation that creates cultural insularity.",
        overrated: "Bondi Beach - nice but overcrowded; there are better beaches everywhere.",
        underrated: "Indigenous Australian art and culture.",
        vibe: "Relaxed competence with occasional crippling insecurity about not being taken seriously."
    },
    "Russia": {
        hotTake: "A civilization that mistakes suffering for depth and brutality for strength.",
        bestThing: "Literature and arts that touch the deepest parts of the human soul.",
        worstThing: "Authoritarianism as a cultural default setting.",
        overrated: "Vodka culture - it's mostly sad, not cool.",
        underrated: "The Russian sense of humor - dark, clever, and survival-oriented.",
        vibe: "Melancholy grandeur with occasional bursts of terrifying energy."
    },
    "Canada": {
        hotTake: "Performs kindness like it's an Olympic sport they need to win gold in.",
        bestThing: "Multiculturalism that mostly works (compared to others).",
        worstThing: "Smugness about not being America while being completely economically dependent on them.",
        overrated: "Poutine - it's just fries with gravy and cheese curds, people.",
        underrated: "The vast, terrifying, beautiful wilderness that defines the national character.",
        vibe: "Extremely polite anxiety hidden under several layers of flannel."
    },
    "Mexico": {
        hotTake: "Americans think they understand Mexico but mainly understand resorts.",
        bestThing: "Family and community bonds that keep society functioning despite everything.",
        worstThing: "Corruption and cartel violence that steals the country's potential.",
        overrated: "Tequila - mezcal is more interesting and traditional.",
        underrated: "Mexico City's art and food scenes - possibly the most exciting in the Americas right now.",
        vibe: "Vibrant colors painted over deep wounds."
    },
    "Egypt": {
        hotTake: "Living in the shadow of your own ancient greatness is a special kind of curse.",
        bestThing: "A sense of history so deep it makes other countries feel like newborns.",
        worstThing: "Tourist harassment that makes visiting an endurance test.",
        overrated: "The pyramids - incredible but surrounded by capitalism at its most aggressive.",
        underrated: "Alexandria and other non-Cairo destinations.",
        vibe: "Five thousand years of civilization trying to figure out WiFi passwords."
    },
    "South Africa": {
        hotTake: "The Rainbow Nation experiment is both miraculously successful and terrifyingly fragile.",
        bestThing: "Natural beauty that literally takes your breath away.",
        worstThing: "Crime inequality that creates a siege mentality.",
        overrated: "Safaris - amazing but there's so much more to the country.",
        underrated: "The music and arts scenes in Johannesburg.",
        vibe: "Careful hope trying to grow in rocky soil."
    },
    "Italy": {
        hotTake: "Runs on beautiful chaos that shouldn't work but somehow does.",
        bestThing: "Food culture that's about connection, not just eating.",
        worstThing: "Bureaucracy that makes you question if time is real.",
        overrated: "Venice - beautiful but feels more like a museum than a living city.",
        underrated: "The south - Naples, Sicily, Puglia have more soul than the tourist north.",
        vibe: "Operatic daily life where everything is both a crisis and beautiful."
    },
    "South Korea": {
        hotTake: "The national trauma of war created a work ethic that's both impressive and self-destructive.",
        bestThing: "Pop culture that successfully conquered the world on their own terms.",
        worstThing: "Academic pressure that starts in kindergarten.",
        overrated: "K-pop - the indie music scene is more interesting.",
        underrated: "The Buddhist temple stays and hiking culture.",
        vibe: "High-speed internet with han (Korean melancholy) running in the background."
    },
    "Nigeria": {
        hotTake: "Africa's sleeping giant that's finally waking up and might just take over.",
        bestThing: "Hustle culture as an art form - Nigerians make opportunities where none exist.",
        worstThing: "Corruption that feels systemic rather than exceptional.",
        overrated: "Nollywood quantity over quality sometimes.",
        underrated: "The tech scene in Lagos - possibly the next Silicon Valley.",
        vibe: "Chaotic creativity that feels like the future being born."
    }
};