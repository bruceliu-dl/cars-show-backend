import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [
        {
            "brand": "Lexus CT200",
            "year": "2019",
            "maker": "Lexus",
            "makerYear": "2018",
            "price": "$55000.00"
        },
        {
            "brand": "BMW X6",
            "year": "2020",
            "maker": "BMW",
            "makerYear": "2019",
            "price": "$60000.00"
        },
        {
            "brand": "Buick GT",
            "year": "2020",
            "maker": "Buick",
            "makerYear": "2019",
            "price": "$40000.00"
        },
        {
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
}
