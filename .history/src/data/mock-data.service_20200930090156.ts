import * as 
class MockDataService {
    constructor() {}

    const FILE_NAME = 'data-read.json';

    const readFileAsync = () => {
    fs.readFile(FILE_NAME, (error, data) => {
        console.log('Async Read: starting...');
        if (error) {
        console.log('Async Read: NOT successful!');
        console.log(error);
        } else {
        try {
            const dataJson = JSON.parse(data);
            console.log('Async Read: successful!');
            console.log(dataJson);
        } catch (error) {
            console.log(error);
        }
        }
    });
    };
}


