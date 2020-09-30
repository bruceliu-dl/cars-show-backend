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
        debugger;
        this.jsonData = fs.readFileSync(path.resolve(__dirname, '../src/data/mock-data.json').toString(), {encoding:'utf8'})
        return of(JSON.parse(this.jsonData));
    }

    writeFileToJSON(data: Cars): Observable<any> {
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