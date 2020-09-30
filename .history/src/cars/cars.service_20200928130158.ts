import { Injectable } from '@nestjs/common';

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
