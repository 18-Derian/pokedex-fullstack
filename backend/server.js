//Backend/Server.js
const express = require("express");
const axios = require("axios");
const app = express();
const PORT = 3000;

//permitir JSON
app.use(express.json());

//Ruta de prueba
app.get("/", (req, res) => {
    res.send("Servidor de la Pokédex funcionando");
});

//nueva ruta para obtener un Pokémon por nombre o id
app.get("/pokemon/:name", async (req, res) => {
    const {name} = req.params;
    try{
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        res.json(response.data);
    }catch(error){
        res.status(404).json({error: "Pokémon no encontrado"});
    }
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});