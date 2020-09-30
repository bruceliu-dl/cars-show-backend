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
    async update(@Param('id') id: number, @Body() updateCarsDto: UpdateCarsDto) {
        return this.carsService.updateCar(id, updateCarsDto)
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.carsService.deleteCar(id);
    }
}
