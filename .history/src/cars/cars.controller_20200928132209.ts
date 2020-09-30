import { Body, Controller, Get, Post, Put, Delete, Query, Param } from '@nestjs/common';
import { CarsDto } from '../dtos/cars-dto';
import { UpdateCarsDto } from  '../dtos/update-cars-dto';
import { CarsService } from  './cars.service';
import { Cars } from  '../interface/car.interface';


@Controller('cars')
export class CarsController {
    constructor(private carsService: CarsService) {}

    @Post()
    async createNewCar(@Body() carsDto: CarsDto) {
        this.carsService.create(carsDto);
    }

    @Get() 
    async findAll(): Promise<Cars[]> {
        return this.carsService.findAll();
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCarsDto: UpdateCarsDto) {
        return `This action updates a #${id} car`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return `This action removes a #${id} car`;
    }
}
