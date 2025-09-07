export async function getPokemon(name) {
    try {
        const response = await fetch(`http://localhost:3001/api/pokemon/${name}`);
        if (!response.ok) throw new Error("No se pudo obtener el Pokémon");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
}