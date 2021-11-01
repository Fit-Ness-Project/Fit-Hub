import { Module } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import { RestaurantsController } from './restaurants.controller';
import {Restaurant } from './entities/restaurant.entity'
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  imports: [TypeOrmModule.forFeature([Restaurant])]
})
export class RestaurantsModule {}
