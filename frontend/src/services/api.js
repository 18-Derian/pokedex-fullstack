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

export async function getPokemonList(url = "http://localhost:3001/api/pokemon") {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Error al obtener la lista");
        return await response.json();
    } catch (error) {
        console.error(error);
        return {
            results: [],
            next: null,
            previous: null
        };
    }
}