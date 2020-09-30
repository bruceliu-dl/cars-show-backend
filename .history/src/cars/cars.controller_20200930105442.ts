import { Body, Controller, Get, Post, Put, Delete, Query, Param } from '@nestjs/common';
import { CarsDto } from '../dtos/cars-dto';
import { UpdateCarsDto } from  '../dtos/update-cars-dto';
import { CarsService } from  './cars.service';
import { Cars } from  '../interface/car.interface';


@Controller('cars') 
export class CarsController {
    constructor(private carsService: CarsService) {}

    //add a new car record
    // @Post()
    // async createNewCar(@Body() carsDto: CarsDto) {
    //     console.log("start to add a new car");
    //     return this.carsService.create(carsDto);
    // }

    //get all cars record
    @Get() 
    async findAll() {
        return this.carsService.findAll();
    }

    //update one car record by id
    // @Put(':id')
    // async update(@Param('id') id: number, @Body() updateCarsDto: UpdateCarsDto) {
    //     return this.carsService.updateCar(id, updateCarsDto)
    // }

    //delete one car record by id
    // @Delete(':id')
    // async remove(@Param('id') id: number): Promise<Cars[]> {
    //     return this.carsService.deleteCar(id);
    // }
}
