import { Injectable } from '@nestjs/common';
import { Cars } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [];

    create(car: Cars) {
        this.cars.push(car);
    }

    findAll(): Cars[] {
        return this.cars;
    }
}
