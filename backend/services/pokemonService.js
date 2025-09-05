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
            flavor_text_entries: data_especie.flavor_text_entries
        });

        return pokemon;
    }else {
        return null;
    }
}

module.exports = {objetoPokemon};