import { getAllResources } from "./swapiService";

describe('[SwapiService] - getAllResources test', () => {
    const testObj = {
        23: 'hello',
        a: 123,
        name: 'Kris',
    }

    test('should return an array', () => {
        const result = getAllResources(testObj);

        expect(Array.isArray(result)).toBe(true);
    });

    test('should return array with correct values', () => {
        const result = getAllResources(testObj);

        expect(result[0]).toEqual('23');
        expect(result[1]).toEqual('a');
        expect(result[2]).toEqual('name');
    });
});

