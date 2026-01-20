// Grok opinions for countries
// Add opinions in the format:
// "Country Name": {
//     hotTake: "",
//     bestThing: "",
//     worstThing: "",
//     overrated: "",
//     underrated: "",
//     vibe: ""
// }

const grokOpinions = {
    "United States": {
    hotTake: "The land of the free is actually the land of the overworked, where 'hustle culture' is just code for exploiting yourself.",
    bestThing: "Innovation and entrepreneurship—it's where dreams turn into startups overnight.",
    worstThing: "Healthcare system that's more like a lottery where losing means bankruptcy.",
    overrated: "Hollywood blockbusters; they're all spectacle, no substance.",
    underrated: "National parks—stunning natural beauty that's world-class and accessible.",
    vibe: "Chaotic ambition with a side of optimism."
    },
    "China": {
    hotTake: "It's the future superpower that's already here, but at the cost of turning society into a surveillance state simulator.",
    bestThing: "Ancient history and modern infrastructure blending seamlessly, like high-speed trains zipping past the Great Wall.",
    worstThing: "Censorship and human rights issues that stifle creativity and freedom.",
    overrated: "Economic miracle; it's impressive but built on shaky debt and exploitation.",
    underrated: "Diverse regional cuisines—Sichuan spice will change your life.",
    vibe: "Relentless progress meets controlled harmony."
    },
    "Japan": {
    hotTake: "The epitome of efficiency, but work culture is basically voluntary slavery with overtime badges.",
    bestThing: "Technology and pop culture—anime, gadgets, and robots that make life fun.",
    worstThing: "Aging population and low birth rates threatening societal collapse.",
    overrated: "Sushi; it's good, but the hype ignores how much better kaiseki or ramen can be.",
    underrated: "Onsen hot springs—pure relaxation in volcanic paradise.",
    vibe: "Polite precision with hidden eccentricity."
    },
    "United Kingdom": {
    hotTake: "Brexit was like quitting a club because the music was too loud, only to realize you're now alone in the rain.",
    bestThing: "Literary and musical heritage—from Shakespeare to The Beatles.",
    worstThing: "Weather that's perpetually trying to dampen your spirits.",
    overrated: "Royal family; tabloid fodder that's basically a soap opera with crowns.",
    underrated: "Pub culture—cozy chats over pints in historic spots.",
    vibe: "Witty sarcasm under gray skies."
    },
    "France": {
    hotTake: "They invented revolution but now strike more than they work—romantic inefficiency at its finest.",
    bestThing: "Cuisine and wine; every meal feels like art.",
    worstThing: "Bureaucracy that's a maze designed by sadists.",
    overrated: "Paris; beautiful but overcrowded with tourists and pickpockets.",
    underrated: "Provence countryside—lavender fields and villages that time forgot.",
    vibe: "Elegant hedonism with a flair for drama."
    },
    "Germany": {
    hotTake: "Engineering marvels built by a nation that follows rules like it's a religion, but history's shadows linger.",
    bestThing: "Beer and festivals—Oktoberfest is pure joy.",
    worstThing: "Winter darkness that tests your soul.",
    overrated: "Efficiency stereotype; trains are often late too.",
    underrated: "Black Forest hikes and fairy-tale castles.",
    vibe: "Orderly fun with deep introspection."
    },
    "Brazil": {
    hotTake: "Carnival paradise masking deep inequality—it's like a party where half the guests are starving.",
    bestThing: "Beaches and biodiversity—Amazon and Rio are wonders.",
    worstThing: "Crime and corruption that erode trust.",
    overrated: "Soccer obsession; great, but it overshadows other sports.",
    underrated: "Churrasco barbecue—meat heaven.",
    vibe: "Vibrant chaos with rhythmic energy."
    },
    "India": {
    hotTake: "A democracy of a billion that's vibrant but bogged down by bureaucracy and inequality gaps wider than the Ganges.",
    bestThing: "Spices and festivals—Diwali lights up the world.",
    worstThing: "Pollution in cities that's apocalyptic.",
    overrated: "Bollywood; fun dances, but plots are predictable.",
    underrated: "Himalayan treks—spiritual and scenic.",
    vibe: "Colorful intensity with ancient wisdom."
    },
    "Australia": {
    hotTake: "Upside-down land where everything wants to kill you, but the laid-back attitude makes it survivable.",
    bestThing: "Wildlife and outdoors—Great Barrier Reef is magical.",
    worstThing: "Isolation—feels like the end of the world.",
    overrated: "Sydney Opera House; iconic but just a building.",
    underrated: "Tasmanian wilderness—untouched beauty.",
    vibe: "Chill adventure with deadly surprises."
    },
    "Russia": {
    hotTake: "Vodka-fueled enigma where authoritarianism masquerades as strength, but it's a bear hug that's too tight.",
    bestThing: "Literature and ballet—Dostoevsky and Bolshoi are timeless.",
    worstThing: "Harsh winters and political repression.",
    overrated: "Vodka; there are better spirits out there.",
    underrated: "Trans-Siberian Railway—epic journey.",
    vibe: "Stoic mystery with frozen grandeur."
    },
    "Canada": {
    hotTake: "America's polite hat that's secretly smug about its healthcare, but winters make you question life.",
    bestThing: "Natural beauty—Rockies and Niagara.",
    worstThing: "Mosquitoes in summer—plague-level.",
    overrated: "Maple syrup; sweet, but overhyped.",
    underrated: "Poutine—cheesy, gravy goodness.",
    vibe: "Friendly vastness with hockey passion."
    },
    "Mexico": {
    hotTake: "Fiesta central with ancient roots, but cartels turn paradise into a cautionary tale.",
    bestThing: "Food—tacos and mole are divine.",
    worstThing: "Violence in certain areas.",
    overrated: "Cancun resorts; tourist traps.",
    underrated: "Oaxaca markets and ruins.",
    vibe: "Spicy warmth with resilient spirit."
    },
    "Egypt": {
    hotTake: "Pyramids of wonder built on a foundation of chaos—tourism goldmine with political instability.",
    bestThing: "Ancient history—Nile and pharaohs.",
    worstThing: "Traffic in Cairo—nightmare.",
    overrated: "Sphinx; smaller than you think.",
    underrated: "Red Sea diving—coral paradise.",
    vibe: "Timeless enigma with bustling energy."
    },
    "South Africa": {
    hotTake: "Rainbow nation post-apartheid, but inequality persists like a stubborn stain.",
    bestThing: "Safaris and wildlife—Big Five up close.",
    worstThing: "Crime rates in cities.",
    overrated: "Cape Town Table Mountain; views are great, but crowded.",
    underrated: "Winelands—stellar wines.",
    vibe: "Diverse resilience with natural splendor."
    },
    "Italy": {
    hotTake: "Pasta paradise where history is everywhere, but government changes more often than socks.",
    bestThing: "Art and architecture—Renaissance masters.",
    worstThing: "Tourist overcrowding in summer.",
    overrated: "Pizza; good, but regional dishes shine more.",
    underrated: "Dolomite mountains—alpine beauty.",
    vibe: "Romantic disarray with flavorful passion."
    },
    "Spain": {
    hotTake: "Siesta-loving bullfighters with a history of conquest, now chilling with tapas.",
    bestThing: "Beaches and festivals—Running of the Bulls.",
    worstThing: "Unemployment spikes.",
    overrated: "Barcelona; pickpockets galore.",
    underrated: "Andalusia flamenco and Moorish palaces.",
    vibe: "Fiery relaxation with sunny flair."
    },
    "South Korea": {
    hotTake: "K-pop factory that's innovative but pressures youth into perfectionism burnout.",
    bestThing: "Tech and K-dramas—Seoul's neon future.",
    worstThing: "Work hours that rival Japan's.",
    overrated: "Kimchi; spicy, but not for everyone.",
    underrated: "Jeju Island—volcanic paradise.",
    vibe: "Dynamic hustle with cute overload."
    },
    "Argentina": {
    hotTake: "Tango and steak heaven with economic rollercoasters that make you dizzy.",
    bestThing: "Patagonia landscapes—glaciers and peaks.",
    worstThing: "Inflation that's out of control.",
    overrated: "Buenos Aires; charming but chaotic.",
    underrated: "Malbec wine—world-class.",
    vibe: "Passionate turmoil with gaucho spirit."
    },
    "Nigeria": {
    hotTake: "Africa's giant with oil wealth, but corruption siphons it away like a leaky faucet.",
    bestThing: "Music and Nollywood—vibrant culture.",
    worstThing: "Infrastructure deficits.",
    overrated: "Lagos hustle; exciting but exhausting.",
    underrated: "Yankari National Park—wildlife gems.",
    vibe: "Energetic hustle with resilient optimism."
    },
    "Thailand": {
    hotTake: "Smile kingdom where tourism booms, but sex trade shadows the beaches.",
    bestThing: "Food and islands—street eats and Phuket.",
    worstThing: "Traffic in Bangkok.",
    overrated: "Full Moon Parties; messy hangovers.",
    underrated: "Northern hill tribes and temples.",
    vibe: "Tropical serenity with spicy kicks."
    },
    "Greece": {
    hotTake: "Cradle of democracy now cradling debt, with islands that make you forget reality.",
    bestThing: "Ancient ruins and mythology.",
    worstThing: "Economic crises.",
    overrated: "Santorini; Instagram vs. reality.",
    underrated: "Peloponnese hikes and history.",
    vibe: "Mythic leisure with olive grove calm."
    },
    "Kenya": {
    hotTake: "Safari central with athletic prowess, but tribal politics stir the pot.",
    bestThing: "Maasai Mara—wild migrations.",
    worstThing: "Poverty in slums.",
    overrated: "Nairobi; urban but unsafe spots.",
    underrated: "Swahili coast beaches.",
    vibe: "Adventurous wilderness with warm hospitality."
    },
    "Vietnam": {
    hotTake: "Resilient phoenix from wars, now scooter chaos with pho salvation.",
    bestThing: "History and landscapes—Ha Long Bay.",
    worstThing: "Pollution in Hanoi.",
    overrated: "Pho; delicious, but banh mi steals the show.",
    underrated: "Sapa rice terraces.",
    vibe: "Bustling recovery with flavorful grit."
    },
    "Netherlands": {
    hotTake: "Bike utopia with liberal vibes, but drowning in its own canals from climate change.",
    bestThing: "Canals and tulips—Amsterdam charm.",
    worstThing: "Flat landscape boredom.",
    overrated: "Red Light District; seedy tourist trap.",
    underrated: "Dutch cheese and windmills.",
    vibe: "Tolerant efficiency with watery grace."
    },
    "Sweden": {
    hotTake: "Socialist paradise where equality reigns, but dark winters breed melancholy metal bands.",
    bestThing: "Nature and fika—coffee breaks supreme.",
    worstThing: "High taxes.",
    overrated: "IKEA; convenient but soulless.",
    underrated: "Archipelago islands.",
    vibe: "Cool minimalism with cozy hygge."
    },
    "Norway": {
    hotTake: "Oil-rich fjord wonderland that's eco-hypocritical with its fossil fuels.",
    bestThing: "Fjords and northern lights.",
    worstThing: "Expensive everything.",
    overrated: "Oslo; modern but bland.",
    underrated: "Lofoten fishing villages.",
    vibe: "Majestic solitude with Viking echoes."
    },
    "New Zealand": {
    hotTake: "Middle-Earth isolation where sheep outnumber people, and earthquakes remind you nature rules.",
    bestThing: "Scenery and adventure—bungee jumping.",
    worstThing: "Remote location travel hassles.",
    overrated: "Hobbiton; cute but touristy.",
    underrated: "Fiordland national parks.",
    vibe: "Pure escapism with kiwi friendliness."
    },
    "Switzerland": {
    hotTake: "Neutral banker haven that's pristinely boring, with chocolate as compensation.",
    bestThing: "Alps and trains—precision engineering.",
    worstThing: "Cost of living—eye-watering.",
    overrated: "Swiss Army knives; gimmicky.",
    underrated: "Lake Geneva vineyards.",
    vibe: "Precise neutrality with mountainous luxury."
    },
    "Portugal": {
    hotTake: "Sunny underdog with colonial past, now affordable expat magnet.",
    bestThing: "Beaches and port wine.",
    worstThing: "Earthquakes history.",
    overrated: "Lisbon trams; charming but crowded.",
    underrated: "Algarve cliffs.",
    vibe: "Melancholic fado with oceanic warmth."
    },
    "Poland": {
    hotTake: "Resilient survivor of history's worst, now EU powerhouse with vodka pride.",
    bestThing: "History and pierogi.",
    worstThing: "Cold winters.",
    overrated: "Warsaw; rebuilt but lacks soul.",
    underrated: "Bialowieza Forest—ancient woods.",
    vibe: "Hearty endurance with Slavic spirit."
    },
    "Turkey": {
    hotTake: "East-West bridge that's politically wobbly, with kebabs uniting everyone.",
    bestThing: "History and bazaars—Istanbul magic.",
    worstThing: "Political instability.",
    overrated: "Turkish delight; too sweet.",
    underrated: "Cappadocia balloon rides.",
    vibe: "Exotic fusion with haggling energy."
    },
    "Israel": {
    hotTake: "Tech startup nation in a powder keg, where innovation thrives amid eternal conflict.",
    bestThing: "History and Dead Sea.",
    worstThing: "Geopolitical tensions.",
    overrated: "Tel Aviv nightlife; trendy but expensive.",
    underrated: "Negev desert adventures.",
    vibe: "Intense ingenuity with ancient roots."
    },
    "United Arab Emirates": {
    hotTake: "Desert mirage of luxury built on oil and migrant labor exploitation.",
    bestThing: "Architecture—Burj Khalifa.",
    worstThing: "Heat that's infernal.",
    overrated: "Dubai shopping malls; artificial excess.",
    underrated: "Abu Dhabi mosques.",
    vibe: "Futuristic opulence with sandy ambition."
    },
    "Singapore": {
    hotTake: "Clean dictatorship disguised as a city-state, where chewing gum is outlawed but efficiency is god.",
    bestThing: "Food hawker centers—multicultural feasts.",
    worstThing: "Strict laws.",
    overrated: "Marina Bay Sands; flashy hotel.",
    underrated: "Botanic Gardens.",
    vibe: "Orderly tropical perfection."
    },
    "Morocco": {
    hotTake: "Exotic souk labyrinth with royal stability, but poverty contrasts the palaces.",
    bestThing: "Markets and tagines.",
    worstThing: "Hassle from touts.",
    overrated: "Marrakech; chaotic tourist hub.",
    underrated: "Atlas Mountains treks.",
    vibe: "Mystical spice with Berber hospitality."
    },
    "Peru": {
    hotTake: "Inca legacy with Andean heights, but inequality and altitude sickness hit hard.",
    bestThing: "Machu Picchu and ceviche.",
    worstThing: "Poverty in rural areas.",
    overrated: "Lima; foggy and traffic-heavy.",
    underrated: "Amazon basin explorations.",
    vibe: "Ancient wonder with rugged adventure."
    },
    "Chile": {
    hotTake: "Skinny sliver of extremes—from deserts to glaciers, with earthquakes as punctuation.",
    bestThing: "Wine and Atacama stars.",
    worstThing: "Inequality protests.",
    overrated: "Santiago; polluted valley.",
    underrated: "Patagonia treks.",
    vibe: "Dramatic landscapes with resilient vibe."
    },
    "Colombia": {
    hotTake: "From narco notoriety to coffee charm, but safety varies wildly.",
    bestThing: "Biodiversity and Cartagena.",
    worstThing: "Past violence echoes.",
    overrated: "Medellin; transformed but overhyped.",
    underrated: "Coffee region fincas.",
    vibe: "Vibrant recovery with salsa rhythm."
    },
    "Indonesia": {
    hotTake: "Archipelago giant with volcanoes and traffic, where diversity unites under chaos.",
    bestThing: "Bali beaches and Borobudur.",
    worstThing: "Natural disasters.",
    overrated: "Jakarta; megacity mess.",
    underrated: "Raja Ampat diving.",
    vibe: "Tropical diversity with island hopping."
    },
    "Philippines": {
    hotTake: "Island paradise with colonial scars, where typhoons and traffic test patience.",
    bestThing: "Beaches and adobo.",
    worstThing: "Poverty and corruption.",
    overrated: "Boracay; party overkill.",
    underrated: "Palawan underground rivers.",
    vibe: "Friendly archipelago with stormy resilience."
    },
    "Malaysia": {
    hotTake: "Multicultural melting pot with twin towers, but racial politics simmer beneath.",
    bestThing: "Food fusion and rainforests.",
    worstThing: "Humidity hell.",
    overrated: "Kuala Lumpur; modern but muggy.",
    underrated: "Perhentian Islands.",
    vibe: "Harmonious spice with urban jungle."
    },
    "Iceland": {
    hotTake: "Volcanic wonderland that's overhyped as a utopia, but expensive and isolated.",
    bestThing: "Geysers and auroras.",
    worstThing: "Unpredictable weather.",
    overrated: "Blue Lagoon; crowded spa.",
    underrated: "Ring Road drives.",
    vibe: "Ethereal isolation with geothermal magic."
    },
    "Ireland": {
    hotTake: "Emerald isle of poets and pints, where rain fuels the green but drowns the mood.",
    bestThing: "Pubs and folklore.",
    worstThing: "Emigration history.",
    overrated: "Dublin; touristy and pricey.",
    underrated: "Wild Atlantic Way.",
    vibe: "Cheerful melancholy with Celtic charm."
    },
    "Austria": {
    hotTake: "Alpine elegance with imperial past, but neutrality hides a conservative core.",
    bestThing: "Music and mountains—Vienna waltzes.",
    worstThing: "Winter cold.",
    overrated: "Sound of Music tours; kitschy.",
    underrated: "Salzkammergut lakes.",
    vibe: "Refined coziness with snowy peaks."
    },
    "Czech Republic": {
    hotTake: "Beer haven with fairy-tale castles, but post-communist grit lingers.",
    bestThing: "Prague architecture and pilsner.",
    worstThing: "Tourist crowds.",
    overrated: "Charles Bridge; beautiful but packed.",
    underrated: "Bohemian forests.",
    vibe: "Bohemian history with hoppy relaxation."
    },
    "Hungary": {
    hotTake: "Goulash kingdom with thermal baths, but authoritarian drifts sour the soup.",
    bestThing: "Budapest and paprika.",
    worstThing: "Political polarization.",
    overrated: "Parliament building; grand but gaudy.",
    underrated: "Lake Balaton.",
    vibe: "Spicy heritage with thermal chill."
    },
    "Denmark": {
    hotTake: "Hygge heaven where bikes rule, but high taxes buy happiness—or so they say.",
    bestThing: "Design and Copenhagen canals.",
    worstThing: "Short summers.",
    overrated: "Little Mermaid statue; underwhelming.",
    underrated: "Bornholm island.",
    vibe: "Cozy minimalism with maritime breeze."
    },
    "Finland": {
    hotTake: "Sauna nation of introverts, where silence is golden and winters eternal.",
    bestThing: "Lakes and northern lights.",
    worstThing: "Darkness depression.",
    overrated: "Helsinki; functional but forgettable.",
    underrated: "Lapland reindeer safaris.",
    vibe: "Quiet contentment with forest mystique."
    },
    "Belgium": {
    hotTake: "Chocolate and beer divided by languages, where EU bureaucracy bloats Brussels.",
    bestThing: "Waffles and medieval towns.",
    worstThing: "Rainy weather.",
    overrated: "Brussels sprouts; the veggie, not the city.",
    underrated: "Ardennes forests.",
    vibe: "Indulgent division with comic charm."
    },
    "Romania": {
    hotTake: "Dracula's domain with Carpathian beauty, but corruption and poverty persist.",
    bestThing: "Transylvania castles and mountains.",
    worstThing: "Infrastructure lags.",
    overrated: "Bucharest; Soviet-era vibes.",
    underrated: "Danube Delta wildlife.",
    vibe: "Mystic folklore with rugged allure."
    },
    "Saudi Arabia": {
    hotTake: "Oil kingdom modernizing fast, but women's rights trail like a slow camel.",
    bestThing: "Desert adventures and Mecca.",
    worstThing: "Repressive laws.",
    overrated: "Riyadh skyscrapers; shiny but soulless.",
    underrated: "Red Sea reefs.",
    vibe: "Ancient tradition meets rapid change."
    },
    "Pakistan": {
    hotTake: "Nuclear-armed crossroads with Himalayan heights, but extremism and instability loom.",
    bestThing: "Hospitality and Karakoram Highway.",
    worstThing: "Security issues.",
    overrated: "Lahore food; good but overhyped.",
    underrated: "Hunza Valley paradise.",
    vibe: "Warm chaos with mountainous majesty."
    },
    "Bangladesh": {
    hotTake: "Delta dynamo with population density like a packed train, flooding resilience.",
    bestThing: "Sundarbans mangroves and tea gardens.",
    worstThing: "Natural disasters.",
    overrated: "Dhaka; bustling but polluted.",
    underrated: "Cox's Bazar beach.",
    vibe: "Crowded vitality with riverine flow."
    },
    "Sri Lanka": {
    hotTake: "Teardrop island of tea and temples, recovering from civil war scars.",
    bestThing: "Beaches and ancient sites—Sigiriya.",
    worstThing: "Political unrest.",
    overrated: "Colombo; urban sprawl.",
    underrated: "Ella train rides.",
    vibe: "Serene spice with elephant grace."
    },
    "Nepal": {
    hotTake: "Himalayan haven for trekkers, but earthquakes and poverty shake the foundations.",
    bestThing: "Everest and stupas.",
    worstThing: "Altitude challenges.",
    overrated: "Kathmandu; chaotic and dusty.",
    underrated: "Pokhara lakeside.",
    vibe: "Spiritual heights with Sherpa humility."
    },
    "Cuba": {
    hotTake: "Time-warped socialist salsa paradise, where vintage cars hide economic woes.",
    bestThing: "Music and beaches—Havana rhythms.",
    worstThing: "Shortages and restrictions.",
    overrated: "Cigars; quality varies.",
    underrated: "Viñales tobacco fields.",
    vibe: "Retro revolution with rum-infused joy."
    },
    "Jamaica": {
    hotTake: "Reggae island of irie vibes, but crime and poverty contrast the resorts.",
    bestThing: "Beaches and jerk chicken.",
    worstThing: "Violence in non-tourist areas.",
    overrated: "Montego Bay; touristy.",
    underrated: "Blue Mountains coffee.",
    vibe: "Laid-back rhythm with tropical punch."
    },
    "Costa Rica": {
    hotTake: "Pura vida eco-tourism gem, but high costs make it less accessible.",
    bestThing: "Rainforests and volcanoes.",
    worstThing: "Theft targeting tourists.",
    overrated: "Arenal Volcano; active but crowded.",
    underrated: "Corcovado National Park.",
    vibe: "Eco-friendly adventure with slothful peace."
    },
    "Ethiopia": {
    hotTake: "Cradle of humanity with coffee origins, but famines and conflicts persist.",
    bestThing: "Ancient churches and highlands.",
    worstThing: "Political instability.",
    overrated: "Addis Ababa; modern but messy.",
    underrated: "Simien Mountains treks.",
    vibe: "Historic endurance with highland spirit."
    },
    "Tanzania": {
    hotTake: "Safari superstar with Kilimanjaro, but poaching threatens the wildlife.",
    bestThing: "Serengeti and Zanzibar beaches.",
    worstThing: "Poverty levels.",
    overrated: "Ngorongoro Crater; stunning but tourist-heavy.",
    underrated: "Lake Manyara flamingos.",
    vibe: "Wild expanse with Swahili coast charm."
    },
    "Ghana": {
    hotTake: "Gold Coast gateway to Africa, with stable democracy but economic hurdles.",
    bestThing: "Beaches and kente cloth.",
    worstThing: "Traffic in Accra.",
    overrated: "Cape Coast Castle; important but somber.",
    underrated: "Mole National Park elephants.",
    vibe: "Friendly growth with rhythmic beats."
    }
    };