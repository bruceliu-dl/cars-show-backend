import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { BehaviorSubject, Observable, pipe, of, from, throwError, merge} from 'rxjs';
import { Cars } from 'src/interface/car.interface';

@Injectable()
export class MockDataService {
    filePath: string;
    jsonData: Cars;
    constructor() {
        this.filePath = path.resolve(__dirname, './mock-data.json');
        
    }

    readFileFromJSON() {
        fs.exists(this.filePath.toString(), exists => {
            if (exists) {
                fs.readFile(this.filePath.toString(), 'utf-8', (err, data) => {
                    this.httpResponseObjectArray = JSON.parse(data);
                    return this.httpResponseObjectArray;
                });
            } else {
                return null;
            }

        });
    }
}