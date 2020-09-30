import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { MockDataService } from '../data/mock-data.service'; 

@Module({
  controllers: [CarsController],
  providers: [CarsService],
  exports: [CarsService]
})
export class CarsModule{}