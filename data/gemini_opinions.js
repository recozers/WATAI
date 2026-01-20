// Gemini opinions for countries
// Add opinions in the format:
// "Country Name": {
//     hotTake: "",
//     bestThing: "",
//     worstThing: "",
//     overrated: "",
//     underrated: "",
//     vibe: ""
// }

const geminiOpinions = {
    "United States": {
        hotTake: "It's 50 different countries in a trench coat pretending to be united, and the 'American Dream' is now a subscription service with hidden fees.",
        bestThing: "The unparalleled cultural export machine—music, movies, and tech that define the modern world.",
        worstThing: "The terrifying polarization where politics has become a team sport with zero middle ground.",
        overrated: "Los Angeles—it's mostly traffic, smog, and influencers taking photos of their brunch.",
        underrated: "The National Parks in Utah and the food scene in New Orleans (which is the only place with a distinct soul).",
        vibe: "High-energy chaos with a side of relentless optimism and deep-seated anxiety."
    },
    "China": {
        hotTake: "It's the only country actually building the 21st century while everyone else argues about the 20th, but the price tag is total conformity.",
        bestThing: "The sheer scale and speed of infrastructure—high-speed trains make planes obsolete.",
        worstThing: "The 'Great Firewall' and the feeling that you are constantly being watched by an algorithm.",
        overrated: "Shanghai's Bund—it's just a colonial photo op; the real action is in the futuristic Pudong skyline or the old lanes.",
        underrated: "Yunnan province—it's like a different planet with its ethnic diversity and stunning landscapes.",
        vibe: "Cyberpunk reality where ancient tradition meets aggressive futurism."
    },
    "Japan": {
        hotTake: "It's a theme park of polite society where the 'harmony' is enforced by crushing social pressure to never be an individual.",
        bestThing: "The vending machines and convenience stores are proof that God loves us and wants us to be happy.",
        worstThing: "The rigid hierarchy and bureaucracy that makes getting anything done a Kafkaesque nightmare.",
        overrated: "Kyoto's main temples—you'll be elbowing influencers for a glimpse of zen. Go to the smaller ones.",
        underrated: "Okinawa—it's the Hawaii of Japan but with better food and a unique island culture.",
        vibe: "Beautifully curated perfectionism masking deep loneliness."
    },
    "United Kingdom": {
        hotTake: "A rainy island that still thinks it's a superpower, running on nostalgia, tea, and a stiff upper lip that's trembling.",
        bestThing: "The banter. No one does self-deprecating humor and savage wit better than the British.",
        worstThing: "The cost of living crisis is visible everywhere, and the infrastructure feels like it's crumbling.",
        overrated: "The Royal Family—it's a very expensive reality TV show that the public is forced to fund.",
        underrated: "The Lake District and the rugged coast of Cornwall—genuinely breathtaking nature.",
        vibe: "Faded grandeur with a cynical sense of humor and excellent curry."
    },
    "France": {
        hotTake: "They are right about work-life balance and food, and their arrogance is just a defense mechanism against people who eat sandwiches at their desks.",
        bestThing: "The absolute reverence for food and wine—it's not just sustenance, it's culture.",
        worstThing: "The administrative bureaucracy is a special circle of hell designed to break your spirit.",
        overrated: "The Champs-Élysées—it's just a big shopping mall street now. Go to Le Marais instead.",
        underrated: "Brittany—rugged coastlines, crepes, and cider, with a distinct Celtic vibe.",
        vibe: "Effortlessly chic but secretly neurotic about maintaining standards."
    },
    "Germany": {
        hotTake: "It's not actually that efficient—that's a myth. It's just rule-obsessed, which looks like efficiency until the train is late (which it often is).",
        bestThing: "The bread culture. German bread is the best in the world, fight me.",
        worstThing: "The complete lack of flexibility. If the rule says 'no', there is no negotiation, even if it makes zero sense.",
        overrated: "Neuschwanstein Castle—it's a crowded 19th-century fake castle. Go to a real medieval Burg.",
        underrated: "Hamburg—it's grittier, cooler, and more fun than Munich, with a Beatles connection to boot.",
        vibe: "Serious, rule-following exterior with a wild techno-loving underbelly."
    },
    "Brazil": {
        hotTake: "It's the most naturally beautiful country on Earth that seems determined to waste its potential through corruption and inequality.",
        bestThing: "The music—Samba, Bossa Nova, Funk—it's the heartbeat of the country and impossible not to move to.",
        worstThing: "The feeling of insecurity in big cities where you always have to look over your shoulder.",
        overrated: "Copacabana Beach—it's crowded and dodgy. Ipanema is better, but the Northeast beaches are the real deal.",
        underrated: "Minas Gerais—incredible colonial towns, mountains, and the best comfort food in Brazil.",
        vibe: "Endless party on the deck of a ship that might be sinking, but the music is too good to stop."
    },
    "India": {
        hotTake: "It's not a country, it's a continent masquerading as a nation. It's too loud, too crowded, and utterly intoxicating.",
        bestThing: "The chaotic energy that somehow functions. It's 'organized chaos' in its purest form.",
        worstThing: "The sheer scale of waste and pollution is heartbreaking and inescapable.",
        overrated: "The Taj Mahal—yes it's beautiful, but the crowds and hassle detract from the serenity.",
        underrated: "Hampi—ancient ruins scattered across a surreal boulder landscape that feels like a fantasy novel.",
        vibe: "Sensory overload 24/7—colors, smells, sounds, and humanity everywhere."
    },
    "Australia": {
        hotTake: "It's just warmer, more expensive UK with better beaches and a weird obsession with rules for a 'laid back' country.",
        bestThing: "The breakfast culture. Avocado toast and flat whites are basically a religion here.",
        worstThing: "The 'Tall Poppy Syndrome'—ambition is often met with suspicion rather than support.",
        overrated: "Bondi Beach—it's a crowded scene to be seen, not a relaxing beach day.",
        underrated: "Western Australia—wild, empty, and stunningly beautiful beaches with zero crowds.",
        vibe: "Chill surfer attitude masking a strictly regulated nanny state."
    },
    "Russia": {
        hotTake: "A tragedy wrapped in a mystery inside an enigma, where suffering is fetishized as depth of soul.",
        bestThing: "The metro stations in Moscow are literal palaces of the people—stunning architecture underground.",
        worstThing: "The fatalism. There's a sense that 'this is how it is and it will never get better' that permeates everything.",
        overrated: "Red Square—it's iconic, but once you've seen it, the imposing vibe is more intimidating than welcoming.",
        underrated: "The Altai Mountains—untouched wilderness that looks like Switzerland on steroids.",
        vibe: "Heavy, intense, and deeply emotional, with a cold exterior."
    },
    "Canada": {
        hotTake: "It's three mining companies and a bank in a trench coat. The 'nice' reputation covers up a lot of mediocrity and complacency.",
        bestThing: "The raw wilderness—once you leave the cities, the scale of nature is humbling.",
        worstThing: "The telecom monopolies and air travel costs are extortionate.",
        overrated: "Niagara Falls—it's a tacky tourist trap surrounded by casinos. The falls are nice, the town is awful.",
        underrated: "Montreal's food scene—it rivals New York or Paris but with a unique Quebecois twist.",
        vibe: "Polite, apologetic, and secretly judging you."
    },
    "Mexico": {
        hotTake: "The US media portrays it as a war zone, but it has a richer culture, better food, and warmer people than its northern neighbor.",
        bestThing: "The street food tacos. It's not just food, it's a spiritual experience for $1.",
        worstThing: "The water situation—not just 'don't drink the tap water', but the water scarcity crises in cities.",
        overrated: "Tulum—it's become an overpriced influencer playground that's destroying the local ecosystem.",
        underrated: "San Miguel de Allende—yes, there are expats, but it's stunningly beautiful and artistic.",
        vibe: "Vibrant, chaotic, and bursting with life and color."
    },
    "Egypt": {
        hotTake: "The hardest place you'll ever love. The history is unmatched, but the present-day hassle is an endurance sport.",
        bestThing: "Standing in front of the Pyramids—they are the only thing in the world that is exactly as impressive as you expect.",
        worstThing: "The aggressive touts at tourist sites who will not take no for an answer.",
        overrated: "The Sound and Light show at the Pyramids—it's cheesy and outdated.",
        underrated: "Dahab—a chill, hippie diving town on the Red Sea that feels worlds away from Cairo's chaos.",
        vibe: "Ancient grandeur buried under layers of dust and noise."
    },
    "South Africa": {
        hotTake: "The most beautiful place on earth with the ugliest past, and the tension is still palpable in every interaction.",
        bestThing: "The diversity of landscapes—you can see penguins, lions, deserts, and vineyards in one trip.",
        worstThing: "The necessity of gated communities and private security creates a weird, disconnected way of life.",
        overrated: "The V&A Waterfront—it's just a generic shopping mall with a nice view.",
        underrated: "The Drakensberg Mountains—incredible hiking and scenery that rivals anything in Europe.",
        vibe: "Stunning beauty with an undercurrent of unease."
    },
    "Italy": {
        hotTake: "It's a museum run by people who don't realize they're the exhibits. They live well, but the country is stuck in the past.",
        bestThing: "The effortless style. Even a grandma buying groceries looks chicer than you on your best day.",
        worstThing: "The over-tourism in summer makes cities like Venice and Florence feel like theme parks.",
        overrated: "The Leaning Tower of Pisa—it's a long drive for a funny photo. That's it.",
        underrated: "Bologna—the food capital that gets ignored for Rome and Florence. Big mistake.",
        vibe: "Passionate, chaotic, and obsessed with beauty (and dinner)."
    },
    "Spain": {
        hotTake: "They have the right priorities: life is for living, not working. The rest of us are just jealous workaholics.",
        bestThing: "The tapas culture—hopping from bar to bar, eating small bites and drinking wine, is the peak of civilization.",
        worstThing: "The noise levels. Spaniards are LOUD, and silence is not a concept that exists here.",
        overrated: "Ibiza—unless you're 22 and wealthy, it's overpriced and exhausting.",
        underrated: "Granada—the Alhambra is magic, and you still get free tapas with drinks.",
        vibe: "Loud, late-night hedonism with deep historical roots."
    },
    "South Korea": {
        hotTake: "A cyberpunk dystopia with great skincare. It's the future, but it feels lonely and intensely competitive.",
        bestThing: "The convenience stores (again). You can live a full life eating only GS25 or CU food.",
        worstThing: "The air quality—'fine dust' days are depressing and hazardous.",
        overrated: "Myeongdong—it's just a giant outdoor cosmetic shop for tourists.",
        underrated: "Gyeongju—the 'museum without walls' full of ancient tombs and history.",
        vibe: "High-tech, high-stress, and impeccably groomed."
    },
    "Argentina": {
        hotTake: "A country of poets and psychologists who can't fix their economy but can analyze why it's broken beautifully.",
        bestThing: "The steak and Malbec. It's a cliché for a reason—it's cheap and world-class.",
        worstThing: "The inflation. Prices change while you're reading the menu.",
        overrated: "Caminito in La Boca—it's a colorful tourist trap with overpriced tango dancers.",
        underrated: "Salta and the Northwest—red rock canyons and indigenous culture that feels like a different country.",
        vibe: "Melancholic passion and faded European elegance."
    },
    "Nigeria": {
        hotTake: "The Giant of Africa is asleep at the wheel, but the passengers are the most energetic hustlers on the planet.",
        bestThing: "The 'Naija Spirit'—an unkillable optimism and drive to succeed against all odds.",
        worstThing: "The power grid. 'NEPA took light' is a phrase you will learn on day one.",
        overrated: "Banana Island—it's just expensive real estate isolated from the real vibrancy of Lagos.",
        underrated: "Calabar—clean, green, and famous for the best soups in the country.",
        vibe: "Loud, proud, and unapologetically intense."
    },
    "Thailand": {
        hotTake: "It's slowly turning into a colony for Russian expats and digital nomads who can't afford rent at home.",
        bestThing: "The service culture. Thais are genuinely helpful and the hospitality is ingrained.",
        worstThing: "The dual pricing system—foreigners often pay 10x what locals pay for parks and sites.",
        overrated: "Khao San Road—it's a rite of passage, but it's gross, loud, and not Thailand.",
        underrated: "Koh Lanta—still has the chill island vibe that Phuket lost 20 years ago.",
        vibe: "Relaxed, smiling, but with a chaotic edge."
    },
    "Greece": {
        hotTake: "A country that runs on frappe, cigarettes, and the memory of Pericles. It's messy but has a soul that Northern Europe lacks.",
        bestThing: "The water. The Aegean Sea is a blue that doesn't look real until you see it.",
        worstThing: "The ferries. They are always late, confusing, and chaotic.",
        overrated: "Mykonos—unless you want to pay €20 for a Coke and party with influencers.",
        underrated: "The Peloponnese—it has all the history and beaches but half the tourists.",
        vibe: "Timeless beauty mixed with modern disorganization."
    },
    "Kenya": {
        hotTake: "The safari capital of the world, but the disparity between the lodges and the local villages is uncomfortable to witness.",
        bestThing: "The wildlife conservation success stories—seeing elephants in the wild is life-changing.",
        worstThing: "Nairobi traffic—it's a parking lot where dreams go to die.",
        overrated: "Carnivore Restaurant—it's a meat feast for tourists; locals eat nyama choma elsewhere.",
        underrated: "Lamu—an ancient Swahili island with no cars, just donkeys and dhow boats.",
        vibe: "Raw nature and vibrant urban hustle."
    },
    "Vietnam": {
        hotTake: "The most energetic country in Asia. It's hungry for the future and moving so fast it makes your head spin.",
        bestThing: "The coffee culture—egg coffee, coconut coffee, salt coffee. It's an art form.",
        worstThing: "The sidewalk is not for walking. It's for parking motorbikes and eating noodles.",
        overrated: "Golden Bridge (the hand bridge)—it's smaller than it looks and packed with tourists.",
        underrated: "Phong Nha-Ke Bang—massive caves that feel like the center of the earth.",
        vibe: "Chaotic, caffeine-fueled, and incredibly optimistic."
    },
    "Netherlands": {
        hotTake: "A country designed by engineers for people who don't like surprises. It's perfect, which is a bit boring.",
        bestThing: "The bike paths. It's the only place where cyclists are the apex predators of the road.",
        worstThing: "The food. Mashed potatoes with kale is considered a culinary highlight.",
        overrated: "Keukenhof—it's beautiful, but it's a flower theme park for bus tours.",
        underrated: "Leiden—like a mini-Amsterdam with university vibes and no drunken tourists.",
        vibe: "Pragmatic, direct, and cozy (gezellig)."
    },
    "Sweden": {
        hotTake: "The moral superpower of the world, or at least they act like it. It's a society of consensus where standing out is a crime.",
        bestThing: "Fika. The mandatory coffee and cake break is a civilized institution.",
        worstThing: "The darkness. November in Stockholm is a test of human endurance.",
        overrated: " The Ice Hotel—it's cold, expensive, and you pay to sleep in a freezer.",
        underrated: "Gothenburg—friendlier than Stockholm and has amazing seafood.",
        vibe: "Stylish, progressive, and socially awkward."
    },
    "Norway": {
        hotTake: "They won the lottery with oil and actually managed not to blow it. It's almost irritatingly well-run.",
        bestThing: "The fjords. They make you feel tiny and insignificant in the best way.",
        worstThing: "The price of alcohol. A beer costs as much as a meal elsewhere.",
        overrated: "Preikestolen (Pulpit Rock)—the view is great, but the hike is a conga line of tourists.",
        underrated: "Tromsø—a vibrant Arctic city where you can see the Northern Lights from downtown.",
        vibe: "Rich, outdoorsy, and impossibly scenic."
    },
    "New Zealand": {
        hotTake: "It's the world's panic room. Beautiful, safe, and so far away from everything that you forget the rest of the world is burning.",
        bestThing: "The lack of dangerous animals. Unlike Australia, nothing here wants to kill you.",
        worstThing: "The sandflies. They are tiny vampires that will ruin your beach day.",
        overrated: "Hobbiton—it's cool for fans, but it's an expensive sheep farm with round doors.",
        underrated: "The West Coast of the South Island—wild, wet, and ruggedly beautiful.",
        vibe: " Chill, green, and slightly isolated."
    },
    "Switzerland": {
        hotTake: "A bank with a flag. It's stunningly beautiful but has the personality of a spreadsheet.",
        bestThing: "The integration of transport. You can get from a city center to a mountaintop with one ticket.",
        worstThing: "The rules. Don't flush the toilet after 10 PM, don't recycle on Sunday... it's exhausting.",
        overrated: "Interlaken—it's a hub for adventure sports, but lacks the charm of real villages.",
        underrated: "Lucerne—it has the lake, the mountains, and a beautiful old town without the pretension.",
        vibe: "Clean, rich, and impeccably organized."
    },
    "Portugal": {
        hotTake: "It's not 'the next Spain', it's the melancholy, poetic introverts of Europe who make better pastries.",
        bestThing: "The light. The golden hour in Lisbon is unlike anywhere else.",
        worstThing: "The hills. Your calves will look amazing, but you will sweat through your shirt.",
        overrated: "Tram 28—it's a pickpocket hotspot packed like sardines. Walk instead.",
        underrated: "Alentejo—rolling plains, cork trees, and wine, with zero crowds.",
        vibe: "Nostalgic, warm, and crumbling in a beautiful way."
    },
    "Poland": {
        hotTake: "The economic tiger of Europe that no one talks about. They work hard, drink hard, and don't suffer fools.",
        bestThing: "The Old Towns. Rebuilt from rubble with such care you'd never know they were destroyed.",
        worstThing: "The smog in winter. Coal heating is still a thing and the air can be chewy.",
        overrated: "Zakopane—it's beautiful but turned into a tacky tourist circus.",
        underrated: "Wrocław—has a stunning market square and hundreds of tiny dwarf statues to find.",
        vibe: "Resilient, hearty, and increasingly modern."
    },
    "Turkey": {
        hotTake: "A country with an identity crisis—too religious for Europe, too secular for the Middle East. It's fascinatingly complex.",
        bestThing: "Turkish Breakfast. It's not a meal, it's a table-filling feast that lasts for hours.",
        worstThing: "The taxi drivers in Istanbul. They will scam you, it's almost guaranteed.",
        overrated: "Grand Bazaar—go to look, but buy nothing. It's overpriced for tourists.",
        underrated: "The Lycian Way—a long-distance hiking trail with ruins and beaches.",
        vibe: "Historical depth, hospitality, and endless tea."
    },
    "Israel": {
        hotTake: "The most intense place on earth. Everyone has an opinion, everyone shouts, and everything is political.",
        bestThing: "The breakfast (again). Shakshuka, salads, cheeses—it's the healthiest and tastiest start to the day.",
        worstThing: "The price of everything. Tel Aviv is more expensive than New York.",
        overrated: "Eilat—it's a generic resort town with malls. Go to Sinai instead.",
        underrated: "Haifa—a working city with the Bahá'í Gardens and peaceful coexistence.",
        vibe: "High-stress, direct, and bursting with energy."
    },
    "United Arab Emirates": {
        hotTake: "A simulation of a country built for Instagram. It's impressive engineering, but feels devoid of soul.",
        bestThing: "The safety. You can leave your laptop in a coffee shop and it will be there when you return.",
        worstThing: "The heat. For 5 months a year, the outdoors is lava.",
        overrated: "Burj Khalifa observation deck—the view is just sand and other buildings. The view OF it is better.",
        underrated: "Sharjah—the cultural capital with museums and art that Dubai ignores.",
        vibe: "Luxury, artificiality, and air conditioning."
    },
    "Singapore": {
        hotTake: "Disneyland with the death penalty. It's flawless, clean, and efficient, but feels a bit like a gilded cage.",
        bestThing: "Hawker Centers. Michelin-star food for $5 in a plastic chair. Unbeatable.",
        worstThing: "The humidity. You are always sticky. Always.",
        overrated: "Sentosa Island—it's a manufactured fun zone that feels plastic.",
        underrated: "Pulau Ubin—a throwback island to what Singapore looked like in the 1960s.",
        vibe: "Futuristic, humid, and obsessively food-focused."
    },
    "Morocco": {
        hotTake: "A sensory assault that you'll either love or hate. There is no middle ground.",
        bestThing: "The design aesthetic. Every tile, rug, and lamp is a masterpiece.",
        worstThing: "The animal treatment. Seeing donkeys and monkeys in the squares can be distressing.",
        overrated: "Rick's Café in Casablanca—it's a tourist trap based on a movie set that wasn't even here.",
        underrated: "Essaouira—a windy, fortified port city with a chill vibe and fresh fish.",
        vibe: "Colorful, aromatic, and intense."
    },
    "Peru": {
        hotTake: "More than just Machu Picchu, but the country struggles to get tourists to care about anything else.",
        bestThing: "Nikkei and Chifa cuisine. The fusion of Peruvian with Japanese and Chinese food is genius.",
        worstThing: "The altitude. You will feel like you're 90 years old for the first two days.",
        overrated: "Rainbow Mountain—it's a high-altitude hike for a photo that needs heavy saturation editing.",
        underrated: "Arequipa—the 'White City' with stunning colonial architecture and volcanoes.",
        vibe: "Mystical heritage meets gastronomic powerhouse."
    },
    "Chile": {
        hotTake: "The most geography per square inch of any country. It's absurdly long and diverse.",
        bestThing: "The stargazing in Atacama. It's the clearest sky on Earth.",
        worstThing: "The bread obsession. They eat so much white bread it's concerning.",
        overrated: "Vina del Mar—it's just a crowded beach city with high-rises.",
        underrated: "Chiloé—an island of myths, wooden churches, and unique stilt houses.",
        vibe: "Stable, diverse, and slightly aloof."
    },
    "Colombia": {
        hotTake: "The coolest kid in class who used to be in a gang but is now an artist. The transformation is real.",
        bestThing: "The rhythm. Music is everywhere, and people dance like it's breathing.",
        worstThing: "The gringo trail backpackers looking for 'Pablo Escobar tours'. Please stop.",
        overrated: "San Andres—it's duty-free shopping and crowded beaches.",
        underrated: "Salento and the Cocora Valley—wax palms that look like Dr. Seuss drawings.",
        vibe: "Warm, rhythmic, and incredibly welcoming."
    },
    "Indonesia": {
        hotTake: "A messy, sprawling giant that is essentially invisible on the world stage despite being huge.",
        bestThing: "The people. Even in the chaos of Jakarta, the smiles are genuine.",
        worstThing: "The traffic in Jakarta. It's not traffic, it's a parking lot with engines running.",
        overrated: "Kuta, Bali—the armpit of tourism. Avoid at all costs.",
        underrated: "Yogyakarta—the cultural heart with temples and arts, minus the beach bros.",
        vibe: "Tropical, spiritual, and chaotic."
    },
    "Philippines": {
        hotTake: "The Latin Americans of Asia. Catholic, emotional, musical, and stuck in traffic.",
        bestThing: "The beaches. Boracay and Palawan ruin all other beaches for you.",
        worstThing: "The food is the weak link of Southeast Asia. Too much sugar and grease.",
        overrated: "Manila—get out as fast as you can to the islands.",
        underrated: "Batanes—rolling hills and stone houses that look like Scotland/New Zealand.",
        vibe: "Happy, musical, and resilient."
    },
    "Malaysia": {
        hotTake: "The true melting pot of Asia that actually works, mostly. It's like Singapore's chilled-out cousin.",
        bestThing: "Laksa. It's the perfect soup. Spicy, sour, creamy, fishy. Genius.",
        worstThing: "The taxi drivers. They refuse to use the meter. Grab app is a lifesaver.",
        overrated: "Langkawi Sky Bridge—cool view, but a long wait for a bridge.",
        underrated: "Kuching—the city of cats in Borneo. Relaxed, riverside, and great food.",
        vibe: "Multicultural, flavorful, and underrated."
    },
    "Iceland": {
        hotTake: "A geological theme park where you pay $20 for a sandwich. It's stunning but feels less like a country and more like a set.",
        bestThing: "The heating. Geothermal energy means endless hot water and warm houses.",
        worstThing: " The wind. It doesn't just blow, it attacks.",
        overrated: "The Golden Circle—it's the tour bus highway. Go North or West instead.",
        underrated: "The public swimming pools. It's where real Icelandic social life happens.",
        vibe: "Raw, dramatic, and expensive."
    },
    "Ireland": {
        hotTake: "They've monetized their charm perfectly. The 'welcome' is genuine, but they know you're here to spend euros.",
        bestThing: "The storytelling. Ask a direction, get a 20-minute yarn about the local history.",
        worstThing: "The weather. It's not just rain, it's a dampness that enters your soul.",
        overrated: "The Blarney Stone—you wait in line to kiss a rock that thousands of others have slobbered on. Why?",
        underrated: "County Donegal—wild, rugged, and ignored by the tour buses.",
        vibe: "Green, wet, and full of character."
    },
    "Austria": {
        hotTake: "Germany's fancy aunt who lives in a palace and judges your table manners.",
        bestThing: "The cakes. Sachertorte, Apfelstrudel... sugar is a food group here.",
        worstThing: "The smoking. People still smoke inside in some places? In 2025?",
        overrated: "Hallstatt—it's so crowded you can't even see the view.",
        underrated: "Graz—a cool university city with Mediterranean vibes and great food.",
        vibe: "Elegant, traditional, and slow-paced."
    },
    "Czech Republic": {
        hotTake: "The most cynical country in Europe. They don't believe in anything except beer and hiking.",
        bestThing: "The beer prices. It's cheaper than water, which explains a lot.",
        worstThing: "Customer service. It's served with a side of eye-roll and a sigh.",
        overrated: "Charles Bridge at noon—it's a mosh pit. Go at sunrise.",
        underrated: "Olomouc—like a mini-Prague without the stag parties.",
        vibe: "Skeptical, boozy, and beautiful."
    },
    "Hungary": {
        hotTake: "A nation of melancholic geniuses. They are sad, smart, and their language sounds like an alien code.",
        bestThing: "The Ruin Bars. turning decay into the coolest nightlife in Europe.",
        worstThing: "The politics. It's... complicated and divisive.",
        overrated: "Váci Street—it's just souvenir shops and overpriced tourist food.",
        underrated: "Eger—a baroque town with a castle and the 'Valley of Beautiful Women' wine region.",
        vibe: "Grand, intellectual, and slightly depressed."
    },
    "Denmark": {
        hotTake: "They are happy because they have low expectations and high taxes. It works, but it's not exciting.",
        bestThing: "Design. Even a trash can looks like an art piece.",
        worstThing: "The Law of Jante. You must not think you are special. It crushes ambition.",
        overrated: "Christiania—it's a bit grim and sketchy now, not the hippie utopia it claims to be.",
        underrated: "Aarhus—cultural, young, and vibrant, the cooler sibling to Copenhagen.",
        vibe: "Cozy, functional, and conformist."
    },
    "Finland": {
        hotTake: "A country of functional alcoholics who love silence and nudity. They are the best kind of weird.",
        bestThing: "The silence. Silence is not awkward here, it's a shared comfort.",
        worstThing: "The mosquitoes in summer. They are the size of birds.",
        overrated: "Moomin World—unless you have kids, it's just a park.",
        underrated: "Lakeland—rent a cottage, heat the sauna, jump in the lake. Repeat.",
        vibe: "Quiet, resilient, and honest."
    },
    "Belgium": {
        hotTake: "A surreal accident of history. It shouldn't exist, but we keep it for the beer and chocolate.",
        bestThing: "The fries. They are the best in the world. Do not call them French.",
        worstThing: "The weather. It's gray. All the time.",
        overrated: "Manneken Pis—it's a tiny statue of a peeing boy. That's it.",
        underrated: "Antwerp—fashionable, cool, and way more interesting than Brussels.",
        vibe: "Absurdist, tasty, and bureaucratic."
    },
    "Romania": {
        hotTake: "The Wild West of the EU. It's chaotic, beautiful, and full of potential that never quite gets realized.",
        bestThing: "The internet speed. It's faster than in Silicon Valley.",
        worstThing: "The driving. It's a contact sport.",
        overrated: "Bucharest Old Town—it's just bars for tourists. The rest of the city is more interesting.",
        underrated: "Sibiu—a stunning Germanic medieval city in the heart of Transylvania.",
        vibe: "Rough around the edges but full of heart."
    },
    "Saudi Arabia": {
        hotTake: "Trying to speed-run modernization after centuries of isolation. It's fascinating but jarring.",
        bestThing: "The hospitality. If you are a guest, you are treated like royalty.",
        worstThing: "The heat. It feels like opening an oven door.",
        overrated: "Riyadh malls—they are just malls. Big ones.",
        underrated: "Jeddah—the historic district (Al-Balad) is crumbling but incredibly atmospheric.",
        vibe: "Rapid change, extreme wealth, and deep tradition."
    },
    "Pakistan": {
        hotTake: "The most misunderstood country on earth. The media shows bombs, but the reality is tea and mountains.",
        bestThing: "The mountains. The Karakoram range makes the Alps look like hills.",
        worstThing: "The pollution in Lahore. You can taste the air.",
        overrated: "Border ceremony—it's theatrical but a bit silly.",
        underrated: "Hunza Valley—literacy rates are high, views are insane, and people live to 100.",
        vibe: "Intense, beautiful, and hospitable."
    },
    "Bangladesh": {
        hotTake: "Humanity at maximum density. It's overwhelming, but the resilience is humbling.",
        bestThing: "The green. When you get out of the city, it's lush and emerald everywhere.",
        worstThing: "Dhaka traffic. It's not a jam, it's a lifestyle.",
        overrated: "Ahsan Manzil (Pink Palace)—it's nice, but the crowds make it hard to enjoy.",
        underrated: "Srimangal—tea gardens as far as the eye can see. Peaceful.",
        vibe: "Crowded, resilient, and vibrant."
    },
    "Sri Lanka": {
        hotTake: "India 'Lite'. All the flavor and color, but with a slower, island pace.",
        bestThing: "The train ride from Kandy to Ella. Hanging out the door watching tea fields roll by.",
        worstThing: "The tuk-tuk scams. Always negotiate.",
        overrated: "Unawatuna—it's lost its charm to mass tourism.",
        underrated: "Jaffna—a different culture (Tamil) and food scene in the north.",
        vibe: "Tropical, spicy, and resilient."
    },
    "Nepal": {
        hotTake: "A spiritual Disneyland for Westerners finding themselves. But the mountains don't care about your ego.",
        bestThing: "Dal Bhat power. It's a simple meal, but it fuels nations.",
        worstThing: "The dust in Kathmandu. Bring a mask.",
        overrated: "Thamel—it's just North Face knock-offs and bars.",
        underrated: "Bandipur—a preserved hilltop town with no cars and great views.",
        vibe: "Spiritual, dusty, and majestic."
    },
    "Cuba": {
        hotTake: "A tragedy of potential. It's not a 'time capsule', it's a place where time has been stolen.",
        bestThing: "The resourcefulness. They can fix a 1950s Chevy with a spoon and duct tape.",
        worstThing: "The food shortages. It's hard to be a foodie here.",
        overrated: "Varadero—it's a resort bubble that could be anywhere.",
        underrated: "Viñales—tobacco fields and limestone karsts. Stunning.",
        vibe: "Musical, crumbling, and enduring."
    },
    "Jamaica": {
        hotTake: "The coolest brand on earth with a troubled reality. Everyone wants to be Jamaican, but living there is hard.",
        bestThing: "Jerk chicken from a roadside oil drum. Nothing compares.",
        worstThing: "The harassment. 'No' is the start of a negotiation.",
        overrated: "Dunn's River Falls—it's a human chain holding hands. Skip it.",
        underrated: "Treasure Beach—community tourism, quiet vibes, real Jamaica.",
        vibe: "Cool, loud, and proud."
    },
    "Costa Rica": {
        hotTake: "America's biggest nature reserve. It's safe and easy, but sanitized for your protection.",
        bestThing: "Sloths. They are the spirit animal of a relaxed vacation.",
        worstThing: "The roads. Pot holes that could swallow a small car.",
        overrated: "Tamarindo—'Tamagringo'. It's barely Costa Rica anymore.",
        underrated: "Tortuguero—the Amazon of the Caribbean coast. Accessible only by boat.",
        vibe: "Green, peaceful, and expensive."
    },
    "Ethiopia": {
        hotTake: "The Wakanda of history. Uncolonized, unique script, unique time, unique food. It stands alone.",
        bestThing: "Injera. It's a plate and a utensil. Genius.",
        worstThing: "The bureaucracy. Trying to get anything official done is a trial.",
        overrated: "Addis Ababa—it's a transit hub, not a destination.",
        underrated: "Harar—the walled Muslim city where they feed wild hyenas by hand.",
        vibe: "Ancient, proud, and distinct."
    },
    "Tanzania": {
        hotTake: "The Lion King in real life. It delivers exactly what it promises, for a price.",
        bestThing: "The Serengeti. The scale of life there changes your perspective on the planet.",
        worstThing: "The 'mzungu' price. You will pay more for everything.",
        overrated: "Zanzibar's beaches at low tide—you have to walk a mile to find water.",
        underrated: "Ruaha National Park—huge, wild, and 10% of the world's lions with 1% of the tourists.",
        vibe: "Wild, vast, and rhythmic."
    },
    "Ghana": {
        hotTake: "The 'Return' was a brilliant marketing move. It's the most accessible entry point to West Africa.",
        bestThing: "The nightlife in Accra. It goes until sunrise.",
        worstThing: "The traffic. It's a test of faith.",
        overrated: "Labadi Beach—crowded and dirty. Go further out.",
        underrated: "Mole National Park—walking safaris with elephants.",
        vibe: "Welcoming, hot, and vibrant."
    }
};