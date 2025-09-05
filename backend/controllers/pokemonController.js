const {objetoPokemon} = require("../services/pokemonService");

async function getPokemon(req, res) {
    const {name} = req.params;
    try {
        const pokemon = await objetoPokemon(name);

        if(!pokemon){
            return res.status(404).json({error: "Pokemon no encontrado"});
        }

        res.json(pokemon);

    } catch(error) {
        res.status(404).json({error:"Error en el servidor"});
    }
}

module.exports = {getPokemon};

