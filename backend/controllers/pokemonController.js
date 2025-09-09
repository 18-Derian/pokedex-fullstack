const axios = require("axios");
const {
    objetoPokemon
} = require("../services/pokemonService");

async function getPokemon(req, res) {
    const {
        name
    } = req.params;
    try {
        const pokemon = await objetoPokemon(name);

        if (!pokemon) {
            return res.status(404).json({
                error: "Pokemon no encontrado"
            });
        }

        res.json(pokemon);

    } catch (error) {
        res.status(404).json({
            error: "Error en el servidor"
        });
    }
}

async function getPokemons(req, res) {
    const {
        offset = 0, limit = 20
    } = req.query; // soporte para paginación
    try {
        const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
        );
        res.json(response.data);
    } catch (error) {
        res.status(500).json({
            error: "Error al obtener la lista de pokemons"
        });
    }
}

module.exports = {
    getPokemon,
    getPokemons
};