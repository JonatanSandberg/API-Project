const apiUrl = 'https://apis.codante.io/olympic-games';

// Manual mapping of country IDs to English names
const countryNameMap = {

        "AFG": "Afghanistan",
        "ALB": "Albania",
        "ALG": "Algeria",
        "AND": "Andorra",
        "ANG": "Angola",
        "ANT": "Antigua and Barbuda",
        "ARG": "Argentina",
        "ARM": "Armenia",
        "ARU": "Aruba",
        "AUS": "Australia",
        "AUT": "Austria",
        "AZE": "Azerbaijan",
        "BAH": "Bahamas",
        "BRN": "Bahrain",
        "BGD": "Bangladesh",
        "BRB": "Barbados",
        "BEL": "Belgium",
        "BLZ": "Belize",
        "BEN": "Benin",
        "BER": "Bermuda",
        "BHU": "Bhutan",
        "BOL": "Bolivia",
        "BIH": "Bosnia and Herzegovina",
        "BOT": "Botswana",
        "BRA": "Brazil",
        "BRU": "Brunei",
        "BUL": "Bulgaria",
        "BUR": "Burkina Faso",
        "BDI": "Burundi",
        "CAY": "Cayman Islands",
        "CAM": "Cambodia",
        "CMR": "Cameroon",
        "CAN": "Canada",
        "CPV": "Cape Verde",
        "CAF": "Central African Republic",
        "CHI": "Chile",
        "CHN": "China",
        "COL": "Colombia",
        "COM": "Comoros",
        "COG": "Republic of the Congo",
        "COD": "Democratic Republic of the Congo",
        "COK": "Cook Islands",
        "CRI": "Costa Rica",
        "CIV": "Ivory Coast",
        "CRO": "Croatia",
        "CUB": "Cuba",
        "CYP": "Cyprus",
        "CZE": "Czech Republic",
        "DEN": "Denmark",
        "DJI": "Djibouti",
        "DMA": "Dominica",
        "DOM": "Dominican Republic",
        "TLS": "East Timor",
        "ECU": "Ecuador",
        "EGY": "Egypt",
        "SLV": "El Salvador",
        "ENG": "England",
        "ERI": "Eritrea",
        "EST": "Estonia",
        "SWZ": "Eswatini",
        "ETH": "Ethiopia",
        "FIJ": "Fiji",
        "FIN": "Finland",
        "FRA": "France",
        "GAB": "Gabon",
        "GAM": "The Gambia",
        "GEO": "Georgia",
        "GER": "Germany",
        "GHA": "Ghana",
        "GRE": "Greece",
        "GRD": "Grenada",
        "GUM": "Guam",
        "GTM": "Guatemala",
        "GIN": "Guinea",
        "GNB": "Guinea-Bissau",
        "GNQ": "Equatorial Guinea",
        "GUY": "Guyana",
        "HTI": "Haiti",
        "HND": "Honduras",
        "HKG": "Hong Kong",
        "HUN": "Hungary",
        "ISL": "Iceland",
        "IND": "India",
        "IDN": "Indonesia",
        "IRN": "Iran",
        "IRQ": "Iraq",
        "IRL": "Ireland",
        "ISR": "Israel",
        "ITA": "Italy",
        "JAM": "Jamaica",
        "JPN": "Japan",
        "JOR": "Jordan",
        "KAZ": "Kazakhstan",
        "KEN": "Kenya",
        "KIR": "Kiribati",
        "PRK": "North Korea",
        "KOR": "South Korea",
        "KWT": "Kuwait",
        "KGZ": "Kyrgyzstan",
        "LAO": "Laos",
        "LVA": "Latvia",
        "LBN": "Lebanon",
        "LES": "Lesotho",
        "LBR": "Liberia",
        "LBY": "Libya",
        "LIE": "Liechtenstein",
        "LTU": "Lithuania",
        "LUX": "Luxembourg",
        "MAD": "Madagascar",
        "MWI": "Malawi",
        "MYS": "Malaysia",
        "MDV": "Maldives",
        "MLI": "Mali",
        "MLT": "Malta",
        "MHL": "Marshall Islands",
        "MRT": "Mauritania",
        "MUS": "Mauritius",
        "MEX": "Mexico",
        "FSM": "Federated States of Micronesia",
        "MDA": "Moldova",
        "MON": "Monaco",
        "MNG": "Mongolia",
        "MNE": "Montenegro",
        "MAR": "Morocco",
        "MOZ": "Mozambique",
        "MMR": "Myanmar",
        "NAM": "Namibia",
        "NRU": "Nauru",
        "NEP": "Nepal",
        "NLD": "Netherlands",
        "NIG": "Niger",
        "NGA": "Nigeria",
        "NOR": "Norway",
        "NZL": "New Zealand",
        "OMN": "Oman",
        "PAK": "Pakistan",
        "PLW": "Palau",
        "PLE": "Palestine",
        "PAN": "Panama",
        "PNG": "Papua New Guinea",
        "PRY": "Paraguay",
        "PER": "Peru",
        "PHL": "Philippines",
        "POL": "Poland",
        "POR": "Portugal",
        "QAT": "Qatar",
        "ROC": "Refugee Olympic Team",
        "ROU": "Romania",
        "RWA": "Rwanda",
        "KNA": "Saint Kitts and Nevis",
        "LCA": "Saint Lucia",
        "SMR": "San Marino",
        "VCT": "Saint Vincent and the Grenadines",
        "SAM": "Samoa",
        "STP": "Sao Tome and Principe",
        "SAU": "Saudi Arabia",
        "SEN": "Senegal",
        "SRB": "Serbia",
        "SEY": "Seychelles",
        "SLE": "Sierra Leone",
        "SGP": "Singapore",
        "SVK": "Slovakia",
        "SVN": "Slovenia",
        "SOL": "Solomon Islands",
        "SOM": "Somalia",
        "RSA": "South Africa",
        "SSD": "South Sudan",
        "ESP": "Spain",
        "SRI": "Sri Lanka",
        "SDN": "Sudan",
        "SUR": "Suriname",
        "SWE": "Sweden",
        "SUI": "Switzerland",
        "SYR": "Syria",
        "TWN": "Chinese Taipei",
        "TJK": "Tajikistan",
        "TAN": "Tanzania",
        "THA": "Thailand",
        "TLS": "Timor-Leste",
        "TOG": "Togo",
        "TON": "Tonga",
        "TTO": "Trinidad and Tobago",
        "TUN": "Tunisia",
        "TUR": "Turkey",
        "TKM": "Turkmenistan",
        "TUV": "Tuvalu",
        "UGA": "Uganda",
        "UKR": "Ukraine",
        "ARE": "United Arab Emirates",
        "GBR": "Great Britain",
        "USA": "United States",
        "URY": "Uruguay",
        "UZB": "Uzbekistan",
        "VAN": "Vanuatu",
        "VEN": "Venezuela",
        "VGB": "British Virgin Islands",
        "ISV": "Virgin Islands",
        "VIE": "Vietnam",
        "YEM": "Yemen",
        "ZAM": "Zambia",
        "ZIM": "Zimbabwe"
};

