// Gemini opinions for cities
// Add opinions in the format:
// "City Name": {
//     hotTake: "",
//     bestThing: "",
//     worstThing: "",
//     overrated: "",
//     underrated: "",
//     vibe: ""
// }

const geminiCityOpinions = {
    "Tokyo": {
        hotTake: "It's the only place where 37 million people living on top of each other actually works, but the cost is a society that has forgotten how to be 'messy'.",
        bestThing: "The food quality at every price point—even a 7-Eleven egg sandwich is better than most fancy cafes elsewhere.",
        worstThing: "The feeling that you're just a gear in a massive, perfectly oiled machine that doesn't care if you're happy or not.",
        overrated: "Shibuya Crossing—you've seen it on screen, now you're just walking across a street with too many people.",
        underrated: "Shimokitazawa—the vintage shops and small theaters feel like the soul that the neon districts lost.",
        vibe: "Silent, hyper-efficient, and neon-drenched loneliness."
    },
    "New York City": {
        hotTake: "It's a city of 8 million people who all think they're the main character in a movie that everyone else is tired of watching.",
        bestThing: "The fact that you can get authentic food from literally any country on earth at 3 AM.",
        worstThing: "The smell of trash in the summer and the fact that basic survival feels like a competitive sport.",
        overrated: "Times Square—it's a corporate hellscape designed to extract money from tourists who don't know any better.",
        underrated: "The Staten Island Ferry—it's a free boat ride with the best view of the skyline and the Statue of Liberty.",
        vibe: "Aggressive ambition mixed with the smell of roasted nuts and damp subway air."
    },
    "London": {
        hotTake: "A collection of villages pretending to be a city, held together by expensive trains and a shared sense of impending rain.",
        bestThing: "The free museums—the British Museum is basically the world's stolen property office, but it's spectacular.",
        worstThing: "The passive-aggressive 'tube etiquette' where making eye contact is considered a declaration of war.",
        overrated: "The London Eye—a very slow, very expensive way to see that it's raining in every direction.",
        underrated: "Hampstead Heath—it feels like the deep countryside but you're still in Zone 2.",
        vibe: "Posh history meeting gritty reality, usually while waiting for a bus."
    },
    "Paris": {
        hotTake: "The city of light is mostly the city of passive-aggressive waiters and people who have perfected the art of judging your outfit.",
        bestThing: "The boulangeries—the smell of fresh baguettes in the morning is the only reason to tolerate the rest of the city.",
        worstThing: "The dog poop on the sidewalks and the general sense that the city stopped trying in 1920 because it's already 'perfect'.",
        overrated: "The Eiffel Tower at night—it's nice, but the souvenir sellers and the crowds ruin the romance.",
        underrated: "Canal Saint-Martin—it's where the real Parisians hang out and drink wine by the water.",
        vibe: "Effortlessly beautiful, deeply arrogant, and smells of expensive cigarettes."
    },
    "Dubai": {
        hotTake: "A 5-star hotel built on a sand dune that thinks luxury is a substitute for culture. It's the world's most expensive airport lounge.",
        bestThing: "The sheer audacity of the engineering—building a 2,700-foot tower just because you can is wild.",
        worstThing: "The total lack of walkability. If you aren't in a car or a mall, you don't exist.",
        overrated: "The Dubai Mall—it's just a mall, guys. There's a fountain and a shark tank, but it's still just a mall.",
        underrated: "The food in Al Satwa—real, delicious, and affordable meals from the people who actually built the city.",
        vibe: "Cyberpunk capitalism in a thobe, running on air conditioning."
    },
    "Singapore": {
        hotTake: "A giant shopping mall with a botanical garden attached, where the most rebellious thing you can do is spit on the sidewalk.",
        bestThing: "The Hawker Centers—where else can you get a Michelin-quality meal for the price of a coffee?",
        worstThing: "The humidity—it's like being hugged by a warm, damp towel the moment you step outside.",
        overrated: "Marina Bay Sands—it's a cool building, but the infinity pool is basically a crowded soup of influencers.",
        underrated: "The Changi Jewel—it's technically an airport, but it's more impressive than most cities' downtowns.",
        vibe: "Sterile, humid, and obsessively focused on the next meal."
    },
    "Hong Kong": {
        hotTake: "The world's most vertical city where the skyscrapers are literally fighting for space, reflecting a society that's also under immense pressure.",
        bestThing: "The Star Ferry at night—the best $0.50 you will ever spend in your life.",
        worstThing: "The claustrophobia. You never truly feel like you have enough room to breathe.",
        overrated: "The Peak Tram—the queue is longer than the ride, and the view is often blocked by clouds or smog.",
        underrated: "Lamma Island—no cars, great seafood, and a hippie vibe that feels 100 years away from Central.",
        vibe: "Hyper-speed hustle with a side of dim sum and political anxiety."
    },
    "Sydney": {
        hotTake: "Los Angeles with better public transport and a shorter flight to Bali, but just as obsessed with real estate prices.",
        bestThing: "The harbor. It's impossible to have a bad day when you're on a ferry in that much blue.",
        worstThing: "The lockout laws might be gone, but the city still feels like it goes to bed at 10 PM.",
        overrated: "Bondi Beach—it's where people go to be seen, not to swim. The water is full of tourists and the sand is full of posers.",
        underrated: "The Royal National Park—just south of the city and feels like a total wilderness.",
        vibe: "Golden sunshine, expensive coffee, and a weirdly high number of rules."
    },
    "Mumbai": {
        hotTake: "A city that never sleeps because it's too busy stuck in traffic or listening to the neighbor's TV through the wall.",
        bestThing: "The spirit of the people—Mumbaikars are the most resilient, helpful, and high-energy humans on the planet.",
        worstThing: "The infrastructure—the local trains are a daily death-defying stunt for millions.",
        overrated: "Marine Drive at sunset—it's just a lot of people sitting on a wall looking at a gray ocean.",
        underrated: "The Irani Cafes—they are disappearing, but they are the heart and soul of the old city.",
        vibe: "Sweaty, loud, incredibly kind, and moving at 100mph even when stationary."
    },
    "Shanghai": {
        hotTake: "The future arrived here ten years ago and it's already bored. It makes New York look like a sleepy village.",
        bestThing: "The Maglev train—going 430km/h is the only way to arrive in a city this fast.",
        worstThing: "The feeling that anything 'old' is just waiting to be demolished for a shiny new mall.",
        overrated: "The Oriental Pearl Tower—it looks like a 1960s vision of the year 2000. Tacky as hell.",
        underrated: "The residential alleys (Lilong)—where you can still see the real Shanghai life before it's gone.",
        vibe: "Hyper-capitalist speed with a neon filter."
    },
    "Beijing": {
        hotTake: "A city that feels like it's constantly judging you for not being important enough. It's the world's most powerful gray rectangle.",
        bestThing: "The history—standing in the Forbidden City makes you realize how insignificant your own timeline is.",
        worstThing: "The air—sometimes you can literally taste the coal and the desert sand.",
        overrated: "Sanlitun—it's just a lot of international brands you can find anywhere else.",
        underrated: "The Hutongs at 6 AM—seeing the old men with their birds and the breakfast stalls is the real Beijing.",
        vibe: "Grand, imposing, and slightly suffocating."
    },
    "Moscow": {
        hotTake: "A city of extremes where people either have 10-foot-high fences or nothing at all, all connected by a subway that looks like a palace.",
        bestThing: "The Moscow Metro—the only subway in the world where you actually want to miss your train so you can look at the ceiling.",
        worstThing: "The bureaucracy—even buying a SIM card feels like a military operation.",
        overrated: "Gorky Park—it's been gentrified into a generic European park. It lost its gritty soul.",
        underrated: "The Sparrow Hills view—the best place to realize just how massive and intimidating the city is.",
        vibe: "Heavy, powerful, and deeply melancholic."
    },
    "Rome": {
        hotTake: "A city that is resting on its laurels from 2,000 years ago and hasn't bothered to pick up the trash since.",
        bestThing: "Carbonara. When done right in a Roman trattoria, it's worth the flight alone.",
        worstThing: "The public transport—the buses are more of a suggestion than a schedule.",
        overrated: "The Colosseum—it's amazing, but the 4-hour queue and the 'gladiators' charging for photos ruin it.",
        underrated: "The Aventine Keyhole—a tiny hole in a door that gives you a perfect view of three countries.",
        vibe: "Beautiful decay, incredible food, and total administrative chaos."
    },
    "Barcelona": {
        hotTake: "A beautiful theme park for tourists that has become so popular it's starting to hate its own visitors.",
        bestThing: "Gaudi's architecture—it's the only time 'crazy' architecture actually works on a grand scale.",
        worstThing: "The pickpockets—they are world-class professionals and they will get your phone eventually.",
        overrated: "La Rambla—it's a mile-long tourist trap with terrible food and crowded sidewalks.",
        underrated: "Bunkers del Carmel—the best sunset view in the city and it's (mostly) locals.",
        vibe: "Sun-drenched, architectural, and very, very crowded."
    },
    "Istanbul": {
        hotTake: "Two continents, zero personal space. It's the world's most beautiful headache.",
        bestThing: "The Bosphorus—crossing between Europe and Asia on a ferry with a cup of tea is the peak of travel.",
        worstThing: "The traffic—you could walk across the bridge faster than a taxi most days.",
        overrated: "The Blue Mosque—it's stunning, but the crowds and the 'no shoes' smell are a lot to take in.",
        underrated: "Kadıköy—the Asian side is cooler, cheaper, and has better food than the tourist side.",
        vibe: "Ancient, spicy, and full of very demanding cats."
    },
    "Cairo": {
        hotTake: "A city that proves you can build a civilization on noise, dust, and stubbornness. It's 20 million people shouting at once.",
        bestThing: "The Pyramids—they are the only thing in the world that is exactly as big and impressive as the photos.",
        worstThing: "The touts—you will be offered 500 camel rides before you've even finished your breakfast.",
        overrated: "The Nile dinner cruises—tacky music, mediocre food, and you can't even see the river that well.",
        underrated: "Coptic Cairo—a peaceful, ancient corner of the city that feels like a different world.",
        vibe: "Loud, dusty, and absolutely ancient."
    },
    "Rio de Janeiro": {
        hotTake: "The most beautiful setting for a city on Earth, ruined by the fact that you can't take your phone out to photograph it.",
        bestThing: "The energy—when the sun goes down and the music starts, you forget about all the problems.",
        worstThing: "The constant low-level anxiety about safety that never quite goes away.",
        overrated: "The Christ the Redeemer statue—you spend 3 hours in a queue to see the back of other people's heads.",
        underrated: "The Lage Park (Parque Lage)—a stunning mansion in the forest that's way more atmospheric than the big sites.",
        vibe: "Breathtaking beauty with a dangerous edge and a samba beat."
    },
    "Buenos Aires": {
        hotTake: "A city of people who believe they are Italians who speak Spanish and live in Paris, but their bank account is in Argentina.",
        bestThing: "The bookstores—El Ateneo Grand Splendid is the most beautiful place to read in the world.",
        worstThing: "The dinner time—nothing starts until 10 PM, and if you're hungry at 7 PM, you're out of luck.",
        overrated: "Puerto Madero—it's a sterile, expensive dockland that could be in any city in the world.",
        underrated: "San Telmo on a Tuesday—no markets, just old men playing chess in ancient bars.",
        vibe: "Nostalgic, intellectual, and very, very late."
    },
    "Cape Town": {
        hotTake: "The world's most beautiful bubble—if you stay in the right areas, you can forget that the most unequal country on Earth is right outside.",
        bestThing: "Table Mountain—it's not just a mountain, it's a presence that follows you everywhere in the city.",
        worstThing: "The 'Cape Town bubble'—the social segregation is still incredibly visible and uncomfortable.",
        overrated: "The penguins at Boulders Beach—you're basically paying to watch birds stand on a crowded boardwalk.",
        underrated: "Kalk Bay—a working harbor with quirky shops and the best fish and chips in the world.",
        vibe: "Stunning natural beauty with a side of heavy social conscience."
    },
    "Amsterdam": {
        hotTake: "A beautiful canal city that has been hijacked by tourists who think the entire place is an adult theme park.",
        bestThing: "The freedom to bike everywhere without being killed by a car. It's urban design heaven.",
        worstThing: "The 'Overtourism'—the center has become a no-go zone for locals who just want to buy bread.",
        overrated: "The I amsterdam sign (which they finally moved)—it was the peak of tacky tourism.",
        underrated: "Amsterdam Noord—a short ferry ride away and it's full of cool warehouses and zero crowds.",
        vibe: "Cozy, liberal, and way too crowded with rental bikes."
    },
    "Berlin": {
        hotTake: "A city that is so obsessed with being 'edgy' and 'alternative' that it has become its own kind of conformist.",
        bestThing: "The space—Berlin is massive and green, and you never feel the crushing density of London or Paris.",
        worstThing: "The service—the 'Berlin snout' (Berliner Schnauze) means you will be treated with mild contempt by every shopkeeper.",
        overrated: "Berghain—waiting 3 hours in line to be told 'no' by a guy with face tattoos is not a fun night out.",
        underrated: "Tempelhof Field—an abandoned airport that is now a giant park where you can bike on the runway.",
        vibe: "Gritty, cool, and perpetually under construction."
    },
    "Vienna": {
        hotTake: "A city that peaked in 1910 and has decided to just stay there forever. It's a very well-dusted museum.",
        bestThing: "The water—you can drink world-class mountain spring water straight from the tap. It's a luxury people ignore.",
        worstThing: "The 'Grumpy Viennese'—complaining is the national sport, and they are Olympic gold medalists at it.",
        overrated: "The Spanish Riding School—watching horses walk in circles for an hour is... an acquired taste.",
        underrated: "The Zentralfriedhof (Central Cemetery)—it's massive, beautiful, and you can visit Beethoven and Brahms.",
        vibe: "Imperial, orderly, and obsessed with cake."
    },
    "Prague": {
        hotTake: "A fairytale city that has been cursed with an endless supply of cheap beer and the stag parties that follow it.",
        bestThing: "The view from the Charles Bridge at 5 AM—before the crowds arrive, it's the most magical place in Europe.",
        worstThing: "The 'Trdelník'—that cinnamon chimney cake isn't even traditionally Czech, it's a tourist invention.",
        overrated: "The Astronomical Clock show—you wait for an hour for 30 seconds of moving statues. It's the world's most hyped disappointment.",
        underrated: "Vyšehrad—a second fortress with better views, fewer tourists, and a stunning cemetery.",
        vibe: "Gothic beauty meets boozy tourism."
    },
    "Bangkok": {
        hotTake: "A city of angels where the angels are stuck in a 3-hour traffic jam and the street food is better than the fine dining.",
        bestThing: "The street food—you can have a life-changing meal on a plastic stool for $2.",
        worstThing: "The smell—the combination of tropical heat, open sewers, and street food is... unique.",
        overrated: "The Floating Market (Damnoen Saduak)—it's a 2-hour drive to a canal full of tourist boats selling fridge magnets.",
        underrated: "The Klongs (canals) of Thonburi—see the old wooden houses on stilts and escape the skyscrapers.",
        vibe: "Hot, spicy, chaotic, and smiling through the exhaust fumes."
    },
    "Seoul": {
        hotTake: "The world's most high-tech society that is still deeply conservative and stressed out by its own success.",
        bestThing: "The safety—you can walk anywhere at 4 AM and feel perfectly fine. Also, the fried chicken.",
        worstThing: "The 'Lookism'—the pressure to look perfect is so intense it's actually depressing to see.",
        overrated: "N Seoul Tower—the view is okay, but the walk up is better than the tower itself.",
        underrated: "The Han River parks—where real Seoul life happens with fried chicken delivery and ramen machines.",
        vibe: "Hyper-modern, caffeinated, and perfectly groomed."
    },
    "Mexico City": {
        hotTake: "The world's best-kept secret that is now being ruined by an influx of remote workers who don't speak Spanish.",
        bestThing: "Tacos al Pastor—it's the peak of human culinary achievement. Change my mind.",
        worstThing: "The traffic—it's a sprawling monster and getting across the city can take a lifetime.",
        overrated: "Tulum (I know it's not in CDMX, but everyone there goes there)—it's an overpriced ego-trip.",
        underrated: "Xochimilco on a weekday—it's peaceful, green, and the flower markets are stunning.",
        vibe: "Vibrant, historic, delicious, and sinking into the lake bed."
    },
    "Los Angeles": {
        hotTake: "A collection of suburbs in search of a city, where the most important thing about you is your car and your zip code.",
        bestThing: "The diversity of landscapes—you can surf in the morning and be in the snow or the desert by afternoon.",
        worstThing: "The homelessness crisis—it's a moral failure on a scale that is impossible to ignore.",
        overrated: "The Walk of Fame—it's a dirty sidewalk with names of people you've never heard of and guys in bad Spider-Man suits.",
        underrated: "The Getty Center—not for the art, but for the architecture and the fact that it's a quiet fortress above the madness.",
        vibe: "Sunshine, exhaust fumes, and the desperate hope of being discovered."
    },
    "San Francisco": {
        hotTake: "A city that used to be a refuge for misfits and artists, now a dormitory for tech bros who think they're 'changing the world'.",
        bestThing: "The hills—the views you get from the top of random streets are genuinely world-class.",
        worstThing: "The inequality—seeing a $100,000 car drive past someone sleeping in a tent is the SF experience now.",
        overrated: "Lombard Street—it's a curvy street with too many cars and tourists taking photos of it.",
        underrated: "The Presidio—massive forest and coastal views right in the city that feels like a total escape.",
        vibe: "Foggy, expensive, and mourning its own soul."
    },
    "Toronto": {
        hotTake: "A city that is desperately trying to be New York but is too polite and boring to actually pull it off.",
        bestThing: "The diversity—it's the only city where multiculturalism feels like the actual foundation, not just an add-on.",
        worstThing: "The cost of housing—you'll pay Manhattan prices for a condo in a city that isn't Manhattan.",
        overrated: "The Distillery District—it's a pretty outdoor mall, but it's very sanitized and expensive.",
        underrated: "The Toronto Islands—a short ferry ride and you have the best view of the city and no cars.",
        vibe: "Clean, safe, multicultural, and slightly bland."
    },
    "Vancouver": {
        hotTake: "The world's most beautiful outdoor gym, where everyone wears Lululemon and has a mortgage they can't afford.",
        bestThing: "Stanley Park—it's one of the few urban parks that actually feels like a real forest.",
        worstThing: "The 'No Fun City' reputation—the nightlife is strictly regulated and generally pretty dead.",
        overrated: "Capilano Suspension Bridge—it's a lot of money to walk across a bridge. Go to Lynn Canyon for free.",
        underrated: "Richmond—the best Chinese food in North America, hands down.",
        vibe: "Yoga, mountains, rain, and real estate anxiety."
    },
    "Marrakech": {
        hotTake: "A city that is designed to separate you from your money as loudly and colorfuly as possible.",
        bestThing: "The Riads—stepping through a dusty door into a garden paradise is a feeling that never gets old.",
        worstThing: "The 'guides'—you can't walk 5 feet without someone telling you the way is closed and leading you to their uncle's shop.",
        overrated: "Jemaa el-Fnaa food stalls—it's overpriced and you'll probably get a stomach bug. Eat in the side streets.",
        underrated: "The Mellah (Jewish Quarter)—it's quieter, more authentic, and has fascinating history.",
        vibe: "Spiced, chaotic, and very, very persistent."
    },
    "Jerusalem": {
        hotTake: "A city that is so holy it has become impossible for anyone to live there in peace. It's the world's most beautiful battlefield.",
        bestThing: "The air—at sunset, the 'Jerusalem stone' glows gold and the air feels heavy with history.",
        worstThing: "The tension—you can feel the underlying conflict in every interaction and every street corner.",
        overrated: "The 'Holy' souvenirs—99% of it is plastic made in China.",
        underrated: "The rooftops of the Old City—you can walk across the city on top of people's houses and see everything.",
        vibe: "Intense, ancient, spiritual, and deeply divided."
    },
    "Kyoto": {
        hotTake: "The 'Soul of Japan' that is currently being crushed under the weight of 10 million tourists trying to find it.",
        bestThing: "Kaiseki cuisine—it's not just a meal, it's a 10-course art project that reflects the season.",
        worstThing: "The bus system—it's the only way to get around and it's permanently packed with tourists.",
        overrated: "Kinkaku-ji (Golden Pavilion)—you look at it from across a pond with 5,000 other people. You can't even go inside.",
        underrated: "The Philosopher's Walk on a rainy day—no crowds, just the sound of water and the feeling of old Kyoto.",
        vibe: "Refined, traditional, and struggling with its own popularity."
    },
    "Athens": {
        hotTake: "A massive, concrete sprawl that just happens to have the world's best ruins in the middle of it.",
        bestThing: "The rooftop bars—sipping a drink while looking at the lit-up Parthenon is a top-tier life experience.",
        worstThing: "The heat in August—it's not a city, it's a 100-degree oven made of marble and asphalt.",
        overrated: "The Changing of the Guard—watching men in pom-pom shoes kick high is... well, it's a thing.",
        underrated: "Anafiotika—a tiny neighborhood on the slopes of the Acropolis that looks like a Cycladic island.",
        vibe: "Ancient, gritty, delicious, and very loud."
    },
    "Lisbon": {
        hotTake: "A city that was cool because it was cheap and crumbling, and is now becoming uncool because it's expensive and renovated.",
        bestThing: "The Miradouros—free viewpoints everywhere that are perfect for drinking a beer and watching the sunset.",
        worstThing: "The tiled sidewalks when it rains—they become a literal ice rink designed to kill tourists.",
        overrated: "Pasteis de Belem—the line is an hour long. You can get just-as-good ones at any Manteigaria without the wait.",
        underrated: "Fado in a tiny, non-tourist bar—it's the sound of a heart breaking and it's beautiful.",
        vibe: "Sunny, melancholic, tiled, and hilly."
    },
    "Dublin": {
        hotTake: "A city that is basically one big pub where the drinks are too expensive and everyone is your best friend until the tab comes.",
        bestThing: "The people—the 'gift of the gab' is real, and you will never have a boring conversation in a Dublin pub.",
        worstThing: "The price of a pint—it's becoming a city that only tech workers can afford to live in.",
        overrated: "The Book of Kells—you wait in line for an hour to see two pages of an old book behind thick glass.",
        underrated: "The National Gallery—stunning art, no crowds, and it's free.",
        vibe: "Friendly, wet, literary, and boozy."
    },
    "Copenhagen": {
        hotTake: "A city of people who have won the lottery of life and are now spending their time designing better chairs and biking in expensive raincoats.",
        bestThing: "The Harbor Baths—swimming in the middle of a city harbor that is cleaner than most swimming pools.",
        worstThing: "The cost—a casual lunch will cost you more than a flight to Italy.",
        overrated: "The Little Mermaid—it's small, it's far away, and it's looking at a power plant. Don't bother.",
        underrated: "The Louisiana Museum of Modern Art—it's a short train ride away and it's the most beautiful museum on earth.",
        vibe: "Hygge, expensive, well-designed, and very happy."
    },
    "Stockholm": {
        hotTake: "A city of beautiful people who are terrified of making eye contact with strangers. It's a gorgeous, cold social desert.",
        bestThing: "The water—being able to commute by boat is a luxury that makes the city feel magical.",
        worstThing: "The winter darkness—4 PM feels like midnight and everyone goes into hibernation mode.",
        overrated: "Gamla Stan (Old Town) restaurants—they are mostly tourist traps. Eat in Södermalm instead.",
        underrated: "The Subway Art—it's the world's longest art gallery and it's legitimately impressive.",
        vibe: "Elegant, stylish, reserved, and surrounded by blue."
    },
    "Reykjavik": {
        hotTake: "A village that thinks it's a city because it has a high-end coffee shop and a lot of tourists in North Face jackets.",
        bestThing: "The hot tubs—public pools are the real social heart of the city and they're amazing.",
        worstThing: "The price of food—you will cry when you see the bill for a burger and a beer.",
        overrated: "Hallgrimskirkja—it's a cool building, but the view from the top is just a lot of colorful toy-like houses.",
        underrated: "The record shops—for a tiny city, the music scene is world-leading.",
        vibe: "Quirky, expensive, windy, and tiny."
    },
    "Hanoi": {
        hotTake: "A city of 5 million motorbikes and zero traffic rules, where crossing the street is a leap of faith.",
        bestThing: "Egg Coffee—it sounds weird, it looks like a dessert, and it's the best thing you'll ever drink.",
        worstThing: "The pollution—sometimes the air is so thick you can't see the other side of the lake.",
        overrated: "The Water Puppet Theatre—it's a bit of a tourist trap, though the music is nice.",
        underrated: "Truc Bach Lake—it's quieter than Hoan Kiem and has the best frog hotpot.",
        vibe: "Ancient, caffeinated, chaotic, and delicious."
    },
    "Ho Chi Minh City": {
        hotTake: "A city that has decided to skip the 20th century and go straight to the 22nd. It's a neon-lit monster.",
        bestThing: "The energy—it's a city that never stops moving and you can feel the ambition in the air.",
        worstThing: "The humidity—you will be permanently sweaty from the moment you land until the moment you leave.",
        overrated: "The War Remnants Museum—it's important, but it's very one-sided and incredibly depressing for a vacation.",
        underrated: "The apartment cafes—old residential buildings turned into hidden coffee shops and boutiques.",
        vibe: "Hyper-energetic, humid, and constantly evolving."
    },
    "Kuala Lumpur": {
        hotTake: "A city that is trying to be Singapore but has better food and more soul, even if the trains don't always connect.",
        bestThing: "The diversity of food—you can have Malay breakfast, Chinese lunch, and Indian dinner and they'll all be 10/10.",
        worstThing: "The heat—walking between buildings feels like a survival challenge.",
        overrated: "Batu Caves—the stairs are colorful, but it's crowded, dirty, and the monkeys will steal your soul (and your phone).",
        underrated: "The Heli Lounge Bar—an actual helipad where you can drink while the sun sets over the towers.",
        vibe: "Multicultural, flavorful, and very humid."
    },
    "Manila": {
        hotTake: "A city that is a giant traffic jam surrounded by shopping malls and the world's best karaoke singers.",
        bestThing: "The people—no matter how bad the traffic is, Filipinos will find a way to make you laugh.",
        worstThing: "The traffic—I'm not joking, you can spend 4 hours going 5 miles. It's a soul-crushing experience.",
        overrated: "The malls—yes, they are big, but they are just malls. Don't spend your whole trip there.",
        underrated: "Binondo (Chinatown)—the oldest Chinatown in the world and the food tour is incredible.",
        vibe: "Loud, friendly, musical, and stuck in traffic."
    },
    "Jakarta": {
        hotTake: "A city that is sinking into the sea and rising in ambition at the same time. It's a beautiful mess.",
        bestThing: "The hospitality—Jarkartans are genuinely happy to see you because so few tourists actually stay here.",
        worstThing: "The 'Macét' (Traffic)—it's the only city that gives Manila a run for its money in the 'worst traffic' category.",
        overrated: "Monas—it's a big monument in a big field. You can see it from the car (where you'll be anyway).",
        underrated: "The coffee scene—Indonesia grows the beans, and Jakarta knows how to brew them.",
        vibe: "Massive, friendly, congested, and authentic."
    },
    "Nairobi": {
        hotTake: "The only city where you can get stuck in traffic because a giraffe decided to cross the road. It's wild.",
        bestThing: "Nairobi National Park—seeing a rhino with skyscrapers in the background is the most surreal thing in Africa.",
        worstThing: "The 'Kibera tours'—poverty tourism is gross and needs to stop.",
        overrated: "The Carnivore Restaurant—it's a meat-fest for tourists. It's okay, but it's not 'real' Kenya.",
        underrated: "The Karura Forest—a massive, safe, beautiful forest right in the middle of the city.",
        vibe: "Green, high-energy, and surprisingly cool (the weather, I mean)."
    },
    "Lagos": {
        hotTake: "The center of the universe if you're a hustler. If you can make it here, you can make it anywhere—even Mars.",
        bestThing: "The Afrobeats scene—being in a Lagos club when a new Burna Boy track drops is a spiritual experience.",
        worstThing: "The infrastructure—power cuts, traffic 'go-slows', and humidity that will melt your face off.",
        overrated: "Lekki Conservation Centre—the canopy walk is cool, but the rest of the park is often flooded or neglected.",
        underrated: "The Nike Art Gallery—five floors of incredible African art and the owner is a legend.",
        vibe: "Unstoppable, loud, creative, and very intense."
    },
    "Casablanca": {
        hotTake: "A city that owes its entire tourist industry to a movie that didn't have a single frame filmed here.",
        bestThing: "Hassan II Mosque—it's one of the few mosques you can visit and it's built over the ocean. Spectacular.",
        worstThing: "The disappointment—tourists arrive expecting Bogart and find a gritty, industrial port city.",
        overrated: "Rick's Cafe—it's a recreation of a movie set for people who want to feel like they're in 1942. It's cheesy.",
        underrated: "The Art Deco buildings—the city has some of the best 1930s architecture in the world if you look up.",
        vibe: "Gritty, business-focused, and slightly misunderstood."
    },
    "Havana": {
        hotTake: "A city that is slowly collapsing under the weight of its own history and the world's romanticized version of it.",
        bestThing: "The Malecón—walking along the sea wall at night with a bottle of rum and a guitar playing nearby is pure magic.",
        worstThing: "The 'Jineteros'—the constant pressure from people trying to sell you cigars or be your 'friend' for money.",
        overrated: "La Floridita—Hemingway's bar. It's overpriced, crowded, and the daiquiris are made in a blender.",
        underrated: "The University of Havana—stunning architecture and a vibe of youthful energy that the rest of the city lacks.",
        vibe: "Beautiful, crumbling, musical, and tragic."
    },
    "Lima": {
        hotTake: "The culinary capital of the world that hides behind a wall of gray mist for 9 months of the year.",
        bestThing: "The Ceviche—I've said it before and I'll say it again: you haven't lived until you've had Lima ceviche.",
        worstThing: "The 'Lima Gray' (El Panza de Burro)—the constant gray sky that never rains but never clears is soul-dampening.",
        overrated: "The Magic Water Circuit—it's fine, but it's just fountains with lights. You've seen them before.",
        underrated: "Barranco—the bohemian district is where the real charm, art, and nightlife live.",
        vibe: "Delicious, foggy, historic, and very spread out."
    },
    "Bogotá": {
        hotTake: "A high-altitude city that feels like it's perpetually about to rain, filled with people who are surprisingly polite.",
        bestThing: "Monserrate—the view from the top is the only way to realize just how massive and chaotic the city really is.",
        worstThing: "The weather—it can go from sunshine to a freezing downpour in 5 minutes. You need 4 seasons of clothes every day.",
        overrated: "Andrés Carne de Res (the one in the city)—it's okay, but you have to go to the original in Chía for the real madness.",
        underrated: "The Gold Museum—it's one of the best museums in the world, period. The sheer amount of gold is staggering.",
        vibe: "Chilly, creative, historic, and high-altitude."
    },
    "Cartagena": {
        hotTake: "A gorgeous colonial dollhouse that has been turned into a very expensive background for weddings and Instagram.",
        bestThing: "The color—every building is a different shade of vibrant, and the bougainvillea is everywhere.",
        worstThing: "The humidity and the vendors—you will be sweating while being asked to buy a hat every 10 seconds.",
        overrated: "The Rosario Islands (the ones on day trips)—they are crowded and noisy. You need to stay overnight to enjoy them.",
        underrated: "Getsemaní—it's the gritty, colorful, artistic heart of the city that hasn't been fully sanitized yet.",
        vibe: "Steamy, colorful, historic, and very touristy."
    },
    "Santiago": {
        hotTake: "A city that is trying very hard to be European but the Andes are constantly reminding it that it's in South America.",
        bestThing: "The wine—you can be in world-class vineyards in 30 minutes for the price of a bus ticket.",
        worstThing: "The smog—in winter, the valley traps all the pollution and you can't even see the mountains.",
        overrated: "The view from Sky Costanera—it's the tallest building, but the view is often just gray haze.",
        underrated: "Barrio Yungay—a historic neighborhood with amazing street art and a real community feel.",
        vibe: "Modern, mountain-adjacent, and slightly business-like."
    },
    "Cusco": {
        hotTake: "The navel of the world where you pay a premium to feel like you're dying of oxygen deprivation while buying alpaca sweaters.",
        bestThing: "The Inca walls—seeing 500-year-old stones fitted so perfectly you can't fit a knife between them is mind-blowing.",
        worstThing: "The altitude—your first 24 hours will be spent wondering if you'll ever breathe normally again.",
        overrated: "The 'Rainbow Mountain'—it's a 3-hour drive and a brutal hike for a photo that only looks like that in Lightroom.",
        underrated: "The San Blas district—hilly, narrow streets, and the best artisan shops in Peru.",
        vibe: "Ancient, spiritual, high-altitude, and very tourist-focused."
    }
};