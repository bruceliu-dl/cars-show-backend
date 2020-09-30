import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { CarsDto } from 'src/dtos/cars-dto';

@Controller('cars')
export class CarsController {
    @Post()
    async createNewCar(@Body() carsDto: CarsDto) {
        return 'This action adds a new cat';
    }

    @Get() 
    findAll(@Query() query: ListAllEntities) {
        return `This action returns all cats (limit: ${query.limit} items)`;
    }
}
