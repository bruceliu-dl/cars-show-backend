import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'
import { MockDataService } from '../data/mock-data.service';

@Injectable()
export class CarsService {
    constructor(private _mockDataService: MockDataService) {}
    private cars: Cars[];
    objKeyName = ['id', 'brand', 'year', 'maker', 'makerYear', 'price'];

    // create(car: Cars) {
    //     this.cars.push(car);
    //     return this.cars;
    // }

    findAll() {
        // return this.cars;
        return this._mockDataService.readFileFromJSON()
    }

    // updateCar(id: number, uptedInfor: any) {
    //     if (id >= 0) {
    //         for(let name of this.objKeyName) {
    //             this.cars[id][name] = uptedInfor[name];
    //         }
    //     }
    //     return this.cars;
    // }

    deleteCar(id: number): Cars[] {
        this._mockDataService.readFileFromJSON().subscribe(d => {
            this.cars = d.data;
            if (id >= 0) {
                for(let i = 0; i< this.cars.length; i++) {
                    if (this.cars[i].id == id) {
                        this.cars.splice(i, 1);
                    }
                }
            }
        });
        this._mockDataService.writeFileToJSON(this.cars)
        return  this.cars;
    }
}
