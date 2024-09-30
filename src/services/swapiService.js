export default class swapiService {
    _baseUrl = 'https://swapi.dev/api/';

    // !declaration !native-fetch !promises-then-thenHell
    fetchAllResources () {
        return fetch(this._baseUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                return data;
            });
    };

    // !expression
    fetchAllCharecters = async () => {
        const response = await fetch(`${this._baseUrl}people/`);
        const body = await response.json();
        return body.results;
    }
};

export const getAllResources = (data) => {
    return Object.keys(data);
};

export const getAllCharacters = (data) => {
    const characters = data.map(i => {
        return {
            id: i.url.match(/\/([0-9]*)\/$/)[1],
            url: i.url,
            name: i.name,
            eyeColor: i.eye_color,
            mass: i.mass,
        }
    });
    
    return characters;
}