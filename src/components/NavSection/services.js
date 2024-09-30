import swapiService, { getAllResources } from "../../services/swapiService";

export const getResources = async () => {
    const swapi = new swapiService();
    const data = await swapi.fetchAllResources();
    const resources = getAllResources(data);
    return resources;
};