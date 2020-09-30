import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { BehaviorSubject, Observable, pipe, of, from, throwError, merge} from 'rxjs';

@Injectable()
export class MockDataService {
    filePath: string;
    constructor() {
        this.filePath = path.resolve(__dirname, './mock-data.json');
        
    }

    readFileFromJSON() {
        fs.exists(this.filePath.toString(), exists => {
            if (exists) {
                fs.readFile(this.filePath.toString(), 'utf-8', (err, data) => {
                    logger.info('file read without parsin', data);
                    this.httpResponseObjectArray = JSON.parse(data).HttpTestResponse;
                    logger.info('array obj is:', this.httpResponseObjectArray);
                    logger.info('file read after parsing', JSON.parse(data));
                    return this.httpResponseObjectArray;
                });
            } else {
                return null;
            }

        });
    }
}