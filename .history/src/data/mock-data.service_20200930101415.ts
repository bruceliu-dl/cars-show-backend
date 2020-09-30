import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cars } from 'src/interface/car.interface';

@Injectable()
export class MockDataService {
    filePath: string;
    jsonData: Cars;
    constructor() {}

    readFileFromJSON() {
        return new Promise(function(resolve, reject) {
            fs.readFile(path.resolve(__dirname, '../src/data/mock-data.json').toString(), 'utf-8', (err, data) => {
                if(err) {
                    reject(err);
                } else {
                    let jsonData = JSON.parse(data);
                    resolve(jsonData);
                }
            });
        });
    }

    writeFileToJSON(data: Cars) {
        return new Promise(function(resolve, reject) {
            fs.writeFile(this.filePath.toString(), JSON.stringify(data), err => {
                if(err) {
                    reject(err);
                } else {
                    resolve(0);
                }
            });
        }); 
    }
}