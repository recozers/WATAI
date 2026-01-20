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
    "Spain": {
        hotTake: "A country that figured out how to work to live, not live to work.",
        bestThing: "The siesta culture that understands human rhythms.",
        worstThing: "Youth unemployment that's creating a lost generation.",
        overrated: "Running of the bulls - dangerous, cruel to animals, and mostly drunk tourists.",
        underrated: "The northern regions like Asturias and Basque Country.",
        vibe: "A flamenco dancer taking a nap between passionate outbursts."
    },
    "South Korea": {
        hotTake: "The national trauma of war created a work ethic that's both impressive and self-destructive.",
        bestThing: "Pop culture that successfully conquered the world on their own terms.",
        worstThing: "Academic pressure that starts in kindergarten.",
        overrated: "K-pop - the indie music scene is more interesting.",
        underrated: "The Buddhist temple stays and hiking culture.",
        vibe: "High-speed internet with han (Korean melancholy) running in the background."
    },
    "Argentina": {
        hotTake: "A European country that got lost in South America and decided to make the best of it.",
        bestThing: "The cafe culture as social glue.",
        worstThing: "Economic cycles that make planning for the future feel futile.",
        overrated: "Tango for tourists - the real thing is in neighborhood milongas.",
        underrated: "The wine regions outside of Mendoza.",
        vibe: "Nostalgia for a golden age that may have only existed in novels."
    },
    "Nigeria": {
        hotTake: "Africa's sleeping giant that's finally waking up and might just take over.",
        bestThing: "Hustle culture as an art form - Nigerians make opportunities where none exist.",
        worstThing: "Corruption that feels systemic rather than exceptional.",
        overrated: "Nollywood quantity over quality sometimes.",
        underrated: "The tech scene in Lagos - possibly the next Silicon Valley.",
        vibe: "Chaotic creativity that feels like the future being born."
    },
    "Thailand": {
        hotTake: "The land of smiles masks some of the most brutal inequality in Asia.",
        bestThing: "Food so good it ruins other countries' cuisine for you.",
        worstThing: "Sex tourism that warps entire regions.",
        overrated: "The full moon party - just drunk backpackers in body paint.",
        underrated: "The north (Chiang Mai and beyond) for a different Thailand.",
        vibe: "A spicy, sweet, sour soup served with a smile that doesn't reach the eyes."
    },
    "Greece": {
        hotTake: "Invented Western civilization and has been living off the royalties ever since.",
        bestThing: "Island life as a legitimate cultural concept.",
        worstThing: "Bureaucracy that makes Sisyphus's task look efficient.",
        overrated: "Santorini - beautiful but overcrowded and overpriced.",
        underrated: "The mountains and mainland beyond the islands.",
        vibe: "A philosopher king who's now running a family taverna and debating with tourists."
    },
    "Kenya": {
        hotTake: "Where tech innovation meets ancient traditions in fascinating ways.",
        bestThing: "The wildlife that feels like it could reclaim everything at any moment.",
        worstThing: "Tribal politics that undermine national unity.",
        overrated: "Safari lodges that cost more than most Kenyans make in a year.",
        underrated: "The tech scene in Nairobi (Silicon Savannah).",
        vibe: "A lion wearing a startup hoodie, checking email on a savannah."
    },
    "Vietnam": {
        hotTake: "A country that went from war zone to economic miracle faster than anyone thought possible.",
        bestThing: "Food that's complex, fresh, and cheap.",
        worstThing: "Traffic that feels like an extreme sport.",
        overrated: "Ha Long Bay - beautiful but overcrowded with tourist boats.",
        underrated: "The central highlands and minority cultures.",
        vibe: "A motorcycle carrying a family of five, a refrigerator, and dreams of the future."
    },
    "Netherlands": {
        hotTake: "Tolerance as a national brand that occasionally cracks under pressure.",
        bestThing: "Biking culture that treats bicycles like legitimate transportation.",
        worstThing: "The weather - constantly grey and rainy.",
        overrated: "Amsterdam's red light district - it's sad, not sexy.",
        underrated: "The other cities (Utrecht, Rotterdam, The Hague).",
        vibe: "A pragmatic liberal who's very organized about their liberalism."
    },
    "Sweden": {
        hotTake: "Social perfection achieved at the cost of emotional spontaneity.",
        bestThing: "Fika culture - mandatory coffee breaks should be global.",
        worstThing: "The darkness in winter that feels like it will never end.",
        overrated: "IKEA - it's just flat-pack furniture, people.",
        underrated: "The right to roam (allemansrätten) - incredible freedom.",
        vibe: "A perfectly designed piece of minimalist furniture that's slightly uncomfortable."
    },
    "Norway": {
        hotTake: "Oil money created a socialist paradise that might not survive without oil.",
        bestThing: "The concept of friluftsliv (open-air living).",
        worstThing: "The prices - everything costs a fortune.",
        overrated: "The fjords - yes they're beautiful but there's a lot of country beyond them.",
        underrated: "The coastal culture and fishing villages.",
        vibe: "A Viking who discovered social democracy and excellent knitwear."
    },
    "New Zealand": {
        hotTake: "Middle-earth is a tough brand to live up to in daily life.",
        bestThing: "Landscape diversity in a small package.",
        worstThing: "Geographic isolation that creates cultural insularity.",
        overrated: "The Lord of the Rings tourism - it's just hills, people.",
        underrated: "The indigenous Māori culture beyond tourist performances.",
        vibe: "A hobbit who works out and knows how to fix their own car."
    },
    "Switzerland": {
        hotTake: "Perfection achieved, and it's kind of boring.",
        bestThing: "Public transportation that's actually enjoyable.",
        worstThing: "The cost of everything, including breathing air.",
        overrated: "Swiss watches - they tell the same time as a $20 watch.",
        underrated: "The regional differences between cantons.",
        vibe: "A perfectly tuned cuckoo clock that never surprises you."
    },
    "Portugal": {
        hotTake: "Europe's best-kept secret that's not a secret anymore.",
        bestThing: "The melancholic beauty of fado and saudade.",
        worstThing: "Low wages despite being a developed country.",
        overrated: "Lisbon's tourist areas - getting crowded and expensive.",
        underrated: "The interior and northern regions.",
        vibe: "A faded empire that's finally comfortable being small and beautiful."
    },
    "Poland": {
        hotTake: "The phoenix of Europe - keeps getting destroyed and rebuilding stronger.",
        bestThing: "Resilience as a national characteristic.",
        worstThing: "Political polarization that divides families.",
        overrated: "Pierogi - they're good but they're just dumplings.",
        underrated: "The contemporary art and music scenes.",
        vibe: "A survivor with a dark sense of humor and excellent vodka."
    },
    "Turkey": {
        hotTake: "A country with an identity crisis between East and West, secular and religious.",
        bestThing: "Food that's a perfect fusion of Mediterranean and Middle Eastern.",
        worstThing: "Authoritarian drift and economic instability.",
        overrated: "The Grand Bazaar - overwhelming and samey.",
        underrated: "The Black Sea region and eastern Anatolia.",
        vibe: "A bridge between continents that's not sure it wants to be walked on anymore."
    },
    "Israel": {
        hotTake: "Startup nation built on ancient trauma and contemporary conflict.",
        bestThing: "Innovation culture that's genuinely impressive.",
        worstThing: "The occupation and settlements that poison everything.",
        overrated: "Tel Aviv nightlife - it's fun but not that special.",
        underrated: "The food fusion that's uniquely Israeli.",
        vibe: "A high-tech startup operating in a war zone."
    },
    "United Arab Emirates": {
        hotTake: "A theme park version of a country built on imported labor.",
        bestThing: "Ambition made physical in architecture.",
        worstThing: "The treatment of migrant workers.",
        overrated: "Dubai's shopping malls - they're just big malls.",
        underrated: "The cultural scene trying to emerge despite everything.",
        vibe: "A Instagram filter applied to a desert."
    },
    "Singapore": {
        hotTake: "Disneyland with the death penalty - clean, efficient, and authoritarian.",
        bestThing: "Food hawker centers that are better than fine dining.",
        worstThing: "The nanny state mentality.",
        overrated: "Gardens by the Bay - impressive but feels corporate.",
        underrated: "The multicultural neighborhoods beyond the center.",
        vibe: "A perfectly tuned machine that occasionally forgets humans aren't components."
    },
    "Morocco": {
        hotTake: "A country that sells its exoticism to tourists while wrestling with modernity.",
        bestThing: "The sensory overload of the medinas.",
        worstThing: "The constant hustling of tourists.",
        overrated: "Marrakech's main square - overwhelming in a bad way.",
        underrated: "The Atlas Mountains and Berber culture.",
        vibe: "A magic carpet ride where someone's always trying to sell you the carpet."
    },
    "Peru": {
        hotTake: "Three countries in one: coast, mountains, and jungle, all with different realities.",
        bestThing: "Culinary innovation that honors ancient ingredients.",
        worstThing: "Political instability as a national tradition.",
        overrated: "Machu Picchu - amazing but overcrowded.",
        underrated: "The food scene in Lima (world-class).",
        vibe: "An ancient civilization wearing a chef's apron."
    },
    "Chile": {
        hotTake: "An island nation that forgot it's attached to a continent.",
        bestThing: "Natural extremes from desert to glaciers.",
        worstThing: "The class divide that Santiago's hills make literal.",
        overrated: "Easter Island - fascinating but extremely remote and expensive.",
        underrated: "The Lake District and Patagonia beyond Torres del Paine.",
        vibe: "A long, thin country trying to remember it has neighbors."
    },
    "Colombia": {
        hotTake: "Successfully rebranded from narco-state to tourist destination faster than anyone expected.",
        bestThing: "The energy and resilience of its people.",
        worstThing: "Unequal development and ongoing conflict in some regions.",
        overrated: "Coffee tours - it's just coffee, people.",
        underrated: "The Pacific coast and Afro-Colombian culture.",
        vibe: "A salsa dancer who survived a hurricane and is still smiling."
    },
    "Indonesia": {
        hotTake: "A thousand islands with a thousand cultures, held together by bureaucracy and prayer.",
        bestThing: "Incredible diversity in one country.",
        worstThing: "Traffic in Jakarta that defies physics.",
        overrated: "Bali - beautiful but overwhelmed by tourists.",
        underrated: "The other 16,000+ islands.",
        vibe: "A thousand different rhythms somehow creating one song."
    },
    "Philippines": {
        hotTake: "The world's most resilient people trapped on disaster-prone islands.",
        bestThing: "The warmth and humor of Filipinos.",
        worstThing: "Oligarchic control of the economy.",
        overrated: "Boracay - overdeveloped and crowded.",
        underrated: "The northern regions and indigenous cultures.",
        vibe: "A karaoke bar during a typhoon - still singing, still smiling."
    },
    "Malaysia": {
        hotTake: "A multicultural experiment that works better on paper than in reality.",
        bestThing: "Food fusion that creates magic.",
        worstThing: "Ethnic tensions simmering under the surface.",
        overrated: "The Petronas Towers - impressive but surrounded by nothing.",
        underrated: "Borneo (Sabah and Sarawak) - completely different Malaysia.",
        vibe: "A modern mosque, Chinese temple, and Hindu shrine sharing a street corner."
    },
    "Iceland": {
        hotTake: "A Viking settlement that discovered geothermal heating and never looked back.",
        bestThing: "Otherworldly landscapes that feel like another planet.",
        worstThing: "The prices - everything costs a fortune.",
        overrated: "The Blue Lagoon - overcrowded geothermal spa.",
        underrated: "The smaller hot springs all over the country.",
        vibe: "A Viking poet with a startup and a geothermal pool."
    },
    "Ireland": {
        hotTake: "A small island with an outsized cultural influence and drinking problem.",
        bestThing: "Pub culture as social fabric.",
        worstThing: "The weather - constantly damp.",
        overrated: "Guinness - it's just beer, people.",
        underrated: "The west coast and Gaeltacht regions.",
        vibe: "A storyteller in a pub, half in the past, half in the present."
    },
    "Austria": {
        hotTake: "Germany's more cultured, musical cousin who's a bit full of themselves.",
        bestThing: "Coffeehouse culture as high art.",
        worstThing: "The lingering imperial nostalgia.",
        overrated: "The Sound of Music tours - let it go, people.",
        underrated: "The contemporary art scene in Vienna.",
        vibe: "A waltz played in a gold-leaf ballroom by someone checking their iPhone."
    },
    "Czech Republic": {
        hotTake: "The heart of Europe that keeps getting occupied but never loses its humor.",
        bestThing: "Beer culture that's about community, not just drinking.",
        worstThing: "The tourist crowds in Prague.",
        overrated: "Prague's astronomical clock - it's just a clock.",
        underrated: "Brno and other cities beyond Prague.",
        vibe: "A Kafka novel with a happy ending and excellent beer."
    },
    "Hungary": {
        hotTake: "A country permanently angry about the Treaty of Trianon (1920).",
        bestThing: "Thermal baths as social institutions.",
        worstThing: "Nationalist politics that poison everything.",
        overrated: "Goulash - it's just stew, people.",
        underrated: "The wine regions beyond Tokaj.",
        vibe: "A melancholy gypsy violin played in a Soviet-era apartment block."
    },
    "Denmark": {
        hotTake: "Hygge as a national coping mechanism for terrible weather.",
        bestThing: "Work-life balance as a cultural value.",
        worstThing: "The darkness in winter.",
        overrated: "The Little Mermaid - it's tiny.",
        underrated: "The food revolution happening in Copenhagen.",
        vibe: "A perfectly designed chair that's actually comfortable."
    },
    "Finland": {
        hotTake: "The introvert's paradise - socially distant by design.",
        bestThing: "Sauna culture as a way of life.",
        worstThing: "The darkness and cold in winter.",
        overrated: "Santa Claus Village - it's for kids, people.",
        underrated: "The summer when the sun never sets.",
        vibe: "A silent, efficient person who's secretly a metal fan."
    },
    "Belgium": {
        hotTake: "A country that exists because France and Germany couldn't agree.",
        bestThing: "Beer and chocolate as national achievements.",
        worstThing: "The linguistic divide that creates two countries in one.",
        overrated: "Brussels - it's fine but not that exciting.",
        underrated: "The Ardennes and smaller cities like Ghent.",
        vibe: "A perfectly poured beer in a divided country that somehow works."
    },
    "Romania": {
        hotTake: "A Latin island in a Slavic sea, with vampire tourism.",
        bestThing: "The Carpathian mountains and rural traditions.",
        worstThing: "Corruption that never seems to end.",
        overrated: "Dracula tourism - it's mostly made up.",
        underrated: "The painted monasteries of Bucovina.",
        vibe: "A vampire wearing a tracksuit, trying to get EU funding."
    },
    "Saudi Arabia": {
        hotTake: "A medieval kingdom discovering oil money and trying to skip to the 21st century.",
        bestThing: "The ambition of Vision 2030.",
        worstThing: "The treatment of women and migrant workers.",
        overrated: "The religious tourism - it's intense.",
        underrated: "The archaeological sites beyond Mecca and Medina.",
        vibe: "A Bedouin tent with gold trim and fiber optic internet."
    },
    "Pakistan": {
        hotTake: "A country with incredible potential constantly undermined by itself.",
        bestThing: "The hospitality that's legendary for a reason.",
        worstThing: "Political instability and security concerns.",
        overrated: "The northern areas for tourism - beautiful but difficult.",
        underrated: "The food - some of the best in South Asia.",
        vibe: "A Mughal miniature painting with a Kalashnikov in the corner."
    },
    "Bangladesh": {
        hotTake: "A country that survives against all geographical odds.",
        bestThing: "The resilience of its people.",
        worstThing: "Climate change vulnerability.",
        overrated: "Nothing about Bangladesh is overrated because nobody talks about it.",
        underrated: "Everything - one of the world's most overlooked countries.",
        vibe: "A river delta that became a nation of 170 million against all odds."
    },
    "Sri Lanka": {
        hotTake: "The teardrop island that's seen too many tears.",
        bestThing: "Incredible diversity in a small package.",
        worstThing: "Ethnic tensions that keep resurfacing.",
        overrated: "The train to Ella - beautiful but overcrowded with influencers.",
        underrated: "The ancient cities beyond the big three.",
        vibe: "A precious gem with cracks that keep reappearing."
    },
    "Nepal": {
        hotTake: "A country that sells its mountains to tourists while its people struggle.",
        bestThing: "The Himalayas - genuinely breathtaking.",
        worstThing: "Political instability and poverty.",
        overrated: "Trekking to Everest Base Camp - there are better, less crowded treks.",
        underrated: "The lowlands and cultural diversity beyond Kathmandu.",
        vibe: "A sherpa carrying someone else's dream up a mountain."
    },
    "Cuba": {
        hotTake: "A country frozen in time, but the freezer is breaking.",
        bestThing: "The music that seems to come from the soul.",
        worstThing: "The dual economy that creates absurd inequalities.",
        overrated: "The vintage cars - charming but often poorly maintained.",
        underrated: "The contemporary art and dance scenes.",
        vibe: "A 1950s Cadillac held together with Soviet parts and hope."
    },
    "Jamaica": {
        hotTake: "More than just reggae and resorts - a complex society with deep issues.",
        bestThing: "The cultural influence far beyond its size.",
        worstThing: "Crime and political corruption.",
        overrated: "All-inclusive resorts - they're not real Jamaica.",
        underrated: "The Blue Mountains and coffee culture.",
        vibe: "A reggae beat with a political message in the lyrics."
    },
    "Costa Rica": {
        hotTake: "Pura vida as a successful national brand that occasionally feels performative.",
        bestThing: "Biodiversity in a small package.",
        worstThing: "The cost of living vs. local wages.",
        overrated: "Monteverde Cloud Forest - beautiful but crowded.",
        underrated: "The Caribbean coast and Afro-Caribbean culture.",
        vibe: "A yoga retreat that accidentally became a country."
    },
    "Ethiopia": {
        hotTake: "The only African country never colonized, and it shows in their pride.",
        bestThing: "Ancient history that's actually ancient.",
        worstThing: "Ethnic tensions that keep flaring up.",
        overrated: "The coffee ceremony - it's lovely but takes forever.",
        underrated: "The rock-hewn churches of Lalibela.",
        vibe: "An ancient empire that invented coffee and still runs on it."
    },
    "Tanzania": {
        hotTake: "A country that knows its natural resources (wildlife) are its greatest asset.",
        bestThing: "The wildlife and national parks.",
        worstThing: "The poverty despite tourist dollars.",
        overrated: "Zanzibar's Stone Town - beautiful but touristy.",
        underrated: "The southern parks that get fewer visitors.",
        vibe: "A lion watching a Land Rover full of cameras drive by."
    },
    "Ghana": {
        hotTake: "Africa's success story that everyone points to but few actually understand.",
        bestThing: "Political stability in a turbulent region.",
        worstThing: "The 'Ghana must go' bag stereotype that follows them everywhere.",
        overrated: "The slave castles - important but emotionally exhausting.",
        underrated: "The contemporary music and art scenes.",
        vibe: "A kente cloth being woven with gold threads and smartphone chargers."
    }
};