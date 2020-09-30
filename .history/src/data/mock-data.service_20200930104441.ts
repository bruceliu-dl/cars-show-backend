import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cars } from 'src/interface/car.interface';
import * as Rx from 'rxjs/Rx'
import { Observable } from 'rxjs';

@Injectable()
export class MockDataService {
    constructor() {}

    readFileFromJSON(): Observable {
        fs.readFile(path.resolve(__dirname, '../src/data/mock-data.json').toString(), 'utf-8', (err, data) => {
            if(err) {
                return Rx.Observable.of();
            } else {
                let jsonData = JSON.parse(data);
                
            }
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