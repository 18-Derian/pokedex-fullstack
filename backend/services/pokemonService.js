const axios = require("axios");
const Pokemon = require("../models/Pokemon");

async function fetchPokemon(name) {

    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = response.data;
        return data;
    } catch (error) {
        return null;
    }
}

async function mostrarEspecie(url) {
    const response = await axios.get(url);
    const data = response.data;
    return data;
}

async function objetoPokemon(datoPokemon) {
    const data = await fetchPokemon(datoPokemon);
    if (data) {
        const data_especie = await mostrarEspecie(data.species.url);

        let descripciones = data_especie.flavor_text_entries
            .filter(entry => entry.language?.name === 'es')
            .map(d => d.flavor_text.replace(/\n|\f/g, " "));

        if (descripciones.length === 0) {
            descripciones = data_especie.flavor_text_entries
                .filter(entry => entry.language?.name === 'en')
                .map(d => d.flavor_text.replace(/\n|\f/g, " "))
        }

        descripciones = [...new Set(descripciones)];

        if (descripciones.length === 0) {
            descripciones = "No se encontraron descripciones para este pokémon";
        }

        const pokemon = new Pokemon({
            abilities: data.abilities,
            height: data.height,
            id: data.id,
            name: data.name,
            sprites: data.sprites,
            stats: data.stats,
            types: data.types,
            weight: data.weight,
            color: data_especie.color,
            flavor_text_entries: descripciones
        });

        return pokemon;
    } else {
        return null;
    }
}

module.exports = {
    objetoPokemon
};