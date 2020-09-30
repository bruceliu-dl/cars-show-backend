import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [
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

    create(car: Cars) {
        this.cars.push(car);
    }

    findAll(): Cars[] {
        return this.cars;
    }

    updateCar(id: number, uptedInfor: any) {
        if (Number(id) >= 0) {
            for(let uptObjKey in Object.keys(uptedInfor)) {
                this.cars[Number(id)][uptObjKey] = uptedInfor[uptObjKey];
            }
        }
        return this.cars;
    }

    deleteCar(id: number): Cars[] {
        if (id >= 0) {
            console.log("start to delete" + id);
            for(let i = 0; i< this.cars.length; i++) {
                console.log('cars[0].id' + (this.cars[0].id == id))
                if (this.cars[i].id == id) {
                    this.cars.splice(i, 1);
                }
            }
        }
        return  this.cars;
    }
}
