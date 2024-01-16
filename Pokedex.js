const pokedex = document.querySelector('#pokedex');

const fetchPokemons = async (URL) => {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
    
};

const fetchAllPokemons = async () => {
    const pokemons = [];

    for (let i = 1; i <= 151; i++) {
        const pokemonData = await fetchPokemons(`https://pokeapi.co/api/v2/pokemon/${i}`);
        pokemons.push(pokemonData);
    }
console.log(pokemons)
    renderPokemons(pokemons);
    ;return pokemons;
}

const renderPokemons = (pokemons) => {
    let html = "";
    console.log(pokemons);

    for (const pokemon of pokemons) {
        html += `<li>
                    <article class="card">
                        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                        <h2>${pokemon.name}</h2>
                    </article>
                </li>`;
    }

    pokedex.innerHTML = html;
};

fetchAllPokemons();

