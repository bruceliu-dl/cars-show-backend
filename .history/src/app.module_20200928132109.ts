import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule} from './cars/cars.module'

@Module({
  imports: [],
  controllers: [AppController, CarsController],
  providers: [AppService, CarsService],
})
export class AppModule {}
