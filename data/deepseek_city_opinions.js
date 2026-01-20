const deepseekCityOpinions = {
    "Tokyo": {
        hotTake: "The world's most polite dystopia - everything works perfectly but at the cost of human spontaneity.",
        bestThing: "You can find anything, anywhere, at any time with zero judgment.",
        worstThing: "The crushing social conformity that makes individuality feel like a sin.",
        overrated: "Shibuya Crossing - it's just people crossing a street, folks.",
        underrated: "The shitamachi (old downtown) areas like Yanaka that feel frozen in time.",
        vibe: "A silent disco where everyone knows the steps but no one is actually having fun."
    },
    "New York City": {
        hotTake: "Now a luxury product for the wealthy rather than the melting pot of opportunity it claims to be.",
        bestThing: "The energy of millions of people all believing they're the main character.",
        worstThing: "The smell. All of it. All the time.",
        overrated: "Times Square - the ninth circle of capitalist hell.",
        underrated: "The outer borough food scenes (Queens especially) that put Manhattan to shame.",
        vibe: "Anxiety pretending to be ambition, with excellent bagels."
    },
    "London": {
        hotTake: "A collection of villages that accidentally became a world capital and never recovered.",
        bestThing: "Free museums that are actually better than the paid ones anywhere else.",
        worstThing: "The cost of living that makes you work just to afford existing there.",
        overrated: "The London Eye - paying to see a city from inside a glass bubble is peak tourist trap.",
        underrated: "The canal networks in East London - lovely, quiet, and full of houseboats.",
        vibe: "A Dickens character wearing AirPods and complaining about the Central Line."
    },
    "Paris": {
        hotTake: "The most beautiful city in the world, if you ignore the Parisians.",
        bestThing: "The light. Somehow even the grey days feel like they're in a French film.",
        worstThing: "The passive-aggressive superiority that makes you feel dumb for not speaking perfect French.",
        overrated: "The Louvre - overcrowded to the point of ruining the art.",
        underrated: "The Périphérique banlieues - where real, diverse Paris lives.",
        vibe: "A beautiful person who knows they're beautiful and makes sure you know it too."
    },
    "Dubai": {
        hotTake: "A city built on sand and migrant labor that forgot to add a soul.",
        bestThing: "Air conditioning as a human right.",
        worstThing: "The artificiality - even the 'culture' feels imported and shrink-wrapped.",
        overrated: "The Burj Khalifa - it's just a really tall building in the desert.",
        underrated: "The older neighborhoods like Deira that show what Dubai was before the skyscrapers.",
        vibe: "Instagram influencer: all flash, no substance, desperately seeking validation."
    },
    "Singapore": {
        hotTake: "Disneyland with the death penalty - clean, efficient, and terrifyingly authoritarian.",
        bestThing: "Food courts that are better than most countries' fine dining.",
        worstThing: "The nanny-state mentality that treats adults like misbehaving children.",
        overrated: "Gardens by the Bay - impressive but feels like a corporate lobby.",
        underrated: "The hawker center culture - where Singapore's real multiculturalism thrives.",
        vibe: "A perfectly tuned violin that's afraid to play anything but the national anthem."
    },
    "Hong Kong": {
        hotTake: "The world's most dramatic setting for a geopolitical tragedy.",
        bestThing: "The vertical cityscape - nowhere else mixes nature and urban density so dramatically.",
        worstThing: "The tiny, overpriced apartments that make shoeboxes seem spacious.",
        overrated: "The Peak Tram - overcrowded and the view is better from free hiking trails.",
        underrated: "The outer islands like Lamma and Cheung Chau.",
        vibe: "A caged bird that still remembers how to sing."
    },
    "Sydney": {
        hotTake: "All the beautiful people from everywhere else in Australia gathered in one expensive spot.",
        bestThing: "That harbor - it never gets old, even for locals.",
        worstThing: "The relentless focus on real estate as both hobby and religion.",
        overrated: "Bondi Beach - overcrowded and full of influencers posing.",
        underrated: "The Blue Mountains - literally right there and somehow ignored by tourists.",
        vibe: "A perpetually tanned real estate agent drinking a flat white."
    },
    "Mumbai": {
        hotTake: "Maximum City, minimum personal space - it shouldn't work but somehow does.",
        bestThing: "The relentless energy - this city never sleeps because it can't afford to.",
        worstThing: "The monsoons that turn streets into rivers of questionable content.",
        overrated: "Bollywood tours - the industry is more interesting than the tourist experience.",
        underrated: "The art deco buildings in South Mumbai.",
        vibe: "A thousand dreams chasing ten opportunities on a crowded train."
    },
    "Shanghai": {
        hotTake: "China's future, happening 20 minutes before everyone else gets the memo.",
        bestThing: "The Bund skyline at night - still the best free light show on Earth.",
        worstThing: "The pollution that occasionally makes the sky look like a sepia filter.",
        overrated: "The fake markets - it's all made in the same factories as the real stuff.",
        underrated: "The French Concession's quiet, tree-lined streets.",
        vibe: "A sci-fi movie set where everyone's trying to make enough money to buy the sequel."
    },
    "Beijing": {
        hotTake: "A capital city that feels like it's constantly performing power rather than exercising it.",
        bestThing: "The hutongs - disappearing fast but still magical.",
        worstThing: "The sandstorms that occasionally make it feel like you're on Mars.",
        overrated: "Forbidden City - impressive but overcrowded and oddly empty feeling.",
        underrated: "The contemporary art scene at 798 Art District.",
        vibe: "Imperial grandeur trying to code-switch to tech bro."
    },
    "Moscow": {
        hotTake: "A city that wears its trauma and power like a heavy winter coat.",
        bestThing: "The metro stations - possibly the world's most beautiful public transit.",
        worstThing: "The long, dark winters that feel like they'll never end.",
        overrated: "Red Square - smaller than you think and constantly under renovation.",
        underrated: "The parks - Russians know how to enjoy summer when it finally comes.",
        vibe: "A Tchaikovsky symphony playing in a Stalinist apartment block."
    },
    "Rome": {
        hotTake: "An open-air museum that forgot to charge admission and now regrets it.",
        bestThing: "The feeling that you're walking through 2,000 years of history just to get groceries.",
        worstThing: "The tourist crowds that make the centro storico nearly impassable.",
        overrated: "Trevi Fountain - it's lovely but surrounded by more people than water.",
        underrated: "The Testaccio neighborhood for real Roman food away from tourists.",
        vibe: "Beautiful chaos maintained through sheer force of personality."
    },
    "Barcelona": {
        hotTake: "A city so beautiful it's being loved to death by tourists.",
        bestThing: "Gaudi's architecture making the whole city feel like a fairy tale.",
        worstThing: "Pickpockets who treat Las Ramblas as their personal office.",
        overrated: "Sagrada Familia - yes it's amazing but the construction cranes ruin the vibe.",
        underrated: "The Barceloneta beach in winter when the tourists leave.",
        vibe: "A perpetual holiday that the locals are tired of hosting."
    },
    "Istanbul": {
        hotTake: "Where East meets West and they argue over who pays the bill.",
        bestThing: "The Bosphorus - a city divided by water but united by ferries.",
        worstThing: "The traffic that makes you appreciate Ottoman walking distances.",
        overrated: "The Grand Bazaar - overwhelming and full of the same five souvenirs.",
        underrated: "The Asian side (Kadıköy) where real Istanbul life happens.",
        vibe: "A Byzantine mosaic being slowly covered by modern concrete."
    },
    "Cairo": {
        hotTake: "A city that's been crowded for 5,000 years and shows no signs of stopping.",
        bestThing: "The pyramids literally visible from certain parts of the city.",
        worstThing: "The constant noise - car horns as a form of communication.",
        overrated: "Camel rides at the pyramids - the animals look miserable.",
        underrated: "Coptic Cairo and the Islamic architecture beyond the obvious.",
        vibe: "Organized chaos that somehow predates the concept of organization."
    },
    "Rio de Janeiro": {
        hotTake: "The most beautiful natural setting for a city, occasionally interrupted by the city itself.",
        bestThing: "The beach culture that makes public space actually public.",
        worstThing: "The safety concerns that make you constantly aware of your surroundings.",
        overrated: "Christ the Redeemer - smaller than it looks in photos.",
        underrated: "The favela culture and communities (when visited respectfully).",
        vibe: "A samba that occasionally misses a beat but keeps dancing anyway."
    },
    "Buenos Aires": {
        hotTake: "A European city that woke up one day in South America and decided to lean into it.",
        bestThing: "The cafe culture that makes sitting and talking an art form.",
        worstThing: "The economic instability that makes planning anything feel futile.",
        overrated: "Tango shows for tourists - the real thing happens in milongas.",
        underrated: "The street art in neighborhoods like Palermo.",
        vibe: "Nostalgia for a golden age that may have never existed."
    },
    "Cape Town": {
        hotTake: "Postcard beauty hiding one of the world's most unequal cities.",
        bestThing: "Table Mountain - a literal backdrop to daily life.",
        worstThing: "The stark separation between wealthy and township areas.",
        overrated: "The V&A Waterfront - sanitized and touristy.",
        underrated: "The Cape Flats townships where most Capetonians actually live.",
        vibe: "A beautiful mask hiding a complicated face."
    },
    "Amsterdam": {
        hotTake: "A city that successfully monetized vice and now can't remember what it was before.",
        bestThing: "Biking everywhere like a normal human being.",
        worstThing: "The tourist crowds that make the center feel like a theme park.",
        overrated: "The Red Light District - it's sad, not sexy.",
        underrated: "The Jordaan neighborhood's quiet canals.",
        vibe: "Tolerant but tired of your bullshit."
    },
    "Berlin": {
        hotTake: "Poor but sexy is now expensive and trying to remember how to be sexy.",
        bestThing: "The freedom to be whoever you want at 3 AM.",
        worstThing: "The bureaucracy that makes simple tasks feel impossible.",
        overrated: "Berghain - unless you're 25 and into techno, it's just a club.",
        underrated: "The lakes and forests literally within the city limits.",
        vibe: "A punk wearing a business suit but the suit is from a thrift store."
    },
    "Vienna": {
        hotTake: "A city so perfect it makes you want to deliberately spill coffee.",
        bestThing: "The cake culture - seriously, the cakes.",
        worstThing: "The formality that can make spontaneous human connection difficult.",
        overrated: "The Spanish Riding School - horses doing choreography for an hour.",
        underrated: "The wine taverns (Heurigen) in the outskirts.",
        vibe: "A perfectly composed symphony that nobody dances to."
    },
    "Prague": {
        hotTake: "Disneyland for adults who think drinking beer is a personality.",
        bestThing: "The architecture that survived both Nazis and communists.",
        worstThing: "The stag parties that treat the city like their personal playground.",
        overrated: "Charles Bridge - lovely but crowded with the same souvenir stalls.",
        underrated: "The modernist architecture beyond the old town.",
        vibe: "A fairy tale slowly being rewritten by budget airlines."
    },
    "Bangkok": {
        hotTake: "A city of contradictions where temples and strip clubs are neighbors.",
        bestThing: "Street food that's better and safer than most restaurants.",
        worstThing: "The traffic that makes walking faster than driving.",
        overrated: "Khao San Road - it's just drunk backpackers now.",
        underrated: "The canal networks (khlongs) that show old Bangkok.",
        vibe: "A spicy, sweet, sour soup that somehow works as a city."
    },
    "Seoul": {
        hotTake: "The future arrived here first and forgot to make it comfortable.",
        bestThing: "The 24-hour lifestyle - everything is always open.",
        worstThing: "The workaholic culture that makes New York look relaxed.",
        overrated: "Gangnam - shiny but soul-less.",
        underrated: "The mountains literally in the city that everyone hikes.",
        vibe: "High-speed internet with occasional bouts of ancient han."
    },
    "Mexico City": {
        hotTake: "The most exciting food city in the world right now, fight me.",
        bestThing: "The layers upon layers of history in every neighborhood.",
        worstThing: "The air quality that occasionally makes breathing a strategic decision.",
        overrated: "The Zócalo - impressive but chaotic.",
        underrated: "The floating gardens of Xochimilco (go on a weekday!).",
        vibe: "A Frida Kahlo painting: beautiful, painful, and endlessly fascinating."
    },
    "Los Angeles": {
        hotTake: "A collection of suburbs pretending to be a city, mediated by cars.",
        bestThing: "The creative energy of people who haven't been told 'no' yet.",
        worstThing: "The traffic that makes you question your life choices.",
        overrated: "Hollywood - dirty, disappointing, and full of people in costumes.",
        underrated: "The food in the San Gabriel Valley (best Chinese outside China).",
        vibe: "An aspiring actor's headshot: carefully curated and full of hope."
    },
    "San Francisco": {
        hotTake: "A beautiful city being slowly killed by its own success.",
        bestThing: "Those steep hills with sudden, breathtaking views.",
        worstThing: "The cost of living that pushes out everyone but tech bros.",
        overrated: "Silicon Valley - it's just office parks, people.",
        underrated: "The fog (Karl) - it's actually magical when it rolls in.",
        vibe: "A gold rush town that found a different kind of gold and forgot what made it special."
    },
    "Toronto": {
        hotTake: "New York City run by Canadians - all the ambition, half the aggression.",
        bestThing: "The diversity that actually works (most of the time).",
        worstThing: "The winter that lasts approximately 8 months.",
        overrated: "CN Tower - it's just a tall thing you can see from everywhere.",
        underrated: "The ravines and parks that create green corridors through the city.",
        vibe: "Extremely polite multiculturalism occasionally interrupted by hockey."
    },
    "Kyoto": {
        hotTake: "A city so dedicated to preserving its past it's becoming a museum of itself.",
        bestThing: "The temples and gardens that actually deliver on the peace they promise.",
        worstThing: "The tourist crowds that overwhelm the very beauty they come to see.",
        overrated: "The bamboo forest - it's one path and a million selfie sticks.",
        underrated: "The northern mountains where you can still find quiet temples.",
        vibe: "A geisha walking through a theme park of her own culture."
    }
};
