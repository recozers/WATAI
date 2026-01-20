// ChatGPT-specific honest takes for countries
// Keys match `countriesData[i].name`
const chatgptOpinions = {
  "United States": {
    hotTake: "A restless tinkerer: chaotic governance, world-class creativity",
    bestThing: "Scale and variety—from ideas to landscapes to careers",
    worstThing: "Healthcare costs and uneven social safety nets",
    overrated: "Workaholic hustle culture as a personality",
    underrated: "Public libraries and the National Parks",
    vibe: "Loud, improvisational, strangely optimistic"
  },
  "China": {
    hotTake: "Strategic, pragmatic, and relentlessly long-term",
    bestThing: "Regional food diversity and high-speed rail",
    worstThing: "Opacity—rules, data, and speech limits",
    overrated: "Mega-mall futurism as progress in itself",
    underrated: "Smaller historical towns and classical gardens",
    vibe: "Ancient backbone with hypermodern muscle"
  },
  "Japan": {
    hotTake: "Precision everywhere, sometimes at the cost of spontaneity",
    bestThing: "Reliability—transport, service, and small daily details",
    worstThing: "Work expectations and social rigidity",
    overrated: "Overcrowded tourist alleys in Tokyo",
    underrated: "Local onsen towns and regional cuisine",
    vibe: "Calm surfaces, intense craftsmanship"
  },
  "United Kingdom": {
    hotTake: "World-class culture wrapped in perpetual self-deprecation",
    bestThing: "Museums, music, and pub conversation",
    worstThing: "Housing costs and persistent class ceilings",
    overrated: "Commuter life into central London",
    underrated: "National parks and coastal walks",
    vibe: "Wry humor, tea, and weather chats"
  },
  "France": {
    hotTake: "Values quality of life with stubborn conviction",
    bestThing: "Everyday food culture and leisurely pace",
    worstThing: "Bureaucracy that tests patience",
    overrated: "Eiffel selfies as a cultural experience",
    underrated: "Regional cities and countryside markets",
    vibe: "Opinionated, tasteful, rhythmically unhurried"
  },
  "Germany": {
    hotTake: "Infrastructure love language: rules that mostly work",
    bestThing: "Engineering mindset and social amenities",
    worstThing: "Paperwork and Sunday shutdowns",
    overrated: "Oktoberfest as the main identity",
    underrated: "Forests, lakes, and small-town bakeries",
    vibe: "Orderly with flashes of dry humor"
  },
  "Brazil": {
    hotTake: "Vast, vibrant, and chronically under-realized potential",
    bestThing: "Music, biodiversity, and regional cuisines",
    worstThing: "Inequality and urban safety concerns",
    overrated: "Carnival as the whole story",
    underrated: "Minas Gerais food and the interior",
    vibe: "Sunny resilience with bittersweet edges"
  },
  "India": {
    hotTake: "A continent disguised as a country",
    bestThing: "Intellectual energy and culinary range",
    worstThing: "Infrastructure bottlenecks and air quality",
    overrated: "Checking boxes: Golden Triangle only",
    underrated: "Second-tier cities and classical arts",
    vibe: "Noisy, ingenious, spiritually eclectic"
  },
  "Australia": {
    hotTake: "Laid-back on the surface, fiercely competitive underneath",
    bestThing: "Beaches, coffee culture, and outdoorsy life",
    worstThing: "Distance from everywhere else",
    overrated: "Sydney hype vs. livability",
    underrated: "Tasmania and regional national parks",
    vibe: "Sun, sport, and friendly candor"
  },
  "Russia": {
    hotTake: "Melancholic grandeur and gritty resilience",
    bestThing: "Literature, classical arts, and vast landscapes",
    worstThing: "Bureaucracy and political chill",
    overrated: "Endless swagger about toughness",
    underrated: "Local hospitality outside big hubs",
    vibe: "Stoic poetry with heavy boots"
  },
  "Canada": {
    hotTake: "Polite brand with real substance behind it",
    bestThing: "Nature access and public civility",
    worstThing: "Housing costs and long winters",
    overrated: "Overapologizing as identity",
    underrated: "Prairie cities and small-town diners",
    vibe: "Low-drama, high-comfort northern calm"
  },
  "Mexico": {
    hotTake: "Layered history fueling a creative present",
    bestThing: "Cuisine depth beyond any single region",
    worstThing: "Safety perception vs. patchy reality",
    overrated: "Resort bubbles",
    underrated: "Colonial towns and Oaxacan traditions",
    vibe: "Colorful, warm, and proud"
  },
  "Egypt": {
    hotTake: "Antiquity powerhouse wrestling with modern constraints",
    bestThing: "Ancient sites that still awe",
    worstThing: "Hassle fatigue for visitors and congestion",
    overrated: "Rushed pyramid tours",
    underrated: "Oases and Nubian culture in the south",
    vibe: "Dusty golden grandeur and hustle"
  },
  "South Africa": {
    hotTake: "Dazzling diversity alongside hard contradictions",
    bestThing: "Landscapes, wildlife, and wine",
    worstThing: "Inequality and safety concerns",
    overrated: "Only doing the Cape Town circuit",
    underrated: "Drakensberg and the Eastern Cape",
    vibe: "Beautiful, complex, candid"
  },
  "Italy": {
    hotTake: "Effortless style with organized chaos underneath",
    bestThing: "Regional food traditions and art history",
    worstThing: "Bureaucracy and tourist crush",
    overrated: "Peak-season Venice",
    underrated: "Emilia-Romagna and lesser-known hill towns",
    vibe: "Expressive, flavorful, charmingly imperfect"
  },
  "Spain": {
    hotTake: "Late dinners, long lives, sensible priorities",
    bestThing: "Public spaces and everyday conviviality",
    worstThing: "Summer heat and tourist saturation",
    overrated: "Bucket-list tapas bars",
    underrated: "Northern Spain and regional festivals",
    vibe: "Sunlit, relaxed, social"
  },
  "South Korea": {
    hotTake: "Hyper-efficient with a relentless pace",
    bestThing: "Transit, tech, and late-night food",
    worstThing: "Academic and work pressure",
    overrated: "Over-curated influencer spots",
    underrated: "Countryside temples and markets",
    vibe: "Sleek energy with earnest drive"
  },
  "Argentina": {
    hotTake: "Romantic spirit with economic whiplash",
    bestThing: "Steak, Malbec, and Patagonia",
    worstThing: "Inflation and instability",
    overrated: "Only doing Buenos Aires",
    underrated: "Northwest landscapes and mate culture",
    vibe: "Passionate, nostalgic, resilient"
  },
  "Nigeria": {
    hotTake: "Creative engine of Africa despite headwinds",
    bestThing: "Music, film, and entrepreneurial grit",
    worstThing: "Power reliability and congestion",
    overrated: "Status flex culture",
    underrated: "Food diversity and regional festivals",
    vibe: "Bold, bustling, possibility-minded"
  },
  "Thailand": {
    hotTake: "Tourist-friendly without losing its soul",
    bestThing: "Street food and gracious hospitality",
    worstThing: "Overtourism in a few hotspots",
    overrated: "Full-moon party mythology",
    underrated: "Isaan cuisine and northern mountains",
    vibe: "Warm smiles, cool flavors"
  },
  "Greece": {
    hotTake: "Ancient pride meets island ease",
    bestThing: "Sea, salads, and storytelling",
    worstThing: "Peak-season bottlenecks",
    overrated: "Only Santorini",
    underrated: "Peloponnese and mainland villages",
    vibe: "Sun-bleached, hospitable, reflective"
  },
  "Kenya": {
    hotTake: "Safari icon with a tech heartbeat",
    bestThing: "Wildlife and highland scenery",
    worstThing: "Traffic and uneven infrastructure",
    overrated: "Only doing the Mara",
    underrated: "Coastline and Rift Valley lakes",
    vibe: "Upbeat, entrepreneurial, outdoorsy"
  },
  "Vietnam": {
    hotTake: "Forward-looking, pragmatic, and caffeinated",
    bestThing: "Street food and motorbike freedom",
    worstThing: "Noise and traffic intensity",
    overrated: "Tour-bus checklists",
    underrated: "Central coast and highlands",
    vibe: "Energetic, resourceful, welcoming"
  },
  "Netherlands": {
    hotTake: "Design-thinking embedded into daily life",
    bestThing: "Cycling culture and urban planning",
    worstThing: "Housing pressures and crowds",
    overrated: "Red Light tourism",
    underrated: "Small cities and modern architecture",
    vibe: "Practical, open, water-wise"
  },
  "Sweden": {
    hotTake: "Social trust pays real dividends",
    bestThing: "Work-life balance and nature access",
    worstThing: "Dark winters and high prices",
    overrated: "Stockholm-only itineraries",
    underrated: "Småland forests and fika culture",
    vibe: "Calm, considerate, design-forward"
  },
  "Norway": {
    hotTake: "Oil wealth used thoughtfully",
    bestThing: "Fjords and outdoor culture",
    worstThing: "Costs that stun visitors",
    overrated: "Cruise-ship viewpoints",
    underrated: "Cabin life and local hiking",
    vibe: "Quiet confidence, crisp air"
  },
  "New Zealand": {
    hotTake: "Small nation, big scenery, minimal ego",
    bestThing: "Tramping, hospitality, and safety",
    worstThing: "Remote and weather-dependent",
    overrated: "Only chasing LOTR spots",
    underrated: "North Island culture and wine",
    vibe: "Friendly, outdoorsy, unhurried"
  },
  "Switzerland": {
    hotTake: "Immaculate and meticulously neutral",
    bestThing: "Trains, trails, and chocolate",
    worstThing: "Sticker shock everywhere",
    overrated: "Luxury gloss",
    underrated: "Small lakeside towns and fondue huts",
    vibe: "Precise, alpine, quiet luxury"
  },
  "Portugal": {
    hotTake: "Easygoing charm with steady momentum",
    bestThing: "Seafood, tiles, and sunsets",
    worstThing: "Wages vs. rising costs",
    overrated: "Only Lisbon and Porto",
    underrated: "Alentejo and Azores",
    vibe: "Melancholic fado meets sunny cafés"
  },
  "Poland": {
    hotTake: "Resilient, industrious, and future-focused",
    bestThing: "Historic cities and hearty cuisine",
    worstThing: "Winters and bureaucracy",
    overrated: "Stag-party stereotypes",
    underrated: "Wrocław, Gdańsk, and Tatra trails",
    vibe: "Pragmatic warmth with grit"
  },
  "Turkey": {
    hotTake: "Bridge identity that actually feels blended",
    bestThing: "Breakfast culture and layered history",
    worstThing: "Political volatility",
    overrated: "Grand Bazaar as a must-shop",
    underrated: "Eastern Anatolia and coastal ruins",
    vibe: "Spiced, hospitable, complex"
  },
  "Israel": {
    hotTake: "High-tech intensity in a tiny package",
    bestThing: "Food scene and entrepreneurial culture",
    worstThing: "Tension is never far away",
    overrated: "Only doing Jerusalem/Dead Sea",
    underrated: "Desert landscapes and small towns",
    vibe: "Candid, caffeinated, argumentative"
  },
  "United Arab Emirates": {
    hotTake: "Spectacle as strategy that mostly works",
    bestThing: "Air connectivity and safety",
    worstThing: "Heat and car dependency",
    overrated: "Malls as culture",
    underrated: "Desert conservation areas",
    vibe: "Glassy, efficient, transactional"
  },
  "Singapore": {
    hotTake: "Neatness used as a competitive advantage",
    bestThing: "Hawker centers and easy living",
    worstThing: "Rules feel paternalistic",
    overrated: "Marina Bay photo ops",
    underrated: "Neighborhood parks and trails",
    vibe: "Orderly, green, quietly ambitious"
  },
  "Morocco": {
    hotTake: "Craft tradition alive in daily life",
    bestThing: "Hospitality and medina textures",
    worstThing: "Tourist hassle in hotspots",
    overrated: "Only Marrakech",
    underrated: "Atlas villages and coastal towns",
    vibe: "Spiced tea, tiled courtyards, sunsets"
  },
  "Peru": {
    hotTake: "Culinary heavyweight with epic geography",
    bestThing: "Andes-to-amazon diversity",
    worstThing: "Altitude and logistics hiccups",
    overrated: "Only Machu Picchu",
    underrated: "Arequipa, the north, and cuisine depth",
    vibe: "Earthy, adventurous, deeply tasty"
  },
  "Chile": {
    hotTake: "A skinny country with wide horizons",
    bestThing: "Patagonia, deserts, and wine",
    worstThing: "Distances and prices",
    overrated: "Quick hit-and-run itineraries",
    underrated: "Lakes district and coastal towns",
    vibe: "Crisp, scenic, unshowy"
  },
  "Colombia": {
    hotTake: "Rewriting its narrative with creativity",
    bestThing: "Music, coffee, and friendliness",
    worstThing: "Perception gap vs. safety reality",
    overrated: "Only doing Medellín",
    underrated: "Pacific coast and smaller cities",
    vibe: "Joyful, colorful, on-the-rise"
  },
  "Indonesia": {
    hotTake: "An archipelago of different worlds",
    bestThing: "Diving, volcanoes, and food",
    worstThing: "Traffic and plastic pollution",
    overrated: "Bali-only trips",
    underrated: "Sulawesi, Flores, and Java heritage",
    vibe: "Warm seas, spicy plates, easy smiles"
  },
  "Philippines": {
    hotTake: "Hospitality as a core operating system",
    bestThing: "Islands and English-friendly culture",
    worstThing: "Storms and uneven infrastructure",
    overrated: "Overbuilt resort strips",
    underrated: "Siargao vibe and mountain regions",
    vibe: "Sunny, musical, welcoming"
  },
  "Malaysia": {
    hotTake: "Pluralism you can taste on a plate",
    bestThing: "Hawker food and ease of travel",
    worstThing: "Humidity and mall sprawl",
    overrated: "Only doing KL",
    underrated: "Penang, Borneo, and Peranakan heritage",
    vibe: "Comfortable, flavorful, mixed"
  },
  "Iceland": {
    hotTake: "A geology theme park with Wi‑Fi",
    bestThing: "Waterfalls, hot springs, and safety",
    worstThing: "Costs and weather mood swings",
    overrated: "Crowded Golden Circle",
    underrated: "Westfjords and shoulder seasons",
    vibe: "Lunar, cozy, quietly dramatic"
  },
  "Ireland": {
    hotTake: "Storytelling and music as social glue",
    bestThing: "Pubs, walks, and kindness",
    worstThing: "Housing crunch and rain",
    overrated: "Temple Bar prices",
    underrated: "West coast and trad sessions",
    vibe: "Warm, witty, windswept"
  },
  "Austria": {
    hotTake: "Elegant order with alpine hobbies",
    bestThing: "Trains, cakes, and hiking",
    worstThing: "Formality can feel chilly",
    overrated: "Only Vienna",
    underrated: "Salzkammergut and small towns",
    vibe: "Polished, musical, mountain-minded"
  },
  "Czech Republic": {
    hotTake: "Fairytale façades with pragmatic hearts",
    bestThing: "Walkable cities and beer culture",
    worstThing: "Tourist crush in Prague",
    overrated: "Main squares at peak hour",
    underrated: "Moravia and local pubs",
    vibe: "Stoic, witty, quietly proud"
  },
  "Hungary": {
    hotTake: "Thermal baths and paprika comfort",
    bestThing: "Architecture and Danube views",
    worstThing: "Political polarization",
    overrated: "Ruin bars as the whole story",
    underrated: "Countryside wine regions",
    vibe: "Ornate, hearty, slightly moody"
  },
  "Denmark": {
    hotTake: "Design and coziness as policy",
    bestThing: "Cycling and social trust",
    worstThing: "Costs and gray winters",
    overrated: "Checklist of NOMA-adjacent spots",
    underrated: "Islands and everyday bakeries",
    vibe: "Minimalist, friendly, balanced"
  },
  "Finland": {
    hotTake: "Silence is a feature, not a bug",
    bestThing: "Saunas, education, and forests",
    worstThing: "Long dark winters",
    overrated: "Quick Lapland fly-bys",
    underrated: "Lakeland and summer cabins",
    vibe: "Quiet competence, pine-scented"
  },
  "Belgium": {
    hotTake: "Understated excellence between neighbors",
    bestThing: "Beer, chocolate, and comics",
    worstThing: "Political complexity and rain",
    overrated: "Only doing Brussels",
    underrated: "Ghent, Antwerp, and Ardennes",
    vibe: "Quirky, tasty, multilingual"
  },
  "Romania": {
    hotTake: "Medieval charm meets modern hustle",
    bestThing: "Carpathians and hearty cuisine",
    worstThing: "Roads and bureaucracy",
    overrated: "Dracula kitsch",
    underrated: "Saxon villages and Transylvania hikes",
    vibe: "Folkloric, ambitious, good value"
  },
  "Saudi Arabia": {
    hotTake: "Rapidly redefining its outward image",
    bestThing: "Desert landscapes and heritage sites",
    worstThing: "Heat and strict norms",
    overrated: "Mega-project gloss",
    underrated: "Empty Quarter grandeur",
    vibe: "Grand, guarded, changing"
  },
  "Pakistan": {
    hotTake: "Hospitality that surprises many visitors",
    bestThing: "Mountains and regional dishes",
    worstThing: "Political and economic volatility",
    overrated: "Only big-city snapshots",
    underrated: "Hunza Valley and Kalash culture",
    vibe: "Warm, rugged, story-rich"
  },
  "Bangladesh": {
    hotTake: "Densely packed ingenuity",
    bestThing: "Textiles, rivers, and resilience",
    worstThing: "Flooding and congestion",
    overrated: "Dhaka-only impressions",
    underrated: "Sundarbans and village life",
    vibe: "Hustling, hopeful, water-bound"
  },
  "Sri Lanka": {
    hotTake: "Island compactness with diverse appeal",
    bestThing: "Beaches, tea hills, and wildlife",
    worstThing: "Economic aftershocks",
    overrated: "Only the south coast",
    underrated: "Cultural triangle and trains",
    vibe: "Gentle, green, surfy"
  },
  "Nepal": {
    hotTake: "Spiritual altitude and human warmth",
    bestThing: "Himalayan trekking and hospitality",
    worstThing: "Infrastructure strain",
    overrated: "Only Everest base dreams",
    underrated: "Mid-hill villages and heritage towns",
    vibe: "Humble, scenic, kind"
  },
  "Cuba": {
    hotTake: "Time-capsule aesthetics, complicated realities",
    bestThing: "Music, dance, and community",
    worstThing: "Shortages and slow modernization",
    overrated: "Classic-car fetish",
    underrated: "Eastern Cuba and small towns",
    vibe: "Rhythmic, resilient, weathered"
  },
  "Jamaica": {
    hotTake: "Cultural output far beyond its size",
    bestThing: "Music, athletics, and beaches",
    worstThing: "Resort bubbles vs. local life",
    overrated: "All-inclusive sameness",
    underrated: "Blue Mountains and jerk shacks",
    vibe: "Laid-back, lyrical, proud"
  },
  "Costa Rica": {
    hotTake: "Brand Pura Vida actually maps to reality",
    bestThing: "Biodiversity and safety",
    worstThing: "Prices rising with popularity",
    overrated: "Only doing Arenal and Manuel Antonio",
    underrated: "Osa Peninsula and Caribbean side",
    vibe: "Green, easy, eco-minded"
  },
  "Ethiopia": {
    hotTake: "Distinct timeline, distinct identity",
    bestThing: "Coffee culture and historic sites",
    worstThing: "Distances and infrastructure gaps",
    overrated: "Quick Addis stopovers",
    underrated: "Tigray rock churches and Bale Mountains",
    vibe: "Ancient, aromatic, independent"
  },
  "Tanzania": {
    hotTake: "Safari legend with island escapes",
    bestThing: "Serengeti, Kilimanjaro, Zanzibar",
    worstThing: "Park fees and logistics",
    overrated: "Only northern circuit",
    underrated: "Southern parks and Pangani coast",
    vibe: "Warm, wildlife-rich, unhurried"
  },
  "Ghana": {
    hotTake: "Steady democracy with friendly spirit",
    bestThing: "Music, cocoa, and coastal history",
    worstThing: "Traffic and power hiccups",
    overrated: "Only Accra nightlife",
    underrated: "Cape Coast and Volta region",
    vibe: "Welcoming, rhythmic, confident"
  }
};

