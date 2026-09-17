const pokemonName = document.querySelector('.pokemon-name');
const pokemonNumber = document.querySelector('.pokemon-number');
const pokemonImage = document.querySelector('.pokemon-image');
const searchpokemon = document.querySelector('.input-search');
const form = document.querySelector('.form');
const buttons = document.querySelectorAll('.buttons button')





let searchPokemon = 1;

const fetchpokemon = async (pokemon) => {
    const APIresponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    );

    const pokemonData = await APIresponse.json();

    return pokemonData;
};

const renderpokemon = async (pokemon) => {
    const pokemonData = await fetchpokemon(pokemon);

    pokemonName.innerHTML = pokemonData.name;
    pokemonNumber.innerHTML = pokemonData.id;
    pokemonImage.src = pokemonData['sprites']['versions']['generation-v']
    ['black-white']['animated']['front_default'];
    pokemonImage.alt = pokemonData.name;

};

const addEventListeners = () => {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        searchPokemon = searchpokemon.value;
        renderpokemon(searchPokemon);
    });
};

buttons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.id === 'prev') {
            searchPokemon--;

            if (searchPokemon < 1) {
                searchPokemon = 1;
            }

        } else if (button.id === 'next') {
            searchPokemon++;
        }
        
        renderpokemon(searchPokemon);
    });
});



addEventListeners();

renderpokemon(searchPokemon);
