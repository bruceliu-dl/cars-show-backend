import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { Cars } from 'src/interface/car.interface';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class MockDataService {
    jsonData: any;
    constructor() {}

    readFileFromJSON(): Observable<any> {
        fs.readFile(path.resolve(__dirname, '../src/data/mock-data.json').toString(), 'utf-8', (err, data) => {
            if(err) {
                return map(err => of(err));
            } else {
                this.jsonData = JSON.parse(data);
                return map(this.jsonData => of(this.jsonData))
            }
        });
        return 
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