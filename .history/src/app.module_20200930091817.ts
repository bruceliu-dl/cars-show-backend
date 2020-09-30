import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule} from './cars/cars.module';
import { MockDataService} from './data/mock-data.service';

@Module({
  imports: [CarsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