// Function to build the API URL for a specific indicator
const buildIndicatorUrl = (countryCode, indicator) =>
    `http://api.worldbank.org/V2/country/${countryCode}/indicator/${indicator}?format=json&per_page=10`;

// Function to find the most recent non-null value in the indicator data
function findMostRecentValue(dataArray) {
    if (!dataArray) return 'N/A';
    for (let i = 0; i < dataArray.length; i++) {
        if (dataArray[i].value !== null) {
            return dataArray[i].value;
        }
    }
    return 'N/A';
}

// Fetch sports and fill the dropdown
async function fetchSports() {
    try {
        const response = await fetch(`${apiUrl}/disciplines`);
        const data = await response.json();
        console.log('Fetched sports data:', data); // Debug log
        const sportSelect = document.getElementById('sport-select');

        data.data.forEach(sport => {
            const option = document.createElement('option');
            option.value = sport.id;
            option.text = sport.name;
            sportSelect.appendChild(option);
        });
    } catch (error) {
        console.error('Error fetching sports:', error);
    }
}

// Fetch medal results for the selected sport
async function fetchSportMedals() {
    const sportId = document.getElementById('sport-select').value;
    if (!sportId) return;

    try {
        const response = await fetch(`${apiUrl}/events?discipline=${sportId}`);
        const data = await response.json();
        console.log('Fetched sport results data:', data); // Debug log
        const resultsDiv = document.getElementById('sport-results');
        resultsDiv.innerHTML = '';

        data.data.forEach(event => {
            if (event.is_medal_event === 1) {
                const competitors = event.competitors.map(competitor => `
                    <div>
                        <img src="${competitor.country_flag_url}" alt="${competitor.competitor_name}">
                        <span>${competitor.competitor_name}: ${competitor.result_winnerLoserTie === 'W' ? 'Winner' : 'Loser'} (${competitor.result_mark})</span>
                    </div>
                `).join('');

                const medalElement = document.createElement('div');
                medalElement.classList.add('result');
                medalElement.innerHTML = `
                    <h3>${event.detailed_event_name}</h3>
                    ${competitors}
                    <img src="${event.discipline_pictogram}" alt="${event.discipline_name}">
                    <button onclick="addFavorite('sport', '${event.discipline_name}')">Add to Favorites</button>
                `;
                resultsDiv.appendChild(medalElement);
            }
        });
    } catch (error) {
        console.error('Error fetching sport medals:', error);
    }
}

async function fetchAllNations() {
    let allNations = [];
    let currentPage = 1;
    let totalPages = 1;

    try {
        while (currentPage <= totalPages) {
            const response = await fetch(`${apiUrl}/countries?page=${currentPage}`);
            const data = await response.json();
            
            if (!data || !data.data) {
                console.error('Invalid nations data:', data);
                break;
            }

            allNations = allNations.concat(data.data);

            // Update total pages and current page
            totalPages = data.meta.last_page;
            currentPage++;
        }

        populateNationSelect(allNations);
    } catch (error) {
        console.error('Error fetching nations:', error);
    }
}

