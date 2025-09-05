//Backend/Server.js
const express = require("express"); //Framework que nos permite crear un servidor web de forma sencilla.
const cors = require ("cors");
const pokemonRoutes = require("./routes/pokemonRoutes");

const app = express(); //Representa nuestro servidor
const PORT = process.env.PORT || 3000; //Puerto donde correra servidor

app.use(cors({origin: "http://localhost:5173"})); // permite peticiones desde tu React (Vite)

//permitir JSON
//Esto le dice a Express que acepte y entienda datos en formato JSON en las peticiones.
//Es útil si luego quieres enviar datos desde el frontend (por ejemplo, un formulario o filtros).
app.use(express.json());

//Ruta de prueba
//app.get() → define una ruta HTTP GET.
// / → la ruta raíz del servidor (http://localhost:3000/).
//req → información que llega del cliente (petición).
//res → respuesta que enviamos al cliente.
//res.send() → envía texto al navegador.
app.get("/", (req, res) => {
    res.send("Servidor de la Pokédex funcionando");
});

//Rutas de pokemon
app.use("/pokemon", pokemonRoutes);

//app.listen() → pone el servidor en línea en el puerto indicado.
//La función dentro (console.log) se ejecuta cuando el servidor ya está listo.
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});