const express = require ("express");
const {getPokemon, getPokemons} =require("../controllers/pokemonController");

const router = express.Router();


router.get("/pokemons", getPokemons);
router.get("/pokemon/:name", getPokemon);

module.exports = router;