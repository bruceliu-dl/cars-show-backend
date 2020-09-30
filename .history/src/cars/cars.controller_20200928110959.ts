import { Controller, Get, Post } from '@nestjs/common';

@Controller('cars')
export class CarsController {
    @Post()
    createNewCar(): string {
        return 'This action adds a new cat';
    }

    @Get() 
    findAll(): string {
        return 'This action returns all cats';
    }
}
