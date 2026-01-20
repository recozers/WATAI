
const grokCityOpinions = {
    "Tokyo": {
    hotTake: "The ultimate cyberpunk dream that's actually hyper-efficient and obsessively clean, but the salaryman grind is soul-crushing.",
    bestThing: "Seamless public transport and endless food variety—from Michelin ramen to conveyor-belt sushi.",
    worstThing: "Crowded trains during rush hour feel like a human sardine can.",
    overrated: "Shibuya Crossing; chaotic but just a busy intersection.",
    underrated: "Quiet neighborhoods like Yanaka with old-school charm and cats everywhere.",
    vibe: "Neon-fueled precision with hidden tranquility."
    },
    "New York City": {
    hotTake: "The city that never sleeps because everyone's too busy paying rent and dodging rats.",
    bestThing: "Energy and diversity—every block feels like a different country.",
    worstThing: "Insane cost of living and aggressive pace that burns people out.",
    overrated: "Times Square; flashy tourist trap full of ads and crowds.",
    underrated: "Brooklyn's hidden parks and diverse food scenes.",
    vibe: "Relentless hustle with gritty glamour."
    },
    "London": {
    hotTake: "Historic charm meets perpetual drizzle—where queuing is a national sport.",
    bestThing: "Museums (many free) and multicultural food scene.",
    worstThing: "Weather that's gray 300 days a year and high prices.",
    overrated: "Big Ben and Westminster; impressive but tourist-packed.",
    underrated: "South Bank's street food and river views.",
    vibe: "Wry humor under cloudy skies."
    },
    "Paris": {
    hotTake: "City of love that's more like city of rudeness if you don't speak French perfectly.",
    bestThing: "Architecture, art, and pastries that redefine indulgence.",
    worstThing: "Pickpockets and dog poop on every sidewalk.",
    overrated: "Eiffel Tower at night; beautiful but mobbed.",
    underrated: "Canal Saint-Martin neighborhood—chill vibes and picnics.",
    vibe: "Romantic elegance with dramatic flair."
    },
    "Dubai": {
    hotTake: "Artificial oasis of excess built on sand and oil—looks futuristic but feels soulless.",
    bestThing: "Insane architecture and luxury shopping.",
    worstThing: "Extreme heat and exploitative labor practices.",
    overrated: "Burj Khalifa; tall but the view is mostly desert.",
    underrated: "Old Dubai's souks and abra rides on the creek.",
    vibe: "Over-the-top opulence with desert ambition."
    },
    "Singapore": {
    hotTake: "Spotless utopia where fines keep everyone in line—fun if you like rules.",
    bestThing: "Hawker centers with world-class cheap eats.",
    worstThing: "Strict laws and humid heat.",
    overrated: "Marina Bay Sands infinity pool; crowded photo op.",
    underrated: "Gardens by the Bay at night—futuristic nature.",
    vibe: "Orderly tropical efficiency."
    },
    "Hong Kong": {
    hotTake: "Vertical city of neon and skyscrapers fighting for space with mountains.",
    bestThing: "Dim sum and skyline views from the Peak.",
    worstThing: "Crowded and increasingly tense politically.",
    overrated: "Victoria Harbour; great but smoggy often.",
    underrated: "Outlying islands like Lantau for hiking.",
    vibe: "Frantic energy with harbor drama."
    },
    "Sydney": {
    hotTake: "Harbor paradise where the Opera House is iconic but the beaches steal the show.",
    bestThing: "Bondi to Coogee coastal walk and laid-back beach culture.",
    worstThing: "Spiders and high living costs.",
    overrated: "Sydney Opera House; stunning from outside, meh tours.",
    underrated: "Blue Mountains day trip—nature escape.",
    vibe: "Sunny casual with ocean breeze."
    },
    "Mumbai": {
    hotTake: "Chaotic symphony of Bollywood dreams and street hustle in extreme density.",
    bestThing: "Street food like vada pav and vibrant markets.",
    worstThing: "Overcrowding, pollution, and monsoon floods.",
    overrated: "Gateway of India; historic but touristy.",
    underrated: "Elephanta Caves ferry ride.",
    vibe: "Intense resilience with spicy chaos."
    },
    "Shanghai": {
    hotTake: "China's flashy future city where skyscrapers rise faster than regulations.",
    bestThing: "Bund views and modern vs. old contrast.",
    worstThing: "Air quality and censorship vibes.",
    overrated: "The Bund at night; crowded spectacle.",
    underrated: "French Concession's tree-lined streets.",
    vibe: "Rapid futurism with colonial echoes."
    },
    "Beijing": {
    hotTake: "Ancient capital swallowed by smog and massive scale—history meets concrete.",
    bestThing: "Forbidden City and Great Wall access.",
    worstThing: "Severe pollution and traffic.",
    overrated: "Tiananmen Square; vast but heavy.",
    underrated: "Hutong alleys and street eats.",
    vibe: "Imperial grandeur with modern crush."
    },
    "Moscow": {
    hotTake: "Opulent tsarist legacy in a city that's cold in every sense.",
    bestThing: "Red Square and metro stations like palaces.",
    worstThing: "Harsh winters and political chill.",
    overrated: "St. Basil's Cathedral; looks better in photos.",
    underrated: "Gorky Park in summer.",
    vibe: "Grand stoicism with golden domes."
    },
    "Rome": {
    hotTake: "Eternal city where ruins outnumber functional sidewalks.",
    bestThing: "Gelato, pasta, and layers of history everywhere.",
    worstThing: "Crowds and chaotic traffic.",
    overrated: "Colosseum; impressive but packed.",
    underrated: "Trastevere neighborhood at night.",
    vibe: "Ancient romance with chaotic charm."
    },
    "Barcelona": {
    hotTake: "Gaudi wonderland that's now pickpocket central in summer.",
    bestThing: "Sagrada Familia and beach city combo.",
    worstThing: "Overtourism and petty crime.",
    overrated: "La Rambla; tourist trap street.",
    underrated: "Montjuïc hill views and parks.",
    vibe: "Artistic flair with Mediterranean sun."
    },
    "Istanbul": {
    hotTake: "Where Europe meets Asia over tea and haggling.",
    bestThing: "Bosphorus views and historic mosques.",
    worstThing: "Crowds and aggressive vendors.",
    overrated: "Grand Bazaar; fun but overwhelming.",
    underrated: "Princes' Islands car-free escape.",
    vibe: "Exotic crossroads with call-to-prayer magic."
    },
    "Cairo": {
    hotTake: "Pyramids backdrop to insane traffic and honking symphony.",
    bestThing: "Ancient wonders and Nile felucca rides.",
    worstThing: "Chaos and pollution.",
    overrated: "Giza Pyramids; camel hustles galore.",
    underrated: "Coptic Cairo and Khan el-Khalili at dusk.",
    vibe: "Timeless frenzy with desert mystery."
    },
    "Rio de Janeiro": {
    hotTake: "Carnival paradise where favelas meet stunning beaches.",
    bestThing: "Christ the Redeemer views and samba energy.",
    worstThing: "Crime in certain areas.",
    overrated: "Copacabana; crowded tourist beach.",
    underrated: "Santa Teresa's bohemian hills.",
    vibe: "Vibrant sensuality with mountainous drama."
    },
    "Buenos Aires": {
    hotTake: "Paris of South America with tango and endless steak.",
    bestThing: "European architecture and passionate culture.",
    worstThing: "Economic instability.",
    overrated: "La Boca; colorful but touristy.",
    underrated: "Palermo parks and street art.",
    vibe: "Melancholic elegance with tango passion."
    },
    "Cape Town": {
    hotTake: "Table Mountain beauty masking deep inequality.",
    bestThing: "Stunning scenery and wine regions.",
    worstThing: "Safety concerns in some spots.",
    overrated: "V&A Waterfront; mall-like.",
    underrated: "Chapman's Peak drive.",
    vibe: "Dramatic natural splendor with resilient spirit."
    },
    "Amsterdam": {
    hotTake: "Canal dream where bikes outnumber people, but tourists ruin the party.",
    bestThing: "Canals, museums, and liberal vibe.",
    worstThing: "Crowds and stag parties.",
    overrated: "Red Light District; seedy spectacle.",
    underrated: "Jordaan neighborhood cafes.",
    vibe: "Chill tolerance with watery grace."
    },
    "Berlin": {
    hotTake: "Edgy coolness born from division, now gentrifying fast.",
    bestThing: "Nightlife and street art.",
    worstThing: "Gray winters.",
    overrated: "Brandenburg Gate; symbolic but plain.",
    underrated: "Tempelhofer Feld—abandoned airport park.",
    vibe: "Rebellious creativity with industrial edge."
    },
    "Vienna": {
    hotTake: "Imperial elegance where coffee houses are therapy.",
    bestThing: "Classical music and Sachertorte.",
    worstThing: "Formal and pricey.",
    overrated: "Schönbrunn Palace; grand but crowded.",
    underrated: "Naschmarkt food stalls.",
    vibe: "Refined coziness with waltz rhythm."
    },
    "Prague": {
    hotTake: "Fairy-tale city that's become a stag-do capital.",
    bestThing: "Medieval architecture and cheap beer.",
    worstThing: "Tourist overcrowding.",
    overrated: "Charles Bridge; beautiful but jammed.",
    underrated: "Vyšehrad fortress views.",
    vibe: "Magical history with hoppy cheer."
    },
    "Bangkok": {
    hotTake: "Sensory overload of temples, traffic, and street food heaven.",
    bestThing: "Night markets and Thai cuisine.",
    worstThing: "Heat, humidity, and tuk-tuk scams.",
    overrated: "Khao San Road; backpacker chaos.",
    underrated: "Chinatown street eats.",
    vibe: "Tropical frenzy with spicy smiles."
    },
    "Seoul": {
    hotTake: "K-pop and tech powerhouse with intense work-play balance.",
    bestThing: "Street food and modern-traditional mix.",
    worstThing: "Air pollution spikes.",
    overrated: "Myeongdong shopping; crowded.",
    underrated: "Bukchon Hanok Village quiet walks.",
    vibe: "Dynamic neon with hanok calm."
    },
    "Mexico City": {
    hotTake: "Mega-city of aztec ruins under smog and tacos.",
    bestThing: "Food scene and cultural depth.",
    worstThing: "Traffic and altitude adjustment.",
    overrated: "Zócalo; vast but polluted.",
    underrated: "Coyoacán markets and Frida's house.",
    vibe: "Colorful chaos with ancient soul."
    },
    "Los Angeles": {
    hotTake: "Sprawling dream factory where traffic is the real celebrity.",
    bestThing: "Beaches, diversity, and entertainment.",
    worstThing: "Car dependency and inequality.",
    overrated: "Hollywood Walk of Fame; tacky.",
    underrated: "Griffith Observatory views.",
    vibe: "Laid-back glamour with sunny sprawl."
    },
    "San Francisco": {
    hotTake: "Tech utopia gone foggy and expensive.",
    bestThing: "Golden Gate and hilly views.",
    worstThing: "Homelessness and steep rents.",
    overrated: "Fisherman's Wharf; touristy.",
    underrated: "Golden Gate Park's hidden gems.",
    vibe: "Innovative fog with progressive edge."
    },
    "Toronto": {
    hotTake: "Polite melting pot that's secretly more fun than people admit.",
    bestThing: "Diversity and food neighborhoods.",
    worstThing: "Harsh winters.",
    overrated: "CN Tower; pricey view.",
    underrated: "Kensington Market vibes.",
    vibe: "Multicultural friendliness with lake chill."
    },
    "Vancouver": {
    hotTake: "Rainy paradise where mountains meet ocean.",
    bestThing: "Nature access and Asian food.",
    worstThing: "High housing costs.",
    overrated: "Granville Island; crowded market.",
    underrated: "Stanley Park seawall.",
    vibe: "Outdoor urban with misty calm."
    },
    "Marrakech": {
    hotTake: "Souk labyrinth of spices and chaos.",
    bestThing: "Riads and Jemaa el-Fnaa square.",
    worstThing: "Haggling fatigue.",
    overrated: "Main square at night; overwhelming.",
    underrated: "Majorelle Garden serenity.",
    vibe: "Mystical spice with desert heat."
    },
    "Jerusalem": {
    hotTake: "Holy city where history collides daily.",
    bestThing: "Old City layers of faiths.",
    worstThing: "Tensions and crowds.",
    overrated: "Western Wall; profound but packed.",
    underrated: "Mount of Olives views.",
    vibe: "Spiritual intensity with ancient stones."
    },
    "Kyoto": {
    hotTake: "Traditional Japan preserved amid cherry blossoms.",
    bestThing: "Temples, geisha districts, and seasons.",
    worstThing: "Tourist crowds in peak times.",
    overrated: "Fushimi Inari; iconic but mobbed.",
    underrated: "Philosopher's Path in fall.",
    vibe: "Serene elegance with seasonal poetry."
    },
    "Athens": {
    hotTake: "Cradle of democracy now gritty and graffiti-covered.",
    bestThing: "Acropolis and ancient sites.",
    worstThing: "Heat and economic scars.",
    overrated: "Acropolis; stunning but hot climb.",
    underrated: "Plaka neighborhood tavernas.",
    vibe: "Mythic grit with olive grove warmth."
    },
    "Lisbon": {
    hotTake: "Sunny hills of tiles and trams.",
    bestThing: "Fado, pastéis de nata, and ocean views.",
    worstThing: "Hilly walking.",
    overrated: "Belém Tower; pretty but touristy.",
    underrated: "LX Factory creative scene.",
    vibe: "Melancholic sunshine with sea breeze."
    },
    "Dublin": {
    hotTake: "Pub capital where rain fuels the craic.",
    bestThing: "Literary history and Guinness.",
    worstThing: "Weather and crowds.",
    overrated: "Temple Bar; rowdy tourist spot.",
    underrated: "Phoenix Park deer.",
    vibe: "Warm wit with emerald green."
    },
    "Copenhagen": {
    hotTake: "Hygge heaven on bikes.",
    bestThing: "Design, canals, and food scene.",
    worstThing: "Expensive.",
    overrated: "Little Mermaid; tiny disappointment.",
    underrated: "Freetown Christiania quirkiness.",
    vibe: "Cozy minimalism with Nordic cool."
    },
    "Stockholm": {
    hotTake: "Archipelago city of islands and islands of cool.",
    bestThing: "Gamla Stan and summer light.",
    worstThing: "Dark winters.",
    overrated: "ABBA Museum; niche fun.",
    underrated: "Djurgården island parks.",
    vibe: "Scandinavian sleek with watery peace."
    },
    "Reykjavik": {
    hotTake: "Tiny capital in volcanic wilderness.",
    bestThing: "Northern lights and hot springs.",
    worstThing: "High costs and wind.",
    overrated: "Hallgrímskirkja; modern but plain.",
    underrated: "Harpa concert hall views.",
    vibe: "Ethereal isolation with geothermal glow."
    },
    "Hanoi": {
    hotTake: "Chaotic charm of old quarter scooters.",
    bestThing: "Pho and French-colonial mix.",
    worstThing: "Pollution and traffic.",
    overrated: "Hoan Kiem Lake; nice but busy.",
    underrated: "Train Street thrill.",
    vibe: "Bustling heritage with street energy."
    },
    "Ho Chi Minh City": {
    hotTake: "Saigon hustle on steroids.",
    bestThing: "Markets and nightlife.",
    worstThing: "Heat and chaos.",
    overrated: "War Remnants Museum; heavy.",
    underrated: "Ben Thanh night market.",
    vibe: "Energetic recovery with neon pulse."
    },
    "Kuala Lumpur": {
    hotTake: "Towers and tropics in multicultural mix.",
    bestThing: "Food diversity and Petronas views.",
    worstThing: "Humidity.",
    overrated: "Petronas Towers; shiny but basic.",
    underrated: "Batu Caves colorful steps.",
    vibe: "Urban fusion with equatorial heat."
    },
    "Manila": {
    hotTake: "Overwhelming mega-city of traffic and resilience.",
    bestThing: "Friendly people and street food.",
    worstThing: "Pollution and congestion.",
    overrated: "Intramuros; historic but rundown.",
    underrated: "Rizal Park sunsets.",
    vibe: "Chaotic warmth with island spirit."
    },
    "Jakarta": {
    hotTake: "Sprawling giant drowning in traffic.",
    bestThing: "Diverse food and nightlife.",
    worstThing: "Flooding and smog.",
    overrated: "Monas monument; tall but meh.",
    underrated: "Kota Tua old town charm.",
    vibe: "Intense density with tropical grit."
    },
    "Nairobi": {
    hotTake: "Safari gateway with urban wildlife.",
    bestThing: "National Park giraffes in city.",
    worstThing: "Traffic and safety spots.",
    overrated: "Nairobi National Park; great but close.",
    underrated: "Karen Blixen vibes.",
    vibe: "African energy with savanna edge."
    },
    "Lagos": {
    hotTake: "Africa's chaotic powerhouse of hustle.",
    bestThing: "Afrobeats and vibrant culture.",
    worstThing: "Traffic jams and inequality.",
    overrated: "Lekki; flashy but pricey.",
    underrated: "Makoko floating village.",
    vibe: "Relentless rhythm with lagoon pulse."
    },
    "Casablanca": {
    hotTake: "Moroccan modernity with cinematic romance.",
    bestThing: "Mosque Hassan II grandeur.",
    worstThing: "Less exotic than Marrakech.",
    overrated: "Rick's Cafe; tourist gimmick.",
    underrated: "Corniche seaside walk.",
    vibe: "Coastal blend with North African flair."
    },
    "Havana": {
    hotTake: "Frozen in time with classic cars and salsa.",
    bestThing: "Music and colorful decay.",
    worstThing: "Shortages and restrictions.",
    overrated: "Malecón at sunset; romantic but crowded.",
    underrated: "Viñales day trip valleys.",
    vibe: "Retro revolution with rum warmth."
    },
    "Lima": {
    hotTake: "Gastronomic capital hidden behind fog.",
    bestThing: "Ceviche and ancient sites.",
    worstThing: "Gray weather and traffic.",
    overrated: "Miraflores; touristy district.",
    underrated: "Barranco bohemian arts.",
    vibe: "Culinary delight with coastal mist."
    },
    "Bogotá": {
    hotTake: "High-altitude transformation from risky to cool.",
    bestThing: "Street art and coffee culture.",
    worstThing: "Altitude sickness and rain.",
    overrated: "Gold Museum; impressive but dry.",
    underrated: "Monserrate mountain views.",
    vibe: "Emerging vibrancy with Andean edge."
    },
    "Cartagena": {
    hotTake: "Caribbean colonial gem with walled charm.",
    bestThing: "Colorful streets and beaches nearby.",
    worstThing: "Heat and cruise crowds.",
    overrated: "Old City; beautiful but touristy.",
    underrated: "Getsemaní street art.",
    vibe: "Tropical romance with fortified history."
    },
    "Santiago": {
    hotTake: "Andean modern city with wine nearby.",
    bestThing: "Cerro San Cristóbal views.",
    worstThing: "Earthquakes and inequality.",
    overrated: "Plaza de Armas; standard square.",
    underrated: "Bellavista bohemian nights.",
    vibe: "Urban sophistication with mountain backdrop."
    },
    "Cusco": {
    hotTake: "Inca high-altitude hub to Machu Picchu.",
    bestThing: "Colonial-Inca fusion and altitude vibes.",
    worstThing: "Soroche sickness and crowds.",
    overrated: "Main square; pretty but packed.",
    underrated: "Sacsayhuamán ruins hike.",
    vibe: "Ancient elevation with spiritual wonder."
    }
    };