// ChatGPT-specific honest takes for cities
// Keys match `citiesData[i].name`
const chatgptCityOpinions = {
  "Tokyo": {
    hotTake: "Megacity precision without burnout chaos",
    bestThing: "Transit, food, and micro-neighborhood charm",
    worstThing: "Work culture intensity and tiny spaces",
    overrated: "Shibuya selfies",
    underrated: "Shotengai streets and kissaten",
    vibe: "Quietly electric and meticulous"
  },
  "New York City": {
    hotTake: "Brutal and brilliant in equal measure",
    bestThing: "Scale of opportunity and scenes",
    worstThing: "Costs and grime fatigue",
    overrated: "Times Square anything",
    underrated: "Queens food and outer-borough parks",
    vibe: "Relentless, creative, alive"
  },
  "London": {
    hotTake: "Global village with library-level culture",
    bestThing: "Free museums and pub chats",
    worstThing: "Housing prices and commute times",
    overrated: "Guard change crowds",
    underrated: "South-of-the-river neighborhoods",
    vibe: "Historic, multicultural, slightly soggy"
  },
  "Paris": {
    hotTake: "Beauty rewards slowness, not checklists",
    bestThing: "Café life and everyday food",
    worstThing: "Crowds and attitude spikes",
    overrated: "Mona Lisa mob",
    underrated: "Canal walks and corner bistros",
    vibe: "Elegant, opinionated, romantic"
  },
  "Dubai": {
    hotTake: "A stage set done at scale",
    bestThing: "Safety and smooth logistics",
    worstThing: "Heat and car dependence",
    overrated: "Record-breaking for its own sake",
    underrated: "Old Creek districts and desert",
    vibe: "Shiny, efficient, transactional"
  },
  "Singapore": {
    hotTake: "Optimized city with culinary soul",
    bestThing: "Hawker centers and greenery",
    worstThing: "Rules feel paternalistic",
    overrated: "Infinity-pool photo ops",
    underrated: "Neighborhood park connectors",
    vibe: "Neat, green, quietly ambitious"
  },
  "Hong Kong": {
    hotTake: "Vertical energy meets wild hills",
    bestThing: "Dim sum and harbor views",
    worstThing: "Space and political chill",
    overrated: "Peak Tram lines",
    underrated: "Outer islands and hikes",
    vibe: "Dense, fast, bittersweet"
  },
  "Sydney": {
    hotTake: "Postcard city that lives up to it",
    bestThing: "Harbor, beaches, coffee",
    worstThing: "Prices and distance",
    overrated: "Only doing the Opera House",
    underrated: "Coastal walks and suburbs",
    vibe: "Sunny, sporty, polished"
  },
  "Mumbai": {
    hotTake: "India's pulse under high pressure",
    bestThing: "Cinema, street food, grit",
    worstThing: "Traffic and density",
    overrated: "Gateway photo stop",
    underrated: "Bazaars and Irani cafés",
    vibe: "Hurried, creative, resilient"
  },
  "Shanghai": {
    hotTake: "Futurist skyline with European echoes",
    bestThing: "Bund views and dining",
    worstThing: "Air and crowds",
    overrated: "Nanjing Road trudge",
    underrated: "Lane houses and cafés",
    vibe: "Sleek, cosmopolitan, restless"
  },
  "Beijing": {
    hotTake: "Imperial bones under modern heft",
    bestThing: "History and hutong life",
    worstThing: "Smog and sprawl",
    overrated: "Overbuilt tourist sections of the Wall",
    underrated: "Quiet hutongs and parks",
    vibe: "Monumental, political, reflective"
  },
  "Moscow": {
    hotTake: "Power architecture with culture depth",
    bestThing: "Metro art and theaters",
    worstThing: "Winters and bureaucracy",
    overrated: "Tverskaya glitz",
    underrated: "Museums and side streets",
    vibe: "Grand, stern, surprisingly warm"
  },
  "Rome": {
    hotTake: "Living museum with glorious messiness",
    bestThing: "History around every corner",
    worstThing: "Crowds and services",
    overrated: "Trevi scrum",
    underrated: "Trastevere and Testaccio",
    vibe: "Sunlit ruins and espresso"
  },
  "Barcelona": {
    hotTake: "Design, beaches, and Catalan pride",
    bestThing: "Gaudí and neighborhood life",
    worstThing: "Overtourism",
    overrated: "La Rambla",
    underrated: "Gràcia and bunkers view",
    vibe: "Playful, artistic, Mediterranean"
  },
  "Istanbul": {
    hotTake: "Bridge city that feels whole",
    bestThing: "Breakfasts and Bosphorus",
    worstThing: "Traffic and queues",
    overrated: "Grand Bazaar shopping",
    underrated: "Asian side neighborhoods",
    vibe: "Spiced, layered, hospitable"
  },
  "Cairo": {
    hotTake: "Ancient awe with modern grit",
    bestThing: "Museums and Nile evenings",
    worstThing: "Smog and hassle",
    overrated: "Package-tours to pyramids",
    underrated: "Islamic Cairo lanes",
    vibe: "Noisy, golden, relentless"
  },
  "Rio de Janeiro": {
    hotTake: "Beauty and tension in one frame",
    bestThing: "Beaches and viewpoints",
    worstThing: "Safety concerns",
    overrated: "Carnival-only focus",
    underrated: "Hikes and neighborhood bars",
    vibe: "Samba, sunshine, saudade"
  },
  "Buenos Aires": {
    hotTake: "European flair with Latin pulse",
    bestThing: "Steak, cafés, and theater",
    worstThing: "Inflation math",
    overrated: "Recoleta-only tours",
    underrated: "Barracas and Chacarita",
    vibe: "Bookish, passionate, nocturnal"
  },
  "Cape Town": {
    hotTake: "Ridiculous scenery meets creative scene",
    bestThing: "Table Mountain and wine",
    worstThing: "Inequality and safety",
    overrated: "Only the Waterfront",
    underrated: "Kalk Bay and hikes",
    vibe: "Breezy, beautiful, complex"
  },
  "Amsterdam": {
    hotTake: "Human-scale city planning masterclass",
    bestThing: "Cycling and canals",
    worstThing: "Tourist congestion",
    overrated: "Red Light voyeurism",
    underrated: "Noord and neighborhood cafés",
    vibe: "Chill, practical, watery"
  },
  "Berlin": {
    hotTake: "Freedom over polish, deliberately",
    bestThing: "Art, clubs, green space",
    worstThing: "Bureaucracy and gray winters",
    overrated: "Checkpoint Charlie",
    underrated: "Lakes and community spaces",
    vibe: "Experimental, affordable(ish), kind"
  },
  "Vienna": {
    hotTake: "Quality-of-life set to waltz time",
    bestThing: "Transit, coffeehouses, calm",
    worstThing: "Formality and early nights",
    overrated: "Ringstrasse bus loops",
    underrated: "Heurigers and outer districts",
    vibe: "Elegant, orderly, musical"
  },
  "Prague": {
    hotTake: "Fairytale skyline that actually functions",
    bestThing: "Walkability and beer",
    worstThing: "Tourist crush",
    overrated: "Astronomical Clock crowd",
    underrated: "Vinohrady and Letná",
    vibe: "Charming, compact, mellow"
  },
  "Bangkok": {
    hotTake: "Chaotic rhythm that hooks you",
    bestThing: "Street food and canals",
    worstThing: "Heat and traffic",
    overrated: "Khao San antics",
    underrated: "Old-town alleys and markets",
    vibe: "Spicy, noisy, generous"
  },
  "Seoul": {
    hotTake: "High-speed living with hidden softness",
    bestThing: "Cafés, skincare, transit",
    worstThing: "Pressure cooker pace",
    overrated: "Over-curated hotspots",
    underrated: "Han River and backstreets",
    vibe: "Sleek, caffeinated, warm"
  },
  "Mexico City": {
    hotTake: "Cultural giant with neighborhood warmth",
    bestThing: "Food, museums, parks",
    worstThing: "Altitude and traffic",
    overrated: "Centro trinket rows",
    underrated: "Coyoacán and markets",
    vibe: "Vibrant, historic, green"
  },
  "Los Angeles": {
    hotTake: "Endless towns stitched by freeways",
    bestThing: "Weather and creative industries",
    worstThing: "Traffic and sprawl",
    overrated: "Walk of Fame",
    underrated: "Eastside food and hikes",
    vibe: "Sunny, sprawling, aspirational"
  },
  "San Francisco": {
    hotTake: "Beauty and tech dissonance",
    bestThing: "Bay views and proximity to nature",
    worstThing: "Costs and inequality",
    overrated: "Pier 39",
    underrated: "Stairways and neighborhood walks",
    vibe: "Foggy, brainy, eccentric"
  },
  "Toronto": {
    hotTake: "Quietly world-class and livable",
    bestThing: "Diversity and neighborhoods",
    worstThing: "Winters and housing",
    overrated: "CN Tower checklist",
    underrated: "Food halls and parks",
    vibe: "Polite, bustling, balanced"
  },
  "Vancouver": {
    hotTake: "Outdoors lifestyle with urban polish",
    bestThing: "Mountains, sea, and sushi",
    worstThing: "Costs and rain",
    overrated: "Gastown gimmicks",
    underrated: "North Shore trails",
    vibe: "Misty, fit, laid-back"
  },
  "Marrakech": {
    hotTake: "Sensory overload done right",
    bestThing: "Riads and souks",
    worstThing: "Hassle fatigue",
    overrated: "Main square shows",
    underrated: "Side-street artisans",
    vibe: "Spiced, textured, warm"
  },
  "Jerusalem": {
    hotTake: "History with a live wire",
    bestThing: "Layers of meaning",
    worstThing: "Tension everywhere",
    overrated: "Trinket bazaars",
    underrated: "Quiet quarters at dawn",
    vibe: "Solemn, complex, magnetic"
  },
  "Kyoto": {
    hotTake: "Serenity requires patience",
    bestThing: "Temples and tea",
    worstThing: "Tour-bus congestion",
    overrated: "Arashiyama at noon",
    underrated: "Backstreets and gardens",
    vibe: "Refined, calm, timeless"
  },
  "Athens": {
    hotTake: "Scruffy charisma beneath the ruins",
    bestThing: "Acropolis views and food",
    worstThing: "Summer heat",
    overrated: "Flea-market kitsch",
    underrated: "Neighborhood tavernas",
    vibe: "Philosophical, gritty, lively"
  },
  "Lisbon": {
    hotTake: "Pastel hills with modern buzz",
    bestThing: "Light, tiles, and seafood",
    worstThing: "Hills and tourism strain",
    overrated: "Tram selfie queues",
    underrated: "Alfama nights and Azulejos",
    vibe: "Melancholic, sunny, mellow"
  },
  "Dublin": {
    hotTake: "Talk-first, rush-later city",
    bestThing: "Pubs and friendliness",
    worstThing: "Costs and rain",
    overrated: "Temple Bar",
    underrated: "Canals and live sessions",
    vibe: "Witty, warm, walkable"
  },
  "Copenhagen": {
    hotTake: "Bike utopia in practice",
    bestThing: "Cycling and design",
    worstThing: "Prices and gray",
    overrated: "Nyhavn photos",
    underrated: "Islands and bakeries",
    vibe: "Cozy, minimal, friendly"
  },
  "Stockholm": {
    hotTake: "Archipelago elegance",
    bestThing: "Waterfronts and museums",
    worstThing: "Dark winters",
    overrated: "Gamla Stan trinkets",
    underrated: "Sauna culture and parks",
    vibe: "Clean, quiet, composed"
  },
  "Reykjavik": {
    hotTake: "Small town with big back yard",
    bestThing: "Access to nature",
    worstThing: "Costs and weather",
    overrated: "Blue Lagoon crowds",
    underrated: "Westfjords trips",
    vibe: "Cozy, quirky, windswept"
  },
  "Hanoi": {
    hotTake: "Patina and poetry on scooters",
    bestThing: "Coffee and street food",
    worstThing: "Noise and humidity",
    overrated: "Train Street stunts",
    underrated: "Lakes and alleys",
    vibe: "Gentle, bustling, aromatic"
  },
  "Ho Chi Minh City": {
    hotTake: "Business pulse with café breaks",
    bestThing: "Food and energy",
    worstThing: "Traffic and heat",
    overrated: "Backpacker strip",
    underrated: "District wanderings",
    vibe: "Fast, friendly, caffeinated"
  },
  "Kuala Lumpur": {
    hotTake: "Comfort city with flavor",
    bestThing: "Hawker mixes and malls",
    worstThing: "Humidity and sprawl",
    overrated: "Petronas selfie stop",
    underrated: "Neighborhood kopitiams",
    vibe: "Easy, tasty, mixed"
  },
  "Manila": {
    hotTake: "Heartfelt hospitality despite chaos",
    bestThing: "People and music",
    worstThing: "Traffic and floods",
    overrated: "Mall culture",
    underrated: "Intramuros walks and food",
    vibe: "Warm, noisy, upbeat"
  },
  "Jakarta": {
    hotTake: "Tough commutes, strong community",
    bestThing: "Food and resilience",
    worstThing: "Traffic and pollution",
    overrated: "Mega-mall weekends",
    underrated: "Old town and coffee",
    vibe: "Hearty, sprawling, resourceful"
  },
  "Nairobi": {
    hotTake: "Safaris meet startups",
    bestThing: "Parks and people",
    worstThing: "Traffic and security concerns",
    overrated: "Tourist trinket spots",
    underrated: "Karura and coffee shops",
    vibe: "Green, gritty, growing"
  },
  "Lagos": {
    hotTake: "Intensity that powers creativity",
    bestThing: "Music and entrepreneurship",
    worstThing: "Traffic and power reliability",
    overrated: "Status clubbing",
    underrated: "Food and markets",
    vibe: "Loud, hustling, magnetic"
  },
  "Casablanca": {
    hotTake: "Workhorse city over postcard charm",
    bestThing: "Architecture and markets",
    worstThing: "Traffic and sprawl",
    overrated: "Rick’s Café myth",
    underrated: "Neighborhood bakeries",
    vibe: "Practical, bustling, salted air"
  },
  "Havana": {
    hotTake: "Faded beauty with rhythm",
    bestThing: "Music and classic streets",
    worstThing: "Shortages and decay",
    overrated: "Tour taxis",
    underrated: "Local casas and malecón",
    vibe: "Nostalgic, lively, worn"
  },
  "Lima": {
    hotTake: "Underrated culinary capital",
    bestThing: "Food and cliff views",
    worstThing: "Gray skies and traffic",
    overrated: "Miraflores-only stays",
    underrated: "Barranco and markets",
    vibe: "Tasty, coastal, sprawling"
  },
  "Bogotá": {
    hotTake: "Altitude with culture layers",
    bestThing: "Museums and bike Sundays",
    worstThing: "Chill and traffic",
    overrated: "Zona T gloss",
    underrated: "Usaquén and street art",
    vibe: "Brainy, busy, improving"
  },
  "Cartagena": {
    hotTake: "Photogenic and party-prone",
    bestThing: "Walls and Caribbean light",
    worstThing: "Tourist pricing",
    overrated: "Old-town only",
    underrated: "Getsemaní and islands",
    vibe: "Colorful, festive, humid"
  },
  "Santiago": {
    hotTake: "Andean backdrop, steady pace",
    bestThing: "Parks and wine access",
    worstThing: "Smog and drought",
    overrated: "Costanera viewpoint",
    underrated: "Barrios Italia/Lastarria",
    vibe: "Orderly, outdoorsy, calm"
  },
  "Cusco": {
    hotTake: "Gateway that deserves a stay",
    bestThing: "History and Andean culture",
    worstThing: "Altitude and touts",
    overrated: "Quick pass-through trips",
    underrated: "Nearby valleys and cuisine",
    vibe: "Stony, sacred, friendly"
  }
};

