// Current active tab (claude or chatgpt)
let currentTab = 'claude';

// Country name mapping (TopoJSON name -> our data name)
const countryNameMap = {
    "United States of America": "United States",
    "Russian Federation": "Russia",
    "Republic of Korea": "South Korea",
    "Korea, Republic of": "South Korea",
    "Democratic People's Republic of Korea": "North Korea",
    "United Republic of Tanzania": "Tanzania",
    "Czech Republic": "Czech Republic",
    "Czechia": "Czech Republic",
    "Viet Nam": "Vietnam",
    "Iran, Islamic Republic of": "Iran",
    "Syrian Arab Republic": "Syria",
    "Lao People's Democratic Republic": "Laos",
    "Bolivia, Plurinational State of": "Bolivia",
    "Venezuela, Bolivarian Republic of": "Venezuela",
    "Taiwan, Province of China": "Taiwan",
    "Macedonia": "North Macedonia",
    "Côte d'Ivoire": "Ivory Coast",
    "Congo, Democratic Republic of the": "DR Congo",
    "Congo": "Republic of Congo",
    "Myanmar": "Myanmar",
    "Burma": "Myanmar",
    "The Netherlands": "Netherlands",
    "Republic of the Congo": "Republic of Congo",
    "Democratic Republic of the Congo": "DR Congo"
};

// Initialize the globe
const globe = Globe()
    .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
    .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png')
    .showAtmosphere(true)
    .atmosphereColor('#63b3ed')
    .atmosphereAltitude(0.25)
    (document.getElementById('globeContainer'));

// Set initial point of view
globe.pointOfView({ lat: 30, lng: 0, altitude: 2.5 });

// Enable auto-rotation
globe.controls().autoRotate = true;
globe.controls().autoRotateSpeed = 0.5;

// Stop rotation on user interaction
globe.controls().addEventListener('start', () => {
    globe.controls().autoRotate = false;
});

// Load topojson library first, then load country data
const script = document.createElement('script');
script.src = 'https://unpkg.com/topojson-client@3';
script.onload = function() {
    // Country polygons data - only fetch after topojson is loaded
    fetch('https://unpkg.com/world-atlas@2.0.2/countries-110m.json')
        .then(res => res.json())
        .then(worldData => {
            const countries = topojson.feature(worldData, worldData.objects.countries).features;

            globe
                .polygonsData(countries)
                .polygonAltitude(0.01)
                .polygonCapColor(() => 'rgba(66, 153, 225, 0.7)')
                .polygonSideColor(() => 'rgba(66, 153, 225, 0.3)')
                .polygonStrokeColor(() => '#63b3ed')
                .polygonLabel(({ properties: d }) => `
                    <div class="country-tooltip">
                        <b>${d.name || 'Unknown'}</b>
                    </div>
                `)
                .onPolygonClick((polygon, event, { lat, lng }) => {
                    const rawName = polygon.properties.name;
                    const countryName = countryNameMap[rawName] || rawName;
                    const countryData = countriesData.find(c =>
                        c.name.toLowerCase() === countryName?.toLowerCase() ||
                        countryName?.toLowerCase().includes(c.name.toLowerCase()) ||
                        c.name.toLowerCase().includes(countryName?.toLowerCase())
                    );

                    if (countryData) {
                        showCountryInfo(countryData);
                        flyToLocation(countryData.lat, countryData.lng);
                    } else {
                        showGenericInfo(countryName, lat, lng);
                    }
                })
                .onPolygonHover((polygon) => {
                    globe.polygonAltitude(d => d === polygon ? 0.04 : 0.01);
                });
        });
};
document.head.appendChild(script);

// Add city points
const cityPoints = citiesData.map(city => ({
    ...city,
    size: 0.5,
    color: '#f6ad55'
}));

globe
    .pointsData(cityPoints)
    .pointAltitude(0.02)
    .pointColor('color')
    .pointRadius(d => d.size)
    .pointLabel(d => `<div class="city-label"><b>${d.name}</b>, ${d.country}</div>`)
    .onPointClick((point) => {
        showCityInfo(point);
        flyToLocation(point.lat, point.lng, 1.5);
    })
    .onPointHover((point) => {
        document.body.style.cursor = point ? 'pointer' : 'default';
    });

// Fly to location
function flyToLocation(lat, lng, altitude = 2) {
    globe.pointOfView({ lat, lng, altitude }, 1000);
}

