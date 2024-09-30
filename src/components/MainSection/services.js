import swapiService, { getAllCharacters } from "../../services/swapiService";

export const getCharacters = async () => {
    const swapi = new swapiService();
    const data = await swapi.fetchAllCharecters();
    const characters = getAllCharacters(data);

    return characters;
};