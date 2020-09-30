import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { BehaviorSubject, Observable, pipe, of, from, throwError, merge} from 'rxjs';
import { map, filter, scan, take, debounce, switchMap, retry, catchError, mergeMap, delay, zip, tap, mapTo } from 'rxjs/operators';

@Injectable()
export class MockDataService {
    serviceSubject: BehaviorSubject<HttpResponseModel[]>;
    filePath: string;
    httpResponseObjectArray: HttpResponseModel[];
    constructor() {
        this.serviceSubject = new BehaviorSubject<HttpResponseModel[]>([]);
        this.filePath = path.resolve(__dirname, './../../shared/assets/httpTest.json');
        this.setSubject();
    }


 readFileFromJSON() {
      this.readFileFromJsonSync();
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


getObservable(): Observable<HttpResponseModel[]> {
       // create an observable
        // return Observable.create(observer => {
        //     observer.next(this.readFileFromJSON());
        // });

        return of(this.readFileFromJsonSync()).pipe(map(data => {
            logger.info('inside obs methid', data);
            return data;
        }));

    }

    setSubject() {
        this.getObservable().subscribe(data => {
            logger.info('data before setting in sub', data);
            this.serviceSubject.next(data);
        });
    }
}