import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private cars: Cars[] = [
        {   
            "id": 0,
            "brand": "Lexus CT200",
            "year": "2019",
            "maker": "Lexus",
            "makerYear": "2018",
            "price": "$55000.00"
        },
        {   
            "id": 1,
            "brand": "BMW X6",
            "year": "2020",
            "maker": "BMW",
            "makerYear": "2019",
            "price": "$60000.00"
        },
        {
            "id": 2,
            "brand": "Buick GT",
            "year": "2020",
            "maker": "Buick",
            "makerYear": "2019",
            "price": "$40000.00"
        },
        {
            "id": 3,
            "brand": "Honda CR-V",
            "year": "2019",
            "maker": "Honda",
            "makerYear": "2018",
            "price": "$90000.00"
        }
    ];

    objKeyName = ['id', 'brand', 'year', 'maker', 'makerYear', 'price'];

    create(car: Cars) {
        this.cars.push(car);
    }

    findAll(): Cars[] {
        return this.cars;
    }

    updateCar(id: number, uptedInfor: any) {
        if (id >= 0) {
            console.log("----------- id --------- " + id);
            console.log("----------- uptedInfor --------- " + uptedInfor);
            for(let uptObjKey in Object.keys(uptedInfor)) {
                console.log("----------- uptObjKey --------- " + uptObjKey);
                this.cars[id][uptObjKey] = uptedInfor[uptObjKey];
            }
        }
        return this.cars;
    }

    deleteCar(id: number): Cars[] {
        if (id >= 0) {
            for(let i = 0; i< this.cars.length; i++) {
                if (this.cars[i].id == id) {
                    this.cars.splice(i, 1);
                }
            }
        }
        return  this.cars;
    }
}