function populateNationSelect(nations) {
    const nationSelect = document.getElementById('nation-select');
    nationSelect.innerHTML = '<option value="">Select a Nation</option>'; // Reset the options

    // Sort nations alphabetically by name
    nations.sort((a, b) => a.name.localeCompare(b.name)); 

    nations.forEach(nation => {
        const option = document.createElement('option');
        const englishName = countryNameMap[nation.id] || nation.name;
        option.value = nation.id;
        option.text = englishName;
        nationSelect.appendChild(option);
    });
}

// Fetch and display World Bank indicators for the selected nation
async function fetchWorldBankData(countryCode) {
    try {
        const countryListDiv = document.getElementById('country-list');
        countryListDiv.innerHTML = '';

        // Fetch GINI Index data
        const giniResponse = await fetch(buildIndicatorUrl(countryCode, "SI.POV.GINI"));
        const giniData = await giniResponse.json();
        const giniValue = findMostRecentValue(giniData[1]);

        // Fetch CO2 Emissions data
        const co2Response = await fetch(buildIndicatorUrl(countryCode, "EN.ATM.CO2E.PC"));
        const co2Data = await co2Response.json();
        const co2Value = findMostRecentValue(co2Data[1]);

        // Fetch Proportion of Seats Held by Women in National Parliaments
        const womenParliamentResponse = await fetch(buildIndicatorUrl(countryCode, "SG.GEN.PARL.ZS"));
        const womenParliamentData = await womenParliamentResponse.json();
        const womenParliamentValue = findMostRecentValue(womenParliamentData[1]);

        // Fetch Renewable Energy Consumption data
        const renewableEnergyResponse = await fetch(buildIndicatorUrl(countryCode, "EG.FEC.RNEW.ZS"));
        const renewableEnergyData = await renewableEnergyResponse.json();
        const renewableEnergyValue = findMostRecentValue(renewableEnergyData[1]);

        // Fetch Labor Force Participation Rate, Female data
        const femaleLaborResponse = await fetch(buildIndicatorUrl(countryCode, "SL.TLF.CACT.FE.ZS"));
        const femaleLaborData = await femaleLaborResponse.json();
        const femaleLaborValue = findMostRecentValue(femaleLaborData[1]);

        // Fetch Poverty Headcount Ratio at $1.90 a Day
        const povertyResponse = await fetch(buildIndicatorUrl(countryCode, "SI.POV.DDAY"));
        const povertyData = await povertyResponse.json();
        const povertyValue = findMostRecentValue(povertyData[1]);

        // Create a div for the country's indicators
        const countryElement = document.createElement('div');
        countryElement.innerHTML = `
            <h2>${countryCode}</h2>
            <p>GINI Index (Measure of Inequality): ${giniValue}</p>
            <p>CO2 Emissions (Metric Tons per Capita): ${co2Value}</p>
            <p>Proportion of Seats Held by Women in National Parliaments (%): ${womenParliamentValue}</p>
            <p>Renewable Energy Consumption (% of total): ${renewableEnergyValue}</p>
            <p>Labor Force Participation Rate, Female (%): ${femaleLaborValue}</p>
            <p>Poverty Headcount Ratio at $1.90 a Day (% of population): ${povertyValue}</p>
        `;

        countryListDiv.appendChild(countryElement);
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

// Fetch medal statistics for the selected nation
async function fetchNationMedals() {
    const nationId = document.getElementById('nation-select').value;
    if (!nationId) return;

    try {
        const response = await fetch(`${apiUrl}/countries`);
        const data = await response.json();
        console.log('Fetched nation data:', data); // Debug log
        const nation = data.data.find(nation => nation.id === nationId);
        const medalsDiv = document.getElementById('nation-medals');
        medalsDiv.innerHTML = '';

        if (nation) {
            const englishName = countryNameMap[nation.id] || nation.name; // Use mapped name or fallback to original
            const medalElement = document.createElement('div');
            medalElement.classList.add('result');
            medalElement.innerHTML = `
                <img src="${nation.flag_url}" alt="${englishName}">
                <h2>${englishName}</h2>
                <button onclick="addFavorite('nation', '${nationId}')">Add to Favorites</button>
                <button onclick="fetchWorldBankData('${nationId}')">Fetch World Bank Data</button>
            `;
            medalsDiv.appendChild(medalElement);

            // Fetch World Bank Data
            fetchWorldBankData(nationId);
        }
    } catch (error) {
        console.error('Error fetching nation medals:', error);
    }
}

// Add or remove a favorite
function addFavorite(type, id) {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const index = favorites.findIndex(fav => fav.type === type && fav.id === id);

    if (index !== -1) {
        favorites.splice(index, 1); // Remove if already a favorite
    } else {
        favorites.push({ type, id, name: document.querySelector(`#${type}-select option[value="${id}"]`).textContent });
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    displayFavorites();
}

// Display favorite items
function displayFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';

    favorites.forEach(fav => {
        const item = document.createElement('div');
        item.textContent = `${fav.type}: ${fav.name}`;
        favoritesList.appendChild(item);
    });
}

// Initialize the page
fetchAllNations();
fetchSports();
displayFavorites();