export default class swapiService {
    _baseUrl = 'https://swapi.dev/api/';

    // !declaration !native-fetch !promises-then-thenHell
    getAllResources () {
        console.log('getAllResources');
        fetch(this._baseUrl)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            });
    };

    // !expression
    getAllCharecters () {
        console.log('test222');
    }
}