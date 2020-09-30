import { Injectable } from '@nestjs/common';
import { debug } from 'console';
import * as fs from 'fs';
import * as path from 'path';
import { Cars } from 'src/interface/car.interface';

@Injectable()
export class MockDataService {
    filePath: string;
    jsonData: Cars;
    constructor() {
        this.filePath = './mock-data.json';
    }

    readFileFromJSON() {
        debugger;
        return new Promise(function(resolve, reject) {
            fs.readFile(this.filePath.toString(), 'utf-8', (err, data) => {
                debugger;
                if(err) {
                    reject(err);
                } else {
                    this.jsonData = JSON.parse(data);
                    resolve(this.jsonData);
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