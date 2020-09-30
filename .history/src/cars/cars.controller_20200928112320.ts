import { Body, Controller, Get, Post } from '@nestjs/common';
import { CarsDto } from 'src/dtos/cars-dto';

@Controller('cars')
export class CarsController {
    @Post()
    async createNewCar(@Body() carsDto: CarsDto) {
        return 'This action adds a new cat';
    }

    @Get() 
    findAll(): string {
        return 'This action returns all cats';
    }
}
