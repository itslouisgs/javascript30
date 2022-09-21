const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

const searchInput = document.querySelector(".search");
const suggestionsList = document.querySelector(".suggestions")

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data));

const formatNumberWithCommas = number => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const findMatches = (input, cities) => {
    const regex = new RegExp(input, "gi");
    
    return cities.filter(({city, state}) => city.match(regex) || state.match(regex));
}

const displaySuggestions = input => {
    const matches = findMatches(input.value, cities)

    suggestionsList.innerHTML = matches.map(match =>{
        return `
            <li>
                <span>${match.city}, ${match.state}</span>
                <div class="button" data-title="${match.city+", "+match.state}" data-population=${formatNumberWithCommas(match.population)} data-longitude=${match.longitude} data-latitude=${match.latitude}>Details</div>
            </li>
        `;
    }).join('');
};

searchInput.addEventListener("keyup", () => displaySuggestions(searchInput));
searchInput.addEventListener("change", () => displaySuggestions(searchInput));

suggestionsList.addEventListener("click", (e) =>{
    const target = e.target;

    if (target.classList.contains("button"))
        alert(`${target.dataset.title}\nPopulation: ${target.dataset.population}\nLongitude: ${target.dataset.longitude}\nLatitude: ${target.dataset.latitude}`)
})