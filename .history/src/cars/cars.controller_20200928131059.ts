import { Body, Controller, Get, Post, Put, Delete, Query, Param } from '@nestjs/common';
import { CarsDto } from '../dtos/cars-dto';
import { UpdateCarsDto } from  '../dtos/update-cars-dto';
import { ListAllEntities } from  '../dtos/list-all-entities';
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
    async findAll(@Query() query: ListAllEntities) {
        return `This action returns all cars`;
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `This action returns a #${id} car`;
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
