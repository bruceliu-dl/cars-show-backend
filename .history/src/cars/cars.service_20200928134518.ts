import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [
        {
            "brand": "Lexus",
            "year": "2019",
            "maker": "Lexus",
            "makerYear": "2018",
            "price": "$55000.00"
        },
        {
            "brand": "BMW",
            "year": "2020",
            "maker": "BMW",
            "makerYear": "2019",
            "price": "$60000.00"
        },
        {
            "brand": "Lexus",
            "year": "2019",
            "maker": "Lexus",
            "makerYear": "2018",
            "price": "$55000.00"
        },
        {
            "brand": "Lexus",
            "year": "2019",
            "maker": "Lexus",
            "makerYear": "2018",
            "price": "$55000.00"
        }
    ];

    create(car: Cars) {
        this.cars.push(car);
    }

    findAll(): Cars[] {
        return this.cars;
    }
}