// Show country information panel
function showCountryInfo(country) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    // Select opinions based on active tab
    let op;
    if (currentTab === 'claude') {
        op = country.opinions;
    } else if (currentTab === 'chatgpt') {
        op = typeof chatgptOpinions !== 'undefined' ? chatgptOpinions[country.name] : undefined;
    } else if (currentTab === 'gemini') {
        op = typeof geminiOpinions !== 'undefined' ? geminiOpinions[country.name] : undefined;
    } else if (currentTab === 'grok') {
        op = typeof grokOpinions !== 'undefined' ? grokOpinions[country.name] : undefined;
    }

    content.innerHTML = `
        <div class="info-header">
            <div class="flag">${country.flag}</div>
            <h2>${country.name}</h2>
            <div class="subtitle">${country.continent}</div>
        </div>

        <div class="info-section">
            <h3>Quick Facts</h3>
            <div class="info-grid">
                <div class="info-item">
                    <div class="label">Capital</div>
                    <div class="value">${country.capital}</div>
                </div>
                <div class="info-item">
                    <div class="label">Population</div>
                    <div class="value">${country.population}</div>
                </div>
                <div class="info-item">
                    <div class="label">Area</div>
                    <div class="value">${country.area}</div>
                </div>
                <div class="info-item">
                    <div class="label">Currency</div>
                    <div class="value">${country.currency}</div>
                </div>
                <div class="info-item">
                    <div class="label">Language</div>
                    <div class="value">${country.language}</div>
                </div>
                <div class="info-item">
                    <div class="label">GDP</div>
                    <div class="value">${country.gdp}</div>
                </div>
                <div class="info-item">
                    <div class="label">Government</div>
                    <div class="value">${country.government}</div>
                </div>
                <div class="info-item">
                    <div class="label">Code</div>
                    <div class="value">${country.code}</div>
                </div>
            </div>
        </div>

        <div class="info-section">
            <h3>About</h3>
            <p class="info-text">${country.description}</p>
        </div>

        <div class="info-section">
            <h3>Fun Facts</h3>
            <ul class="fun-facts">
                ${country.funFacts.map(fact => `<li>${fact}</li>`).join('')}
            </ul>
        </div>

        ${(currentTab === 'claude' ? country.opinions : op) ? `
        <div class="info-section opinions-section">
            <h3>Honest Takes</h3>
            <div class="opinion-item">
                <div class="opinion-label">Hot Take</div>
                <div class="opinion-value">${currentTab === 'claude' ? country.opinions.hotTake : (op?.hotTake || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Best Thing</div>
                <div class="opinion-value positive">${currentTab === 'claude' ? country.opinions.bestThing : (op?.bestThing || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Worst Thing</div>
                <div class="opinion-value negative">${currentTab === 'claude' ? country.opinions.worstThing : (op?.worstThing || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Overrated</div>
                <div class="opinion-value">${currentTab === 'claude' ? country.opinions.overrated : (op?.overrated || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Underrated</div>
                <div class="opinion-value">${currentTab === 'claude' ? country.opinions.underrated : (op?.underrated || '')}</div>
            </div>
            <div class="opinion-item vibe">
                <div class="opinion-label">The Vibe</div>
                <div class="opinion-value">${currentTab === 'claude' ? country.opinions.vibe : (op?.vibe || '')}</div>
            </div>
        </div>
        ` : ''}
    `;

    panel.classList.remove('hidden');
}

// Show city information panel
function showCityInfo(city) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    // Select opinions based on active tab
    let op;
    if (currentTab === 'claude') {
        op = city.opinions;
    } else if (currentTab === 'chatgpt') {
        op = typeof chatgptCityOpinions !== 'undefined' ? chatgptCityOpinions[city.name] : undefined;
    } else if (currentTab === 'gemini') {
        op = typeof geminiCityOpinions !== 'undefined' ? geminiCityOpinions[city.name] : undefined;
    } else if (currentTab === 'grok') {
        op = typeof grokCityOpinions !== 'undefined' ? grokCityOpinions[city.name] : undefined;
    }

    content.innerHTML = `
        <div class="info-header">
            <h2>${city.name}</h2>
            <div class="subtitle">${city.country}</div>
        </div>

        <div class="info-section">
            <h3>Quick Facts</h3>
            <div class="info-grid">
                <div class="info-item">
                    <div class="label">Population</div>
                    <div class="value">${city.population}</div>
                </div>
                <div class="info-item">
                    <div class="label">Timezone</div>
                    <div class="value">${city.timezone}</div>
                </div>
                <div class="info-item">
                    <div class="label">Founded</div>
                    <div class="value">${city.founded}</div>
                </div>
                <div class="info-item">
                    <div class="label">Elevation</div>
                    <div class="value">${city.elevation}</div>
                </div>
            </div>
        </div>

        <div class="info-section">
            <h3>About</h3>
            <p class="info-text">${city.description}</p>
        </div>

        <div class="info-section">
            <h3>Highlights</h3>
            <ul class="fun-facts">
                ${city.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>

        <div class="info-section">
            <h3>Famous For</h3>
            <p class="info-text">${city.famousFor}</p>
        </div>

        ${(currentTab === 'claude' ? city.opinions : op) ? `
        <div class="info-section opinions-section">
            <h3>Honest Takes</h3>
            <div class="opinion-item">
                <div class="opinion-label">Hot Take</div>
                <div class="opinion-value">${currentTab === 'claude' ? city.opinions.hotTake : (op?.hotTake || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Best Thing</div>
                <div class="opinion-value positive">${currentTab === 'claude' ? city.opinions.bestThing : (op?.bestThing || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Worst Thing</div>
                <div class="opinion-value negative">${currentTab === 'claude' ? city.opinions.worstThing : (op?.worstThing || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Overrated</div>
                <div class="opinion-value">${currentTab === 'claude' ? city.opinions.overrated : (op?.overrated || '')}</div>
            </div>
            <div class="opinion-item">
                <div class="opinion-label">Underrated</div>
                <div class="opinion-value">${currentTab === 'claude' ? city.opinions.underrated : (op?.underrated || '')}</div>
            </div>
            <div class="opinion-item vibe">
                <div class="opinion-label">The Vibe</div>
                <div class="opinion-value">${currentTab === 'claude' ? city.opinions.vibe : (op?.vibe || '')}</div>
            </div>
        </div>
        ` : ''}
    `;

    panel.classList.remove('hidden');
}

// Show generic info for countries without detailed data
function showGenericInfo(name, lat, lng) {
    const panel = document.getElementById('infoPanel');
    const content = document.getElementById('infoPanelContent');

    content.innerHTML = `
        <div class="info-header">
            <h2>${name || 'Unknown Region'}</h2>
            <div class="subtitle">Location: ${lat.toFixed(2)}°, ${lng.toFixed(2)}°</div>
        </div>

        <div class="info-section">
            <h3>About</h3>
            <p class="info-text">Detailed information for this region is not yet available. Click on highlighted countries or city markers for more information.</p>
        </div>
    `;

    panel.classList.remove('hidden');
}

// Close panel functionality
document.getElementById('closePanel').addEventListener('click', () => {
    document.getElementById('infoPanel').classList.add('hidden');
});

// Search functionality
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    if (query.length < 2) {
        searchResults.classList.add('hidden');
        return;
    }

    const matchingCountries = countriesData.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.capital.toLowerCase().includes(query)
    ).slice(0, 5);

    const matchingCities = citiesData.filter(c =>
        c.name.toLowerCase().includes(query) ||
        c.country.toLowerCase().includes(query)
    ).slice(0, 5);

    const results = [
        ...matchingCountries.map(c => ({ ...c, type: 'country' })),
        ...matchingCities.map(c => ({ ...c, type: 'city' }))
    ];

    if (results.length === 0) {
        searchResults.classList.add('hidden');
        return;
    }

    searchResults.innerHTML = results.map(r => `
        <div class="search-result-item" data-type="${r.type}" data-name="${r.name}">
            <div class="name">${r.type === 'country' ? r.flag + ' ' : ''}${r.name}</div>
            <div class="type">${r.type === 'country' ? 'Country' : 'City in ' + r.country}</div>
        </div>
    `).join('');

    searchResults.classList.remove('hidden');

    // Add click handlers to results
    document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
            const type = item.dataset.type;
            const name = item.dataset.name;

            if (type === 'country') {
                const country = countriesData.find(c => c.name === name);
                if (country) {
                    showCountryInfo(country);
                    flyToLocation(country.lat, country.lng);
                }
            } else {
                const city = citiesData.find(c => c.name === name);
                if (city) {
                    showCityInfo(city);
                    flyToLocation(city.lat, city.lng, 1.5);
                }
            }

            searchInput.value = name;
            searchResults.classList.add('hidden');
        });
    });
});

// Close search results when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('#searchContainer')) {
        searchResults.classList.add('hidden');
    }
});

// Keyboard navigation
searchInput.addEventListener('keydown', (e) => {
    const items = document.querySelectorAll('.search-result-item');
    const current = document.querySelector('.search-result-item:hover');

    if (e.key === 'Escape') {
        searchResults.classList.add('hidden');
        searchInput.blur();
    }

    if (e.key === 'Enter' && items.length > 0) {
        items[0].click();
    }
});

// Update stats
document.getElementById('countryCount').textContent = `${countriesData.length} Countries`;
document.getElementById('cityCount').textContent = `${citiesData.length} Major Cities`;

// Resize handler
window.addEventListener('resize', () => {
    globe.width(window.innerWidth);
    globe.height(window.innerHeight);
});

// Add some initial city markers with labels on the globe
const arcs = [];
const majorCities = citiesData.filter((_, i) => i < 20);

// Create connection arcs between major cities
for (let i = 0; i < majorCities.length - 1; i++) {
    arcs.push({
        startLat: majorCities[i].lat,
        startLng: majorCities[i].lng,
        endLat: majorCities[i + 1].lat,
        endLng: majorCities[i + 1].lng,
        color: ['rgba(99, 179, 237, 0.3)', 'rgba(246, 173, 85, 0.3)']
    });
}

// Optional: Add decorative arcs connecting major cities
globe
    .arcsData(arcs)
    .arcColor('color')
    .arcAltitude(0.15)
    .arcStroke(0.5)
    .arcDashLength(0.5)
    .arcDashGap(0.2)
    .arcDashAnimateTime(3000);

// Tab switching functionality
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active tab state
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTab = btn.dataset.tab;

        // If panel is open, refresh it to show/hide hot takes
        const panel = document.getElementById('infoPanel');
        if (!panel.classList.contains('hidden')) {
            // Close panel when switching tabs to avoid confusion
            panel.classList.add('hidden');
        }
    });
});

console.log('World Explorer initialized!');
console.log(`Loaded ${countriesData.length} countries and ${citiesData.length} cities.`);
