import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [];

    create(car: Car) {
        this.cars.push(car);
    }

    finalAll(): Car[] {
        return this.cars;
    }
}
