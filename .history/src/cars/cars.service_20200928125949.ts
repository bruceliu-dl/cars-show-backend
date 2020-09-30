import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsService {
    private readonly cars: Cars[] = [];
}
