import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'
import { MockDataService } from '../data/mock-data.service';

@Injectable()
export class CarsService {
    constructor(private _mockDataService: MockDataService) {}
    private cars: any;
    objKeyName = ['id', 'brand', 'year', 'maker', 'makerYear', 'price'];

    //create a new car
    create(car: Cars) {
        this._mockDataService.readFileFromJSON().subscribe(d => {
            this.cars = d.data;
            this.cars.push(car);
        });
        this._mockDataService.writeFileToJSON(this.cars)
        return  this.cars;
    }

    //get all cars
    findAll() {
        // return this.cars;
        this.cars = this._mockDataService.readFileFromJSON();
        return this.cars;
    }

    //update car by id
    updateCar(id: number, uptedInfor: any) {
        this._mockDataService.readFileFromJSON().subscribe(d => {
            this.cars = d.data;
            if (id >= 0) {
                for(let name of this.objKeyName) {
                    this.cars[id][name] = uptedInfor[name];
                }
            }
        });
        this._mockDataService.writeFileToJSON(this.cars)
        return  this.cars;
    }

    //delete car by id
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
