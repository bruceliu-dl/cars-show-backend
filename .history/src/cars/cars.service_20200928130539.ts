import { Injectable } from '@nestjs/common';
import { Car } from '../interface/car.interface'

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [];

    create(car: Cat) {
        this.cars.push(car);
    }

    finalAll(): Cat[] {
        return this.cars;
    }
}
