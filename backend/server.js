//Backend/Server.js
const express = require("express");
const cors = require("cors");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express();

// habilitar CORS
app.use(cors());

app.use("/api/pokemon", pokemonRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});